# Verification record — Territorial Reach of California Wage and Hour Law for Interstate Work

- Document id: `california_wage_law_territorial_reach_info_sheet`
- Category: During employment
- Clause id prefix: `terrreach_`
- Clauses: 15 (13 authority, 2 drafting). Citations: 37.
- Checked date recorded in clauses: 2026-09-13

## Coverage check performed before choosing the topic

Case-insensitive greps of `data/documents.json` and `data/clauses.json` at HEAD
(commit `6dcdd51`), counted as matching lines:

| term | documents.json | clauses.json |
|---|---|---|
| `Sullivan v. Oracle` / `Oracle` | 0 | 0 |
| `Ward v. United Airlines` | 0 | 0 |
| `Oman v. Delta` / `Delta Air Lines` | 0 | 0 |
| `extraterritorial` | 0 | 0 |
| `principal place of work` | 0 | 0 |
| `presumption against extraterritorial` | 0 | 0 |
| `51 Cal.4th 1191` | 0 | 0 |
| `9 Cal.5th 732` | 0 | 0 |
| `9 Cal.5th 762` | 0 | 0 |
| `Tidewater Marine` | 0 | 0 |
| `Diamond Multimedia` | 0 | 0 |
| `out-of-state employ` | 0 | 0 |
| `United Airlines` | 0 | 1 (an unrelated passing reference to *Nazir v. United Airlines, Inc.* in a FEHA clause) |
| `Sullivan` | 0 | 3 (none is *Sullivan v. Oracle*: two lines in a copyright-coauthorship clause quoting "Gilbert and Sullivan" / *The Pirates of Penzance*, and one naming Acting Chief Justice Sullivan's dissent in an unrelated contracts case) |

The corpus already covers Labor Code §§ 226 and 510 and § 204 as substantive
rules (wage statement itemization, overtime calculation, payday and pay
frequency). It contains nothing on the geographic/choice-of-law question — which
employees those statutes reach when work crosses state lines. That is the gap
this document fills.

## Fetch paths

Two independent fetches were taken for every source and the extracted text
compared. Opinions were additionally confirmed at the phrase level against the
CourtListener public search index, which is a separately built full-text index
rather than the HTML render.

Egress note: Justia, FindLaw, Google Scholar, case.law, archive.org,
scocal.stanford.edu, leagle.com, openjurist.org and anylaw.com were all
unreachable from this environment (403 / connection refused at the proxy), and
`courts.ca.gov` no longer serves the 2011 and 2020 slip PDFs for these case
numbers (301 → 404). The reachable hosts were `www.courtlistener.com`,
`leginfo.legislature.ca.gov` and `california.public.law`.

### Opinions

| Source | Fetch A | Fetch B | Result |
|---|---|---|---|
| *Sullivan v. Oracle Corp.* (2011) 51 Cal.4th 1191 | `GET /opinion/844273/sullivan-v-oracle-corp/`, Chrome/126 UA + `Referer: https://www.courtlistener.com/` + HTML Accept (200, 118,269 bytes) | `GET /c/Cal.%204th/51/1191/` — the citation-redirect path — with Firefox/128 UA, different Referer and Accept (200 after redirect, 118,374 bytes) | Extracted article text **byte-identical** (45,458 chars both) |
| *Ward v. United Airlines, Inc.* (2020) 9 Cal.5th 732 | `GET /opinion/4764536/ward-v-united-airlines-inc/`, Chrome/126 UA + Referer (200, 129,424 bytes) | `GET /c/Cal.%205th/9/732/`, Firefox/128 UA (200, 129,549 bytes) | Extracted text **byte-identical** (66,277 chars both) |
| *Oman v. Delta Air Lines, Inc.* (2020) 9 Cal.5th 762 | `GET /opinion/4764538/oman-v-delta-air-lines-inc/`, Chrome/126 UA + Referer (200, 134,973 bytes) | `GET /c/Cal.%205th/9/762/`, Firefox/128 UA (200, 135,098 bytes) | Extracted text **byte-identical** (71,015 chars both) |

Phrase-level third check: `GET /api/rest/v4/search/?type=o&q=cluster_id:<id> AND
"<phrase>"` for each quoted passage. 26 phrases submitted, all returned
`count=1` against the correct cluster. Two long phrases first returned `count=0`
and were re-submitted as shorter spans from the same sentences —
`"minimum wage, equal pay, or antiharassment laws"` (cluster 4764536) and
`"the separate question concerning the geographic scope"` (cluster 4764538) —
each returning `count=1`. The `count=0` results are recorded here rather than
suppressed; the phrases are present verbatim in both HTML fetches, so the
zero counts reflect the search index's phrase handling, not absence from the
opinion. Two search calls hit HTTP throttling and were retried after a 300 s
in-turn sleep.

### Statutes

| Source | Fetch A | Fetch B | Result |
|---|---|---|---|
| Lab. Code § 510(a) | `leginfo.legislature.ca.gov` `codes_displaySection.xhtml?lawCode=LAB&sectionNum=510.`, Safari/17 UA (200) | `california.public.law/codes/ca_lab_code_section_510`, Firefox/129 UA (200) | Quoted sentence identical |
| Lab. Code § 226(a) | leginfo, same pattern (200) | california.public.law (200) | **Defect found in Fetch B — see below.** Quoted span identical in both |
| Lab. Code § 204(a) | leginfo (200 on retry; first attempt was a connection reset) | california.public.law (200) | Quoted span identical after normalizing the spaces Fetch B inserts around cross-reference links |
| Lab. Code § 1171.5(a) | leginfo (200) | california.public.law (200) | Identical |
| Gov. Code § 110 | leginfo (200) | california.public.law (200) | Identical to each other — **but not to the opinion's rendering; see below** |

## Defects and conflicts disclosed rather than corrected

1. **OCR damage in the CourtListener text of *Sullivan v. Oracle Corp.***
   The available rendering is a scan of the official reporter and carries
   visible character-recognition errors, identically in both fetches:
   `ELSA` for `FLSA`; `Instmctors` for `Instructors`; `extratenitorially` for
   `extraterritorially`; `[a]ray work` where the opinion quotes the statutory
   phrase `[a]ny work`; `[sjtates` for `[s]tates`; `14 CalAth` for `14 Cal.4th`;
   `(!Tidewater,` for `(Tidewater,`; `.nonliteral` for `nonliteral`; `§8` for
   `§ 8`. No passage containing any of these was quoted. This is disclosed in
   the `gap` of every clause drawing on that opinion. Notably, the sentence
   giving the *reason* the UCL does not operate extraterritorially is one of the
   damaged ones, so the UCL clause quotes the sentences on either side of it and
   says why.

2. **Gov. Code § 110: statute and opinion disagree on one character.**
   Both statutory publishers render the sentence as "…as established by the
   **constitution**" (lowercase). *Sullivan*'s parenthetical quotation of the
   same sentence capitalizes it: "…as established by the **Constitution**."
   The clause quotes the statutory sources as they read, does not adopt the
   opinion's capitalization, and states the discrepancy in its `gap`.

3. **Truncated § 226(a) on the secondary code host.**
   `california.public.law/codes/ca_lab_code_section_226` breaks off mid-sentence
   inside clause (9) — it ends at "as defined in " and jumps straight to
   subdivision (b) — omitting the temporary-services-employer language and the
   record-retention sentence that leginfo carries. The quotation used was taken
   only from the portion the two hosts render identically, and the truncation is
   reported in the clause's `gap`.

4. **No star pagination for the 2020 opinions.**
   *Ward* and *Oman* are available only as slip opinions: sequential slip page
   numbers and running headers, no star pagination to California Reports,
   Fifth Series. Pin cites are therefore **not** given for those two cases —
   only the volume-and-first-page citations listed in CourtListener's reporter
   metadata. The slip running headers ("WARD v. UNITED AIRLINES, INC. / Opinion
   of the Court by Kruger, J.") interrupt sentences that straddle page breaks,
   so every quoted passage was checked to lie wholly within one slip page. The
   court's own conclusion sentence in *Ward* breaks at "…principal place of work
   is in 35 WARD v. UNITED AIRLINES, INC. … California."; the clause quotes the
   sentence that follows the break instead. *Sullivan*, by contrast, does carry
   star pagination (`*1194`–`*1210`), and every *Sullivan* pin cite in this
   document was read off the nearest preceding star marker programmatically,
   not from memory.

5. **A line-wrap hyphenation artifact was avoided, not normalized.**
   *Ward*'s sentence on the mirror-image presumption reads "mirror- image" in
   the slip text. Rather than silently repair it, the sentence was not quoted;
   the clause states this.

6. **Formulation difference between the two companion opinions.**
   *Ward*'s disposition states the test in two branches (majority of time in
   California, or — for interstate transportation workers not primarily working
   in any single state — base of work operations in California). *Oman*'s
   summary sentence for § 204 says the statute "applies only to pay periods
   during which an employee predominantly works inside California," which on its
   face omits the base-of-operations branch, while *Oman*'s formal answer to the
   certified question restates both branches. No consulted source reconciles the
   two phrasings. Both are quoted in the § 204 clause so the reader can compare
   them, and the `gap` flags the difference rather than harmonizing it.

7. **Out-of-state and lower-court authority quoted only as California courts
   report it.** *Tidewater Marine Western, Inc. v. Bradshaw* (1996) 14 Cal.4th
   557 was not fetched; its language appears only as *Sullivan* reproduces it at
   p. 1199, and the clause says so. *Bernstein v. Virgin America, Inc.*
   (N.D.Cal.), *Shook v. Indian River Transport Co.* (E.D.Cal.), *Bostain v.
   Food Express, Inc.* (Wash.), and the Colorado and Arizona statutes and
   regulations are described only as *Sullivan* and *Ward* characterize them,
   and are never quoted directly. Wage Order No. 9 (both § 1(E) and § 4(B)) and
   Unemployment Insurance Code §§ 602–603 were likewise not fetched and are
   described only as the opinions describe them; each `gap` says so.

8. **Recorded negative result.** *Oman* expressly declined to decide the
   geographic scope of California's minimum wage laws. No later California
   decision resolving that reserved question was located in the sources
   searched here. The clause `terrreach_oman_minimum_wage_left_open` records
   this as a negative result rather than filling the hole.

## Benign normalization applied

Whitespace only. The CourtListener HTML breaks lines around italicized words and
inserted citation links, and `california.public.law` inserts spaces around
cross-reference links; runs of spaces, non-breaking spaces and line breaks were
collapsed to single spaces before substring comparison. No characters were
added, removed or changed. This is stated in the `gap` of every authority clause.

## Per-citation verification

All 37 `citations[].quote` values were re-read out of the written
`data/clauses.json` and re-tested as verbatim substrings of **both**
whitespace-normalized fetches of their source.

- Result: **37 pass / 0 fail.**

Star-page assignment for the eleven *Sullivan* quotations was computed by
scanning backwards from each quote's offset to the nearest `*NNNN` marker in the
reporter text: pp. 1197 (×2), 1199, 1199–1200, 1201 (×1, a two-sentence span),
1202, 1203, 1205, 1206, 1207 (×2).

## Post-merge corpus validation

Assertions run against the merged files:

- both files parse; `clauses.json` is `{"clauses": [...]}`, `documents.json` a bare array — pass
- clause ids unique corpus-wide (6,149 clauses) — pass
- document ids unique (709 documents) — pass
- document titles unique corpus-wide — pass
- every `clauseOrder` entry resolves to a clause, in every document — pass
- no orphan clauses — pass
- every new authority clause has a non-empty `gap` and ≥ 1 citation — pass
- key order canonical for every new clause, citation and the document — pass
- `categories` exactly `["During employment"]` — pass
- no undeclared `{{placeholder}}` in any document, corpus-wide — pass
  (this document uses `companyName`, `employeeName`, `positionTitle`,
  `workBaseLocation`; all four declared)
