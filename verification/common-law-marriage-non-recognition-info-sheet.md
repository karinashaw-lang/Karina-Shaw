# Family Law, new document: Common Law Marriage in California — Non-Recognition Information Sheet

## Why this document

Third processed item of wave 98 (Family Law slot). A scoping pass
confirmed zero prior coverage of this specific, frequently-searched
topic — distinct from the existing Putative Spouse Doctrine clause,
which addresses a party's good-faith belief in an invalid marriage, a
different legal question.

## What this document covers

6 clauses: 2 drafting (intro, acknowledgment) and 4 authority clauses,
citing Family Code §§ 300(a) and 308:

- **`commonlawmarriage_ca_formation_requirements`** — California's own
  marriage-formation requirements: consent alone is insufficient; a
  license and solemnization are required, subject to two named
  statutory exceptions.
- **`commonlawmarriage_no_recognition_instate`** — the resulting rule
  that no marriage forms within California merely through cohabitation
  and holding out as married, however long.
- **`commonlawmarriage_out_of_state_recognition`** — California's
  general recognition of a marriage validly contracted under another
  jurisdiction's law, including a common law marriage.
- **`commonlawmarriage_out_of_state_recognition_requires_actual_validity`**
  — the important nuance the research brief specifically flagged:
  recognition depends on actual validity under the other jurisdiction's
  own law (capacity, mutual agreement, cohabitation, holding out, and
  often domicile) — not on a couple's mere presence in or travel through
  a common-law-marriage state.

## Genuine findings

- **A disclosed, honest response to a CourtListener quota exhaustion**:
  the agent attempted multiple CourtListener searches for confirming
  case law but hit the API's daily request quota (125/day, ~6-hour
  reset) before any candidate opinion's text could be fetched and
  confirmed. Rather than cite an unverified case or wait out a multi-
  hour reset, the agent kept the document statute-only and disclosed
  this explicitly in every affected clause's gap field — noting this
  mirrors an existing precedent already in the corpus (the Putative
  Spouse Doctrine clause, which also rests on statutory text alone with
  the same disclosure style).
- **Correctly avoided the oversimplification the research brief warned
  against**: the document does not state that any long-term unmarried
  couple from a common-law-marriage state is automatically married in
  California — it explicitly ties recognition to actual compliance with
  that other jurisdiction's own specific requirements, including a
  domicile element common to many such states.
- Correctly distinguished the statutory formation requirement (§ 300(a))
  from the separate out-of-state recognition rule (§ 308), rather than
  conflating the two into a single overbroad claim.

## Honest gap(s) disclosed

This document does not independently verify Family Code § 425 or Part 4
(commencing with § 500), the two named exceptions to California's
license-and-solemnization requirement — only that they are named. It
does not verify any specific other state's common law marriage elements
or which states currently recognize the doctrine. It does not address
statutory exceptions or public-policy limits that might qualify § 308's
general recognition rule. It does not determine whether any specific
couple is or is not married under California or any other jurisdiction's
law — that is a fact-specific determination for a court if disputed.

## Method

Fetched Family Code §§ 300 and 308 from `leginfo.legislature.ca.gov`,
each fetched twice by the research agent with two distinct User-Agent
strings (one transient connection reset on § 308 resolved on retry),
confirmed byte-identical on the extracted statutory-text content after
whitespace normalization. CourtListener searches for confirming case
law were attempted but the API's daily quota was exhausted before any
opinion text could be verified — a disclosed limitation, not a silent
omission. All 4 citation quotes programmatically confirmed by the
research agent as exact, contiguous substrings.

Independently re-verified during integration review via an
eighty-second fetch (a new distinct curl User-Agent string,
"Groundtruth-82ndVerify-CommonLawMarriage/1.0") of both sections — all
4 quotes confirmed clean on direct substring match, no extraction
artifacts encountered.

## Verification

- Family Code §§ 300 and 308 each fetched twice independently by the
  research agent with distinct User-Agent strings, plus an
  eighty-second independent fetch during integration review; all 4
  quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses correctly
  disclose which citations draw on the same statutory subsection versus
  the document's own inference from that text; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles duplicate existing corpus titles — consistent
  with this project's established pattern of generic, reused boilerplate
  titles; clause IDs remain unique.
- Checked every citation's `case` field for emptiness — all 4 populated
  with proper citation identifier strings.
- No new fields required — all four fields (`party1Name`, `party2Name`,
  `dateSigned`, `cityState`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Common Law Marriage in California — Non-Recognition
  Information Sheet (`common_law_marriage_non_recognition_info_sheet`),
  6 clauses (4 authority + 2 drafting), in the Family Law category. No
  new fields.
- Corpus: 3,291 → 3,297 clauses; 436 → 437 documents. Third processed
  item of wave 98.
