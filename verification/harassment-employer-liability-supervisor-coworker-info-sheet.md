# During employment, new document: Employer Liability for Workplace Harassment: Supervisors, Coworkers, and Nonemployees (Gov. Code §§ 12940(j), 12940(k), 12923, 12926(t); State Dept. of Health Services v. Superior Court) — Information Sheet

## Wave

Wave 167 (During employment category). This wave continues the
even-round-robin cadence started by wave 145 (Hiring / During
employment / Estate Planning / Family Law); waves 147, 149, ..., 165
covered the same four categories. This task ran in an isolated git
worktree (`agent-a4c926e69bc87c3e8`) with no coordination with the
other three parallel wave-167 tasks. Every scratch file was written to
a uniquely-named scratchpad subdirectory (`w167_during/`) that
contained only files this task created; nothing was read from the
shared `/tmp` scratchpad.

## Why this document

Read `data/documents.json` first and enumerated all **86** existing
"During employment" documents before choosing a topic, then grepped the
whole corpus (`data/clauses.json` **and** `data/documents.json`) for
each candidate:

- **Employer liability standards for harassment** — `"12940(j)"` 4 hits
  in `data/clauses.json`, **0** in `data/documents.json`;
  `"12940, subd. (j)"` **0**; `"strictly liable"` **0**;
  `"State Dept. of Health Services"` **0**; `"severe or pervasive"`
  **0**; `"12923"` **0**; `"Brooks v. City of San Mateo"` **0**;
  `"12926(t)"` / `"subdivision (t)"` **0**. The four `12940(j)` hits are
  passing cross-references in clauses about other subjects
  (`norehire_ccp_1002_5_definitions_and_history` — the Code of Civil
  Procedure § 1002.5 definition of "sexual harassment" borrowing
  § 12940(j); `sexharasstrain_covered_employers`;
  `reprohealth_prohibition`, which quotes § 12940(a); and
  `mitigparker_employer_burden_affirmative_defense`, which mentions the
  avoidable consequences doctrine in the wrongful-discharge
  mitigation-of-damages context and does not cite this case).
- The two existing harassment documents were read in full and do not
  overlap: `anti_harassment_policy` is a five-clause **federal**
  (Title VII) policy form, and
  `sexual_harassment_prevention_training_info_sheet` is about the
  Gov. Code § 12950.1 training mandate only. Neither states who is
  answerable for an act of harassment, nor the supervisor/coworker
  distinction, nor the avoidable consequences defense.
- Rejected as already covered or out of category: `"12950.1"` (133
  clause hits — the training sheet); `"515.6"` **0** hits but the
  physician/surgeon exemption was passed over in favour of a topic with
  a controlling California Supreme Court decision squarely on point;
  `"3380"` / `"personal protective equipment"`, `"96(k)"`, `"5199"`,
  `"confined space"` (checked, all thin or Cal/OSHA-adjacent to the
  existing IIPP, hazard-communication and respirator material);
  `"98.6"` (36), `"6310"` (22), `"2870"` (12), `"Alvarado"` (4),
  `"flat sum"` (3) — all already present.

**Who the employer answers for** is therefore genuinely uncovered, and
it is the central liability rule of California harassment law: the
statute sets a negligence standard for coworkers and, by the contrast
the California Supreme Court drew from that very wording, strict
liability for supervisors.

## What this document covers

14 clauses (12 authority + 2 drafting), id-prefixed `harassliab_`:

- **`harassliab_intro`** (drafting) — scope; states expressly that the
  sheet describes the law and does not evaluate any incident,
  complaint, investigation, or claim.
