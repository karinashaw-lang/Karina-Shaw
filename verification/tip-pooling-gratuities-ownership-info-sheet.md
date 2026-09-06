# During employment, new document: Tip Pooling and Gratuities Ownership — Information Sheet

## Why this document

First processed item of wave 99 (During employment slot, 2×2 pattern
targeting the corpus's lowest-count categories). A scoping pass confirmed
zero prior coverage of California's gratuity-ownership statute (Labor
Code §§ 350-356) anywhere in the corpus, distinct from the existing
commission-payout clause, which addresses earned-versus-contingent wages
rather than patron-paid gratuities.

## What this document covers

8 clauses: 2 drafting (intro, acknowledgment) and 6 authority clauses,
citing Labor Code §§ 350(e), 351(a)-(b), 353, 354, 355, and 356:

- **`tippooling_gratuity_definition_and_ownership`** — the statutory
  definition of "gratuity" and the sole-property-of-the-employee
  declaration.
- **`tippooling_no_employer_collection`** — the prohibition on an
  employer or agent collecting, deducting, or crediting a gratuity
  against wages owed.
- **`tippooling_creditcard_payment_timing`** — the no-fee-deduction rule
  and next-regular-payday timing rule for credit-card gratuities.
- **`tippooling_recordkeeping`** — the employer's general record-keeping
  duty for gratuities received.
- **`tippooling_pooling_and_service_charge`** — an explicit, honest
  statement of what the statute's own text does *not* say: it never uses
  the phrase "tip pooling," never lists eligible/ineligible employee
  categories, and never defines "service charge" separately from
  "gratuity."
- **`tippooling_enforcement_and_penalties`** — the article's legislative
  purpose declaration (§ 356), agency enforcement (§ 355), and
  misdemeanor penalty (§ 354), grouped together as enforcement/purpose
  provisions rather than substantive tipping rules.

## Genuine findings

- **A significant correction to the research brief's own assumed
  location of a rule**: the brief assumed the credit-card gratuity
  payment-timing rule lived in § 356. The agent read the actual current
  text and found § 356 is the article's legislative-purpose declaration
  (anti-fraud, non-waivable by private agreement) — the payment-timing
  rule is actually in the current text of § 351(a). Disclosed and
  corrected rather than forced to match the brief's assumption.
- **A disclosed, deliberate choice not to overstate the record-keeping
  statute**: § 353 is a general, unamended-since-1937 record-keeping
  duty, not a credit-card-specific itemization requirement — disclosed
  as such rather than assumed to have been modernized alongside § 351's
  credit-card provisions.
- **An honestly disclosed and substantial case-law gap**: CourtListener's
  daily quota (125/day) was exhausted on the agent's first lightweight
  search call, before any case (e.g., the real, developed body of law on
  mandatory tip-pool eligibility and the service-charge/gratuity
  boundary) could be retrieved and verified. Rather than wait out a
  multi-hour reset or state a remembered case-law rule without verifying
  it against the actual opinion text, the agent proceeded statute-only
  and disclosed this explicitly and substantively — flagged as a real,
  important gap, not a stylistic choice.
- **§ 352 confirmed as non-operative**: the agent found no current
  statutory text at § 352 and excluded it rather than fabricate content;
  independently re-confirmed during integration review (the fetched page
  renders no operative section text, consistent with a repealed or
  renumbered section).

## Honest gap(s) disclosed

This document does not state any case-law rule on which non-managerial
employees may be required to share in a mandatory tip pool, or on when a
mandatory service charge is or is not treated as a "gratuity" under this
article — that entire body of case law is disclosed as unverified this
session due to CourtListener quota exhaustion. It does not determine
which specific job titles or roles at any particular business meet the
statutory definition of "agent." It does not address gratuities paid by
electronic or app-based payment methods that are not, by their terms, a
"credit card." It does not classify any specific charge on any specific
bill as a gratuity or otherwise.

## Method

Fetched Labor Code §§ 350, 351, 352, 353, 354, 355, and 356 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical on the
extracted statutory-text content after whitespace normalization.
CourtListener's daily rate limit was already exhausted on the agent's
first lightweight test call; no case law was used, a disclosed and
legitimate choice. All 10 citation instances programmatically confirmed
by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via an
eighty-fourth fetch (a new distinct curl User-Agent string,
"Groundtruth-84thVerify-TipPooling/1.0") of all seven sections — all 10
citation instances confirmed clean on direct substring match, and § 352
independently reconfirmed to render no operative statutory text.

## Verification

- All seven Labor Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus an
  eighty-fourth independent fetch during integration review; all 10
  citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses citing multiple
  subdivisions of the same statutory section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 10 populated
  with proper citation identifier strings.
- No new fields required — all four fields (`companyName`,
  `employeeName`, `dateSigned`, `cityState`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Tip Pooling and Gratuities Ownership — Information Sheet
  (`tip_pooling_gratuities_ownership_info_sheet`), 8 clauses (6 authority
  + 2 drafting), in the During employment category. No new fields.
- Corpus: 3,304 → 3,312 clauses; 438 → 439 documents. First processed
  item of wave 99.
