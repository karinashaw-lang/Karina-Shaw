# Ending employment, new document: Unemployment Insurance Benefits — Claimant Information Sheet

## Why this document

The existing Employer's Response to Unemployment Insurance Claim
document covers the employer's response/appeal side. This document
covers a genuinely distinct statutory angle: eligibility, disqualification,
benefit calculation, and appeal rights from the claimant's own
perspective.

## What this document covers

8 clauses: 2 drafting (purpose, acknowledgment) and 6 authority
clauses:

- **`uiclaimant_eligibility_conditions`** (Unemp. Ins. Code § 1253) —
  the recurring, week-by-week eligibility conditions.
- **`uiclaimant_waiting_period`** (Unemp. Ins. Code § 1254) — the
  one-week waiting period, correcting an assumed section number.
- **`uiclaimant_disqualification_standard`** (Unemp. Ins. Code § 1256)
  — the voluntary-quit/misconduct disqualification standard, the
  claimant-favoring rebuttable presumption, and the specific
  statutory good-cause categories.
- **`uiclaimant_weekly_benefit_amount`** (Unemp. Ins. Code § 1280(c))
  — the benefit-amount formula and its $450/week statutory maximum,
  confirmed as a fixed dollar figure rather than periodically adjusted.
- **`uiclaimant_determination_and_appeal`** (Unemp. Ins. Code
  § 1328(a); § 1334(a)) — the EDD's determination and the claimant's
  two-tier appeal structure.
- **`uiclaimant_false_statement_penalty`** (Unemp. Ins. Code § 2101(a);
  § 2122) — the false-statement/nondisclosure prohibition and its
  actual criminal penalty.

## Genuine corrections caught during research

- The task brief assumed § 1030 or § 1032 sets the waiting period.
  Direct review shows neither does — those sections (already used by
  this corpus's employer-side document) govern the employer's 10-day
  fact-submission window and reserve-account charging, respectively.
  The real source is § 1253(d) together with § 1254.
- The task brief asked whether the $450 maximum weekly benefit is a
  fixed or periodically-adjusted figure, cautioning not to assume.
  Direct review confirms it is a fixed statutory dollar figure written
  directly into the text, unchanged since a 2005 amendment — roughly
  two decades as of this document's research date, notwithstanding
  intervening inflation.
- Confirmed § 1253(e)'s work-search duty is narrower than a generic
  "actively seeking work" standard: it requires search "in accordance
  with specific and reasonable instructions of a public employment
  office."
- The task brief asked about a freestanding earnings-reporting duty.
  Direct review found no standalone section imposing one — unreported
  earnings instead fall under § 2101(a)'s "knowingly fail to disclose
  a material fact" language.
- Correctly distinguished this document's `claimFiledDate` field from
  the existing employer document's `claimDate` field (date EDD mailed
  its notice) — a genuinely different fact, not overloaded.

## Honest handling of overlap and a rate-limited case-law search

- `uiclaimant_disqualification_standard` explicitly discloses that it
  cites the same statutory section (§ 1256) already used by the
  existing employer-side document's `uiresponse_disqualification_standard`
  clause, presenting the identical standard from the claimant's
  perspective rather than as independent verification.
- CourtListener was rate-limited before any case law construing "good
  cause" or "misconduct" could be verified — no case citation is
  included; the document relies on statutory text alone and discloses
  this honestly.

## Method

Fetched Unemp. Ins. Code §§ 1253, 1254, 1256, 1280, 1328, 1334, 2101,
and 2122 directly from `leginfo.legislature.ca.gov`, each verified
against a second, independent fetch with a distinct User-Agent —
confirmed byte-identical. All quotes programmatically confirmed as
exact substrings of the verified text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — the delivering agent
  found and fixed 4 leaks (`{{employeeName}}` embedded in `gap`
  narrative text) during its own self-check before delivery; my
  independent re-check on integration confirmed clean.
- Checked source-independence disclosure logic across all 6 authority
  clauses — every clause correctly distinguishes same-section citations
  from genuinely separate sections; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Acknowledgment") confirmed as the corpus's established,
  accepted generic drafting-title-reuse pattern.
- Field names (`employeeName`, `companyName`, `separationDate`)
  confirmed to match the existing Employer's Response document's
  fields exactly. New field: `claimFiledDate`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Unemployment Insurance Benefits — Claimant Information
  Sheet (`ui_claimant_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Ending employment category. New field:
  `claimFiledDate`.
- Corpus: 1,034 → 1,042 clauses; 134 → 135 documents.
