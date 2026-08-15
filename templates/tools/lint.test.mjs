import {DETECTORS, lintClause, score} from './lint.mjs';
let pass=0, fail=0;
const t=(n,c)=>{ if(c) pass++; else {fail++; console.log('  FAIL  '+n);} };
const C=(body,sources=[])=>({id:'x',body,sources});
const hits=(body,sources)=>lintClause(C(body,sources)).map(h=>h.id);

console.log('detectors fire on the pattern and not on its cured form');
t('threshold with no window flags',
  hits('Where the Company has seventy-five (75) or more employees, notice is required.').includes('threshold-without-lookback'));
t('threshold with a lookback does not flag',
  !hits('Where the Company had seventy-five (75) or more employees at any time during the preceding twelve (12) months.').includes('threshold-without-lookback'));

t('penalty with no cap flags',
  hits('The employer is liable for back pay for each day of shortfall.').includes('penalty-without-cap'));
t('penalty with a cap does not flag',
  !hits('The employer is liable for back pay up to a maximum of sixty (60) days.').includes('penalty-without-cap'));

t('single-conjunct scope test flags',
  hits('an employee who primarily works in California').includes('scope-test-single-conjunct'));
t('two-conjunct scope test does not flag',
  !hits('an employee who primarily resides and works in California').includes('scope-test-single-conjunct'));

t('filing without a form name flags',
  hits('The election must be filed with the IRS within thirty (30) days of grant.').includes('form-not-named'));
t('filing that names the form does not flag',
  !hits('File IRS Form 15620 within thirty (30) days of grant.').includes('form-not-named'));

t('deadline with no trigger flags',
  hits('Respond within thirty (30) days.').includes('deadline-without-trigger'));
t('deadline with a trigger does not flag',
  !hits('Respond within thirty (30) days of receipt.').includes('deadline-without-trigger'));

t('notice duty with one citation flags',
  hits('Provide written notice to the employee.',[{citation:'A'}]).includes('notice-duty-single-citation'));
t('notice duty with two citations does not flag',
  !hits('Provide written notice to the employee.',[{citation:'A'},{citation:'B'}]).includes('notice-duty-single-citation'));

t('absolute duty with no carve-out flags',
  hits('The Company shall not disclose the information.').includes('absolute-without-exception'));
t('absolute duty with a carve-out does not flag',
  !hits('The Company shall not disclose the information except as required by law.').includes('absolute-without-exception'));

console.log('hygiene');
t('every detector declares what it predicts', DETECTORS.every(d=>d.predicts && d.why && d.why.length>40));
t('detector ids are unique', new Set(DETECTORS.map(d=>d.id)).size===DETECTORS.length);
t('a clause with none of the patterns is not flagged',
  lintClause(C('The Parties are independent contractors.')).length===0);
t('field tokens do not trigger detectors',
  !hits('Pay within {{paymentDays}} days.').includes('deadline-without-trigger'));
t('a detector that throws does not break the lint',
  (()=>{ const bad={id:'boom',predicts:'x',why:'y'.repeat(50),test(){throw new Error('x');}};
         DETECTORS.push(bad); const r=lintClause(C('anything')); DETECTORS.pop(); return Array.isArray(r); })());

console.log('score — precision and recall are computed, not asserted');
const cl=[{id:'a',body:'x',sources:[]},{id:'b',body:'an employee who primarily works here',sources:[]}];
const fnd=[{clauseId:'b',gaps:['g']},{clauseId:'a',gaps:[]}];
const s=score(cl,fnd);
t('a flagged defective clause counts as a true positive', s.tp===1);
t('recall is a fraction', s.recall>=0 && s.recall<=1);
t('clauses with no ground truth are excluded', s.tp+s.fp+s.fn+s.tn===2);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
