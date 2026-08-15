/* Tests for classification triage.

   The property under test is that this module never decides anything. Every signal is a
   fact about the text; every tension is a reason to look, not a verdict. The tests assert
   that the recorded label is reported, never overwritten, and that the two directions of
   misrouting are told apart — because one of them ships a defect and the other only wastes
   time, and treating them alike would put the wrong work first.
*/
import {signalsFor, bandFor, tensionFor, reviewPriority, triage,
        AUTHORITY_SIGNALS, DRAFTING_SIGNALS} from './classification.mjs';
import {loadCorpus} from './corpus.mjs';

let pass=0, fail=0;
const t=(n,c)=>{ if(c) pass++; else {fail++; console.log('  FAIL  '+n);} };

const c = (body, over={}) => ({id:'x', doc:'msa', body, severity:'critical',
  insertion:'auto', sources:[], assertsLaw:false, ...over});

console.log('signals are facts about the text');
t('a section symbol fires', signalsFor(c('See § 925 for the rule.')).authority.includes('cites-a-section'));
t('a U.S. Code cite fires', signalsFor(c('An election under 26 U.S.C. 83.')).authority.includes('cites-a-section'));
t('"required by law" fires', signalsFor(c('Notice is required by law.')).authority.includes('appeals-to-law'));
t('naming an agency fires', signalsFor(c('File with the Secretary of State.')).authority.includes('names-an-agency'));
t('a deadline alone does not fire the penalty signal',
   !signalsFor(c('Deliver within 30 days of the request.')).authority.includes('states-a-deadline-and-penalty'));
t('a deadline with a penalty does',
   signalsFor(c('Pay within 30 days or be liable for a penalty of $100 per day.')).authority.includes('states-a-deadline-and-penalty'));
t('party labels fire the drafting signal',
   signalsFor(c('The {{counterLabel}} shall reimburse expenses.')).drafting.includes('two-party-labels'));
t('"the parties agree" fires', signalsFor(c('The parties agree to arbitrate.')).drafting.includes('parties-agree'));
t('"this Agreement" fires', signalsFor(c('This Agreement commences on the Effective Date.')).drafting.includes('this-agreement'));
t('an ordinary sentence fires nothing',
   signalsFor(c('The schedule is attached.')).authority.length===0 &&
   signalsFor(c('The schedule is attached.')).drafting.length===0);
t('a citation in sources is reported separately from body evidence',
   signalsFor(c('The schedule is attached.', {sources:[{citation:'Test Code §1'}]})).cited===true);
t('and a citation alone does not create body evidence',
   bandFor(c('The schedule is attached.', {sources:[{citation:'Test Code §1'}]}))==='no-evidence');

console.log('banding');
t('law signals only', bandFor(c('See § 925.'))==='evidence-authority');
t('term signals only', bandFor(c('The parties agree to arbitrate.'))==='evidence-drafting');
t('both', bandFor(c('The parties agree to comply with § 925.'))==='conflicting');
t('neither', bandFor(c('The schedule is attached.'))==='no-evidence');

console.log('tension — a reason to look, never a verdict');
{
  const dangerous = c('Distribute the notices required by law at hire.', {assertsLaw:false});
  t('law-talking clause recorded as drafting is dangerous', tensionFor(dangerous).kind==='dangerous');
  t('and the reason names the omission risk', /omission/i.test(tensionFor(dangerous).why));

  const stuck = c('The {{counterLabel}} shall reimburse expenses.', {assertsLaw:true});
  t('term-reading clause recorded as authority is stuck', tensionFor(stuck).kind==='stuck');
  t('and the reason says the verification can never arrive', /never arrive/.test(tensionFor(stuck).why));

  t('a conflicting body is ambiguous whichever way it is recorded',
     tensionFor(c('The parties agree to comply with § 925.',{assertsLaw:true})).kind==='ambiguous' &&
     tensionFor(c('The parties agree to comply with § 925.',{assertsLaw:false})).kind==='ambiguous');
  t('no evidence either way is unevidenced',
     tensionFor(c('The schedule is attached.',{assertsLaw:true})).kind==='unevidenced');
  t('agreement is consistent',
     tensionFor(c('See § 925.',{assertsLaw:true})).kind==='consistent' &&
     tensionFor(c('The parties agree.',{assertsLaw:false})).kind==='consistent');

  t('the recorded label is reported, never changed',
     tensionFor(dangerous).kind==='dangerous' && dangerous.assertsLaw===false);
}

console.log('the dangerous direction is reviewed first');
{
  const dangerous = c('Notices required by law.', {assertsLaw:false, severity:'optional', insertion:'suggest'});
  const stuck     = c('The {{counterLabel}} shall pay.', {assertsLaw:true, severity:'critical', insertion:'auto'});
  t('a low-severity dangerous clause outranks a critical stuck one',
     reviewPriority(dangerous, 0) > reviewPriority(stuck, 100));
  t('consistent clauses sink to the bottom',
     reviewPriority(c('See § 925.',{assertsLaw:true}), 100) <
     reviewPriority(c('The schedule is attached.',{assertsLaw:true}), 0));
  t('reach breaks ties among equals',
     reviewPriority(c('The schedule is attached.',{assertsLaw:true}), 100) >
     reviewPriority(c('The schedule is attached.',{assertsLaw:true}), 0));
}

console.log('signal catalogue');
t('signal ids are unique',
   new Set([...AUTHORITY_SIGNALS,...DRAFTING_SIGNALS].map(s=>s.id)).size ===
   AUTHORITY_SIGNALS.length + DRAFTING_SIGNALS.length);
t('every signal says what it found in plain terms',
   [...AUTHORITY_SIGNALS,...DRAFTING_SIGNALS].every(s=>s.says && s.says.length>15));
t('no signal claims to classify',
   [...AUTHORITY_SIGNALS,...DRAFTING_SIGNALS].every(s=>!/asserts law|is a drafting/i.test(s.says)));

console.log('no network, model, or filesystem path exists');
{
  const raw = await import('node:fs').then(fs=>fs.readFileSync('templates/tools/classification.mjs','utf8'));
  const code = raw.replace(/\/\*[\s\S]*?\*\//g,'').replace(/^\s*\/\/.*$/gm,'');
  t('no fetch', !/\bfetch\s*\(/.test(code));
  t('no model client', !/openai|anthropic|claude|gpt/i.test(code));
  t('no filesystem', !/node:fs|readFileSync|writeFileSync/.test(code));
}

console.log('against the real corpus');
{
  const C = loadCorpus();
  const r = triage(C.clauses);
  t('every clause lands in exactly one band',
     Object.values(r.bands).reduce((a,b)=>a+b,0)===C.clauses.length);
  t('every clause gets exactly one tension kind',
     Object.values(r.kinds).reduce((a,b)=>a+b,0)===C.clauses.length);
  t('the triage found both directions of misrouting',
     (r.kinds.dangerous||0)>0 && (r.kinds.stuck||0)>0);
  console.log(`        bands ${JSON.stringify(r.bands)}`);
  console.log(`        kinds ${JSON.stringify(r.kinds)}`);
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
