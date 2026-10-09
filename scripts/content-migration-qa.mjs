import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs/promises';
const base=process.env.QA_BASE||'http://127.0.0.1:3026';
const articles=JSON.parse(await fs.readFile('src/lib/articles.json','utf8'));
const legacy=JSON.parse(await fs.readFile('src/lib/legacy-routes.json','utf8'));
const report={base,pages:[],redirects:[],links:[],errors:[],checks:[]};
const browser=await chromium.launch();const context=await browser.newContext();const page=await context.newPage();
page.on('pageerror',e=>report.errors.push(e.message));
const routes=['/resources','/privacy','/privacy/sms','/events/golf',...articles.map(a=>'/resources/'+a.slug)];
const allLinks=new Set();
await fs.mkdir('qa/content-migration',{recursive:true});
for(const width of [1440,1024,390]){
 await page.setViewportSize({width,height:width===390?844:1000});
 for(const route of routes){
  const response=await page.goto(base+route);await page.evaluate(()=>document.fonts.ready);
  const data=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,oldLinks:[...document.querySelectorAll('a[href]')].map(a=>a.href).filter(h=>/^https?:\/\/(www\.)?americaontrack\.org(?:\/|$)/.test(h)),h1:document.querySelectorAll('h1').length,links:[...document.querySelectorAll('a[href]')].map(a=>a.getAttribute('href')),badAnchors:[...document.querySelectorAll('a[href^="#"]')].map(a=>a.hash).filter(hash=>!document.getElementById(hash.slice(1)))}));
  data.links.forEach(h=>allLinks.add(h));delete data.links;
  const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
  report.pages.push({width,route,status:response.status(),...data,violations:axe.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)}))});
  if([1440,390].includes(width))await page.screenshot({path:`qa/content-migration/${route.slice(1).replaceAll('/','-')}-${width}.png`,fullPage:true});
  console.log(width,route,response.status(),axe.violations.length,data.overflow?'OVERFLOW':'');
 }
}
for(const [old,destination] of Object.entries(legacy)){
 const r=await fetch(base+'/'+old,{redirect:'manual'});const location=r.headers.get('location');report.redirects.push({old,status:r.status,location,pass:r.status===308&&location===destination});
}
for(const href of allLinks){
 if(href.startsWith('/')){
  const response=await fetch(base+href);report.links.push({href,status:response.status});
 }
}
await page.setViewportSize({width:390,height:568});
await page.goto(base+'/resources');await page.getByRole('searchbox').fill('Terry');await page.getByRole('link',{name:/Terry Thompson · biography/}).click();
report.checks.push({name:'Search to biography',pass:(await page.locator('h1').textContent())==='Terry Thompson'});
await page.locator('.article-contents a').nth(1).click();await page.waitForTimeout(700);
report.checks.push({name:'Article contents anchor',pass:page.url().endsWith('#part-2')});
await page.goto(base+'/resources/tobacco-policies-protect-our-communities');
report.checks.push({name:'Short mobile no overflow',pass:await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)});
const nojs=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});const n=await nojs.newPage();await n.goto(base+'/resources/awards');
report.checks.push({name:'Complete article without JS',pass:await n.getByText(/Julie Mayer Award/).isVisible()});await nojs.close();
await browser.close();
await fs.writeFile('qa/content-migration/report.json',JSON.stringify(report,null,2));
const failed=report.pages.some(p=>p.status!==200||p.overflow||p.oldLinks.length||p.badAnchors.length||p.h1!==1||p.violations.length)||report.redirects.some(r=>!r.pass)||report.links.some(r=>r.status!==200)||report.errors.length||report.checks.some(c=>!c.pass);
console.log('Migration QA',failed?'FAILED':'PASSED');process.exitCode=failed?1:0;
