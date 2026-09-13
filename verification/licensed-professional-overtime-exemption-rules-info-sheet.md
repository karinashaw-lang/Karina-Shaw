# During employment, new document: Occupation-Specific Overtime Exemption Rules for Physicians, Registered Nurses, Pharmacists, and Private-School Teachers (Lab. Code §§ 514, 515(f), 515.6, 515.8; Wage Order 5-2001, § 1(B)(3)) — Information Sheet

## Wave

Wave 169 (During employment category). This wave continues the
even-round-robin cadence started by wave 145 (Hiring / During
employment / Estate Planning / Family Law); waves 147, 149, ..., 167
covered the same four categories. This task ran in an isolated git
worktree with no coordination with the other three parallel wave-169
tasks, and every scratch file was kept in a uniquely-named scratchpad
subdirectory (`w169_during/`) containing only files this task created.

Document id: `licensed_professional_overtime_exemption_rules_info_sheet`.

## Why this document

Read `data/documents.json` first and enumerated all 87 existing
"During employment" documents before choosing a topic. Every recent
addition named in the brief was confirmed present
(`harassment_employer_liability_supervisor_coworker_info_sheet`,
`outside_salesperson_exemption_info_sheet`,
`white_collar_exemption_primarily_engaged_test_info_sheet`,
`commissioned_employee_overtime_exemption_info_sheet`,
`form_of_wage_payment_checks_scrip_payroll_cards_info_sheet`,
`repetitive_motion_injury_ergonomics_standard_info_sheet`,
`makeup_time_personal_obligations_info_sheet`,
`employer_controlled_time_exit_searches_travel_info_sheet`,
`hospital_nurse_patient_staffing_ratio_info_sheet`,
`time_clock_rounding_info_sheet`,
`wildfire_smoke_protection_info_sheet`).

Candidate topics from the brief were grepped against **both** data
files and rejected as already covered:

- **Pregnancy disability leave (Gov. Code § 12945)** —
  `pregnancy_disability_leave_info_sheet` already exists.
- **School-activities leave (Lab. Code § 230.8)** —
  `school_activities_leave_info_sheet` already exists.
- **Remote-work / § 2802 expense reimbursement** —
  `business_expense_reimbursement_info_sheet` already exists.
- **Rest and recovery periods for heat-exposed workers** —
  `heat_illness_prevention_info_sheet` plus the § 226.7 material in
  `meal_rest_break_policy`.
- **Military / veteran leave** — `military_status_employment_`
  `discrimination_info_sheet` and
  `civil_air_patrol_leave_info_sheet` and
  `volunteer_emergency_responder_leave_info_sheet` occupy that ground.
- **Compensating time off (Lab. Code § 204.3)** — 2 clauses already
  address it (`makeuptime_distinguished_from_compensating_time_off`).
- **Voluntary-rehabilitation accommodation (Lab. Code §§ 1025-1028)** —
  already covered by `drugtest_rehab_accommodation_duty` and
  `drugtest_rehab_privacy_leave_enforcement`.

Greps for the chosen topic before settling on it:

- `"515.6"` — **zero** hits corpus-wide.
- `"515.8"` — **zero** hits corpus-wide.
- `"6403.5"` — zero (considered and set aside).
- `"515(f)"` — **two** occurrences, both inside a single clause,
  `primengaged_what_the_test_does_not_govern`, which mentions
  § 515(f)(1) only in a list of provisions that clause expressly does
  **not** describe.
- `"pharmacist"` in the corpus's wage-order material — the gap of
  `primengaged_professional_duties_test` states in terms that
  § 1(A)(3) "continues past the portions described here with
  provisions on pharmacists, registered nurses, certified nurse
  midwives, nurse anesthetists and nurse practitioners ... those
  provisions are not described in this clause."

The existing corpus therefore covers the *general* white-collar duties
test and the *computer software* and *commissioned employee* and
*outside salesperson* exemptions, and expressly leaves the
occupation-specific Labor Code overlay uncovered. That overlay —
§ 515.6 (physicians), § 515(f) (registered nurses and the three
advanced-practice carve-outs), Wage Order 5-2001 § 1(B)(3)(f)-(g)
(pharmacists and nurses), and § 515.8 (private K-12 teachers), plus
§ 514 which § 515.6(b) cross-references — is a single coherent body of
law with checkable primary sources, and it decides exempt status for
several of the largest licensed occupations in California.

