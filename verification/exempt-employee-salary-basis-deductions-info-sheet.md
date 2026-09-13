# During employment, new document: The Salary-Basis Requirement for Exempt Employees: What Counts as a Salary and Which Deductions Are Recognized (Lab. Code § 515; Wage Order 4-2001, § 1(A); 29 C.F.R. §§ 541.602, 541.603; DLSE Enforcement Manual § 51.6; Negri v. Koning & Associates; Conley v. Pacific Gas & Electric Co.; Rhea v. General Atomics) — Information Sheet

## Wave

Wave 171 (During employment category). This wave continues the
even-round-robin cadence begun at wave 145 (Hiring / During employment
/ Estate Planning / Family Law); waves 147, 149, ..., 169 covered the
same four categories. This task ran in an isolated git worktree
(`worktree-agent-a40298d6d9657d767`) with no coordination with the
other three parallel wave-171 tasks. Every scratch file was written to
a uniquely-named scratchpad subdirectory (`w171_during/`) containing
only files this task created; no file written by another agent was
read or trusted.

## Why this document

Read `data/documents.json` first and enumerated all 88 existing
"During employment" documents before choosing a topic. Every example
topic named in the brief was grepped against both data files:

- **Pregnancy disability leave (Gov. Code § 12945)** — already covered
  by `pregnancy_disability_leave_info_sheet`.
- **School activities leave (Lab. Code § 230.8)** — already covered by
  `school_activities_leave_info_sheet`.
- **Military and veteran leave / USERRA** — covered by
  `military_status_employment_discrimination_info_sheet` (During
  employment) and `userra_military_leave_reemployment_info_sheet`
  (Ending employment).
- **Emergency-responder and volunteer-firefighter leave (§§ 230.3,
  230.4)** — covered by `volunteer_emergency_responder_leave_info_sheet`
  and `civil_air_patrol_leave_info_sheet`.
- **Day-of-rest rules (§§ 551-552; Mendoza v. Nordstrom)** — covered by
  `right_to_day_of_rest_info_sheet`.
- **Wage assignment / earnings assignment for support** — covered by
  `wage_garnishment_info_sheet` and `child_support_agreement`.

Further candidates checked and rejected as covered: off-duty cannabis
use / Gov. Code § 12954 (`drug_testing_info_sheet`), social-media
password protection (`social_media_password_protection_info_sheet`),
the ABC test (`california_abc_test_info_sheet`), travel and
employer-controlled time
(`employer_controlled_time_exit_searches_travel_info_sheet`), on-call
and sleep time (`on_call_standby_time_compensability_info_sheet`).

The chosen topic — the **salary-basis requirement**, i.e. what makes
exempt pay a "salary" and which deductions from it are recognized —
was then grepped clause-by-clause across the whole corpus:

- `"Negri"`, `"Koning"`, `"General Atomics"`, `"Conley"`,
  `"partial-day"`, `"partial day"`, `"docking"` — **zero** hits
  anywhere in `data/clauses.json`.
- `"salary basis"` — 5 documents. Four are boundary cases, not
  coverage: `exempt_final_week_salary_info_sheet` (Ending employment)
  covers only 29 C.F.R. § 541.602(b)(6), the initial-and-terminal-week
  exception; `furlough_info_sheet` (Ending employment) covers only the
  no-work-available deduction in a furlough; `flsa_classification` is a
  hiring/classification **form** describing the federal duties tests;
  `health_care_worker_minimum_wage_info_sheet` mentions the phrase in
  passing.
- `white_collar_exemption_primarily_engaged_test_info_sheet` (wave
  163) covers the **duties** half of the exemptions and the
  two-times-minimum-wage threshold **amount**. Its own
  `primengaged_salary_component` gap says expressly: "This clause does
  not describe the separate 'salary basis' requirement — the rule that
  the predetermined salary generally may not be reduced because of
  variations in the quality or quantity of work." That is precisely
  the hole this document fills.

The topic has real, checkable sources: a statute (Lab. Code § 515), an
operative wage order (Wage Order 4-2001, § 1(A)), the federal
regulations California follows (29 C.F.R. §§ 541.602, 541.603), three
published California Court of Appeal decisions (Negri, Conley, Rhea),
and a long published agency enforcement chapter (DLSE Manual § 51.6).

