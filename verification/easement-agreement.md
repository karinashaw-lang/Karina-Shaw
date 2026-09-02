# Real Estate, new document: Easement Agreement

## Why this document

The existing Grant Deed, Quitclaim Deed, and HOA/CC&R Disclosure
documents cover full title transfer or HOA disclosure, not a limited
grant of a right to use another's land for a stated purpose. This
document covers that genuinely distinct area: express easements under
California's statutory servitudes scheme.

## What this document covers

8 clauses: 3 drafting (grant/purpose/scope, maintenance/duration,
signatures/notarization/recording) and 5 authority clauses:

- **`easement_statutory_servitudes_basis`** (Civ. Code § 801; § 802) —
  the statutory servitudes list, and the code's own words for what
  became known as "appurtenant" (§ 801: attached to land) vs. "in
  gross" (§ 802: granted without attachment) easements.
- **`easement_extent_of_grant`** (Civ. Code § 806) — the extent of an
  easement is fixed by the terms of the grant.
- **`easement_interpretation_and_reservation`** (Civ. Code § 1069) —
  the general grant-interpretation rule (favor the grantee, except a
  reservation favors the grantor) applied to an easement grant.
- **`easement_recording_constructive_notice`** (Civ. Code § 1213;
  § 1214) — constructive notice on recording and California's
  race-notice rule.
- **`easement_runs_with_land_on_transfer`** (Civ. Code § 1104) — an
  appurtenant easement passes automatically on transfer of the
  benefited property.

## Genuine corrections caught during research

- The task brief hedged on whether the appurtenant/in-gross
  distinction is codified or purely case law. Direct review confirms
  it is genuinely codified: § 801 (attached to land) and § 802
  (granted without attachment) together are the statutory basis, using
  the code's own words rather than the modern shorthand terminology,
  which appears in neither section.
- A found bonus authority not in the task brief: Civ. Code § 1104
  ("A transfer of real property passes all easements attached
  thereto") — useful, directly on-point authority for the appurtenant
  easement's "runs with the land" behavior, added as its own clause.
- § 802's quoted text preserves an unusual 19th-century publisher
  markup artifact ("Section Eight Hundred and Two... land:One—") —
  disclosed transparently in the gap field as part of the verified
  statutory text rather than cleaned up or treated as adding
  substantive meaning.

## Honest gap disclosed

The prescriptive-easement elements (open, notorious, continuous,
hostile use) could not be verified via a real CourtListener case —
every search attempt returned an HTTP 429 rate-limit error. No case
citation was fabricated; `easement_recording_constructive_notice`'s
gap field discloses this and the document is scoped explicitly to
express, written easements only — it does not state prescriptive-
easement law.

## Method

Fetched Civ. Code §§ 801, 802, 806, 1069, 1213, 1214, and 1104
directly from `leginfo.legislature.ca.gov`, each verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-identical after whitespace normalization. All citation quotes
verified as exact substrings of the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 5 authority
  clauses — no clause cites the same statutory section twice; the two
  multi-citation clauses (§§ 801/802; §§ 1213/1214) each explicitly
  disclose they are genuinely separate sections treated as two
  independent sources.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`grantorName`, `granteeName`) confirmed to match the
  existing Grant Deed and Quitclaim Deed documents' `fields` arrays
  exactly. New fields: `servientPropertyAddress`,
  `servientLegalDescription`, `dominantPropertyAddress`,
  `dominantLegalDescription`, `easementPurpose`,
  `easementLocationDescription`, `easementDuration`,
  `maintenanceResponsibility`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Easement Agreement (`easement_agreement`), 8 clauses
  (5 authority + 3 drafting), in the Real Estate category. New fields:
  `servientPropertyAddress`, `servientLegalDescription`,
  `dominantPropertyAddress`, `dominantLegalDescription`,
  `easementPurpose`, `easementLocationDescription`,
  `easementDuration`, `maintenanceResponsibility`.
- Corpus: 806 → 814 clauses; 107 → 108 documents.
