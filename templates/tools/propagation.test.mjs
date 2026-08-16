/* Tests for defect propagation.

   The property that matters is that this file never decides what a defect is — it takes
   that from the caller and only answers "where else would this land". The second property
   is that it must not implicate a clause that has already been checked, because the whole
   point is to produce work nobody has done.
*/
import {shingles, overlap, implicated, duplicateGroups, normCitation, citationsOf,
        particulars, divergences} from './propagation.mjs';
import {loadCorpus} from './corpus.mjs';

let pass=0, fail=0;
const t=(n,c)=>{ if(c) pass++; else {fail++; console.log('  FAIL  '+n);} };

const c = (id, body, cites=[]) => ({id, body, sources:cites.map(citation=>({citation}))});

console.log('shingles');
t('a short text yields none', shingles('too short for a run').size===0);
t('an eight-word text yields exactly one', shingles('one two three four five six seven eight').size===1);
t('a nine-word text yields two', shingles('one two three four five six seven eight nine').size===2);
t('punctuation and case are normalised',
   [...shingles('One, Two; three four five six seven EIGHT.')][0]==='one two three four five six seven eight');
t('the run length is adjustable', shingles('a b c d e', 3).size===3);

console.log('overlap');
{
  const a = shingles('the employer shall provide a written notice to the employee within ten days');
  const b = shingles('the employer shall provide a written notice to the employee within thirty days');
  t('near-identical text overlaps heavily', overlap(a,b).shared>0);
  t('unrelated text does not overlap',
     overlap(shingles('one two three four five six seven eight nine'),
             shingles('alpha beta gamma delta epsilon zeta eta theta iota')).shared===0);
  t('overlap with an empty set is zero', overlap(a, new Set()).shared===0);
  t('jaccard is bounded by one', overlap(a,a).jaccard===1);
}

console.log('citations');
t('section symbols normalise', normCitation('Cal. Lab. Code §  925')===normCitation('Cal. Lab. Code §925'));
t('doubled symbols normalise', normCitation('Cal. Lab. Code §§925')==='cal. lab. code §925');
t('a range is NOT treated as containing its members',
   normCitation('Cal. Lab. Code §§1030–1034')!==normCitation('Cal. Lab. Code §1031'));
t('citations are read off the sources array',
   citationsOf(c('x','body',['Test Code §1','Test Code §2'])).length===2);
t('a source with no citation is skipped',
   citationsOf({id:'x', body:'b', sources:[{url:'https://example.invalid'}]}).length===0);

console.log('implicated — one finding, a list of leads');
{
  const shared = 'the employer shall provide a private space that is not a bathroom and is close to the work area';
  const clauses = [
    c('bad',       shared + ' and has seating', ['Test Code §10']),
    c('copy',      shared + ' and has a surface', ['Test Code §99']),
    c('sameCite',  'an entirely different sentence about something else altogether here', ['Test Code §10']),
    c('unrelated', 'nothing here resembles the other clauses in wording or in what it cites', ['Test Code §77']),
    c('alreadyDone', shared + ' and has electricity', ['Test Code §10'])
  ];
  const r = implicated(clauses, {defective:new Set(['bad']), checked:new Set(['bad','alreadyDone'])});
  const ids = r.map(x=>x.clause);
  t('a near-duplicate is implicated', ids.includes('copy'));
  t('a clause sharing only the citation is implicated', ids.includes('sameCite'));
  t('an unrelated clause is not', !ids.includes('unrelated'));
  t('a clause already checked is never implicated', !ids.includes('alreadyDone'));
  t('the defective clause does not implicate itself', !ids.includes('bad'));

  const copy = r.find(x=>x.clause==='copy');
  t('the text reason names the shared wording', copy.reasons.some(x=>x.kind==='text'));
  t('and says which clause the defect is confirmed in', copy.reasons[0].why.includes('bad'));
  const sc = r.find(x=>x.clause==='sameCite');
  t('the citation reason names the provision', sc.reasons.some(x=>x.kind==='citation' && x.citation.includes('§10')));

  t('a clause implicated two ways outranks one implicated once', (()=>{
     /* alreadyDone is also a text+citation match, so it must stay excluded here or it
        competes with twoWays and the assertion tests nothing. */
     const both = implicated([...clauses, c('twoWays', shared+' and a sink', ['Test Code §10'])],
       {defective:new Set(['bad']), checked:new Set(['bad','alreadyDone'])});
     return both[0].clause==='twoWays';
   })());
  t('nothing defective means nothing implicated',
     implicated(clauses, {defective:new Set(), checked:new Set()}).length===0);
}

