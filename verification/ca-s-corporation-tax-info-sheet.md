# Business Formation, new document: California's S Corporation Franchise Tax — Information Sheet

Wave 152 (Business Formation category), continuing the round-robin also
covered by waves 146/148/150.

## Topic selection and dup-check

Read `data/documents.json` first and enumerated all ~79 existing
Business Formation titles/ids. Initial pick was a "California $800
Minimum Franchise Tax" document (Rev. & Tax. Code §§ 23153, 17941,
17935, 17948) — but before merging, discovered via `verification/minimum-franchise-tax-gap-fix.md`
(a wave-91 gap-fix) that this exact topic, including the corporate
first-year exemption, its non-extension to LLCs/LPs/LLPs, the
2021-2023 temporary LLC/LP/LLP exemption, and even the very recent
2027-2029 $400 reduced-rate provision, is already substantively
covered across the existing Articles of Incorporation
(`articlesinc_annual_franchise_tax`, `minfranchisetax_covered_entities`,
`minfranchisetax_legislative_increase_cap`) and LLC Articles of
Organization (`llc_articles_annual_tax`) documents. Discarded that
draft entirely (reverted `data/clauses.json` and `data/documents.json`
via `git checkout`) rather than ship a duplicative document.

Re-searched for a genuinely uncovered angle and confirmed by full-text
grep of `data/clauses.json` that no existing clause cites Rev. & Tax.
Code § 23802 or discusses California's separate entity-level tax
*rate* imposed on a corporation that has elected federal S status
(distinct from the federal S-election eligibility rules already
covered by the existing `s_corp_election_overview` document, whose
own clauses focus on the federal small-business-corporation test,
shareholder consent, and election mechanics — not California's own
tax treatment). Confirmed no existing clause discusses the 1½ percent
rate, the financial-corporation rate increase, or the built-in-gains/
passive-income/NOL deduction mechanics addressed here.

## Why this document

A common misunderstanding is that a federal S election means a
corporation pays no state-level entity tax, the way it pays no federal
entity-level tax. California's Revenue and Taxation Code expressly
rejects the federal nontaxability rule and instead taxes an S
corporation at a reduced statutory rate — still subject to the same
$800 minimum franchise tax that applies to corporations generally.
This is a well-defined, single-statute topic (Cal. Rev. & Tax. Code
§ 23802) that is genuinely useful and squarely within Business
Formation (a decision point when electing S status) without
duplicating the existing S-election-eligibility document.

## What this document covers

9 clauses: 2 drafting (purpose declaration, closing/signature) and 7
authority clauses, all citing subdivisions of the single statute Cal.
Rev. & Tax. Code § 23802:

- **`scorptax_federal_rule_inapplicable`** (§ 23802(a)) — California
  does not follow IRC § 1363(a)'s federal S-corporation nontaxability
  rule.
- **`scorptax_continues_subject_to_corporate_tax`** (§ 23802(b) intro)
  — an S corporation continues to be subject to the general corporate
  franchise/income tax chapters, subject to named exceptions.
- **`scorptax_reduced_rate`** (§ 23802(b)(1)) — the 1½ percent
  substitute rate.
- **`scorptax_financial_corp_rate_increase`** (§ 23802(b)(2)) — the
  rate increase for an S corporation that is also a financial
  corporation.
- **`scorptax_minimum_tax_still_applies`** (§ 23802(c)) — the S
  corporation remains subject to the § 23153 minimum franchise tax.
- **`scorptax_built_in_gains_passive_income_deduction`** (§ 23802(e))
  — deduction for built-in gains/passive investment income already
  taxed under IRC §§ 1374/1375.
- **`scorptax_nol_deduction_s_years_only`** (§ 23802(d)(1)-(2)) — the
  net operating loss deduction limited to S-corporation-year losses,
  and the IRC § 1371(b) no-carryover-between-C-and-S-years rule.

## Method — independent double-fetch

Fetched `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=RTC&sectionNum=23802`
twice via `curl` through the environment's proxy, independently, with
two distinct User-Agent strings:

