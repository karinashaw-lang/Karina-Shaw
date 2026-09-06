# Real Estate, new document: California Escrow Law — Information Sheet

## Why this document

Second processed item of wave 100 (Real Estate slot). A scoping pass
confirmed zero prior coverage of the escrow-agent regulatory/licensing
framework itself anywhere in the corpus — distinct from this project's
extensive existing purchase-agreement, disclosure, and deed documents,
which address the substance of a property transaction rather than who
may act as an escrow agent and how escrowed funds must be handled.

## What this document covers

8 clauses: 2 drafting (recitals, acknowledgment) and 6 authority
clauses, citing Financial Code §§ 17003(a), 17004, 17005, 17006(a)-(b),
17006.5, 17200, 17202(a), 17403.2(a), 17403.3(a), 17403.4, 17409(a),
17410(a), 17411, 17414(b), 17700, and 17701(a):

- **`escrowlaw_definitions`** — the statutory definitions of "escrow,"
  "escrow agent," and "licensee."
- **`escrowlaw_licensing_requirement`** — the corporate-license and bond
  requirements for engaging in escrow-agent business.
- **`escrowlaw_exemptions`** — the statutory exemptions for banks,
  attorneys with a bona fide client relationship, title-search
  businesses, and real estate brokers acting in their own exempt
  capacity, including the burden-of-proof rule.
- **`escrowlaw_instructions_mechanics`** — the no-blanks/no-unilateral-
  alteration rules for escrow instructions, delivery requirements, and
  the 10-point-type license-identification disclosure.
- **`escrowlaw_trust_fund_handling`** — deposit-account requirements,
  the judgment-unreachability protection, and the prohibition on
  mislabeling non-trust funds as trust funds.
- **`escrowlaw_penalties`** — the felony misappropriation offense, the
  general willful-violation criminal penalty, and the separate civil
  penalty.

## Genuine findings

- **A significant correction to the research brief's oversimplified
  exemption framing**: the brief assumed a flat "attorneys/banks/title
  companies/brokers are exempt" rule. The agent read the actual text and
  found the attorney and broker exemptions are expressly "personal"
  (non-delegable beyond direct-supervision staff) and unavailable for
  any arrangement performing escrows for more than one business; the
  title-company exemption covers only the specific business of
  preparing abstracts/title searches, not title companies generally.
  Disclosed explicitly rather than repeating the brief's oversimplified
  framing.
- **A disclosed structural nuance most summaries miss**: even an exempt
  preparer (attorney, broker) must still include the § 17403.4
  license-identification disclosure statement on escrow instructions —
  exemption from licensing is not exemption from every statutory
  requirement.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted when checked; the penalties
  clause proceeds statute-only, disclosed explicitly.

## Honest gap(s) disclosed

This document does not detail the Internet-transaction variant of the
"escrow" definition (§ 17003(b)), the escrow corporation's other ongoing
licensing conditions (minimum net worth, staffing, periodic
examination), the substantive content requirements for escrow
instructions beyond form and delivery, the more detailed trust-account-
by-location-and-type rules (§§ 17409(b), 17409.1), or every enforcement
tool available to the Commissioner (e.g., license suspension/revocation,
desist orders) beyond the criminal and civil penalty sections quoted. It
does not determine whether any specific attorney's, broker's, or title
company's actual conduct stays within its exempt role.

## Method

Fetched Financial Code Chapters 1, 2, 3, and 7 of the Escrow Law
(covering §§ 17003-17006.5, 17200, 17202, 17403.2-17403.4,
17409-17411, 17414, and 17700-17701) from `leginfo.legislature.ca.gov`,
each chapter fetched twice by the research agent with two distinct
User-Agent strings, confirmed byte-identical after whitespace
normalization. CourtListener's daily rate limit was already exhausted
when checked; no case law was used, a disclosed and legitimate choice.
All 17 citation instances programmatically confirmed by the research
agent as exact, contiguous substrings.

Independently re-verified during integration review via an
eighty-ninth fetch (a new distinct curl User-Agent string,
"Groundtruth-89thVerify-EscrowLaw/1.0") of all four chapters — all 17
citation instances confirmed clean on direct substring match, no
extraction artifacts encountered.

## Verification

- All four Financial Code chapters fetched twice independently by the
  research agent with distinct User-Agent strings, plus an
  eighty-ninth independent fetch during integration review; all 17
  citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses citing multiple
  subdivisions of the same statutory section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 17 populated
  with proper citation identifier strings.
- No new fields required — all five fields (`propertyAddress`,
  `sellerName`, `buyerName`, `dateSigned`, `cityState`) reused from the
  existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: California Escrow Law — Information Sheet
  (`california_escrow_law_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Real Estate category. No new fields.
- Corpus: 3,341 → 3,349 clauses; 443 → 444 documents. Second processed
  item of wave 100.
