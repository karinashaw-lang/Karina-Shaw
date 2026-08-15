import {classify, bodyHash} from './provenance.mjs';
let pass=0, fail=0;
const t=(n,c)=>{ if(c) pass++; else {fail++; console.log('  FAIL  '+n);} };
const C=(id,body)=>({id,body});
const M=(id,body,prov='memory-legacy')=>({entries:{[id]:{bodyHash:bodyHash(body),provenance:prov}}});
const PIN=id=>[{clause:id}];

console.log('classify — memory-authored content cannot enter or change silently');
t('a recorded, unchanged clause passes',
  classify(C('a','x'), M('a','x'), []).ok===true);
t('a new clause with no pin fails',
  classify(C('b','x'), M('a','x'), []).ok===false);
t('a new clause with a pin passes',
  classify(C('b','x'), M('a','x'), PIN('b')).ok===true);
t('a modified body with no pin fails',
  classify(C('a','x changed'), M('a','x'), []).ok===false);
t('a modified body with a pin passes',
  classify(C('a','x changed'), M('a','x'), PIN('a')).ok===true);
t('a one-character change is detected',
  classify(C('a','x.'), M('a','x'), []).state==='modified');
t('a pin for a different clause does not help',
  classify(C('b','x'), M('a','x'), PIN('zzz')).ok===false);
t('failure explains that memory is the only remaining origin',
  classify(C('b','x'), M('a','x'), []).why.includes('memory'));
t('legacy provenance is surfaced on unchanged clauses',
  classify(C('a','x'), M('a','x'), []).provenance==='memory-legacy');
t('source-composed provenance is preserved',
  classify(C('a','x'), M('a','x','source-composed'), []).provenance==='source-composed');
t('an empty manifest treats everything as unrecorded',
  classify(C('a','x'), {entries:{}}, []).state==='unrecorded');
t('body hash is stable', bodyHash('abc')===bodyHash('abc'));
t('body hash is sensitive', bodyHash('abc')!==bodyHash('abd'));

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
