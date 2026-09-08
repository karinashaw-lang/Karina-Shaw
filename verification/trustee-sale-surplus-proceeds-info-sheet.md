# Real Estate, new document: Trustee's Sale Surplus Proceeds — Information Sheet

## Why this document

Fourth and final processed item of wave 143 (Real Estate slot #1,
2×2 pattern, closing the wave). The agent's novelty check confirmed
zero prior corpus hits on §§ 2924j/2924k or the relevant clause-id
prefix, and distinguished this document's scope (post-sale surplus
distribution) from the corpus's existing foreclosure-adjacent
documents (notice of default, notice of sale, reinstatement, the
Homeowner Bill of Rights, foreclosure consultants). A personal
duplication spot-check independently confirmed all findings.

## What this document covers

10 clauses: 2 drafting (scope, closing acknowledgment) and 8
authority clauses, citing Civ. Code § 2924k(a), (b), § 2924j(a), (b),
(c), (d), (e), (g), and *Placer Foreclosure, Inc. v. Aflalo*, 23
Cal.App.5th 1109 (2018) (two citations):

- **`surplusproceeds_priority_of_distribution`** — the four-tier
  statutory priority order for distributing trustee's-sale proceeds.
- **`surplusproceeds_trustee_fee_cap`** — the $100/$125 conclusively-
  reasonable fee safe harbor.
- **`surplusproceeds_notice_to_recorded_interest_holders`** — the
  30-day post-sale notice duty to pre-sale recorded-interest holders.
- **`surplusproceeds_due_diligence_and_deadline`** — the due-diligence
  timeline for resolving competing claims.
- **`surplusproceeds_deposit_and_notice_procedure`** — the court-
  deposit mechanism and its own pre-deposit notice requirement (two
  citations).
- **`surplusproceeds_interpleader_and_unclaimed_property`** — the
  interpleader alternative and the Unclaimed Property Law backstop
  (two citations).
- **`surplusproceeds_case_2924j_scope_limited`** — *Placer
  Foreclosure*'s holding that § 2924j's dispute machinery reaches only
  pre-sale recorded interests.
- **`surplusproceeds_case_trustee_duty_priority_order`** — the same
  case's holding that a trustee's duty to pay surplus down the
  § 2924k priority order is statutory, not discretionary.

## Genuine findings

- **A disclosed unresolved cross-reference in the statute's own
  text**: the interpleader/unclaimed-property clause's gap states
  plainly that § 2924j(g)'s reference to proceeds "not required to be
  deposited with the court pursuant to subdivision (b)" is itself
  puzzling, since subdivision (b) does not independently require a
  court deposit (that trigger appears in subdivision (c)) — and that
  this document does not attempt to reconcile that cross-reference.
- **A disclosed narrow holding boundary**: both *Placer Foreclosure*
  clauses' gaps state that the case's holding rests on a purchaser's
  claim running against the trustor personally rather than against
  the surplus fund itself, and that the court did not decide how
  § 2924j applies to a genuine dispute among persons with recorded
  pre-sale interests — the scenario the statute's own notice-and-
  claim procedure is actually designed to address.
- **A disclosed inflation-erosion observation**: the trustee-fee-cap
  clause's gap notes the $100/$125 safe-harbor figures have not been
  adjusted since they were set effective January 1, 2000.

## Honest gap(s) disclosed

This document does not resolve competing claims among multiple
junior lienholders, does not restate California's general recording-
act priority rules, does not describe the "limited civil case"
procedural rules that apply once a court deposit of $35,000 or less
triggers them, does not describe § 2924j(f)'s narrow statutory
definition of "due diligence," and does not resolve which regime
governs a specific unclaimed surplus fund given the unresolved
cross-reference noted above.

## Method

