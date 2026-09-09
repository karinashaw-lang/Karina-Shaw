# Ending employment, new document: California Call Center Relocation Notice Law (Labor Code §§ 1409-1413) — Information Sheet

## Why this document

This project's existing California WARN Act (Cal/WARN) Information Sheet
document explicitly disclosed a gap: "The separate call-center-relocation
article (Labor Code §§ 1409-1413, which applies its own relocation
definition to call centers specifically) was identified but deliberately
excluded as out of scope for a general information sheet." That is a
direct signal of a genuinely uncovered, well-defined statute. Confirmed
by reading the full text of `data/documents.json`'s 76 existing "Ending
employment" documents that no document addresses Labor Code §§ 1409-1413,
and by grepping the corpus for "call center" (only the two hits noted
above, both in the Cal/WARN gap disclosure and unrelated estate-planning
documents) and "1409"/"1410"/"1411"/"1412"/"1413" (no hits). This is part
of wave 146 (Ending employment category), one of four parallel,
isolated-worktree documents added across Confidentiality & IP, Ending
employment, Business Formation, and Real Estate.

## What this document covers

9 clauses: 2 drafting (scope declaration, acknowledgment/signature) and 7
authority clauses, all citing California Labor Code §§ 1409-1413 (Article
2, "Relocation of Call Centers," of Chapter 4 of Part 4 of Division 2,
added by Stats. 2022, Ch. 752 (AB 1601), and amended by Stats. 2023, Ch.
131 (AB 1754)):

- **`callcenterreloc_definitions`** (§ 1409(a), (b), (b)(1), (b)(3)) —
  what counts as a "call center," a "call center employer," and a
  "relocation of a call center" (the 30%-of-volume threshold to a foreign
  country), and the deliberate exclusion of the general Cal/WARN
  "relocation" definition (§ 1400.5(e)) for this article.
- **`callcenterreloc_notice_requirement`** (§ 1410(a)) — the notice
  trigger (via § 1401), the single-combined-notice option, and the
  required "This notice is for the relocation of a call center" heading.
- **`callcenterreloc_edd_list_and_services`** (§ 1410(b)-(c)) — the EDD's
  semiannual published list of relocating call center employers, and EDD/
  workforce-board services for affected employers and employees.
- **`callcenterreloc_ineligibility_consequences`** (§ 1411(a)) — the
  five-year ineligibility for state grants, state-guaranteed loans, and
  tax credits that follows from appearing on that list.
- **`callcenterreloc_waiver_of_ineligibility`** (§ 1411(b)-(c)) — the
  good-cause waiver process and the "appropriate agency" definition.
- **`callcenterreloc_no_effect_on_other_benefits`** (§ 1412) — this
  article does not narrow unemployment compensation, disability
  payments, or worker retraining/readjustment funds.
- **`callcenterreloc_rulemaking_authority`** (§ 1413) — Labor
  Commissioner and EDD rulemaking authority under the APA.

## Genuine findings

- Confirmed this is a genuinely separate statutory article from the
  general Cal/WARN mass-layoff/relocation/termination provisions already
  covered by the corpus's `california_warn_act_info_sheet` document — it
  has its own definitions (§ 1409(b) expressly carves the general
  § 1400.5(e) "relocation" definition *out* of this article and supplies
  a call-center-specific one instead), its own notice-heading requirement
  layered on top of the general § 1401 notice, and consequences (state
  grant/loan/tax-credit ineligibility) the general Cal/WARN Act does not
  impose at all.
- Confirmed § 1410(b)'s published list is required to include the
  elements the *federal* WARN Act (29 U.S.C. § 2101 et seq.) requires —
  an odd cross-reference (a California list required to contain federal-
  statute elements) verified directly against the statutory text rather
  than assumed.
- Confirmed the five-year ineligibility under § 1411(a) attaches not only
  to employers that actually appear on the EDD's list, but also to an
  employer "who should have appeared on the list but did not provide
  notice as specified" — i.e., the ineligibility is not avoidable simply
  by skipping notice.
