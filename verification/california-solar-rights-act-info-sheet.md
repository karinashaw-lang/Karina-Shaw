# Real Estate, new document: California Solar Rights Act — Information Sheet

## Why this document

Confirmed by grep that "Solar Rights Act" and "Civil Code 714" had zero
hits anywhere in the corpus, including the existing HOA/CC&R Disclosure
document. Distinguished explicitly from that document (seller disclosure
duties) and from the existing HOA Assessment Lien and Foreclosure
document (unpaid-assessment remedies). Second of wave 59's four
documents.

## What this document covers

8 clauses: 2 drafting (introduction/scope, acknowledgment) and 6
authority clauses, citing Cal. Civ. Code §§ 714 and 714.1:

- **`solarrights_core_voiding_rule`** (§ 714(a)) — the general rule
  voiding covenants and restrictions that effectively prohibit or
  restrict a solar energy system.
- **`solarrights_reasonable_restriction_standard`** (§§ 714(b),
  (d)(1)(A)-(B)) — **a key finding**: the reasonable-restriction
  exception is quantified, with genuinely different cost formulas for
  water/pool-heating systems versus photovoltaic systems.
- **`solarrights_technical_standards`** (§ 714(c)(1)-(3)) — health,
  safety, and technical standards a system may still be required to
  meet.
- **`solarrights_hoa_approval_process_timing`** (§ 714(e)(1)-(2)(B)) —
  the 45-day deemed-approved rule for HOA application review.
- **`solarrights_hoa_specific_restrictions_and_prohibited_actions`**
  (§ 714.1(a)-(b)) — the specific restrictions an association may
  impose, and two actions it may never take for household rooftop
  solar.
- **`solarrights_remedies`** (§ 714(f)-(g)) — distinct damages/penalty
  and attorney's-fee remedies with different scope conditions.

## Genuine corrections and findings

- **The central finding, precisely quantified**: § 714 is not a
  blanket ban — the reasonable-restriction exception is defined with
  genuinely different cost thresholds by system category: solar
  water-heating/pool-heating systems use the smaller of 10% of system
  cost or $1,000; photovoltaic systems use a flat $1,000 threshold over
  originally specified cost; both share a 10%-efficiency-decrease
  threshold.
- **§ 714.1 was independently confirmed as genuinely relevant**, not
  assumed — a distinct, HOA-specific companion section ("Notwithstanding
  Section 714...") listing four categories an association may restrict,
  alongside two things it may never do for household rooftop solar
  (a general prohibition policy, or requiring a membership vote).
- Confirmed a precise 45-day deemed-approved deadline for HOA
  application review, with a written-decision requirement and a
  reasonable-request-for-information tolling exception.
- **Distinct remedy scope, correctly distinguished**: § 714(f)'s
  damages-and-civil-penalty remedy is limited to willful violations by
  non-public entities; § 714(g)'s prevailing-party attorney's-fee rule
  is not limited to willfulness and applies to "any action to enforce
  compliance" — a real asymmetry, not one uniform remedy.

## Honest gap disclosed

The cross-referenced governing-document, association, and common-area
definitions (Civil Code §§ 4150, 6552, 4080, 6528, 4600), Government
Code § 65850.5, the Plumbing and Mechanical Codes, and the California
Electrical Code were not independently fetched or verified. § 714(h)'s
public-entity grant-and-loan-eligibility consequence was not given a
dedicated clause since it doesn't bear on private-party rights.

## Method

Fetched Cal. Civ. Code §§ 714 and 714.1 directly from
`leginfo.legislature.ca.gov` via curl, each section fetched twice with
distinct User-Agent strings; after extracting and normalizing the
statute text, both fetches were confirmed byte-identical for both
sections (raw byte counts differed only due to per-request JSF
ViewState tokens). All 13 citation quotes programmatically confirmed as
exact substrings of the confirmed text.

## Verification

- Both sections fetched twice independently with distinct User-Agent
  strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — subdivisions of the
  same section correctly disclosed as one source; § 714 and § 714.1
  correctly disclosed as textually related but distinct sections;
  correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`propertyAddress`, `hoaName`, `dateSigned`, `cityState`)
  independently confirmed to match existing corpus field definitions.
  No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: California Solar Rights Act — Information Sheet
  (`california_solar_rights_act_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Real Estate category. No new fields.
- Corpus: 2,214 → 2,222 clauses; 284 → 285 documents. Second document of
  wave 59.
