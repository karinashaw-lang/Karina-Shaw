# Verification — Live Testimony at Family Law Hearings (Family Code Section 217; Elkins v. Superior Court)

Document id: `live_testimony_family_law_hearings_info_sheet`
Category: Family Law (California)
Clauses: 15 (12 authority, 3 drafting), clause id prefix `livetest_`
Citations: 36
Checked: 2026-09-14

## Coverage check before drafting

Greps run against `data/documents.json` and `data/clauses.json` at HEAD
(`3aa917d`, 716 documents / 6,254 clauses) before any drafting:

| term | hits in documents.json | hits in clauses.json | disposition |
|---|---|---|---|
| `Elkins` | 0 | 1 | false positive — the single hit is `omittedasset2556_historical_background`, which cites **In re Marriage of Elkins (1972) 28 Cal.App.3d 899** (quoted inside *Henn*), a different case from *Elkins v. Superior Court* (2007) |
| `§ 217` | 1 | 0 | false positive — the documents.json hit is `Probate Code § 21700`, matched as a substring |
| `rule 5.113` | 0 | 0 | uncovered |
| `live testimony` | 0 | 1 | false positive — `lispendens_expungement_probable_validity` (lis pendens expungement hearings, not Fam. Code § 217) |
| `Swain` | 0 | 0 | uncovered |
| `George & Deamon` | 0 | 0 | uncovered |
| `oral testimony` | 0 | 3 | false positives — lis pendens (×2) and will-witness clauses |
| `declaration in lieu` | 0 | 1 | false positive — a lis pendens service clause |

Candidates rejected as already covered, with counts:
putative spouse doctrine (`putative spouse` 13 clause hits, `§ 2251` 8 — a dedicated
clause `nullity_putative_spouse_doctrine` already exists);
date of separation / Fam. Code § 70 (`msa_date_of_separation` already quotes
§ 70(a)–(c) and § 771(a));
DVPA "disturbing the peace" / coercive control (`dvro_disturbing_peace_coercive_control`);
support arrears and Fam. Code § 291 / § 4502 (`supportcontempt_fam291_judgment_enforceable_until_paid`);
retroactivity of support modification, § 3651/§ 3653 (`custodymod_retroactivity_limit`);
§ 4330(b) Gavron advisement and § 4337 termination (`vocsupport_self_sufficiency_advisement`,
`vocsupport_termination_on_death_or_remarriage`).

`Binette` appears 4 times in the corpus but only in the § 2122 judgment-set-aside
document; this document cites *Binette* only as *George & Deamon* reproduces it,
and quotes nothing from it.

## Sources and fetch paths

### 1. Cal. Fam. Code § 217 — three independent paths

* A: `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FAM&sectionNum=217.`
  (Chrome UA; JSF session cookie seeded first from `/faces/codes.xhtml` — without the
  cookie the section body comes back empty).
* B: `https://california.public.law/codes/ca_fam_code_section_217` (Safari UA; 301 → `-L`).
* C: chaptered text of AB 939, `billTextClient.xhtml?bill_id=200920100AB939`, SEC. 3.

**Comparison:** all three carry identical wording for subdivisions (a), (b), (c).
B places each subdivision letter on its own line (layout only). Normalization: line
breaks collapsed to single spaces; soft hyphens removed from B. The enactment note
`(Added by Stats. 2010, Ch. 352, Sec. 3. (AB 939) Effective January 1, 2011.)` exists
only on A and is quoted from A.

### 2. Cal. Fam. Code § 210 — two hosts

leginfo (cookie-seeded) and california.public.law. Word-for-word identical.

### 3. AB 939 Legislative Counsel's Digest — same host, two header sets

Two fetches of `billTextClient.xhtml?bill_id=200920100AB939`, one under a Chrome UA
and one under a Safari UA with `Accept-Language` and a separate cookie jar. Extracted
texts identical (47,450 chars each, byte-equal after tag stripping). The Digest
sentence is also reproduced, with a bracketed tense change, inside *George & Deamon*,
which serves as a third, independent reproduction.