- Confirmed § 1412's benefits-preservation clause is a rule of
  construction ("shall not be construed to permit withholding or denial
  ...") rather than an independent grant of unemployment compensation,
  disability payments, or retraining funds — disclosed as a gap rather
  than overstated, since a worker's actual eligibility for those benefits
  is governed by separate statutes this document does not restate.

## Honest gaps disclosed

- `callcenterreloc_definitions`: does not independently re-verify the
  underlying § 1400.5 definitions it cross-references (covered in depth
  by the corpus's existing Cal/WARN document); states only that the
  § 1400.5(e) relocation definition is excluded, without reproducing that
  excluded definition's text.
- `callcenterreloc_notice_requirement`: does not restate § 1401's own
  notice-content requirements (recipients, timing, rapid-response/
  CalFresh disclosures), covered by the corpus's existing Cal/WARN
  document.
- `callcenterreloc_edd_list_and_services`: does not verify what the
  federal WARN Act's own "elements" are (covered by this project's
  Federal WARN Act document); notes neither subdivision states a
  publication deadline or defines "workforce service."
- `callcenterreloc_ineligibility_consequences`: does not define "state
  grants," "state-guaranteed loans," or "tax credit," and notes the
  statute's text does not distinguish pre-existing awards from new ones.
- `callcenterreloc_no_effect_on_other_benefits`: notes this is a rule of
  construction, not an independent benefits grant, and cross-references
  this project's separate UI-eligibility documents for the actual
  eligibility rules.
- `callcenterreloc_rulemaking_authority`: does not verify whether the
  Labor Commissioner or EDD has in fact adopted implementing regulations
  under this authority.

## Method

Fetched Cal. Labor Code §§ 1409, 1410, 1411, 1412, and 1413 directly from
`leginfo.legislature.ca.gov` (via its `printCodeSectionWindow.xhtml`
endpoint, since the standard `codes_displaySection.xhtml` page is
JavaScript-rendered and does not expose section text to a plain HTTP
fetch — WebFetch itself was blocked by the network egress proxy for this
domain, consistent with the prior Cal/WARN document's finding, so two
independent `curl` requests were used instead). Each of the 5 sections
was fetched twice, independently, using two distinct User-Agent strings
(a Windows/Chrome-style string and a macOS/Safari string) — all 10
fetches (5 sections × 2 fetches) returned HTTP 200 and were confirmed
byte-identical via `diff`. The canonical `codes_displaySection.xhtml` URL
form (matching the convention already used throughout the corpus for
Labor Code citations) is used as each citation's `url` field, since that
is the stable, human-navigable citation URL — the `printCodeSectionWindow`
endpoint used for the fetch itself is a rendering-only alternate that
returns the identical statutory text without the JavaScript wrapper.

## Verification

- All 5 sections fetched twice independently with two distinct
  User-Agent strings; all 10 fetches returned HTTP 200 and were
  byte-identical (`diff` confirmed no differences).
- All 13 citation quotes across the 7 authority clauses programmatically
  re-verified as exact substrings (after whitespace normalization only —
  no other character-level correction was needed; curly quotes and other
  punctuation in the statutory text were copied character-for-character
  from the fetched source) of both independently fetched copies of their
  source section. No genuine quote defects were found.
- Checked for `{{` leakage and unresolved placeholders: only
  `{{companyName}}`, `{{employeeName}}`, and `{{relocationDate}}` are
  used, and all three are declared in the document's `fields`.
- Checked every authority clause has exactly the schema key set
  `{id,title,kind,status,checkedDate,body,gap,citations}` and every
  citation has exactly `{case,cite,url,quote}`; every drafting clause has
  exactly `{id,title,kind,body}`. Confirmed programmatically against
  `data/clauses.json`'s existing key-set conventions.
- Checked the document object has exactly
  `{id,title,description,categories,clauseOrder,fields}`.
- Checked for duplicate clause ids and duplicate document ids against the
  full corpus (none) — programmatically, both before and after merging.
- Checked every clause id in the new document's `clauseOrder` resolves to
  an existing clause in `data/clauses.json` (all 9 resolve).
- Confirmed both `data/clauses.json` and `data/documents.json` still
  parse as valid JSON after the merge.

## Net changes

- New document: California Call Center Relocation Notice Law (Labor Code
  §§ 1409-1413) — Information Sheet
  (`call_center_relocation_notice_info_sheet`), 9 clauses (7 authority +
  2 drafting), in the Ending employment category. New fields:
  `relocationDate` (companyName and employeeName reuse the existing
  corpus-wide field ids and conventions).
- Corpus: 4,845 → 4,854 clauses; 600 → 601 documents. Wave 146 (Ending
  employment category; one of four parallel documents added this wave
  across Confidentiality & IP, Ending employment, Business Formation, and
  Real Estate, each in its own isolated git worktree).
