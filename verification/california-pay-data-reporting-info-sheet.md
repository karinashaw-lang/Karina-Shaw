# Hiring, new document: California Pay Data Reporting — Information Sheet

## Why this document

Confirmed by grep that "pay data report," "SB 973," and "Gov. Code
§ 12999" had zero hits anywhere in the corpus. Distinct from the existing
Pay Scale Disclosure and Salary History Ban Information Sheet (Labor Code
§ 432.3), which covers posting pay scales to applicants and in job
postings — not the separate annual workforce data-reporting obligation to
California's Civil Rights Department addressed here. The delivering agent
read that existing document first to confirm no overlap and match its
tone, gap-field discipline, and field-id conventions.

## What this document covers

8 clauses: 2 drafting (self-assessment declaration, summary/signature) and
6 authority clauses, all citing Government Code § 12999:

- **`paydatareport_threshold_and_deadline`** (§ 12999(a)(1)) — the
  100-employee filing threshold and the second-Wednesday-of-May annual
  deadline.
- **`paydatareport_labor_contractor_report`** (§ 12999(a)(2)-(3)) — the
  separate labor-contractor-employee report and the requirement to store
  demographic data apart from personnel records.
- **`paydatareport_report_contents`** (§ 12999(b)(1)-(7)) — the ten
  current job categories, BLS-aligned pay bands, median/mean hourly
  rates, the October-December snapshot methodology, W-2-based earnings
  calculation, hours worked, and NAICS code.
- **`paydatareport_upcoming_job_category_change`** (§ 12999(n),
  (b)(1)(A)-(B)) — an already-enacted, not-yet-operative change: a
  differently worded, 23-item job-category list replaces the current
  10-item list effective January 1, 2027.
- **`paydatareport_penalties_enforcement`** (§ 12999(f)) — the
  $100/$200-per-employee civil penalty structure and court-order
  enforcement mechanism.
- **`paydatareport_confidentiality_recordkeeping_and_definitions`**
  (§ 12999(g), (h), (j), (k)(1)-(3)) — confidentiality protections, the
  Public Records Act exemption, 10-year recordkeeping, and definitions of
  "employee," "labor contractor," and "establishment."

## Genuine corrections and findings

- **A major, session-critical finding**: Government Code § 12999 was
  amended again by SB 464 (Stats. 2025, Ch. 760) after the SB 973/SB 1162
  history described in the original research brief, producing two
  already-chaptered, time-phased versions of the same section — the
  version effective January 1, 2026 through January 1, 2027 (used
  throughout most of this document), and a second version, operative
  January 1, 2027, that replaces the current 10-item EEO-1-style job
  category list with a 23-item SOC-style list. Disclosed as its own
  dedicated clause rather than silently using the wrong list or ignoring
  the pending change, with an explicit note that this is real,
  already-enacted statutory text, not speculation.
- Confirmed the filing deadline text (still literally reading "May 2023")
  is the statute's actual, unedited recurring-deadline language — "on or
  before the second Wednesday of May 2023, and ... of each year
  thereafter" — not a stale drafting error in this document.
- Confirmed the labor-contractor report's demographic-data
  separate-storage requirement (§ 12999(a)(3)) applies to both the
  employer and the labor contractor.
- Confirmed the civil penalty ($100/$200 per employee) can be apportioned
  to a labor contractor specifically when that contractor failed to
  supply required pay data to the employer.
- Confirmed individually identifiable information submitted under this
  section is exempt from the California Public Records Act and subject to
  a 10-year department recordkeeping duty.

## Honest gap disclosed

No reported court decision applying the civil penalty range in
subdivision (f) was found or cited. Subdivision (i) (the department's
authority to publish aggregate, de-identified reports) was read but
deliberately not quoted or relied on. Only 2 of the 23 new job categories
in the 2027 version are quoted as illustrative examples, not the full
list — the full list was read in its entirety before drafting.

## Method

Fetched Government Code § 12999 (both time-phased versions) directly from
`leginfo.legislature.ca.gov`, each fetched twice using two separate
`requests` sessions with distinct User-Agent strings (Chrome/Windows and
Safari/macOS) — confirmed byte-identical after whitespace normalization.
All 17 citation quotes programmatically confirmed as exact substrings of
the fetched text.

## Verification

- Both statutory versions fetched twice independently with distinct
  User-Agents; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are paragraphs of the same statutory
  subdivision versus the deliberate two-version comparison in the
  upcoming-change clause (explicitly flagged as non-independent, both
  from the same 2025 enacting bill); correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none — no title reuse at all in this delivery).
- Field names (`companyName`, `authorizedSignerName`,
  `authorizedSignerTitle`, `dateSigned`, `cityState`) independently
  confirmed to match existing corpus convention. New fields:
  `employeeCount`, `reportingYear`, `laborContractorUseDescription`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: California Pay Data Reporting — Information Sheet
  (`california_pay_data_reporting_info_sheet`), 8 clauses (6 authority +
  2 drafting), in the Hiring category. New fields: `employeeCount`,
  `reportingYear`, `laborContractorUseDescription`.
- Corpus: 1,895 → 1,903 clauses; 242 → 243 documents. Fourth and final
  document of wave 48.
