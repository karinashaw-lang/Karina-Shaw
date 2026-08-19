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
  /* Conditional on presence. These were parked when the corpus narrowed to generic templates,
     and a test that demands a parked clause exist would block exactly the kind of scoping
     decision it has no business having an opinion about. What it must not allow is one of them
     coming back as a legal requirement, which is what the rewrite was guarding against. */
  const practice=['can_local_ordinance','can_paga_audit','cal_baa_review'];
  let present=0;
  for(const id of practice){
    const c=C.clauses.find(x=>x.id===id);
    if(!c) continue;
    present++;
    t(`${id} is still described as practice, not as a requirement`,
      !/^(California|Federal)\s+(requires|prohibits)/.test(String(c.body).trim()));
  }
  console.log(`        ${present} of ${practice.length} practice clauses present in this corpus`);
}

/* The mirror risk. Everything above guards against the platform saying something wrong.
   This guards against it implying it has said everything — a user told the list is complete
   stops looking, and whatever the library happens not to hold becomes something they never
   knew to ask about. The product cannot support that claim: it is a California library with
   token coverage of four other states. */
console.log('the product never claims to be complete');
{
  const html=fs.readFileSync('draft-ai-engine.html','utf8');
  const a=html.indexOf('/* BUILD:CORPUS-START'), b=html.indexOf('BUILD:CORPUS-END */');
  const chrome=(html.slice(0,a)+html.slice(b))
    .replace(/\/\*[\s\S]*?\*\//g,'').replace(/^\s*\/\/.*$/gm,'');
  const COMPLETE=[
    [/everything applicable/i,      'says the package holds everything that applies'],
    [/nothing further to offer/i,   'implies the library is exhausted'],
    [/\bfully compliant\b/i,        'claims compliance'],
    [/covers everything/i,          'claims completeness'],
    [/\bcomprehensive\b/i,          'claims completeness'],
  ];
  for(const [re,why] of COMPLETE){
    t(`no "${re.source}" — ${why}`, !re.test(chrome));
  }
  t('the scope disclosure exists and is derived from the corpus',
    /function coverageLine\(/.test(chrome) && /state-specific clauses/.test(chrome));
  t('it is rendered whenever the user is choosing, not only when the list empties',
    (chrome.match(/scope\s*\+/g)||[]).length>0 && /const scope=/.test(chrome));
}

/* The MVP spec's hard "never" list. The AI may auto-fill, explain on hover, and count
   sections. It may not tell a user their document is missing something, needed something,
   or was incomplete — and a score that drops when they decline a suggestion is that
   judgement wearing a number, which is harder to argue with than the sentence would be. */
console.log('the platform expresses no view on whether the document is complete');
{
  const html=fs.readFileSync('draft-ai-engine.html','utf8');
  const a=html.indexOf('/* BUILD:CORPUS-START'), b=html.indexOf('BUILD:CORPUS-END */');
  const chrome=(html.slice(0,a)+html.slice(b))
    .replace(/\/\*[\s\S]*?\*\//g,'').replace(/^\s*\/\/.*$/gm,'');
  const BANNED=[
    [/missing from the package/i, 'tells the user clauses are missing'],
    [/clauses? not yet added/i,   'frames unpicked clauses as an omission'],
    [/you are missing/i,          'the spec forbids this exact sentence'],
    [/\bis incomplete\b/i,        'a verdict on the document'],
    [/AI confidence/i,            'a score is a judgement about the user document'],
  ];
  for(const [re,why] of BANNED) t(`no "${re.source}" — ${why}`, !re.test(chrome));
  t('the neutral count replaced it', /sections in these templates/.test(chrome));
  t('and it disclaims assessing sufficiency',
    /does not assess whether a document is complete or sufficient/.test(chrome));
}

console.log('every generated document carries the required disclaimer');
/* Wording per the MVP Product Spec, which supersedes the earlier protection guide. */
{
  const html=fs.readFileSync('draft-ai-engine.html','utf8');
  t('the exact footer wording is present',
    html.includes('This document was created using DRAFT software. DRAFT is not a law firm'));
  t('it is emitted per document, not once per page',
    /genfoot/.test(html) && html.split('genfoot').length>2);
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
