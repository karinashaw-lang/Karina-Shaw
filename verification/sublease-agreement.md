# Real Estate, sixth new document: Sublease Agreement

## Why this document

No sublease document existed in the corpus. This document covers a
tenant (sublessor) subletting to a new subtenant while remaining bound
to the original landlord under the master lease — a genuinely distinct
transaction from the existing Residential Lease Agreement.

## What this document covers

8 clauses: 4 drafting (parties/property, rent, master-lease
compliance/consent, signatures) and 4 authority clauses:

- **`sublease_governing_framework`** (Civ. Code §§ 1995.010,
  1995.020(b), 1995.270) — the real, easy-to-miss scope limit: California's
  statutory landlord-consent-to-transfer chapter applies only to
  nonresidential leases, so a residential sublease's rights turn
  entirely on the master lease's own terms.
- **`sublease_assignment_vs_sublease`** (Civ. Code §§ 1995.020(a),
  (e), 1995.010) — the assignment/sublease distinction, with an
  honest disclosure that the statute names but does not define the
  substantive test, and that the commonly-cited case authority
  (*Hartman Ranch Co.*, *Kendall v. Ernest Pestana*) could not be
  quote-verified this session due to a CourtListener rate limit.
- **`sublease_sublessor_liability`** (Civ. Code § 1995.020(a), (d)) —
  that the statute's dual "landlord"/"tenant" definitions support, but
  don't directly codify, the sublessor's continuing liability to the
  landlord — the same honest case-law disclosure applies.
- **`sublease_no_privity`** (Civ. Code § 822) — that a landlord's
  statutory remedies extend to a tenant's "assignees" but never
  mention subtenants, offered as inferential (not direct) statutory
  support for the no-privity default rule.

## Notable research process: an incomplete first delivery, caught and fixed

The first research agent's delivery had three authority clauses left
as literal `PLACEHOLDER_BODY`/`PLACEHOLDER_GAP` placeholders with
empty citation arrays — caught immediately by this session's standard
review before any merge was attempted. A second agent was dispatched
specifically to finish them. That agent hit a CourtListener daily rate
limit while trying to verify two case citations (*Hartman Ranch Co. v.
Associated Oil Co.*, 10 Cal.2d 232 (1937); *Kendall v. Ernest Pestana,
Inc.*, 40 Cal.3d 488 (1985)) and initially proposed waiting ~42
minutes for the quota to reset. It was redirected to finish within one
more retry rather than wait, using only independently verifiable
statutory text and disclosing honestly, in each affected clause's gap
field, that the two cases are commonly-cited leads that were not
quote-verified against primary text this session — no invented or
paraphrased case quotes were included.

## Defects caught and fixed during integration

- `sublease_no_privity`'s gap field contained a literal `{{landlordName}}`/
  `{{subtenantName}}` leak — the recurring defect class this project
  has hit repeatedly. Fixed with generic phrasing.
- `sublease_sublessor_liability` cites a single statutory subsection
  but initially lacked the standard explicit single-source disclosure
  sentence — added during integration.

## Method

Fetched Civil Code §§ 818–827, 822, 1995.010, 1995.020, 1995.270
directly from `leginfo.legislature.ca.gov`, each verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-identical.

## Verification

- All statutory citations fetched twice independently with distinct
  User-Agents; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — caught and fixed one
  real leak during integration.
- Checked source-independence disclosure logic across all 4 authority
  clauses — corrected on one, confirmed correct on the rest.
- Checked for duplicate clause IDs against the full corpus (none);
  three duplicate titles ("Parties and Property," "Rent,"
  "Signatures") are the pre-existing generic drafting-title pattern.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Sublease Agreement (`sublease_agreement`), 8 clauses
  (4 authority + 4 drafting), in the Real Estate category. New fields:
  `sublessorName`, `subtenantName`, `subleaseStartDate`,
  `subleaseEndDate` (`landlordName`, `propertyAddress`, `monthlyRent`
  reused from the existing lease convention).
- Corpus: 604 → 612 clauses; 80 → 81 documents.
