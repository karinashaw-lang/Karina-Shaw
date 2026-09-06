# Ending employment, new document: Exempt Employee's Pay in the Final (and First) Week of Employment — Information Sheet

## Why this document

Fourth and final processed item of wave 130 (Ending employment slot,
1×4 pattern). The agent ruled out six candidates via specific
section-number greps before landing here: off-duty cannabis use (Gov.
Code §12954, already covered specifically at termination), paid sick
leave payout at termination (Lab. Code §246), general whistleblower
retaliation (Lab. Code §1102.5), immigration-related unfair practices
(Lab. Code §1019/§98.6), the AB 1076 noncompete-notice requirement,
and stay-or-pay (Lab. Code §926) were all confirmed already
substantively covered. The chosen topic — the federal salary-basis
regulation's initial/terminal-week proration exception (29 C.F.R.
§541.602(b)(6)) and its interaction with California law at
termination — was confirmed genuinely open: zero prior corpus hits on
§541.602 or the proration concept before drafting, and it fits
squarely alongside this category's extensive final-pay-*timing*
coverage (Lab. Code §§201-203) without duplicating it — this document
addresses a different question (how much salary is owed for a partial
final week, not when it must be paid).

## What this document covers

10 clauses: 2 drafting (declaration, signature) and 8 authority
clauses, citing 29 C.F.R. §541.602(a), (a)(1), (b) intro, (b)(6) (two
citations), (c); Cal. Code Regs. tit. 8, §11040 subd. 1(A)(1)(e) (IWC
Wage Order No. 4-2001); the DLSE Enforcement Manual (two citations,
including its appendix reproducing the pre-2004 regulation numbering);
and Lab. Code §515.7(a)(2):

- **`fwksalary_general_full_salary_rule`** — the general full-salary-
  for-any-week-worked rule.
- **`fwksalary_initial_terminal_week_exception`** — the core exception
  permitting proration in the first/last week of employment.
- **`fwksalary_not_occasional_employment_limit`** — the limit
  excluding casual/occasional-days employment.
- **`fwksalary_calculation_method`** — the hourly/daily-equivalent
  proration calculation method.
- **`fwksalary_wage_order_incorporation_narrower`** — the IWC Wage
  Order's incorporation by reference does not reach §541.602.
- **`fwksalary_dlse_follows_federal_guidelines`** — DLSE's stated
  policy of following federal salary-basis guidance where possible.
- **`fwksalary_dlse_manual_reproduces_rule`** — DLSE's own manual
  reproduces the identical rule under the pre-2004 numbering.
- **`fwksalary_labor_code_515_7_incorporates_541602`** — one direct
  California statutory cross-reference to §541.602 (adjunct faculty).

## Genuine findings

- **A disclosed, deliberately narrow honesty check on a DLSE-manual
  passage**: the manual-reproduction clause's gap discloses that the
  agent inspected the source PDF at the character/vector level to
  check whether DLSE's own strikeout/italic enforcement-status
  markup applied to the reproduced text, found neither, but could not
  conclusively place the passage in either of the manual's own marked
  categories — so the clause treats it only as confirmation the
  language exists in DLSE's manual, not as an independent DLSE
  determination.
- **A disclosed, deliberate structural finding**: the Wage Order
  clause establishes, through the agent's own review of the wage
  order's text, that its incorporation-by-reference list for the
  executive-exemption duties test does not include §541.602 — a
  genuinely useful negative finding about where the California rule's
  authority does *not* come from, rather than assuming incorporation.
- **A disclosed, narrow-scope statutory cross-reference correctly
  framed**: the Lab. Code §515.7 clause explicitly discloses that this
  cross-reference applies only to adjunct faculty at independent
  institutions and is not a general California codification of the
  proration rule for exempt employees generally.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on statute, regulation, and
  DLSE-manual text alone.

## Honest gap(s) disclosed

This document does not define "week" for purposes of the
initial/terminal-week exception beyond the employer's established
workweek, does not supply a bright-line test distinguishing genuine
occasional employment from a short-tenure salaried relationship, does
not mandate the hourly method over the daily method for calculating
the prorated amount, does not conclusively categorize the DLSE
manual's reproduced pre-2004 text under the manual's own
strikeout/italic enforcement-status markup, does not find an
equivalent direct §541.602 cross-reference in Lab. Code §515 or Wage
Order No. 4-2001 generally, and does not address Lab. Code §§201-203
final-pay timing, already covered elsewhere in this category.

## Method

