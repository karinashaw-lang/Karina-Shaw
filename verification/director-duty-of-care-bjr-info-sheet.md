# Business Formation, new document: Director's Duty of Care and the Business Judgment Rule — Information Sheet

## Why this document

This topic previously existed in the corpus only as a single narrow
clause, `founders_fiduciary_duties_by_entity`, embedded within the
existing Founders' Agreement document — a brief cross-entity comparison
(partnership vs. corporation vs. LLC) using only § 309(a) as its
corporate citation. Following the established "deepen a narrow/passing-
mention topic into a full dedicated document" pattern, this document
independently re-verifies § 309(a) and extends into subdivisions (b) and
(c), which the existing clause never touched — using a distinct `bjr_`
id prefix to avoid collisions.

## What this document covers

6 clauses: 2 drafting (purpose declaration, certification) and 4
authority clauses, all citing Cal. Corp. Code § 309:

- **`bjr_standard_of_care`** (subd. (a)) — the statutory good-faith/
  best-interests/ordinarily-prudent-person standard.
- **`bjr_reliance_sources`** (subd. (b)) — the three categories of
  sources a director may rely on (officers/employees, counsel/
  accountants/experts, board committees).
- **`bjr_reliance_conditions`** (subd. (b), isolated closing sentence) —
  the good-faith/reasonable-inquiry/no-disqualifying-knowledge conditions
  that limit the reliance right.
- **`bjr_liability_protection`** (subd. (c)) — the statutory codification
  of business judgment rule protection for a director who meets the
  standard.

## Genuine corrections and findings

- Confirmed the § 309(a) text this document independently re-verified
  matches what the existing `founders_fiduciary_duties_by_entity` clause
  already quoted — no correction needed there; the value of this document
  is depth (subdivisions (b) and (c)), not a fix to the existing clause.
- Confirmed the reliance right is not unconditional — it requires good
  faith, reasonable inquiry when circumstances call for it, and the
  absence of knowledge that would make reliance unwarranted; the document
  explicitly states this doesn't excuse a director who knows something
  making reliance unreasonable or who skips a called-for inquiry.
- Confirmed the statute lists three specific categories of permissible
  reliance sources without stating whether the list is illustrative or
  exhaustive — flagged as an open question rather than resolved by
  assumption.
- Confirmed § 309(c)'s liability protection cross-references a separate
  statute, Corp. Code § 204(a)(10), for exculpatory-articles provisions —
  disclosed as an unverified cross-reference rather than independently
  characterized.

## Honest gap disclosed

Corp. Code § 204(a)(10) (the exculpatory-provision statute § 309(c)
cross-references) was not independently fetched or verified. No case law
was cited — the document is deliberately limited to the verified
statutory text of § 309, not the broader common-law business judgment
rule doctrine as California courts have applied it in specific disputes.

## Method

Fetched Cal. Corp. Code § 309 directly from `leginfo.legislature.ca.gov`
twice, using two distinct User-Agent strings via separate curl requests
— confirmed identical after normalization (the only byte-level difference
was an expected per-request JSF ViewState token, not content drift). All
4 citation quotes programmatically confirmed as exact substrings of the
confirmed text.

## Verification

- The statute fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — every citation in this
  document is a subdivision of the single statute § 309, and each
  clause's `gap` explicitly discloses this, including that the reliance-
  conditions clause quotes the same sentence already quoted in full in
  the reliance-sources clause; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none, and a
  distinct `bjr_` id prefix was deliberately used to avoid colliding with
  the existing `founders_` prefixed clause). Two accepted generic
  drafting-title reuses ("Purpose and Scope of This Information Sheet,"
  "Certification").
- Field names (`companyName`, `preparerName`, `dateSigned`, `cityState`)
  independently confirmed to match existing corpus convention. New
  field: `directorName`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Director's Duty of Care and the Business Judgment Rule —
  Information Sheet (`director_duty_of_care_bjr_info_sheet`), 6 clauses
  (4 authority + 2 drafting), in the Business Formation category. New
  field: `directorName`.
- Corpus: 2,028 → 2,034 clauses; 259 → 260 documents. First document of
  wave 53.
