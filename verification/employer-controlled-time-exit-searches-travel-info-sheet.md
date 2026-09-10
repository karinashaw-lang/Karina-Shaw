# During employment, new document: Employer-Controlled Time: Exit Searches, Mandatory Transportation, and Off-the-Clock Minutes — Information Sheet

## Wave

Wave 153 (During employment category). Wave 153 is the round-robin
turn for Hiring / During employment / Estate Planning / Family Law;
the other three wave-153 documents were already merged when this task
ran, so this is the closing piece of the wave. This is a relaunch of
the original wave-153 During-employment task, whose first run was lost
to a container restart before committing anything; the work here was
started fresh (no partial work was reused). It ran in an isolated git
worktree.

## Why this document

Read `data/documents.json` and enumerated all 79 existing "During
employment" documents before choosing a topic. Grepped the **whole
corpus** (both `data/documents.json` and the full text of
`data/clauses.json`, not just the category) and confirmed that every
example topic in the task brief is already covered:

- Reporting-time pay — `reporting_time_pay_info_sheet`.
- Split-shift premium — `split_shift_premium_pay_info_sheet`.
- Suitable seating / Kilby v. CVS Pharmacy — `suitable_seating_info_sheet`.
- Uniform and tool cost rules — `wage_order_uniform_maintenance_info_sheet`
  and `business_expense_reimbursement_info_sheet` (Lab. Code §2802).
- Payroll-record access and correction (Lab. Code §226(b)-(c), §1198.5)
  — `personnel_records_request` (clause `personnelrec_payroll_records_226`)
  and `wage_statement_itemization_policy` (clause `wagestmt_inspection_right`).

Grepped a further ~90 candidate patterns across the corpus (statute
numbers, case names, and keywords). Among the genuinely uncovered
candidates found (ergonomics/RMI standard 8 CCR §5110; employee access
to exposure and medical records, Lab. Code §6408 / 8 CCR §3204; makeup
time, Lab. Code §513; Lab. Code §450 compelled patronage; Lab. Code
§435 restroom/locker-room recording), the strongest and most concretely
litigated topic was **compensable "hours worked" for employer-controlled
time outside the shift** — exit/bag searches, employer-mandated
transportation, vehicle security-gate inspections, and small
off-the-clock increments. Grepped for "Frlekin", "Morillion",
"Troester", "Huerta", "bag check", "exit search", "security screen",
"de minimis" (only water-rights hits), "travel time" (only unrelated
hits), and "Cinram": zero relevant corpus hits.