## What this document covers

Document id `exempt_employee_salary_basis_deductions_info_sheet`;
16 clauses (14 authority + 2 drafting), id-prefixed `salbasis_`:

- **`salbasis_intro`** (drafting) — scope; states that the sheet
  describes the law and does not classify any employee or evaluate any
  pay practice.
- **`salbasis_two_requirements_structure`** — Lab. Code § 515(a),
  (c); Wage Order 4-2001 § 1(A)(1)(f); Rhea at 1567 on the two-element
  structure; separates the pay **amount** from the pay **form**.
- **`salbasis_what_a_salary_is_negri`** — Negri at 395, 397, 400:
  hourly pay with no guaranteed minimum is not a salary.
- **`salbasis_federal_definition_followed_in_california`** —
  29 C.F.R. § 541.602(a); Negri at 398 (state law at least as
  protective); DLSE Manual §§ 51.6.8, 51.6.4.
- **`salbasis_weekly_measure_and_no_work_weeks`** —
  § 541.602(a)(1); DLSE Manual §§ 51.6.6, 51.6.9.
- **`salbasis_full_day_personal_absences`** — § 541.602(b)(1); DLSE
  Manual §§ 51.6.14.3, 51.6.10 (proration, five-to-six-day divisor,
  one-fifth cap).
- **`salbasis_sickness_or_disability_absences`** — § 541.602(b)(2);
  DLSE Manual §§ 51.6.15.2, 51.6.16, 51.6.16.1 (SDI is not a bona fide
  sick leave plan); the gap flags the tension between the Manual's
  exhaustion requirement and the federal text.
- **`salbasis_no_work_available`** — § 541.602(a)(2); DLSE Manual
  §§ 51.6.14, 51.6.14.1-.2 (three-day closure vs. full-week closure).
- **`salbasis_partial_day_absences_and_any_work`** — DLSE Manual
  §§ 51.6.15, 51.6.12, 51.6.13 (work at home; no reasonable
  expectation of being free of all duties).
- **`salbasis_leave_bank_deductions_conley_rhea`** — Conley at 263,
  271; Rhea at 1568, 1575 (no four-hour floor); the gap records that
  the Manual's § 51.6.15.4 four-hour sick-leave position predates Rhea.
- **`salbasis_jury_witness_military_leave`** — § 541.602(b)(3); DLSE
  Manual §§ 51.6.21, 51.6.21.1.
- **`salbasis_discipline_and_safety_penalties`** — § 541.602(b)(4),
  (b)(5); DLSE Manual § 51.6.19 (the federal safety-penalty deduction
  "may not be utilized" in California).
- **`salbasis_extra_pay_for_extra_work`** — DLSE Manual § 51.6.20
  (quoting Boykin v. Boeing Co.) and § 51.6.20.2; Negri at 400.
- **`salbasis_effect_of_improper_deductions`** — § 541.603(a), (c);
  DLSE Manual §§ 51.6.22.1-.2; Negri at 400.
- **`salbasis_what_this_does_not_decide`** — DLSE Manual § 51.6.23
  (remedy is loss of exemption, not a salary claim);
  § 541.602(b)(6)-(b)(7) as boundary markers.
- **`salbasis_ack`** (drafting) — signature block, same pattern as
  `primengaged_ack` / `commsalesexempt_ack`.

Fields: `companyName`, `employeeName`, `positionTitle` — all three
referenced by clause text; no unused fields.

Deliberately **excluded** (each already covered, and each named in a
gap as out of scope): the duties tests and the "primarily engaged in"
standard; the two-times-minimum-wage dollar figure; the
initial-and-terminal-week rule; furloughs; final pay; the § 515.5
computer software exemption; § 515.6 physicians; the outside
salesperson and commissioned inside sales exemptions; Lab. Code
§§ 221-224 deductions generally.

## Case-law research (no CourtListener MCP quota used)

No CourtListener MCP tool was called. All case work went through
`curl` via the environment proxy:

