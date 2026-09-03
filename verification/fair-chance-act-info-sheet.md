# Hiring, new document: California Fair Chance Act ("Ban the Box") — Information Sheet

## Why this document

"Fair Chance Act" and "ban the box" previously appeared in the corpus
only as generic passing references inside the existing Background Check
Disclosure & Authorization and Background Check Adverse Action Notice
documents — neither independently fetched or verified Gov. Code § 12952
itself. This document is the first dedicated, independently-verified
treatment of the pre-offer inquiry restriction and its own
individualized-assessment tie-in.

## What this document covers

8 clauses: 2 drafting (purpose declaration, signature/certification) and
6 authority clauses, all citing Cal. Gov. Code § 12952:

- **`fairchance_pre_offer_prohibition`** (subd. (a)(1)-(2)) — the core
  prohibition on any pre-conditional-offer conviction-history inquiry.
- **`fairchance_background_check_content_restrictions`** (subd. (a)(3)) —
  what a background check may not consider (non-conviction arrests,
  diversion programs, sealed/expunged/pardoned convictions).
- **`fairchance_background_check_not_banned`** (subd. (b)) — confirms
  background checks aren't banned outright, only restricted.
- **`fairchance_covered_employers_and_exemptions`** (subd. (d)(1)-(4)) —
  the full four-category statutory exemption list, including the
  Securities Exchange Act self-regulatory-organization clause.
- **`fairchance_definitions`** (subd. (f)) — the statutory definitions of
  "conviction" and "conviction history."
- **`fairchance_postoffer_process_reference`** (subd. (c)(4)) — a
  bridging clause confirming the individualized-assessment process exists
  post-offer, independently verifying the one paragraph the companion
  Adverse Action document doesn't separately quote.

## Genuine corrections and findings

- **Deliberately complementary, not duplicative**: the existing Adverse
  Action document already independently verifies § 12952(c)(1)-(3) and
  (c)(5) (the individualized-assessment factors, notice content, and
  response window); this document verifies everything that document
  doesn't — the actual pre-offer "ban the box" mechanic (subd. (a)),
  substantive background-check content restrictions (subd. (a)(3)), and
  the full exemption list.
- **Directly fills a gap the companion document flagged but didn't
  catalog**: the Adverse Action document's own `gap` field noted the
  five-or-more-employee threshold is "subject to statutory exceptions...
  that this document doesn't catalog" — this document supplies that full
  catalog (subd. (d)(1)-(4)).
- Confirmed a background check itself is not prohibited by the statute —
  only its timing and content are restricted.
- Confirmed the statute doesn't define "conditional offer of employment"
  or address involuntary pre-offer discovery of conviction history —
  flagged as genuine textual silence rather than resolved by assumption.

## Honest gap disclosed

Labor Code § 432.7 (cross-referenced by § 12952(a)(3) and (f) for the
non-conviction-arrest exception and the core "conviction" definition) was
not independently fetched or verified; this document states only what
§ 12952 itself says about that cross-reference. The statute's own
"employee" count for the five-employee threshold (part-time, out-of-state,
temp-staffing) is not resolved.

## Method

Fetched Cal. Gov. Code § 12952 directly from `leginfo.legislature.ca.gov`
twice, using two distinct User-Agent strings and Accept-Language headers
in separate curl requests — confirmed byte-identical after whitespace
normalization. All 7 citation quotes programmatically confirmed as exact
substrings of the confirmed text.

## Verification

- The statute fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — every citation in this
  document is a subdivision of the single statute § 12952, and each
  clause's `gap` explicitly discloses this; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  accepted generic drafting-title reuses ("Purpose of This Information
  Sheet," "Signature and Certification").
- Field names (`companyName`, `employeeName`, `jobTitle`) independently
  confirmed to match existing corpus convention. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: California Fair Chance Act ("Ban the Box") — Information
  Sheet (`fair_chance_act_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Hiring category. No new fields.
- Corpus: 1,955 → 1,963 clauses; 250 → 251 documents. Closes wave 50
  (California Family Rights Act, Blacklisting a Former Employee,
  California Shine the Light Law, California Fair Chance Act).