Checked for overlap with the closest existing documents:
`on_call_standby_time_compensability_info_sheet` covers the same wage
order "hours worked" definition but only as applied to on-call/standby
time before an employee is called in (Mendiola factors); it does not
cite any of the four cases used here. `time_clock_rounding_info_sheet`
covers rounding (Donohue / See's Candy). The new document's intro
clause expressly points readers to those three documents and states
that it does not restate them.

## What this document covers

15 clauses (13 authority + 2 drafting), id-prefixed `controltime_`:

- **`controltime_intro`** (drafting) — scope statement; distinguishes
  this document from the on-call, reporting-time, and rounding sheets.
- **`controltime_hours_worked_definition`** — Wage Order No. 7-2001
  §2(G) "hours worked" definition (quoted from the DIR PDF and from
  Frlekin's quotation of it); notes the two-clause structure and that
  Wage Orders 16 §2(J) and 14-80 §2(G) carry the same definition.
- **`controltime_control_clause_independent`** — Morillion: "includes"
  is a term of enlargement; the control clause can be satisfied on its
  own.
- **`controltime_compulsory_travel_morillion`** — Morillion holding on
  employer-required buses, including waiting time; the "level of the
  employer's control ... is determinative" principle (pin cite 587
  taken from Frlekin's own citation of Morillion).
- **`controltime_ordinary_commute_distinguished`** — Morillion's
  compulsory-travel vs. ordinary-commute line; home-to-departure-point
  commuting excluded.
- **`controltime_exit_search_frlekin`** — Frlekin's reformulated
  certified question, the "yes" answer, and the disposition paragraph.
- **`controltime_frlekin_control_factors`** — Frlekin's non-exhaustive
  factor list (location, degree of control, primary benefit,
  disciplinary enforcement), the Court's application to Apple's
  searches, and the Court's note that Apple may tailor its policy but
  must pay for search time.
- **`controltime_frlekin_retroactivity_and_open_question`** — Frlekin
  applies retroactively; Court expressed no view on the "suffered or
  permitted" clause.
- **`controltime_huerta_vehicle_exit_inspection`** — Huerta's first
  answer: awaiting/undergoing an exit procedure that includes visual
  vehicle inspection is "hours worked" under Wage Order 16 §2(J).
- **`controltime_huerta_onsite_driving_and_workplace_rules`** —
  Huerta's second answer: ordinary workplace rules during the drive do
  not create control; separate Wage Order 16 §5(A) employer-mandated
  travel holding (flagged as Wage-Order-16-specific).
- **`controltime_huerta_confined_meal_period`** — Huerta's third
  answer: CBA "unpaid" meal period is still "hours worked" if the
  employee is confined to the premises and prevented from feasible
  personal activities; §1194 enforcement.
- **`controltime_troester_no_de_minimis`** — Troester: FLSA de minimis
  doctrine not incorporated; California background de minimis rule not
  applicable to routine off-the-clock minutes.
- **`controltime_troester_open_question_and_alternatives`** — what
  Troester left open (irregular/brief activities) and the alternatives
  the Court identified (restructuring, technology, reasonable
  estimation).
- **`controltime_recovery_under_1194`** — Lab. Code §1194(a) civil
  action for unpaid minimum wage/overtime plus Huerta's statement that
  §1194 is the vehicle to enforce the wage order.
- **`controltime_ack`** (drafting) — signature/receipt block reusing
  the exact `oncall_ack` / `timerounding_ack` pattern.

Fields: `companyName`, `employeeName` — reused verbatim (same ids,
labels, placeholders) from the existing During-employment info sheets.
No new fields.

Deliberately **excluded**: the Wage Order 4/5 health-care "hours
worked" variant (already in the on-call sheet); the general meal-period
rules (existing meal/rest documents); the overtime computation itself
(existing overtime calculation sheet); limitations periods, PAGA
penalties, and §1194.2 liquidated damages (mentioned as out of scope in
a `gap` field only). Huerta's official reporter citation was **not**
used because the fetched CourtListener record carried no reporter
citation; the clause cites the docket number and decision date and
discloses this in its `gap`.

## Independent double-fetch

**Case law** (CourtListener MCP: `search` type "o" filtered to
`court: cal`, then `get_endpoint_item` endpoint "opinions"; every
opinion fetched **twice** in two separate calls, one rate-limit window
apart, with the two results compared programmatically):

- *Frlekin v. Apple Inc.*, 8 Cal.5th 1038 (Cal. 2020) — cluster_id
  4726983, opinion_id 4507310. `plain_text` (51,788 chars) identical
  across both fetches (md5 `cfbf4094354393dd705db1c715009c9d`).
- *Morillion v. Royal Packing Co.*, 22 Cal.4th 575 (Cal. 2000) —
  cluster_id 1291367, opinion_id 1291367. `plain_text` was empty for
  this older opinion, so `html_with_citations` was used (tags stripped,
  entities unescaped; 53,344 chars). Identical across both fetches
  (md5 `8020865cf7c91dd281d8c4ca222c3fd7`). A second CourtListener
  cluster (5592843, "22 Cal. 575", lead-opinion only) exists for the
  same case; the cluster carrying the correct parallel citations
  (995 P.2d 139, 94 Cal.Rptr.2d 3, 22 Cal.4th 575) was used.
- *Troester v. Starbucks Corp.*, 5 Cal.5th 829 (Cal. 2018) —
  cluster_id 4520879, opinion_id 4298132 (the July 26, 2018 opinion
  carrying the reporter citations; a separate August 30, 2018
  modification-order cluster 4531553 was not used). `plain_text`
  (67,910 chars) identical across both fetches
  (md5 `c5037bec5b531c7ae2e77261a0a80972`).
- *Huerta v. CSI Electrical Contractors*, Cal. Supreme Court
  No. S275431 (Mar. 25, 2024) — cluster_id 9487447, opinion_id
  9954060. `plain_text` (75,164 chars) identical across both fetches
  (md5 `6a765c8177ebcb756eba24ab08957c5a`). No reporter citation in the
  record; cited by docket number as noted above.

**Statute / wage order** (via `curl` through the environment proxy,
each fetched twice with two distinct User-Agent strings):

- **IWC Wage Order No. 7-2001, §2(G)** —
  `www.dir.ca.gov/IWC/IWCArticle7.pdf`. UAs: a Chrome-style string and
  a `curl/8.0` string. Both fetches were **byte-identical PDFs**
  (md5 `51afc751631c5316d78ecd413cabe19e`); text extracted with
  `pdfplumber` from each copy separately, and the two extractions were
  byte-identical (`cmp` clean, 55,152 chars).
- **Cal. Labor Code §1194** — `leginfo.legislature.ca.gov`. UAs: Chrome
  and Firefox strings. Both HTTP 200; the `codeLawSectionNoHead` div,
  tag-stripped and whitespace-normalized, was identical between the
  two fetches (960 chars).

## Quote verification

`build.py` (in the agent's private scratchpad subdirectory) built a
whitespace-normalized text of each **second-fetch** source and checked
every `citations[].quote` in all 13 authority clauses for exact
substring containment after applying the same normalization
(nbsp → space; collapse runs of whitespace) to the quote.

**Result: all 30 quotes across all 13 authority clauses verified as
exact substrings of their cited, independently fetched sources on the
first pass.** No quote needed correction. Four source artifacts were
handled by **shortening or avoiding** the quote rather than editing it,
and each is disclosed in the affected clause's `gap` field:

- Wage Order 7 PDF: the term "Hours worked" is set off by non-standard
  glyphs (extracted as ― and ‖); the quote starts at "means" to avoid
  them (`controltime_hours_worked_definition`).
- Frlekin slip text: "employer- controlled" line-break hyphenation; the
  factors quote ends at "disciplinary measures" and the remaining words
  are paraphrased (`controltime_frlekin_control_factors`).
- Huerta slip text: "employment- related" hyphenation; the §5(A)
  quote ends at "section 5(A)" and the condition is paraphrased
  (`controltime_huerta_onsite_driving_and_workplace_rules`).
- Troester slip text: "off-the- clock" hyphenation; the sentence is
  paraphrased rather than quoted (`controltime_troester_no_de_minimis`).
- Morillion HTML rendering: the sentence contrasting *Vega* dropped
  its dashes ("free to chooserather than requiredto"); described in
  prose only (`controltime_ordinary_commute_distinguished`).

Pin cites: the only pin page used is Morillion at p. 587 for the
"level of the employer's control" sentence, taken from Frlekin's own
citation of that passage ("Id. at p. 587"); the CourtListener Morillion
text carries star pagination only for the Cal.Rptr.2d reporter, so no
other pin pages were asserted. Frlekin, Troester, and Huerta are cited
to their starting page / docket number only, since their slip-opinion
`plain_text` carries internal slip page numbers rather than official
reporter pagination.

Factual descriptions that are summarized rather than quoted (Huerta's
20 mph speed limit and music restriction; Troester's closing tasks and
walking coworkers to their cars; Apple's bag-search policy text) were
each re-confirmed by grep against the fetched opinion text before
merge.

## Schema validation

Read `data/clauses.json` and `data/documents.json` first to confirm
current schema shapes and matched the recent During-employment info
sheets (`on_call_standby_time_compensability_info_sheet`,
`time_clock_rounding_info_sheet`). `build.py` asserted, before merge:

- Every authority clause has exactly the keys
  `{id,title,kind,status,checkedDate,body,gap,citations}`; every
  citation exactly `{case,cite,url,quote}`; all non-empty.
- Every drafting clause has exactly `{id,title,kind,body}`.
- No duplicate ids within the new set and no collision with the
  existing corpus (clause ids or document id).
- Document object has exactly
  `{id,title,description,categories,clauseOrder,fields}`; `clauseOrder`
  lists exactly the 15 new clause ids.
- Every `{{placeholder}}` in the drafting clauses (`companyName`,
  `employeeName`) is declared in `fields`; no brace leakage in any
  authority title/body/gap.

## Corpus-wide validation (post-merge)

`validate.py` confirmed after the merge:

- Both `data/clauses.json` and `data/documents.json` parse as valid
  JSON (written with the files' existing 2-space indent, raw UTF-8,
  trailing newline; `git diff --stat` confirmed an append-only diff).
- All clause ids unique across all 5,156 clauses (5,141 → 5,156).
- All document ids unique across all 632 documents (631 → 632).
- Every `clauseOrder` entry across **all 632 documents** resolves to an
  existing clause id — zero missing references.
- Every `{{placeholder}}` in every clause body of every document
  resolves to a declared field — zero unresolved.
- During employment category count: 79 → 80, bringing all eight
  categories to 80.

## Net changes

- New document: Employer-Controlled Time: Exit Searches, Mandatory
  Transportation, and Off-the-Clock Minutes — Information Sheet
  (`employer_controlled_time_exit_searches_travel_info_sheet`),
  category: During employment.
- 15 new clauses (13 authority + 2 drafting), all under the
  `controltime_*` id prefix.
- No new fields (reused `companyName`, `employeeName`).
- Corpus: 5,141 → 5,156 clauses; 631 → 632 documents.
