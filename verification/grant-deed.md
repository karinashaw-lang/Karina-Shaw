# Real Estate, fifth new document: Grant Deed

## Why this document

The project already has a Quitclaim Deed. A grant deed is legally
distinct: unlike a quitclaim deed (which carries no warranty), a grant
deed's use of the word "grant" implies two specific statutory
covenants under Civil Code § 1113. The research confirmed the
prefix used by the existing Quitclaim Deed clauses is `qcd_`, not
`quitclaim_`, and reused the generic deed-mechanics clauses that
aren't quitclaim-specific — writing requirement, notarial
acknowledgment/recordability, recording effect, PCOR, and documentary
transfer tax — rather than re-authoring them.

## What this document covers

6 new clauses (3 authority + 3 drafting), plus 5 reused `qcd_` clauses
for generic deed mechanics:

- **`grantdeed_statutory_form_and_fee_simple`** (Civ. Code §§ 1092,
  1105) — the statutory grant-deed form and the fee-simple presumption.
- **`grantdeed_implied_covenants`** (Civ. Code § 1113) — the two
  statutory covenants implied from the word "grant": no prior
  conveyance, and no grantor-made encumbrances — narrower than a
  general warranty of title.
- **`grantdeed_after_acquired_title`** (Civ. Code § 1106) — after-
  acquired title passes automatically to the grantee.

## Genuine correction caught during research

The task brief cited § 1105 for the after-acquired-title rule. Direct
review of the statutory text showed that's wrong — § 1105 is the
fee-simple presumption; the actual after-acquired-title rule is
§ 1106. Corrected and disclosed in `grantdeed_after_acquired_title`'s
gap field rather than silently carried forward.

## Method

Fetched Civil Code §§ 1091, 1092, 1105, 1106, 1113 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed
byte-identical. Quotes for §§ 1091, 1092, 1113 cross-checked against
the already-verified quotes in the existing `qcd_` clauses.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 3 new
  authority clauses — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`grantorName`, `granteeName`, `propertyAddress`,
  `legalDescription`, `parcelNumber`) confirmed to match the existing
  Quitclaim Deed document's fields exactly — no new fields needed.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Grant Deed (`grant_deed`), 11 clauses in
  `clauseOrder` (6 new + 5 reused from the Quitclaim Deed document),
  in the Real Estate category. No new fields.
- Corpus: 550 → 556 clauses; 73 → 74 documents.
