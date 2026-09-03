# Hiring, new document: California Fair Pay Act — Information Sheet

## Why this document

This topic was previously only a brief cross-reference inside an
existing clause, `payscale_1197_5_not_job_posting_source`, in the
corpus's existing Pay Scale Disclosure and Salary History Ban document,
which distinguishes § 1197.5 from a different job-posting-disclosure
duty without describing what § 1197.5 itself requires. This document
independently re-verifies § 1197.5 and covers its actual substance.
Second document of wave 56.

## What this document covers

7 clauses: 2 drafting (purpose, acknowledgment) and 5 authority clauses,
citing Cal. Lab. Code § 1197.5(a)-(k):

- **`fairpay_equal_pay_prohibition_and_standard`** (§ 1197.5(a)-(b)) —
  the core prohibition, stated as two separate, parallel subdivisions
  (sex-based and race/ethnicity-based), and the "substantially similar
  work" composite standard.
- **`fairpay_bona_fide_factor_defenses`** (§ 1197.5(a)(1)-(4)) — the
  enumerated affirmative-defense factors, the catch-all factor's
  job-relatedness/business-necessity conditions and employee-side
  rebuttal, the reasonable-application and entire-differential
  requirements, and the prior-salary limitation.
- **`fairpay_remedies_and_statute_of_limitations`** (§ 1197.5(c), (h),
  (i)(1)-(2)) — wage/liquidated-damages liability, the private civil
  action, and the three-year filing period with a six-year damages cap.
- **`fairpay_recordkeeping_and_dlse_enforcement`** (§ 1197.5(d)-(f)) —
  the three-year recordkeeping duty, DLSE administration, and
  complainant confidentiality.
- **`fairpay_retaliation_and_wage_discussion_protection`**
  (§ 1197.5(k)(1)-(3)) — the anti-retaliation provision with its 90-day
  rebuttable presumption, the separate protected right to discuss wages
  (explicitly not a duty to disclose), and a one-year limitations period.

## Genuine corrections and findings

- **Sex-based and race/ethnicity-based prohibitions are separate,
  parallel subdivisions** — (a) and (b) — not one unified clause,
  confirmed from the statute's own structure rather than assumed.
- **A precise affirmative-defense architecture**: beyond the four
  enumerated factors, the statute imposes two further independent
  requirements — reasonable application, and that the factor(s) account
  for the *entire* differential, not merely part of it.
- **The prior-salary rule has a real carve-out**: prior salary cannot
  justify a disparity, but an employer may still base a decision on a
  current employee's *existing* salary if any resulting differential is
  itself independently justified by an enumerated factor.
- **The anti-retaliation provision bundles two distinct protections in
  one paragraph**: the 90-day rebuttable presumption against
  retaliation, and a separate right to discuss wages — explicitly
  distinguished from any duty to disclose them.
- Confirmed the statute was last amended effective January 1, 2026
  (Stats. 2025, Ch. 468 (SB 642)) — the document reflects the currently
  codified text, not a prior version.
- Flagged, without treating as a correction, an apparent internal
  cross-reference oddity in the statute's own definitions subdivision
  (referencing "Section 1199.5") — noted honestly rather than resolved
  by assumption.

## Honest gap disclosed

No reported court decision applying these factors, remedies, or the
retaliation provision to particular facts was identified or cited.
Several subdivisions are not restated in full: (d)/(g)'s
DLSE-initiated-action provisions, (f)'s § 98.7(b) cross-reference,
(j)'s federal Equal Pay Act recovery offset, and (l)'s definitions.

## Method

Fetched Cal. Lab. Code § 1197.5 directly from
`leginfo.legislature.ca.gov`, independently re-fetched with a distinct
User-Agent string and `Accept-Language` header, and confirmed
byte-identical after whitespace normalization. All 21 citation quotes
programmatically confirmed as exact substrings of the confirmed text.

## Verification

- Section fetched twice independently with distinct request headers;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — all citations
  correctly disclosed as subdivisions of a single statutory section, not
  independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `employeeName`, `jobTitle`, `dateSigned`,
  `cityState`) independently confirmed to match existing corpus field
  definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: California Fair Pay Act — Information Sheet
  (`california_fair_pay_act_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the Hiring category. No new fields.
- Corpus: 2,124 → 2,131 clauses; 272 → 273 documents. Second document of
  wave 56.