Fetched Civ. Code §§ 2924j and 2924k from leginfo.legislature.ca.gov,
each fetched twice by the research agent with two distinct User-Agent
strings via curl, confirmed byte-identical. *Placer Foreclosure, Inc.
v. Aflalo* was located via CourtListener `search` (confirming the
correct opinion_id, 6106592, distinct from cluster_id 6239671) and
verified via `get_endpoint_item`. Direct courtlistener.com re-
verification was blocked by this environment's network egress
controls (a known, disclosed limitation), so the research agent
relied on the single MCP fetch, choosing quote spans free of
apostrophes to sidestep any curly-quote ambiguity it could not
independently disambiguate. All 10 citation instances were
programmatically confirmed by the research agent as exact substrings
after normalizing disclosed line-wrap artifacts.

Independently re-verified during integration review via a two-
hundred-and-thirty-seventh fetch (a new distinct curl User-Agent
string, "Groundtruth-237thVerify-TrusteeSaleSurplusProceeds/1.0") of
both statutory sections — both fetched cleanly on the first attempt.
6 of 8 statutory citation instances confirmed clean on direct
substring match; the remaining 2 confirmed clean only after
normalizing the artifacts already disclosed in the delivered clauses'
gap fields. Both *Placer Foreclosure* citations were independently
re-verified via `mcp__CourtListener__search` and `get_endpoint_item`
— this review's own fetch succeeded directly against the MCP tool
(no network-egress block encountered this time), and both quotes
confirmed exact, direct matches against the freshly fetched opinion
text. The priority order, the fee cap, the notice duty, the due-
diligence timeline, the court-deposit and pre-deposit-notice
procedures, the interpleader alternative, the Unclaimed Property Law
cross-reference, and both case holdings were all independently
reconfirmed present in the freshly fetched text.

## Verification

- Both cited statutory sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a two-
  hundred-and-thirty-seventh independent fetch during integration
  review; all 8 statutory citation instances confirmed clean. Both
  case-law citations independently re-verified via the CourtListener
  API against the correct internal opinion id; no defects found.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section, or the same single
  opinion, correctly disclose they are not independent sources of
  each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `surplusproceeds_` prefix has zero collisions. Ran
  section-number-specific greps for "2924j," "2924k," and "Placer
  Foreclosure" — zero hits on all, confirming genuine novelty.
- Checked every citation's `case` field for emptiness — all 10
  populated with proper citation identifier strings.
- No new field ids required — all eight fields (`propertyAddress`,
  `trustorName`, `beneficiaryName`, `trusteeName`,
  `foreclosureSaleDate`, `claimantName`, `dateSigned`, `cityState`)
  reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Trustee's Sale Surplus Proceeds — Information Sheet
  (`trustee_sale_surplus_proceeds_info_sheet`), 10 clauses (8
  authority + 2 drafting), in the Real Estate category. No new
  fields.
- Corpus: 4,764 → 4,774 clauses; 591 → 592 documents. Fourth and
  final processed item of wave 143.

## Wave 143 summary

Wave 143 used a 2×2 rotation pattern (two documents each in Real
Estate and Confidentiality & IP), targeting the two least-recently-
touched of the four tied-lowest categories after wave 142 closed.

1. **California Reader Privacy Act (Civil Code §§ 1798.90-1798.90.05)
   — Information Sheet** (Confidentiality & IP) — 10 clauses, Civ.
   Code §§ 1798.90, 1798.90.05.
2. **Swimming Pool Safety Act — Information Sheet** (Real Estate) — 9
   clauses, Health & Saf. Code §§ 115921-115925, 115927.
3. **California Electronic Communications Privacy Act (CalECPA) —
   Information Sheet** (Confidentiality & IP) — 8 clauses, Pen. Code
   §§ 1546-1546.4, People v. Meza.
4. **Trustee's Sale Surplus Proceeds — Information Sheet** (Real
   Estate) — 10 clauses, Civ. Code §§ 2924j, 2924k, Placer
   Foreclosure, Inc. v. Aflalo.

Corpus totals across the wave: 4,737 → 4,774 clauses (+37 net across
four documents: 10 + 9 + 8 + 10); 588 → 592 documents (+4). No
genuine duplication findings required excluding any delivered clause
this wave — every apparent grep hit across all four documents was
confirmed, on direct inspection, to be a false-positive cross-code
collision, an incidental non-substantive mention, or a legitimate
distinction from a different statute or case covering related subject
matter.
