# During employment, new document: Mandatory Sexual Harassment Prevention Training — Information Sheet

## Why this document

First processed item of wave 93 (During employment slot). Read the
existing "Anti-Harassment & Non-Discrimination Policy" document's clauses
in full — confirmed it is built entirely on federal Title VII (prohibition,
reporting, employer-response defense, retaliation), with no mention of
California's training mandate. Grepped the corpus for "12950.1," "sexual
harassment training," and "SB 1343" — zero hits. Confirmed a real,
non-duplicative gap.

## What this document covers

7 clauses: 2 drafting (declaration, certification/acknowledgment) and 5
authority clauses, citing Gov. Code § 12950.1(a)(1), (a)(2), (a)(3), (c),
(d), (h)(1), (j):

- **`sexharasstrain_covered_employers`** (§ 12950.1(a)(1), (h)(1)) — the
  5+ employee threshold, and the section-specific "employer" definition
  reaching regularly-contracted persons, not just common-law employees.
- **`sexharasstrain_hours_by_role`** (§ 12950.1(a)(1), (j)) — the two-hour
  supervisory / one-hour nonsupervisory split, carried over to the state's
  own online courses.
- **`sexharasstrain_frequency_and_newhire_timing`** (§ 12950.1(a)(1)) —
  the two-year retraining cycle and six-month new-hire/new-supervisor
  deadlines.
- **`sexharasstrain_content_requirements`** (§ 12950.1(a)(1)-(3)) — the
  required general content, the abusive-conduct component, and the
  gender-identity/expression/sexual-orientation component.
- **`sexharasstrain_compliance_not_shield`** (§ 12950.1(c), (d)) — the
  two-way rule that a training gap alone doesn't create liability, and
  compliance alone doesn't insulate from it, plus the department's
  enforcement mechanism.

## Genuine corrections and findings

- **A genuine correction to the task's own framing**: the brief described
  the statute by its 2018 origin, "SB 1343." The agent found the currently
  codified text reflects subsequent amendments (2019 AB 1825/SB 778
  recodification; 2020 AB 3369 adding the abusive-conduct and
  LGBTQ+-inclusive content mandates, effective Sept. 28, 2020) — cited as
  "Government Code § 12950.1" per current codification rather than by the
  founding bill number.
- **A genuine finding not anticipated by the brief**: § 12950.1(h)(1)
  gives this specific section its own narrower "employer" definition (5+
  employees or 5+ regularly-contracted persons), distinct from FEHA's
  general employer definition elsewhere in the code — disclosed explicitly
  rather than conflated with the general FEHA definition.
- Confirmed the brief's assumed figures exactly as stated once verified:
  the 5-employee threshold, 2-hour/1-hour split, two-year cycle, and
  six-month new-hire/new-supervisor window all matched the fetched text
  precisely — no correction needed there.
- Correctly disclosed that "the department" in subdivision (d) is not
  separately defined within the quoted text, and that the fetched page's
  own chapter heading (reflecting the 2022 Civil Rights Department
  renaming) was used only as external confirmation, not independently
  traced through legislative history.

## Honest gap(s) disclosed

The seasonal/temporary-employee 30-day/100-hour timing rule (subd. (f)),
the multiemployer collective-bargaining construction-industry alternative
and its qualified-trainer content list (subd. (l)), prior-training
portability across employers (subd. (m)), the statutory definition of
"abusive conduct" (subd. (h)(2)), the state's 80-hour new-employee
training incorporation (subd. (b)), and FEHA's general "employer"/
"supervisory employee" definitions (Gov. Code § 12926) are named but not
independently fetched or covered. This document does not determine
whether any specific employer is covered, whether any specific employee
holds a "supervisory" position, or whether any specific training as
delivered actually satisfied every statutory requirement.

## Method

Fetched Gov. Code § 12950.1 from `leginfo.legislature.ca.gov`, fetched
twice by the research agent with two distinct User-Agent strings,
confirmed byte-identical after whitespace normalization. All 9 citation
quotes (11 counting each clause's own copy) across the 5 authority clauses
programmatically confirmed as exact contiguous substrings ending at
sentence/clause boundaries (no ellipsis-joined or mid-word-truncated
quotes). Independently re-verified during integration review via a
sixtieth fetch (a distinct curl User-Agent string,
"Groundtruth-60thVerify-SexHarassTrain/1.0") of the section — all quotes
confirmed clean on direct substring match, no extraction artifacts
encountered.

## Verification

- The statutory section fetched twice independently by the research agent
  with distinct User-Agent strings, plus a sixtieth independent fetch
  during integration review; all quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same statutory
  section (all of them, here — § 12950.1 in its entirety); correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  drafting-clause title duplicates existing corpus titles — consistent
  with this project's established pattern of generic, reused boilerplate
  drafting-clause titles; clause IDs remain unique.
- Checked every citation's `case` field for emptiness — all populated
  with proper citation identifier strings.
- Six fields reused (`companyName`, `employeeCount`, `employeeName`,
  `jobTitle`, `dateSigned`, `cityState`). One new field required
  (`trainingCompletionDate`) — grepped the corpus and confirmed the
  existing `completionDate` field is scoped elsewhere to home-improvement
  contracts and labeled "approximate," a poor semantic fit here.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Mandatory Sexual Harassment Prevention Training —
  Information Sheet (`sexual_harassment_prevention_training_info_sheet`),
  7 clauses (5 authority + 2 drafting), in the During employment category.
  One new field (`trainingCompletionDate`).
- Corpus: 3,136 → 3,143 clauses; 414 → 415 documents. First processed
  item of wave 93.
