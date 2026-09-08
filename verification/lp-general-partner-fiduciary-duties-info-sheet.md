# Business Formation, new document: General Partner Fiduciary Duties in a California Limited Partnership — Information Sheet

## Why this document

First processed item of wave 141 (Business Formation slot #2, 2×2
pattern). The agent's duplication check confirmed the corpus's three
existing limited-partnership documents (formation, limited-partner
control safe harbor, dissolution and winding-up) address other
subjects under the same statute (Corp. Code §§ 15900 et seq.) but
none states the general partner's fiduciary duties themselves. A
personal duplication spot-check independently confirmed zero prior
corpus hits on "15904.08" or "15901.10," and zero `lpgpduty_` id
collisions.

## What this document covers

10 clauses: 2 drafting (intro, acknowledgment) and 8 authority
clauses, citing Corp. Code § 15904.08(a)-(e) and § 15901.10(b)(5)-(7):

- **`lpgpduty_duty_source`** — the statute's two-duty framework
  (loyalty and care).
- **`lpgpduty_loyalty_accounting`** — the accounting/trustee duty,
  including appropriation of a limited partnership opportunity.
- **`lpgpduty_loyalty_adverse_interest`** — the bar on adverse-
  interest dealing.
- **`lpgpduty_loyalty_noncompete`** — the bar on competing with the
  limited partnership.
- **`lpgpduty_care_standard`** — the gross-negligence duty-of-care
  standard.
- **`lpgpduty_good_faith_fair_dealing`** — the good-faith-and-fair-
  dealing obligation and the self-interest carve-out (two citations).
- **`lpgpduty_agreement_cannot_eliminate_loyalty`** — the bar on
  eliminating the duty of loyalty by agreement, and the two narrower
  things a partnership agreement may do instead (three citations).
- **`lpgpduty_agreement_care_and_good_faith_limits`** — the bar on
  unreasonably reducing the duty of care or eliminating the good-
  faith obligation by agreement (two citations).

## Genuine findings

- **A disclosed negative case-law finding**: no clause cites case law.
  A CourtListener search for California opinions construing
  § 15904.08 or § 15901.10 by name returned no on-point results —
  disclosed honestly in each clause's gap rather than stretched into
  a tangential citation.
- **A disclosed unresolved statutory-interaction question**: the
  good-faith/self-interest clause's gap notes the statute's text does
  not itself resolve how the § 15904.08(e) self-interest carve-out
  interacts with the § 15904.08(b)(2) adverse-interest prohibition
  when conduct arguably satisfies both.
- **A consistently disclosed pattern of partial-subdivision quoting**:
  every authority clause's gap names the specific neighboring
  subdivisions or paragraphs not quoted, including the other thirteen
  restrictions in § 15901.10(b) unrelated to fiduciary duty that this
  document does not address.

## Honest gap(s) disclosed

This document does not define "manifestly unreasonable" (left
undefined by the statute), does not address whether or how these
duties apply to an entity serving as general partner acting through
its own officers or managers, does not address remedies for a
violation of any of these duties, and does not cite any case law
(confirmed genuine absence via CourtListener search).

## Method

Fetched Corp. Code §§ 15904.08 and 15901.10 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings via curl, confirmed byte-
identical. All 12 citation instances were programmatically confirmed
by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via a two-
hundred-and-twenty-sixth fetch (a new distinct curl User-Agent
string, "Groundtruth-226thVerify-LPGeneralPartnerFiduciaryDuties/1.0")
of both statutory sections — both fetched cleanly on the first
attempt. All 12 citation instances confirmed clean on direct exact-
substring and normalized-whitespace match (both passed identically,
no artifacts). The two-duty framework, the three loyalty components,
the gross-negligence care standard, the good-faith obligation and
self-interest carve-out, the loyalty-elimination bar with its two
carve-outs, and the care/good-faith limits were all independently
reconfirmed present in the freshly fetched text.

## Verification

- Both cited statutory sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a two-
  hundred-and-twenty-sixth independent fetch during integration
  review; all 12 citation instances confirmed clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `lpgpduty_` prefix has zero collisions. Ran section-
  number-specific greps for "15904.08" and "15901.10" — zero hits on
  both, confirming genuine novelty.
- Checked every citation's `case` field for emptiness — all 12
  populated with proper citation identifier strings.
- No new field ids required — all six fields (`generalPartnerName`,
  `partnershipName`, `limitedPartnerName`, `authorizedSignerName`,
  `dateSigned`, `cityState`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: General Partner Fiduciary Duties in a California
  Limited Partnership — Information Sheet
  (`lp_general_partner_fiduciary_duties_info_sheet`), 10 clauses (8
  authority + 2 drafting), in the Business Formation category. No new
  fields.
- Corpus: 4,668 → 4,678 clauses; 580 → 581 documents. First processed
  item of wave 141.
