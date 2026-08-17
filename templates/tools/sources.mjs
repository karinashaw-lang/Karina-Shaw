/* What counts as a primary source, and how many you need.

   The standard is now: nothing is verified unless at least two primary sources say so.
   That is a much harder bar than the one this repo was running, and it has to be made
   structural rather than promised, because the whole history of this corpus is of standards
   that were asserted and not enforced.

   A PRIMARY source is the body that publishes the text with authority to say what it is.
   Not the body that describes it, not a faithful copy of it, not an expert reading of it.
   The test is: if this host and every other host disagreed, whose version would be the law?

     publisher   the sovereign's own text. leginfo for the California codes, the Office of
                 Law Revision Counsel for the US Code, the Office of the Federal Register
                 for the CFR, a court for its own opinions. This is the law.

     agency      the agency that administers the rule, on its own site. Primary for its own
                 forms, its own filing procedures, its own published deadlines — the EDD is
                 authoritative about what the EDD requires you to file. NOT primary for what
                 a statute means; that is the agency's reading, and agencies are wrong about
                 statutes with some regularity.

     mirror      a faithful republisher: Justia, FindLaw, Cornell LII, casetext, public.law.
                 Usually correct and genuinely useful. Still somebody else's copy, with
                 somebody else's transcription errors and somebody else's update schedule,
                 and a mirror that is stale looks exactly like a mirror that is current.

     secondary   a law firm, an accounting firm, a trade body, a blog. An expert reading.
                 Corroboration at best; never verification.

   The registry previously listed Cornell LII, casetext and Westlaw as "primary". That was
   wrong on its own terms — ingest.mjs already refuses mirrors on the principle that a copy
   is not a source text — and the inconsistency mattered, because it let a clause claim to
   rest on primary authority while resting on three republishers. Fixed here.

   One deliberate consequence: two primary sources for a statutory assertion means two
   independent publishers of that statute, and for most American statutes there is exactly
   one. So for a pure statutory claim the standard is usually met by the publisher's text
   plus an agency or a court applying it — and where it cannot be met, the honest answer is
   that the claim is not verified, not that the standard is unreasonable.
*/

export const TIERS = {
  publisher: {rank:3, name:'Primary — publisher of the text',
    meaning:'the sovereign\'s own text: the legislature, the code office, the register, the court'},
  agency:    {rank:2, name:'Primary — administering agency',
    meaning:'the agency that runs the programme, on its own site. Primary for its forms, procedures and deadlines; not for what a statute means'},
  mirror:    {rank:1, name:'Faithful republisher',
    meaning:'a copy: correct more often than not, and still a copy, with its own transcription errors and its own update schedule'},
  secondary: {rank:0, name:'Expert reading',
    meaning:'a law firm, an accounting firm, a trade body. Corroboration; never verification'},
};

/* Hosts are classified by who runs them, not by how good they are. Justia is excellent and
   is still a mirror; a county clerk's PDF is ugly and is still the primary. */
export const HOSTS = {
  /* --- publisher: the sovereign's own text --- */
  'leginfo.legislature.ca.gov':'publisher',   // California Legislative Counsel — the CA codes
  'uscode.house.gov':'publisher',             // Office of the Law Revision Counsel — the US Code
  'ecfr.gov':'publisher',                     // Office of the Federal Register — the CFR
  'govinfo.gov':'publisher',                  // GPO — Federal Register, US Code, public laws
  'congress.gov':'publisher',                 // Library of Congress — enacted bills
  'oal.ca.gov':'publisher',                   // CA Office of Administrative Law — the CCR
  'govt.westlaw.com':'publisher',             // hosts the official CCR under contract with OAL
  'nysenate.gov':'publisher',                 // NY consolidated laws
  'courts.ca.gov':'publisher',                // CA courts — their own opinions and rules
  'supremecourt.gov':'publisher',

  /* --- agency: primary for its own forms, procedures and deadlines --- */
  'edd.ca.gov':'agency',
  'dir.ca.gov':'agency',
  'sos.ca.gov':'agency',
  'elections.cdn.sos.ca.gov':'agency',
  'ftb.ca.gov':'agency',
  'irs.gov':'agency',
  'dol.gov':'agency',
  'eeoc.gov':'agency',
  'calcivilrights.ca.gov':'agency',
  'cdph.ca.gov':'agency',
  'oehha.ca.gov':'agency',
  'p65warnings.ca.gov':'agency',
  'dos.ny.gov':'agency',
  'calsavers.com':'agency',

  /* --- mirror: faithful republishers --- */
  'law.cornell.edu':'mirror',
  'law.justia.com':'mirror',
  'codes.findlaw.com':'mirror',
  'caselaw.findlaw.com':'mirror',
  'california.public.law':'mirror',
  'casetext.com':'mirror',
  'legiscan.com':'mirror',
  'law.onecle.com':'mirror',
  /* CourtListener (Free Law Project) collects opinions from the courts themselves and is
     the most faithful republisher in this list. It is still a republisher: apply the test —
     if CourtListener and the issuing court disagreed about the text of an opinion, the
     court's version is the law. Mirror. Reachable from here when the publishers are not,
     which makes it useful and does not make it primary. */
  'courtlistener.com':'mirror',
  'www.courtlistener.com':'mirror',
  'library.municode.com':'mirror',
  'codelibrary.amlegal.com':'mirror',
};

