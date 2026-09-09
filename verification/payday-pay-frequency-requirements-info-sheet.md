# During employment, new document: Payday and Pay Frequency Requirements — Information Sheet

## Why this document

Part of wave 145 (one document each in Hiring, During employment,
Estate Planning, and Family Law, run as four parallel isolated
worktrees, restoring the eight categories to exact balance after each
sat at 75–76 documents). This session's assignment was the During
employment slot.

Before choosing a topic, the corpus's ~75 existing During-employment
documents were enumerated from `data/documents.json` and scanned for
the topics the task brief flagged as likely already covered — meal/
rest break premium pay (`meal_rest_break_policy`, split-shift and
reporting-time info sheets), expense reimbursement (`expense_
reimbursement`, `business_expense_reimbursement_info_sheet`), wage
statement itemization (`wage_statement_itemization_policy`), pay
transparency for current employees requesting their own pay scale
(already inside `pay_scale_disclosure_info_sheet`, Hiring category,
which explicitly covers Labor Code § 432.3(c) requests from current
employees), personnel file inspection (already covered, but under
Ending employment: `personnel_records_request`, `personnel_payroll_
record_retention_duration_info_sheet`), and whistleblower protections
(two existing documents, general and health-care-specific). All were
confirmed already covered — none of them were open.

A further scan for other candidate topics found "independent
contractor classification" and "willful misclassification" already
covered (Hiring and Ending employment categories), and confirmed
Labor Code § 204's general twice-monthly payday rule was so far only
quoted narrowly, in one sentence, inside the existing `commission_
agreement` document's `commission_payment_timing` clause (limited to
contrasting the general rule against the vehicle-dealer-specific
commission payday rule of § 204.1). The full statutory payday-timing
scheme — the two specific timing windows within § 204(a), the narrow
monthly-payment option for certain FLSA-exempt salaries, the separate
next-payroll-period rule for overtime wages, the collective-
bargaining-agreement override, the seven-calendar-day payroll-schedule
safe harbor, § 204b's separate rule for weekly-paid employees, § 205's
monthly rule for certain boarded-and-lodged agricultural/household-
domestic employees and its farm-labor-contractor exception, and § 210's
civil penalty for a late or missed payday — had no dedicated document
and was confirmed genuinely open by grepping the merged corpus for
"204b", "Section 205", and "Section 210" before drafting (all hits
traced to unrelated Family Law, Business Formation, and Estate
Planning citations, or to the single narrow `commission_payment_
timing` sentence already noted above).

## What this document covers

10 clauses: 2 drafting (intro, acknowledgment) and 8 authority
clauses, citing Cal. Labor Code §§ 204(a)-(d), 204b, 205, and 210:

- **`payday_general_semimonthly_rule`** (§ 204(a), sentences 1-2) —
  the default twice-monthly payday rule and its two specific timing
  windows (labor performed the 1st-15th paid by the 26th; labor
  performed the 16th-end paid by the 10th of the following month).
- **`payday_exempt_salaried_monthly_option`** (§ 204(a), sentence 3) —
  the narrow monthly-payment option for FLSA-exempt executive,
  administrative, and professional salaries, conditioned on paying the
  entire month's salary, including the as-yet-unearned portion, up
  front.
- **`payday_overtime_next_period_payday`** (§ 204(b)(1)-(2)) — the
  next-regular-payroll-period timing rule for overtime wages, and the
  related paystub-correction mechanism that ties into § 226(a)'s
  total-hours-worked itemization requirement.
- **`payday_cba_override`** (§ 204(c)) — the collective-bargaining-
  agreement override of the default timing rules for covered
  employees.
- **`payday_weekly_biweekly_semimonthly_safe_harbor`** (§ 204(d)) —
  the seven-calendar-day safe harbor for weekly, biweekly, or
  semimonthly payroll schedules.
- **`payday_weekly_payroll_204b`** (§ 204b, in full) — the separate,
  narrower timing rule that applies specifically to weekly-paid
  employees instead of § 204.
- **`payday_agricultural_domestic_monthly_rule`** (§ 205, in full,
  two citations from the same section) — the once-a-month payday rule
  for boarded-and-lodged agricultural, viticultural, horticultural,
  stock/poultry-raising, and household domestic employees, and the
  separate weekly-payroll exception for workers employed by a farm
  labor contractor.
- **`payday_late_payment_penalty`** (§ 210, in full, two citations
  from the same section) — the $100-initial/$200-plus-25%-subsequent
  civil penalty structure, its two recovery mechanisms (employee
  statutory-penalty claim under § 98, or Labor Commissioner citation),
  and the single-recovery election-of-remedies rule against also
  pursuing a § 2699(a) PAGA penalty for the same violation.

## Genuine findings

No genuine quote defects were found. All ten quoted passages (across
the eight authority clauses; two clauses each carry two citations
drawn from the same statutory section) were confirmed as exact,
whitespace-normalized substrings of the independently double-fetched
statutory text, including one clause (`payday_exempt_salaried_monthly_
option`) whose quote preserves the source's own curly right-single-
quotation-mark character in "month's salaries" verbatim rather than
normalizing it to a straight apostrophe — a deliberate choice, not a
defect, since the character is genuinely present in the fetched HTML
and changing it would make the quote inexact.

