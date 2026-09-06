# Business Formation, new document: Commercial Financing Disclosure Law — Information Sheet

## Why this document

Third processed item of wave 100 (Business Formation slot). A scoping
pass initially proposed a worker-
classification/ABC-test topic, but a duplication check found the corpus
already covers that exact subject (`california_abc_test_info_sheet`,
Hiring category, Labor Code §§ 2775-2787) — the scoping agent's per-
category search missed this cross-category duplicate. Retargeted to the
scoping agent's first backup: California's Commercial Financing
Disclosure Law (SB 1235 and its amendments), confirmed to have zero
prior coverage anywhere in the corpus.

## What this document covers

8 clauses: 1 drafting (overview) and 7 authority clauses, citing
Financial Code §§ 22800(d)-(e), (m), (n), 22801(a), (e), 22802(a)-(b),
22803, 22804(a), (c), 22805, 22806(a), and 22807(a):

- **`commfinancing_covered_transactions`** — the "commercial financing"
  definition and the provider's non-verification of a recipient's
  self-reported use statement.
- **`commfinancing_recipient_threshold`** — the $500,000 "recipient"
  ceiling, distinguished from an unrelated $5,000 "commercial loan"
  floor.
- **`commfinancing_exemptions`** — the depository-institution, single/
  incidental-transaction exemptions, and the "provider" definition's
  reach to nondepository arrangers.
- **`commfinancing_disclosure_content`** — the six required disclosure
  items and the pre-consummation signature requirement.
- **`commfinancing_factoring_alternative`** — the optional example-based
  alternative disclosure for factoring/asset-based lending under a
  general agreement.
- **`commfinancing_regulatory_gate`** — the commissioner's regulation-
  adoption duty and the statute's own suspension of enforceability until
  final regulations take effect.
- **`commfinancing_apr_terms_and_enforcement`** — the 2026 (SB 362)
  anti-deception, APR-terminology, and enforcement provisions.

## Genuine findings

- **A corrected section range and a materially more complete statutory
  picture than the research brief assumed**: the brief guessed
  §§ 22800-22805; the agent found the operative range is actually
  §§ 22800-22807 — §§ 22805-22807 were added or renumbered by SB 362,
  effective January 1, 2026, only weeks before this document's checked
  date. The agent disclosed that a source citing "Financial Code
  section 22806" for the APR safe-harbor rule (its pre-2026 number) is
  looking at a since-superseded section number, since that content now
  lives at § 22805.
- **A disclosed potential source of confusion the agent proactively
  addressed**: the $500,000 "recipient" ceiling and an unrelated $5,000
  "commercial loan" floor are easily conflated; the agent explicitly
  distinguished them rather than letting the two dollar figures blur
  together.
- **A disclosed structural gap most summaries would miss**: the statute
  itself suspends enforceability of the disclosure requirements until
  the Commissioner's implementing regulations are adopted and become
  effective — a fact this document states from the statutory text
  itself while explicitly not verifying the regulations' current status
  (which live in the California Code of Regulations, not the Financial
  Code).
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted when checked; the document
  proceeds statute-only, disclosed explicitly, and flagged as especially
  expected here given how recent the 2026 amendments are.

## Honest gap(s) disclosed

This document does not determine what use any specific recipient
intends for particular financing, or whether a signed purpose statement
exists for it. It does not calculate the dollar amount of any specific
offer or confirm it falls at or under the $500,000 ceiling. It does not
determine whether a particular provider is itself a depository
institution, arranges financing for one under a qualifying agreement, or
fits another exemption. It does not independently verify the
Commissioner's current implementing regulations, which supply the
operative calculation and formatting definitions for each disclosure
item. It does not state any case law interpreting any provision of this
law, including the very recent 2026 amendments.

## Method

Fetched Financial Code §§ 22800 through 22807 from
`leginfo.legislature.ca.gov`, each section fetched twice by the research
agent with two distinct User-Agent strings, confirmed byte-identical
after whitespace normalization. CourtListener's daily rate limit was
already exhausted when checked; no case law was used, a disclosed and
legitimate choice. All 14 citation instances programmatically confirmed
by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
ninetieth fetch (a new distinct curl User-Agent string,
"Groundtruth-90thVerify-CommFinancing/1.0") of all eight sections — all
14 citation instances confirmed clean on direct substring match, no
extraction artifacts encountered.

## Verification

- All eight Financial Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a ninetieth
  independent fetch during integration review; all 14 citation
  instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses citing multiple
  subdivisions of the same statutory section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either). Confirmed via a separate cross-category search that
  this document does not duplicate the existing California ABC Test
  information sheet (Hiring category) — the two address entirely
  different subject matter despite both citing California statutes on
  business/worker relationships.
- Checked every citation's `case` field for emptiness — all 14 populated
  with proper citation identifier strings.
- No new fields required — both fields (`companyName`, `recipientName`)
  reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Commercial Financing Disclosure Law — Information Sheet
  (`commercial_financing_disclosure_law_info_sheet`), 8 clauses (7
  authority + 1 drafting), in the Business Formation category. No new
  fields.
- Corpus: 3,349 → 3,357 clauses; 444 → 445 documents. Third processed
  item of wave 100 (the scoping agent's original Business Formation pick
  was scrapped as a cross-category duplicate before any research agent
  was launched on it; the Safe at Home Address Confidentiality Program
  document is the fourth and final item of this wave).
