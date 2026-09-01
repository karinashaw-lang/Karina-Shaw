# Ending employment, seventh document: COBRA Election Notice

## Why this document

The existing Termination/Separation Letter's `term_cobra` clause is a
passing reference to the general COBRA obligation, without the actual
election-notice content, election-period mechanics, or premium
calculation. This document is the real, distinct notice and election
form an employer/plan administrator must actually give a departing
employee, confirmed non-duplicative against the existing clause before
drafting.

## What this document covers

8 clauses: 2 drafting (the election notice letter, the election form)
and 6 authority clauses:

- **`cobra_qualifying_events`** (29 U.S.C. § 1163) — the six statutory
  qualifying-event categories.
- **`cobra_notice_timing`** (§ 1166(a)(2), (c)) — the two-step
  statutory notice chain: 30 days employer-to-administrator, then 14
  days administrator-to-beneficiary.
- **`cobra_election_period`** (§§ 1165(a)(1), 1162(3)(A)) — the 60-day
  minimum election window and the 45-day initial-payment grace period.
- **`cobra_coverage_scope_duration`** (§ 1162(1), (2)(A)) — the
  coverage-parity requirement and the 18-month/36-month maximum
  coverage periods.
- **`cobra_premium`** (§§ 1162(3)(A), 1164(1)) — the 102%-of-
  applicable-premium cap, correcting an assumed citation.
- **`cobra_small_employer_scope`** (29 U.S.C. § 1161(b); Cal. Health &
  Safety Code § 1366.20) — the federal under-20-employee exception and
  California's distinct Cal-COBRA scheme for smaller employers.

## Genuine corrections caught during research

- The task brief described a combined "44-day" notice figure as if it
  were § 1166's own text. Direct review shows § 1166 states two
  separate sequential periods (30 days, then 14 days) with no combined
  figure in the statutory text itself; the ~44-day outer bound comes
  from DOL regulatory guidance (29 C.F.R. § 2590.606-4), which could
  not be fetched and verified in this research — disclosed honestly
  rather than asserted as statutory text.
- The task brief attributed the 102% premium cap to § 1164. Direct
  review shows § 1164 only defines "applicable premium" (the base cost
  figure); the actual 102% cap is in § 1162(3)(A) — corrected in
  `cobra_premium`'s gap field.

## Defects caught and fixed during integration

`cobra_qualifying_events` (single citation) and `cobra_notice_timing`
(two subsections of the same section) both initially lacked the
standard explicit single-source disclosure sentence — added during
integration.

## Method

Fetched 29 U.S.C. §§ 1161, 1162, 1163, 1164, 1165, 1166 from
`law.cornell.edu` and Cal. Health & Safety Code § 1366.20 from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed
byte-identical.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — the agent caught and
  fixed six real leaks during its own drafting process, then
  re-confirmed clean on the final file (also independently
  re-confirmed clean during this integration).
- Checked source-independence disclosure logic across all 6 authority
  clauses — corrected on two, confirmed correct on the rest.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `employeeName`, `noticeDate`,
  `dateSigned`) independently confirmed against existing corpus
  conventions before use.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: COBRA Election Notice (`cobra_election_notice`), 8
  clauses (6 authority + 2 drafting), in the "Ending employment"
  category. New fields: `planName`, `qualifyingEventDate`,
  `qualifyingEventType`, `monthlyPremiumAmount`, `maxCoverageMonths`,
  `planAdministratorName`, `planAdministratorAddress`,
  `electionDeadline`, `additionalBeneficiaryName` (`companyName`,
  `employeeName`, `noticeDate`, `dateSigned` reused from existing
  conventions).
- Corpus: 587 → 595 clauses; 78 → 79 documents.
