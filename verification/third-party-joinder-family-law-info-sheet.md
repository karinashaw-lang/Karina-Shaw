# Family Law, new document: Joinder of a Third Party (Claimant) in a California Family Law Case — Information Sheet

Document id: `third_party_joinder_family_law_info_sheet`
Clause prefix: `joinclm_`
Checked date on every authority clause: 2026-09-14

## Why this topic — the structural gap

The corpus already carried 91 Family Law documents. They cover the substantive
doctrines of the field very densely (characterization, apportionment,
reimbursement, support, custody, restraining orders, adoption, parentage,
set-aside, fees, sanctions). Not one of them asks the structural question
**who, other than the two spouses or partners, can be made a party to the case.**

The only family-law sentence anywhere in the corpus about joinder is inside the
bifurcation document, quoting Family Code § 2337(d)(1)'s requirement that a
retirement plan be joined before a status-only judgment. The general mechanism —
Family Code § 2021, rule 5.24 of the California Rules of Court, and the
separate clerk-entered track for employee benefit plans in Family Code
§§ 2060–2074 and rule 5.29 — was entirely absent.

### Grep counts and discounted false positives

Counts are regex match counts over the raw `data/clauses.json` and
`data/documents.json`, taken **before** this document was added, and every hit
below was inspected rather than trusted.

