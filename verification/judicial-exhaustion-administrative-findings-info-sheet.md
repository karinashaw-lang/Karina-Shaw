# Ending employment, new document: Exhaustion of Judicial Remedies: When an Unchallenged Administrative Decision Binds a Later Wrongful-Termination Suit (Code Civ. Proc. §§ 1094.5, 1094.6; Unemp. Ins. Code § 1960; Lab. Code § 244; Westlake Community Hosp. v. Superior Court; Johnson v. City of Loma Linda; Schifando v. City of Los Angeles; Campbell v. Regents; McDonald v. Antelope Valley Community College Dist.; Murray v. Alaska Airlines; Fahlen v. Sutter Central Valley Hospitals) — Information Sheet

Document id: `judicial_exhaustion_administrative_findings_info_sheet`
Clause id prefix: `jexh_`
Category: `["Ending employment"]` (90 existing documents in that category were listed first)

## Topic selection and coverage check

Candidates were grepped case-insensitively against both data files at HEAD
(`data/clauses.json`, `data/documents.json`) before anything was written.

Rejected as already covered:

| grep term | clauses.json | documents.json |
| --- | --- | --- |
| `Salas v. Sierra` | 29 | 3 |
| `Sierra Chemical` | 29 | 3 |
| `after-acquired` | 40 | 2 |
| `1171.5` | 34 | 6 |
| `unclean hands` | 21 | 1 |
| `Camp v. Jeffer` | 18 | 2 |
| `McKennon` | 27 | 3 |

(After-acquired evidence / unclean hands was the first candidate and is
plainly already a document in this corpus, so it was dropped.)

Chosen topic — judicial exhaustion / the binding effect of unchallenged
quasi-judicial findings. Grep counts at HEAD:

| grep term | clauses.json | documents.json |
| --- | --- | --- |
| `Johnson v. City of Loma Linda` | 0 | 0 |
| `Schifando` | 0 | 0 |
| `Westlake Community` | 0 | 0 |
| `judicial exhaustion` | 0 | 0 |
| `Campbell v. Regents` | 0 | 0 |
| `Runyan` | 0 | 0 |
| `Knickerbocker` | 0 | 0 |
| `Y.K.A.` | 0 | 0 |
| `Page v. Los Angeles` | 0 | 0 |
| `Murray v. Alaska` | 0 | 0 |
| `Basurto` | 0 | 0 |
| `Swartzendruber` | 0 | 0 |
| `Briggs v. City of Rolling Hills` | 0 | 0 |
| `administrative findings` | 0 | 0 |
| `1094.6` | 0 | 0 |
| `People v. Sims` | 0 | 0 |
| `Utah Constr` | 0 | 0 |
| `Labor Code section 244` | 0 | 0 |
| `lawCode=LAB&sectionNum=244` | 0 | 0 |

False positives checked and discounted:

- `1960` — 7 hits in `clauses.json`, every one of them a **year** in a case
  citation (`Mallard v. Boring (1960)`, `California Portland Cement Co.
  (1960)`, `AB 1960`, `48 Cal.L.Rev. 705` (1960), `Brewer v. Simpson
  (1960)`). No hit is Unemployment Insurance Code § 1960.
- `§ 244` — 2 hits, both in a tax clause about Revenue & Taxation Code
  §§ 24416 / 24416.1 (the string matched inside "§ 24416"). Not Labor
  Code § 244.
- `1094.5` — 7 hits and `writ of mandate` 17 hits: the corpus mentions
  administrative mandate in passing in other categories, but no document
  sets out the judicial-exhaustion rule, and `collateral estoppel`
  (15 hits) never appears with the Westlake/Johnson line.
- `Miklosy` — 20 hits, from the existing workers'-compensation-exclusivity
  document; that sheet discusses Gov. Code § 8547.10, not judicial
  exhaustion. `exhaust` has 337 hits corpus-wide, almost all about
  exhausting the FEHA/CRD administrative complaint or PAGA notice.

## Fetch paths used, per source

