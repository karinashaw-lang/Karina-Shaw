# Hiring, new document: Investigative Consumer Reporting Agencies Act (ICRAA) — Information Sheet

## Why this document

The corpus's existing Background Check Disclosure & Authorization and
Background Check Adverse Action Notice documents cover the federal
FCRA and California's Fair Chance Act, not ICRAA — a separate
California statute governing "investigative consumer reports"
(character/reputation reports, distinct from ordinary credit-based
reports). Confirmed as a genuine, zero-hit gap; the delivering agent
read both existing background-check documents first.

## What this document covers

7 clauses: 2 drafting (declaration, signature/certification) and 5
authority clauses:

- **`icraa_definition`** (Civ. Code § 1786.2(c); § 1785.3(c)(5)) —
  what ICRAA covers, and the mirror-image exclusion in the parallel
  CCRAA.
- **`icraa_disclosure_requirements`** (§ 1786.16(a)(2)(B), (c)) — the
  employment disclosure ICRAA requires, longer than the FCRA's.
- **`icraa_agency_certification`** (§ 1786.16(a)(4); § 1786.12(e)) —
  the employer's certification to the reporting agency, a
  precondition to the agency furnishing any report.
- **`icraa_report_copy_and_adverse_action`** (§ 1786.16(b)(1);
  § 1786.40(a)) — the box-to-check right to a report copy, and
  ICRAA's own, thinner adverse-action notice.
- **`icraa_remedies`** (§ 1786.50(a)-(c); § 1786.52) — the statutory
  damages figure, punitive damages, a "more favorable report" safe
  harbor, the limitations period, and the FCRA double-recovery bar.

## Genuine corrections and findings

- Confirmed ICRAA and the CCRAA are written to be mutually exclusive
  by category (character/reputation vs. credit-based), not by degree
  — the same background check doesn't become an ICRAA report just
  because it's unfavorable.
- **A significant correction**: ICRAA's disclosure list is longer than
  the FCRA's stand-alone-disclosure rule already covered elsewhere in
  the corpus — it adds the permissible-purpose statement, the agency's
  name/address/phone, and the nature-and-scope-of-investigation
  notice, none of which FCRA's own provision requires.
- Confirmed ICRAA requires a separate certification running from the
  employer to the reporting agency — distinct from the consumer-facing
  disclosure — and that no report may be furnished at all without it.
- Confirmed the statutory-damages figure ($10,000, outside class
  actions) was verified against the current text rather than assumed
  by analogy to the FCRA's differently structured damages provisions.
- Confirmed ICRAA's own adverse-action notice (§ 1786.40(a)) is
  thinner than the FCRA's — it doesn't require a report copy or a
  rights description, which come from ICRAA's separate box-to-check
  mechanism and from the FCRA notice already in the corpus.
- Disclosed the § 1786.16(c) suspicion-of-wrongdoing carve-out: ICRAA's
  disclosure/certification/copy duties don't apply when an employer
  investigates suspected wrongdoing by the applicant or employee.

## Honest gap disclosed

Insurance Code § 791.02 (an insurance-sector cross-reference), the
federal FCRA's own certification provision (15 U.S.C. § 1681b(b)(1)),
and ICRAA's implementing regulations were not independently verified —
each flagged explicitly rather than assumed to parallel the verified
provisions.

## Method

Fetched Civ. Code §§ 1786.2, 1785.3, 1786.12, 1786.16, 1786.40,
1786.50, and 1786.52 from `leginfo.legislature.ca.gov`, each verified
against a second, independent fetch using a distinct method (curl vs.
Python urllib, or two distinct User-Agent strings) — confirmed
byte-identical after normalization. All 11 citation quotes
programmatically confirmed as exact substrings of the fetched text.

## Verification

- All citations fetched twice independently; confirmed clean on
  integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are subsections of the same Civil Code
  section versus genuinely separate sections/titles; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  accepted generic title reuses ("Purpose of This Information Sheet";
  "Signature and Certification") — consistent with the corpus-wide
  pattern.
- Field names (`companyName`, `employeeName`) independently confirmed
  to match existing corpus convention. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Investigative Consumer Reporting Agencies Act (ICRAA)
  — Information Sheet (`icraa_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the Hiring category. No new fields.
- Corpus: 1,824 → 1,831 clauses; 233 → 234 documents. Third document
  of wave 46.
