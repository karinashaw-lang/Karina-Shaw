# Real Estate, gap fix: Megan's Law Database Notice added to Residential Lease Agreement

## Why this fix

During wave 67 category-balance analysis, a research agent assigned to
investigate a possible standalone Megan's Law disclosure document
found that Civil Code § 2079.10a's verified notice clause
(`purchase_megans_law_notice`) already exists in this corpus — but
only inside the `residential_purchase_agreement` document. The
statute's own scope provision, already quoted and verified in that
clause, expressly requires the notice in "every lease or rental
agreement for single-family residential real property" as well as
purchase contracts — yet the `residential_lease` document's
`clauseOrder` had no Megan's Law clause at all. This is a genuine,
narrow corpus gap: a legally-required lease disclosure was
inadvertently omitted from the one document where it plainly applies,
not a new document topic. The research agent that found this was
correctly instructed not to modify the corpus itself, so this fix was
made directly rather than by producing a duplicate document.

## What changed

- Added one new authority clause, `lease_megans_law_notice`, to
  `data/clauses.json` — the same statutory notice already verified in
  `purchase_megans_law_notice`, with body prose adapted to
  lease-specific language ("lessor" rather than "seller," referencing
  the lease/rental-agreement scope language directly rather than the
  purchase-contract scope language).
- Reused the exact same three citations already verified for
  `purchase_megans_law_notice` (§ 2079.10a(a) scope, § 2079.10a(a)(3)
  current notice text, § 2079.10a(b) adequacy-of-notice provision) —
  no new fetch was needed since these citations were already
  independently verified for this corpus on 2026-09-01; this is a
  same-statute reuse across two documents, not a new research pass.
- Added `lease_megans_law_notice` to the `residential_lease`
  document's `clauseOrder`, immediately before its closing
  `lease_ack` clause.
- No new fields — reused the existing `residential_lease` document's
  own fields (no field references needed beyond the notice's own
  static statutory text).

## Honest gap disclosed

This clause's `gap` field explicitly states it reuses the same
statutory notice already verified for the purchase-agreement version,
adapted to lease language, rather than presenting itself as an
independent fresh verification — consistent with how this corpus
discloses non-independent sourcing.

## Verification

- Checked for duplicate clause ids and duplicate doc ids across the
  full corpus (none).
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus
  — clean.

## Net changes

- `residential_lease` document: added `lease_megans_law_notice`
  clause to its `clauseOrder`. No new document; no new fields.
- Corpus: 2,440 → 2,441 clauses; documents unchanged at 315.
