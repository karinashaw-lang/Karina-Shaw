# Real Estate, new document: Mold Disclosure — Information Sheet

## Why this document

Confirmed by grep that "mold disclosure" and "toxic mold" had zero hits
anywhere in the corpus. Distinct from the existing Lead-Based Paint
Disclosure document (a different, federal, hazard-specific disclosure
regime).

## What this document covers

8 clauses: 2 drafting (purpose declaration, acknowledgment) and 6
authority clauses, citing Cal. Health & Safety Code §§ 26100-26157 and
§ 131050:

- **`mold_act_framework`** (§§ 26100, 26101(e), 26102; § 131050) — the
  Act's short title, the department's lead-agency role, the successor-
  agency reorganization, and the feasibility-study precondition.
- **`mold_standards_not_shown_adopted`** (§§ 26102, 26103(a), 26105(a),
  26147(e), 26156) — the Act's conditional, non-self-executing structure.
- **`mold_residential_landlord_disclosure`** (§ 26147(a)-(d)) — the core
  residential landlord disclosure duty, the no-testing-required rule,
  timing, and the remediation exemption.
- **`mold_consumer_booklet_disclosure`** (§ 26148(a), (c)) — the separate
  consumer-booklet distribution duty.
- **`mold_sale_disclosure_scope`** (§§ 26140(a), 26149(a), 26150) — the
  Act's mold-specific sale-disclosure duty is scoped to commercial/
  industrial property only, plus the Act's preservation of other,
  non-Act disclosure obligations.
- **`mold_liability_and_enforcement`** (§§ 26153, 26154) — the good-faith
  liability limitation and the substantially-conforming-disclosure
  penalty safe harbor.

## Genuine corrections and findings

- **A major, honestly disclosed structural finding**: the Act's
  substantive framework is not self-executing. The department's duty to
  adopt permissible exposure limits is itself conditioned on a
  feasibility finding (§ 26102-26103(a)), and several of the Act's own
  disclosure duties — including the residential landlord duty — state
  they "shall not apply until" at least six months after the department
  adopts standards and develops guidelines (§ 26147(e), recurring in
  near-identical wording across §§ 26140(d), 26141(e), 26142(b),
  26143(b), 26145(b), 26146(d)). Separately, the entire chapter is
  funding-contingent (§ 26156). The document verifies only the statute's
  own conditional text — it explicitly does not claim to confirm the
  department's actual, current regulatory status (that would require
  reaching the department's own site, which was not accessible), and
  says so directly rather than assuming the standards exist.
- Confirmed the residential landlord disclosure duty and the separate
  consumer-booklet distribution duty are independently conditioned —
  two distinct triggering mechanisms, not one.
- **A scope finding worth flagging**: the Act's own mold-specific
  sale-disclosure section applies to a "seller or transferor of
  commercial or industrial real property" — there is no parallel,
  Act-specific mold disclosure section for a residential seller. The
  document states this plainly rather than implying residential sellers
  have an Act-specific mold duty, while noting the Act separately
  preserves other, non-Act disclosure obligations without describing
  their content.
- Confirmed the Department of Public Health succeeded the former
  Department of Health Services for public health functions via a
  separate 2007 reorganization statute (§ 131050), even though § 26101(e)
  still names the older agency by its own text — used as a genuinely
  independent source, not corroboration.

## Honest gap disclosed

The department's actual current regulatory status — whether it has, in
fact, adopted permissible exposure limits, standards, or guidelines as of
the checked date — was not independently verified from the department's
own site or current regulations (network egress to cdph.ca.gov was
blocked); the document explicitly directs a reader who needs that fact to
consult the department directly rather than relying on this document. No
codified "legislative findings/declarations" section exists within the
chapter itself, so none was fabricated.

## Method

Fetched Cal. Health & Safety Code §§ 26100, 26101, 26102, 26103, 26105,
26140, 26147, 26148, 26149, 26150, 26153, 26154, and 26156, plus § 131050,
directly from `leginfo.legislature.ca.gov`, each twice using two distinct
User-Agent strings — confirmed byte-identical across both fetches for all
sections. All 19 citation quotes programmatically confirmed as exact
substrings of the confirmed text.

## Verification

- All sections fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  distinguishes subdivisions of the same section from genuinely separate,
  independently enacted sections (e.g. § 131050 offered as a genuinely
  independent source for the successor-agency point, not corroboration of
  §§ 26101-26102); correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  accepted generic drafting-title reuses ("Purpose of This Information
  Sheet," "Acknowledgment").
- Field names (`propertyAddress`, `sellerLandlordName`,
  `buyerTenantName`) independently confirmed to match existing corpus
  convention (reused verbatim from the Lead-Based Paint Disclosure
  document's same dual seller/landlord-buyer/tenant shape). No new
  fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Mold Disclosure — Information Sheet
  (`mold_disclosure_info_sheet`), 8 clauses (6 authority + 2 drafting),
  in the Real Estate category. No new fields.
- Corpus: 1,987 → 1,995 clauses; 254 → 255 documents. Fourth and final
  document of wave 51 (Natural Hazard Disclosure Statement, Family
  Allowance, Omitted Spouse and Omitted Child, Mold Disclosure).
