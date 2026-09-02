# Ending employment, new document: 401(k)/Retirement Plan Distribution Notice at Termination

## Why this document

None of the existing termination documents (COBRA, Cal-COBRA, vacation
payout, commission payout, waiting-time penalty) address retirement
plan distributions. This document covers a genuinely distinct federal
area: what happens to an employee's 401(k) or similar employer-
sponsored retirement plan account upon termination.

## What this document covers

8 clauses: 2 drafting (declaration/scope, statement/signature) and 6
authority clauses:

- **`retirement401k_rollover_right`** (26 U.S.C. § 402(c)(1), (c)(3)(A))
  — the tax-free rollover exclusion and the 60-day time limit.
- **`retirement401k_eligible_rollover_distribution_defined`** (26
  U.S.C. § 402(c)(4)) — the definition and its three carve-outs
  (periodic payments, RMDs, hardship distributions).
- **`retirement401k_direct_rollover_right`** (26 U.S.C. § 401(a)(31)
  (A)) — the qualified-trust requirement to offer a direct
  trustee-to-trustee rollover.
- **`retirement401k_mandatory_withholding`** (26 U.S.C. § 3405(c)(1),
  (c)(2)) — the mandatory 20% withholding rule and its direct-rollover
  exception.
- **`retirement401k_notice_requirement`** (26 U.S.C. § 402(f)(1)) — the
  plan administrator's required written explanation (the "402(f)
  notice"), correcting a framing assumption about where it's codified.
- **`retirement401k_vesting`** (29 U.S.C. § 1053(a)(1), (a)(2)(B);
  § 1002(34)) — employee contributions always 100% vested; employer
  contributions vest on a schedule, capped at a 3-year cliff or
  2-through-6-year graded schedule for a 401(k)-type plan.

## Genuine corrections caught during research

- The task brief framed the 402(f) notice requirement as living in
  "29 U.S.C. § 1132 or Treasury/IRS regulations implementing § 402(f)."
  Direct review shows it's a direct statutory requirement in the
  Internal Revenue Code itself, at 26 U.S.C. § 402(f)(1) — not merely
  a regulation, and unrelated to 29 U.S.C. § 1132 (ERISA's
  civil-enforcement section), which the clause explicitly distinguishes.
- Confirmed the task brief's assumed vesting schedules exactly (3-year
  cliff, or 2-through-6-year graded) for an individual account
  (defined contribution) plan like a 401(k) — while also clarifying
  that § 1053(a)(2) actually contains two different schedules
  depending on plan type: a longer schedule (5-year cliff, or
  3-through-7-year graded) applies to defined benefit plans instead,
  disclosed but not restated since it doesn't govern a 401(k).
- All other core assumptions (the eligible-rollover-distribution
  definition and its three carve-outs, the direct-rollover
  qualified-trust requirement, the exact 20% withholding rate) were
  confirmed accurate against the current statutory text.

## Honest gap disclosed

No case law was pursued — the document's substance is entirely
statutory and didn't require case law to state the facts accurately;
this is disclosed implicitly by the absence of any case citation
rather than a fabricated one.

## Method

Fetched 26 U.S.C. §§ 402, 401, 3405, and 29 U.S.C. §§ 1053, 1002
directly from `law.cornell.edu/uscode`, each verified against a
second, independent fetch with a distinct User-Agent — MD5 checksums
confirmed byte-identical HTML both times. All 10 citations
programmatically confirmed as exact substrings of the verified source
text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — the agent caught and
  fixed six real leaks in `gap` fields during its own drafting process
  before delivery; independently re-confirmed clean on integration.
- Checked source-independence disclosure logic across all 6 authority
  clauses — the three same-section clauses
  (`retirement401k_rollover_right`, `retirement401k_mandatory_withholding`,
  `retirement401k_vesting`) each carry an explicit "disclosed together
  here rather than presented as independent sources" sentence —
  correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`employeeName`, `companyName`, `terminationDate`,
  `planName`) confirmed to match existing termination-document and
  COBRA-document conventions exactly. New field: `vestedBalance`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: 401(k)/Retirement Plan Distribution Notice at
  Termination (`retirement_401k_distribution_notice`), 8 clauses (6
  authority + 2 drafting), in the Ending employment category. New
  field: `vestedBalance`.
- Corpus: 869 → 877 clauses; 115 → 116 documents.
