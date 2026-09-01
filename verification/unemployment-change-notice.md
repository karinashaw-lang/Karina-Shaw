# Employment, "Ending employment" sixth document: Notice to Employee as to Change in Relationship

## Why this document

"Ending employment" was the thinnest employment category in the
project (5 documents). The project's existing Termination/Separation
Letter and WARN Act Layoff Notice don't cover a distinct, narrower,
and often-overlooked California requirement: Unemployment Insurance
Code § 1089, which requires an employer to (1) supply the EDD's
unemployment-benefits pamphlet at separation, and (2) separately and
immediately notify an employee of any change in the employment
relationship (termination, layoff, leave of absence, or job-status
change) — confirmed non-duplicative against both existing documents
before drafting.

## What this document covers

6 clauses: 2 drafting (notice intro, acknowledgment) and 4 authority
clauses:

- **`unemploynotice_pamphlet_requirement`** (UIC § 1089(b), (d); EDD
  guidance) — the statutory pamphlet-supply duty, with the actual
  "For Your Benefit" (DE 2320) pamphlet identified via the agency's
  own administrative guidance rather than the statutory text itself,
  which names no specific form.
- **`unemploynotice_change_in_relationship`** (UIC § 1089(c); EDD
  guidance) — the separate, distinct immediate-notice duty for any
  change in the employment relationship.
- **`unemploynotice_no_size_threshold`** (UIC § 1089(a)-(b); Lab. Code
  § 2810.5(a)(1)) — that this duty applies to every employer with no
  headcount threshold, and is distinct from the hire-time notice.
- **`unemploynotice_penalty`** (UIC § 1089(g)) — the actual compliance
  consequence (a misdemeanor), correcting an assumed penalty source.

## Genuine correction caught during research

The task brief pointed to UIC § 1142 as a possible penalty provision.
Direct review found that's wrong — § 1142 penalizes false statements
about a claimant's termination facts for benefit-eligibility
determinations, an unrelated kind of misconduct. The real compliance
consequence is the misdemeanor provision written directly into
§ 1089(g) itself. Disclosed honestly in `unemploynotice_penalty`'s gap
field, and no other penalty provision was found after checking.

## Method

Fetched Unemployment Insurance Code § 1089 and Labor Code § 2810.5(a)(1)
directly from `leginfo.legislature.ca.gov`, and the EDD's own "Required
Notices and Pamphlets" guidance page from `edd.ca.gov`, each verified
against a second, independent fetch with a distinct User-Agent —
confirmed byte-identical. Two quote-accuracy bugs (a wrong word in one
quote, punctuation drift in two others) were caught and fixed before
finalizing.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 4 authority
  clauses — corrected on one (`unemploynotice_penalty`), confirmed
  correct on the rest.
- Checked for duplicate clause IDs against the full corpus (none); one
  duplicate title ("Acknowledgment") is the pre-existing generic
  drafting-title pattern.
- Field names (`companyName`, `employeeName`) reused from the existing
  employment-document convention; one new field, `changeDate`, added
  because this notice's trigger is broader than the existing
  `terminationDate` field's name implies.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Notice to Employee as to Change in Relationship
  (`unemployment_change_notice`), 6 clauses (4 authority + 2
  drafting), in the "Ending employment" category. New field:
  `changeDate`.
- Corpus: 574 → 580 clauses; 76 → 77 documents.
