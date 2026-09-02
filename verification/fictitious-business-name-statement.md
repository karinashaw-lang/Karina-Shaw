# Business Formation, new document: Fictitious Business Name (DBA) Statement — Information Sheet

## Why this document

The existing Articles of Incorporation, LLC Articles of Organization,
and Statement of Information documents cover state-level Secretary of
State filings (formation and periodic compliance). This document
covers a genuinely distinct, county-level filing requirement: a
fictitious business name ("DBA") statement.

## What this document covers

8 clauses: 1 drafting (purpose/scope) and 7 authority clauses:

- **`fbn_definition`** (Bus. & Prof. Code § 17900(a)(1), (b), (c)) —
  the statutory definition by registrant type (individual,
  partnership, corporation, LLC).
- **`fbn_filing_requirement`** (Bus. & Prof. Code § 17910(a); § 17915)
  — the 40-day filing deadline and county-level (not state-level)
  place of filing.
- **`fbn_required_content`** (Bus. & Prof. Code § 17913(a), (b)(3)) —
  the prescribed statutory form content and the false-declaration
  misdemeanor.
- **`fbn_publication_requirement`** (Bus. & Prof. Code § 17917(a),
  (d); Gov. Code § 6064) — the newspaper publication requirement,
  correcting an assumption about where the "once a week for four
  weeks" rule actually lives.
- **`fbn_expiration_and_refiling`** (Bus. & Prof. Code § 17920(a),
  (b), (c); § 17921) — the 5-year expiration, confirmed exactly as
  assumed, plus earlier-expiration triggers.
- **`fbn_no_exclusive_right`** (Bus. & Prof. Code § 17913(a); § 14411)
  — filing creates no general exclusive right, but does create a
  narrow, county-limited rebuttable presumption.
- **`fbn_noncompliance_consequences`** (Bus. & Prof. Code § 17918;
  § 17930) — the civil litigation bar and the separate criminal
  misdemeanor.

## Genuine corrections caught during research

- The task brief assumed § 17900 has roughly three registrant
  categories. Direct review shows it's more granular — five separately
  worded categories, including carve-outs for limited partnerships and
  registered LLPs that separately register with the Secretary of
  State, plus the statute's own express purpose statement.
- The task brief assumed the publication frequency ("once a week for
  four weeks") is stated directly in Bus. & Prof. Code Chapter 5.
  Direct review shows § 17917(a) doesn't state it at all — it
  incorporates Gov. Code § 6064 by reference, which is the actual
  source of that requirement.
- The task brief asked whether filing confers "no exclusive right at
  all." Direct review shows the answer is more nuanced: the
  prescribed form's printed notice says filing doesn't authorize
  infringing use, but a separate statute (§ 14411) creates a real,
  narrow, rebuttable presumption of exclusive use as a trade name —
  limited to the filing county, limited to the first-to-file
  registrant, and limited to a registrant actually operating there.
- Confirmed the civil consequence exactly as the task brief suspected:
  a noncompliant filer can't maintain a court action on a
  fictitious-name contract or transaction until the statement is
  executed, filed, and published — with one statutory carve-out.

## Honest gaps disclosed

- The noncompliance clause discloses that no case law was
  independently verified interpreting how courts apply the § 17918
  litigation bar in practice (e.g., whether or how it can be cured
  mid-litigation).
- The no-exclusive-right clause discloses that federal trademark law
  and California common-law trademark doctrine were not independently
  researched — only the fact that such rights can exist independently
  of this filing is stated, not their scope.
- Trusts and limited partnerships as distinct registrant categories
  (present in the statutory text) were not separately collected as
  document fields, since they were outside the requested scope.

## Method

Fetched Bus. & Prof. Code §§ 17900, 17910, 17913, 17915, 17917,
17918, 17920, 17921, 17930, 14411, and Gov. Code § 6064 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical
(excluding the dynamic per-request ViewState token). All 20 quotes
programmatically re-confirmed as exact substrings of the verified
text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 7 authority
  clauses — every same-section clause carries an explicit "treated as
  one source, not independent" disclosure sentence — correct as
  delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`entityType`, `principalOfficeAddress`) confirmed to
  match the existing Statement of Information document's `fields`
  array exactly. New fields: `fictitiousBusinessName`,
  `registrantName`, `filingCounty`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Fictitious Business Name (DBA) Statement — Information
  Sheet (`fictitious_business_name_statement`), 8 clauses (7 authority
  + 1 drafting), in the Business Formation category. New fields:
  `fictitiousBusinessName`, `registrantName`, `filingCounty`.
- Corpus: 903 → 911 clauses; 119 → 120 documents.
