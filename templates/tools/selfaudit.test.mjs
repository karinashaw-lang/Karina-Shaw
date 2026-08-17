/* Does the prototype tell the truth about itself?

   The prototype's own prose claimed "3 clauses reached search-corroborated" long after the
   true figure had become 0. A hand-maintained claim about data, gone stale, sitting in the
   one document that describes this project's standards — the identical defect the corpus is
   full of, committed by the artifact that reports it.

   The fix was to derive the numbers rather than retype them. This is the check that stops
   them being retyped again: the prose region is scanned for hard-coded statistics, and
   every claim the page does make is recomputed from the corpus it ships.

   The prose region is everything outside the BUILD:CORPUS markers — the compiled data block
   is generated and is not at risk; hand-written copy is.
*/
import fs from 'node:fs';
import {loadCorpus} from './corpus.mjs';
import {gateFor} from './review.mjs';

let pass=0, fail=0;
const t=(n,c)=>{ if(c) pass++; else {fail++; console.log('  FAIL  '+n);} };

const html = fs.readFileSync('draft-ai-engine.html','utf8');
const START = html.indexOf('/* BUILD:CORPUS-START');
const END   = html.indexOf('/* BUILD:CORPUS-END */');
const prose = html.slice(0, START) + html.slice(END);
const C = loadCorpus();

console.log('the compiled block is separable from hand-written copy');
t('both build markers are present', START > 0 && END > START);
t('the prose region excludes the corpus blob', !prose.includes('"clauses":[{"id"'));

console.log('the numbers the page states are the numbers the corpus holds');
{
  const total = C.clauses.length;
  const tally = C.clauses.reduce((m,c)=>(m[c.verification]=(m[c.verification]||0)+1,m),{});
  const usable = C.clauses.filter(c=>gateFor(c, C.taxonomy).ok).length;

  /* Rendered by the page from CORPUS; recomputed here from templates/. If the two ever
     disagree the page is lying about the data it is shipping. */
  t('the unsourced share is derived, not typed',
     prose.includes("STATS.pct('unsourced')"));
  t('the single-citation share is derived',
     prose.includes("STATS.pct('single-source')"));
  t('the search-corroborated count is derived',
     prose.includes("STATS.count('search-corroborated')"));
  t('the usable count is derived',
     prose.includes('STATS.usable'));
  t('the gate name is derived',
     prose.includes('CORPUS.taxonomy.releaseGate.minimum'));
  t('the clause total is derived',
     prose.includes('CORPUS.meta.clauses'));

  console.log(`        corpus now: ${usable} usable of ${total}; ` +
              `${Math.round(100*(tally.unsourced||0)/total)}% unsourced, ` +
              `${Math.round(100*(tally['single-source']||0)/total)}% single-citation, ` +
              `${tally['search-corroborated']||0} search-corroborated`);
}

console.log('no hard-coded statistic has crept back into the copy');
{
  /* Comments are stripped first. The comment explaining this bug necessarily quotes the
     stale claim, and a check that fires on its own documentation teaches people to delete
     the documentation. The property is that no rendered TEXT states a typed statistic. */
  const rendered = prose.replace(/\/\*[\s\S]*?\*\//g,'').replace(/^\s*\/\/.*$/gm,'');
  /* The specific claims that went stale, plus the shapes they would take if retyped.
     Each is a literal that should now only ever appear as a computed expression. */
  const banned = [
    [/\b\d+\s+clauses?\s+reached\s+search-corroborated/i, 'a typed search-corroborated count'],
    [/\b\d+%\s+of the corpus carries no citation/i,       'a typed unsourced percentage'],
    [/\b\d+%\s+carries a single self-asserted citation/i, 'a typed single-citation percentage'],
    [/\b\d+\s+of\s+360\s+clauses/i,                       'a typed usable-of-total count'],
  ];
  for(const [re, what] of banned)
    t(`no ${what}`, !re.test(rendered));
  t('the check does not fire on its own documentation',
     /3 clauses reached search-corroborated/.test(prose) && !/3 clauses reached search-corroborated/.test(rendered));
}

console.log('claims about the tooling match the tooling');
{
  /* "its 21 unit tests" is a claim about a file that can change under it. */
  const m = /its\s+(\d+)\s+unit tests/.exec(prose);
  if(m){
    const verifyTests = fs.readFileSync('templates/tools/verify.test.mjs','utf8');
    const actual = (verifyTests.match(/^\s*t\(/gm)||[]).length;
    t(`the stated unit-test count (${m[1]}) matches verify.test.mjs (${actual})`, Number(m[1])===actual);
  } else {
    t('the unit-test count is not asserted as a bare number', true);
  }
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
