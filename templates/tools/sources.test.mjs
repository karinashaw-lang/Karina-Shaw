/* Tests for the two-primary-source standard.

   The properties that matter are the ones that stop the bar drifting downward: an unknown
   host must never count as primary, two pages on one host must never count as two sources,
   and a URL nobody opened must never count at all. Every one of those is a way a standard
   gets asserted and then quietly not enforced, which is the failure this repo exists to
   avoid repeating.
*/
import {tierOf, isPrimary, hostOf, meetsTwoPrimary, auditSources, HOSTS, TIERS,
        claimKind, claimText, fragility, judicialSupport} from './sources.mjs';

let pass=0, fail=0;
const t=(n,c)=>{ if(c) pass++; else {fail++; console.log('  FAIL  '+n);} };
const src = (url, checked='2026-08-15') => ({url, checked});

console.log('host classification');
t('the California Legislature is a publisher', tierOf('https://leginfo.legislature.ca.gov/x')==='publisher');
t('the Office of Law Revision Counsel is a publisher', tierOf('https://uscode.house.gov/x')==='publisher');
t('the eCFR is a publisher', tierOf('https://www.ecfr.gov/x')==='publisher');
t('the EDD is an agency', tierOf('https://edd.ca.gov/en/payroll_taxes/')==='agency');
t('the IRS is an agency', tierOf('https://www.irs.gov/forms')==='agency');
t('Cornell LII is a mirror, not a publisher', tierOf('https://www.law.cornell.edu/uscode/text/26/83')==='mirror');
t('Justia is a mirror', tierOf('https://law.justia.com/codes/x')==='mirror');
t('casetext is a mirror', tierOf('https://casetext.com/x')==='mirror');
t('a law firm is secondary', tierOf('https://ogletree.com/insights/x')==='secondary');
t('an accounting firm is secondary', tierOf('https://kpmg.com/x')==='secondary');
t('www. is stripped before matching', tierOf('https://www.sos.ca.gov/x')==='agency');
t('a subdomain inherits its parent', tierOf('https://edd.ca.gov/en/x')==='agency');

console.log('unknown hosts never count as primary');
t('an unclassified host is secondary', tierOf('https://some-blog.example/x')==='secondary');
t('and is not primary', !isPrimary('https://some-blog.example/x'));
t('a malformed url is secondary', tierOf('not a url')==='secondary');
t('an empty url is secondary', tierOf('')==='secondary');
t('hostOf returns null on garbage', hostOf('not a url')===null);
t('no host is classified primary by default',
   Object.values(HOSTS).every(v=>Object.keys(TIERS).includes(v)));

console.log('two primary sources means two distinct primary hosts');
{
  const ok = meetsTwoPrimary(
    [src('https://leginfo.legislature.ca.gov/a'), src('https://edd.ca.gov/b')],
    {readBy:'K. Shaw'});
  t('a publisher plus an agency meets the standard', ok.ok);
  t('and both hosts are recorded', ok.primaryHosts.length===2);

  const onePublisherTwice = meetsTwoPrimary(
    [src('https://leginfo.legislature.ca.gov/a'), src('https://leginfo.legislature.ca.gov/b')],
    {readBy:'K. Shaw'});
  t('two pages on one publisher are one source', !onePublisherTwice.ok);
  t('and the refusal says so', onePublisherTwice.problems.some(p=>p.includes('distinct hosts')));

  t('two mirrors do not meet it',
     !meetsTwoPrimary([src('https://law.justia.com/a'), src('https://codes.findlaw.com/b')],
       {readBy:'K. Shaw'}).ok);
  t('two law firms do not meet it',
     !meetsTwoPrimary([src('https://ogletree.com/a'), src('https://kpmg.com/b')],
       {readBy:'K. Shaw'}).ok);
  t('one primary plus four secondaries does not meet it',
     !meetsTwoPrimary([src('https://leginfo.legislature.ca.gov/a'), src('https://ogletree.com/b'),
                       src('https://kpmg.com/c'), src('https://shrm.org/d'), src('https://mondaq.com/e')],
       {readBy:'K. Shaw'}).ok);
  t('an empty source list does not meet it', !meetsTwoPrimary([], {readBy:'K. Shaw'}).ok);
}

