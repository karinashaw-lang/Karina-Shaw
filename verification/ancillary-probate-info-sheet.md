# Estate Planning, new document: Ancillary Probate for Out-of-State Property — Information Sheet

## Why this document

The corpus's existing Petition for Probate document covers ordinary
single-state California probate only — nothing on nondomiciliary
decedents or multi-state property. Confirmed as a genuine gap: grep
for "ancillary probate" across the corpus returned zero hits.

## What this document covers

7 clauses: 2 drafting (petitioner declaration, signature/
acknowledgment) and 5 authority clauses, all citing Prob. Code Part
13 (§§ 12500-12591):

- **`ancillaryprobate_situs_basis`** — why a separate California
  proceeding is needed, implemented structurally via venue provisions
  rather than a free-standing "situs" statute.
- **`ancillaryprobate_who_may_petition`** (§ 12510) — who may
  petition and what must (and need not) be shown.
- **`ancillaryprobate_administrator_authority`** (§§ 12530, 12513) —
  the California ancillary personal representative's authority and
  appointment priority.
- **`ancillaryprobate_distribution_of_ca_assets`** (§§ 12530, 12540,
  12541, 12542) — two statutory distribution paths, not one.
- **`ancillaryprobate_small_estate_alternative`** (§§ 13200(a), 12570)
  — a simplified alternative via two different mechanisms.

## Genuine corrections and findings

- **A significant correction to the entire topic's scope**:
  California's own ancillary-administration statute (Part 13) governs
  only one of the two scenarios originally framed — a nondomiciliary
  decedent's California property. It does not govern a California
  domiciliary's out-of-state property; that is governed by the other
  state's own ancillary probate law, outside this document's scope.
  Disclosed explicitly in the situs clause's `gap` field.
- Confirmed the situs rule is not a free-standing statutory
  declaration — it's implemented structurally via venue provisions
  (§ 7051 domiciliary venue vs. § 7052 nondomiciliary venue tied to
  property location) and the Part 13 framework, disclosed honestly as
  jurisdictional/structural rather than a stated maxim.
- **A correction on who may petition**: § 12510 does not require
  showing a domiciliary proceeding exists as a precondition — any
  interested person, or a sister-state/foreign-nation personal
  representative, may petition.
- Confirmed § 12513 gives appointment priority to the domiciliary
  sister-state representative (or their nominee) unless the will
  names someone else, and § 12530 subjects California ancillary
  administration to the same general Probate Code provisions as
  ordinary California administration except as Part 13 modifies.
- **A significant correction on distribution**: there are two
  statutory paths, not one — default direct California distribution
  under § 12530's general rule (will/intestacy), or discretionary
  court-ordered distribution of personal property (§ 12540) or real-
  property sale proceeds (§ 12541, not the real property itself in
  kind) to the sister-state representative if in the estate's best
  interest; § 12542 forces distribution to the sister-state
  representative alone if that estate is insolvent.
- **A correction on the simplified alternative**: confirmed via two
  different mechanisms, not one — § 13200(a) (real property)
  independently applies to a nondomiciliary decedent's California real
  property on its own text, while § 12570 (personal property) lets a
  sister-state representative use the § 13100 affidavit without
  ancillary administration. Both are foreclosed once a California
  proceeding is pending or conducted, absent written consent.

## Honest gaps disclosed

- Any case law establishing the situs principle as common law/
  conflicts doctrine was not independently verified — disclosed as a
  gap rather than fabricated.
- The Article 2 will-comity mechanics of §§ 12522-12523 were fetched
  but not cited, to avoid unsupported claims beyond what's actually
  quoted.
- Current inflation-adjusted dollar thresholds beyond what the statute
  text itself states were not independently verified.

## Method

Fetched Prob. Code §§ 7051, 7052, 12500-12513, 12530, 12540-12542,
12570, and 13200 directly from `leginfo.legislature.ca.gov`, each
verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical. All 16 citation quotes across
15 distinct sections programmatically confirmed as exact substrings
of the fetched, normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`cityState`, `countyOfFiling`, `dateOfDeath`,
  `dateSigned`, `decedentName`, `estimatedEstateValue`,
  `petitionerName`, `relationshipToDecedent`) independently confirmed
  to match existing corpus convention (Petition for Probate document).
  New fields: `domiciliaryState`, `domiciliaryCourtInfo`,
  `californiaPropertyDescription`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Ancillary Probate for Out-of-State Property —
  Information Sheet (`ancillary_probate_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Estate Planning category. New
  fields: `domiciliaryState`, `domiciliaryCourtInfo`,
  `californiaPropertyDescription`.
- Corpus: 1,627 → 1,634 clauses; 205 → 206 documents.
