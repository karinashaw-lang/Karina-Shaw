# Estate Planning, new document: QTIP Trust (Qualified Terminable Interest Property) — Information Sheet

## Why this document

First processed item of wave 142 (Estate Planning slot, 1×4 pattern).
The agent's novelty check confirmed the only prior corpus mention of
"QTIP" was a passing reference inside `esttax_marital_deduction`'s own
gap field, which explicitly states § 2056(b)(7) "was not researched
or cited here" — a self-disclosed gap this new document fills without
duplicating that clause's own scope (§ 2056(a) only). A personal
duplication spot-check independently confirmed zero prior corpus hits
on any of the six cited Probate Code sections, and identified the
apparent "2044" hit as a false-positive Unicode-escape artifact (a
fraction-slash character rendered as `⁄` inside an unrelated
withholding-rate clause's `json.dumps` output), not a real citation
collision.

## What this document covers

9 clauses: 2 drafting (intro, acknowledgment) and 7 authority clauses,
citing 26 U.S.C. § 2056(b)(7)(A)(i), § 2056(b)(7)(B)(ii)(I), § 2044(a),
and Cal. Probate Code §§ 21522(a)-(b), 21524(a)-(c), 21526:

- **`qtip_federal_election_treated_as_passing`** — the federal
  election's "treated as passing" effect for marital-deduction
  purposes.
- **`qtip_federal_qualifying_income_interest`** — the federal
  "qualifying income interest for life" definition.
- **`qtip_federal_inclusion_second_estate`** — the federal rule
  including QTIP property in the surviving spouse's own later gross
  estate.
- **`qtip_ca_construction_duty`** — California's default construction
  rule requiring instruments and fiduciaries to preserve the
  deduction (two citations).
- **`qtip_ca_mandatory_income_beneficiary`** — California's sole-
  beneficiary and at-least-annual-income requirements (two citations).
- **`qtip_ca_unproductive_property_conversion`** — the spouse's
  statutory right to require unproductive trust property be made
  productive.
- **`qtip_ca_fiduciary_election_immunity`** — the fiduciary's
  good-faith immunity for the election decision.

## Genuine findings

- **A self-corrected extraction false alarm during integration
  review**: an initial pass of the § 2056(b)(7)(B)(ii)(I) quote
  appeared to fail both a direct and a normalized-whitespace match
  against the freshly fetched Cornell LII text. Inspecting the raw
  HTML showed the actual source reads `<a...>property</a>, payable`
  with no space before the comma — the apparent mismatch was caused
  by this review's own tag-stripping script inserting a space at
  every HTML tag boundary, including a closing `</a>` tag immediately
  before punctuation. Re-extracting with tags removed to empty string
  (rather than a space) confirmed the delivered quote is an exact,
  direct match; this was a reviewer tooling artifact, not a defect in
  the delivered clause.
- **A disclosed benign line-wrap artifact**, confirmed identical
  across two independent fetches by the research agent and
  independently reconfirmed during integration review: the § 21524(c)
  quote's normalization of a mid-phrase HTML line-wrap between "a"
  and "reasonable," disclosed in that clause's gap.
- **A disclosed, deliberate scope split from an existing corpus
  clause**: the document's own intro and citations are careful to
  cite only § 2056(b)(7), leaving the existing `esttax_marital_
  deduction` clause's § 2056(a) coverage untouched and cross-
  referencing rather than duplicating it.

## Honest gap(s) disclosed

This document does not address the mechanics or irrevocability of
making the federal QTIP election itself, the parallel gift-tax QTIP
rule (§ 2523(f)), § 2044(b)-(c)'s scope limits, the surviving spouse's
§ 2207A reimbursement right, the § 2519 gift-tax acceleration rule,
the federal "usufruct interest" and "specific portion" severability
rules, Prob. Code § 21521's estate-trust exception, § 21523's pre-1981
transitional rule, the technical unitrust/total-return income
definition cross-referenced in § 21524(b), and does not cite any case
law construing these provisions.

## Method

Fetched Cal. Probate Code §§ 21522, 21524, and 21526 from
leginfo.legislature.ca.gov, and 26 U.S.C. §§ 2056 and 2044 from
Cornell LII, each fetched twice by the research agent with two
distinct User-Agent strings via curl, confirmed byte-identical. All 9
citation instances were programmatically confirmed by the research
agent as exact, contiguous substrings, with one disclosed line-wrap
normalization.

Independently re-verified during integration review via a two-
hundred-and-thirtieth fetch (a new distinct curl User-Agent string,
"Groundtruth-230thVerify-QTIPTrust/1.0") of all five statutory
sources — all fetched cleanly on the first attempt. 8 of 9 citation
instances confirmed clean on direct substring match after correcting
this review's own tag-stripping extraction (see Genuine findings
above); the remaining instance (§ 21524(c)) confirmed clean only after
normalizing the already-disclosed line-wrap artifact. The federal
election's passing-effect rule, the qualifying-income-interest
definition, the second-estate-inclusion rule, the California
construction duty, the sole-beneficiary and annual-income
requirements, the unproductive-property conversion right, and the
fiduciary election immunity were all independently reconfirmed
present in the freshly fetched text.

## Verification

- All five cited statutory sources fetched twice independently by the
  research agent with distinct User-Agent strings, plus a two-
  hundred-and-thirtieth independent fetch during integration review;
  all 9 citation instances confirmed clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `qtip_` prefix has zero collisions. Ran section-
  number-specific greps for "21520" through "21526," "2056(b)(7),"
  "2044," and "QTIP" — the two apparent hits confirmed false positives
  (a disclosed non-coverage mention in an existing clause's gap field,
  and a Unicode fraction-slash escape artifact) by inspecting each hit
  directly.
- Checked every citation's `case` field for emptiness — all 9
  populated with proper citation identifier strings.
- No new field ids required — all seven fields (`settlorName`,
  `survivingSpouseName`, `trusteeName`, `beneficiaryName`,
  `dateSigned`, `cityState`, `preparerName`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: QTIP Trust (Qualified Terminable Interest Property) —
  Information Sheet (`qtip_trust_info_sheet`), 9 clauses (7 authority
  + 2 drafting), in the Estate Planning category. No new fields.
- Corpus: 4,707 → 4,716 clauses; 584 → 585 documents. First processed
  item of wave 142.
