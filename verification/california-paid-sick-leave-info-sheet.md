# During employment, new document: California Paid Sick Leave — Information Sheet

## Why this document

No existing document covers the Healthy Workplaces, Healthy Families
Act directly. Only three existing clauses touched "sick" leave at all
(`vacpayout_sick_leave_distinct`, on the no-payout-at-termination
point; `wagetheft_required_contents`, on the hiring-time notice's PSL
content item; and an unrelated drug-testing clause) — this document
builds on, and does not duplicate, those.

## What this document covers

10 clauses: 2 drafting (declaration/scope, acknowledgment) and 8
authority clauses:

- **`sickleave_short_title_and_scope`** (Lab. Code §§ 245, 245.5) —
  the Act's short title and its relationship to other paid-leave
  rights.
- **`sickleave_accrual_alternative_method_and_caps`** (Lab. Code
  § 246) — the accrual rate, alternative accrual/upfront-grant
  methods, and the two distinct caps (accrual cap and separate annual
  usage cap).
- **`sickleave_permissible_reasons_for_use`** (Lab. Code § 246.5; Gov.
  Code § 12945.8) — the statutory reasons for use, including the
  recodified violence-related purpose and the agricultural-worker
  emergency-conditions reason.
- **`sickleave_family_member_definition`** (Lab. Code § 245.5(c)) —
  the family-member definition, including the "designated person"
  category.
- **`sickleave_no_payout_at_termination`** (Lab. Code § 246(g)) — the
  no-payout rule and the rehire-within-one-year reinstatement
  exception.
- **`sickleave_retaliation_protection`** (Lab. Code § 246.5(c)) — the
  anti-retaliation protection, including a 30-day rebuttable
  presumption.
- **`sickleave_poster_recordkeeping_and_notice_duties`** (Lab. Code
  §§ 247, 247.5) — the workplace-posting and recordkeeping duties,
  distinct from the hiring-time notice already covered elsewhere in
  the corpus.
- **`sickleave_exemptions_from_coverage`** (Lab. Code § 245.5(a)) —
  the statute's own coverage exemptions.

## Genuine corrections and findings

- Corrected an initial assumption that § 246.5 is the anti-retaliation
  provision and § 247.5 covers retaliation. Direct review shows
  § 246.5 is primarily the permissible-reasons-for-use section (with
  the retaliation ban only at § 246.5(c)), and § 247.5 is actually a
  recordkeeping provision (3-year retention, a presumption of maximum
  accrual for inadequate records, and no employer duty to inquire into
  the reason for use).
- Confirmed the 2024 upfront-grant figures (5 days/40 hours, SB 616)
  but found two distinct caps, not one: an 80-hour/10-day accrual cap
  (§ 246(j)) and a separate 40-hour/5-day annual usage cap (§ 246(d)).
- Confirmed the "family member" definition is broader than assumed:
  beyond child, parent, spouse/domestic partner, grandparent,
  grandchild, and sibling, § 245.5(c)(8) adds a "designated person" —
  any person the employee identifies at the time of request, one per
  12-month period.
- Found the domestic-violence/sexual-assault/stalking use reason is no
  longer stated directly in § 246.5 — it is now a cross-reference to
  Government Code § 12945.8 (post-2025 recodification via AB 406),
  whose "qualifying act of violence" definition is broader than DV/SA/
  stalking alone. Also found a separate, previously unidentified
  reason: agricultural employees may use paid sick leave to avoid
  smoke/heat/flood conditions during a proclaimed emergency
  (§ 246.5(a)(3)).
- Found the statute's coverage exemptions are broader than a single
  collective-bargaining-agreement exception: § 245.5(a) excludes five
  categories, including certain airline flight/cabin crew, certain
  reemployed public retirees, and a narrow federal Railway Labor Act
  category.
- Confirmed the no-payout-at-termination rule (§ 246(g)(1)) and added
  the rehire-within-one-year reinstatement rule (§ 246(g)(2)) that the
  corpus's existing `vacpayout_sick_leave_distinct` clause had
  explicitly flagged as unaddressed.
- Confirmed § 247 is a distinct, dedicated workplace-posting
  requirement (Labor-Commissioner-issued poster, backed by a $100/
  offense civil penalty for willful violation) — separate from both
  the § 2810.5 hiring-time notice already covered in the corpus's Wage
  Theft Prevention Notice document and § 246(i)'s per-paycheck
  wage-statement balance notice.

## Honest gaps disclosed

- The now-superseded pre-2025 cross-reference in former
  § 246.5(a)(2)(A) to former Labor Code §§ 230(c)/230.1(a) was not
  independently verified, since it is no longer operative.
- Section 246's IHSS-provider-specific subdivisions (a)(2), (e) and
  the exempt-employee/pre-2015-policy subdivisions (b)(2), (b)(3), (f)
  are not addressed.
- Government Code § 12945.8's other subdivisions (notice,
  accommodation, certification, leave-length limits) beyond the
  "qualifying act of violence" definition are not summarized.
- Section 246(i)'s per-paycheck wage-statement balance-notice
  requirement is mentioned only in passing, without its own clause.

## Method

Fetched Labor Code §§ 245, 245.5, 246, 246.5, 247, 247.5, and Gov.
Code § 12945.8 directly from `leginfo.legislature.ca.gov`, each
verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical. All 18 citation quotes
programmatically confirmed as exact substrings of the verified text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean. (The agent's
  own drafting process caught and fixed 13 literal placeholder leaks
  into `gap` fields across 7 clauses before delivery; independently
  re-scanned the delivered set and confirmed zero remaining.)
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Acknowledgment of Receipt," shared with
  `wagetheft_ack`) confirmed as the corpus's established, accepted
  generic drafting-title-reuse pattern — not a defect.
- Field names (`companyName`, `employeeName`) independently confirmed
  to match existing corpus convention exactly; no new fields needed.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: California Paid Sick Leave — Information Sheet
  (`california_paid_sick_leave_info_sheet`), 10 clauses (8 authority +
  2 drafting), in the During employment category. No new fields.
- Corpus: 1,162 → 1,172 clauses; 148 → 149 documents. This completes
  wave 24 (4 documents: Real Estate Agency Disclosure, Nonprofit
  Mutual Benefit Corporation, Right of Publicity, and this document).