## What this document covers

12 clauses (10 authority + 2 drafting), id-prefixed `licprofexempt_`:

- **`licprofexempt_intro`** (drafting) — scope; states expressly that
  the sheet describes the law and does not classify any employee,
  evaluate any job, or calculate any pay.
- **`licprofexempt_overtime_default_and_general_exemption`** —
  Lab. Code § 510(a) baseline; § 515(a)'s three conditions; the
  structural point that §§ 515.6 and 515.8 are stand-alone exemptions
  while § 515(f) and Wage Order 5 § 1(B)(3)(f) run the other way.
- **`licprofexempt_physician_hourly_rate_exemption`** — § 515.6(a):
  licensure, "primarily engaged in duties that require licensure"
  under B&P Code ch. 5 (§ 2000 et seq.), the $55.00 codified floor,
  and the October 1 / January 1 CPI escalator.
- **`licprofexempt_physician_current_published_rate`** — DIR's
  published adjustment from $103.75 to **$107.17 effective January 1,
  2026** (3.3% CCPI change, 331.734 → 342.673).
- **`licprofexempt_physician_exclusions_interns_residents_cba`** —
  § 515.6(b) (medical internship or resident program; § 514 CBA) plus
  the full text of § 514's three conditions.
- **`licprofexempt_registered_nurses_not_professional_exempt`** —
  § 515(f)(1).
- **`licprofexempt_advanced_practice_nurse_categories`** —
  § 515(f)(2)(A)-(C) (certified nurse midwife / anesthetist /
  practitioner) and (D) (subdivision (a) still applies).
- **`licprofexempt_pharmacists_and_nurses_in_the_wage_order`** —
  Wage Order 5-2001 § 1(B)(3)(f), (g)(i), (g)(iv), and § 2(P)(4)
  (hospitals within the public housekeeping industry definition).
- **`licprofexempt_private_school_teacher_exemption`** — § 515.8(a),
  (b)(1)-(2), (b)(4).
- **`licprofexempt_private_school_teacher_salary_floor`** —
  § 515.8(b)(3)(A)(i)-(ii), (B), and (c) (the 12-month budgeting rule).
- **`licprofexempt_teacher_exclusions_and_other_exemptions`** —
  § 515.8(d) and (e).
- **`licprofexempt_ack`** (drafting) — signature block, same pattern as
  `primengaged_ack` / `compsoftexempt_ack`.

Fields: `companyName`, `employeeName`, `positionTitle` (the same three
declared by `white_collar_exemption_primarily_engaged_test_info_sheet`).
All three are referenced by clause text; no unused fields, no
undeclared placeholders.

Deliberately **excluded**: the wage orders' executive, administrative
and professional duties tests themselves (covered by
`white_collar_exemption_primarily_engaged_test_info_sheet`); the
§ 515.5 computer software exemption
(`computer_software_employee_overtime_exemption_info_sheet`); the
§ 3(D) commissioned employee exemption and the outside salesperson
exemption (their own documents); nurse-to-patient staffing ratios
(`hospital_nurse_patient_staffing_ratio_info_sheet`); health care
worker minimum wage (`health_care_worker_minimum_wage_info_sheet`);
meal-period waivers in health care (`meal_period_waiver_info_sheet`);
and remedies, penalties, and PAGA.

## Case-law research (no CourtListener MCP quota used)

No case law is cited. This document rests entirely on statutory and
regulatory text plus one agency publication, the same shape as the
existing `computer_software_employee_overtime_exemption_info_sheet`.

Three public unauthenticated
`https://www.courtlistener.com/api/rest/v4/search/?type=o&q=...`
queries were run through `curl` via the environment proxy (the MCP
tools were **not** used at all):

1. `"registered nurses employed to engage in the practice of nursing"`,
   with `court=calctapp cal` → HTTP 200, **count 0**.
2. `"Labor Code section 515.6"` → HTTP 200, **count 0**.
3. A control query (`"Ramirez v. Yosemite Water"`) → **HTTP 429**,
   `Rate limit exceeded: 125/day` — the shared daily quota was already
   exhausted by other agents, so the two zero counts above could not be
   re-validated against a known-good control in the same window.

Because the control query could not be completed, no case citation was
drafted at all rather than risk citing an opinion whose text had not
been fetched and verified. Every proposition in the document is
supported by a quoted primary source. This limitation is disclosed
here rather than worked around.

