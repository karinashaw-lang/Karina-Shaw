# Verification — Bayh-Dole Act — Inventions Made With Federal Funding (35 U.S.C. §§ 200-212) — Information Sheet

Document id: `bayh_dole_federally_funded_inventions_info_sheet`
Category: Confidentiality & IP
Clause prefix: `bayhdole_`
Checked: 2026-09-15
Clauses as written to `data/clauses.json`: 15 (13 authority, 2 drafting), 84 citations.

---

## 1. Why this topic was uncovered

The Confidentiality & IP category held 93 documents before this one. Every one of them treats
invention ownership as a private allocation — between inventor and employer, assignor and assignee,
licensor and licensee, owner and copier, or debtor and secured party. None asks what happens when
the research that produced the invention was paid for with federal money, which is the one case
where a federal statutory scheme sits on top of the whole private chain of title and gives an
agency standing rights that no party to the private agreements created.

The gap was also recorded in the corpus itself. The clause
`patentassign_present_assignment_language` (in the existing Patent Assignment Agreement) cites the
Federal Circuit's decision in the Stanford v. Roche litigation for the "agree to assign" / "do
hereby assign" distinction, and its gap note says in terms: *"the Supreme Court's opinion addressed
a different statute, the Bayh-Dole Act."* The corpus took the present-assignment half of the
litigation and left the Bayh-Dole half. The clause `patentassign_initial_ownership` cites the
Supreme Court opinion itself, but only for the general rule that rights in an invention belong to
the inventor.

### Grep counts (run against `data/clauses.json` before the append) and what was discounted

| Term | Raw hits | Disposition |
|---|---|---|
| `Bayh` | 1 | **Recorded negative.** The single hit is the gap note in `patentassign_present_assignment_language` quoted above — a note recording an out-of-scope topic, not coverage. |
| `Bayh-Dole` | 1 | Same single hit. |
| `Stanford v. Roche` | 0 | — |
| `subject invention` | 0 | The chapter's central term of art is absent. |
| `funding agreement` | 0 | — |
| `small business firm` | 0 | — |
| `march-in` / `march in` | 0 / 0 | — |
| `federally funded` | 0 | — |
| `irrevocable, paid-up` | 0 | — |
| `35 U.S.C. § 202` etc. | 0 | Regex `35 U\.S\.C\. § 2\d\d` returned **0**. Enumerating every `35 U.S.C. §` citation in the corpus (141 occurrences) produced §§ 100, 102, 111, 112, 113, 119, 154 and similar — no section of chapter 18. |
| `37 C.F.R. part 401` | 0 | — |
| `§ 201` | 328 | **All false positives.** Labor Code § 201, Civil Code § 201 and similar. Confirmed by the `35 U.S.C. § 2\d\d` regex returning zero. |
| `§ 203`, `§ 204`, `§ 210`, `§ 212` | 98 / 51 / 80 / 99 | **All false positives**, same reason (Labor Code waiting-time and wage-payment sections). |
| `Section 337` | 1 | **False positive** — Code Civ. Proc. § 337, the four-year limitations statute, in a wage-claim sheet. |
| `1337` | 34 | **False positive** — CourtListener opinion id `1133701` (Ramirez v. Yosemite Water Co.) inside URLs. |
| `government work` | 1 | **False positive** — the string `government worker` inside a quoted passage in a police-officer sheet. |
| `Stanford` | 28 / `Roche` 5 / `563 U.S.` 2 | Inspected individually. Two clauses cite the Stanford litigation (initial ownership; present-assignment language); one cites *Campbell v. Trustees of Leland Stanford Jr. Univ.* on § 16600; one cites *Bayer Corp. v. Roche Molecular Systems* as described inside the Whyte opinion; one `563 U.S.` hit is *AT&T Mobility v. Concepcion*, 563 U.S. 333, unrelated. |

---

## 2. Sources, fetch paths, and comparison results

### 2.1 35 U.S.C. §§ 200-212 — two genuinely independent publishers

* **Path A (OLRC):** `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title35-section<NNN>&num=0&edition=prelim` — fetched for §§ 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212. All HTTP 200.
* **Path B (Cornell LII):** `https://www.law.cornell.edu/uscode/text/35/<NNN>` — fetched for §§ 200, 201, 202, 203, 204, 205, 210, 212 (the sections quoted). All HTTP 200.