- **`harassliab_statutory_prohibition`** — Gov. Code § 12940(j)(1)
  first sentence (the prohibition and the four classes of protected
  persons: employee, applicant, unpaid intern or volunteer, person
  providing services under a contract); § 12940(j)(4)(A) (the
  one-or-more-persons definition of "employer" that applies to
  subdivision (j) **only**, and the sentence directing that
  § 12926(d)'s definition governs the rest of § 12940);
  § 12940(j)(4)(C) ("harassment" because of sex; conduct need not be
  motivated by sexual desire).
- **`harassliab_supervisor_strict_liability`** — State Dept. of Health
  Services at *1034 (question presented; "We conclude that an employer
  is strictly liable under the FEHA for sexual harassment by a
  supervisor"), at *1041 (the implication argument from "by an employee
  other than an agent or supervisor"; agency principles come into play
  only when the harasser is not a supervisor), and the footnote limit
  (no strict liability for a supervisor's harassment arising from a
  completely private relationship unconnected with the employment and
  away from the workplace).
- **`harassliab_coworker_negligence_standard`** — § 12940(j)(1) second
  sentence; the court's restatement of it at *1041 and its three-word
  characterization, "This is a negligence standard."
- **`harassliab_nonemployee_harassment`** — § 12940(j)(1) third and
  fourth sentences (nonemployees; the extent of the employer's control
  and any other legal responsibility "shall be considered").
- **`harassliab_personal_liability_of_harasser`** — § 12940(j)(3)
  (personal liability of the individual regardless of the employer's
  knowledge or response); § 12940(j)(2) ("declaratory of existing
  law").
- **`harassliab_duty_to_prevent`** — § 12940(j)(1) ("An entity shall
  take all reasonable steps to prevent harassment from occurring");
  § 12940(k) as a separate unlawful employment practice covering both
  discrimination and harassment.
- **`harassliab_supervisor_definition`** — Gov. Code § 12926(t) in
  full.
- **`harassliab_avoidable_consequences_defense`** — the court's second
  holding at *1034; the three elements at *1044; the "escape liability
  for those damages, and only those damages" sentence at *1044; the
  defendant's burden of pleading and proving it at *1044; and at *1046
  that a failure to report, by itself, is insufficient to establish the
  defense.
- **`harassliab_defense_affects_damages_not_liability`** — *1045 ("We
  emphasize that the defense affects damages, not liability"); the
  before/after division of compensable harm at *1045; the "limits of
  our holding" restatement at *1049.
- **`harassliab_no_ellerth_faragher_defense`** — the federal
  Ellerth/Faragher standard **as quoted by the California court** at
  *1036, and its holding at *1041 that the federal defense's agency
  reasoning "is not applicable to the FEHA."
- **`harassliab_conduct_standard`** — Gov. Code § 12923 preamble and
  subdivisions (a), (b) and (e); § 12940(j)(1)'s "Loss of tangible job
  benefits shall not be necessary in order to establish harassment."
- **`harassliab_what_this_does_not_cover`** — the textual bounds, with
  pointers to the corpus's existing Anti-Harassment &
  Non-Discrimination Policy and § 12950.1 training documents.
- **`harassliab_ack`** (drafting) — signature block, same pattern as
  `outsalesexempt_ack`.

Fields: `companyName`, `employeeName` (two fields, both referenced by
clause text; `validate.py` asserts declared == used, so there are no
unused fields).

Deliberately **excluded**: the elements or evidentiary standard for
proving harassment in any particular case; discrimination and
retaliation under the other subdivisions of § 12940; the FEHA
administrative complaint process, deadlines, remedies and fees; the
§ 12950.1 training mandate
(`sexual_harassment_prevention_training_info_sheet`); Title VII beyond
the California court's own account of Ellerth and Faragher; the
decisions the Legislature approved or rejected in § 12923 (Harris v.
Forklift Systems, Brooks v. City of San Mateo, Reid v. Google, Kelley
v. Conco Companies, Nazir v. United Airlines), none of which was
fetched; whether a private plaintiff may recover under § 12940(k)
without an underlying violation; and whether an individual can be
personally liable for non-harassment practices.

## Case-law research (no CourtListener MCP quota used)

All case location and text retrieval went through `curl` via the
environment proxy, not the MCP server, per the task brief's quota note:

- Public unauthenticated
  `https://www.courtlistener.com/api/rest/v4/search/?type=o&q=...`
  JSON used **once** to locate the case (cluster **2520995**;
  citations returned include 31 Cal. 4th 1026, 79 P.3d 556, 6 Cal.
  Rptr. 3d 441).
- The opinion HTML page was fetched twice with two distinct header
  sets, each carrying `Referer: https://www.courtlistener.com/` (or a
  second, different Referer), a real browser User-Agent, and Accept
  headers. Both returned HTTP 200 on the first attempt; the `sleep`
  retry loops prepared for the brief's empty-202 case were not needed.
- Two further public-search **phrase** queries were used as an
  independent, index-side second check of the case quotes (below).
  Both returned HTTP 200 on the first attempt.
- Justia, FindLaw, Google Scholar and case.law are egress-blocked from
  this environment, so CourtListener is the only reachable publisher of
  the California Official Reports text.

## Independent double-fetch

Every source was fetched twice into `w167_during/`, and every quote was
required to appear in **both** copies (asserted by `merge.py`, which
refuses to write if any check fails):

- **Cal. Gov. Code § 12940** — `leginfo.legislature.ca.gov`, two
  genuinely different paths *and* two different User-Agents:
  `codes_displaySection.xhtml?lawCode=GOV&sectionNum=12940`
  (Chrome/macOS UA, 183,460 bytes, md5 `5da5610d…`) vs.
  `codes_displayText.xhtml?lawCode=GOV&division=3.&title=2.&part=2.8.&chapter=6.&article=1.`
  — the whole-article view (Safari/iOS UA, 301,909 bytes, md5
  `37f29ae7…`). All ten quoted § 12940 passages are present and
  identical in both.
- **Cal. Gov. Code § 12923** — `…sectionNum=12923` (Chrome/macOS UA,
  166,507 bytes, md5 `11093601…`) vs. the whole-chapter view
  `…&chapter=3.&article=` (Safari/iOS UA, 139,263 bytes, md5
  `26380578…`). Identical text.
- **Cal. Gov. Code § 12926** — `…sectionNum=12926` (Chrome/macOS UA,
  182,519 bytes, md5 `800f3916…`) vs. the whole-chapter view
  `…&chapter=4.&article=` (Safari/iOS UA, 171,021 bytes, md5
  `c589735f…`). Identical text.
- **State Dept. of Health Services v. Superior Court** CourtListener
  opinion page — two distinct header sets (Safari/macOS +
  `Referer: https://www.courtlistener.com/` + `Accept-Language:
  en-US,en;q=0.9` vs. Chrome/Windows-Edg + a different Referer and
  `Accept-Language: en-GB,en;q=0.8`). Both 121,270 bytes; the md5s
  differ (`9e5a9f78…` / `2f95be10…`) only because the page embeds a
  per-request CSRF token. The extracted `<article>` text is **exactly
  identical** (50,533 characters, byte-for-byte after tag-stripping).

**Disclosed limitation:** the opinion text reaches this environment
only through CourtListener, because every other publisher of the
California Official Reports is egress-blocked here. The two fetches
therefore differ in headers, not in publisher — the fallback the brief
expressly permits — and were supplemented by the index-side phrase
check below, which queries a different CourtListener backend
(Elasticsearch) than the HTML page that was parsed.

## Quote verification

`quotes.py` rebuilt a normalized text of each source (nbsp → space,
whitespace collapsed; a star-pagination-stripped variant also built for
the opinion, the same benign normalization used by earlier entries in
this directory), and `merge.py` checked every one of the document's
`citations[].quote` values for exact substring containment in **both**
fetches of its cited source before writing anything.

**Result: 35 of 35 citation quotes verified against two independent
fetches each, 0 failed.** (The underlying quote inventory in
`build.py` is 32 distinct strings; three are cited from two clauses
each.)

Defects avoided or disclosed, each recorded in the relevant clause's
`gap`:

1. **The footnote's page number.** The footnote quoted in
   `harassliab_supervisor_strict_liability` ("Of course, this analysis
   assumes the supervisor is acting in the capacity of supervisor…")
   appears in the CourtListener rendering in a block of footnotes
   collected after the signature line, stripped of its footnote
   numbers, so the official-reports page on which it is printed cannot
   be determined from the fetched text. Rather than guess a pincite,
   the citation is given as **"31 Cal.4th 1026, fn. 3"** with no page,
   and the clause's `gap` states exactly why. (Footnote order in the
   fetched block — section-references note, Holly D. note, then this
   one — is what identifies it as footnote 3; the marker "3" appears in
   the body immediately after "…only when the harasser is not a
   supervisor.")
2. **An OCR artifact deliberately not quoted.** In one sentence the
   fetched text renders the statutory subdivision as "section 12940,
   subdivision (j)(l)" with a lowercase letter *l* in place of the
   digit *1*. No quote in this document includes that sentence; the
   parallel, correctly rendered citation "(§ 12940, subd. (j)(1))"
   from the preceding sentence is what is quoted instead.
3. **Star-pagination markers.** No quoted passage spans a page break,
   so no marker had to be removed from any quote; the
   marker-stripped variant of the text was built and checked anyway,
   and every quote verifies against the **unmodified** text as well.
4. **A repealed-regulation quotation not carried over.** The *1046
   passage the document draws on also quotes a former Fair Employment
   and Housing Commission regulation (Cal. Code Regs., tit. 2,
   § 7287.6(b)(4)). That regulation is **not** quoted or cited here —
   only the court's own sentences about the avoidable consequences
   defense are — because the regulation's current status was not
   independently verified.
5. **Spacing around reporter citations.** Tag-stripping the
   CourtListener page leaves single spaces before some punctuation
   inside bracketed reporter citations (e.g. `at p. 765 ;`). Every
   quote was chosen to end before such a passage, so no quote depends
   on that spacing.

**Pincites** were derived programmatically from the star-pagination
markers in the fetched text, not from memory: `quotes.pincite()`
returns the marker immediately preceding each quote — *1034 (question
presented; both holdings), *1036 (the Ellerth/Faragher standard as the
California court quotes it), *1041 (the negligence standard; the
implication argument; agency principles; the federal defense's
reasoning not applicable), *1044 (burden of pleading and proving; the
three elements; "those damages, and only those damages"), *1045 ("the
defense affects damages, not liability"; the before/after division),
*1046 (failure to report insufficient by itself), *1049 ("We reiterate
the limits of our holding").

**Independent phrase-level second check of the case quotes** (task
brief option (d)): two CourtListener public-search queries, each
`AND`-ing several exact phrases onto `cluster_id:2520995` so that a
count of 1 confirms every phrase in the group —

- `cluster_id:2520995 AND "We conclude that an employer is strictly
  liable under the FEHA for sexual harassment by a supervisor" AND
  "This is a negligence standard" AND "by implication the FEHA makes
  the employer strictly liable for harassment by a supervisor"` →
  **count 1**;
- `cluster_id:2520995 AND "We emphasize that the defense affects
  damages, not liability" AND "the defense has three elements" AND
  "its reasoning is not applicable to the FEHA" AND "The employer is
  not strictly liable for a supervisor"` → **count 1**.

Each returned result is State Department of Health Services v. Superior
Court.

## Schema validation

Read `data/clauses.json` and `data/documents.json` before writing, and
matched the exact patterns of the most recent During-employment info
sheets (`outside_salesperson_exemption_info_sheet`,
`sexual_harassment_prevention_training_info_sheet`). `merge.py` and
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

- both parse as JSON, and each file re-serializes (2-space indent,
  `ensure_ascii=False`, trailing newline) **byte-for-byte identical**
  to what is on disk;
- no duplicate clause id across all **5,803** clauses (was 5,789) and
  no duplicate document id across all **685** documents (was 684);
- every `clauseOrder` entry in every document resolves to an existing
  clause (0 missing, corpus-wide);
- every `{{placeholder}}` appearing in any clause body, gap, or
  citation used by a document resolves to a field declared by that
  document (0 unresolved, corpus-wide);
- for this document, the set of declared fields equals the set of
  placeholders actually used;
- the During employment category now holds **87** documents (was 86).

`git diff --stat` shows **392 insertions, 0 deletions** across the two
data files, confirming the re-serialization reproduced the existing
files exactly outside the appended entries.

## "Inform, never advise" check

Every clause states what the statute or the California Supreme Court
says. No clause tells the reader what to do — not whether to report
harassment, not how to investigate a complaint, not what policy to
adopt, not whether any conduct was harassment. Where the opinion itself
discusses employee reporting, the document attributes the statement to
the court and quotes it. The intro clause says expressly that the sheet
"describes the law; it does not evaluate any particular incident,
complaint, investigation, or claim, and it does not state what any
person should do," and the gaps of
`harassliab_supervisor_strict_liability`,
`harassliab_coworker_negligence_standard`,
`harassliab_supervisor_definition`,
`harassliab_avoidable_consequences_defense` and
`harassliab_what_this_does_not_cover` each restate that the underlying
questions are factual ones the document does not address.

## Sources cited in the document

| Source | URL |
| --- | --- |
| Cal. Gov. Code § 12940, subds. (j)(1), (j)(2), (j)(3), (j)(4)(A), (j)(4)(C), (k) | https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=12940. |
| Cal. Gov. Code § 12923, subds. (a), (b), (e) | https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=12923. |
| Cal. Gov. Code § 12926, subd. (t) | https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=12926. |
| State Dept. of Health Services v. Superior Court (2003) 31 Cal.4th 1026 | https://www.courtlistener.com/opinion/2520995/state-department-of-health-services-v-superior-court/ |
