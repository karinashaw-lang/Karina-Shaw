# Business Formation, new document: Seller's Permit (California Department of Tax and Fee Administration Registration) — Information Sheet

## Why this document

The existing LLC Articles of Organization, Statement of Information,
Fictitious Business Name (DBA) Statement, and Foreign LLC/Corporation
Qualification documents all concern Secretary of State filings. This
document covers a genuinely distinct, separately administered
statutory scheme: CDTFA's registration of retail sellers under the
Sales and Use Tax Law, which applies independently of how (or
whether) a business is formed or named with the Secretary of State.

## What this document covers

9 clauses: 2 drafting (declaration/scope, closing/signature) and 7
authority clauses:

- **`sellerspermit_permit_filing_requirement`** (Rev. & Tax Code
  § 6066(a); Gov. Code § 15570.22) — the application filing
  requirement, plus the statutory basis for CDTFA's succession to the
  former State Board of Equalization's function.
- **`sellerspermit_seller_retailer_definitions`** (Rev. & Tax Code
  § 6014; § 6015(a)(1)) — the statutory definitions of "seller" and
  "retailer."
- **`sellerspermit_sale_retail_sale_definitions`** (Rev. & Tax Code
  § 6006; § 6007(a)(1)) — the statutory definitions of "sale" and
  "retail sale," with honest handling of a pending 2027 amendment.
- **`sellerspermit_issuance_and_nonassignability`** (Rev. & Tax Code
  § 6067) — permit issuance and its non-assignable, place-/person-
  specific nature.
- **`sellerspermit_suspension_and_revocation`** (Rev. & Tax Code
  § 6070) — the suspension/revocation hearing procedure, correcting an
  assumption about what this section actually states.
- **`sellerspermit_criminal_penalty`** (Rev. & Tax Code § 6071; § 7153)
  — the misdemeanor for unlicensed selling and its actual penalty
  range, correcting an assumed flat fine.
- **`sellerspermit_security_deposit`** (Rev. & Tax Code § 6701) —
  CDTFA's security-deposit authority and its dollar caps.

## Genuine corrections caught during research

- The task brief assumed § 6070 states that a permit is "valid until
  revoked or suspended." Direct review shows § 6070 is actually the
  suspension/revocation *procedure* section (10-day notice, hearing,
  reissuance conditions) — after reviewing the entire permits article
  (§§ 6066-6077), no statutory expiration or renewal provision was
  found anywhere, stated as an honest, hedged absence-claim.
- The task brief assumed § 6071's penalty is self-contained. Direct
  review shows § 6071 cross-references a separate section, § 7153,
  which supplies the actual fine range: not less than $1,000 and not
  more than $5,000 (or up to one year in county jail, or both) — not
  a flat/single amount.
- Confirmed the statutes still literally say "the board" (the former
  State Board of Equalization) rather than "the department"/CDTFA in
  most sections reviewed. Rather than silently assert board=CDTFA, the
  agent located and cited Gov. Code § 15570.22 for the actual statutory
  basis of CDTFA's succession.
- Discovered and honestly disclosed that Rev. & Tax Code § 6006 has a
  pending 2026 amendment (adding digital-product provisions, renaming
  the agency in its text) that does not become operative until January
  1, 2027 — the currently-operative version was cited, with the
  pending amendment disclosed rather than ignored or misapplied.
- The task brief asked about a distinct "temporary seller's permit"
  category. After reviewing all of Article 2 (§§ 6066-6077, including
  the swap-meet, catering-truck, feed-seller, and florist provisions),
  no such statutory category was found in the Revenue and Taxation
  Code — that concept appears to live only in CDTFA regulations, not
  the statute itself, so no clause was fabricated on it.
- Confirmed §§ 6014/6015 (seller/retailer) and § 6701 (security
  deposit, with its 2x/3x/$50,000 caps) exactly as anticipated.

## Method

Fetched Rev. & Tax Code §§ 6006, 6007, 6014, 6015, 6066, 6067, 6070,
6071, 6701, 7153, and Gov. Code § 15570.22 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical.
All 11 citations across 7 authority clauses programmatically confirmed
as exact substrings of the verified text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — the delivering agent
  found and fixed 5 leaks (`{{businessName}}` embedded in `gap`
  narrative text) during its own self-check before delivery; my
  independent re-check on integration confirmed clean.
- Checked source-independence disclosure logic across all 7 authority
  clauses — every clause correctly distinguishes genuinely separate
  sections from same-section citations; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`businessName`, `entityType`, `principalOfficeAddress`,
  `businessActivityDescription`, `authorizedSignerName`, `dateSigned`,
  `cityState`) confirmed to match existing Business Formation document
  conventions exactly — all seven reused, zero new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Seller's Permit (California Department of Tax and Fee
  Administration Registration) — Information Sheet
  (`sellers_permit_info_sheet`), 9 clauses (7 authority + 2 drafting),
  in the Business Formation category. No new fields.
- Corpus: 1,042 → 1,051 clauses; 135 → 136 documents. This completes
  wave 21 (4 documents: Landlord's Right of Entry, UI Claimant, this
  document, and Guardianship of the Estate, once integrated).
