/* What "no mistake" actually costs, from measured data rather than a guess.

   Two inputs the measurement gives us: the sampled defect rate, and the split between
   clauses that assert what the law requires and clauses that state a negotiated term.
   Those are different jobs, done by different people, at different rates — collapsing
   them is what makes the number look impossible.

   Usage: node templates/tools/cost.mjs */
import fs from 'node:fs';
import path from 'node:path';
import {loadCorpus, ROOT} from './corpus.mjs';
import {defectAnalysis} from './findings.mjs';
import {lintClause} from './lint.mjs';

const C = loadCorpus();
const FDIR = path.join(ROOT,'..','verification','findings');
const findings = fs.existsSync(FDIR)
  ? fs.readdirSync(FDIR).filter(f=>f.endsWith('.json')).map(f=>JSON.parse(fs.readFileSync(path.join(FDIR,f),'utf8'))) : [];
const an = defectAnalysis(findings);

const authority = C.clauses.filter(c=>c.assertsLaw);
const drafting  = C.clauses.filter(c=>!c.assertsLaw);
const flagged   = C.clauses.filter(c=>lintClause(c).length);

/* Rates are assumptions, and they are labelled as such. Everything else is measured. */
const ASSUME = {
  authorityMinutes: 25,   // pull the source, read the provision, pin each assertion, sign
  draftingMinutes: 8,     // read the term, decide if it is the term you want
  rewriteMultiplier: 1.6, // a defective clause is rewritten against the source, not corrected
};

const authorityDefective = Math.round(authority.length * an.rate);
const hours = (
  authority.length * ASSUME.authorityMinutes * (1 + (an.rate * (ASSUME.rewriteMultiplier-1)))
  + drafting.length * ASSUME.draftingMinutes
) / 60;

const lines = [
'# What "no mistake" costs',
'',
'Everything below marked *measured* comes from `npm run audit`. Everything marked',
'*assumed* is a rate I have no data for and have labelled rather than buried.',
'',
'## The split that changes the number',
'',
`*Measured.* Of ${C.clauses.length} clauses, **${authority.length} assert what the law requires** and **${drafting.length} state a negotiated term**.`,
'',
'These fail differently and are vetted by different people:',
'',
'| Track | Clauses | The question | Fails by |',
'|---|---:|---|---|',
`| Authority | ${authority.length} | Does the source say this, and all of it? | omission — right number, missing qualifier |`,
`| Drafting | ${drafting.length} | Is this the term we want? | unfavourable, ambiguous, unenforceable |`,
'',
'A statutory reviewer cannot clear a liability cap — it asserts no statute. A commercial',
'lawyer cannot clear a wage-theft notice clause by reading it, because what is wrong with',
'it is what is not in it. Collapsing the two is what makes the job look impossible.',
'',
'## Concentration',
'',
'*Measured.* The authority burden is not spread evenly:',
'',
'| Document | Asserts law | Of total |',
'|---|---:|---:|',
...Object.entries(C.clauses.reduce((m,c)=>{ (m[c.doc] ||= [0,0]); m[c.doc][0]++; if(c.assertsLaw) m[c.doc][1]++; return m; },{}))
   .sort((a,b)=>b[1][1]-a[1][1]).slice(0,8)
   .map(([doc,[tot,ass]])=>`| ${doc} | ${ass} | ${tot} (${Math.round(ass/tot*100)}%) |`),
'',
'The California compliance documents are almost entirely legal assertion. The NDA, MSA,',
'and statement of work are almost entirely drafting. That is the practical scheduling',
'insight: the commercial package can be cleared by a commercial lawyer without a single',
'statute being pulled, and the California package cannot be cleared without all of them.',
'',
'## The estimate',
'',
`*Measured.* Sampled defect rate: ${an.defective} of ${an.checked} (${(an.rate*100).toFixed(0)}%), 95% lower bound ${(an.lower95*100).toFixed(0)}%.`,
`*Measured.* ${flagged.length} clauses carry at least one detector flag.`,
'',
`*Assumed.* ${ASSUME.authorityMinutes} minutes per authority clause, ${ASSUME.draftingMinutes} per drafting clause, ${ASSUME.rewriteMultiplier}× for a defective one.`,
'',
`**≈ ${Math.round(hours)} hours of qualified review**, of which roughly ${Math.round(authority.length*ASSUME.authorityMinutes*(1+(an.rate*(ASSUME.rewriteMultiplier-1)))/60)} is California-weighted legal work.`,
`At the sampled rate, about ${authorityDefective} of the ${authority.length} authority clauses are not corrections but rewrites against the source.`,
'',
'## What this says about the approach',
'',
'The honest reading of an 89% sampled defect rate is that the drafting method, not the',
'drafts, is what failed. Reviewing 169 authority clauses written from memory costs more',
'than composing them from attested text in the first place, and leaves the same failure',
'mode in place for everything written next.',
'',
'The pinning workflow inverts it: quote the provision, pin the assertion, and the',
'omission failure largely cannot occur, because you are reading the text while you write',
'rather than recalling it afterwards. That is a change to how the corpus is produced, not',
'a bigger review budget.',
'',
'*Nothing here is a legal opinion, and the per-clause rates are guesses. The clause counts,',
'the split, the defect rate, and the flag counts are measured and reproducible.*',
''];

const out = path.join(ROOT,'..','verification','cost.md');
fs.writeFileSync(out, lines.join('\n'));
console.log(`authority track : ${authority.length} clauses  (${Math.round(authority.length/C.clauses.length*100)}%)`);
console.log(`drafting track  : ${drafting.length} clauses  (${Math.round(drafting.length/C.clauses.length*100)}%)`);
console.log(`sampled defect  : ${(an.rate*100).toFixed(0)}%  (95% lower bound ${(an.lower95*100).toFixed(0)}%)`);
console.log(`estimate        : ~${Math.round(hours)} hours qualified review, ~${authorityDefective} rewrites`);
console.log(`\nwritten to verification/cost.md`);
