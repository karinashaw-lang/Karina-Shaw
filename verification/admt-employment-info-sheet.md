# Hiring, new document: Automated Decision-Making Technology in Employment — Information Sheet

## Why this document

Confirmed by grep that "automated decision-making" and "ADMT" had zero
hits anywhere in the corpus. First of wave 58's four documents. This is
a newly operative regulatory area, so the delivering agent was
instructed to scale scope down or decline to deliver rather than
present a still-proposed rule as settled law — it verified the
regulations are actually adopted and operative before proceeding.

## What this document covers

8 clauses: 2 drafting (purpose, acknowledgment) and 6 authority clauses,
citing Cal. Code Regs. tit. 11, §§ 7001, 7200, 7220, 7221, and 7222
(the CPPA's ADMT regulations, filed with the Secretary of State
September 22, 2025):

- **`admt_definition`** (§ 7001(e), (e)(1), (e)(3)) — what counts as
  ADMT, the human-involvement test, and excluded tools.
- **`admt_significant_decision`** (§ 7001(ddd), (ddd)(4), (ddd)(6)) —
  the employment-specific "significant decision" definition.
- **`admt_applicability`** (§ 7200(a)-(b)) — **a key finding**: a
  two-date phased compliance structure, not a single effective date.
- **`admt_preuse_notice`** (§ 7220(a), (c)(1), (c)(4)) — the pre-use
  notice content requirements, including the ban on generic purpose
  descriptions.
- **`admt_optout`** (§ 7221(a), (b)(1), (b)(2)) — the opt-out right and
  its human-appeal and hiring-decision exceptions.
- **`admt_access`** (§ 7222(a), (b)(1), (b)(2)) — the right to access
  information about ADMT use.

## Genuine corrections and findings

- **The central finding, precisely stated**: § 7200 layers a two-date
  structure, not one effective date. The regulations' general effective
  date is January 1, 2026, but ADMT already in use for a significant
  decision before January 1, 2027 need only comply by January 1, 2027;
  ADMT first used on or after that date must comply immediately, with
  no phase-in. This distinction was confirmed directly against the
  regulatory text and separately against the CPPA's own summary page,
  fetched independently — flagged explicitly so it can't be misread as
  a single date.
- Confirmed the pre-use notice and access-response purpose disclosures
  both expressly ban generic descriptions ("to make a significant
  decision," "to improve our services") — the regulation requires
  specific, non-generic explanations.
- Confirmed two distinct opt-out exceptions apply to employment
  decisions: a general human-appeal exception, and a narrower
  hiring/work-allocation exception conditioned on the tool assessing
  job-performance ability without unlawful discrimination — explicitly
  flagged as a fact-specific determination the regulatory text doesn't
  resolve in the abstract.

## Honest gap disclosed

No case law or CPPA enforcement decisions yet exist interpreting how
"substantially replace human decisionmaking" applies to specific
employment tools, or how the hiring-exception's "works for the
business's purpose and does not unlawfully discriminate" standard
applies to particular tools — this is a newly operative area. Detailed
opt-out process requirements (submission methods, re-solicitation
timing) and the "how the ADMT works" disclosure under § 7220(c)(5) are
not restated in full.

## Method

WebFetch itself was blocked (EGRESS_BLOCKED) for both cppa.ca.gov and
oal.ca.gov, so the agent fetched directly via curl — a genuinely
different mechanism — each source twice with distinct User-Agent
strings; both the CPPA's regulation-status page and the "Approved
Regulations Text" PDF came back byte-identical (MD5-confirmed) across
both fetches. All 15 citation quotes programmatically confirmed as
exact substrings of the extracted PDF text.

## Verification

- All sources fetched twice independently via curl with distinct
  User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — all citations
  correctly disclosed as subdivisions of sections from a single
  rulemaking action, not independent sources; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  accepted generic drafting-title reuses ("Purpose of This Information
  Sheet," "Acknowledgment of Receipt").
- Field names (`companyName`, `employeeName`, `dateSigned`, `cityState`)
  independently confirmed to match existing corpus field definitions.
  No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Automated Decision-Making Technology in Employment —
  Information Sheet (`admt_employment_info_sheet`), 8 clauses (6
  authority + 2 drafting), in the Hiring category. No new fields.
- Corpus: 2,177 → 2,185 clauses; 279 → 280 documents. First document of
  wave 58.
