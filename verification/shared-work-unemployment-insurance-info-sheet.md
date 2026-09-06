# Ending employment, new document: Shared Work (Work Sharing) Unemployment Insurance Program — Information Sheet

## Why this document

Third processed item of wave 132 (Ending employment slot, 1×4 pattern).
The chosen topic — California's Shared Work Unemployment Insurance
Program under Unemployment Insurance Code §§ 1279.5 and 1279.7, a
statutory alternative to layoff in which an employer submits a plan to
the Employment Development Department to reduce a defined "affected
unit's" hours by 10-60 percent, with affected employees drawing
partial "work sharing compensation" for the reduced hours — was
confirmed genuinely open and distinct from this corpus's existing WARN
Act, layoff-selection-criteria, and individual UI-claimant/UI-appeal
documents, none of which address this employer-initiated, hours-
reduction alternative to laying employees off at all. A duplication
spot-check for "1279.5" across the full corpus found one apparent hit,
traced to `namechange_hearing_standard_and_denial_grounds`'s citation
of Code of Civil Procedure § 1279.5(e) — a completely different and
unrelated statute governing name-change petition hearings — confirmed
a false-positive collision. Zero hits for "1279.7."

## What this document covers

11 clauses: 2 drafting (intro/declaration, signature) and 9 authority
clauses, citing UIC § 1279.5(a), (c), (d), (e), (f), (h), (j), (k),
(p) and § 1279.7:

- **`sharedwork_definitions`** — the "affected unit" and "work sharing
  plan" statutory definitions.
- **`sharedwork_purpose_and_unemployed_definition`** — the section's
  special "unemployed" definition for work-sharing purposes.
- **`sharedwork_application_requirements`** — the 10-60 percent
  reduction range and required application contents.
- **`sharedwork_approval_process_and_appeal`** — the director's
  10-working-day decision deadline and the employer's 20-day appeal
  window.
- **`sharedwork_duration_revocation_termination`** — plan expiration
  (12-month cap) and the director's good-cause revocation power.
- **`sharedwork_employee_eligibility_and_benefit_calc`** — individual
  employee eligibility conditions and the weekly compensation formula.
- **`sharedwork_combined_benefit_cap_and_52_week_limit`** — the
  combined-benefits cap and the 52-week limit on work sharing benefits.
- **`sharedwork_voluntary_participation_requirement`** — the written
  employer/bargaining-agent agreement requirement.
- **`sharedwork_electronic_application_and_one_year_term`** — the
  electronic-application portal (§ 1279.7) and its one-year
  deemed-approval term.

## Genuine findings

- **A disclosed statutory cross-reference, not a restated rule**: the
  electronic-application clause's gap explicitly notes that a plan
  deemed approved for one year under § 1279.7 is not thereby exempt
  from the separate 12-month cap on plan duration described in
  § 1279.5(e) — flagging an interaction between the two sections
  rather than resolving it.
- **A disclosed, unaddressed statutory gap**: the compensation-formula
  clause's gap notes that the formula depends on "the regular weekly
  unemployment compensation amount," a figure set under other, out-
  of-scope Unemployment Insurance Code provisions governing base-period
  wages — no dollar amount can be derived from this clause alone.
- **A disclosed, unaddressed statutory silence**: the voluntary-
  participation clause's gap notes the statute does not state what
  recourse, if any, an employee has if the employer or bargaining agent
  declines to agree to participate.
- **Three disclosed source-formatting artifacts**: three clauses'
  quotes reproduce a mid-sentence line break present in the source
  HTML, where leginfo.legislature.ca.gov splits a single statutory
  sentence across two adjacent `<p>` elements with no intervening word
  — each disclosed in the affected clause's gap and confirmed exact
  once whitespace is normalized across the artifact.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not calculate the "regular weekly unemployment
compensation amount" underlying the work-sharing benefit formula, does
not resolve what recourse an employee has if participation consent is
withheld, does not restate the substantive plan requirements inside
the electronic-application clause, and does not determine that any
specific employer's or employee's own circumstances satisfy the
statute.

## Method

Fetched UIC § 1279.5 and § 1279.7 from leginfo.legislature.ca.gov, each
fetched twice by the research agent with two distinct User-Agent
strings, confirmed identical after HTML-tag-stripping and whitespace
normalization. CourtListener's daily quota was already exhausted (HTTP
429) on the agent's test call; no case law was used or fabricated.
Every citation's quote field was programmatically confirmed by the
research agent as an exact, contiguous substring of the fetched source
text (whitespace-normalized to account for the three disclosed
line-break artifacts).

Independently re-verified during integration review via a
one-hundred-and-ninety-second fetch (a new distinct curl User-Agent
string, "Groundtruth-192ndVerify-SharedWork/1.0"). Section 1279.7
fetched cleanly on the first attempt. Section 1279.5 required
resolving leginfo's multi-version disambiguation mechanism: the
section was amended in both 2013 and 2020, so a direct request
302-redirects to a version-selection page (`selectFromMultiples.xhtml`)
whose version links are JSF/Mojarra AJAX handlers rather than plain
URLs. This was resolved legitimately (not bypassed or worked around
with a stale source) by capturing a session cookie and the page's
`javax.faces.ViewState` token, then submitting the same AJAX POST the
page's own JavaScript would submit — with the 2020-version parameters
(`op_statues=2020`, `op_chapter=209`, `op_section=2`,
`nodeTreePath=2.1.5.3`) — which the server accepted and redirected to
the current-version display page, confirmed by its own text as
"Amended (as added by Stats. 2013, Ch. 141, Sec. 2) by Stats. 2020,
Ch. 209, Sec. 2." All 13 citation instances (11 from § 1279.5, 2 from
§ 1279.7) were then confirmed clean on direct normalized-whitespace
substring match against this freshly and correctly fetched current-
version text, with no fallback needed. The three disclosed mid-
sentence line-break artifacts were specifically inspected in context
and confirmed to be genuine leginfo `<p>`-tag rendering quirks, not
errors.

## Verification

- Both Unemployment Insurance Code sections fetched twice independently
  by the research agent with distinct User-Agent strings, plus a
  one-hundred-and-ninety-second independent fetch during integration
  review (which required resolving leginfo's multi-version
  disambiguation AJAX mechanism to reach the correct 2020-amended
  version); all 13 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `sharedwork_` prefix has zero collisions. Ran
  section-number-specific greps for "1279.5" and "1279.7" across the
  full corpus — the sole hit was the previously-identified false-
  positive Code of Civil Procedure § 1279.5(e) collision inside an
  unrelated name-change-petition clause; zero hits for "1279.7."
- Checked every citation's `case` field for emptiness — all 13
  populated with proper citation identifier strings.
- One new field id confirmed genuinely necessary and non-duplicative:
  `hoursReductionPercentage` — did not exist previously in the corpus
  under any name. Eight other fields (`companyName`,
  `workUnitDescription`, `affectedEmployeeCount`, `effectiveDate`,
  `authorizedSignerName`, `authorizedSignerTitle`, `signatureCity`,
  `signatureDate`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Shared Work (Work Sharing) Unemployment Insurance
  Program — Information Sheet
  (`shared_work_unemployment_insurance_info_sheet`), 11 clauses
  (9 authority + 2 drafting), in the Ending employment category. One
  new field: `hoursReductionPercentage`.
- Corpus: 4,310 → 4,321 clauses; 546 → 547 documents. Third processed
  item of wave 132.
