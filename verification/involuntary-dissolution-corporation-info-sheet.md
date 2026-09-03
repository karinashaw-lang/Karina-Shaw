# Business Formation, new document: Involuntary Dissolution of a Corporation — Information Sheet

## Why this document

This topic was previously only briefly mentioned as background inside
an existing clause, `closecorp_deadlock_dissolution`, in the corpus's
existing Close Corporation document, which focuses only on how
close-corporation status expands standing beyond the general rule.
This document independently re-verifies Corp. Code §§ 1800-1806 and
§ 2000 and covers the general involuntary-dissolution statute
applicable to all corporations — grounds, general standing, procedure,
interim and alternative remedies — none of which the existing clause
covers in depth. Second of wave 57's two Business Formation documents.

## What this document covers

8 clauses: 2 drafting (purpose declaration, closing/signature) and 6
authority clauses, citing Cal. Corp. Code §§ 1800, 1802, 1803, 1804,
1805, 1806, and 2000:

- **`involdissolution_grounds`** (§ 1800(b)(1)-(6)) — the six
  statutory grounds: abandonment, board deadlock, internal shareholder
  dissension, fraud/mismanagement/abuse, the 35-or-fewer-shareholder
  ground, and term expiration.
- **`involdissolution_standing_general`** (§ 1800(a)(1)-(4), (e)) — the
  general standing categories, deliberately excluding the
  close-corporation-specific expansion the existing document already
  covers.
- **`involdissolution_procedure`** (§§ 1800(a), (c), 1803, 1804) —
  filing, intervention, receivership, and the court's decree power.
- **`involdissolution_deadlock_provisional_director`** (§ 1802) — an
  interim remedy specific to the deadlock ground.
- **`involdissolution_winding_up_supervision`** (§§ 1805, 1806) —
  court-supervised winding up once dissolution is decreed.
- **`involdissolution_buyout_alternative`** (§ 2000(a)-(c), (f)) — **a
  key finding**: the buyout mechanism that can avoid dissolution
  entirely lives in a separate chapter, not Chapter 18.

## Genuine corrections and findings

- **A structural finding, independently located rather than assumed**:
  Chapter 18 itself (§§ 1800-1809) contains no buyout provision — the
  buyout/alternative-remedy mechanism is a separate, independently
  numbered section, § 2000, in a different chapter (Chapter 20),
  located by reading the full chapter text rather than assuming its
  existence or location.
- **Six precisely distinct grounds, not a general catch-all**: each
  quoted and described individually, including the 35-or-fewer-
  shareholder ground's distinct, lower evidentiary bar (no proof of
  fraud, mismanagement, or deadlock required — only that liquidation is
  "reasonably necessary").
- **The provisional-director remedy is ground-specific**: § 1802 ties
  it only to the board-deadlock ground (§ 1800(b)(2)), not the other
  five grounds — confirmed from the statute's own cross-reference.
- **The § 2000 buyout excludes one specific ground from a deduction
  right**: damages for breach by the moving party may offset the
  buyout price, except where the dissolution ground is § 1800(b)(4)'s
  fraud/mismanagement ground — a precise carve-out captured from the
  statute's text.
- Confirmed § 1800(a)'s standing categories and § 1800(b)'s grounds are
  the "general rule," deliberately distinguished from the existing
  Close Corporation document's coverage of the close-corp-specific
  standing expansion and the parallel § 1904 winding-up-supervision
  expansion — avoiding duplication while covering genuinely new
  material.

## Honest gap disclosed

The Attorney General's separate dissolution action under § 1801 (a
different, non-shareholder proceeding) is not covered. §§ 1807-1809's
creditor-claims-bar notice, final decree, and Secretary of State filing
mechanics are not covered. § 1806's subdivisions beyond the introductory
clause and (g) are summarized rather than quoted in full. § 2000(d)
(payment mechanics) and (e) (beneficial-owner definition) are not
covered in the same depth as the other subdivisions.

## Method

Fetched Cal. Corp. Code §§ 1800, 1802, 1803, 1804, 1805, 1806
(Chapter 18) and § 2000 (Chapter 20) directly from
`leginfo.legislature.ca.gov`. § 1800 and § 2000 were each fetched twice
with distinct User-Agent strings; §§ 1802-1806 were cross-checked
between a whole-chapter fetch and five separate individual-section
fetches. All fetches were programmatically diffed (HTML-stripped,
whitespace-normalized) and confirmed byte-identical. All 20 citation
quotes programmatically confirmed as exact substrings of the confirmed
text.

## Verification

- All sections fetched via multiple independent methods; confirmed
  clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — subdivisions of the
  same section correctly disclosed as one source throughout; §§ 1800,
  1802, 1803, 1804, 1805, 1806, and 2000 correctly disclosed as
  independently numbered sections while noting their shared 1975
  enactment history rather than presenting that as unrelated
  corroboration; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `entityType`, `petitionerName`,
  `groundsForProceeding`, `ownershipPercentage`, `dateSigned`,
  `cityState`) independently confirmed to match existing corpus field
  definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Involuntary Dissolution of a Corporation — Information
  Sheet (`involuntary_dissolution_corporation_info_sheet`), 8 clauses
  (6 authority + 2 drafting), in the Business Formation category. No
  new fields.
- Corpus: 2,153 → 2,161 clauses; 276 → 277 documents. Second document
  of wave 57.
