# Ending employment, new document: Motion Picture and Broadcasting Industry Final-Wage Timing — Information Sheet

## Why this document

Second document of wave 82. The scoping brief's original assumption
(Labor Code § 201.3, temporary services employers) was already covered
in wave 80 as a gap-fix. The agent first fetched Labor Code Chapter 1's
own table of contents to determine exactly which industry-specific
final-wage sections currently exist and correct several mismatched
industry assumptions in the brief (§ 201.6 is actually print-shoot
employees, not oil drilling; § 201.7 is oil drilling, not live
theatrical/concert; § 201.8 is professional baseball venue "events
employees," not curing/canning/drying seasonal workers, which doesn't
exist in this numbering). Confirmed by reading the existing Waiting-
Time Penalty Demand Letter and Final Paycheck Delivery Method
documents in full that §§ 201.5/201.6/201.8/201.9 appear only inside
one incidental § 203 penalty-list quote — no substantive treatment
anywhere. Selected § 201.5 (motion picture/broadcasting) as the
richest, most self-contained candidate: its own two-part worker
definition, its own "daily or weekly call" and "production or
broadcasting" definitions, a genuinely distinct due-date trigger, its
own mailing mechanic, a broad "terminates" definition, and an explicit
CBA carve-out — versus §§ 201.6/201.8, structurally near-duplicates
with a narrower worker class, and § 201.7, a single-subject 24-hour
variant.

## What this document covers

6 clauses: 1 drafting (applicability note) and 5 authority clauses,
citing Cal. Labor Code § 201.5(a)(1)-(4), (b), (c), (d), (e), and
§ 203(a):

- **`indfinalwage_worker_definition`** (§ 201.5(a)(1), (a)(2), (a)(4))
  — the statute's own two-part conjunctive definition of covered
  employees (job duties tied to production/broadcasting, AND
  limited-duration or call-based hiring), plus "daily or weekly call"
  and "production or broadcasting of motion pictures" definitions.
- **`indfinalwage_next_payday_rule`** (§ 201.5(b), (a)(3)) — **the
  central finding**: wages are due by the "next regular payday" — a
  materially different trigger from the general immediate-on-discharge
  and 72-hour-on-quit rules — with the statute's own cross-reference
  to § 204 for how that payday is designated.
- **`indfinalwage_mailing_and_termination_definition`** (§ 201.5(c),
  (d)) — the mailing/on-site-availability payment option, and the
  statute's broad definition of "terminates" (covering resignation and
  specified-term expiration, not just discharge or layoff).
- **`indfinalwage_cba_carveout`** (§ 201.5(e)) — a valid collective
  bargaining agreement may establish alternative provisions, capped by
  the § 204 time limitation.
- **`indfinalwage_penalty_crossref`** (§ 203(a)) — § 201.5 has no
  separate penalty of its own; § 203 expressly lists it among the
  statutes whose willful violation triggers the general waiting-time
  penalty.

## Genuine corrections and findings

- **The central finding**: confirmed precisely that § 201.5's due date
  is the "next regular payday," not immediate payment — a materially
  different rule from the general discharge/quit deadlines already
  covered elsewhere in the corpus, verified word-for-word rather than
  assumed to track the general rule.
- **A genuine industry-mapping correction**: the research brief's
  assumed industry-to-section mapping (§ 201.6 = oil drilling, § 201.7
  = live theatrical/concert, § 201.8 = seasonal curing/canning) was
  wrong on every count; the agent independently fetched the chapter's
  actual table of contents and corrected the mapping before selecting
  § 201.5 as the best candidate.
- Confirmed § 201.5's broad "terminates" definition explicitly reaches
  resignation and the natural expiration of a specified-term
  engagement, not just discharge — a genuinely non-obvious scope point
  for an industry defined by short-term, call-based work.
- **A PDF/HTML-extraction artifact caught during integration review**:
  one delivered quote was missing a space at a subsection boundary
  ("apply:(A)" instead of the source's "apply: (A)"); confirmed via
  manual context inspection against the independently fetched source
  and corrected before merging, consistent with this project's
  established artifact-verification technique.

## Honest gap(s) disclosed

Labor Code § 204 (cross-referenced for how "next regular payday" and
the CBA time limit are determined) is not independently fetched or
quoted — reviewed only for context. § 201.6, § 201.7, § 201.8, and
§ 201.9 (the sibling industry-specific final-wage statutes) remain
uncovered and are flagged as candidates for future waves. The general
§ 203 waiting-time penalty's accrual mechanics and 30-day cap are
cross-referenced, not restated — already the dedicated subject of the
existing Waiting-Time Penalty Demand Letter document.

## Method

Fetched Cal. Labor Code §§ 201.5 and 203 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. Independently re-verified during integration
review via a seventeenth fetch (a distinct curl User-Agent string,
"Groundtruth-SeventeenthVerify-IndFinalWage/1.0") of both sections — 8
of 9 quotes matched directly; the ninth required the established
missing-space-artifact fix described above, then re-verified clean.

## Verification

- Both statutory sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a seventeenth
  independent fetch during integration review; all 9 quotes confirmed
  clean after the one-quote fix.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same
  statutory section; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). The
  § 203(a) quote is also cited in two existing corpus clauses
  (`waitingtime_penalty_mechanics`, `bonuspay_waiting_time_penalty_
  reference`) — confirmed this is the corpus's established, accepted
  pattern of citing the same primary source in multiple documents
  where relevant, not a genuine defect.
- No new fields required — all three fields (`employeeName`,
  `companyName`, `terminationDate`) reused from the existing corpus
  (125, 184, and 18 prior documents respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Motion Picture and Broadcasting Industry Final-Wage
  Timing (Labor Code § 201.5) — Information Sheet
  (`motion_picture_broadcasting_final_wage_info_sheet`), 6 clauses (5
  authority + 1 drafting), in the Ending employment category. No new
  fields.
- Corpus: 2,846 → 2,852 clauses; 374 → 375 documents. Second addition
  of wave 82.
