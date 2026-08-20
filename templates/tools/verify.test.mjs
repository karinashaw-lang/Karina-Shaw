/* Asserts the property that matters: verify.mjs cannot upgrade a clause without
   evidence it actually obtained. Every case here is a way the pipeline could have
   been written to leak an upgrade. Run: node templates/tools/verify.test.mjs

   This file used to hand-write hostKind:'primary' directly into fake evidence objects —
   a value fetchEvidence() can never actually produce (it only ever sets 'publisher',
   'agency', 'mirror', or 'unknown', read from registry.json's hostKinds). decideLevel's
   own check for the literal string 'primary' matched that fake value perfectly and never
   matched anything a real fetch could return, so the pipeline could never reach
   primary-verified no matter what evidence came in — and this suite reported all green
   the entire time, because the test and the bug agreed with each other. Fixed by making
   the fakes use real kind values, and adding a check below that a real registry.json kind
   is what decideLevel actually recognizes. */
import fs from 'node:fs';
import path from 'node:path';
import {decideLevel, hostsFor, fetchEvidence, gatherCitationEvidence} from './verify.mjs';
import {ROOT} from './corpus.mjs';
import {isPrimaryKind} from './sources.mjs';

let pass=0, fail=0;
const t=(name,cond)=>{ if(cond){pass++;} else {fail++; console.log('  FAIL  '+name);} };

const ok  = (host,kind='mirror')=>({ok:true, url:`https://${host}/x`, hostKind:kind});
const bad = (reason)=>({ok:false, url:'https://blocked.example/x', reason});

console.log('decideLevel — must not upgrade without evidence');
t('no evidence at all leaves level untouched',        decideLevel('unsourced',[])==='unsourced');
t('all fetches failed leaves level untouched',        decideLevel('single-source',[bad('http-403'),bad('http-403')])==='single-source');
t('one good source is not corroboration',             decideLevel('single-source',[ok('a.com')])==='single-source');
t('two good sources on the same host is not enough',  decideLevel('single-source',[ok('a.com'),ok('www.a.com')])==='single-source');
t('two good sources on distinct hosts corroborates',  decideLevel('single-source',[ok('a.com'),ok('b.com')])==='corroborated');
t('primary alone is not enough',                      decideLevel('single-source',[ok('leginfo.legislature.ca.gov','publisher')])==='single-source');
t('publisher plus a second host verifies',            decideLevel('single-source',[ok('leginfo.legislature.ca.gov','publisher'),ok('b.com')])==='primary-verified');
t('agency plus a second host also verifies',          decideLevel('single-source',[ok('edd.ca.gov','agency'),ok('b.com')])==='primary-verified');
t('a mirror plus a second host does NOT verify — a mirror is not primary',
  decideLevel('single-source',[ok('law.justia.com','mirror'),ok('b.com')])==='corroborated');
t('a failed primary does not count',                  decideLevel('single-source',[bad('http-403'),ok('b.com')])==='single-source');
t('never downgrades an existing level',               decideLevel('primary-verified',[])==='primary-verified');
t('never downgrades on partial evidence',             decideLevel('corroborated',[ok('a.com')])==='corroborated');

console.log('decideLevel recognizes the SAME kinds fetchEvidence can actually produce');
{
  /* The real bug: a fictional kind in the test agreed with a fictional check in the code,
     and neither was ever compared against what registry.json actually contains. This reads
     the real file and proves every kind it uses either is or is not recognized correctly —
     no more relying on a human to remember the two have to match. */
  const reg = JSON.parse(fs.readFileSync(path.join(ROOT,'sources','registry.json'),'utf8'));
  const realKinds = new Set(Object.values(reg.hostKinds));
  t('registry.json actually contains publisher and agency kinds (or this check proves nothing)',
    realKinds.has('publisher') && realKinds.has('agency'));
  t('every publisher/agency kind in the real registry is recognized as primary',
    [...realKinds].filter(k=>k==='publisher'||k==='agency').every(isPrimaryKind));
  t('every mirror kind in the real registry is correctly NOT primary',
    [...realKinds].filter(k=>k==='mirror').every(k=>!isPrimaryKind(k)));
  t('the literal string "primary" — the old bug\'s check — is not itself a real kind',
    !realKinds.has('primary'));
  t('a clause with real evidence from a real publisher host actually reaches primary-verified',
    decideLevel('single-source', [ok('leginfo.legislature.ca.gov', reg.hostKinds['leginfo.legislature.ca.gov']), ok('b.com','mirror')]) === 'primary-verified');
}

