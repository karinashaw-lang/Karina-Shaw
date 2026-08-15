/* Two ladders, two gates.

   The release gate was one number applied to every clause: reach `corroborated` on the
   source ladder or the engine withholds you. That is right for a clause that says what
   the law requires and wrong — a category error — for a clause that says what the parties
   agree. A payment-terms clause cites nothing because there is nothing to cite. Grading it
   on citations meant all 191 drafting clauses were permanently unreleasable for a reason
   that does not apply to them, which is not a strict standard, it is a broken one.

   So there are two ladders now:

     authority clauses (assertsLaw true)  → verificationLevels     → gate `corroborated`
     drafting clauses  (assertsLaw false) → draftingReviewLevels   → gate `counsel-reviewed`

   Neither may borrow the other's evidence. A statute does not tell you whether an
   indemnity cap is the one you want; a lawyer's approval does not tell you what a statute
   says. gateFor() routes a clause to exactly one ladder and refuses to look at the other.

   The anti-self-certification rules are the same in spirit as the sourcing ones:

     - `self-reviewed` sits below the gate, because an author checking their own work is
       not review, for the same reason two citations by one author are not corroboration.
     - a reviewer must be a named human with a role, a date, and a stated scope. A tool
       name, a model name, or "the team" is refused.
     - a clause whose assertsLaw classification is still heuristic cannot clear EITHER
       gate, because nothing yet establishes which ladder it belongs on. That currently
       blocks all 360 clauses — deliberately, and for the right reason.

   Every function here is pure. The taxonomy is passed in rather than read, so the same
   code runs in the validator, in the compiled engine, and in the tests.
*/

/* Names that are not a person taking responsibility. A signoff is a human undertaking;
   these are either machines or nobody in particular. */
const NOT_A_PERSON = [
  /^(the )?(team|company|legal|counsel|us|we|admin|owner|author|draft)$/i,
  /\b(claude|gpt|llm|model|ai|bot|assistant|copilot)\b/i,
  /^(draft|draft ai|draft engine|ingest|script|tool|automation|system)/i,
  /^[^a-z]*$/i                                   // no letters at all
];

export function looksLikeAPerson(name){
  const n = String(name||'').trim();
  if(n.length < 3) return false;
  return !NOT_A_PERSON.some(re => re.test(n));
}

const isDate = s => /^\d{4}-\d{2}-\d{2}$/.test(String(s||''));

/* ---- which ladder does this clause belong on ---- */

export function trackOf(clause){
  if(typeof clause.assertsLaw !== 'boolean') return null;
  return clause.assertsLaw ? 'authority' : 'drafting';
}

export function authorityRank(clause, tax){
  const L = tax.verificationLevels;
  return (L[clause.verification] || {rank:0}).rank;
}

export function draftingRank(clause, tax){
  const L = tax.draftingReviewLevels;
  const level = clause.draftingReview?.level || 'unreviewed';
  return (L[level] || {rank:0}).rank;
}

/* ---- is a signoff real ---- */

export function validateSignoff(sign, tax){
  const problems = [];
  if(!sign || typeof sign !== 'object') return ['no drafting review recorded'];
  const L = tax.draftingReviewLevels;
  if(!sign.level) problems.push('no review level recorded');
  else if(!L[sign.level] || sign.level.startsWith('$')) problems.push(`unknown drafting review level "${sign.level}"`);

  const rank = L[sign.level]?.rank ?? 0;
  if(rank === 0) return problems;                 /* unreviewed needs nothing else */

  if(!sign.reviewer) problems.push('no reviewer named');
  else if(!looksLikeAPerson(sign.reviewer))
    problems.push(`"${sign.reviewer}" is not a named person taking responsibility for the term`);
  if(!sign.date) problems.push('no review date recorded');
  else if(!isDate(sign.date)) problems.push(`review date "${sign.date}" is not an ISO date`);

  if(rank >= (L['counsel-reviewed']?.rank ?? 2)){
    if(!sign.role) problems.push('a counsel-level review must record the reviewer\'s role — who they are to sign this off');
    if(!sign.scope || String(sign.scope).trim().length < 12)
      problems.push('a counsel-level review must state what was reviewed, not merely that it was');
    if(sign.reviewer && sign.author && String(sign.reviewer).trim().toLowerCase() === String(sign.author).trim().toLowerCase())
      problems.push('the reviewer is the author — an author checking their own work is not review');
  }
  return problems;
}

/* `classifiedBy: "reviewed"` is what unlocks both ladders, so it cannot be a magic string
   anybody can type — that would be the same self-certification hole the sourcing rules
   close. Claiming the classification was reviewed requires naming who reviewed it and
   when, on the same terms as every other signoff here. */
