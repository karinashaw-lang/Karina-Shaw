# Family Law, new document: Guardianship of the Estate (Petition Information Sheet)

## Why this document

The existing Guardianship of the Person (Petition Information Sheet)
document covers custody and day-to-day care of a minor. This document
covers a legally distinct court appointment: management of a minor's
money and property. Confirmed no duplication via close review of the
companion document's clauses and field conventions.

## What this document covers

10 clauses: 3 drafting (declaration distinguishing this from
guardianship of the person, estate-information summary, signature
block) and 7 authority clauses:

- **`guardestate_scope_vs_person`** (Prob. Code § 1510(b), (c);
  § 2400(b), (c)) — the shared petition mechanism and the one
  estate-specific petition-content item (the proposed ward's spouse).
- **`guardestate_appointment_standard`** (Prob. Code § 1514(a), (b)(2),
  (c), (e)) — the appointment standard, nomination priority, and a
  genuine finding: no general bar exists on a parent serving as
  guardian of the estate (unlike guardian of the person, which § 1514
  (b)(2) does bar), stated carefully without asserting any parent's
  fitness.
- **`guardestate_bond_requirement`** (Prob. Code § 2320(a), (b), (c))
  — the bonding requirement and default amount calculation.
- **`guardestate_inventory_and_accounting`** (Prob. Code § 2610(a),
  (b); § 2620(a); § 2628(a)) — the 90-day inventory deadline, the
  periodic accounting requirement, and the small-estate accounting
  exemption.
- **`guardestate_transactions_court_approval`** (Prob. Code § 2540(a);
  § 2590(a), (b); § 2591(c)(1)) — the default court-approval
  requirement for selling estate property, and the court's power to
  grant independent powers in advance.
- **`guardestate_alternatives_small_estate`** (Prob. Code § 3400(a),
  (b)(1); § 3401(a), (c)(1)) — the $5,000 total-estate threshold below
  which simpler alternatives (including UTMA custodianship) apply.
- **`guardestate_termination`** (Prob. Code § 1600(a), (c); § 1601;
  § 2630) — when the guardianship ends and post-termination accounting
  jurisdiction.

## Genuine corrections caught during research

- The task brief's guessed section for basic authorization (§ 1500) is
  actually the parent-nomination provision (already used in the
  companion Guardianship of the Person document) — the real
  appointment-authorization section is § 1514(a), with § 1510(b) as
  the shared petition-content section.
- Direct review found a real, previously unstated distinction:
  § 1514(b)(2) bars a parent from being appointed guardian of the
  person, but § 1514 states no comparable bar for guardian of the
  estate — this asymmetry is stated as a fact about the statutory
  framework, with the clause's `gap` field explicitly disclaiming any
  assertion about a specific parent's fitness.
- Confirmed the $5,000 total-estate threshold exactly as assumed, and
  found that § 1510(c)(4) adds one estate-specific petition-content
  item (the proposed ward's spouse) even though the petition process
  is otherwise shared with guardianship of the person.
- Confirmed the 90-day inventory deadline, biennial accounting
  requirement, and $15,000/$2,000 small-estate accounting exemption
  thresholds via direct statutory review.

## Honest gaps disclosed

- Cross-referenced but not independently analyzed: §§ 2544/2545 (sale
  exceptions), § 2467 (post-death estate-custody duty), § 1510.1
  (person-only extension mechanism), the full 28-power list in § 2591,
  and § 2613 (supplemental inventory for after-discovered property).
- The California Uniform Transfers to Minors Act's own creation,
  duty, and termination rules (Prob. Code Part 9, § 3900 et seq.) are
  cross-referenced but not detailed.

## Method

Fetched Prob. Code §§ 1500, 1510, 1514, 1600, 1601, 2320, 2400, 2540,
2590, 2591, 2610, 2620, 2628, 2630, 3400, 3401 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical.
All quotes programmatically confirmed as exact substrings of the
verified text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — the delivering agent
  found and fixed 5 leaks (`{{childName}}` embedded in `gap` narrative
  text) during its own self-check before delivery; my independent
  re-check on integration confirmed clean.
- Checked source-independence disclosure logic across all 7 authority
  clauses — every clause combining subsections of one statutory
  section carries an explicit disclosure; correct as delivered.
- Extra scrutiny given to `guardestate_appointment_standard` given the
  sensitivity of the topic (a minor's property, parental-fitness
  context): confirmed the clause states only the statutory asymmetry
  as fact and explicitly disclaims asserting any parent's suitability.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`childName`, `childDOB`, `relationshipToChild`,
  `proposedGuardianName`, `parent1Name`, `parent2Name`, `dateSigned`,
  `cityState`, `countyOfFiling`, `estimatedEstateValue`) confirmed to
  match the companion Guardianship of the Person document's
  conventions exactly. New field: `estateDescription`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Guardianship of the Estate (Petition Information
  Sheet) (`guardianship_of_estate_info_sheet`), 10 clauses (7
  authority + 3 drafting), in the Family Law category. New field:
  `estateDescription`.
- Corpus: 1,051 → 1,061 clauses; 136 → 137 documents. This completes
  wave 21 (4 documents: Landlord's Right of Entry, UI Claimant,
  Seller's Permit, and this document).
