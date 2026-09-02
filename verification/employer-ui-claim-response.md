# Ending employment, tenth document: Employer's Response to Unemployment Insurance Claim

## Why this document

The existing Notice to Employee as to Change in Relationship document
covers the employer's duty at separation. This document covers the
distinct, later process: an employer responding to the EDD when a
former employee actually files an unemployment insurance claim.
Confirmed non-duplicative by reading the existing `unemploynotice_`
and `term_` clauses first.

## What this document covers

6 clauses: 2 drafting (intro, statement of facts) and 4 authority
clauses:

- **`uiresponse_notice_and_deadline`** (Unemp. Ins. Code §§ 1327,
  1030(a)) — the real 10-day response deadline, correcting the task
  brief's assumption that it lived at § 1032, and disclosing honestly
  that no "interested party" forfeiture language exists in either
  statute.
- **`uiresponse_disqualification_standard`** (Unemp. Ins. Code § 1256)
  — the misconduct/voluntary-quit disqualification standard and the
  rebuttable presumption favoring the claimant.
- **`uiresponse_charging_consequence`** (Unemp. Ins. Code § 1032) —
  the actual reserve-account non-charging protection and its loss on
  an untimely or missing response.
- **`uiresponse_tax_rate_consequence`** (Unemp. Ins. Code § 977(a)) —
  the experience-rating mechanism tying reserve-account balance to the
  employer's future contribution rate, honestly framed as a mechanical
  inference rather than an express statutory sentence.

## Genuine corrections caught during research

- The task brief assumed § 1032 sets the employer's response deadline.
  Direct review shows § 1032 contains no deadline at all — it's
  actually the reserve-account charging statute. The real 10-day
  deadline is set by § 1327 (general duty) and § 1030(a) (the
  misconduct/voluntary-quit-specific right).
- The task brief assumed § 1327 establishes that a non-responding
  employer loses "interested party" status. A direct text search found
  no such language in either § 1327 or § 1030 — the one appearance of
  "interested party" in § 1030(c) describes the EDD director's own
  appellate status, not any employer's. Disclosed honestly rather than
  forcing the assumption.

## Honest gap disclosed

`uiresponse_charging_consequence`'s cited statute (§ 1032)
cross-references §§ 1026, 1026.1, and 1328 by name; none of those
cross-referenced provisions were independently fetched or verified —
disclosed rather than assumed.

## Defects caught and fixed during integration

Three single-citation authority clauses (`uiresponse_disqualification_standard`,
`uiresponse_charging_consequence`, `uiresponse_tax_rate_consequence`)
initially lacked the standard explicit single-source disclosure
sentence — added during integration.

## Method

Fetched Unemployment Insurance Code §§ 977, 1030, 1032, 1256, 1327
directly from `leginfo.legislature.ca.gov`, each verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-identical.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 4 authority
  clauses — corrected on three, confirmed correct on the rest.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `employeeName`) reused from existing
  employment-document convention.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Employer's Response to Unemployment Insurance Claim
  (`employer_ui_claim_response`), 6 clauses (4 authority + 2 drafting),
  in the "Ending employment" category. New fields: `separationDate`,
  `claimDate`, `separationReason`, `supportingFacts`.
- Corpus: 691 → 697 clauses; 92 → 93 documents.
