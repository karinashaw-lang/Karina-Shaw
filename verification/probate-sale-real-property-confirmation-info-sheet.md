# Verification — Court Confirmation of the Sale of Estate Real Property and the Overbid Procedure — Information Sheet

Document id: `probate_sale_real_property_confirmation_info_sheet`
Category: Estate Planning (California)
Clause id prefix: `saleconf_`
Checked: 2026-09-14
Clauses as written: 15 total — 13 authority, 2 drafting. 54 citations.

---

## 1. Why this topic was treated as uncovered

The 91 pre-existing Estate Planning documents cover who inherits, who administers, how
fiduciaries are compensated, what the referee appraises, and what notice a personal
representative must give before acting. None of them asks how estate real property is
actually converted to cash — the published notice, the confirmation hearing, the courtroom
auction that the Probate Code stages on top of a signed purchase contract, and who is paid
out of the price. That is a structural gap, not a lexical one: the corpus already has an
IAEA Notice of Proposed Action sheet and a Probate Referee / Inventory and Appraisal sheet,
which sit on either side of this procedure without touching it.

### Grep counts (both `data/clauses.json` and `data/documents.json`, pre-merge)

| term | hits | disposition |
|---|---|---|
| `10300` | 0 | — |
| `10301` | 0 | — |
| `10303` | 0 | — |
| `10305` | 0 | — |
| `10308` | 0 | — |
| `10309` | 0 | — |
| `10310` | 0 | — |
| `10311` | 0 | — |
| `10312` | 0 | — |
| `10313` | 0 | — |
| `10314` | 0 | — |
| `10350` | 0 | — |
| `10503` | 0 | — |
| `10150` | 0 | — |
| `10160` | 0 | — |
| `10162` | 0 | — |
| `10165` | 0 | — |
| `confirmation of sale` | 0 | — |
| `probate sale` | 0 | — |
| `overbid` | 0 | — |
| `exclusive listing` | 0 | — |
| `Barthelmess` | 0 | — |
| `Sampo` | 0 | — |
| `Estate of Lopez` | 0 | — |
| `Estate of Greer` | 0 | — |
| `6063a` | 0 | — |
| `Increased Bid` | 0 | — |
| `10000` | 39 | **all false positives — inspected and discounted** |
| `10161` | 17 | **all false positives — inspected and discounted** |
| `notice of sale` | 32 | **all false positives — inspected and discounted** |
| `§ 1300` / `Section 1300` | 28 | **all false positives — inspected and discounted** |
| `10810` / `10811` | 1 each | inspected: neither appears in `clauses.json`; both are in the existing statutory-compensation document's prose, about Prob. Code §§ 10810–10811 (personal representative's statutory fee), not about sales |
| `public auction` | 1 | inspected: not in either data file's clause bodies as a probate-sale term |
| `10580` | 20 | genuine coverage — the existing IAEA Notice of Proposed Action sheet. That sheet covers §§ 10580–10592 (the notice procedure). It does **not** cover § 10503 (the provision that exempts an IAEA sale from confirmation) or any of Article 6. Its clause list was read in full to confirm this. |
| `Heggstad` / `§ 850` / `859` | 15 / 19 / 25 | genuine coverage of a different mechanism (§ 850 property claims), not sales under Chapter 18 |

Discounted false positives, inspected individually:

* **`10000` (39 hits)** — every hit is either **Bus. & Prof. Code § 10000** ("Division 4
  (commencing with Section 10000) of the Business and Professions Code", real estate
  licensing) or **Gov. Code § 100000 et seq.** (CalSavers). None is Prob. Code § 10000.
  This is exactly the numeric trap the brief warns about.
* **`10161` (17 hits)** — every hit is **Bus. & Prof. Code § 10161.8** (broker/salesperson
  termination notice), in a real-estate-licensing document. None is Prob. Code § 10161.
* **`notice of sale` (32 hits)** — every hit is **Civ. Code § 2924 et seq.** nonjudicial
  foreclosure ("notice of default", "notice of sale ... posted in a conspicuous place",
  "2924f"). None concerns a probate sale.
* **`§ 1300` / `Section 1300` (28 hits)** — every hit is **Corp. Code §§ 1300–1313**,
  the dissenters'-rights chapter (e.g. "Cal. Corp. Code § 1300(a)", "§ 1300(b)(1)").
  Prob. Code § 1300 (appealable probate orders) was uncovered; the new clause's gap says so
  expressly so a future reader does not mistake the Corporations Code hits for coverage.

No gap note recording a failed fetch was counted as coverage; the `10580` hits are live
coverage of a genuinely different section range and are cross-referenced rather than
duplicated.

---

## 2. Sources and how each was fetched

### 2a. Statutes — two publishers, **not fully independent**

Every Probate Code section was fetched twice:

