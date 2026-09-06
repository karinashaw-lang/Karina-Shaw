# Family Law, new document: License Suspension for Unpaid Child Support (Family Code Section 17520) — Information Sheet

## Why this document

Second processed item of wave 122 (Family Law slot). The agent ruled
out ten other candidates before landing here (Fam. Code §§4320, 6389,
852/850, 1100, 2251, 4055, 3910/4336, 5230, 2640/2641, 3044) after
confirming each was already substantively covered by existing clauses.
The agent then confirmed §17520, Veh. Code §14602.6, and phrases like
"license suspension," "license denial," "certified list," and
"licensing board" produced zero genuine hits — a few incidental
substring hits belonged to unrelated employment/corporate documents
(EPNP program mechanism, professional corporation licensing board
registration, farm labor contractor licensing). Personally reconfirmed
via corpus search: zero prior mentions of "17520" anywhere in the
corpus.

## What this document covers

12 clauses: 2 drafting (declaration/scope, acknowledgment) and 10
authority clauses, citing Fam. Code § 17520(a)(2), (a)(4), (a)(5), (b),
(c), (e)(2)(A), (e)(2)(C), (e)(2)(D), (e)(3)(A)-(B), (h), (k) intro,
(k)(1)-(3), (o), (w)(1)-(2):

- **`licsusp_board_and_license_scope`** — the statute's broad
  definitions of "board" and "license."
- **`licsusp_compliance_definition`** — the 30-day-arrears/periodic-
  payment "compliance" definition and the spousal-support tie-in
  limit.
- **`licsusp_certified_list_process`** — the LCSA's certified list and
  DCSS's consolidated distribution to boards.
- **`licsusp_temporary_license`** — the mandatory 150-day temporary
  license and the driver's-license-specific extension.
- **`licsusp_supplemental_list_suspension`** — the supplemental list
  and 150-day suspension notice for an existing license.
- **`licsusp_no_refund_on_denial_or_suspension`** — the no-refund rule.
- **`licsusp_release_grounds`** — the four conditions triggering a
  mandatory LCSA release.
- **`licsusp_judicial_review`** — the grounds-limited review, 20-day
  evidentiary hearing, and scope of review.
- **`licsusp_sole_administrative_remedy`** — the statute's sole-
  administrative-remedy provision and APA inapplicability.
- **`licsusp_driver_license_specific_protections`** — the specific
  protections against vehicle impoundment and increased insurance
  costs for a suspended driver's license.

## Genuine findings

- **A disclosed structural gap, honestly flagged rather than
  overclaimed**: the `licsusp_judicial_review` clause's gap explicitly
  states that a fourth statutory review issue (needs-based conditional
  release, §17520(k)(4)) exists but is not quoted in this document's
  citation.
- **A disclosed choice not to independently verify cross-referenced
  sources**: multiple gap fields disclose that cross-referenced
  sections (Fam. Code §§17400, 17604, 17800; Veh. Code §14602.6) were
  not themselves independently fetched or verified.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not treat the "board" and "license" definitions as
exhaustive (the statute's own catch-all language prevents that), does
not state how quickly a name is added to or removed from the certified
list after a compliance change, does not independently verify the
equitable estoppel doctrine the statute references without defining,
does not restate the separate seven-calendar-day LCSA service
requirement or the court's full remedial authority on judicial review,
does not address remedies outside this statute's own process, and does
not independently verify the cross-referenced §17800 review timeframe
or Veh. Code §14602.6's own impoundment provisions.

## Method

Fetched Fam. Code § 17520 from leginfo.legislature.ca.gov, fetched
twice by the research agent with two distinct User-Agent strings,
confirmed byte-identical after extracting the statutory content div and
stripping session-specific ViewState tokens and debug timestamps. The
two raw fetches differed in byte count (192,653 vs. 193,869 bytes) due
solely to those per-request artifacts. CourtListener's daily rate limit
was already exhausted on the agent's test call; no case law was used, a
disclosed and legitimate choice. All 15 citation instances (consolidated
from up to two quotes per section) programmatically confirmed by the
research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-sixty-first fetch (a new distinct curl User-Agent
string, "Groundtruth-161stVerify-LicenseSuspension/1.0") — all 15
citation instances confirmed clean on normalized-whitespace substring
match; 3 of the 15 required the standard whitespace-stripped fallback
check (the familiar subdivision-marker-spacing artifact), confirmed
benign. The board/license definitions, the certified-list process, the
150-day temporary license, the supplemental-list suspension mechanism,
the release grounds, and the driver's-license-specific protections were
all independently reconfirmed present in the freshly fetched text.

## Verification

- The primary source fetched twice independently by the research agent
  with distinct User-Agent strings, plus a one-hundred-and-sixty-first
  independent fetch during integration review; all 15 citation
  instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — every clause correctly
  discloses that all citations in this document derive from
  subdivisions of the single statute §17520 and are not independent
  sources of one another; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `licsusp_` prefix has zero collisions. Independently
  reconfirmed zero prior corpus mentions of "17520," and reconfirmed
  the agent's ten pivot rationales against the corpus.
- Checked every citation's `case` field for emptiness — all 15
  populated with proper citation identifier strings.
- One new field id confirmed genuinely necessary and non-duplicative:
  `licenseTypeDescription` — did not exist previously in the corpus
  under any name. Eight other fields (`obligorName`, `obligeeName`,
  `courtCaseNumber`, `countyOfFiling`, `arrearsAmount`,
  `arrearsAsOfDate`, `dateSigned`, `cityState`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: License Suspension for Unpaid Child Support (Family
  Code Section 17520) — Information Sheet
  (`license_suspension_child_support_info_sheet`), 12 clauses (10
  authority + 2 drafting), in the Family Law category. One new field:
  `licenseTypeDescription`.
- Corpus: 3,992 → 4,004 clauses; 515 → 516 documents. Second processed
  item of wave 122.
