# Thirty-seventh document — Buy-Sell Agreement

## Why this one

Completes the Business Formation category for now. Flagged as an open gap after
the Corporate Bylaws document shipped: none of the three governance documents
(both LLC operating agreements, the bylaws) address what actually happens to an
owner's interest on death, disability, divorce, or departure. This document is
designed as a rider — usable alongside either an LLC operating agreement or
corporate bylaws — rather than tied to one entity type, since buy-sell provisions
are commonly a standalone agreement in practice regardless of entity form.

## Research

Two new statutory anchors, both freshly fetched from California's legislature
site (the same source already proven reliable across five earlier documents):

- **Cal. Corp. Code § 17705.02** — what actually happens, by default, when an LLC
  membership interest transfers without an agreement governing it: the transfer
  doesn't dissolve the company, and the person who receives the interest gets only
  economic rights (distributions), not a vote or management role. This is the real
  legal reason a buy-sell agreement matters for an LLC — without one, the company
  can end up with an economically-interested but non-participating co-owner rather
  than a clean buyout.
- **Cal. Corp. Code § 418** — the formal requirement for a corporate share transfer
  restriction to bind someone without actual knowledge of it: the restriction has
  to be conspicuously noted on the stock certificate (or the written statement that
  replaces it), or it isn't enforceable against an unaware transferee. A buy-sell
  agreement or bylaws provision that never makes it onto the actual shares risks
  being toothless against exactly the kind of unplanned transfer it's meant to
  prevent.

All five quotes checked against a second, independent fetch before writing.

## The eight clauses

- `buysell_purpose` (drafting) — framing statement.
- `buysell_triggering_events` (drafting) — checkbox list (death, disability,
  divorce, voluntary/involuntary departure, bankruptcy, outside offer).
- `buysell_row_first_refusal` (drafting) — right-of-first-refusal mechanics for a
  voluntary sale to an outside buyer.
- `buysell_llc_default` (authority) — the LLC default-transfer-rights research
  above, citing §17705.02(a)(2), (a)(3), and (b). Gap frames the default as
  cutting both ways (reassuring against an unplanned handover of control, but a
  real risk of an unwanted passive co-owner) rather than one-sidedly alarming.
- `buysell_corp_restriction_notice` (authority) — the share-certificate notice
  requirement, citing §418(a)(1) and (b).
- `buysell_valuation`, `buysell_funding` (drafting) — checkbox-driven purchase
  price and payment mechanics, matching the established checkbox convention.
- `buysell_ack` (drafting) — repeating signature-line block for all current
  owners, same pattern as the multi-member LLC document.

## Verification

- All five citations checked against a second, independent fetch — exact match.
- Every `gap`/`title` field grepped for `{{` — clean. Explicitly checked for the
  title-collision mistake made on the two previous documents (Bylaws, S Corp
  Election) — none of the eight titles repeat.
- Headless Playwright walkthrough: badge count matches (2), zero leftover
  placeholders, zero console errors.
- Full 37-document regression run clean.

## Net changes

- `data/clauses.json`: +8 clauses, corpus now 149 clauses.
- `data/documents.json`: +1 document (`buy_sell_agreement`), corpus now 37
  documents.

## Status

This closes out Business Formation for now — five documents (Single-Member LLC,
Multi-Member LLC, Corporate Bylaws, S Corp Election, Buy-Sell Agreement) covering
formation, governance, tax election, and exit planning across both LLC and
corporate entity types.
