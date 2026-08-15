import {scoreFinding, hostsOf, levelFor} from './findings.mjs';
let pass=0, fail=0;
const t=(n,c)=>{ if(c) pass++; else {fail++; console.log('  FAIL  '+n);} };
const S=(...h)=>h.map(x=>({url:`https://${x}/p`}));
const A=(...st)=>st.map(s=>({text:'x',status:s}));

console.log('scoreFinding — a gap blocks an upgrade exactly as a contradiction does');
t('all corroborated across two hosts upgrades',
  scoreFinding({assertions:A('corroborated','corroborated'),sources:S('a.com','b.com')}).upgradeTo==='search-corroborated');
t('a contradiction blocks',
  scoreFinding({assertions:A('corroborated','contradicted'),sources:S('a.com','b.com')}).upgradeTo===null);
t('a gap blocks even when every assertion checks out',
  scoreFinding({assertions:A('corroborated','corroborated'),gaps:['omits X'],sources:S('a.com','b.com')}).upgradeTo===null);
t('a gap is reported as incomplete, not corroborated',
  scoreFinding({assertions:A('corroborated'),gaps:['omits X'],sources:S('a.com','b.com')}).outcome==='incomplete');
t('one host is not enough',
  scoreFinding({assertions:A('corroborated','corroborated'),sources:S('a.com','www.a.com')}).upgradeTo===null);
t('unsupported assertions yield partial, not corroborated',
  scoreFinding({assertions:A('corroborated','unsupported'),sources:S('a.com','b.com')}).outcome==='partial');
t('no assertions checked never upgrades',
  scoreFinding({assertions:[],sources:S('a.com','b.com')}).upgradeTo===null);
t('empty finding never upgrades', scoreFinding({}).upgradeTo===null);
t('contradiction outranks a missing source',
  scoreFinding({assertions:A('contradicted'),sources:S('a.com')}).outcome==='contradicted');
t('the ceiling is search-corroborated, never the gate',
  scoreFinding({assertions:A('corroborated'),sources:S('a.com','b.com')}).upgradeTo==='search-corroborated');
t('every verdict explains itself', ['contradicted','incomplete','partial'].every(o=>{
  const r={contradicted:scoreFinding({assertions:A('contradicted'),sources:S('a.com','b.com')}),
           incomplete:scoreFinding({assertions:A('corroborated'),gaps:['g'],sources:S('a.com','b.com')}),
           partial:scoreFinding({assertions:A('corroborated','unsupported'),sources:S('a.com','b.com')})}[o];
  return typeof r.why==='string' && r.why.length>10; }));

console.log('levelFor — a finding can lower a level, not only raise it');
const clean = scoreFinding({assertions:A('corroborated'),sources:S('a.com','b.com')});
const gapped = scoreFinding({assertions:A('corroborated'),gaps:['g'],sources:S('a.com','b.com')});
t('a clean finding raises to search-corroborated', levelFor(clean,'single-source',true)==='search-corroborated');
t('a gapped finding demotes an over-marked clause', levelFor(gapped,'search-corroborated',true)==='multi-cited');
t('a gapped finding leaves an unsourced clause alone', levelFor(gapped,'unsourced',false)==='unsourced');
t('never promotes on a bad verdict', levelFor(gapped,'single-source',true)==='single-source');

console.log('hostsOf — independence is measured by host');
t('www is normalised away', hostsOf(S('a.com','www.a.com')).size===1);
t('distinct hosts count separately', hostsOf(S('a.com','b.com')).size===2);
t('malformed urls are dropped', hostsOf([{url:'not-a-url'},{url:'https://a.com/p'}]).size===1);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);

/* appended: defect rate arithmetic */
import {defectAnalysis, cloppperPearsonLower} from './findings.mjs';
{
  let p2=0,f2=0; const t2=(n,c)=>{ if(c) p2++; else {f2++; console.log('  FAIL  '+n);} };
  console.log('\ndefect rate arithmetic');
  t2('0 of 10 gives a lower bound of 0', cloppperPearsonLower(0,10)===0);
  t2('10 of 10 gives a high but sub-1 lower bound', (()=>{const l=cloppperPearsonLower(10,10); return l>0.6&&l<1;})());
  t2('8 of 9 lower bound sits between 0.5 and 0.9', (()=>{const l=cloppperPearsonLower(8,9); return l>0.5&&l<0.9;})());
  t2('more samples at the same rate tighten the bound',
     cloppperPearsonLower(40,45) > cloppperPearsonLower(8,9));
  t2('a clause with gaps counts as defective',
     defectAnalysis([{gaps:['g'],assertions:[]}]).defective===1);
  t2('a clause with a contradiction counts as defective',
     defectAnalysis([{gaps:[],assertions:[{status:'contradicted'}]}]).defective===1);
  t2('a clause with only unsupported assertions is not counted defective',
     defectAnalysis([{gaps:[],assertions:[{status:'unsupported'}]}]).defective===0);
  t2('taxonomy tallies across findings',
     defectAnalysis([{defectTypes:['a','b']},{defectTypes:['a']}]).types.a===2);
  console.log(`${p2} passed, ${f2} failed`);
  if(f2) process.exit(1);
}