### 4. Cal. Rules of Court, rule 5.113 — two courts.ca.gov publications, PDF read twice

* HTML: `https://courts.ca.gov/cms/rules/index.cfm?title=five&linkid=rule5_113`
  (also fetched at the `www.` host; the two downloads are byte-identical, MD5
  `70529546e48ace2b753f17b3d92c0e98`, 268,222 bytes).
* PDF: Title 5 rules, `https://courts.ca.gov/system/files?file=file/roc-title-5_3.pdf`
  (3,233,132 bytes), extracted with **pypdf 6.18.1** and **pdfminer.six**; the two
  extractions agree on every quoted passage.

### 5. Elkins v. Superior Court (2007) 41 Cal.4th 1337

* A: `https://www.courtlistener.com/opinion/2517823/elkins-v-superior-court/`
  (Chrome UA + `Referer: https://www.courtlistener.com/`).
* B: citation redirect `https://www.courtlistener.com/c/Cal.%204th/41/1337/` (Safari UA).
  The two downloaded pages differ as whole files (MD5 `7b3f6e8ddf82da44e19c1120bc7e4e02`
  vs `b0f65f9baea47193a0afcf6f69320f46` — the page chrome carries per-request tokens),
  but the extracted opinion texts are identical character for character, 78,017 chars
  each.
* C: Harvard scan PDF `https://storage.courtlistener.com/harvard_pdf/2517823.pdf`
  (1,920,761 bytes), extracted with pypdf and pdfminer.six.
* D: CourtListener search index, `q=cluster_id:2517823 AND "<phrase>"`, one query per
  quoted sentence — count 1 for each of the 9 phrases tried; no shortened re-runs
  were needed.
* E: Elkins Family Law Task Force, *Final Report and Recommendations* (Judicial Council
  of Cal., Apr. 2010), `https://www.courts.ca.gov/documents/elkins-finalreport.pdf`,
  extracted with pypdf and pdfminer.six — an independent publisher that reproduces the
  page-1368 passage verbatim in its epigraph.

### 6. In re Marriage of Swain (2018) 21 Cal.App.5th 830 — two distinct clusters

* Reporter version: cluster **6239500**, `/opinion/6239500/swain-v-swain-in-re-swain/`
  reached through `https://www.courtlistener.com/c/Cal.%20App.%205th/21/830/` (Safari UA);
  citations recorded as `230 Cal. Rptr. 3d 614`, `21 Cal. App. 5th 830`.
* Slip opinion: cluster **4481065**, `/opinion/4481065/marriage-of-swain/` (Chrome UA;
  first attempt returned 202, retried in-turn to 200).
* These are genuinely different texts (different typography, different pagination), not
  two renderings of one file.
* Phrase-level confirmation against cluster 6239500 via the search index: 3 phrases,
  count 1 each.

### 7. In re Marriage of George & Deamon (2019) 35 Cal.App.5th 476 — two distinct clusters

* Reporter version: cluster **6240492** (`247 Cal. Rptr. 3d 420`, `35 Cal. App. 5th 476`),
  Chrome UA, two 202s retried in-turn.
* Slip opinion: cluster **4620972**, Safari UA.
* Phrase-level confirmation against cluster 6240492 via the search index: 3 phrases,
  count 1 each.

## Normalization applied (and disclosed in the clause gaps)

Only these, uniformly, before substring comparison:

1. line breaks and runs of whitespace collapsed to single spaces (all sources; the PDF
   extractions also carry double spaces after subdivision numbers);
2. typographic apostrophes and quotation marks (`’ ‘ “ ”`) normalized to ASCII — required
   because the slip opinions use typographic marks and the reporter versions use ASCII,
   so no quote containing an apostrophe could otherwise be verbatim in both;
3. CourtListener inline star-pagination markers removed (one, `*486`, falls **inside** a
   quoted sentence in the *George & Deamon* reporter text);
4. soft hyphens removed from california.public.law;
5. non-breaking spaces converted to spaces.

No word, punctuation mark or spelling in any quote was altered.

## Defects disclosed rather than corrected

