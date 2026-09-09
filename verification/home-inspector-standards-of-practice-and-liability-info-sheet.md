# Real Estate, new document: Home Inspector Standards of Practice and Liability — Information Sheet

## Why this document

Wave 148's Real Estate slot. Read `data/documents.json`'s full list of
the ~77 existing Real Estate documents before choosing a topic.
Confirmed by inspection that the corpus already covers structural
pest control inspection reports (a different licensing regime —
Structural Pest Control Board, Bus. & Prof. Code §§ 8516-8519), the
Transfer Disclosure Statement, mold/lead/bed-bug/pool/smoke-alarm
disclosures, the Davis-Stirling § 4525 HOA resale disclosure package,
and real estate broker/salesperson licensing — but found no document
on general home inspectors (the general-purpose inspector a buyer
typically hires to examine a 1-4 unit dwelling before purchase, not
the specialized pest inspector). Confirmed via `grep`/`json.dumps`
search across `data/documents.json` that "home inspector," "7195,"
"7196," "7197," "7198," and "7199" had zero prior hits. Confirmed
non-duplicative with the existing `hoa_ccr_disclosure` document (which
covers Civil Code § 4525 HOA document delivery, an unrelated regime)
and with `structural_pest_control_report_info_sheet` (a narrower,
differently-licensed inspection category).

## What this document covers

9 clauses: 2 drafting (purpose, acknowledgment) and 7 authority
clauses, all citing California's home inspector chapter, Business and
Professions Code §§ 7195-7199 (Div. 3, Ch. 9.3):

- **`homeinspect_definitions`** (§ 7195(a)(1), (b), (d)) — the
  statutory definitions of "home inspection," "material defect," and
  "home inspector."
- **`homeinspect_report_and_scope`** (§ 7195(c), (e)) — the
  definition of "home inspection report" and the broad definition of
  "transfer" (sale, exchange, installment land sale contract, lease
  with option to purchase, other option to purchase, or ground lease
  coupled with improvements, of 1-4 unit real property or a
  residential stock cooperative).
- **`homeinspect_standard_of_care`** (§ 7196) — the statutory
  "reasonably prudent home inspector" standard of care, expressly
  scoped to inspectors who are *not* separately licensed as a general
  contractor, structural pest control operator, or architect, or
  registered as a professional engineer.
- **`homeinspect_conflict_of_interest`** (§ 7197(a), (b)) — the four
  statutorily defined unfair business practices (self-dealing repairs
  on a recently-inspected structure, inspecting a property with a
  financial interest, referral compensation, contingent-fee
  inspections) and the home-protection-company exception.
- **`homeinspect_contractor_exceptions`** (§ 7197(d), (e)) — the
  conditioned C-39 roofing-contractor and C-36 plumbing-contractor
  (sewer lateral) exceptions to the self-dealing-repair prohibition.
- **`homeinspect_waiver_invalid`** (§ 7198) — contractual provisions
  purporting to waive the § 7196 duty or cap liability at the cost of
  the report are contrary to public policy and invalid.
- **`homeinspect_statute_of_limitations`** (§ 7199) — the four-year
  limitations period for a legal action for breach of duty arising
  from a home inspection report.

## Independent double-fetch

Fetched all five statutory sections (§§ 7195, 7196, 7197, 7198, 7199)
directly from `leginfo.legislature.ca.gov`, each fetched twice via
`curl` through the environment's proxy with two distinct User-Agent
strings ("...Groundtruth-Research/1.0" and "...GroundtruthBot/2.0").
Also confirmed § 7197.5 does not exist (empty result both times),
confirming the chapter's own bracketed range "[7195 - 7199]" is
accurate and no intervening section was missed. A `diff` of the
HTML-tag-stripped, entity-unescaped, whitespace-normalized text
between the two User-Agent fetches was byte-identical for every
section (the only difference between raw HTML fetches was a
per-request JSF `ViewState`/debug-URL session token, which is expected
per-request server-side noise, not a content difference).

## Quote-by-quote verification

