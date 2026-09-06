# During employment, new document: Health Care Worker Minimum Wage — Information Sheet

## Why this document

First processed item of wave 115 (During employment slot, 2×2 pattern).
The agent's duplication check pivoted away from one initial candidate:
Lab. Code §98.7 retaliation was found already covered by the existing
`wageretaliation_*` clause set (procedure, 90-day presumption, and
distinction from §132a). Janitorial worker sexual violence prevention
training (§1429.5) and the FAST Act (§1474) both tested clean but were
set aside in favor of the stronger, more self-contained health care
worker minimum wage topic. Document- and clause-level greps for
"1182.14," "health care worker minimum wage," "sb 525" returned zero
hits. Personally reconfirmed via corpus search: zero prior mentions of
"1182.14" or "health care worker minimum wage" anywhere in the corpus.

## What this document covers

11 clauses: 2 drafting (intro, acknowledgment) and 9 authority clauses,
citing Lab. Code § 1182.14(b)(2)(A)(i), (b)(2)(B)(i), (b)(2)(C)(i),
(b)(3)(A), (b)(3)(B)(i), (c)(1), (c)(2), (c)(5), (c)(3), (c)(4), (d)(1),
(d)(2), (g), (f)(1), (f)(2)(B)(i), (f)(2)(B)(ii), (i)(1), (i)(3), (i)(6),
(j)(1)-(2), (j)(3), (j)(5):

- **`hcmw_covered_employee_scope`** — the broad "covered health care
  employee" definition, its illustrative occupation list, contracted-
  employee extension, and outside-salesperson exclusion.
- **`hcmw_covered_facility_scope`** — the "covered health care facility"
  list and the state-agency-owned-facility exclusion.
- **`hcmw_wage_schedule_large_employers`** — the wage schedule for large
  systems, dialysis clinics, and high-Medicare/Medi-Cal-mix hospitals,
  plus the delayed county-facility compliance date.
- **`hcmw_wage_schedule_clinics_and_other`** — the wage schedule for
  four specified clinic categories and for all other covered facilities.
- **`hcmw_annual_cpi_adjustment`** — the CPI-W-based annual adjustment
  mechanism once a tier reaches its final step.
- **`hcmw_salary_exempt_threshold`** — the 150%/200% salary-basis
  threshold for exempt status.
- **`hcmw_enforcement_and_notice`** — Labor Commissioner/civil-action
  enforcement and the posting/written-notice requirements.
- **`hcmw_waiver_program`** — the 12-month delayed-compliance waiver
  program for specified clinics, capped at July 1, 2032.
- **`hcmw_local_preemption`** — preemption of local minimum wage
  ordinances for covered health care employees, with its stated
  exceptions and future off-ramps.

## Genuine findings

- **A significant correction to the agent's own initial assumption**:
  the agent initially assumed this was "a 2024 statute" per the task's
  own framing. Reading the full text showed §1182.14 was actually added
  in 2023 (SB 525) and amended in 2024 (SB 159); the leginfo page's
  history line shows only the amendment, so the SB 525 origin could not
  be independently verified from the fetch alone and was disclosed as
  such in the intro rather than asserted as directly sourced.
- **A corrected structural assumption**: the agent initially expected a
  single flat wage figure; the statute actually has four separate
  employer-tier schedules plus a CPI-indexed escalator, a salary-exempt
  threshold tied to it, a waiver program, and a strong local-preemption
  clause — shaping the final 9-clause structure.
- **A caught and corrected quote-extraction error**: an earlier,
  over-normalized extraction pass (collapsed tabs/newlines) produced 5
  false-mismatch results at HTML paragraph joins; the agent re-extracted
  those 5 quotes from un-collapsed canonical text before delivery.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not reproduce the full ~20-subclause facility list or
every listed occupational/exclusion category verbatim, does not restate
the cross-referenced definitions of "hospital with a high governmental
payor mix" or the clinic categories' Health & Safety Code/42 U.S.C.
cross-references, does not describe the duties-test component of exempt
classification, does not detail the full financial-hardship
documentation required for a waiver application, and does not evaluate
whether any specific local ordinance would be preempted, which the
statute itself commits to "ordinary preemption principles" rather than a
rule stated in advance.

## Method

Fetched Lab. Code § 1182.14 from leginfo.legislature.ca.gov, fetched
twice by the research agent with two distinct User-Agent strings,
confirmed byte-identical after normalizing dynamic JSF ViewState/
DebugOutput tokens (a disclosed, non-substantive artifact). CourtListener's
daily rate limit was already exhausted on the agent's test call; no case
law was used, a disclosed and legitimate choice. All 22 citation
instances programmatically confirmed by the research agent as exact,
contiguous substrings against both independently fetched copies.

Independently re-verified during integration review via a
one-hundred-and-fortieth fetch (a new distinct curl User-Agent string,
"Groundtruth-140thVerify-HealthcareMinWage/1.0"). A strict
whitespace-normalized check initially flagged 8 of the 22 citations as
mismatched; investigation traced every one of the 8 to this session's
established subdivision-marker-spacing artifact (leginfo inserting a
space before a "(A)"/"(i)" subdivision marker following a colon or
period, which the agent's extracted quotes omit — e.g., source "shall be
as follows: (A) From July 1..." versus quote "...as follows:(A) From
July 1..."). A space-tolerant re-check (both quote and source with all
whitespace stripped) confirmed all 8 as exact matches once the known
artifact is accounted for, and the remaining 14 matched cleanly on the
standard normalized check — all 22 citation instances confirmed clean,
no genuine defects. The four-tier wage schedule, the CPI-W adjustment
mechanism, and the local-preemption exceptions were all independently
reconfirmed present in the freshly fetched text.

## Verification

- The primary source fetched twice independently by the research agent
  with distinct User-Agent strings, plus a one-hundred-and-fortieth
  independent fetch during integration review; all 22 citation
  instances confirmed clean (8 via the confirmed-benign subdivision-
  marker-spacing artifact, 14 on direct match).
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
  Independently reconfirmed the §98.7 pivot claim — the existing
  `wageretaliation_*` clause set does cover procedure, presumption, and
  the §132a distinction, consistent with the agent's report.
- Checked every citation's `case` field for emptiness — all 22
  populated with proper citation identifier strings.
- No new fields required — both fields (`employeeName`, `companyName`)
  reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Health Care Worker Minimum Wage — Information Sheet
  (`health_care_worker_minimum_wage_info_sheet`), 11 clauses (9
  authority + 2 drafting), in the During employment category. No new
  fields.
- Corpus: 3,781 → 3,792 clauses; 494 → 495 documents. First processed
  item of wave 115.
