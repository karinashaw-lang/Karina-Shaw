# Hiring, new document: CalSavers Retirement Savings Program — Information Sheet

## Why this document

Second document of wave 90. Read all 51 existing "Hiring" category
documents' descriptions — confirmed none cover retirement-benefit
mandates. Grepped the corpus for "CalSavers," "100000," "Secure Choice,"
and "retirement savings" — zero hits. Confirmed a real, non-duplicative
gap.

## What this document covers

7 clauses: 2 drafting (declaration, acknowledgment) and 5 authority
clauses, citing Gov. Code §§ 100000(c), (d)(1), (d)(3), (e), (h), 100004(a),
100008, 100012(j), 100014(c), 100032(b)-(l), 100033(b)(1)-(2), 100034(a)-(b):

- **`calsavers_program_description`** (§§ 100004(a), 100008, 100000(h),
  100000(e)) — what CalSavers is: a state-administered trust offering one
  or more payroll-deduction IRA arrangements.
- **`calsavers_employer_coverage_and_deadlines`** (§ 100032(b)-(f), (h);
  § 100000(d)(1), (d)(3), (c)) — the phased-in employer-size registration
  deadlines, the "eligible employer"/"eligible employee" definitions, and
  the exemption for an employer with a qualifying plan.
- **`calsavers_not_employer_sponsored`** (§§ 100034(a)-(b), 100014(c),
  100012(j)) — that CalSavers is not employer-sponsored, employers bear no
  fiduciary or investment liability, and any employer contribution is
  optional, not required.
- **`calsavers_autoenrollment_optout`** (§ 100032(g)(1)-(2), (j), (k), (l))
  — automatic enrollment, the opt-out mechanism, the periodic
  re-enrollment window, the default 3% contribution rate, and automatic
  escalation with its 8% cap.
- **`calsavers_penalty_noncompliance`** (§ 100033(b)(1)-(2)) — the
  notice-of-penalty-application step and the $250/$500-per-employee penalty
  amounts.

## Genuine corrections and findings

- **A genuine finding, disclosed rather than silently resolved**: the
  currently codified § 100000(d)(3) cross-references the employer-plan
  exemption as being in "subdivision (g) of Section 100032," but the actual
  exemption is codified in § 100032(h) — subdivision (g) instead governs
  the auto-enrollment/opt-out mechanism. This looks like an uncorrected
  cross-reference from a prior renumbering. Both provisions are quoted
  exactly as codified, and the discrepancy is flagged in the relevant
  clause's `gap` field rather than "fixed" by silently assuming which
  subdivision letter is correct.
- Correctly declined to assert that CalSavers defaults enrollees into a
  Roth IRA specifically — the statute only defines "IRA" broadly (including
  IRC § 408A, the Roth section); the Roth-default fact is set by CalSavers'
  implementing regulations (10 CCR §§ 10000 et seq.), which were not fetched
  with the same two-fetch discipline used for the Government Code text, so
  this is disclosed as a limitation rather than asserted as
  Government-Code-sourced fact.
- Correctly disclosed that today's date is after the statute's final
  December 31, 2025 phase-in deadline, but took no position on whether the
  board has since exercised its discretion to extend any deadline, and did
  not independently research the historical date the program "opened for
  enrollment" that the earlier deadlines run from.
- Correctly declined to independently fetch Rev. & Tax. Code §§ 19287-19288
  (the Franchise Tax Board's notice/appeal mechanics cross-referenced by the
  penalty provision) — disclosed as a genuine research limitation.

## Honest gap(s) disclosed

The CalSavers board's governance structure (§ 100002) and investment powers
(§ 100004(b)-(f), § 100010), the Retirement Investments Clearinghouse and
vendor-registration system (§§ 100016-100030), the in-home-supportive-
services employer-of-record provision (§ 100046), § 100043's ERISA-
avoidance conditions, current federal IRA contribution-limit dollar caps,
the Rev. & Tax. Code penalty-notice/appeal mechanics, and the statute's
undefined "good cause" standard for penalty relief are named but not
covered. This document does not determine whether any specific employer is
an "eligible employer," whether any specific plan qualifies for the
statutory exemption, whether a specific employer's registration deadline
has passed, or whether any specific employee is an "eligible employee."

## Method

Fetched Gov. Code §§ 100000, 100004, 100008, 100012, 100014, 100032, 100033,
and 100034 from `leginfo.legislature.ca.gov`, each fetched twice by the
research agent with two distinct User-Agent strings, confirmed
byte-identical. All 24 citation quotes across the 5 authority clauses
programmatically confirmed as exact contiguous substrings (no
ellipsis-joined quotes). Independently re-verified during integration
review via a forty-ninth fetch (a distinct curl User-Agent string,
"Groundtruth-49thVerify-CalSavers/1.0") of all eight sections — all 24
quotes confirmed clean on direct substring match, no extraction artifacts
encountered.

## Verification

- All eight statutory sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a forty-ninth independent
  fetch during integration review; all 24 quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same statutory
  section versus genuinely independent sections; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  drafting-clause title ("Acknowledgment") duplicates existing corpus
  titles — consistent with this project's established pattern of generic,
  reused boilerplate drafting-clause titles; clause IDs remain unique.
- Checked every citation's `case` field for emptiness — all 24 populated
  with proper citation identifier strings.
- No new fields required — all three fields (`companyName`,
  `employeeCount`, `employeeName`) reused from the existing corpus.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: CalSavers Retirement Savings Program — Information Sheet
  (`calsavers_retirement_savings_program_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Hiring category. No new fields.
- Corpus: 3,065 → 3,072 clauses; 404 → 405 documents. Second addition of
  wave 90.
