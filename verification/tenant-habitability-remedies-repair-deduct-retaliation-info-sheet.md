# Real Estate, new document: Tenant Habitability Remedies: Repair-and-Deduct and Retaliation Protection — Information Sheet

## Why this document

The corpus's existing Residential Lease Agreement document has a
single passing clause (`lease_habitability`) on the implied warranty
of habitability but nothing on the repair-and-deduct remedy (Civ. Code
§ 1942) or landlord retaliation protection (Civ. Code § 1942.5).
Confirmed as a genuine, zero-hit gap by grep before drafting; the
delivering agent read the full existing lease document to avoid
duplicating its habitability clauses.

## What this document covers

7 clauses: 2 drafting (tenant notice/declaration, signature/record)
and 5 authority clauses:

- **`repairdeduct_remedy`** (Civ. Code § 1942(a)) — the repair-and-
  deduct-or-vacate remedy and its cost/frequency limits.
- **`repairdeduct_notice_and_exclusions`** (§ 1942(b)-(d)) — the
  30-day reasonable-time presumption, tenant-caused-condition
  exclusion, and cumulative-remedy clause.
- **`repairdeduct_retaliation_prohibition`** (§ 1942.5(a)) — the
  180-day retaliation prohibition and its five triggering tenant
  activities.
- **`repairdeduct_retaliation_limits_and_rebuttal`** (§ 1942.5(b),
  (c), (f), (g)) — the once-per-12-months limit, immigration-status
  reporting as retaliation, the anti-waiver rule, and the landlord's
  stated-ground safe harbor.
- **`repairdeduct_retaliation_remedies`** (§ 1942.5(h)-(j)) — damages,
  attorney's fees, and cumulative remedies.

## Genuine corrections and findings

- Confirmed § 1942's repair cost cap is "one month's rent" — a
  rent-relative figure, not a fixed dollar cap as an older,
  pre-1979 version of the statute used. Verified against the current
  text rather than assuming a flat figure.
- **Confirmed and disclosed two distinct, easily-conflated 12-month
  limits**: § 1942(a) caps actual repair-and-deduct use at twice per
  12 months; § 1942.5(b) separately caps invoking the retaliation rule
  at once per 12 months.
- **A precision correction on the retaliation mechanism**: § 1942.5(a)
  never uses the word "presumption" — it is a direct prohibition, not
  a labeled evidentiary presumption, contrary to common secondary-
  source shorthand. The actual rebuttal-like structure is § 1942.5(g)'s
  stated-ground safe harbor, with the burden on the landlord to prove
  the stated ground true if the tenant disputes it.
- Confirmed the explicit textual link between the two statutes:
  § 1942.5(a)(1) names a tenant's good-faith notice "pursuant to
  Section 1942" as one of the five triggering events.
- Disclosed, rather than silently omitted, that § 1942.5(d)-(e)
  contains a separate, broader anti-retaliation prohibition (tenant-
  association/organizing activity, with the tenant bearing the burden
  of proof) distinct from the 180-day mechanism these clauses cover.
- Flagged that the attorney's-fee provision (§ 1942.5(i)) awards fees
  "to the prevailing party," not only to a prevailing tenant, rather
  than assuming a one-directional fee-shifting rule.

## Honest gap disclosed

The tenant-caused-condition exclusion in § 1942(c) cross-references
Civ. Code §§ 1929 and 1941.2 by name only — those two sections were
not independently fetched or described.

## Method

Fetched Civ. Code §§ 1942 and 1942.5 directly from
`leginfo.legislature.ca.gov` via curl with two distinct User-Agent
strings — byte-identical text both times. All 14 citation quotes
programmatically confirmed as exact substrings of the fetched,
normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are subsections of the same statutory
  section (treated as one source); correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none — no title reuse at all in this delivery).
- Field names (`tenantName`, `landlordName`, `propertyAddress`,
  `noticeDate`, `dateSigned`, `cityState`) independently confirmed to
  match existing corpus convention. New field:
  `habitabilityDefectDescription`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Tenant Habitability Remedies: Repair-and-Deduct and
  Retaliation Protection — Information Sheet
  (`tenant_habitability_remedies_repair_deduct_retaliation_info_sheet`),
  7 clauses (5 authority + 2 drafting), in the Real Estate category.
  New field: `habitabilityDefectDescription`.
- Corpus: 1,760 → 1,767 clauses; 224 → 225 documents. Second document
  of wave 44.