1. **leginfo** (Legislative Counsel):
   `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PROB&sectionNum=<N>.`
   with a JSF session cookie seeded from `https://leginfo.legislature.ca.gov/faces/codes.xhtml`.
2. **california.public.law**:
   `https://california.public.law/codes/probate_code_section_<N>`
   (the `ca_prob_code_section_<N>` form 302-redirects to this canonical path).

**These two are not genuinely independent publishers.** Every california.public.law page
prints a `Source:` line naming the corresponding leginfo URL — e.g. for § 10300,
"Section 10300, https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PROB&sectionNum=10300.
(updated Jan. 1, 1990; accessed Sep. 14, 2026)". The second fetch therefore corroborates
transcription, not the underlying text. Every authority clause's `gap` says this in terms.

Sections fetched from both: 1300, 10000, 10150, 10160, 10161, 10162, 10165, 10300, 10301,
10303, 10305, 10308, 10309, 10310, 10311, 10312, 10313, 10314, 10350, 10503. Also fetched
from leginfo only, for context and not quoted: 10207.

**Comparison method.** A word-level `difflib` diff of the two texts per section, after
collapsing whitespace runs. Result: for 19 of the 20 sections the only differences were
benign artifacts of how each site marks subdivisions — leginfo runs them together
(`"satisfied:(1) The"`), california.public.law spaces them (`"satisfied: (1)The"`).
Normalization applied and disclosed: whitespace-run collapsing, NBSP → space, soft hyphen
removal, and treating those subdivision-marker spacings as equivalent. No quote in this
document spans a subdivision boundary, so none depends on that normalization.

### 2b. Disclosed textual defect #1 — Prob. Code § 10300(a), "Sections" vs "Section"

The twentieth section did not match.

* leginfo: `(a) Except as provided in **Sections** 10301 to 10303, inclusive, and in Section 10503, ...`
* california.public.law rendered body: `(a)Except as provided in **Section** 10301 to 10303, inclusive, and in Section 10503, ...`

This was confirmed to be in the record and not in my extraction by reading the raw HTML of
the california.public.law page. The body markup is:

```html
<h2>(a)</h2>Except as provided in Section <a href="probate_code_section_10301">10301</a> to
<a href="probate_code_section_10303">10303</a>, inclusive, ...
```

— the publisher auto-links the cross-reference and loses the plural `s` in the process.
The **same page contradicts itself**: its `<title>`/`<meta name="twitter:description">`/
`<meta property="og:description">` tags, generated from the unlinked text, all read
"Except as provided in **Sections** 10301 to 10303, inclusive". So the defect is internal to
that derivative publication and is not a disagreement about what the statute says.

**Not silently corrected.** The clause `saleconf_published_notice` discloses the whole
finding in its `gap`, and its § 10300(a) quote is deliberately drawn from a later stretch
of the subdivision that both publications render identically; the affected words are not
quoted anywhere in the document. The same § 10300(a) quote is reused in
`saleconf_iaea_full_authority_exception`, cited there to california.public.law.

### 2c. Case law — **no second publisher was reachable**

Alternate free publishers were tried and all failed from this environment:

| host | result |
|---|---|
| `casetext.com` | HTTP 410 |
| `law.justia.com` | HTTP 403 |
| `anylaw.com` | refused at the egress proxy (`connect_rejected`) |
| `openjurist.org` | refused at the egress proxy |
| `static.case.law` | refused at the egress proxy |
| `lawserver.com` | refused at the egress proxy |

Google Scholar, leagle, casemine, vlex, scocal and archive.org are documented as
egress-blocked and were not attempted. The CourtListener REST `opinions/` endpoint returns
HTTP 401 without an API key; the **search** endpoint and the **opinion HTML pages** are
quota-free and were used instead (browser UA + `Referer: https://www.courtlistener.com/`).

So for every case in this document, "fetched twice" means **two separately sourced
renderings hosted by one publisher (CourtListener)** — never two publishers. Every affected
clause gap says this plainly, in those words.

Two of the three cases do have two clusters. That was detected the way the brief describes:
the citation-redirect endpoint returns **HTTP 300** when two clusters share a cite.

| citation | redirect | clusters |
|---|---|---|
| `/c/cal-app-3d/171/767/` (Estate of Sampo) | **300** | 2127277 (Lawbox/Columbia) and 5806995 (Harvard, filed under *Sampo v. Frankfurt Group, U.S.A.*) |
| `/c/cal-app-3d/198/728/` (Estate of Barthelmess) | **300** | 2135836 (Lawbox/Columbia) and 5807310 (Harvard, filed under *Wetzel v. Mallette*) |
| `/c/cal-app-4th/8/317/` (Estate of Lopez) | 302 → single | 2277222 only |
| `/c/cal-app-3d/225/1017/` (Fletcher v. Roberts) | 302 → single | not used |

