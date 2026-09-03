# Real Estate, new document: Natural Hazard Disclosure Statement — Information Sheet

## Why this document

This topic previously existed in the corpus only as a single narrow
clause, `purchase_natural_hazard_disclosure`, embedded within the
existing Residential Purchase Agreement document. Following the
established "deepen a narrow/passing-mention topic into a full dedicated
document" pattern, this document independently re-verifies that ground
and expands into a standalone treatment, using a distinct `nhd_` id
prefix to avoid collisions.

## What this document covers

8 clauses: 2 drafting (purpose declaration, acknowledgment of receipt)
and 6 authority clauses, all citing Cal. Civ. Code §§ 1103-1103.7:

- **`nhd_covered_transfers`** (§ 1103(b)-(c)) — which transfers are
  covered, and that the duty is triggered only by an already-existing
  hazard-zone disclosure requirement.
- **`nhd_exemptions`** (§ 1103.1(a)(1), (3), (5), (10)) — court-ordered
  sales, the fiduciary-administration exemption and its carve-out,
  spousal/consanguinity transfers, and the lease-of-any-duration
  exemption.
- **`nhd_hazard_zone_categories`** (§ 1103.2(a)) — all six statutory
  zones: flood, dam inundation, fire hazard severity, wildland fire,
  earthquake fault, and seismic hazard.
- **`nhd_statutory_form_and_use_restrictions`** (§ 1103.2(a), (e), (g)) —
  the required form, the Local Option TDS alternative, the "not a
  warranty" language, and the restriction against third-party use.
- **`nhd_good_faith_third_party_safe_harbor`** (§ 1103.4(a), (c);
  § 1103.7) — the liability shield and the third-party expert-report
  safe harbor.
- **`nhd_no_duty_to_update`** (§ 1103.5(a)-(b)) — no ongoing duty to
  update after compliance.

## Genuine corrections and findings

- **A significant finding affecting an already-shipped clause**: the
  wildland-fire-area category text in the current, amended § 1103.2(a)
  (amended by Stats. 2024, Ch. 80, effective January 1, 2025) includes an
  additional sentence — the state is not responsible for fire protection
  to structures in the wildlands absent a Public Resources Code § 4142
  cooperative agreement — that was NOT present in the existing
  `purchase_natural_hazard_disclosure` clause's quote of the same
  category, verified on 2026-09-01. **This corpus's existing clause was
  updated as part of this merge** (see "Net changes" below) to reflect
  the current statutory text, rather than leaving a known-stale quote in
  place.
- Confirmed the disclosure duty is not free-standing — it applies only
  when the seller/agent is already required by one of six separately
  enumerated triggers (actual knowledge, or a posted county list/map) to
  disclose the property's location within a hazard zone.
- Confirmed the fiduciary-administration exemption has its own carve-out:
  it does not apply where the trustee is a natural person serving as
  trustee of a revocable trust and the seller was a former owner or
  recent occupant.
- Confirmed the good-faith safe harbor and the third-party expert-report
  provision are drawn from different statutory sections (§ 1103.4 vs.
  § 1103.7) — correctly disclosed as independent rather than grouped as
  one source.

## Honest gap disclosed

Civil Code § 1102.6f (the separate pre-2010 wildfire-hardening notice) was
deliberately excluded — it's a distinct disclosure obligation already
covered by the existing embedded clause and outside this document's
specified scope (the six hazard zones, form, safe harbor, and
exemptions).

## Method

Fetched Cal. Civ. Code §§ 1103, 1103.1, 1103.2, 1103.4, 1103.5, and 1103.7
directly from `leginfo.legislature.ca.gov`, each via two independent curl
requests with distinct User-Agent strings — confirmed byte-identical after
whitespace normalization (only diffs were an unrelated JS debug timestamp
outside the law text). All 14 citation quotes programmatically confirmed
as exact substrings of the confirmed text.

## Verification

- All sections fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are subsections of the same statutory section
  versus genuinely separate sections; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  accepted generic drafting-title reuse ("Purpose of This Information
  Sheet").
- Field names (`propertyAddress`, `sellerName`, `buyerName`,
  `sellerAgentName`, `dateSigned`, `cityState`) independently confirmed to
  match existing corpus convention. New field: `thirdPartyProviderName`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Natural Hazard Disclosure Statement — Information Sheet
  (`natural_hazard_disclosure_statement_info_sheet`), 8 clauses (6
  authority + 2 drafting), in the Real Estate category. New field:
  `thirdPartyProviderName`.
- **Correction to an existing clause**: `purchase_natural_hazard_disclosure`
  (Residential Purchase Agreement) — updated the wildland-fire-area
  citation quote to include the state-fire-protection-responsibility
  sentence added by the 2025 statutory amendment, updated its
  `checkedDate` to 2026-09-03, and added a note to its `gap` field
  documenting the correction and its source.
- Corpus: 1,963 → 1,971 clauses (8 new + 1 citation correction to an
  existing clause); 251 → 252 documents. First document of wave 51.
