# Estate Planning, new document: California Uniform Simultaneous Death Act — General Information Sheet

## Why this document

Fourth and final document of wave 79. This corpus already had two
narrow, document-specific applications of California's simultaneous-
death rules: `will_simultaneous_death` (the 120-hour rule for a will
beneficiary, in the Last Will and Testament document, citing Fam.
Code § 6403) and `lifeinsbene_simultaneous_death` (the rule for a
named life insurance beneficiary, in the Life Insurance Beneficiary
Designation document, citing § 224 and § 221(b)). Neither addresses
the general statute itself or its application to intestate succession
broadly, conditional-survivorship gifts generally, joint tenancy, or
community property. This document is deliberately scoped to those
genuinely uncovered sub-topics and cross-references, rather than
restates, the two existing narrower clauses.

## What this document covers

6 clauses: 1 drafting (scope/cross-reference declaration) and 5
authority clauses, citing Cal. Prob. Code §§ 220, 221(a), 222(a)-(b),
223(a)-(c), and 103(a)-(b):

- **`simuldeath_general_rule`** (§ 220) — the general default rule:
  when priority of death can't be established by clear and convincing
  evidence, each person's property is administered as if that person
  survived — a residual baseline, not a fixed numeric survival period.
- **`simuldeath_specific_rules_control`** (§ 221(a)) — **a key
  finding**: the general chapter does not apply at all where § 103
  (community property), § 6211 (statutory will), or § 6403 (intestate
  succession) applies — these are separate, distinctly-triggered
  statutes, not restatements of § 220. Correctly declines to re-quote
  § 221(b) or § 6403's text, cross-referencing the two existing
  document-specific clauses that already cover them.
- **`simuldeath_general_conditional_gifts`** (§ 222(a)-(b)) — the
  general rule for property conditioned on surviving another person,
  including the equal-portion division among mutually-conditioned
  beneficiaries.
- **`simuldeath_joint_tenancy`** (§ 223(a)-(c)) — **the central
  finding**: a broader, functional definition of "joint tenants" for
  this purpose (anyone entitled to the whole on the others' death, not
  just formal title-holders), and the equal-share division rule for
  two or more simultaneously-deceased joint tenants.
- **`simuldeath_community_property`** (§ 103(a)-(b)) — the parallel
  one-half/one-half division rule for community and quasi-community
  property between simultaneously-deceased spouses, noting it is
  codified in a separate Probate Code part from §§ 220-223.

## Genuine corrections and findings

- **The central finding**: confirmed § 223's functional "joint
  tenants" definition precisely — it reaches anyone entitled to the
  whole of the property on the others' death, not only those holding
  formal joint-tenancy title.
- Confirmed § 221(a)'s express carve-out precisely: the general
  chapter (§§ 220-226) does not apply at all where § 103, § 6211, or
  § 6403 governs — correcting an assumption that the general rule
  applies as a fallback even where a more specific rule exists (it
  does not apply at all in that scenario, not merely as a subordinate
  rule).
- Correctly declined to independently verify or restate § 6211 (the
  California statutory will's own 120-hour provision) — disclosed
  candidly as named by § 221(a) but not independently fetched, and
  explicitly not assumed identical in scope to § 6403.
- Confirmed § 103's placement in a different Probate Code part (Part
  1, §§ 100-105) from the simultaneous-death chapter itself (Part 5,
  §§ 220-234) — a structural fact that clarifies why § 221(a) treats it
  as a separate cross-referenced statute rather than a subsection of
  the same chapter.

## Honest gap(s) disclosed

§ 221(b) (governing-document override for trusts, deeds, insurance
contracts) is not restated — already covered by the existing Life
Insurance Beneficiary Designation document. § 6403's 120-hour text is
not restated — already covered by the existing Last Will and Testament
document. § 6211 (California statutory will's own provision) is named
but not independently verified. § 224 (life insurance) is not
restated — already covered elsewhere. § 225 (a specific subsection)
returned empty content on all four fetch attempts during research and
was not guessed at or included.

## Method

Fetched Cal. Prob. Code §§ 220, 221, 222, 223, and 103 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. All 9 citation quotes across the 5 authority
clauses programmatically confirmed as exact contiguous substrings (no
ellipsis-joined quotes). Independently re-verified during integration
review via a seventh fetch (a distinct curl User-Agent string,
"Groundtruth-SeventhVerify-SimulDeath/1.0") of all five sections — all
9 quotes confirmed clean.

## Verification

- Statutory sections fetched twice independently by the research agent
  with distinct User-Agent strings, plus a seventh independent fetch
  during integration review; all quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — the § 222(a)/(b) pair,
  the § 223(a)/(b)/(c) triple, and the § 103(a)/(b) pair each correctly
  disclosed as not independent of one another (same statutory
  section); § 220 vs. § 221(a) vs. § 222 vs. § 223 vs. § 103 correctly
  treated as genuinely separate, independently-numbered provisions
  where the clause text draws on more than one; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  drafting-clause title ("About This Information Sheet") matches a
  title used elsewhere in the corpus — confirmed as the established
  boilerplate-title reuse pattern (unique clause ids), not a genuine
  collision.
- No fields required — this document's clauses use zero `{{}}`
  placeholders, since the content is general statutory background
  rather than a fillable form; this is the corpus's first document
  with an empty `fields` array, confirmed safe by inspecting `app.js`
  (`.forEach` over an empty array is a no-op — the picker and wizard
  render correctly with no fields to collect).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: California Uniform Simultaneous Death Act — General
  Information Sheet (`california_uniform_simultaneous_death_act_info_sheet`),
  6 clauses (5 authority + 1 drafting), in the Estate Planning
  category. No new fields.
- Corpus: 2,781 → 2,787 clauses; 365 → 366 documents. Fourth and final
  addition of wave 79.

**Wave 79 complete**: 2,761 → 2,787 clauses (26 new); 363 → 366
documents (3 new: Structural Pest Control Inspection Report, California
Uniform Directed Trust Act, and California Uniform Simultaneous Death
Act — plus one gap-fix, Mello-Roos special tax disclosure, added to the
existing Residential Purchase Agreement document rather than shipping
as a fourth document). Real Estate + Estate Planning, per the
established strict-alternation pattern (wave 78 was 1×4; wave 80
should return to 1×4 across Hiring, During Employment, Confidentiality
& IP, and Ending Employment).
