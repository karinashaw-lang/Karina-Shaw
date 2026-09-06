# During employment, new document: School Activities Leave — Information Sheet

## Why this document

First processed item of wave 104 (During employment slot, 1×4 pattern
targeting six categories tied at the corpus's then-lowest count). A
scoping pass and clause-level duplication check confirmed zero prior
coverage of Labor Code § 230.8 anywhere in the corpus, distinct from
the corpus's other leave-law documents (CFRA, PDL, PFL, bereavement,
kin care, jury duty, domestic violence leave, reproductive loss leave).

## What this document covers

8 clauses: 2 drafting (intro, acknowledgment) and 6 authority clauses,
citing Labor Code § 230.8(a)(1)-(2), (b)(1)-(2), (c), (d), (e)(1)-(2):

- **`schoolactivitiesleave_employer_coverage`** — the 25-or-more-
  employees-at-the-same-location coverage threshold.
- **`schoolactivitiesleave_entitlement`** — the two distinct covered
  activity categories and the overall 40-hour/year cap.
- **`schoolactivitiesleave_eligible_parents`** — the broad "parent"
  definition and the priority rule between two employed parents.
- **`schoolactivitiesleave_notice_and_pay`** — use of existing leave
  banks or unpaid time, and the companywide-vacation-period limitation.
- **`schoolactivitiesleave_documentation`** — the documentation an
  employer may request.
- **`schoolactivitiesleave_remedies`** — anti-retaliation protection and
  remedies including a treble-damages civil penalty.

## Genuine findings

- **A significant correction to the research brief's own scope
  assumption**: the brief omitted the statute's 25-or-more-employees-
  at-the-same-location coverage threshold entirely — the agent found
  and disclosed that this is not a companywide headcount test, so an
  employee at a smaller location may fall outside this specific
  statute even at a large employer.
- **A corrected eligibility framing**: the brief described eligibility
  using a "custody" test; the agent found the current text defines
  "parent" broadly (parent, guardian, stepparent, foster parent,
  grandparent, or in loco parentis) with no custody requirement
  anywhere in the text.
- **A correctly identified and excluded adjacent statute**: the brief
  attributed the suspension-related school-appearance leave to § 230.8;
  the agent found this is actually a separate statute, Labor Code
  § 230.7 (tied to Education Code § 48900.1), fetched it to confirm the
  cross-reference, and excluded it from this document while noting the
  distinction in the intro clause.
- **A disclosed structural nuance the brief's single description
  missed**: the statute has two distinct activity categories under one
  40-hour/year ceiling, with the 8-hour/month sub-cap applying only to
  the first (planned participation) category, not the second (emergency
  pickup) category — disclosed explicitly rather than assuming both are
  separately capped.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's first
  lightweight test call; every authority clause proceeds on the
  statute's own text alone.

## Honest gap(s) disclosed

This document does not define "the same location" for purposes of the
25-employee coverage threshold. It does not state a fixed minimum
"reasonable notice" period for the planned-participation category, and
notes the emergency category's notice requirement doesn't use the word
"reasonable" at all. It does not specify a required documentation
format — that's left to what the school or provider itself deems
appropriate. It does not name a specific agency or filing deadline for
pursuing the statute's remedies.

## Method

Fetched Labor Code § 230.8 from `leginfo.legislature.ca.gov` twice by
the research agent with two distinct User-Agent strings, confirmed
byte-identical (4,890 characters each). Also fetched § 230.7 once to
confirm the exclusion of the suspension-related leave from this
document's scope. CourtListener's daily rate limit was already
exhausted on the agent's first lightweight test call; no case law was
used, a disclosed and legitimate choice. All 10 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
one-hundred-and-fourth fetch (a new distinct curl User-Agent string,
"Groundtruth-104thVerify-SchoolActivitiesLeave/1.0") of § 230.8 — all 10
citation instances confirmed clean on direct substring match. Also
independently re-fetched § 230.7 and confirmed it references Education
Code § 48900.1, corroborating the agent's exclusion rationale.

## Verification

- Labor Code § 230.8 fetched twice independently by the research agent
  with distinct User-Agent strings, plus a one-hundred-and-fourth
  independent fetch during integration review; all 10 citation
  instances confirmed clean. § 230.7's Education Code § 48900.1
  cross-reference independently reconfirmed.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — all citations draw on
  the same single statutory section, correctly not treated as
  independent sources of each other.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 10
  populated with proper citation identifier strings.
- No new fields required — all five fields (`employeeName`,
  `companyName`, `childName`, `relationshipToChild`, `dateSigned`)
  reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: School Activities Leave — Information Sheet
  (`school_activities_leave_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the During employment category. No new fields.
- Corpus: 3,457 → 3,465 clauses; 458 → 459 documents. First processed
  item of wave 104.
