/* Measures which source hosts this environment can actually reach, and writes the
   result into sources/registry.json. The point is that "we cannot verify" becomes a
   recorded measurement with a timestamp rather than an assertion in a README.

   Usage: node templates/tools/probe-sources.mjs [--json] */
import fs from 'node:fs';
import path from 'node:path';
import {ROOT} from './corpus.mjs';
import {writeIfChanged, VOLATILE_FIELDS, VOLATILE_LINES} from './artifact.mjs';

const REG = path.join(ROOT,'sources','registry.json');
const reg = JSON.parse(fs.readFileSync(REG,'utf8'));
const hosts = [...new Set([...Object.keys(reg.hostKinds), 'github.com'])];

async function probe(host){
  const started=Date.now();
  try{
    const r = await fetch(`https://${host}/`, {method:'GET', signal:AbortSignal.timeout(10000)});
    return {status: r.ok?'reachable':`http-${r.status}`, ms: Date.now()-started};
  }catch(e){
    return {status:'unreachable', error:(e.cause?.code||e.name||String(e)).slice(0,60), ms: Date.now()-started};
  }
}

const results={};
for(const h of hosts) results[h] = {kind: reg.hostKinds[h] || 'control', ...await probe(h)};

const now = new Date().toISOString();
reg.reachability = {...reg.reachability, probedAt: now, hosts: results};
const wrote = writeIfChanged(REG, JSON.stringify(reg,null,2)+'\n',
  {volatile:VOLATILE_FIELDS, parse:JSON.parse, fsImpl:fs});
console.log(wrote.written
  ? `registry updated — ${wrote.reason}`
  : `registry unchanged — ${wrote.reason}; the recorded probe date still marks when this result was first observed`);

const reachable = Object.entries(results).filter(([,v])=>v.status==='reachable');
const blocked   = Object.entries(results).filter(([,v])=>v.status!=='reachable');
const control   = results['github.com'];

if(process.argv.includes('--json')){ console.log(JSON.stringify(results,null,1)); }
else {
  console.log(`probed ${hosts.length} hosts at ${now}`);
  console.log(`  control (github.com): ${control.status}`);
  console.log(`  reachable: ${reachable.length}  ${reachable.map(([h])=>h).join(', ')||'(none)'}`);
  console.log(`  blocked:   ${blocked.filter(([h])=>h!=='github.com').length}`);
  for(const [h,v] of blocked){ if(h!=='github.com') console.log(`    ${v.status.padEnd(12)} ${h}  (${v.kind})`); }
  const anyPrimary = reachable.some(([h])=>reg.hostKinds[h]==='primary');
  console.log(anyPrimary
    ? '\nAt least one primary source is reachable — verification can proceed.'
    : '\nNo primary source is reachable. Verification cannot proceed in this environment;'
      + '\nverify.mjs will fail closed and upgrade nothing.');
}
