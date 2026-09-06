# Business Formation, new document: Compensatory Equity Plan Securities Exemption — Information Sheet

## Why this document

Third processed item of wave 135 (Business Formation slot, 2×2
pattern). The agent ruled out a re-examination of the existing
statutory-conversion coverage for redomestication, shareholder
written consent, cumulative voting, and FTB suspension of corporate
powers — all confirmed already covered. The chosen topic — Corp. Code
§ 25102(o), the securities exemption used when a corporation or LLC
grants stock options or other equity to its own workforce under a
written plan, incorporating federal Rule 701 (17 C.F.R. § 230.701) and
implementing California regulations (10 Cal. Code Regs. §§ 260.140.41,
260.140.46) — was confirmed genuinely open: every existing securities-
exemption document in the corpus (§ 25102(f) private placement,
§ 25102.1 Rule 506 notice filing) governs capital-raising from outside
investors, not compensatory equity issued to a company's own
workforce. A duplication check found no genuine overlap: the § 25102
hits were subdivision (f), a different exemption; the § 25608 hits
were subdivisions (c) and (c) of § 25608.1, different from the new
document's mere cross-reference to (unfetched) § 25608(y).

## What this document covers

12 clauses: 3 drafting (declaration, plan-identification worksheet,
signature) and 9 authority clauses, citing Corp. Code § 25102(o), 17
C.F.R. § 230.701(a), Preliminary Note 2, (b)(1), (c), (c)(1)-(2),
(d)(2), (e), 10 Cal. Code Regs. § 260.140.41(b), (e), and § 260.140.46:

- **`cbpexempt_ca_exemption_grant`** — § 25102(o)'s exemption grant
  and its three layered California-specific conditions.
- **`cbpexempt_ca_notice_cure_and_integration`** — the late-notice
  cure provision and single-offering/no-integration rule.
- **`cbpexempt_federal_exemption_and_issuer_eligibility`** — Rule
  701's exemption, its "state law still applies" note, and the
  non-reporting-company eligibility condition.
- **`cbpexempt_eligible_recipients`** / **`cbpexempt_consultant_and_
  plan_definition`** — the defined recipient group, the former-
  service-provider limitation, and the consultant/advisor conditions.
- **`cbpexempt_aggregate_amount_cap`** / **`cbpexempt_disclosure_
  trigger`** — the rolling 12-month $1M/15%/15% sales ceiling and the
  $10 million disclosure trigger layered on top of it.
- **`cbpexempt_ccr_option_plan_terms`** / **`cbpexempt_ccr_financial_
  statements`** — California's 120-month exercise-period cap and
  post-termination exercise windows, and the annual financial-
  statement requirement.

## Genuine findings

- **A disclosed source-formatting artifact, split rather than
  bridged**: the notice-cure clause's gap discloses that leginfo's raw
  HTML places two adjacent statutory sentences with no space between
  them at all ("...qualified under Section 25110.Offers and sales...")
  and that the agent quoted them as two separate citation entries
  rather than inventing a space to bridge the gap.
- **A disclosed access limitation for the state's own regulatory
  platform**: both CCR clauses' gaps disclose that the official
  Westlaw-hosted California Code of Regulations platform could not be
  retrieved as a scripted fetch this session, so the regulatory text
  rests on the Cornell LII mirror alone — consistent with an existing
  corpus precedent for the same access limitation.
- **A disclosed asymmetric cap structure**: the aggregate-amount-cap
  clause notes the ceiling is the *greatest* of three alternative
  measures, so a larger or asset-heavy issuer's usable ceiling can
  substantially exceed the flat $1,000,000 figure.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on statute and regulation text
  alone.

## Honest gap(s) disclosed

This document does not independently fetch or verify 10 Cal. Code
Regs. §§ 260.140.42 or 260.140.45 (cross-referenced but not
independently sourced), does not state the § 25608(y) filing fee
amount, does not restate Rule 701(d)(1)'s uncapped-offers rule or
(d)(3)'s aggregate-sales-price calculation mechanics, does not itemize
Rule 701(e)'s five specific disclosure requirements, and does not
determine whether any specific plan or issuance meets these
exemptions' conditions.

## Method

Fetched Corp. Code § 25102 from leginfo.legislature.ca.gov, 17 C.F.R.
§ 230.701 from eCFR, and 10 Cal. Code Regs. §§ 260.140.41 and
260.140.46 from Cornell Law School's Legal Information Institute
mirror, each fetched twice by the research agent with two distinct
User-Agent strings, confirmed byte-identical apart from expected
per-request noise (a non-breaking-space subdivision-label artifact and
an eCFR analytics-tag nonce). CourtListener's daily quota was already
exhausted (HTTP 429) on the agent's test call; no case law was used or
fabricated. All 14 citation instances were programmatically confirmed
by the research agent as exact, contiguous substrings, catching and
fixing 5 initial `{{placeholder}}` leaks into gap fields before
finalizing.

Independently re-verified during integration review via a two-
hundred-and-fourth fetch (a new distinct curl User-Agent string,
"Groundtruth-204thVerify-CompEquityExempt/1.0") of all four sources —
the leginfo and Cornell CCR-mirror sources fetched cleanly on the
first attempt; the eCFR section required this session's established
browser-realistic User-Agent workaround, which succeeded cleanly. All
14 citation instances confirmed clean on direct normalized-whitespace
substring match, with no fallback needed. The exemption grant, the
notice-cure and single-offering rules, the federal exemption and
issuer eligibility, the eligible-recipient and consultant conditions,
the aggregate-amount cap and disclosure trigger, and both California
regulatory conditions were all independently reconfirmed present in
the freshly fetched text.

## Verification

- All four cited sources fetched twice independently by the research
  agent with distinct User-Agent strings, plus a two-hundred-and-
  fourth independent fetch during integration review; all 14 citation
  instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `cbpexempt_` prefix has zero collisions. Ran section-
  number-specific greps for "25102(f)," "25102(o)," "25102.1,"
  "230.701," "260.140.41," "260.140.46," "260.140.42," "260.140.45,"
  and "25608" across the full corpus — the § 25102(f) and § 25102.1
  hits are different subdivisions/sections than § 25102(o); the two
  § 25608 hits cite different subdivisions (§ 25608.1(c) and
  § 25608(c)) than the new document's unfetched § 25608(y)
  cross-reference; zero hits on every regulatory citation.
- Checked every citation's `case` field for emptiness — all 14
  populated with proper citation identifier strings.
- No new field ids required — all six fields (`preparerName`,
  `companyName`, `equityPlanName`, `equityType`, `dateSigned`,
  `cityState`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Compensatory Equity Plan Securities Exemption —
  Information Sheet (`compensatory_equity_plan_exemption_info_sheet`),
  12 clauses (9 authority + 3 drafting), in the Business Formation
  category. No new fields.
- Corpus: 4,445 → 4,457 clauses; 558 → 559 documents. Third processed
  item of wave 135.
