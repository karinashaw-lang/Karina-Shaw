# Confidentiality & IP, new document: California Data Broker Registration Act (Delete Act) — Information Sheet

## Why this document

Confirmed by grep that "data broker" and "delete act" had zero hits
anywhere in the corpus. Read the existing CCPA Consumer Privacy Policy
document's clauses first — this document is a genuine companion (the
CCPA governs a covered business's data practices generally; the Data
Broker Registration Act imposes separate registration, fee, and
deletion-platform obligations specifically on businesses meeting the
narrower "data broker" definition). Third of wave 66's four documents.

## What this document covers

7 clauses: 2 drafting (recitals, signature block) and 5 authority
clauses, citing Cal. Civ. Code §§ 1798.99.80(c), 1798.99.82(a)-(d),
and 1798.99.86(a), (c)(1):

- **`databroker_definition_and_exemptions`** (§ 1798.99.80(c)) — the
  "no direct relationship with the consumer" definitional element and
  the four statutory exemptions (FCRA, GLBA, Insurance Information and
  Privacy Protection Act, and CMIA/HIPAA-linked § 1798.146).
- **`databroker_registration_authority_and_fee`** (§ 1798.99.82(a)-(b)(1))
  — **a key finding**: registration is with the California Privacy
  Protection Agency, not the Attorney General — verified against
  current text (Stats. 2025, Ch. 466/SB 361).
- **`databroker_registration_required_content`** (§ 1798.99.82(b)(2))
  — the full required registration content list (subparagraphs (A)
  through (X)).
- **`databroker_drop_mechanism_and_deadlines`** (§ 1798.99.86(a),
  (a)(2)-(3), (c)(1), (c)(1)(A)) — **a key finding**: the DROP platform
  and its phased compliance deadlines, both already passed as of this
  document's preparation date.
- **`databroker_penalties_for_noncompliance`** (§ 1798.99.82(c)-(d)) —
  the two parallel $200/day administrative fine schemes for failure to
  register and failure to comply with DROP.

## Genuine corrections and findings

- **The central finding, precisely dated**: verified the current text
  sets January 1, 2026 as the CPPA's DROP-establishment deadline and
  August 1, 2026 as data brokers' compliance-start deadline — both
  already passed as of this document's September 4, 2026 preparation
  date — explicitly disclosed as the statute's legal deadline, not a
  claim about actual on-the-ground implementation status, which the
  agent honestly noted a statutory-text check cannot confirm.
- Confirmed the registering authority is currently the California
  Privacy Protection Agency, not the Attorney General — verified
  against current amended text rather than assumed from the statute's
  original 2019 enactment.
- Confirmed two genuinely distinct, parallel $200/day fine schemes
  (failure to register vs. failure to comply with DROP deletion
  requirements) rather than one uniform penalty.
- Confirmed the "no direct relationship with the consumer" element as
  the specific textual distinction separating "data broker" coverage
  from the CCPA's broader business coverage.

## Honest gap disclosed

The AG-to-CPPA authority-transition legislative history was not
independently traced — only current text verified. No specific CPPA
registration fee dollar amount was found or asserted (the statute
leaves the amount to the Agency's own determination). DROP's actual
operational status as of the preparation date was not verified — only
the statutory deadlines. The 2028 third-party audit requirement
(§ 1798.99.86(e)(1)) was fetched but not built into its own clause to
avoid padding.

## Method

Fetched Cal. Civ. Code §§ 1798.99.80, 1798.99.82, and 1798.99.86 from
`leginfo.legislature.ca.gov` via curl (WebFetch blocked), each section
fetched twice with distinct User-Agent strings, confirmed
byte-identical after whitespace normalization. All 10 citation quotes
programmatically confirmed as exact substrings of the confirmed text.

## Verification

- All three sections fetched twice independently with distinct
  User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — all citation pairs
  correctly disclosed as subsections of the same statutory section,
  not independent of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`businessName`, `contactMethod`, `preparerName`,
  `dateSigned`, `cityState`) independently confirmed to match existing
  corpus field definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: California Data Broker Registration Act (Delete Act)
  — Information Sheet (`data_broker_registration_act_info_sheet`), 7
  clauses (5 authority + 2 drafting), in the Confidentiality & IP
  category. No new fields.
- Corpus: 2,418 → 2,425 clauses; 312 → 313 documents. Third document
  of wave 66.