- The quota-free `/c/<reporter>/<volume>/<page>/` redirect resolved
  each citation to its opinion page: `/c/Cal.App.4th/216/392/` →
  opinion 1037418 (Negri), `/c/Cal.App.4th/131/260/` → 2281295
  (Conley), `/c/Cal.App.4th/227/1560/` → 2684971 (Rhea). All three
  returned HTTP 200 on the first attempt with
  `Referer: https://www.courtlistener.com/` plus a browser User-Agent
  and Accept headers.
- One earlier public-search API call (before the redirect route was
  used) returned HTTP 429; it was abandoned in favour of the
  quota-free redirects rather than retried.
- Three budgeted public-search **phrase** queries were then used as an
  index-side second check (below).

## Independent double-fetch

Every source was fetched twice into `w171_during/` by two independent
paths or two distinct User-Agent strings, and the two renderings were
required to agree:

- **Cal. Lab. Code § 515** — `leginfo.legislature.ca.gov`, two
  different query-string forms (`lawCode=LAB&sectionNum=515` vs.
  `sectionNum=515.&lawCode=LAB`) with Chrome/macOS UA vs.
  `curl-verify/2.0 (+groundtruth)`. Both HTTP 200; the extracted
  `codeLawSectionNoHead` text was **identical** (3,672 chars) after
  tag-stripping and whitespace normalization.
- **29 C.F.R. § 541.602 and § 541.603** — two genuinely independent
  hosts and formats: `www.ecfr.gov` versioner XML API (current text,
  date 2025-09-01, Chrome/Windows UA) and `www.govinfo.gov`
  CFR-2024-title29-vol3 section XML (`groundtruth-verify/1.0`). The
  quoted paragraphs are identical in both. (The eCFR API rejects
  uncompressed requests with HTTP 406; `--compressed` was added rather
  than any TLS or proxy change.)
- **IWC Wage Order 4-2001** — `https://www.dir.ca.gov/IWC/IWCArticle4.pdf`
  (3,291,219 bytes, md5 `11db167b9ac03e1d0adb88508a7ce381`, the same
  md5 recorded by earlier entries in this directory, which is itself a
  cross-wave corroboration).
- **DLSE Enforcement Policies and Interpretations Manual** —
  `https://www.dir.ca.gov/dlse/DLSEManual/dlse_enfcmanual.pdf` fetched
  twice with two distinct UAs (Safari-style vs. Firefox/Windows with
  `Accept: application/pdf`); both fetches **byte-identical**
  (4,457,559 bytes, md5 `b0e45ef97010c7472ec7ed693ca5ea21`, again the
  same md5 recorded by earlier waves).
- **Negri, Conley, Rhea** — each fetched twice: first by the
  quota-free `/c/` citation redirect with a Chrome/macOS header set,
  then directly at the canonical `/opinion/<id>/<slug>/` URL with a
  Firefox/Windows header set and different Accept/Accept-Language
  headers. For each case the two extracted `<article>` texts were
  **byte-identical** after normalization (Negri 17,858 chars; Conley
  24,625; Rhea 37,474).

**Disclosed limitation:** the IWC wage orders and the DLSE Manual are
published by the Department of Industrial Relations at a single URL
each; the official Cal. Code Regs. tit. 8 text sits behind a
JavaScript viewer that is not fetchable here, and Justia, FindLaw,
Google Scholar and case.law are egress-blocked. Those two sources were
therefore fetched twice with distinct User-Agent strings — the
fallback the task brief expressly permits — rather than by two
independent paths. The wage-order sentence quoted here
(§ 1(A)(1)(f)) is additionally corroborated by Lab. Code § 515(a) and
§ 515(c) from leginfo, which state the same two-times-minimum-wage and
40-hour rules on a different host. The two CourtListener fetches per
case share one backend; the phrase queries below were run against
CourtListener's search index, which is a different backend from the
opinion HTML renderer.

## Quote verification

`verify.py` rebuilt a normalized text of each source (NFKC, curly
quotes and dashes folded, nbsp → space, whitespace collapsed; PDFs
extracted with `pdfplumber`; CourtListener pages reduced to their
`<article>` element with tags stripped) and checked every
`citations[].quote` for exact substring containment in **each** fetch
of its cited source.

