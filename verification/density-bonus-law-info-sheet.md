# Real Estate, new document: California Density Bonus Law — Information Sheet

## Why this document

Second and final processed item of wave 119 (Real Estate slot). This
topic was flagged as a strong candidate in an earlier wave but never
actually built. Document- and clause-level greps for "density,"
"affordable housing," "inclusionary," "65915," and "concession"/
"incentive" confirmed no dedicated coverage — the apparent
"concession"/"incentive" hits were all unrelated (CCPA financial
incentives, bonus overtime pay, ISO tax treatment). The agent also
confirmed the existing ADU/JADU document (Gov. Code §65852.2) covers
only ministerial size/parking/owner-occupancy standards, an entirely
different statutory scheme from §65915's density-bonus-in-exchange-for-
affordability incentive scheme. No pivot was needed. Personally
reconfirmed via corpus search: zero prior mentions of "density bonus"
or "65915" anywhere in the corpus, and confirmed the ADU/JADU document's
first four clauses address ministerial approval mechanics distinct from
this document's incentive-based scheme.

## What this document covers

11 clauses: 2 drafting (project identification, acknowledgment/
signature) and 9 authority clauses, citing Gov. Code § 65915(b)(1),
(b)(1)(A)-(B), (f), (d)(1)-(2), (d)(2)(A)-(B), (k)(1), (e)(1), (p)(1),
(g)(1), (c)(1)(A):

- **`denbonus_eligibility_thresholds`** — the entitlement-granting
  trigger and the seven-plus alternative qualifying thresholds.
- **`denbonus_lowincome_verylowincome_setaside`** — the two most
  commonly used thresholds (10% lower income / 5% very low income).
- **`denbonus_density_bonus_calculation`** — the density bonus
  definition and its variable, sliding-scale entitlement structure.
- **`denbonus_incentives_concessions_entitlement`** — the mandatory-
  grant standard for incentives/concessions and the tiered count
  schedule.
- **`denbonus_incentive_concession_definition`** — the statutory
  definition of "concession or incentive."
- **`denbonus_waiver_development_standards`** — the no-preclusion rule
  for development standards and the attorney's-fees remedy.
- **`denbonus_parking_ratio_caps`** — the default statutory parking
  ratio caps by bedroom count.
- **`denbonus_land_donation_bonus`** — the additional 15%-baseline
  density bonus for a qualifying land donation.
- **`denbonus_affordability_covenant_duration`** — the 55-year
  continued-affordability requirement for rental units.

## Genuine findings

- **A significant correction to the agent's own initial assumption**:
  the agent initially expected §§65915-65918 to be several separate,
  shorter sections. The full text showed §65915 alone is a single
  ~61KB statute (subdivisions (a) through (u)) that absorbs nearly the
  entire chapter, last amended by Stats. 2025, Ch. 486 (AB 87),
  effective January 1, 2026 — currently operative as of the checked
  date.
- **A disclosed structural limitation honestly acknowledged**: rather
  than attempt to reproduce the statute's numeric sliding-scale tables
  (affordable-unit percentages mapped to specific density bonus
  percentages, up to 50% standard/80% for certain 100%-affordable
  projects) or every eligibility sub-tier, the agent quoted only the
  general definitional and entitlement language and explicitly
  disclosed the unquoted numeric tables as a gap in each relevant
  clause.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not reproduce the numeric sliding-scale tables
mapping affordable-unit percentages to density bonus percentages, the
detailed eligibility conditions for the senior/moderate-income/
transitional-foster-youth/homeless/100%-affordable thresholds, the
third and later tiers of the incentive/concession count schedule, the
mixed-use and catch-all incentive/concession categories, the carve-outs
limiting the development-standard waiver obligation, the transit-
proximity parking-ratio reductions or student-housing zero-parking
rule, the detailed land-donation eligibility conditions, or the
rent-setting formula and for-sale-unit resale conditions.

## Method

Fetched Gov. Code § 65915 from leginfo.legislature.ca.gov, fetched twice
by the research agent with two distinct User-Agent strings, confirmed
byte-identical (18 differing lines traced to JSF ViewState session
tokens and a DebugOutput timestamp, both disclosed non-substantive
artifacts). CourtListener's daily rate limit was already exhausted on
the agent's test call; no case law was used, a disclosed and legitimate
choice. All 10 citation instances programmatically confirmed by the
research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-fifty-third fetch (a new distinct curl User-Agent
string, "Groundtruth-153rdVerify-DensityBonus/1.0") — the fetched
statute length (61,033 characters) matched the agent's reported ~61KB
size, and all 10 citation instances confirmed clean on direct
normalized-whitespace substring match, no extraction artifacts
encountered. The eligibility thresholds, the incentive/concession
denial standard, the parking ratio caps, and the 55-year affordability
covenant were all independently reconfirmed present in the freshly
fetched text.

## Verification

- The primary source fetched twice independently by the research agent
  with distinct User-Agent strings, plus a one-hundred-and-fifty-third
  independent fetch during integration review; all 10 citation
  instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — every clause
  correctly discloses that all citations in this document derive from
  subdivisions of the single statute §65915 and are not independent
  sources of one another; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `denbonus_` prefix has zero collisions. Independently
  reconfirmed the existing ADU/JADU document addresses a distinct
  ministerial-approval statute (§65852.2), not the density bonus
  incentive scheme.
- Checked every citation's `case` field for emptiness — all 10
  populated with proper citation identifier strings.
- No new fields required — all six fields (`applicantName`,
  `propertyAddress`, `localAgencyName`, `projectDescription`,
  `dateSigned`, `cityState`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: California Density Bonus Law — Information Sheet
  (`density_bonus_law_info_sheet`), 11 clauses (9 authority + 2
  drafting), in the Real Estate category. No new fields.
- Corpus: 3,917 → 3,928 clauses; 507 → 508 documents. Second and final
  processed item of wave 119.

## Wave 119 summary

Wave 119 followed the established 2×2 pattern, targeting Real Estate
and Family Law — the two categories left tied lowest after wave 118's
rotation and not touched in the two immediately preceding waves. Both
agents ran careful duplication-check passes before landing on genuinely
open topics: Vexatious Litigant Designation in Family Court (after
pivoting away from an already-covered §4320 spousal-support-factors
candidate) and California Density Bonus Law (a long-flagged-but-never-
built candidate from an earlier wave, confirmed clean on the first
check). Both documents were built with CourtListener's daily quota
exhausted throughout. Each surfaced a genuine correction through close
primary-source reading: a corrected assumption that the vexatious-
litigant statute was purely general-civil with no family-law content,
overturned by discovering a 2023 DVPA-restraining-order-based category
and an express extension into Family Code/Probate Code filings
(Vexatious Litigant); and a corrected assumption about the statute's
structure, overturned by finding a single ~61KB section recently
amended with a January 1, 2026 effective date rather than several
shorter sections (Density Bonus Law). Per the established alternation,
wave 120 should return to a 1×4 pattern.
