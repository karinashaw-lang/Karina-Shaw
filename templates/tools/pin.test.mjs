import {checkPin, clauseVerdict, quoteHash} from './pin.mjs';
let pass=0, fail=0;
const t=(n,c)=>{ if(c) pass++; else {fail++; console.log('  FAIL  '+n);} };
const TEXT = {text:'An employer shall not require an employee who primarily resides and works in California to agree to a provision.'};
const good = {quote:'primarily resides and works in California', offset:TEXT.text.indexOf('primarily resides and works in California')};
good.quoteHash = quoteHash(good.quote);

console.log('checkPin — a pin must quote, and must still match');
t('an exact quote at the right offset matches', checkPin(good,TEXT).ok===true);
t('a quote absent from the text is refused',    checkPin({quote:'primarily works in California'},TEXT).state==='quote-absent');
t('a quote at a different offset is refused',   checkPin({...good, offset:0},TEXT).state==='quote-moved');
t('an altered quote hash is refused',           checkPin({...good, quoteHash:'deadbeef'},TEXT).state==='quote-altered');
t('a missing text is refused',                  checkPin(good,null).state==='text-missing');
t('a tampered text is refused',                 checkPin(good,{tampered:true}).state==='text-tampered');
t('every refusal explains itself',              ['quote-absent','quote-moved','text-missing']
   .every(s=>{const r=({'quote-absent':checkPin({quote:'zzz'},TEXT),'quote-moved':checkPin({...good,offset:0},TEXT),'text-missing':checkPin(good,null)})[s];
              return typeof r.why==='string'&&r.why.length>15;}));
t('offset is reported so a moved quote can be re-pinned', typeof checkPin({...good,offset:0},TEXT).at==='number');

console.log('clauseVerdict — pins alone are not verification');
const A=['a1','a2'], P=[{assertion:'a1'},{assertion:'a2'}], OK=[{ok:true},{ok:true}];
t('all pinned, all matching, signed → eligible',   clauseVerdict(A,P,OK,'K. Shaw').eligible===true);
t('all pinned and matching but unsigned → not eligible', clauseVerdict(A,P,OK,null).eligible===false);
t('unsigned refusal names the missing reviewer',   clauseVerdict(A,P,OK,null).why.includes('reviewer'));
t('an unpinned assertion blocks',                  clauseVerdict(A,[{assertion:'a1'}],OK,'K. Shaw').eligible===false);
t('a broken pin blocks',                           clauseVerdict(A,P,[{ok:true},{ok:false}],'K. Shaw').eligible===false);
t('no assertions blocks',                          clauseVerdict([],[],[],'K. Shaw').eligible===false);
t('a reviewer alone is never sufficient',          clauseVerdict(A,[],[],'K. Shaw').eligible===false);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
