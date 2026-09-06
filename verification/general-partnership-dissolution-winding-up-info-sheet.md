# Business Formation, new document: General Partnership Dissolution and Winding-Up — Information Sheet

## Why this document

Third processed item of wave 97 (Business Formation slot). A scoping
pass confirmed this corpus's LLC and corporate dissolution documents
have no general-partnership counterpart — the only prior coverage was
one clause (`partnership_dissolution_not_automatic`, citing § 16801)
inside the existing General Partnership Agreement document, addressing
only the at-will/term dissolution triggers. This document goes
meaningfully deeper into the full dissolution and winding-up mechanics
without re-quoting that existing clause's material.

## What this document covers

8 clauses: 2 drafting (intro, acknowledgment) and 6 authority clauses,
citing Corp. Code §§ 16801, 16802, 16803, 16804, 16806, and 16807, and
Corrales v. Corrales, 198 Cal.App.4th 221 (2011):

- **`gpdissolution_dissociation_vs_dissolution`** — the legal distinction
  between an individual partner's dissociation and the partnership's own
  dissolution, illustrated by Corrales' holding that one partner's
  withdrawal from a two-person partnership dissolves it outright.
- **`gpdissolution_dissolution_events`** — the full remaining statutory
  dissolution triggers beyond at-will/term dissociation: agreed events,
  illegality (with its 90-day retroactive cure), and three judicial-
  dissolution grounds.
- **`gpdissolution_winding_up_waiver`** — the lesser-known rule that all
  partners may waive winding up and resume the partnership after
  dissolution but before winding up completes.
- **`gpdissolution_winding_up_authority`** — who may wind up the
  partnership by default and the scope of that authority.
- **`gpdissolution_post_dissolution_acts_liability`** — when the
  partnership remains bound by a partner's post-dissolution act, and
  that partner's own liability exposure to the other partners.
- **`gpdissolution_asset_priority`** — the creditor-first distribution
  priority, illustrated by Corrales' explanation of why the
  dissociation buyout rule and the dissolution priority rule cannot be
  substituted for each other.

## Genuine findings

- **A confirmed negative finding on the research brief's own assumed
  section range**: the brief cited "§§ 16800-16807." The research agent
  attempted to fetch § 16800 and found it does not exist — leginfo
  returns an empty section shell, and Article 8's own statutory heading
  is titled "[16801 - 16807]," confirming 16800 is simply unused.
  Independently re-confirmed during integration review by fetching only
  the sections the agent identified as actually enacted (16801-16804,
  16806, 16807).
- **A well-chosen, directly on-point case**: Corrales v. Corrales is
  used for exactly two propositions its own text supports — the
  two-person-partnership dissociation/dissolution holding and the
  creditor-priority rationale — both independently re-verified against
  the actual opinion text, including a fresh cluster-id/opinion-id check
  (cluster 5810484, opinion 5665925 — confirmed to differ, exactly as
  the agent found).
- **Careful non-duplication engineering**: rather than re-quoting the
  at-will/term dissolution triggers already covered in the existing
  General Partnership Agreement document, this document explicitly
  references that coverage and instead completes the statutory picture
  with the previously-uncovered triggers, winding-up mechanics, and
  asset-priority rule.
- Every authority clause correctly discloses the "one state's statute"
  caveat, the fact that these are default rules a partnership agreement
  can vary, and the statute's own exceptions (e.g., the RLLP/foreign LLP
  carve-outs from post-dissolution partner liability).

## Honest gap(s) disclosed

This document does not address the statement-of-dissolution recording
mechanism (Corp. Code § 16805), which affects constructive notice to
third parties. It does not detail further statutory contribution
obligations arising after the initial settlement of accounts, obligations
not known at settlement time, or a deceased partner's estate's own
contribution liability. Corrales' two-person-partnership reasoning does
not by its own terms resolve how the dissociation/dissolution line
applies to a partnership of three or more partners. This document does
not say whether any specific partner's departure would dissolve a given
partnership, or whether a given partnership's own agreement varies these
default rules.

## Method

Fetched Corp. Code §§ 16801, 16802, 16803, 16804, 16806, and 16807 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. Corrales v. Corrales verified via the
CourtListener MCP tool (direct curl and WebFetch to courtlistener.com
remain blocked in this environment); the research agent explicitly
checked the cluster-id/opinion-id relationship (cluster 5810484, opinion
5665925) rather than assuming a match. All 14 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
seventy-eighth fetch (a new distinct curl User-Agent string,
"Groundtruth-78thVerify-GPDissolution/1.0") of all six statutory
sections — all 12 statutory citation instances confirmed clean on direct
substring match. Corrales independently re-verified via the
CourtListener MCP tool (after one transient 502 server error resolved on
a single retry), including a fresh cluster/opinion-id check confirming
the same mismatch the research agent found — both case-law quotes
confirmed as exact substrings of the freshly fetched opinion text by
direct comparison.

## Verification

- All six Corp. Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  seventy-eighth independent fetch during integration review; all 12
  statutory citation instances confirmed clean.
- Corrales v. Corrales independently re-verified via the CourtListener
  MCP tool during integration review, including a fresh
  cluster/opinion-id check; both case-law quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses citing multiple
  subsections of the same statutory section, or two different sections,
  correctly disclose which; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("About This Document," "Acknowledgment")
  duplicate existing corpus titles — consistent with this project's
  established pattern of generic, reused boilerplate titles; clause IDs
  remain unique.
- Checked every citation's `case` field for emptiness — all 14 populated
  with proper citation identifier strings.
- No new fields required — all eight fields (`partnershipName`,
  `partner1Name`, `partner2Name`, `dateSigned`, `cityState`,
  `dissolutionDate`, `dissolutionReason`, `preparerName`) reused from
  the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: General Partnership Dissolution and Winding-Up —
  Information Sheet
  (`general_partnership_dissolution_winding_up_info_sheet`), 8 clauses
  (6 authority + 2 drafting), in the Business Formation category. No
  new fields.
- Corpus: 3,262 → 3,270 clauses; 432 → 433 documents. Third processed
  item of wave 97.
