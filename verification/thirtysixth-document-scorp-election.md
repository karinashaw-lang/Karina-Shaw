# Thirty-sixth document — S Corporation Election Overview

## Why this one

Closes a loop flagged twice already: both `llc_tax_classification` and
`llc_mm_tax_classification` disclosed, in their gaps, that a business could
"elect to be taxed as a corporation, or potentially as an S corporation through a
separate election" without stating what that actually requires. This document is
that follow-up. Distinct from the LLC and Bylaws documents in one important way:
S corporation status is entirely a matter of *federal* tax law (26 U.S.C. Subchapter
S), not state entity law — so unlike the Bylaws document, there's no "one state's
statute, used as evidence" disclosure needed here; the citations apply nationwide.

## Research

Fetched 26 U.S.C. §1361 (definitions, including the "small business corporation"
eligibility test) and §1362 (election, revocation, termination) fresh from Cornell
LII.

## A recurring extraction artifact, caught before writing this time

While preparing the eligibility quote, the raw HTML wraps several defined terms
(e.g. "small business corporation", "estate") in `<a class="colorbox-load
definedterm">` tags. This project's page HTML-to-text extraction script inserts a
space at every tag boundary it strips — the same artifact class first diagnosed
several documents ago with SOX's "78l" rendering as "78 l". Rather than eyeball each
quote individually this time, wrote a systematic fix: flatten the HTML, then
collapse any space that lands immediately before punctuation or just inside a
quote mark. Confirmed the corrected text against the raw HTML at each defined-term
boundary before finalizing any quote — no clause was written with the artifact
spacing intact.

## The five clauses

- `scorp_eligibility` (authority) — the small business corporation test (domestic
  corporation, not an ineligible type, ≤100 shareholders, individual/certain-estate-
  or-trust shareholders only, no nonresident alien shareholders, one class of
  stock), citing §1361(b)(1). Gap discloses the family-shareholder-aggregation rule
  (all members of one family count as a single shareholder for the 100 count) — a
  real, non-obvious fact that changes what "100 shareholders" actually means in
  practice — and explicitly declines to say which businesses would benefit from S
  corp status, since that depends on facts this document doesn't collect.
- `scorp_consent` (authority) — the unanimous shareholder consent requirement,
  citing §1362(a)(2). Gap makes explicit this is all-or-nothing.
- `scorp_deadline` (authority) — the election timing rule, citing §1362(b)(1). Gap
  discloses the IRS's late-election relief authority without overstating it as
  automatic.
- `scorp_filing` (drafting) — practical Form 2553 filing mechanics, and an explicit
  note that this is a federal filing distinct from anything filed with the state.
- `scorp_ack` (drafting) — shareholder consent signature block.

## A title collision caught before this shipped

Initially titled both `scorp_consent` (authority) and the closing signature clause
"Shareholder Consent" — the same mistake caught and fixed on the Corporate Bylaws
document two documents ago, recurring because the two clauses are, in fact, about
the same underlying requirement. Retitled the signature clause "Consent
Signatures" before running the driver script, rather than repeating the pattern of
catching it only after screenshotting.

## Verification

- All three citations checked against a second, independent fetch, using the
  systematic artifact-correction method described above — exact match.
- Every `gap`/`title` field grepped for `{{` — clean.
- Headless Playwright walkthrough: badge count matches (3), zero leftover
  placeholders, zero console errors.
- Full 36-document regression run clean.

## Net changes

- `data/clauses.json`: +5 clauses, corpus now 141 clauses.
- `data/documents.json`: +1 document (`s_corp_election_overview`), corpus now 36
  documents.