console.log('a statutory claim needs the text, not two readings of it');
{
  const twoAgencies = meetsTwoPrimary([src('https://edd.ca.gov/a'), src('https://dir.ca.gov/b')],
    {assertionKind:'statutory', readBy:'K. Shaw'});
  t('two agencies do not verify a statutory claim', !twoAgencies.ok);
  t('and the reason names the missing publisher',
     twoAgencies.problems.some(p=>p.includes('publisher of the text')));
  t('but two agencies do verify a procedural claim',
     meetsTwoPrimary([src('https://edd.ca.gov/a'), src('https://dir.ca.gov/b')],
       {assertionKind:'procedural', readBy:'K. Shaw'}).ok);
}

console.log('a URL nobody opened is not a source');
{
  t('no readBy fails', !meetsTwoPrimary(
     [src('https://leginfo.legislature.ca.gov/a'), src('https://edd.ca.gov/b')], {}).ok);
  t('and the reason says why', meetsTwoPrimary(
     [src('https://leginfo.legislature.ca.gov/a'), src('https://edd.ca.gov/b')], {})
     .problems.some(p=>p.includes('citation, not a source')));
  t('a primary with no check date fails', !meetsTwoPrimary(
     [{url:'https://leginfo.legislature.ca.gov/a'}, src('https://edd.ca.gov/b')],
     {readBy:'K. Shaw'}).ok);
  t('a source with no url is ignored rather than counted',
     meetsTwoPrimary([{citation:'Cal. Lab. Code §925'},
                      src('https://leginfo.legislature.ca.gov/a'), src('https://edd.ca.gov/b')],
       {readBy:'K. Shaw'}).ok);
}

console.log('claim kind — what survives paraphrase and what does not');
{
  t('a number is a factual claim', claimKind('the deadline is 15 days').kind==='factual');
  t('a threshold is factual', claimKind('applies to employers with five or more employees').kind==='factual');
  t('"the court held" is interpretive', claimKind('the court held that the release barred it').kind==='interpretive');
  t('"voidable" is interpretive', claimKind('the provision is voidable at the employee\'s election').kind==='interpretive');
  t('"unenforceable" is interpretive', claimKind('the clause is unenforceable as written').kind==='interpretive');
  t('the marker is named', claimKind('the court held X').why.length>0);
  t('empty text is factual', claimKind('').kind==='factual');

  const f = {assertions:[{text:'a', note:'the court held X'}], gaps:['b'],
             method:'read on CourtListener', correction:'the court held Y'};
  t('claim text covers assertions, notes and gaps', /the court held X/.test(claimText(f)) && /b/.test(claimText(f)));
  t('and excludes method and correction prose',
     !/CourtListener/.test(claimText(f)) && !/held Y/.test(claimText(f)));
}

console.log('fragility — the Winet shape');
{
  const sec = u => ({url:u, checked:'2026-08-15'});
  const interpretiveSecondary = {clauseId:'x',
    assertions:[{text:'the provision is voidable', note:''}],
    sources:[sec('https://ogletree.com/a'), sec('https://shrm.org/b'), sec('https://law.justia.com/c')]};
  t('an interpretive claim with no primary source is unverifiable as recorded',
     fragility(interpretiveSecondary).level==='unverifiable-as-recorded');
  t('and the reason names the failure it generalises from',
     /Winet/.test(fragility(interpretiveSecondary).why));
  t('three mirrors and blogs do not rescue it',
     fragility(interpretiveSecondary).primary===0);

  const factualSecondary = {clauseId:'y',
    assertions:[{text:'the deadline is 15 days', note:''}],
    sources:[sec('https://ogletree.com/a')]};
  t('a factual claim with no primary source is merely secondary-only',
     fragility(factualSecondary).level==='secondary-only');
  t('because a number survives retelling', /survives retelling/.test(fragility(factualSecondary).why));

  const onePrimary = {clauseId:'z', assertions:[{text:'the court held X'}],
    sources:[sec('https://leginfo.legislature.ca.gov/a'), sec('https://ogletree.com/b')]};
  t('one primary source is partial, not the Winet shape', fragility(onePrimary).level==='partial');

  const twoPrimary = {clauseId:'w', assertions:[{text:'the court held X'}],
    sources:[sec('https://leginfo.legislature.ca.gov/a'), sec('https://edd.ca.gov/b')]};
  t('two primary sources with a publisher meets the standard', fragility(twoPrimary).level==='meets');
  t('an agency pair alone does not meet it',
     fragility({clauseId:'v', assertions:[{text:'x'}],
       sources:[sec('https://edd.ca.gov/a'), sec('https://dir.ca.gov/b')]}).level==='partial');
}