**Result: 46 of 46 quotes verified, 0 failed.**

Defects found and handled, each disclosed in the relevant clause's
`gap`:

1. **DLSE Manual § 51.6.20 (Boykin quotation)** — the PDF breaks the
   compound "one-half" across a line ("at one-" / "half time"). The
   line-break hyphenation was closed to "one-half time"; the
   correction, and the fact that nothing else in the quote was
   changed, is disclosed in `salbasis_extra_pay_for_extra_work`'s gap.
   The verifier accepts this join explicitly rather than by loose
   matching.
2. **DLSE Manual §§ 51.6.12, 51.6.13** — the PDF's text layer carries
   stray intra-word spaces ("employe e", "tim e", "rev iewin g",
   "exem pt", "o f", "availab le") and the apparent typo "absence of a
   day of more". Those quotes are reproduced **exactly as the source
   renders them** and the gap of
   `salbasis_partial_day_absences_and_any_work` says so, so a reader
   comparing against the PDF sees the same characters.
3. **DLSE Manual § 51.6.8** — reads "constituting all of part of his
   compensation" where the federal regulation reads "all or part".
   Quoted verbatim with the error, disclosed in
   `salbasis_federal_definition_followed_in_california`'s gap.
4. **DLSE Manual § 51.6.15.2** — contains "Deductions may by made" and
   "increments of full working day"; quoted as it appears and
   disclosed in `salbasis_sickness_or_disability_absences`'s gap,
   together with the substantive tension between that section's
   exhaustion requirement and 29 C.F.R. § 541.602(b)(2).
5. **DLSE Manual § 51.6.21** — the sentence introducing the jury-duty
   rule renders "concerning" as "conc erning"; the quotation begins
   after that phrase, disclosed in
   `salbasis_jury_witness_military_leave`'s gap.
6. **Negri holding sentence** — the word "salary" is italicized, so
   the fetched text places it on its own line; that line break was
   collapsed to a single space, disclosed in
   `salbasis_what_a_salary_is_negri`'s gap.
