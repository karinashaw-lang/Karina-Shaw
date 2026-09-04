# Ending employment, new document: Prohibition on Requiring a Release as a Condition of Wage Payment — Information Sheet

## Why this document

Confirmed by grep that "206.5," "release as a condition of payment,"
and "release of a claim for wages" had zero hits anywhere in the
corpus. Read the existing Severance Agreement document's clauses in
full first — this document addresses a genuinely narrower, distinct
point: a release tied to wages already due, not a broader release
given for additional consideration. Third of wave 64's four documents.

## What this document covers

6 clauses: 2 drafting (intro/scope, acknowledgment) and 4 authority
clauses, citing Cal. Labor Code §§ 206.5(a)-(b) and 200(a), plus
Chindarah v. Pick Up Stix, Inc. (2009) 171 Cal.App.4th 796:

- **`wagerelease_core_prohibition`** (§ 206.5(a)) — the core
  prohibition on conditioning wage payment on a release, its
  null-and-void effect, and the misdemeanor violation.
- **`wagerelease_execution_defined`** (§ 206.5(b)) — the anti-evasion
  rule reaching a coerced false hours statement.
- **`wagerelease_wages_defined`** (§ 200(a)) — **a key finding**:
  § 206.5 contains no express cross-reference to § 200's "wages"
  definition — verified by reading the full current text of § 206.5,
  which nowhere mentions § 200; the connection rests on shared
  statutory-article placement, not textual cross-reference.
- **`wagerelease_bona_fide_dispute`** (Chindarah v. Pick Up Stix) — the
  distinction between wages the employer concedes are due and a
  settlement of a genuine, good-faith wage dispute.

## Genuine corrections and findings

- **The central finding, precisely verified**: § 206.5's own text was
  read in full and confirmed to contain no cross-reference to § 200's
  "wages" definition — the connection between the two sections is
  structural (shared placement in the same statutory article), not
  textual. Stated as a genuine finding rather than assumed.
- Confirmed Chindarah's holding precisely: § 206.5's prohibition
  reaches wages the employer doesn't dispute owing, and does not bar a
  release settling a bona fide dispute over whether wages are owed at
  all.
- Confirmed § 206.5(b)'s anti-evasion provision reaches specifically a
  coerced false hours statement — a narrow, precise textual rule, not a
  general catch-all.

## Honest gap disclosed

Chindarah involved a class and collective wage-and-hour settlement,
not a severance agreement specifically, and did not resolve how
§ 206.5 treats a severance-style release exchanged for consideration
beyond the wages themselves where those wages are not genuinely
disputed. No case addressing that exact scenario was located — this
document does not resolve it and states the gap honestly rather than
guessing.

## Method

Fetched Cal. Labor Code §§ 206.5 and 200 from
`leginfo.legislature.ca.gov` via curl, each section fetched twice with
distinct User-Agent strings, confirmed byte-identical (one transient
connection reset on § 200 was retried successfully). Chindarah v. Pick
Up Stix, Inc. read directly via CourtListener. All 5 citation quotes
programmatically confirmed as exact substrings of the confirmed text.

## Verification

- Both statutory sections fetched twice independently with distinct
  User-Agent strings; case law confirmed via CourtListener; confirmed
  clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 206.5(a)-(b)
  correctly disclosed as one statutory section, not independent of
  each other; § 200 correctly disclosed as genuinely independent
  (separately numbered section); the two Chindarah quotes correctly
  disclosed as the same case; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`companyName`, `employeeName`, `terminationDate`,
  `unpaidWagesAmount`, `wageClaimBasis`) independently confirmed to
  match existing corpus field definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: Prohibition on Requiring a Release as a Condition of
  Wage Payment — Information Sheet
  (`release_as_condition_of_wages_info_sheet`), 6 clauses (4 authority
  + 2 drafting), in the Ending employment category. No new fields.
- Corpus: 2,367 → 2,373 clauses; 305 → 306 documents. Third document
  of wave 64.
