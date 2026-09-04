# Estate Planning, new document: California Homestead Exemption — Information Sheet

## Why this document

Confirmed by grep that "homestead" and "704.710" had zero hits
anywhere in the corpus. Third of wave 63's four documents.

## What this document covers

7 clauses: 2 drafting (purpose, signature/acknowledgment) and 5
authority clauses, citing Cal. Code Civ. Proc. §§ 704.710, 704.720,
704.730, 704.740, 704.750, 704.800, 704.850, and 704.920:

- **`homestead_definitions`** (§ 704.710(a), (c)) — the statutory
  definitions of "dwelling" and "homestead" (principal residence only).
- **`homestead_exemption_amount`** (§ 704.730(a)-(b)) — **a key
  finding**: the current post-AB-1885 formula — the greater of a
  countywide-median-price figure capped at $600,000, or a $300,000
  floor, both inflation-adjusted annually since 2022 — verified against
  current text (last amended by SB 1525, eff. Jan. 1, 2025), not
  pre-2021 flat status-based figures.
- **`homestead_automatic_vs_declared`** (§§ 704.720(a), 704.740(a),
  704.920) — **a key finding**: the automatic Article 4 exemption
  requires no recorded declaration, genuinely distinct from the
  separate, optional "declared homestead" recording procedure under
  Article 5.
- **`homestead_forced_sale_mechanism`** (§§ 704.750(a), 704.800(a)) —
  the notice/20-day deadline and the minimum-bid rule protecting the
  exemption amount.
- **`homestead_proceeds_distribution`** (§ 704.850(a)) — the five-tier
  order of distribution: liens/encumbrances first, then the debtor's
  exemption, then costs, then the creditor, then any remainder to the
  debtor.

## Genuine corrections and findings

- **The central finding, current not stale**: verified the exemption
  amount formula as amended effective January 1, 2025 (SB 1525) — the
  greater of a countywide median-price figure (capped at $600,000) or a
  flat $300,000 floor, both inflation-adjusted annually — replacing the
  pre-2021 flat, marital/head-of-household/age-or-disability-based
  dollar amounts. No stale pre-AB-1885 figures used anywhere.
- Confirmed the automatic exemption and the declared homestead are two
  genuinely distinct statutory mechanisms (Article 4 vs. Article 5),
  clearly distinguished rather than conflated.
- Confirmed the exemption amount is paid to the debtor from sale
  proceeds before the judgment creditor is paid anything — liens and
  encumbrances first, then the debtor's exempt amount, then the
  creditor.

## Honest gap disclosed

The current-year inflation-adjusted dollar figures (published
administratively, not restated in the statutory text) are not stated —
only the statutory floor, ceiling, and adjustment mechanism.
§ 704.800(a)'s text names "liens and encumbrances" broadly with
"attachment or judgment lien" only as non-exclusive examples; whether a
mortgage/deed of trust, mechanic's lien, or property tax lien is
treated identically was not independently verified and is disclosed
as a gap rather than assumed. § 704.850(b)'s cross-references to
§§ 701.820 and 701.830 are not described. Declared-homestead-specific
requirements and effects (Article 5) are out of scope.

## Method

Fetched Cal. Code Civ. Proc. §§ 704.710, 704.720, 704.730, 704.740,
704.750, 704.800, 704.850, and 704.920 from `leginfo.legislature.ca.gov`
via curl (WebFetch blocked), each section fetched twice with distinct
User-Agent strings, confirmed byte-identical after whitespace
normalization. All 10 citation quotes programmatically confirmed as
exact substrings of the confirmed text.

## Verification

- All eight sections fetched twice independently with distinct
  User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 704.710's
  subsections and § 704.730's subsections correctly disclosed as one
  section each, not independent; §§ 704.720/704.740 (Article 4) and
  § 704.920 (Article 5) correctly disclosed as separately numbered,
  independent sections; §§ 704.750/704.800 correctly disclosed as
  independent of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  accepted generic drafting-title reuse pattern.
- Field names (`homeownerName`, `propertyAddress`, `county`,
  `dateSigned`, `cityOfExecution`) independently confirmed to match
  existing corpus field definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: California Homestead Exemption — Information Sheet
  (`homestead_exemption_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the Estate Planning category. No new fields.
- Corpus: 2,336 → 2,343 clauses; 301 → 302 documents. Third document of
  wave 63.
