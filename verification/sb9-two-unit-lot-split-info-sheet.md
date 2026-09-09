# Real Estate, new document: SB 9 Two-Unit Housing Development and Urban Lot Split — Information Sheet

## Why this document

Wave 150 (one of four parallel, isolated worktree tasks, continuing the
round-robin covering Confidentiality & IP, Ending Employment, Business
Formation, and Real Estate). Read the full list of the corpus's 78
existing Real Estate documents from `data/documents.json` before
picking a topic. The task's suggested examples (Ellis Act, AB
1482/just-cause eviction, bed bug disclosure) are already covered
(`ellis_act_info_sheet`, `just_cause_eviction_rent_cap_info_sheet`,
`bed_bug_disclosure_inspection_info_sheet`). Grepped the corpus for
"65852.21," "66411.7," "SB 9," "SB9," "lot split," and "urban lot
split" — zero hits anywhere. Confirmed the existing
`adu_jadu_ministerial_approval_info_sheet` document covers a distinct
statute (Gov. Code ch. 13, ADUs/JADUs), and its own § 65852.21(f)-cited
cross-reference does not restate that section's substance. Confirmed
`subdivision_map_act_info_sheet` and `density_bonus_law_info_sheet`
cover different, more general statutes with no SB 9-specific content.
Selected SB 9 (Gov. Code §§ 65852.21 and 66411.7) — California's
statewide statutes requiring ministerial local-agency approval of
(1) a two-unit housing development and (2) an urban lot split on a
single-family-zoned parcel — as a genuinely uncovered, well-defined,
checkable topic.

## What this document covers

11 clauses: 1 drafting (project identification) and 10 authority
clauses, citing Cal. Gov. Code §§ 65852.21(a), (a)(1), (a)(3),
(a)(3)(C), (a)(4), (a)(5)(A), (b)(2)(A), (b)(2)(B)(ii), (c)(1), (h)(1),
(e), (f), (k), and 66411.7(a), (a)(1), (a)(2)(A), (a)(3)(A),
(a)(3)(D)(iv), (a)(3)(G), (a)(3)(H), (b)(1)(A)-(B), (b)(3), (c)(2),
(c)(3)(B), (g)(1), (g)(3), (h), (i), (j)(1), (n):

- **`sb9_two_unit_ministerial_approval`** (§ 65852.21(a), (a)(1)) — the
  ministerial-review mandate (no discretionary review or hearing) for a
  qualifying two-unit development, and the urbanized-area/urban-cluster
  location requirement.
- **`sb9_two_unit_exclusions`** (§ 65852.21(a)(3), (a)(3)(C), (a)(4),
  (a)(5)(A)) — the protected-housing exclusions (rent-restricted,
  rent-controlled, tenant-occupied within 3 years), the Ellis Act
  15-year lookback exclusion, and the historic-property exclusion.
- **`sb9_two_unit_development_standards`** (§ 65852.21(b)(2)(A),
  (b)(2)(B)(ii)) — the 800-square-foot floor a local ordinance cannot
  undercut, and the 4-foot setback cap (with a no-setback exception for
  existing structures).
- **`sb9_two_unit_parking_timeline_denial`** (§ 65852.21(c)(1), (h)(1))
  — the 1-space-per-unit parking cap with transit/car-share exemptions,
  the 60-day deemed-approval timeline, and (in the body, cross-
  referenced but not independently quoted) the health/safety denial
  ground.
- **`sb9_two_unit_rental_term_and_adu_restriction`** (§ 65852.21(e),
  (f)) — the 30-day minimum rental term, and the rule that combining
  the two-unit and urban-lot-split authorities on one parcel relieves a
  local agency of also permitting an ADU/JADU there.
- **`sb9_urban_lot_split_requirements`** (§ 66411.7(a), (a)(1), (a)(2)(A),
  (a)(3)(A)) — the ministerial-approval mandate, the two-parcels/
  approximately-equal-area/40%-minimum-share rule, the 1,200-square-foot
  minimum lot size (absent a local ordinance setting a smaller floor),
  and the single-family-zone requirement.