## Independent double-fetch

Every source was fetched **twice by genuinely different paths** (not
merely a different User-Agent), and every quote was required to verify
against **both** fetches:

- **Cal. Lab. Code §§ 510, 514, 515, 515.6, 515.8** —
  path A: the per-section pages
  `leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=<n>.`
  (Chrome/Windows UA); path B: the **whole-chapter** page
  `codes_displayText.xhtml?lawCode=LAB&division=2.&title=&part=2.&chapter=1.&article=`
  (Safari/macOS UA), a different JSF view rendering the same codified
  text. All five sections' text was located in both, and all 15
  statutory quotes verify against both.
  md5s: `lab_510.a.html e0d65daf947a855da98da15b505856db`,
  `lab_514.a.html a53ad89044d154c8a529c233ddc38946`,
  `lab_515.a.html 55f93a202008812e53d221e3cab69a96`,
  `lab_515.6.a.html a39aed73a66cff1931abd1e4fe3f6032`,
  `lab_515.8.a.html 95c6c59f3485e4b3dc085e2cbdc2c9f8`,
  chapter page `180f78b503d6645a923d79705275b127`.
- **IWC Wage Order 5-2001** — path A:
  `https://www.dir.ca.gov/IWC/IWCArticle5.pdf`
  (md5 `051e1db3855707fa8eaa9ed5b60ecb3a`, 1,777,018 bytes); path B:
  `https://www.dir.ca.gov/IWC/WageOrders2017/IWCArticle5.pdf`
  (md5 `45814884824cfe51050819c549d4f59c`, 4,762,413 bytes) — a
  **different PDF file** of the same order, so the second fetch is
  document-level independent rather than UA-level. All four wage-order
  quotes verify against both files' extracted text.
- **DIR, Overtime Exemption for Licensed Physicians and Surgeons** —
  `https://www.dir.ca.gov/OPRL/Physicians.htm`, two distinct
  User-Agent strings (Chrome/Windows and Safari/macOS); both fetches
  byte-identical (48,823 bytes, md5
  `a1be630ecf024a6f882907efe8f90cb8`).

**Disclosed limitation:** the adjusted physician rate is published by
the Department of Industrial Relations at that one URL only; Justia,
FindLaw, Google Scholar and case.law are egress-blocked, and no second
publisher of the § 515.6(a) adjusted figure was located. The two
fetches of that page therefore differ only in User-Agent, which is the
fallback the brief expressly permits, and the single-source nature of
the figure is stated in the `gap` of
`licprofexempt_physician_current_published_rate`.

## Quote verification

`build.py` rebuilt a normalized text of each source (nbsp / narrow and
figure spaces → space; for the PDFs, hyphenated line-breaks rejoined
and the PDF's substitute quote glyphs mapped to curly quotes; all
whitespace runs collapsed — the same benign normalization used by
earlier entries in this directory), and checked every
`citations[].quote` for exact substring containment in **each** of the
two independent fetches of its cited source.

**Result: 22 of 22 quotes verified against both fetches, 0 failed.**

Benign artifacts normalized, each disclosed in the relevant clause's
`gap`:

1. **Double spacing between sentences** in the leginfo HTML
   (e.g. § 510(a)) — collapsed; disclosed in the `gap` of
   `licprofexempt_overtime_default_and_general_exemption`.
