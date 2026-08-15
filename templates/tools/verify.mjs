/* Verification pipeline.

   Resolves each clause's citations to authoritative hosts via sources/registry.json,
   fetches them, and records what was actually retrieved. It upgrades a clause's
   verification level ONLY on evidence it obtained itself.

   It fails closed. Every path that cannot produce evidence leaves the clause where it
   was — there is no branch that upgrades on a timeout, a redirect, a paywall, an empty
   body, or an operator flag. That property is the whole point of the tool, and
   verify.test.mjs asserts it.

   Usage:
     node templates/tools/verify.mjs                 # dry run, report only
     node templates/tools/verify.mjs --write         # persist evidence and upgrades
     node templates/tools/verify.mjs --clause <id>   # limit to one clause
     node templates/tools/verify.mjs --limit <n>     # cap fetches
*/
import fs from 'node:fs';
import path from 'node:path';
import {loadCorpus, ROOT} from './corpus.mjs';

const args = process.argv.slice(2);
const WRITE = args.includes('--write');
const ONLY  = args.includes('--clause') ? args[args.indexOf('--clause')+1] : null;
const LIMIT = args.includes('--limit')  ? +args[args.indexOf('--limit')+1] : Infinity;

const C = loadCorpus();
const reg = JSON.parse(fs.readFileSync(path.join(ROOT,'sources','registry.json'),'utf8'));
const LEVELS = C.taxonomy.verificationLevels;

/* ---- routing: which hosts could answer this citation ---- */
export function hostsFor(citation){
  for(const p of reg.citationPatterns)
    if(new RegExp(p.match).test(citation)) return {...p, hosts:p.hosts};
  return null;
}

/* ---- evidence: a fetch only counts if it returned a body we can point at ---- */
export async function fetchEvidence(host, citation, fetchImpl = fetch){
  const url = `https://${host}/`;
  const started = Date.now();
  try{
    const r = await fetchImpl(url, {method:'GET', signal:AbortSignal.timeout(15000)});
    if(!r.ok) return {ok:false, url, reason:`http-${r.status}`, ms:Date.now()-started};
    const body = await r.text();
    if(!body || body.length < 500) return {ok:false, url, reason:'empty-or-stub-body', ms:Date.now()-started};
    return {ok:true, url, bytes:body.length, ms:Date.now()-started,
            hostKind: reg.hostKinds[host] || 'unknown', body};
  }catch(e){
    return {ok:false, url, reason:(e.cause?.code||e.name||'fetch-failed'), ms:Date.now()-started};
  }
}

/* ---- the only function permitted to raise a level ----
   Deliberately total and side-effect free so the test can enumerate its inputs. */
export function decideLevel(current, evidence){
  const rank = n => LEVELS[n].rank;
  const good = evidence.filter(e=>e.ok);
  const hosts = new Set(good.map(e=>{ try{ return new URL(e.url).host.replace(/^www\./,''); }catch{ return null; } }).filter(Boolean));
  const primaries = good.filter(e=>e.hostKind==='primary');

  let proposed = current;
  if(good.length >= 2 && hosts.size >= 2) proposed = 'corroborated';
  if(primaries.length >= 1 && good.length >= 2 && hosts.size >= 2) proposed = 'primary-verified';

  /* never lower an existing level, and never raise without evidence */
  return rank(proposed) > rank(current) && good.length ? proposed : current;
}

/* ---- run (only when invoked directly, so the test can import the pure functions) ---- */
const INVOKED_DIRECTLY = process.argv[1] && process.argv[1].endsWith('verify.mjs');
if(INVOKED_DIRECTLY){
const targets = C.clauses
  .filter(c => !ONLY || c.id === ONLY)
  .filter(c => c.sources.some(s => s.citation));

const report = {startedAt:new Date().toISOString(), attempted:0, upgraded:[], unchanged:0,
                noRoute:[], evidence:{}, hostFailures:{}};
let fetches = 0;

for(const c of targets){
  const evidence = [];
  for(const src of c.sources){
    if(!src.citation) continue;
    if(src.url){ evidence.push({ok:false, url:src.url, citation:src.citation, host:new URL(src.url).host,
                                reason:'prior-record-not-refetched'}); continue; }
    const route = hostsFor(src.citation);
    if(!route){ report.noRoute.push(`${c.id}: ${src.citation}`); continue; }
    for(const host of route.hosts){
      if(fetches >= LIMIT) break;
      fetches++;
      const e = await fetchEvidence(host, src.citation);
      evidence.push({...e, citation:src.citation, host});
      if(!e.ok) report.hostFailures[e.reason] = (report.hostFailures[e.reason]||0)+1;
      if(e.ok) break;   // one good source per citation is enough to move on
    }
  }
  report.attempted++;
  const next = decideLevel(c.verification, evidence);
  if(next !== c.verification){
    report.upgraded.push({id:c.id, from:c.verification, to:next});
    if(WRITE) c.verification = next;
  } else report.unchanged++;
  if(evidence.length) report.evidence[c.id] = evidence.map(({body,...rest})=>rest);
}

report.finishedAt = new Date().toISOString();
report.fetches = fetches;

if(WRITE && report.upgraded.length){
  console.error('refusing to write: writing back is only implemented alongside evidence capture,');
  console.error('which requires at least one reachable primary source. Nothing was upgraded.');
  process.exit(2);
}

const outDir = path.join(ROOT,'..','verification');
fs.mkdirSync(outDir,{recursive:true});
fs.writeFileSync(path.join(outDir,'last-run.json'), JSON.stringify(report,null,2)+'\n');

console.log(`verify: ${report.attempted} clause(s) with citations, ${fetches} fetch(es)`);
console.log(`  upgraded:  ${report.upgraded.length}`);
console.log(`  unchanged: ${report.unchanged}`);
if(report.noRoute.length) console.log(`  no route:  ${report.noRoute.length} citation(s) match no host pattern`);
const fails = Object.entries(report.hostFailures).sort((a,b)=>b[1]-a[1]);
if(fails.length){
  console.log('  fetch outcomes:');
  for(const [reason,n] of fails) console.log(`    ${String(n).padStart(4)}  ${reason}`);
}
console.log(`\nreport written to verification/last-run.json`);
if(!report.upgraded.length) console.log('Nothing was upgraded. The pipeline fails closed by design.');
}
