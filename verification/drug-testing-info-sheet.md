# Hiring, new document: Pre-Employment and Workplace Drug Testing — Information Sheet

## Why this document

The existing Background Check Disclosure & Authorization document
covers only FCRA consumer-report disclosure/authorization/adverse-
action — a different legal framework. This document covers a
genuinely distinct topic: California's constitutional-privacy and
statutory framework specific to drug testing.

## What this document covers

9 clauses: 2 drafting (purpose, acknowledgment) and 7 authority
clauses:

- **`drugtest_ca_constitutional_privacy`** (Cal. Const. art. I, § 1) —
  California's explicit, freestanding textual privacy right.
- **`drugtest_hill_private_employer_privacy`** (Hill v. National
  Collegiate Athletic Assn.) — the holding that this privacy right
  reaches private parties, not only government action, narrowly stated
  to what could be independently confirmed.
- **`drugtest_loder_new_position_testing`** (Loder v. City of Glendale)
  — the actual scope of the testing program at issue (new-hire-or-
  promotion, not a strict pre-employment/incumbent line) and the
  Fourth Amendment point specific to government employers.
- **`drugtest_rehab_accommodation_duty`** (Lab. Code § 1025) — the
  25-or-more-employee accommodation duty for voluntary rehabilitation.
- **`drugtest_rehab_privacy_leave_enforcement`** (Lab. Code §§ 1026,
  1027, 1028) — privacy of enrollment, no paid-leave requirement (but
  sick leave is available), and the Labor Commissioner complaint
  procedure.
- **`drugtest_cannabis_off_duty_protection`** (Gov. Code § 12954(a)(1)
  (A), (a)(1)(B), (a)(2), (b)) — the 2024 off-duty-use and
  nonpsychoactive-metabolite protections, and the applicant-inquiry
  restriction.
- **`drugtest_cannabis_exemptions`** (Gov. Code § 12954(d)-(g)) — the
  protection's limits: no on-the-job-use right, no preemption of
  federal/state testing mandates, and the federal-security-clearance
  exclusion.

## Genuine corrections caught during research

- Confirmed Labor Code §§ 1025-1028 and the AB 2188/Gov. Code § 12954
  cannabis protections' scope, effective date, and exemptions largely
  as anticipated.
- The task brief implied Hill v. NCAA is a workplace case. Direct
  review shows its facts concern NCAA drug testing of college student-
  athletes, not an employer-employee relationship — corrected in the
  clause rather than implied.
- The task brief framed Loder as distinguishing "pre-employment" from
  "incumbent employee" testing as a clean binary. Direct review shows
  the actual program at issue covered both new hires *and* current
  employees approved for promotion to a new position — a hire-or-
  promotion/new-position line, not that binary. Loder is also a
  government-employer case, implicating the Fourth Amendment in
  addition to the state constitutional right, unlike a private
  employer's program.

## Honest handling of a rate-limited case-law source

CourtListener's full-opinion access was rate-limited during research,
and the website itself sits behind a bot-challenge that blocked direct
access. Rather than restate Hill's or Loder's complete holdings from
memory or secondary characterization, the agent went to CourtListener's
public API directly (same underlying source, different access path)
and confirmed only the narrower points it could obtain as exact
quotations — Hill's private-party-applicability holding (from a
concurring/dissenting opinion) and Loder's actual tested-class
description and a separate Fourth Amendment point. Both clauses
explicitly disclose that the commonly-cited "legally protected privacy
interest / reasonable expectation / seriousness of intrusion" test
language could not be independently confirmed against primary text
this session, and are not restated as if confirmed.

## Verification

- All statutory citations fetched twice independently with distinct
  User-Agents; confirmed clean on integration.
- Case citations verified for identity, court, docket, dates, and
  exact quoted excerpts via CourtListener's API; full holdings not
  independently reconfirmed and honestly disclosed as such.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic across all 7 authority
  clauses — every clause combining subsections of one statutory
  section carries an explicit disclosure; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Acknowledgment," used by `drugtest_ack`) confirmed as
  the corpus's established, accepted generic drafting-title-reuse
  pattern (already shared by 31 clauses) — not a defect.
- Field names (`companyName`, `employeeName`) confirmed to match the
  existing Background Check document's fields exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Pre-Employment and Workplace Drug Testing —
  Information Sheet (`drug_testing_info_sheet`), 9 clauses (7
  authority + 2 drafting), in the Hiring category. No new fields.
- Corpus: 1,017 → 1,026 clauses; 132 → 133 documents. This completes
  wave 20 (4 documents: DLSE Wage Claim, Living Trust Funding, this
  document, and Data Breach Notification).
