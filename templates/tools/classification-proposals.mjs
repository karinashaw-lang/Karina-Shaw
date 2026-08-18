/* Expanding the classification proposals into one decision per clause.

   The proposals are recorded in verification/classification/proposals.json as a per-document
   default plus explicit exceptions, not as 360 rows. That is deliberate. A list of 360
   verdicts cannot be argued with — you would have to re-read every clause to find out whether
   the reviewer was applying a rule or guessing. A default plus exceptions states the rule, and
   every exception is a place where the rule was overridden on purpose. A reader who disagrees
   with one document's default can overturn 61 clauses with one objection.

   The test being applied, stated once so it can be attacked:

     Authority — the clause DESCRIBES the law. "Such provisions are void under California law."
       "An assignment signed after work has begun may require separate consideration." The
       reader relies on it as a report about the world, so it can be wrong, and the only way to
       find out is to read the statute.

     Drafting — the clause OPERATES. "This handbook is not a contract." "The Contractor assigns
       to the Company all right, title and interest." It is the instrument speaking. It cannot
       be checked against a statute because it is not making a claim about one.

     A clause that only defers — "as required by the law of {{opStateLong}}" — asserts nothing
       and is drafting. It names a legal source without saying what it contains.

   This file expands, checks, and reports. It does not write to the corpus: applying a
   classification requires a named person, which is what classification.mjs --apply enforces.

   Usage: node templates/tools/classification-proposals.mjs [--csv]
*/
import fs from 'node:fs';
import path from 'node:path';
import {loadCorpus, ROOT} from './corpus.mjs';
import {lawTalk} from './review.mjs';
import {writeIfChanged, VOLATILE_LINES} from './artifact.mjs';

const V = path.join(ROOT,'..','verification');
const PROPOSALS = path.join(V,'classification','proposals.json');

export function expand(proposals, clauses){
  const reviewed = new Set(Object.keys(proposals.deferralsReviewed || {}).filter(k=>!k.startsWith('$')));
  const byDoc = new Map();
  for(const c of clauses){
    if(!byDoc.has(c.doc)) byDoc.set(c.doc, []);
    byDoc.get(c.doc).push(c);
  }
  const rows = [], problems = [];

  for(const [doc, spec] of Object.entries(proposals.documents)){
    const cs = byDoc.get(doc);
    if(!cs){ problems.push(`proposals name document "${doc}", which has no clauses`); continue; }
    const ids = new Set(cs.map(c=>c.id));
    const other = spec.default === 'authority' ? 'drafting' : 'authority';
    const listed = spec[other] || [];
    for(const id of listed){
      if(!ids.has(id)) problems.push(`"${doc}" lists exception "${id}", which is not a clause in that document`);
    }
    const exceptions = new Set(listed);
    /* An exception list under the key matching the default is a contradiction, not a no-op. */
    for(const id of (spec[spec.default] || []))
      problems.push(`"${doc}" lists "${id}" under "${spec.default}", which is already the default — say what you mean`);

    for(const c of cs){
      const decision = exceptions.has(c.id) ? other : spec.default;
      rows.push({
        id: c.id, doc, title: c.title, severity: c.severity,
        decision,
        byException: exceptions.has(c.id),
        current: c.assertsLaw === true ? 'authority' : c.assertsLaw === false ? 'drafting' : 'unset',
        classifiedBy: c.classifiedBy || 'unset',
        flips: (c.assertsLaw === true ? 'authority' : c.assertsLaw === false ? 'drafting' : 'unset') !== decision,
        /* lawTalk() short-circuits on the clause's STORED label, so asking it about a clause
           currently marked authority returns nothing. The question here is about the PROPOSED
           label, so evaluate the proposal rather than the thing the proposal replaces —
           otherwise every flip to drafting is exempt from the one check aimed at flips. */
        lawTalk: decision === 'drafting' ? lawTalk({...c, assertsLaw:false}) : [],
        why: spec.why
      });
    }
  }
  for(const c of clauses)
    if(!proposals.documents[c.doc]) problems.push(`clause "${c.id}" is in document "${c.doc}", which the proposals do not cover`);

  /* A clause proposed as drafting whose body still talks like a statute has to be accounted for
     by name. Waving the whole category through in one sentence would make the check ornamental —
     the point of it is that somebody had to look at each one and say why it survives. */
  for(const r of rows)
    if(r.decision === 'drafting' && r.lawTalk.length && !reviewed.has(r.id))
      problems.push(`"${r.id}" is proposed as drafting but its body ${r.lawTalk.join(' and ')} — add it to deferralsReviewed with a reason, or classify it as authority`);
  for(const id of reviewed)
    if(!rows.some(r=>r.id===id && r.decision==='drafting' && r.lawTalk.length))
      problems.push(`deferralsReviewed names "${id}", which no longer needs the override — remove it rather than leaving a stale exemption`);

  return {rows, problems};
}

