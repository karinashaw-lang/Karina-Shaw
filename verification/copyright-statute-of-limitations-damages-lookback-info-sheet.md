# Verification — Copyright Statute of Limitations and the Damages Lookback

Document id: `copyright_statute_of_limitations_damages_lookback_info_sheet`
Category: Confidentiality & IP
Clause id prefix: `cpysol_`
Clauses: 15 (13 authority, 2 drafting). Citations: 34.
Checked: 2026-09-13

## Coverage check performed before drafting

Case-insensitive fixed-string greps over `data/documents.json` + `data/clauses.json` at HEAD
before any edit:

| term | hits | note |
|---|---|---|
| `Petrella` | 0 | |
| `Warner Chappell` | 0 | |
| `Nealy` | 0 | |
| `Starz` | 0 | |
| `Sohm` | 0 | |
| `SCA Hygiene` | 0 | |
| `Roley` | 0 | |
| `507(b)` | 10 | all false positives on **Civil Code § 1507(b)** and on the Copyright Claims Board tolling clause that cross-references 17 U.S.C. § 507(b) without construing it |
| `separate accrual` / `separate-accrual` | 1 / 1 | single incidental mention, not the copyright rule |
| `discovery rule` | 23 | all in the CUTSA/Civ. Proc. limitations documents, none copyright |
| `three-year` | 122 | generic |

## Source fetch paths (two independent retrievals per authority)

| authority | fetch 1 | fetch 2 | comparison |
|---|---|---|---|
| 17 U.S.C. § 507(a)–(b) and its Historical & Revision Notes | `uscode.house.gov` `view.xhtml?req=granuleid:USC-prelim-title17-section507` (Chrome UA) | `law.cornell.edu/uscode/text/17/507` (Safari UA) | identical after markup strip + whitespace collapse |
| 17 U.S.C. § 504(a) | `uscode.house.gov` …`title17-section504` (Chrome UA) | `law.cornell.edu/uscode/text/17/504` (Safari UA) | identical |
| 35 U.S.C. § 286 | `uscode.house.gov` …`title35-section286` (Chrome UA) | `law.cornell.edu/uscode/text/35/286` (Safari UA) | identical |
| *Petrella v. Metro-Goldwyn-Mayer, Inc.*, 572 U.S. 663 (2014) | `courtlistener.com/opinion/2675754/…` (Chrome UA + Referer) — carries **U.S. Reports star pagination \*667–\*699** | `law.cornell.edu/supremecourt/text/12-1315` (Safari UA) — slip opinion | identical after curly→straight quote normalization |
| *Warner Chappell Music, Inc. v. Nealy*, 601 U.S. 366 (2024) | `supremecourt.gov/opinions/23pdf/601us2r19_jifl.pdf` — **preliminary print, official pagination 366–376** | `law.cornell.edu/supremecourt/text/22-1078` — slip opinion | identical after ligature restoration + hyphen rejoin (see defects) |
| *Starz Entertainment, LLC v. MGM Domestic Television Distribution, LLC*, 39 F.4th 1236 (9th Cir. 2022) | `courtlistener.com/opinion/6623650/…` (Chrome UA + Referer); second CL fetch via `/c/F.4th/39/1236/` with a Firefox UA returned byte-identical HTML | `govinfo.gov/content/pkg/USCOURTS-ca9-21-55379/pdf/USCOURTS-ca9-21-55379-0.pdf` — the court's own slip PDF | identical after PDF hyphen rejoin + removal of the per-page docket stamp and running head |
| *SCA Hygiene Products Aktiebolag v. First Quality Baby Products, LLC*, 580 U.S. 328 (2017) | `courtlistener.com/opinion/4376984/…` (Chrome UA + Referer) — carries only **S. Ct. star pagination \*959–\*973** | `law.cornell.edu/supremecourt/text/15-927` (Safari UA) — slip opinion | identical after quote normalization |

Blocked / failed paths recorded: `cdn.ca9.uscourts.gov` and `www.ca9.uscourts.gov` return proxy 403
(CONNECT tunnel failed); `supremecourt.gov/opinions/23pdf/22-1078_3e04.pdf` and
`/13pdf/12-1315_5h26.pdf` return 404 because both slips have been superseded by preliminary prints;
`courtlistener.com/c/U.S./601/366/` returns HTTP 300 (two clusters share that citation), so the
Nealy second path was taken from supremecourt.gov and Cornell instead. CourtListener HTML pages
return an empty 202 without a Referer; one Starz fetch and three SCA fetches hit 202 and succeeded
on retry after a 45 s wait. The public search JSON returned one 429 at the start of the session and
succeeded on the next attempt.

Phrase-level confirmations run against the CourtListener search index (count 1 = phrase present in
that cluster):

- `cluster_id:6623650 AND "the discovery rule of accrual of copyright claims is alive and well"` → count 1
- `cluster_id:2675754 AND "bars relief of any kind for conduct occurring prior to the three-year limitations period"` → count 1

## Normalizations applied before substring comparison (all benign, all disclosed in the clause gaps)

1. Curly quotation marks and apostrophes → straight; en/em dashes → `-` / `--`; non-breaking
   spaces → spaces; whitespace runs collapsed.
2. CourtListener star-pagination markers (`*668`) removed — one quote (*Petrella* on equitable
   relief) spans the 667/668 page break and contains such a marker in the source rendering.
