# Business Formation, new document: California Corp. Code § 2115 — Application of California Corporate Law to Out-of-State Corporations — Information Sheet

## Why this document

Second processed item of wave 124 (Business Formation slot). The agent
confirmed via a direct read of the existing `foreign_entity_qualification_info_sheet`
document (Corp. Code §§2105/2203/2258, Chapter 21 registration to
transact business) that it covers only the separate qualification
requirement, not §2115's choice-of-law/internal-affairs override.
Grepped the corpus for "2115," "2116," "internal affairs," "pseudo-
foreign," and "quasi-California" — zero genuine hits (the one "2117"
substring hit was confirmed by context to be an unrelated Unemployment
Insurance Code section). Personally reconfirmed via corpus search:
zero prior mentions of "2115" anywhere in the corpus.

## What this document covers

10 clauses: 2 drafting (declaration/scope, closing/signature) and 8
authority clauses, citing Corp. Code § 2115(a), (b), (c), (d), (e), (f)
(the entire statute, quoted across its subdivisions):

- **`corp2115_threshold_test`** — the two-part conjunctive test
  (>50% average property/payroll/sales factor AND >50% California-
  resident voting securities).
- **`corp2115_nominee_holder_certification`** — how nominee/broker-held
  securities are counted toward the voting-securities prong.
- **`corp2115_applicable_provisions_governance`** — the director,
  distribution, and voting provisions §2115(b) applies.
- **`corp2115_applicable_provisions_structural`** — the asset-sale,
  merger, reorganization, dissenters'-rights, and records provisions
  §2115(b) applies.
- **`corp2115_exemptions`** — the exchange-listing and wholly-owned-
  subsidiary exemptions.
- **`corp2115_effective_date`** — the 135th-day/court-order timing rule
  for when §2115(b) begins to apply.
- **`corp2115_cessation_date`** — the parallel timing rule for when
  §2115(b) ceases to apply.
- **`corp2115_disclosure_duty`** — the 30-day written-disclosure duty
  and its cost/fee-shifting judicial remedy.

## Genuine findings

- **A disclosed structural distinction from an existing corpus
  document**: every relevant clause explicitly distinguishes §2115
  (Chapter 21.5, choice-of-law/internal-affairs override, operating
  independently of qualification status) from the existing Foreign
  Entity Qualification document (Chapter 21, the separate registration
  requirement to transact business).
- **A disclosed amendment-history finding**: the exemptions clause's
  gap notes that the current exchange names (NYSE American, NASDAQ
  Global Market, NASDAQ Capital Market) reflect the 2022 SB 1202
  amendment updating older exchange terminology.
- **A disclosed, deliberate choice not to independently verify
  cross-referenced sources**: multiple gap fields disclose that the
  cross-referenced Rev. & Tax. Code §§25129/25132/25134 apportionment
  definitions and the federal SEC Rule 14b-1(b)(3)/14b-2(b)(3)
  certification rules were not independently fetched or verified —
  only §2115's own cross-reference text is quoted.
- **A disclosed, deliberate choice not to restate the substantive
  content of cross-referenced governance provisions**: the two
  "applicable provisions" clauses quote only §2115(b)'s own list of
  cross-referenced sections, not the underlying sections' substantive
  text, several of which this corpus may separately cover for
  California corporations directly.

## Honest gap(s) disclosed

This document does not apply the statutory test to any specific
corporation, does not independently verify the Rev. & Tax. Code
apportionment-factor definitions or the federal SEC nominee-
certification rules, does not restate the substantive content of any
of the ~20 cross-referenced governance provisions in §2115(b)'s list,
does not calculate a specific effective or cessation date for any
corporation or address an income-year change during the relevant
period, does not address a court order later reversed on appeal after
the relevant income year closes, and does not define what would make
attorneys' fees "reasonable" under the disclosure-duty remedy.

## Method

Fetched Corp. Code §2115 from leginfo.legislature.ca.gov, fetched
twice by the research agent with two distinct User-Agent strings,
confirmed byte-identical on the extracted statutory-text fragment
(170,886 / 170,374 raw bytes, differing only in a per-request
ViewState token). CourtListener was not needed for this pure-statutory
topic. All 8 citation instances programmatically confirmed by the
research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-sixty-seventh fetch (a new distinct curl User-Agent
string, "Groundtruth-167thVerify-PseudoForeignCorp2115/1.0") — the
fetched byte count (170,886 bytes) matched the agent's first-fetch
report exactly, and all 8 citation instances confirmed clean on direct
normalized-whitespace substring match, zero extraction artifacts
encountered. The two-part test, the nominee-certification rule, both
provision lists, the exemptions, the effective/cessation-date rules,
and the disclosure duty were all independently reconfirmed present in
the freshly fetched text.

## Verification

- The primary source fetched twice independently by the research agent
  with distinct User-Agent strings, plus a one-hundred-and-sixty-
  seventh independent fetch during integration review; all 8 citation
  instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — every clause
  correctly discloses that all citations in this document derive from
  subdivisions of the single statute §2115 and are not independent
  sources of one another; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `corp2115_` prefix has zero collisions. Independently
  reconfirmed zero prior corpus mentions of "2115," and reconfirmed
  the existing Foreign Entity Qualification document addresses a
  distinct statutory chapter.
- Checked every citation's `case` field for emptiness — all 8
  populated with proper citation identifier strings.
- No new fields required — all seven fields (`companyName`,
  `entityType`, `stateOfFormation`, `principalOfficeAddress`,
  `authorizedSignerName`, `dateSigned`, `cityState`) reused from the
  existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: California Corp. Code § 2115 — Application of
  California Corporate Law to Out-of-State Corporations — Information
  Sheet (`pseudo_foreign_corporation_2115_info_sheet`), 10 clauses (8
  authority + 2 drafting), in the Business Formation category. No new
  fields.
- Corpus: 4,055 → 4,065 clauses; 521 → 522 documents. Second processed
  item of wave 124.
