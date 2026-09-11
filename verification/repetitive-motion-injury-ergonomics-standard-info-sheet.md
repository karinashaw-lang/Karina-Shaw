# During employment, new document: Repetitive Motion Injury (Ergonomics) Standard — Information Sheet

## Wave

Wave 157 (During employment category). This wave continues the
even-round-robin cadence (Hiring / During employment / Estate Planning /
Family Law) covered by waves 145, 147, 149, 151, 153, and 155.

## Why this document

Read `data/documents.json` and enumerated all 81 existing "During
employment" documents before choosing a topic. Grepped the whole corpus
(both `data/clauses.json` and `data/documents.json`) for each candidate
suggested in the task brief and found every one already covered:
regular rate / flat-sum bonus (`overtime510_flat_sum_bonus_regular_rate`
in `california_overtime_pay_calculation_info_sheet`, citing Alvarado),
alternative workweek election
(`alternative_workweek_schedule_election_info_sheet`), bereavement leave
(`bereavement_leave_info_sheet`), copy of signed instrument
(`right_to_copy_of_signed_documents_info_sheet`), lactation
accommodation (`lactation_accommodation_info_sheet`), and the workplace
violence prevention plan
(`workplace_violence_prevention_plan_info_sheet`). Also confirmed as
already covered: wage garnishment, CROWN Act, drug-rehabilitation
accommodation (Lab. Code § 1025), pay-scale disclosure / Fair Pay Act,
personnel and payroll record access, wage theft prevention notice, cash
bond restrictions, DLSE wage claims, CMIA employer medical-information
confidentiality, ABC test, IIPP, heat illness, wildfire smoke,
bloodborne pathogens, hazard communication, occupational noise, and the
emergency action plan.

Grepped the corpus for "ergonomic" (one hit, in an unrelated patent
document), "repetitive" (zero hits), "5110" (hits only in unrelated
HOA-election and securities-exemption clauses), "6357" (one hit, in an
unrelated quiet-title clause), and "Pulaski" (zero hits). The Cal/OSHA
ergonomics standard, 8 Cal. Code Regs. § 5110 (Repetitive Motion
Injuries), was therefore genuinely uncovered. It is a well-scoped,
single-regulation topic with a distinctive trigger structure (the
standard applies only after more than one qualifying injury) that is
easy to misunderstand, a clear statutory origin (Lab. Code § 6357), and
a published Court of Appeal decision reviewing it (Pulaski v. California
Occupational Safety & Health Standards Board (1999) 75 Cal.App.4th 1315).
The existing `injury_illness_prevention_program_info_sheet` (8 Cal. Code
Regs. § 3203) and `cal_osha_injury_illness_recording_info_sheet` do not
address the ergonomics standard's trigger or program elements.

## What this document covers

11 clauses (9 authority + 2 drafting): 8 authority clauses cite 8 Cal.
Code Regs. § 5110 and/or Lab. Code § 6357, and 1 cites Pulaski v.
California Occupational Safety & Health Standards Board (1999) 75
Cal.App.4th 1315 together with the regulation's history note:

- **`rmiergo_intro`** (drafting) — introduces the document and its
  scope.
- **`rmiergo_statutory_mandate`** (Lab. Code § 6357; § 5110 authority
  and history notes) — the 1993 statutory directive to adopt an
  ergonomics standard by January 1, 1995 and the regulation's June 1997
  filing / July 3, 1997 operative date.
- **`rmiergo_scope_more_than_one_employee`** (§ 5110(a), (a)(1), (a)(2))
  — the "more than one employee" trigger, the 50-percent work-related
  causation condition, and the "identical work activity" condition and
  definition.
- **`rmiergo_medical_and_time_requirements`** (§ 5110(a)(3), (a)(4)) —
  the licensed-physician musculoskeletal diagnosis condition and the
  reported-within-12-months / not-before-July-3-1997 condition.
