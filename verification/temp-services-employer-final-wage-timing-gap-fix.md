# Ending employment, gap fix: Temporary services employer final-wage timing added to Final Paycheck Delivery Method

## Why this fix

A research agent assigned to research Labor Code § 201.3's temp-
services-employer final-wage timing rule confirmed, via full review of
the existing `wagetheft_template_and_temp_services` clause (in the
Wage Theft Prevention Act Notice to Employee document) and the
existing Final Paycheck Delivery Method and Location document, that
neither addresses this specific topic: the wage-theft clause covers
only the CONTENT of the hiring-notice for temp-services employees
(citing § 201.3 solely as the source of that term's definition), and
the delivery-method document covers only the general §§ 201/202/208/
213(d)/226(a) mechanics, not the temp-services-specific timing
variation. Genuine gap confirmed. Rather than ship a standalone
document for a topic this narrow, the agent recommended a gap-fix into
the existing Final Paycheck Delivery Method document.

## What changed

Added six new clauses to the existing
`final_paycheck_delivery_method_info_sheet` document, inserted into
its `clauseOrder` immediately after `finalpaydelivery_wage_statement_
still_applies` and before `finalpaydelivery_ack`:

- **`tempsvcfinal_declaration`** (drafting) — applicability note
  distinguishing § 201.3's specialized schedule from the document's
  general rules.
- **`tempsvcfinal_definition`** (§ 201.3(a)(1), (a)(2), (a)(4)) — the
  statute's own functional, multi-factor definition of "temporary
  services employer," its three statutory exclusions (bona fide
  nonprofit, farm labor contractor, garment manufacturing employer),
  and the "client"/"customer" definition.
- **`tempsvcfinal_general_weekly_rule`** (§ 201.3(b)(1)(A)-(B), (c))
  — **the central finding**: the general rule ties payment to
  calendar weeks (or workweeks, for a specific security-guard
  sub-category), NOT to when a client assignment ends — an assignment
  ending, standing alone, does not accelerate the payment deadline the
  way the general discharge/quit rules can.
- **`tempsvcfinal_daily_pay_exceptions`** (§ 201.3(b)(2)-(3)) — two
  exceptions requiring daily payment: a three-condition day-to-day
  assignment test, and a client engaged in a trade dispute.
- **`tempsvcfinal_discharge_quit_fallback`** (§ 201.3(b)(4)-(5)) — a
  key distinction: an assignment ending reverts to § 201.3's own
  schedules, but the underlying EMPLOYMENT relationship ending
  (discharge or quit) instead reverts to the general §§ 201/202 rules.
- **`tempsvcfinal_90day_exception_and_savings`** (§ 201.3(b)(6), (d))
  — a 90-consecutive-day outer limit on the section's own applicability,
  and the statute's own savings clause.

The document's description was updated, and two new fields
(`clientCompanyName`, `assignmentEndDate`) were added, marked optional
since they apply only to temp-services employees.

## Genuine corrections and findings

- **The central finding**: confirmed precisely from § 201.3(b)(1)(A)'s
  own text that the weekly-payment default is tied to calendar weeks,
  not assignment-end dates — correcting the natural assumption that a
  temp employee's pay is triggered by when a specific assignment
  concludes.
- Confirmed the important distinction between an assignment ending
  (governed by § 201.3's own schedules) and the underlying employment
  relationship ending via discharge or quit (which reverts to the
  general §§ 201/202 rules) — a genuinely non-obvious structural
  feature of the statute.
- Honestly disclosed an unresolved textual ambiguity: § 201.3(b)(4)
  uses the term "leasing employer" without defining it anywhere else
  in the section — quoted as the statute states it, without guessing
  at its meaning.
- Honestly disclosed that the statute's own text does not state what
  timing rule applies once the 90-consecutive-day limit is exceeded
  and the employer was not already paying weekly — left as a genuine
  gap rather than assumed.
- Correctly declined to independently fetch or verify the definitions
  the statute cross-references from other code sections (Unemployment
  Insurance Code § 135, Labor Code § 1682(b), Labor Code § 2671(d)) —
  disclosed as an honest gap.

## Honest gap(s) disclosed

The IWC wage-order executive/administrative/professional/clerical
classification test (relevant to the day-to-day daily-pay exception)
is not reproduced. § 203's waiting-time-penalty accrual mechanics are
cross-referenced, not restated — already covered by the corpus's
existing dedicated Waiting-Time Penalty Demand Letter document. What
timing rule applies once the 90-consecutive-day limit is exceeded
(without prior weekly payment) is not resolved by the statute's own
text and not guessed at here. The meaning of "leasing employer" in
§ 201.3(b)(4) is not resolved.

## Method

Fetched Cal. Labor Code § 201.3 from `leginfo.legislature.ca.gov`,
fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical after whitespace normalization
(with one transient proxy connection reset on the first attempt,
resolved on retry). All 12 citation quotes across the 5 authority
clauses programmatically confirmed as exact contiguous substrings (no
ellipsis-joined quotes). Independently re-verified during integration
review via a tenth fetch (a distinct curl User-Agent string,
"Groundtruth-TenthVerify-TempSvc/1.0") of the same section — all 12
quotes confirmed clean.

## Verification

- Statutory section fetched twice independently by the research agent
  with distinct User-Agent strings, plus a tenth independent fetch
  during integration review; all quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses that its citations are related provisions of the same
  statutory section, not independent corroborating sources; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Two new fields required (`clientCompanyName`, `assignmentEndDate`) —
  checked against the full corpus's existing field ids first, confirmed
  no equivalent field already existed; both added as optional since
  they apply only to the temp-services sub-scenario. Two fields
  (`employeeName`, `companyName`) reused from the document's existing
  field set.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- `final_paycheck_delivery_method_info_sheet` document: added 6 new
  clauses to its `clauseOrder`, filling a genuine, previously-uncovered
  gap; 2 new optional fields added. No new document.
- Corpus: 2,799 → 2,805 clauses; documents unchanged at 368. Third
  addition of wave 80 (a gap-fix, not a new document — the fourth wave
  80 slot, Confidentiality & IP, remains open pending the UETA batch).