These are independent editors of the Code: the Office of the Law Revision Counsel of the U.S. House
of Representatives, and the Legal Information Institute at Cornell Law School. Neither reprints the
other's file; they differ visibly in typography and in how they mark footnotes.

**Result:** every one of the 36 distinct statutory quotes was confirmed a verbatim substring of both
fetches. Normalization applied and disclosed in the clause gaps: non-breaking spaces, curly
quotation marks and apostrophes, en/em dashes, ligatures, soft hyphens, and inter-word whitespace.

**Disclosed rendering artifact (LII):** Cornell LII injects a space on each side of a defined term
it auto-links, printing `The term “ funding agreement ” means…` and `any person, small business
firm , or nonprofit organization`. This is a markup artifact of its link wrappers, removed by the
whitespace normalization. No word, number or punctuation mark differed between the publishers in
any passage quoted.

### 2.2 Bayh-Dole Act as enacted — 94 Stat. 3015 et seq. (govinfo)

* `https://www.govinfo.gov/content/pkg/STATUTE-94/pdf/STATUTE-94-Pg3015.pdf` — HTTP 200, 2.66 MB,
  15 pages. Extracted with **both** pypdf (47,578 chars) and pdfminer.six (52,388 chars).

Used for one purpose: to establish the spelling of § 202(c)(4) as originally enacted. See §4.1.

### 2.3 37 C.F.R. § 401.14 — two genuinely independent publishers

* **Path A (eCFR / Office of the Federal Register + NARA):**
  `https://www.ecfr.gov/api/versioner/v1/full/2025-09-01/title-37.xml?chapter=IV&part=401&section=401.14`
  — first attempt returned HTTP 406 ("This endpoint requires response compression"); re-run with
  `--compressed` returned HTTP 200.
* **Path B (govinfo / GPO):**
  `https://www.govinfo.gov/content/pkg/CFR-2024-title37-vol1/pdf/CFR-2024-title37-vol1-sec401-14.pdf`
  — HTTP 200, 212 KB. Extracted with **both** pypdf and pdfminer.six; they agreed.

**Disclosed:** these are two publishers **and two editions** (eCFR current text vs. the 2024 annual
edition), which is stated in the clause gap. The quoted language was identical in both. The only
extra normalization was rejoining a line-break hyphenation in the govinfo PDF, which sets the phrase
as `nonexclusive, nontransfer-` / `able, irrevocable, paid-up license`; this is disclosed in the
clause gap and was applied only to that source in the re-verification script.

### 2.4 Board of Trustees of the Leland Stanford Junior University v. Roche Molecular Systems, Inc., 563 U.S. 776 (2011)

* **Path A (official, Supreme Court of the United States):**
  `https://www.supremecourt.gov/opinions/boundvolumes/563bv.pdf` — HTTP 200, 5.01 MB, 1,139 pages.
  Extracted with **both** pypdf and pdfminer.six; both contain every quoted passage.
  (The slip-opinion paths `https://www.supremecourt.gov/opinions/10pdf/09-1159.pdf` and
  `.../11pdf/09-1159.pdf` both returned **HTTP 404**, and
  `https://www.govinfo.gov/content/pkg/USCOURTS-SCOTUS-09-1159/...` returned an HTML error body, so
  the bound volume was used instead. This is recorded so the failed attempts are not mistaken for
  untried paths.)
* **Path B (CourtListener):**
  `https://www.courtlistener.com/opinion/218133/board-of-trustees-of-the-leland-stanford-junior-university-v-roche/`
  — HTTP 200 with `Referer: https://www.courtlistener.com/` and a browser UA/Accept header.

These are genuinely independent publishers. **Cluster check:** the citation redirect
`https://www.courtlistener.com/c/U.S./563/776/` returned HTTP 302 to `/c/us/563/776/`, which
returned HTTP 302 to opinion 218133 — the same cluster fetched directly, and the one containing the
majority, the Sotomayor concurrence and the Breyer dissent. No HTTP 300 and no wrong-cluster
problem.