2. **Line breaks inside statutory sentences** in the posted text
   (§ 515.6(b) breaks inside "medical internship or / resident
   program"; § 515.8(b)(3), (b)(4), (e) break mid-sentence) — joined;
   disclosed in the `gap`s of
   `licprofexempt_physician_exclusions_interns_residents_cba`,
   `licprofexempt_private_school_teacher_exemption`,
   `licprofexempt_private_school_teacher_salary_floor`, and
   `licprofexempt_teacher_exclusions_and_other_exemptions`.
3. **Wage Order 5 PDF line-wrap hyphenation** — the industry
   definition in § 2(P)(4) breaks "offering" as "of-\nfering";
   rejoined, and disclosed in the `gap` of
   `licprofexempt_pharmacists_and_nurses_in_the_wage_order`, along
   with the justified double spacing the PDF inserts between words.

Defect **avoided and disclosed rather than worked around**: the
parallel pharmacist / registered-nurse sentence in **Wage Order
4-2001, § 1(A)(3)(f)** was drafted as an additional citation and then
dropped, because the text layer of
`https://www.dir.ca.gov/IWC/IWCArticle4.pdf` breaks that sentence into
out-of-order fragments ("this subparagraph, pharmacists employed" /
"the provisions of" / "to engage" / "in") in the extraction used here,
so no contiguous verbatim string exists to quote. The document instead
quotes only the Wage Order 5 text, states in the body that the rule is
the wage order's, and the `gap` of
`licprofexempt_pharmacists_and_nurses_in_the_wage_order` records both
that parallel language exists in other orders including Wage Order 4
and why it is not quoted. (Wage Order 4's § 1(A)(3) is separately noted
as scrambled in the wave-163 entry in this directory, consistent with
this finding.)

Nothing in the document is paraphrased-as-quote: each `quote` is a
verbatim contiguous run from the cited source, and every characterized
proposition in a `body` is carried by one of the quotes beneath it.

## Schema validation

Read `data/clauses.json` and `data/documents.json` before writing and
matched the patterns of the most recent During-employment info sheets
(`white_collar_exemption_primarily_engaged_test_info_sheet`,
`computer_software_employee_overtime_exemption_info_sheet`).
`build.py` asserted:

- every authority clause has exactly the keys
  `{id,title,kind,status,checkedDate,body,gap,citations}` **in that
  order**, `status` `verified`, `checkedDate` `2026-09-13`, and
  non-empty `body`, `gap`, and `citations`;
- every citation has exactly `{case,cite,url,quote}` in that order,
  all non-empty;
- every drafting clause has exactly `{id,title,kind,body}`;
- the document has exactly
  `{id,title,description,categories,clauseOrder,fields}`;
- the set of `{{placeholder}}` names used in clause bodies **and gaps**
  equals the set of declared field ids.

## Corpus-wide validation after merge

`merge.py` re-read both files from disk after writing and asserted:

- both parse as JSON;
- no duplicate clause id across all **5,913** clauses and no duplicate
  document id across all **693** documents;
- every `clauseOrder` entry in every document resolves to an existing
  clause (**0** missing);
- every `{{placeholder}}` in every clause used by a document resolves
  to a field declared by that document (**0** unresolved);
- **0** orphan clauses corpus-wide;
- the During employment category now holds **88** documents (was 87).

`git diff --stat` shows **296 insertions, 0 deletions** across the two
data files, confirming the re-serialization (2-space indent, UTF-8, no
`ensure_ascii`, trailing newline) reproduced the existing files
byte-for-byte outside the appended entries.

## "Inform, never advise" check

Every clause states what the Labor Code, the wage order, or the
Department of Industrial Relations says. No clause tells the reader
what to do, whether a position is exempt, how to structure pay, or what
records to keep. The intro clause states that the sheet "describes the
law. It does not classify any employee as exempt or nonexempt, does not
evaluate any particular job or set of duties, does not calculate any
employee's pay or overtime, and does not file anything with any agency
or court," and the `gap`s of
`licprofexempt_physician_hourly_rate_exemption`,
`licprofexempt_physician_exclusions_interns_residents_cba`,
`licprofexempt_advanced_practice_nurse_categories`,
`licprofexempt_private_school_teacher_exemption`,
`licprofexempt_private_school_teacher_salary_floor`, and
`licprofexempt_teacher_exclusions_and_other_exemptions` each restate
that no particular position, agreement, program, or salary comparison
is being assessed.

## Sources cited in the document

| Source | URL |
| --- | --- |
| Cal. Labor Code § 510(a) | https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=510. |
| Cal. Labor Code § 514 | https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=514. |
| Cal. Labor Code § 515(a), (f)(1), (f)(2) | https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=515. |
| Cal. Labor Code § 515.6(a), (b) | https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=515.6. |
| Cal. Labor Code § 515.8(a)-(e) | https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=515.8. |
| IWC Wage Order No. 5-2001, §§ 1(B)(3)(f)-(g), 2(P)(4) (Cal. Code Regs., tit. 8, § 11050) | https://www.dir.ca.gov/IWC/IWCArticle5.pdf |
| DIR, Overtime Exemption for Licensed Physicians and Surgeons (eff. Jan. 1, 2026) | https://www.dir.ca.gov/OPRL/Physicians.htm |
