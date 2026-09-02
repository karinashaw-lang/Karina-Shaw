# Business Formation, new document: Charging Order — Information Sheet

## Why this document

Confirmed by grep that "charging order" had zero hits anywhere in the
corpus. Distinct from the existing LLC Operating Agreement and LLC
Dissolution and Cancellation documents, which govern the LLC's own
internal affairs and winding up rather than a third-party creditor's
remedy against an individual member's interest.

## What this document covers

7 clauses: 2 drafting (purpose/scope declaration, preparation/signature)
and 5 authority clauses, all citing Cal. Corp. Code § 17705.03 (California
Revised Uniform Limited Liability Company Act):

- **`chargingorder_what_it_is`** (subd. (a)) — what a charging order is: a
  lien plus a pay-over obligation reaching only the debtor's economic
  rights, not membership, voting, or management rights.
- **`chargingorder_exclusive_remedy`** (subd. (f)) — the charging order is
  the exclusive remedy against a member's/transferee's transferable
  interest specifically.
- **`chargingorder_additional_court_orders`** (subd. (b)(1)-(3)) — receiver
  appointment, other necessary orders, and conditioned foreclosure (only
  upon a showing that distributions won't pay the judgment within a
  reasonable time).
- **`chargingorder_extinguish_and_redemption`** (subd. (c)-(d)) — the
  debtor-member's own extinguishment right and the LLC's/other members'
  optional redemption right, both exercisable before foreclosure.
- **`chargingorder_no_compelled_distribution`** (subd. (e)) — preservation
  of exemption laws, plus the document's own observation (not a separate
  citation) that nothing in the statute's text compels the LLC to make a
  distribution.

## Genuine corrections and findings

- Confirmed the charging order reaches only the debtor's transferable
  interest (economic rights) — the statute's own text does not transfer
  membership status, voting rights, or management rights to the judgment
  creditor.
- Confirmed foreclosure is conditioned, not automatic: it requires a
  showing that distributions under the charging order will not pay the
  judgment debt within a reasonable time, and even then a foreclosure-sale
  purchaser acquires only the transferable interest, not membership
  status.
- Confirmed two distinct, separately timed paths exist to end a charging
  order before foreclosure — the debtor-member's own satisfaction-and-filing
  right (subd. (c)) and the LLC's or other members' optional
  pay-and-succeed-to-creditor's-rights right (subd. (d)) — correctly
  described as related but non-independent provisions of the same
  section.
- Confirmed the statute's exclusivity language governs remedies against
  the transferable interest specifically and does not, on its own terms,
  address a creditor's separate ability to reach LLC-owned assets
  directly — flagged as outside this document's scope rather than
  resolved by assumption.

## Honest gap disclosed

Section 17705.02 (governing a transferee's rights generally, cross-
referenced by § 17705.03(b)(3)) was not independently fetched or verified;
this document states only what § 17705.03 itself says about that
cross-reference, not an independent characterization of § 17705.02's
content.

## Method

Fetched Cal. Corp. Code § 17705.03 directly from
`leginfo.legislature.ca.gov` twice independently, confirmed byte-identical.
All 6 citation quotes programmatically confirmed as exact substrings of
the fetched text.

## Verification

- The statute fetched twice independently; confirmed clean on
  integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — every citation in this
  document is a subdivision of the single statute § 17705.03, and each
  clause's `gap` explicitly discloses this; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none — no title reuse at all in this delivery).
- Field names (`companyName`, `memberName`, `stateOfFormation`,
  `authorizedSignerName`, `dateSigned`, `cityState`) independently
  confirmed to match existing corpus convention. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Charging Order — Information Sheet
  (`charging_order_info_sheet`), 7 clauses (5 authority + 2 drafting), in
  the Business Formation category. No new fields.
- Corpus: 1,903 → 1,910 clauses; 243 → 244 documents. First document of
  wave 49.