export function validateClassification(clause){
  if(clause.classifiedBy !== 'reviewed') return [];
  const r = clause.classificationReview;
  const p = [];
  if(!r || typeof r !== 'object') return ['classifiedBy is "reviewed" but no classificationReview block records who decided that'];
  if(!r.reviewer) p.push('classification review names no reviewer');
  else if(!looksLikeAPerson(r.reviewer))
    p.push(`"${r.reviewer}" is not a named person taking responsibility for the classification`);
  if(!r.date) p.push('classification review records no date');
  else if(!isDate(r.date)) p.push(`classification review date "${r.date}" is not an ISO date`);
  return p;
}

/* ---- the gate ---- */

/* One decision, one explanation. `blocking` is the reason the engine withholds a clause,
   phrased for a human, because a withheld clause the user cannot account for is the same
   problem as a wrong clause the user cannot see. */
export function gateFor(clause, tax){
  const track = trackOf(clause);
  if(!track) return {ok:false, track:null, ladder:null, level:null, rank:0, required:null,
                     blocking:'the clause has no assertsLaw classification, so it cannot be routed to a review track'};

  /* Neither ladder is reachable while the routing itself is a guess. */
  if(clause.classifiedBy === 'heuristic-unreviewed')
    return {ok:false, track, ladder:null, level:null, rank:0, required:null,
            blocking:'the assertsLaw classification is heuristic and unreviewed — which ladder this clause belongs on is not yet established'};
  const cls = validateClassification(clause);
  if(cls.length)
    return {ok:false, track, ladder:null, level:null, rank:0, required:null,
            blocking:cls.join('; ')};

  if(track === 'authority'){
    const required = tax.releaseGate.minimum;
    const rank = authorityRank(clause, tax);
    const need = tax.verificationLevels[required].rank;
    return {ok: rank >= need, track, ladder:'verificationLevels',
            level: clause.verification, rank, required,
            blocking: rank >= need ? null
              : `asserts law at "${clause.verification}" — the gate is "${required}"`};
  }

  const required = tax.releaseGate.draftingMinimum;
  const need = tax.draftingReviewLevels[required].rank;
  const rank = draftingRank(clause, tax);
  const problems = clause.draftingReview ? validateSignoff(clause.draftingReview, tax) : ['no drafting review recorded'];
  if(problems.length)
    return {ok:false, track, ladder:'draftingReviewLevels', level: clause.draftingReview?.level || 'unreviewed',
            rank:0, required, blocking: problems.join('; '), problems};
  return {ok: rank >= need, track, ladder:'draftingReviewLevels',
          level: clause.draftingReview?.level || 'unreviewed', rank, required,
          blocking: rank >= need ? null
            : `drafting review is at "${clause.draftingReview?.level || 'unreviewed'}" — the gate is "${required}"`};
}

/* A drafting clause must make no claim about what the law requires; that is what puts it
   on a ladder with no citations on it. This is the mechanical half of that promise — it
   flags bodies that talk like statutes so the classification gets a second look. It does
   not decide anything; a hit means a human looks, not that the clause is wrong. */
const LAW_TALK = [
  [/\brequired by (?:law|statute)\b/i,            'says something is required by law'],
  [/\b(?:the )?law requires\b/i,                  'says the law requires something'],
  [/\bunder (?:applicable )?law\b/i,              'appeals to applicable law'],
  [/§\s*\d/,                                      'contains a section symbol and number'],
  [/\b\d+\s+U\.?S\.?C\.?\b/,                      'cites the United States Code'],
  [/\bCode\s+(?:§|[Ss]ection)\s*\d/,              'cites a code section'],
  [/\b(?:statutor(?:y|ily)|by statute)\b/i,       'describes something as statutory'],
  [/\bis (?:un)?enforceable (?:under|in)\b/i,     'asserts enforceability under a body of law'],
  [/\b(?:void|voidable) (?:under|as a matter of)\b/i, 'asserts something is void under law']
];

export function lawTalk(clause){
  if(clause.assertsLaw !== false) return [];
  const body = String(clause.body||'');
  return LAW_TALK.filter(([re])=>re.test(body)).map(([,why])=>why);
}

/* ---- corpus-level summary, used by the packet and the validator ---- */

export function summarise(clauses, tax){
  const out = {authority:{total:0, passing:0}, drafting:{total:0, passing:0},
               unrouted:0, byBlocker:{}};
  for(const c of clauses){
    const g = gateFor(c, tax);
    if(!g.track){ out.unrouted++; continue; }
    out[g.track].total++;
    if(g.ok) out[g.track].passing++;
    else {
      const key = g.blocking.split('—')[0].trim();
      out.byBlocker[key] = (out.byBlocker[key]||0)+1;
    }
  }
  return out;
}
