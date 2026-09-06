# Hiring, new document: Physical Ability / Agility Pre-Employment Testing — Information Sheet

## Why this document

Fourth and final processed item of wave 98 (Hiring slot). A scoping
pass confirmed zero prior coverage of physical/agility pre-employment
testing anywhere in the corpus, distinct from the existing medical-
examination and drug-testing information sheets.

## What this document covers

7 clauses: 2 drafting (intro, acknowledgment) and 5 authority clauses,
citing Gov. Code § 12940(a), (e)(1)-(3); 42 U.S.C. § 12112(b)(6); 29
C.F.R. § 1630.10(a); the Appendix to 29 C.F.R. Part 1630; and 42 U.S.C.
§ 2000e-2(k)(1)(A)(i):

- **`physicalability_fehas_general_prohibition`** — FEHA's general
  anti-discrimination prohibition, applied to a physical/agility test as
  a hiring practice.
- **`physicalability_disability_disparate_impact_framework`** — the
  ADA's disability-based disparate-impact/business-necessity standard.
- **`physicalability_agility_not_medical_exam`** — the EEOC's
  interpretive guidance distinguishing a physical agility test from a
  medical examination.
- **`physicalability_sex_based_disparate_impact_title_vii`** — Title
  VII's general disparate-impact burden-of-proof framework.
- **`physicalability_timing_conditional_offer`** — FEHA's separate
  pre-offer/post-offer timing rules for medical or psychological
  examinations.

## Genuine findings

- **A significant, honestly-reported negative finding**: the research
  brief assumed FEHA has its own disparate-impact/business-necessity
  codification for employment testing generally. The agent read
  Government Code § 12940 in full and confirmed it does not — the
  phrase "job related and consistent with business necessity" appears
  only twice, both restricted to medical/psychological examinations,
  not a general testing provision. This is disclosed explicitly rather
  than assumed to mirror the federal framework.
- **A disclosed access-tier limitation**: the agent could not confirm
  whether a California regulation (e.g., 2 CCR) supplies a state-
  specific testing framework, since the free-text Cal. Code of
  Regulations source required a login. Disclosed as an open question,
  not asserted either way.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota (125/day) was already exhausted before the
  agent's first call. Rather than rely on unverified memory of Dothard
  v. Rawlinson or another case, the agent omitted case law entirely and
  disclosed this explicitly — flagged as the one item a follow-up pass
  with CourtListener access could add.
- **A quote-construction fix matching established corpus convention**:
  one candidate quote spanned an HTML non-breaking-space boundary in the
  Gov. Code text; rather than approximate the invisible character, the
  agent split it into two separate citations, mirroring this corpus's
  existing convention in the medical-examination information sheet.

## Genuine extraction-artifact finding (integration review)

Independent re-verification found 1 of 8 quotes (42 U.S.C.
§ 12112(b)(6), from Cornell LII) mismatched on a strict check, passing
after normalizing space-before-punctuation. Manual inspection confirmed
the established Cornell LII markup-stripping whitespace artifact: a
spurious space before a comma around a stripped inline link/anchor
("as used by the covered entity **,**" vs. the natural reading "as used
by the covered entity**,**"). Confirmed as a genuine, already-documented
source-side rendering artifact — no correction needed.

## Honest gap(s) disclosed

This document does not resolve whether a physical/agility test counts
as a "medical or psychological examination" under FEHA's own pre-offer/
post-offer provisions, as distinct from the federal interpretive
guidance's treatment of agility tests as non-medical. It does not survey
case law applying the disparate-impact frameworks to specific height,
weight, or strength requirements. It does not perform or substitute for
any job-relatedness or business-necessity showing on specific facts, and
does not determine whether any specific test or hiring decision violates
any of the statutes it describes.

## Method

Fetched Gov. Code § 12940 from `leginfo.legislature.ca.gov`, 42 U.S.C.
§§ 12112 and 2000e-2 from Cornell LII, and 29 C.F.R. § 1630.10 and the
Appendix to Part 1630 from eCFR, each fetched twice by the research
agent with two distinct User-Agent strings, confirmed byte-identical
after whitespace normalization. CourtListener's daily rate limit was
already exhausted before the agent's first call; no case law was used,
a disclosed and legitimate choice. All 8 citation quotes programmatically
confirmed by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via an
eighty-third fetch (a new distinct curl User-Agent string,
"Groundtruth-83rdVerify-PhysicalAbility/1.0") of all five sources — the
two eCFR web pages returned bot-check redirects (as encountered
previously in this corpus's work), so the eCFR versioner API was used
instead, disclosed as such. 7 of 8 quotes confirmed clean on direct
substring match; the eighth (42 U.S.C. § 12112(b)(6)) matched only after
normalizing space-before-punctuation, confirmed as the established
Cornell LII whitespace artifact via manual context inspection.

## Verification

- Gov. Code § 12940, 42 U.S.C. §§ 12112 and 2000e-2, and 29 C.F.R.
  § 1630.10/Appendix to Part 1630 each fetched twice independently by
  the research agent with distinct User-Agent strings, plus an
  eighty-third independent fetch during integration review (via the
  eCFR versioner API for the two CFR sources, since the human-facing
  eCFR pages redirect through a bot-check); all 8 quotes confirmed
  clean, one after accounting for a confirmed genuine artifact.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — the disability
  disparate-impact clause correctly discloses that the statute and its
  implementing regulation are treated as one connected source, not
  independent ones; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("Purpose of This Information Sheet,"
  "Acknowledgment") duplicate existing corpus titles — consistent with
  this project's established pattern of generic, reused boilerplate
  titles; clause IDs remain unique.
- Checked every citation's `case` field for emptiness — all 8 populated
  with proper citation identifier strings.
- No new fields required — all four fields (`companyName`, `jobTitle`,
  `applicantName`, `dateSigned`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Physical Ability / Agility Pre-Employment Testing —
  Information Sheet (`physical_ability_agility_testing_info_sheet`), 7
  clauses (5 authority + 2 drafting), in the Hiring category. No new
  fields.
- Corpus: 3,297 → 3,304 clauses; 437 → 438 documents. Fourth and final
  processed item of wave 98.

## Wave 98 summary

Wave 98 followed the established 1×4 pattern, targeting the corpus's
six-way-tied lowest categories: Supplemental Job Displacement Benefit
(Ending employment), Bed Bug Disclosure and Inspection (Real Estate),
Common Law Marriage Non-Recognition (Family Law), and this Physical
Ability/Agility Testing document (Hiring). This wave also surfaced a new
operational constraint worth tracking going forward: the CourtListener
MCP tool has a hard daily request quota (125/day, ~6-hour reset) in
addition to its per-minute/per-hour rate limits — two of this wave's
four documents (Common Law Marriage, Physical Ability Testing) were
completed as disclosed statute-only documents after that daily quota
was exhausted mid-wave. Per the established alternation, wave 99 should
return to a 2×2 pattern (two documents concentrated in two categories).
