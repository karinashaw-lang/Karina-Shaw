# Verification — Proration of Estate Taxes Among Beneficiaries (Estate Planning)

Document id: `estate_tax_proration_beneficiaries_info_sheet`
Clause id prefix: `taxpro_`
Checked date on every authority clause: **2026-09-15**
Clause split as read back from the written `data/clauses.json`: **15 clauses — 13 authority, 2 drafting, 56 citations.**

---

## 1. Why the topic was uncovered (structural gap)

The Estate Planning category had 92 documents. Several of them exist precisely because
property can move to a recipient without administration: Payable-on-Death (POD) Account
Designation, Transfer-on-Death Deed, Transfer-on-Death (TOD) Security Registration, Life
Insurance Beneficiary Designation, Joint Bank Accounts and Survivorship Rights, Revocable
Living Trust, Living Trust Funding. A separate document, Federal Estate and Gift Tax Basics,
says how large the tax is. **No document asked who bears it.** The category assumed, without
examining, that the estate tax is a liability of the probate estate — which is exactly the
assumption Probate Code Division 10 reverses.

Confirming greps over `data/clauses.json` (counts are raw `grep -oic` occurrence counts, each
hit then inspected):

| pattern | hits | disposition |
|---|---|---|
| `20100` | 3 | 2 are in `ademptionabatement_scope_and_override`, which names "Division 10 (commencing with Section 20100) (proration of taxes)" only to *carve it out*: "those carve-outs are separate statutory schemes not detailed further". 1 is `livetest_ab939_digest`, a **false positive** — the digits are inside a leginfo bill URL, `bill_id=200920100AB939` (2009–2010 session, Family Law). |
| `20110`, `20111`, `20112`, `20200`, `20210`, `20220` | 0 each | genuinely absent |
| `proration` | 14 | all **discounted**: Health & Safety Code § 7100.1 (disposition of remains), employment-agency fees (§ 1812.505), stay-or-pay signing bonuses, FLSA initial/terminal-week salary proration (3 clauses), DLSE manual proration arithmetic (3 hits in one clause), Civ. Code § 1946.7 DV-tenant rent, bulk-sale § 6103. None concerns estate tax. |
| `apportion` | 105 / `apportionment` | 84 | inspected the id list: business-license apportionment, CUTSA fee apportionment, Corp. Code § 2115, design-patent total-profit remedy, marital-property apportionment (Brandes/Pereira-Van Camp). Regexes `estate tax.{0,40}apportion` and `apportion.{0,40}estate tax` both return **0**. |
| `equitable apportionment` | 5 | all in `spbiz_*` — community-property business apportionment. |
| `2207` | 1 | `qtip_federal_inclusion_second_estate`, whose gap **expressly records 26 U.S.C. § 2207A as not researched** — a recorded negative, not coverage. `\b2206\b` = 0. |
| `burden of the tax`, `bears the tax` | 0 | — |

So every apparent hit was either a recorded negative (an express carve-out or an express
"not researched" note) or a different body of law. The gap is structural, not lexical.

---

## 2. Statutes — two genuinely independent publishers

Publisher A (Legislative Counsel, leginfo). Session cookie seeded from
`https://leginfo.legislature.ca.gov/faces/codes.xhtml`, then four article-level fetches:

- Ch. 1, Art. 1 — `codes_displayText.xhtml?lawCode=PROB&division=10.&title=&part=&chapter=1.&article=1.`
- Ch. 1, Art. 2 — `...&chapter=1.&article=2.`
- Ch. 1, Art. 3 — `...&chapter=1.&article=3.`
- Ch. 2, Art. 2 — `...&chapter=2.&article=2.`

Publisher B (law.onecle.com), one page per section:
`https://law.onecle.com/california/probate/<section>.html` for
20100, 20101, 20110, 20111, 20112, 20113, 20116, 20117, 20120, 20121, 20122, 20123, 20124,
20125, 20210, 20211.

These two are genuinely independent. `california.public.law` was used **once only**, as a third
copy for a single yes/no question (see §4 below); it prints a "Source:" line naming leginfo and
has a record of altering text while auto-linking, so it is not treated as a second publisher and
nothing is quoted from it.

