# Real Estate, new document: California Real Estate Withholding — Information Sheet

## Why this document

Third processed item of wave 122 (Real Estate slot). The agent ruled
out several candidates via section-number greps (documentary transfer
tax §§ already covered by the deed clauses; §1950.7 already covered by
commercial-lease security-deposit clauses; the Megan's Law notice
already covered across four documents; §1161b exhaustively covered by
the existing post-foreclosure 90-day notice document). The chosen topic
— Rev. & Tax. Code §18662's real estate withholding mechanism — was
confirmed genuinely open: only one existing clause
(`exch1031_ca_reporting`, in the corpus's 1031-exchange document)
mentions §18662, and only in its own `gap` field, explicitly disclosing
that the section "is not part of this §1031-specific tracking mechanism
and was not researched for this document." Personally reconfirmed via
corpus search: zero substantive prior coverage of §18662 or §18668
anywhere in the corpus, and confirmed the one existing mention is
exactly that disclosed non-research note, not genuine coverage.

## What this document covers

10 clauses: 2 drafting (recitals, acknowledgment) and 8 authority
clauses, citing Rev. & Tax. Code §§ 18662(e)(1), (e)(2)(A)-(B),
(e)(3)(A)-(B), (e)(3)(D)-(D)(i), (e)(3)(E)(i), (e)(4)(A), (e)(5),
(e)(6), (e)(7)(D), and 18668(d), (e)(1), (e)(3):

- **`rewhold_general_rule`** — the default 3⅓% withholding rate and
  who is covered.
- **`rewhold_ca_real_property_defined`** — the "California real
  property interest" and "sales price" definitions.
- **`rewhold_threshold_and_notice`** — the $100,000 sales-price
  threshold and the written-notice precondition.
- **`rewhold_seller_certification_exemptions`** — the seller
  certification grounds that excuse withholding.
- **`rewhold_alternative_certified_amount`** — the seller's election to
  certify a gain-based withholding amount instead of 3⅓% of price.
- **`rewhold_reep_role_and_fee_cap`** — the real estate escrow person's
  role and the $45 fee cap on withholding-related assistance.
- **`rewhold_installment_sale_and_remittance`** — installment-sale
  treatment and remittance timing.
- **`rewhold_failure_to_withhold_liability`** — buyer and escrow-person
  liability for failing to withhold or notify.

## Genuine findings

- **A disclosed HTML-extraction artifact, explained rather than
  silently corrected**: the statute renders "3⅓" as stacked HTML
  markup that collapses to the literal string "31/3" in extracted plain
  text; the `rewhold_general_rule` clause's gap explains this explicitly
  and clarifies the actual rate is 3⅓ percent, not "31/3 percent" as a
  number.
- **A disclosed, deliberate choice not to independently verify
  cross-referenced federal provisions**: multiple gap fields disclose
  that IRC §§121, 897(c)(1)(A)(i), 1031, and 1033 were cited only by the
  statute's own cross-reference, not independently fetched or verified.
- **A disclosed, deliberate choice not to verify Franchise Tax Board
  administrative materials**: the gap field for the gain-based election
  clause discloses that the FTB's prescribed certification form and
  online gain-estimation tool were not verified against ftb.ca.gov,
  since only leginfo.legislature.ca.gov statutory text was fetched.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not independently verify IRC §§121, 897(c)(1)(A)(i),
1031, 1033, or 453(b), does not restate the 1031-exchange certification
ground's internal 180-day/10-day FTB notification sub-conditions, does
not calculate any specific transferor's recognized gain or resulting
withholding amount, does not verify FTB's own prescribed forms or
online tools, does not address the broader §18668(a)-(c) liability rule
for non-real-property withholding categories, and does not address
federal FIRPTA withholding (IRC §1445) at all — this document is
strictly the California-specific mechanism.

## Method

Fetched Rev. & Tax. Code §§18662 and 18668 from leginfo.legislature.ca.gov,
each fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical after isolating the statutory content
fragment (raw HTML differed only in a per-request debug-URL timestamp
and hidden ViewState session token). CourtListener's daily rate limit
was already exhausted on the agent's test call; no case law was used, a
disclosed and legitimate choice. All 15 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
one-hundred-and-sixty-second fetch (a new distinct curl User-Agent
string, "Groundtruth-162ndVerify-RealEstateWithholding/1.0") — all 15
citation instances confirmed clean on normalized-whitespace substring
match; 4 of the 15 required the standard whitespace-stripped fallback
check (the familiar subdivision-marker-spacing artifact), confirmed
benign. The unusually short §18662(e)(1) quote ("(e) (1) This
subdivision applies to...") was specifically spot-checked in context
during integration review and confirmed to be the statute's own
short introductory sentence before its list of covered persons, not a
truncation artifact. The 3⅓% default rate, the $100,000 threshold, the
certification grounds, the $45 fee cap, and the buyer/escrow-person
liability amounts were all independently reconfirmed present in the
freshly fetched text.

## Verification

- Both primary sources fetched twice independently by the research
  agent with distinct User-Agent strings, plus a one-hundred-and-sixty-
  second independent fetch during integration review; all 15 citation
  instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `rewhold_` prefix has zero collisions. Independently
  confirmed the corpus's single prior §18662 mention is a disclosed
  non-research note in an existing 1031-exchange clause's gap field,
  not genuine substantive coverage.
- Checked every citation's `case` field for emptiness — all 15
  populated with proper citation identifier strings.
- No new fields required — all five fields (`propertyAddress`,
  `sellerName`, `buyerName`, `dateSigned`, `cityState`) reused from the
  existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: California Real Estate Withholding — Information Sheet
  (`california_real_estate_withholding_info_sheet`), 10 clauses (8
  authority + 2 drafting), in the Real Estate category. No new fields.
- Corpus: 4,004 → 4,014 clauses; 516 → 517 documents. Third processed
  item of wave 122.