---

## 3. Disclosed textual defects in the case record

### 3a. Estate of Sampo (1985) 171 Cal.App.3d 767 — the two copies disagree **in both directions**

A word-level diff of cluster 2127277 against cluster 5806995 (after stripping star
pagination and headnote markers) shows:

* The **Harvard** rendering (5806995) carries OCR damage the Lawbox/Columbia rendering does
  not: `Perrero` for `Ferrero` (twice), `I960)` for `1960)`, `Cal.App. 2d` for `Cal.App.2d`.
* The **Lawbox/Columbia** rendering (2127277) names the original purchaser
  `Appeal Development Corporation (Appel)` where the Harvard rendering reads
  `Appel Development Corporation (Appel)`. The short form used throughout the rest of both
  texts is `Appel`, which points to the Lawbox/Columbia reading being the erroneous one —
  **but with no third copy reachable, this was not resolved.** Neither reading is quoted
  anywhere in the document, and the clause gap records the finding, including that it is
  unresolved and that the official-looking copy is not assumed to be the correct one.

Neither copy is clean. That is disclosed in `saleconf_written_offer_requirement`'s `gap`.

### 3b. Estate of Barthelmess (1988) 198 Cal.App.3d 728 — Harvard scan damage

Diff of 2135836 against 5807310:

| Lawbox/Columbia (2135836) | Harvard (5807310) |
|---|---|
| `It was within the court's discretion to deny the continuance.` | `If was within the court's discretion ...` |
| `section 1103` | `section 110-3` |
| `effect` | `elfect` |
| `[sic]` | `[sz'c]` |
| `[¶]` | `[fl]` |

The `If`/`It` error sits in the **same paragraph** as one of the quotations used, so this is
flagged in two clause gaps (`saleconf_hearing_inquiry` and `saleconf_cash_versus_credit`).
No quoted passage touches a damaged word.

### 3c. Estate of Lopez (1992) 8 Cal.App.4th 317 — single rendering, visible OCR errors

Only one cluster exists, so there was nothing to diff. Visible OCR errors in that rendering
include `procures a successful overbidden Probate Code sections 10162-10165` (the sentence
plainly ends at `overbid.`) and `106 Cal.App, 542` for `106 Cal.App. 542`. No passage
containing one is quoted. Disclosed in `saleconf_broker_compensation`'s `gap`.

Because there is no second copy, each of the three Lopez quotes was instead confirmed
present by an **exact-phrase index query** scoped to the cluster:

| query | count |
|---|---|
| `cluster_id:2277222 AND "a broker's work is not done, and his or her commission is not earned, until the transaction is consummated"` | 1 |
| `cluster_id:2277222 AND "had been renewed before the sale was consummated"` | 1 |
| `cluster_id:2277222 AND "Tong was not entitled to a commission from the estate"` | 1 |
| `cluster_id:2277222 AND "fraudulent depredations and unintentional losses"` | 1 |

Every query returned count 1 on the first attempt. **No query had to be shortened and
re-run.**

One further index query was run to corroborate the Greer quotation reproduced inside Sampo:
`"Any oral bidding in court can only be preliminary to the submission of a written, signed offer"`
returned **count 4** — both Sampo clusters, CourtListener's separate *Estate of Greer*
cluster (2202853), and one later case. Greer is nonetheless quoted **only as Sampo
reproduces it**, and the clause gap says so.

---

## 4. Pin cites and star pagination

Star markers were read off the Lawbox/Columbia renderings, which carry `*NNN` markers from a
single reporter and track cleanly through the body text.

| quote | pin cite given |
|---|---|
| Sampo, "Does section 785 require that any overbid be in writing ... Yes." | 171 Cal.App.3d 767, **771** |
| Sampo, "Section 785 specifically requires a 'written offer.' ..." | 171 Cal.App.3d 767, **772** |
| Sampo (quoting Greer), "Any oral bidding in court ..." | 171 Cal.App.3d 767, **773** |
| Sampo, "The powers and jurisdiction of the probate courts are wholly statutory ..." | 171 Cal.App.3d 767, **774** |
| Sampo fn. 3, "We query, but do not opine ..." | **no pin cite** — see below |
| Barthelmess, "The determination was within the court's discretion ..." | 198 Cal.App.3d 728, **736** |
| Barthelmess (quoting Kay), "... lies within the discretion of the probate court." | 198 Cal.App.3d 728, **735** |
| Barthelmess (quoting George), "Obviously the only test ..." | 198 Cal.App.3d 728, **737–738** |
| Barthelmess, "Finally, the law is clear that only a written, signed offer ..." | 198 Cal.App.3d 728, **740** |
| Barthelmess, "Perhaps more important, Wetzel did not accept the overbid ..." | 198 Cal.App.3d 728, **740** |
| Barthelmess, "... did not comport with the conditions of the notice of sale." | 198 Cal.App.3d 728, **740** |
| Barthelmess, "In light of these considerations, there was no abuse of discretion ..." | 198 Cal.App.3d 728, **741** |
| Lopez, "We hold Tong is entitled to the commission ..." | 8 Cal.App.4th 317, **319** |
| Lopez, "unless its requirements, including consummation of the sale, were met ..." | 8 Cal.App.4th 317, **322** |
| Lopez, "Under Probate Code section 10160, a broker's work is not done ..." | 8 Cal.App.4th 317, **323** |

