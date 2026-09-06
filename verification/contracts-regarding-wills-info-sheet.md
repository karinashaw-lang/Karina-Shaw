# Estate Planning, new document: Contracts Regarding Wills — Information Sheet

## Why this document

Third processed item of wave 136 (Estate Planning slot, 1×4 pattern).
The agent ruled out the Prop 19 parent-child reassessment exclusion,
the Heggstad petition, joint tenancy/right of survivorship/Totten
trust/GST tax, and electronic wills (no live California statute
exists) — all confirmed already covered or non-existent as a live
statute. The chosen topic — Probate Code § 21700's exclusive methods
of proof for a contract to make a will, not to revoke one, or to die
intestate, and CCP § 366.3's one-year filing deadline for a claim
based on such a promise — was confirmed genuinely open and distinct
from this corpus's existing will-contest coverage (which addresses
invalidating a will, not enforcing a contractual promise about its
contents). A duplication check found zero prior corpus hits on either
"21700" or "366.3."

## What this document covers

11 clauses: 3 drafting (declaration, evidence summary, certification)
and 8 authority clauses, citing Prob. Code § 21700(a), (a)(1)-(3),
(a)(4)-(5), (b), (c), and CCP § 366.3(a), (b), (c):

- **`contractwill_exclusive_methods_of_proof`** — the statute's
  exclusive five-method list for proving such a contract.
- **`contractwill_documentary_proof_methods`** — the three document-
  based proof methods.
- **`contractwill_equitable_proof_methods`** — the two clear-and-
  convincing-evidence proof methods requiring no writing.
- **`contractwill_joint_mutual_wills_no_presumption`** — signing a
  joint or mutual will does not by itself presume a non-revocation
  contract.
- **`contractwill_pre2001_contracts_saved`** — pre-2001 contracts are
  governed by prior law, not this statute's list.
- **`contractwill_one_year_limitations_period`** / **`contractwill_
  no_tolling_exceptions`** / **`contractwill_limitations_
  applicability_date`** — the one-year filing deadline, its narrow
  tolling exceptions, and its effective-date scope.

## Genuine findings

- **A disclosed, deliberate scope limitation on undefined statutory
  terms**: the equitable-proof-methods clause's gap notes the statute
  does not define "clear and convincing evidence" or what makes a
  promise "enforceable in equity," and the document does not
  independently research those terms.
- **A disclosed effective-date sourcing distinction**: the
  limitations-applicability-date clause's gap explicitly notes the
  January 1, 2010 date is drawn from the statute's own history note
  rather than from subdivision (c)'s operative text itself.
- **A disclosed access limitation on a repealed cross-reference**: the
  no-tolling-exceptions clause's gap discloses that former Probate
  Code Part 3 (§ 21300 et seq.), as it read before its 2008 repeal,
  was not independently fetched — only the current statute's
  cross-reference to it is quoted.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener returned only an irrelevant unrelated case and then a
  429 on a third targeted query; every authority clause proceeds on
  statute text alone.

## Honest gap(s) disclosed

This document does not define "clear and convincing evidence" or
"enforceable in equity," does not restate the substantive pre-2001 law
§ 21700(c) preserves, does not independently verify CCP §§ 12, 12a,
12b or former Probate Code Part 3's pre-2008 text, and does not
determine that any specific writing, agreement, or promise satisfies
any of the statute's proof methods.

## Method

Fetched Prob. Code § 21700 and CCP § 366.3 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings via curl, confirmed identical
after normalizing the JSF ViewState token and debug timestamp. Two
CourtListener searches returned only an irrelevant unrelated case; a
third targeted query returned a 429 rate-limit error; no case law was
used or fabricated. All 9 citation instances were programmatically
confirmed by the research agent as exact, contiguous substrings via a
build script that asserted each quote against the extracted source
text before writing it, inserting a space at paragraph-level HTML
boundaries to avoid the known leginfo adjacency artifact rather than
silently reproducing a false abutment.

Independently re-verified during integration review via a two-
hundred-and-eighth fetch (a new distinct curl User-Agent string,
"Groundtruth-208thVerify-ContractsWills/1.0") of both sections — both
fetched cleanly on the first attempt. All 9 citation instances
confirmed clean: 7 matched directly, and 2 (the documentary- and
equitable-proof-methods clauses) matched only after whitespace
normalization, confirmed by direct raw-HTML inspection to be the
well-catalogued benign leginfo paragraph-adjacency artifact — the
statute's lettered subdivisions are rendered as separate adjacent
`<p>` elements with no literal character between them, which a browser
renders with visible paragraph separation — not a citation defect.
The exclusive-methods list, both the documentary and equitable proof
methods, the joint/mutual-wills no-presumption rule, the pre-2001
savings clause, the one-year filing deadline, its tolling exceptions,
and its effective-date scope were all independently reconfirmed
present in the freshly fetched text.

## Verification

- Both cited sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a two-hundred-and-
  eighth independent fetch during integration review; all 9 citation
  instances confirmed clean (7 direct, 2 via the benign paragraph-
  adjacency whitespace artifact).
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `contractwill_` prefix has zero collisions. Ran
  section-number-specific greps for "21700" and "366.3" across the
  full corpus — zero hits on both, confirming genuine novelty.
- Checked every citation's `case` field for emptiness — all 9
  populated with proper citation identifier strings.
- No new field ids required — all nine fields (`claimantName`,
  `decedentName`, `relationshipToDecedent`, `dateOfDeath`,
  `agreementDate`, `underlyingClaimDescription`, `countyOfFiling`,
  `dateSigned`, `cityOfExecution`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Contracts Regarding Wills — Information Sheet
  (`contracts_regarding_wills_info_sheet`), 11 clauses (8 authority +
  3 drafting), in the Estate Planning category. No new fields.
- Corpus: 4,494 → 4,505 clauses; 562 → 563 documents. Third processed
  item of wave 136.
