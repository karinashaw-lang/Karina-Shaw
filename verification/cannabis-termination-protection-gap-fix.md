# Ending employment, gap-fix: Off-Duty Cannabis Use / Metabolite-Testing Termination Protection (added to Wrongful Termination in Violation of Public Policy)

## Why this gap-fix, not a new document

Second document/gap-fix of wave 85. Read the existing `drug_testing_info_sheet`
document (Hiring category) and confirmed it already contains two
authority clauses — `drugtest_cannabis_off_duty_protection` and
`drugtest_cannabis_exemptions` (checkedDate 2026-09-02) — that fully
and accurately encode all of Gov. Code § 12954(a)-(g): the off-duty-
use prohibition, the nonpsychoactive-metabolite-testing limitation,
the applicant-inquiry restriction, and all four carve-outs
(construction trades, on-the-job/drug-free workplace, no preemption of
testing requirements, federal security clearance). Independently
re-verified every one of those existing quotes as byte-accurate. Also
read the existing "Wrongful Termination in Violation of Public Policy"
document and confirmed it covers only Labor Code §§ 1102.5/98.6
retaliation theories, with zero mention of cannabis or marijuana.
Given the core statute is already thoroughly and recently verified in
the sibling Hiring document, a gap-fix — two new termination-scoped
authority clauses added to Wrongful Termination, cross-referencing
rather than re-quoting the full citation set — was the right structure
instead of a duplicative third document.

## What this gap-fix covers

Two new authority clauses inserted into `wrongful_termination_public_policy_info_sheet`'s
`clauseOrder`, citing Gov. Code § 12954(a)(1)(A)-(B), (a)(2), (d), (e),
(f):

- **`wrongfulterm_12954_cannabis_discrimination`** (§ 12954(a)(1)(A)-(B))
  — the independent FEHA statute making it unlawful to terminate based
  on off-duty cannabis use or a nonpsychoactive-metabolite test result,
  and why the metabolite point matters (metabolites persist long after
  impairment ends).
- **`wrongfulterm_12954_exceptions`** (§ 12954(a)(2), (d), (e), (f)) —
  the limits bearing on whether a termination falls within the
  protection: the construction-trades carve-out, the on-the-job/
  drug-free-workplace carve-out, the no-preemption-of-testing-
  requirements carve-out, and the federal-security-clearance carve-out.

## Genuine corrections and findings

- **A genuine correction to the task's own research brief**: the brief
  named Labor Code § 432.8 as the statute restricting employer inquiry
  into off-duty cannabis use. The agent independently fetched § 432.8
  and confirmed it is instead a 1976 statute (unamended since)
  extending § 432.7's limitations to old marijuana-conviction records
  more than two years old — a background-check topic already
  independently covered by the corpus's existing `arrestrecord_marijuana`
  clause. The actual applicant-inquiry restriction from AB 2188/SB 700
  is Gov. Code § 12954(b) itself, already covered in the existing
  Hiring document. § 432.8 was not used anywhere in the new clauses.
- **A flagged finding for future work**: § 12954(c) — the
  criminal-history/§ 12952 (Fair Chance Act) interaction — is present
  in the statute but not quoted anywhere in the corpus. It is a
  hiring/background-check nuance, not termination-specific, so it was
  correctly left out of this termination-scoped addition but disclosed
  as a genuine gap for the existing Hiring document.
- Correctly declined to describe the Civil Rights Department's
  administrative complaint and right-to-sue process that would apply to
  a direct § 12954 claim (as distinct from the § 1102.5/§ 98.6 theories
  already in this document) — disclosed as an unaddressed procedural
  gap rather than asserting unverified specifics. (This gap is being
  addressed by a separate wave 85 document on the CRD/FEHA complaint
  process generally.)

## Honest gap(s) disclosed

The Civil Rights Department's administrative process for a direct
§ 12954 claim is not described here. § 12954(c)'s criminal-history
interaction with the Fair Chance Act is not covered. This document
does not determine that any specific termination was, or was not,
based on off-duty cannabis use or a metabolite test result, or that any
specific employee, position, or employer falls within one of the
stated exemptions.

## Method

Fetched Cal. Gov. Code § 12954 from `leginfo.legislature.ca.gov`,
fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical after whitespace normalization. All
6 citation quotes across the 2 authority clauses programmatically
confirmed as exact contiguous substrings (no ellipsis-joined quotes).
Independently re-verified during integration review via a
twenty-ninth fetch (a distinct curl User-Agent string,
"Groundtruth-29thVerify-Cannabis/1.0") — all 6 quotes confirmed clean,
and independently re-confirmed the two pre-existing Hiring-document
cannabis clauses' quotes remain byte-accurate.

## Verification

- Statutory section fetched twice independently by the research agent
  with distinct User-Agent strings, plus a twenty-ninth independent
  fetch during integration review; all 6 quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses that its citations are subdivisions of the same statutory
  section; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 6
  populated with proper case/citation identifier strings.
- No fields used or needed — both clauses are generic statutory
  statements with no `{{placeholder}}` fields, matching the pattern of
  their sibling clauses in the same document.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- Gap-fix: added `wrongfulterm_12954_cannabis_discrimination` and
  `wrongfulterm_12954_exceptions` (2 authority clauses) to the existing
  `wrongful_termination_public_policy_info_sheet` document's
  `clauseOrder` (Ending employment category). No new fields, no new
  document.
- Corpus: 2,922 → 2,924 clauses; 385 documents (unchanged document
  count). Second addition of wave 85.
