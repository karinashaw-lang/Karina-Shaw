/* Does a document call its own parties the same thing everywhere?

   The Service Agreement's clause bodies defined the other side as "Client" and used that
   word in nine clauses. The signature block, built independently from
   taxonomy.contractRoles, signed that same party as "Customer". Both halves were internally
   consistent and correct in isolation; nobody had ever cross-checked them against each
   other, so a reader would see "Client" for the entire body of the contract and then sign a
   line captioned "Customer" — the kind of defect a careful human proofreader catches by eye
   and a template engine has no reason to notice on its own. Found 2026-08-20, fixed the same
   day, and this is the check that makes sure it cannot recur silently.

   The two sources of truth this compares:

     signature captions   taxonomy.contractRoles (commercial/agreements) and
                           templates/schemas/party-roles.json (property/money/partnership) —
                           whatever sigParties() in draft-ai-engine.html actually renders.

     body vocabulary       every quoted defined term ("Word") that appears in a document's
                           own clause bodies, read directly off the corpus — not run through
                           field substitution, because the quoted terms are literal text, not
                           {{field}} placeholders.

   A term used in a clause body that is not a caption sigParties would render, and not one of
   the small set of legitimate non-party defined terms every contract has (Party, Purpose,
   Services...), is exactly the class of drift this file exists to catch. This does not check
   whether the terminology is legally correct — it checks whether the document agrees with
   itself, which is a precondition for correctness that costs nothing to verify and was, once,
   silently false. */

/* Defined terms that are real and legitimate, and are not a party's signature caption.
   Kept short and specific on purpose: a broad ignore list is how a checker like this stops
   catching anything. Each entry is the exact term as it appears in a clause body today;
   terminology.test.mjs asserts none of them collide with an actual party-role term. */
export const GENERIC_TERMS = new Set([
  'Party', 'Parties', 'Purpose', 'Services', 'Premises', 'Loan',
  'Original Lease', 'Partnership', 'Cause', 'Good Reason', 'Effective Date',
  'Triggering Event', 'AS IS', 'Initial Term', 'None', 'Company',
]);

const QUOTED = /“([A-Z][a-zA-Z ]*?)”/g;

export function quotedTerms(body) {
  return [...String(body || '').matchAll(QUOTED)].map(m => m[1]);
}

/* Expected caption set for one document, or null if this checker has no data to check it
   against (formation signs with taxonomy.entities.*.ownerSingular and never quotes that role
   in a clause body; hiring's second signer is composed at render time, not a fixed caption;
   neither has anything for this check to compare against). */
export function expectedTerms(doc, tax, partyRoles) {
  if (doc.package === 'commercial' || doc.package === 'agreements') {
    const roles = Object.values(tax.contractRoles || {});
    const terms = new Set();
    for (const r of roles) { if (r.self) terms.add(r.self); if (r.counter) terms.add(r.counter); }
    return terms;
  }
  const rule = partyRoles.find(r => r.package === doc.package && (!r.docId || r.docId === doc.id))
            || partyRoles.find(r => r.package === doc.package);
  if (!rule) return null;
  return new Set(rule.acceptableTerms || []);
}

/* One finding per (document, stray term): the term, which clauses used it, and what the
   document's own signature block would call that party instead. */
export function checkTerminology(corpus) {
  const byDoc = new Map();
  for (const c of corpus.clauses) {
    if (c.doc === '*') continue;                 /* shared blocks carry no party captions */
    if (!byDoc.has(c.doc)) byDoc.set(c.doc, []);
    byDoc.get(c.doc).push(c);
  }
  const findings = [];
  for (const doc of corpus.documents) {
    const clauses = byDoc.get(doc.id) || [];
    const expected = expectedTerms(doc, corpus.taxonomy, corpus.partyRoles);
    if (!expected) continue;                      /* no data for this package — nothing to check */
    for (const c of clauses) {
      for (const term of quotedTerms(c.body)) {
        if (expected.has(term) || GENERIC_TERMS.has(term)) continue;
        findings.push({ doc: doc.id, clause: c.id, term, expected: [...expected] });
      }
    }
  }
  return findings;
}