- **`sb9_urban_lot_split_exclusions`** (§ 66411.7(a)(3)(D)(iv), (a)(3)(G),
  (a)(3)(H)) — the shared tenant-occupancy exclusion and the
  urban-lot-split-specific prior-use restrictions (a parcel already
  created by a lot split cannot be split again; an owner cannot use the
  authority twice on adjacent parcels).
- **`sb9_urban_lot_split_owner_occupancy`** (§ 66411.7(g)(1), (g)(3)) —
  **a central finding**: the 3-year owner-occupancy affidavit
  requirement, its community-land-trust/qualified-nonprofit exemption,
  and the bar on any additional owner-occupancy standard.
- **`sb9_urban_lot_split_standards_timeline_unit_cap`**
  (§ 66411.7(b)(1)(A)-(B), (b)(3), (c)(2), (c)(3)(B), (h), (i), (j)(1)) —
  the parallel 800-sq-ft/setback standards, the no-dedication/no-offsite-
  improvement rule, the 60-day timeline, the 30-day minimum rental term,
  the no-nonconforming-correction rule, and **a second key finding**:
  the combined 2-units-per-resulting-parcel cap that overrides even the
  two-unit-development and density-bonus statutes.
- **`sb9_coastal_act_preserved`** (§ 65852.21(k), § 66411.7(n)) — the
  express, identically-worded preservation of the California Coastal
  Act in both statutes, with the one carved-out exception (no public
  hearing required for a coastal development permit application under
  these sections).

## Genuine corrections and findings

- **Both statutes are very recently amended**: the fetched text of
  § 65852.21 and § 66411.7 both carry the trailer "(Amended by Stats.
  2026, Ch. 56, Sec. 7/9. (SB 1426) Effective June 30, 2026.)" — already
  in effect as of this document's checked date (2026-09-09). No older,
  pre-amendment version was substituted or relied on.
- **Confirmed the two statutes' exclusion categories, development
  standards, and timelines are near-identical in structure** (protected
  housing, historic property, 800 sq ft floor, 4-foot setback cap,
  60-day deemed approval) but are independently numbered, separately
  amended sections — each clause's `gap` field discloses which
  citations are subdivisions of the same section versus independent
  sections, and `sb9_urban_lot_split_exclusions` deliberately does not
  re-quote the parallel historic-property exclusion already sourced in
  `sb9_two_unit_exclusions`, to avoid duplicating content already
  verified elsewhere in this document.
- **A key finding**: the urban-lot-split owner-occupancy affidavit
  (§ 66411.7(g)) has no counterpart in the two-unit-development statute
  — § 65852.21 does not itself require owner-occupancy — so the two
  pathways were kept in clearly separated clauses rather than merged
  into one generic "SB 9 occupancy rule."
- **A second key finding**: § 66411.7(j)(1)'s 2-units-per-parcel cap is
  written as a "notwithstanding" override reaching not just
  § 65852.21 but also the density bonus statute (§ 65915) and the
  ADU/JADU chapter — the clause states this cross-statute reach as the
  statute itself frames it, without independently verifying what
  § 65915 or the ADU chapter would otherwise permit.

## Honest gaps disclosed

The cross-referenced parcel-eligibility criteria borrowed from Gov.
Code § 65913.4(a)(6)(B)-(K) (as it read on September 16, 2021) are not
independently fetched, quoted, or verified — both statutes' clauses
disclose this as a named, bounded gap rather than silently omitting
the cross-reference. The health/safety denial ground's incorporated
definition (Gov. Code § 65589.5(d)(2)) is described in the clause body
but not independently quoted or verified for the same reason. The
percolation-test condition for onsite wastewater systems, the historic-
district standards-preservation option, and the "unit" definition in
§ 66411.7(j)(2) are named as out of scope rather than covered. This
document does not determine whether a specific parcel, application, or
local ordinance in fact satisfies any of these statutory conditions.