export const stripWww = h => String(h||'').replace(/^www\./,'');

export function hostOf(url){
  try{ return stripWww(new URL(url).host); }catch{ return null; }
}

/* Unknown hosts are secondary, never primary. A host nobody has classified is a host
   nobody has vouched for, and defaulting it upward is how the bar quietly drops. */
export function tierOf(url){
  const h = hostOf(url);
  if(!h) return 'secondary';
  if(HOSTS[h]) return HOSTS[h];
  const parent = Object.keys(HOSTS).find(k => h.endsWith('.'+k));
  return parent ? HOSTS[parent] : 'secondary';
}

export const isPrimary = url => ['publisher','agency'].includes(tierOf(url));

/* The standard, as a function.

   Two primary sources means two DISTINCT primary hosts. Two pages on leginfo are one
   source: they are the same publisher, and a publisher that is wrong is wrong on both
   pages. `readBy` is required because a URL in a list is not a source anybody consulted —
   that distinction is the difference between this repo and the one that shipped 360
   memory-authored clauses with citations attached.

   `assertionKind` narrows what counts. An agency site is primary about the agency's own
   form and not about what a statute means, so a statutory claim needs at least one
   publisher among the two. */
export function meetsTwoPrimary(sources = [], {assertionKind = 'statutory', readBy = null} = {}){
  const problems = [];
  const withUrl = sources.filter(s => s && s.url);
  const tiers = withUrl.map(s => ({...s, host: hostOf(s.url), tier: tierOf(s.url)}));

  const primaries = tiers.filter(s => ['publisher','agency'].includes(s.tier));
  const hosts = new Set(primaries.map(s => s.host));
  const publishers = new Set(primaries.filter(s => s.tier === 'publisher').map(s => s.host));

  if(hosts.size < 2)
    problems.push(`${hosts.size} primary source(s) on distinct hosts; the standard is two`);
  if(assertionKind === 'statutory' && publishers.size < 1)
    problems.push('a statutory claim needs at least one publisher of the text itself — an agency describing a statute is the agency\'s reading of it');
  if(!readBy)
    problems.push('no readBy recorded: a URL nobody opened is a citation, not a source');
  for(const s of primaries)
    if(!s.checked) problems.push(`${s.host} has no check date, so nothing records when it said this`);

  return {
    ok: problems.length === 0,
    problems,
    primaryHosts: [...hosts],
    publisherHosts: [...publishers],
    counts: tiers.reduce((m,s)=>(m[s.tier]=(m[s.tier]||0)+1, m), {})
  };
}

/* Summarise a set of findings against the standard. Used by the report and the validator so
   there is one arithmetic, not two. */
export function auditSources(findings){
  const rows = findings.map(f => {
    const v = meetsTwoPrimary(f.sources || [], {readBy: f.readBy});
    return {id: f.clauseId, ok: v.ok, problems: v.problems,
            primaryHosts: v.primaryHosts, counts: v.counts};
  });
  return {
    checked: rows.length,
    meeting: rows.filter(r => r.ok).length,
    rows,
    byTier: rows.reduce((m,r)=>{
      for(const [k,v] of Object.entries(r.counts)) m[k]=(m[k]||0)+v;
      return m;
    }, {})
  };
}
