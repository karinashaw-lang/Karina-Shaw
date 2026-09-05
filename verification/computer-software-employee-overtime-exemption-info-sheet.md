# During employment, new document: Computer Software Employee Overtime Exemption — Information Sheet

## Why this document

Fourth and final document of wave 93 (During employment slot). Read the
existing "Exempt / Non-Exempt Classification Notice" document's clauses in
full — confirmed it covers only the generic executive/administrative/
professional duties test under § 515(a), not this distinct, rate-based
computer-professional exemption. Grepped the corpus for "515.5," "computer
software employee," and "computer professional exemption" — zero hits.
Confirmed a real, non-duplicative gap.

## What this document covers

7 clauses: 2 drafting (purpose/scope, closing/signature) and 5 authority
clauses, citing Lab. Code § 510(a), § 515(a), § 515.5(a), (a)(1)-(3),
(a)(4), (b), and a DIR-published rate notice:

- **`compsoftexempt_default_and_distinction`** (§ 510(a), § 515(a),
  § 515.5(a)) — California's overtime default, and the structural
  difference between § 515(a)'s IWC-administered duties/minimum-wage-
  multiple test and § 515.5's self-contained, CPI-adjusted statutory
  exemption.
- **`compsoftexempt_duties_test`** (§ 515.5(a)(1)-(3)) — the three
  duties/skill conditions.
- **`compsoftexempt_rate_requirement`** (§ 515.5(a)(4)) — the fourth
  condition's statutory baseline dollar figures (2012) and the DIR's
  annual CPI-based adjustment mechanism.
- **`compsoftexempt_current_rate`** (DIR published notice) — the actual
  current DIR-published figures effective January 1, 2026 ($58.85/hour,
  $10,214.44/month, $122,573.13/year).
- **`compsoftexempt_exclusions`** (§ 515.5(b)) — the six statutory
  exclusions (trainees, close-supervision workers, hardware operators/
  technicians, CAD-dependent professionals, writers, motion-picture/
  television/theatrical effects imagery workers).

## Genuine corrections and findings

- **A genuine finding directly matching the task brief's own caution**:
  the codified statutory text (last amended 2012) prints only baseline
  figures — $36.00/hour, $75,000/year, $6,250/month — which are NOT
  current. The agent independently fetched the DIR's own publication and
  confirmed the actual figures effective January 1, 2026: $58.85/hour,
  $10,214.44/month, $122,573.13/year (a 3.3% CPI-based increase from the
  prior year's $56.97/$9,888.13/$118,657.43). Disclosed as DIR-sourced and
  dated, in a separate clause from the statutory baseline, with an
  explicit gap note that it will be superseded by the DIR's next October
  adjustment. Independently re-verified during integration review.
- Confirmed, by independently fetching §§ 515 and 510, that the
  structural distinction between the general exemptions (IWC-administered,
  minimum-wage-multiple test) and § 515.5 (self-executing, CPI-adjusted
  dollar floor) is real and citable, not assumed.
- Correctly disclosed a source-extraction technique note: the agent used
  a space-preserving tag-strip (rather than a naive one) specifically to
  avoid producing "apply:(1)"-style missing-space artifacts when
  de-rendering leginfo's `<p>`-per-subsection markup — the same recurring
  defect pattern documented repeatedly this window, handled proactively
  during extraction rather than needing a post-hoc fix.

## Honest gap(s) disclosed

Labor Code § 511 (alternative workweek schedules), § 514 (CBA-based
exemptions), the outside salesperson exemption, the federal FLSA computer
employee exemption (29 U.S.C. § 213(a)(17)), § 515's remaining
subdivisions (nonexempt salaried regular-rate computation, RN-specific
rules), the parallel IWC wage order restatement of this exemption, and
definitions of undefined statutory terms like "trainee" or "close
supervision" are named but not covered. This document does not determine
whether any specific employee's actual duties meet the test, or whether
any specific position qualifies for the exemption.

## Method

Fetched Labor Code §§ 510, 515, and 515.5 from `leginfo.legislature.ca.gov`,
and the DIR's Computer Software Employees rate-adjustment page from
`dir.ca.gov`, each fetched twice by the research agent with two distinct
User-Agent strings, confirmed byte-identical. All 7 citation quotes across
the 5 authority clauses programmatically confirmed as exact contiguous
substrings ending at sentence/clause boundaries (no ellipsis-joined or
mid-word-truncated quotes). Independently re-verified during integration
review via a sixty-third fetch (a distinct curl User-Agent string,
"Groundtruth-63rdVerify-CompSoftExempt/1.0") of all four sources — all 7
quotes confirmed clean on direct substring match, no extraction artifacts
encountered.

## Verification

- All three statutory sections and the DIR page fetched twice
  independently by the research agent with distinct User-Agent strings,
  plus a sixty-third independent fetch during integration review; all 7
  quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same statutory
  section (§ 515.5's own subdivisions) versus genuinely independent
  sections (§ 510 vs. § 515 vs. § 515.5) versus non-statutory agency
  guidance (the DIR page, explicitly distinguished from the codified
  text); correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  drafting-clause title duplicates existing corpus titles — consistent
  with this project's established pattern of generic, reused boilerplate
  drafting-clause titles; clause IDs remain unique.
- Checked every citation's `case` field for emptiness — all 7 populated
  with proper citation identifier strings.
- No new fields required — all five fields (`companyName`,
  `employeeName`, `jobTitle`, `dateSigned`, `cityState`) reused from the
  existing corpus.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Computer Software Employee Overtime Exemption —
  Information Sheet
  (`computer_software_employee_overtime_exemption_info_sheet`), 7 clauses
  (5 authority + 2 drafting), in the During employment category. No new
  fields.
- Corpus: 3,157 → 3,164 clauses; 417 → 418 documents. Fourth and final
  document of wave 93.

## Wave 93 summary

Wave 93 closes at 3,164 clauses / 418 documents (from 3,143/415 at this
wave's first addition, and 3,136/414 at the wave's true start): Mandatory
Sexual Harassment Prevention Training and Computer Software Employee
Overtime Exemption (During employment), Federal Estate and Gift Tax Basics
and Elder Abuse Inheritance Disqualification (Estate Planning) — two
documents each in two target categories, following the established 2×2
pattern. This wave produced no delivered-quote defects requiring
correction at the integration-review stage — the third consecutive
clean-quote wave — while surfacing several significant genuine findings:
the current $15,000,000 federal estate tax exclusion and the repealed TCJA
sunset (a major update to what the task brief itself assumed), the
principled refusal to state a stale or unverified current gift-exclusion
dollar figure, the two-independent-paths structure of Probate Code § 259,
and the DIR's actual current computer-software-exemption pay rate
(independently verified against the 2012 statutory baseline). Wave 94
should return to a 1×4 pattern across four categories.