const INVOKED = process.argv[1] && process.argv[1].endsWith('classification-proposals.mjs');
if(INVOKED){
  const C = loadCorpus();
  const proposals = JSON.parse(fs.readFileSync(PROPOSALS,'utf8'));
  const {rows, problems} = expand(proposals, C.clauses);

  const auth = rows.filter(r=>r.decision==='authority');
  const draft = rows.filter(r=>r.decision==='drafting');
  const flips = rows.filter(r=>r.flips);
  const toAuthority = flips.filter(r=>r.decision==='authority');
  const toDrafting  = flips.filter(r=>r.decision==='drafting');
  /* A clause proposed as drafting whose body still talks like a statute is where this review is
     most likely to be wrong, and in the direction that matters — an unchecked legal claim ships. */
  const risky = draft.filter(r=>r.lawTalk.length);

  const esc = v => `"${String(v??'').replace(/"/g,'""')}"`;
  /* The note travels into the clause JSON on --apply. It says which rule produced the call, so a
     later reader can trace any one clause back to a document-level decision they can argue with,
     rather than finding 360 flags with no reasoning attached to any of them. */
  const note = r => r.byException
    ? `${r.decision}: named exception to the "${r.doc}" default of ${r.decision==='authority'?'drafting':'authority'}`
    : `${r.decision}: the "${r.doc}" default`;
  const csv = ['clause,document,title,severity,decision,by_exception,current,flips,law_talk,note']
    .concat(rows.map(r=>[r.id,r.doc,r.title,r.severity,r.decision,r.byException?'exception':'default',
                         r.current,r.flips?'flip':'',r.lawTalk.join('; '),note(r)].map(esc).join(',')))
    .join('\n');
  writeIfChanged(path.join(V,'classification','proposed-decisions.csv'), csv+'\n',
                 {linePatterns:VOLATILE_LINES, fsImpl:fs});

  if(problems.length){
    console.log(`${problems.length} problem(s) with the proposals:`);
    for(const p of problems) console.log('  ! '+p);
  } else {
    console.log('proposals cover every clause, and every named exception exists');
  }
  console.log(`${rows.length} clause(s): ${auth.length} authority, ${draft.length} drafting`);
  console.log(`  ${rows.filter(r=>r.byException).length} set by exception, ${rows.length-rows.filter(r=>r.byException).length} by document default`);
  console.log(`  ${flips.length} differ from the current heuristic label: ${toAuthority.length} to authority, ${toDrafting.length} to drafting`);
  if(risky.length){
    console.log(`  ${risky.length} proposed drafting whose body still talks like a statute, each accounted for in deferralsReviewed:`);
    for(const r of risky) console.log(`    ${r.id} — ${r.lawTalk.join(', ')}`);
  }
  const perDoc = {};
  for(const r of rows){ perDoc[r.doc] = perDoc[r.doc] || {a:0,d:0}; perDoc[r.doc][r.decision==='authority'?'a':'d']++; }
  console.log('  by document (authority/drafting):');
  for(const [d,v] of Object.entries(perDoc).sort((x,y)=>(y[1].a+y[1].d)-(x[1].a+x[1].d)))
    console.log(`    ${d.padEnd(22)} ${String(v.a).padStart(3)} / ${String(v.d).padStart(3)}`);
  console.log('written to verification/classification/proposed-decisions.csv');
  process.exitCode = problems.length ? 1 : 0;
}
