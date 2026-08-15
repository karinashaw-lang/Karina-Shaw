/* Tests for the two-ladder release gate.

   The property that matters most is separation: an authority clause cannot be released by
   a lawyer's signoff, and a drafting clause cannot be released by citations. Each ladder
   has to be blind to the other's evidence, or the whole distinction collapses back into
   one number and the category error returns.
*/
import {gateFor, trackOf, authorityRank, draftingRank, validateSignoff, validateClassification,
        looksLikeAPerson, lawTalk, summarise} from './review.mjs';
import {loadCorpus} from './corpus.mjs';

let pass=0, fail=0;
const t=(n,c)=>{ if(c) pass++; else {fail++; console.log('  FAIL  '+n);} };

const TAX = loadCorpus().taxonomy;

/* Every fixture carries a classification review, because "reviewed" is itself a claim that
   has to be earned — the section below tests that separately. */
const CLASSIFIED = {classifiedBy:'reviewed', classificationReview:{reviewer:'R. Okonkwo', date:'2026-08-01'}};
const authority = (over={}) => ({id:'a1', assertsLaw:true, ...CLASSIFIED,
  verification:'corroborated', sources:[{citation:'Test Code §1'}], body:'x', ...over});
const drafting  = (over={}) => ({id:'d1', assertsLaw:false, ...CLASSIFIED,
  verification:'unsourced', sources:[], body:'The parties agree to the payment terms set out above.', ...over});
const signoff   = (over={}) => ({level:'counsel-reviewed', reviewer:'K. Shaw',
  role:'General Counsel', date:'2026-08-15',
  scope:'read against the standard MSA posture for a mid-market SaaS vendor', ...over});

console.log('routing');
t('an authority clause routes to the authority track', trackOf(authority())==='authority');
t('a drafting clause routes to the drafting track', trackOf(drafting())==='drafting');
t('an unclassified clause routes nowhere', trackOf({id:'x'})===null);
t('and is refused rather than defaulted', gateFor({id:'x'},TAX).ok===false);
t('the refusal says why', gateFor({id:'x'},TAX).blocking.includes('assertsLaw'));

console.log('the ladders are blind to each other');
{
  t('a drafting clause at counsel-reviewed passes',
     gateFor(drafting({draftingReview:signoff()}),TAX).ok);
  t('a drafting clause with citations but no review still fails',
     gateFor(drafting({verification:'primary-verified', sources:[{citation:'Test Code §1'}]}),TAX).ok===false);
  t('and the reason names the drafting ladder, not the sources',
     gateFor(drafting({verification:'primary-verified'}),TAX).ladder==='draftingReviewLevels');

  t('an authority clause with a lawyer signoff but no sources still fails',
     gateFor(authority({verification:'unsourced', draftingReview:signoff()}),TAX).ok===false);
  t('and the reason names the source ladder, not the signoff',
     gateFor(authority({verification:'unsourced', draftingReview:signoff()}),TAX).ladder==='verificationLevels');
  t('an authority clause is graded on its own ladder',
     gateFor(authority(),TAX).ok && gateFor(authority({verification:'single-source'}),TAX).ok===false);
}

console.log('an unreviewed classification blocks both ladders');
{
  t('a fully cited authority clause is blocked while its routing is a guess',
     gateFor(authority({classifiedBy:'heuristic-unreviewed'}),TAX).ok===false);
  t('a fully signed-off drafting clause is blocked the same way',
     gateFor(drafting({classifiedBy:'heuristic-unreviewed', draftingReview:signoff()}),TAX).ok===false);
  t('and the reason is the classification, not the ladder',
     gateFor(drafting({classifiedBy:'heuristic-unreviewed', draftingReview:signoff()}),TAX)
       .blocking.includes('heuristic'));
}

