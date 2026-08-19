/* The Safe Harbor Test, automated.

   The project's legal protection guide draws one line and repeats it: the platform offers,
   the user decides. "This clause is commonly used" is safe; "you need this clause" is advice
   about a particular person's situation. That line is easy to hold on the day someone writes
   it down and easy to lose six months later in a copy tweak nobody reviewed.

   Two things are checked, and they are different.

   The UI chrome must never tell the user what they should do. That is the platform speaking.

   A clause body must never open with a bare imperative — "Register with the EDD", "Do not ask
   about salary history". Dropping the subject does not make it less of an instruction; it is
   "you should" with the "you" removed. The fix is attribution, not softening: "California
   requires an employer to register with the EDD" says exactly the same thing and attributes
   the duty to the statute that actually imposes it.

   What is deliberately NOT flagged: "The Company shall pay all wages owed". That is the
   document speaking, in a document the user is assembling. Operative contract language is the
   product, and a check that fired on it would be telling this project to stop drafting.
*/
import fs from 'node:fs';
import {loadCorpus} from './corpus.mjs';

let pass=0, fail=0;
const t=(n,c)=>{ if(c) pass++; else {fail++; console.log('  FAIL  '+n);} };

/* Words that turn a description of the law into advice for this reader. */
const UNSAFE=[
  [/\byou should\b/i,            'tells the user what they should do'],
  [/\byou need\s+(this|that|a|an|to)\b/i, 'tells the user what they need'],
  [/\bwe recommend\b/i,          'the platform recommending a term'],
  [/\bis legally sound\b/i,      'a claim about legal sufficiency'],
  [/\bguarantee[sd]?\b/i,        'a guarantee about a legal outcome'],
  [/as good as a lawyer/i,       'equating the tool with counsel'],
  [/\bdon'?t need a lawyer\b/i,  'discouraging counsel'],
];

console.log('UI chrome does not give advice');
{
  const html=fs.readFileSync('draft-ai-engine.html','utf8');
  const a=html.indexOf('/* BUILD:CORPUS-START'), b=html.indexOf('BUILD:CORPUS-END */');
  t('the corpus block was located, so the scan is really excluding it', a>0 && b>a);
  /* Clause data is checked separately, below, against a different rule. Comments are stripped
     so the check cannot fire on the prose that documents the check. */
  const chrome=(html.slice(0,a)+html.slice(b))
    .replace(/\/\*[\s\S]*?\*\//g,'').replace(/^\s*\/\/.*$/gm,'');
  for(const [re,why] of UNSAFE){
    const m=chrome.match(re);
    t(`no "${re.source}" in the UI — ${why}`, !m);
    if(m) console.log('        found: …'+chrome.slice(Math.max(0,chrome.indexOf(m[0])-60), chrome.indexOf(m[0])+60).replace(/\s+/g,' ')+'…');
  }
}

console.log('clause bodies attribute duties rather than issuing them');
{
  const C=loadCorpus();
  const IMPERATIVE=/^(Do not|Don't|Never|Provide|Post|Register|File|Obtain|Maintain|Conduct|Distribute|Report|Retain|Establish|Confirm|Check|Review|Apply|Train|Respond|Reconcile|Track|Document|Notify|Ensure|Complete|Budget|Adopt|Assemble)\b/;
  const offenders=C.clauses.filter(c=>IMPERATIVE.test(String(c.body).trim()));
  t(`no clause opens with a bare imperative (${offenders.length} found)`, offenders.length===0);
  for(const c of offenders) console.log(`        ${c.id}: "${String(c.body).trim().slice(0,70)}…"`);

  /* The rewrite must not have turned a recommended practice into a legal requirement. That
     would swap one false statement for another, which is not an improvement. */
  const practice=['can_local_ordinance','can_paga_audit','cal_baa_review'];
  for(const id of practice){
    const c=C.clauses.find(x=>x.id===id);
    t(`${id} is still described as practice, not as a requirement`,
      c && !/^(California|Federal)\s+(requires|prohibits)/.test(String(c.body).trim()));
  }
}

console.log('every generated document carries the required disclaimer');
{
  const html=fs.readFileSync('draft-ai-engine.html','utf8');
  t('the exact footer wording is present',
    html.includes('This document was generated using artificial intelligence tools and'));
  t('it is emitted per document, not once per page',
    /genfoot/.test(html) && html.split('genfoot').length>2);
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