- **`rmiergo_program_requirement`** (§ 5110(b)) — the duty to establish
  and implement a program with three components.
- **`rmiergo_worksite_evaluation`** (§ 5110(b)(1)) — the worksite
  evaluation element, including the "representative number" option.
- **`rmiergo_control_of_exposures`** (§ 5110(b)(2)) — correct or
  minimize-to-the-extent-feasible, and the engineering / administrative
  control examples.
- **`rmiergo_training`** (§ 5110(b)(3)(A)-(E)) — the five required
  training subjects.
- **`rmiergo_satisfaction_of_obligation`** (§ 5110(c)) — the
  three-part showing required before implemented measures are deemed
  insufficient.
- **`rmiergo_pulaski_judicial_review`** (Pulaski, 75 Cal.App.4th 1315;
  § 5110 history note item 3) — the Court of Appeal's 1999 review of
  the standard: valid except for the original nine-or-fewer-employees
  exemption, which contradicted the § 6357 mandate and was "invalid per
  se" and severable; the trial court erred in striking other provisions;
  APA challenges meritless; judgment reversed and remanded — and the
  resulting 2000 repeal of former subsection (a)(4).
- **`rmiergo_ack`** (drafting) — signature block, following the exact
  pattern used by `wildfiresmoke_acknowledgment_signature` and
  `heatillness_acknowledgment_signature`.

Fields: `companyName`, `employeeName`, `programAdministratorName` —
reused (same ids and placeholder style) from the existing
`wildfire_smoke_protection_info_sheet` and
`heat_illness_prevention_info_sheet` documents; only the
`programAdministratorName` label text was adapted to this topic. No new
field ids were introduced.

## Independent double-fetch

All fetches were made with `curl` through the environment proxy
(`HTTPS_PROXY`, CA bundle `/root/.ccr/ca-bundle.crt`).

**8 Cal. Code Regs. § 5110** — fetched
`https://www.dir.ca.gov/title8/5110.html` twice with two distinct
User-Agent strings (`Mozilla/5.0 (X11; Linux x86_64)
groundtruth-verify/1.0` and `Mozilla/5.0 (Windows NT 10.0; Win64; x64)
AppleWebKit/537.36 Chrome/124.0 Safari/537.36`). Both returned HTTP 200,
10,867 bytes, identical md5sum (`40ec873b86fd0bbbcea3b8594b17d919`).

**Lab. Code § 6357** — fetched
`https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=6357.`
twice with two distinct User-Agent strings (`curl/8
groundtruth-verify-b` and `Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0)
Safari/605.1.15 groundtruth-second-fetch`). Both returned HTTP 200; the
raw HTML differed only in leginfo's per-session page chrome (md5sums
differ), and the extracted statutory text of § 6357 was identical in
both.

**Pulaski v. California Occupational Safety & Health Standards Board
(1999) 75 Cal.App.4th 1315 (CourtListener cluster 2300696)** — fetch-path
disclosure. The CourtListener MCP API's shared 125-calls/day quota was
exhausted by parallel agents for the entire ~2.5 hours this document was
prepared: `search`, `read_document`, and `search_document` all returned
HTTP 429 (contrary to earlier sibling reports, `read_document` and
`search_document` were subject to the daily cap at the time), the quota
was re-consumed by siblings within a minute of reopening after a 70-minute
in-turn wait, and at the time of writing the API reported ~2 more hours
before availability. The CourtListener opinion web page returned an HTTP
202 AWS-WAF bot-challenge response (zero-length or 2,006-byte challenge
body) to curl with three different User-Agent strings; the
unauthenticated v4 `search` API endpoint returned HTTP 429 (~11 hours),
the v3 endpoint HTTP 403, and the v4 `opinions`/`clusters` endpoints HTTP
401; and Justia, FindLaw, Google Scholar, case.law / static.case.law,
Leagle, and the Wayback Machine were all egress-blocked (curl exit code
000). No slip-opinion PDF exists on storage.courtlistener.com for a 1999
Cal.App.4th opinion.

