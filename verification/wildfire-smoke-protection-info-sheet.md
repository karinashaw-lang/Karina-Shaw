# During employment, new document: Wildfire Smoke Protection — Information Sheet

## Wave

Wave 147 (During employment category). This wave continues the
even-round-robin cadence started by wave 145 (Hiring / During
employment / Estate Planning / Family Law); wave 146 covered the other
four categories.

## Why this document

Read `data/documents.json` and enumerated all 76 existing "During
employment" documents before choosing a topic. Confirmed the topic
areas suggested in the task brief (paid sick leave, pregnancy
disability leave, kin care, jury duty/witness leave, Cal/OSHA
injury/illness prevention basics) are already covered by existing
documents (`california_paid_sick_leave_info_sheet`,
`pregnancy_disability_leave_info_sheet`, `kin_care_info_sheet`,
`jury_duty_witness_leave_info_sheet`,
`injury_illness_prevention_program_info_sheet`). Also checked several
adjacent candidate topics by grepping document titles/ids/descriptions
and confirmed each was already covered elsewhere in the corpus:
personnel/payroll record inspection (`personnel_records_request`,
`personnel_payroll_record_retention_duration_info_sheet`, both in
Ending employment), consumer credit reports
(`consumer_credit_report_restriction_info_sheet`, Hiring), social
media password protection (`social_media_password_protection_info_sheet`,
Confidentiality & IP), polygraph testing
(`polygraph_lie_detector_prohibition_info_sheet`, Hiring), wage
garnishment (`wage_garnishment_info_sheet`, Ending employment), and
off-duty cannabis use / metabolite testing (fully covered by existing
`drugtest_cannabis_off_duty_protection` /
`drugtest_cannabis_exemptions` clauses in the Hiring-category
`drug_testing_info_sheet` document, plus a wave-85 gap-fix that added
cannabis-specific termination-protection clauses to the existing
Wrongful Termination document — confirmed by reading
`verification/cannabis-termination-protection-gap-fix.md`).

Also confirmed the existing `heat_illness_prevention_info_sheet`
document (8 Cal. Code Regs. §§ 3395/3396) does not cover wildfire
smoke: it addresses heat-related illness from high ambient
temperature, not particulate-matter exposure from wildfire smoke,
which is governed by a separate Cal/OSHA regulation, 8 Cal. Code Regs.
§ 5141.1. Grepped the corpus for "wildfire" and "5141" and found zero
existing hits. Selected 8 Cal. Code Regs. § 5141.1 (Protection from
Wildfire Smoke) as a genuinely uncovered, well-scoped, single-source
topic of real practical relevance to California outdoor and
non-air-filtered indoor workers during wildfire season.

## What this document covers

10 clauses (8 authority + 2 drafting), all citing 8 Cal. Code Regs.
§ 5141.1:

- **`wildfiresmoke_declaration_and_scope`** (drafting) — introduces the
  document and its scope.
- **`wildfiresmoke_applicability_threshold`** (§ 5141.1(a)(1)) — the
  two-part applicability trigger: current AQI for PM2.5 of 151 or
  greater, and the employer should reasonably anticipate employee
  exposure to wildfire smoke.
- **`wildfiresmoke_exemptions`** (§ 5141.1(a)(2)) — the exempt
  categories: filtered enclosed buildings/structures, filtered enclosed
  vehicles, one-hour-or-less exposure, and wildland firefighters (plus
  the Appendix-A-measurement exemption, described but not quoted).
- **`wildfiresmoke_key_definitions`** (§ 5141.1(b)) — Current AQI
  (NowCast), PM2.5, and Wildfire Smoke definitions.
- **`wildfiresmoke_exposure_identification`** (§ 5141.1(c)) — the
  employer's duty to determine PM2.5 exposure at the start of each
  shift and periodically thereafter, and the listed methods.
- **`wildfiresmoke_communication_and_training`** (§ 5141.1(d)-(e)) —
  the hazard-communication system requirement and the training
  requirement, both tied to the section 3203 IIPP.
