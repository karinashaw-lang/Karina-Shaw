# During employment, new document: The Outside Salesperson Exemption (Lab. Code § 1171; Wage Order 4-2001, §§ 1(C), 2(M); Wage Order 7-2001, §§ 1(C), 2(J); Ramirez v. Yosemite Water Co.) — Information Sheet

## Wave

Wave 165 (During employment category). This wave continues the
even-round-robin cadence started by wave 145 (Hiring / During
employment / Estate Planning / Family Law); waves 147, 149, ..., 163
covered the same four categories. This task ran in an isolated git
worktree (`agent-abfcf51159ed7273e`) with no coordination with the
other three parallel wave-165 tasks, and every scratch file was kept in
a uniquely-named scratchpad subdirectory (`w165_during/`) that
contained only files this task created. Nothing was read from the
shared `/tmp` scratchpad.

## Why this document

Read `data/documents.json` first and enumerated all **85** existing
"During employment" documents before choosing a topic, then grepped the
whole corpus (`data/clauses.json` **and** `data/documents.json`) for
each candidate the brief suggested:

- **Outside salesperson exemption** — `"outside sales"` 13 hits in
  `data/clauses.json`, **0** in `data/documents.json`; no document
  anywhere in the corpus is about it. Every one of those 13 hits is a
  passing mention or an express *disclaimer* of coverage:
  `classification_exemption_test` (the **federal** 29 C.F.R. § 541
  wording inside the `flsa_classification` form),
  `compsoftexempt_default_and_distinction` ("the outside salesperson
  exemption ... none of those are covered by this document"),
  `hcmw_covered_employee_scope` (health-care minimum wage statutory
  exclusion), `commsalesexempt_two_prongs_and_employer_burden`
  (Ramirez used only for narrow construction / burden),
  `primengaged_california_quantitative_vs_federal_primary_duty`,
  `primengaged_realistic_requirements_of_the_job`,
  `primengaged_burden_of_proof_and_job_titles`, and
  `primengaged_what_the_test_does_not_govern` (which quotes Wage Order
  4-2001 § 2(M) in passing and says in its own gap that it "does not
  describe the requirements of the outside salesperson ... exemption[]
  beyond identifying [it]").
- **Lab. Code § 1171 itself** — quoted nowhere in the corpus before
  this document.
- Rejected as already covered: `"Morillion"` (27 clause hits, 2
  document hits — mandatory travel time is covered by
  `employer_controlled_time_exit_searches_travel_info_sheet`);
  `"3395"` / `"heat illness"` (55 and 15 hits;
  `heat_illness_prevention_info_sheet` already covers the outdoor
  standard); `"6400"` / `"general duty"` (16 and 17 hits, incl.
  `injury_illness_prevention_program_info_sheet` and
  `right_to_refuse_hazardous_work_info_sheet`); `"1197.5"` /
  `"432.3"` / `"pay scale"` (66, 50 and 25 hits); `"2870"` (12 hits);
  `"1088"` (37 hits).
- Also checked and **not** taken because they are torts/insurance
  rather than During-employment wage-and-hour: `"going-and-coming"`
  and `"Moradi"` (0 hits each).

**California's outside salesperson exemption** is therefore genuinely
uncovered, and it is the one major California overtime exemption the
corpus had not yet described. It has a controlling statute
(Lab. Code § 1171), operative regulations (Wage Order 4-2001 §§ 1(C),
2(M); Wage Order 7-2001 §§ 1(C), 2(J)), and a controlling California
Supreme Court decision that is *about this exemption* rather than
merely cited for general principles (Ramirez v. Yosemite Water Co.
(1999) 20 Cal.4th 785 — the corpus previously used Ramirez only for
narrow construction, the employer's burden, and, by analogy, the
white-collar duties test).

## What this document covers

13 clauses (11 authority + 2 drafting), id-prefixed
`outsalesexempt_`:

- **`outsalesexempt_intro`** (drafting) — scope; states the sheet
  describes the law and does not classify any employee or evaluate any
  job.
- **`outsalesexempt_statutory_exclusion`** — Lab. Code § 1171 in full;
  the Chapter 1 heading (§§ 1171-1207) showing what "this chapter"
  means; Ramirez at 789 (the question presented) and 790 (a
  "detailed, fact-specific determination").
- **`outsalesexempt_wage_order_definition`** — the quantitative
  definition, quoted from **both** Wage Order 4-2001 § 2(M)
  (8 CCR § 11040) and Wage Order 7-2001 § 2(J) (8 CCR § 11070); the
  four elements (18 or over; customarily and regularly more than half
  the working time away from the employer's place of business; selling
  items or obtaining orders or contracts; measured by how working time
  is actually spent).
- **`outsalesexempt_order_does_not_apply`** — Wage Order 4-2001
  Section 1 opening; § 1(C) (no provision of the order applies);
  § 1(B) quoted as the textual contrast (the State-employee exclusion
  *does* preserve Sections 1, 2, 4, 10 and 20, § 1(C) preserves
  nothing); Wage Order 7-2001 § 1(C).
- **`outsalesexempt_no_salary_condition`** — § 1(A)(1)(f) (two times
  the state minimum wage; Lab. Code § 515(c) 40-hour week) against
  § 1(C) and § 2(M), which state no earnings or salary-basis
  condition.
- **`outsalesexempt_quantitative_not_federal`** — Ramirez at 797:
  the federal test defines the employee's "primary function," "not on
  how much work time is spent selling"; California has no
  incidental-to-sales reclassification; the IWC "evidently intended to
  depart from federal law."
- **`outsalesexempt_actual_time_and_realistic_requirements`** —
  Ramirez at 802: the idealized-job-description pitfall and the
  substandard-performance pitfall; the "realistic requirements of the
  job" rule ("first and foremost, how the employee actually spends his
  or her time").
- **`outsalesexempt_travel_time_apportionment`** — Ramirez at 801:
  travel to attempt a sale counts as time spent "selling"; travel on a
  mixed trip "must be apportioned among the two types of activities."
- **`outsalesexempt_delivery_is_not_selling`** — Ramirez at 802:
  delivering preordered bottles and restocking "empties" is not a sales
  activity; the attorney's-brief analogy; reversal and remand.
- **`outsalesexempt_narrow_construction_and_burden`** — Ramirez at 794
  (exemptions narrowly construed) and 794-795 (affirmative defense;
  employer bears the burden).
- **`outsalesexempt_iwc_definition_upheld`** — Ramirez at 801 (the
  definition was within the IWC's authority and reasonably necessary to
  effectuate § 1171); Lab. Code § 517(d) (the Legislature's directive
  that the IWC review outside salespersons' wages, hours, and working
  conditions notwithstanding §§ 1171 and 515(a)).
- **`outsalesexempt_what_this_does_not_cover`** — the textual bounds:
  § 1171 reaches "this chapter" only; each wage order covers only its
  own industries or occupations; the definition's own age, location,
  and activity limits; pointers to the separate executive /
  administrative / professional, § 3(D) commissioned inside sales, and
  § 515.5 computer software exemptions.
- **`outsalesexempt_ack`** (drafting) — signature block, same pattern
  as `primengaged_ack` / `commsalesexempt_ack`.

Fields: `companyName`, `employeeName`, `positionTitle` (same three
fields, same labels, as
`white_collar_exemption_primarily_engaged_test_info_sheet`; the
`positionTitle` placeholder is "Territory Sales Representative"). All
three are referenced by clause text; no unused fields.

Deliberately **excluded**: the federal FLSA outside sales exemption as
such (29 C.F.R. pt. 541, subpt. J — the post-2004 regulations were not
fetched and are not described); the commissioned-employee § 3(D)
exemption (`commissioned_employee_overtime_exemption_info_sheet`); the
white-collar duties test
(`white_collar_exemption_primarily_engaged_test_info_sheet`); the
§ 515.5 computer software exemption
(`computer_software_employee_overtime_exemption_info_sheet`);
compensability of travel time for non-exempt employees
(`employer_controlled_time_exit_searches_travel_info_sheet`); remedies,
penalties, and PAGA.

## Case-law research (no CourtListener MCP quota used)

All case location and text retrieval went through `curl` via the
environment proxy, not the MCP server, per the task brief's quota note:

- Public unauthenticated
  `https://www.courtlistener.com/api/rest/v4/search/?type=o&q=...`
  JSON used **once** to locate Ramirez (cluster **1133701**, opinion
  1133701; citations returned include 20 Cal. 4th 785, 978 P.2d 2,
  85 Cal. Rptr. 2d 844).
- The opinion HTML page was fetched with
  `Referer: https://www.courtlistener.com/` plus a real browser
  User-Agent and Accept headers. The first fetch returned HTTP 200;
  the second header set returned the empty **HTTP 202** described in
  the brief and was retried in a `sleep 60` loop inside this turn until
  it returned 200.
- Three further public-search **phrase** queries were used as an
  independent, index-side second check of the case quotes (below); one
  of them returned HTTP 429 and was retried in a `sleep 120` loop until
  it returned 200.
- A planned second case (Duran v. U.S. Bank) was **dropped** rather
  than risk further throttling; nothing in the document depends on it.
- `law.resource.org` (the only other reachable publisher of the
  California Official Reports text) is **egress-blocked** from this
  environment (`CONNECT tunnel failed, response 403`), as are Justia,
  FindLaw, Google Scholar and case.law.

## Independent double-fetch

Every source was fetched twice into `w165_during/`, and the two
fetches were required to agree (asserted in `verify_all.py`, which
checks each quote against **both** copies of its source):

- **Cal. Lab. Code § 1171** — `leginfo.legislature.ca.gov`, two
  genuinely different paths *and* two different User-Agents:
  `codes_displaySection.xhtml?...sectionNum=1171.` (Chrome/Linux UA,
  164,790 bytes, md5 `ea3fd9ef...`) vs.
  `codes_displayText.xhtml?...part=4.&chapter=1.` — the whole-chapter
  view (Safari/iOS UA, 351,047 bytes, md5 `54ea25ae...`). The § 1171
  sentence and the Chapter 1 heading are present and identical in both.
- **Cal. Lab. Code § 517(d)** — `codes_displayText.xhtml?...part=2.`
  (Chrome/Linux UA, 196,907 bytes, md5 `1d272eb3...`) vs.
  `codes_displaySection.xhtml?...sectionNum=517.` (Safari/macOS UA,
  165,689 bytes, md5 `3f70b5a7...`). Identical text.
- **IWC Wage Order 4-2001** — two different documents on the DIR site:
  `https://www.dir.ca.gov/IWC/IWCArticle4.pdf` (Chrome/macOS UA,
  3,291,219 bytes, md5 `11db167b9ac03e1d0adb88508a7ce381` — the same
  md5 recorded by the wave-161 and wave-163 entries in this directory)
  vs. `https://www.dir.ca.gov/IWC/WageOrders2017/IWCArticle4.pdf`
  (Chrome/Windows UA, 1,194,458 bytes, md5 `c9f48e14...`). These are
  **separately produced PDFs**, not the same bytes served twice; all
  five quoted § 11040 passages appear verbatim in both after
  PDF-glyph normalization.
- **IWC Wage Order 7-2001** — likewise two separately produced PDFs:
  `https://www.dir.ca.gov/IWC/IWCArticle7.pdf` (5,132,851 bytes, md5
  `51afc751...`) vs.
  `https://www.dir.ca.gov/IWC/WageOrders2017/IWCArticle7.pdf`
  (1,254,018 bytes, md5 `ec531a34...`). Both quoted § 11070 passages
  appear verbatim in both.
- **Ramirez** CourtListener opinion page — two distinct header sets
  (Safari/macOS + Referer + `Accept-Language: en-US` vs.
  Chrome/macOS-Edg + a different Referer and Accept-Language). Both
  105,615 bytes; md5s differ only because the page embeds a
  per-request CSRF token. The extracted `<article>` text is **exactly
  identical** (45,383 characters, byte-for-byte after tag-stripping).

**Disclosed limitation:** the Ramirez opinion text reaches this
environment only through CourtListener, because every other publisher
of the California Official Reports is egress-blocked here. The two
fetches therefore differ in headers, not in publisher — the fallback
the brief expressly permits — and were supplemented by the
index-side phrase check below, which queries a different CourtListener
backend (Elasticsearch) than the HTML page that was parsed. The
`gap` of `outsalesexempt_quantitative_not_federal` states this on the
face of the document.

## Quote verification

`verify_all.py` rebuilt a normalized text of each source (nbsp →
space, whitespace collapsed; for the PDFs, hyphenated line-breaks
rejoined and the wage-order PDFs' substitute quote glyphs `―` /
`‖` mapped to plain double quotes; for the CourtListener page,
`*NNN` star-pagination markers removed — the same benign normalization
used by earlier entries in this directory), then checked every one of
the document's `citations[].quote` values for exact substring
containment in **both** fetches of its cited source.

**Result: 26 of 26 quotes verified against two independent fetches
each, 0 failed.**

Defects avoided or disclosed, each recorded in the relevant clause's
`gap`:

1. **Ramirez burden-of-proof sentence** — the reporter's "*795" marker
   falls between "proving the" and "employee's exemption"; removed as a
   benign artifact and disclosed both in the `gap` of
   `outsalesexempt_narrow_construction_and_burden` and in the
   citation's `case` field ("star-pagination marker removed"). This is
   the only quote in the document that required marker removal; the
   other eleven Ramirez quotes verify against the unmodified text.
2. **Ramirez OCR of the wage-order subdivision** — the CourtListener
   text renders "Wage Order No. 7-80, 2(I)" as "2(1)" throughout, and
   renders the federal regulations it reproduces with scattered OCR
   damage ("ffl]", "fl[]", "[mjaking", "Coming Glass Works"). **No**
   quote in this document includes any of those passages; the three
   sentences quoted for the state/federal contrast were chosen
   precisely because they are clean. Disclosed in the `gap` of
   `outsalesexempt_quantitative_not_federal`.
3. **Ramirez italics line-wrapping** — in the fetched text the
   italicized words "should" and "realistic" sit on their own lines
   inside the realistic-requirements passage. The line breaks were
   closed up (whitespace normalization only; no word changed), and the
   `gap` of
   `outsalesexempt_actual_time_and_realistic_requirements` discloses
   it.
4. **Wage-order PDF typography** — the DIR PDFs' text layer renders
   the typographic quotation marks around defined terms as substitute
   glyphs, so the quotation marks inside `"Outside salesperson"` are
   rendered as plain double quotes; hyphenated words broken across
   lines were rejoined and runs of spaces collapsed. Disclosed in the
   `gap` of every clause that quotes a wage order.
5. **Chapter heading** — the `CHAPTER 1. Wages, Hours and Working
   Conditions [1171 - 1207]` string is a heading supplied in the
   published code as displayed by the Legislative Counsel, not an
   enacted sentence; the `gap` of
   `outsalesexempt_statutory_exclusion` says so.

**Independent phrase-level second check of the case quotes** (task
brief option (d)): three CourtListener public-search queries, each
`AND`-ing several exact phrases onto `cluster_id:1133701` so that a
count of 1 confirms every phrase in the group, budgeted to limit
throttling —

- `cluster_id:1133701 AND "the travel time must be apportioned among
  the two types of activities" AND "must steer clear of these two
  pitfalls by inquiring into the" AND "is not a sales activity in the
  conventional meaning of the word"` → **count 1**;
- `cluster_id:1133701 AND "the IWC evidently intended to depart from
  federal law" AND "the employer bears the burden of proving the" AND
  "It was reasonable for the IWC, in formulating its definition, to
  take a quantitative approach"` → **count 1**;
- `cluster_id:1133701 AND "not on how much work time is spent selling"
  AND "exemptions from statutory mandatory overtime provisions are
  narrowly construed" AND "State law also differs from the federal
  regulation" AND "fashioning an idealized job description that had
  little basis in reality"` → **count 1**.

Each returned result is Ramirez v. Yosemite Water Company.

**Pincites** were derived from the star-pagination markers in the
fetched text, not from memory; the marker immediately preceding each
quote was computed programmatically (`check_quotes.py`): *789 (question
presented), *790 (fact-specific determination), *794 (narrow
construction; burden, spanning to *795), *797 (federal "primary
function"; no incidental-work reclassification; IWC intended to
depart), *801 (IWC's authority and quantitative approach; travel time),
*802 (the two pitfalls; realistic requirements; delivery is not
selling).

## Schema validation

Read `data/clauses.json` and `data/documents.json` before writing, and
matched the exact patterns of the most recent During-employment info
sheets (`white_collar_exemption_primarily_engaged_test_info_sheet`,
`commissioned_employee_overtime_exemption_info_sheet`).
`validate.py` asserted:

- every authority clause has exactly the keys
  `{id,title,kind,status,checkedDate,body,gap,citations}` **in that
  order**, `status` `verified`, `checkedDate` `2026-09-13`, and a
  non-empty `gap`;
- every citation has exactly `{case,cite,url,quote}` in that order;
- every drafting clause has exactly `{id,title,kind,body}`;
- the document has exactly
  `{id,title,description,categories,clauseOrder,fields}`.

## Corpus-wide validation after merge

`validate.py` re-read both files after writing and asserted:

- both parse as JSON;
- no duplicate clause id across all **5,708** clauses (was 5,695) and
  no duplicate document id across all **677** documents (was 676);
- every `clauseOrder` entry in every document resolves to an existing
  clause (0 missing, corpus-wide);
- every `{{placeholder}}` appearing in any clause body, gap, or
  citation used by a document resolves to a field declared by that
  document (0 unresolved, corpus-wide);
- the During employment category now holds **86** documents (was 85).

`git diff --stat` shows **332 insertions, 0 deletions** across the two
data files, confirming the re-serialization (2-space indent, UTF-8, no
`ensure_ascii`, trailing newline) reproduced the existing files
byte-for-byte outside the appended entries.

## "Inform, never advise" check

Every clause states what the statute, the wage orders, or the
California Supreme Court say. No clause tells the reader what to do,
how to classify a position, whether a particular job qualifies, or what
records to assemble. The intro clause says expressly that the sheet
"describes the law; it does not classify any employee as exempt or
nonexempt and does not evaluate any particular job," and the gaps of
`outsalesexempt_statutory_exclusion`,
`outsalesexempt_actual_time_and_realistic_requirements`, and
`outsalesexempt_delivery_is_not_selling` each restate that whether a
given individual meets the definition is a question of fact the
document does not address.

## Sources cited in the document

| Source | URL |
| --- | --- |
| Cal. Labor Code § 1171 | https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=1171. |
| Cal. Labor Code, div. 2, pt. 4, ch. 1 heading (§§ 1171-1207) | https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=LAB&division=2.&title=&part=4.&chapter=1.&article= |
| Cal. Labor Code § 517(d) | https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=517. |
| IWC Wage Order No. 4-2001, §§ 1, 1(B), 1(C), 1(A)(1)(f), 2(M) (Cal. Code Regs., tit. 8, § 11040) | https://www.dir.ca.gov/IWC/IWCArticle4.pdf |
| IWC Wage Order No. 7-2001, §§ 1(C), 2(J) (Cal. Code Regs., tit. 8, § 11070) | https://www.dir.ca.gov/IWC/IWCArticle7.pdf |
| Ramirez v. Yosemite Water Co. (1999) 20 Cal.4th 785 | https://www.courtlistener.com/opinion/1133701/ramirez-v-yosemite-water-company/ |
