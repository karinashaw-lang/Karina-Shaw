# Real Estate, new document: Property Tax Parent-Child Transfer Exclusion (Proposition 19) — Information Sheet

## Why this document

Confirmed by grep that "Proposition 19" and parent-child reassessment
content had zero hits anywhere in the corpus. Distinct from the
existing 1031 Exchange (capital gains deferral) and Quitclaim Deed
(the deed instrument itself) documents.

## What this document covers

8 clauses: 2 drafting (transfer/claim declaration, signature/
certification) and 6 authority clauses:

- **`prop19_effective_date_transition`** (Cal. Const. art. XIII A,
  § 2.1(d); Rev. & Tax. Code § 63.2(a)) — the effective date and
  transition from the former exclusion.
- **`prop19_principal_residence_requirement`** (Rev. & Tax. Code
  § 63.2(a)(1)(A)-(C); Cal. Const. art. XIII A, § 2.1(c)(5); former
  § 2(h)(1) for contrast) — the principal-residence and exemption-
  filing requirement.
- **`prop19_exclusion_formula`** (§ 63.2(d); art. XIII A, § 2.1(c)(1)
  (B)) — the current taxable-value formula.
- **`prop19_inflation_adjustment`** (art. XIII A, § 2.1(c)(4)) — the
  biennial inflation adjustment of the $1,000,000 figure.
- **`prop19_family_farm_and_nonresidence_transfers`** (§ 63.2(a)(2);
  art. XIII A, § 2.1(a)(2)) — the family farm exclusion and the end
  of the general non-residence-property exclusion.
- **`prop19_grandparent_grandchild_condition`** (§ 63.2(a)(1); art.
  XIII A, § 2.1(c)(2)) — the deceased-parent eligibility condition.

## Genuine corrections and findings

- **A major, session-critical correction**: Revenue and Taxation Code
  § 63.1 is NOT the current Prop 19 statute — it's the pre-2021
  statute, still on the books verbatim with the old $1M/no-residency
  rule, never rewritten for Prop 19. The actual implementing statute
  is a separate, newly added section, § 63.2. Critically, § 63.1's own
  text contains no "before Feb 16, 2021" cutoff — that limit exists
  only because Prop 19 separately made § 63.1's constitutional
  authorization (former art. XIII A § 2(h)) inoperative for later
  transfers via new § 2.1(d). A drafter who fetched only § 63.1 (as
  its title/description would suggest) would have unknowingly
  reproduced obsolete law.
- Confirmed the exact two-branch taxable-value formula from both the
  statute and the constitution, disclosing a genuine terminology
  difference between them ("fair market value" in the statute vs.
  "assessed value" in the constitutional text) without resolving
  whether that wording difference produces a different outcome.
- Confirmed the $1,000,000 figure's biennial inflation adjustment
  appears only in the Constitution (art. XIII A § 2.1(c)(4)) — the
  implementing statute § 63.2(d) states a flat, non-adjusted
  $1,000,000 with no cross-reference, flagged as single-sourced.
- Confirmed the grandparent-grandchild deceased-parent condition
  expressly excludes stepparents in the statute's wording, but the
  quoted constitutional passage doesn't repeat that stepparent
  carve-out in that specific spot — flagged as an unresolved wording
  difference rather than harmonized by assumption.

## Honest gap disclosed

The current, adjusted dollar figure for the $1,000,000 exclusion
amount for any specific year was not independently verified — the
document states the adjustment mechanism exists without stating a
current computed figure.

## Method

Fetched Rev. & Tax. Code § 63.2 and Cal. Const. art. XIII A §§ 2 and
2.1 directly from `leginfo.legislature.ca.gov`, each verified against
a second, independent fetch — confirmed consistent. All 12 citation
quotes programmatically confirmed as exact substrings of the fetched
text.

## Verification

- All citations fetched twice independently; confirmed clean on
  integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are genuinely independent (statute vs.
  constitution) versus a single source (the inflation-adjustment
  clause); correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  accepted generic title reuse ("Signature and Certification") —
  consistent with the corpus-wide pattern.
- Field names (`propertyAddress`, `parcelNumber`, `transferorName`,
  `dateSigned`, `cityState`) independently confirmed to match existing
  corpus convention. New fields: `transfereeName`,
  `relationshipToTransferor`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Property Tax Parent-Child Transfer Exclusion
  (Proposition 19) — Information Sheet
  (`prop19_parent_child_transfer_exclusion_info_sheet`), 8 clauses (6
  authority + 2 drafting), in the Real Estate category. New fields:
  `transfereeName`, `relationshipToTransferor`.
- Corpus: 1,854 → 1,862 clauses; 237 → 238 documents. Third document
  of wave 47.
