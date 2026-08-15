/* Asserts the property that matters: verify.mjs cannot upgrade a clause without
   evidence it actually obtained. Every case here is a way the pipeline could have
   been written to leak an upgrade. Run: node templates/tools/verify.test.mjs */
import {decideLevel, hostsFor, fetchEvidence} from './verify.mjs';

let pass=0, fail=0;
const t=(name,cond)=>{ if(cond){pass++;} else {fail++; console.log('  FAIL  '+name);} };

const ok  = (host,kind='statute-mirror')=>({ok:true, url:`https://${host}/x`, hostKind:kind});
const bad = (reason)=>({ok:false, url:'https://blocked.example/x', reason});

console.log('decideLevel — must not upgrade without evidence');
t('no evidence at all leaves level untouched',        decideLevel('unsourced',[])==='unsourced');
t('all fetches failed leaves level untouched',        decideLevel('single-source',[bad('http-403'),bad('http-403')])==='single-source');
t('one good source is not corroboration',             decideLevel('single-source',[ok('a.com')])==='single-source');
t('two good sources on the same host is not enough',  decideLevel('single-source',[ok('a.com'),ok('www.a.com')])==='single-source');
t('two good sources on distinct hosts corroborates',  decideLevel('single-source',[ok('a.com'),ok('b.com')])==='corroborated');
t('primary alone is not enough',                      decideLevel('single-source',[ok('leginfo.legislature.ca.gov','primary')])==='single-source');
t('primary plus a second host verifies',              decideLevel('single-source',[ok('leginfo.legislature.ca.gov','primary'),ok('b.com')])==='primary-verified');
t('a failed primary does not count',                  decideLevel('single-source',[bad('http-403'),ok('b.com')])==='single-source');
t('never downgrades an existing level',               decideLevel('primary-verified',[])==='primary-verified');
t('never downgrades on partial evidence',             decideLevel('corroborated',[ok('a.com')])==='corroborated');

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

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
