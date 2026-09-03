# During employment, new document: Right to a Day of Rest — Information Sheet

## Why this document

Confirmed by grep that "day of rest," "one day in seven," and Labor
Code §§ 551/552 had zero hits anywhere in the corpus. First of wave
56's four documents.

## What this document covers

7 clauses: 2 drafting (purpose, signature/acknowledgment) and 5
authority clauses, citing Cal. Lab. Code §§ 551, 552, 554, and 556, plus
*Mendoza v. Nordstrom, Inc.* (2017) 2 Cal.5th 1074:

- **`dayofrest_one_day_in_seven_entitlement`** (§ 551) — the employee's
  entitlement to one day's rest in seven.
- **`dayofrest_employer_prohibition_six_of_seven`** (§ 552) — the
  separate, employer-facing prohibition on causing more than six days'
  work in seven.
- **`dayofrest_short_hours_exception`** (§ 556) — the short-total-hours
  exception (≤30 hours/week or ≤6 hours/day).
- **`dayofrest_emergency_accumulation_exceptions`** (§ 554(a)-(b)) — the
  agent independently checked this section rather than assuming its
  content, and found it genuinely relevant: emergency/life-property/
  common-carrier exceptions, a monthly day-of-rest-accumulation
  mechanism, a CBA interaction rule, and a DLSE hardship-exemption
  power.
- **`dayofrest_mendoza_nordstrom_construction`** — the California
  Supreme Court's three-part construction: the right is measured per
  workweek (not a rolling seven-day period), the § 556 exception
  requires never exceeding six hours on any day of the workweek, and an
  employer "causes" a missed rest day only by inducing the employee to
  forgo it.

## Genuine corrections and findings

- **A real distinction between §§ 551 and 552**: one is an employee
  entitlement, the other an employer-facing prohibition on causing
  excess work — addressed as two independently numbered sections with
  distinct legal framing, not restated as one rule.
- **§ 554 was independently checked rather than assumed empty** and
  turned out to contain a real, substantive accumulation-of-rest-days
  mechanism and a DLSE hardship-exemption power not otherwise obvious
  from §§ 551/552/556 alone.
- **The Mendoza construction resolves three genuinely important
  ambiguities** left open by the bare statutory text: how the seven-day
  period is measured, how the six-hour exception applies across a
  week's days, and what "causes" means for the employer-facing
  prohibition.

## Honest gap disclosed

Case-law verification for *Mendoza v. Nordstrom* came from two
independent CourtListener retrieval paths (`read_document` by opinion
id, and `call_endpoint` against the raw REST resource) rather than two
independently-hosted external sources — direct HTTP/WebFetch access to
courtlistener.com was blocked by the sandbox's network egress policy.
This is disclosed explicitly rather than presented as full source
independence. Fact-specific applications of the "cause" standard beyond
the court's own three numbered holdings are not addressed.

## Method

Fetched Cal. Lab. Code §§ 551, 552, 554, and 556 directly from
`leginfo.legislature.ca.gov`, each independently re-fetched with a
distinct User-Agent string and confirmed byte-identical after
whitespace normalization. All 6 citation quotes (5 statutory + 1
case-law) programmatically confirmed as exact substrings of the
confirmed text.

## Verification

- All four sections fetched twice independently with distinct
  User-Agents; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — §§ 551, 552, 554, and
  556 correctly disclosed as part of the same statutory chapter while
  independently numbered; *Mendoza v. Nordstrom* correctly disclosed as
  an independent source type (case law) construing, rather than
  restating, the statutory text; the CourtListener dual-retrieval-path
  caveat correctly disclosed rather than glossed over; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  accepted generic drafting-title reuses ("Purpose," "Acknowledgment").
- Field names (`companyName`, `employeeName`, `dateSigned`)
  independently confirmed to match existing corpus field definitions
  exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Right to a Day of Rest — Information Sheet
  (`right_to_day_of_rest_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the During employment category. No new fields.
- Corpus: 2,117 → 2,124 clauses; 271 → 272 documents. First document of
  wave 56.