console.log('duplicateGroups — the standing exposure');
{
  const body = 'a run of words long enough to count as authorship rather than as ordinary idiom';
  const g = duplicateGroups([c('a',body+' one'), c('b',body+' two'), c('c','wholly different wording appears in this clause body entirely')]);
  t('duplicates group together', g.length===1 && g[0].length===2);
  t('a singleton forms no group', !g.flat().includes('c'));
}

console.log('particulars and divergences');
{
  t('a number with a unit is a particular', particulars('file within 20 calendar days').has('20 calendar days'));
  t('the corpus\'s "fifteen (15) days" form is caught too',
     particulars('register within fifteen (15) days of the first payroll').has('15 days'));
  t('a dollar figure is a particular', particulars('wages over $100 in a quarter').has('$100'));
  t('a named form is a particular', particulars('report on Form DE 34').has('form DE'));
  t('bare prose yields none', particulars('the parties shall act reasonably').size===0);
  t('thousands separators normalise', particulars('a penalty of $2,500').has('$2500'));

  const cs = [
    c('full',    'register within 15 days and report each new hire on Form DE 34 within 20 days'),
    c('partial', 'register within 15 days and file the quarterly returns on the assigned schedule'),
  ];
  const d = divergences(cs, ['full','partial']);
  t('a particular in one member and not the other is asymmetric',
     d.asymmetric.some(x=>x.particular==='20 days' && x.absentFrom.includes('partial')));
  t('a particular both share is not a divergence',
     !d.asymmetric.some(x=>x.particular==='15 days'));
  t('the asymmetry names who states it and who does not',
     d.asymmetric.find(x=>x.particular==='form DE').statedBy[0]==='full');
  t('identical members diverge on nothing',
     divergences([c('x','register within 15 days'), c('y','register within 15 days')], ['x','y']).asymmetric.length===0);
  /* The removed contradiction check would have called this clause self-contradictory:
     two different day-counts, two different obligations, no contradiction at all. */
  t('two deadlines in one clause are not a contradiction',
     divergences([c('multi','register within 15 days and report a hire within 20 days')], ['multi']).asymmetric.length===0);
}

console.log('no network, model, or filesystem path exists');
{
  const raw = await import('node:fs').then(fs=>fs.readFileSync('templates/tools/propagation.mjs','utf8'));
  const code = raw.replace(/\/\*[\s\S]*?\*\//g,'').replace(/^\s*\/\/.*$/gm,'');
  t('no fetch', !/\bfetch\s*\(/.test(code));
  t('no model client', !/openai|anthropic|claude|gpt/i.test(code));
  t('no filesystem', !/node:fs|readFileSync|writeFileSync/.test(code));
}

console.log('against the real corpus');
{
  const C = loadCorpus();
  const g = duplicateGroups(C.clauses);
  t('the corpus contains near-duplicate clause groups', g.length>0);
  t('no clause appears in two groups', (()=>{ const f=g.flat(); return new Set(f).size===f.length; })());
  console.log(`        ${g.length} duplicate group(s) covering ${g.flat().length} clauses`);
  const asym = g.reduce((s,x)=>s+divergences(C.clauses,x).asymmetric.length,0);
  t('the corpus contains asymmetric divergences within duplicate groups', asym>0);
  console.log(`        ${asym} asymmetric divergence(s) inside duplicate groups`);
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