3. Line-wrap hyphenation rejoined (`fl- ing` → `filing`, `infringe- ment` → `infringement`).
4. **Ligature restoration in the Nealy preliminary-print PDF.** pdfminer's extraction of
   `601us2r19_jifl.pdf` drops the `fi`, `fl` and `ffi` ligatures: the text layer yields `fling`
   for `filing`, `profts` for `profits`, `qualifcation` for `qualification`, `affrm`, `frst`,
   `confned`, `Suffce`. These were restored from an explicit word list before comparison.
5. Repeated page furniture removed from the PDF text layers: `Page Proof Pending Publication`,
   `Cite as: 601 U. S. 366 (2024)`, the running heads, and the Ninth Circuit's per-page
   `Case: 21-55379, 07/14/2022, ID: … Page n of 23` stamp.

## Defects and conflicts disclosed rather than corrected

1. **Uncorrected legislative-history note under 17 U.S.C. § 507.** The Historical and Revision
   Notes (H.R. Rep. No. 94-1476) printed under the section still say it "establishes a three-year
   statute of limitations for both criminal proceedings and civil actions." That has been wrong as
   to criminal proceedings since Pub. L. 105-147 substituted "5" for "three" in subsection (a) in
   1997. **Both** mirrors (uscode.house.gov and Cornell) reproduce the uncorrected note verbatim,
   so the error is in the published notes, not in either site's rendering. Quoted as-is and
   explained in the gap of `cpysol_statute_507a_criminal_and_uncorrected_note`.

2. **Internal tension inside Petrella, and Nealy's partial answer to it.** Petrella states at
   572 U.S. 667 that "Section 507(b), it is undisputed, bars relief of any kind for conduct
   occurring prior to the three-year limitations period." Nealy holds there is no separate
   three-year limit on monetary recovery, and it explains only the *other* Petrella sentence
   (the "retrospective relief running only three years back" language at 672 and 677). It never
   addresses the "bars relief of any kind" sentence. Both sentences are quoted and the unresolved
   gap is stated in `cpysol_three_years_back_sentence`; nothing there resolves it.

3. **Count drift between the two Supreme Court opinions.** Petrella n.4 (2014) counts "nine
   Courts of Appeals" applying a copyright discovery rule; Nealy (2024) says "(11 at last count)".
   Both numbers are quoted as written and the difference is flagged in
   `cpysol_discovery_rule_not_decided` rather than harmonized.

4. **The third Nealy copy is not independent.** CourtListener's Nealy text
   (`/opinion/10600095/…`) is itself derived from the same preliminary print and reproduces the
   identical ligature damage (`fl- ing`, `profts`, `qualifcation`). It was fetched and every quote
   checks out against it, but it was **not** counted as one of the two independent sources; Cornell's
   clean slip-opinion rendering was used as the second source. Stated in the Nealy gap text.

5. **Petrella footnote 4 has no star page in the rendering.** CourtListener prints the footnotes
   after the opinions, so the star-page inference for n.4 lands on \*699 (inside the dissent's page
   range), which is wrong. The pin cite `572 U.S. 663, 670 n.4` is therefore taken from the Supreme
   Court's own later citation of that footnote in Nealy ("Petrella, 572 U. S., at 670, n. 4"), and
   the gap says so.

6. **No pin cite for Starz.** Neither retrieved text of 39 F.4th 1236 carries Federal Reporter star
   pagination, so per the no-guessing rule no page is given. The gap notes that Nealy pin-cites
   Starz at 1244.

7. **No U.S. Reports pin cite for SCA Hygiene.** The CourtListener rendering carries only S. Ct.
   star pages (\*959–\*973) and the Cornell rendering is the slip; the citation is given as
   580 U.S. 328 (2017) with no pin.

8. **Italics-stripping artifact in SCA Hygiene.** Both HTML renderings produce "In Petrella , we
   held …" with a space before the comma (the space is left behind when the `<i>` around the case
   name is stripped). The quote therefore begins after the case name, at "we held that laches …".
   Disclosed in the gap of `cpysol_patent_contrast_section_286`.

9. **Sohm v. Scholastic quoted only through Nealy.** The Second Circuit's damages-cap rule is
   reported solely as the Nealy opinion reproduces it (with the Court's own internal quotation
   marks around "limited" and "the three years prior to the filing"). No text of Sohm was fetched.
   Stated in the gap of `cpysol_sohm_second_circuit_rule`.

10. **Negative results recorded.** The Supreme Court has twice expressly declined to decide whether
    the Copyright Act permits discovery-based accrual (Petrella n.4; Nealy at 371), so no holding of
    that Court answers it; and 17 U.S.C. § 507 itself contains no discovery rule, no tolling
    provision and no damages-lookback sentence. Both are stated in the gaps.

## Validation run after merge

- `data/clauses.json` and `data/documents.json` both parse.
- clause ids unique (6209 clauses); document ids unique; document titles unique (713 documents).
- every `clauseOrder` id resolves; no orphan clauses corpus-wide.
- every authority clause has a non-empty `gap` and at least one citation.
- no undeclared `{{field}}` placeholders in any clause body or gap.
- canonical key order verified for every clause, every citation and every document.
- Result: **ALL STRUCTURAL CHECKS PASS**.

## Quote read-back

Every `citations[].quote` was read back **out of the written `data/clauses.json`**, re-normalized,
and re-tested as a substring of both fetched source texts for its authority.

**34 quotes verbatim in both fetches, 0 failures.**
