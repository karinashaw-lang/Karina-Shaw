# Real Estate, new document: HOA Assessment Lien and Foreclosure — Information Sheet

## Why this document

The existing HOA/CC&R Disclosure document covers a seller's document-
disclosure obligations to a buyer (Civ. Code § 4525 et seq.), and the
existing Notice of Default/Nonjudicial Foreclosure document covers a
mortgage lender's foreclosure of a deed of trust (Civ. Code § 2924 et
seq.). This document covers a genuinely distinct topic: an
association's own statutory lien and foreclosure remedy against a
delinquent owner under Davis-Stirling Chapter 8 (Civ. Code
§§ 5650–5740). Confirmed no overlap with either existing document.

## What this document covers

9 clauses: 2 drafting (intro/scope, acknowledgment) and 7 authority
clauses:

- **`hoalien_debt_and_delinquency`** (Civ. Code § 5650(a), (b)) — the
  underlying personal debt, the 15-day delinquency trigger, and the
  statutory caps on late charges and interest.
- **`hoalien_prelien_notice`** (Civ. Code § 5660(a), (b), (e), (f);
  § 5670) — the required 30-day pre-lien written notice and
  dispute-resolution offer.
- **`hoalien_lien_creation_and_priority`** (Civ. Code § 5675(a), (c);
  § 5680) — how the lien is actually created (by recording, not by
  § 5650 alone) and its priority, correcting a significant assumption.
- **`hoalien_fines_penalties_limitation`** (Civ. Code § 5725(a), (b);
  § 5730) — fines and penalties cannot be enforced through the
  assessment lien, with one narrow common-area-damage exception.
- **`hoalien_dollar_threshold_and_time`** (Civ. Code § 5720(b), (b)(2),
  (c)) — the $1,800/12-month minimum before foreclosure is available,
  confirmed as assumed.
- **`hoalien_board_votes_and_preforeclosure_offer`** (Civ. Code
  § 5673; § 5705(b), (c)) — the two separate required board votes and
  the dispute-resolution offer, correcting a significant assumption
  about which statute governs the foreclosure-decision vote.
- **`hoalien_sale_mechanics_and_redemption`** (Civ. Code § 5700(a);
  § 5710(a), (b); § 5715(b)) — trustee's-sale mechanics and the
  90-day right of redemption, a point of contrast with the existing
  mortgage-foreclosure document.

## Genuine corrections caught during research

- The task brief assumed § 5650 itself creates the recorded lien.
  Direct review shows § 5650 only creates the owner's personal debt
  and delinquency/interest/late-charge rules — the lien is actually
  created and perfected by § 5675(a), only upon recording a notice of
  delinquent assessment.
- The task brief assumed a fines/penalties-only foreclosure bar lives
  in § 5650 or § 5658. Direct review shows § 5658 is an unrelated
  pay-under-protest/small-claims provision; the real bar is
  § 5725(b), with a narrow carve-out in § 5725(a) for common-area
  damage-repair charges.
- The task brief assumed § 5673 is a pre-foreclosure notice
  requirement. Direct review shows § 5673 governs a different, earlier
  decision — the board's majority vote in an open meeting to approve
  recording the lien. The actual pre-foreclosure sequence (dispute-
  resolution offer, then a majority board vote in executive session at
  least 30 days before any public sale) is § 5705(b)–(c).
- The task brief assumed § 5710 governs the foreclosure-decision vote.
  Direct review shows § 5710 governs sale mechanics (incorporating the
  mortgage-foreclosure notice framework plus an association-specific
  service requirement) — a different provision from the board-vote
  requirement.
- Confirmed the $1,800/12-month threshold accurate as currently in
  effect, with its three express carve-outs.
- Surfaced, though not originally requested: § 5715(b)'s 90-day
  post-sale right of redemption, specific to HOA assessment-lien
  foreclosures and a real point of contrast with ordinary mortgage
  nonjudicial foreclosure.

## Honest gaps disclosed

- Judicial foreclosure procedure is cross-referenced but not restated
  in detail.
- The small-claims-court alternative's own procedural rules (Code Civ.
  Proc. § 116.110 et seq.) are not addressed.
- § 5660(c)–(d) and § 5665's payment-plan mechanics are noted as
  existing but not detailed in full.

## Method

Fetched Civ. Code §§ 5650, 5658, 5660, 5665, 5670, 5673, 5675, 5680,
5700, 5705, 5710, 5715, 5720, 5725, 5730 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical
for every section used. All 23 quotes across the 7 authority clauses
programmatically confirmed as exact substrings of the verified text
(two required a punctuation-spacing correction to match the source's
run-on subsection formatting exactly).

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic across all 7 authority
  clauses — every clause combining subsections of one statutory
  section carries an explicit disclosure; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  — one duplicate title was caught and renamed by the delivering agent
  before delivery ("Acknowledgment — HOA Assessment Lien Information
  Sheet Only," to avoid colliding with
  `foreclosure_closing_acknowledgment`); none remain against the
  corpus.
- Field names (`propertyAddress`, `hoaName`) confirmed to match the
  existing HOA/CC&R Disclosure document's fields exactly. New fields:
  `ownerName`, `amountDelinquent`, `delinquencyDate`,
  `lienRecordingDate`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New documents added in this integration pass: Petition for Change of
  Name (Adult or Minor) — Information Sheet (9 clauses) and HOA
  Assessment Lien and Foreclosure — Information Sheet (9 clauses).
- Corpus: 929 → 947 clauses; 122 → 124 documents.
