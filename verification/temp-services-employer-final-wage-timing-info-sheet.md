# Ending employment, new document: Temporary Services Employer Final-Wage Timing (Labor Code § 201.3) — Information Sheet

## Why this document

Processed item of wave 152 (Ending employment slot, continuing the
round-robin with waves 146/148/150). Read all 79 existing "Ending
employment" document titles/ids in `data/documents.json` before
choosing a topic. Several candidates suggested by the task brief were
checked and ruled out as already covered: Cal-COBRA's own independent
notice duty (already covered by `calcobra_election_notice` and
`cobra_notice_penalties_info_sheet`), Labor Code § 1102.5 whistleblower
retaliation at termination (already covered in depth by three clauses
of the existing `wrongful_termination_public_policy_info_sheet`
document, plus a separate dedicated `1102.5` whistleblower document in
the "During employment" category), and non-disparagement/no-rehire
severance restrictions (already covered by
`non_disparagement_agreement_info_sheet` and
`no_rehire_clause_restriction_info_sheet`). The WARN Act's required
notice *content* was also checked and ruled out: the existing
`federal_warn_act_business_sale_and_notice_info_sheet` document's
`warnsale_govt_notice_content` clause already summarizes the employee-
representative and unrepresented-employee content categories (whether
permanent/temporary, dates, bumping rights, contact person) in its
body text, alongside the government-unit notice it quotes directly —
too close to existing coverage to be a genuinely open topic.

The chosen topic — Labor Code § 201.3's distinct wage-timing rules for
an employee of a "temporary services employer" assigned to a client
(weekly payday during the assignment regardless of when it ends, a
security-guard/private-patrol-operator workweek variant, faster daily-
pay rules for day-to-day and trade-dispute assignments, reversion to
the general Sections 201/202 discharge/quit rules, a 90-consecutive-
day limitation, and the Section 203 penalty cross-reference) — was
confirmed genuinely open: zero prior corpus hits on "temporary services
employer" or "201.3" as an independent topic (the section number
appeared only incidentally, quoted as part of the Section 203 penalty
list and a Section 204 payday list already used for other documents'
different points). This fits the corpus's established pattern of
industry/category-specific final-wage-timing documents (motion
picture/broadcasting § 201.5, oil drilling § 201.7, baseball venue
events employees § 201.8), none of which address temporary staffing
assignments.

## What this document covers

8 clauses: 1 drafting (applicability note) and 7 authority clauses,
citing Lab. Code §§ 201.3(a)(1), 201.3(a)(2)-(4), 201.3(b)(1)(A)-(B),
201.3(b)(2)-(3), 201.3(b)(4)-(5), 201.3(b)(6), 201.3(c)-(d), 201(a),
202(a), and 203(a):

- **`tempsvcwage_employer_definition`** — the statute's own seven-
  function test defining a "temporary services employer."
- **`tempsvcwage_exclusions_and_terms`** — the nonprofit/farm-labor-
  contractor/garment-manufacturer exclusions, and the "employing unit"/
  "client"/"customer" definitions.
- **`tempsvcwage_weekly_payday_rule`** — the general no-less-than-
  weekly payday rule during an assignment, and its narrower security-
  guard/private-patrol-operator workweek variant.
- **`tempsvcwage_daily_pay_rules`** — the day-to-day-assignment and
  trade-dispute daily-pay triggers.
- **`tempsvcwage_discharge_quit_crossref`** — how a discharge or a quit
  reverts to the general Sections 201 and 202 rules, with those two
  sections' own first-sentence rules quoted directly as corroboration.
- **`tempsvcwage_90day_exception`** — the 90-consecutive-day limitation
  on Section 201.3's own special timing rules.
- **`tempsvcwage_penalty_and_savings`** — the Section 203 waiting-time-
  penalty cross-reference and the section's own non-limitation savings
  clause.

## Genuine findings

- **A disclosed cross-reference the clause does not resolve**:
  Section 201.3(b)(4) uses the term "leasing employer" without defining
  it; the discharge/quit clause's gap discloses this rather than
  guessing at a definition.
- **A disclosed unresolved question on the 90-day exception**: the
  statute does not say which other wage-timing rule governs an
  assignment once Section 201.3 stops applying to it past 90
  consecutive days without weekly pay; the clause's gap discloses this
  as an open question rather than assuming the general final-wage rules
  automatically substitute.
- **A confirmed legitimate citation-reuse pattern, not duplication**:
  the § 203(a) penalty-list sentence quoted in `tempsvcwage_
  penalty_and_savings` is also quoted by several existing corpus
  clauses (general waiting-time penalty, oil-drilling final wage,
  itemized-wage-statement recordkeeping) — each, including this one,
  making a different specific point about that document's own topic in
  relation to § 203, consistent with this corpus's established practice
  for widely cross-referenced statutes. Independently re-confirmed
  byte-for-byte identical to the version already in the corpus.
