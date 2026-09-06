# Business Formation, new document: Voting Trusts and Shareholder Voting Agreements — Information Sheet

## Why this document

First processed item of wave 113 (Business Formation slot, 2×2 pattern).
Per the assignment's specific hint, the agent carefully checked "voting
trust" at both document and clause level and found only incidental
mentions (voting trust certificate holders listed as a class of
rights-holder in inspection-rights and derivative-suit clauses, with no
explanation of what a voting trust is, how it is created, or its
statutory limits). Cumulative voting, FTB suspension/revivor, and the
close-corporation shareholder management agreement under § 300(b) were
confirmed as distinct, unrelated mechanisms.

## What this document covers

9 clauses: 2 drafting (intro, signature block) and 7 authority clauses,
citing Corp. Code §§ 705(e), 705(e)(5), 706, 706(a), 706(b), 706(c),
706(d):

- **`votingtrust_two_voting_control_mechanisms`** — the two distinct
  § 706 devices: a voting agreement (no share transfer) and a voting
  trust (share transfer to trustees).
- **`votingtrust_shareholder_voting_agreement_terms`** — the voting
  agreement's terms and its specific-performance guarantee.
- **`votingtrust_creation_and_ten_year_cap`** — voting trust creation
  and the 10-year term cap.
- **`votingtrust_extension_procedure`** — the two-year-window extension
  procedure requiring beneficiary agreement plus trustee consent.
- **`votingtrust_filing_and_inspection_duty`** — the duty to file a
  duplicate with the corporate secretary and the inspection right.
- **`votingtrust_no_formal_crossover_requirement`** — § 706(c)-(d)'s
  anti-invalidation rules protecting agreements from mischaracterization
  attacks.
- **`votingtrust_related_irrevocable_proxy`** — the § 705(e)(5) tie
  between an irrevocable proxy and a § 706 agreement's termination.

## Genuine findings

- **A significant correction to the agent's own initial assumption**:
  the agent initially expected "voting trust" to be governed by its own
  dedicated section. Reading the full text showed § 706 actually bundles
  two distinct mechanisms in one section — a plain voting agreement and
  the voting trust proper — with different formal requirements and an
  explicit rule that satisfying one does not require satisfying the
  other's formalities.
- **A confirmed structural cross-reference**: the agent traced § 705(e)(5)'s
  irrevocable-proxy category tied to a § 706 agreement, and confirmed the
  proxy becomes revocable once the underlying § 706 agreement terminates
  — incorporated as its own clause rather than treating §§ 705 and 706 as
  unrelated.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on the statute's own text alone.

## Honest gap(s) disclosed

This document does not state what happens to trustee voting authority
after an unextended 10-year term lapses, does not specify a filing
deadline (in days) for the trust duplicate or a consequence for
non-filing, does not immunize agreements from ordinary contract defenses
(fraud, unconscionability, formation defects), does not restate the full
list of six categories under which a proxy can be made irrevocable or
the § 705(f) bona-fide-transferee cutoff rule, and does not address
interaction with bylaws, buy-sell agreements, or § 300(b) close-
corporation management agreements.

## Method

Fetched Corp. Code §§ 705 and 706 from leginfo.legislature.ca.gov, each
fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical via the extracted statute-text block.
CourtListener's daily rate limit was already exhausted on the agent's
test call; no case law was used, a disclosed and legitimate choice. All
13 citation instances programmatically confirmed by the research agent
as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-thirty-fourth fetch (a new distinct curl User-Agent
string, "Groundtruth-134thVerify-VotingTrust/1.0") of both sections —
all 13 citation instances confirmed clean on direct normalized-
whitespace substring match, no extraction artifacts encountered. The
two-mechanism structure and the § 705(e)(5)/§706 termination tie were
both independently reconfirmed present in the freshly fetched text.

## Verification

- Both Corp. Code sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a one-hundred-and-
  thirty-fourth independent fetch during integration review; all 13
  citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); one
  drafting-clause title ("Acknowledgment") collides with a generic
  boilerplate title already reused elsewhere in the corpus — confirmed
  as intentional generic-title reuse, not a content duplicate.
  Independently reconfirmed the four incidental "voting trust" mentions
  in existing inspection-rights and derivative-suit clauses are
  unrelated to this document's substantive coverage.
- Checked every citation's `case` field for emptiness — all 13
  populated with proper citation identifier strings.
- No new fields required — all five fields (`companyName`, `entityType`,
  `shareholderName`, `dateSigned`, `cityState`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Voting Trusts and Shareholder Voting Agreements —
  Information Sheet (`voting_trusts_shareholder_voting_agreements_info_sheet`),
  9 clauses (7 authority + 2 drafting), in the Business Formation
  category. No new fields.
- Corpus: 3,720 → 3,729 clauses; 488 → 489 documents. First processed
  item of wave 113.
