# Real Estate, new document: PACE (Property Assessed Clean Energy) Financing — Information Sheet

## Why this document

Second processed item of wave 137 (Real Estate slot #2, 2×2 pattern).
The agent ruled out Property Management Agreement, STR/vacation-rental
disclosure, and Mortgage Loan Disclosure Statement candidates before
landing on PACE. It also ruled out Megan's Law real estate disclosure
(16 corpus hits already covering it) and a full Mello-Roos document
(already covered by two dedicated clauses inside the Residential
Purchase Agreement) — including confirming that one of those existing
Mello-Roos clauses' incidental mention of "contractual assessment
programs" is a false-positive collision, not substantive PACE
coverage, since it only lists PACE's home statute as one of three
lien types a resale notice might cover without quoting any of PACE's
own disclosure/cancellation/underwriting protections. The chosen
topic — California's PACE voluntary contractual assessment financing
framework under Sts. & High. Code Chapter 29 (§§ 5898.10-5899.4) and
the Fin. Code PACE program administrator provisions (§§ 22680-22697)
— was confirmed genuinely open: zero prior corpus hits on any of the
six Streets & Highways Code sections used, either Financial Code
section, "PACE," or "Property Assessed Clean Energy."

## What this document covers

14 clauses: 2 drafting (intro/scope, closing acknowledgment) and 12
authority clauses, citing Sts. & High. Code § 5898.12(b), § 5898.20
(a)(2), § 5898.30 (two sentences), § 5898.15(a)-(b), § 5898.16(b)(1)
(A)-(B), (d)(2), § 5898.17(a) (two citations), (c), (b)(1) (two
citations), and Fin. Code § 22684 (intro, (a), (h), (i)), § 22686:

- **`pacefin_what_is_pace`** — what a PACE assessment is; the
  chapter's legislative-intent language.
- **`pacefin_voluntary_contractual_basis`** — the program's voluntary,
  agency-designated contractual basis.
- **`pacefin_lien_and_tax_collection`** — the assessment becomes a
  lien collected with the property tax bill.
- **`pacefin_five_percent_value_cap`** — the 5% combined-tax-and-
  assessment value cap and its non-voiding effect.
- **`pacefin_right_to_cancel`** — the 3-business-day (5 for seniors
  65+) statutory right to cancel.
- **`pacefin_financing_estimate_disclosure_required`** — the required
  Financing Estimate and Disclosure and its 12-point-print format
  rule.
- **`pacefin_valuation_representation_restriction`** — the bar on
  unsupported property-value-increase representations.
- **`pacefin_statutory_penalty_disclosure`** / **`pacefin_sale_or_
  refinance_payoff_disclosure`** — the required late-payment-penalty
  and sale/refinance-payoff acknowledgments.
- **`pacefin_administrator_eligibility_checks`** — the program
  administrator's pre-contract property-tax-currency eligibility
  check.
- **`pacefin_financing_amount_and_combined_debt_limits`** — the 15%/
  10% financing-amount tiers and 97% combined-debt cap.
- **`pacefin_ability_to_pay_requirement`** — the administrator's
  good-faith ability-to-pay determination.

## Genuine findings

- **A disclosed pending-litigation finding, deliberately not cited as
  a quote**: the what-is-PACE clause's gap discloses that CourtListener
  returned real results (not a rate-limit), including a currently
  pending California Supreme Court matter (Morgan v. Ygrene Energy
  Fund, Inc., S277628), but the agent deliberately did not quote from
  the PDF-formatted opinion because that fell outside the leginfo-
  webpage double-fetch method used for every other citation, and
  because the litigation's outcome was not final.
- **A disclosed unresolved lien-priority question**: the lien-and-tax-
  collection clause's gap notes the statute's cross-reference to
  Government Code lien-priority provisions is not quoted, and that
  PACE-vs-first-mortgage priority has been litigation-adjacent.
- **A disclosed statutory sunset**: the right-to-cancel clause's gap
  discloses that § 5898.16 is scheduled to be repealed and replaced by
  a successor version effective January 1, 2029, and that this
  document reflects only the version in effect as of the checked date.
- **A disclosed multi-version redirect resolved via full-chapter
  fetch**: §§ 5898.16 and 5898.17 redirect to a multi-version
  disambiguation page on a bare-section fetch; both the research agent
  and independent re-verification resolved this using the full-chapter
  `codes_displayText` fetch instead, consistent with the corpus's
  established leginfo-multi-version-disambiguation pattern.

## Honest gap(s) disclosed

This document does not resolve PACE-lien-vs-first-mortgage priority in
every circumstance, does not quote 12 of Fin. Code § 22684's 14
lettered eligibility criteria (only the intro, (a), (h), and (i) are
quoted), does not quote § 22684's cross-referenced valuation
methodology (§ 22685) or the ability-to-pay documentation factors
(§ 22687), does not quote the cancellation-notice-deemed-given
mechanics or the administrator's post-cancellation refund duty, does
not cover commercial/industrial/agricultural PACE financing, and does
not calculate an actual cancellation deadline, financing amount, or
eligibility outcome for any specific transaction.

## Method

Fetched Sts. & High. Code §§ 5898.12, 5898.15, 5898.20, 5898.30
directly, and §§ 5898.16/5898.17 via a full-chapter `codes_displayText`
fetch (after both hit the leginfo multi-version redirect on a bare-
section request), plus Fin. Code §§ 22684 and 22686, each fetched
twice by the research agent with two distinct User-Agent strings via
curl, confirmed byte-identical after whitespace normalization. A
CourtListener search returned 35 results (not rate-limited), including
a pending California Supreme Court case disclosed but not quoted for
the reasons above. All 19 citation instances were programmatically
confirmed by the research agent as exact, contiguous substrings via a
Python script comparing each quote against the corresponding fetched
source file.

Independently re-verified during integration review via a two-
hundred-and-eleventh fetch (a new distinct curl User-Agent string,
"Groundtruth-211thVerify-PACEFinancing/1.0") of all eight sections —
six fetched cleanly on the first attempt; §§ 5898.16/5898.17 required
the same full-chapter-fetch workaround (one connection reset resolved
via the established retry-with-backoff pattern). All 19 citation
instances confirmed clean on direct normalized-whitespace substring
match, with no fallback needed. What a PACE assessment is, its
voluntary contractual basis, the lien-and-tax-collection mechanism,
the 5% value cap, the right-to-cancel rule and senior-citizen
extension, the disclosure and format requirements, the valuation-
representation restriction, the penalty and sale/refinance-payoff
acknowledgments, the administrator's eligibility checks, the
financing-amount and combined-debt limits, and the ability-to-pay
requirement were all independently reconfirmed present in the freshly
fetched text.

## Verification

- All eight cited sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a two-hundred-and-
  eleventh independent fetch during integration review; all 19
  citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `pacefin_` prefix has zero collisions. Ran section-
  number-specific greps for all six Streets & Highways Code sections,
  both Financial Code sections, "PACE," and "Property Assessed Clean
  Energy" — zero hits on all; one hit on "contractual assessment,"
  confirmed a false-positive incidental mention in an existing
  Mello-Roos clause, not substantive PACE coverage.
- Checked every citation's `case` field for emptiness — all 19
  populated with proper citation identifier strings.
- No new field ids required — all nine fields (`propertyAddress`,
  `county`, `parcelNumber`, `ownerName`, `businessName`,
  `workDescription`, `loanAmount`, `dateSigned`, `cityState`) reused
  from the existing corpus, several with document-specific relabeling.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: PACE (Property Assessed Clean Energy) Financing —
  Information Sheet (`pace_financing_info_sheet`), 14 clauses (12
  authority + 2 drafting), in the Real Estate category. No new fields.
- Corpus: 4,527 → 4,541 clauses; 565 → 566 documents. Second processed
  item of wave 137 (Real Estate #2). Note: this document is numbered
  "second processed" in wave 137 sequencing (its sibling C&IP #2
  agent's deliverable on Labor Code § 927 was discarded as a
  duplicate of the already-merged C&IP #1 document; a replacement
  agent for that slot is in progress).
