# Business Formation, new document: Local Business License / Business Tax Certificate — Information Sheet

## Why this document

The existing Seller's Permit document covers state-level CDTFA
registration; Fictitious Business Name covers county-level DBA
filings; Foreign LLC/Corporation Qualification covers Secretary of
State registration for out-of-state entities. This document covers a
genuinely distinct requirement: local (city/county) business
licensing, authorized by state law but enacted and administered
independently by each jurisdiction.

## What this document covers

8 clauses: 2 drafting (declaration/scope, closing/signature) and 6
authority clauses:

- **`bizlicense_constitutional_police_power`** (Cal. Const. art. XI,
  § 7) — the constitutional police-power source of local licensing
  authority.
- **`bizlicense_city_statutory_licensing_authority`** (Gov. Code
  § 37101(a); Bus. & Prof. Code § 16000(a)) — two independent,
  overlapping statutory grants of city licensing authority.
- **`bizlicense_county_statutory_licensing_authority`** (Rev. & Tax
  Code § 7284(a)) — the parallel county authority, limited to
  unincorporated areas.
- **`bizlicense_apportionment_and_nonprofit_clergy_exemption`** (Gov.
  Code § 37101(b), (c); Bus. & Prof. Code § 16000(b)) — the
  multi-jurisdiction apportionment rule and the nonprofit/clergy
  exemption from an income-/gross-receipts-measured license tax.
- **`bizlicense_contractor_verification_and_veteran_exemption`** (Bus.
  & Prof. Code § 16000(c); § 16001) — the contractor-license
  verification requirement and the disabled-veteran peddler exemption,
  genuine finds beyond the original research brief.
- **`bizlicense_voter_approval_requirement_no_statewide_fee_cap`**
  (Cal. Const. art. XIII C, § 2(b), (d)) — the honest finding that no
  statewide fee cap exists, replaced with the actual constitutional
  constraint (voter approval for certain local tax increases).

## A structurally honest document

Unlike most of this corpus's statute-driven documents, this topic has
no single detailed statewide statute — California law is a grant of
general local authority, with actual requirements, fees, and
procedures varying enormously by city and county. The document states
this plainly rather than inventing statewide uniformity: every clause's
`gap` field notes that the specific license name, fee, and procedure
are set locally and cannot be stated here.

## Genuine corrections and findings

- Confirmed Cal. Const. art. XI, § 7's exact text, Gov. Code § 37101,
  Bus. & Prof. Code § 16000, and Rev. & Tax Code § 7284 all exist
  exactly as the task brief guessed.
- The task brief asked whether a statewide fee cap exists, cautioning
  not to invent one. Direct review confirmed none does — instead, the
  agent found and correctly substituted the real constitutional
  constraint: Article XIII C's voter-approval requirement for certain
  local tax increases (a procedural constraint, not a numeric ceiling).
- Two genuine, unrequested finds: Bus. & Prof. Code § 16000(c)'s
  requirement that a city verify a contractor's CSLB license before
  issuing a business license, and § 16001's disabled-veteran peddler
  exemption (with its dated, unmodernized war list honestly flagged
  rather than reinterpreted).
- Confirmed no state-level display or penalty requirement exists for
  local business licenses — disclosed as purely a local-ordinance
  matter.

## Method

Fetched Cal. Const. art. XI, § 7; art. XIII C, § 2; Gov. Code § 37101;
Bus. & Prof. Code §§ 16000, 16001; and Rev. & Tax Code § 7284 directly
from `leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical.
All 11 citation quotes programmatically confirmed as exact substrings
of the verified text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic across all 6 authority
  clauses — every clause correctly distinguishes same-section citations
  from genuinely separate, independent sections across different codes;
  correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`businessName`, `entityType`, `principalOfficeAddress`,
  `businessActivityDescription`, `authorizedSignerName`, `dateSigned`,
  `cityState`) confirmed to match the Seller's Permit document's
  fields exactly. New fields: `cityOfOperation`, `countyOfOperation`
  (deliberately kept distinct from the Fictitious Business Name
  document's `filingCounty`, which names where a DBA is filed, not
  where the business operates).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Local Business License / Business Tax Certificate —
  Information Sheet (`local_business_license_info_sheet`), 8 clauses
  (6 authority + 2 drafting), in the Business Formation category. New
  fields: `cityOfOperation`, `countyOfOperation`.
- Corpus: 1,061 → 1,069 clauses; 137 → 138 documents.
