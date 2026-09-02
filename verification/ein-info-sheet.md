# Business Formation, new document: Employer Identification Number (EIN) — Information Sheet

## Why this document

The corpus's existing new-hire-reporting clauses only mention an EIN
in passing. No dedicated document explains what a federal EIN is, who
needs one, or how it's obtained. Confirmed as a genuine gap by
grepping the corpus for "EIN"/"employer identification number"/"SS-4"
before drafting.

## What this document covers

8 clauses: 2 drafting (purpose/scope declaration, closing/signature)
and 6 authority clauses:

- **`ein_statutory_basis`** (26 U.S.C. § 6109(a)(1); 26 C.F.R.
  § 301.6109-1(a)(1)(i)) — the EIN's statutory and regulatory basis.
- **`ein_which_entities_need_one`** (26 C.F.R.
  § 301.6109-1(a)(1)(ii)(C); IRS.gov "Employer identification number")
  — which entities and individuals need an EIN.
- **`ein_disregarded_entity_existing_number`** (26 C.F.R.
  § 301.6109-1(h)(2)(i); IRS.gov "When to get a new EIN") — a
  single-member LLC or sole proprietor may sometimes use an existing
  number instead of a new EIN.
- **`ein_new_ein_not_required_on_reorganization`** (26 C.F.R.
  § 301.6109-1(h)(1); IRS.gov "When to get a new EIN") — the common
  mistake of assuming every reorganization requires a new EIN.
- **`ein_how_to_apply`** (26 C.F.R. § 301.6109-1(d)(2)(i); IRS.gov
  "Get an employer identification number") — how to apply, and the
  IRS's own no-fee warning.
- **`ein_state_vs_federal_disambiguation`** (California EDD, "Step 3:
  Register for a Payroll Tax Account") — California's EDD account
  number is a separate state number, not the federal EIN.

## Genuine corrections and findings

- Confirmed via Treasury's own regulation that a single-member LLC
  disregarded as separate from its owner must use the owner's own TIN
  rather than obtaining its own EIN — with a precise boundary drawn
  from the IRS's own guidance: the LLC needs its own EIN once it has
  employees or excise-tax obligations, not simply because it exists.
- **A significant, non-obvious correction on reorganizations**: the
  IRS's own published list identifies several corporate events that do
  NOT require a new EIN (name/location change, identity-only
  reorganization, surviving corporation after a merger, state-level
  conversion without changing the underlying business structure, S
  corp election) versus events that DO (new state charter, becoming a
  subsidiary, changing to a partnership/sole proprietorship, a merger
  creating a new corporation) — disclosed carefully as resting mostly
  on the IRS's own guidance page rather than word-for-word regulatory
  text, since the regulation itself supports only the narrower
  tax-classification-change proposition.
- Confirmed the IRS's own guidance states EIN issuance is always free
  directly from the IRS and warns against fee-charging third-party
  sites — sourced verbatim from IRS.gov, not paraphrased from general
  knowledge.
- **A genuine research correction during the session**: the agent
  found that its two originally planned "independent" IRS pages
  (apply-for-an-ein-online and get-an-employer-identification-number)
  now serve byte-identical content and are not independent sources —
  caught and replaced with a genuinely independent regulation + IRS
  guidance pairing instead of papering over the duplication.
- Confirmed California's EDD issues a separate eight-digit state
  payroll tax account number (SEIN), distinct from the federal EIN,
  with EDD's own registration guidance instructing employers to
  include their federal EIN on the state registration — honestly
  disclosed as coming from a single EDD page (stability-checked with
  two fetches, not independently corroborated by a second source).

## Honest gap disclosed

The EDD state-number disambiguation clause rests on a single primary
source (one EDD web page); this is disclosed explicitly as a stability
check rather than independent corroboration.

## Method

Fetched 26 U.S.C. § 6109 and 26 C.F.R. § 301.6109-1 from
`law.cornell.edu`, several IRS.gov guidance pages, and California EDD's
"Step 3: Register for a Payroll Tax Account" page, each via curl with
two distinct User-Agent strings, confirmed byte-identical (statutory/
regulatory/EDD text) via md5sum or normalized-text diff. All 12
citation quotes programmatically confirmed as exact substrings of both
independently fetched copies of their source.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses regulation-plus-guidance pairings as corroborating (not
  independent) and the single-source EDD page as a stability check;
  correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none — no title reuse at all in this delivery).
- Field names (`companyName`, `entityType`, `dateSigned`, `cityState`,
  `authorizedSignerName`) independently confirmed to match existing
  corpus convention. New fields: `responsiblePartyName`, `ssnOrItin`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Employer Identification Number (EIN) — Information
  Sheet (`ein_info_sheet`), 8 clauses (6 authority + 2 drafting), in
  the Business Formation category. New fields: `responsiblePartyName`,
  `ssnOrItin`.
- Corpus: 1,711 → 1,719 clauses; 217 → 218 documents. Third document
  of wave 42.
