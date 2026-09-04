# Business Formation, new document: Restrictions on Distributions to Shareholders — Information Sheet

## Why this document

Confirmed by grep that "distribution restriction," "solvency test,"
and "retained earnings test" had zero hits anywhere in the corpus —
the corpus covers dissolution and stock mechanics but not the ongoing
statutory limits on paying distributions to shareholders. Read the
existing Dissenters' Rights document's clauses first and confirmed no
overlap (that document covers appraisal rights in reorganizations, a
distinct topic from ongoing distribution limits). Third of wave 65's
four documents.

## What this document covers

7 clauses: 2 drafting (purpose, worksheet/signature) and 5 authority
clauses, citing Cal. Corp. Code §§ 166, 500(a)-(d), 501, 309(a), (c),
316(a), (d), and 506(a)-(b):

- **`distrestrict_definition`** (§ 166) — the statutory definition of
  "distribution to its shareholders," including its narrow exclusions
  and timing rules.
- **`distrestrict_balance_sheet_tests`** (§ 500(a)-(d)) — **a key
  finding**: the current retained-earnings and asset-versus-liabilities
  alternative tests, verified to contain no fixed numeric ratio or
  cushion multiplier.
- **`distrestrict_equitable_insolvency`** (§ 501) — the separate,
  independently-stated ability-to-pay-maturing-debts test, distinct
  from § 500's balance-sheet tests.
- **`distrestrict_director_liability`** (§ 316(a), (d) + § 309(a), (c))
  — joint-and-several director liability for approving a prohibited
  distribution, expressly qualified by § 309's good-faith/due-care
  standard.
- **`distrestrict_shareholder_liability`** (§ 506(a)-(b)) — a
  shareholder's liability for knowingly receiving a prohibited
  distribution, with a four-year limitations period.

## Genuine corrections and findings

- **The central finding**: the current § 500(a) asset-versus-
  liabilities test (as amended by SB 1498, effective January 1, 2023)
  states no fixed numeric ratio or multiplier — it's a 1:1
  equity-sufficiency test (assets ≥ liabilities + preferential rights
  amount), verified against the current text rather than assumed to
  match a general "cushion ratio" impression.
- Confirmed § 316's director liability is expressly made "subject to
  the provisions of Section 309" — the general good-faith/reasonable-
  care standard operates as a qualifying defense, not a separate,
  unrelated provision.
- Confirmed two genuinely independent, differently-numbered sections
  (§ 500's balance-sheet tests and § 501's separate ability-to-pay-
  debts test) — a distribution can satisfy § 500 and still be
  restricted by § 501 if it would leave the corporation unable to meet
  maturing liabilities.
- Confirmed § 506's shareholder liability is conditioned on the
  shareholder receiving the distribution "with knowledge of facts
  indicating the impropriety thereof" — not strict liability.

## Honest gap disclosed

§ 500(e)'s indebtedness-as-distribution rule and § 500(f)'s licensed-
broker-dealer exception were deliberately omitted rather than padded
in. § 506(d)'s cross-reference to Civil Code fraudulent-transfer
liability was flagged as unverified rather than asserted. Section 501
does not itself specify what accounting method or evidentiary standard
governs the ability-to-pay-debts assessment, and this document does
not supply one.

## Method

Fetched Cal. Corp. Code §§ 166, 500, 501, 309, 316, and 506 from
`leginfo.legislature.ca.gov` via curl (WebFetch blocked), each section
fetched twice with distinct User-Agent strings, confirmed byte-
identical after whitespace normalization. All 10 citation quotes
programmatically confirmed as exact substrings of the confirmed text.

## Verification

- All six sections fetched twice independently with distinct
  User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 166's two citations
  and § 500's three citations correctly disclosed as one section each,
  not independent of each other; § 501 correctly disclosed as
  independent of § 500 and § 166; § 316 and § 309 correctly disclosed
  as genuinely distinct sections despite § 316's own cross-reference to
  § 309; § 506 correctly disclosed as independent of the others;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`companyName`, `entityType`, `preparerName`,
  `officerTitle`, `dateSigned`, `cityState`) independently confirmed to
  match existing corpus field definitions. One genuinely new field
  added: `proposedDistributionDescription`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: Restrictions on Distributions to Shareholders —
  Information Sheet (`distribution_restrictions_info_sheet`), 7
  clauses (5 authority + 2 drafting), in the Business Formation
  category. One new field: `proposedDistributionDescription`.
- Corpus: 2,395 → 2,402 clauses; 309 → 310 documents. Third document
  of wave 65.
