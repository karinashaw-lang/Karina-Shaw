# During employment, new document: California Daily/Weekly Overtime Pay Calculation — Information Sheet

## Why this document

Third processed item of wave 96 (During employment slot). A scoping pass
confirmed this corpus's existing overtime-related documents (the
alternative workweek schedule election, the agricultural-worker overtime
phase-in, and the computer-software-professional exemption) all address
specific carve-outs or procedures, not the general Labor Code §§ 510-511
daily/weekly/double-time baseline itself. This document fills that gap
without duplicating any of the three existing documents, which it
explicitly cross-references rather than re-explains.

## What this document covers

8 clauses: 2 drafting (intro, acknowledgment) and 6 authority clauses,
citing Labor Code §§ 510(a) and 511(a), and Alvarado v. Dart Container
Corp. of California, 4 Cal.5th 542 (2018):

- **`overtime510_daily_triggers`** — the daily 1.5x (over 8, up to 12
  hours) and 2x (over 12 hours) thresholds.
- **`overtime510_weekly_trigger`** — the independent weekly 1.5x
  threshold (over 40 hours).
- **`overtime510_seventh_day_premium`** — the seventh-consecutive-day
  premium (1.5x for the first 8 hours, 2x beyond).
- **`overtime510_no_stacking_and_aws_reference`** — the no-stacking rule
  and § 510(a)'s cross-reference to the alternative workweek schedule
  mechanism (§ 511), including its two-thirds secret-ballot requirement,
  presented as background for the cross-reference only.
- **`overtime510_regular_rate_of_pay`** — the "regular rate of pay"
  concept, sourced to DLSE guidance since neither the Labor Code nor a
  located Wage Order provision defines the term for general nonexempt
  employees.
- **`overtime510_flat_sum_bonus_regular_rate`** — Alvarado's holding on
  the correct divisor for converting a flat-sum bonus to a per-hour
  value for overtime purposes.

## Genuine findings

- **A verified case citation, not assumed from memory**: the research
  brief flagged "Alvarado v. Dart Container Corp. of California" as a
  possibly-imperfect memory and asked the agent to verify independently.
  The agent confirmed the correct citation (4 Cal.5th 542 (2018)) and
  the actual holding via CourtListener, and explicitly checked the
  cluster-id/opinion-id relationship (cluster 4474533, opinion 4251786)
  rather than assuming they matched — independently re-confirmed during
  integration review via a fresh CourtListener fetch.
- **A disclosed, honest limitation on the "regular rate of pay"
  concept**: no statutory or Wage Order provision was located that
  directly defines the term for general nonexempt employees; the
  document relies on DLSE (Division of Labor Standards Enforcement)
  guidance instead, explicitly flagged as agency guidance rather than
  statute or a formally-promulgated regulation — and further discloses
  that Alvarado itself notes a prior DLSE enforcement-policy position on
  a related question was held void for not going through the
  Administrative Procedure Act's formal rulemaking process.
- Correctly scoped the alternative-workweek-schedule discussion to
  background context for understanding § 510(a)'s cross-reference,
  rather than re-explaining the election procedure itself (already
  covered in a separate existing document).

## Honest gap(s) disclosed

This document does not address the different daily/weekly overtime
thresholds for agricultural occupations or personal attendants, or the
computer-software-employee exemption — each covered in a separate
existing document. It does not independently trace "workweek" to a
specific statutory or Wage Order definition beyond general background
context. It does not catalog every regular-rate scenario beyond flat-sum
bonuses and multiple hourly rates, and does not address whether later
legislation or case law has modified Alvarado's specific holding.

## Method

Fetched Labor Code §§ 510 and 511 from `leginfo.legislature.ca.gov`,
each fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical after whitespace normalization. The
DLSE Overtime FAQ (`dir.ca.gov/dlse/faq_overtime.htm`) similarly fetched
twice and confirmed byte-identical. Alvarado v. Dart Container Corp.
verified via the CourtListener MCP tool (direct curl and WebFetch to
courtlistener.com remain blocked in this environment); the research
agent explicitly checked the cluster-id/opinion-id relationship rather
than assuming a match. All 12 citation quotes programmatically confirmed
by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
seventy-fourth fetch (a new distinct curl User-Agent string,
"Groundtruth-74thVerify-Overtime510/1.0") of §§ 510, 511, and the DLSE
FAQ — all 9 statutory/agency quotes confirmed clean on direct substring
match. Alvarado independently re-verified via the CourtListener MCP
tool's cluster→sub_opinions resolution path and a fresh opinion-text
fetch — the 1 case-law quote confirmed clean.

## Verification

- Labor Code §§ 510, 511, and the DLSE Overtime FAQ each fetched twice
  independently by the research agent with distinct User-Agent strings,
  plus a seventy-fourth independent fetch during integration review;
  all 9 quotes confirmed clean.
- Alvarado v. Dart Container Corp. independently re-verified via the
  CourtListener MCP tool during integration review, including a fresh
  cluster/opinion-id check; the 1 case-law quote confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses drawing
  multiple citations from the same statutory subdivision correctly
  disclose they are not independent sources; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  drafting-clause title ("Acknowledgment") duplicates existing corpus
  titles — consistent with this project's established pattern of
  generic, reused boilerplate titles; clause IDs remain unique.
- Checked every citation's `case` field for emptiness — all 12 populated
  with proper citation identifier strings.
- No new fields required — all four fields (`companyName`,
  `employeeName`, `dateSigned`, `cityState`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: California Daily/Weekly Overtime Pay Calculation —
  Information Sheet (`california_overtime_pay_calculation_info_sheet`),
  8 clauses (6 authority + 2 drafting), in the During employment
  category. No new fields.
- Corpus: 3,232 → 3,240 clauses; 428 → 429 documents. Third processed
  item of wave 96.