Opinions (CourtListener). Path A = `/opinion/<cluster-id>/<slug>/` with a
Chrome User-Agent; path B = the `/c/<Reporter>/<vol>/<page>/` citation
redirect with a Firefox User-Agent. Both carried
`Referer: https://www.courtlistener.com/` and a browser Accept header
(without a Referer this host answers with an empty HTTP 202). Path C =
phrase-level query against the public search JSON,
`?type=o&q=cluster_id:<id> AND "<phrase>"`, which is an independent index
rather than the rendered page.

| Source | Path A | Path B | A vs B | Path C |
| --- | --- | --- | --- | --- |
| Westlake Community Hosp. v. Superior Court (1976) 17 Cal.3d 465 | cluster 1175714 | `/c/Cal. 3d/17/465/` | byte-identical (52,833 chars extracted) | 4 phrases, count=1 each |
| Johnson v. City of Loma Linda (2000) 24 Cal.4th 61 | cluster 2589859 | `/c/Cal. 4th/24/61/` | byte-identical (50,971) | 7 phrases, count=1 each |
| Schifando v. City of Los Angeles (2003) 31 Cal.4th 1074 | cluster 2520945 | `/c/Cal. 4th/31/1074/` | byte-identical (85,161) | 5 phrases, count=1 each |
| Campbell v. Regents of Univ. of Cal. (2005) 35 Cal.4th 311 | cluster 2508480 | `/c/Cal. 4th/35/311/` | byte-identical (49,298) | 3 phrases, count=1 each |
| McDonald v. Antelope Valley CCD (2008) 45 Cal.4th 88 | cluster 5608076 | `/c/Cal. 4th/45/88/` | byte-identical (57,819) | 4 phrases, count=1 each |
| Murray v. Alaska Airlines (2010) 50 Cal.4th 860 | cluster 2631996 | `/c/Cal. 4th/50/860/` | byte-identical (80,910) | 4 phrases, count=1 each |
| Fahlen v. Sutter Central Valley Hospitals (2014) 58 Cal.4th 655 | cluster 2653943 | `/c/Cal. 4th/58/655/` | byte-identical (90,643) | 2 phrases, count=1 each |

Statutes — two different publishers:

| Section | Path A | Path B | Comparison |
| --- | --- | --- | --- |
| Code Civ. Proc. § 1094.5 | leginfo.legislature.ca.gov (JSF session cookie seeded from `/faces/codes.xhtml`, else the section body returns empty) | california.public.law `/codes/ca_civ_proc_code_section_1094.5` | subdivisions (b) and (c) identical; leginfo shows Stats. 2011, ch. 296, § 41 (AB 1023) |
| Code Civ. Proc. § 1094.6 | leginfo (same cookie method) | california.public.law | subdivisions (b), (e), (f), (g) identical; leginfo shows Stats. 1995, ch. 898, § 1 |
| Unemp. Ins. Code § 1960 | leginfo (same cookie method) | california.public.law | operative sentence identical; leginfo shows Stats. 1986, ch. 283, § 1 (never amended) |
| Lab. Code § 244 | leginfo (same cookie method) | california.public.law | quoted sentence identical; leginfo shows Stats. 2013, ch. 577, § 4 (SB 666), operative Jan. 1, 2014 |

Transport notes: the first leginfo attempt for Unemp. Ins. Code § 1960
died with `curl (35) Recv failure` twice (agent-proxy
`ws_closed_mid_exchange`); an in-turn sleep-and-retry succeeded. The first
attempt on the Fahlen `/c/` path returned the empty HTTP 202 placeholder
and the retry returned the byte-identical document.

## Quote verification

42 citation quotes across 13 authority clauses. Each was checked as a
verbatim substring of **both** fetched copies of its source, after
collapsing whitespace and mapping non-breaking spaces to spaces — the only
normalization applied, and it is disclosed in the clause gaps. The check
was then re-run by reading the quotes back out of the written
`data/clauses.json`: **42 pass, 0 fail** both times.

One quote required removing a reporter star-page marker that falls inside
the sentence: the Pacific Lumber "indicia" list in Murray runs across the
867/868 page break, so the fetched text reads `a party’s *868 ability to
subpoena`. The marker was deleted and nothing else changed; the clause gap
says so.