| Pattern | clauses.json | documents.json | Disposition |
|---|---|---|---|
| `rule 5\.24` / `\b5\.24\b` | 0 real (28 raw substring hits) | 0 | **All 28 were false positives**: `5.240`, `5.241`, `5.242` (minor's counsel rules), Civil Code `1995.240`/`1995.250`, and Code of Civil Procedure `405.24` (lis pendens relation-back). Inspected each; none is rule 5.24. |
| `§ ?2021` / `section 2021` | 0 | 0 | 89 raw hits for the bare string `2021` were **all** `checkedDate` values and statute-amendment years ("Stats. 2021, ch. …"). None refers to Family Code § 2021. |
| `Family Code.{0,20}2021` | 0 | 0 | — |
| `joinder` | 11 clauses | 4 docs | Inspected all 11. Ten are outside family law: postnuptial transmutation at death, TOD revocation, dissenters' rights, unincorporated associations, joint-tenancy severance, trust objection periods, Probate Code § 709 election (two clauses), personal-liability scope note, and a Code of Civil Procedure § 389(a) mention in a foreclosure-adjacent clause. The eleventh, `bifurcation_retirement_plan_joinder`, quotes Fam. Code § 2337(d)(1) only. **None** addresses rule 5.24 or § 2021. |
| `§ ?206[0-5]` / `section 206[0-5]` | 0 family-law hits | 0 | Raw hits for "Section 2060/2061/2064/2065" all belong to the **Labor Code car-wash registration** document (Car Wash Worker Restitution Fund). Inspected and discounted. |
| `employee (pension )?benefit plan` | many | — | All ERISA, WARN, Probate Code § 266, CFRA/leave, and securities-exemption contexts. None is Family Code chapter 6 joinder. |
| `adverse claimant`, `Glade v`, `FL-370`–`FL-375` | 0 | 0 | — |
| `Bianka` | 0 | 0 | — |

Search-side negatives recorded (CourtListener public search API, opinion corpus):

- `q="Family Code section 2021"` → **count 0**
- `q="section 2021" joinder dissolution` → **count 0**
- `q="rule 1250" joinder` → count 6 (Babcock, Schnabel, Wagoner, Sommers, Glade,
  Schwander). Only Glade and Babcock were fetched and read; the other four were
  not examined and are not characterised anywhere in the document.
- `q="Family Code section 2060"` → count 1 (In re Marriage of Cooper).
- `q="rule 5.24" joinder family` → count 8, of which Bianka M. (Supreme Court and
  both Court of Appeal clusters), Ed H. v. Ashley C., Marriage of Benner and a
  bankruptcy decision. Bianka M. (Supreme Court) was selected as the controlling
  authority; the others were not used.

## Clause inventory

15 clauses — **13 authority, 2 drafting** — and **45 citations**, counted by
script from the written `data/clauses.json`, not from memory.

1. `joinclm_declaration` (drafting) — parties, scope, the "inform not advise" limit
2. `joinclm_section_2021` — Fam. Code § 2021(a)–(b); the delegation and the plan carve-out
3. `joinclm_rule_524_scope_and_claimant` — rule 5.24 preamble, (a)(1), (a)(2), (b)
4. `joinclm_who_may_seek` — rule 5.24(c)(1)–(c)(3), including self-joinder
5. `joinclm_application_and_forms` — rule 5.24(d)(1)–(2); FL-371/FL-373; **published defect disclosed**
6. `joinclm_mandatory_joinder` — rule 5.24(e)(1)(A)–(B)
7. `joinclm_permissive_joinder` — rule 5.24(e)(2) and the four mandatory considerations
8. `joinclm_procedure_after_order` — rule 5.24(e)(3); summons FL-375; 30 days
9. `joinclm_bianka_joinder_framework` — Bianka M. v. Superior Court (2018) 5 Cal.5th 1004 (6 citations, **no pin cites**)
10. `joinclm_property_claimant_glade` — Glade v. Glade (1995) 38 Cal.App.4th 1441 (6 citations)
11. `joinclm_babcock_gift_of_community_funds` — Babcock v. Superior Court (1994) 29 Cal.App.4th 721
12. `joinclm_plan_joinder_statutes` — Fam. Code §§ 2060–2065; rule 5.29(a)–(c)
13. `joinclm_plan_after_joinder` — Fam. Code §§ 2072, 2073(a); In re Marriage of Cooper (2008) 160 Cal.App.4th 574
14. `joinclm_open_questions_and_renumbering` — recorded negatives
15. `joinclm_signature_block` (drafting)

## Per-source verification

### A. California statutes (Family Code §§ 2021, 2060–2065, 2072, 2073)

- **Fetch 1** — `leginfo.legislature.ca.gov`, the Legislative Counsel's code
  display. A JSF session cookie was seeded from `/faces/codes.xhtml` first;
  without it the section body comes back empty.
  - § 2021: `codes_displaySection.xhtml?lawCode=FAM&sectionNum=2021.` (HTTP 200, 162,659 bytes)
  - Chapter 6 (§§ 2060–2074): `codes_displayText.xhtml?lawCode=FAM&division=6.&part=1.&chapter=6.` (HTTP 200, 142,542 bytes)
- **Fetch 2** — `california.public.law`, one page per section
  (`/codes/family_code_section_2021`, `…_2060`, `_2061`, `_2062`, `_2063`,
  `_2065`, `_2072`, `_2073`; all HTTP 200 after a 301 redirect from the
  `ca_fam_code_section_…` path).
- **Comparison result:** word-for-word agreement on every quoted passage.
- **Independence disclosed:** these two are **not** fully independent publishers.
  Every california.public.law page prints a `Source:` line naming the exact
  leginfo URL it transcribes. The second fetch confirms transcription, not a
  separate editorial chain. This is stated in the `gap` of every clause that
  relies on both.
- **Single-source exception disclosed:** § 2064 is quoted from **leginfo only** —
  the corresponding california.public.law page was not among those retrieved.
  The clause's `gap` and the citation's `cite` field both say so.
- **Normalisations disclosed:** leginfo wraps lines inside a paragraph and
  california.public.law puts each subdivision letter and each cross-reference
  link on its own line, so line breaks were collapsed to single spaces and
  non-breaking spaces converted to ordinary spaces before comparison. Nothing
  else was changed; curly apostrophes were preserved as both sources print them.
  Two quotes were deliberately trimmed at a link boundary (`…pursuant to
  Section 211`, `…in accordance with Chapter 6`) because california.public.law
  inserts whitespace around the linked cross-reference.

### B. California Rules of Court, rules 5.24 and 5.29

Two genuinely separate official Judicial Council publications:

- **Fetch 1** — the rule web pages, `courts.ca.gov/cms/rules/index/five/rule5_24`
  (HTTP 200, 271,111 bytes) and `…/rule5_29` (HTTP 200, 266,135 bytes).
- **Fetch 2** — the 2026 Title 5 rules PDF,
  `courts.ca.gov/system/files?file=file/roc-title-5_3.pdf` (HTTP 200,
  3,233,132 bytes, 670 pages), extracted **twice**, with `pypdf`
  (1,317,432 chars) and with `pdfminer.six` (1,335,052 chars); the two
  extractions were compared and agree on every quoted passage.
- **Corroborating form downloads** (used as evidence, not quoted as citations):
  FL-370, FL-371, FL-372, FL-373, FL-374, FL-375 from
  `courts.ca.gov/sites/default/files/courts/default/2024-11/`.

#### Defect 1 — a stray word in the rule itself (disclosed, not corrected)

Rule 5.24(d)(1) reads, in **both** publications:

> "All applications for joinder other than for an employee pension benefit plan
> must be made by serving and filing **form a** Notice of Motion and Declaration
> for Joinder (form FL-371)."

The ungrammatical "serving and filing form a Notice of Motion" appears
identically on the courts.ca.gov rule page and in the Title 5 PDF, and both PDF
extractors produced the same words — so the anomaly is in the record, not in the
extraction. The Judicial Council form itself is captioned
`NOTICE OF MOTION AND DECLARATION FOR JOINDER` (confirmed by downloading and
extracting FL-371), with no leading "form". The quotation in
`joinclm_application_and_forms` reproduces the rule **as published**, stray word
included, and the `gap` and the `cite` field both say so. No erratum appears in
either publication and no fetched decision quotes or corrects the sentence.

#### Defect 2 — the two official publications disagree on characters

| Passage | Title 5 PDF | courts.ca.gov rule page |
|---|---|---|
| rule 5.24(b) | `a “claimant” is` (U+201C/U+201D) | `a "claimant" is` (ASCII) |
| rule 5.24(d)(1) | `the claimant’s interest` (U+2019) | `the claimant's interest` (ASCII) |
| rule 5.29(a) | `Pleading on Joinder—Employee Benefit Plan` (U+2014) | `Pleading on Joinder-Employee Benefit Plan` (ASCII hyphen) |

This is the em-dash-versus-ASCII-hyphen class of defect. It was **not** silently
harmonised. Quotations reproduce the **PDF's** characters; the comparison against
the web page was made after folding curly quotes, apostrophes and dashes to
ASCII, and each affected clause's `gap` states that the two publications
disagree and which one the quote follows. The tie on rule 5.29(a) is broken by
the Judicial Council form itself: FL-370's own caption, extracted from the form
PDF, reads `PLEADING ON JOINDER—EMPLOYEE BENEFIT PLAN` with an em dash, so the
**web page** is the publication that departs. The official source is therefore
not automatically the correct one — here two official sources disagree and a
third official artefact settles it.

#### Defect 3 — a structural rendering difference

In the PDF, the source note beginning "Title 5, Family and Juvenile
Rules—Division 1…—Article 3, Employee Pension Benefit Plan; adopted January 1,
2013" sits under a separate heading, **"Article 3. Employee Pension Benefit
Plan,"** and belongs to that article. The courts.ca.gov rule 5.24 page
reproduces that note at the foot of the rule 5.24 page **without** the article
heading, where it reads as part of rule 5.24's own history. The rule 5.29 page
does the same thing with the Chapter 3 (Filing Fees and Fee Waivers) notes.
Nothing is quoted from those notes; the difference is recorded in the `gap` of
`joinclm_rule_524_scope_and_claimant`.

### C. Bianka M. v. Superior Court (2018) 5 Cal.5th 1004

- **Fetch 1 (independent publisher)** — the court's own slip opinion,
  `courts.ca.gov/opinions/archive/S233757.PDF` (HTTP 200, 465,147 bytes,
  26 pages), extracted **twice**, with `pypdf` (49,177 chars) and with
  `pdfminer.six` (49,845 chars); the two extractions agree on every quoted
  passage.
- **Fetch 2** — CourtListener, over two URL paths
  (`/opinion/4527294/…` and `/c/Cal.%205th/5/1004/`) under two different
  User-Agent / Accept-Language header sets. Extracted opinion texts from the two
  paths are **byte-for-byte identical** (47,609 chars each).
- **Comparison result:** slip opinion and CourtListener agree on every quoted
  passage after typographic folding.
- **No pin cites, and why.** Neither rendering carries reporter star pagination.
  The slip opinion predates the Official Reports and paginates only itself; the
  CourtListener rendering of cluster 4527294 was searched for star markers
  (`*1004`-style and `page-label` spans) and contains **none**. A page in
  5 Cal.5th could only be reconstructed, so every Bianka citation's `cite` field
  says "no pin cite available" and gives the reason.
- **Normalisations disclosed:** the slip PDF's running page numbers (standalone
  numeric lines) and line breaks were removed before comparison; the slip sets
  typographic quotes and apostrophes while CourtListener renders them as ASCII,
  so the quotes reproduce the slip and the CourtListener comparison folded those
  characters.
