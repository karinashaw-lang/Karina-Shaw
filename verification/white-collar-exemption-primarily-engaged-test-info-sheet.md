# During employment, new document: The "Primarily Engaged In" Duties Test for the Executive, Administrative, and Professional Exemptions (Lab. Code § 515; Wage Order 4-2001, § 1(A); Ramirez v. Yosemite Water; Heyen v. Safeway) — Information Sheet

## Wave

Wave 163 (During employment category). This wave continues the
even-round-robin cadence started by wave 145 (Hiring / During
employment / Estate Planning / Family Law); waves 147, 149, ..., 161
covered the same four categories. This task ran in an isolated git
worktree with no coordination with the other three parallel wave-163
tasks, and every scratch file was kept in a uniquely-named scratchpad
subdirectory (`w163_during/`) that contained only files this task
created.

## Why this document

Read `data/documents.json` first and enumerated all 84 existing
"During employment" documents before choosing a topic. Confirmed that
the brief's own example topics and every recent addition it named were
already taken, including
`commissioned_employee_overtime_exemption_info_sheet` (wave 161),
`form_of_wage_payment_checks_scrip_payroll_cards_info_sheet`,
`repetitive_motion_injury_ergonomics_standard_info_sheet`,
`makeup_time_personal_obligations_info_sheet`,
`employer_controlled_time_exit_searches_travel_info_sheet`,
`hospital_nurse_patient_staffing_ratio_info_sheet`,
`time_clock_rounding_info_sheet`, and
`wildfire_smoke_protection_info_sheet`.

Checked the brief's other suggestions against the corpus and rejected
them as already covered:

- **Personnel-file inspection (Lab. Code § 1198.5)** — 51 hits in
  `data/clauses.json`; `personnel_records_request` is an entire
  document on § 1198.5 plus § 226(b)-(c), and
  `personnel_payroll_record_retention_duration_info_sheet` and
  `job_applicant_record_retention_info_sheet` cover the retention side.
- **Paid Family Leave (Unemp. Ins. Code § 3300 et seq.)** —
  `paid_family_leave_info_sheet` already exists.
- **PAGA notice and cure (§ 2699.3)** — 41 hits;
  `paga_notice_letter` is an entire document.
- **Whistleblower notice/poster (§ 1102.8)** — covered by
  `california_whistleblower_protection_info_sheet` and cited in
  `political_activity_protection_info_sheet`.

Grepped the whole corpus for the chosen topic and its near neighbours
before settling on it:

- `"Heyen"`, `"administrative exemption"`, `"Lab. Code § 515"` as a
  citation, `"one-half the employee"`, `"two times the state minimum
  wage"` (outside the § 515.5 sheet), `"11040, subd. 1(A)(1)"` —
  **zero** hits for the duties test itself.
- `"primarily engaged"` — 5 hits, none about this test
  (`genetic_information_privacy_act_info_sheet`,
  `computer_software_employee_overtime_exemption_info_sheet`).
- `"executive exemption"` — 7 hits in three clauses:
  `classification_exemption_test` (in the `flsa_classification`
  **form**, and describing the **federal** 29 C.F.R. § 541.100 test
  and the $684/week federal salary level, not California's quantitative
  test), `creditreport_definitions`, and
  `fwksalary_wage_order_incorporation_narrower`.
- `"Ramirez"` / `"Yosemite"` — 11 hits, all inside
  `commsalesexempt_two_prongs_and_employer_burden` (wave 161), which
  uses Ramirez only for narrow construction and the employer's burden
  in the § 3(D) commission context and expressly says in its gap that
  "[w]hether an employee falls within the administrative, executive, or
  professional exemptions in section 1(A) of the wage orders ... this
  document does not describe."

**California's "primarily engaged in" quantitative duties test** is
therefore genuinely uncovered, and it is the single most consequential
classification rule in California wage-and-hour law: it has a
controlling statute (Lab. Code § 515(a), (c), (e)), an operative
regulation (Wage Order 4-2001, § 1(A), § 2(N)), a California Supreme
Court decision drawing the state/federal distinction (Ramirez), a
Court of Appeal decision on concurrent duties that squarely refuses to
follow the 2004 federal concurrent-duties regulation (Heyen), and
published DLSE enforcement positions.

