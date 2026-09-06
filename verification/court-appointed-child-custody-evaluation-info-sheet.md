# Family Law, new document: Court-Appointed Child Custody Evaluations — Information Sheet

## Why this document

First processed item of wave 136 (Family Law slot, 1×4 pattern). The
agent ruled out interspousal transmutation, putative spouse doctrine,
DVRO firearm relinquishment, and paternity disestablishment — all
confirmed already substantively covered. The chosen topic — Family
Code Chapter 6 (Custody Investigation and Report, §§ 3110-3118),
governing who may serve as a court-appointed custody evaluator, the
training/licensing preconditions, cost allocation, report
confidentiality and disclosure sanctions, a domestic-violence
separate-interview safeguard, the cross-examination-waiver rule, and
the heightened serious-sexual-abuse protocol — was confirmed genuinely
open. Two existing clauses mention §§ 3110/3111 only incidentally: one
(`moveaway_custody_evaluation_confidentiality`) explicitly discloses in
its own gap field that it does not independently verify the
custody-evaluation procedure itself, and the other
(`deployedparent_temporary_order_and_reversion_presumption`) names
§ 3111 only as an exclusion condition, not substantive coverage — both
confirmed on inspection to be exactly what the research agent
reported, not genuine duplicates.

## What this document covers

12 clauses: 3 drafting (declaration, relationship to other processes,
acknowledgment) and 9 authority clauses, citing Fam. Code § 3110,
§ 3110.5(a), (c), (f), § 3111(a)-(d), (f), § 3112, § 3113, § 3115,
§ 3118(a), (a)(3), (b)(6):

- **`custodyeval_investigator_definition`** — the umbrella "court-
  appointed investigator" definition covering three types of
  personnel.
- **`custodyeval_appointment_and_standards`** — the court's discretion
  to appoint an evaluator and the 10-day pre-hearing report-filing
  deadline.
- **`custodyeval_evaluator_licensing_categories`** — the six
  license/certification categories an evaluator must fall into.
- **`custodyeval_dv_child_abuse_training_requirement`** — the
  mandatory DV and child-sexual-abuse training precondition.
- **`custodyeval_cost_allocation`** — the ability-to-pay inquiry
  before ordering repayment of evaluation costs.
- **`custodyeval_report_confidentiality_and_sanctions`** — the
  report's confidentiality, evidentiary-stipulation rule, and monetary
  sanctions for unwarranted disclosure.
- **`custodyeval_domestic_violence_separate_meetings`** — the right to
  separate investigator interviews where DV history or a protective
  order exists.
- **`custodyeval_cross_examination_right`** — the rule that pre-report
  statements/conduct don't waive the right to cross-examine the
  investigator.
- **`custodyeval_serious_sexual_abuse_protocol`** — the definition and
  heightened qualification/timing requirements once a "serious
  allegation" is found.

## Genuine findings

- **A disclosed, deliberate non-duplication choice**: the
  report-confidentiality clause explicitly does not restate the
  separate § 3025.5 confidentiality rule already covered by the
  existing move-away custody document, cross-referencing it instead.
- **A disclosed statutory silence on cost mechanics**: the
  cost-allocation clause's gap notes the statute sets no fee schedule
  or cap, and does not distinguish court-connected evaluator costs
  (paid through court repayment) from private evaluator costs
  (frequently paid directly).
- **A disclosed defined-term precision**: the serious-sexual-abuse-
  protocol clause quotes the statute's specific definition of "serious
  allegation" (tied to particular declarant categories or
  corroboration under a cross-referenced subsection) rather than using
  the term loosely.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on both of the agent's
  test calls; every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not independently fetch or verify the Judicial
Council standards adopted under § 3117, California Rules of Court
5.220/5.225/5.230, Family Code § 1816, § 3110.5(b) or (d)-(e), § 3114,
§ 3116, or § 3118's extensive investigative-steps and juvenile-
dependency-coordination subdivisions, and does not determine whether
any specific evaluator meets the statutory qualification categories.

## Method

Fetched Fam. Code §§ 3110, 3110.5, 3111, 3112, 3113, 3115, 3118 (7
sections) from leginfo.legislature.ca.gov, each fetched twice by the
research agent with two distinct User-Agent strings via curl,
confirmed byte-identical after whitespace normalization; several
transient connection resets were resolved via retry-with-backoff.
CourtListener's daily quota was already exhausted (HTTP 429) on both
of the agent's test calls; no case law was used or fabricated. All 15
citation instances were programmatically confirmed by the research
agent as exact, contiguous substrings.

Independently re-verified during integration review via a two-
hundred-and-sixth fetch (a new distinct curl User-Agent string,
"Groundtruth-206thVerify-CustodyEvaluations/1.0") of all seven
sections — one transient connection reset on § 3118 was resolved via
retry-with-backoff; all others fetched cleanly on the first attempt.
All 15 citation instances confirmed clean on direct normalized-
whitespace substring match, with no fallback needed. The investigator
definition, the appointment and reporting standards, the licensing
categories, the training precondition, the cost-allocation rule, the
report confidentiality and sanctions provisions, the domestic-violence
separate-meeting right, the cross-examination-waiver rule, and the
serious-sexual-abuse protocol were all independently reconfirmed
present in the freshly fetched text.

## Verification

- All seven cited sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a two-hundred-and-sixth
  independent fetch during integration review; all 15 citation
  instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `custodyeval_` prefix has zero collisions. Ran
  section-number-specific greps for "3110," "3110.5," "3111," "3112,"
  "3113," "3115," and "3118" across the full corpus — the § 3110/§ 3111
  hits traced to the two incidental mentions the research agent itself
  had already identified and disclosed; other hits (warehousing NAICS
  codes, franchise registration statutes, Probate Code sections, and
  a Health & Safety Code smoke-alarm section) all confirmed
  false-positive bare-number collisions with unrelated codes; zero
  hits on §§ 3110.5, 3115, and 3118.
- Checked every citation's `case` field for emptiness — all 15
  populated with proper citation identifier strings.
- No new field ids required — all five fields (`childName`,
  `parent1Name`, `parent2Name`, `countyOfFiling`, `dateSigned`) reused
  from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Court-Appointed Child Custody Evaluations —
  Information Sheet (`court_appointed_child_custody_evaluation_info_sheet`),
  12 clauses (9 authority + 3 drafting), in the Family Law category.
  No new fields.
- Corpus: 4,469 → 4,481 clauses; 560 → 561 documents. First processed
  item of wave 136.