**Comparison result:** each of the 16 sections was extracted from both publishers and compared
in full. All 16 agree **exactly**. Normalization applied for the comparison only, and disclosed
in every authority clause's gap: non-breaking spaces treated as ordinary spaces, runs of
whitespace collapsed (leginfo breaks some subdivisions mid-sentence across lines), and curly
quotes/apostrophes folded to straight for the diff. Stored quotes keep the publishers' own curly
punctuation.

**Amendment check:** onecle labels its pages "CA Prob Code § … (2017)" (page footer: "Last
modified: October 25, 2018"). Of the quoted sections only § 20122 has been amended since 1998
(Stats. 2017, ch. 319, § 106 (AB 976), eff. Jan. 1, 2018). The onecle page already carries the
post-amendment text ("delivered pursuant to Section 1215"), and it matched leginfo exactly, so no
separate chaptered-bill corroboration was needed for the quoted language. Recorded here rather
than assumed.

Cross-check run against the **written** `data/clauses.json`: all **40** statutory citation quotes
are verbatim substrings of *both* the leginfo fetch and the onecle fetch. 0 failures.

---

## 3. Disclosed statutory defect — the misspelling in § 20120(b)

Probate Code § 20120(b) as published reads:

> "…or, if no administration proceedings have been **commmenced**, in the superior court…"

Three m's. This is **not** an extraction artifact and **not** a single publisher's typo:

- leginfo (Ch. 1, Art. 3 fetch): present — `grep -c commmenced` = 1
- law.onecle.com `/probate/20120.html`: present
- california.public.law `/codes/ca_prob_code_section_20120` (third copy, fetched only for this
  check): present

Three published copies, including the Legislative Counsel's own, agree. The quote is therefore
stored **exactly as published, misspelling included**, and the citation's `cite` field says so.
I could not corroborate against the chaptered bill: Division 10 was enacted by Stats. 1990,
ch. 79, and leginfo's bill-text archive does not reach back before the 1993–94 session. That
limitation is recorded rather than papered over.

---

## 4. Case law — one publisher, disclosed

No second free publisher of these California opinions was reachable: Justia, FindLaw, Google
Scholar, casetext, leagle, case.law, anylaw, casemine, vlex, scocal and archive.org are all
egress-blocked in this environment, and no `courts.ca.gov/opinions/archive` slip PDF exists for
opinions from 1961, 1992, 1997, 1999 or 2005. **Every case quote in this sheet rests on a single
publisher, CourtListener.** Every affected clause gap says so in those words.

What corroboration *was* available: CourtListener holds **two separate clusters** for four of the
five opinions, reproducing them from two different reporters. Both were fetched and diffed. That
is a second *path* to one publisher, not a second publisher, and the gaps say that too.

HTTP method: `curl` with `Referer: https://www.courtlistener.com/`, a real browser UA and a full
`Accept`/`Accept-Language` header set. One fetch (`/opinion/2278706/estate-of-malpas/`) returned
an empty 202 six times; it was retried in-turn with the fuller header set and returned 200.
Each opinion was fetched twice — once with a placeholder slug and once with its real slug — and
the two extractions were byte-identical (`cmp` clean for all seven pages), confirming the slug
does not change what is served.

| Opinion | Cluster A (fetched) | Cluster B (fetched) | Star pagination |
|---|---|---|---|
| Estate of Armstrong (1961) 56 Cal.2d 796 | `/opinion/1233669/estate-of-armstrong/` | `/opinion/5607230/bolstad-v-wells-fargo-bank-american-trust-co/` | both Cal.2d, 798–804 |
| Estate of Malpas (1992) 7 Cal.App.4th 1901 | `/opinion/2278706/estate-of-malpas/` | `/opinion/5807837/sandage-v-klier/` | both Cal.App.4th, 1903/1904–1911 |
| Estate of Wathen (1997) 56 Cal.App.4th 48 | `/opinion/2251503/estate-of-wathen/` | `/opinion/5808127/sturtevant-v-greater-los-angeles-zoo-assn/` | both Cal.App.4th, 49/50–54 |
| Hoffman v. Connell (1999) 73 Cal.App.4th 1194 | `/opinion/2289462/hoffman-v-connell/` | **none — single cluster** | Cal.App.4th, 1195–1203 |
| Estate of Hughes (2005) 133 Cal.App.4th 121 | `/opinion/5809315/klein-v-hughes/` (Cal.App.4th, *124–*131) | `/opinion/2285238/in-re-estate-of-hughes/` (34 Cal.Rptr.3d, *614–*621) | different reporters |

The `/c/Cal.2d/56/796/` citation redirect returned **HTTP 300 (multiple choices)** for Armstrong,
offering `/opinion/1233669/estate-of-armstrong/` and
`/opinion/5607230/bolstad-v-wells-fargo-bank-american-trust-co/`. Both were fetched and diffed;
they are the same opinion (Peters, J., L.A. No. 26008, Nov. 16, 1961) under two captions, so the
citation does not resolve to a wrong cluster — but it was checked rather than assumed.

### Disclosed case-law defects (found, not fixed)

1. **Hoffman v. Connell miscites the statute its sentence turns on.** The opinion says
   "California and federal statutes gave Connie's executors the right to recover from the
   trustees, any tax the executors might be obligated to pay," citing "(See Prob. Code, § 20110,
   subd. (b)(2)…; 26 U.S.C. § 2207A…)". Its own footnote 6 then quotes § 20110(b)(2) in full, and
   that text is only the federal-preemption rule — it confers no right of recovery on anyone. The
   California provision that does is § 20116(a). Confirmed by reading the **raw HTML** of the
   publisher's page (`grep` on `op_2289462.html` returns the footnote and the body sentence
   verbatim), so the mismatch is in the record, not in my extraction. **I could not run the
   CourtListener phrase-index confirmation**: the anonymous search endpoint returned
   `{"detail":"Request was throttled. Rate limit exceeded: 125/day. Expected available in 59766
   seconds."}` — a ~16.6 hour wait, which exceeds what an in-turn `sleep 300` loop can ride out.
   That failure is recorded in the clause gap rather than glossed over. Hoffman is also the one
   opinion here with a single cluster, so no second rendering was available to cross-check.
   Disclosed in `taxpro_federal_law_exception`.

