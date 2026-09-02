# Confidentiality & IP, new document: CCPA Service Provider Data Processing Agreement

## Why this document

The existing NDA and Mutual NDA documents cover trade-secret/confidentiality
law (18 U.S.C. § 1833(b), Civ. Code § 3426.1). This document covers a
genuinely distinct statutory area: California's privacy law (the
California Consumer Privacy Act, as amended by the California Privacy
Rights Act) and the specific contract terms a business must have in
place with a vendor to qualify for the CCPA's service-provider
exemption from "sale"/"sharing" treatment.

## What this document covers

7 clauses: 2 drafting (recitals, operative restrictions) and 5 authority
clauses:

- **`ccpasp_definitions_business_and_service_provider`** (Civ. Code
  § 1798.140(d)(1), (ag)(1)) — the statutory definitions of "business"
  and "service provider."
- **`ccpasp_required_contract_terms`** (Civ. Code § 1798.140(ag)(1)(A)-(D),
  § 1798.100(d)(1)-(5)) — two separate, only partly overlapping sources
  of required contract terms, correcting the task brief's assumption
  that these were alternative locations for the same list.
- **`ccpasp_sell_share_third_party_definitions`** (Civ. Code
  § 1798.140(ad)(1), (ah)(1), (ai)) — the definitional chain
  ("sell"/"share" both require a "third party"; "third party" excludes
  service providers) that is the actual exemption mechanism, disclosed
  as a structural reading rather than an express statutory holding.
- **`ccpasp_monitoring_and_audit_provisions`** (Civ. Code
  § 1798.140(ag)(1), § 1798.100(d)(3), (d)(5)) — audit rights are
  permissive, not mandatory; a general "reasonable steps" duty is
  mandatory.
- **`ccpasp_noncompliant_contract_reclassification`** (same definitional
  cluster, traced in reverse) — the reclassification consequence of a
  noncompliant contract, disclosed as a structural inference, not a
  quoted statutory holding.

## Genuine corrections caught during research

- The task brief treated § 1798.100(d) and § 1798.140(ag) as
  alternative possible locations for the required contract terms.
  Direct review shows they are not alternatives — both impose real,
  independent, partly overlapping requirements.
- The task brief assumed an explicit certification requirement parallel
  to the "contractor" definition. Direct review shows § 1798.140(ag)
  (service provider) has no explicit certification requirement in its
  own text; that language exists only in the parallel "contractor"
  definition at § 1798.140(j)(1)(B).
- The task brief asked whether the statute imposes a specific audit-
  rights requirement. Direct review shows the audit/monitoring language
  in § 1798.140(ag)(1) is expressly permissive ("may... permit"); only a
  general, non-audit-specific "reasonable steps" duty is mandatory.
- The "service-provider transfer isn't a sale" mechanism and the
  "noncompliant contract → reclassified as sale/share" consequence are
  both disclosed as the researcher's own structural reading of how
  three definitions interlock, not quotations of an express statutory
  statement — no single sentence in the statute states either
  proposition directly.

## Method

Fetched Civ. Code §§ 1798.140 and 1798.100 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical.
No case law cited; the statutory text is unambiguous.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — the agent caught and
  fixed one real leak (a stray `{{serviceProviderName}}` in
  `ccpasp_required_contract_terms`'s `gap` field) before delivery;
  independently re-confirmed clean on integration.
- Checked source-independence disclosure logic across all 5 authority
  clauses — the two same-section clauses
  (`ccpasp_definitions_business_and_service_provider`,
  `ccpasp_sell_share_third_party_definitions`) carry an explicit "cites
  N subsections of the same statute" disclosure sentence — correct as
  delivered, despite not matching this integration's exact regex
  wording on first automated pass (manually confirmed).
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- New fields: `businessName`, `serviceProviderName`, `businessPurpose`
  (two-party field naming, distinct from the employment-context field
  conventions used elsewhere in the corpus).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: CCPA Service Provider Data Processing Agreement
  (`ccpa_service_provider_agreement`), 7 clauses (5 authority + 2
  drafting), in the Confidentiality & IP category. New fields:
  `businessName`, `serviceProviderName`, `businessPurpose`.
- Corpus and document totals: see combined net totals in this wave's
  other verification docs (four documents merged together: 728 → 757
  clauses; 97 → 101 documents).