**(a) The Judicial Council's own Elkins Task Force report misquotes and mis-pin-cites
the opinion it is named for.** On its narrative page the report writes that
"streamlining processes should not subject family law litigants to `second class status
or deprive [them] of access to justice.`" The opinion reads "second-class status or
deprived of access to justice" — the report drops the hyphen and changes *deprived* to
*deprive [them]* without marking the change to the verb. The report attaches that
quotation, and the task-force recommendation quotation, to `Elkins, supra, 41 Cal.4th at
p. 1345` (footnotes 5 and 6, via `Id.`/`Ibid.` after footnote 4). Star pagination puts
the policy passage at **p. 1368**, and the *same report's* page-7 epigraph cites it as
"41 Cal.4th 1337, **1368** [163 P.3d 160]" — so the report contradicts itself, and
footnote 5 is wrong. The task-force recommendation is **footnote 20**, which the Werdegar
concurrence cross-references as "maj. opn., ante, at p. 1369, fn. 20" — also not p. 1345.
Recorded in `livetest_elkins_policy_and_task_force`.

**(b) No pin cite is given for Elkins footnote 20.** CourtListener relocates footnotes
into a block at the end of the opinion where star markers stop tracking the body: the
last marker before footnote 20 is a stray `*1346` carried over from footnote 2. Rather
than guess, the clause gives no pin cite and reports the concurrence's own
cross-reference to p. 1369.

**(c) The Harvard scan PDF of Elkins has a scrambled text layer, and is not an
independent source.** Both pypdf and pdfminer.six return the same out-of-reading-order
word soup (e.g. the page-1368 paragraph comes out as `law\nfamily\nto second-class\n\nby\nprocedures.\nsubjected`), so the PDF cannot be used for verbatim
substring comparison — only for word presence. Worse, it carries the *same* OCR errors
as the CourtListener HTML, so the two share one OCR pipeline and do not corroborate each
other. Shared OCR errors confirmed present in both, by word-presence test:

| as printed in the text layer | should read |
|---|---|
| `local mle`, `the mies`, `hearsay rale`, `general rales of evidence` | rule / rules |
| `bom in 1991` | born |
| `Windigo Mills v. Unemployment Ins. Appeals Bd. (1919) 92 Cal.App.3d 586` | 1979 |
| `In re Adair (9th Cir. 1992) 965 F.2d 111, 779` | 965 F.2d 777, 779 |
| `Lacrabere, supra, 141 Cal. at pp. 556-567` | 556-557 (as the same opinion gives it twice elsewhere) |
| `Guardianship of Waite (1939) 14 Cal.2d 121, 730` | pin cite corrupt |
| `[0]ne who sees`, `[sjubject`, `Exhibit 5,1`, `foil. § 5.30(c)` | [O]ne / [s]ubject / 5, I / fol. |

**No quote in this document is drawn from a damaged passage**, and every quoted Elkins
sentence was independently confirmed through the search index (count 1), with the
page-1368 passage additionally confirmed verbatim in the independent task-force report
PDF.

**(d) Two courts.ca.gov publications of rule 5.113 disagree on a character.** In
subdivision (b)(1) the Title 5 rules PDF prints an em dash — "at issue—such as child
custody" — while the rule's own web page prints an ASCII hyphen, "at issue-such as". The
clause quotes the PDF form and says so; that one quote is verbatim in the PDF (both
extractors) but not in the HTML page. Every other rule quote is verbatim in all three.

**(e) A punctuation error inside the George & Deamon opinion itself.** Where the opinion
quotes Code of Civil Procedure section 1987(b), it closes the quotation as
`that party or person.].)"` — bracket, parenthesis and quotation mark out of order. The
identical scrambling appears in **both** the slip opinion and the official-reporter text,
so it is the opinion's error, not a publisher artifact. That passage is described in the
clause body and not quoted.

**(f) Interleaved star pagination in both Court of Appeal clusters.** The Swain reporter
cluster carries Cal.App.5th markers 832–844 *and* Cal.Rptr.3d markers 617–625 in one
stream, and some markers run into the following word (`*841217`, `*623217`), which will
silently corrupt a naive 3-or-4-digit page regex. Pin cites here were read only from the
Cal.App.5th series. Cross-check: the two Swain pin cites derived this way (pp. 837 and
841) match the pin cites *George & Deamon* independently gives for the same two
sentences. The George & Deamon reporter cluster interleaves 476–486 with 422–427 the
same way.

