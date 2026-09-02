# Ending employment, new document: Cal-COBRA Election Notice (California Continuation Benefits Replacement Act)

## Why this document

The existing COBRA Election Notice document covers federal COBRA only.
Its own `cobra_small_employer_scope` clause explicitly flags Cal-COBRA
as a distinct, separate state statutory scheme "with its own
eligibility rules, notice timelines, and maximum coverage periods that
are not restated in this document." This document fills that
disclosed gap: California's own continuation-coverage law for small
employers (2-19 eligible employees) not covered by federal COBRA, plus
the separate extension available to people who exhaust federal COBRA
with less than 36 months of coverage.

## What this document covers

8 clauses: 2 drafting (election notice letter, election form) and 6
authority clauses:

- **`calcobra_scope_and_eligibility`** (H&S Code § 1366.21(e), (c)(1))
  — the "employer" (2-19 employees) and "qualified beneficiary"
  definitions.
- **`calcobra_qualifying_events`** (H&S Code § 1366.21(d)) — the five
  statutory qualifying events.
- **`calcobra_notice_obligations`** (H&S Code § 1366.25(a), (e)) — the
  notice chain runs employer → health plan → beneficiary, distinct
  from federal COBRA's employer/plan-administrator-centric structure.
- **`calcobra_premium_cap`** (H&S Code § 1366.26) — the 110% premium
  cap (vs. federal COBRA's 102%), with a 150% cap for a disabled
  beneficiary after 18 months.
- **`calcobra_coverage_duration`** (H&S Code § 1366.27(a)(1), (a)(3)) —
  a flat 36-month maximum for all qualifying-event categories, unlike
  federal COBRA's tiered 18/29/36-month structure.
- **`calcobra_extension_after_federal_cobra`** (H&S Code § 1366.29(a);
  Ins. Code § 10128.59(a)) — the extension to a total of 36 months for
  someone who exhausted federal COBRA with less than 36 months of
  coverage.

## Genuine corrections caught during research

- The task brief's assumed section numbers were off in a way that
  mattered: § 1366.22 is not the premium cap (it's the exclusion list);
  the actual premium cap is § 1366.26, and duration is § 1366.27.
- The task brief assumed a tiered duration structure mirroring federal
  COBRA. Direct review of § 1366.27(a)(1) and (a)(3) shows a flat
  36-month maximum for every qualifying-event category — genuinely
  simpler than federal COBRA's tiering.
- The task brief assumed notice obligations mirror federal COBRA's
  employer/plan-administrator structure. Direct review shows the
  default obligated party after the employer's initial 30-day notice
  is the health care service plan itself (14 days to notify the
  beneficiary), not an employer-designated administrator, though an
  employer can contractually take on that role.
- The task brief assumed the post-federal-COBRA extension runs "36
  months from the original qualifying event." Direct review of
  § 1366.29(a) shows the 36 months is measured from the date the
  person's federal COBRA continuation coverage began — a distinction
  disclosed rather than treated as identical to the qualifying-event
  date.

## Method

Fetched H&S Code §§ 1366.21, 1366.25, 1366.26, 1366.27, 1366.29, and
Ins. Code § 10128.59 directly from `leginfo.legislature.ca.gov`, each
verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical. No case law cited; this is a
statutory/administrative scheme.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 6 authority
  clauses — the three same-section clauses
  (`calcobra_scope_and_eligibility`, `calcobra_notice_obligations`,
  `calcobra_coverage_duration`) each carry an explicit "cites two
  [subdivisions/paragraphs] of the same...section" disclosure sentence
  — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names confirmed to match the existing COBRA Election Notice
  document's `fields` array exactly (`companyName`, `employeeName`,
  `noticeDate`, `planName`, `qualifyingEventDate`,
  `qualifyingEventType`, `monthlyPremiumAmount`, `maxCoverageMonths`,
  `planAdministratorName`, `planAdministratorAddress`,
  `electionDeadline`, `additionalBeneficiaryName`, `dateSigned`) — no
  new fields needed.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Cal-COBRA Election Notice (California Continuation
  Benefits Replacement Act) (`calcobra_election_notice`), 8 clauses (6
  authority + 2 drafting), in the Ending employment category. No new
  fields — full reuse of the existing COBRA Election Notice document's
  field set.
- Corpus: 757 → 765 clauses; 101 → 102 documents.
