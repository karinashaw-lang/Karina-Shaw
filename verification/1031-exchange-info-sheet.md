# Real Estate, new document: 1031 Exchange — Information Sheet

## Why this document

No existing document or clause covered the federal tax-deferred
like-kind exchange rules for real property — a distinct federal tax
mechanism layered on top of, not duplicating, the corpus's existing
real estate transaction documents.

## What this document covers

8 clauses: 2 drafting (exchange declaration, signature/certification)
and 6 authority clauses:

- **`exch1031_core_nonrecognition`** (26 U.S.C. § 1031(a)(1); TCJA
  Pub. L. 115-97 § 13303(c)) — the core nonrecognition rule, limited
  to real property since the 2017 Tax Cuts and Jobs Act.
- **`exch1031_like_kind_standard`** (26 C.F.R. § 1.1031(a)-1(b),
  (c)) — the broad "like kind" standard for real property, sourced
  explicitly to the Treasury regulation rather than the bare statutory
  text.
- **`exch1031_identification_deadlines`** (26 U.S.C. § 1031(a)(3)(A),
  (B)) — the 45-day identification and 180-day completion deadlines.
- **`exch1031_exclusions`** (26 U.S.C. § 1031(a)(2); § 1031(h)) — what
  the nonrecognition rule does not cover, including dealer property
  and the foreign-versus-domestic real property rule.
- **`exch1031_boot_and_basis`** (26 U.S.C. § 1031(b), (d)) — boot and
  basis carryover at a factual level.
- **`exch1031_ca_reporting`** (Cal. Rev. & Tax. Code §§ 18032, 24953)
  — California's information-return requirement for exchanges into
  out-of-state replacement property.

## Genuine corrections and findings

- Corrected an initial assumption placing the foreign/domestic
  real-property exclusion in § 1031(a)(2). Direct review shows this
  rule has never lived in (a)(2) — it is a separate provision,
  § 1031(h) (added in 1989), framed as a like-kind-definition rule
  ("domestic and foreign real property are not property of a like
  kind"), not an (a)(2) exclusion, and it predates the 2017 amendment.
- Corrected the characterization of California's rule: §§ 18032 and
  24953 impose an annual information-return filing requirement, not a
  withholding tax collected from exchange proceeds. Noted that
  California does have a separate general real-estate withholding
  statute (§ 18662), but it is not part of this § 1031-specific
  mechanism and was not researched here.
- Confirmed the broad "like kind for real property" standard is
  correct in substance, but comes from Treasury regulations
  (26 C.F.R. § 1.1031(a)-1(b), (c)), not the bare statutory text —
  disclosed explicitly.
- Confirmed the 2017 Tax Cuts and Jobs Act's limitation of § 1031 to
  real property only, eliminating personal property exchanges.

## Honest gap disclosed

FTB Form 3840 ("California Like-Kind Exchanges") is the commonly-known
form associated with the §§ 18032/24953 filing requirement, but its
name/number could not be verified against a primary ftb.ca.gov
source — that domain is blocked by this environment's network egress
policy. Disclosed honestly rather than presented as independently
verified.

## Method

Fetched 26 U.S.C. § 1031 and 26 C.F.R. § 1.1031(a)-1 directly from
`law.cornell.edu`, and Cal. Rev. & Tax. Code §§ 18032 and 24953
directly from `leginfo.legislature.ca.gov`, each verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-identical or text-identical. All citation quotes programmatically
confirmed as exact substrings of the fetched, tag-stripped text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic across all 6 authority
  clauses — every clause correctly discloses same-section citations
  and correctly identifies the California pair as separately-codified
  mirror provisions; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`dateSigned`, `cityOfExecution`) independently confirmed
  to match existing corpus convention. New fields: `taxpayerName`,
  `relinquishedPropertyAddress`, `relinquishedLegalDescription`,
  `replacementPropertyAddress`, `replacementLegalDescription`,
  `transferDate`, `identificationDate`, `exchangeCompletionDate` — no
  existing document had a two-property (relinquished/replacement)
  shape to reuse from directly.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: 1031 Exchange — Information Sheet
  (`section_1031_exchange_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Real Estate category. New fields:
  `taxpayerName`, `relinquishedPropertyAddress`,
  `relinquishedLegalDescription`, `replacementPropertyAddress`,
  `replacementLegalDescription`, `transferDate`, `identificationDate`,
  `exchangeCompletionDate`.
- Corpus: 1,246 → 1,254 clauses; 157 → 158 documents. First document
  of wave 27.
