# Real Estate, new document: Home Equity Sales Contract Act — Information Sheet

## Why this document

Third processed item of wave 102 (Real Estate slot). A scoping pass and
clause-level duplication check confirmed zero prior coverage of Civil
Code §§ 1695-1695.17 anywhere in the corpus — a substring search for
"1695" had initially returned false positives against unrelated
Corp. Code section numbers (§§ 16951, 16953, 16957), independently
reconfirmed as false positives during scoping. Distinct from the
corpus's existing lender-side Notice of Default / Nonjudicial
Foreclosure Process and Homeowner Bill of Rights documents, which
describe an entirely different transaction (a lender foreclosing on its
own borrower) rather than a private equity purchaser buying directly
from a distressed owner.

## What this document covers

8 clauses: 2 drafting (intro/scope distinction, closing acknowledgment)
and 6 authority clauses, citing Civil Code §§ 1695.1(a)-(c), (e),
1695.2, 1695.3, 1695.4(a)-(c), 1695.5(b)-(c), 1695.6(b)-(c), 1695.7,
1695.8, 1695.13, and 1695.14(a):

- **`hesca_definitions`** — the statutory definitions of "equity
  purchaser" (with its exclusions), "residence in foreclosure" (requiring
  an actual recorded notice of default), and "equity seller."
- **`hesca_contract_form_and_required_terms`** — the required 10-point
  bold type, language-matching, and required contract content.
- **`hesca_cancellation_right`** — the seller's independent statutory
  cancellation right and how cancellation is effected.
- **`hesca_notice_of_cancellation_form`** — the required attached
  cancellation-notice form and its content.
- **`hesca_prohibited_practices`** — conduct barred during the
  cancellation period and the separate, time-unlimited "unconscionable
  advantage" prohibition.
- **`hesca_remedies_and_penalties`** — civil remedies, exemplary
  damages/civil penalty, post-sale rescission, and criminal penalties.

## Genuine findings

- **A significant correction to the research brief's assumed
  definition**: the brief assumed "facing foreclosure informally" was
  enough to trigger the Act. The agent read the actual text and found
  "residence in foreclosure" requires an *actual recorded* notice of
  default against a one-to-four-unit, owner-occupied dwelling — a
  narrower trigger than informal financial distress.
- **A corrected cancellation-period assumption**: the brief assumed a
  round 3-day cancellation period; the agent found the actual period is
  5 business days (ending earlier if a trustee's sale is scheduled
  sooner), and identified the six statutory exclusions from "equity
  purchaser" status (personal-residence buyers, deed-in-lieu, trustee's-
  sale buyers, court-ordered sales, statutory sales, and blood
  relatives/spouses) — meaning not every investor-buyer is covered.
- **A disclosed extraction artifact handled correctly**: § 1695.5(a)'s
  official HTML contains an invisible soft-hyphen character splitting
  the word "without" into "with­out." Rather than quote text containing
  that stray character, the agent paraphrased that specific subdivision
  and quoted only the unaffected subdivisions (b) and (c) verbatim —
  independently confirmed during integration review by inspecting the
  raw fetched bytes.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's first
  lightweight test call; every authority clause proceeds on the
  statute's own text alone, disclosed explicitly, including for the
  undefined "unconscionable advantage" standard in § 1695.13.

## Honest gap(s) disclosed

This document does not determine whether any specific property or
transaction actually satisfies the Act's defined terms (recorded notice
of default, owner-occupancy, exclusion eligibility). It does not
reproduce every one of § 1695.3's eight lettered required-term
subdivisions verbatim, or § 1695.5's other cancellation-form
requirements beyond what's quoted. It does not calculate a specific
cancellation deadline for any actual contract, determine whether any
specific conduct meets the "unconscionable advantage" standard, or
address how the civil remedies interact with the separate criminal
penalty in § 1695.8.

## Method

Fetched all 18 sections of Civil Code Chapter 2.5 (Home Equity Sales
Contracts, §§ 1695-1695.17) from `leginfo.legislature.ca.gov`, each
fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical after whitespace normalization (the
11 quoted sections independently re-verified in the second pass).
CourtListener's daily rate limit was already exhausted on the agent's
first lightweight test call; no case law was used, a disclosed and
legitimate choice. All 15 citation instances programmatically confirmed
by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
ninety-eighth fetch (a new distinct curl User-Agent string,
"Groundtruth-98thVerify-HESCA/1.0") of all ten cited sections — all 15
citation instances confirmed clean on direct substring match, and the
soft-hyphen artifact in § 1695.5(a) independently confirmed by direct
inspection of the raw fetched bytes ("with­out").

## Verification

- All ten cited Civil Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a ninety-eighth
  independent fetch during integration review; all 15 citation
  instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses citing multiple
  subdivisions of the same statutory section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either), and independently reconfirmed the scoping-stage
  finding that prior "1695" substring hits were false positives against
  unrelated Corp. Code section numbers.
- Checked every citation's `case` field for emptiness — all 15
  populated with proper citation identifier strings.
- No new fields required — all six fields (`propertyAddress`,
  `sellerName`, `buyerName`, `dateSigned`, `cityState`,
  `noticeOfDefaultRecordingDate`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Home Equity Sales Contract Act — Information Sheet
  (`home_equity_sales_contract_act_info_sheet`), 8 clauses (6 authority
  + 2 drafting), in the Real Estate category. No new fields.
- Corpus: 3,410 → 3,418 clauses; 452 → 453 documents. Third processed
  item of wave 102.
