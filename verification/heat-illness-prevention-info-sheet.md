# During employment, new document: Heat Illness Prevention — Information Sheet

## Why this document

Confirmed by grep that "heat illness" and "8 CCR § 3395" had zero hits
anywhere in the corpus. Distinct from the existing Injury and Illness
Prevention Program (IIPP) document (the general written safety-program
requirement) and the existing Workplace Violence Prevention Plan document
(a different specific hazard).

## What this document covers

8 clauses: 2 drafting (scope declaration, acknowledgment) and 6 authority
clauses, covering both of California's Cal/OSHA heat illness regulations
— 8 Cal. Code Regs. § 3395 (outdoor) and § 3396 (indoor):

- **`heatillness_applicability_outdoor_and_indoor`** — outdoor coverage
  (all outdoor workplaces, with high-heat-procedure obligations limited
  to five listed industries) versus indoor coverage (an 82°F scope
  trigger, with 87°F/82°F-radiant-heat full-coverage triggers).
- **`heatillness_water_access`** — the near-identical one-quart-per-
  employee-per-hour drinking water requirement in both standards.
- **`heatillness_shade_and_cooldown_areas`** — the 80°F outdoor shade
  trigger versus the indoor cool-down area's 82°F temperature ceiling.
- **`heatillness_highheat_and_control_measures`** — the outdoor 95°F
  high-heat procedures (including agriculture's mandatory 10-minute/
  2-hour cool-down rest) versus the indoor engineering/administrative/PPE
  control hierarchy.
- **`heatillness_acclimatization_and_training`** — the shared 14-day
  close-observation requirement and employee/supervisor training
  triggers.
- **`heatillness_written_plan_requirement`** — the written Heat Illness
  Prevention Plan duty under both standards, and their permitted
  integration into an employer's IIPP.

## Genuine corrections and findings

- **A genuine research finding beyond the assignment's own framing**: the
  newer indoor heat illness standard, 8 CCR § 3396 (effective 7-23-2024),
  was independently located and verified alongside the outdoor § 3395
  standard, so the document covers both rather than only the
  better-known outdoor standard.
- Confirmed the outdoor standard's high-heat procedures apply only to
  five specifically listed industries (agriculture, construction,
  landscaping, oil and gas extraction, and transportation of agricultural
  products/construction materials/heavy materials) — not to all outdoor
  employers generally, even though the water/shade requirements do apply
  broadly.
- Confirmed the indoor standard uses a genuinely different mechanism than
  the outdoor standard's fixed high-heat-procedures list — a tiered
  engineering/administrative-control/PPE hierarchy aimed at keeping the
  workplace below specific temperature thresholds, not a parallel
  high-heat procedures list.
- Confirmed both standards state nearly identical water-access language
  independently, rather than one cross-referencing the other — correctly
  disclosed as two formally separate, independently adopted regulations
  rather than treated as one source.
- Confirmed both standards explicitly permit their required plan to be
  folded into an employer's existing IIPP under § 3203, and the indoor
  standard additionally permits integration into an employer's outdoor
  Heat Illness Prevention Plan.

## Honest gap disclosed

Several sub-provisions were reviewed but deliberately not quoted or
independently detailed: the indoor standard's teleworking/incidental-
exposure/emergency-operations/confinement-facility exceptions and its
"Order to Take Special Action" provision; the full text of every training
topic and every high-heat-procedure subitem; the supervisor-training
subdivisions' full text; the cross-referenced water-quality regulations
(8 CCR §§ 1524, 3363, 3457); and the "Shade"/"cool-down area" definitional
subsections.

## Method

Fetched 8 Cal. Code Regs. § 3395 and § 3396 directly from the California
Department of Industrial Relations' Title 8 text (dir.ca.gov/title8/),
each twice using two distinct User-Agent strings — confirmed byte-
identical (no whitespace normalization even needed). All 15 citation
quotes programmatically re-verified as exact substrings of the fetched
text.

## Verification

- Both regulations fetched twice independently with distinct
  User-Agents; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses that § 3395 and § 3396 are formally independent, separately
  adopted regulations (not subdivisions of one section) while also
  disclosing when multiple citations within one clause are subdivisions
  of the same section; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  accepted generic drafting-title reuse ("Acknowledgment of Receipt") —
  also used by the IIPP and Workplace Violence Prevention Plan documents.
- Field names (`companyName`, `employeeName`, `programAdministratorName`)
  independently confirmed to match existing corpus convention. No new
  fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Heat Illness Prevention — Information Sheet
  (`heat_illness_prevention_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the During employment category. No new fields.
- Corpus: 1,995 → 2,003 clauses (crossing 2,000 for the first time); 255
  → 256 documents. First document of wave 52.
