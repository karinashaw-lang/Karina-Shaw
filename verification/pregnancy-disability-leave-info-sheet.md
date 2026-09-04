# During employment, new document: California Pregnancy Disability Leave Law — Information Sheet

## Why this document

Fourth and final document of wave 82. Read the existing CFRA
Information Sheet document in full — confirmed its `cfra_fmla_
relationship` clause explicitly discloses, in its own gap field, that
Government Code § 12945 (California's pregnancy disability leave law)
is a separate law the CFRA document does not cover, and its `cfra_
qualifying_reasons` clause explicitly excludes pregnancy-disability
leave from CFRA's own-condition category. Also read the Pregnant
Workers Fairness Act Accommodation Request document (a federal
reasonable-accommodation duty, a different concept from job-protected
leave) and the Paid Family Leave document (a wage-replacement benefit,
explicitly disclosed there as "not a leave-granting law") in full.
Confirmed non-duplicative.

## What this document covers

8 clauses: 3 drafting (declaration, leave request details,
acknowledgment) and 5 authority clauses, citing Cal. Gov. Code
§ 12945(a)(1), (a)(2)(A), (a)(4), (b), § 12926(d), and § 12945.2(n),
(p), (b)(5)(C):

- **`pdll_core_entitlement`** (§ 12945(a)(1)) — **the central
  finding**: the four-month figure is a statutory CAP on leave tied to
  actual disability duration, not a flat entitlement every employee
  receives — "reasonable period of time" is statutorily defined as the
  period the employee is actually disabled.
- **`pdll_covered_employers`** (§ 12945(a), § 12926(d)) — § 12945
  itself states no employee-count threshold; coverage rests on its own
  cross-reference to § 12926's general FEHA "employer" definition
  (five or more employees), with the religious-nonprofit exclusion.
- **`pdll_health_coverage`** (§ 12945(a)(2)(A)) — the group health
  plan coverage-maintenance duty during leave (capped at four months
  over a 12-month period), with the employer's option to voluntarily
  extend it further.
- **`pdll_cfra_relationship`** (§ 12945.2(n), (b)(5)(C), (p)) — **a
  key finding**: CFRA is expressly "separate and distinct" from
  § 12945, excludes pregnancy-disability leave from its own category,
  and § 12945.2(p) makes § 12945 leave explicitly ADDITIVE to CFRA and
  FMLA leave, not overlapping.
- **`pdll_no_interference`** (§ 12945(a)(4), (b)) — the prohibition on
  interfering with the right, and the statute's own non-diminishment
  clause preserving other pregnancy-discrimination protections.

## Genuine corrections and findings

- **The central finding**: confirmed precisely that "reasonable period
  of time not to exceed four months" is defined by the statute itself
  as the actual disability duration, not a flat four-month grant —
  correcting a common oversimplification of this leave's scope.
- **A key structural finding**: confirmed § 12945.2(p)'s explicit
  additive-leave language — pregnancy disability leave stacks on top
  of CFRA/FMLA leave for the same pregnancy rather than running
  concurrently or being subsumed by it, verified word-for-word.
- Confirmed § 12945 itself states no employee-count threshold — the
  coverage conclusion rests entirely on its own cross-reference to
  § 12926's general FEHA definition, a real structural dependency
  disclosed rather than assumed.
- Correctly declined to independently verify what the regulations
  implementing "thereafter return to work" require (same or comparable
  position) — disclosed as delegated to regulations outside
  leginfo.legislature.ca.gov's statutory text, consistent with the
  verification discipline's omit-rather-than-fabricate rule.

## Honest gap(s) disclosed

§ 12945(a)(3) (a separate reasonable-accommodation and temporary-
transfer right embedded in the same statute) is not covered. The
regulations implementing the "thereafter return to work" reinstatement
standard are not independently verified (not on leginfo.legislature.
ca.gov). The premium-recovery mechanics for an employee who fails to
return from leave, and the separate state-agency collective-bargaining
carve-out, are referenced but not restated. The federal FMLA's own
text on how it interacts with § 12945 is not independently verified —
only the California statutes' own description of the relationship is
stated.

## Method

Fetched Cal. Gov. Code §§ 12945, 12926, and 12945.2 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. All 14 citation quotes across the 5
authority clauses programmatically confirmed as exact contiguous
substrings (no ellipsis-joined quotes). Independently re-verified
during integration review via a nineteenth fetch (a distinct curl
User-Agent string, "Groundtruth-NineteenthVerify-PDLL/1.0") of all
three sections — all 14 quotes confirmed clean.

## Verification

- All three statutory sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a nineteenth
  independent fetch during integration review; all quotes confirmed
  clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — the § 12945 pair in
  `pdll_no_interference` correctly disclosed as subdivisions of the
  same section; § 12945 vs. § 12926 vs. § 12945.2 correctly treated as
  genuinely separate, independently-numbered sections; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none).
  Four drafting/authority-clause titles ("About This Information
  Sheet," "Leave Request," "Acknowledgment," "Covered Employers")
  match titles used elsewhere in the corpus — confirmed as the
  established boilerplate/topical-title reuse pattern across distinct,
  uniquely-id'd clauses (e.g., "Covered Employers" also appears in the
  existing CFRA document's own coverage-threshold clause), not a
  genuine collision.
- No new fields required — both fields (`companyName`, `employeeName`)
  reused from the existing corpus (186 and 127 prior documents
  respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: California Pregnancy Disability Leave Law (Gov. Code
  § 12945) — Information Sheet (`pregnancy_disability_leave_info_
  sheet`), 8 clauses (5 authority + 3 drafting), in the During
  employment category. No new fields.
- Corpus: 2,859 → 2,867 clauses; 376 → 377 documents. Fourth and final
  addition of wave 82.

**Wave 82 complete**: 2,846 → 2,867 clauses (21 new); 373 → 377
documents (4 new: Noncompete Void Notification, Motion Picture/
Broadcasting Final-Wage Timing, Restrictions on Employer Inquiry Into
Arrest/Sealed Record, and California Pregnancy Disability Leave Law).
Hiring + During Employment + Confidentiality & IP + Ending Employment,
per the established strict-alternation pattern (wave 81 was 2×2; wave
83 should return to 2×2 across Real Estate + Estate Planning or
Business Formation + Family Law, whichever keeps category counts
balanced).
