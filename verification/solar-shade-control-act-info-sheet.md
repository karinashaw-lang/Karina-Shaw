# Real Estate, new document: California Solar Shade Control Act — Information Sheet

## Why this document

Second processed item of wave 130 (Real Estate slot, 1×4 pattern).
The agent ruled out eight candidates via specific section-number
greps before landing here: Mello-Roos CFD special-tax notice (Civ.
Code §1102.6c/Gov. Code §53340 et seq.), Common Interest Development
Internal Dispute Resolution (Civ. Code §§5900s), HOA reserve
study/funding, the Right to Farm Act notice (Civ. Code §3482.5,
already a passing cross-reference in an existing document), the
Private Transfer Fee Law, methamphetamine-contamination disclosure,
title insurance, and Megan's Law database notice were all confirmed
already substantively covered or too thin/incidental. The chosen
topic — the Solar Shade Control Act (Pub. Resources Code
§§25980-25986), restricting tree/shrub shading of a solar collector
— was confirmed genuinely open: zero prior corpus hits on §§25980-
25986 or "Solar Shade" before drafting. The document explicitly
disambiguates itself from two related-but-distinct existing corpus
documents: the California Solar Rights Act (Civ. Code §§714/714.1,
which addresses installation restrictions, not vegetation shading) and
the Good Neighbor Fence Act (Civ. Code §841, cost-sharing for
boundary fences, structurally similar but a different subject).

## What this document covers

10 clauses: 2 drafting (intro, notice/signature) and 8 authority
clauses, citing Pub. Resources Code §25980, §25981(a), (b), (c), (d),
§25982, §25983, §25984, §25985(a), (b), §25986:

- **`solarshade_act_name_and_policy`** — the statute's name and
  legislative policy statement.
- **`solarshade_solar_collector_definition`** — the roof-mounted and
  ground-mounted definitions of "solar collector" and the
  electricity-demand exclusion.
- **`solarshade_collector_siting_requirements`** — the setback/height
  rules a collector itself must meet.
- **`solarshade_shading_restriction`** — the core 10%-shading-between-
  10am-and-2pm rule.
- **`solarshade_nuisance_status_and_notice_prerequisite`** —
  private-nuisance status conditioned on written notice and
  subsequent failure to remove or alter.
- **`solarshade_statutory_exemptions`** — the four listed exemptions.
- **`solarshade_local_ordinance_authority`** — a city/county's opt-out
  and superseding-ordinance authority.
- **`solarshade_passive_solar_system_relief`** — court equitable
  relief for a passive/natural solar system impacted by an active one.

## Genuine findings

- **A disclosed, deliberate choice not to independently verify two
  cross-referenced definitions**: the nuisance-status clause's gap
  discloses that Civ. Code §3481's "private nuisance" definition, and
  the statutory-exemptions clause's gap discloses that Pub. Resources
  Code §4526's "timberland" definition, were both relied on only via
  the Solar Shade Control Act's own cross-reference, not independently
  fetched or verified.
- **A disclosed textual comparison distinguishing this statute from a
  related one**: the solar-collector-definition clause's gap notes
  that §25981's text, unlike Civ. Code §714 (the separate Solar Rights
  Act), contains no "pool heating" provision or cost-and-efficiency
  threshold — a specific, verified textual absence rather than an
  assumption.
- **A disclosed, unresolved structural ambiguity flagged rather than
  guessed at**: the local-ordinance clause's gap notes the statute's
  text does not state whether a superseding ordinance under §25985(b)
  requires a §25985(a) opt-out ordinance first, or whether the CEQA
  exemption stated for (a) extends to (b).
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not define "collector absorption area" or state a
measurement method for the 10% shading threshold, does not state the
legal consequence of a noncompliantly sited collector, does not
independently verify the cross-referenced "private nuisance" or
"timberland" definitions, does not state required content, format, or
delivery method for the §25983 written notice, does not resolve
whether the fourth exemption's "ordinance" must relate to solar
shading specifically, does not resolve the structural relationship
between §25985(a) and (b), and does not define "passive or natural
solar heating system" or specify how "demonstrably greater net energy
savings" is calculated.

## Method

Fetched Pub. Resources Code §§25980-25986 (7 sections) from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical
(excluding the dynamic JSF ViewState token and debug timestamp); two
sections required a backoff retry after transient connection-reset
failures, the same known transient-relay issue independently
encountered and resolved elsewhere in this project. CourtListener's
daily quota was already exhausted (HTTP 429) on the agent's test call;
no case law was used or fabricated. All 11 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
one-hundred-and-eighty-fifth fetch (a new distinct curl User-Agent
string, "Groundtruth-185thVerify-SolarShadeControl/1.0") of all seven
sections — two sections again required a backoff retry after
transient connection resets, both succeeding. All 11 citation
instances confirmed clean; 2 of the 11 required the standard
whitespace-stripped fallback check (the familiar subdivision-marker-
spacing artifact in §25981(a) and §25984), confirmed benign via direct
context inspection of the raw fetched text. The statute's name and
policy, both collector definitions, the siting requirements, the
10%-shading rule, the nuisance-status/notice prerequisite, all four
exemptions, both local-ordinance authorities, and the passive-solar
equitable-relief provision were all independently reconfirmed present
in the freshly fetched text.

## Verification

- All seven Public Resources Code sections fetched twice
  independently by the research agent with distinct User-Agent
  strings, plus a one-hundred-and-eighty-fifth independent fetch
  during integration review; all 11 citation instances confirmed
  clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `solarshade_` prefix has zero collisions. Ran
  section-number-specific greps for §§25980-25986 across the full
  corpus — zero hits outside the new clauses, confirming no disguised
  overlap.
- Checked every citation's `case` field for emptiness — all 11
  populated with proper citation identifier strings.
- Two new field ids confirmed genuinely necessary and non-duplicative:
  `solarCollectorDescription` and `treeShrubDescription` — neither
  existed previously in the corpus under any name. Seven other fields
  (`party1Name`, `party1PropertyAddress`, `party2Name`,
  `party2PropertyAddress`, `noticeDate`, `dateSigned`, `cityState`)
  reused from the existing corpus, matching the house style of the
  Good Neighbor Fence Act document.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: California Solar Shade Control Act — Information
  Sheet (`solar_shade_control_act_info_sheet`), 10 clauses (8
  authority + 2 drafting), in the Real Estate category. Two new
  fields: `solarCollectorDescription`, `treeShrubDescription`.
- Corpus: 4,238 → 4,248 clauses; 539 → 540 documents. Second processed
  item of wave 130.
