# Granularity pass — Residential Lease Agreement

## Why this pass

Direct follow-up instruction: go back over what's already shipped and make sure it's
as specific as the underlying source actually allows, rather than settling for an
accurate-but-general paraphrase. Applied to the freshest document, the Residential
Lease Agreement, before its three original authority clauses had a chance to become
the template for how "granular enough" gets judged going forward.

## What the first pass under-specified

Re-reading the *complete* text of each statute already cited (not just the fragments
originally quoted) turned up real, load-bearing detail that a general paraphrase had
smoothed over:

- **§1950.5 (security deposit)**: the original clause said the deposit could be used
  for "any deductions" — the statute actually names exactly four permitted uses
  (unpaid rent; damage repair beyond wear and tear; cleaning to the original
  cleanliness level; future personal-property defaults if the lease authorizes it),
  and nothing else. It also has two mechanisms the first pass missed entirely: a
  tenant's right to request a pre-move-out inspection — with a real consequence, not
  just a formality (an issue not identified at that inspection generally can't be
  deducted for later, if the tenant requested it and the unit wasn't full of the
  tenant's belongings) — and a brand-new (2025/2026-effective) requirement that
  landlords photograph the unit at move-in and both before and after any move-out
  repair or cleaning charged to the deposit.
- **§1941 (habitability)**: the original clause stated the general duty and its
  non-waivability, but never stated what "habitable" specifically means under
  California law. §1941.1 defines it as an enumerated list of eight physical
  characteristics (waterproofing, plumbing, water supply, heating, electrical,
  cleanliness, garbage receptacles, floors/stairways) — a unit can look fine and
  still be legally uninhabitable if it substantially lacks even one. A separate,
  very new provision (effective for leases entered into, amended, or extended on or
  after January 1, 2026) adds a working stove and refrigerator to that list, with a
  specific, quotable opt-out mechanism if the tenant wants to supply their own
  refrigerator — including the exact checkbox language the statute requires the
  lease to contain, and the tenant's right to revert with 30 days' notice.
- **§1954 (entry notice)**: the original clause paraphrased the permitted entry
  purposes as "emergencies, agreed-upon repairs or showings, court order, or
  abandonment" — the statute actually lists four specific categories (plus two more
  under separate statutes not restated here), and the "repairs or showings" category
  itself names six distinct kinds of people the landlord may be showing the unit to
  (prospective or actual purchasers, mortgagees, tenants, workers, or contractors).

## What changed

- `lease_security_deposit`: body now states the four permitted uses by name; added
  two citations (the three-item block and the fourth item, split because the third
  item has an intervening legislative-history sentence that doesn't belong in the
  quote).
- **New** `lease_security_deposit_inspection`: the pre-move-out inspection right,
  its 48-hour notice requirement, and the real consequence of not identifying an
  issue at that inspection. Three citations.
- **New** `lease_security_deposit_photos`: the phased-in 2025 photo-documentation
  requirement. Two citations.
- `lease_habitability_standards` (new clause, sibling to the existing
  `lease_habitability`): the eight-item tenantability checklist, quoted in full.
  One citation.
- `lease_habitability_appliances` (new clause): the 2026 stove/refrigerator
  requirement, its recall carve-out, and the opt-out mechanism with its exact
  required checkbox language and the tenant's 30-day reversion right. Four
  citations — a fourth was added after noticing the body asserted the 30-day
  reversion right without a citation backing it, a real citation-matches-claim gap
  introduced during this very editing pass and caught before shipping.
- `lease_entry_notice`: body now states the actual four-category purpose list
  (with a note that two further statutory categories exist and aren't restated);
  added one citation for it.

The document grew from 8 clauses to 12; the corpus's clause count grew from 157 to
161.

## Verification

- All 13 new/added quotes checked against a second, independent fetch before
  writing — exact match, including the citation added mid-edit to fix the
  self-introduced gap above.
- Every clause in the document's `clauseOrder` re-checked for `{{` leakage and for
  duplicate titles within the document — clean (12 distinct titles).
- Headless Playwright walkthrough: badge count now correctly reads 7 (up from 3),
  zero leftover placeholders, zero console errors.
- Full 38-document regression run to confirm no other document was disturbed.

## Scope note

This pass covered one document. The same instruction — audit what's shipped for
places where a general-sounding paraphrase is hiding more specific, sourced detail
the original research already touched or could have gone one level deeper into —
applies to the rest of the corpus (37 other documents, 149 other clauses) and hasn't
been run there yet. Continuing into Business Formation and Employment next, in
roughly the order they were built (most recent first, since those are most likely to
still have easily-findable headroom from source material already fetched once).
