# Business Formation, new document: Qualified Small Business Stock (QSBS) Gain Exclusion — Information Sheet

## Why this document

Second processed item of wave 144 (Business Formation slot, 1×4
pattern). The agent's novelty check confirmed zero prior corpus hits
on IRC § 1202, former Rev. & Tax. Code § 18152.5, former § 18038.5, or
*Cutler v. Franchise Tax Board*, and confirmed no false-positive
collision with the corpus's existing, unrelated uses of the bare
number "1202." A personal duplication spot-check independently
confirmed all findings.

## What this document covers

9 clauses: 2 drafting (overview, closing acknowledgment) and 7
authority clauses, citing 26 U.S.C. § 1202(c)(1), (d)(1)(A), (c)(2)(A),
(a)(1)(A), (a)(1)(B), (a)(6)(A) and its editorial note, (b)(4)(A),
(b)(4)(B), Cal. Rev. & Tax. Code § 18152.5(m), (n) as amended by SB
209, and *Cutler v. Franchise Tax Board*, 208 Cal.App.4th 1247 (2012)
(three citations):

- **`qsbs_federal_eligibility_requirements`** — the original-issue,
  C-corporation, and $75,000,000 gross-assets threshold conditions
  (two citations).
- **`qsbs_federal_active_business_requirement`** — the ongoing
  active-business and C-corporation-status requirement.
- **`qsbs_federal_exclusion_percentage`** — the exclusion percentage
  and holding-period rules split by the statutory "applicable date"
  (two citations).
- **`qsbs_federal_2025_applicable_date`** — the July 4, 2025 (Pub. L.
  119-21) dividing line, sourced partly from an editorial note rather
  than codified text (two citations).
- **`qsbs_federal_per_issuer_cap`** — the $10,000,000/$15,000,000
  per-issuer dollar caps (two citations).
- **`qsbs_california_nonconformity`** — the 2013 narrowing and 2016
  sunset/repeal of California's former state-level exclusion (two
  citations).
- **`qsbs_cutler_commerce_clause_history`** — the Court of Appeal
  decision holding California's asset-and-payroll-based "qualified
  small business" definition unconstitutional as applied to a related
  deferral provision.

## Genuine findings

- **A disclosed source-type distinction for a statutory dividing
  line**: the 2025-applicable-date clause's gap states plainly that
  the actual calendar date (July 4, 2025) comes from an editorial
  note prepared by the Office of the Law Revision Counsel, not from
  codified, enacted statutory text itself — the codified text is
  circular on its own.
- **A disclosed inferential step, not attributed to the court**: the
  Cutler clause's gap states that the opinion's holding is stated in
  terms of a deferral provision, not the exclusion provision by name,
  and that this document infers the two provisions shared the same
  constitutionally infirm definitional mechanism from the statutory
  text itself — not from an express statement in the opinion.
- **A disclosed non-authoritative negative-lookup method**: the
  California-nonconformity clause's gap states that an empty
  leginfo.legislature.ca.gov lookup for former § 18152.5 (performed
  twice with distinct User-Agents) is consistent with, but not itself
  authoritative confirmation of, the 2013 sunset — the clause's actual
  quoted authority is the 2013 repealing legislation itself.
- **A disclosed table-rendering limitation**: the exclusion-percentage
  clause's gap explains that the statute's tiered post-applicable-date
  percentages appear in table format in the source and are not quoted
  verbatim because of how HTML tables render as plain text once
  stripped, rather than risk an inexact quotation.

## Honest gap(s) disclosed

This document does not restate subsection (e)'s itemized list of
disqualifying business types for the active-business requirement,
the 75%/100% exclusion-rate provisions for 2009-2010-era stock, the
alternative "10 times adjusted basis" cap measure, the married-
filing-separately allocation rules, the $15,000,000 cap's post-2026
inflation adjustment, or California corporate-level tax treatment. It
does not independently verify that no California legislation enacted
after 2013 has reinstated a state-level exclusion, and does not cite
any case law interpreting the 2025 federal amendment (confirmed
genuine absence — too new for reported decisions).

## Method

Fetched 26 U.S.C. § 1202 from Cornell LII and the SB 209 (2013)
chaptered bill text from leginfo.ca.gov, each fetched twice by the
research agent with two distinct User-Agent strings via curl,
confirmed byte-identical, including a disclosed double-space artifact
in the SB 209 text. *Cutler v. Franchise Tax Board* was located via
CourtListener `search` and verified via `get_endpoint_item`. All 14
citation instances were programmatically confirmed by the research
agent as exact substrings sliced directly from the saved source
files.

Independently re-verified during integration review via a two-
hundred-and-fortieth fetch (a new distinct curl User-Agent string,
"Groundtruth-240thVerify-QSBSGainExclusion/1.0") of both the IRC text
and the SB 209 text — both fetched cleanly on the first attempt. All
9 IRC citation instances confirmed clean on direct substring match;
1 of 2 SB 209 citation instances confirmed clean only after
normalizing the already-disclosed double-space artifact. The
*Cutler* citation was independently re-verified via
`mcp__CourtListener__search` (confirming opinion_id 5666764 for
cluster_id 5811291 — distinct ids) and `get_endpoint_item` — all 3
citation instances confirmed exact, direct matches against the
freshly fetched opinion text. The original-issue and gross-assets
conditions, the active-business requirement, the exclusion-percentage
and holding-period rules, the 2025 applicable-date provisions, the
per-issuer caps, the California sunset/repeal provisions, and the
Cutler holding were all independently reconfirmed present in the
freshly fetched text.

## Verification

- The IRC and SB 209 sources fetched twice independently by the
  research agent with distinct User-Agent strings, plus a two-
  hundred-and-fortieth independent fetch during integration review;
  all 11 statutory/legislative citation instances confirmed clean.
  The case-law citation independently re-verified via the
  CourtListener API against the correct internal opinion id, with all
  3 instances confirmed clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section, or the same single
  opinion, correctly disclose they are not independent sources of
  each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `qsbs_` prefix has zero collisions. Ran term-specific
  greps for "1202," "18152.5," "18038.5," and "Cutler v. Franchise" —
  the "1202" hits confirmed incidental, unrelated bare-number
  occurrences by inspecting each hit's context directly; zero hits on
  all others, confirming genuine novelty.
- Checked every citation's `case` field for emptiness — all 14
  populated with proper citation identifier strings.
- No new field ids required — all five fields (`companyName`,
  `shareholderName`, `preparerName`, `dateSigned`, `cityState`) reused
  from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Qualified Small Business Stock (QSBS) Gain Exclusion
  — Information Sheet (`qsbs_gain_exclusion_info_sheet`), 9 clauses (7
  authority + 2 drafting), in the Business Formation category. No new
  fields.
- Corpus: 4,791 → 4,800 clauses; 594 → 595 documents. Second
  processed item of wave 144.
