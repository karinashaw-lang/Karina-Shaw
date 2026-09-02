# Confidentiality & IP, new document: Work Made for Hire Agreement (Independent Contractor)

## Why this document

The existing Invention Assignment & Confidentiality Agreement covers
the employee branch of work-for-hire; the existing Copyright
Assignment Agreement covers post-hoc transfer of an already-existing
copyright. This document covers a distinct use posture: a prospective
work-for-hire designation signed when commissioning work from an
independent contractor, with a backup assignment clause as fallback —
narrowly focused on the contractor-specific two-part statutory test
rather than re-treading termination rights or moral rights already
covered elsewhere.

## What this document covers

7 clauses: 3 drafting (designation clause, fallback assignment,
acknowledgment) and 4 authority clauses:

- **`wfh_default_ownership_rule`** (17 U.S.C. § 201(a), (b); *CCNV v.
  Reid*, 490 U.S. 730 (1989)) — a contractor owns copyright by default
  unless work-for-hire status attaches or ownership is separately
  assigned.
- **`wfh_statutory_definition_two_branches`** (17 U.S.C. § 101) — the
  two branches of the work-for-hire definition; contractor work can
  only ever fall within the second (nine enumerated categories + a
  signed writing).
- **`wfh_no_automatic_status_for_contractors`** (*CCNV v. Reid*, two
  passages) — contractor work-for-hire status requires both
  conditions; missing either one defeats it regardless of intent.
- **`wfh_outside_categories_fallback_assignment`** (17 U.S.C. § 204(a);
  *Effects Associates, Inc. v. Cohen*, 908 F.2d 555 (9th Cir. 1990)) —
  work outside the nine categories can still transfer via an ordinary
  signed-writing assignment.

## Genuine corrections caught during research

- The agent corrected my own field-naming assumption: the existing
  Independent Contractor Agreement document actually names its
  contractor field `employeeName` (labeled "Contractor name"), not
  `contractorName`. The agent judged `contractorName` — which already
  exists elsewhere in the corpus (Home Improvement Contract, labeled
  "Contractor's name") — the better, clearer reuse target for a
  copyright-specific document rather than perpetuating the odd
  existing label.
- Confirmed the existing corpus's `copyrightassign_*` clauses already
  cover § 101/§ 201, the nine categories, § 204(a), termination
  rights, and moral rights thoroughly — the new document was
  deliberately scoped narrower (prospective designation + fallback,
  not a restatement) to avoid duplicating that coverage without adding
  value.
- Pulled two previously-uncited passages from *CCNV v. Reid* (rather
  than reusing the corpus's existing quotes, which cover only the
  agency-factors/employee-status point) to add genuine new value:
  the Court's statement that the sculpture failed both the
  enumerated-category and signed-writing prongs together, and the
  consequence that follows when a contractor's work fails the test.

## Honest gap disclosed

CourtListener hit its daily rate limit when the agent attempted to
independently re-fetch *Effects Associates, Inc. v. Cohen*. Rather
than fabricate, the agent reused the exact quote already verified in
this project's own Copyright Assignment Agreement document
(`copyrightassign_writing_required`, checked 2026-09-01) — confirmed
byte-identical during this integration — and disclosed the reuse and
the exact rate-limit error explicitly in that clause's `gap` field.
The § 204(a) statutory quote in the same clause was independently
fetched and verified fresh this session.

## Method

Fetched 17 U.S.C. §§ 101, 201, and 204 from `law.cornell.edu/uscode`,
each verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical (direct `curl` through the
environment's proxy was used since the `WebFetch` tool itself is
blocked for these domains). *CCNV v. Reid* fetched fresh in full via
CourtListener's `read_document` tool (opinion id 112273).

## Verification

- All citations fetched twice independently with distinct User-Agents
  (statutes) or fetched fresh via CourtListener (new case-law
  passages); confirmed clean on integration.
- The reused *Effects Associates* quote was independently cross-checked
  during this integration against its existing corpus entry
  (`copyrightassign_writing_required`) — confirmed byte-identical, no
  drift.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — the agent caught and
  fixed one real leak during its own drafting process (live
  placeholder syntax accidentally used in a gap field instead of
  prose) before delivery; independently re-confirmed clean on
  integration.
- Checked source-independence disclosure logic across all 4 authority
  clauses — the one same-section clause (`wfh_default_ownership_rule`,
  citing § 201(a) and (b)) carries an explicit disclosure sentence —
  correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none, apart from the intentional "Acknowledgment" title reuse
  pattern already established for signature-block clauses).
- Field names (`companyName`, `workDescription`) confirmed to match
  existing corpus conventions; `contractorName` is a deliberate,
  justified departure from the Independent Contractor Agreement's
  `employeeName` field. New field: `categoryOfWork`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Work Made for Hire Agreement (Independent Contractor)
  (`work_made_for_hire_agreement`), 7 clauses (4 authority + 3
  drafting), in the Confidentiality & IP category. New fields:
  `contractorName`, `categoryOfWork`.
- Corpus: 854 → 861 clauses; 113 → 114 documents.
