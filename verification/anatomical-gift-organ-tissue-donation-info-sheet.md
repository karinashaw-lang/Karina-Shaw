# Estate Planning, new document: Anatomical Gift (Organ and Tissue Donation) — Information Sheet

## Why this document

The corpus's existing Disposition of Remains Instructions document
covers burial/cremation control, and the Advance Health Care Directive
document doesn't detail organ donation mechanics. Confirmed by grep
that "anatomical" had zero hits anywhere in the corpus; the delivering
agent read both existing documents in full first to avoid duplication.

## What this document covers

8 clauses: 2 drafting (donor declaration, signature/witness block) and
6 authority clauses:

- **`anatomicalgift_who_may_make`** (Health & Safety Code § 7150.15;
  § 7150.10(a)(1),(15)) — who may make a gift of their own body.
- **`anatomicalgift_methods_of_making`** (§ 7150.20(a)-(d)) — the
  statutory methods of making a gift.
- **`anatomicalgift_revocation`** (§ 7150.25; § 7150.35(b)) — how a
  donor can amend or revoke a gift.
- **`anatomicalgift_priority_order`** (§ 7150.40(a)-(c)) — the
  ten-class priority order for gifting on another's behalf.
- **`anatomicalgift_ahcd_interaction`** (Prob. Code § 4701; Health &
  Safety Code § 7151.10(b)) — interaction with an Advance Health Care
  Directive.
- **`anatomicalgift_refusal`** (§ 7150.30(a),(c),(d); § 7150.35 full
  text) — documenting a refusal and its binding effect.

## Genuine corrections and findings

- Confirmed the statute conditions self-donor eligibility on age,
  emancipation, and (for a minor 15-18) parental/guardian consent —
  not a separate "sound mind" mental-capacity standard.
- Confirmed the five statutory methods of making a gift precisely
  (license/ID + registry, registry website, will, terminal-illness
  witnessed communication, or signed record), including that license
  revocation doesn't invalidate the gift and a will-based gift takes
  effect regardless of probate.
- **A significant, carefully-verified finding**: the anatomical-gift
  priority list (§ 7150.40) is a genuinely different statute from the
  corpus's existing disposition-of-remains priority list (§ 7100(a)),
  checked independently rather than assumed to match. Concrete
  differences documented: this list expressly includes "domestic
  partner" (the remains list's text says only "competent surviving
  spouse"); adds "adult grandchildren" and "grandparents" with no
  counterpart in the remains list; adds "an adult who exhibited
  special care and concern"; and collapses the remains list's two
  separate conservator classes into one.
- Confirmed the AHCD interaction draws on two genuinely independent
  codes: Prob. Code § 4701 (the statutory form's own organ-donation
  Part 3 and the agent's default postdeath donation authority) and
  Health & Safety Code § 7151.10 (a separate conflict-resolution rule
  for when a directive's terms and a gift's medical-suitability needs
  collide) — not one code restated as two.
- **A notable, honestly-reported textual anomaly**: § 7150.30(d)
  cross-references "subdivision (h) of Section 7150.35," but § 7150.35's
  current, double-verified text contains only subdivisions (a) through
  (g) — no (h) exists. Reported plainly in the clause's `gap` field
  rather than silently corrected, omitted, or guessed at.

## Honest gap disclosed

The § 7150.30(d)/§ 7150.35(h) cross-reference anomaly noted above could
not be resolved from the statute's own current text.

## Method

Fetched the full Health & Safety Code chapter (§§ 7150-7151.40) and
each individual section used, plus Prob. Code § 4701, directly from
`leginfo.legislature.ca.gov` via curl with two distinct User-Agent
strings each — byte-identical text every time. All 18 citation quotes
programmatically confirmed as exact substrings of the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are subsections of the same section versus
  genuinely independent sections or codes (e.g., the AHCD-interaction
  clause's two-code independence); correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none — no title reuse at all in this delivery).
- Field name (`principalName`) independently confirmed to match
  existing corpus convention (used elsewhere for POA-style documents).
  No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Anatomical Gift (Organ and Tissue Donation) —
  Information Sheet
  (`anatomical_gift_organ_tissue_donation_info_sheet`), 8 clauses (6
  authority + 2 drafting), in the Estate Planning category. No new
  fields.
- Corpus: 1,767 → 1,775 clauses; 225 → 226 documents. Third document
  of wave 44.