Fetched 29 C.F.R. §541.602 (eCFR), Lab. Code §515.7
(leginfo.legislature.ca.gov), the DLSE Enforcement Policies and
Interpretations Manual (PDF), and IWC Wage Order No. 4-2001 (PDF),
each fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical/MD5-identical (excluding a
per-request CSP nonce on the eCFR page and dynamic JSF tokens on the
leginfo page). One transient proxy failure on the first eCFR fetch was
resolved by retrying with a browser-realistic User-Agent, consistent
with this project's established retry discipline. CourtListener's
daily quota was already exhausted (HTTP 429) on the agent's test call;
no case law was used or fabricated. All 10 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings, using column-aware PDF text extraction for the two-column
DLSE manual pages.

Independently re-verified during integration review via a
one-hundred-and-eighty-seventh fetch (a new distinct curl User-Agent
string, "Groundtruth-187thVerify-ExemptFinalWeekSalary/1.0") of all
four sources — the eCFR fetch required a browser-realistic User-Agent
to follow a redirect (the same class of egress-proxy behavior
independently encountered and resolved elsewhere in this project). All
10 citation instances confirmed clean; one PDF quote initially
appeared to fail even a whitespace-stripped check, traced to my own
verification script's naive full-page text extraction interleaving
the DLSE manual's two-column layout — re-extracting with column-aware
cropping (isolating the correct column, matching the delivered
citation's own disclosed extraction method) confirmed the quote
clean, not a real discrepancy. The general full-salary rule, the
initial/terminal-week exception, the occasional-employment limit, the
calculation method, the Wage Order's narrower incorporation, DLSE's
stated federal-guidance policy, DLSE's manual reproduction of the
rule, and the Lab. Code §515.7 cross-reference were all independently
reconfirmed present in the freshly fetched sources.

## Verification

- All four primary sources fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-eighty-seventh independent fetch during integration
  review; all 10 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same regulation correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `fwksalary_` prefix has zero collisions. Ran
  section-number-specific greps for "541.602" and "515.7" across the
  full corpus — zero hits outside the new clauses, confirming no
  disguised overlap.
- Checked every citation's `case` field for emptiness — all 10
  populated with proper citation identifier strings.
- One new field id confirmed genuinely necessary and non-duplicative:
  `finalWeekDaysWorked` — did not exist previously in the corpus under
  any name. Five other fields (`employeeName`, `companyName`,
  `terminationDate`, `salary`, `dateSigned`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Exempt Employee's Pay in the Final (and First) Week of
  Employment — Information Sheet (`exempt_final_week_salary_info_sheet`),
  10 clauses (8 authority + 2 drafting), in the Ending employment
  category. One new field: `finalWeekDaysWorked`.
- Corpus: 4,259 → 4,269 clauses; 541 → 542 documents. Fourth and final
  processed item of wave 130.

## Wave 130 summary

Wave 130 followed the established 1×4 pattern, targeting Ending
employment, During employment, Real Estate, and Family Law — the two
categories tied lowest and most stale (Ending employment, During
employment, last touched wave 127) plus the next-stalest pair by
historical touch (Real Estate, Family Law, last touched wave 125
before wave 128). All four agents ran section-number-specific
duplication checks before landing on genuinely open topics: the
Emergency Action Plan regulation (8 CCR §3220, after ruling out eleven
already-covered candidates), the Solar Shade Control Act (Pub.
Resources Code §§25980-25986, after ruling out eight already-covered
candidates and disambiguating from two related existing documents),
Vocational Training Counselor Evaluations in Spousal Support
Proceedings (Fam. Code §§4330-4338, after ruling out sixteen
already-covered candidates and deliberately excluding the
already-covered §4336), and Exempt Employee's Final-Week Pay (29
C.F.R. §541.602, after ruling out six already-covered candidates).
This wave produced zero genuine duplication findings requiring
exclusion — every delivered clause across all four documents survived
independent integration review intact, aside from routine transient-
connectivity retries and one integration-review artifact (a two-column
PDF extraction quirk in my own verification script, not a defect in
the delivered work). Each document surfaced at least one genuine,
disclosed finding: a deliberate extraction-method choice avoiding a
known HTML artifact class (Emergency Action Plan); a disclosed,
unresolved structural ambiguity in a local-ordinance statute (Solar
Shade Control Act); a disclosed refusal to assert an unverified
case-law term of art (Vocational Training Counselor); and a
disclosed, deliberately narrow honesty check on a DLSE-manual
enforcement-status marking (Exempt Final Week Salary). Per the
established alternation, wave 131 should return to a 2×2 pattern.