2. **Estate of Hughes: the two renderings disagree on the text of the sentence stating the
   holding.** Cal.App.4th cluster: "…prescribed in Probate Code **section** 20120 et seq. are
   optional." Cal.Rptr.3d cluster: "…prescribed in Probate Code **§** 20120 et seq. are optional."
   Rather than pick one and suppress the difference, both are quoted, each from the rendering in
   which it is verbatim, and the gap names the discrepancy.

3. **Estate of Hughes: CourtListener's Cal.App.4th cluster is captioned "Klein v. Hughes"** —
   no party of that name appears in the opinion, whose caption is *Estate of Mark R. Hughes,
   Deceased; Kirk D. Hartman et al. v. Suzan Hughes* (A106600). The same cluster carries scanning
   errors elsewhere in its text ("bom in 1991", "trastees", "100.000 shares", "200.000 shares"),
   none of which fall inside any quoted passage — each quoted passage was checked against the
   other cluster. Disclosed in `taxpro_court_determination_optional`.

4. **Estate of Malpas: the two renderings disagree on punctuation at the sentence I quote.**
   Cluster 2278706 prints "required by section 20113 The Probate Code permits" (period dropped);
   cluster 5807837 prints "required by section 20113. The Probate Code permits". The quote stops
   at "section 20113", which is verbatim in both. Disclosed in
   `taxpro_temporary_interests_corpus_rule`.

5. **Estate of Wathen footnote 4 reads "by about $2.2. million"** — stray period — in *both*
   renderings, so it is likely in the reporter. The footnote is described, not quoted, and the
   defect is disclosed in `taxpro_credits_deductions_interest`.

### Pin cites withheld, with reasons given in the `cite` field

- **Hoffman v. Connell, footnote 6** — no pin cite. This rendering relocates all footnotes to the
  end, past the last star marker (*1203), so the reporter page cannot be read off the text.
- **Estate of Hughes, "The estate tax proration provisions… do not contemplate…"** — no pin cite.
  The sentence is in the introductory paragraphs, which **precede the first star marker (*124)**;
  the opinion begins at 133 Cal.App.4th 121, so it lies somewhere on pp. 121–123.