- **Phrase checks:** each Bianka quotation was confirmed present by
  `q=cluster_id:4527294 AND "<phrase>"`, each returning **count 1**. No phrase
  had to be shortened and re-run.
- **Reserved question recorded:** the Court assumed without deciding that the
  absent father was a necessary party as to the abandonment finding, and did not
  decide whether joinder would have been required had it been feasible. Stated
  in the clause `gap` and in clause 14.

### D. Glade v. Glade (1995) 38 Cal.App.4th 1441

- **Fetch 1** — CourtListener `/opinion/2288723/glade-v-glade/`
  (Chrome UA + Referer; first two attempts returned HTTP 202 and were retried
  in-turn; third returned HTTP 200, 104,523 bytes).
- **Fetch 2** — CourtListener citation redirect
  `/c/Cal.%20App.%204th/38/1441/` under a Safari UA and a different
  Accept-Language. Extracted opinion text **byte-for-byte identical**
  (39,517 chars).
- **Independence disclosed plainly:** these are **two URL paths to one
  publisher, not two publishers.** No second free publisher of California case
  law was reachable (Justia, FindLaw, Google Scholar, case.law, Casetext,
  Leagle, anylaw, casemine and vLex are all blocked by egress policy); the
  CourtListener `opinions` API endpoint that would identify a scanned reporter
  PDF for this cluster returned
  `{"detail":"Authentication credentials were not provided."}`. No slip PDF
  exists at `courts.ca.gov/opinions/archive/B088795.PDF` (HTTP 404). Every
  affected clause `gap` says so in those terms.
