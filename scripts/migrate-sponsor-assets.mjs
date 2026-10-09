import fs from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import sharp from 'sharp';
const run = promisify(execFile);
const pages = JSON.parse(await fs.readFile('research/raw/2026-10-09/pages.json', 'utf8'));
const html = pages.find(p => p.slug === 'golf-tournament').content.rendered;
const urls = [...html.matchAll(/src="([^"]+)"/g)].map(m=>m[1]).filter(u=>u.includes('/uploads/')&&!u.includes('GolfBallLogo'));
const names = ['The Newkirk Family','Crevier Family Foundation','Frome Family Foundation','Competitive Simulations Inc.','Crevier BMW','Mouse Graphics','Chipotle','Blair Walsh Real Estate','Haskell & White','Newport International LLC','Mike Kilbride, LTD','Doug and Kathy Forde','Steve and Shelly Hupp','Spectrum Reach','MTC Corp','Michael and Maria Fong','Karen and Joe Walsh','Ray and Sandy Moran','Holland Family','Latham & Watkins'];
await fs.mkdir('public/images/sponsors', {recursive:true});
const results=[];
for(let i=0;i<urls.length;i++){
 const {stdout}=await run('curl',['-fsSL','--max-time','30',urls[i]],{encoding:'buffer',maxBuffer:15e6});
 const image=`/images/sponsors/sponsor-${i+1}.webp`;
 await sharp(stdout).resize({width:480,height:240,fit:'inside',withoutEnlargement:true}).webp({quality:85}).toFile(`public${image}`);
 results.push({name:names[i],image,source:urls[i]});
}
await fs.writeFile('research/raw/2026-10-09/sponsors.json',JSON.stringify(results,null,2)+'\n');
await fs.writeFile('src/lib/sponsors.json',JSON.stringify(results.map(({name,image})=>({name,image})),null,2)+'\n');
console.log(`Preserved ${results.length} sponsor images`);
