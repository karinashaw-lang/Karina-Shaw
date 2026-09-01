# Family Law, fifth document: Child Support Agreement

## Why this document

Completing this wave of the Family Law build-out. A Child Support
Agreement documents a support arrangement between separating,
divorcing, or never-married parents. Sourced from California Family
Code Division 9, Part 2 (the Statewide Uniform Guideline for Determining
Child Support), §4050 et seq.

## What this document covers

12 clauses: 3 drafting (declaration with support amount, add-on expense
allocation, and signature block) and 9 authority clauses:

- **`childsupport_guideline_presumption`** (§ 4057(a)-(b)) — the core
  framing fact: the guideline amount is presumed correct, and that
  presumption is rebuttable, affecting the burden of proof.
- **`childsupport_statewide_principles`** (§ 4053) — the real, full
  12-item enumerated list of policy principles behind the guideline.
- **`childsupport_guideline_formula`** (§ 4055(a)-(b)(1) + § 4055(b)(3))
  — the actual codified algebraic formula (CS = K[HN - (H%)(TN)]) with
  every variable defined and the full K-factor income-band schedule
  quoted precisely, not paraphrased.
- **`childsupport_lowincome_adjustment`** (§ 4055(b)(7)) — the specific,
  codified low-income adjustment mechanism and its rebuttable
  presumption.
- **`childsupport_departure_factors`** (§ 4057(b)(1)-(6)) — the real,
  enumerated, exhaustive-by-statute list of grounds for departing from
  the guideline amount.
- **`childsupport_stipulation_conditions`** (§ 4065(a)) — the exact
  declarations required before a court can approve a stipulated
  below-guideline amount.
- **`childsupport_addon_expenses`** (§ 4062(a)-(b)) — the real
  mandatory-vs-discretionary distinction for add-on expenses (childcare
  and uninsured health care are mandatory; educational/special-needs and
  visitation travel are discretionary).
- **`childsupport_duration`** (§ 3900 + § 3901(a)) — the actual duration
  rule: 18 plus full-time-high-school-student status, extending to 19 or
  12th-grade completion, with its documented-medical-condition
  exception.
- **`childsupport_earnings_assignment`** (§ 5230(a)-(b)) — the mandatory
  wage/earnings withholding mechanism that attaches to a court support
  order.

## Method

Fetched all candidate California Family Code sections directly from
`leginfo.legislature.ca.gov`. Every quote re-verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical
across both fetches for all sections used, including confirming that the
current § 4055/§ 4057 text reflects the version made operative September
1, 2024 (a real, in-force low-income-adjustment departure ground that
didn't exist in older formula language some secondary sources still
quote).

The guideline formula clause is deliberately reproduced as the statute's
actual algebraic text rather than a simplified paraphrase — a formula is
exactly the kind of content where paraphrasing risks silently changing
meaning, so this project's standard practice of quoting rather than
summarizing mattered more here than usual.

## Verification

- Every candidate section fetched directly via `curl`, then re-verified
  on a second, independent fetch with a distinct User-Agent.
- Placeholder cleanup applied during integration: the initial research
  draft used a single reused placeholder name across four distinct
  add-on expense categories, which would have caused the same typed
  value to appear in all four spots; corrected to four independently
  fillable field names (`childcareAllocation`, `healthcareAllocation`,
  `educationAllocation`, `travelAllocation`) before shipping.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked for duplicate clause IDs against the full corpus (none) and
  duplicate titles within this document's `clauseOrder` (none).
- Full-corpus regression run headless against all 50 documents.

## Net changes

- New document: Child Support Agreement (`child_support_agreement`), 12
  clauses (9 authority + 3 drafting), in the Family Law category.
- Corpus: 304 → 328 clauses (combined with the Parenting Plan, shipped
  in the same wave); 48 → 50 documents.

## Family Law category summary

With this wave, Family Law now has five documents: Premarital
Agreement, Marital Settlement Agreement, Postnuptial Agreement,
Parenting Plan, and Child Support Agreement — covering the full
lifecycle from before marriage through divorce, plus the two ongoing
child-related agreements that apply regardless of whether the parents
were ever married. This is now the densest sector in the corpus after
Estate Planning.
