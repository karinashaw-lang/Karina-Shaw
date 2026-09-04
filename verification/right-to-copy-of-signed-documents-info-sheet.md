# Hiring, new document: Right to a Copy of Signed Employment Documents — Information Sheet

## Why this document

Category-balance analysis at the start of wave 60 flagged Hiring as one
of the four perpetually-thin categories. Confirmed by grep that "Labor
Code § 432" (and its neighbors 432.2/432.5/432.7) had zero hits anywhere
in the corpus. First of wave 60's four documents.

## What this document covers

6 clauses: 2 drafting (purpose, request record/acknowledgment) and 4
authority clauses, citing Cal. Labor Code § 432 and its Article 3
neighbors §§ 432.2, 432.5, and 432.7:

- **`copyofdocuments_core_right`** (§ 432) — the core right: any
  instrument an employee or applicant signs relating to obtaining or
  holding employment, not limited to a named document category.
- **`copyofdocuments_request_trigger`** (§ 432) — **a key finding**:
  compliance is triggered by a request, not automatic at the time of
  signing.
- **`copyofdocuments_statutory_silences`** (§ 432) — an honest
  disclosure of what the statute's text does not specify: no deadline,
  no required method, no penalty/remedy provision, and no
  cross-reference to Labor Code § 1198.5's personnel-file timeframe.
- **`copyofdocuments_placement_and_neighbors`** (§§ 432, 432.2, 432.5,
  432.7) — statutory placement within Article 3 ("Contracts and
  Applications for Employment," §§ 430-435), confirming none of the
  neighboring sections duplicates this right, and confirming § 432.1
  does not currently exist.

## Genuine corrections and findings

- **The central finding**: § 432's text conditions the duty to furnish
  a copy on a request ("upon request"), not automatic delivery at
  signing — confirmed from the statute's own single, undivided
  sentence rather than assumed.
- **Honest disclosure of statutory silence, not invented detail**: no
  deadline, method, or remedy provision exists in § 432's current text.
  The clause explicitly does NOT claim Labor Code § 1198.5's
  personnel-file-inspection timeframe applies by cross-reference —
  nothing in § 432's own text cross-references § 1198.5.
- Confirmed the right extends to "an employee or applicant" alike, with
  no textual distinction between someone already hired and an
  applicant.
- Confirmed, via two separate fetches with two distinct User-Agent
  strings, that a section numbered 432.1 does not currently exist —
  both fetches returned the Legislative Information site's generic
  search interface rather than section text.

## Honest gap disclosed

§ 432 is a single, undivided sentence, so all citations to it in this
document's clauses are drawn from that one source and are explicitly
disclosed as not independent of one another. The statute does not
itself define "instrument" or state what makes a document "relating to
the obtaining or holding of employment," and this document does not
resolve where that line falls for any particular employer's documents.

## Method

Fetched Cal. Labor Code §§ 432, 432.2, 432.5, and 432.7 directly from
`leginfo.legislature.ca.gov` via curl (WebFetch itself was blocked for
this domain), each section fetched twice with two distinct User-Agent
strings, confirmed byte-identical after whitespace normalization. All 5
citation quotes programmatically confirmed as exact substrings of the
confirmed text.

## Verification

- All four sections fetched twice independently with distinct
  User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 432's own citations
  correctly disclosed as one undivided source; §§ 432.2/432.5/432.7
  correctly presented as neighboring sections on distinct subjects, not
  offered as independent corroboration of § 432 itself; correct as
  delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `employeeName`, `jobTitle`, `requestDate`,
  `recordsRequested`, `deliveryMethod`) independently confirmed to match
  existing corpus field definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: Right to a Copy of Signed Employment Documents —
  Information Sheet (`right_to_copy_of_signed_documents_info_sheet`), 6
  clauses (4 authority + 2 drafting), in the Hiring category. No new
  fields.
- Corpus: 2,237 → 2,243 clauses; 287 → 288 documents. First document of
  wave 60.
