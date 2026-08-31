# Granularity pass — Business Formation category

## Why this pass

Continuing the same instruction applied to the Residential Lease Agreement: go back
over what's already shipped and check the *complete* text of each already-cited
statute or regulation — not just the fragment originally quoted — for real, specific
detail that a general-sounding paraphrase left out. This pass covers all five
Business Formation documents: Buy-Sell Agreement, S Corporation Election Overview,
Corporate Bylaws, and both LLC Operating Agreements.

## Buy-Sell Agreement

- **Cal. Corp. Code § 17705.02 (LLC transfers)**: the shipped clause explained what
  happens to a transferee's rights on a bare transfer, but never stated the actual
  mechanism that makes a right-of-first-refusal restriction enforceable against an
  outside transferee: a transfer that violates a restriction *written into the
  operating agreement* is ineffective against anyone with notice of it, and the LLC
  need not recognize a transfer at all until it has notice. **New clause**
  `buysell_llc_restriction_enforceable` — states both points, with a concrete
  practical implication: this agreement needs to be incorporated into the operating
  agreement itself, not left standalone, to have real teeth.
- **Cal. Corp. Code § 418 (corporate transfer restrictions)**: reading past the
  general disclosure-and-enforceability rule already cited turned up a specific,
  separate regime for close corporations — a required legend capping the number of
  shareholders of record, with any transfer past that cap being void outright, not
  just unenforceable against an unknowing buyer. **New clause**
  `buysell_corp_close_corp_cap`, scoped explicitly to apply only if the corporation
  has actually elected close corporation status.

## S Corporation Election Overview

- **26 U.S.C. § 1361 (eligibility)**: the shipped clause's gap field already
  asserted, in prose, that family members count as one shareholder toward the
  100-shareholder cap — without a citation backing that specific claim. Re-reading
  the statute's own family-attribution rule turned that assertion into a properly
  cited one, including the six-generation limit on how far the family line extends.
  **New clause** `scorp_family_attribution`.
- Same statute, reading further: two structures common in small S corporations —
  voting/non-voting common stock, and straight-debt shareholder loans — are
  expressly carved out of the one-class-of-stock eligibility rule. Neither was
  mentioned before. **New clause** `scorp_second_class_exceptions`.

## Corporate Bylaws

- **Cal. Corp. Code § 602 (shareholder meetings)**: the shipped quote for the
  quorum rule was itself cut off mid-sentence, dropping the fact that ordinary
  corporations (not close corporations) face a *ceiling* on quorum, not just a
  floor — bylaws can't require more than a majority any more than they can require
  less than a third. Fixed by extending that citation's quote to the sentence's
  actual end. Reading on turned up a second, entirely unaddressed mechanism: once a
  quorum is present, a walkout that drops attendance below quorum doesn't end the
  meeting's authority to act. **New clause**
  `bylaws_shareholder_meeting_continuation`.
- **Cal. Corp. Code § 307 (board meetings)**: the shipped clause covered quorum but
  said nothing about how a board meeting actually gets called or noticed — a real
  gap for a document titled "bylaws." The statute sets a real floor (special
  meetings need 4 days' mail notice or 48 hours' notice by phone/electronic
  delivery, and bylaws can't waive it) alongside a practical allowance (remote
  participation by phone or video counts as being present). **New clause**
  `bylaws_board_meeting_notice`.
- **Cal. Corp. Code § 317 (indemnification)**: the shipped clause framed
  indemnification as entirely discretionary, which is accurate as far as it goes —
  but the statute has a real mandatory carve-out (indemnification is required, not
  optional, when the agent succeeds on the merits) and a separate, commonly-used
  advancement-of-expenses mechanism (paying defense costs as incurred, against a
  repayment undertaking) that the original clause never mentioned. **New clauses**
  `bylaws_indemnification_mandatory` and `bylaws_indemnification_advancement`.

## Both LLC Operating Agreements

- **26 C.F.R. § 301.7701-3 (check-the-box)**: both LLC documents' tax-classification
  clauses already stated the default treatment and noted, in the gap field, that a
  different classification could be elected "by filing the appropriate IRS form" —
  without saying what that actually requires. The regulation's own election
  mechanics section states real, specific constraints: Form 8832, an effective-date
  window that can't reach more than 75 days into the past or 12 months into the
  future, and a 60-month lock-in against re-electing again. **New clause**
  `llc_tax_election_mechanics` — generic to any LLC (references only
  `{{companyName}}`), so it was added once and wired into both the single-member and
  multi-member documents rather than duplicated.

## Verification

- All 14 new/expanded quotes checked against a second, independent fetch before
  writing, using the same cached HTML already fetched for the original documents
  where available, plus fresh independent re-fetches of each statute/regulation.
- One quote from the first pass (§602(a)'s quorum ceiling) was caught mid-edit as a
  quote that itself ended mid-sentence — the exact defect this pass exists to catch,
  found in the corpus's own prior work rather than only in new material — and fixed
  by extending the quote to its actual sentence boundary rather than leaving the
  truncation in place.
- Every clause in every touched document's `clauseOrder` re-checked for `{{` leakage
  (title/gap/citation-quote fields) and for duplicate titles within the document —
  clean across the full 38-document, 170-clause corpus (up from 161).
- Full-corpus regression run after all five documents' edits.

## Net changes

- Buy-Sell Agreement: 8 → 10 clauses.
- S Corporation Election Overview: 5 → 7 clauses.
- Corporate Bylaws: 8 → 12 clauses.
- LLC Operating Agreement (single-member): 8 → 9 clauses.
- LLC Operating Agreement (multi-member): 8 → 9 clauses.
- Corpus total: 161 → 170 clauses.

## Scope note

This completes the granularity pass across both documents built so far in Real
Estate and all five documents in Business Formation. The 32 Employment documents
haven't been touched by this pass yet and are the remaining, much larger body of
work under the same standing instruction.
