# During employment, new document: Workplace Violence Prevention Plan — Information Sheet

## Why this document

The existing Injury and Illness Prevention Program (IIPP) — Information
Sheet document already covers Labor Code § 6401.7, and its own `gap` field
explicitly disclosed that it did NOT independently verify Labor Code
§ 6401.9 (the separate Workplace Violence Prevention Plan requirement added
by SB 553) — it only noted § 6401.7's cross-reference to it as a 2024
addition. This document is the independent verification of § 6401.9 itself
that the IIPP document deliberately deferred. Confirmed by grep that
"workplace violence prevention" beyond that single passing mention, and
"§ 6401.9" as an independently fetched source, had no other hits in the
corpus.

## What this document covers

9 clauses: 2 drafting (scope/declaration, acknowledgment signature) and 7
authority clauses, all citing California Labor Code § 6401.9 (SB 553,
operative July 1, 2024):

- **`wvpp_applicability_and_exemptions`** (subd. (b)(1), (b)(2)(E)) — the
  general applicability rule and the teleworking exemption (one of six
  listed exemption categories; the other five are named but not quoted).
- **`wvpp_plan_requirement_and_form`** (subd. (c)(1)(A)-(B)) — the core
  duty to have a written plan, and that it may be incorporated into the
  employer's existing IIPP rather than kept as a separate document.
- **`wvpp_plan_content_elements`** (subd. (c)(2), (c)(2)(A), (D), (I), (J))
  — 4 of the 13 required plan elements (responsible persons, retaliation-
  free reporting procedures, hazard-identification procedures, and
  hazard-correction procedures).
- **`wvpp_training_requirements`** (subd. (e)(1)-(3)) — the duty to train,
  the annual-training cycle, and event-triggered additional training.
- **`wvpp_violent_incident_log`** (subd. (d)(1)(A)-(B)) — the log's
  recording duty and its anonymization requirement.
- **`wvpp_recordkeeping_and_access`** (subd. (f)(1), (f)(3), (f)(6)) —
  five-year retention periods and the 15-calendar-day employee access
  right.
- **`wvpp_enforcement_and_effective_date`** (subd. (g), (i)) — enforcement
  via Labor Code § 6317 (not independently verified) and the July 1, 2024
  operative date for subdivisions (b) through (g).

## Genuine corrections and findings

- **A significant form-requirement correction**: the plan does not have to
  be a document separate from the employer's existing IIPP — § 6401.9(c)
  (1)(B)'s own text expressly allows it to be incorporated as a
  stand-alone section of the written IIPP required by 8 Cal. Code Regs.
  § 3203.
- **A precise recordkeeping distinction**: the 15-calendar-day employee
  access deadline under § 6401.9(f)(6) for hazard/log/investigation
  records is a different number, in different units, from the five-
  business-day access deadline this corpus's IIPP document describes for
  the IIPP itself under 8 Cal. Code Regs. § 3203(a)(8)(B)(1) — flagged
  explicitly so the two rights aren't conflated.
- Confirmed the retention periods (five years for hazard records and the
  violent incident log) are longer than the one-year IIPP inspection/
  training record periods described in the existing IIPP document.
- Confirmed enforcement ties to a separate citation-and-penalty statute,
  Labor Code § 6317, by cross-reference only — deliberately not fetched or
  verified, and no penalty amount is stated.
- Confirmed the operative-date provision, subdivision (i), applies only to
  subdivisions (b) through (g) — it does not, on its own text, fix an
  effective date for subdivision (a) (definitions) or (h) (further
  standards-board rulemaking deadlines), and the clause does not speculate
  beyond what the text says.

## Honest gap disclosed

Of the 13 lettered plan-content elements § 6401.9(c)(2) requires, only 4
are quoted; the other 9 (employee involvement, multi-employer
coordination, supervisory compliance, communication, emergency response,
training development, postincident investigation, plan review, and a
standards-board catch-all) are named as topics the statute covers but not
summarized or quoted. The five non-teleworking exemption categories in
subdivision (b)(2), and 8 Cal. Code Regs. §§ 3203 and 3342 (named only by
cross-reference), were not independently fetched or verified.

## Method

Fetched Cal. Labor Code § 6401.9 directly from leginfo.legislature.ca.gov
twice, using two distinct request methods, confirmed byte-identical after
whitespace normalization. All 18 citation quotes programmatically confirmed
as exact substrings of the fetched text.

## Verification

- The statute fetched twice independently; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, corpus-wide.
- Checked source-independence disclosure logic — every citation in this
  document is a subdivision of the single statute § 6401.9, and every
  clause's `gap` explicitly discloses this (no independent second source
  exists for this specific statute in this delivery); correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  accepted title reuses: "Acknowledgment of Receipt" (established generic
  drafting pattern) and "When Employee Training Is Required" (parallels
  the IIPP document's own training clause for a related but distinct
  statute).
- Field names (`companyName`, `employeeName`, `programAdministratorName`)
  independently confirmed to match existing corpus convention. No new
  fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Workplace Violence Prevention Plan — Information Sheet
  (`workplace_violence_prevention_plan_info_sheet`), 9 clauses (7
  authority + 2 drafting), in the During employment category. No new
  fields.
- Corpus: 1,870 → 1,879 clauses; 239 → 240 documents. First document of
  wave 48.
