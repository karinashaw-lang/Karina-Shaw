# Ending employment, new document: Deferred Compensation and Equity Vesting at Termination — Information Sheet

## Why this document

The corpus already covers wage/PTO payout at termination (Vacation/PTO
Payout, Commission Payout, Bonus and Incentive Compensation at
Termination). Equity compensation — stock options, RSUs — raises a
genuinely different legal question at termination, not covered
elsewhere.

## What this document covers

6 clauses: 3 drafting (declaration/scope, equity-status declaration,
signature) and 3 authority clauses:

- **`equityterm_wages_definition_gap`** (Lab. Code § 200(a)) — the
  open statutory question of whether unvested equity compensation is
  a "wage."
- **`equityterm_vacation_distinguished`** (Lab. Code § 227.3;
  *Suastez v. Plastic Dress-Up Co.*, 31 Cal.3d 774 (1982)) — why the
  "vacation is wages" doctrine does not extend to equity.
- **`equityterm_iso_exercise_window`** (26 U.S.C. § 422(a)(2)) —
  federal tax law's post-termination exercise window for incentive
  stock options.

## Genuine corrections and findings

- Confirmed Lab. Code § 200(a)'s definition of "wages" (amounts for
  labor by time, task, piece, commission, or "other method of
  calculation") does not name equity compensation — a genuine
  statutory silence, not an oversight in research.
- Re-fetched Lab. Code § 227.3 fresh and confirmed its no-forfeiture
  text is textually limited to "paid vacations" — it does not, on its
  own text, extend to equity.
- **A correction to the original framing**: 26 U.S.C. § 422(a)(2)'s
  ISO employment-status condition is stated in the statute as "3
  months," not "90 days." The 90-day figure is a common industry
  approximation of that 3-month period, now flagged as such rather
  than asserted as the statutory text.
- A negative finding used as evidence for two separate gaps: the
  DLSE's own published glossary (fetched from dir.ca.gov and
  byte-compared across two fetches) has no entry for "equity," "stock
  option," "RSU," "restricted stock," or "vesting" — supporting both
  the "is equity a wage" gap and the "no disclosure statute found"
  gap.

## Honest gaps disclosed

- CourtListener returned HTTP 429 (daily quota exhausted) on the first
  search attempt this session, so no fresh case law was fetched.
  *Suastez v. Plastic Dress-Up Co.* is reused from the corpus's
  existing, already-verified `vacpayout_vests_as_earned` clause (a
  confirmed exact substring of that clause's quote), with the reuse
  disclosed rather than presented as an independent re-verification
  this session.
- *Schachter v. Citigroup, Inc.*, 47 Cal.4th 610 (2009) — the case
  most directly on point for whether unvested/contingent equity
  compensation is a "wage" — is named only as a widely-reported case
  in the `gap` field, with no citation entry and no quote, mirroring
  how this corpus's Trade Dress document handled *Wal-Mart Stores v.
  Samara Brothers* under the same rate-limit condition.
- No California statute mandating equity-status or exercise-deadline
  disclosure at termination was found — disclosed as an honest gap
  rather than invented or assumed to exist.

## Method

Fetched Lab. Code §§ 200 and 227.3 and the DLSE glossary directly from
`leginfo.legislature.ca.gov` and `dir.ca.gov`, and 26 U.S.C. § 422 from
`law.cornell.edu`, each verified against a second, independent fetch
with a distinct User-Agent — confirmed byte-identical. All citation
quotes programmatically confirmed as exact substrings of the fetched,
normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Signature") confirmed as the corpus's established,
  accepted generic drafting-title-reuse pattern.
- Field names (`companyName`, `employeeName`, `terminationDate`)
  independently confirmed to match existing corpus convention. New
  fields: `equityPlanName`, `equityType`, `equityVestingStatus`,
  `postTerminationExerciseWindow`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Deferred Compensation and Equity Vesting at
  Termination — Information Sheet
  (`deferred_compensation_equity_vesting_termination_info_sheet`), 6
  clauses (3 authority + 3 drafting), in the Ending employment
  category. New fields: `equityPlanName`, `equityType`,
  `equityVestingStatus`, `postTerminationExerciseWindow`.
- Corpus: 1,481 → 1,487 clauses; 186 → 187 documents.
