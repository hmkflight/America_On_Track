import fs from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
const run=promisify(execFile);
const report=JSON.parse(await fs.readFile('qa/report.json','utf8'));const results=[];const queue=report.externalLinks.filter(x=>!x.includes('google.com/maps'));
async function worker(){while(queue.length){const url=queue.shift();try{const r=await fetch(url,{signal:AbortSignal.timeout(25000)});const type=r.headers.get('content-type');const text=type?.includes('text/html')?await r.text():'';const title=text.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim();results.push({url,status:r.status,title,type,finalUrl:r.url});console.log(r.status,url,title||'');}catch(e){try { const {stdout}=await run('curl',['-Ls','--max-time','25','-o','/dev/null','-w','%{http_code}',url]);results.push({url,status:Number(stdout),transport:'system curl fallback'});console.log(stdout,url); } catch { results.push({url,error:e.message,cause:e.cause?.code});console.log('ERROR',url,e.message); }}}}
await Promise.all(Array.from({length:5},worker));await fs.writeFile('qa/external-links.json',JSON.stringify(results,null,2));
