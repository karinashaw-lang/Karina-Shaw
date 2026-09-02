# Family Law, new document: Move-Away Custody — Information Sheet

## Why this document

The corpus's existing Parenting Plan document has a single, brief
clause (`parenting_relocation`) citing Fam. Code § 7501 and *In re
Marriage of Burgess*. This document adds real depth on the notice
mechanics and evaluation confidentiality, and honestly discloses where
case-law depth (the contested move-away standard, joint-custody
distinction) could not be independently verified this session.

## What this document covers

6 clauses: 3 drafting (relocation notice declaration, case-law
background disclosure, signature/certification) and 3 authority
clauses:

- **`moveaway_statutory_right_and_legislative_intent`** (Fam. Code
  § 7501(a)-(b)) — the relocation right and the Legislature's
  affirmance of *Burgess* as state policy.
- **`moveaway_notice_is_court_ordered_not_automatic`** (Fam. Code
  § 3024) — the notice requirement depends on the specific custody
  order, not a statewide default.
- **`moveaway_custody_evaluation_confidentiality`** (Fam. Code
  § 3025.5(a)) — a court-ordered custody evaluation's report is
  confidential.

## Genuine corrections and findings

- Confirmed § 7501(a)-(b) independently, adding depth beyond the
  existing `parenting_relocation` clause's brief treatment.
- **A genuine finding**: § 3024 shows the 30-day relocation notice
  term is something a court may include in a custody order — it is
  not a statewide default that applies automatically to every custody
  arrangement.
- Confirmed § 3025.5(a)'s confidentiality mandate for custody-
  evaluation and recommendation reports.

## Honest gap disclosed

*In re Marriage of LaMusga* and the contested move-away detriment/
best-interest standard could not be independently verified against
primary case-law text this session. CourtListener was rate-limited
throughout (HTTP 429, ~125/day cap exhausted), and every alternative
source (Justia, CourtListener's web interface, other case-law sites)
was either blocked by a bot-challenge page or blocked by this
environment's network egress policy. Rather than fabricate or
half-verify a citation, the LaMusga factors and the sole/joint
physical custody distinction are presented only in a dedicated
drafting-kind clause (`moveaway_case_law_background_not_independently_
verified`) as unsourced, widely-reported background — explicitly
labeled as not independently confirmed against primary opinion text,
with no citation entry, and an explicit statement that it should not
be relied on as a citation-quality statement of the law.

## Method

Fetched Fam. Code §§ 7501, 3024, and 3025.5 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch — confirmed byte-identical. All citation quotes
programmatically confirmed as exact substrings of the fetched,
normalized text.

## Verification

- All statutory citations fetched twice independently; confirmed clean
  on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked for red-flag placeholder text inside any citation `quote` —
  none found; the unverified case-law summary was correctly kept as a
  `kind: "drafting"` clause with no citations array and no `status`,
  rather than marked "verified" without real sourcing.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`childName`, `parent1Name`, `parent2Name`,
  `countyOfFiling`, `dateSigned`, `cityState`) independently confirmed
  to match existing corpus convention. New fields:
  `proposedNewAddress`, `proposedMoveDate`, `reasonForProposedMove`,
  `noticeDate`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Move-Away Custody — Information Sheet
  (`move_away_custody_info_sheet`), 6 clauses (3 authority + 3
  drafting), in the Family Law category. New fields:
  `proposedNewAddress`, `proposedMoveDate`, `reasonForProposedMove`,
  `noticeDate`.
- Corpus: 1,634 → 1,640 clauses; 206 → 207 documents. Completes wave
  39 (USERRA, Bereavement Leave, Ancillary Probate, Move-Away
  Custody).