- **`wildfiresmoke_engineering_and_administrative_controls`**
  (§ 5141.1(f)(1)-(2)) — the engineering-controls-first, then
  administrative-controls-if-not-feasible hierarchy.
- **`wildfiresmoke_respirator_requirements`** (§ 5141.1(f)(3)) — the
  AQI 151-500 voluntary-use-but-must-offer respirator rule versus the
  AQI-above-500 mandatory-use rule.
- **`wildfiresmoke_emergency_operations`** (§ 5141.1(f)(4)) — the
  emergency-operations exception (rescue, evacuation, and
  utilities/communications/medical operations directly aiding such
  operations).
- **`wildfiresmoke_acknowledgment_signature`** (drafting) — signature
  block, following the exact pattern used by
  `heatillness_acknowledgment_signature`.

Fields: `companyName`, `employeeName`, `programAdministratorName` —
reused verbatim (same ids, labels, and placeholder style) from the
existing `heat_illness_prevention_info_sheet`,
`injury_illness_prevention_program_info_sheet`, and
`emergency_action_plan_info_sheet` documents. No new fields were
introduced.

## Independent double-fetch

WebFetch was blocked for `www.dir.ca.gov` by the network egress proxy
(`EGRESS_BLOCKED`), consistent with the task note that this host
requires the curl-through-proxy workaround. Fetched
`https://www.dir.ca.gov/title8/5141_1.html` twice independently via
`curl` through the environment's proxy, using two distinct User-Agent
strings:

1. `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
   (KHTML, like Gecko) Chrome/120.0 Safari/537.36`
2. `curl/8.0 GroundtruthResearchBot/1.0`

Both requests returned HTTP 200. `diff` on the two downloaded files
showed **zero differences** — the files are byte-for-byte identical
(confirmed additionally via matching md5sums), ruling out any
caching/mirroring artifact between the two fetches.

## Quote verification

Wrote a Node script that: (1) stripped the page's HTML tags from the
regulation body (between the `<h1>` heading and the `HISTORY` section),
decoded the `&#167;` (§) and `&amp;` entities, collapsed all whitespace
to single spaces, and (2) applied the identical whitespace-collapse
normalization to every `citations[].quote` string in the document's 8
authority clauses, then checked each normalized quote for exact
substring containment in the normalized source text.

Result: **all 18 quotes across all 8 authority clauses verified as
exact substrings of the fetched source.** No genuine defects were
found — the only normalization applied was collapsing whitespace
introduced by HTML tag-stripping (a benign formatting artifact, not a
content difference), so no `gap`-field correction disclosures were
needed for character-level defects. Two quotes
(`wildfiresmoke_key_definitions`) intentionally preserve the source's
literal curly quotation marks (“NowCast,” and “wildlands,”) exactly as
they appear in the regulation's own text (confirmed as UTF-8
U+201C/U+201D characters in the raw response bytes, not HTML entities).

## Schema validation

Read `data/clauses.json` and `data/documents.json` first to confirm
current schema shapes. Ran a Node script after merging that confirmed:

- Both JSON files still parse.
- All clause ids remain unique across all 4,889 clauses (4,879 → 4,889).
- All document ids remain unique across all 605 documents (604 → 605).
- Every id in the new document's `clauseOrder` exists in
  `data/clauses.json`.
- Every new authority clause has exactly the keys
  `{id,title,kind,status,checkedDate,body,gap,citations}` and every
  citation has exactly `{case,cite,url,quote}`.
- Every new drafting clause has exactly the keys
  `{id,title,kind,body}`.
- Every `{{field}}` placeholder used in the new drafting clauses'
  bodies is declared in the document's `fields` array.

## Net changes

- New document: Wildfire Smoke Protection — Information Sheet
  (`wildfire_smoke_protection_info_sheet`), category: During
  employment.
- 10 new clauses (8 authority + 2 drafting), all under the
  `wildfiresmoke_*` id prefix.
- No new fields (reused `companyName`, `employeeName`,
  `programAdministratorName`).
- Corpus: 4,879 → 4,889 clauses; 604 → 605 documents.
