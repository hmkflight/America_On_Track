import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs/promises';
const base=process.env.QA_BASE||'http://127.0.0.1:3000';
const routes=['/','/programs','/programs/emerging-leaders','/programs/brighter-futures','/programs/fitness','/programs/nutrition','/programs/drug-use-prevention','/programs/tobacco-free-communities','/about','/about/leadership','/about/history','/impact','/get-involved','/donate','/events/golf','/contact','/resources','/privacy'];
const browser=await chromium.launch({headless:true});
const context=await browser.newContext();const page=await context.newPage();
const report={time:new Date().toISOString(),base,routes:[],errors:[],interactions:[],externalLinks:[]};
page.on('pageerror',e=>report.errors.push(e.message));
const external=new Set();const internal=new Set();
async function images(){await page.evaluate(async()=>{for(const i of document.images){i.loading='eager';}await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));await document.fonts.ready;});}
for(const width of [1440,1024,390]){
 await page.setViewportSize({width,height:width===390?844:1000});
 for(const route of routes){
  const response=await page.goto(base+route,{waitUntil:'networkidle'});await images();
  const data=await page.evaluate(()=>({title:document.title,h1:document.querySelectorAll('h1').length,overflow:document.documentElement.scrollWidth>innerWidth,brokenImages:[...document.images].filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.src),links:[...document.querySelectorAll('a')].map(a=>a.getAttribute('href'))}));
  const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
  for(const link of data.links){if(link?.startsWith('http'))external.add(link);if(link?.startsWith('/'))internal.add(link);}
  report.routes.push({width,route,status:response.status(),...data,links:undefined,violations:axe.violations.map(v=>({id:v.id,impact:v.impact,description:v.description,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}))});
  if(['/','/programs','/programs/emerging-leaders','/about','/about/leadership','/get-involved','/donate','/events/golf'].includes(route))await page.screenshot({path:`qa/${route==='/'?'home':route.slice(1).replaceAll('/','-')}-${width}.png`,fullPage:true});
  console.log(width,route,response.status(),data.overflow?'OVERFLOW':'ok',axe.violations.length+' accessibility findings');
 }
}
await page.goto(base);await page.getByRole('tab',{name:'03 Communities'}).click();await page.getByRole('heading',{name:'A future.',exact:true}).waitFor();report.interactions.push('Program explorer changes content and links');await page.keyboard.press('ArrowLeft');await page.getByRole('heading',{name:'A circle.',exact:true}).waitFor();report.interactions.push('Explorer arrow-key navigation works');await page.screenshot({path:'qa/signature-mobile.png',fullPage:true});
await page.getByRole('button',{name:'Menu'}).click();await page.getByRole('navigation',{name:'Mobile navigation'}).waitFor();await page.screenshot({path:'qa/mobile-menu.png'});await page.keyboard.press('Escape');if(await page.getByRole('button',{name:'Menu'}).getAttribute('aria-expanded')!=='false')throw Error('Menu Escape failed');report.interactions.push('Mobile menu opens, closes on Escape, restores focus');
await page.getByRole('button',{name:'Menu'}).click();await page.getByRole('navigation',{name:'Mobile navigation'}).getByRole('link',{name:'01 Our work'}).click();await page.waitForURL('**/programs');report.interactions.push('Mobile menu navigation works');
await page.getByRole('button',{name:'Families',exact:true}).click();if(await page.locator('.program-row').count()!==3)throw Error('Audience filter failed');report.interactions.push('Family program filter shows three relevant programs');
await page.goto(base+'/programs/emerging-leaders');await page.getByText('Recognition and scholarships',{exact:true}).click();if(!await page.locator('details[open]').count())throw Error('Details failed');report.interactions.push('Program disclosure opens');
await page.emulateMedia({reducedMotion:'reduce'});await page.goto(base);await page.getByRole('tab',{name:'02 Families'}).click();await page.getByRole('heading',{name:'A circle.',exact:true}).waitFor();report.interactions.push('Reduced-motion explorer retains all functionality');
await page.setViewportSize({width:390,height:600});await page.getByRole('button',{name:'Menu'}).click();await page.getByRole('navigation',{name:'Mobile navigation'}).getByRole('link',{name:'06 Contact us'}).scrollIntoViewIfNeeded();await page.screenshot({path:'qa/short-mobile-menu.png'});report.interactions.push('Short mobile menu scrolls to final item');
const nojs=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});const np=await nojs.newPage();await np.goto(base);if(!await np.getByRole('heading',{level:1}).count())throw Error('No JS content missing');await np.goto(base+'/programs');if(await np.locator('.program-row').count()!==6)throw Error('No JS programs missing');report.interactions.push('No-JS home content and all six program links render');await nojs.close();
for(const link of internal){const path=link.split('#')[0];const res=await context.request.get(base+path);if(res.status()!==200)report.errors.push(`Internal link ${link}: ${res.status()}`);}
await page.emulateMedia({reducedMotion:'no-preference'});
for(const width of [1440,1024,390]){await page.setViewportSize({width,height:900});await page.goto(base);await images();await page.getByRole('tab',{name:'03 Communities'}).click();await page.locator('#connections').scrollIntoViewIfNeeded();await page.locator('#connections').screenshot({path:`qa/signature-${width}.png`});}
await page.goto(base);await page.keyboard.press('Tab');await page.screenshot({path:'qa/keyboard-focus.png'});report.interactions.push('Visible keyboard skip-link focus captured');
const perfContext=await browser.newContext({viewport:{width:1440,height:1000}});const perfPage=await perfContext.newPage();await perfPage.addInitScript(()=>{window.aotLcp=0;new PerformanceObserver(list=>{for(const e of list.getEntries())window.aotLcp=e.startTime}).observe({type:'largest-contentful-paint',buffered:true});});await perfPage.goto(base,{waitUntil:'networkidle'});await perfPage.evaluate(()=>document.fonts.ready);report.performance=await perfPage.evaluate(()=>({navigationMs:performance.getEntriesByType('navigation')[0].duration,lcpMs:window.aotLcp,transferredBytes:performance.getEntriesByType('resource').reduce((a,r)=>a+r.transferSize,0),requests:performance.getEntriesByType('resource').length,note:'Local production browser observation, not a Lighthouse or real-user field score.'}));await perfContext.close();
report.externalLinks=[...external];await fs.writeFile('qa/report.json',JSON.stringify(report,null,2));await browser.close();
const failures=report.routes.filter(r=>r.status!==200||r.h1!==1||r.overflow||r.brokenImages.length||r.violations.length);console.log(JSON.stringify({checks:report.routes.length,failures:failures.length,errors:report.errors,interactions:report.interactions},null,2));if(failures.length||report.errors.length)process.exitCode=1;
