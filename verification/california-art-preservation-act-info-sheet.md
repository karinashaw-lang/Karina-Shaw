# Confidentiality & IP, new document: California Art Preservation Act — Moral Rights for Fine Art Information Sheet

## Why this document

Confirmed by grep that "California Art Preservation Act" had zero
hits anywhere in the corpus — a distinct California moral-rights
statute never covered by the existing Copyright Registration/
Assignment documents.

## What this document covers

7 clauses: 2 drafting (declaration/purpose, signature block) and 5
authority clauses:

- **`artpreservation_core_prohibition_and_fine_art_definition`** (Civ.
  Code § 987(c)(1)-(2), (b)(2)) — the core prohibition and the
  statute's narrow "fine art" definition.
- **`artpreservation_authorship_attribution_right`** (§ 987(d)) — the
  artist's right to claim or disclaim authorship.
- **`artpreservation_remedies_and_time_limit`** (§ 987(e), (i)) —
  remedies and the time limit to sue.
- **`artpreservation_building_removal_procedure`** (§ 987(h)(1)-(2))
  — the special notice procedure for a work that has become part of a
  building.
- **`artpreservation_duration_and_waiver`** (§ 987(g)(1), (g)(3)) —
  duration (50 years after the artist's death) and the written-waiver
  requirement.

## Genuine corrections and findings

- Confirmed the statute's "fine art" definition is narrow: an original
  painting, sculpture, drawing, or original glass artwork of
  recognized quality, excluding commercial work-for-hire pieces — it
  does not, on its face, extend to photographs, prints, or other media
  the way one might assume from a general "visual art preservation"
  framing.
- **A detail easy to get wrong**: punitive damages under § 987(e)(3)
  do not go to the artist personally — the court selects a California
  charitable or educational fine-arts organization to receive them.
- Confirmed the building-removal procedure has distinct branches
  (non-removable-without-harm vs. removable, with a separate
  demolition-specific branch not quoted here) sharing a common 90-day
  notice mechanic — quoted only the two branches actually verified
  rather than fabricate quotes for the demolition-specific subsection.
- **A disciplined, explicitly disclosed silence**: § 987's text never
  mentions the federal Visual Artists Rights Act (17 U.S.C. § 106A) or
  addresses preemption/overlap at all. Per the research brief's
  instruction to say so rather than guess, no clause characterizes
  that relationship — disclosed explicitly in every authority clause's
  `gap` field instead of being fabricated or silently omitted.

## Honest gap disclosed

Subdivision (h)(3) (the demolition-specific building-removal branch)
and (h)(4) (confirming the authorship right is unaffected by the
building provisions) are noted as existing but not separately quoted.

## Method

Fetched Civ. Code § 987 directly from `leginfo.legislature.ca.gov` via
two separate HTTP requests with distinct User-Agent headers —
byte-identical statutory text both times. All 9 citation quotes
programmatically confirmed as exact substrings of the verified text.

## Verification

- Citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — every clause
  correctly discloses that all citations are subsections of the single
  statutory section 987, checked twice for consistency rather than
  independently corroborating; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none — no title reuse at all in this delivery).
- Field names (`workDescription`, `workTitle`, `ownerName`,
  `dateSigned`, `cityState`) independently confirmed to match existing
  corpus convention. New field: `artistName`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: California Art Preservation Act — Moral Rights for
  Fine Art Information Sheet
  (`california_art_preservation_act_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Confidentiality & IP category. New
  field: `artistName`.
- Corpus: 1,809 → 1,816 clauses; 231 → 232 documents. First document
  of wave 46.
