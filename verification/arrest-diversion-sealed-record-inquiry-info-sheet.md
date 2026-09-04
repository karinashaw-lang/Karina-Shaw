# Hiring, new document: Restrictions on Employer Inquiry Into Arrest, Diversion, and Sealed Conviction Records — Information Sheet

## Why this document

Third document of wave 82. Read the existing Fair Chance Act, Background
Check Adverse Action Notice, and Background Check Disclosure &
Authorization documents in full — confirmed via grep and full-text
reading that existing clauses cross-reference Labor Code § 432.7 for
definitions and one narrow exception, but each explicitly discloses in
its own gap field that it did NOT independently fetch and verify
§ 432.7's own substantive text. This document independently verifies
and quotes that text directly. Confirmed non-duplicative.

## What this document covers

7 clauses: 2 drafting (declaration, signature/certification) and 5
authority clauses, citing Cal. Labor Code §§ 432.7(a)(1), (a)(3)(A)-
(B), (e)(1), (m)(1)-(2), (n), (c)-(d), and 432.8:

- **`arrestrecord_core_prohibition`** (§ 432.7(a)(1)) — the core
  ask/seek/utilize prohibition covering arrests not resulting in
  conviction, diversion programs, and dismissed/sealed convictions,
  plus the bail/own-recognizance carve-out.
- **`arrestrecord_definition_conviction`** (§ 432.7(a)(3)(A)-(B)) —
  the statutory definition of "conviction" (a plea, verdict, or
  finding of guilt regardless of sentencing) and the exclusion of
  juvenile-court adjudications.
- **`arrestrecord_exceptions`** (§ 432.7(e)(1), (m)(1)-(2), (n)) —
  **the central finding**: the "particular conviction" exceptions are
  narrower than a general conviction-inquiry allowance — they require
  a specific federal or state law basis (legal requirement, firearm
  position, or a legal bar tied to that specific conviction), not
  simply any lawful business reason.
- **`arrestrecord_marijuana`** (§ 432.8) — **a genuine finding**: this
  is a separate statutory section (not a subdivision of § 432.7) that
  extends § 432.7's limitations and penalties by cross-reference to
  specific enumerated Health & Safety Code marijuana provisions once
  two years have passed — narrower than a blanket "any marijuana
  conviction over two years old" rule.
- **`arrestrecord_remedies`** (§ 432.7(c)-(d)) — the civil damages
  structure (actual damages or $200, whichever is greater; treble
  damages or $500 for an intentional violation) and the misdemeanor
  penalty for an intentional violation.

## Genuine corrections and findings

- **The central finding**: confirmed the "particular conviction"
  exceptions require a specific federal-or-state-law basis tied to that
  exact conviction — not a general "job-related" standard — verified
  precisely from the statute's own conjunctive structure.
- **A genuine statutory-structure finding**: confirmed § 432.8 (the
  marijuana provision) is a wholly separate, independently enacted
  section from § 432.7 — not a subdivision within it — correcting an
  assumption in the original research brief that it might be part of
  § 432.7 itself.
- Confirmed § 432.8's marijuana-conviction rule reaches only specific
  enumerated Health & Safety Code provisions (§§ 11357(b)-(c),
  11360(c), 11364/11365/11550 pre-1976), not a blanket rule — a
  meaningful scope limit.
- Confirmed the civil remedy structure precisely: actual damages or a
  $200 floor for an ordinary violation, escalating to treble damages or
  a $500 floor plus misdemeanor exposure for an intentional violation.

## Honest gap(s) disclosed

§ 432.7(a)(2) (the separate juvenile-court-record inquiry prohibition)
is not covered. § 432.7(e)(2) (the narrower nonsworn criminal-justice-
agency-employee rule), § 432.7(f) (the health-facility exception,
referenced but not independently verified even in the existing Fair
Chance Act document), and §§ 432.7(g)-(l) (law-enforcement
recordkeeping and public-agency concessionaire screening) are not
covered. How § 432.8's rule interacts with more recent California
cannabis-legalization and record-relief statutes is not addressed.

## Method

Fetched Cal. Labor Code §§ 432.7 and 432.8 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. All 14 citation quotes across the 5
authority clauses programmatically confirmed as exact contiguous
substrings (no ellipsis-joined quotes). Independently re-verified
during integration review via an eighteenth fetch (a distinct curl
User-Agent string, "Groundtruth-EighteenthVerify-ArrestRecord/1.0") of
both sections — all 14 quotes confirmed clean.

## Verification

- Both statutory sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus an eighteenth
  independent fetch during integration review; all quotes confirmed
  clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same
  statutory section; § 432.7 vs. § 432.8 correctly treated as
  independent sections; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("Purpose of This Information Sheet,"
  "Signature and Certification") match titles used elsewhere in the
  corpus — confirmed as the established boilerplate-title reuse
  pattern, not a genuine collision.
- No new fields required — all three fields (`companyName`,
  `employeeName`, `jobTitle`) reused from the existing corpus (185,
  126, and 17 prior documents respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Restrictions on Employer Inquiry Into Arrest,
  Diversion, and Sealed Conviction Records (Labor Code § 432.7) —
  Information Sheet
  (`arrest_diversion_sealed_record_inquiry_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Hiring category. No new fields.
- Corpus: 2,852 → 2,859 clauses; 375 → 376 documents. Third addition of
  wave 82.
