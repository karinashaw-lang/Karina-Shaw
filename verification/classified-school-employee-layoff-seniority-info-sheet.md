# Ending employment, new document: Layoff and Reemployment Rights of Classified (Non-Certificated) School District Employees — Information Sheet

## Why this document

Third processed item of wave 144 (Ending employment slot, 1×4
pattern). The agent's novelty check confirmed the corpus's existing
Certificated Teacher Dismissal (Morrison) document covers a different
Education Code chapter for tenured teachers with a binding hearing
decision, and its existing Layoff Selection Criteria document
addresses ADEA/FEHA constraints for employers generally rather than
this school-district-specific seniority scheme. A personal
duplication spot-check independently confirmed zero prior corpus
hits on §§ 45114, 45117, 45298, 45308, or "Nevada Joint Union."

## What this document covers

11 clauses: 2 drafting (declaration, closing) and 9 authority clauses,
citing Educ. Code § 45114, § 45308(a), (b)(1), (c), § 45298(a), (b),
§ 45117(a), (b), (c)(3)(A)-(B), and *Short v. Nevada Joint Union High
School District*, 163 Cal.App.3d 1087 (1985):

- **`classlayoff_scope`** — the scheme applies to merit-system and
  non-merit-system districts alike.
- **`classlayoff_seniority_order`** — the basic seniority-based
  layoff/recall order.
- **`classlayoff_length_of_service_definition`** — the paid-hours vs.
  hire-date computation rules, including the 250,000-ADA
  large-district exception.
- **`classlayoff_leave_credit_rules`** — seniority credit for
  specified categories of unpaid leave.
- **`classlayoff_reemployment_list_rights`** — the 39-month
  reemployment preference and examination rights.
- **`classlayoff_voluntary_demotion_rights`** — parallel rights for an
  employee taking a voluntary demotion in lieu of layoff.
- **`classlayoff_annual_notice_and_hearing_request`** — the March 15
  recommendation-notice process and the 7-day-minimum hearing-request
  right (two citations).
- **`classlayoff_hearing_procedure_and_nonbinding_decision`** — the
  administrative hearing procedure and the governing board's final,
  non-binding-on-the-ALJ determination (two citations).
- **`classlayoff_dual_motive_case`** — *Short*'s dual-motive,
  but-for-causation framework with burden-shifting to the district.

## Genuine findings

- **A disclosed meaningful contrast with a sibling corpus
  document**: the hearing-procedure clause's gap explicitly contrasts
  this scheme's non-binding administrative hearing (the governing
  board makes the final determination, unbound by the ALJ's findings)
  with the corpus's separate Certificated Teacher Dismissal document,
  where the Commission on Professional Competence's decision is
  binding — a substantive legal difference stated plainly, not
  glossed over.
- **A disclosed doctrinal staleness caveat**: the dual-motive case
  clause's gap states that the *Short* opinion describes an older,
  30-day-notice version of § 45117 no longer present in the current
  text (which instead centers on the March 15/May 15 annual cycle),
  and that this document has not researched what now serves the same
  function, nor whether the dual-motive framework has since been
  applied, narrowed, or extended by any later published decision.
- **A confirmed reviewer-tooling issue, not a source defect**: this
  review's initial verification script used a truncating regex that
  cut off each fetched section's text mid-way, producing false "quote
  not found" results for several quotes; re-extracting with a more
  robust method confirmed all 10 statutory quotes present — a
  reviewer-side extraction bug, not a defect in the delivered
  clauses.

## Honest gap(s) disclosed

This document does not address classified employees of California
community college districts, does not resolve the classified-versus-
certificated position-classification boundary, does not detail
§ 45297's military-leave credit mechanics, does not describe vacancy-
notification mechanics against the reemployment list, does not
address whether a mid-year (non-annual-cycle) layoff triggers the
same § 45117 notice-and-hearing sequence, and does not detail the
discovery, expense, or specific May 7/May 15 sub-deadlines within
§ 45117(c) beyond what is quoted.

## Method

Fetched Educ. Code §§ 45114, 45117, 45298, and 45308 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings via curl (one connection reset
resolved via retry), confirmed byte-identical. *Short v. Nevada Joint
Union High School District* was located via CourtListener `search`
(confirming cluster_id and opinion_id coincide at 2139573, a combined
opinion) and verified via `get_endpoint_item`; the reporter citation
was confirmed via WebSearch since it was not embedded in the fetched
opinion text. All 11 citation instances were programmatically
confirmed by the research agent as exact substrings.

Independently re-verified during integration review via a two-
hundred-and-thirty-ninth fetch (a new distinct curl User-Agent
string, "Groundtruth-239thVerify-ClassifiedSchoolEmployeeLayoff/1.0")
of all four statutory sections — all fetched cleanly on the first
attempt (one transient connection reset during the initial fetch
resolved via retry). All 10 statutory citation instances confirmed
clean on normalized-whitespace substring match (consistent with the
well-established nbsp-after-subdivision-letter and mid-word line-wrap
artifacts documented throughout this corpus). The *Short* case
citation was independently re-verified via `mcp__CourtListener__search`
and `get_endpoint_item` — the quote confirmed an exact, direct match
against the freshly fetched opinion text. The scope rule, the
seniority order, the length-of-service computation and its
large-district exception, the leave-credit rules, the 39-month
reemployment rights, the voluntary-demotion parallel rights, the
notice-and-hearing process, the non-binding hearing structure, and
the dual-motive framework were all independently reconfirmed present
in the freshly fetched text.

## Verification

- All four cited statutory sections fetched twice independently by
  the research agent with distinct User-Agent strings, plus a two-
  hundred-and-thirty-ninth independent fetch during integration
  review; all 10 statutory citation instances confirmed clean. The
  case-law citation independently re-verified via the CourtListener
  API against the correct internal opinion id; no defects found.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `classlayoff_` prefix has zero collisions. Ran
  section-number-specific greps for "45114," "45117," "45298,"
  "45308," and "Nevada Joint Union" — zero hits on all, confirming
  genuine novelty.
- Checked every citation's `case` field for emptiness — all 11
  populated with proper citation identifier strings.
- No new field ids required — all seven fields (`companyName`,
  `employeeName`, `jobTitle`, `startDate`, `terminationDate`,
  `cityState`, `dateSigned`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Layoff and Reemployment Rights of Classified
  (Non-Certificated) School District Employees — Information Sheet
  (`classified_school_employee_layoff_seniority_info_sheet`), 11
  clauses (9 authority + 2 drafting), in the Ending employment
  category. No new fields.
- Corpus: 4,780 → 4,791 clauses; 593 → 594 documents. Third processed
  item of wave 144.
