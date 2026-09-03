# Business Formation, new document: Dissenters' Rights (Appraisal Rights) — Information Sheet

## Why this document

Confirmed by grep that "dissenters' rights" and "appraisal rights" had
zero hits anywhere in the corpus. Fourth and final document of wave 57,
closing the wave.

## What this document covers

8 clauses: 2 drafting (purpose declaration, closing/signature) and 6
authority clauses, citing Cal. Corp. Code §§ 1300-1305, 1309, 1311-1313:

- **`dissenters_what_and_when`** (§§ 1300(a), 1313) — what dissenters'
  rights are and the transactions that trigger them, including
  extension to certain entity conversions.
- **`dissenters_market_out_exception`** (§§ 1300(b)(1), 1311) — **a key
  finding**: the market-out exception for listed shares is narrower
  than commonly assumed, with two distinct carve-backs, plus a
  textually separate § 1311 exclusion.
- **`dissenters_procedure_demand`** (§§ 1301(b)-(c), 1302) — the
  written demand and share-endorsement procedure and deadlines.
- **`dissenters_valuation_and_payment`** (§§ 1300(a), 1303(a)-(b)) —
  the fixed valuation date/method and payment timing.
- **`dissenters_court_action_and_costs`** (§§ 1304(a), 1305(e)) — the
  court process for resolving disputes and its cost-shifting rule.
- **`dissenters_loss_of_status_and_no_other_remedy`** (§§ 1309, 1312(a))
  — how dissenting-share status can be lost, and the statute's limit
  on attacking the transaction itself.

## Genuine corrections and findings

- **A correction of the task's own framing**: the research assignment's
  parenthetical describing Chapter 13 as "Reorganizations" was factually
  wrong — Chapter 13 (§§ 1300-1313) is titled "Dissenters' Rights";
  "Reorganizations" is the neighboring Chapter 12 (§§ 1200-1203).
  Corrected throughout the delivered clauses.
- **The market-out exception is not a blanket rule**: it strips
  dissenters' rights from listed shares only when the meeting notice
  summarized §§ 1300-1304, AND it is defeated (rights survive) if there
  is any transfer restriction, or if the shareholder must accept
  anything other than listed acquirer stock (plus cash only for
  fractional shares) — precisely stated rather than assumed as a
  blanket denial for exchange-listed stock.
- **A textually separate exclusion**, § 1311, removes certain share
  classes from most of the chapter based on their own contractual
  payment terms — unrelated to listing status; the document explicitly
  discloses that the interaction between the two exceptions is not
  addressed by the statute and is left unresolved rather than guessed.
- Confirmed the valuation date is fixed precisely: the day of, and
  immediately before, first announcement of the transaction's terms —
  not signing or closing.
- Confirmed cost-shifting to the corporation under § 1305(e) requires
  the court's award to exceed 125% of the corporation's offered price
  before attorneys'/expert fees and interest become available.
- An ambiguity in § 1301(b)(1)'s cross-reference to "shares described in
  subdivision (b) of Section 1300" is quoted verbatim rather than
  resolved by inference, with the ambiguity disclosed explicitly.

## Honest gap disclosed

Section 1201's substantive definitions of the reorganization
subdivisions that trigger the right were not independently fetched.
Section 1306 (the mechanism converting unpaid value into subordinated
debt) and § 1304(b)-(c) / § 1305(a)-(d) procedural details were not
independently verified. § 25100(o)'s currently-certified exchanges were
not independently confirmed.

## Method

Fetched Cal. Corp. Code §§ 1300, 1301, 1302, 1303, 1304, 1305, 1309,
1311, 1312, 1313 directly from `leginfo.legislature.ca.gov`, each
fetched twice via genuinely distinct methods (Chrome/Windows UA vs.
Safari/macOS UA plus an added header), confirmed byte-identical after
whitespace normalization for all ten sections. All 12 citation quotes
programmatically confirmed as exact substrings of the confirmed text.

## Verification

- All sections fetched twice independently with genuinely distinct
  methods; confirmed clean on integration.
- A cosmetic formatting issue (an unclosed disclaimer bracket in the
  closing signature-block clause) was caught and fixed before merge.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — subdivisions of the
  same section correctly disclosed as one source; genuinely separate
  sections (e.g. § 1300 vs. § 1311, § 1301 vs. § 1302) correctly
  disclosed as independent; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `entityType`, `shareholderName`,
  `dateSigned`, `cityState`) independently confirmed to match existing
  corpus field definitions. Two genuinely new fields confirmed necessary
  and added: `numberOfSharesHeld`, `reorganizationDescription`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Dissenters' Rights (Appraisal Rights) — Information
  Sheet (`dissenters_rights_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Business Formation category. Two new fields:
  `numberOfSharesHeld`, `reorganizationDescription`.
- Corpus: 2,169 → 2,177 clauses; 278 → 279 documents. Fourth and final
  document of wave 57, closing the wave.
