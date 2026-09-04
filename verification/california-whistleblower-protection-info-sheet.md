# During employment, new document: California General Whistleblower Protection (Labor Code Section 1102.5) — Information Sheet

## Why this document

First document of wave 84, chosen via a scoping agent's category-gap
survey of the four thinnest/target categories (Hiring, During
employment, Confidentiality & IP, Ending employment). Read the
existing `whistleblower_policy` document in full (all 7 clauses) and
confirmed it is exclusively about federal securities-fraud
whistleblower law — Sarbanes-Oxley (18 U.S.C. § 1514A) and Dodd-Frank
(15 U.S.C. § 78u-6), plus *Lawson v. FMR LLC* and *Digital Realty
Trust v. Somers* — with zero mention of Labor Code § 1102.5. Read the
`wrongful_termination_public_policy_info_sheet` document (which
already quotes § 1102.5(a)-(e), (f)(1), (f)(2), (j)) and confirmed it
frames that statute only as background for an already-ended
employment relationship's public-policy tort claim, alongside
§ 98.6 — not as a freestanding explanation of the statute's own
mechanics. Read the § 132a retaliation document's description and
confirmed its one mention of § 1102.5 is only a contrast point against
the WCAB-petition procedure. Confirmed a real, non-duplicative gap: no
document explains § 1102.5 in its own right, for a reader who is still
employed.

## What this document covers

7 clauses: 2 drafting (internal-reporting-channel note, acknowledgment)
and 5 authority clauses, citing Cal. Labor Code § 1102.5(a)-(j) in
full:

- **`labor1102_protected_disclosure_scope`** (§ 1102.5(a), (e)) — what
  counts as a protected disclosure (to a government/law-enforcement
  agency, a person with authority over the employee, or another
  employee with investigative authority) and the reasonable-cause-to-
  believe standard, regardless of the employee's job duties; the rule
  that a government employee's report to their own employer counts as
  a government-agency disclosure.
- **`labor1102_antiretaliation_rule`** (§ 1102.5(b)) — the
  anti-retaliation prohibition itself, and **the central finding**:
  no 90-day rebuttable presumption of retaliation exists within
  § 1102.5's own text.
- **`labor1102_refusal_and_prior_employer`** (§ 1102.5(c), (d)) —
  protection for refusing to participate in unlawful activity, and for
  having exercised these rights at a former employer.
- **`labor1102_exceptions_and_coverage`** (§ 1102.5(g), (h), (i)) — the
  lawyer-client/physician-patient-privilege and trade-secret
  exceptions; family-member retaliation protection; and the broad
  statutory "employer" definition reaching certain client employers and
  workplace-safety-defined employers.
- **`labor1102_civil_penalty_and_fees`** (§ 1102.5(f)(1), (f)(2), (j))
  — the $10,000-per-employee-per-violation civil penalty and the
  factors the Labor Commissioner considers in assessing it, plus the
  court's authority to award reasonable attorney's fees.

## Genuine corrections and findings

- **The central finding**: the research brief's premise — that SB 497
  (2023) added a 90-day rebuttable presumption of retaliation directly
  into § 1102.5 — is incorrect. The agent fetched the current codified
  text of § 1102.5 directly and confirmed no such presumption language
  exists in this section. It then independently cross-checked this
  against the SB 497 bill text and Legislative Counsel's Digest, which
  confirm the presumption was instead enacted into the companion
  statute Labor Code § 98.6 (and § 1197.5) — SB 497's amendment to
  § 1102.5 itself changed only the civil-penalty structure (from
  corporate-only to per-employee liability), now reflected at
  (f)(1)/(f)(2). Per the verification discipline, no presumption
  clause or citation was fabricated; the `gap` field of
  `labor1102_antiretaliation_rule` discloses this precisely and
  cross-references the corpus's existing Wrongful Termination document
  where the § 98.6 presumption is actually addressed.
- Correctly declined to independently verify the text of Labor Code
  §§ 2810.3(a)(1) and 6400(b), cross-referenced by § 1102.5(i)'s
  "employer" definition — quoted only § 1102.5(i)'s own reference to
  them, disclosed as unverified elaboration rather than treated as
  independently confirmed.
- Honestly disclosed that no independent case-law citation was found
  or included for how courts apply the "reasonable cause to believe"
  standard to particular facts — the clause states only the statutory
  standard itself.

## Honest gap(s) disclosed

The § 98.6 90-day retaliation presumption (SB 497) is not covered
here — it is addressed in this corpus's separate Wrongful Termination
in Violation of Public Policy information sheet, cross-referenced by
name. The underlying text of Labor Code §§ 2810.3(a)(1) and 6400(b)
(cross-referenced by § 1102.5(i)) is not independently fetched or
verified. This document does not determine whether a specific
disclosure, refusal, or family relationship in fact falls within the
statute's protection in a particular case.

## Method

Fetched Cal. Labor Code § 1102.5 from `leginfo.legislature.ca.gov`,
fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical after whitespace normalization (one
dynamic JSF `ViewState` session-token element in the page footer,
unrelated to statutory text, was excluded from the comparison). All 11
citation quotes across the 5 authority clauses programmatically
confirmed as exact contiguous substrings (no ellipsis-joined quotes).
Independently re-verified during integration review via a
twenty-fourth fetch (a distinct curl User-Agent string,
"Groundtruth-24thVerify-Whistleblower/1.0") — all 11 quotes confirmed
clean, and independently confirmed the fetched text contains no
"90-day" or "presumption" language, corroborating the agent's central
finding.

## Verification

- Statutory section fetched twice independently by the research agent
  with distinct User-Agent strings, plus a twenty-fourth independent
  fetch during integration review; all quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same
  statutory section; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  authority-clause title ("Civil Penalty and Attorney's Fees Under
  This Statute") matches the existing `wrongfulterm_1102_5_penalty`
  clause's title, since both quote the same statutory subdivisions —
  confirmed as an intentional, disclosed restatement for a different
  document context (still-employed reader vs. already-terminated
  reader), not a duplication bug; one drafting-clause title
  ("Acknowledgment") matches the established boilerplate-title reuse
  pattern.
- Checked every citation's `case` field for emptiness — all 11
  populated with proper case/citation identifier strings.
- No new fields required — all four fields (`companyName`,
  `employeeName`, `dateSigned`, `cityState`) reused from the existing
  corpus (187, 128, 158, and 137 prior documents respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: California General Whistleblower Protection (Labor
  Code Section 1102.5) — Information Sheet
  (`california_whistleblower_protection_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the During employment category. No new
  fields.
- Corpus: 2,893 → 2,900 clauses; 381 → 382 documents. First addition of
  wave 84.