**(g) Textual mismatches among statute, digest and rule — reported, not harmonized.**
The Legislative Counsel's Digest says "all live, competent, and **relevant** testimony";
the enacted § 217(a) says "any live, competent testimony that is relevant and within the
scope of the hearing". Rule 5.113(a) says "live, competent, and **admissible** testimony"
at a hearing on any "**request for order**", where the statute says "order to show cause
or notice of motion". None of these differences has been resolved by the California
Supreme Court; the clauses state them and stop.

**(h) Negative results recorded.** No California Supreme Court decision construes
Family Code § 217. *Swain* expressly declined to decide whether § 217 abrogated the
Code of Civil Procedure § 2009 hearsay exception for substantive family law motions, and
said no published case had squarely decided it; *George & Deamon* applied § 2009 without
resolving the question. Rule 5.113 was adopted effective January 1, 2013, about eleven
months after the January 1, 2012 deadline § 217(b) set; the date is reported and its
effect, if any, was not researched. *Chalmers v. Hirschkop* (2013), *In re Marriage of
Shimkus* (2016) and *In re Marriage of Binette* (2018) were **not** independently fetched
and are reported only as *Swain* and *George & Deamon* reproduce them.

## Per-citation results

All quotes were read back out of the written `data/clauses.json` and re-tested as
substrings of the fetched source text held on disk.

| clause | citations | sources each quote was matched against | result |
|---|---|---|---|
| `livetest_section_217_text` | 4 | leginfo + public.law + chaptered AB 939 (enactment note: leginfo only) | 4/4 |
| `livetest_ab939_digest` | 2 | AB 939 fetch A + fetch B; George & Deamon reporter + slip | 2/2 |
| `livetest_family_code_210` | 1 | leginfo + public.law | 1/1 |
| `livetest_elkins_hearsay_holding` | 4 | Elkins fetch A + fetch B (+ search index count 1 each) | 4/4 |
| `livetest_elkins_trial_vs_postjudgment` | 1 | Elkins fetch A + fetch B (+ search index count 1) | 1/1 |
| `livetest_elkins_policy_and_task_force` | 4 | Elkins A + B (+ index); epigraph line from task-force report PDF (pypdf + pdfminer) | 4/4 |
| `livetest_rule_5113_purpose_and_factors` | 4 | rule web page + Title 5 PDF (pypdf, pdfminer); (b)(1) PDF only — see (d) | 4/4 |
| `livetest_rule_5113_findings_children_witness_lists` | 5 | rule web page + Title 5 PDF (pypdf, pdfminer) | 5/5 |
| `livetest_swain_legislative_history_and_holding` | 3 | Swain reporter cluster + slip cluster (+ index) | 3/3 |
| `livetest_swain_open_question` | 2 | Swain reporter cluster + slip cluster (+ index) | 2/2 |
| `livetest_george_deamon_securing_live_testimony` | 3 | G&D reporter cluster + slip cluster (+ index) | 3/3 |
| `livetest_george_deamon_good_cause_finding` | 3 | G&D reporter cluster + slip cluster (+ index) | 3/3 |

**Quote re-verification from the written file: 36 pass, 0 fail.**

## Post-merge corpus validation

```
documents: 717   clauses: 6269
authority clauses: 4691
citations total: 10706
new doc clauses: 15   new citations: 36
STRUCTURAL VALIDATION: PASS
```

Asserted: both files parse; clause ids unique; document ids unique; document titles
unique corpus-wide; every `clauseOrder` entry resolves; no orphan clauses; every
authority clause has a non-empty `gap` and at least one citation with a non-empty quote;
every `{{placeholder}}` used in any clause body or gap is declared in the owning
document's `fields`; canonical key order for clauses, citations and documents; the new
document's `categories` is exactly `["Family Law"]`.