- **Pin cites** were read against the star markers in the fetched text, which run
  cleanly `*1445`…`*1458` and then repeat `*1457`, `*1458` in the trailing
  footnote block. Nothing quoted is from the footnote block. Assigned pages:
  1450 (Elms description), 1451 (Elms policy passage; the "broad powers"
  sentence; the two-party baseline), 1453 (Davis due-process passage), 1455
  (the holding).
- **Defect 4 — an OCR error in the publisher's text, disclosed not repaired.**
  The Elms block quotation as CourtListener renders it contains
  `ba„sed` where `based` belongs. That sentence is therefore **not quoted** and
  no reading of it is offered; the `gap` of `joinclm_property_claimant_glade`
  records the error.
- **Second-hand quotation disclosed:** Elms v. Elms (1935) 4 Cal.2d 681 and
  In re Marriage of Davis (1977) 68 Cal.App.3d 294 are quoted **only as Glade
  reproduces them**; neither was separately fetched, the brackets in the Davis
  quotation are Glade's own editorial insertion, and the pages cited are Glade's
  pages, not the original reporters'.
- **Obsolete rule numbering disclosed:** Glade construes former rules 1211(a),
  1213, 1225, 1250 and 1254(a), not rule 5.24, which was adopted effective
  January 1, 2013 — eighteen years later. Said in the clause `gap` and again in
  clause 14.
