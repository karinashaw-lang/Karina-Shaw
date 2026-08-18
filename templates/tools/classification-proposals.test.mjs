/* Tests for expanding a per-document default plus exceptions into 360 decisions.

   The interesting failures here are the quiet ones — a review of 360 clauses is exactly the
   kind of thing that can report success while checking nothing. Three of these exist because
   the code got it wrong first:

   - lawTalk() short-circuits on a clause's STORED assertsLaw label, so asking it about a
     clause currently marked authority returns [] no matter what the body says. The one check
     aimed at flips-to-drafting therefore exempted every flip to drafting. It reported zero
     risky clauses. There were eight.

   - An exception list under the key that matches the default reads as emphasis and does
     nothing. Ignoring it silently lets a reviewer believe they classified something they did
     not.

   - A stale entry in the deferral list is an exemption nobody is looking at any more, and it
     will quietly cover a future clause that deserves the check.
*/
import {expand} from './classification-proposals.mjs';

let pass=0, fail=0;
const t=(n,c)=>{ if(c) pass++; else {fail++; console.log('  FAIL  '+n);} };
const eq=(n,a,b)=>t(n, JSON.stringify(a)===JSON.stringify(b));
const clause=(id,doc,body,assertsLaw)=>({id,doc,body,assertsLaw,title:id,severity:'recommended'});
const LAW='The Company shall do this where required by law.';

console.log('defaults and exceptions');
{
  const {rows, problems} = expand({documents:{d:{default:'authority', drafting:[], why:'x'}}},
    [clause('a','d','text',null), clause('b','d','text',null)]);
  eq('a default applies to every clause in the document', rows.map(r=>r.decision), ['authority','authority']);
  eq('no problems on a clean expansion', problems, []);
  t('nothing is marked as an exception', rows.every(r=>!r.byException));
}
{
  const {rows} = expand({documents:{d:{default:'authority', drafting:['b'], why:'x'}}},
    [clause('a','d','text',null), clause('b','d','text',null)]);
  t('an exception overrides the default', rows.find(r=>r.id==='b').decision==='drafting');
  t('the override is marked as an exception', rows.find(r=>r.id==='b').byException===true);
  t('the unlisted clause is not', rows.find(r=>r.id==='a').byException===false);
}

console.log('a proposal that names something that is not there');
{
  const {problems} = expand({documents:{d:{default:'authority', drafting:['typo'], why:'x'}}},
    [clause('a','d','text',null)]);
  t('an exception naming no clause is reported', problems.length===1 && /not a clause in that document/.test(problems[0]));
}
{
  const {problems} = expand({documents:{d:{default:'authority', authority:['a'], why:'x'}}},
    [clause('a','d','text',null)]);
  t('an exception listed under the default is a contradiction, not a no-op', /already the default/.test(problems.join()));
}
{
  const {problems} = expand({documents:{}}, [clause('a','other','text',null)]);
  t('a clause in an uncovered document is reported', /which the proposals do not cover/.test(problems.join()));
}

console.log('law talk is a question about the proposal, not about what it replaces');
{
  /* Stored as authority, proposed as drafting. This is the case that returned [] before. */
  const {rows} = expand({documents:{d:{default:'drafting', why:'x'}}, deferralsReviewed:{a:'reviewed'}},
    [clause('a','d',LAW,true)]);
  t('a clause stored as authority and proposed as drafting is still checked', rows[0].lawTalk.length>0);
}
{
  const {rows, problems} = expand({documents:{d:{default:'authority', why:'x'}}}, [clause('a','d',LAW,false)]);
  eq('a clause proposed as authority is not asked at all', rows[0].lawTalk, []);
  eq('and raises nothing', problems, []);
}

console.log('the deferral override cannot be given in bulk');
{
  const {problems} = expand({documents:{d:{default:'drafting', why:'x'}}}, [clause('a','d',LAW,false)]);
  t('an unaccounted law-talking drafting clause fails', /add it to deferralsReviewed/.test(problems.join()));
}
{
  const {problems} = expand({documents:{d:{default:'drafting', why:'x'}},
    deferralsReviewed:{$comment:'…', a:'a deferral, not an assertion'}}, [clause('a','d',LAW,false)]);
  eq('naming it with a reason clears it', problems, []);
}
{
  const {problems} = expand({documents:{d:{default:'drafting', why:'x'}}, deferralsReviewed:{a:'stale'}},
    [clause('a','d','plain negotiated text',false)]);
  t('a stale override is reported rather than left in place', /no longer needs the override/.test(problems.join()));
}

console.log('flips are measured against the stored label');
{
  const {rows} = expand({documents:{d:{default:'authority', why:'x'}}},
    [clause('a','d','t',true), clause('b','d','t',false), clause('c','d','t',null)]);
  eq('including unset, which flips', rows.map(r=>[r.current,r.flips]),
     [['authority',false],['drafting',true],['unset',true]]);
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