console.log('a signoff is a person taking responsibility');
{
  t('no review recorded is not a pass', gateFor(drafting(),TAX).ok===false);
  t('unreviewed is below the gate', gateFor(drafting({draftingReview:{level:'unreviewed'}}),TAX).ok===false);
  t('self-reviewed is below the gate — an author checking their own work is not review',
     gateFor(drafting({draftingReview:{level:'self-reviewed', reviewer:'K. Shaw', date:'2026-08-15'}}),TAX).ok===false);
  t('counsel-approved is above the gate',
     gateFor(drafting({draftingReview:signoff({level:'counsel-approved'})}),TAX).ok);

  t('a review with no reviewer is refused',
     validateSignoff(signoff({reviewer:undefined}),TAX).length>0);
  t('a review with no date is refused', validateSignoff(signoff({date:undefined}),TAX).length>0);
  t('a loose date is refused', validateSignoff(signoff({date:'August 2026'}),TAX).length>0);
  t('a counsel review with no role is refused', validateSignoff(signoff({role:undefined}),TAX).length>0);
  t('a counsel review with no scope is refused', validateSignoff(signoff({scope:undefined}),TAX).length>0);
  t('a token scope is refused', validateSignoff(signoff({scope:'looked'}),TAX).length>0);
  t('an unknown level is refused', validateSignoff(signoff({level:'looks-fine'}),TAX).length>0);
  t('the reviewer being the author is refused',
     validateSignoff(signoff({author:'K. Shaw'}),TAX).some(p=>p.includes('author')));
  t('a complete signoff is accepted', validateSignoff(signoff(),TAX).length===0);
  t('unreviewed needs nothing else', validateSignoff({level:'unreviewed'},TAX).length===0);
}

console.log('"reviewed" is not a magic string');
{
  const claim = over => ({...authority(), classifiedBy:'reviewed', classificationReview:undefined, ...over});
  t('claiming a reviewed classification with no record is refused',
     validateClassification(claim({})).length>0);
  t('and the gate refuses it too', gateFor(claim({}),TAX).ok===false);
  t('a named reviewer and a date is enough',
     validateClassification(claim({classificationReview:{reviewer:'K. Shaw', date:'2026-08-15'}})).length===0);
  t('and then the clause is graded on its ladder',
     gateFor(claim({classificationReview:{reviewer:'K. Shaw', date:'2026-08-15'}}),TAX).ok);
  t('a team is not a reviewer',
     validateClassification(claim({classificationReview:{reviewer:'Legal', date:'2026-08-15'}})).length>0);
  t('a missing date is refused',
     validateClassification(claim({classificationReview:{reviewer:'K. Shaw'}})).length>0);
  t('a heuristic classification needs no record',
     validateClassification({...authority(), classifiedBy:'heuristic-unreviewed', classificationReview:undefined}).length===0);
}

console.log('who counts as a person');
t('a name counts', looksLikeAPerson('K. Shaw'));
t('a full name counts', looksLikeAPerson('Jordan Alvarez'));
t('"the team" does not', !looksLikeAPerson('the team'));
t('"Legal" does not', !looksLikeAPerson('Legal'));
t('a model does not', !looksLikeAPerson('Claude'));
t('a tool does not', !looksLikeAPerson('ingest.mjs'));
t('an empty string does not', !looksLikeAPerson(''));
t('a bare initial does not', !looksLikeAPerson('K'));

console.log('a drafting clause must not talk like a statute');
t('an ordinary term is silent', lawTalk(drafting()).length===0);
t('"required by law" is flagged',
   lawTalk(drafting({body:'Notice is required by law within 30 days.'})).length>0);
t('a section symbol is flagged',
   lawTalk(drafting({body:'As provided in § 1400 of the applicable code.'})).length>0);
t('a U.S. Code citation is flagged',
   lawTalk(drafting({body:'An election under 26 U.S.C. 83 may be made.'})).length>0);
t('an authority clause is not checked — it is meant to talk like a statute',
   lawTalk(authority({body:'Notice is required by law.'})).length===0);

console.log('against the real corpus');
{
  const C = loadCorpus();
  const s = summarise(C.clauses, C.taxonomy);
  t('every clause is routed to a track', s.unrouted===0);
  t('both tracks are populated', s.authority.total>0 && s.drafting.total>0);
  t('the two tracks account for every clause',
     s.authority.total + s.drafting.total === C.clauses.length);
  t('nothing passes either gate today', s.authority.passing===0 && s.drafting.passing===0);
  console.log(`        ${s.authority.total} authority / ${s.drafting.total} drafting, ${s.authority.passing+s.drafting.passing} passing`);
  for(const [k,v] of Object.entries(s.byBlocker)) console.log(`        ${String(v).padStart(4)}  ${k}`);
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