The one path that worked was CourtListener's public Atom search feed,
`https://www.courtlistener.com/feed/search/?type=o&q=cluster_id:2300696 "<phrase>"`,
which returns the Pulaski entry with a ~100-character highlighted snippet
whenever the exact phrase occurs in the opinion. Two scripts in the
agent's private scratchpad subdirectory (`feedq.py`, `chain.py`) issued
phrase queries scoped to cluster 2300696 and merged overlapping snippets
(word-level suffix/prefix overlap) to reconstruct the passages quoted in
`rmiergo_pulaski_judicial_review`; all queries and returned fragments
were logged to `feed_log.jsonl`. The feed confirmed the case name,
citation (90 Cal.Rptr.2d 54, 75 Cal.App.4th 1315), docket (No. C028525),
court (Court of Appeal, Third District), decision date (October 29,
1999, modified on denial of rehearing November 24, 1999), and author
(Callahan, J.). The second, independent pass (distinct User-Agent) then
submitted each of the 10 final Pulaski quotations as a single
exact-phrase feed query and confirmed the Pulaski entry was returned for
every one (two quotations containing embedded double-quote characters,
which break the feed's query syntax, were re-submitted with the quote
characters stripped and also returned the entry). Because the search
engine tokenizes away punctuation, this verification is token-level
rather than character-level; that limitation is disclosed in the
clause's `gap` field.

## Quote verification

Wrote a Python script (`build.py` in the agent's private scratchpad
subdirectory `wave157_during/`) that stripped HTML tags from each fetched
page, decoded HTML entities, collapsed all whitespace (including
non-breaking spaces) to single spaces, applied the same normalization to
every `citations[].quote` string, and checked each normalized quote for
exact substring containment in **both** independent fetches of its
source.

Result: **all 22 regulation/statute quotes across the 9 authority
clauses verified as exact substrings of both independent fetches of
their source** (21 § 5110 / § 6357 quotes plus the § 5110 history-note
quote in the Pulaski clause). The 10 Pulaski quotations were verified
separately by the exact-phrase feed method described above (10/10
returned the Pulaski entry).

The only normalization applied was whitespace collapse from HTML
tag-stripping (a benign formatting artifact). One disclosure is made in
a `gap` field for readability rather than a defect: `rmiergo_training`'s
body joins the five lettered training subjects (which appear on separate
lines in the source) into one sentence, and its citations quote each
lettered item separately so that each quote is an exact substring of the
source.

## Schema validation

Read `data/clauses.json` and `data/documents.json` first to confirm
current schema shapes, and confirmed that a `json.dumps(..., indent=2,
ensure_ascii=False)` round-trip reproduces both files byte-for-byte, so
the merge is append-only. Ran a Python script after merging that
confirmed:

- Both JSON files still parse.
- All clause ids remain unique across all 5,296 clauses (5,285 → 5,296) clauses.
- All document ids remain unique across all 644 documents (643 → 644).
- Every id in the new document's `clauseOrder` exists in
  `data/clauses.json`.
- Every new authority clause has exactly the keys
  `{id,title,kind,status,checkedDate,body,gap,citations}` and every
  citation has exactly `{case,cite,url,quote}`.
- Every new drafting clause has exactly the keys `{id,title,kind,body}`.
- Corpus-wide, every `{{placeholder}}` in every document's clause bodies
  resolves to a field declared on that document (zero problems).

## Net changes

- New document: Repetitive Motion Injury (Ergonomics) Standard —
  Information Sheet
  (`repetitive_motion_injury_ergonomics_standard_info_sheet`), category:
  During employment.
- 11 (9 authority + 2 drafting) new clauses, all under the `rmiergo_*` id prefix.
- No new field ids (reused `companyName`, `employeeName`,
  `programAdministratorName`).
- Corpus: 5,285 → 5,296 clauses; 643 → 644 documents.
