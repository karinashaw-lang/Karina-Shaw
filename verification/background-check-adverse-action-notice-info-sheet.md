# Hiring, new document: Background Check Adverse Action Notice — Information Sheet

## Why this document

The corpus's existing Background Check Disclosure & Authorization
document briefly mentions the pre-adverse-action concept in one
clause (`bgc_adverse_action`), with no California content at all.
This document adds the full two-step federal process plus California
's Fair Chance Act requirements, confirmed as genuine added depth
rather than duplication by reading that existing clause first.

## What this document covers

7 clauses: 2 drafting (declaration, signature/certification) and 5
authority clauses:

- **`adverseaction_fcra_step1_pre_adverse`** (15 U.S.C. § 1681b(b)(3)
  (A)) — the pre-adverse-action notice: report copy and rights
  description before the action.
- **`adverseaction_fcra_step2_final_notice`** (15 U.S.C. § 1681m(a)
  (1), (3)-(4)) — the final adverse-action notice's required content.
- **`adverseaction_ca_individualized_assessment`** (Gov. Code
  § 12952(c)(1)-(2), (3), (5)) — California's individualized-
  assessment factors and preliminary-notice content.
- **`adverseaction_ca_response_window`** (Gov. Code § 12952(c)(3),
  (5)) — the business-day response window and final-notice content.
- **`adverseaction_relationship_fcra_ca`** (15 U.S.C. § 1681t(a),
  (b)(1)(C); Gov. Code § 12952(e)) — how the federal and California
  processes relate, including FCRA's narrow preemption carve-out.

## Genuine corrections and findings

- Confirmed Gov. Code § 12952 is the current, correct citation —
  Labor Code § 432.9 is now blank on leginfo (its content moved), while
  Gov. Code § 12952 carries the live text.
- Confirmed the business-day figure exactly as originally framed: 5
  business days to respond, with 5 additional (10 total) if the
  applicant disputes accuracy and is obtaining evidence — verified
  directly from statutory text, not assumed.
- **A significant correction on the federal/state relationship**: this
  is not simply "two fully independent, cumulative requirements."
  FCRA § 1681t(a) is a general savings clause (state law generally not
  overridden), but § 1681t(b)(1)(C) specifically preempts states from
  imposing additional or different requirements on "the duties of a
  person who takes any adverse action" under § 1681m(a)-(b) — the
  federal final-notice step specifically. Whether and how that narrow
  carve-out interacts with California's Fair Chance Act process is a
  real, unresolved legal question, disclosed honestly rather than
  resolved by assertion.
- Confirmed Gov. Code § 12952(e): the Fair Chance Act's remedies are
  cumulative with, not a substitute for, other law.

## Honest gaps disclosed

- No case-law citation on the FCRA-preemption/Fair Chance Act
  interaction — CourtListener returned HTTP 429 (rate-limited) when
  this was attempted; disclosed in the relevant clause's `gap` field
  rather than guessed at.
- The Fair Chance Act's implementing regulations (2 CCR § 11017.1),
  which govern notice-timing/mail-service presumptions, were not
  independently verified — flagged as out of scope rather than assumed
  from a secondary summary.
- The employer-size threshold (5+ employees) and § 12952(d)'s
  exceptions are flagged as an existing gap, not elaborated.

## Method

Fetched 15 U.S.C. §§ 1681b, 1681m, and 1681t directly from
`law.cornell.edu`, and Gov. Code § 12952 from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed whitespace-
normalized identical. All citation quotes programmatically confirmed
as exact substrings of the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  title matches ("Purpose of This Information Sheet," "Signature and
  Certification") confirmed as the corpus's established, accepted
  generic drafting-title-reuse pattern.
- Field names (`companyName`, `employeeName`) independently confirmed
  to match existing corpus convention. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Background Check Adverse Action Notice — Information
  Sheet (`background_check_adverse_action_notice_info_sheet`), 7
  clauses (5 authority + 2 drafting), in the Hiring category. No new
  fields.
- Corpus: 1,519 → 1,526 clauses; 191 → 192 documents. Completes wave
  35 (Custodial Account (UTMA), Workers' Compensation Claim Notice,
  Child Custody Jurisdiction (UCCJEA), Background Check Adverse Action
  Notice).
