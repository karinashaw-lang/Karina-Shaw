# During employment, new document: Domestic Worker Bill of Rights — Information Sheet

## Why this document

Confirmed by grep that "Domestic Worker Bill of Rights," "personal
attendant," and "1450" had zero substantive hits — the only mention
was an incidental cross-reference inside the Minor Work Permits
document, exempting minors in "personal attendant occupations" from a
schoolday-hours cap. First of wave 72's four documents
(Hiring/During employment/Confidentiality & IP/Ending employment
"1×4" alternation).

## What this document covers

6 clauses: 2 drafting (purpose/declaration, signature/acknowledgment)
and 4 authority clauses, citing Cal. Lab. Code §§ 1450, 1451(a)(1),
(b)(1), (b)(2)(B), (d), 1454, and 510(a):

- **`domesticworker_title_and_scope`** (§ 1450, § 1451(a)(1)) — the
  statute's title and its definition of "domestic work."
- **`domesticworker_personal_attendant_definition`** (§ 1451(d)) —
  the "personal attendant" definition and its 20%-other-work ceiling.
- **`domesticworker_employee_and_exclusions`** (§ 1451(b)(1),
  (b)(2)(B)) — "domestic work employee" status and the family-member/
  IHSS-worker exclusions.
- **`domesticworker_overtime_formula`** (§ 1454, § 510(a)) — **a key
  finding**: personal attendants get overtime at 1.5x after 9 hours/
  day or 45 hours/week — verified as genuinely different from the
  general California standard (8 hours/day, 40 hours/week), quoted
  side by side to make the contrast explicit rather than assumed.

## Genuine corrections and findings

- **The central finding**: confirmed the personal-attendant overtime
  thresholds (9 hours/45 hours) precisely from the statute's own text,
  and explicitly contrasted them against the general California
  overtime statute (§ 510(a)) rather than assuming personal attendants
  follow the standard 8-hour/40-hour rule.
- Confirmed Labor Code § 1453 does not exist as an assigned section
  number — verified via the Part's own chapter headers (Chapter 1
  covers §§ 1450-1452, Chapter 2 covers §§ 1454-1455) and an empty
  content div on both fetches, rather than treated as a fetch failure
  or guessed at.
- Confirmed the statute itself contains no meal-break or rest-break
  provisions for domestic workers — an honest, disclosed gap rather
  than an assumption that general wage-and-hour meal/rest rules don't
  apply.
- Confirmed the "no significant amount of work" 20% threshold that
  qualifies someone as a "personal attendant" as opposed to a general
  domestic work employee — a precise numeric definition verified
  against the actual text.

## Honest gap disclosed

§ 1451(a)(2)'s facility-based exclusion (care in board/lodging
facilities with medical/nursing/convalescent care) and § 1451(b)(2)(C)-(G)'s
additional exclusion categories (minors as babysitters, casual
babysitters, licensed health facility employees, certain regional-
center-funded caregivers, certain exempt child care providers) were
confirmed to exist but not separately quoted. §§ 1452 and 1455
(administrative/outreach provisions) were confirmed not to create
worker entitlements and were not built into their own clauses.

## Method

Fetched Cal. Lab. Code §§ 1450, 1451, 1454, and 510 from
`leginfo.legislature.ca.gov` via curl (through the sandboxed proxy),
each section fetched twice with distinct User-Agent strings, confirmed
byte-identical after whitespace normalization. All 6 citation quotes
across the 4 authority clauses programmatically confirmed as exact
substrings of the confirmed text.

## Verification

- All statutory sections fetched twice independently with distinct
  User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — the § 1451(b)(1)/
  (b)(2)(B) pair correctly disclosed as one statutory section; § 1454
  and § 510(a) correctly disclosed as independent, separately-numbered
  sections presented to draw an explicit contrast; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none); the
  reused title "Signature and Acknowledgment" matches this corpus's
  established cross-document pattern, not a substantive duplicate.
- Field names (`companyName`, `employeeName`, `jobTitle`, `startDate`,
  `dateSigned`, `cityState`) independently confirmed to match existing
  corpus field definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: Domestic Worker Bill of Rights — Information Sheet
  (`domestic_worker_bill_of_rights_info_sheet`), 6 clauses (4
  authority + 2 drafting), in the During employment category. No new
  fields.
- Corpus: 2,575 → 2,581 clauses; 335 → 336 documents. First document
  of wave 72.
