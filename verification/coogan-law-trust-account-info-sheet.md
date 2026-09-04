# Hiring, new document: Coogan Law Trust Account (Minor's Entertainment Earnings) — Information Sheet

## Why this document

Confirmed by grep that "coogan," "child performer," and "trust
account" (in this specific sense) had zero hits anywhere. Read the
California Talent Agencies Act and Minor Work Permits documents in
full — neither addresses the trust-account requirement for a minor's
entertainment earnings. First of wave 74's four documents (1×4:
Hiring, During employment, Confidentiality & IP, Ending employment).

## What this document covers

6 clauses: 2 drafting (purpose, acknowledgment/signature) and 4
authority clauses, citing Cal. Fam. Code §§ 6750(a), (d)(1), 6752(b)(1),
(c)(1), (h), (b)(9)(A), and 6753(a), (b), (d):

- **`coogan_trigger`** (§ 6750(a), § 6752(b)(1), (c)(1)) — **the
  central finding**: what contracts this chapter covers, and that
  court approval of the contract is NOT what triggers the trust
  requirement — the same 15% set-aside applies whether the contract is
  court-approved, never submitted for approval, or denied approval.
- **`coogan_percentage_and_gross_earnings`** (§ 6752(b)(1), § 6750(d)(1))
  — the 15% figure and the statute's own definition of "gross
  earnings" (total contract compensation, or compensation to a
  loan-out company).
- **`coogan_trust_account_requirements`** (§ 6753(a), (b), (d)) — the
  Coogan Trust Account's required characteristics (eligible California
  financial institutions, FDIC/SIPC/NCUSIF insurance or ICA
  registration) and its blocked status until age 18 or emancipation.
- **`coogan_noncompliance_consequence`** (§ 6752(b)(9)(A), (h)) — **a
  key finding**: if no trustee's statement is provided within 180
  days, funds go to The Actors' Fund of America (which becomes
  trustee), NOT escheat to the state — a precise, easy-to-overclaim
  distinction verified from the statute's own text.

## Genuine corrections and findings

- **The central finding**: corrected an initial working assumption
  that court approval triggers the trust requirement — verified from
  the statute's own text that § 6752(c) imposes the identical 15%
  obligation even when a contract is never submitted for court
  approval or is denied approval. Court approval (§ 6751) instead
  affects only whether the contract can later be disaffirmed for
  minority.
- Confirmed the exact 15% figure directly from both § 6752(b)(1) and
  (c)(1), rather than assumed from the law's colloquial reputation.
- Confirmed the non-compliance consequence is a transfer to a specific
  charitable organization (The Actors' Fund of America), separately
  exempted from the Unclaimed Property Law — not escheat to the state,
  correcting a plausible default assumption.
- Confirmed the statute's own name for the required account is a
  "Coogan Trust Account" — not merely a colloquialism.

## Honest gap disclosed

The alternate, narrower "gross earnings" definition for musicians,
singers, songwriters, musical producers, and arrangers (§ 6750(d)(2))
is not restated. § 6750's full contract-type list, loan-out/casting-
agency "employer" rules, § 6753(c)'s trustee's-statement mechanics,
§ 6753(e)'s fund-investment/transfer provisions, and § 6752(e)-(f)'s
rules governing how The Actors' Fund of America manages forwarded
funds are not restated. The materially parallel 180-day rule in
§ 6752(c)(7)(A) (for non-court-approved contracts) is not separately
quoted since it largely tracks § 6752(b)(9)(A).

## Method

Fetched Cal. Fam. Code §§ 6750, 6752, and 6753 from
`leginfo.legislature.ca.gov` via curl (through the sandboxed proxy),
each section fetched twice with distinct User-Agent strings, confirmed
byte-identical after whitespace normalization. All 9 citation quotes
across the 4 authority clauses programmatically confirmed as exact
substrings of the confirmed text. Independently re-verified during
integration review via a third fetch (Safari/macOS User-Agent) of all
three sections — all 9 quotes confirmed clean.

## Verification

- Statutory sections fetched twice independently by the research agent
  with distinct User-Agent strings, plus a third independent fetch
  during integration review; all quotes confirmed clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 6752(b)/(c) and
  § 6753(a)/(b)/(d) each correctly disclosed as subsections of one
  statutory section, not independent of one another; § 6750 vs. § 6752
  and § 6752 vs. § 6753 correctly disclosed as independent sections;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`minorName`, `companyName`, `parentGuardianName`,
  `trusteeName`, `dateSigned`) checked against existing corpus field
  definitions — all reused, with document-specific labels defined for
  `companyName` ("Employer name," distinct from the generic "Company
  name" label) and `trusteeName` ("Proposed trustee of the Coogan
  Trust Account," distinct from its estate-planning-trust label
  elsewhere in the corpus) per this project's field-reuse-with-
  document-specific-label pattern. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: Coogan Law Trust Account (Minor's Entertainment
  Earnings) — Information Sheet (`coogan_law_trust_account_info_sheet`),
  6 clauses (4 authority + 2 drafting), in the Hiring category. No new
  fields (two existing fields given document-specific labels).
- Corpus: 2,629 → 2,635 clauses; 343 → 344 documents. First document
  of wave 74.
