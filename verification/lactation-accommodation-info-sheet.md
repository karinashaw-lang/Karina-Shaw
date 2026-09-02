# During employment, new document: Lactation Accommodation — Information Sheet

## Why this document

Confirmed as a genuine gap: grep for "lactation" across the corpus
returned zero hits.

## What this document covers

9 clauses: 2 drafting (policy declaration, signature/acknowledgment)
and 7 authority clauses:

- **`lactation_break_time_duty`** (Lab. Code § 1030) — the break-time
  duty and its relationship to paid rest breaks.
- **`lactation_location_duty`** (§ 1031(a)-(b)) — the core private
  lactation location requirement, not a bathroom.
- **`lactation_location_standards`** (§ 1031(c)-(d)) — the required
  features of the location.
- **`lactation_operations_exemption`** (§ 1032) — a general "seriously
  disrupt operations" exemption from the break-time duty, available to
  any employer size.
- **`lactation_small_employer_exemption`** (§ 1031(i)) — a separate,
  fewer-than-50-employees undue-hardship exemption from the location
  requirements specifically.
- **`lactation_written_policy_requirement`** (§ 1034) — the written
  policy requirement added by SB 142 (eff. 1/1/2020).
- **`lactation_enforcement_retaliation`** (§ 1033) — enforcement,
  anti-retaliation protection, and civil penalties.

## Genuine corrections and findings

- Confirmed the section range exactly: Chapter 3.8 is §§ 1030-1034,
  confirmed by the statute's own chapter caption.
- **A significant correction**: there are two genuinely distinct
  exemptions, not one. Section 1032 is a general "would seriously
  disrupt operations" test that applies to any size employer and only
  excuses the break-time duty (§ 1030) — it has no employee-count
  threshold. Section 1031(i) is a separate, size-limited
  (fewer-than-50-employees) undue-hardship exemption that applies only
  to the location requirements (§ 1031), and even then requires a
  fallback: reasonable efforts to provide a private space other than a
  toilet stall. This distinction is made explicit in both clauses'
  `gap` fields since it resembles, but differs structurally from, the
  federal PUMP Act's single fewer-than-50-employees test.
- Confirmed § 1033's enforcement mechanism: failure to comply is
  treated as a Lab. Code § 226.7 violation, with anti-retaliation
  protection, Labor Commissioner enforcement, and a $100/day civil
  penalty — not a misdemeanor.

## Honest gap disclosed

Three clauses (`lactation_location_duty`,
`lactation_location_standards`, `lactation_small_employer_exemption`)
are all subdivisions of the single § 1031 — disclosed in each `gap`
field as not independent sources of one another, just distinct topics
within one statute.

## Method

Fetched Lab. Code §§ 1030, 1031, 1032, 1033, and 1034 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-
identical. All citation quotes programmatically confirmed as exact
substrings of the fetched, normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Signature and Acknowledgment") confirmed as the
  corpus's established, accepted generic drafting-title-reuse pattern.
- Field names (`companyName`, `employeeName`) independently confirmed
  to match existing corpus convention. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Lactation Accommodation — Information Sheet
  (`lactation_accommodation_info_sheet`), 9 clauses (7 authority + 2
  drafting), in the During employment category. No new fields.
- Corpus: 1,556 → 1,565 clauses; 196 → 197 documents.
