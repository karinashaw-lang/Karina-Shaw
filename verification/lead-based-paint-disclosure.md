# Real Estate, eighth new document: Lead-Based Paint Disclosure

## Why this document

The corpus already had a `purchase_lead_paint_federal` clause embedded
in the Residential Purchase Agreement — but that clause is
purchase-only and there was zero lead-paint coverage for a lease
anywhere in the corpus. This document is a standalone, self-sufficient
form covering both sale and lease transactions in one place, including
the separate, shorter lease-side Lead Warning Statement — genuinely
new content, not previously in the corpus.

## Note on overlap with the existing embedded clause

Some content here (the 1978 target-housing definition, the core
disclosure duties, the sale-side 10-day inspection opportunity, the
sale Lead Warning Statement) necessarily parallels
`purchase_lead_paint_federal`, since both are grounded in the same
federal statute. That existing clause remains embedded in the
Residential Purchase Agreement for sale-only use; this new document is
built to also stand alone for a lease transaction, which the existing
clause doesn't cover at all — the overlap is a byproduct of building a
genuinely self-sufficient dual-purpose form, not unexamined
duplication.

## What this document covers

6 clauses: 2 drafting (certification/acknowledgment,
Lead Warning Statement text — sale and lease versions) and 4 authority
clauses:

- **`leadpaint_target_housing_scope`** (42 U.S.C. § 4851b(27); 40
  C.F.R. § 745.101(a)-(c)) — the 1978 target-housing definition and
  all six real exemptions (foreclosure sales, certified lead-free
  leases, short-term leases ≤100 days, unchanged lease renewals, plus
  the elderly/disabled and 0-bedroom carve-outs).
- **`leadpaint_disclosure_duties`** (42 U.S.C. § 4852d(a)(1); 40
  C.F.R. § 745.107(a)-(b)) — the pamphlet, known-hazard, and records
  disclosure duties applying to both a sale and a lease.
- **`leadpaint_sale_inspection_opportunity`** (42 U.S.C. § 4852d(a)(2);
  40 C.F.R. § 745.110(a)-(b)) — the 10-day inspection opportunity,
  explicit that it runs only to a "purchaser," with no lease-side
  counterpart.
- **`leadpaint_penalties_enforcement`** (42 U.S.C. § 4852d(b)(1),
  (b)(3), (b)(5); 24 C.F.R. § 35.96(c)) — HUD civil penalties, private
  treble-damages liability, and the separate TSCA prohibited-act
  penalty cap.

## Genuine corrections and honest gaps

- The task brief guessed treble damages were at § 4852d(b)(5). Direct
  review shows that's the TSCA prohibited-act/penalty-cap provision;
  treble damages are actually at § 4852d(b)(3).
- A genuine wording discrepancy between agencies was found and
  disclosed rather than silently resolved: the statute and EPA's 40
  C.F.R. § 745.103 place the "(unless a child under 6 resides)"
  parenthetical after "0-bedroom dwelling," while HUD's 24 C.F.R.
  § 35.86 places the identical parenthetical after "housing for the
  elderly or persons with disabilities" instead.
- The substance and current penalty amounts of the cross-referenced
  HUD civil-penalty statute (42 U.S.C. § 3545) were not independently
  verified — disclosed rather than assumed.

## Method

Fetched 42 U.S.C. §§ 4851b, 4852d from `law.cornell.edu`, 40 C.F.R.
§§ 745.101, 745.107, 745.110 from `ecfr.gov`, and 24 C.F.R. § 35.96
from `ecfr.gov`, each verified against a second, independent fetch
with a distinct User-Agent — confirmed byte-identical.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 4 authority
  clauses — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field name (`propertyAddress`) reused from existing Real Estate
  documents; new fields (`sellerLandlordName`, `buyerTenantName`)
  chosen deliberately to work for either transaction type.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Lead-Based Paint Disclosure
  (`lead_based_paint_disclosure`), 6 clauses (4 authority + 2
  drafting), in the Real Estate category. New fields:
  `sellerLandlordName`, `buyerTenantName`.
- Corpus: 662 → 668 clauses; 88 → 89 documents.