7. **Rhea and Conley passages with reporter star-pagination markers or
   OCR damage** (e.g. Conley's "ELSA" for "FLSA" and "C.ER." for
   "C.F.R."; Rhea's "at P- 6"; Rhea's *1576 marker inside the
   four-hour holding sentence) were **avoided**: every quoted passage
   was chosen to be free of star markers and OCR defects, which is why
   the Rhea holding is quoted from 1575 ("we find no basis in
   California law ...") rather than from the sentence at 1575-1576
   that the page break splits.
8. **DLSE Manual § 51.6.15.1 worked example** prints the same division
   as both $138.45 and $138.46; neither figure is quoted, and the
   discrepancy is noted in `salbasis_full_day_personal_absences`'s gap.

**Independent phrase-level second check of the case quotes** (brief
option (d)): three CourtListener public-search queries, budgeted and
spaced to avoid throttling, each returning **count 1** against the
expected cluster:

- `cluster_id:1037418 AND "A salary is generally understood to be a fixed rate of pay as distinguished from an hourly wage"` → Negri v. Koning & Associates, 216 Cal. App. 4th 392, filed 2013-05-16.
- `cluster_id:2281295 AND "we find nothing in California law that precludes employers from following the federal rule"` → Conley v. Pacific Gas & Electric Co., 131 Cal. App. 4th 260, filed 2005-07-21.
- `cluster_id:2684971 AND "we find no basis in California law for concluding that an employer is prohibited from requiring exempt employees"` → Rhea v. General Atomics, 227 Cal. App. 4th 1560, filed 2014-07-21.

The reporter citations and filing dates returned by the index match
the `cite` fields used in the clauses.

**Pincites** were derived mechanically (`pages.py`) from the
star-pagination markers in the fetched texts, not from memory: each
quote's starting page was computed as the last `*NNN` marker preceding
it, and every `cite` was required to match. Two drafted pincites were
**corrected** by that check — the Rhea two-element sentence from 1566
to 1567, and the Negri holding sentence from 394 to 395 — after which
all 11 case pincites match.

## Schema validation

Read `data/clauses.json` and `data/documents.json` before writing, and
matched the patterns of the most recent During-employment info sheets
(`white_collar_exemption_primarily_engaged_test_info_sheet`,
`outside_salesperson_exemption_info_sheet`). `merge.py` asserted
before writing:

- every authority clause has exactly the keys
  `{id,title,kind,status,checkedDate,body,gap,citations}` **in that
  order**, `status` `verified`, `checkedDate` `2026-09-13`, and a
  non-empty `gap`;
- every citation has exactly `{case,cite,url,quote}` in that order,
  all non-empty;
- every drafting clause has exactly `{id,title,kind,body}`;
- the document has exactly
  `{id,title,description,categories,clauseOrder,fields}`;
- no new clause id or document id collides with an existing one.

## Corpus-wide validation after merge

`validate.py` re-read both files after writing and confirmed:

- both parse as JSON;
- no duplicate clause id across all **6,031** clauses and no duplicate
  document id across all **701** documents;
- every `clauseOrder` entry in every document resolves to an existing
  clause (0 missing);
- every `{{placeholder}}` in every clause used by a document resolves
  to a field declared by that document (0 unresolved);
- all 16 new clauses are referenced by the new document;
- the During employment category now holds **89** documents (was 88),
  matching the other categories' 88-89 range.

`git diff --stat` shows **488 insertions, 0 deletions** across the two
data files, confirming that the re-serialization (2-space indent,
UTF-8, `ensure_ascii=False`, trailing newline) reproduced the existing
files outside the appended entries.

## "Inform, never advise" check

Every clause states what the statute, the wage order, the federal
regulations, the Court of Appeal, or the DLSE say. No clause tells the
reader what to do, whether any deduction was proper, whether any
position is exempt, or what policy to adopt. The intro clause says
expressly that the sheet "describes the law; it does not classify any
employee as exempt or nonexempt, does not evaluate any pay practice,
and does not state whether any particular deduction was proper," and
the gaps of `salbasis_sickness_or_disability_absences`,
`salbasis_leave_bank_deductions_conley_rhea`,
`salbasis_discipline_and_safety_penalties`, and
`salbasis_effect_of_improper_deductions` each mark the point at which
the sources stop rather than filling the space with guidance.

## Sources cited in the document

| Source | URL |
| --- | --- |
| Cal. Labor Code § 515(a), (c) | https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=515 |
| IWC Wage Order No. 4-2001, § 1(A)(1)(f) (Cal. Code Regs., tit. 8, § 11040) | https://www.dir.ca.gov/IWC/IWCArticle4.pdf |
| 29 C.F.R. § 541.602 (salary basis) | https://www.ecfr.gov/current/title-29/subtitle-B/chapter-V/subchapter-A/part-541/subpart-G/section-541.602 |
| 29 C.F.R. § 541.603 (effect of improper deductions) | https://www.ecfr.gov/current/title-29/subtitle-B/chapter-V/subchapter-A/part-541/subpart-G/section-541.603 |
| DLSE Enforcement Policies and Interpretations Manual §§ 51.6.4-51.6.23 | https://www.dir.ca.gov/dlse/DLSEManual/dlse_enfcmanual.pdf |
| Negri v. Koning & Associates (2013) 216 Cal.App.4th 392 | https://www.courtlistener.com/opinion/1037418/negri-v-koning-associates/ |
| Conley v. Pacific Gas & Electric Co. (2005) 131 Cal.App.4th 260 | https://www.courtlistener.com/opinion/2281295/conley-v-pacific-gas-electric-co/ |
| Rhea v. General Atomics (2014) 227 Cal.App.4th 1560 | https://www.courtlistener.com/opinion/2684971/rhea-v-general-atomics/ |

Second-fetch corroboration for the two federal regulations came from
https://www.govinfo.gov/content/pkg/CFR-2024-title29-vol3/xml/CFR-2024-title29-vol3-sec541-602.xml
and the corresponding `-sec541-603.xml`.
