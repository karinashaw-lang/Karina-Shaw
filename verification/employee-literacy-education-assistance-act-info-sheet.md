# During employment, new document: Employee Literacy Education Assistance Act — Information Sheet

## Why this document

First processed item of wave 107 (During employment slot, 2×2 pattern
targeting the two then-lowest-tied categories). Roughly ten candidate
topics (personnel-file inspection, Equal Pay Act, pay-scale disclosure,
Cal-WARN/federal WARN, drug testing, wage garnishment, vacation
forfeiture, CalGINA/GINA, SDI/PFL) all turned up existing coverage in
this mature 3,561-clause corpus. The agent confirmed zero prior
coverage of Labor Code §§ 1040-1044 (the Employee Literacy Education
Assistance Act) via both document-level and clause-level checks, and
distinguished it explicitly from FEHA/ADA-style disability accommodation
frameworks, which this chapter is not part of.

## What this document covers

8 clauses: 2 drafting (intro, acknowledgment) and 6 authority clauses,
citing Lab. Code §§ 1040, 1041(a), 1041(b), 1042, 1043, and 1044:

- **`empliteracy_short_title`** — the chapter's formal name and
  five-section scope.
- **`empliteracy_accommodation_duty`** — the 25-employee coverage
  threshold and the accommodation-and-assistance duty, qualified by
  undue hardship.
- **`empliteracy_employer_assistance_defined`** — the non-exhaustive
  statutory examples of "employer assistance."
- **`empliteracy_privacy_duty`** — the employer's reasonable-efforts
  privacy-safeguarding duty.
- **`empliteracy_no_paid_leave_required`** — the chapter's own
  disclaimer that it does not require paid time off.
- **`empliteracy_antitermination`** — the protection against
  termination for disclosing a literacy problem.

## Genuine findings

- **A significant correction to the agent's own working assumption**:
  the agent initially expected a typical disability-style accommodation
  structure (defined confidentiality regime with exceptions, broader
  anti-retaliation language, an explicit remedy). Reading the actual
  text showed the chapter is thinner and structured differently: a
  25-employee private-employer threshold with no counting method
  stated, a "reasonable efforts" (not guaranteed) privacy duty with no
  listed exceptions, and an anti-termination protection narrower than
  sibling leave statutes in this corpus (reaching only "termination,"
  not discharge/demotion/suspension/discrimination generally) — with no
  explicit penalty or enforcement provision anywhere in the five-section
  chapter at all, unlike several neighboring leave statutes already in
  the corpus. This last point is flagged explicitly as the most
  significant finding.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on the statute's own text alone.

## Honest gap(s) disclosed

This document does not define "regularly employing 25 or more
employees" (no measurement period or counting method stated), does not
define "undue hardship" or list hardship factors, does not state a
response deadline, and does not address public-sector coverage. It
does not state whether an employer must pay for the literacy program
itself, does not specify a minimum assistance duration, and does not
list privacy-duty exceptions or a privacy-violation remedy. It does not
address whether an employee may use accrued PTO for this purpose or how
this chapter interacts with other leave entitlements, does not define
"satisfactorily performs," and does not state whether the
anti-termination protection reaches adverse actions short of
termination (demotion, suspension, discrimination).

## Method

Fetched Lab. Code §§ 1040, 1041, 1042, 1043, and 1044 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
extraction and normalization. CourtListener's daily rate limit was
already exhausted on the agent's test call; no case law was used, a
disclosed and legitimate choice. All 6 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
one-hundred-and-sixteenth fetch (a new distinct curl User-Agent string,
"Groundtruth-116thVerify-EmpLiteracy/1.0") of all 5 sections — all 6
citation instances confirmed clean on direct normalized-whitespace
substring match, no extraction artifacts encountered. A personal
spot-check searched the corpus for "1040" through "1044," "literacy,"
and "illiterac" and confirmed the "1040" hits were false-positive
substring collisions (unrelated Probate Code and Civil Code sections),
not genuine prior coverage.

## Verification

- All 5 Labor Code sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a
  one-hundred-and-sixteenth independent fetch during integration
  review; all 6 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each authority clause
  cites a single distinct statutory section; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); two
  drafting-clause titles ("About This Information Sheet,"
  "Acknowledgment") collide with generic boilerplate titles already
  reused by dozens of other drafting clauses across the corpus —
  confirmed as intentional generic-title reuse, not a content
  duplicate. Independently reconfirmed this document is distinct from
  the corpus's ADA and Pregnant Workers Fairness Act accommodation
  documents.
- Checked every citation's `case` field for emptiness — all 6
  populated with proper citation identifier strings.
- No new fields required — all three fields (`employeeName`,
  `companyName`, `dateSigned`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Employee Literacy Education Assistance Act —
  Information Sheet (`employee_literacy_education_assistance_info_sheet`),
  8 clauses (6 authority + 2 drafting), in the During employment
  category. No new fields.
- Corpus: 3,561 → 3,569 clauses; 470 → 471 documents. First processed
  item of wave 107.
