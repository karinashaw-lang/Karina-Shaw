# Business Formation, new document: Self-Dealing and Interested Director/Officer Transactions — Information Sheet

## Why this document

First processed item of wave 105 (Business Formation slot, 2×2 pattern
targeting the corpus's two then-lowest-tied categories). A scoping pass
and clause-level duplication check confirmed zero prior coverage of the
interested-transaction safe-harbor procedure anywhere in the corpus,
distinct from the existing Duty of Care/Business Judgment Rule and
Indemnification documents. A related topic ("FTB Suspension &
Revivor") was screened out during integration-side review after
discovering substantial overlap with an existing clause
(`soi_suspension_consequence`); this document replaced it.

## What this document covers

9 clauses: 4 drafting (intro, practice note, signature block) and 5
authority clauses, citing Corp. Code §§ 310(a)-(c), 7233(a)-(b), and
5233(a), (c)-(e):

- **`selfdealing_gp_safe_harbor_310a`** — the general-corporation
  three-pathway safe harbor for a director's own interested transaction.
- **`selfdealing_common_director_310b`** — the separate, mutually
  exclusive common-directorship safe harbor.
- **`selfdealing_quorum_310c`** — the narrow quorum-counting rule.
- **`selfdealing_mutual_benefit_7233`** — the closely parallel nonprofit
  mutual benefit corporation safe harbor.
- **`selfdealing_public_benefit_5233_definition`** and
  **`selfdealing_public_benefit_5233_conditions`** — nonprofit public
  benefit corporations' materially different regulated "self-dealing
  transaction" framework, standing, remedy conditions, and limitations
  periods.

## Genuine findings

- **A significant correction to the research brief's structural
  assumption**: the brief assumed § 5233 (nonprofit public benefit) is
  a comparable "not void or voidable if disclosed and approved" safe
  harbor like § 310 and § 7233. The agent read the actual text and
  found § 5233 is built around a completely different mechanism —
  defining a regulated "self-dealing transaction" category, then
  specifying facts a court must find before granting a remedy, with
  Attorney General standing and oversight built directly into the
  statute. Disclosed explicitly across two dedicated clauses rather
  than forcing § 5233 into the § 310/§ 7233 template.
- **A confirmed, not merely assumed, structural parallel**: the agent
  verified § 7233 does closely track § 310's structure, adapted so
  member approval and member voting rights substitute for shareholder
  approval — confirming (rather than assuming) that half of the
  brief's parallel-statute hypothesis.
- **A correctly identified subtlety in § 310(b)**: the agent found the
  common-directorship safe harbor uses a simpler two-path structure
  than subdivision (a)'s three-path structure, and that the two
  subdivisions are, by the statute's own terms, mutually exclusive —
  correcting a research-brief simplification that treated them as
  interchangeable.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's single
  lightweight test call; every authority clause proceeds on the
  statute's own text alone.

## Honest gap(s) disclosed

This document does not restate § 5233(b)'s three carve-outs (director
compensation-fixing, certain charitable-program benefits, and small
transactions below a threshold), or § 5233(g)'s quorum-counting rule
(materially identical to § 310(c)). It does not state how courts have
actually applied the "just and reasonable" or "more advantageous
arrangement" standards in litigated cases. It does not certify that any
specific transaction satisfies § 310, § 5233, or § 7233 — only a court,
or the process each statute itself describes, can determine that.

## Method

Fetched Corporations Code §§ 310, 5233, and 7233 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. CourtListener's daily rate limit was already
exhausted on the agent's single lightweight test call; no case law was
used, a disclosed and legitimate choice. All 11 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
one-hundred-and-eighth fetch (a new distinct curl User-Agent string,
"Groundtruth-108thVerify-SelfDealing/1.0") of all three sections — all
11 citation instances confirmed clean on direct substring match, no
extraction artifacts encountered.

## Verification

- Corporations Code §§ 310, 5233, and 7233 each fetched twice
  independently by the research agent with distinct User-Agent strings,
  plus a one-hundred-and-eighth independent fetch during integration
  review; all 11 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same statutory section correctly
  disclose they are not independent sources of each other; correct as
  delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either), and independently reconfirmed this document is
  distinct from the existing Duty of Care/BJR and Indemnification
  documents, and from a related but substantially different existing
  clause on corporate/LLC suspension for non-filing.
- Checked every citation's `case` field for emptiness — all 11
  populated with proper citation identifier strings.
- No new fields required — all twelve fields (`companyName`,
  `directorName`, `officerName`, `officerTitle`, `transactionDescription`,
  `boardApprovalDate`, `shareholderApprovalDate`, `votesInFavor`,
  `votesOpposed`, `authorizedSignerName`, `authorizedSignerTitle`,
  `dateSigned`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Self-Dealing and Interested Director/Officer
  Transactions — Information Sheet
  (`self_dealing_interested_director_officer_transactions_info_sheet`),
  9 clauses (5 authority + 4 drafting), in the Business Formation
  category. No new fields.
- Corpus: 3,489 → 3,498 clauses; 462 → 463 documents. First processed
  item of wave 105.
