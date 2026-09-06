# Hiring, new document: Driver's License Requirement in Job Postings — Information Sheet

## Why this document

First processed item of wave 128 (Hiring slot, 1×4 pattern). The
agent ruled out four candidates via specific section-number greps
before landing here: the Displaced Janitor Opportunity Act (Lab. Code
§§1060-1065), the Grocery Worker Retention Law (Lab. Code
§§2500-2522), the blacklisting prohibition (Lab. Code §§1050, 1053,
1054), and the off-duty cannabis nondiscrimination provision (Gov.
Code §12954) were all confirmed already substantively covered. The
chosen topic — Gov. Code §12940(q), added to FEHA by SB 1100 (eff.
January 1, 2025), which restricts stating a driver's-license
requirement in job postings and applications — was confirmed
genuinely open: zero prior corpus hits on "12940(q)" or its
subdivision text before drafting.

## What this document covers

8 clauses: 2 drafting (intro, acknowledgment) and 6 authority clauses,
citing Gov. Code §12940(q)(1) intro, (q)(1)(A), (q)(1)(B), (q)(2)
intro and (A)-(E), §12926(d), and §12940's official amendment history
note:

- **`dlreq_core_prohibition`** — the core rule against stating a
  driver's-license requirement in hiring materials.
- **`dlreq_driving_function_condition`** — the first lawful-statement
  condition: driving must be a reasonably expected job function.
- **`dlreq_transportation_comparability_condition`** — the second
  condition: no comparable alternative transportation in time or cost
  to the employer.
- **`dlreq_alternative_transportation_examples`** — the statute's
  non-exhaustive list of alternative-transportation examples.
- **`dlreq_covered_employer_definition`** — FEHA's general "employer"
  definition, independently re-verified for this document.
- **`dlreq_effective_date_origin`** — the SB 1100 origin and January
  1, 2025 effective date.

## Genuine findings

- **Two disclosed, verified source-formatting artifacts, preserved
  exactly rather than cleaned up**: a literal HTML line-wrap
  (embedded newline and tab characters) in §12940(q)(2)'s introductory
  sentence, and triple-space formatting around "(SB 1100)" in the
  official leginfo amendment history note — both confirmed present in
  the raw HTML and reproduced exactly in the quote fields, each
  explained in the corresponding gap field.
- **A disclosed, deliberate choice to independently re-verify a
  shared definitional citation**: Gov. Code §12926(d) (the general
  FEHA "employer" definition) is already cited by this corpus's
  existing CROWN Act document; the agent explicitly disclosed
  re-fetching and re-verifying it independently for this document
  rather than assuming the prior citation's accuracy.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted, and the statute is barely
  20 months operative in any event; no case law was used or
  fabricated.
- **A disclosed textual observation on an undefined standard**: the
  transportation-comparability clause's gap notes the statute measures
  comparability by "travel time or cost to the employer" specifically
  — not to the applicant — a textual distinction the agent flagged
  rather than glossed over.

## Honest gap(s) disclosed

This document does not resolve what falls within the catch-all term
"other material" beyond job advertisements, postings, and
applications, does not define what makes an expectation about job
functions "reasonable," does not state a threshold or formula for when
a difference in travel time or cost stops being "comparable," does not
address whether the statute's alternative-transportation list also
reaches public transit or a personal vehicle other than the
applicant's own car, does not state how the "five or more employees"
threshold under §12926(d) is counted, and does not independently
describe the bill's legislative history or Legislative Counsel's
Digest.

## Method

Fetched Gov. Code §12940 and §12926 from leginfo.legislature.ca.gov,
each fetched twice by the research agent with two distinct
User-Agent strings, confirmed byte-identical (core statutory content
only; differing ViewState tokens and debug timestamps outside the
legal text were excluded from the comparison). CourtListener's daily
quota was already exhausted (HTTP 429) on the agent's test call; no
case law was used or fabricated. All 12 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings, including the two disclosed formatting artifacts kept
exact.

Independently re-verified during integration review via a
one-hundred-and-seventy-eighth fetch (a new distinct curl User-Agent
string, "Groundtruth-178thVerify-DriverLicensePosting/1.0") of both
sections — all 12 citation instances confirmed clean on a raw,
whitespace-preserving exact-substring match (not just normalized
match), directly confirming both disclosed formatting artifacts (the
embedded newline/tab line-wrap and the triple-space history-note
spacing) are genuinely present in the source, not editing errors. The
core prohibition, both lawful-statement conditions, the five
alternative-transportation examples, the employer definition, and the
SB 1100 effective-date history note were all independently
reconfirmed present in the freshly fetched text.

## Verification

- Both Government Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-seventy-eighth independent fetch during integration
  review; all 12 citation instances confirmed clean, including exact
  (non-normalized) verification of both disclosed formatting
  artifacts.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `dlreq_` prefix has zero collisions. Ran a
  section-number-specific grep for "12940(q)" across the full corpus —
  zero hits outside the new clauses, confirming no disguised overlap.
  Confirmed §12926(d) is also cited by the existing CROWN Act document
  and reused deliberately, consistent with the agent's own disclosure.
- Checked every citation's `case` field for emptiness — all 12
  populated with proper citation identifier strings.
- No new fields required — all three fields (`companyName`,
  `employeeName`, `jobTitle`) reused from the existing corpus,
  matching the house style of the closely analogous CROWN Act
  document.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Driver's License Requirement in Job Postings —
  Information Sheet (`driver_license_job_posting_restriction_info_sheet`),
  8 clauses (6 authority + 2 drafting), in the Hiring category. No new
  fields.
- Corpus: 4,169 → 4,177 clauses; 532 → 533 documents. First processed
  item of wave 128.