Wrote a Python script that (1) built each citation's `quote` string
from the source text, (2) normalized whitespace (collapsing `\xa0`
non-breaking spaces and literal mid-sentence line-wrap newlines found
in the raw HTML to single spaces — a benign HTML line-wrap artifact,
not a wording change) in both the candidate quote and the full fetched
source text, and (3) confirmed each of the 12 quotes across the 7
authority clauses is an exact contiguous substring of *both*
independently-fetched (distinct User-Agent) copies of its section.
All 12 quotes confirmed present verbatim in both fetches of their
respective sections (7195 ×5 quotes, 7196 ×1, 7197 ×4, 7198 ×1,
7199 ×1). No genuine defects were found — only the benign nbsp/
line-wrap whitespace normalization described above, which required no
`gap` disclosure under the task's own benign-vs-genuine-defect
standard.

## Honest gap(s) disclosed

Several statutory subparts are deliberately not quoted, and each
clause's `gap` field says so:

- § 7195(a)(2)-(3): the pool/spa drowning-prevention-feature and
  optional energy-efficiency-inspection components of the "home
  inspection" definition (tied to Health & Safety Code § 115922) are
  not restated.
- § 7195(c)'s pool/spa-specific reporting content is not restated.
- § 7197(c) (the structural pest control operator carve-out,
  cross-referencing Bus. & Prof. Code § 8505) is not stated as its own
  clause — noted only as an item this document does not cover.
- § 7197(d)-(e)'s numbered sub-conditions (the specific content each
  consumer disclosure must include) are summarized in prose rather
  than quoted verbatim; only each exception's introductory sentence is
  quoted as a citation.
- No document determines, for any specific inspector, inspection, or
  contract, whether it satisfies these statutory standards — consistent
  with the corpus's "inform, never advise" rule.

## Method

Statutory sections fetched via `curl` (not WebFetch, which does not
expose header control) directly from `leginfo.legislature.ca.gov`,
twice each with distinct User-Agent strings. Extracted the
`id="single_law_section"` content block from each raw HTML response,
stripped tags, unescaped HTML entities, and normalized whitespace.
Built all 12 citation quotes as verbatim substrings located by
`str.find` against the extracted text (never hand-retyped independent
of the source), then re-verified programmatically against both
independently-fetched, normalized copies of each section.

## Verification

- Statutory sections fetched twice independently with distinct
  User-Agent strings via `curl`; all 12 quotes confirmed as exact
  contiguous substrings of both fetches, programmatically.
- Confirmed § 7197.5 does not exist, validating the chapter's own
  "[7195 - 7199]" range.
- Checked for `{{` leakage: only the three declared fields
  (`propertyAddress`, `clientName`, `homeInspectorName`) appear as
  placeholders, in exactly the clauses expected (`homeinspect_declaration`,
  `homeinspect_ack`); no undeclared or unused fields.
- Checked JSON schema against `data/clauses.json` and
  `data/documents.json`'s actual current key sets: all 7 authority
  clauses use exactly `{id,title,kind,status,checkedDate,body,gap,
  citations:[{case,cite,url,quote}]}`; both drafting clauses use
  exactly `{id,title,kind,body}`; the document uses exactly
  `{id,title,description,categories,clauseOrder,fields}` with fields
  `{id,label,placeholder,required}`.
- Checked for duplicate clause ids and duplicate document id against
  the full corpus before merging (none found; confirmed again
  post-merge).
- Corpus-wide validation script run after merging: both JSON files
  parse; all 4,922 clause ids unique; all 609 document ids unique;
  every clause id in every document's `clauseOrder` (not just the new
  document's) resolves to an existing clause — clean.
- `propertyAddress` reused from 69 prior documents; `clientName`
  reused from 1 prior document; `homeInspectorName` is a new field,
  scoped to this document only, since no prior Real Estate document
  needed to name a home inspector specifically.

## Net changes

- New document: Home Inspector Standards of Practice and Liability —
  Information Sheet (`home_inspector_standards_info_sheet`), 9 clauses
  (7 authority + 2 drafting), in the Real Estate category. One new
  field (`homeInspectorName`); two reused fields (`propertyAddress`,
  `clientName`).
- Corpus: 4,913 → 4,922 clauses; 608 → 609 documents. Wave 148's Real
  Estate addition.
