# Ending employment, new document: FEHA Administrative Complaint with California's Civil Rights Department — Information Sheet

## Why this document

Fourth and final document of wave 85. Read the full 50-document
"Ending employment" category. Confirmed the category is extraordinarily
dense on the wage/hour and mechanics side of termination (final pay,
WARN, UI claims/appeals, COBRA/Cal-COBRA, blacklisting, and Labor Code
§§ 1102.5/98.6 wrongful termination) but had never built a document
explaining the FEHA administrative complaint process itself — analogous
to how the corpus already has a DLSE Berman-hearing document for wage
claims and a UI-appeal document for benefits claims, but nothing
equivalent for the single most common termination-dispute claim
category. Grepped the corpus for "DFEH," "Civil Rights Department,"
"CRD," "right to sue," "12960," "12965," and "FEHA" — every real hit
either mentions the CRD only as the recipient of some other filing
(background-check adverse-action notices, pay-data reports, personnel-
record retention triggers) or covers a substantive FEHA prohibition
(religious accommodation, pregnancy leave, disparate-impact selection
criteria) rather than the administrative complaint process itself.
Confirmed the existing Wrongful Termination document covers only
§§ 1102.5/98.6 and never discusses filing a CRD complaint. Confirmed a
real, non-duplicative gap.

## What this document covers

7 clauses: 2 drafting (background/declaration, closing/signature) and
5 authority clauses, citing Cal. Gov. Code §§ 12960(b), (c), (e)(5),
and 12965(a)(1)-(2), (c)(1)(A), (c)(1)(D), (c)(3):

- **`crdcomplaint_filing_deadline`** (§ 12960(e)(5)) — the three-year
  deadline to file a FEHA employment-practices complaint with the
  Civil Rights Department.
- **`crdcomplaint_filing_mechanics`** (§ 12960(b), (c)) — the
  intake-form filing mechanism (with relation-back to the intake
  date) and the verified-complaint contents requirement.
- **`crdcomplaint_investigation_process`** (§ 12965(a)(1), (a)(2)) —
  the department's conference/conciliation/mediation process, its
  discretion to bring a civil action, and the mandatory internal
  dispute-resolution step preceding any such action.
- **`crdcomplaint_immediate_right_to_sue_option`** (§ 12965(c)(1)(A))
  — the option to request a right-to-sue notice instead of waiting for
  the department's 150-day/one-year investigation timeline.
- **`crdcomplaint_right_to_sue_effect_and_deadline`** (§ 12965(c)(1)(D),
  (c)(3)) — the right-to-sue notice's legal effect and the one-year
  civil-action deadline, plus superior-court jurisdiction.

## Genuine corrections and findings

- **A genuine finding, verified against the task's own caution**: the
  task brief flagged a possible 2023 renumbering of FEHA provisions
  into a restructured Civil Rights Department framework. The agent
  independently confirmed §§ 12960 and 12965 are still correctly
  numbered — they sit in Government Code Part 2.8 "Civil Rights
  Department" (renamed from "Department of Fair Employment and
  Housing" by Stats. 2022, Ch. 48), but the SECTION numbers were never
  moved. No renumbering-driven correction was needed, and the document
  correctly uses the current, verified section numbers.
- **A separate genuine finding**: both §§ 12960 and 12965 were very
  recently and substantively amended by Stats. 2025, Ch. 321 (SB 477),
  effective January 1, 2026 — new tolling mechanics at § 12960(f) and
  reworked § 12965(c)/(e)/(f) tolling provisions. This is disclosed in
  the relevant clauses' gap fields, and the document's checkedDate
  falls after the January 1, 2026 effective date.
- Correctly declined to use "immediate right-to-sue" as if it were the
  statute's own term — the clause discloses this phrase is the
  project's own description of the practical effect, not statutory
  language, and does not claim otherwise.
- Correctly declined to describe the CRD's current online intake
  portal or non-statutory administrative procedures — every clause
  states only what the statute itself provides.

## Honest gap(s) disclosed

The other filing deadlines in § 12960(e) for non-FEHA-employment
claims (Civil Code §§ 51, 51.5, 51.7, 51.9, 52.5, 54, 54.1, 54.2, and
Labor Code § 1197.5) are not restated. § 12960(e)(6)'s extension
categories and § 12960(f)'s civil-action tolling-while-pending rule are
named but not separately quoted. § 12965(c)(1)(F) and § 12965(e)-(f)'s
additional one-year-deadline tolling rules (dispute-resolution tolling,
written-agreement tolling, EEOC-deferral tolling) are named but not
quoted. This document does not determine that any specific complaint
was, would be, or would remain timely, or that any specific claim is
valid.

## Method

Fetched Cal. Gov. Code §§ 12960 and 12965 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. All 8 citation quotes across the 5 authority
clauses programmatically confirmed as exact contiguous substrings (no
ellipsis-joined quotes). Independently re-verified during integration
review via a thirty-first fetch (a distinct curl User-Agent string,
"Groundtruth-31stVerify-CRDComplaint/1.0") of both sections — all 8
quotes confirmed clean.

## Verification

- Both statutory sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a thirty-first
  independent fetch during integration review; all quotes confirmed
  clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same
  statutory section; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 8
  populated with proper case/citation identifier strings.
- Four fields reused (`employeeName`, 132 prior documents;
  `companyName`, 191; `allegedPracticeDescription`, 1; `dateSigned`,
  162; `cityState`, 140). Three new fields required — grepped the
  corpus and confirmed no existing date field fit the specific
  unlawful-practice-date/CRD-complaint-filed-date/right-to-sue-notice-
  date fact pattern this document's own timeline tracking needs.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: FEHA Administrative Complaint with California's Civil
  Rights Department — Information Sheet
  (`crd_feha_administrative_complaint_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Ending employment category. Three new
  fields (`allegedUnlawfulPracticeDate`, `crdComplaintFiledDate`,
  `rightToSueNoticeDate`).
- Corpus: 2,931 → 2,938 clauses; 386 → 387 documents. Fourth and final
  addition of wave 85.

## Wave 85 summary

Wave 85 closes at 2,938 clauses / 387 documents (from 2,922/385 at
this document's first sibling addition, itself following wave 84's
close at 2,915/384): Labor Code § 925 Forum/Choice-of-Law (Confidentiality
& IP), off-duty cannabis termination protection gap-fix (Ending
employment), Confidentiality of Medical Information Act employer
obligations (Confidentiality & IP), and this CRD/FEHA administrative
complaint document (Ending employment) — 2 documents/gap-fixes in each
of the two thinnest categories, following the established 2×2
strict-alternation pattern. Wave 86 should return to 1×4 across four
categories.
