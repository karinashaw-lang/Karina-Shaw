# Real Estate, new document: Common Interest Development Formation — Information Sheet

## Why this document

The corpus's existing HOA/CC&R Disclosure document covers a seller's
buyer-facing disclosure obligations; the HOA Assessment Lien and
Foreclosure document covers lien enforcement mechanics. Neither
touches formation — how a common interest development (CID) comes
into legal existence in the first place. Confirmed by reading both
existing `hoadisc_` and `hoalien_` clause sets before writing anything.

## What this document covers

8 clauses: 3 drafting (introduction/scope, declaration statement,
declarant signature/certification) and 5 authority clauses:

- **`cidform_statutory_definition`** (Civ. Code § 4100) — the closed
  list of four CID types: community apartment project, condominium
  project, planned development, stock cooperative.
- **`cidform_declaration_defined_and_content`** (§ 4135; § 4250(a)-(b))
  — the declaration's definition and required content.
- **`cidform_recording_mechanics`** (§ 4200; § 4285(a)) — what must be
  recorded to actually create the CID.
- **`cidform_mandatory_association`** (§ 4800; § 4150) — the
  association's mandatory formation and what governs it.
- **`cidform_assessment_levy_authority`** (§ 5600(a)-(b)) — the
  formation-stage statutory basis for the power to levy assessments,
  explicitly deferring lien mechanics to the corpus's existing
  `hoalien_lien_creation_and_priority` clause rather than duplicating
  it.

## Genuine corrections and findings

- Confirmed § 4100's closed four-category list exactly as originally
  framed.
- Confirmed § 4135's definition of "declaration" cross-references
  §§ 4250 and 4255 — a genuine finding beyond the original framing:
  required content comes from two sections, not one. Section 4255's
  airport-influence-area/BCDC notice language is narrower and
  conditional, disclosed as an existing add-on rather than folded into
  the main quoted content.
- Confirmed formation occurs on recording of a declaration, a
  condominium plan (if any), and a final/parcel map (if the
  Subdivision Map Act requires one) — § 4200 and § 4285(a).
- Confirmed § 4800's mandatory association requirement (incorporated
  or unincorporated) and § 4150's separate definition of "governing
  documents."
- Confirmed § 5600(a)-(b)'s formation-stage assessment-levy authority
  — the association "shall levy" regular/special assessments
  sufficient to perform its obligations, capped at actual cost —
  distinct from the lien-creation mechanics already covered in the
  corpus's existing `hoalien_*` document.

## Honest gaps disclosed

- Section 4255's airport-influence-area/BCDC notice content, and
  § 4285(b)-(c)/§ 4290's condominium-plan 3-D description and
  consent-certificate signer requirements, are flagged as existing but
  not independently verified/quoted.
- Section 4280 (articles of incorporation's specific Davis-Stirling
  content requirement) was fetched and read but not built into its own
  clause, since §§ 4800/4150 already covered the mandatory-association
  question with cleaner, non-redundant sourcing — mentioned in a `gap`
  field as a further resource.
- Section 5605 (annual assessment-increase percentage caps) was
  deliberately excluded as a later operating-stage constraint, not
  formation-stage authority.
- No case law was used — this document is entirely statutory.

## Method

Fetched Civ. Code §§ 4100, 4135, 4150, 4200, 4250, 4255, 4280, 4285,
4290, 4800, and 5600 directly from `leginfo.legislature.ca.gov`, each
verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical. All citation quotes
programmatically confirmed as exact substrings of the fetched,
normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field name (`propertyAddress`, `cityState`, `dateSigned`)
  independently confirmed to match existing corpus convention. New
  fields: `declarantName`, `projectName`, `cidCategory`, `county`,
  `associationName`, `associationIncorporationStatus`,
  `declarationRecordingInfo`, `conditionsRecordingInfo`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Common Interest Development Formation — Information
  Sheet (`common_interest_development_formation_info_sheet`), 8
  clauses (5 authority + 3 drafting), in the Real Estate category. New
  fields: `declarantName`, `projectName`, `cidCategory`, `county`,
  `associationName`, `associationIncorporationStatus`,
  `declarationRecordingInfo`, `conditionsRecordingInfo`.
- Corpus: 1,603 → 1,611 clauses; 202 → 203 documents.
