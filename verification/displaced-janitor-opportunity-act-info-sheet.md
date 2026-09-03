# Ending employment, new document: Displaced Janitor Opportunity Act — Information Sheet

## Why this document

Confirmed by grep that "displaced janitor," Labor Code § 1060, and
related citations had zero hits anywhere in the corpus. Distinct from
the existing Layoff/RIF Selection Criteria and both WARN Act documents,
none of which address this specific successor-building-service-contractor
retention obligation.

## What this document covers

10 clauses: 2 drafting (transition record, certification) and 8 authority
clauses, all citing Cal. Labor Code §§ 1060-1065:

- **`djoa_definitions`** (§ 1060(b), (c), (g)) — the 25+-employee
  "contractor" definition, the 15-hours/week "employee" definition
  excluding managerial/supervisory/confidential staff, and the
  "successor service contract" trigger with its 30-day anti-evasion rule.
- **`djoa_notice_and_employee_info`** (§ 1061(a)(1), (a)(3)) — the
  termination-notice chain and the three-working-day employee-information
  transfer, applying equally to subcontractors.
- **`djoa_retention_obligation`** (§ 1061(b)(1)) — the core 60-day
  retention requirement and its narrow performance/conduct-only cause
  exception.
- **`djoa_offer_terms_and_seniority`** (§ 1061(b)(2)-(3)) — written-offer
  mechanics (10-day minimum acceptance window, no wage/benefit matching
  required) and seniority-based retention when fewer employees are
  needed.
- **`djoa_lists_and_preferential_hiring`** (§ 1061(c)-(d)) — employee-list
  disclosure and the preferential hiring list during the transition
  period.
- **`djoa_discharge_protection_and_evaluation`** (§ 1061(e)-(f)) —
  no-discharge-without-cause during the 60 days, the end-of-period
  written evaluation, and conversion to at-will employment.
- **`djoa_scope_and_limits`** (§ 1063(a)-(c)) — the January 1, 2002
  applicability date and the express preservation of an owner's right to
  terminate or replace a contractor.
- **`djoa_enforcement`** (§ 1062(a)-(d)) — the private right of action,
  mandatory backpay formula, injunctive relief, attorney's fees, and the
  limit on evaluation-only claims.

## Genuine corrections and findings

- **A correction to the assignment's own framing**: the assignment brief
  anticipated a "notice-posting requirement." Having verified §§
  1060-1065 directly, no such posting requirement exists in this chapter
  — the actual advance-disclosure mechanism is inclusion of the retention
  requirement in awarding authorities' initial bid packages, not a
  workplace posting. Disclosed explicitly rather than fabricating a
  posting clause, with a note that any posting requirement would have to
  come from a local ordinance under § 1064 (expressly permitted but not
  independently researched here).
- Confirmed the retention obligation is not a general job-security
  guarantee — it applies only to employees who worked at least four
  months at the site, and the cause exception is narrowly tied to that
  employee's own performance or conduct, not cost or headcount reduction.
- Confirmed the statute explicitly does not require wage or benefit
  matching by the successor contractor.
- Confirmed the Act's protections are time-limited: employment converts
  to ordinary at-will status once the 60-day transition period ends.
- Confirmed the Act expressly preserves a property owner's or awarding
  authority's underlying business decisions (terminating a contract,
  switching contractors, or bringing maintenance in-house) — the
  retention obligation runs to whoever becomes the successor employer,
  not to the decision itself.

## Honest gap disclosed

Labor Code § 1064 (local ordinance authority) and the federal FLSA
cross-reference in § 1060(c)'s "employee" definition were not
independently researched or quoted.

## Method

Fetched Cal. Labor Code §§ 1060-1065 directly from
`leginfo.legislature.ca.gov`, each via two independent fetches (curl with
a Chrome/Windows User-Agent, and Python urllib with a Safari/Mac
User-Agent) — confirmed byte-identical after whitespace normalization
across all six sections. All 15 citation quotes programmatically
confirmed as exact substrings of the confirmed text.

## Verification

- All six sections fetched twice independently with distinct methods;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — every citation in this
  document is a subdivision of one of the chapter's six sections (the
  entire chapter is only six sections), and each clause's `gap`
  explicitly discloses this; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  accepted generic drafting-title reuse ("Certification").
- Field names (`companyName`, `effectiveDate`, `authorizedSignerName`,
  `authorizedSignerTitle`, `signatureDate`) independently confirmed to
  match existing corpus convention. New fields: `facilityDescription`,
  `retainedEmployeeStatement`, `causeExceptionStatement`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Displaced Janitor Opportunity Act — Information Sheet
  (`displaced_janitor_opportunity_act_info_sheet`), 10 clauses (8
  authority + 2 drafting), in the Ending employment category. New
  fields: `facilityDescription`, `retainedEmployeeStatement`,
  `causeExceptionStatement`.
- Corpus: 2,003 → 2,013 clauses; 256 → 257 documents. Second document of
  wave 52.
