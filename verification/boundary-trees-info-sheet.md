# Real Estate, new document: Boundary Trees — Information Sheet

## Why this document

First processed item of wave 140 (Real Estate slot, 1×4 pattern). The
agent confirmed the corpus's existing Good Neighbor Fence Act
document explicitly disclaims covering trees, and ruled out Megan's
Law disclosure, PCOR/documentary transfer tax, condo-conversion, and
Civ. Code § 827 rent-increase notice — all confirmed already covered
elsewhere. The chosen topic — Civ. Code §§ 833 and 834's ownership
rules for a tree whose trunk stands wholly on one owner's land versus
on a boundary, § 3346's treble/double-damages measure and five-year
limitations period for wrongful injury to timber or trees, and
*Booska v. Patel*'s discussion of the right to trim encroaching
growth — was confirmed genuinely open: zero prior corpus hits on
"833," "834," "3346," or "Booska" (the apparent bare-number hits all
traced to 18 U.S.C. § 1833, page citations, SB 833, and a Family Code
section range, all confirmed false positives).

## What this document covers

8 clauses: 2 drafting (purpose/parties, factual record) and 6
authority clauses, citing Civ. Code § 833, § 834, § 3346(a), (b), (c),
and *Booska v. Patel* (1994) 24 Cal. App. 4th 1786 (four citations):

- **`boundarytrees_sole_ownership`** — exclusive ownership of a tree
  whose trunk stands wholly on one owner's land.
- **`boundarytrees_common_ownership`** — common ownership of a
  boundary-line tree, corroborated by *Booska*'s own paraphrase.
- **`boundarytrees_right_to_trim_reasonableness`** — the right to
  trim encroaching growth and its reasonableness limit, tracing the
  "absolute right" language to *Bonde v. Bishop*.
- **`boundarytrees_coowner_destruction_limit`** — a co-owner's lack of
  unilateral right to destroy a jointly owned boundary tree.
- **`boundarytrees_penal_damages_and_limitations`** — the treble/
  double-damages measure and five-year limitations period.
- **`boundarytrees_survey_reliance_exception`** — the reduced-damages
  exception for a trespass relying on a licensed boundary survey.

## Genuine findings

- **A disclosed source-quotation chain, not treated as independent
  corroboration**: the coowner-destruction clause's gap explicitly
  notes *Booska*'s rule is itself drawn from two older cases (*Anderson
  v. Weiland* and *Scarborough v. Woodill*), neither independently
  fetched or verified — the clause relies only on *Booska*'s own
  quotation and characterization of them.
- **A disclosed non-final-merits posture**: the right-to-trim clause's
  gap notes *Booska* reversed a summary judgment on triable-fact
  grounds without itself deciding whether the defendant's conduct was
  reasonable, and states the case became final only via a denied
  rehearing petition and denied Supreme Court review, not merits
  review.
- **A disclosed rendering artifact handled by starting the quote after
  it, not reproducing an ambiguous character**: the coowner-
  destruction clause's gap discloses a stray asterisk in the raw
  opinion HTML immediately before an ellipsis, verified directly, with
  the quote beginning cleanly after that point.
- **Two disclosed benign leginfo mid-sentence line-wrap artifacts** in
  § 3346(a) and (c), and a disclosed benign paragraph-adjacency
  artifact in § 3346(b), all verified directly and normalized or
  preserved as documented.

## Honest gap(s) disclosed

This document does not define "trunk" or address a trunk that grows
ambiguously across a boundary line, does not state co-ownership
proportions under § 834, does not independently verify *Bonde v.
Bishop*, *Anderson v. Weiland*, or *Scarborough v. Woodill* beyond
*Booska*'s own quotations, does not state a bright-line reasonableness
test, does not address § 3346(c)'s discovery-rule question, and does
not evaluate any specific tree, conduct, or claim's actual facts.

## Method

Fetched Civ. Code §§ 833, 834, and 3346 from leginfo.legislature.ca.gov,
each fetched twice by the research agent with two distinct User-Agent
strings via curl, confirmed byte-identical. A CourtListener search
located *Booska v. Patel* without a rate-limit issue; its quotes were
verified via the tool-returned internal opinion id's `html_with_citations`
field (its `plain_text` field was empty, consistent with the tool's own
guidance for older opinions). All 10 citation instances were
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a two-
hundred-and-twenty-second fetch (a new distinct curl User-Agent
string, "Groundtruth-222ndVerify-BoundaryTrees/1.0") of all three
statutory sections — all fetched cleanly on the first attempt. 4 of 5
statute citation instances confirmed clean on direct normalized-
whitespace substring match; the fifth (§ 3346(b)) matched only after
replicating the well-catalogued benign leginfo paragraph-adjacency
artifact. All four *Booska v. Patel* case-law citations independently
reconfirmed via the CourtListener API's `get_endpoint_item` against
the opinion's internal id — all exact matches, no defects found. The
sole- and common-ownership rules, the right-to-trim-and-reasonableness
holding, the co-owner destruction limit, the treble/double-damages
measure and limitations period, and the survey-reliance exception
were all independently reconfirmed present in the freshly fetched
text.

## Verification

- All three cited statutory sections fetched twice independently by
  the research agent with distinct User-Agent strings, plus a two-
  hundred-and-twenty-second independent fetch during integration
  review; all 5 statute citation instances confirmed clean (4 direct,
  1 via the benign paragraph-adjacency artifact). All four case-law
  citations independently re-verified via the CourtListener API
  against the correct internal opinion id; no defects found.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section, or a case quoting an
  older case, correctly disclose the chain rather than presenting it
  as independent corroboration; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `boundarytrees_` prefix has zero collisions. Ran
  section-number-specific greps for "833," "834," "3346," and
  "Booska" — all apparent hits traced to unrelated federal statutes,
  page citations, a bill number, and an unrelated Family Code section
  range; zero genuine overlap.
- Checked every citation's `case` field for emptiness — all 10
  populated with proper citation identifier strings.
- No new field ids required — all nine fields (`party1Name`,
  `party1PropertyAddress`, `party2Name`, `party2PropertyAddress`,
  `county`, `treeShrubDescription`, `incidentDate`,
  `incidentDescription`, `noticeDate`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Boundary Trees — Information Sheet
  (`boundary_trees_info_sheet`), 8 clauses (6 authority + 2 drafting),
  in the Real Estate category. No new fields.
- Corpus: 4,632 → 4,640 clauses; 576 → 577 documents. First processed
  item of wave 140.
