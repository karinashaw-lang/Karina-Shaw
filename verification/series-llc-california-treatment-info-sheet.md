# Business Formation, new document: Series LLCs and California Law — Information Sheet

## Why this document

Confirmed by grep that "series llc" had zero hits anywhere in the
corpus. Read the LLC Articles of Organization, Foreign LLC/Corporation
Qualification, and Statutory Conversion documents in full — none
mention series LLCs. A verified-absence document, following this
project's established pattern (e.g. the LLC buyout-right gap, the GINA
private-right-of-action gap). Fourth and last document of wave 73.

## What this document covers

5 clauses: 2 drafting (declaration/intro, closing/signature) and 3
authority clauses, citing Cal. Corp. Code §§ 17702.01(b), 17712.01,
and 17708.02(a) (California's RULLCA), plus California Franchise Tax
Board's own published Form 568 booklet and "Series LLC" webpage:

- **`seriesllc_no_domestic_formation`** (§§ 17702.01(b), 17712.01) —
  **the central finding**: California's RULLCA contains no domestic
  series-LLC formation mechanism — verified by a full-text search of
  every one of the Act's 13 articles for the word "series" (zero
  occurrences), and by confirming the Act's only membership-tiering
  provision (Class Provisions) creates classes of members, not
  asset-partitioned series.
- **`seriesllc_foreign_registration`** (§ 17708.02(a)) — a series LLC
  formed elsewhere registers to transact business in California
  through the same generic foreign-LLC framework as any other
  out-of-state LLC, with no series-specific application content or
  procedure.
- **`seriesllc_per_series_tax_treatment`** (FTB Form 568 booklet, FTB
  "Series LLC" webpage) — the FTB's own administrative instructions
  treat each qualifying series (under a home-state law that
  asset-partitions redemption/liquidation/income rights and
  expenses/liabilities per series) as a separate LLC for the $800
  annual tax and LLC fee — an out-of-state series LLC with several
  California-registered series can owe that tax and fee once per
  qualifying series, not once for the whole entity.

## Genuine corrections and findings

- **The central finding**: confirmed via a described, complete search
  (not just an inability to find a provision) that California's RULLCA
  has no domestic series-LLC mechanism — the search covered all 13
  articles of the Act, not just the formation article.
- Confirmed the per-series $800 tax/fee treatment rests on FTB
  administrative guidance (its own tax-return instructions and
  informational webpage), not on codified Revenue & Taxation Code
  text — directly checked § 17941 and confirmed it contains no
  series-specific language, disclosed honestly as a mirror/
  administrative-tier source rather than presented as a statutory rule.
- Checked and ruled out two specific candidate FTB Legal Ruling numbers
  (2014-01, 2015-01) as unrelated to series LLCs, rather than assuming
  a formal ruling existed without verifying.
- Did not overclaim: the clauses make no claim about other states'
  series-LLC statutes beyond a generic, unquoted reference to explain
  what "series" means, and no claim that California's law could never
  change to add a domestic series mechanism.

## Honest gap disclosed

The Secretary of State's own forms and filing instructions for foreign
LLC registration were not independently reviewed (only the statutory
application-content requirements). No FTB Legal Ruling or Chief
Counsel Ruling specifically addressing series LLCs was located.

## Method

Fetched Cal. Corp. Code §§ 17702.01, 17712.01, and 17708.02, plus the
complete text of all 13 RULLCA articles, from `leginfo.legislature.ca.gov`
via curl (through the sandboxed proxy), each fetched twice with
distinct User-Agent strings, confirmed byte-identical. Separately
fetched the FTB's 2025 Form 568 booklet and "Series LLC" webpage,
twice with distinct User-Agent strings, confirmed byte-identical. All
6 citation quotes across the 3 authority clauses programmatically
confirmed as exact substrings. Independently re-verified during
integration review via a third fetch of all three statutory sections
(Chrome/Windows User-Agent) and a separate fetch of both FTB sources
— all 6 quotes confirmed clean.

## Verification

- Statutory sections and FTB sources fetched twice independently by
  the research agent with distinct User-Agent strings, plus a third
  independent fetch of every source during integration review; all
  quotes confirmed clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 17702.01(b) and
  § 17712.01 correctly disclosed as independent, separately-numbered
  sections; the FTB webpage and Form 568 booklet correctly disclosed
  as two independent agency publications, neither a subsection of the
  other or of the statutory citations; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`companyName`, `stateOfFormation`, `authorizedSignerName`,
  `dateSigned`, `cityState`) independently confirmed to match existing
  corpus field definitions. `stateOfFormation`'s placeholder
  ("Delaware") is document-appropriate here — unlike the wave-69
  finding on the LLC Dissociation/Buyout document (a California-RULLCA-
  specific document mislabeled with a Delaware placeholder), this
  document is specifically about an out-of-state series LLC, so
  "Delaware" is the correct default example. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: Series LLCs and California Law — Information Sheet
  (`series_llc_california_treatment_info_sheet`), 5 clauses (3
  authority + 2 drafting), in the Business Formation category. No new
  fields.
- Corpus: 2,624 → 2,629 clauses; 342 → 343 documents. Fourth and last
  document of wave 73.
- **Wave 73 complete**: 2,603 → 2,629 clauses (26 new); 339 → 343
  documents (4 new: Family Code § 2641 Reimbursement, Interstate
  Compact on the Placement of Children [Family Law], California LLC
  Annual Fee, Series LLCs and California Law [Business Formation]).
