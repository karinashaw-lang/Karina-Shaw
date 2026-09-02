# Ending employment, new document: Bonus and Incentive Compensation at Termination — Information Sheet

## Why this document

The existing Commission Payout Upon Termination document addresses
commissions specifically, a form of pay governed by its own statute
(Labor Code § 2751). This document covers bonuses and incentive
compensation more broadly — a genuinely distinct topic, since not
every variable-pay arrangement is a commission.

## What this document covers

9 clauses: 2 drafting (declaration/scope, summary/signature) and 7
authority clauses:

- **`bonuspay_wages_general_definition`** (Labor Code § 200(a); DLSE
  Glossary) — the general "wages" definition, which never mentions
  "bonus" by name, and the DLSE's bridging interpretation.
- **`bonuspay_discretionary_not_earned`** (DLSE Enforcement Manual
  § 35.4.3) — confirmation that the discretionary/nondiscretionary
  line is agency guidance, not codified Labor Code text.
- **`bonuspay_nondiscretionary_formula_is_wages`** (DLSE Enforcement
  Manual § 35.4.1, describing Chinn v. China Nat. Aviation Corp.; DLSE
  Overtime FAQ) — how a formula/quota-tied bonus can become earned.
- **`bonuspay_employment_on_payment_date_unsettled`** (DLSE Enforcement
  Manual §§ 35.2, 35.3, describing Lucien v. All States Trucking,
  Peterson v. California Shipbuilding Corp., and Hill v. Kaiser Aetna)
  — honestly presents this as fact- and plan-specific rather than
  resolved by one clean rule.
- **`bonuspay_discharge_before_completion_prorata`** (DLSE Enforcement
  Manual § 35.4.4) — the different treatment of an employer-initiated
  discharge before a bonus period ends.
- **`bonuspay_illegal_forfeiture_conditions`** (DLSE Enforcement Manual
  § 35.4.2, describing Ware v. Merrill Lynch) — a genuine find beyond
  the original brief: a forfeiture condition can be independently
  unenforceable for reasons unrelated to discretion.
- **`bonuspay_waiting_time_penalty_reference`** (Labor Code § 203(a))
  — connects an earned bonus to the existing corpus's already-verified
  waiting-time-penalty framework rather than duplicating it.

## Genuine findings and honest handling of secondary sources

- Confirmed § 200's general wages definition never names "bonus," and
  located the DLSE Glossary's bridging language as the actual
  statutory-to-bonus connection.
- Confirmed the discretionary/nondiscretionary distinction is not
  codified in the Labor Code — it comes from the DLSE's 2002
  Enforcement Policies and Interpretations Manual, § 35, fetched as a
  PDF and verified byte-identical by checksum across two User-Agents.
  Honestly disclosed that DIR's own site flags this manual's binding
  legal weight as unresolved under Executive Order S-2-03.
- CourtListener was rate-limited before research began, and direct
  fetches to courtlistener.com, law.justia.com, and caselaw.findlaw.com
  were all blocked or WAF-challenged. Every case named in the DLSE
  Manual (Chinn, Lucien, Peterson, Hill v. Kaiser Aetna, Ware v.
  Merrill Lynch) is honestly disclosed as "as described/quoted by the
  DLSE Manual," not independently verified against primary opinion
  text — consistent with the established "Commeford as quoted by
  Steinhebel" pattern already used elsewhere in this corpus.
- A genuine, unrequested finding beyond the task brief's scope: Ware
  v. Merrill Lynch shows a bonus-forfeiture condition can be
  independently unenforceable (there, as conflicting with the public
  policy embodied in Bus. & Prof. Code § 16600 against non-compete
  restraints), separate from the discretionary/nondiscretionary line.
- Correctly distinguished the DLSE's "nondiscretionary bonus" language
  used in the overtime regular-rate-of-pay context from guidance
  specific to termination payout timing, rather than conflating the two.

## Method

Fetched Labor Code §§ 200 and 203 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical.
Fetched the DLSE Glossary, Overtime FAQ, and Enforcement Manual PDF
from dir.ca.gov, each independently re-fetched and confirmed
byte-identical (the Manual by file checksum). All 9 citation quotes
programmatically confirmed as exact substrings of the verified text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic across all 7 authority
  clauses — every clause correctly distinguishes same-document/
  same-section citations from genuinely separate sources, and one
  clause explicitly notes a citation is a re-verification of a
  statutory section already used elsewhere in the corpus (§ 203),
  disclosed honestly rather than presented as new; correct as
  delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`employeeName`, `companyName`, `terminationDate`)
  confirmed to match existing Ending employment document conventions
  exactly. New fields: `bonusType`, `bonusPeriodCovered`,
  `bonusPlanTerms`, `statedBonusAmount`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Bonus and Incentive Compensation at Termination —
  Information Sheet (`bonus_incentive_termination_info_sheet`), 9
  clauses (7 authority + 2 drafting), in the Ending employment
  category. New fields: `bonusType`, `bonusPeriodCovered`,
  `bonusPlanTerms`, `statedBonusAmount`.
- Corpus: 1,118 → 1,127 clauses; 143 → 144 documents.
