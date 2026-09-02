# Ending employment, new document: Wage Claim with the California Labor Commissioner (Berman Hearing) — Information Sheet

## Why this document

The existing Final Wage Payment / Waiting-Time Penalty Demand Letter
is a private demand letter, and the Wrongful Termination information
sheet's Labor Code § 98.6 clause covers retaliation *for* filing a
wage claim. Neither touches the DLSE filing/hearing/appeal mechanics
(Labor Code §§ 98, 98.1, 98.2) this document covers — the actual
administrative process of filing an unpaid-wage claim, commonly called
a "Berman hearing."

## What this document covers

9 clauses: 2 drafting (declaration/background, closing/signature) and
7 authority clauses:

- **`dlsewageclaim_98_intake_and_hearing`** (Labor Code § 98(a)) — the
  Labor Commissioner's investigation and hearing authority, the 30-day
  intake determination, and the 90-day hearing timeline.
- **`dlsewageclaim_98_notice_and_answer`** (Labor Code § 98(b), (c)) —
  the notice and 10-day answer procedure.
- **`dlsewageclaim_98_1_order_decision_award`** (Labor Code
  § 98.1(a)-(c)) — the order, decision, or award (ODA), its contents,
  and interest accrual.
- **`dlsewageclaim_98_2_appeal_deadline_and_bond`** (Labor Code
  § 98.2(a), (b)) — the 10-day appeal deadline, trial de novo
  standard, and the employer-specific bond requirement.
- **`dlsewageclaim_98_2_fee_shifting`** (Labor Code § 98.2(c)) — the
  fee-shifting rule for an unsuccessful appeal, correcting an assumed
  asymmetry.
- **`dlsewageclaim_98_2_finality_and_judgment`** (Labor Code § 98.2(d),
  (e)) — finality and entry of judgment when no appeal is filed.
- **`dlsewageclaim_wage_claim_limitations_periods`** (Code Civ. Proc.
  §§ 337(a), 338(a), 339(1)) — the general civil limitations periods
  that may apply, honestly disclosed as not statute-specific to DLSE
  claims.

## Genuine corrections caught during research

- The task brief described § 98 as offering "the option to instead
  prosecute a civil action for collection." Direct review shows § 98
  actually describes a three-way intake determination (hearing,
  referral under a separate § 98.3 procedure, or no further action) —
  not an "instead prosecute a civil action" framing, which doesn't
  appear in the statute's text.
- The task brief assumed § 98.2(c)'s fee-shifting is asymmetric
  (employer-focused). Direct review shows the text is symmetric on its
  face — it conditions the fee award on whichever party appeals and
  loses, not on the employer specifically; only the "successful"
  threshold definition ("an amount greater than zero") is specific to
  the employee as appellee.
- Confirmed the § 98.2(b) bond/undertaking requirement is employer-
  only, and the 10-day appeal deadline and trial de novo standard,
  exactly as assumed.
- The task brief asked whether a DLSE-specific limitations statute
  exists. Direct review confirms none does — §§ 337, 338(a), 339(1)
  are general civil-procedure statutes that never mention wages,
  employment, or the Labor Commissioner; which one applies to a given
  wage claim is a case-law/agency-practice categorization question the
  document does not resolve, a materially different situation from
  this corpus's existing `waitingtime_statute_of_limitations` clause,
  where the statute itself expressly cross-references the wage
  limitations period.
- Confirmed the "informal setting" statutory language exists (§ 98(a))
  but disclosed that a broader "no attorney needed" characterization is
  Labor Commissioner practice guidance, not verified statutory text.
- Disclosed that "Berman hearing" is not itself statutory language.

## Honest gaps disclosed

- CourtListener was rate-limited for the entire research session
  (consistent with the existing `wrongfulterm_*` clauses' disclosure).
  No case law is cited on what "trial de novo" means procedurally on
  appeal, whether § 98.2(c)'s fee-shift is applied asymmetrically in
  practice despite its symmetric text, or which limitations period
  (§ 337/338/339) actually applies to which category of wage claim.
- The post-judgment collection tools separately authorized by
  § 98.2 (judgment-debtor disclosure forms, real-property liens, stays
  of execution) are noted as reviewed but not detailed.

## Method

Fetched Labor Code §§ 98, 98.1, 98.2 and Code Civ. Proc. §§ 337, 338,
339 directly from `leginfo.legislature.ca.gov`, each verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-identical. All 16 quotes programmatically confirmed as exact
substrings of the verified text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic across all 7 authority
  clauses — every clause combining subsections of one statutory
  section carries an explicit disclosure, and the limitations-periods
  clause correctly notes its three citations are separate sections,
  not one; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`employeeName`, `companyName`, `terminationDate`,
  `unpaidWagesAmount`, `dateSigned`, `cityState`) confirmed to match
  existing Ending employment document conventions exactly. New field:
  `wageClaimBasis`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Wage Claim with the California Labor Commissioner
  (Berman Hearing) — Information Sheet (`dlse_wage_claim_info_sheet`),
  9 clauses (7 authority + 2 drafting), in the Ending employment
  category. New field: `wageClaimBasis`.
- Corpus: 1,000 → 1,009 clauses; 130 → 131 documents.
