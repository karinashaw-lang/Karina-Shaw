# Business Formation, new document: California LLC Annual Fee — Information Sheet

## Why this document

Confirmed by grep that "LLC fee," "17942," and "total income" (in this
tax sense) had zero hits anywhere in the corpus. Read the LLC Articles
of Organization document (its `llc_articles_annual_tax` clause covers
only the flat $800 minimum tax) and both LLC Operating Agreement
documents (their tax clauses cover only federal check-the-box
classification) in full — confirmed none mention the separate,
income-tiered LLC fee. Third of wave 73's four documents.

## What this document covers

7 clauses: 2 drafting (purpose/scope, signature/certification) and 5
authority clauses, citing Cal. Rev. & Tax. Code §§ 17942(a)-(d),
17941(a), (d), and 24271(a):

- **`llcfee_scope`** (§ 17942(a), § 17941(d)) — who the fee applies to:
  LLCs subject to tax under § 17941, which by its own definitional
  language excludes an LLC taxable as a corporation for California tax
  purposes.
- **`llcfee_addition_to_franchise_tax`** (§ 17942(a), § 17941(a)) —
  **a key finding**: the fee is owed IN ADDITION to, not instead of,
  the flat $800 minimum tax — verified from the statute's own
  "[i]n addition to" language.
- **`llcfee_schedule`** (§ 17942(a)(1)-(4)) — the exact tiered fee
  schedule ($900 / $2,500 / $6,000 / $11,790) as codified.
- **`llcfee_total_income_defined`** (§ 17942(b)(1)(A), § 24271(a)) —
  **the central finding**: "total income" means gross income (adopting
  IRC § 61's gross-income definition via § 24271) plus cost of goods
  sold — NOT net profit — verified precisely rather than assumed from
  the term's plain-English sound.
- **`llcfee_estimate_timing`** (§ 17942(c), (d)(1)) — the fee is
  estimated and paid mid-year (by the 15th day of the 6th month), with
  a 10% underpayment penalty, ultimately due with the return.

## Genuine corrections and findings

- **The central finding**: confirmed "total income from all sources"
  is a gross-income concept (via the statute's own cross-reference
  chain to § 24271 and IRC § 61), not net profit — a precise,
  easy-to-overclaim distinction that means an LLC can owe a
  substantial fee in a year with little or no net profit.
- Confirmed the fee is additional to, not a substitute for, the $800
  minimum tax — verified from the statute's own "[i]n addition to"
  language rather than assumed from the general pattern of state
  business taxes.
- Confirmed the statute's own scope-definition language (excluding an
  LLC taxable as a corporation) rather than assuming the fee applies
  to every entity formed as an LLC regardless of tax election.
- Confirmed the mid-year estimate requirement (due by the 15th day of
  the 6th month) as distinct from the fee's ultimate due date (tied to
  the return's filing deadline under § 18633.5) — both timing rules
  stated precisely rather than conflated into one deadline.

## Honest gap disclosed

26 U.S.C. § 61 itself was not independently fetched (only its adoption
via § 24271(a)). Rev. & Tax. Code § 18633.5 (return-filing mechanics)
and FTB Form 3536 (the estimate-payment form in practice) were not
independently traced. Sections 25135-25137 (sales-sourcing rules for
"total income") were not independently restated. No assumption is made
about inflation adjustments or amendments to the fee schedule enacted
after the verification date.

## Method

Fetched Cal. Rev. & Tax. Code §§ 17941, 17942, and 24271 from
`leginfo.legislature.ca.gov` via curl (through the sandboxed proxy),
each section fetched twice with distinct User-Agent strings
(Chrome/Windows, Safari/macOS), confirmed byte-identical after
whitespace normalization. All 9 citation quotes across the 5 authority
clauses programmatically confirmed as exact substrings of the
confirmed text. Independently re-verified during integration review
via a third, separate fetch (Chrome/Linux User-Agent) of all three
sections, spot-checking all 8 distinct quoted passages — confirmed
clean.

## Verification

- Statutory sections fetched twice independently by the research agent
  with distinct User-Agent strings, plus a third independent fetch
  during integration review; all spot-checked quotes confirmed clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 17942(c)/(d)(1)
  correctly disclosed as parts of one statutory section; § 17941,
  § 17942, and § 24271 correctly disclosed as independent,
  separately-numbered sections in every other clause; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`preparerName`, `companyName`, `dateSigned`,
  `cityState`) independently confirmed to match existing corpus field
  definitions. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: California LLC Annual Fee — Information Sheet
  (`llc_annual_fee_info_sheet`), 7 clauses (5 authority + 2 drafting),
  in the Business Formation category. No new fields.
- Corpus: 2,617 → 2,624 clauses; 341 → 342 documents. Third document
  of wave 73.
