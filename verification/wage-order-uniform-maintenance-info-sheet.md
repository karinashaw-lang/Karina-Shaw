# During employment, new document: Wage Order Uniform Requirement — Information Sheet

## Why this document

Confirmed by grep that "uniform maintenance" and similar phrasing had
zero hits anywhere. Read the Employer's Duty to Reimburse Business
Expenses, Meal and Rest Break Policy, and Suitable Seating Requirement
documents in full — none cite the Wage Order's uniform-specific
provision (commonly section 9, "Uniforms and Equipment"). Third of
wave 74's four documents.

## What this document covers

5 clauses: 2 drafting (intro, signature/acknowledgment) and 3 authority
clauses, citing IWC Wage Order No. 4-2001 §§ 1(A), 1(B), 9(A), Wage
Order No. 7-2001 § 9(A) (confirmed identical), Wage Order No. 16-2001
§ 8(A) (confirmed a reworded/renumbered near-equivalent), the DLSE
Enforcement Manual § 45.5.5, and *Dep't of Indus. Relations v. UI Video
Stores, Inc.* (1997) 55 Cal.App.4th 1084:

- **`uniformmaint_obligation`** (Wage Order 4-2001 § 9(A)) — the
  provide-and-maintain duty, confirmed to recur word-for-word in Wage
  Order 7-2001 and in a reworded/renumbered form in Wage Order 16-2001.
- **`uniformmaint_definition`** (Wage Order 4-2001 § 9(A), DLSE Manual
  § 45.5.5) — **the central finding**: the Wage Order's own
  "distinctive design or color" definition of "uniform," and the DLSE's
  own enforcement-policy line distinguishing a required uniform from
  ordinary basic wardrobe items (white shirt, dark pants) an employer
  can specify without having to furnish.
- **`uniformmaint_scope`** (Wage Order 4-2001 §§ 1(A), 1(B)) — the
  administrative/executive/professional exemption and the
  public-employee carve-out, confirmed absent from the uniform
  requirement in all three wage orders actually checked (Nos. 4, 7,
  and 16 — no claim made about the other 14).

## Genuine corrections and findings

- **The central finding**: confirmed the Wage Order's "uniform"
  definition turns on distinctive design/color, not on whether an
  employer simply calls something "required" — an ordinary basic
  wardrobe item of unspecified design doesn't trigger the provide-
  and-maintain duty, verified from the Wage Order's own text and DLSE's
  own enforcement-policy language rather than assumed from the term's
  plain-English sound.
- Confirmed the requirement is NOT section-number-uniform across wage
  orders — Wage Order 16-2001 numbers the identical substantive rule
  as its own section 8, not section 9, with reordered wording — checked
  directly rather than assumed consistent.
- Confirmed no dollar formula or fixed calculation method for
  "maintenance" cost appears in any source fetched — the clause states
  that a duty exists without asserting how its cost is calculated in a
  specific case.
- Confirmed the "basic wardrobe" line is DLSE agency-interpretive
  guidance (attributed by the Manual itself to the IWC's 1980 Statement
  of Basis, not independently fetched) — correctly disclosed as a
  distinct source type from the Wage Order's own codified text, not
  conflated with it.
- Confirmed the uniform requirement is absent from the public-employee
  carve-out list in all three wage orders checked, distinguishing it
  from provisions that do continue to apply to public employees.

## Honest gap disclosed

Only 3 of California's 17 industry/occupation wage orders were checked
(Nos. 4, 7, and 16); no claim is made about the other 14. The original
1980 IWC Statement of Basis was not independently fetched — only the
DLSE Manual's own reproduction of it as current enforcement policy.
The underlying DLSE opinion letter referenced by the Manual (discussing
a "tropical shirt" example) was not independently fetched or verified.
This document does not determine whether any specific required garment
meets the distinctive-design-or-color test in a given case — that
remains fact-specific. *In re Work Uniform Cases* (2005) 133
Cal.App.4th 328 was read but not formally cited with a verified quote;
it is noted only as further confirmation that public-sector uniform-
cost coverage is a separate question from the private-sector Wage
Order rule, not extended to any specific public employer.

## Method

Fetched IWC Wage Order Nos. 4-2001, 7-2001, and 16-2001, and the DLSE
Enforcement Policies and Interpretations Manual, as PDFs from
`dir.ca.gov` via curl (through the sandboxed proxy), each fetched
twice with distinct User-Agent strings, confirmed byte-identical PDF
content. *Dep't of Indus. Relations v. UI Video Stores, Inc.* was read
directly via CourtListener. All 6 citation quotes across the 3
authority clauses programmatically confirmed as exact, whitespace-
normalized substrings of the extracted source text. Independently
re-verified during integration review: fetched Wage Order 4-2001, Wage
Order 7-2001, and the DLSE Manual PDFs directly and extracted their
text via `pypdf` — all 4 Wage Order quotes confirmed as exact
substrings; the DLSE Manual's "sufficiently flexible" quote initially
appeared not to match due to a PDF-extraction artifact in this specific
PDF's embedded font (spurious internal spaces splitting words like
"sufficiently" and "Statement"), resolved by confirming the quote
matches exactly once whitespace is fully collapsed on both sides — the
DLSE Manual's second quote matched cleanly without this issue. The
*UI Video Stores* case-law quote (identical text to the confirmed Wage
Order 7-2001 language) was not independently re-fetched during this
review because CourtListener's rate limit was reached this session.

## Verification

- Wage Order and DLSE Manual PDFs fetched twice independently by the
  research agent with distinct User-Agent strings, plus a third
  independent fetch and extraction during integration review; all Wage
  Order quotes confirmed clean, and the one apparent DLSE Manual
  mismatch resolved as a extraction-tool artifact, not a real
  discrepancy.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — Wage Order 4-2001
  §§ 1(A)/1(B) correctly disclosed as subsections of one section; the
  two DLSE Manual § 45.5.5 quotes correctly disclosed as consecutive
  sentences of the same subsection, not independent of each other;
  the Wage Order text and the DLSE Manual, and the Wage Order text and
  the case-law citation, correctly disclosed as independent sources;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`employeeName`, `companyName`) independently confirmed
  to match existing corpus field definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: Wage Order Uniform Requirement — Information Sheet
  (`wage_order_uniform_maintenance_info_sheet`), 5 clauses (3 authority
  + 2 drafting), in the During employment category. No new fields.
- Corpus: 2,642 → 2,647 clauses; 345 → 346 documents. Third document
  of wave 74.
