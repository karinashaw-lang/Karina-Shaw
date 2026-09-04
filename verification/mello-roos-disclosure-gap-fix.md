# Real Estate, gap fix: Mello-Roos special tax disclosure added to Residential Purchase Agreement

## Why this fix

A research agent assigned to draft a document on California's
Mello-Roos Community Facilities District special tax disclosure
requirement confirmed, via full review of the existing Residential
Purchase Agreement and HOA/CC&R Disclosure (Davis-Stirling) documents
and a corpus-wide grep, that this topic had zero prior coverage — the
existing HOA-assessment disclosure clause is a distinct concept (HOA
regular/special assessments, not a Mello-Roos CFD special tax lien).
Rather than ship a standalone document for a topic this narrow, the
agent recommended a gap-fix into the existing Residential Purchase
Agreement document, which already carries the document's other
statutory disclosure clauses (TDS, Natural Hazard Disclosure, lead
paint, Megan's Law) in sequence.

## What changed

Added six new clauses to the existing `residential_purchase_agreement`
document, inserted into its `clauseOrder` immediately after
`purchase_natural_hazard_disclosure` and before
`purchase_lead_paint_federal`:

- **`melloroos_notice_delivery`** (drafting) — states the delivery
  obligation as it applies to the specific property/transaction.
- **`melloroos_subdivider_notice_obligation`** (Gov. Code
  § 53341.5(a), (b)) — **a key finding**: the original "Notice of
  Special Tax" statute is keyed to a *subdivider* selling a lot in a
  new *subdivision* — not a blanket requirement for every resale — plus
  the 8-point-type heading requirement and the statutory form's own
  tax/foreclosure warning language.
- **`melloroos_resale_disclosure_mechanism`** (Civ. Code
  § 1102.6b(a), (b)) — **the central finding**: a separate,
  independently-authored statute supplies the disclosure mechanism for
  a general residential resale, and its own text expressly applies
  only where the subdivider-notice statute does NOT otherwise apply —
  these are two distinct statutes with different triggers, not simple
  either/or alternatives for the same transaction.
- **`melloroos_timing_and_termination`** (Gov. Code § 53341.5(a), (c))
  — the pre-signing delivery requirement and the buyer's three/five-day
  termination right specific to the subdivider-notice statute.
- **`melloroos_noncompliance_remedy`** (Gov. Code § 53341.5(d), (e))
  — noncompliance does not invalidate the sale, but a willful violation
  creates actual-damages liability, a public-offense fine up to $500,
  and prevailing-party attorney's fees.
- **`melloroos_resale_disclosure_limits`** (Civ. Code § 1102.6b(e)) —
  once a qualifying disclosure is delivered under the resale mechanism,
  no additional information is required, and the statute imposes no
  duty to discover a special tax not actually known to the seller's
  agents.

The document's description was updated to mention this addition. One
existing field (`propertyAddress`) reused; no new fields.

## Genuine corrections and findings

- **The central finding**: confirmed precisely that Gov. Code
  § 53341.5 (subdivider/new-subdivision sales) and Civ. Code
  § 1102.6b (general resales) are two separate, independently-enacted
  statutes with different triggers — § 1102.6b's own text expressly
  carves out its application to cases where § 53341.5 doesn't apply —
  correcting an assumption in the original research brief that treated
  them as simple either/or alternatives for the same transaction type.
- Confirmed the subdivider-notice statute's remedy structure precisely:
  noncompliance does not invalidate the underlying transfer, but a
  willful violation carries real exposure (damages, a fine, and
  fee-shifting) — a two-tier consequence, not an all-or-nothing rule.
- Confirmed the resale mechanism's "not actually known" limitation on
  the duty to discover a special tax has no counterpart in the
  subdivider-notice statute's own text — the two statutes are not
  symmetric in this respect.
- Correctly declined to split the § 1102.6b(b) quotation, which covers
  three different lien types (Mello-Roos, 1915 Act bonds, contractual
  assessments) in one sentence, rather than ellipsis-joining a partial
  quote — reproduced it in full and scoped the clause's own body text
  and gap disclosure explicitly to the Mello-Roos application only.

## Honest gap(s) disclosed

The underlying Mello-Roos district-formation mechanics (Gov. Code
§ 53311 et seq.) are not covered. Government Code §§ 53340.2 and
53754 (the local agency's own obligation to prepare the special-tax
notice) are referenced but not independently covered. Civil Code
§ 1102.6b(c) and (d) (alternative/transitional compliance mechanisms
via a "substantially equivalent" notice) are not covered. The 1915 Act
assessment-bond and contractual-assessment-program disclosure tracks
that appear alongside Mello-Roos within the § 1102.6b(b) quotation are
not independently addressed — only the Mello-Roos application is
asserted.

## Method

Fetched Cal. Gov. Code § 53341.5 and Cal. Civ. Code § 1102.6b from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. All 13 citation quotes across the 5 authority
clauses programmatically confirmed as exact contiguous substrings (no
ellipsis-joined quotes). Independently re-verified during integration
review via a fourth fetch (a distinct curl User-Agent string,
"Groundtruth-FourthVerify-MelloRoos/1.0") of both sections — all 13
quotes confirmed clean.

## Verification

- Both statutory sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a fourth independent
  fetch during integration review; all quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subsections of the same
  statutory section (not independent) versus genuinely separate,
  independently-numbered sections or statutes (independent); correct
  as delivered throughout.
- Checked for duplicate clause IDs against the full corpus (none).
- No new fields; one existing field (`propertyAddress`) reused from
  the document's own field set.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- `residential_purchase_agreement` document: added 6 new clauses to
  its `clauseOrder`, filling a genuine, previously-uncovered gap. No
  new document; no new fields.
- Corpus: 2,761 → 2,767 clauses; documents unchanged at 363. First
  addition of wave 79 (a gap-fix, not a new document — Real Estate's
  second document slot remains open).
