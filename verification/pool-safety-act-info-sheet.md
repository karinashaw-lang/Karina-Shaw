# Real Estate, new document: Swimming Pool Safety Act — Information Sheet

## Why this document

Second processed item of wave 143 (Real Estate slot #2, 2×2
pattern). The agent's novelty check confirmed zero prior corpus hits
on §§ 115920-115929 and the two "swimming pool" hits were incidental
asides inside the existing Solar Rights Act clauses. A personal
duplication spot-check independently confirmed both findings.

## What this document covers

9 clauses: 2 drafting (declaration, signature) and 7 authority
clauses, citing Health & Saf. Code §§ 115921(a), (c), 115922(a)(1)-(4),
115922(a)(5)-(7), (b), (c), 115923, 115925, 115927, and 115924(a):

- **`poolsafety_definitions`** — "swimming pool"/"pool" and
  "enclosure" (two citations).
- **`poolsafety_two_of_seven_intro`** — the permit-triggered two-of-
  seven safety-feature requirement, features 1-4.
- **`poolsafety_two_of_seven_remainder`** — features 5-7, the three
  barred double-counting combinations, and the final-inspection
  requirement.
- **`poolsafety_enclosure_specs`** — the five structural specifications
  for an enclosure chosen as a qualifying feature.
- **`poolsafety_exemptions`** — public pools, certain spas, and
  non-single-family residential settings.
- **`poolsafety_local_authority_reserved`** — the bar on state-agency
  reinterpretation and the two specific points reserved to local
  jurisdictions.
- **`poolsafety_contractor_notice_duty`** — a contractor's duty to
  notify the consumer of the article's requirements.

## Genuine findings

- **A disclosed permit-trigger scope limit**: the two-of-seven-intro
  clause's gap states plainly that the requirement is triggered by
  permit issuance, not by pool ownership generally — an older,
  never-remodeled pool is not shown to be out of compliance by this
  section alone.
- **A disclosed closed-list limitation**: the remainder clause's gap
  notes the barred-combination list is a closed list of three
  specific pairings, not a general bar on any overlapping features.
- **A disclosed narrow local-authority reservation**: the local-
  authority clause's gap states the reservation names only two
  specific provisions, not a general statement of local control over
  the article's other requirements.
- **A disclosed gap in the exemption's downstream effect**: the
  exemptions clause's gap notes that a multi-family pool removed from
  this article by the residential-setting exemption may still be
  separately regulated as a "public swimming pool" under a different,
  undocumented part of the Health & Safety Code.

## Honest gap(s) disclosed

This document does not describe the required form or delivery method
for the contractor's consumer-notice duty or any in-article penalty
for failing to give it, does not document the "public swimming pool"
sanitation/design article that may separately govern exempted
multi-family pools, does not address local building or zoning
ordinance definitions of "pool" that may differ from this article's
own definitions, and does not address the non-mandatory consumer-
information-sharing encouragement in the same statutory section as
the notice duty.

## Method

Fetched Health & Saf. Code §§ 115921-115925 and 115927 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings via curl, confirmed byte-
identical (§§ 115926, 115928, 115929 read but not quoted — agency-
rulemaking, plumbing specs, and a legislative-encouragement provision
outside this document's scope). All 8 citation instances were
programmatically confirmed by the research agent as exact substrings
after normalizing disclosed nbsp-after-subdivision-letter and
mid-word line-wrap artifacts, each confirmed identical across both
fetches.

Independently re-verified during integration review via a two-
hundred-and-thirty-fifth fetch (a new distinct curl User-Agent
string, "Groundtruth-235thVerify-PoolSafetyAct/1.0") of all six
statutory sections — all fetched cleanly on the first attempt. 2 of
8 citation instances confirmed clean on direct substring match; the
remaining 6 confirmed clean only after normalizing the artifacts
already disclosed in the delivered clauses' gap fields. The
definitions, the two-of-seven feature list (all seven features), the
barred combinations, the final-inspection requirement, the enclosure
structural specifications, the exemptions, the local-authority
reservation, and the contractor notice duty were all independently
reconfirmed present in the freshly fetched text.

## Verification

- All six cited statutory sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a two-
  hundred-and-thirty-fifth independent fetch during integration
  review; all 8 citation instances confirmed clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `poolsafety_` prefix has zero collisions. Ran
  section-number-specific greps for "115921" through "115925" and
  "115927," plus "swimming pool" — the two "swimming pool" hits
  confirmed incidental asides in unrelated Solar Rights Act clauses
  by inspecting each hit's context directly.
- Checked every citation's `case` field for emptiness — all 8
  populated with proper citation identifier strings.
- No new field ids required — all three fields (`homeownerName`,
  `contractorName`, `propertyAddress`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Swimming Pool Safety Act — Information Sheet
  (`pool_safety_act_info_sheet`), 9 clauses (7 authority + 2
  drafting), in the Real Estate category. No new fields.
- Corpus: 4,747 → 4,756 clauses; 589 → 590 documents. Second
  processed item of wave 143.
