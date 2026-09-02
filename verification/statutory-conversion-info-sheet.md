# Business Formation, new document: Statutory Conversion — Information Sheet

## Why this document

The existing Articles of Incorporation, LLC Articles of Organization,
Corporate Dissolution, LLC Dissolution, and Certificate of Amendment
documents don't cover the distinct alternative to dissolving one
entity and forming another: California's statutory conversion
mechanism, which lets an entity continue as the same legal entity
under a different entity type.

## What this document covers

8 clauses: 2 drafting (conversion declaration, authorized signer
certification) and 6 authority clauses:

- **`statconv_general_authorization`** (Corp. Code § 1150; § 17710.01)
  — the separate, entity-type-specific conversion schemes for
  corporations and LLCs.
- **`statconv_continuity_of_entity`** (Corp. Code § 1158(b);
  § 17710.09(b)) — the continuity-of-entity principle.
- **`statconv_approval_requirements`** (Corp. Code § 1152(b);
  § 17710.03(b)) — approval requirements, self-contained within each
  entity type's own conversion chapter.
- **`statconv_filing_requirements`** (Corp. Code § 1157(d)-(e);
  § 17710.06(a)(3)) — the required Secretary of State filing.
- **`statconv_securities_and_interests`** (Corp. Code § 1151(a);
  § 17710.03(a)(3)) — the effect on shares and membership interests.
- **`statconv_tax_treatment`** (Corp. Code § 1158(a); § 17710.09(a))
  — the honest note that tax consequences are a separate
  consideration, grounded in the conversion statutes' own tax carve-
  out language.

## Genuine corrections and findings

- **A significant correction**: there is no single, unified,
  entity-neutral conversion statute. Chapter 11.5 ("Conversions,"
  §§ 1150-1159) sits in Title 1, Division 1 (General Corporation Law)
  — not Division 3 as originally guessed — and only governs
  conversions where a corporation is a party. LLCs have their own,
  separately-codified parallel scheme: Title 2.6 (RULLCA), Article 10
  ("Merger and Conversion," §§ 17710.01-17710.19). Section 1150 itself
  is only the chapter's definitions section, not the authorization.
  Each entity type's own title carries its own self-contained
  conversion scheme — the partnership/LP analogs were not
  independently verified and are disclosed as a scope limitation.
- Corrected an assumption that approval requirements cross-reference
  the merger statute. Each conversion chapter states its own
  self-contained approval rule, which tracks the shape of that entity
  type's separate merger-approval rule but isn't formally incorporated
  by reference. A genuine, non-obvious finding: § 17710.03(b)(2)
  requires unanimous member approval if conversion would expose
  members to personal liability, unless the plan grants universal
  dissenters' rights.
- Refined the filing-content framing: the filing is a combined
  document, but the "approval certification" content is foreign-
  entity-only. For a domestic entity converting into a corporation,
  the "statement of conversion" embedded in the new articles need only
  state name/form/jurisdiction and Secretary of State file number —
  the extra statements confirming the plan was approved apply only
  when the converting entity is foreign (§ 1157(e)(3)).
- A genuine additional finding: Corp. Code §§ 1158(a) and 17710.09(a)
  themselves carve out California's own Personal Income Tax Law,
  Franchise/Income Tax Administration provisions, and Corporation Tax
  Law from the "same entity" continuity fiction — giving a clean,
  statute-grounded hook for the tax-treatment clause without analyzing
  federal tax law. Noted, without resolving, that the two statutes
  cite the excepted Revenue & Taxation Code part inconsistently ("Part
  10.20" vs. "Part 10.2") and quoted each exactly as written rather
  than reconciling it.

## Honest gaps disclosed

- Scope is limited to corporation-LLC conversions; general/limited
  partnership conversion analogs were not independently verified.
- No case law was needed or used — this is a purely statutory topic.

## Method

Fetched Corp. Code §§ 1150-1159 and §§ 17710.01-17710.19 directly
from `leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed
byte-identical. All 12 citation quotes programmatically confirmed as
exact substrings of the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — every clause cites
  one Corp. Code section and one LLC Act section, independent by
  construction; no same-section subsection pairs were used, so the
  "treated as one source" disclosure wasn't needed anywhere; correct
  as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `entityType`, `authorizedSignerName`)
  independently confirmed to match existing corpus convention. New
  fields: `convertedEntityName`, `convertedEntityType`,
  `authorizedSignerTitle`, `requiredApprovalStatement`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Statutory Conversion — Information Sheet
  (`statutory_conversion_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Business Formation category. New fields:
  `convertedEntityName`, `convertedEntityType`, `authorizedSignerTitle`,
  `requiredApprovalStatement`.
- Corpus: 1,363 → 1,371 clauses; 171 → 172 documents.
