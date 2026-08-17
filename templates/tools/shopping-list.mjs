/* What source texts to obtain first.

   130 citations is not a sensible first ask. This ranks the distinct provisions by how
   much of the corpus depends on each, weighted by consequence, so the first batch buys
   the most verification per document pulled.

   Usage: node templates/tools/shopping-list.mjs [--top 15] */
import fs from 'node:fs';
import path from 'node:path';
import {loadCorpus, ROOT} from './corpus.mjs';
import {lintClause} from './lint.mjs';
import {writeIfChanged, VOLATILE_FIELDS, VOLATILE_LINES} from './artifact.mjs';

const TOP = process.argv.includes('--top') ? +process.argv[process.argv.indexOf('--top')+1] : 15;
const C = loadCorpus();
const SEV = {critical:3, recommended:2, optional:1};

/* group clauses by the provision they rest on */
const byCite = {};
for(const c of C.clauses){
  if(!c.assertsLaw) continue;                      // drafting clauses need no statute
  for(const s of (c.sources||[])){
    if(!s.citation || s.url) continue;             // already-recorded evidence, not a statute to pull
    const g = (byCite[s.citation] ||= {citation:s.citation, clauses:[], weight:0, defects:0, flags:0});
    g.clauses.push(c.id);
    g.weight += SEV[c.severity] + (c.insertion==='auto' ? 2 : 0);
    g.defects += (c.defects?.length || 0);
    g.flags   += lintClause(c).length;
  }
}
const rows = Object.values(byCite)
  .map(g=>({...g, n:g.clauses.length, score: g.weight + g.defects*6 + g.flags*2}))
  .sort((a,b)=>b.score-a.score);

const CA = /^(Cal\.|IWC)/;
const url = c => CA.test(c)
  ? 'leginfo.legislature.ca.gov  (Codes → the code named in the citation → the section number)'
  : /C\.F\.R/.test(c) ? 'ecfr.gov'
  : /U\.S\.C/.test(c) ? 'uscode.house.gov'
  : /^(NY|Tex\.|Fla\.|\d+ Del)/.test(c) ? "that state's legislature site"
  : /Treas\. Reg\.|IRC/.test(c) ? 'ecfr.gov (26 CFR) or irs.gov'
  : 'the issuing body';

const lines = [
'# Source texts to obtain, in priority order',
'',
'Ranked by how much of the corpus depends on each provision, weighted by clause severity,',
'whether the clause is drafted automatically, and whether it already has a confirmed defect',
'or a detector flag. The first few buy the most verification per document pulled.',
'',
`${rows.length} distinct provisions are cited by the ${C.clauses.filter(c=>c.assertsLaw).length} clauses that assert law.`,
'Drafting clauses need none of these — they assert no statute.',
'',
'## How to hand them over',
'',
'Save each as plain text — the section text itself, no commentary, no summary — and drop it',
'in Google Drive. That connector is live and tested. Name the file after the citation, e.g.',
'`Cal Lab Code 925.txt`. I will read it, store the bytes verbatim, hash it, record who',
'supplied it and from where, and pin each affected clause assertion to an exact quoted span.',
'',
'A screenshot or a PDF is fine too, but plain text is what gets hashed cleanly.',
'',
'## The list',
'',
'| # | Provision | Clauses | Known defects | Flags | Where |',
'|---:|---|---:|---:|---:|---|',
...rows.slice(0,TOP).map((r,i)=>`| ${i+1} | \`${r.citation}\` | ${r.n} | ${r.defects} | ${r.flags} | ${url(r.citation)} |`),
'',
`## What the first ${Math.min(5,TOP)} unlock`,
'',
...rows.slice(0,5).map(r=>`- **${r.citation}** — ${r.n} clause(s): ${r.clauses.slice(0,6).join(', ')}${r.clauses.length>6?', …':''}`),
'',
'## What this does not change',
'',
'Obtaining the text moves a clause to `corroborated` at best. `primary-verified` still',
'requires a named human reviewer, and the release gate still refuses to draft anything',
'below `corroborated`. The texts remove the need to take my word for what the source says;',
'they do not remove the reviewer.',
''];

const out = path.join(ROOT,'..','verification','shopping-list.md');
writeIfChanged(out, lines.join('\n'), {linePatterns:VOLATILE_LINES, fsImpl:fs});
console.log(`${rows.length} distinct provisions cited by ${C.clauses.filter(c=>c.assertsLaw).length} authority clauses`);
console.log(`\ntop ${TOP}:`);
rows.slice(0,TOP).forEach((r,i)=>console.log(`  ${String(i+1).padStart(2)}. ${r.citation.padEnd(42)} ${String(r.n).padStart(2)} clause(s)  ${r.defects?`${r.defects} known defect(s)`:''}`));
console.log(`\nwritten to verification/shopping-list.md`);
