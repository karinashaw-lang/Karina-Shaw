/* Which ladder does a clause belong on?

   Both release gates now depend on one field, `assertsLaw`, and on all 360 clauses that
   field is still `heuristic-unreviewed`. Nothing ships until a human decides it. That is
   the cheapest unblocking step in the repo — a binary judgement per clause, needing no
   statutes — but 360 cold judgements is a bad way to spend a lawyer's afternoon.

   So this file does the part a machine can do honestly: it reads the clause body for
   textual evidence of which kind of clause it is, and reports what it found. It does not
   classify. The output of a signal is "this body cites a section" — a fact anyone can
   check by looking — never "this clause asserts law", which is the judgement being asked
   for. The distinction is the whole point: a second model-authored opinion dressed as
   corroboration is exactly what the rest of this repo refuses.

   Four bands come out of it:

     evidence-authority   only law-facing signals fired
     evidence-drafting    only term-facing signals fired
     conflicting          both fired — genuinely ambiguous, worth a human's full attention
     no-evidence          neither fired — the heuristic that labelled it had nothing to go on

   And the useful part: comparing each band against the label already recorded. Where they
   disagree, the recorded label may be wrong, and the two directions are not equally bad.

     recorded drafting, evidence says authority  →  DANGEROUS. The clause states what the
       law requires but is routed to a review that asks whether the term is commercially
       sensible. Nobody on that track checks whether a required item is missing, and
       omission is the defect this corpus is full of.

     recorded authority, evidence says drafting  →  STUCK. The clause is a negotiated term
       waiting for a statutory verification that can never arrive, because there is no
       statute to verify it against. Costly, not unsafe.

   Everything here is a pure function of the clause. No network, no model, no filesystem.
*/

/* Law-facing signals. Each is a fact about the text, phrased so that checking it needs no
   legal knowledge — you either see a section symbol or you do not. */
export const AUTHORITY_SIGNALS = [
  {id:'cites-a-section', says:'the body cites a numbered provision',
   test: b => /§/.test(b) || /\b\d+\s+(U\.S\.C\.|C\.F\.R\.)/.test(b) || /\bCode\s+(§|[Ss]ection)\s*\d/.test(b)},
  {id:'appeals-to-law', says:'the body appeals to what the law requires',
   test: b => /\brequired by (law|statute)\b|\bthe law requires\b|\bunder (applicable )?law\b|\bstatutor/i.test(b)},
  {id:'names-an-agency', says:'the body names a government body a filing or notice goes to',
   test: b => /\b(Secretary of State|Franchise Tax Board|Internal Revenue Service|IRS|Labor Commissioner|Employment Development Department|EDD|Civil Rights Department|DFEH|Attorney General|Department of Labor)\b/.test(b)},
  {id:'states-a-deadline-and-penalty', says:'the body states a deadline together with a consequence for missing it',
   test: b => /\bwithin \d+ (calendar |business )?days?\b/i.test(b) &&
              /\bpenalt|\bfine\b|\bliable\b|\bper (day|employee|violation)\b/i.test(b)},
];

/* Term-facing signals. A clause written in terms of two labelled parties to an instrument
   is a negotiated term; there is no statute that says what your expense policy must be. */
export const DRAFTING_SIGNALS = [
  {id:'two-party-labels', says:'the body is written in terms of the two labelled parties',
   test: b => /\{\{(selfLabel|counterLabel|counterparty)\}\}/.test(b)},
  {id:'parties-agree', says:'the body records what the parties agree between themselves',
   test: b => /\bthe parties (agree|acknowledge)|\beach party (shall|will)\b/i.test(b)},
  {id:'this-agreement', says:'the body operates on the instrument it sits in',
   test: b => /\bthis (Agreement|Master Services Agreement|Statement of Work|Order Form)\b/i.test(b)},
];

/* A citation in the sources array is evidence about the clause, but weaker than evidence in
   the body: a citation can be attached to a negotiated term as background. Kept separate so
   it never on its own outvotes what the text actually says. */
export function signalsFor(clause){
  const b = String(clause.body||'');
  const authority = AUTHORITY_SIGNALS.filter(s=>s.test(b)).map(s=>s.id);
  const drafting  = DRAFTING_SIGNALS.filter(s=>s.test(b)).map(s=>s.id);
  const cited     = (clause.sources||[]).some(s=>s.citation);
  return {authority, drafting, cited};
}

export function bandFor(clause){
  const {authority, drafting} = signalsFor(clause);
  if(authority.length && drafting.length) return 'conflicting';
  if(authority.length) return 'evidence-authority';
  if(drafting.length)  return 'evidence-drafting';
  return 'no-evidence';
}

/* What the evidence says about the recorded label. Never a verdict — a reason to look. */
export function tensionFor(clause){
  const band = bandFor(clause);
  const rec  = clause.assertsLaw;
  if(band==='evidence-authority' && rec===false)
    return {kind:'dangerous', band,
      why:'recorded as a negotiated term, but the body talks like a statute. On the drafting ladder nobody checks whether a required item is missing, and omission is this corpus\'s dominant defect.'};
  if(band==='evidence-drafting' && rec===true)
    return {kind:'stuck', band,
      why:'recorded as asserting law, but the body reads as a negotiated term. It will wait on the authority ladder for a statutory verification that can never arrive, because there is no statute to verify it against.'};
  if(band==='conflicting')
    return {kind:'ambiguous', band,
      why:'the body carries both law-facing and term-facing signals. Which ladder it belongs on cannot be read off the text.'};
  if(band==='no-evidence')
    return {kind:'unevidenced', band,
      why:'neither kind of signal fired, so the label it currently carries rests on nothing a reader can check.'};
  return {kind:'consistent', band, why:'the evidence in the body agrees with the recorded label.'};
}

/* Review order. Dangerous first, because that is the misrouting that ships a defect;
   ambiguous next, because a human is genuinely needed; unevidenced next, weighted by how
   much of the product the clause touches; stuck last, because it costs time, not safety. */
const KIND_WEIGHT = {dangerous: 1000, ambiguous: 600, unevidenced: 300, stuck: 200, consistent: 0};
const SEV_WEIGHT  = {critical: 30, recommended: 15, optional: 5};

export function reviewPriority(clause, reachPct = 0){
  const t = tensionFor(clause);
  return KIND_WEIGHT[t.kind]
       + (SEV_WEIGHT[clause.severity] || 0)
       + (clause.insertion === 'auto' ? 20 : 0)
       + Math.round(reachPct / 4);
}

export function triage(clauses){
  const out = {bands:{}, kinds:{}, rows:[]};
  for(const c of clauses){
    const t = tensionFor(c), s = signalsFor(c);
    out.bands[t.band] = (out.bands[t.band]||0)+1;
    out.kinds[t.kind] = (out.kinds[t.kind]||0)+1;
    out.rows.push({id:c.id, doc:c.doc, recorded:c.assertsLaw, ...t, signals:s});
  }
  return out;
}
