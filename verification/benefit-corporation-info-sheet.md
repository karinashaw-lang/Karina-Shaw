# Business Formation, new document: Benefit Corporation — Formation Information Sheet

## Why this document

The corpus already covers the nonprofit Public Benefit, Mutual
Benefit, and Religious Corporation laws. California's separate,
for-profit "benefit corporation" statute — Corp. Code Part 13,
§§ 14600-14631 — was not covered. Confirmed as a genuine gap: every
prior "benefit corporation" hit in the corpus was about the nonprofit
Public Benefit Corporation Law (Part 2), a wholly different statutory
part from the for-profit benefit corporation form.

## What this document covers

8 clauses: 2 drafting (purpose/election declaration, incorporator
signature) and 6 authority clauses:

- **`benefitcorp_definition_and_purpose`** (Corp. Code § 14601(a),
  (c); § 14610(a)) — the statutory definition of "benefit corporation"
  and "general public benefit," and the purpose requirement.
- **`benefitcorp_required_articles_content`** (§ 14602; § 14610(b)) —
  required articles content, including the mandatory election
  statement.
- **`benefitcorp_annual_benefit_report`** (§ 14630(a)-(c); § 14621(a))
  — the annual benefit report requirement: third-party-standard
  assessment, 120-day delivery to shareholders, and public website
  posting.
- **`benefitcorp_director_duties`** (§ 14620(a)-(b)) — the modified
  duty of care requiring directors to consider non-shareholder
  stakeholders alongside shareholders.
- **`benefitcorp_enforcement`** (§ 14601(b); § 14623(a),(b),(d)) — the
  "benefit enforcement proceeding," its exclusivity, standing list,
  and expense-reimbursement remedy.
- **`benefitcorp_termination_of_status`** (§ 14604(a); § 14601(d)(1)
  (A)-(B)) — the supermajority "minimum status vote" required to
  terminate benefit corporation status, plus dissenters' rights.

## Genuine corrections and findings

- Confirmed the gap: grepped the corpus for "benefit corporation" and
  verified every existing hit belongs to the nonprofit Public Benefit
  Corporation Law (e.g. `nonprofit_public_benefit`,
  `mutualbenefit_purpose_distinct_from_public_benefit`), not the
  for-profit statute — the two are legally and statutorily distinct.
- All six originally-framed research topics mapped correctly to real,
  distinct sections of Part 13 — no framing corrections were needed,
  only precise section-number pinning: Chapter 1 (Preliminary
  Provisions) §§ 14600-14604, Chapter 2 (Purposes) § 14610, Chapter 3
  (Accountability) §§ 14620-14623, Chapter 4 (Transparency)
  §§ 14630-14631.
- Confirmed the enforcement standing list under § 14623(b) is
  narrower than a general shareholder derivative suit: the
  corporation itself, a shareholder, a director, a person or group
  owning 5%-or-more of a parent entity, or others specified in the
  articles or bylaws.
- Confirmed the "minimum status vote" for terminating benefit
  corporation status is a two-thirds-per-class supermajority under
  § 14601(d)(1)(A)-(B), paired with dissenters' rights under § 14604.

## Honest gaps disclosed

- Two adjacent, verifiable topics were deliberately left out to avoid
  padding beyond the six requested subjects: the § 14601(e) enumerated
  list of specific public benefit categories, and § 14622's officer
  duties (a close parallel to the director-duties clause).
- No case law was used — this is a purely statutory topic, and every
  section fetch succeeded on both passes with no rate-limiting or
  unreachability encountered.

## Method

Fetched Corp. Code §§ 14601, 14602, 14604, 14610, 14620, 14621, 14623,
and 14630 directly from `leginfo.legislature.ca.gov`, each verified
against a second, independent fetch with a distinct User-Agent —
confirmed byte-identical. All 13 citation quotes programmatically
confirmed as exact substrings of the fetched, normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `principalOfficeAddress`, `agentName`,
  `agentAddress`, `incorporatorName`, `additionalPurposeDescription`)
  independently confirmed to match the existing Nonprofit Public
  Benefit, Mutual Benefit, and Religious Corporation documents'
  fields exactly — no new fields needed.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Benefit Corporation — Formation Information Sheet
  (`benefit_corporation_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Business Formation category. No new fields.
- Corpus: 1,466 → 1,474 clauses; 184 → 185 documents.
