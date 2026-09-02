# Ending employment, new document: Personnel and Payroll Record Retention Duration — Information Sheet

## Why this document

The corpus's existing Employee's Request to Inspect Personnel and
Payroll Records document covers only the employee's inspection right,
never the employer's underlying retention-duration duty — one of its
own `gap` fields flags § 1198.5(c)(1) as unaddressed. Confirmed by
reading all `personnelrec_` clauses before writing anything.

## What this document covers

7 clauses: 2 drafting (declaration, acknowledgment/signature) and 5
authority clauses:

- **`recordretentionduty_personnel_records_three_years_after_termination`**
  (Lab. Code § 1198.5(c)(1)) — 3 years after termination.
- **`recordretentionduty_payroll_records_three_years_on_file`** (Lab.
  Code § 226(a)) — 3 years on file, no termination trigger.
- **`recordretentionduty_two_different_three_year_periods`** — a
  direct comparison confirming these are genuinely different clocks.
- **`recordretentionduty_i9_federal_comparison`** (8 U.S.C.
  § 1324a(b)(3)) — the later of 3 years after hire or 1 year after
  termination for Form I-9.
- **`recordretentionduty_consequences_of_failing_to_retain`** — what
  the statutes actually say about a bare retention failure, as opposed
  to a failure to permit inspection.

## Genuine corrections and findings

- Confirmed § 1198.5(c)(1)'s exact text: "maintain a copy of each
  employee's personnel records for a period of not less than three
  years after termination of employment." The correct subsection is
  (c)(1), not (c) generally.
- **A correction on § 226(a)**: the statute states no termination
  trigger at all — it's a flat "kept on file" duty, "at the place of
  employment or at a central location within the State of California,"
  untethered to termination, not "3 years after termination" as
  originally assumed.
- Confirmed via direct comparison of both statutory texts that the
  personnel-records duty (termination-triggered) and the payroll-
  records duty (continuous, on-file) are genuinely different clocks,
  not the same 3-year period restated.
- A genuine, honestly-disclosed finding on consequences: § 1198.5(k)'s
  $750 penalty is worded around failure to permit inspection, not
  retention as such. But § 226's retention sentence lives inside
  subdivision (a) itself, the same subdivision § 226(e)(1)'s civil
  penalty is keyed to ("failure ... to comply with subdivision (a)") —
  so a bare retention failure arguably falls within § 226(e)(1)'s
  literal scope, subject to its "knowing and intentional" and
  "suffering injury" elements. No case law was checked on this
  application; disclosed as a limitation rather than asserted as
  settled.

## Honest gap disclosed

No standalone statutory penalty for a pure retention failure (no
inspection request made, no wage-statement defect) was located for
either statute — disclosed as a gap rather than invented.

## Method

Fetched Lab. Code §§ 1198.5 and 226 directly from
`leginfo.legislature.ca.gov`, and 8 U.S.C. § 1324a from
`law.cornell.edu`, each verified against a second, independent fetch
with a distinct User-Agent — confirmed byte-identical. All citation
quotes programmatically confirmed as exact substrings of the fetched,
normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — the comparison clause
  correctly discloses it reuses the same two primary sources as the
  individual duration clauses rather than presenting new independent
  sources; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `employeeName`) independently confirmed
  to match existing corpus convention. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Personnel and Payroll Record Retention Duration —
  Information Sheet
  (`personnel_payroll_record_retention_duration_info_sheet`), 7
  clauses (5 authority + 2 drafting), in the Ending employment
  category. No new fields.
- Corpus: 1,667 → 1,674 clauses; 211 → 212 documents.
