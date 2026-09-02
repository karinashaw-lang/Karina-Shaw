# During employment, new document: Piece-Rate Compensation Agreement — Information Sheet

## Why this document

Only two existing clauses mentioned "piece rate" in passing
(`wagestmt_nine_items`, `wagestmt_sample_itemization`, in the general
itemized wage-statement context) — no dedicated document or clause set
covered piece-rate compensation itself.

## What this document covers

8 clauses: 2 drafting (declaration, signature/acknowledgment) and 6
authority clauses:

- **`piecerate_core_separate_compensation`** (Lab. Code
  § 226.2(a)(1)) — the core requirement: rest/recovery periods and
  other nonproductive time must be compensated separately from
  piece-rate earnings.
- **`piecerate_rate_formula`** (Lab. Code § 226.2(a)(2)-(3)) — the
  minimum rate formula for rest and recovery period pay, including the
  semimonthly-payroll true-up wrinkle.
- **`piecerate_nonproductive_time_rate`** (Lab. Code § 226.2(a)(2)) —
  the minimum rate for other nonproductive time and how hours are
  counted.
- **`piecerate_itemization_addon`** (Lab. Code § 226.2(a)(2)) — the
  piece-rate-specific addition to the itemized wage statement, cross-
  referenced to (and distinct from) the corpus's existing general
  nine-items clause.
- **`piecerate_safe_harbor_expired`** (Lab. Code § 226.2, 2016-2020
  version; AB 1513) — the now-expired transitional safe harbor for
  past noncompliance, presented as historical, not a live option.
- **`piecerate_definition_gap`** (Lab. Code § 200(a); § 226.2) — the
  honest disclosure that "piece-rate compensation" has no dedicated
  statutory definition.

## Genuine corrections and findings

- Confirmed "rest and recovery periods" is not itself statutorily
  defined in § 226.2 — only "applicable minimum wage" and "other
  nonproductive time" are defined. Flagged as a real gap rather than
  assuming a definition existed.
- Confirmed the average-hourly-rate formula, including the
  semimonthly-payroll wrinkle under § 226.2(a)(3)(B): semimonthly
  employers may pay minimum wage in the period the rest/recovery
  occurred and true up any shortfall by the next regular payday.
- A significant correction: the safe harbor was never part of the
  *current* § 226.2. It lived in the *original* 2016-2020 version of
  § 226.2 (enacted by AB 1513, and itself repealed by its own terms
  effective January 1, 2021), which was replaced by the current,
  shorter version with no cure mechanism at all. Confirmed the actual
  deadlines: election notice by July 1, 2016, completed payments by
  December 15, 2016, covering back pay for July 1, 2012-December 31,
  2015, using either actual sums plus interest or a flat 4%-of-gross-
  earnings formula.
- Confirmed no statutory definition of "piece-rate compensation"
  itself exists — the closest anchor is § 200(a)'s general "wages"
  definition, which lists "piece" as one of several calculation
  methods (time/task/piece/commission).
- Confirmed the itemization add-on (§ 226.2(a)(2)) is distinct from
  the corpus's existing general nine-items wage-statement clause,
  cross-referenced by name in the `gap` field rather than duplicated.

## Honest gaps disclosed

- Whether DLSE guidance or an IWC wage order supplies an "official"
  definition of piece-rate compensation or rest/recovery periods was
  not checked — only the two primary statutory sources were searched.
- The safe-harbor clause does not restate every ancillary condition of
  the original provision (e.g., statute-of-limitations tolling,
  carved-out pre-existing claims) — only the core payment/deadline
  mechanics needed to explain why it is now historical.
- No case law was researched — this is a purely statutory topic.

## Method

Fetched Cal. Labor Code §§ 226.2 (current text) and 200(a), and AB
1513 (Stats. 2015, ch. 754) enacted bill text, directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed
byte-identical apart from dynamic page-state tokens. All citation
quotes programmatically confirmed as exact substrings of the verified
text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Signature and Acknowledgment") confirmed as the
  corpus's established, accepted generic drafting-title-reuse pattern.
- Field names (`companyName`, `employeeName`, `effectiveDate`,
  `signatureDate`, `signatureCity`, `authorizedSignerName`)
  independently confirmed to match existing corpus convention. New
  fields: `pieceRateAmount`, `unitOfProductionDescription`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Piece-Rate Compensation Agreement — Information Sheet
  (`piece_rate_compensation_agreement_info_sheet`), 8 clauses (6
  authority + 2 drafting), in the During employment category. New
  fields: `pieceRateAmount`, `unitOfProductionDescription`.
- Corpus: 1,211 → 1,219 clauses; 153 → 154 documents. First document
  of wave 26.
