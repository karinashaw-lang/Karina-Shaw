# Ending employment, eighth document: Final Wage Payment / Waiting-Time Penalty Demand Letter

## Why this document

Every existing "Ending employment" document is employer-facing. This
document is written from the employee's side — a demand for unpaid
final wages and California's waiting-time penalty. Confirmed
non-duplicative against the existing Termination/Separation Letter's
`term_final_pay` clause (a brief two-state illustrative survey, not
the actual penalty mechanics) and against PAGA Pre-Suit Notice Letter
(a wholly separate pre-suit mechanism).

## What this document covers

7 clauses: 2 drafting (the demand letter body, closing/signature) and
5 authority clauses:

- **`waitingtime_final_wages_due`** (Lab. Code §§ 201(a), 202(a)) —
  the discharge-vs-quit final-wage deadlines.
- **`waitingtime_penalty_mechanics`** (Lab. Code § 203(a)) — how the
  waiting-time penalty accrues at the daily wage rate and its 30-day
  cap.
- **`waitingtime_willful_standard`** (*Barnhill v. Robert Saunders &
  Co.*, 125 Cal. App. 3d 1 (1981)) — that "willful" means only an
  intentional failure to do a legally required act, and that a
  genuine good-faith legal dispute can defeat willfulness.
- **`waitingtime_statute_of_limitations`** (Lab. Code § 203(b)) — that
  the penalty claim's filing deadline is tied to the underlying wage
  claim's own limitations period, correcting an assumption that § 203
  states its own fixed number of years.
- **`waitingtime_accrued_pto_reference`** (Lab. Code § 227.3, by
  cross-reference) — connects the already-covered accrued-PTO payout
  rule to the waiting-time mechanics without re-deriving it.

## Honest gaps disclosed

- `waitingtime_willful_standard`'s two quotes both come from the same
  Court of Appeal decision; a CourtListener rate limit prevented
  independently verifying a second case on this point — disclosed
  rather than papered over.
- The same rate limit prevented verifying case law interpreting
  § 203(b)'s cross-reference to the underlying wage claim's
  limitations period.
- *Barnhill*'s good-faith defense involved a disputed legal right
  (setoff), not a disputed dollar amount — the clause is explicit that
  whether a good-faith factual dispute over the amount owed gets the
  same treatment is a related but distinct, unresolved question.

## Defects caught and fixed during integration

`waitingtime_penalty_mechanics` and `waitingtime_accrued_pto_reference`
each cite a single statutory section but initially lacked the standard
explicit single-source disclosure sentence — added during integration.

## Method

Fetched Labor Code §§ 201, 202, 203, 227.3 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed
byte-identical. *Barnhill v. Robert Saunders & Co.* verified via
CourtListener against full opinion text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 5 authority
  clauses — corrected on two, confirmed correct on the rest.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Final Wage Payment / Waiting-Time Penalty Demand
  Letter (`waiting_time_penalty_demand`), 7 clauses (5 authority + 2
  drafting), in the "Ending employment" category. New fields:
  `separationType`, `unpaidWagesAmount`, `dailyWageRate`
  (`employeeName`, `companyName`, `terminationDate` reused from
  existing conventions).
- Corpus: 619 → 626 clauses; 82 → 83 documents.
