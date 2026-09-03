# Hiring, new document: Polygraph and Lie Detector Test Prohibition — Information Sheet

## Why this document

Confirmed by grep that "polygraph," "lie detector," and "432.2" had zero
hits anywhere in the corpus. First of wave 54's four documents (the
"1×4" pattern — one new document in each of the four thinnest,
tied-at-33 categories: Hiring, During employment, Confidentiality & IP,
Ending employment).

## What this document covers

7 clauses: 2 drafting (purpose, acknowledgment) and 5 authority clauses,
citing Cal. Lab. Code §§ 432.2 and 433, and the federal Employee
Polygraph Protection Act (29 U.S.C. § 2002):

- **`polygraph_core_prohibition`** (§ 432.2(a)) — the blanket bar on
  demanding or requiring a polygraph/lie detector test as a condition of
  employment or continued employment, for applicants and employees alike.
- **`polygraph_public_employer_exception`** (§ 432.2(a)) — the same
  sentence's own express carve-out for federal, state, and local
  government employers.
- **`polygraph_written_notice_requirement`** (§ 432.2(b)) — a distinct,
  narrower rule: written notice of statutory rights before a *requested*
  (non-mandatory) test.
- **`polygraph_misdemeanor_penalty`** (§ 433) — a separately numbered
  section making violation of the containing article a misdemeanor.
- **`polygraph_federal_eppa_comparison`** (29 U.S.C. § 2002) — the
  overlapping federal Employee Polygraph Protection Act, independently
  verified rather than assumed parallel to California's narrower
  exception.

## Genuine corrections and findings

- **A real, easy-to-miss textual carve-out, surfaced as its own
  clause**: § 432.2's prohibition is not universal — its own text
  exempts federal, state, and local government employers by name. A
  reader assuming the statute reaches every California employer without
  exception would be assuming something the text does not say.
- Confirmed § 432.2(b)'s written-notice duty is a separate, narrower rule
  addressing a *requested* test, distinct from subdivision (a)'s absolute
  bar on a test demanded or required as a condition of employment.
- Confirmed § 433's misdemeanor penalty applies to the entire containing
  article (§§ 430–435), not to polygraph testing specifically — no
  polygraph-specific civil remedy or private right of action was located,
  and none is claimed.
- Independently verified the federal EPPA's prohibition (29 U.S.C.
  § 2002) rather than assuming it mirrors California's narrower
  government-employer exception — honestly disclosed that EPPA's own
  referenced exception sections (§§ 2006–2007) were not independently
  fetched, so their scope is flagged as unconfirmed.

## Honest gap disclosed

EPPA's exception sections (29 U.S.C. §§ 2006–2007) were not
independently verified. No polygraph-specific civil penalty or private
right of action beyond § 433's general misdemeanor provision was found.
The statute does not itself define what the § 432.2(b) written notice
must specifically say, and this document does not supply model notice
language.

## Method

Fetched Cal. Lab. Code §§ 432.2 and 433 from `leginfo.legislature.ca.gov`
and 29 U.S.C. § 2002 from `uscode.house.gov` (official U.S. Code text),
each independently re-fetched with a distinct User-Agent string and
confirmed byte-identical after whitespace normalization. All 5 citation
quotes programmatically confirmed as exact substrings of the confirmed
text.

## Verification

- All three sections fetched twice independently with distinct
  User-Agents; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 432.2(a) and (b) and
  § 433 are correctly disclosed as either the same-section subdivisions
  or genuinely separate sections; 29 U.S.C. § 2002 correctly disclosed as
  a genuinely independent federal source; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  accepted generic drafting-title reuses ("Purpose of This Information
  Sheet," "Acknowledgment").
- Field names (`companyName`, `employeeName`, `dateSigned`, `cityState`)
  independently confirmed to match existing corpus field definitions
  exactly (same ids, labels, placeholders as used elsewhere, e.g. in the
  Drug Testing information sheet). No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Polygraph and Lie Detector Test Prohibition —
  Information Sheet (`polygraph_lie_detector_prohibition_info_sheet`), 7
  clauses (5 authority + 2 drafting), in the Hiring category. No new
  fields.
- Corpus: 2,055 → 2,062 clauses; 263 → 264 documents. First document of
  wave 54.
