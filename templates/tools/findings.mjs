/* Finding recorder.

   Consumes what a search pass actually found and decides what it means. The rule that
   does the work: a clause whose numbers all check out but which OMITS a requirement the
   sources describe is not verified — it is incomplete, and shipping it would be worse
   than shipping nothing, because it reads as complete. `gaps` therefore blocks an
   upgrade exactly as a contradiction does.

   Findings live in verification/findings/<clause>.json and are written by hand or by
   the agent after a search pass. This file scores them.

   Usage: node templates/tools/findings.mjs [--apply]
*/
import fs from 'node:fs';
import path from 'node:path';
import {loadCorpus, ROOT} from './corpus.mjs';
import {writeIfChanged, VOLATILE_FIELDS, VOLATILE_LINES} from './artifact.mjs';

const DIR = path.join(ROOT,'..','verification','findings');

export function hostsOf(sources){
  return new Set(sources.map(s=>{ try{ return new URL(s.url).host.replace(/^www\./,''); }catch{ return null; } }).filter(Boolean));
}

/* The only place a search pass can produce a verdict. Total and pure. */
export function scoreFinding(f){
  const a = f.assertions || [];
  const gaps = f.gaps || [];
  const contradicted = a.filter(x=>x.status==='contradicted');
  const unsupported  = a.filter(x=>x.status==='unsupported');
  const corroborated = a.filter(x=>x.status==='corroborated');
  const hosts = hostsOf(f.sources||[]);

  if(contradicted.length) return {outcome:'contradicted', upgradeTo:null,
    why:`${contradicted.length} assertion(s) contradicted by sources`};
  if(gaps.length) return {outcome:'incomplete', upgradeTo:null,
    why:`${gaps.length} requirement(s) described by sources are absent from the clause — a clause that is silent on a requirement reads as complete and is not`};
  if(hosts.size < 2) return {outcome:'insufficient-sources', upgradeTo:null,
    why:`${hosts.size} independent host(s); corroboration requires at least two`};
  if(unsupported.length) return {outcome:'partial', upgradeTo:null,
    why:`${corroborated.length} assertion(s) corroborated, ${unsupported.length} unsupported by any source found`};
  if(!corroborated.length) return {outcome:'no-assertions-checked', upgradeTo:null,
    why:'no assertion in this clause was checked'};
  return {outcome:'corroborated', upgradeTo:'search-corroborated',
    why:`${corroborated.length} assertion(s) corroborated across ${hosts.size} independent hosts; sources listed but not opened, so this stays below the release gate`};
}

/* Which level a clause should sit at given a verdict. A finding can lower a level as
   well as raise one — three clauses here were optimistically marked search-corroborated
   before the gap rule existed, and the findings say they are not. */
export function levelFor(verdict, current, hasCitations){
  if(verdict.upgradeTo) return verdict.upgradeTo;
  return hasCitations ? (current==='search-corroborated' ? 'multi-cited' : current) : current;
}

