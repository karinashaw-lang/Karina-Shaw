# Business Formation, new document: UCC-1 Financing Statement — Information and Filing Worksheet

## Why this document

Confirmed by grep that "ucc-1" and "financing statement" had zero
hits anywhere. Read the Mechanics Lien Preliminary Notice and Charging
Order documents in full — confirmed neither addresses UCC Article 9
security interests (a mechanics lien secures real-property construction
claims; a charging order is a judgment-creditor remedy against an
LLC/partnership interest — both different mechanisms from a consensual
Article 9 security interest). Confirmed non-duplicative. First of
wave 77's four documents (2×2: Business Formation + Family Law).

## What this document covers

7 clauses: 2 drafting (purpose/scope, filing worksheet/acknowledgment)
and 5 authority clauses, citing Cal. Com. Code §§ 9502(a), (d),
9203(a), 9308(a), 9509(a), (b), 9515(a), (c), (d), and 9322(a)(1)-(2):

- **`ucc1_sufficiency_requirements`** (§ 9502(a), (d)) — the three
  statutory sufficiency conditions, and confirmation a financing
  statement may be filed BEFORE the security interest attaches.
- **`ucc1_attachment_vs_perfection`** (§ 9203(a), § 9308(a)) — **the
  central finding**: attachment and perfection are genuinely two
  distinct legal events governed by separate statutory chapters —
  filing alone doesn't create enforceability, and attachment alone
  doesn't secure priority against third parties.
- **`ucc1_authorization`** (§ 9509(a)-(b)) — the debtor-authorization
  requirement, and that signing a security agreement automatically
  authorizes the corresponding financing-statement filing.
- **`ucc1_duration_lapse`** (§ 9515(a), (c), (d)) — the five-year
  effective period, the consequences of lapse (unperfection, treated
  as never perfected against a value purchaser), and the narrow
  six-month continuation-filing window.
- **`ucc1_priority`** (§ 9322(a)(1)-(2)) — **a key finding**: the
  first-in-time priority rule stated with its actual statutory
  mechanics (dating from the earlier of first filing or first
  perfection, with a no-gap condition) rather than a generic
  "first-to-file always wins" claim, and its own express
  subject-to-exceptions qualifier.

## Genuine corrections and findings

- **The central finding**: confirmed attachment and perfection as a
  genuine two-step structure from separate statutory sections, rather
  than treating a UCC-1 filing as if it alone both creates and
  perfects a security interest.
- Confirmed a financing statement may be filed before the security
  interest attaches — filing is not conditioned on attachment having
  already occurred, a precise sequencing point verified from the
  statute's own text.
- Confirmed the priority rule's own qualifiers (a no-intervening-gap
  condition, and an express "except as otherwise provided" scope)
  rather than presenting it as an unconditional first-to-file rule.
- Confirmed signing a security agreement does double duty as filing
  authorization under § 9509(b) — the debtor need not separately sign
  a distinct authorization document for that same collateral.

## Honest gap disclosed

Collateral-description sufficiency standards, debtor-name-matching
rules, and actual priority determinations in any specific dispute are
explicitly outside what this worksheet determines. § 9203(b)(3)'s
alternative attachment conditions (only the signed-security-agreement
path is described), §§ 9310-9316's specific perfection methods,
§ 9509's agricultural-lien and after-acquired-collateral authorization
paths, § 9515(b)'s 30-year rule, and § 9322(a)(3) and (b)-(g)'s further
priority mechanics are not restated.

## Method

Fetched Cal. Com. Code §§ 9502, 9203, 9308, 9509, 9515, and 9322 from
`leginfo.legislature.ca.gov` via curl (through the sandboxed proxy),
each section fetched twice with distinct User-Agent strings, confirmed
byte-identical after whitespace normalization. All 11 citation quotes
across the 5 authority clauses programmatically confirmed as exact
contiguous substrings of the confirmed text (no ellipsis-joined
quotes). Independently re-verified during integration review via a
third fetch (Safari/macOS User-Agent) of all six sections — all 11
quotes confirmed clean.

## Verification

- Statutory sections fetched twice independently by the research agent
  with distinct User-Agent strings, plus a third independent fetch
  during integration review; all quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — same-section
  citations (§ 9502(a)/(d), § 9509(a)/(b), § 9515(a)/(c)/(d),
  § 9322(a)(1)/(2)) each correctly disclosed as not independent of one
  another; § 9203 vs. § 9308 correctly disclosed as independently-
  numbered sections; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Three new fields required (`debtorName`, `securedPartyName`,
  `collateralDescription`) — checked against the full corpus's
  existing field ids first to confirm no equivalent field already
  existed. One field (`preparerName`) reused from the existing corpus.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: UCC-1 Financing Statement — Information and Filing
  Worksheet (`ucc1_financing_statement_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Business Formation category. 3 new
  fields.
- Corpus: 2,706 → 2,713 clauses; 355 → 356 documents. First document
  of wave 77.
