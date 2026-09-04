# Ending employment, new document: OWBPA Group/Exit-Incentive Program Disclosure Notice

## Why this document

Third document of wave 84, chosen via a scoping agent's category-gap
survey, which flagged that this gap is already self-evidenced inside
the corpus's own existing content. Read the existing "Severance
Agreement" document and its `sev_owbpa` clause in full — confirmed its
`gap` field explicitly states the 21/45-day and 7-day individual-waiver
rules are covered, but that "[g]roup and exit-incentive terminations
carry a further requirement this clause doesn't state: the employer
must also give written disclosure... of the group or class covered,
the eligibility factors and time limits for the program, and the job
titles and ages of everyone eligible or selected for it alongside
everyone in the same job classification or unit who wasn't." Grepped
the corpus for "626(f)," "OWBPA," "exit incentive," and "decisional
unit" and found only two prior cross-references (the `sev_owbpa` gap
field itself, and a `rifselect_owbpa_group_disclosure_crossref` clause
in the Layoff/RIF Selection Criteria document that explicitly declines
to re-derive the requirement) — no document anywhere operationalizes
the group-disclosure content into an actual drafting instrument.
Confirmed a real, non-duplicative gap, and confirmed a new standalone
document (rather than a gap-fix into Severance Agreement) is the right
structure, since a group/exit-incentive disclosure is typically a
separate instrument given alongside individual releases, with its own
audience ("the average individual eligible to participate" in the
program) and its own tabular age/job-title content.

## What this document covers

6 clauses: 2 drafting (notice header/declaration, ages-and-job-titles
table) and 4 authority clauses, citing 29 U.S.C. § 626(f)(1)(H)(i)-(ii)
and 29 C.F.R. § 1625.22(f)(1)(iii)(A), (f)(1)(iii)(C), (f)(1)(iv),
(f)(2), (f)(3)(vii), (f)(4)(ii), (f)(4)(v):

- **`owbpagroup_class_eligibility_timelimits`** (§ 626(f)(1)(H)(i); 29
  C.F.R. § 1625.22(f)(2), (f)(1)(iv)) — the class/unit/group,
  eligibility-factors, and time-limits disclosure requirement, who must
  receive it, and its stated informed-choice purpose.
- **`owbpagroup_ages_disclosure`** (§ 626(f)(1)(H)(ii); 29 C.F.R.
  § 1625.22(f)(4)(ii), (f)(4)(v)) — the job-titles-and-ages disclosure
  for both those eligible/selected and those in the same job
  classification who are not, plus **a genuine finding**: EEOC
  regulations require individual (not banded) age disclosure and
  require disclosing the entire decisional unit even when only a
  subset is actually terminated.
- **`owbpagroup_decisional_unit_and_program_types`** (29 C.F.R.
  § 1625.22(f)(1)(iii)(A), (C)) — the "decisional unit" concept
  underlying "class"/"unit"/"group"/"job classification"/"organizational
  unit," and the two program types (exit-incentive vs. other
  employment-termination) the duty attaches to.
- **`owbpagroup_disclosure_scope_limit`** (29 C.F.R.
  § 1625.22(f)(3)(vii)) — the regulation's own statement that it is
  limited to the § 626(f)(1)(H) disclosure requirement and does not
  affect discovery or litigation scope in an ADEA charge.

## Genuine corrections and findings

- **The central finding**: EEOC regulations implementing the statutory
  age-disclosure requirement add real substance beyond the bare
  statutory text — age bands (e.g., "age 20-30") do not satisfy the
  requirement, and if only a subset of a decisional unit is actually
  terminated, the entire decisional unit's ages must still be
  disclosed, not only the selected subset. Verified word-for-word from
  the regulation.
- Correctly treated every 29 C.F.R. § 1625.22(f) citation as EEOC's own
  elaboration of the statutory disclosure duty, not as an independent
  second source corroborating the statute — disclosed explicitly in
  every clause's gap field, following the corpus's established
  source-independence discipline.
- The agent could not reach ecfr.gov (which returned HTTP 500 with
  differing content across two fetch attempts) and correctly discarded
  it as unreliable rather than treating an unconfirmed fetch as
  verified, falling back to Cornell Law School's e-CFR mirror instead
  (fetched twice with distinct User-Agents, confirmed byte-identical).
- Correctly declined to restate the individual-waiver mechanics (21/45-
  day consideration period, 7-day revocation, EEOC-participation
  carve-out) already covered by the existing `sev_owbpa` clause —
  cross-referenced by name in every new clause's gap field instead of
  duplicating.

## Honest gap(s) disclosed

Several CFR subparts are not reproduced: rules on breaking down grades
or subcategories within a job title, on combined voluntary/involuntary
terminations, and on successive-increment RIF disclosures. This
document does not itself determine whether a specific employer's
program in fact qualifies as a covered "exit incentive or other
employment termination program," does not define a specific employer's
decisional unit, and does not calculate any specific employer's ages,
job titles, or decisional-unit population.

## Method

Fetched 29 U.S.C. § 626 and 29 C.F.R. § 1625.22 from Cornell Law
School's Legal Information Institute (`law.cornell.edu`), each fetched
twice by the research agent with two distinct User-Agent strings,
confirmed byte-identical after whitespace normalization. All 9
citation quotes across the 4 authority clauses programmatically
confirmed as exact contiguous substrings after whitespace
normalization (no ellipsis-joined quotes). Independently re-verified
during integration review via a twenty-sixth fetch (a distinct curl
User-Agent string, "Groundtruth-26thVerify-OWBPAGroup/1.0") of both
sources — 7 of 9 quotes matched byte-for-byte on the first pass; the
remaining 2 matched only after whitespace normalization, and manual
inspection of the surrounding source context confirmed both are
genuine source-side rendering artifacts (a stray space inserted before
a comma/closing-quote at an inline-element boundary in Cornell LII's
page markup — e.g., "employees ," and "consideration ”)") rather than
defects in the delivered quotes, consistent with this project's
established PDF/HTML-extraction-artifact pattern; no correction to the
delivered quote text was needed.

## Verification

- Both federal sources fetched twice independently by the research
  agent with distinct User-Agent strings, plus a twenty-sixth
  independent fetch during integration review; all 9 quotes confirmed
  clean (2 via whitespace-normalized match after confirming a genuine
  source-side rendering artifact, not a misquote).
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — every CFR citation is
  correctly disclosed as EEOC's own elaboration of the statutory
  requirement, not independent corroboration; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 9
  populated with proper case/citation identifier strings.
- Two fields reused (`companyName`, 188 prior documents; `employeeName`,
  129; `noticeDate`, 11). Six new fields required — grepped the corpus
  and confirmed no existing field fit a decisional-unit description,
  eligibility factors, program time limits, program name, or the two
  age/job-title tables — a reasonable outcome given this document's
  content is structurally unlike any prior document's fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: OWBPA Group/Exit-Incentive Program Disclosure Notice
  (`owbpa_group_program_disclosure_notice`), 6 clauses (4 authority + 2
  drafting), in the Ending employment category. Six new fields
  (`programName`, `decisionalUnitDescription`, `eligibilityFactors`,
  `programTimeLimits`, `eligibleSelectedAgesTable`,
  `ineligibleAgesTable`).
- Corpus: 2,908 → 2,914 clauses; 383 → 384 documents. Third addition of
  wave 84.
