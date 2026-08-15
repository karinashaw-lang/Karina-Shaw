import {extractAssertions, planQueries} from './assertions.mjs';
let pass=0, fail=0;
const t=(n,c)=>{ if(c) pass++; else {fail++; console.log('  FAIL  '+n);} };
const has=(a,frag)=>a.some(x=>x.text.toLowerCase().includes(frag.toLowerCase()));

console.log('extractAssertions — pulls each checkable number out separately');
const a1=extractAssertions('Provide two (2) hours of training to supervisors and one (1) hour to non-supervisory employees, within six (6) months of hire, and every two (2) years thereafter.');
t('finds the two-hour figure',   has(a1,'two (2) hours'));
t('finds the one-hour figure',   has(a1,'one (1) hour'));
t('finds the six-month deadline',has(a1,'six (6) months'));
t('finds the two-year cadence',  has(a1,'two (2) years'));
t('four distinct assertions from one sentence', a1.length>=4);

const a2=extractAssertions('Where the Company has five (5) or more employees, provide up to forty (40) hours per year.');
t('finds a headcount threshold', a2.some(x=>x.kind==='headcount'));
t('headcount value is captured', a2.some(x=>x.kind==='headcount'&&x.value==='5'));

const a3=extractAssertions('Retainage shall not exceed ten percent (10%) and shall be released within thirty (30) days.');
t('finds a percentage', a3.some(x=>x.kind==='percentage'&&x.value==='10'));
t('finds a day count',  a3.some(x=>x.kind==='duration-days'&&x.value==='30'));

t('field tokens do not become assertions', !extractAssertions('Pay {{paymentDays}} days after invoice.').some(x=>x.text.includes('{{')));
t('cross-references are stripped',         !extractAssertions('See <<xr:gov_voting>> for approval.').some(x=>x.text.includes('xr:')));
t('a clause with no numbers yields no numeric assertions',
   extractAssertions('The Parties are independent contractors.').filter(x=>x.kind!=='deadline-phrase').length===0);
t('duplicates are collapsed',
   extractAssertions('cure within thirty (30) days, and again within thirty (30) days').filter(x=>x.kind==='duration-days').length===1);
t('distinct durations are kept apart',
   extractAssertions('within thirty (30) days and within sixty (60) days').filter(x=>x.kind==='duration-days').length===2);

console.log('planQueries — queries must approach from different angles');
const clause={title:'Harassment Prevention Training', jurisdictions:['CA'],
  sources:[{citation:'Cal. Gov. Code §12950.1'}]};
const qs=planQueries(clause, a1);
t('includes a citation-led query', qs.some(q=>q.angle==='citation'&&q.query.includes('12950.1')));
t('includes a subject-led query',  qs.some(q=>q.angle==='subject'));
t('includes value-led queries',    qs.some(q=>q.angle==='value'));
t('angles are not all identical',  new Set(qs.map(q=>q.angle)).size>=3);
t('no two queries are the same string', new Set(qs.map(q=>q.query)).size===qs.length);
t('does not repeat the jurisdiction word',
   !planQueries({title:'California Paid Sick Leave',jurisdictions:['CA'],sources:[]},[]).some(q=>/california california/i.test(q.query)));
t('value queries record what they are checking',
   planQueries(clause,a1).filter(q=>q.angle==='value').every(q=>q.checking&&q.expect));
t('a clause with no citation still plans queries', planQueries({title:'X',jurisdictions:[],sources:[]},a1).length>0);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