**No pin cite for Sampo footnote 3.** In this rendering the footnotes are relocated into a
`NOTES` block after the end of the opinion, past the last star marker in the body; the star
markers stop tracking there, so the printed page on which the footnote appeared cannot be
read off the text. The `cite` field reads
`171 Cal.App.3d 767, fn. 3 (no reporter page available; see gap)` and the clause gap explains
why.

---

## 5. Recorded negative results

* **No case law construing the post-1990 text** of §§ 10000, 10300, 10301, 10305, 10308,
  10309, 10310, 10311, 10313 or 10503 was located and quoted. Each affected clause gap says
  so. The two Court of Appeal decisions used on the hearing and overbid procedure construe
  the **former** Probate Code (§§ 582, 754, 783, 785, 785.1, 788, 1240(g)), not the current
  Article 6, and every clause using them says so.
* **Question expressly reserved.** Sampo, footnote 3: "We query, but do not opine with
  respect to, the propriety of an order confirming a sale of undivided interests in property
  which are not subject to the jurisdiction of the court". Quoted and flagged as a reserved
  question.
* **Amendments postdating the quoted opinions.** § 10308 was amended by Stats. 1992, ch. 871,
  § 11 (eff. Jan. 1, 1993) and § 10350 by Stats. 1992, ch. 871, § 12 — both after Sampo
  (1985) and Barthelmess (1988). Prob. Code § 1300 in its present form was added by Stats.
  1997, ch. 724, § 11 and amended by Stats. 2001, ch. 417, § 4 (eff. Jan. 1, 2002) — a decade
  after Sampo relied on former § 1240(g). Disclosed in the relevant gaps.
* **Not covered and not verified** (each named in a gap): Gov. Code § 6063a; Prob. Code
  §§ 1220, 1230, 10001–10006, 10002, 10206, 10207, 10302, 10304, 10306, 10307, 10315, 10316,
  10351, 10162.5, 10162.6, 10163, 10164, 10166–10168, 10501, 10580–10592; Bus. & Prof. Code
  § 10136.

---

## 6. Quote-by-quote verification result

A scripted check re-read **every `citations[].quote` out of the written
`data/clauses.json`** and confirmed each is a substring of the fetched source that its own
`url` names:

* **Strict check** (byte-exact, allowing only differing whitespace runs between the stored
  quote and the source file): **54 citations, 0 not byte-exact in their cited source.**
* **Cross-source check** (each statute quote against *both* leginfo and
  california.public.law; each dual-cluster case quote against *both* renderings; Lopez
  against its single rendering), normalizing only NBSP, soft hyphen, curly↔straight quotes
  and apostrophes, em/en dashes, ligatures, star markers and headnote markers:
  **54 citations checked, 0 failures.**

One quote was corrected during this pass rather than left: the Sampo "Section 785
specifically requires a 'written offer.'" quotation is cited to the **Harvard** rendering
(cluster 5806995), which prints typographic quotation marks; it had initially been stored
with the Lawbox/Columbia rendering's straight quotes. It is now stored exactly as the
rendering named in its own citation prints it. Every case quote is stored in the glyphs of
the rendering its citation names; every statute quote is stored in leginfo's glyphs
(including leginfo's curly apostrophes in § 10503's "agents' and brokers' commissions").

---

## 7. Structural validation (post-merge)

```
NEW DOC: Court Confirmation of the Sale of Estate Real Property and the Overbid Procedure — Information Sheet
  clauses: 15  authority: 13  drafting: 2  citations: 54
TOTALS: 6388 clauses, 725 documents
Estate Planning docs: 92
VALIDATION PASS
```

Asserted and passing: both files parse; clause ids unique corpus-wide; document ids unique;
document titles unique; every `clauseOrder` id resolves; every authority clause has a
non-empty `gap` and ≥1 citation; no orphan clauses anywhere in the corpus; no undeclared
`{{placeholder}}` in any body or gap; canonical key order enforced for clauses
(`id,title,kind,status,checkedDate,body,gap,citations` / `id,title,kind,body`), citations
(`case,cite,url,quote`), documents (`id,title,description,categories,clauseOrder,fields`)
and fields (`id,label,placeholder,required`).
