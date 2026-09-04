# Real Estate, new document: Right to Repair Act — Information Sheet

## Why this document

Confirmed by grep that "Right to Repair Act," "SB 800," and "Civil Code
895" had zero hits anywhere in the corpus. Read the existing Home
Improvement Contract document in full and confirmed it's a genuine
companion, not a duplicate — it covers licensed-contractor remodel-
contract formation under Bus. & Prof. Code § 7159 et seq., a different
code title from this document's new-residential-construction defect
standards. Third of wave 59's four documents.

## What this document covers

8 clauses: 2 drafting (purpose/background, acknowledgment) and 6
authority clauses, citing Cal. Civ. Code §§ 896, 910, 913, 916, 917,
918, 927, 941, 944, and 945.5:

- **`righttorepair_scope_and_standards_structure`** (§ 896 intro) —
  what the Act covers (original construction, not condo conversions)
  and how its performance standards are structured.
- **`righttorepair_example_performance_standards`** (§ 896(b)(1), (e),
  (g)(6), (g)(10)) — **a key finding**: several individual standards
  carry their own embedded time limits distinct from the Act's general
  10-year outer period.
- **`righttorepair_prelitigation_notice`** (§§ 910(a), 913) — the
  mandatory written notice of claim and the builder's 14-day
  acknowledgment deadline.
- **`righttorepair_builder_inspection_and_repair_offer`** (§§ 916(a),
  917, 918) — the inspection, repair-offer, and homeowner-response
  timeline.
- **`righttorepair_limitations_period_and_tolling`** (§§ 941(a), 927) —
  the 10-year outer limitations period and prelitigation-process
  tolling.
- **`righttorepair_remedies_and_affirmative_defenses`** (§§ 944,
  945.5(a)-(c)) — recoverable damages and the builder's statutory
  comparative-fault defenses.

## Genuine corrections and findings

- **Standard-specific time limits, distinct from the general 10-year
  period**: § 896(e)'s plumbing/electrical standards carry their own
  4-year limits; § 896(g)(6)'s noise-transmission standard carries a
  1-year limit from adjacent-unit occupancy; § 896(g)(10)'s paint/stain
  standard carries a 5-year limit — all operating independently of
  § 941(a)'s general 10-year outer boundary, confirmed by genuinely
  verified individual examples rather than an invented summary of the
  full (dozens-of-items) standards list.
- **§ 927's tolling mechanism precisely distinguishes two scenarios**:
  a 100-day extension after repair completion if the limitations period
  otherwise ran during the process, versus a shorter 45-day extension
  if the builder fails to timely acknowledge, declines the statutory
  process, or fails to timely request inspection.
- Confirmed the condominium-conversion carve-out in § 896's introductory
  paragraph — the Act applies to "original construction intended to be
  sold as an individual dwelling unit," not conversions.
- Confirmed § 945.5's affirmative defenses operate "under the principles
  of comparative fault" — partial, not all-or-nothing excuses — with
  three specific examples (unforeseen act of nature, failure to
  mitigate, failure to follow maintenance recommendations) genuinely
  quoted rather than the full (d)-(g) list summarized from memory.

## Honest gap disclosed

§ 896's full list of dozens of numbered standards across subdivisions
(a)-(g) is not reproduced exhaustively — only four genuinely verified
examples are given. § 916(c)'s second-inspection process and § 916(d)'s
consequences for a builder's total inspection failure are not
independently verified. § 945.5(d)-(g)'s remaining defenses are not
quoted in full.

## Method

Fetched Cal. Civ. Code §§ 896, 910, 913, 916, 917, 918, 927, 941, 944,
and 945.5 directly from `leginfo.legislature.ca.gov` via curl, each
section fetched twice with distinct User-Agent/header combinations,
confirmed byte-identical after whitespace normalization. All 11
citation quotes programmatically confirmed as exact substrings of the
confirmed text.

## Verification

- All ten sections fetched twice independently with distinct request
  signatures; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — every clause correctly
  discloses its citations are sections/subsections of the same single
  statutory scheme (Title 7, added by SB 800), not independent sources;
  correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`homeownerName`, `propertyAddress`, `dateSigned`,
  `cityState`) independently confirmed to match existing corpus field
  definitions. One genuinely new field confirmed necessary and added:
  `builderName` — no existing field captured the Act's distinct
  "builder" role.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Right to Repair Act — Information Sheet
  (`right_to_repair_act_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Real Estate category. One new field: `builderName`.
- Corpus: 2,222 → 2,230 clauses; 285 → 286 documents. Third document of
  wave 59.