console.log('judicial quotation — independence without verification');
{
  const sec = u => ({url:u, checked:'2026-08-15'});
  const q = (op) => ({case:'X v. Y', opinion:op, quote:'the statute provides that an employer shall not require an employee who primarily resides and works in California'});
  const base = {clauseId:'j', assertions:[{text:'the provision is voidable'}], sources:[sec('https://ogletree.com/a')]};

  t('two independent opinions quoting verbatim count as independent',
     judicialSupport({...base, judicialQuotations:[q(1), q(2)]}).independent);
  t('one opinion is not independent',
     !judicialSupport({...base, judicialQuotations:[q(1)]}).independent);
  t('the same opinion twice is one quotation',
     !judicialSupport({...base, judicialQuotations:[q(1), q(1)]}).independent);
  t('a citation with no quoted text does not count',
     !judicialSupport({...base, judicialQuotations:[{case:'A', opinion:1}, {case:'B', opinion:2}]}).independent);

  const jc = fragility({...base, judicialQuotations:[q(1), q(2)]});
  t('an interpretive claim with two judicial quotations is no longer unverifiable',
     jc.level==='judicially-corroborated');
  t('and the reason says it still does not meet the standard',
     /not the body that enacted it/.test(jc.why));
  t('without them it stays unverifiable as recorded',
     fragility(base).level==='unverifiable-as-recorded');
  t('judicial quotations do not promote a claim to meeting the standard',
     fragility({...base, judicialQuotations:[q(1), q(2)]}).level !== 'meets');

  /* One quotation must stay visible even though it changes no verdict. ipa_state_carveout
     has exactly one — CourtListener holds no second opinion quoting §2872 — and a report
     that hid it would send the next reader looking for evidence already on file. */
  const one = fragility({...base, judicialQuotations:[q(1)]});
  t('one quotation leaves the level unchanged', one.level==='unverifiable-as-recorded');
  t('but the count is still reported', one.judicial.count===1);
  t('and the reason explains why one is not two', /one court quoted once is one quotation/.test(one.why));
  t('the count rides on every level, not only the one it unlocks',
     fragility({clauseId:'p', assertions:[{text:'15 days'}],
       sources:[sec('https://leginfo.legislature.ca.gov/a')], judicialQuotations:[q(1)]}).judicial.count===1);
}

console.log('against every finding actually recorded');
{
  const fs = await import('node:fs');
  const F = fs.readdirSync('verification/findings').filter(f=>f.endsWith('.json'))
    .map(f=>JSON.parse(fs.readFileSync('verification/findings/'+f,'utf8')));
  const a = auditSources(F);
  t('every finding was audited', a.checked===F.length);
  t('none of them meets the two-primary standard', a.meeting===0);
  console.log(`        ${a.checked} finding(s), ${a.meeting} meeting the standard`);
  console.log(`        sources by tier: ${JSON.stringify(a.byTier)}`);
  console.log(`        by fragility:    ${JSON.stringify(a.byFragility)}`);
  const winet = a.rows.filter(r=>r.fragility.level==='unverifiable-as-recorded');
  t('the Winet shape is detected in the real findings', winet.length>0);
  t('every finding is assigned a fragility level',
     a.rows.every(r=>['meets','partial','secondary-only','judicially-corroborated','unverifiable-as-recorded'].includes(r.fragility.level)));
  console.log(`        Winet shape:     ${winet.map(r=>r.id).join(', ')}`);
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