## Method

Fetched Cal. Gov. Code §§ 65852.21 and 66411.7 directly from
`leginfo.legislature.ca.gov`, each fetched twice independently via curl
through the environment's proxy with two distinct User-Agent strings
(a full desktop Chrome UA and a distinct bot-identifying UA). Diffed
the two raw HTML fetches per section: the only differences were
session-specific noise (a JSF debug-output timestamp and a per-request
`javax.faces.ViewState` token), not substantive content — confirmed the
operative statutory text is byte-identical across both independent
fetches. Extracted plain text from the `codeLawSectionNoHead` content
div (HTML tags stripped, entities unescaped) for both fetches of both
sections. Programmatically verified all 31 citation quotes across the
10 authority clauses as exact contiguous substrings of both
independently-fetched, whitespace-normalized source texts (nbsp
characters and HTML line-wrap whitespace normalized to a single space;
the underlying characters, including the statute's curly right-single-
quote in "owner's rights," preserved and checked byte-for-byte).

Two benign source-formatting artifacts were identified and disclosed
(not treated as genuine defects, since the actual characters were
present in the source, just interrupted by formatting whitespace): (1)
non-breaking spaces (`\xa0`) the source HTML inserts after several
subdivision letters/numbers (e.g. "(ii)&nbsp;Notwithstanding"), and (2)
a mid-word HTML line-wrap in the source between "local" and "agency"
in both sections' setback-cap sentence. Both are disclosed in the
affected clauses' `gap` fields as normalized-not-corrected formatting
artifacts, per the task's distinction between genuine defects and
benign source-formatting noise.

## Verification

- Both statutory sections fetched twice independently with distinct
  User-Agent strings; diffed and confirmed content-identical (session
  noise only) before any quote was trusted.
- All 31 citation quotes programmatically confirmed as exact
  whitespace-normalized substrings of both independent fetches of the
  relevant section (`schema_check.py` / quote-verification script run
  against both fetch pairs).
- Ran a schema-conformance check confirming every authority clause has
  exactly `{id, title, kind, status, checkedDate, body, gap,
  citations}`, every citation has exactly `{case, cite, url, quote}`
  with no empty fields, the drafting clause has exactly `{id, title,
  kind, body}`, and no clause contains unresolved `{{` template syntax
  outside the drafting clause.
- Checked for duplicate clause IDs against the full corpus (none; `sb9_`
  prefix was previously unused) and duplicate document ID (none).
- Reused three existing field IDs (`ownerName`, `propertyAddress`,
  `localAgencyName` — the latter established by the ADU/JADU document)
  and one existing field ID from a different document family
  (`parcelNumber`, an optional Assessor's Parcel Number field already
  used elsewhere in the corpus). No new field IDs introduced.
- Corpus-wide validation script run after merge: both `data/clauses.json`
  and `data/documents.json` parse as valid JSON; all clause IDs across
  the full corpus are unique; all document IDs across the full corpus
  are unique; every `clauseOrder` entry in every document (all 617,
  including the new one) resolves to an existing clause ID; the new
  drafting clause's `{{parcelNumber}}` and other placeholders all match
  a field declared on the new document — clean.

## Net changes

- New document: SB 9 Two-Unit Housing Development and Urban Lot Split —
  Information Sheet (`sb9_two_unit_lot_split_info_sheet`), 11 clauses
  (10 authority + 1 drafting), in the Real Estate category. No new
  field IDs (reused `ownerName`, `propertyAddress`, `parcelNumber`,
  `localAgencyName`).
- Corpus: 4,987 → 4,998 clauses; 616 → 617 documents. Real Estate
  category: 78 → 79 documents. Part of wave 150 (Real Estate), run as
  an isolated parallel worktree task alongside three sibling tasks
  covering Confidentiality & IP, Ending Employment, and Business
  Formation.
