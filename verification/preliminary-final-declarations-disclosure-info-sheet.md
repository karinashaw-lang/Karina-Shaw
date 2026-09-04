# Family Law, new document: Preliminary and Final Declarations of Disclosure — Information Sheet

## Why this document

This document deepens a gap the corpus explicitly flagged on itself:
the existing `bifurcation_disclosure_requirement` clause (in the
Bifurcation of Marital Status document) covers only the narrow
§ 2337(b) timing rule tying a preliminary declaration to a
bifurcation motion, and its own `gap` field states plainly that "the
broader preliminary-declaration-of-disclosure requirements that apply
to dissolution proceedings generally... were not [independently
researched]." Read the existing Dissolution Petition document in full
— confirmed it covers grounds/residency/waiting-period/property
division only, with no disclosure content at all. Third of wave 69's
four documents.

## What this document covers

7 clauses: 2 drafting (declaration, signature/acknowledgment) and 5
authority clauses, citing Cal. Fam. Code § 2100(a)-(c), § 2103,
§ 2104(a), (c), (f), § 2105(a), (b), (d), and § 2107(c)-(d):

- **`disclosure_legislative_purpose`** (§ 2100(a)-(c)) — the
  Legislature's stated policy and each party's continuing duty to
  update disclosure.
- **`disclosure_dual_requirement`** (§ 2103) — the requirement of two
  separate, sequential disclosures (preliminary and final).
- **`disclosure_preliminary_content_timing`** (§ 2104(a), (c), (f)) —
  the preliminary declaration's perjury-execution and two-year
  tax-return content requirements, the particularity standard, and
  the service deadlines.
- **`disclosure_final_content_timing_waiver`** (§ 2105(a), (b), (d))
  — **a key finding**: the final declaration's content and timing,
  plus the mutual-waiver mechanism and its five required
  representations, quoted precisely rather than summarized (this is
  exactly the kind of procedural mechanism where imprecision would
  mislead).
- **`disclosure_noncompliance_consequences`** (§ 2107(c)-(d)) — the
  mandatory monetary-sanctions remedy and the mandatory judgment
  set-aside consequence (with its narrower exception where a
  voluntary waiver of receipt was court-granted).

## Genuine corrections and findings

- **The central finding**: confirmed the mutual-waiver mechanism for
  the final declaration requires all five specific statutory
  representations (compliance with § 2104, exchange of current income/
  expense declarations, compliance with the ongoing § 2102 duty, that
  the waiver is knowing/intelligent/voluntary, and that the waiver
  doesn't limit the underlying disclosure obligations) — quoted in
  full rather than summarized, since a partial list would misstate a
  precise statutory requirement.
- Confirmed the set-aside consequence for noncompliance is mandatory
  ("the court shall set aside the judgment"), not discretionary,
  subject to a narrower carve-out tied specifically to a
  court-granted voluntary waiver of receipt.
- Confirmed the sanctions remedy is likewise mandatory ("the court
  shall... impose money sanctions"), including mandatory attorney's
  fees/costs absent a substantial-justification or unjust-imposition
  finding.
- Confirmed the statute's own continuing-duty language (immediate,
  full, accurate updating for material changes) as part of the
  Legislature's stated purpose, not just a background policy
  statement.

## Honest gap disclosed

Family Code § 2102 (the ongoing augmentation duty cross-referenced by
the final-declaration waiver's third representation) is named in body
narrative but not independently quoted or cited as its own source.
Sections 2104(b), (d)-(e), 2105(c), 2107(a)-(b), (e), and 2108-2113
were fetched or read as part of the same primary-source text but not
independently double-User-Agent-verified to citation grade — omitted
entirely (§§ 2108-2113) or summarized without separate citation
(§§ 2104(b),(d)-(e); 2105(c); 2107(a)-(b),(e)) rather than guessed at.
Section 2110's default-judgment procedure was not independently
re-verified.

## Method

Fetched Cal. Fam. Code §§ 2100, 2103, 2104, 2105, and 2107 from
`leginfo.legislature.ca.gov` via curl (through the sandboxed proxy),
each section fetched twice with distinct User-Agent strings, confirmed
byte-identical after whitespace normalization. All 8 citation quotes
across the 5 authority clauses programmatically confirmed as exact
substrings of the confirmed text.

## Verification

- All five statutory sections fetched twice independently with
  distinct User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- **Caught and fixed one field-mislabeling issue** during my own
  integration validation: the `marriageDate` field was defined with
  the `premarital_agreement` document's "Anticipated marriage date"
  label/placeholder (future-tense, pre-wedding context), rather than
  the "Date of marriage" label every other dissolution-context
  document in this corpus uses for the same field id. Corrected before
  committing.
- Checked source-independence disclosure logic — all multi-subsection
  citations (§ 2100(a)-(c), § 2104's three subdivisions, § 2105's
  three subdivisions, § 2107's two subdivisions) correctly disclosed
  as parts of one statutory section each, not independent of one
  another; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none);
  the reused titles "Declaration of Parties and Purpose of This
  Information Sheet" and "Signature and Acknowledgment — Not a Court
  Filing" match the established Family Law boilerplate pattern already
  used across six other documents, not a substantive duplicate.
- Field names (`party1Name`, `party2Name`, `marriageDate`,
  `countyOfFiling`, `dateSigned`, `cityState`) independently confirmed
  to match existing corpus field definitions (after the label fix).
  No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: Preliminary and Final Declarations of Disclosure —
  Information Sheet
  (`preliminary_final_declarations_disclosure_info_sheet`), 7 clauses
  (5 authority + 2 drafting), in the Family Law category. No new
  fields; one existing field's label corrected for this document.
- Corpus: 2,508 → 2,515 clauses; 325 → 326 documents. Third document
  of wave 69.