- **Undefined cross-referenced terms disclosed rather than chased**:
  § 201.3(a)(2)'s exclusions cross-reference Labor Code § 1682(b)
  (farm labor contractor), Labor Code § 2671(d) (garment manufacturing
  "contractor"), and Unemployment Insurance Code § 135 (employing
  unit); none of these three were independently fetched, and the
  `tempsvcwage_exclusions_and_terms` clause's gap discloses this rather
  than describing those definitions without having verified them.

## Honest gap(s) disclosed

This document does not independently fetch or quote Business and
Professions Code Chapter 11.5 (security guard/private patrol operator
licensing), Labor Code § 500 ("workweek" definition), the Industrial
Welfare Commission wage orders' executive/administrative/professional
definitions, Labor Code § 1682(b), Labor Code § 2671(d), or
Unemployment Insurance Code § 135 — all cross-referenced by § 201.3
itself but outside this document's direct verification scope, each
disclosed in the relevant clause's gap rather than paraphrased as
verified fact. It does not resolve what wage-timing rule applies once
the 90-consecutive-day exception takes an assignment outside Section
201.3's own coverage, does not restate Sections 201's or 202's later
subdivisions (state-employee leave-deferral provisions, irrelevant to
temporary services employees), and does not restate § 203(b)'s statute
of limitations.

## Method

Fetched Lab. Code §§ 201.3, 201, 202, and 203 directly from
leginfo.legislature.ca.gov, each fetched twice via curl through the
environment's proxy with two distinct User-Agent strings (a Windows/
Chrome-style UA and a distinct curl-labeled UA), confirmed byte-
identical after normalizing only whitespace (collapsing HTML line-wrap
tabs/newlines to single spaces, converting `&nbsp;` to a plain space) —
no genuine textual discrepancies found between the two independent
fetches of any of the four sections. All 10 citation-quote instances
across the 7 authority clauses were programmatically verified by a
Python script asserting each quote is an exact, contiguous substring of
the corresponding normalized source text; all 10 passed on the first
attempt with no extraction artifacts requiring correction. CourtListener
was not used — this document rests entirely on the operative statutory
text of the four cited sections, an appropriate approach for a pure
wage-timing statute topic with no located on-point case law needed to
support any of the clauses' propositions.

## Verification

- All four sections fetched twice independently with distinct
  User-Agent strings; all 10 citation instances confirmed as exact
  substrings via automated script (see quote-verification output:
  `tempsvcwage_employer_definition` (950 chars), `tempsvcwage_
  exclusions_and_terms` (711 chars), `tempsvcwage_weekly_payday_rule`
  (1,237 chars), `tempsvcwage_daily_pay_rules` (925 chars),
  `tempsvcwage_discharge_quit_crossref` (3 citations: 420, 124, 349
  chars), `tempsvcwage_90day_exception` (268 chars), `tempsvcwage_
  penalty_and_savings` (2 citations: 287, 720 chars) — all OK, zero
  genuine defects found requiring a gap-field correction disclosure.
- Checked for `{{` leakage in every clause's `title`/`gap`/`body` and
  every citation's `case`/`cite`/`url`/`quote` field — clean.
- Checked every `{{fieldId}}` placeholder used in clause bodies against
  the new document's declared `fields` array — all three placeholders
  used (`employeeName`, `companyName`, `terminationDate`) resolve to
  declared fields; no unresolved placeholders.
- Checked every citation's `case` field for emptiness — all 10
  populated with proper citation identifier strings.
- Checked for duplicate clause IDs against the full corpus (none); the
  `tempsvcwage_` prefix has zero collisions. Confirmed no existing
  document or clause independently covers Labor Code § 201.3 as its own
  topic.
- Confirmed exact schema conformance: authority clauses carry exactly
  `{id, title, kind, status, checkedDate, body, gap, citations}`;
  citations carry exactly `{case, cite, url, quote}`; the drafting
  clause carries exactly `{id, title, kind, body}`; the document
  carries exactly `{id, title, description, categories, clauseOrder,
  fields}`.
- No new field ids required — all three fields (`employeeName`,
  `companyName`, `terminationDate`) reused from the existing corpus,
  with document-specific labels/placeholders (e.g., "Company
  (temporary services employer) name").
- Corpus-wide validation (JSON parses cleanly for both files, all
  clause ids unique across 5,073 clauses, all document ids unique
  across 625 documents, every clauseOrder reference in the new document
  resolves to an existing clause id) run across the full updated corpus
  — clean.

## Net changes

- New document: Temporary Services Employer Final-Wage Timing (Labor
  Code § 201.3) — Information Sheet
  (`temp_services_employer_final_wage_timing_info_sheet`), 8 clauses
  (7 authority + 1 drafting), in the Ending employment category. No new
  fields.
- Corpus: 5,065 → 5,073 clauses; 624 → 625 documents. Wave 152
  (Ending employment category).