const INVOKED = process.argv[1] && process.argv[1].endsWith('findings.mjs');
if(INVOKED){
  const APPLY = process.argv.includes('--apply');
  const C = loadCorpus();
  const byId = new Map(C.clauses.map(c=>[c.id,c]));
  const files = fs.existsSync(DIR) ? fs.readdirSync(DIR).filter(f=>f.endsWith('.json')) : [];
  const rows=[];
  for(const file of files){
    const f = JSON.parse(fs.readFileSync(path.join(DIR,file),'utf8'));
    const verdict = scoreFinding(f);
    rows.push({id:f.clauseId, ...verdict,
      assertions:(f.assertions||[]).length, gaps:(f.gaps||[]).length, hosts:hostsOf(f.sources||[]).size,
      known: byId.has(f.clauseId)});
  }
  rows.sort((a,b)=>a.outcome.localeCompare(b.outcome)||a.id.localeCompare(b.id));

  const unknown = rows.filter(r=>!r.known);
  if(unknown.length){ console.error('findings reference unknown clause(s): '+unknown.map(r=>r.id).join(', ')); process.exit(1); }

  const tally={};
  rows.forEach(r=>tally[r.outcome]=(tally[r.outcome]||0)+1);
  console.log(`${rows.length} finding(s) scored`);
  for(const [k,n] of Object.entries(tally).sort((a,b)=>b[1]-a[1])) console.log(`  ${String(n).padStart(3)}  ${k}`);
  console.log();
  for(const r of rows){
    console.log(`${r.outcome.padEnd(22)} ${r.id.padEnd(26)} ${r.assertions} assertion(s), ${r.gaps} gap(s), ${r.hosts} host(s)`);
    console.log(`${''.padEnd(22)} ${r.why}`);
  }
  const upgradable = rows.filter(r=>r.upgradeTo);
  console.log(`\n${upgradable.length} clause(s) can move to search-corroborated. None can reach the release gate by search alone.`);

  if(APPLY){
    const glob = fs.readdirSync(path.join(ROOT,'clauses')).filter(f=>f.endsWith('.json'));
    let changed=0, flagged=0;
    for(const file of glob){
      const fp = path.join(ROOT,'clauses',file);
      const d = JSON.parse(fs.readFileSync(fp,'utf8'));
      let dirty=false;
      for(const c of d.clauses){
        const row = rows.find(r=>r.id===c.id);
        if(!row) continue;
        const f = JSON.parse(fs.readFileSync(path.join(DIR, c.id+'.json'),'utf8'));
        const next = levelFor(row, c.verification, c.sources.some(s=>s.citation));
        if(next !== c.verification){ c.verification = next; changed++; dirty=true; }
        const defects = [...(f.gaps||[]), ...(f.assertions||[]).filter(a=>a.status==='contradicted').map(a=>'contradicted: '+a.text)];
        if(defects.length){ c.defects = defects; flagged++; dirty=true; }
        else if(c.defects){ delete c.defects; dirty=true; }
        c.lastChecked = f.checkedAt;
        dirty=true;
      }
      if(dirty){ fs.writeFileSync(fp, JSON.stringify(d,null,1)+'\n'); }
    }
    console.log(`applied: ${changed} level change(s), ${flagged} clause(s) flagged with defects`);
  }

  const out = path.join(ROOT,'..','verification','findings-summary.json');
  writeIfChanged(out, JSON.stringify({scoredAt:new Date().toISOString(), tally, rows},null,2)+'\n',
    {volatile:VOLATILE_FIELDS, parse:JSON.parse, fsImpl:fs});
  console.log(`summary written to verification/findings-summary.json`);
}

/* ---- defect rate and taxonomy ----
   Exported so findings.test.mjs can check the arithmetic rather than trusting it. */
export function cloppperPearsonLower(k, n, alpha=0.05){
  /* largest p such that P(X >= k | n, p) <= alpha, by bisection on the binomial tail */
  if(k===0) return 0;
  const tail = p => { let s=0; for(let i=k;i<=n;i++) s += binom(n,i)*Math.pow(p,i)*Math.pow(1-p,n-i); return s; };
  let lo=0, hi=1;
  for(let i=0;i<200;i++){ const mid=(lo+hi)/2; if(tail(mid) < alpha) lo=mid; else hi=mid; }
  return lo;
}
function binom(n,k){ let r=1; for(let i=1;i<=k;i++) r = r*(n-k+i)/i; return r; }

export function defectAnalysis(findings){
  const checked = findings.length;
  const defective = findings.filter(f=>(f.gaps||[]).length || (f.assertions||[]).some(a=>a.status==='contradicted')).length;
  const types = {};
  findings.forEach(f=>(f.defectTypes||[]).forEach(t=>types[t]=(types[t]||0)+1));
  const assertions = findings.reduce((s,f)=>s+(f.assertions||[]).length,0);
  const unsupported = findings.reduce((s,f)=>s+(f.assertions||[]).filter(a=>a.status==='unsupported').length,0);
  const contradicted = findings.reduce((s,f)=>s+(f.assertions||[]).filter(a=>a.status==='contradicted').length,0);
  return {checked, defective, rate: checked?defective/checked:0,
          lower95: cloppperPearsonLower(defective, checked),
          types, assertions, unsupported, contradicted};
}