- **Estate of Hughes, Cal.Rptr.3d cluster** — no Cal.App.4th pin cite given from that rendering;
  its star pagination follows 34 Cal.Rptr.3d 613–621, a different reporter.

All other pin cites were read off star markers: quotes lie between the marker for page *n* and
the marker for page *n*+1 and are cited to page *n*. Armstrong 800 and 802; Wathen 50 and 53;
Malpas 1909; Hughes 126 and 128 (Cal.App.4th cluster).

### Quotation hygiene for case text

The two renderings of each opinion differ systematically in punctuation encoding (curly vs.
straight apostrophes; the Cal.Rptr.3d Hughes rendering drops em dashes to blank space). Every
case quote in this sheet was chosen to contain **no apostrophe, quotation mark or dash**, so no
normalization was needed to make it verbatim in both renderings. The Wathen holding quote stops
at "of the Probate Code" because a footnote marker follows immediately and the two renderings
attach it differently ("Probate Code[1]" vs. "Probate Code1"); the Wathen integrated-instruments
quote stops at "contained in" because the *54 star marker falls mid-sentence. Both truncations
are disclosed in the relevant gaps.

---

## 5. Recorded negative results

- No published California opinion construing Probate Code §§ 20112, 20114, 20114.5, 20115, 20116,
  20117, 20121–20125, or any section of Chapter 2 (§§ 20200–20225) was located.
- A search for `"Probate Code section 20113"` returned **`count: None`** — an erroring/throttled
  response, not a zero. Re-run shorter as `"equitably prorated"` and `"proration of estate taxes"`,
  which surfaced **Estate of Malpas**, a squarely-on-point § 20113 case. Recorded because the first
  result would have been a false negative.
- Estate of Hughes states the parties cited no authority, and its own research disclosed none, on
  whether a probate court may weigh a beneficiary's future income taxes when prorating estate tax.
- Estate of Armstrong construes the **repealed** predecessor (former Prob. Code §§ 970–977). Wathen
  and Malpas both say the 1987 rewrite restated prior law "including its judicial gloss"; this sheet
  does not treat that as settling how far the older cases carry forward, and the Law Revision
  Commission report they cite (18 Cal. Law Revision Com. Rep. 1127) was **not** fetched.
- Estate of Malpas declined to follow **Estate of Steele (1980) 113 Cal.App.3d 106** (divided panel,
  the other way on frustration-of-intent grounds). Steele was not fetched; no later opinion resolving
  the disagreement was found.
- Not researched and expressly out of scope: federal gross-estate inclusion (26 U.S.C. §§ 2031–2046),
  26 U.S.C. §§ 2002, 2206, 2207, 2207B, 31 U.S.C. § 3713, Treasury regulations, the federal GST tax
  (26 U.S.C. §§ 2601 et seq.), Probate Code § 1215, and the current status of the California estate
  tax. Hoover v. Hartman (1982) 136 Cal.App.3d 1019, Estate of Hendricks (1970) 11 Cal.App.3d 204 and
  Estate of Bixby (1956) 140 Cal.App.2d 326 are described **only as the controlling opinions quoted
  here reproduce them**, and the out-of-state authority in Armstrong likewise.

---

## 6. Validation

```
python3 tools/validate_corpus.py
733 documents / 6506 clauses (4892 authority, 1614 drafting), 11262 citations
{'Business Formation': 93, 'Confidentiality & IP': 93, 'During employment': 92,
 'Ending employment': 93, 'Estate Planning': 93, 'Family Law': 92, 'Hiring': 92,
 'Real Estate': 93}

validation passed
```

Post-write re-verification, reading every quote back out of the written `data/clauses.json` and
testing it against the fetched source files: **56 citations checked, 0 failures.** Of those, 40
are statutory and were additionally confirmed verbatim in **both** publishers (0 mismatches); 16
are case citations against the CourtListener renderings named above.

`git diff --numstat data/` = `491 0 data/clauses.json`, `63 0 data/documents.json` — **491 and 63
insertions, zero deletions**: strictly append-only, no existing clause or document touched or
reordered.
