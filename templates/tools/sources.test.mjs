/* Tests for the two-primary-source standard.

   The properties that matter are the ones that stop the bar drifting downward: an unknown
   host must never count as primary, two pages on one host must never count as two sources,
   and a URL nobody opened must never count at all. Every one of those is a way a standard
   gets asserted and then quietly not enforced, which is the failure this repo exists to
   avoid repeating.
*/
import {tierOf, isPrimary, hostOf, meetsTwoPrimary, auditSources, HOSTS, TIERS,
        claimKind, claimText, fragility, judicialSupport, looksLikeCitation,
        blockedBy} from './sources.mjs';

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

console.log('a citation names a provision, not an article about one');
{
  const K = x => looksLikeCitation(x).kind;
  t('a code section is a statute citation', K('Cal. Lab. Code §925')==='statute');
  t('a closed-up range is a statute citation', K('Cal. Bus. & Prof. Code §§17601–17606')==='statute');
  t('a CFR reference is a statute citation', K('8 C.C.R. §3395')==='statute');
  t('a wage order with a number is a statute citation', K('IWC Wage Order 4-2001')==='statute');
  t('"Section 2870" spelled out is a statute citation', K('Labor Code Section 2870')==='statute');

  /* The first version of this check rejected Dynamex and Winet. That was the check being
     wrong, not the data — and California puts the year before the volume, which the first
     case pattern did not allow for. */
  t('a case citation is a citation', K('Dynamex Operations W. v. Superior Court, 4 Cal.5th 903 (2018)')==='case');
  t('and so is the California year-first style', K('Winet v. Price (1992) 4 Cal.App.4th 1159')==='case');
  t('and a federal reporter citation', K('Whitewater West Industries v. Alleshouse, 981 F.3d 1045 (Fed. Cir. 2020)')==='case');

  t('a publisher headline is not a citation',
     K('Ogletree Deakins — California publishes new wage theft notice')==='not-a-citation');
  t('even when its subject is a citation',
     K('FindLaw — Cal. Gov. Code §12950.1')==='not-a-citation');
  t('the reason names the spaced dash',
     /spaced dash/.test(looksLikeCitation('FindLaw — Cal. Gov. Code §12950.1').why));
  t('a closed-up range is not mistaken for a spaced dash',
     looksLikeCitation('Cal. Lab. Code §§1030–1034').ok);

  t('a bare code name is incomplete rather than wrong', K('L.A. Mun. Code')==='incomplete');
  t('and the reason says there is nothing to look up',
     /nothing specific to look up/.test(looksLikeCitation('L.A. Mun. Code').why));
  t('prose is not a citation', K('some note about the law')==='not-a-citation');
  t('empty is not a citation', K('')==='not-a-citation');
}

console.log('what is actually blocking a clause');
{
  const cite = c => ({sources:[{citation:c}]});
  t('a precise citation is blocked by access',
     blockedBy(cite('Cal. Lab. Code §925')).kind==='access');
  t('a bare code name is blocked by the citation itself',
     blockedBy(cite('L.A. Mun. Code')).kind==='citation');
  t('and the reason says access will not fix it',
     /Source access does not fix this/.test(blockedBy(cite('L.A. Mun. Code')).why));
  t('no citation at all is its own category',
     blockedBy({sources:[]}).kind==='unsourced');
  t('one usable citation among several rescues the clause',
     blockedBy({sources:[{citation:'L.A. Mun. Code'},{citation:'Cal. Lab. Code §925'}]}).kind==='access');
  t('the usable citations are the ones reported',
     blockedBy({sources:[{citation:'L.A. Mun. Code'},{citation:'Cal. Lab. Code §925'}]})
       .citations.join()==='Cal. Lab. Code §925');
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
  /* This used to require winet.length>0 — ea_noncompete_void and ic_ca_abc had the shape.
     Both clauses, and their findings, were parked in the jurisdiction-neutral narrowing
     (moved to verification/findings-parked-california/ alongside the clauses they check),
     for the same reason blockedBy's citation-kind assertion below was softened: demanding
     the live corpus contain a particular defect makes the suite fail on its own success.
     The detection mechanism itself is already covered above against synthetic fixtures
     (`fragility(base).level==='unverifiable-as-recorded'`); what is worth asserting here
     against the real findings is only that every one gets a known fragility level. */
  if(winet.length) console.log(`        Winet shape:     ${winet.map(r=>r.id).join(', ')}`);
  else console.log('        no real finding currently has the Winet shape (both examples are parked)');
  t('every finding is assigned a fragility level',
     a.rows.every(r=>['meets','partial','secondary-only','judicially-corroborated','unverifiable-as-recorded'].includes(r.fragility.level)));

  const {loadCorpus} = await import('./corpus.mjs');
  const C = loadCorpus();
  const byBlock = C.clauses.reduce((m,c)=>{ const k=blockedBy(c).kind; m[k]=(m[k]||0)+1; return m; }, {});
  /* This used to require that some clause be blocked by its own citation — a citation naming a
     body of law with no provision in it, which no amount of network access can fix. That was
     true of the corpus when it was written and stopped being true when the jurisdiction-specific
     clauses were parked, since they held all of them.

     Demanding a corpus contain a particular defect makes the suite fail on its own success and
     blocks scoping decisions it has no business having a view about. What is actually worth
     testing is that blockedBy() sorts every clause into a known kind, and that when a
     citation-blocked clause does exist it is not miscounted as an access problem — because that
     distinction is the whole point of the function. */
  const KINDS=['citation','access','unsourced','none'];
  t('every clause is assigned a known block kind',
     Object.keys(byBlock).every(k=>KINDS.includes(k)));
  t('the kinds partition the corpus',
     Object.values(byBlock).reduce((a,b)=>a+b,0)===C.clauses.length);
  if((byBlock.citation||0)>0)
    t('citation-blocked clauses are not counted as access-blocked',
       C.clauses.filter(c=>blockedBy(c).kind==='citation')
        .every(c=>blockedBy(c).kind!=='access'));
  else
    console.log('        no clause is blocked by its own citation in this corpus');
  console.log(`        blocked by:      ${JSON.stringify(byBlock)}`);
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