- **Phrase checks:** `q=cluster_id:2288723 AND "<phrase>"` returned **count 1**
  for each of the Glade quotations tested.

### E. Babcock v. Superior Court (1994) 29 Cal.App.4th 721

- **Fetch 1** — CourtListener `/opinion/2255603/…` (HTTP 200, 66,633 bytes).
- **Fetch 2** — citation redirect `/c/Cal.%20App.%204th/29/721/` under different
  headers. Extracted text **byte-for-byte identical** (14,828 chars).
- Same single-publisher disclosure as Glade; no slip PDF exists
  (`…/B085141.PDF` → HTTP 404).
- **Pin cite:** page 725, read against markers `*723`…`*729`. The `*726` marker
  falls inside the citation parenthetical that follows the quoted sentence, so
  the sentence itself is on 725.
- **Phrase check:** count 1.
- The court's supporting citation is to former "rule 1250"; that is described
  rather than quoted, because the number is obsolete. Family Code § 1100(b),
  cited alongside § 2021, was not fetched and is not quoted.

### F. In re Marriage of Cooper (2008) 160 Cal.App.4th 574

- **Fetch 1** — CourtListener `/opinion/2279796/…` (HTTP 200, 65,909 bytes).
- **Fetch 2** — citation redirect `/c/Cal.%20App.%204th/160/574/`. Extracted
  text **byte-for-byte identical** (16,279 chars). Same single-publisher
  disclosure; no slip PDF (`…/B195072.PDF` → HTTP 404).
- **No pin cite, and why:** the quoted sentence is footnote 1, and the fetched
  rendering relocates all footnotes into a block **after** the end of the
  opinion text, past the last star marker `*582`. The star markers stop tracking
  there, so any page number for the footnote would be reconstructed. The `cite`
  field says exactly this.
- **Phrase check:** count 1.
- Cooper is cited only for the fact that a public retirement system was joined
  under § 2060; its holding (equal division of an optional settlement survivor
  benefit) is not used.

## Normalisation policy actually applied

Only these transformations were applied before substring comparison, and each is
stated in the affected clause `gap`s:

1. non-breaking / thin / figure spaces → ordinary space; soft hyphens removed;
   `ﬁ`/`ﬂ` ligatures expanded;
2. line-wrap hyphenation (`-` immediately before a newline) joined;
3. all whitespace runs collapsed to a single space;
4. for PDF sources only, standalone numeric lines (running page numbers) removed;
5. **only where the two publications genuinely disagree** (rule 5.24/5.29 web vs
   PDF; Bianka slip vs CourtListener), curly quotes, apostrophes and dashes
   folded to ASCII — and in each such case the disagreement is disclosed as a
   defect rather than treated as noise.

No quote was reconstructed from memory. Every one of the 45 citation quotes was
taken as a literal substring of a fetched file.

## Validation

`validate.py` asserted, on the written files:

```
parsed OK: clauses=6388 documents=725
ALL STRUCTURAL CHECKS PASS
document clauses: 13 authority, 2 drafting, 45 citations
```

Checks performed: both files parse as JSON; all 6,388 clause ids unique; all 725
document ids unique; all 725 document titles unique; every id in every
`clauseOrder` resolves to a clause; no orphan clauses; every authority clause has
a non-empty `gap` and at least one citation; no empty quotes; canonical key order
enforced for clauses (`id, title, kind, status, checkedDate, body, gap,
citations`), for drafting clauses (`id, title, kind, body`), for citations
(`case, cite, url, quote`) and for documents (`id, title, description,
categories, clauseOrder, fields`); every `{{placeholder}}` in any body or gap
declared in the owning document's `fields`.

`recheck.py` then re-read **all 45 quotes out of the written
`data/clauses.json`** and re-confirmed each as a verbatim substring of its
fetched source file(s):

```
quotes re-read from written file: 45; unknown: 0; substring failures: 0
```

Pre-merge baseline was 724 documents / 6,373 clauses; post-merge 725 / 6,388.
