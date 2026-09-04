# Business Formation, new document: Name Availability and Reservation — Information Sheet

## Why this document

Wave 61 returns to the Business Formation + Family Law alternation
(wave 60 was the "1×4" Hiring/During employment/Confidentiality &
IP/Ending employment wave; wave 59 was Real Estate + Estate Planning).
Confirmed by grep that "name reservation" and "name availability" had
zero hits anywhere in the corpus. Read the existing LLC Articles of
Organization and Articles of Incorporation documents in full and
confirmed their own `gap` fields explicitly disclose they don't cover
distinguishability or reservation — a genuine, self-acknowledged gap
this document closes. First of wave 61's four documents.

## What this document covers

6 clauses: 2 drafting (purpose/scope, closing/request record) and 4
authority clauses, citing Cal. Corp. Code §§ 201, 201.5, 17701.08, and
17701.09:

- **`namereserve_distinguishable`** (§§ 201(b), 17701.08(b)) — the
  parallel two-part distinguishable-name standard for corporations and
  LLCs.
- **`namereserve_reservation_procedure`** (§§ 201(e), 17701.09(a)-(b))
  — **a key finding**: the reservation procedure and its confirmed
  60-day duration, plus the no-consecutive-reservation rule.
- **`namereserve_restricted_words`** (§§ 201(a), 201.5, 17701.08(e)) —
  bank/trust/insurer-related words: an approval pathway for
  corporations, but flatly barred outright for LLCs with no approval
  mechanism.
- **`namereserve_consequences`** (§§ 201(d), 17701.08(c)) — **a key
  finding**: the consequence of filing under a non-distinguishable name
  is an injunction against use, not automatic dissolution or
  invalidation of the filing.

## Genuine corrections and findings

- **The central finding**: the naming statutes' own remedy for a
  non-distinguishable name is injunctive (a court may enjoin continued
  use), not automatic voiding of the entity's formation — confirmed
  precisely rather than assumed to be more severe.
- Confirmed the reservation period is exactly 60 days for both
  corporations and LLCs, verified from the statutes' own text rather
  than secondary sources.
- Confirmed a genuine asymmetry between corporations and LLCs on
  restricted words: corporations have a regulator-approval pathway for
  bank/trust/insurer words; LLCs face an outright statutory bar with no
  verified approval mechanism.
- Confirmed the LLC reservation statute's transfer provision
  (§ 17701.09(b)) has no verified corporate-law counterpart in § 201 —
  disclosed as an honest gap rather than assumed to apply equally.

## Honest gap disclosed

The Secretary of State's actual name-comparison methodology (how
punctuation, spacing, capitalization, or entity designators like "LLC"
or "Inc." are treated) is administrative practice, not statutory text,
and was not verified. The current dollar fee amount (set in a separate
Government Code fee schedule) was not researched. No statutory hook was
found for profession-affiliation word restrictions (e.g., "attorney,"
"CPA") — not invented, explicitly disclosed as not located. Naming
rules for partnerships, LLPs, and nonprofit corporations were not
researched.

## Method

Fetched Cal. Corp. Code §§ 201, 201.5, 17701.08, and 17701.09 directly
from `leginfo.legislature.ca.gov` via curl (WebFetch blocked for this
domain), each section fetched twice with two distinct User-Agent
strings, confirmed byte-identical after whitespace normalization. All
9 citation quotes programmatically confirmed as exact substrings of
the confirmed text.

## Verification

- All four sections fetched twice independently with distinct
  User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 201 and
  § 17701.08 correctly disclosed as independent (different titles of
  the Corporations Code); § 201, § 201.5, and § 17701.08(e) correctly
  disclosed as three separate, independently enacted provisions;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`entityType`, `applicantName`, `dateSigned`, `cityState`)
  independently confirmed to match existing corpus field definitions.
  `proposedName` is an existing field id (from the Name Change Petition
  document, a person's-name context) reused here with a
  document-specific label ("Proposed entity name") and business-name
  placeholder appropriate to this document's context. No new field ids.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: Name Availability and Reservation — Information Sheet
  (`name_availability_reservation_info_sheet`), 6 clauses (4 authority
  + 2 drafting), in the Business Formation category. No new field ids
  (one existing field id given a document-specific label/placeholder).
- Corpus: 2,266 → 2,272 clauses; 291 → 292 documents. First document of
  wave 61.
