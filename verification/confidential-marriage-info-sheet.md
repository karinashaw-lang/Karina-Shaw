# Family Law, new document: Confidential Marriage — Information Sheet

## Why this document

Confirmed by grep that "confidential marriage" (as distinct from
"confidential domestic partnership," covered in the existing Domestic
Partnership Declaration document) had zero hits anywhere in the corpus.
The delivering agent read the existing `dp_confidential` clause first to
confirm this is a structurally parallel but legally distinct mechanism —
confidential marriage licensing through county clerks/notaries under
Family Code §§ 500-536, not confidential domestic partnership filing with
the Secretary of State.

## What this document covers

8 clauses: 2 drafting (recitals, signature block) and 6 authority
clauses, all citing Cal. Fam. Code Part 4 ("Confidential Marriage"),
§§ 500-536, plus §§ 359 and 509:

- **`confmarriage_eligibility`** (§ 500) — the couple must be unmarried,
  not minors, and have been living together as spouses.
- **`confmarriage_issuance_methods`** (§§ 501(a), 503) — issuance by the
  county clerk on personal appearance, or through a county-approved
  notary public.
- **`confmarriage_notary_approval`** (§§ 530(a), 532, 533) — the
  approval/training/one-year-renewal regime for notaries who issue
  confidential licenses.
- **`confmarriage_no_witness_requirement`** (§§ 359(d), 506) — a
  comparative textual finding (see below).
- **`confmarriage_confidentiality_of_record`** (§ 511(a), (c)) — the
  record is not open to public inspection absent a court order; the
  clerk may confirm existence only.
- **`confmarriage_certified_copy_access`** (§ 509(a)-(b)) — only a party
  to the marriage may obtain a certified copy this way.

## Genuine corrections and findings

- **A significant, honestly disclosed finding**: the "no witnesses"
  feature commonly attributed to confidential marriage is not stated
  affirmatively anywhere in §§ 500-511. The document instead verifies a
  real textual contrast — § 359(d) (the standard public license) requires
  the solemnizer to record one or two witnesses' names, signatures, and
  addresses, while § 506 (confidential license completion/return) has no
  such requirement and is simply silent on the point. The clause is
  worded to reflect only that verified contrast, with the gap field
  explicitly flagging it as an inference from statutory silence rather
  than an affirmative "no witness" rule.
- Confirmed a genuine two-track issuance mechanism not found for the
  standard public license: a confidential marriage license may be issued
  directly by the county clerk, or through a specially trained and
  approved notary public.
- Confirmed the notary approval regime requires a county-clerk-conducted
  training course (up to six hours) and expires after one year, requiring
  renewal.
- Checked and confirmed the confidential license's validity duration (90
  days) is identical to the standard public license's — and deliberately
  omitted this from the "distinguishing features" list rather than
  misrepresent it as a point of difference.

## Honest gap disclosed

The § 502 physical-inability exception to the personal-appearance
requirement, the notary renewal fee and misdemeanor penalty for
unapproved issuance, and the Health & Safety Code § 103525 certified-copy
application requirements referenced by § 509(a) were not independently
verified or quoted.

## Method

Fetched Cal. Fam. Code §§ 500, 501, 503, 506, 509, 511, 359, 530, 532,
and 533 directly from `leginfo.legislature.ca.gov`, each twice using
distinct User-Agent strings — confirmed byte-identical after whitespace
normalization across all ten sections. All 10 citation quotes
programmatically confirmed as exact substrings of the confirmed text.

## Verification

- All ten sections fetched twice independently with distinct
  User-Agents; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are subdivisions of the same statutory
  section versus genuinely separate sections (e.g. the three-section
  notary-approval clause, and the cross-Part comparison in the
  no-witness-requirement clause); correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  accepted generic drafting-title reuse ("Signatures and
  Acknowledgment") — also used by the Premarital Agreement and Domestic
  Partnership Declaration documents.
- Field names (`party1Name`, `party2Name`, `countyOfFiling`,
  `dateSigned`) independently confirmed to match existing corpus
  convention. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Confidential Marriage — Information Sheet
  (`confidential_marriage_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Family Law category. No new fields.
- Corpus: 2,034 → 2,042 clauses; 260 → 261 documents. Second document of
  wave 53.
