# Family Law, new document: Section 2641 Reimbursement for Community Contributions to Education or Training — Information Sheet

## Why this document

Confirmed by grep that "2641" and "education or training" (in this
reimbursement sense) had zero substantive hits — the only "education
or training" hits were the § 4320 spousal-support factor already
covered in `msa_spousal_support_factors`, plus unrelated child-support
and employment clauses. Read the existing Section 2640 Reimbursement
document in full — confirmed § 2641 is a genuinely distinct mechanism:
§ 2640 reimburses a spouse's SEPARATE property contributions to the
ACQUISITION of COMMUNITY property; § 2641 reimburses the COMMUNITY for
its contributions to one party's EDUCATION OR TRAINING. First of wave
73's four documents (Business Formation + Family Law alternation).

## What this document covers

7 clauses: 2 drafting (declaration/purpose, signature block) and 5
authority clauses, citing Cal. Fam. Code § 2641(a)-(e):

- **`reimbursement2641_definitions`** (§ 2641(a)) — the statute's own
  definition of "community contributions to education or training,"
  applying regardless of California residency at the time of payment.
- **`reimbursement2641_core_right`** (§ 2641(b)(1)-(2)) — the core
  reimbursement right, WITH interest at the legal rate (a materially
  different formula than § 2640's no-interest, net-value-capped rule),
  and the rule assigning an education/training loan to the party
  rather than treating it as a community liability.
- **`reimbursement2641_tenyear_presumption`** (§ 2641(c), (c)(1)) —
  **the central finding**: the reduce-if-unjust standard and the
  ten-year rebuttable presumption, verified as a DUAL,
  opposite-direction presumption (contributions <10 years before
  filing presumed NOT to have substantially benefited the community;
  contributions >10 years before presumed TO HAVE) rather than a
  single directional rule.
- **`reimbursement2641_other_reduction_grounds`** (§ 2641(c)(2)-(3)) —
  the offsetting-education and reduced-need-for-support reduction
  grounds.
- **`reimbursement2641_exclusive_remedy_and_waiver`** (§ 2641(d)-(e))
  — the exclusive-remedy rule, its express carve-out preserving
  consideration of the reimbursement for § 4320 spousal support
  purposes, and the express-written-agreement override of the entire
  section.

## Genuine corrections and findings

- **The central finding**: confirmed the ten-year presumption runs in
  two opposite directions depending on contribution timing relative to
  filing, rather than assuming a single "presumed compensated after 10
  years" rule — verified from the statute's own text rather than
  general community-property doctrine.
- Confirmed § 2641's interest-bearing reimbursement formula is
  materially different from § 2640's no-interest, capped formula —
  explicitly distinguished rather than conflated.
- Confirmed the statute's own exclusive-remedy provision (§ 2641(d))
  expressly preserves consideration of the reimbursement for spousal
  support purposes under § 4320 — not a bar on all further relevance.
- Confirmed the loan-assignment rule (an education/training loan
  incurred during marriage is assigned to the party, not treated as a
  community liability) as a precise, distinct sub-rule within § 2641(b).

## Honest gap disclosed

The statute doesn't numerically define "the legal rate," doesn't
define "substantially enhances earning capacity," "offset," "gainful
employment," or "quasi-community property" within § 2641 itself,
doesn't specify what evidence rebuts either directional ten-year
presumption, and doesn't specify the form required for the § 2641(e)
written-agreement override beyond "express" and "written." The §
2641(d) cross-reference to § 4320 spousal support is not restated
(addressed in the existing Marital Settlement Agreement document).

## Method

Fetched Cal. Fam. Code § 2641 from `leginfo.legislature.ca.gov` via
curl (through the sandboxed proxy), twice with distinct User-Agent
strings (Chrome/Windows, Safari/Mac), confirmed byte-identical after
whitespace normalization. All 8 citation quotes across the 5 authority
clauses programmatically confirmed as exact substrings of the
confirmed text. Independently re-verified during integration review by
fetching § 2641 a third time and spot-checking all 4 distinct quoted
passages as exact substrings — confirmed clean.

## Verification

- Statutory section fetched twice independently with distinct
  User-Agent strings by the research agent, plus a third independent
  fetch during integration review; all spot-checked quotes confirmed
  clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — all citations
  correctly disclosed as subsections of the single statutory section
  § 2641, not independent of one another; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`party1Name`, `party2Name`, `countyOfFiling`,
  `dateSigned`, `cityState`) independently confirmed to match the
  companion Section 2640 document's existing field definitions
  exactly, including labels. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: Section 2641 Reimbursement for Community Contributions
  to Education or Training — Information Sheet
  (`family_code_2641_reimbursement_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Family Law category. No new fields.
- Corpus: 2,603 → 2,610 clauses; 339 → 340 documents. First document
  of wave 73.
