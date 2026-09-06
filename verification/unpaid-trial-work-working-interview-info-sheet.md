# Hiring, new document: Unpaid Trial Work / Working Interview — Information Sheet

## Why this document

Third processed item of wave 134 (Hiring slot, 1×4 pattern). The
agent ruled out cannabis pre-employment screening, the noncompete
void-notice duty, no-rehire clauses, the Immigrant Worker Protection
Act, the English-only workplace policy document (a coincidental
timing overlap with a sibling wave-134 agent, correctly caught via
git-log inspection), job-reference/blacklisting statutes, and wage
statements/waiting-time penalties (deliberately dropped from the
draft once confirmed already exhaustively covered) — all confirmed
already covered. The chosen topic — whether time an applicant spends
performing an actual work trial, skills demonstration, or "working
interview" during a hiring process is compensable "hours worked" under
California wage-and-hour law — was confirmed genuinely open and
distinct from this corpus's existing Unpaid Internship Compliance and
Volunteer vs. Employee Classification documents, which address ongoing
arrangements rather than a brief pre-hire trial shift.

A duplication check on §§ 1197, 1194, 1174 found numerous apparent
hits, all confirmed false positives on inspection: several were
citations to different subsections (§ 1197.1, § 1197.5) sharing a bare
number prefix; one was a bill number ("AB 1194"), not a Labor Code
citation; and two were incidental — a case-law quote (*Noe v. Superior
Court*) discussing § 1194 in passing within an unrelated joint-
employer-liability clause, and a different section (§ 247.5, sick-leave
recordkeeping) that merely cross-references § 1174 within its own
text.

## What this document covers

9 clauses: 3 drafting (purpose, trial-work record worksheet,
signature/acknowledgment) and 6 authority clauses, citing IWC Wage
Order No. 4-2001 § 2(F), § 2(G), § 4(A), § 4(A)(1), and Lab. Code
§ 1197, § 1194(a), § 1174(d):

- **`worktrial_employ_employee_definitions`** — the wage order's broad
  "employ"/"employee" definitions, which don't turn on hiring status.
- **`worktrial_no_activity_based_exception`** — § 1197's minimum-wage
  floor contains no exception based on the activity's label.
- **`worktrial_agreement_cannot_waive`** — § 1194(a)'s rule that an
  advance agreement to work unpaid doesn't waive the minimum-wage
  claim.
- **`worktrial_current_minimum_wage_rate`** — the current statewide
  rate ($16.90/hour, effective January 1, 2026).
- **`worktrial_no_small_employer_exception`** — the minimum-wage duty
  applies regardless of employer size.
- **`worktrial_recordkeeping_duty`** — § 1174(d)'s payroll-record duty
  once trial work is paid.

## Genuine findings

- **A disclosed, unresolved scope question**: the recordkeeping-duty
  clause's gap notes the document does not say what obligation, if
  any, attaches when trial work should have been paid but was not.
- **A disclosed adjacent exception left unapplied**: the no-small-
  employer-exception clause's gap notes Wage Order 4's "Learners"
  provision (85% of minimum wage for an employee's first 160 hours in
  an unfamiliar occupation) could apply to some trial-work
  arrangements but is not analyzed here.
- **A disclosed scope limitation on cross-wage-order applicability**:
  the employ/employee-definitions clause's gap notes only Wage Order
  4-2001's text was verified — the corpus does not independently
  confirm identical wording across California's other sixteen
  numbered wage orders.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call
  (query disclosed verbatim in the gap field); every authority clause
  proceeds on statute and regulation text alone.

## Honest gap(s) disclosed

This document does not catalog local minimum-wage ordinances that
exceed the statewide rate, does not analyze the Learners 85%-of-
minimum-wage exception, does not address workers' compensation
coverage during an unpaid trial shift, does not restate the itemized
wage-statement or waiting-time-penalty rules (covered elsewhere in the
corpus), and does not resolve the fact-specific line between
"interview activity" and "compensable work."

## Method

Fetched Lab. Code §§ 1197, 1194, 1174 from leginfo.legislature.ca.gov
and IWC Wage Order No. 4-2001 (a PDF) from dir.ca.gov, each fetched
twice by the research agent with two distinct User-Agent strings via
curl, confirmed identical (byte-identical for the PDF; identical after
stripping the section-text block for the statutes). CourtListener's
daily quota was already exhausted (HTTP 429) on the agent's test call;
no case law was used or fabricated. All 7 citation instances were
programmatically confirmed by the research agent as exact, contiguous
substrings, with one disclosed PDF line-break normalization (a mid-
sentence line break joined with a single space, confirmed against the
raw extracted text as non-substantive).

Independently re-verified during integration review via a
two-hundredth fetch (a new distinct curl User-Agent string,
"Groundtruth-200thVerify-WorkingInterview/1.0") of all three statutes
and the wage-order PDF — all fetched cleanly on the first attempt. All
7 citation instances confirmed clean on direct normalized-whitespace
substring match, with no fallback needed. The employ/employee
definitions, the no-activity-based-exception rule, the no-waiver rule,
the current minimum-wage rate, the no-small-employer-exception rule,
and the recordkeeping duty were all independently reconfirmed present
in the freshly fetched text.

## Verification

- All three cited statutes and the wage-order PDF fetched twice
  independently by the research agent with distinct User-Agent
  strings, plus a two-hundredth independent fetch during integration
  review; all 7 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `worktrial_` prefix has zero collisions. Ran section-
  number-specific greps for "1197," "1194," and "1174" across the full
  corpus — all apparent hits traced to different subsections (§ 1197.1,
  § 1197.5), a bill-number coincidence ("AB 1194"), a case-law quote
  mentioning § 1194 in passing, and an unrelated cross-reference to
  § 1174 inside a different section's own text; zero genuine overlap.
- Checked every citation's `case` field for emptiness — all 7
  populated with proper citation identifier strings.
- No new field ids required — all seven fields (`companyName`,
  `applicantName`, `jobTitle`, `startDate`, `applicableMinimumWage`,
  `dateSigned`, `cityState`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Unpaid Trial Work / Working Interview — Information
  Sheet (`unpaid_trial_work_working_interview_info_sheet`), 9 clauses
  (6 authority + 3 drafting), in the Hiring category. No new fields.
- Corpus: 4,404 → 4,413 clauses; 554 → 555 documents. Third processed
  item of wave 134.