One integration-review correction, not a sourcing defect: the first
draft of `payday_cba_override`'s `gap` field used a `{{employeeName}}`
field placeholder inside the gap text itself. A corpus-wide check
(`grep` for `{{` inside every clause's `gap` field, all 4,822 clauses)
showed this is the only place in the entire corpus a gap field had
ever contained a template placeholder — gap fields are reviewer-facing
meta-commentary and do not get variable substitution the way `body`
does, so leaving it in would have shipped a literal, unresolved
`{{employeeName}}` string to anyone reading the assembled document's
sourcing notes. It was rewritten to refer to "a specific employee"
in prose instead, with no change to the clause's legal content.

## Honest gap(s) disclosed

This document does not cover Labor Code § 226(a)'s wage-statement
itemization content (a separate existing document in this corpus), the
final-pay-on-termination timing rules of §§ 201-202 (also covered
elsewhere), § 204.1's vehicle-dealer-specific commission payday rule
or § 204.2 (both cross-referenced by § 204(a)'s own exclusion list but
not independently re-verified here beyond confirming that exclusion
text), § 204.11, or § 205.5, both of which § 210's penalty list cross-
references without this document restating their content. It does not
independently restate or verify the procedural cross-references inside
§ 210 to §§ 98, 98.3, and 1197.1(b)-(k). It does not resolve, because
the statutory text itself does not resolve it, how § 204(d)'s seven-
calendar-day safe harbor for weekly payroll interacts with § 204b's
separate weekly-payroll-specific timing rule in a case where both
provisions might arguably describe the same arrangement — this is
disclosed in both affected clauses' `gap` fields rather than silently
picked one way. It does not cover Labor Code § 204(e) (a narrow
special payday rule limited to University of California Regents
employees), which was read during research but excluded from this
document's scope as a narrow single-employer carve-out rather than a
generally applicable rule.

## Method

Fetched Cal. Labor Code §§ 204, 204b, 205, and 210 from
leginfo.legislature.ca.gov, each section fetched twice independently
via direct `curl` requests with two distinct User-Agent strings
("Groundtruth-Wave145-Agent-Alpha/1.0" and a separate Mozilla-style
string, "Mozilla/5.0 (Groundtruth-Wave145-Beta; independent-refetch)
Gecko"). Two of the eight fetches (the second attempt on § 204b and
the first and second attempts on § 210) hit a transient `curl: (35)
Recv failure: Connection reset by peer` on the first try; each was
retried with the same User-Agent string and succeeded on retry (HTTP
200). For every section, the two independent fetches' `single_law_
section` HTML content (isolating the actual statutory-text container
from the surrounding page chrome, which differs fetch-to-fetch only in
a session-specific JSF `ViewState` hidden-input token outside that
container — confirmed by direct diff) were extracted, whitespace-
normalized, and confirmed byte-for-byte identical between the two
fetches for all four sections before any quote was drafted from them.

Every quoted string in every citation was then independently re-
checked by script against the saved, dual-fetch-confirmed source text
files, using a whitespace-normalizing substring match (collapsing
runs of whitespace, including non-breaking spaces present in the
page's surrounding chrome, to single spaces) — all ten quote instances
matched cleanly on the first check, so no character-level defect was
found or needed correcting in any citation's `quote` field.

## Verification

- All four statutory sections fetched twice independently with
  distinct User-Agent strings; extracted statutory-text containers
  confirmed byte-identical between the two fetches for each section
  (the only cross-fetch difference found was a page-chrome session
  token outside the statutory-text container, not statute text).
- All 10 quote instances (across 8 authority clauses, 2 of which carry
  two citations from the same section) re-verified by script as exact,
  whitespace-normalized substrings of the dual-fetch-confirmed source
  text — no defects found, no corrections needed.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — one leak found and
  corrected in `payday_cba_override`'s `gap` field (see "Genuine
  findings" above); clean after correction, re-verified corpus-wide
  (0 of 4,822 clauses now contain `{{` in `gap`).
- Checked every citation's `case` field for emptiness — all 10
  populated with proper citation identifier strings.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `payday_` prefix has zero collisions with the existing
  4,812 clauses. Confirmed the new document id (`payday_pay_frequency_
  requirements_info_sheet`) has zero collision with the existing 596
  document ids.
- Ran corpus-wide validation (both JSON files parse; all clause ids
  unique; all document ids unique; every clause id referenced in every
  document's `clauseOrder`, including the new document's, resolves to
  an existing clause) — clean.
- No new field ids required — all four fields (`employeeName`,
  `companyName`, `dateSigned`, `cityState`) reused from the existing
  corpus's established field-id conventions.
- Confirmed the document's `categories` array is exactly `["During
  employment"]`, restoring that category from 75 to 76 documents.

## Net changes

- New document: Payday and Pay Frequency Requirements — Information
  Sheet (`payday_pay_frequency_requirements_info_sheet`), 10 clauses
  (8 authority + 2 drafting), in the During employment category. No
  new fields.
- Corpus: 4,812 → 4,822 clauses; 596 → 597 documents.

## Wave 145 context

This session was the During employment slot of wave 145, one of four
parallel, isolated-worktree tasks (Hiring, During employment, Estate
Planning, Family Law) each adding one document to restore the eight
categories to exact balance (all had settled at 75-76 documents each
before this wave). This session did not coordinate with, and has no
visibility into, the other three concurrent worktrees' document
choices.
