# Confidentiality & IP, fifth document: Mutual Non-Disclosure Agreement

## Why this document

The project's existing Non-Disclosure Agreement is one-way,
employer-to-employee (`companyName`/`employeeName`). This document
covers the genuinely distinct two-way case: two businesses exchanging
confidential information in both directions, e.g., evaluating a
partnership or a deal. The research read the existing NDA clauses
first and reused the DTSA whistleblower-notice content rather than
re-deriving it, since that clause already fully covers the notice's
substance for an individual/contractor relationship.

## What this document covers

7 clauses: 4 drafting (reciprocal definitions, reciprocal obligations,
carve-outs, term/signatures) and 3 authority clauses:

- **`mutualnda_ca_tradesecret_definition`** (Civ. Code § 3426.1(d)) —
  California's own statutory trade-secret definition, distinct from
  the contract's own broader definition of confidential information.
- **`mutualnda_contractual_independent_of_tradesecret`** (Civ. Code
  §§ 3426.7(b), 3426.6) — that a breach-of-contract claim doesn't
  require proving the trade-secret test, and that the trade-secret
  statute's three-year discovery-rule deadline doesn't set the
  contract's own confidentiality duration.
- **`mutualnda_dtsa_notice_scope`** (18 U.S.C. § 1833(b)(3)(A), (b)(4))
  — a genuinely new scoping point not covered by the existing NDA:
  the federal whistleblower-notice mandate is written around an
  individual performing work for an employer, and a pure
  company-to-company mutual NDA may sit outside that literal text.

## Honest gaps disclosed

- No case law was checked on how the DTSA notice requirement's
  employee/contractor boundary applies to edge cases (e.g., a sole
  proprietor doing business under a company name) — the statute's own
  text is unambiguous on the general rule, so it stands alone.
- No statutory backstop sets how long a plain contractual
  confidentiality duty lasts; that's left entirely to the parties'
  own drafting, and an ordinary breach-of-contract claim would be
  governed by California's general written-contract statute of
  limitations, which was not independently verified or quoted here.
- The research did not find a clean, checkable case confirming that
  courts enforce mutual NDAs per their terms regardless of actual
  information-flow direction (CourtListener hit its daily rate limit
  mid-research) — this point was dropped rather than left unverified.

## Defect caught and fixed during integration

`mutualnda_ca_tradesecret_definition` cites a single statutory
subsection but initially lacked the standard explicit single-source
disclosure sentence — added during integration.

## Method

Fetched Civil Code §§ 3426.1(d), 3426.6, 3426.7(b) from
`leginfo.legislature.ca.gov` and 18 U.S.C. § 1833(b)(3)(A), (b)(4)
from `uscode.house.gov`, each verified against a second, independent
fetch with a distinct User-Agent — confirmed byte-identical.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 3 authority
  clauses — corrected on one, confirmed correct on the rest.
- Checked for duplicate clause IDs against the full corpus (none); one
  title collision the agent caught and fixed itself during drafting.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Mutual Non-Disclosure Agreement (`mutual_nda`), 7
  clauses (3 authority + 4 drafting), in the Confidentiality & IP
  category. New fields: `party1Name`, `party2Name`,
  `purposeOfDisclosure`, `confidentialityDuration`.
- Corpus: 580 → 587 clauses; 77 → 78 documents.
