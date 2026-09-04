# Business Formation, gap-fix: Minimum Franchise Tax — Additional Rev. & Tax. Code § 23153 Subdivisions

## Why this is a gap-fix, not a new document

First assigned document of wave 91 (Business Formation slot). The research
brief proposed a full "Minimum Franchise Tax" document, but the agent found
the flat $800 minimum franchise tax is already substantively covered
across three existing documents: `articlesinc_annual_franchise_tax`
(Articles of Incorporation — § 23153(a), (d)(1), (f)(1)-(2)),
`llc_articles_annual_tax` (LLC Articles of Organization — § 17941 plus a
§ 23153(d)(1) cross-reference), and `corpdiss_tax_clearance` (Corporation
Dissolution — § 23332(c)). Per the established gap-fix pattern, rather than
ship a mostly-duplicative new document, the agent extracted only the
genuinely new subdivisions of § 23153 (the entity-scope subdivisions (b)-(c)
and the legislative-increase cap (h), never quoted anywhere in the corpus)
and proposed inserting them into the existing Articles of Incorporation
document's `clauseOrder`, immediately after its existing franchise-tax
clause.

## What this gap-fix adds

2 authority clauses, citing Rev. & Tax. Code § 23153(b), (c), (h):

- **`minfranchisetax_covered_entities`** (§ 23153(b), (c)) — which
  corporations the minimum tax reaches (California-incorporated, qualified
  foreign, or doing-business-in-California corporations), the express
  exemptions for credit unions and a narrow category of agricultural
  cooperatives, and the statement that LLCs are reached by a separate
  statute (§ 17941, already covered elsewhere) rather than § 23153
  directly.
- **`minfranchisetax_legislative_increase_cap`** (§ 23153(h)) — the
  statutory 10%-per-calendar-year cap on how much the Legislature may raise
  the $800 figure, disclosing that the amount is not permanently fixed by
  the statute's own text.

## Genuine corrections and findings

- **A genuine correction to the task's own research premise**: the brief
  guessed the first-year exemption's citation was "§ 17935/AB 85." The
  agent found this is wrong — § 17935 is merely the LP-definition
  cross-reference inside § 23153(f)(2)'s exclusion list. The corpus already
  correctly identifies the real citations (§ 23153(f)(1)-(2) for
  corporations; a separate, now-closed § 17941(g) window for LLCs) in the
  existing documents, confirmed rather than re-derived incorrectly.
- **A genuine finding on entity scope**: § 23153 does not reach LLCs
  directly — a separate statute, § 17941, imposes the LLC's own annual tax
  and merely cross-references § 23153(d)(1) for the dollar figure.
  Disclosed explicitly, including an open question the statutory text does
  not resolve: whether an LLC that elects corporate tax treatment is
  reached directly by § 23153(b) — flagged rather than guessed.
- Correctly declined to include five further, more niche subdivisions
  identified during research (a reduced $25 rate for legacy mining
  corporations, an expired 1999-2000 provision, an anti-abuse
  reorganization rule, a superseded dissolution-linked exemption distinct
  from the currently operative § 23332(c) mechanism already covered
  elsewhere, and a sunsetting deployed-military-owner exemption) — named
  and disclosed in the gap field as historical or niche, rather than
  padding the gap-fix.

## Honest gap(s) disclosed

Rev. & Tax. Code § 23153(d)(2)-(3), (e), (f)(3), (g), and (i) are named but
not covered. Whether an LLC electing corporate tax treatment is reached
directly by § 23153(b) is an open question the statutory text does not
resolve, and this document does not resolve it either. This document does
not determine whether any specific entity is or is not subject to the
minimum franchise tax, or exempt from it.

## Method

Fetched Rev. & Tax. Code § 23153 from `leginfo.legislature.ca.gov`, fetched
twice by the research agent with two distinct User-Agent strings, confirmed
byte-identical after whitespace normalization. All 3 citation quotes
programmatically confirmed as exact contiguous substrings ending at
sentence boundaries (no ellipsis-joined or mid-word-truncated quotes).
Independently re-verified during integration review via a fifty-second
fetch (a distinct curl User-Agent string,
"Groundtruth-52ndVerify-MinFranchiseTax/1.0") of the same section — all 3
quotes confirmed clean on direct substring match.

## Verification

- The statutory section fetched twice independently by the research agent
  with distinct User-Agent strings, plus a fifty-second independent fetch
  during integration review; all 3 quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — both clauses correctly
  disclose that all citations (here and across the corpus's other
  § 23153-citing clauses) are subdivisions of the same statutory section,
  not independent sources; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 3 populated
  with proper citation identifier strings.
- No fields used — both clauses are pure authority clauses with no
  `{{placeholder}}` bodies.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- Gap-fix: 2 new clauses (`minfranchisetax_covered_entities`,
  `minfranchisetax_legislative_increase_cap`) inserted into the existing
  Articles of Incorporation document's (`articles_of_incorporation`)
  `clauseOrder`, immediately after `articlesinc_annual_franchise_tax`. No
  new document.
- Corpus: 3,086 → 3,088 clauses; 407 documents (unchanged). First
  processed item of wave 91.
