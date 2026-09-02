# Ending employment, new document: USERRA — Military Leave and Reemployment Rights Information Sheet

## Why this document

Confirmed as a genuine gap: grep for "USERRA" and "military leave"
across the corpus returned zero hits.

## What this document covers

8 clauses: 2 drafting (service declaration, acknowledgment/signature)
and 6 authority clauses:

- **`userra_reemployment_right`** (38 U.S.C. § 4312(a); § 4304) — the
  reemployment right, its notice/5-year-cap/timely-return conditions,
  and the character-of-service disqualification.
- **`userra_escalator_principle`** (38 U.S.C. § 4313(a)(1)-(2)) — the
  "escalator principle" for the reemployment position.
- **`userra_discharge_protection`** (38 U.S.C. § 4316(c)) — the
  discharge-protection period after reemployment.
- **`userra_nondiscrimination`** (38 U.S.C. § 4311(a)-(b)) — the
  discrimination bar and anti-retaliation protection.
- **`userra_health_continuation`** (38 U.S.C. § 4317(a)(1)-(2)) —
  continuation of health plan coverage during service.
- **`userra_enforcement`** (38 U.S.C. § 4321; § 4323(a)(1),(a)(3)) —
  how USERRA is enforced.

## Genuine corrections and findings

- Confirmed all six original topics were directionally correct; the
  research added precision on exact figures rather than correcting
  wrong assumptions.
- Confirmed § 4316(c)'s exact discharge-protection figures: 1 year for
  prior service greater than 180 days, 180 days for prior service
  between 31 and 180 days. A genuine finding beyond the original
  framing: the statute sets no separate heightened protection period
  for service of 30 days or less, disclosed as a gap rather than
  assumed.
- Confirmed § 4317(a)(1)-(2)'s exact figures: a 24-month coverage-
  continuation cap and a 102% premium ceiling, with a special rule
  capping the employee's share at their normal contribution for
  service under 31 days.
- **A precision correction on enforcement**: confirmed via § 4303(11)'s
  definitions section (an independent source from §§ 4321/4322/4323)
  that "Secretary" in the enforcement provisions specifically means
  the Secretary of Labor, not "DOL" generically.

## Honest gaps disclosed

- No CourtListener case-law citation was added — this topic is
  primarily statutory and case law was optional per the research
  instructions; the statutory text alone was sufficient.
- Subsections of § 4322(e) and the federal-employer-specific
  enforcement track (§ 4324) were not independently verified — flagged
  as an explicit gap in the enforcement clause rather than asserted.

## Method

Fetched 38 U.S.C. §§ 4303, 4304, 4311, 4312, 4313, 4316, 4317, 4321,
and 4323 directly from `law.cornell.edu`, each verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-identical via md5sum. All citation quotes programmatically
confirmed as exact substrings of the fetched, normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean (one leak in a
  `gap` field and one duplicate non-generic title were caught and
  fixed by the research agent's own self-check before delivery).
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`employeeName`, `companyName`, `startDate`, `endDate`,
  `dateSigned`) independently confirmed to match existing corpus
  convention. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: USERRA — Military Leave and Reemployment Rights
  Information Sheet (`userra_military_leave_reemployment_info_sheet`),
  8 clauses (6 authority + 2 drafting), in the Ending employment
  category. No new fields.
- Corpus: 1,619 → 1,627 clauses; 204 → 205 documents.
