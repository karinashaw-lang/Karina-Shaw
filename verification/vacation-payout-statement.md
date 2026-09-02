# Ending employment, new document: Vacation/PTO Payout at Termination — Statement of Accrued but Unused Vacation

## Why this document

The existing Termination/Separation Letter document's `term_accrued_pto`
clause and the Waiting-Time Penalty document's
`waitingtime_accrued_pto_reference` clause each note California's
vacation-payout rule only briefly, in general multistate terms. This
document deliberately goes deeper: it sets out the full California
statutory text, case law, and DLSE agency guidance directly, following
the same overlap-is-fine-when-justified pattern established by the
Lead-Based Paint Disclosure document. The document's own first clause
explicitly discloses this relationship rather than pretending the
overlap doesn't exist.

## What this document covers

7 clauses: 3 drafting (declaration/scope, policy-terms, statement/
signature) and 4 authority clauses:

- **`vacpayout_vests_as_earned`** (Lab. Code § 227.3; *Suastez v.
  Plastic Dress-Up Co.*, 31 Cal.3d 774 (1982)) — vacation vests pro
  rata as earned and cannot be forfeited.
- **`vacpayout_cap_vs_forfeiture`** (*Boothby v. Atlas Mechanical,
  Inc.*, 6 Cal.App.4th 1595 (1992); DLSE FAQ) — a lawful accrual cap
  vs. an unlawful "use-it-or-lose-it" forfeiture.
- **`vacpayout_payout_timing`** (DLSE FAQ) — payout rides on the same
  final-wage deadlines, with no separate deadline of its own.
- **`vacpayout_sick_leave_distinct`** (Lab. Code § 246(g)(1); DLSE FAQ)
  — sick leave, unlike vacation, need not be paid out at termination,
  except when combined into an undifferentiated PTO bank.

## Genuine corrections caught during research

- The task brief characterized both existing accrued-vacation clauses
  identically as lacking California-specific citation. Direct review
  shows `term_accrued_pto` already carries real, verified citations to
  § 227.3, *Suastez*, and *Boothby* — only `waitingtime_accrued_pto_reference`
  matches that description. The agent proceeded with the task as
  instructed but flagged this distinction rather than silently
  accepting the premise.
- Confirmed directly that § 227.3's own text addresses only forfeiture
  of already-vested time — it says nothing about accrual caps or
  "use-it-or-lose-it" policies; that distinction comes entirely from
  case law (*Boothby*) and DLSE guidance, not the statute itself.
- A strong additional primary source found and verified: the DLSE's
  own "Vacation" FAQ (dir.ca.gov/dlse/FAQ_Vacation.htm), fetched and
  byte-compared twice, which independently corroborates the
  cap-vs-forfeiture distinction, the payout-timing rule, and the
  sick-leave/combined-PTO distinction in the agency's own words.

## Honest gap disclosed

CourtListener was rate-limited for the entire session (125/day quota
exhausted), so *Suastez* and *Boothby* could not be independently
re-fetched. Rather than fabricate, the agent reused the exact quotes
already verified elsewhere in this project's own corpus — confirmed
programmatically byte-identical during this integration (see
Verification below) — and cross-corroborated both holdings against the
freshly-fetched DLSE FAQ, which independently cites the same two
cases for the same propositions. Disclosed explicitly in both clauses'
`gap` fields.

## Method

Fetched Lab. Code §§ 227.3 and 246 directly from
`leginfo.legislature.ca.gov`, and the DLSE's "Vacation" FAQ from
`dir.ca.gov`, each verified against a second, independent fetch with a
distinct User-Agent — confirmed byte-identical.

## Verification

- All statutory and DLSE-guidance citations fetched twice independently
  with distinct User-Agents; confirmed clean on integration.
- The two reused case-law quotes (*Suastez*, *Boothby*) were
  independently cross-checked during this integration against their
  existing, already-CourtListener-verified corpus entries
  (`term_accrued_pto`) — confirmed byte-identical, no drift.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 4 authority
  clauses — no same-section duplicate citations found; correct as
  delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`employeeName`, `companyName`, `terminationDate`)
  confirmed to match existing termination-document conventions
  exactly. New fields: `vacationPolicyTerms`, `accruedVacationBalance`,
  `finalRateOfPay`, `vacationPayoutAmount`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Vacation/PTO Payout at Termination — Statement of
  Accrued but Unused Vacation (`vacation_payout_statement`), 7 clauses
  (4 authority + 3 drafting), in the Ending employment category. New
  fields: `vacationPolicyTerms`, `accruedVacationBalance`,
  `finalRateOfPay`, `vacationPayoutAmount`.
- Corpus: 822 → 829 clauses; 109 → 110 documents.
