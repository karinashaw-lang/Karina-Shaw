# 9-item checklist audit — Business Formation & Real Estate category

## Why this audit

Direct continuation of "do the audit everywhere": the Employment category
already went through a fresh, independent 9-item re-audit (see
`nine-item-audit-employment-category.md`). This pass covers the rest of the
corpus — the 6 documents built more recently in this session (both LLC
Operating Agreements, Corporate Bylaws, S Corporation Election, Buy-Sell
Agreement, Residential Lease) — which had the checklist applied at creation
time and multiple granularity passes, but not this same independent
re-check.

## Method

39 unique authority clauses across the 6 documents, split into four parallel
research passes (LLC documents; Corporate Bylaws; S Corp + Buy-Sell;
Residential Lease), each re-fetching every citation fresh and walking all 9
items. Unlike Employment, this category cites no case law at all — every
citation is either California Corporations/Civil Code (leginfo.legislature.ca.gov)
or federal tax law (26 U.S.C./26 C.F.R. via Cornell LII) — so the CourtListener
MCP disconnection earlier in this session didn't affect this audit.

A key adaptation for this category: state-law citations here are the
*correct, deliberate* pattern (LLCs, corporations, and leases are creatures
of state law with no federal counterpart), unlike Employment where a named
state inside a federal-law clause is a defect. The check instead was whether
each clause's `gap` field explicitly discloses "one state's statute... not a
claim about which state's law governs" — nearly all already did.

## What the audit found

**The dominant, corpus-wide finding**: of 39 clauses, the overwhelming
majority cite only a single statutory section — either one citation, or
multiple citations to different subsections of the *same* section (which
this project's own established standard, set in the Employment audit,
treats as one source, not two). Most of these had never disclosed that
single-source reliance in their `gap` field, unlike the handful of clauses
that already did. **23 clauses** got an honest disclosure sentence added.

**Real, substantive defects** — quotes truncated at exactly the point a real
qualifying exception began, or claims made without a supporting citation:

- **`bylaws_shareholder_meetings`**: its own already-quoted citation states
  the quorum floor is 20% (not one-third) for a mutual water company — the
  body ignored a fact already sitting inside its own quote. Fixed.
- **`bylaws_cumulative_voting`**: the § 708(a) quote was truncated right
  after its own opening qualifier, dropping "Except as provided in Sections
  301.5 and 708.5" — and a separate mutual-water-company carve-out in
  § 708(d) went unmentioned. Fixed: quote extended, body/gap now flag both
  exceptions.
- **`bylaws_director_removal`**: same pattern — the quoted text already said
  "Except for a corporation to which paragraph (3) is applicable," but the
  body presented the removal-protection formula as universal, never
  mentioning the classified-board corporation's different test. Fixed: added
  § 303(a)(3) as a third citation, quoting that different formula in full.
- **`bylaws_board_meetings`**: the § 307(a)(8) quote stopped right before
  ", subject to the provisions of Section 310 and subdivision (e) of Section
  317" — dropping a real qualifier (interested-director transactions and
  indemnification authorizations aren't simply decided by plain majority).
  Fixed: quote extended, body now flags the exception generically.
- **`scorp_family_attribution`**: the body's six-generation-limit claim had
  no supporting quote anywhere in the clause — the citation's own label
  claimed to cover it, but the quote field stopped one sentence short. Fixed:
  added the actual six-generation quote as its own citation.
- **`scorp_second_class_exceptions`**: the body's detailed "straight debt"
  definition was never actually quoted (only the one-line exclusion was),
  and the body itself omitted one of the definition's three real elements
  ("no convertibility into stock") entirely. Fixed: added the full
  definition as a citation, corrected the body to include the missing
  element, and removed advisory language ("should be checked... before
  assuming") from the gap.
- **`scorp_revocation`** and **`scorp_termination_passive_income`**: each
  made a specific factual claim (a revocation's prospective-date option; a
  termination's effective-date rule) that wasn't backed by any quoted text.
  Fixed: added the missing citations for both.
- **`scorp_after_termination`**: two of the three inadvertent-relief
  conditions described in the body were never quoted, and the first
  citation's own label ("the conditions," plural) overclaimed what its
  single quote covered. Fixed: added citations for both missing conditions.
- **`lease_security_deposit`**: the small-landlord two-month cap has a real
  exception — it doesn't apply if the prospective tenant is a service
  member — that the body never disclosed. Fixed: added the citation and a
  body qualifier.
- **`lease_security_deposit_inspection`**: the pre-move-out inspection right
  described doesn't exist at all when the tenancy ends through certain
  for-cause unlawful-detainer terminations (nonpayment, lease breach, waste)
  — an entire voiding condition the clause never mentioned. Fixed: added the
  citation.
- **`lease_security_deposit_photos`**: the gap framed skipping the photos as
  a soft best-practice with no real consequence ("doesn't automatically lose
  the right to make deductions"). In fact the statute makes providing those
  same photos a mandatory part of the itemized-deduction documentation for
  any charge over $125. Fixed: added the citation, corrected the framing.
- **`lease_entry_notice`**: the body stated written notice is required for
  entry "except in an emergency or abandonment" — but the statute has three
  more real exceptions the clause's own citation quote pointed to and then
  cut off ("Except as provided in subdivision (e), or as provided in
  paragraph (2) or (3)..."): no notice at all if the tenant is present and
  consents; oral notice for showing the unit to a buyer (given 120 days'
  prior written notice the property is for sale); and an oral agreement for
  a repair visit within the coming week. Fixed: extended the truncated
  quote, added three new citations, and rewrote the body to state all three
  real exceptions.
- **`buysell_llc_restriction_enforceable`**: the body claimed the company
  needn't recognize a transfer "for any purpose," which is broader than
  what the cited statute actually says ("need not give effect to a
  transferee's rights *under this section*"). Fixed: narrowed the claim to
  match the citation's actual scope.
- **`buysell_corp_close_corp_cap`**: the gap ended with "Check the articles
  of incorporation... before assuming this applies" — directive language.
  Fixed: reworded to state where the fact is found, without instructing the
  reader what to do.
- **`llc_mm_dissolution_triggers`**: one citation used an ellipsis that
  elided real intervening statutory text (the sole-member-death carve-out),
  so the quote wasn't a continuous verbatim excerpt even though both halves
  independently checked out. Fixed: split into two clean citations, each a
  complete, un-elided quote.
- **`llc_mm_distributions`**: the only clause in the LLC batch whose gap
  disclosed single-source reliance but never added the jurisdiction
  disclaimer every sibling clause carries. Fixed.

## Verification

- All new/added quotes checked against a second, independent fetch before
  writing.
- checkedDate left as previously set for clauses that received only a
  disclosure-sentence addition (no substantive change to what was verified);
  updated where a citation or quote actually changed.
- Every clause's `gap`/`title`/citation `quote` fields re-checked for `{{`
  leakage and duplicate titles across the full 38-document corpus after all
  edits — clean.
- Full-corpus regression run after all fixes.

## Net changes

- No new clauses added and no clauses removed — corpus remains 181 clauses
  across 38 documents. This pass corrected and strengthened existing
  clauses: extended 4 truncated quotes to their real qualifying text, added
  16 new citations across 10 clauses to back claims that weren't previously
  cited, and added a single-source disclosure sentence to 23 clauses.
- Combined with the Employment audit, every authority clause in the corpus
  has now been through one fresh, independent 9-item re-check in this
  session — this completes "the audit everywhere."