console.log('fetchEvidence — must reject anything that is not a real body');
const stub = async()=>({ok:true, status:200, text:async()=>'<html></html>'});
const err  = async()=>({ok:false, status:403, text:async()=>''});
const boom = async()=>{ throw Object.assign(new Error('blocked'),{cause:{code:'EGRESS_BLOCKED'}}); };
const real = async()=>({ok:true, status:200, text:async()=>'x'.repeat(2000)});
t('403 is not evidence',        !(await fetchEvidence('h','c',err)).ok);
t('short body is not evidence', !(await fetchEvidence('h','c',stub)).ok);
t('thrown error is not evidence',!(await fetchEvidence('h','c',boom)).ok);
t('a real body is evidence',     (await fetchEvidence('h','c',real)).ok);
t('failure records a reason',    typeof (await fetchEvidence('h','c',err)).reason === 'string');

console.log('hostsFor — citation routing');
t('CA Labor Code routes to CA hosts',   hostsFor('Cal. Lab. Code §2810.5').hosts.includes('leginfo.legislature.ca.gov'));
t('CFR routes to eCFR',                 hostsFor('45 C.F.R. §164.504(e)').hosts.includes('www.ecfr.gov'));
t('USC routes to Cornell',              hostsFor('8 U.S.C. §1324a').hosts.includes('www.law.cornell.edu'));
t('CA regulation routes somewhere',     hostsFor('8 C.C.R. §3203') !== null);
t('municipal code routes somewhere',    hostsFor('S.F. Admin. Code / Police Code') !== null);
t('an unroutable citation returns null',hostsFor('Some Made Up Authority') === null);

console.log('gatherCitationEvidence — must not stop at the first success');
{
  /* Reproduces the exact shape the real dry run hit: a citation with two candidate hosts
     where the first (ecfr.gov) 403s and the second (cornell.edu) succeeds. The old "stop at
     first success" code never even got here since it only stopped early on success, not
     failure — but the fix this guards against is the mirror image: a citation where the
     FIRST host succeeds. The old code would have stopped there and never learned whether the
     second host also had it, capping every single-citation clause at one host of evidence
     forever regardless of what else was reachable. */
  const fakeFetch = host => async () => host === 'blocked.example'
    ? {ok:false, status:403, text:async()=>''}
    : {ok:true, status:200, text:async()=>'x'.repeat(2000)};

  const allSucceed = await gatherCitationEvidence('Cal. Lab. Code §2802', ['a.example','b.example'],
    {fetchImpl: async (url) => fakeFetch(new URL(url).host)()});
  t('both hosts are tried even though the first one succeeded',
    allSucceed.length === 2 && allSucceed.every(e=>e.ok));
  t('evidence carries the host and citation for each entry',
    allSucceed[0].host === 'a.example' && allSucceed[1].host === 'b.example' &&
    allSucceed.every(e=>e.citation === 'Cal. Lab. Code §2802'));

  const oneBlocked = await gatherCitationEvidence('45 C.F.R. §164.308', ['blocked.example','ok.example'],
    {fetchImpl: async (url) => fakeFetch(new URL(url).host)()});
  t('a failure on the first host does not stop the second from being tried',
    oneBlocked.length === 2 && !oneBlocked[0].ok && oneBlocked[1].ok);

  const feedThrough = await gatherCitationEvidence('x', ['a.example','b.example'],
    {fetchImpl: async () => ({ok:true, status:200, text:async()=>'x'.repeat(2000)})});
  t('two successful hosts for ONE citation is exactly the evidence decideLevel needs',
    decideLevel('single-source', feedThrough.map(e=>({...e, hostKind:'mirror'}))) === 'corroborated');
}

console.log('gatherCitationEvidence — respects a shared fetch budget');
{
  const always = async () => ({ok:true, status:200, text:async()=>'x'.repeat(2000)});
  const budget = {remaining: 1};
  const got = await gatherCitationEvidence('c', ['a.example','b.example','c.example'], {fetchImpl: always, budget});
  t('stops once the shared budget is spent', got.length === 1 && budget.remaining === 0);

  const exhausted = {remaining: 0};
  const none = await gatherCitationEvidence('c', ['a.example'], {fetchImpl: always, budget: exhausted});
  t('a zero budget tries nothing', none.length === 0);

  const budget2 = {remaining: 5};
  await gatherCitationEvidence('c1', ['a.example','b.example'], {fetchImpl: always, budget: budget2});
  await gatherCitationEvidence('c2', ['c.example'], {fetchImpl: always, budget: budget2});
  t('the budget is shared and decremented across separate citations, not reset per call',
    budget2.remaining === 2);

  const noOpts = await gatherCitationEvidence('c', ['a.example'], {fetchImpl: always});
  t('an unspecified budget defaults to unlimited', noOpts.length === 1);
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