Pin cites were taken from star pagination in the fetched text, not from
memory. Spot record: Johnson's opening statement of the rule is on p. 65
(confirmed independently by the concurrence's own cite "Maj. opn., ante, at
p. 65"); the administrative/judicial distinction and the reproduced
Westlake sentence on p. 70; "rehearsals for litigation" on p. 72; the
holding on p. 76 (matching Schifando's cite "Id. at p. 76"); the
concurrence passages on pp. 80 and 82. Campbell: introduction p. 317, the
Schifando quotation p. 321, "the exhaustion rule extends" p. 322,
administrative mandamus p. 332, conclusion p. 333. Murray: pp. 866, 867,
868, 869, 877. Schifando: pp. 1080, 1090, 1092. Fahlen: pp. 660, 661.

**No pin page was guessed for two footnotes.** In this mirror, footnotes
are collected in a trailing block with no star pagination of their own, so
McDonald's footnote 7 (the open question) and the Johnson majority
footnote quoting Rojo are cited without a reporter page, and the `cite`
field says "no star page in the source text".

Two phrase-level index checks initially came back with no usable count
because the query syntax broke on punctuation, and two more returned an
error rather than a count. Shorter spans of the same sentences were re-run
and each returned count=1: `exhaustion doctrine comes in two forms` ->
`comes in two forms` (McDonald); `the inquiry that must be made is whether
the traditional requirements and policy reasons...` -> `the traditional
requirements and policy reasons` (Murray); `Nothing in this conclusion
disturbs our holding in Johnson` -> `disturbs our holding` (Schifando);
`accords a proper respect to an association` (Westlake). Recorded here as
required.

## Defects and conflicts disclosed rather than corrected

1. **A Supreme Court majority misdescribing its own leading authority.**
   Johnson's majority (at p. 65) describes Westlake as holding about "a
   quasi-judicial administrative agency proceeding." Westlake involved a
   private hospital's peer review committee and board — no administrative
   agency. The Johnson concurrence (Werdegar, J., joined by Kennard, J.)
   says so expressly at p. 82, and would have decided the case on
   administrative collateral estoppel under People v. Sims instead. The
   majority's answer (a footnote citing Rojo v. Kliger) is quoted too.
   Clause: `jexh_johnson_concurrence_disagreement`.

2. **Two Supreme Court opinions rendering the same passage differently.**
   Schifando quotes Johnson as saying the Court of Appeal in Watson "faced
   the issue whether a plaintiff must exhaust non-FEHA administrative
   remedies ... including an FEHA claim"; Johnson's own text reads "faced
   the issue **of** whether" and "including **a** FEHA claim." This is not
   a mirror artifact: `cluster_id:2520945 AND "faced the issue whether a
   plaintiff must exhaust non-FEHA administrative remedies"` returns 1, and
   `cluster_id:2589859 AND "faced the issue of whether a plaintiff must
   exhaust non-FEHA administrative remedies"` returns 1. The altered
   passage is not quoted; the discrepancy is recorded in the
   `jexh_schifando_internal_remedies` gap.

3. **A material ellipsis.** Campbell (at p. 321) quotes Schifando's
   sentence as "... a respect for internal grievance procedures and the
   exhaustion requirement where the Legislature has not specifically
   mandated its own administrative review process . . . ." Schifando's
   sentence ends ", as in the FEHA" — the qualification that distinguishes
   the statutory scheme Schifando was construing. The sheet quotes
   Schifando's full sentence from Schifando and notes the ellipsis. A 2018
   Court of Appeal opinion reproduces the same words ending at
   "administrative review process" followed by a period, with neither the
   ellipsis nor the omitted words; that decision is described, not quoted.

4. **OCR damage in the Westlake mirror.** The opinion's best-known
   sentence renders as "before pursuing her **.tort** claim against
   defendants" (stray period). That sentence is therefore quoted as the
   Supreme Court reproduced it in Johnson, and the defect is disclosed in
   the `jexh_westlake_overturn_first_rule` gap. The same mirror renders
   "Dept**,** of Alcoholic Beverage Control" in the adjacent citation; not
   quoted.

5. **OCR damage in the Johnson mirror**, outside every quoted passage:
   "Watson says nothing about FEHA**.** claims", "94 S.Ct**..** at p. 1020",
   "Artiglio v. **Coming** Inc." (Corning), "**Swartzendruberv.** City of San
   Diego", "The plurality**’s,** observation". Disclosed in the
   `jexh_johnson_holding_feha` gap. The Campbell mirror likewise shows
   "**in.** CONCLUSION" for "III. CONCLUSION" and "whistleblowerrelated"
   for a line-wrapped "whistleblower-related"; neither is quoted.

6. **An unresolved conflict of authority, left unresolved.** Labor Code
   § 244(a) (2013) says no exhaustion of administrative remedies is
   required for a civil action under the Labor Code unless the section sued
   upon expressly requires it. Campbell (2005) required a public employee
   to use internal remedies before a Labor Code § 1102.5 suit. A published
   2018 Court of Appeal decision holds § 244 reaches only Labor
   Commissioner claims and leaves Campbell untouched; a federal district
   court decision it discusses read the same words the other way. Neither
   is quoted (intermediate and out-of-system authority is quoted in this
   corpus only as a controlling opinion reproduces it); both are described.
   Recorded negative result: a full-text search for opinions containing
   both "Labor Code section 244" and "Campbell v. Regents" returns 2
   results, which are duplicate records of the same Court of Appeal
   decision — no Supreme Court opinion addresses it.

7. **Recorded negative result on § 1960.** No California Supreme Court
   decision construes Unemployment Insurance Code § 1960. A full-text
   search for "Unemployment Insurance Code section 1960" returns 7
   results, all Court of Appeal (two of them duplicate records of the same
   2019 decision). None is quoted.

8. **Questions courts expressly left open**, recorded in gaps rather than
   papered over: McDonald "ha[d] no occasion to determine whether judicial
   exhaustion could ever stand as a bar" following the community-college
   regulations at issue; Schifando "specifically do[es] not decide" whether
   an employee must use internal remedies where the statute invoked
   supplies no procedure of its own, and reserved the procedural questions
   that arise when both routes are pursued; Fahlen "pass[es] no final
   judgment" on how the competing concerns should affect trial timing,
   issues and remedies.

9. **Quotations of non-California and intermediate authority** are taken
   only as a controlling California opinion reproduces them, and each such
   citation's `cite` field names both the reproducing opinion and the
   original: Murray reproducing Pacific Lumber Co. (37 Cal.4th 921, 944),
   United States v. Utah Constr. Co. (384 U.S. 394, 422) and People v. Sims
   (32 Cal.3d 468, 483); Johnson reproducing Briggs v. City of Rolling
   Hills Estates (40 Cal.App.4th 637, 646), Abelleira (17 Cal.2d 280, 293)
   and Rojo v. Kliger (52 Cal.3d 65, 86).

## Structure

16 clauses — 13 authority and 3 drafting (`jexh_scope_of_this_sheet`,
`jexh_where_the_rule_does_not_reach`, `jexh_preparer_note`) — and 42
citations. Placeholders used:
`{{employeeName}}`, `{{employerName}}`, `{{positionTitle}}`,
`{{terminationDate}}`, `{{decidingBody}}`, `{{decisionDate}}`,
`{{preparerName}}`, `{{dateSigned}}`, `{{cityState}}` — all nine declared
in the document's `fields`.

## Post-merge corpus validation

`data/clauses.json` and `data/documents.json` both parse. 6,210 clauses
(was 6,194) and 713 documents (was 712). Clause ids unique; document ids
unique; document titles unique corpus-wide; every `clauseOrder` entry
resolves; no orphan clauses; every `{{placeholder}}` in every clause body
and gap declared in the including document's `fields`; all 4,641 authority
clauses have a non-empty `gap` and at least one citation; key order
canonical for clauses (`id, title, kind, status, checkedDate, body, gap,
citations` / `id, title, kind, body`), citations (`case, cite, url, quote`)
and documents (`id, title, description, categories, clauseOrder, fields`).
All checks passed. Quote re-read from the written file: 42/42 verbatim.
