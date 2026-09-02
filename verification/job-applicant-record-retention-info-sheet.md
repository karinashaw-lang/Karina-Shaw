# Hiring, new document: Job Applicant Record Retention Requirements — Information Sheet

## Why this document

Confirmed as a genuine gap: grep for "application" + "retention"
across the corpus returned zero hits.

## What this document covers

8 clauses: 2 drafting (declaration, signature/acknowledgment) and 6
authority clauses:

- **`applicantretention_core_duration`** (Gov. Code § 12946(a)) —
  California's 4-year retention requirement.
- **`applicantretention_covered_records_scope`** (§ 12946(a)) —
  covered record categories: applications, personnel, membership, and
  employment referral records.
- **`applicantretention_complaint_trigger`** (§ 12946(b)) — a filed
  complaint extends retention until final disposition.
- **`applicantretention_federal_comparison`** (29 C.F.R. § 1602.14;
  41 C.F.R. § 60-1.12(a)) — the shorter federal EEOC (1 year) and
  federal-contractor (2 years, or 1 for smaller contractors) baselines.
- **`applicantretention_state_law_controls`** (42 U.S.C. § 2000e-7)
  — California's longer period controls for a California employer, a
  floor not a ceiling.
- **`applicantretention_enforcement_and_noncompliance`** (§ 12946(c)
  -(d)) — the statute's own enforcement mechanism.

## Genuine corrections and findings

- Confirmed the current retention duration is 4 years (extended from
  2 years by SB 807, Stats. 2021, ch. 278, effective January 1, 2022)
  — verified from both the statute itself and the bill's Legislative
  Counsel's Digest.
- Confirmed the covered-records scope: applications, personnel,
  membership, and employment referral records, and personnel files of
  applicants or terminated employees.
- Confirmed the complaint-filed trigger extending retention until
  final disposition.
- Confirmed the federal EEOC baseline (1 year) and federal-contractor
  variant (2 years generally, 1 year for contractors under 150
  employees / below $150,000 in contracts) — both exactly as
  originally framed.
- Confirmed via 42 U.S.C. § 2000e-7's savings clause that California's
  longer duty is not preempted by the shorter federal baseline.
- Confirmed the statute's own enforcement mechanism is council
  rulemaking and the department's power to seek judicial relief — no
  stated dollar penalty for noncompliance.

## Honest gaps disclosed

- No adverse-inference or other evidentiary-consequence rule was
  asserted — the statute itself states no penalty, and case law or CRD
  guidance establishing one was not fetched this session, so that
  claim was left out rather than guessed at.
- Form I-9 retention (a separate topic, already covered elsewhere in
  the corpus) and whether any more specific federal statute could
  expressly preempt California's duty outside Title VII's general
  savings clause were not addressed.
- The Legislative Counsel's Digest is disclosed as part of the same
  2021 enactment as the statute, not a fully independent second
  source.

## Method

Fetched Gov. Code § 12946 and its Legislative Counsel's Digest
directly from `leginfo.legislature.ca.gov`, and 29 C.F.R. § 1602.14,
41 C.F.R. § 60-1.12(a), and 42 U.S.C. § 2000e-7 from `law.cornell.edu`,
each verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical. All citation quotes
programmatically confirmed as exact substrings of the fetched,
normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean (one leak was
  found and fixed by the research agent's own self-check before
  delivery).
- Checked source-independence disclosure logic — the reuse of the same
  § 12946(a) quote for two distinct questions (duration vs. scope)
  disclosed as one source used twice; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `dateSigned`, `cityState`,
  `effectiveDate`) independently confirmed to match existing corpus
  convention. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Job Applicant Record Retention Requirements —
  Information Sheet (`job_applicant_record_retention_info_sheet`), 8
  clauses (6 authority + 2 drafting), in the Hiring category. No new
  fields.
- Corpus: 1,646 → 1,654 clauses; 208 → 209 documents.
