# During employment, new document: Alternative Workweek Schedule Election — Information Sheet

## Why this document

No existing document or clause covered California's formal,
group-level statutory process for adopting an alternative workweek
schedule — a distinct, statutorily governed procedure with real
overtime consequences, not just informal flex-time.

## What this document covers

10 clauses: 2 drafting (notice/disclosure, results/certification) and
8 authority clauses:

- **`awwelection_authorization`** (Lab. Code § 511(a)) — the
  two-thirds secret-ballot vote requirement to adopt a schedule.
- **`awwelection_work_unit_definition`** (Lab. Code § 511(a)) — what
  counts as a "work unit."
- **`awwelection_overtime_mechanics`** (Lab. Code § 511(b); IWC Wage
  Order No. 4, § 3(B)(1)) — what an adopted schedule changes about
  daily overtime, including the 1.5x/2x thresholds.
- **`awwelection_election_procedure_disclosure`** (IWC Wage Order No.
  4, § 3(C)(3)-(4)) — the required pre-election disclosure and secret
  ballot procedure.
- **`awwelection_reporting_requirement`** (Lab. Code § 511(e); IWC
  Wage Order No. 4, § 3(C)(6)) — an honest disclosure of a real
  conflict between the statute (DLSE) and the wage order (Office of
  the Director-Research) over which agency receives the report.
- **`awwelection_repeal_second_election`** (IWC Wage Order No. 4,
  § 3(C)(5); Lab. Code § 511(c)) — the one-third-petition repeal
  mechanism.
- **`awwelection_anticoercion`** (IWC Wage Order No. 4, § 3(C)(8)) —
  anti-coercion and anti-retaliation protection for the vote.
- **`awwelection_distinct_from_flextime`** (Lab. Code § 511(a)) — the
  factual distinction from an individual employee's informal
  flex-time arrangement.

## Genuine corrections and findings

- Confirmed the two-thirds vote, secret ballot, and readily-
  identifiable work unit requirements under § 511(a).
- Refined the overtime mechanics beyond a simple no-daily-overtime
  rule: no daily overtime within the schedule's regularly scheduled
  hours (capped at 10/day), 1.5x for hours beyond the scheduled hours
  up to 12/day or beyond 40/week, and 2x beyond 12/day or for any work
  on an unscheduled day.
- Confirmed the detailed election-procedure requirements (pre-election
  disclosure of wage/hour/benefit effects, a 14-day-noticed meeting,
  on-site secret ballot during work hours, noncompliance voids the
  election) live only in the Wage Order, not in § 511 itself.
- **A significant, honestly disclosed finding**: the original
  assumption that results are reported to the EDD was wrong, and the
  two primary sources actually conflict with each other. Section
  511(e) says reports go to the Division of Labor Standards
  Enforcement (DLSE); Wage Order 4 § 3(C)(6) says they go to the
  Office of the Director-Research, Department of Industrial Relations
  (DLSR's successor). Neither is the EDD, which is an unrelated agency
  (unemployment insurance/new-hire reporting). This conflict is
  disclosed honestly in the clause's `gap` field rather than resolved
  by picking a winner.
- Confirmed the repeal mechanics: a one-third petition forces a new
  election, a two-thirds vote reverses the schedule, held within 30
  days of the petition but not less than 12 months after the same
  group's last adopt/repeal vote — this mechanism lives only in the
  Wage Order (§ 3(C)(5)), though § 511(c)'s no-pay-cut protection
  independently corroborates that repeal is contemplated by the
  statute.
- Confirmed anti-coercion/anti-retaliation protection for the vote is
  Wage-Order-only (§ 3(C)(8)) — no parallel Labor Code § 511.5 exists
  (confirmed by direct check: no such section is found on
  leginfo.legislature.ca.gov).

## Honest gap disclosed

No case law was researched — this topic is purely statutory/
regulatory, and no CourtListener search was needed or attempted.

## Method

Fetched Cal. Labor Code § 511 directly from
`leginfo.legislature.ca.gov`, and IWC Wage Order No. 4-2001 § 3
directly from `dir.ca.gov` (PDF), each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-
identical (statute) and MD5-identical (PDF). All 17 citation quotes
programmatically confirmed as exact substrings of the verified,
whitespace-normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic across all 8 authority
  clauses — every clause correctly distinguishes same-section/same-
  wage-order-paragraph citations from genuinely independent sources
  (statute vs. wage order); correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `signatureCity`, `signatureDate`)
  independently confirmed to match existing corpus convention. New
  fields: `workUnitDescription`, `proposedScheduleDescription`,
  `disclosureMeetingDate`, `electionDate`, `affectedEmployeeCount`,
  `votesInFavor`, `votesOpposed`, `employerRepresentativeName`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Alternative Workweek Schedule Election — Information
  Sheet (`alternative_workweek_schedule_election_info_sheet`), 10
  clauses (8 authority + 2 drafting), in the During employment
  category. New fields: `workUnitDescription`,
  `proposedScheduleDescription`, `disclosureMeetingDate`,
  `electionDate`, `affectedEmployeeCount`, `votesInFavor`,
  `votesOpposed`, `employerRepresentativeName`.
- Corpus: 1,228 → 1,238 clauses; 155 → 156 documents.
