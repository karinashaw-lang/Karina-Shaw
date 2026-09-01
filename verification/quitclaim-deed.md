# Real Estate, fifth document: Quitclaim Deed

## Why this document

Continuing the "go as deep as humanely possible" build-out. A quitclaim
deed transfers whatever interest a grantor has in real property,
without any warranty of title — commonly used between family members,
to clear a title cloud, or to add or remove a spouse from title.
Sourced from California Civil Code §§ 1091-1095, 1113, 1213-1214,
Government Code §§ 27201, 27287, Revenue & Taxation Code §§ 63, 480.3,
11911, 11927, 11930, and Family Code § 852.

## What this document covers

10 clauses: 3 drafting (parties/property declaration, legal description
reference, and signature/notarization) and 7 authority clauses:

- **`qcd_no_warranty_title`** (§§ 1092, 1113) — what a quitclaim deed
  actually conveys, built honestly from the statutory grant-deed form
  and the rule that title covenants are implied only from the word
  "grant" — since a quitclaim deed doesn't use that word.
- **`qcd_execution_requirements`** (§§ 1091, 1095) — the writing
  requirement and attorney-in-fact execution formality.
- **`qcd_acknowledgment_recordability`** (Gov't Code §§ 27287, 27201) —
  the notarization requirement specific to a quitclaim deed's
  recordability, and the recorder's duty to accept a conforming
  instrument.
- **`qcd_recording_effect`** (§§ 1213, 1214) — that a deed is valid
  between the parties unrecorded, and California's race-notice
  recording rule.
- **`qcd_pcor_requirement`** (Rev. & Tax. Code §§ 480.3, 63) — the
  Preliminary Change of Ownership Report mechanic and the interspousal
  exclusion from "change in ownership."
- **`qcd_documentary_transfer_tax`** (Rev. & Tax. Code §§ 11911, 11927,
  11930) — the county (and city) documentary transfer tax formula and
  its marital-dissolution and gift exemptions.
- **`qcd_interspousal_transmutation`** (Family Code § 852) — the
  transmutation formality that applies when this deed is used to add or
  remove a spouse from title.

## Genuine correction caught during research

The task brief assumed Civil Code § 1092 is "the statutory quitclaim
deed form." It is not — § 1092's text is the statutory **grant** deed
form; the word "quitclaim" does not appear in that section or anywhere
in the Civil Code's mode-of-transfer article. California has no
separate codified quitclaim form. Rather than accept the brief's
assumption, the research checked directly and built
`qcd_no_warranty_title` honestly from § 1092 (the grant form) plus
§ 1113 (covenants implied only from the word "grant"), disclosing this
correction directly in the clause's gap field.

## Method

Fetched all 13 candidate statutory sections directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked source-independence disclosure logic across all 7 authority
  clauses — correct throughout (each clause cites genuinely distinct
  statutory sections).
- Checked for duplicate clause IDs and titles against the full corpus
  (none).

## Net changes

- New document: Quitclaim Deed (`quitclaim_deed`), 10 clauses (7
  authority + 3 drafting), in the Real Estate category.
- Corpus: 504 → 514 clauses; 68 → 69 documents.

## Real Estate category summary

Real Estate now has five documents: Residential Lease Agreement,
Residential Purchase Agreement, Notice to Pay Rent or Quit, Security
Deposit Itemization, and Quitclaim Deed.
