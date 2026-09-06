# Estate Planning, new document: Stepped-Up Basis at Death — Information Sheet

## Why this document

First processed item of wave 103 (Estate Planning slot, 2×2 pattern
targeting the corpus's two then-lowest-tied categories). A scoping pass
and clause-level duplication check confirmed zero prior coverage of
26 U.S.C. § 1014 anywhere in the corpus, distinct from the existing
Federal Estate and Gift Tax Basics document, which addresses transfer-
tax provisions (§§ 2010, 2056, 2503) rather than this income-tax basis
rule.

## What this document covers

8 clauses: 2 drafting (intro, separate-vs-community contrast) and 6
authority clauses, citing 26 U.S.C. § 1014(a)(1)-(3), (b)(6), (c),
(e)(1)-(2)(A), and (f)(1)-(2):

- **`steppedupbasis_general_rule`** — the default fair-market-value-at-
  death basis rule.
- **`steppedupbasis_alternate_valuation`** — how the § 2032 alternate
  valuation date and § 2032A special-use valuation elections change the
  § 1014 basis figure when made.
- **`steppedupbasis_community_property_double_stepup`** — the central
  finding: California's community-property "double step-up" under
  § 1014(b)(6).
- **`steppedupbasis_gift_within_one_year`** — the anti-abuse limit for
  appreciated property gifted to the decedent shortly before death.
- **`steppedupbasis_consistency_with_estate_tax_return`** — the 2015-
  added basis-consistency cap tied to the estate tax return.
- **`steppedupbasis_ird_exception`** — the income-in-respect-of-a-
  decedent exclusion (e.g., IRAs, uncollected wages).

## Genuine findings

- **A confirmed, not merely assumed, subsection citation**: the research
  brief's assumption that the community-property double-step-up rule
  lives at § 1014(b)(6) was verified correct against the actual current
  statutory text — no correction needed there.
- **A materially more complete statutory picture than the brief
  anticipated**: close reading surfaced four provisions the brief didn't
  mention and the agent incorporated: the § 2032/§ 2032A valuation
  elections, the § 1014(c) income-in-respect-of-a-decedent exclusion,
  the § 1014(e) one-year gift-back anti-abuse rule, and the § 1014(f)
  (2015) basis-consistency cap tied to the estate tax return.
- **A confirmed non-duplication with the existing estate/gift tax
  document**: the agent grepped the corpus and confirmed the existing
  Federal Estate and Gift Tax Basics document never mentions § 1014 or
  "stepped-up basis," and built the intro clause to explicitly
  distinguish the two federal tax concepts (transfer tax versus income-
  tax basis).
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's first
  lightweight test call; every authority clause proceeds on the
  statute's own text alone, disclosed explicitly.

## Honest gap(s) disclosed

This document does not restate the eligibility requirements, election
deadlines, or valuation mechanics of §§ 2032 or 2032A themselves — only
that making either election changes the § 1014 basis figure. It does
not restate § 691's own operative text for income in respect of a
decedent. It does not resolve whether any specific asset is community
property, separate property, or another form of co-ownership under
California law, or whether the § 1014(b)(6) gross-estate-inclusion
requirement was met for any specific property. It does not determine
whether any specific gift to a decedent falls within the one-year
anti-abuse rule.

## Method

Fetched 26 U.S.C. § 1014 from Cornell LII twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical by MD5
checksum (`788add8...`, 63,639 bytes, no whitespace normalization even
needed — raw HTML matched exactly). CourtListener's daily rate limit
was already exhausted on the agent's first lightweight test call; no
case law was used, a disclosed and legitimate choice. All 6 citation
instances programmatically confirmed by the research agent as exact,
contiguous substrings.

Independently re-verified during integration review via a
one-hundredth fetch (a new distinct curl User-Agent string,
"Groundtruth-100thVerify-SteppedUpBasis/1.0") of the section — confirmed
byte-for-byte identical to the research agent's own fetch by MD5
checksum (`788add8cb367c1aff50f23d8085396ae`). All 6 citation instances
confirmed clean on direct substring match, no extraction artifacts
encountered.

## Verification

- 26 U.S.C. § 1014 fetched twice independently by the research agent
  with distinct User-Agent strings, plus a one-hundredth independent
  fetch during integration review (all three copies MD5-identical); all
  6 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — all citations draw on
  the same single statutory section, correctly not treated as
  independent sources of each other.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either), and independently reconfirmed no prior clause
  anywhere in the corpus references 26 U.S.C. § 1014 before this
  document.
- Checked every citation's `case` field for emptiness — all 6
  populated with proper citation identifier strings.
- No new fields required — all four fields (`decedentName`,
  `survivingSpouseName`, `propertyAddress`, `executorName`) reused from
  the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Stepped-Up Basis at Death — Information Sheet
  (`stepped_up_basis_at_death_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Estate Planning category. No new fields.
- Corpus: 3,425 → 3,433 clauses; 454 → 455 documents. First processed
  item of wave 103.
