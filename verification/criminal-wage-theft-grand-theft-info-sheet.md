# Ending employment, new document: Criminal Wage Theft as Grand Theft — Information Sheet

## Why this document

Second processed item of wave 92 (Ending employment slot). Read the
existing "Waiting-Time Penalty Demand" and "DLSE Wage Claim" documents'
clauses in full — confirmed both describe only civil remedies (§ 203
waiting-time penalty, the DLSE/Berman-hearing administrative process).
Grepped the corpus for "1197.1," "487m," and "grand theft" — found only
incidental cross-references, none substantively covering this criminal
grand-theft classification. Confirmed a real, non-duplicative gap. Note:
the initially chosen `wagetheft_` prefix collided with the existing Wage
Theft Prevention Act Notice document — corrected to `wtgrandtheft_`.

## What this document covers

7 clauses: 2 drafting (declaration, signature/closing) and 5 authority
clauses, citing Penal Code § 487m(a)-(e), Lab. Code § 200(a), § 350(e),
and § 1197.1(a):

- **`wtgrandtheft_dollar_thresholds`** (§ 487m(a)) — the $950
  single-employee / $2,350 aggregate-over-12-months thresholds, and the
  permissive "may be punished" (not automatic) phrasing.
- **`wtgrandtheft_theft_of_wages_defined`** (§ 487m(b); Lab. Code § 200(a),
  § 350(e)) — the intentional-deprivation-by-unlawful-means definition,
  with "wages" and "gratuities" borrowed from the Labor Code.
- **`wtgrandtheft_employee_employer_scope`** (§ 487m(c)) — the expanded
  definitions reaching independent contractors and their hiring entities.
- **`wtgrandtheft_restitution_and_savings_clauses`** (§ 487m(d)-(e)) —
  restitution mechanics, the preserved civil action, and the no-change
  effect on the general grand theft statute.
- **`wtgrandtheft_relationship_to_civil_1197_1`** (Lab. Code § 1197.1(a))
  — the separate, pre-existing civil minimum-wage penalty track.

## Genuine corrections and findings

- **A genuine correction to the task's own framing**: the brief implied
  both statutes originated together from 2021's AB 1003. Independently
  fetching both showed this is inaccurate — AB 1003 added Penal Code
  § 487m (effective Jan. 1, 2022) only; Labor Code § 1197.1's current text
  was last amended by a separate 2020 bill (SB 1371, effective Jan. 1,
  2021), a year earlier, and contains no reference to § 487m, grand theft,
  or either dollar threshold. Disclosed explicitly as two separate,
  differently sourced statutes addressing overlapping subject matter
  through different tracks, rather than treated as a single unified scheme.
- Confirmed the $950/$2,350 dollar thresholds exactly as the brief
  assumed — no correction needed there, verified from fetched text rather
  than taken on faith.
- Correctly disclosed a CourtListener rate-limit block on researching any
  case law interpreting § 487m (a 2022-effective statute), rather than
  fabricating or omitting the gap silently.
- Correctly built as a neutral, third-party-preparable information sheet
  (declaration + closing/signature drafting clauses bookending the
  authority clauses) rather than a demand-letter format, consistent with
  this project's established practice for criminal statutes (the PC § 499c
  document) — avoiding extortion-adjacent framing for what is a
  report-to-a-prosecutor-only crime.

## Honest gap(s) disclosed

Labor Code §§ 215, 216 (cross-referenced by § 487m(a)'s "notwithstanding"
clause), Penal Code § 487 (the general grand theft statute § 487m(e) says
it does not change), and Penal Code §§ 1202.4, 1203.1 (restitution
mechanics cross-referenced by § 487m(d)) are named as cross-references but
not independently fetched or verified. No case law interpreting § 487m
was researched (blocked by a rate limit, disclosed rather than fabricated).
Labor Code § 1197.1's subdivisions (b)-(l) (citation/hearing/appeal
procedure) are not restated, since the existing DLSE Wage Claim and
Waiting-Time Penalty documents already cover that administrative machinery.
This document does not determine that any specific conduct is or is not a
crime, and does not initiate, threaten, or request any criminal
investigation or prosecution.

## Method

Fetched Penal Code § 487m and Labor Code §§ 200, 350, and 1197.1 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical. All 8
citation quotes across the 5 authority clauses programmatically confirmed
as exact contiguous substrings ending at sentence/clause boundaries (no
ellipsis-joined or mid-word-truncated quotes) — the agent's self-report
disclosed a source-side non-breaking-space rendering artifact (leginfo
uses `\xa0` after a subdivision letter) normalized consistently with
existing corpus convention. Independently re-verified during integration
review via a fifty-seventh fetch (a distinct curl User-Agent string,
"Groundtruth-57thVerify-WageTheftGrandTheft/1.0") of all four sections —
all 8 quotes confirmed clean on direct substring match, no further defects
found.

## Verification

- All four statutory sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a fifty-seventh independent
  fetch during integration review; all 8 quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same statutory
  section versus genuinely independent sections/codes (§ 487m's own
  subdivisions vs. its Labor Code cross-references vs. the separate
  § 1197.1 civil track); correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles duplicate existing corpus titles — consistent
  with this project's established pattern of generic, reused boilerplate
  drafting-clause titles; clause IDs remain unique (confirmed the
  `wtgrandtheft_` prefix, chosen after the initial `wagetheft_` prefix
  collided with an existing document, is itself collision-free).
- Checked every citation's `case` field for emptiness — all 8 populated
  with proper citation identifier strings.
- No new fields required — all seven fields (`preparerName`,
  `companyName`, `employeeName`, `unpaidWagesAmount`, `wageClaimBasis`,
  `dateSigned`, `cityState`) reused from the existing corpus.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Criminal Wage Theft as Grand Theft — Information Sheet
  (`criminal_wage_theft_grand_theft_info_sheet`), 7 clauses (5 authority +
  2 drafting), in the Ending employment category. No new fields.
- Corpus: 3,115 → 3,122 clauses; 411 → 412 documents. Second processed
  item of wave 92.