## What this document covers

14 clauses (12 authority + 2 drafting), id-prefixed `primengaged_`:

- **`primengaged_intro`** (drafting) — scope; states the sheet
  describes the law and does not classify any employee or evaluate any
  job.
- **`primengaged_overtime_default_and_section_515`** — Lab. Code
  § 510(a) overtime/double-time baseline; § 515(a)'s three conditions;
  § 515(c) ("full-time employment" = 40 hours/week); § 515(e)
  ("primarily" = more than one-half of worktime).
- **`primengaged_quantitative_definition_in_the_wage_order`** — Wage
  Order 4-2001 § 1(A) (Sections 3-12 do not apply), § 2(N) (more than
  one-half the employee's work time), and the full text of
  § 1(A)(1)(e) including the incorporated FLSA regulations and the
  "work actually performed ... realistic expectations and the realistic
  requirements of the job" sentence.
- **`primengaged_executive_duties_test`** — § 1(A)(1)(a)-(d).
- **`primengaged_administrative_duties_test`** — § 1(A)(2)(a)(i) and
  (b)-(f); gap discloses the PDF's out-of-order text layer in (a).
- **`primengaged_professional_duties_test`** — § 1(A)(3) opening,
  (a)-(b) opening, and (c).
- **`primengaged_salary_component`** — § 1(A)(1)(f) and (2)(g)
  (two times the state minimum wage; § 515(c) 40 hours); DLSE
  minimum-wage page ($16.90 effective Jan. 1, 2026); the document's
  own arithmetic ($33.80 / $1,352 weekly / ≈ $5,858.67 monthly /
  $70,304 annual), disclosed as its own.
- **`primengaged_california_quantitative_vs_federal_primary_duty`** —
  Ramirez at 797 ("purely quantitative approach") and fn. 4 (the same
  distinction for the administrative, executive and professional
  exemptions); DLSE Manual §§ 51.2 and 51.2.1.
- **`primengaged_concurrent_exempt_and_nonexempt_work`** — Heyen at
  799, 822 (no "hybrid" activities; task-by-task classification;
  identical tasks classified by purpose) and 827 (neither the
  Legislature nor the IWC has adopted the 2004 federal
  concurrent-duties regulation).
- **`primengaged_realistic_requirements_of_the_job`** — Ramirez at 802;
  Heyen at 828; DLSE Manual § 51.5.3.2 ("an idealized job
  description").
- **`primengaged_working_supervisors_and_same_kind_work`** — Heyen at
  822 and its reproduction of 29 C.F.R. § 541.115(b) (2001); DLSE
  Manual § 53.6.7.1 (DLSE disregards the federal 20% language and
  applies the California more-than-50% rule).
- **`primengaged_burden_of_proof_and_job_titles`** — Ramirez at 794
  (narrow construction) and 794-795 (affirmative defense / employer's
  burden); Heyen at 825 (the approved trial-court instruction:
  "Merely because an employee has the duty of managing is not
  sufficient to establish exempt status").
- **`primengaged_what_the_test_does_not_govern`** — Wage Order 4-2001
  § 2(M) (outside salesperson); Lab. Code § 515(d)(2); § 515(f)(1)
  (registered nurses); pointers to the § 515.5 and § 3(D) sheets.
- **`primengaged_ack`** (drafting) — signature block, same pattern as
  `commsalesexempt_ack` / `makeuptime_ack`.

Fields: `companyName`, `employeeName` (reused verbatim from
`commissioned_employee_overtime_exemption_info_sheet`) plus
`positionTitle` (new to this document). All three are referenced by
clause text; no unused fields.

Deliberately **excluded**: the salary-basis (no-deduction) rule, which
`exempt_final_week_salary_info_sheet` and related documents cover; the
outside salesperson exemption's own test (Ramirez's actual holding);
the § 515.5 computer software exemption; the § 3(D) commissioned
employee exemption; the federal FLSA white-collar tests as such
(`classification_exemption_test` in `flsa_classification`); remedies,
penalties, and PAGA.

## Case-law research (no CourtListener MCP quota used)

All case location and text retrieval went through `curl` via the
environment proxy, not the MCP server, per the task brief's quota note:

- Public unauthenticated
  `https://www.courtlistener.com/api/rest/v4/search/?type=o&q=...`
  JSON used **once** to locate Heyen (cluster 1037205, 216 Cal.App.4th
  795). Ramirez's cluster id (1133701) was already recorded in the
  corpus's own wave-161 citations and was confirmed by the fetched page.
- Opinion HTML pages fetched with `Referer: https://www.courtlistener.com/`
  plus browser User-Agent and Accept headers; both returned HTTP 200 on
  the first attempt.
- Two further public-search **phrase** queries were used as an
  independent, index-side second check of the case quotes (below).

## Independent double-fetch

Every source was fetched twice into `w163_during/` with two distinct
header sets / User-Agent strings, and the two fetches were required to
agree (asserted in `verify.py`):

- **Cal. Lab. Code §§ 510, 515** — `leginfo.legislature.ca.gov`,
  Safari/macOS UA vs. `GroundtruthVerifier/1.0 (+corpus-verification;
  curl)` (§ 510's first two attempts hit transient
  `SSL_ERROR_SYSCALL` / connection-reset failures from the proxy and
  were retried in a sleep-and-retry loop until HTTP 200). The
  `id="codeLawSectionNoHead"` text of each pair was **identical** after
  tag-stripping and whitespace normalization.
- **IWC Wage Order 4-2001** — `https://www.dir.ca.gov/IWC/IWCArticle4.pdf`,
  Chrome/Linux UA vs. Firefox/Windows UA with `Accept: application/pdf`.
  Both fetches **byte-identical** (3,291,219 bytes, md5
  `11db167b9ac03e1d0adb88508a7ce381`).
- **DLSE Enforcement Policies and Interpretations Manual** —
  `https://www.dir.ca.gov/dlse/DLSEManual/dlse_enfcmanual.pdf`, two
  UAs, both byte-identical (4,457,559 bytes, md5
  `b0e45ef97010c7472ec7ed693ca5ea21` — the same md5 recorded by the
  wave-161 entry in this directory).
- **DLSE Minimum Wage FAQ** — `https://www.dir.ca.gov/dlse/faq_minimumwage.htm`,
  two UAs, identical (63,334 bytes).
- **Ramirez** and **Heyen** CourtListener opinion pages — two distinct
  header sets each (Chrome/macOS + Referer vs. Firefox/Windows +
  Referer, different Accept headers); each pair byte-identical
  (105,615 and 144,951 bytes).

**Disclosed limitation:** the IWC wage orders are published by the
Department of Industrial Relations only at that one URL, and the
official Cal. Code Regs. tit. 8 text is behind a JavaScript viewer
that is not fetchable here; Justia, FindLaw, Google Scholar and
case.law are egress-blocked. The two wage-order fetches therefore
differ only in User-Agent, which is the fallback the task brief
expressly permits. As an additional, genuinely independent
corroboration of the wage-order language, the **quoted** Ramirez
fn. 4 — a different source on a different host — itself reproduces the
parallel Wage Order 7 text: the employee must be "engaged . . .
primarily" in exempt work (Cal. Code Regs., tit. 8, § 11070, subd.
1(A)(1)), and "primarily" is "more than one-half the employee's work
time." Heyen at 819 reproduces the same two provisions of § 11070
(subds. 1(A)(1)(e), 2(K)), but that sentence was **not** quoted because
the fetched text carries an OCR defect in it ("employee's'work time").
The gap of
`primengaged_quantitative_definition_in_the_wage_order` records that
the citations use the DIR PDF text actually fetched.

## Quote verification

`verify.py` rebuilt a normalized text of each source (nbsp → space,
whitespace collapsed; for the PDFs, hyphenated line-breaks rejoined
and the wage-order PDF's substitute quote glyphs mapped to plain
double quotes; for the CourtListener pages, `<span
class="star-pagination">` markers removed — the same benign
normalization used by earlier entries in this directory), asserted
that the two fetches of each source agree exactly, and checked every
`citations[].quote` for exact substring containment in its cited
source.

**Result: 36 of 36 quotes verified, 0 failed.**

One draft quote failed on the first pass and was **corrected rather
than worked around**: the Lab. Code § 515(d)(1) "1/40th" fraction is
marked up in the posted HTML as
`shall be<font><sup>1</sup>/<sub>40</sub></font>th`, so no
tag-stripping produces the printed string. Rather than silently
inserting a space, the citation was narrowed to § 515(d)(2), the body
describes (d)(1) without quoting it, and the gap of
`primengaged_what_the_test_does_not_govern` discloses the markup and
the narrowing.

Other defects avoided or disclosed, each recorded in the relevant
clause's `gap`:

1. **Ramirez burden-of-proof sentence** — the reporter's "*795" marker
   falls between "proving the" and "employee's"; removed as a benign
   artifact and disclosed in the `gap` and in the citation's `case`
   field ("star-pagination marker removed").
2. **Wage Order 4 PDF, § 1(A)(2)(a)** — the two-column PDF text layer
   places the continuation phrase "of a department or subdivision
   thereof ..." *before* the clause (ii) it completes. The quotes were
   confined to the contiguous, unscrambled runs — the opening through
   (a)(i), and (b) through (f) — and the body restores the reading
   order. Disclosed in the `gap`.
3. **Wage Order 4 PDF, § 1(A)(3)** — a page-number artifact ("—1")
   falls between the opening words and subparagraph (a), so those are
   two separate citations rather than one string. Disclosed.
4. **Heyen OCR defects** — the CourtListener text contains scattered
   OCR errors ("employee's'work time", "[Ojne", "stilled", "mating",
   "Epstein, P. L"). Every quoted passage was inspected for them; the
   wage-order sentence at 819 was **not** quoted because of the
   "employee's'work time" defect, and the § 541.115(b) quote was
   confined to the one clean sentence. Disclosed in the `gap`s of
   `primengaged_concurrent_exempt_and_nonexempt_work` and
   `primengaged_working_supervisors_and_same_kind_work`.
5. **Ramirez fn. 4** — the CourtListener text renders the following
   citation sentence with a stray brace ("{Id.,"); the quote stops
   before it. The spacing inside the footnote's own parenthetical
   citations ("( 29 C.F.R. §§ 541.1 (f)") is reproduced exactly as the
   fetched text renders it, because CourtListener marks citations up as
   links. Both disclosed in the clause `gap`.
6. **DLSE Manual § 51.2.1** — the PDF's text layer has a stray space
   inside `"primary duty ”`, so the quote ends just before that phrase
   ("... more protective of employees than, the federal"). The Manual's
   section numbers sit in a separate left-hand column of the PDF and
   were matched to their paragraphs by page order; the `gap` of
   `primengaged_california_quantitative_vs_federal_primary_duty` says
   so, and each DLSE `case` field records the June 2002 footer and the
   Manual's non-binding status.
7. **DLSE Minimum Wage FAQ** — the posted sentence contains a double
   space ("for all  otherwise"), collapsed in the quote and disclosed
   in the citation's `case` field and the clause `gap`.

**Independent phrase-level second check of the case quotes** (task
brief option (d)): two CourtListener public-search queries, budgeted
to avoid throttling —
`cluster_id:1133701 AND "purely quantitative approach"` → count 1
(Ramirez v. Yosemite Water Company), and
`cluster_id:1037205 AND "identical tasks may be"` → count 1
(Heyen v. Safeway Inc.). Both phrases resolve in CourtListener's
search index, which is a different backend from the opinion HTML page
that was parsed.

**Pincites** were derived from the star-pagination markers in the
fetched texts, not from memory: Ramirez markers at *794 (narrow
construction, burden), *797 ("purely quantitative approach"), *798
(fn. 4, per Heyen's own citation), *802 (realistic requirements);
Heyen markers at *799 (disposition sentence), *822 (the three general
principles and the § 541.115(b) reproduction, which begins on 821),
*825 (the trial court's instruction), *827 (the 2004-regulations
passage), *828 (the California-law statement of the realistic
expectations rule).

## Schema validation

Read `data/clauses.json` and `data/documents.json` before writing, and
matched the exact patterns of the most recent During-employment info
sheets (`commissioned_employee_overtime_exemption_info_sheet`,
`makeup_time_personal_obligations_info_sheet`). `verify.py` asserted:

- every authority clause has exactly the keys
  `{id,title,kind,status,checkedDate,body,gap,citations}` **in that
  order**, `status` `verified`, `checkedDate` `2026-09-13`, and
  non-empty `body`, `gap`, and `citations`;
- every citation has exactly `{case,cite,url,quote}` in that order,
  all non-empty;
- every drafting clause has exactly `{id,title,kind,body}`;
- the document has exactly `{id,title,description,categories,
  clauseOrder,fields}` (the key order used by 565 of the 668 existing
  documents);
- the set of `{{placeholder}}` names used in clause bodies and gaps
  equals the set of declared field ids.

## Corpus-wide validation after merge

`merge.py` re-read both files after writing and asserted:

- both parse as JSON;
- no duplicate clause id across all **5,600** clauses and no duplicate
  document id across all **669** documents;
- every `clauseOrder` entry in every document resolves to an existing
  clause (0 missing);
- every `{{placeholder}}` in every clause used by a document resolves
  to a field declared by that document (0 unresolved);
- 0 orphan clauses corpus-wide;
- the During employment category now holds **85** documents (was 84).

`git diff --stat` shows **404 insertions, 0 deletions** across the two
data files, confirming the re-serialization (2-space indent, UTF-8, no
`ensure_ascii`) reproduced the existing files byte-for-byte outside the
appended entries.

## "Inform, never advise" check

Every clause states what the statute, the wage order, the courts, or
the DLSE say. No clause tells the reader what to do, how to classify a
position, whether a particular job is exempt, or what records or
evidence to assemble. The intro clause says expressly that the sheet
"describes the law; it does not classify any employee as exempt or
nonexempt and does not evaluate any particular job," and the gaps of
`primengaged_realistic_requirements_of_the_job`,
`primengaged_burden_of_proof_and_job_titles`, and
`primengaged_working_supervisors_and_same_kind_work` each restate that
no particular position or evidentiary showing is being assessed.

## Sources cited in the document

| Source | URL |
| --- | --- |
| Cal. Labor Code § 510(a) | https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=510. |
| Cal. Labor Code § 515(a), (c), (d)(2), (e), (f)(1) | https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=515. |
| IWC Wage Order No. 4-2001, §§ 1(A), 2(M), 2(N) (Cal. Code Regs., tit. 8, § 11040) | https://www.dir.ca.gov/IWC/IWCArticle4.pdf |
| Ramirez v. Yosemite Water Co. (1999) 20 Cal.4th 785 | https://www.courtlistener.com/opinion/1133701/ramirez-v-yosemite-water-company/ |
| Heyen v. Safeway Inc. (2013) 216 Cal.App.4th 795 | https://www.courtlistener.com/opinion/1037205/heyen-v-safeway-inc/ |
| DLSE Enforcement Policies and Interpretations Manual §§ 51.2, 51.2.1, 51.5.3.2, 53.6.7.1 | https://www.dir.ca.gov/dlse/DLSEManual/dlse_enfcmanual.pdf |
| DLSE, Minimum Wage — Frequently Asked Questions | https://www.dir.ca.gov/dlse/faq_minimumwage.htm |
