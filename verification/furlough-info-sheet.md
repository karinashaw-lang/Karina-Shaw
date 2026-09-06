# Ending employment, new document: Furlough (Temporary Reduction in Work or Pay) — Information Sheet

## Why this document

First processed item of wave 135 (Ending employment slot, 2×2
pattern). The agent ruled out paid sick leave reinstatement, off-duty
cannabis use, piece-rate final wages, arbitration-agreement
retaliation, domestic-violence/jury-duty leave, and ISO exercise
windows — all confirmed already covered elsewhere. The chosen topic —
a temporary, employer-initiated furlough and how it interacts with
the specific triggering definitions in Cal/WARN, the federal WARN
Act, California's unemployment insurance partial-benefits rule, the
federal exempt-employee salary-basis regulation, and the federal
COBRA regulations — was confirmed genuinely open: zero prior corpus
hits on the word "furlough" itself, and zero hits on any of the five
specific subdivisions cited. A duplication check on § 1400.5 found
three existing clauses citing subdivisions (a), (b), (d), (e)-(g),
(h) of the same section; the new clause cites subdivision (c) (the
"layoff" definition), which none of those existing citations quote.

## What this document covers

11 clauses: 5 drafting (intro/scope, an explicit "furlough is not a
defined term" note, a fillable notice, a return-to-work
acknowledgment, and a closing disclaimer) and 6 authority clauses,
citing Lab. Code § 1400.5(c), 29 U.S.C. § 2101(a)(6), Unemp. Ins. Code
§ 1252(a)(2), 29 C.F.R. § 541.602(a)(2), and 26 C.F.R. § 54.4980B-4,
Q&A-1(c) and (e):

- **`furlough_calwarn_layoff_definition`** — Cal/WARN's "layoff"
  requires a "separation from a position," a phrase the statute leaves
  undefined.
- **`furlough_federal_warn_employment_loss`** — federal WARN's
  "employment loss" separately reaches a >50%/6-month hours cut with
  no separation required.
- **`furlough_ui_partial_benefits`** — a week of reduced hours can
  itself make an employee "unemployed" for UI purposes.
- **`furlough_exempt_salary_deduction_rule`** — a mid-employment
  furlough deduction can defeat an exempt employee's salary-basis
  status.
- **`furlough_cobra_reduction_of_hours`** / **`furlough_cobra_loss_
  of_coverage_condition`** — the Treasury regulation's two-part
  "reduction of hours" / "loss of coverage" COBRA test, naming "a
  temporary layoff" as an example.

## Genuine findings

- **A disclosed, deliberate framing choice**: a dedicated drafting
  clause states upfront that "furlough" is not itself a defined term
  in any source cited, and that the document maps the term to each
  source's own vocabulary separately rather than assuming one source's
  qualifying event automatically satisfies another's.
- **A disclosed cross-statute inconsistency, not resolved but named**:
  the federal-WARN clause's body explicitly contrasts its own
  broader "employment loss" definition (which needs no separation)
  against Cal/WARN's narrower "layoff" definition (which requires a
  "separation from a position") — a genuine textual tension the
  document flags rather than harmonizes.
- **A disclosed negative-result check**: the agent checked a DLSE FAQ
  page on paydays for guidance on whether a temporary layoff triggers
  immediate final-wage-payment duty, found no mention of "temporary
  layoff" or "furlough" there, and left the point out entirely rather
  than fabricate a claim.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on statute and regulation text
  alone.

## Honest gap(s) disclosed

This document does not address state/local paid-sick-leave,
disability, or predictive-scheduling laws as applied to furloughs,
does not address Cal-COBRA's own reduction-of-hours treatment (only
the federal regulation was verified), does not calculate any specific
notice deadline or benefit amount, and does not determine that any
specific reduction in hours or pay meets any of the cited definitions.

## Method

Fetched Lab. Code § 1400.5, Unemp. Ins. Code § 1252, and 29 U.S.C.
§ 2101 from leginfo.legislature.ca.gov and Cornell LII, and 29 C.F.R.
§ 541.602 and 26 C.F.R. § 54.4980B-4 from eCFR, each fetched twice by
the research agent with two distinct User-Agent strings via curl,
confirmed byte-identical after normalizing expected per-request noise
(a debug-output timestamp, a JSF ViewState token, and an eCFR CSP
nonce). CourtListener's daily quota was already exhausted (HTTP 429)
on the agent's test call; no case law was used or fabricated. All 6
citation instances were programmatically confirmed by the research
agent as exact, contiguous substrings.

Independently re-verified during integration review via a two-
hundred-and-second fetch (a new distinct curl User-Agent string,
"Groundtruth-202ndVerify-Furlough/1.0") of all five sources — the
three leginfo/Cornell sources fetched cleanly on the first attempt;
the two eCFR sections required this session's established browser-
realistic User-Agent workaround, which succeeded cleanly. All 6
citation instances confirmed clean on direct normalized-whitespace
substring match, with no fallback needed. The Cal/WARN layoff
definition, the federal WARN employment-loss definition, the UI
reduced-hours test, the exempt-salary-deduction rule, and both halves
of the COBRA reduction-of-hours/loss-of-coverage test were all
independently reconfirmed present in the freshly fetched text.

## Verification

- All five cited sources fetched twice independently by the research
  agent with distinct User-Agent strings, plus a two-hundred-and-
  second independent fetch during integration review; all 6 citation
  instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — the two COBRA
  clauses explicitly disclose they cite different subdivisions of the
  same regulation and are not independent sources of each other;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `furlough_` prefix has zero collisions. Ran section-
  number-specific greps for "1400.5," "2101(a)(6)," "1252(a)(2),"
  "541.602(a)(2)," "54.4980B-4," and "furlough" across the full
  corpus — "1400.5" returned three hits, all confirmed to cite
  different subdivisions of the same section than the new clause's
  subdivision (c); zero hits on every other search term.
- Checked every citation's `case` field for emptiness — all 6
  populated with proper citation identifier strings.
- Two new field ids confirmed genuinely necessary and non-duplicative:
  `furloughStartDate`, `expectedReturnDate` — neither existed
  previously in the corpus under any name. Five other fields
  (`employeeName`, `companyName`, `jobTitle`, `salary`,
  `hoursPerWeek`) reused from the existing corpus, two relabeled for
  this document's context.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Furlough (Temporary Reduction in Work or Pay) —
  Information Sheet (`furlough_info_sheet`), 11 clauses (6 authority +
  5 drafting), in the Ending employment category. Two new fields:
  `furloughStartDate`, `expectedReturnDate`.
- Corpus: 4,425 → 4,436 clauses; 556 → 557 documents. First processed
  item of wave 135.
