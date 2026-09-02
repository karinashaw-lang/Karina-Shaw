# Hiring, new document: New Hire Reporting — Information Sheet

## Why this document

No existing document or clause in this corpus covered new-hire
reporting to the state's New Employee Registry — a distinct
compliance duty from I-9 employment eligibility verification (already
covered) and from the general hiring paperwork process.

## What this document covers

8 clauses: 2 drafting (declaration/scope, acknowledgment) and 6
authority clauses:

- **`newhirereport_federal_framework`** (42 U.S.C. § 653a) — the
  federal PRWORA framework requiring states to operate a directory of
  new hires, the underlying employer reporting duty, and the 60-day
  rehire-gap definition.
- **`newhirereport_ca_duty_and_deadline`** (Cal. Unemployment
  Insurance Code § 1088.5) — California's implementing duty, the
  20-day deadline, and the twice-monthly electronic-filer alternative.
- **`newhirereport_new_employee_and_rehire_definition`** (Cal.
  Unemployment Insurance Code § 1088.5) — what counts as a reportable
  new employee or rehire.
- **`newhirereport_required_information`** (Cal. Unemployment
  Insurance Code § 1088.5) — the required report contents.
- **`newhirereport_penalties`** (Cal. Unemployment Insurance Code
  § 1088.5; 42 U.S.C. § 653a) — the codified per-failure penalty
  amounts, state and federal.
- **`newhirereport_independent_contractors`** (Cal. Unemployment
  Insurance Code § 1088.8) — California's separate reporting duty for
  certain paid independent contractors.

## Genuine corrections and findings

- Confirmed Cal. Unemployment Insurance Code § 1088.5 as the correct
  implementing statute, and 42 U.S.C. § 653a as the correct federal
  framework.
- Refined the electronic-filer alternative: it does not simply shorten
  the 20-day deadline — it replaces the per-hire clock with a
  twice-monthly batch transmission (12-16 days apart), which can land
  before or after the 20-day mark depending on the reporting cycle.
- Confirmed the rehire threshold is a 60-consecutive-day gap in
  service, matching the federal floor exactly — California did not
  diverge from PRWORA on this point.
- Confirmed the required-information list: employee name, address,
  SSN, first date worked; employer name, address, state employer
  account number (if any), and federal EIN.
- A genuine, precise finding: California's codified penalty amounts
  are $24 per failure to report and $490 for conspiracy — both
  slightly below the federal statutory ceiling of $25/$500, rather
  than an independently chosen state figure untethered from the
  federal cap.
- Confirmed California's separate independent-contractor reporting
  duty under § 1088.8: service-providers paid, or contracted to be
  paid, $600 or more in a year, tied to the same threshold that
  triggers IRS Form 1099 reporting under 26 U.S.C. § 6041A.

## Honest gaps disclosed

- Inflation-adjusted penalty amounts were not independently verified
  beyond the statutory text itself.
- No EDD form name or number is stated, since the statute itself does
  not name one.
- Section 1088.5's own exemption and permitted-use subdivisions are
  not elaborated.
- No case law was located or needed — this is a pure administrative/
  compliance statute with no significant litigated case law, so no
  CourtListener research was performed for this document.
- No full Social Security number field is collected on this
  information sheet, consistent with this corpus's existing practice
  of never exposing a full SSN in a generated document; the sheet
  instead states the statutory requirement and notes the SSN is
  obtained through the employer's own hiring paperwork.

## Method

Fetched 42 U.S.C. § 653a from `law.cornell.edu/uscode` and Cal.
Unemployment Insurance Code §§ 1088.5 and 1088.8 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed
byte-/text-identical. All 18 citation quotes programmatically
confirmed as exact substrings of the verified text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — every clause pulling
  multiple subsections of the same statutory section explicitly
  discloses "treated as one source, not independent"; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Acknowledgment") confirmed as the corpus's
  established, accepted generic drafting-title-reuse pattern.
- Field names (`companyName`, `employeeName`, `startDate`) confirmed
  to match existing corpus convention — `startDate` independently
  confirmed to match the existing I-9 document's field exactly. New
  field: `employeeAddress` (no address-for-a-person field existed
  anywhere in the corpus before this document).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: New Hire Reporting — Information Sheet
  (`new_hire_reporting_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Hiring category. New field: `employeeAddress`.
- Corpus: 1,172 → 1,180 clauses; 149 → 150 documents. First document
  of wave 25.
