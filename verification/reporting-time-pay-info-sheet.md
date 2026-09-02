# During employment, new document: Reporting Time Pay — Information Sheet

## Why this document

No existing document or clause covered California's reporting time
pay requirement — a distinct wage order rule from the meal/rest break
and overtime rules already in the corpus.

## What this document covers

8 clauses: 2 drafting (policy statement, signature/receipt) and 6
authority clauses:

- **`reportingtime_core_rule`** (IWC Wage Order No. 4-2001, § 5(A)) —
  the core rule: half the scheduled day's pay (2-4 hour range) when
  an employee reports but isn't furnished at least half their usual
  work.
- **`reportingtime_second_reporting`** (§ 5(B)) — a flat 2-hour
  minimum for a second same-day reporting, with no formula or 4-hour
  cap.
- **`reportingtime_exceptions`** (§ 5(C), (D)) — the wage order's own
  three exceptions plus the separately-codified, narrower paid-standby
  subsection.
- **`reportingtime_actual_reporting_required`** — the honest finding
  that the wage order's text doesn't address pre-report shift
  cancellation.
- **`reportingtime_relationship_to_other_wages`** — reporting time
  pay's independence from overtime and meal/rest premium pay,
  cross-referencing rather than duplicating the corpus's existing
  `mealrest_premium_pay` clause.
- **`reportingtime_split_shift_premium`** (§ 4(C)) — the related,
  separate split shift premium.

## Genuine corrections and findings

- Confirmed the core rule (§ 5(A)) as originally framed.
- Confirmed the second-reporting rule (§ 5(B)): a flat 2-hour minimum
  with no formula tied to scheduled-day length and no stated 4-hour
  cap, unlike (A).
- **A significant correction to the exceptions framing**: § 5(C)
  lists only three exceptions (threats to employees/property or
  civil-authority recommendation not to begin work; public utility
  failure; Act of God or other cause outside the employer's control).
  Paid standby status is not one of the three items in (C)'s list — it
  is a separate, distinct subsection, § 5(D), with its own narrower
  scope (called in outside scheduled reporting time). Handled as two
  citations in one clause, disclosed as "treated as one source, not
  independent" since both are subdivisions of the same § 5.
- Confirmed the wage order's text doesn't address pre-report
  cancellation at all — stated honestly as unresolved by the text
  rather than resolved definitively.
- Confirmed no explicit "no offset" language exists connecting
  reporting time pay to overtime/meal-rest requirements; derived the
  independence factually from the separate, independently-numbered
  provisions structure (§ 3 overtime, § 5 reporting time, Labor Code
  § 226.7 meal/rest), cross-referencing rather than duplicating the
  existing `mealrest_premium_pay` clause.
- Confirmed the split shift premium is citable and nearby in the same
  wage order: § 4(C), one hour's pay at minimum wage (not the regular
  rate) added to minimum wage for that workday, except when the
  employee resides at the place of employment.

## Honest gaps disclosed

- Did not independently verify that other wage orders (5, 7, etc.)
  phrase reporting-time pay identically to Order 4.
- Did not re-verify Labor Code §§ 510/226.7 in this session — relied
  on the already-verified `mealrest_premium_pay` clause elsewhere in
  the corpus for meal/rest.
- No case law was cited — this is a regulatory topic, and
  CourtListener was not queried.

## Method

Fetched IWC Wage Order No. 4-2001 (PDF) directly from `dir.ca.gov`,
verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical (SHA-256 checksum match), with
independently extracted text also confirmed identical. All 7 citation
quotes programmatically confirmed as exact substrings of the extracted
text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 5(C)/(D) correctly
  flagged; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  title matches ("Policy Statement," "Signature and Receipt")
  confirmed as the corpus's established, accepted generic drafting-
  title-reuse pattern (already used by the meal/rest break policy
  document).
- Field names (`companyName`, `employeeName`) independently confirmed
  to match existing corpus convention exactly; no new fields needed.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Reporting Time Pay — Information Sheet
  (`reporting_time_pay_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the During employment category. No new fields.
- Corpus: 1,379 → 1,387 clauses; 173 → 174 documents. First document
  of wave 31.
