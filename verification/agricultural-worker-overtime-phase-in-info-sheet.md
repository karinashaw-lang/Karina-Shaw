# During employment, new document: Phase-In Overtime for Agricultural Workers Act — Information Sheet

## Why this document

Second document of wave 80. Confirmed by grep that "agricultural
overtime," "857," "AB 1066," and "agricultural employee" had zero
substantive prior hits (only incidental numeric coincidences and an
unrelated Labor Code § 246.5 emergency-leave provision for
agricultural employees). Read the existing Domestic Worker Bill of
Rights document in full — confirmed it addresses a different,
distinctly-exempted worker category (personal attendants/in-home
caregivers) with its own separate 9-hour/45-hour overtime formula, no
overlap. Confirmed non-duplicative.

## What this document covers

7 clauses: 2 drafting (declaration, acknowledgment) and 5 authority
clauses, citing Cal. Labor Code §§ 857, 858(c)-(d), 859, 860(a)(1),
(d)(1)-(2), 861, 862(a), (c), and 863(a), (c):

- **`agot_title_and_findings`** (§ 857, § 858(c)-(d)) — the
  statute's title (Phase-In Overtime for Agricultural Workers Act of
  2016, enacted by AB 1066) and its legislative findings: agricultural
  workers were historically excluded from FLSA wage/overtime
  protections.
- **`agot_agricultural_occupation_definition`** (§ 859) — the chapter
  cross-references IWC Wage Order No. 14-2001 for the definition of
  "agricultural occupation" rather than defining it independently —
  honestly disclosed as not independently fetched or verified.
- **`agot_overtime_phase_in_schedule`** (§ 860(a)(1), (d)(1)-(2)) —
  **the central finding**: the four-stage phase-in schedule has now
  fully run its course for both employer-size categories (the final
  January 1, 2025 step for 25-or-fewer-employee employers has passed),
  so the 8-hour/40-hour threshold now applies to all agricultural
  employers regardless of size — described as the statute's current
  operative rule, not an in-progress schedule.
- **`agot_general_overtime_extension_and_double_time`** (§ 861,
  § 862(a), (c)) — general overtime rules extend to agricultural
  occupations except where §§ 860/862(a) supply specific thresholds,
  and the 12-hour daily double-time threshold has likewise now fully
  phased in for all employer sizes.
- **`agot_governor_suspension_authority`** (§ 863(a), (c)) — the
  Governor's conditional, now-lapsed authority to delay the schedule
  by up to one year at a time, tied to a minimum-wage-increase
  suspension mechanism — honestly disclosed as not researched for
  whether it was ever actually exercised.

## Genuine corrections and findings

- **The central finding and a genuine currency correction**: confirmed
  precisely that the phase-in schedule, still displayed in full on
  leginfo's current statutory text, is now entirely historical — all
  dates have passed as of today. The document describes the CURRENT
  operative 8-hour/40-hour and 12-hour-double-time thresholds as
  presently applicable to all agricultural employers, rather than
  presenting a still-in-progress schedule as if it were ongoing.
- Confirmed the statute cross-references IWC Wage Order 14-2001 for
  the "agricultural occupation" definition rather than defining it
  independently — correctly declined to fabricate or guess at that
  Wage Order's own text, which was not independently fetched.
- Confirmed the Governor's suspension authority was itself
  time-limited and expired with the schedule's own end-date (January
  1, 2025) — honestly disclosed that whether it was ever exercised was
  not researched.
- Correctly declined to resolve the interaction between the general
  seventh-consecutive-workday double-time rule (§ 510(a)) and the
  agriculture-specific 12-hour daily double-time rule (§ 862) —
  disclosed as an open, unaddressed question rather than assumed.

## Honest gap(s) disclosed

IWC Wage Order No. 14-2001's own "agricultural occupation" definition
is not independently fetched, quoted, or verified. Whether the
Governor ever exercised the § 863 suspension authority during the
phase-in period is not researched. How "employs 25 or fewer employees"
is counted (over what period, across what related entities) is not
addressed — the chapter itself does not define the counting method.
The interaction between § 510(a)'s general double-time rule and § 862's
agriculture-specific rule is not resolved.

## Method

Fetched Cal. Labor Code §§ 857-863 from `leginfo.legislature.ca.gov`,
each fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical after whitespace normalization. All
12 citation quotes across the 5 authority clauses programmatically
confirmed as exact contiguous substrings (no ellipsis-joined quotes).
Independently re-verified during integration review via a ninth fetch
(a distinct curl User-Agent string, "Groundtruth-NinthVerify-AgOT/1.0")
of all seven sections — all 12 quotes confirmed clean.

## Verification

- Statutory sections fetched twice independently by the research agent
  with distinct User-Agent strings, plus a ninth independent fetch
  during integration review; all quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are provisions of the same
  statutory chapter (not independently corroborating); correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("Purpose and Declaration," "Signature and
  Acknowledgment") match titles used elsewhere in the corpus —
  confirmed as the established boilerplate-title reuse pattern, not a
  genuine collision.
- No new fields required — all six fields (`companyName`,
  `employeeName`, `jobTitle`, `startDate`, `dateSigned`, `cityState`)
  reused from the existing corpus (182, 123, 16, 14, 150, and 129 prior
  documents respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Phase-In Overtime for Agricultural Workers Act
  (Labor Code §§ 857-864) — Information Sheet
  (`agricultural_worker_overtime_phase_in_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the During employment category. No new
  fields.
- Corpus: 2,792 → 2,799 clauses; 367 → 368 documents. Second addition
  of wave 80.
