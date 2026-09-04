# Business Formation, new document: Registry of Charitable Trusts — Registration and Annual Reporting — Information Sheet

## Why this document

Fourth and final document of wave 88. Read the existing three
nonprofit-formation documents (Public Benefit, Mutual Benefit,
Religious Corporation Articles of Incorporation) and their clauses in
full — confirmed all three stop at Secretary of State formation
content. Found one existing clause,
`religcorp_attorney_general_oversight_exemption`, citing Gov. Code
§ 12583 and "Registry of Charitable Trusts" only to note religious
corporations' exemption from that registry's filings — a data point
about reduced AG oversight, not substantive coverage of who must
register generally, initial registration timing, annual reporting, or
noncompliance consequences. Grepped the corpus for "RRF-1," "Registry
of Charitable Trusts," and "12580" and confirmed only that one clause
hit. Confirmed a real, non-duplicative gap.

## What this document covers

7 clauses: 2 drafting (declaration, signature block) and 5 authority
clauses, citing Cal. Gov. Code §§ 12581, 12582, 12583, 12584, 12585(a),
12586(a), (d), (e), 12586.1, 12591, 12591.1(a), (c), plus three
California Attorney General Registry of Charities and Fundraisers
webpages (Initial Registration, Renewals, Delinquency):

- **`charityregistry_who_must_register`** (§§ 12581, 12582, 12583) —
  the article's broad scope (charitable corporations, unincorporated
  associations, trustees, and other entities holding property for
  charitable purposes), the statutory "trustee" definition, and the
  government-entity and religious/educational/hospital exemptions.
- **`charityregistry_initial_registration_timing`** (§§ 12585(a),
  12584; AG Initial Registration page) — the 30-day initial-
  registration deadline triggered by first receiving property.
- **`charityregistry_annual_reporting_requirement`** (§ 12586(a), (d),
  (e); AG Initial Registration and Renewals pages) — the recurring
  periodic report requirement, the first report's four-months-and-15-
  days deadline, the Form RRF-1/IRS Form 990 filing combination, and
  the $2,000,000 gross-revenue audited-financial-statement threshold.
- **`charityregistry_ag_enforcement_penalties`** (§§ 12591, 12591.1(a),
  (c), 12586.1) — the Attorney General's general compliance authority,
  the $10,000 intentional-violation civil penalty, the $1,000-per-act
  accruing penalty, and the monthly late fee for operating or
  soliciting while unregistered.
- **`charityregistry_delinquency_and_good_standing`** (AG Delinquency
  and Renewals pages) — the practical consequence of delinquent/
  suspended/revoked status and the range of consequences for failing
  to renew.

## Genuine corrections and findings

- **A genuine correction to the task's own research brief**: the brief
  assumed the article's range was §§ 12580-12599.7. The agent
  independently confirmed, from leginfo's live article header, that
  the current range is §§ 12580-12599.10.
- **A major genuine finding**: § 12581 (who the article covers) was
  repealed and re-enacted by AB 488 (Stats. 2021, Ch. 616), effective
  January 1, 2022 and operative January 1, 2023. The current text is
  materially broader than older descriptions — it now expressly
  reaches "charitable fundraising platforms" and "platform charities,"
  categories the pre-2023 statute did not name. Disclosed explicitly
  in the first clause's gap field.
- **Honestly tiered sourcing**: since the statutory text itself never
  names the "RRF-1" form, the agent supplemented with three California
  DOJ/Attorney General Registry webpages, independently fetched twice
  each with distinct User-Agent strings and confirmed byte-identical,
  and every such citation's gap field explicitly discloses it as a
  non-statutory, agency-guidance source rather than presenting it as
  if it were statutory text.
- Correctly declined to independently fetch or quote Cal. Code Regs.,
  tit. 11, § 312 (the regulation the AG's Delinquency page cites) after
  a Justia mirror returned 403 and Westlaw redirected to a paywall —
  cited only the AG's own verified description of the regulation's
  effect, disclosed explicitly rather than fabricating regulatory text.
- Correctly distinguished this document's citation of § 12583's
  religious-corporation exemption (framed as who must register
  generally) from the existing Nonprofit Religious Corporation
  document's citation of the same text (framed as a narrower limit on
  AG regulatory power specifically) — disclosed as stating an
  independent point, not a repetition.

## Honest gap(s) disclosed

The initial-registration form's actual required contents (delegated to
AG regulations) are not covered. Form CT-TR-1, audit-committee
composition rules, and officer-compensation-review requirements are
named but not covered. Cal. Code Regs., tit. 11, § 312's own text is
not independently verified. The Revenue and Taxation Code basis for
Franchise Tax Board loss of tax-exempt status is named but not cited.
This document does not evaluate whether any specific organization is
required to register, or determine any specific organization's actual
registration, reporting, or good-standing status.

## Method

Fetched Cal. Gov. Code §§ 12581, 12582, 12583, 12584, 12585, 12586,
12586.1, 12591, and 12591.1 from `leginfo.legislature.ca.gov`, and
three California DOJ/Attorney General Registry of Charities and
Fundraisers webpages, each fetched twice by the research agent with
two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. All 21 citation quotes across the 5
authority clauses programmatically confirmed as exact contiguous
substrings (no ellipsis-joined quotes). Independently re-verified
during integration review via a forty-third fetch (a distinct curl
User-Agent string, "Groundtruth-43rdVerify-CharityRegistry/1.0") of
all nine statutory sections and all three webpages — all 21 quotes
confirmed clean.

## Verification

- All nine statutory sections and three agency webpages fetched twice
  independently by the research agent with distinct User-Agent
  strings, plus a forty-third independent fetch during integration
  review; all quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same
  statutory section, which are genuinely independent sections, and
  which are non-statutory agency-guidance sources corroborating but not
  constituting statutory authority; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 21
  populated with proper case/citation identifier strings.
- No new fields required — all four fields (`preparerName`,
  `companyName`, `dateSigned`, `cityState`) reused from the existing
  corpus (30, 198, 166, and 144 prior documents respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Registry of Charitable Trusts — Registration and
  Annual Reporting — Information Sheet
  (`charitable_trust_registry_annual_reporting_info_sheet`), 7 clauses
  (5 authority + 2 drafting), in the Business Formation category. No
  new fields.
- Corpus: 3,021 → 3,028 clauses; 398 → 399 documents. Fourth and final
  addition of wave 88.

## Wave 88 summary

Wave 88 closes at 3,028 clauses / 399 documents (from 2,999/395 at
this document's first sibling addition): Golden Parachute Excise Tax
(Ending employment), California AI Transparency Act (Confidentiality &
IP), Deed of Trust and Promissory Note (Real Estate), and Registry of
Charitable Trusts (Business Formation) — one document in each of the
four target categories, following the established 1×4 strict-
alternation pattern. This wave crossed the corpus's 3,000-clause mark
and brought the document count to 399, one short of 400. Wave 89
should return to a 2×2 pattern across two of the less-recently-touched
categories.
