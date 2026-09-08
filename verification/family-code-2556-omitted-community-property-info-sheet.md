# Family Law, new document: Section 2556 Omitted or Unadjudicated Community Property — Information Sheet

## Why this document

Third processed item of wave 142 (Family Law slot, 1×4 pattern). The
corpus's 74 existing Family Law documents required systematic
elimination of adjacent topics: the agent ruled out §§ 2640/2641
reimbursement, Watts/Epstein credits, transmutation (§ 852), the
putative-spouse doctrine (§ 2251), and the Probate Code's unrelated
"omitted spouse/child" pretermitted-heir doctrine — all confirmed
already covered by different statutes. The chosen topic — Fam. Code
§ 2556's continuing jurisdiction over community estate items a
dissolution judgment never adjudicated — was confirmed genuinely
open: a personal duplication spot-check independently confirmed zero
prior corpus hits on "2556," "Henn v. Henn," or "Thorne v. Raccina."

## What this document covers

8 clauses: 2 drafting (declaration, signature block) and 6 authority
clauses, citing Fam. Code § 63, § 2556 (three sentences, three
citations), *Thorne v. Raccina*, 203 Cal.App.4th 492 (2012) (two
citations), and *Henn v. Henn*, 26 Cal.3d 323 (1980) (two citations):

- **`omittedasset2556_community_estate_definition`** — § 63's
  definition of "community estate" as including quasi-community
  property, which matters because § 2556 itself never uses that
  phrase.
- **`omittedasset2556_continuing_jurisdiction`** — the continuing-
  jurisdiction grant (§ 2556, first sentence).
- **`omittedasset2556_procedural_mechanism`** — the postjudgment
  motion/OSC mechanism (§ 2556, second sentence).
- **`omittedasset2556_equal_division_standard`** — the equal-division
  default and good-cause exception, distinguished from § 2550's
  separate agreement-based exception (§ 2556, third sentence).
- **`omittedasset2556_what_counts_as_omitted`** — *Thorne*'s "mere
  mention... not controlling" / "actually litigated and divided"
  standard.
- **`omittedasset2556_historical_background`** — *Henn*'s pre-statute
  tenancy-in-common principle, with explicit disclosure that Henn's
  procedural holding was legislatively superseded by § 2556.

## Genuine findings

- **A disclosed statutory-interaction distinction, not conflated with
  a neighboring provision**: the equal-division clause's gap
  distinguishes § 2556's good-cause-finding standard from § 2550's
  separate agreement-based exception for the community estate as a
  whole, and states plainly that the document does not analyze how
  the two provisions apply together.
- **A disclosed superseded-holding handling**: the historical-
  background clause's gap states that *Henn*'s procedural holding
  (that a separate civil action was required) predates and has been
  legislatively superseded by § 2556, and cites *Henn* only for its
  substantive tenancy-in-common principle, not its now-obsolete
  procedural rule — with *Thorne*'s own confirmation of this same
  point noted but not restated.
- **A disclosed nested-quotation handling**: both the *Thorne* "crucial
  question" quote (itself quoting *Miller v. Miller*) and the *Henn*
  tenancy-in-common quote (itself quoting *In re Marriage of Brown*,
  quoting *In re Marriage of Elkins*) are disclosed as nested
  quotations sourced only as they appear in the fetched opinions, not
  independently verified against the underlying original opinions.
- **A disclosed bracket-alteration avoidance**: the *Thorne* "crucial
  question" quote begins after the source's own editorial bracket
  ("[T]he crucial question...") rather than reproducing the bracketed
  capitalization as if it were an exact quote of unaltered text.

## Honest gap(s) disclosed

This document does not address a filing deadline or statute of
limitations for the § 2556 motion (the statute is silent), does not
address separate property, support-order modification, Marvin
actions, or summary dissolution proceedings, does not independently
verify the *Miller v. Miller* or *In re Marriage of Brown*/*Elkins*
opinions beyond how they are quoted within *Thorne* and *Henn*, does
not resolve the § 2556/§ 2550 interaction, and does not apply the
"actually litigated and divided" standard to any specific asset or
judgment.

## Method

Fetched Fam. Code §§ 63 and 2556 from leginfo.legislature.ca.gov,
each fetched twice by the research agent with two distinct User-Agent
strings via curl, confirmed byte-identical. *Thorne v. Raccina*
(opinion_id 5666330, a lead opinion whose id differs from cluster_id
5810875) and *Henn v. Henn* (opinion_id and cluster_id both 1356599,
a combined opinion) were fetched via CourtListener and verified via
`html_with_citations` after stripping HTML tags. All 8 citation
instances were programmatically confirmed by the research agent as
exact, contiguous substrings.

Independently re-verified during integration review via a two-
hundred-and-thirty-second fetch (a new distinct curl User-Agent
string, "Groundtruth-232ndVerify-FamilyCode2556OmittedProperty/1.0")
of both statutory sections — both fetched cleanly on the first
attempt; all 4 statutory citation instances confirmed clean on direct
substring match. Both case citations were independently re-verified
via `mcp__CourtListener__search` (confirming the correct opinion_ids,
including the Thorne cluster/opinion-id divergence) and
`get_endpoint_item` — all 4 citation instances confirmed exact,
contiguous substrings of the freshly fetched opinion text (the Thorne
opinion's own footnote 5 independently quotes § 2556 in full,
corroborating the statutory text fetch). The community-estate
definition, the continuing-jurisdiction grant, the postjudgment-
motion mechanism, the equal-division default and good-cause
exception, the "actually litigated and divided" standard, and the
pre-statute tenancy-in-common principle were all independently
reconfirmed present in the freshly fetched text.

## Verification

- Both cited statutory sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a two-
  hundred-and-thirty-second independent fetch during integration
  review; all 4 statutory citation instances confirmed clean. Both
  case-law citations independently re-verified via the CourtListener
  API against the correct internal opinion ids; no defects found.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple sentences of the same section, or the same single opinion,
  correctly disclose they are not independent sources of each other;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `omittedasset2556_` prefix has zero collisions. Ran
  term-specific greps for "2556," "Henn v. Henn," and "Thorne v.
  Raccina" — zero hits on all, confirming genuine novelty.
- Checked every citation's `case` field for emptiness — all 8
  populated with proper citation identifier strings.
- No new field ids required — all five fields (`party1Name`,
  `party2Name`, `countyOfFiling`, `dateSigned`, `cityState`) reused
  from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Section 2556 Omitted or Unadjudicated Community
  Property — Information Sheet
  (`family_code_2556_omitted_community_property_info_sheet`), 8
  clauses (6 authority + 2 drafting), in the Family Law category. No
  new fields.
- Corpus: 4,722 → 4,730 clauses; 586 → 587 documents. Third processed
  item of wave 142.
