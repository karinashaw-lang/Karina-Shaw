# Confidentiality & IP, sixth document: Copyright Assignment Agreement

## Why this document

The project's existing Invention Assignment & Confidentiality
Agreement is employment-context (Reid/Aymes work-for-hire doctrine,
`companyName`/`employeeName`). This document covers the genuinely
distinct freelance/independent-creator case: because a freelancer's
work generally is NOT automatically "work made for hire," a signed
assignment is usually the only way to actually transfer copyright
ownership from the creator to the hiring party. Uses non-employment
field names (`hiringPartyName`, `creatorName`, `workDescription`)
throughout rather than reusing the existing document's convention.

## What this document covers

7 clauses: 2 drafting (assignment grant, signatures) and 5 authority
clauses:

- **`copyrightassign_initial_ownership`** (17 U.S.C. § 201(a); *Effects
  Associates, Inc. v. Cohen*, 908 F.2d 555 (9th Cir. 1990)) — that
  copyright vests initially in the freelance author, not the hiring
  party, absent assignment.
- **`copyrightassign_wfh_categories`** (17 U.S.C. § 101; *Community for
  Creative Non-Violence v. Reid*, 490 U.S. 730 (1989)) — the actual
  nine enumerated work-made-for-hire categories, confirming most
  freelance deliverables don't fall within any of them.
- **`copyrightassign_writing_required`** (17 U.S.C. § 204(a); *Effects
  Associates*) — the signed-writing requirement for a valid copyright
  transfer.
- **`copyrightassign_termination_right`** (17 U.S.C. § 203(a)(3),
  (a)(4)) — the author's 35-year statutory termination-of-transfer
  right, which cannot be waived by contract and doesn't apply to work
  made for hire.
- **`copyrightassign_moral_rights`** (17 U.S.C. §§ 106A(e)(1), 101) —
  VARA moral rights, non-transferable and waivable only by a specific
  signed writing, scoped to the narrow "work of visual art" definition
  that excludes most freelance deliverables.

## Honest gaps disclosed

- *Effects Associates* is Ninth Circuit precedent, frequently cited
  nationally but binding only within that circuit — disclosed in both
  clauses that cite it.
- Whether a specific work fits one of the nine work-made-for-hire
  categories, or qualifies as a VARA "work of visual art," is a
  fact-specific characterization the clauses don't resolve for any
  particular work.
- The termination right's eligibility depends on facts (whether the
  assigning party is an individual human author, when the assignment
  was signed) not addressed by the clause.

## Method

Fetched 17 U.S.C. §§ 101, 106A, 201, 203, 204 from `law.cornell.edu`,
cross-checked against `uscode.house.gov`, each verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-identical. Case law (*Community for Creative Non-Violence v.
Reid*, *Effects Associates, Inc. v. Cohen*) verified via CourtListener
against full opinion text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 5 authority
  clauses — correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); one
  duplicate title ("Acknowledgment") is the pre-existing generic
  drafting-title pattern.
- Confirmed no `companyName`/`employeeName` strings anywhere in the
  new clauses, keeping this document's non-employment framing distinct
  from the existing Invention Assignment document.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Copyright Assignment Agreement
  (`copyright_assignment`), 7 clauses (5 authority + 2 drafting), in
  the Confidentiality & IP category. New fields: `hiringPartyName`,
  `creatorName`, `workDescription`.
- Corpus: 612 → 619 clauses; 81 → 82 documents.