1. `Mozilla/5.0 (Windows NT 10.0; Win64; x64) Groundtruth-Research/1.0`
2. `curl/8.0 GroundtruthResearchBot/2.0 (+legal-research)`

Both returned HTTP 200. After extracting the `single_law_section` div,
stripping HTML tags, unescaping `&nbsp;`, and collapsing whitespace,
the two fetches' extracted statutory text were programmatically diffed
and confirmed **byte-identical**. The same dual-fetch-and-diff
procedure (identical results) was also run for Rev. & Tax. Code
§§ 23153, 17941, 17935, and 17948 during the discarded first draft —
retained as corroborating evidence that this leginfo endpoint serves
stable, non-cached content across User-Agents.

## Quote-by-quote verification, including a genuine source-formatting defect found and corrected

All 8 citation quotes across the 7 authority clauses were
programmatically checked as exact substrings of the normalized fetched
text (whitespace collapsed to single spaces — a benign normalization
for the page's HTML line-wrap spacing, not a content change).

One **genuine defect** was found and corrected, not merely a benign
artifact: § 23802(b)(1)'s "1½ percent" rate is rendered in the
official page's HTML as a stacked fraction — the digit "1" followed by
`<sup>1</sup>/<sub>2</sub>` — which a naive tag-stripping extraction
misreads as the character sequence "1" + "1" + "/" + "2" ("11/2
percent"), not the intended "1½ percent." This was caught precisely
because the naive-extraction quote failed the substring check against
the raw text. Inspected the underlying HTML markup directly (not the
stripped text) to confirm the source's actual intended content is the
fraction one-half, i.e., a rate of 1.5 percent. The clause's quote
uses the corrected reading ("1½ percent"), and its `gap` field
discloses this correction explicitly, including that the numeric rate
is 1.5 percent (not 11.5, 1/12, or any other misreading of the raw
character sequence).

All other 7 quotes passed verification against the raw extracted text
with no defects. Curly quotation marks around "S" and "C" (e.g. "an
“S” corporation") in the source were preserved verbatim rather than
converted to straight quotes, since that is what the source page
actually contains.

## Schema validation

Read `data/clauses.json` and `data/documents.json` first to confirm
current schema. Authority clauses use exactly
`{id,title,kind,status,checkedDate,body,gap,citations:[{case,cite,url,quote}]}`;
drafting clauses use exactly `{id,title,kind,body}`. The document uses
`{id,title,description,categories,clauseOrder,fields}`. Verified
programmatically (key-set equality check) before merging — all 9
clauses conform.

Field reuse: `preparerName`, `companyName`, `dateSigned`, and
`cityState` all already exist as field ids elsewhere in the corpus
(reused directly from the pattern established by the LLC Annual Fee
information sheet's field set). No new field ids were introduced.
Verified every `{{placeholder}}` used in the new clauses' `body`/`gap`
text resolves to a declared field id, with no unresolved or stray
`{{...}}` leakage.

## Corpus-wide validation (after merge)

Ran a script confirming:
- Both `data/clauses.json` and `data/documents.json` still parse as
  valid JSON.
- No duplicate clause ids across the full corpus (5,074 total).
- No duplicate document ids or titles across the full corpus (625
  total).
- Every clause id referenced in every document's `clauseOrder` —
  checked corpus-wide, not just for the new document — exists in
  `clauses.json`. Zero missing references found.
- Every `{{placeholder}}` in the new document's clause bodies resolves
  to a field id declared in the new document's `fields` array.

All checks passed clean.

## Net changes

- New document: California's S Corporation Franchise Tax —
  Information Sheet (`ca_s_corporation_tax_info_sheet`), 9 clauses (7
  authority + 2 drafting), in the Business Formation category. No new
  fields.
- Corpus: 5,065 → 5,074 clauses; 624 → 625 documents. Wave 152,
  Business Formation.
- A discarded first-draft topic (California $800 Minimum Franchise
  Tax) was researched, fully drafted, and then abandoned before merge
  after confirming it duplicated existing wave-91 coverage — no trace
  of that draft remains in the merged corpus.
