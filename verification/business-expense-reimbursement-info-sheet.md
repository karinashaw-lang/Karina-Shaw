# During employment, new document: Employer's Duty to Reimburse Business Expenses — Information Sheet

## Why this document

Read the existing "Business Expense Reimbursement Form" document
(`expense_reimbursement`) in full and confirmed it has only 2 pure
drafting clauses with zero authority clauses citing any statute.
Confirmed by grep that "2802" had zero hits anywhere in the corpus —
the actual legal requirement behind employee expense reimbursement had
never been stated with a verified citation in this project. This
document is a genuine companion to the existing bare form. Second of
wave 64's four documents.

## What this document covers

7 clauses: 2 drafting (intro, acknowledgment) and 5 authority clauses,
citing Cal. Labor Code §§ 2802(a)-(c) and 2804, plus Cochran v.
Schwan's Home Service, Inc. (2014) 228 Cal.App.4th 1137:

- **`expreimb_duty`** (§ 2802(a)) — the core indemnification duty for
  necessary expenditures or losses.
- **`expreimb_interest`** (§ 2802(b)) — interest on unpaid
  reimbursement awards, accruing from the date the expense was
  incurred.
- **`expreimb_definition_fees`** (§ 2802(c)) — the statutory
  definition of "necessary expenditures or losses," which expressly
  includes attorney's fees for successful enforcement written into the
  statute's own text.
- **`expreimb_nonwaivable`** (§ 2804) — **a key finding**: a genuinely
  independent, separately-numbered section voiding any private waiver
  of the reimbursement right.
- **`expreimb_remote_work`** (Cochran v. Schwan's Home Service) — the
  holding that personal cell phone reimbursement is required
  regardless of unlimited-plan status or who pays the bill.

## Genuine corrections and findings

- **The central finding**: § 2802(c) writes attorney's fees for
  successful enforcement directly into the statute's own definition of
  "necessary expenditures or losses" — not left to a court's general
  discretion or a separate fee-shifting statute.
- Confirmed § 2804 is a genuinely independent, separately-numbered
  section (not a subsection of § 2802) voiding any private waiver of
  the reimbursement right, while expressly preserving other rights and
  remedies otherwise available.
- Confirmed Cochran's precise holding via the actual opinion text: the
  reimbursement obligation for personal cell phone use applies
  regardless of whether the plan has unlimited or limited minutes, and
  regardless of who pays the bill — the court left the specific
  percentage calculation to the trial court and parties in each case.
- Confirmed § 2802(a)'s indemnification duty extends even to obedience
  to an employer's direction later found unlawful, unless the employee
  believed at the time it was unlawful.

## Honest gap disclosed

Cochran's cell-phone-specific reasoning has not been independently
verified as extended by a published California decision to other
remote-work expenses (home internet, equipment, utilities) — this
document does not assume that extension. Cochran was a class-
certification appeal; the California Supreme Court denied review
(S221319) without issuing its own opinion on the question. Gattuso v.
Harte-Hanks (referenced inside Cochran) was not independently fetched
or cited as its own authority.

## Method

Fetched Cal. Labor Code §§ 2802 and 2804 from
`leginfo.legislature.ca.gov` via curl, each section fetched twice with
distinct User-Agent/request configurations, confirmed byte-identical.
Cochran v. Schwan's Home Service read directly via CourtListener. All
6 citation quotes programmatically confirmed as exact substrings of
the confirmed text.

## Verification

- Both statutory sections fetched twice independently with distinct
  request signatures; case law confirmed via CourtListener; confirmed
  clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 2802(a)-(c)
  correctly disclosed as one statutory section, not independent of
  each other; § 2804 correctly disclosed as a genuinely independent,
  separately-numbered section; Cochran correctly disclosed as a
  genuinely independent, different-type source (case law construing
  the statute); correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`companyName`, `employeeName`) independently confirmed
  to match existing corpus field definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: Employer's Duty to Reimburse Business Expenses —
  Information Sheet (`business_expense_reimbursement_info_sheet`), 7
  clauses (5 authority + 2 drafting), in the During employment
  category. No new fields.
- Corpus: 2,360 → 2,367 clauses; 304 → 305 documents. Second document
  of wave 64.
