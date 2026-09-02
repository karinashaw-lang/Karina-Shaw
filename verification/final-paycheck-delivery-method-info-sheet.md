# Ending employment, new document: Final Paycheck Delivery Method and Location — Information Sheet

## Why this document

The corpus's existing Waiting-Time Penalty Demand Letter document
covers only when final wages are due and the penalty for late
payment. Confirmed by reading all 7 `waitingtime_` clauses that
nothing there addresses delivery method or location.

## What this document covers

6 clauses: 2 drafting (delivery-method declaration, acknowledgment)
and 4 authority clauses:

- **`finalpaydelivery_place_of_payment`** (Lab. Code § 208) — the
  place-of-payment rule: at the place of discharge for a discharged
  employee, at the employer's office in the county where the employee
  worked for a quitting employee.
- **`finalpaydelivery_mailing_option`** (§ 202(a); § 201(a)) — the
  mailing option for a no-notice quit, and a separate, narrower
  mailing right for seasonal perishable-food-industry group layoffs.
- **`finalpaydelivery_direct_deposit`** (§ 213(d)) — direct deposit of
  final wages, conditioned on otherwise complying with the
  termination/quitting payment provisions.
- **`finalpaydelivery_wage_statement_still_applies`** (§ 226(a)) — the
  itemized wage statement requirement is not excused for a final
  paycheck, written as a brief cross-reference since the corpus's
  existing wage statement document already covers § 226 in full depth.

## Genuine corrections and findings

- Confirmed § 208's place-of-payment rule covers both the discharge
  and quitting scenarios from a single statute.
- **A significant correction**: § 213 is not the general "mailing
  option" statute as originally framed — it is the direct-deposit/
  wage-payment-method statute, and its final-wage-relevant text is
  subdivision (d), about direct deposit, not mailing. The actual
  mailing-option mechanic (mail to a designated address, date-of-
  mailing equals date-of-payment) lives in § 202(a), which applies
  specifically to a no-notice quit — disclosed explicitly in the
  mailing-option clause's `gap` field rather than silently corrected.
- A genuine additional finding: § 201(a) supplies a second, narrow
  mailing right limited to seasonal perishable-food-industry group
  layoffs, not discharge generally.

## Honest gaps disclosed

- No general statutory right to demand mailed payment for an ordinary
  discharge, or for a quit given with 72 hours' notice, was found —
  only the narrow seasonal-layoff carve-out in § 201(a). Disclosed as
  an absence, not asserted as a prohibition.
- No standalone California statute requiring final-wage direct
  deposits to be immediately available regardless of normal bank
  processing time (unlike some other states) was found — disclosed
  honestly as not found rather than guessed at.
- No CourtListener case law was needed — all five research topics
  resolved from statutory text alone.

## Method

Fetched Lab. Code §§ 201, 202, 208, 213, and 226 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-
identical after whitespace normalization. All citation quotes
programmatically confirmed as exact substrings of the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 202(a) and § 201(a)
  correctly disclosed as genuinely separate sections within the
  mailing-option clause; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `employeeName`, `terminationDate`,
  `separationType`) independently confirmed to match existing corpus
  convention. New fields: `deliveryMethod`, `deliveryAddress`,
  `mailingDate`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Final Paycheck Delivery Method and Location —
  Information Sheet (`final_paycheck_delivery_method_info_sheet`), 6
  clauses (4 authority + 2 drafting), in the Ending employment
  category. New fields: `deliveryMethod`, `deliveryAddress`,
  `mailingDate`.
- Corpus: 1,640 → 1,646 clauses; 207 → 208 documents.