**Pin cites.** Page numbers were read from the bound volume's own running headers, which give an
exact map: PDF page index 853 + (printed page − 776). Opinion of the Court runs 781-794; the
Sotomayor concurrence and the start of the Breyer dissent are on 794; the dissent runs to 803.
Every pin cite in this sheet was confirmed by locating the quote on that specific bound-volume page,
not merely somewhere in the opinion. CourtListener's own star-pagination labels for this opinion run
780-803 with a single `citation-index="1"` (one reporter series only, so no interleaving), and the
two publishers agreed on the page for every quote.

Two candidate quotes were **dropped** because they straddle a page break and so are not contiguous
in either publisher's text (the running header intervenes): the sentence beginning "The agency also
possesses '[m]arch-in rights'" (782-783). Only the portion falling wholly on 783 is quoted.

---

## 3. Negative results recorded

* **No case law construing § 205 or § 212** was located. The search performed was a keyword search
  of one free case-law publisher and is not a comprehensive survey; this limitation is stated in the
  clause gaps.
* **§ 203 march-in.** A CourtListener opinion search for `"march-in rights"` **first returned HTTP
  429**. Per the rule that a throttled query is not a zero, it was re-run in-turn inside an
  `until` loop and succeeded, returning **count 8**: In re Roche Molecular Systems (Fed. Cir. 2008),
  Ciba-Geigy Corp. v. Alza Corp. (D.N.J. 1992), Metric Systems Corp. v. United States (Ct. Fed. Cl.
  1998), Carik v. HHS (D.D.C. 2013), Ali v. Carnegie Institution of Washington (D.D.C. 2013 and D.
  Or. 2013), Hochendoner v. Genzyme Corp. (D. Mass. 2015), In re Neurografix ('360) Patent
  Litigation (D. Mass. 2014). None is controlling California or Ninth Circuit appellate authority
  construing the § 203(a) standards, so none is quoted; this corpus quotes out-of-circuit and
  trial-court authority only as a controlling opinion reproduces it. A search for
  `"35 U.S.C. 203" march-in` returned count 1 (Pilley v. United States, Ct. Fed. Cl. 2006), likewise
  not quoted.
* **§ 204 "manufactured substantially in the United States."** A CourtListener search for
  `"preference for United States industry"` returned **HTTP 429 and was not successfully re-run**.
  The clause gap records this explicitly as an *untested* negative rather than as a
  searched-and-empty result.
* **Questions expressly reserved by the Court** are given their own clause: footnote 2 at 563 U.S.
  784 (no occasion to pass on the Federal Circuit's construction of the assignment agreements) and
  the Sotomayor concurrence at 794 (the FilmTec question left for a future case).
* **Amendments postdating the opinion.** None affecting §§ 200-212 was found after the 2011
  Leahy-Smith America Invents Act changes recorded in the publishers' amendment notes; the 2011
  amendments to § 202(c)(2)-(3), (c)(7)(D) and (c)(7)(E) predate the June 6, 2011 opinion only by
  months and are described from the amendment notes, not from the session law, which was not fetched.

---

## 4. Defects disclosed rather than corrected

### 4.1 "nontransferrable" in the codified statute vs. "nontransferable" everywhere else

| Source | Fetch | Spelling |
|---|---|---|
| 35 U.S.C. § 202(c)(4), OLRC | uscode.house.gov | **nontransferrable** (two r) |
| 35 U.S.C. § 202(c)(4), Cornell LII | law.cornell.edu | **nontransferrable** (two r) |
| Pub. L. 96-517 § 6(a), 94 Stat. 3020 as enacted | govinfo STATUTE-94 PDF, pypdf **and** pdfminer.six agreeing | **nontransferable** (one r) |
| 37 C.F.R. § 401.14(b), eCFR | ecfr.gov | **nontransferable** (one r) |
| 37 C.F.R. § 401.14(b), 2024 CFR | govinfo PDF, both extractors | **nontransferable** (one r) |
| Stanford v. Roche, 563 U.S. **782**, quoting the statute | bound volume + CourtListener | **nontransferrable** (two r) |
| Stanford v. Roche, 563 U.S. **783**, describing the same licence in the Court's own words | bound volume + CourtListener | **nontransferable** (one r), and **omitting "irrevocable"** |

Neither publisher's amendment notes record any amendment touching that word: the only change noted
for § 202(c)(4) after 1984 is the 2002 substitution of `"additional rights,"` for
`"additional rights;"`, and the 1984 change replaced only the trailing proviso about foreign
sublicensing. So the two-r spelling in the current Code is not traceable to any recorded amendment.

**Not silently corrected.** Both spellings are quoted in the sheet — the Code text at § 202(c)(4),
the Statutes at Large text, and both of the Supreme Court's renderings — so the discrepancy sits on
the record. The gap states the limit of the evidence: the govinfo Statutes at Large volume is a
scanned page with an OCR text layer, and because both extraction libraries read that same layer,
their agreement confirms the extraction but does **not** independently confirm the scan. No
authority addressing the point was located, and the sheet states no view on which spelling controls.

### 4.2 Dangling cross-reference in § 203(b)

§ 203(b) opens: *"A determination pursuant to this section or section 202(b)(4)…"*. Both OLRC and
Cornell LII append the same editorial note: *"Section 202(b)(4), referred to in subsec. (b), was
redesignated section 202(b)(3) of this title by Pub. L. 111–8, div. G, title I, § 1301(h), Mar. 11,
2009, 123 Stat. 829."* The cross-reference was never conformed, so the subsection as published
points at a paragraph number that no longer exists. Disclosed in the § 203 clause's gap; the quote
taken from § 203(b) is from the later sentence, not the defective one.

### 4.3 CourtListener OCR corruption in the Sotomayor concurrence

CourtListener's text of 563 U.S. 794 reads *"…permit consideration of these arguments in a future
**ease**"* where the official U.S. Reports reads *"in a future **case**."* The same CourtListener
text renders **"BayhDole"** (no hyphen) at two points where the bound volume breaks the word across
a line — at 783 ("thereby subjecting the invention to the Bayh-Dole Act") and at 794 (the
concurrence) — and its judges field lists the Justice as both "Sotomayor" and "Soto-Mayor."

**Confirmed to be in CourtListener's record, not in this preparer's extraction**, by an exact-phrase
query against CourtListener's own search index:

```
https://www.courtlistener.com/api/rest/v4/search/?type=o&q=cluster_id:218133 AND "in a future ease"
→ HTTP 200, count 1
```

Here, unlike a case where neither publisher is clean, the official reporter **is** clean. The
concurrence quotes are therefore taken from the bound volume and carry its URL; the CourtListener
path was still fetched and compared, and the divergence is disclosed in the gap of
`bayhdole_questions_left_open` and again in the gap of `bayhdole_no_automatic_vesting`.

### 4.4 Awkward phrase left uncorrected in § 210(a)

§ 210(a) reads *"…subject inventions of small business firms or nonprofit organizations contractors
in a manner that is inconsistent with this chapter."* "organizations contractors" reads as a
grammatical slip. It appears identically in both publishers and is reproduced as printed; the gap
says so.

---

## 5. Per-citation verification result

All 84 citations were re-read **out of the written `data/clauses.json`** (not from memory or from
the build script) and each `quote` re-confirmed as a verbatim substring of every fetched source
listed for its URL, under the normalization described above. Bound-volume citations were
additionally confirmed to fall on the specific printed page named in the pin cite.

```
clauses found: 15 authority: 13 drafting: 2
total citations 84 failures 0
```

Breakdown by source URL: 36 OLRC, 19 Cornell LII, 18 U.S. Reports bound volume (pypdf +
pdfminer.six + page check), 4 CourtListener, 5 eCFR, 1 govinfo CFR PDF (pypdf + pdfminer.six),
1 govinfo Statutes at Large PDF (pypdf + pdfminer.six). 36 distinct statutory quote strings were
checked against both Code publishers; 19 of them also carry a separate Cornell LII citation entry
in the sheet so that the dual sourcing is visible to a reader.

## 6. Corpus validation

```
python3 tools/validate_corpus.py
737 documents / 6565 clauses (4942 authority, 1623 drafting), 11529 citations
{'Business Formation': 93, 'Confidentiality & IP': 94, 'During employment': 93,
 'Ending employment': 93, 'Estate Planning': 93, 'Family Law': 93, 'Hiring': 93,
 'Real Estate': 93}

validation passed
```

`git diff --stat` shows insertions only (659 added lines in `data/clauses.json`, 57 in
`data/documents.json`, 0 deletions) — nothing existing was modified or reordered.
