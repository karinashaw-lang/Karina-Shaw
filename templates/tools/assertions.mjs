/* Assertion extraction and query planning.

   A clause is not one claim, it is many. "Provide two hours of training to supervisors
   and one hour to non-supervisory employees, within six months of hire, every two
   years" is four separately-checkable numbers, and the earlier search pass showed the
   corpus can be right about three and wrong about the fourth. Verifying at clause
   granularity hides that; this extracts the checkable units.

   Everything here is a pure function so assertions.test.mjs can enumerate it. The
   search step itself is performed by the agent — this produces the plan and consumes
   the result, which is the part that has to be deterministic.

   Usage: node templates/tools/assertions.mjs [--clause <id>] [--top <n>]
*/
import fs from 'node:fs';
import path from 'node:path';
import {loadCorpus, ROOT} from './corpus.mjs';
import {writeIfChanged, VOLATILE_FIELDS, VOLATILE_LINES} from './artifact.mjs';

/* ---- what counts as a checkable assertion ---- */
const PATTERNS = [
  {kind:'duration-days',    re:/\b(?:within|for|of)\s+(?:at least\s+)?([a-z-]+)\s*\((\d+)\)\s*(?:calendar\s+|business\s+)?days?\b/gi},
  {kind:'duration-hours',   re:/\b([a-z-]+)\s*\((\d+)\)\s*hours?\b/gi},
  {kind:'duration-months',  re:/\b([a-z-]+)\s*\((\d+)\)\s*months?\b/gi},
  {kind:'duration-years',   re:/\b([a-z-]+)\s*\((\d+)\)\s*(?:\((\d+)\)\s*)?years?\b/gi},
  {kind:'headcount',        re:/\b([a-z-]+)\s*\((\d+)\)\s*or more employees\b/gi},
  {kind:'percentage',       re:/\b([a-z-]+)\s+percent\s*\((\d+(?:\.\d+)?)%\)/gi},
  {kind:'money',            re:/\b(?:\$|dollars?\s*\()\s*([\d,]+)\b/gi},
  {kind:'deadline-phrase',  re:/\b(within|no later than|by the|not more than|at least)\s+([^.;]{3,70}?)(?=[.,;])/gi},
];

export function extractAssertions(body){
  const clean = body.replace(/\{\{(\w+)\}\}/g,'[$1]').replace(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g,'$1').replace(/<<xr:@?\w+>>/g,'[ref]');
  const out=[], seen=new Set();
  for(const {kind,re} of PATTERNS){
    re.lastIndex=0; let m;
    while((m=re.exec(clean))){
      const text=m[0].trim().replace(/\s+/g,' ');
      const key=kind+'|'+text.toLowerCase();
      if(seen.has(key)) continue;
      seen.add(key);
      out.push({kind, text, value:m[2]??m[1]??null});
    }
  }
  return out;
}

/* ---- turn a clause + its assertions into independent queries ----
   Independence matters: three rephrasings of the same query return the same page and
   prove nothing. Each query is built from a different angle — the citation, the
   subject matter, and the specific number being checked. */
export function planQueries(clause, assertions, year){
  const cite = clause.sources.map(s=>s.citation).filter(Boolean)[0] || '';
  /* the title often already names the jurisdiction; adding it again produces
     "California california ..." which changes the results for the worse */
  const subject = clause.title.toLowerCase().replace(/^california\s+/,'').trim();
  const jur = clause.jurisdictions.includes('CA') ? 'California' : '';
  const dedupe = str => str.replace(/\s+/g,' ').replace(/\b(\w+) \1\b/gi,'$1').trim();
  const q = [];
  if(cite) q.push({angle:'citation', query:dedupe(`${cite} ${subject}`)});
  q.push({angle:'subject', query:dedupe(`${jur} ${subject} requirements${year?' '+year:''}`)});
  const numeric = assertions.filter(a=>a.kind!=='deadline-phrase' && a.value).slice(0,3);
  for(const a of numeric)
    q.push({angle:'value', query:dedupe(`${jur} ${subject} ${a.text}`).slice(0,120), checking:a.text, expect:a.value});
  return q;
}

export function planFor(clause, year){
  const assertions = extractAssertions(clause.body);
  return {
    id: clause.id,
    title: clause.title,
    verification: clause.verification,
    citations: clause.sources.map(s=>s.citation).filter(Boolean),
    assertions,
    queries: planQueries(clause, assertions, year)
  };
}

/* ---- CLI ---- */
const INVOKED = process.argv[1] && process.argv[1].endsWith('assertions.mjs');
if(INVOKED){
  const args=process.argv.slice(2);
  const ONLY = args.includes('--clause') ? args[args.indexOf('--clause')+1] : null;
  const TOP  = args.includes('--top') ? +args[args.indexOf('--top')+1] : 10;
  const C = loadCorpus();
  const LEV = C.taxonomy.verificationLevels;
  const gate = LEV[C.taxonomy.releaseGate.minimum].rank;
  const SEV={critical:3,recommended:2,optional:1};
  const pool = C.clauses
    .filter(c=>!ONLY || c.id===ONLY)
    .filter(c=>LEV[c.verification].rank < gate)
    .map(c=>({c, p: SEV[c.severity]*10 + (c.insertion==='auto'?6:0) + (c.jurisdictions.includes('CA')?5:0)
                 + (c.sources.some(s=>s.citation)?4:0)
                 + Math.min(12, extractAssertions(c.body).filter(a=>a.value).length*3)}))
    .sort((a,b)=>b.p-a.p).slice(0, ONLY?1:TOP).map(x=>x.c);

  const YEAR=new Date().getFullYear();
  const plans = pool.map(c=>planFor(c,YEAR));
  const out = path.join(ROOT,'..','verification','query-plan.json');
  fs.mkdirSync(path.dirname(out),{recursive:true});
  writeIfChanged(out, JSON.stringify({generatedAt:new Date().toISOString(), plans}, null, 2)+'\n',
    {volatile:VOLATILE_FIELDS, parse:JSON.parse, fsImpl:fs});

  const totalA = plans.reduce((s,p)=>s+p.assertions.length,0);
  const totalQ = plans.reduce((s,p)=>s+p.queries.length,0);
  console.log(`${plans.length} clause(s) → ${totalA} checkable assertion(s) → ${totalQ} query(ies)`);
  for(const p of plans){
    console.log(`\n${p.id}  (${p.assertions.length} assertions)  ${p.citations.join('; ')||'(no citation)'}`);
    p.assertions.slice(0,6).forEach(a=>console.log(`   · [${a.kind}] ${a.text}`));
    p.queries.forEach(q=>console.log(`   ? [${q.angle}] ${q.query}`));
  }
  console.log(`\nplan written to verification/query-plan.json`);
}
