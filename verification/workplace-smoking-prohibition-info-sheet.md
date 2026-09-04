# During employment, new document: Workplace Smoking Prohibition — Information Sheet

## Why this document

Confirmed by grep that "workplace smoking" and "6404.5" had zero hits
anywhere in the corpus. Read the existing Suitable Seating document
for citation style. Second of wave 66's four documents.

## What this document covers

8 clauses: 2 drafting (purpose, signature/receipt) and 6 authority
clauses, citing Cal. Labor Code § 6404.5(a)-(m) and Cal. Bus. & Prof.
Code § 22950.5(c)-(d):

- **`smokingprohib_core_prohibition`** (§ 6404.5(a), (c)) — the general
  100%-enclosed-workplace prohibition and its stated legislative
  intent.
- **`smokingprohib_enclosed_space_definition`** (§ 6404.5(b)) — the
  inclusive "enclosed space" definition and the "owner-operated
  business" definition.
- **`smokingprohib_exemptions`** (§ 6404.5(e)(1)-(6)) — **a key
  finding**: the current, exact six-item exemption list, verified
  against text last amended effective January 1, 2024 — explicitly
  noting no hotel-lobby or general small-business exemption survives in
  current law.
- **`smokingprohib_nonemployee_reasonable_steps`** (§ 6404.5(d)) — the
  employer's signage/request safe harbor regarding nonemployee
  smokers.
- **`smokingprohib_penalty_enforcement`** (§ 6404.5(i)-(j)) — the
  infraction penalty schedule and the limit on Cal/OSHA's own
  complaint-response duty.
- **`smokingprohib_ecigarette_coverage`** (§ 6404.5(l)-(m) + Bus. &
  Prof. Code § 22950.5(c)-(d)) — **a key finding**: e-cigarettes and
  vaping devices are covered, confirmed by tracing the statute's own
  cross-reference rather than assuming coverage from general
  knowledge of California's broader 2016 tobacco-law expansion.

## Genuine corrections and findings

- **The central finding**: verified the CURRENT exemption list (six
  items) rather than an outdated or assumed list — explicitly disclosed
  that no hotel-lobby exemption exists in current text, correcting a
  common misconception about older versions of California smoking law.
- Confirmed § 6404.5 does not define "smoking" or "tobacco product" on
  its own terms — it cross-references Bus. & Prof. Code § 22950.5,
  which was independently fetched and confirmed to expressly include
  electronic smoking devices.
- Confirmed § 6404.5(d)'s nonemployee-smoker provision operates as a
  safe harbor against a "knowing or intentional" violation finding, not
  a freestanding independent posting mandate.
- Confirmed the exact three-tier infraction penalty schedule ($100/
  $200/$500) and that Cal/OSHA's own complaint-response duty is limited
  unless a third violation has already been found.

## Honest gap disclosed

Labor Code § 6309 (cross-referenced in § 6404.5(j) as the general
complaint-response duty this section limits) was not independently
fetched or verified. Subdivision (d)'s further limiting language on
what "reasonable steps" does not include (physical ejection or a
request risking physical harm) is summarized but not separately
quoted.

## Method

Fetched Cal. Labor Code § 6404.5 and Cal. Bus. & Prof. Code § 22950.5
from `leginfo.legislature.ca.gov` via curl, each section fetched twice
with distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. All 11 citation quotes programmatically
confirmed as exact substrings of the confirmed text.

## Verification

- Both statutory sections fetched twice independently with distinct
  User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — all § 6404.5
  subsection citations correctly disclosed as one statutory section,
  not independent of each other; the Labor Code/Business & Professions
  Code cross-reference correctly disclosed as genuinely independent
  (different codes); correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`companyName`, `employeeName`) independently confirmed
  to match existing corpus field definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: Workplace Smoking Prohibition — Information Sheet
  (`workplace_smoking_prohibition_info_sheet`), 8 clauses (6 authority
  + 2 drafting), in the During employment category. No new fields.
- Corpus: 2,410 → 2,418 clauses; 311 → 312 documents. Second document
  of wave 66.
