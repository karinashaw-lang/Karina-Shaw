# Verification — Title Insurance and the Preliminary Report — Information Sheet

Document id: `title_insurance_preliminary_report_info_sheet`
Category: Real Estate (California law)
Checked date on all authority clauses: 2026-09-15
Clauses: 15 (13 authority, 2 drafting). Citations: 33 (15 statutory, 18 case).

---

## 1. Gap analysis — how the topic was chosen

The Real Estate category held 92 documents before this one. The structural question the
category never posed: **every transaction document in it assumes a title company has already
done the search and issued a preliminary report, and nothing says what that report legally is
or what the policy does.** There are sheets on escrow law, the Recording Act and priority,
grant and quitclaim deeds, the Transfer Disclosure Statement, the broker's visual-inspection
duty, and nonjudicial foreclosure — all of which sit on either side of the title-insurance
function without touching it.

Grep counts over `data/clauses.json` (case-insensitive, matching lines) before the append:

| term | hits | disposition |
|---|---|---|
| `title insurance` | 5 | all incidental. Inspected each: two are inside the Escrow Law sheet's recital of Fin. Code § 17006 exemptions ("preparing abstracts or title searches used as the basis for a title insurance policy"); one is a gap note in the boundary/trespass sheet listing "recording priority and the effect of title insurance" as **out of scope** — a recorded negative, not coverage; one is a gap note in a probate sale sheet saying the statute "does not say" anything about title insurance. Discounted. |
| `preliminary report` | 0 | — |
| `abstract of title` | 0 | — |
| `12340` | 0 | — |
| `12401` / `12404` / `12413` / `12414` / `12360` / `12389` | 0 each | — |
| `title plant` | 0 | — |
| `Quelimane` | 2 | Inspected. Both are in one clause and its gap in a **tortious-interference** sheet (not Real Estate), citing Quelimane only for the intent element of interference with contract as *Reeves* reports it. The gap there states expressly that "Quelimane was not separately fetched for this sheet." A recorded negative on the very point. Discounted. |
| `Stewart Title` | 1 | Same clause as above. Discounted. |
| `Siegel` / `Southland Title` / `Chicago Title` / `Fidelity National Title` / `Ticor` / `Elysian` | 0 each | — |

The gap is structural, not lexical: an entire Insurance Code chapter (Part 6, Chapter 1,
§§ 12340–12418.4) and the line of decisions construing it were absent.

---

## 2. Statutes — two genuinely independent publishers

All twelve Insurance Code sections were fetched from **both**:

* Legislative Counsel, leginfo — `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=<N>.`
  (JSF session cookie seeded from `/faces/codes.xhtml` first; all returned HTTP 200.)
* **law.onecle.com** — `https://law.onecle.com/california/insurance/<N>.html`

These two are genuinely independent publishers. `california.public.law` was **not** used: it
prints a "Source:" line naming leginfo and is a third copy of the same publisher at best.

onecle publishes a **2017 snapshot**. The enactment/amendment line on leginfo was read for
every section to confirm the snapshot is current for each:

| § | leginfo enactment line | onecle | fetch result |
|---|---|---|---|
| 12340.1 | Added by Stats. 1973, Ch. 1130 | same | match |
| 12340.2 | Added by Stats. 1973, Ch. 1130 | same | match |
| 12340.3 | Amended by Stats. 1981, Ch. 479, Sec. 1 | same | match |
| 12340.5 | Added by Stats. 1973, Ch. 1130 | same | match |
| 12340.10 | Added by Stats. 1981, Ch. 55, Sec. 1 | same (published at path `12340.10.a`) | match |
| 12340.11 | Added by Stats. 1981, Ch. 55, Sec. 2 | same | match |
| 12360 | Amended by Stats. 1951, Ch. 542 | same | match |
| 12401.1 | Added by Stats. 1973, Ch. 1130 | same | match |
| 12401.7 | Added by Stats. 1973, Ch. 1130 | same | match |
| 12404 | Amended by Stats. 2008, Ch. 280, Sec. 1 | same | match |
| 12413.1 | Amended by Stats. 1990, Ch. 872, Sec. 2 | same | match |
| 12414.26 | Added by Stats. 1973, Ch. 1130 | same | match |

**Every section's last enactment predates 2017**, so the onecle snapshot is current for all of
them and no corroboration against the Legislative Counsel's chaptered-bill text was needed
(which would in any event have been the same publisher in a different document). Disclosed in
the clause gaps.

Note recorded: onecle serves § 12340.10 at the path `12340.10.a`, and § 12340.10 is **404** at
the naive `12340.10.html` path. The text at `12340.10.a` is headed "CA Ins Code § 12340.10.a
(2017)" and is word-for-word the § 12340.10 text leginfo serves. The `.a` is onecle's own path
suffix, not part of the section number.

Each of the 15 statutory `quote` values is a verbatim substring of **both** fetches.

---

## 3. Case law — one publisher only, and why

Six California opinions are cited. A second free publisher of California appellate opinions of
this vintage (1985–2010) is **not reachable** from this environment: Justia, FindLaw, Google
Scholar, case.law, casetext, leagle, openjurist, anylaw, casemine, vlex, scocal, archive.org
and law.resource.org are all egress-blocked. `courts.ca.gov/opinions/archive/` carries only
recent slip opinions and holds nothing for any of these six. **So every case quotation rests on
a single publisher, CourtListener.** This is disclosed in the gap of each of the six affected
clauses.

Fetch path used for each: `https://www.courtlistener.com/opinion/<cluster>/<slug>/` with a
browser UA, `Referer: https://www.courtlistener.com/` and an HTML Accept header (a 202 with an
empty body is returned without the Referer); retried in-turn until a 200 with a full body.

As a substitute for independent publication, each quotation was **additionally confirmed by an
exact-phrase query against CourtListener's own search index restricted to the cluster**
(`?type=o&q=cluster_id:<id> AND "<phrase>"`). That checks the faithfulness of the local HTML
extraction, not the correctness of the publisher. Every query returned `count=1`.

| case | cluster | official cite | markers observed | phrase checks |
|---|---|---|---|---|
| Lawrence v. Chicago Title Ins. Co. | 2107472 | 192 Cal.App.3d 70 | 73–78, monotonic | 3 × count=1 |
| White v. Western Title Ins. Co. | 1206962 | 40 Cal.3d 870 | 878–891 then out of order | 1 full + 2 short, count=1 |
| Southland Title Corp. v. Superior Court | 2118849 | 231 Cal.App.3d 530 | 532–538 | 3 × count=1 |
| Siegel v. Fidelity National Title Ins. Co. | 2256704 | 46 Cal.App.4th 1181 | 1184–1194 | 4 × count=1 |
| Soifer v. Chicago Title Co. | 2288323 | 187 Cal.App.4th 365 | 367–375 then repeats | 3 × count=1 |
| Quelimane Co. v. Stewart Title Guaranty Co. | 1198871 | 19 Cal.4th 26 | 34–60 then out of order | 3 × count=1 |

**Reporter-cluster check.** Every `<page-number>`/`<span class="star-pagination">` element in
all six pages carries `citation-index="1"` only — no interleaving of markers from a second
reporter. The label ranges line up with the **official** reports in each case (Cal.4th,
Cal.3d, Cal.App.4th, Cal.App.3d), so pin cites are to the official reporter. No `/c/` redirect
was used, so no HTTP 300 wrong-cluster risk arose.

**Phrase query re-run recorded.** The full-length query for the White adhesory-contract
sentence *errored rather than returning a count*, three times with retries. Per the
methodology it was re-run shorter, as two phrases — "engaged in a business affected with the
public interest" and "by an adhesory contract, exculpate itself from liability for negligence"
— each returning `count=1`. Recorded in the clause gap as well as here.

---

## 4. Defects found and disclosed rather than corrected

### 4.1 Soifer v. Chicago Title Co., 187 Cal.App.4th 365 (cluster 2288323)

Two defects in CourtListener's served HTML, both confirmed present in the raw bytes (not
artifacts of my extraction) by reading the HTML directly:

1. **Wrong reporter abbreviation in the opinion's citation of its own earlier decision.** The
   text prints `<span class="citation no-link">231 Cal.3d 530</span>` — i.e. "231 Cal.3d 530"
   — where the correct citation, given correctly three other times in the same opinion, is
   **231 Cal.App.3d 530**. "App." is dropped.
2. **Paragraph marks scanned wrong.** In the passage reproducing Ins. Code § 12340.1 the
   pilcrow that prints elsewhere in the same sentence as `[¶]` prints twice as `[][]` and once
   as `[|]`:
   `"...defects in the title to said property; [|] . . . or [][] (c) Incorrectness of searches..."`
   and, earlier, `"...said property; [][] (b) Invalidity..."`. Characteristic OCR damage in the
   underlying scan.

Also observed in the same opinion: a mangled closing-quote cluster, `on title.'’’’`, where a
single `”` belongs.

No second publisher exists to check these against, so they are reported, not fixed. **None
falls inside any quotation used in the sheet** — all three Soifer quotes come from clean
running text at pp. 367 and 374.

### 4.2 Two published opinions reproducing the same passage — compared word for word

Soifer at 187 Cal.App.4th 373 reproduces the summary passage from Siegel at 46 Cal.App.4th
1193 in full. The two published texts were diffed word by word (`difflib`, whitespace
normalized):

* **They agree on every word.**
* They differ only typographically: Soifer sets the two em dashes with surrounding spaces
  (`risk — by locating and excluding items from coverage — and not`), Siegel sets them closed
  up (`risk—by locating and excluding items from coverage—and not`).

Disclosed in the `titleins_siegel_purpose_of_the_search` gap; the sheet quotes the Siegel text
from the Siegel opinion itself.

### 4.3 Lawrence v. Chicago Title Ins. Co., 192 Cal.App.3d 70 (cluster 2107472)

Three defects in the served text, all confirmed in the raw HTML:

1. The same appellant's surname prints **"Abdulla"** on pp. 72, 73 and 77 and **"Abdullah"**
   on p. 78.
2. A party's given name prints **"Sabría"**, with an acute accent.
3. A named appellant prints **"John E. Vemor"** — a spelling consistent with "rn" read as "m"
   in a scan.

Disclosed in the `titleins_policy_alone_no_negligence` gap. None falls inside a quotation used.

### 4.4 Non-monotonic star pagination from relocated footnote blocks

This is the hazard the methodology warns about (footnotes relocated past the last star
marker), and it is live in two of the six sources:

* **White** (cluster 1206962): markers run 878 … 891, then **882** (the majority's footnote
  block), then 892–900 (Lucas, J., concurring and dissenting), then **896, 897, 898** (that
  opinion's footnote block), then 901–902 (Kaus, J.).
* **Quelimane** (cluster 1198871): markers run 34 … 60 (majority, ending with its
  disposition), then **35, 46, 51** (the majority's footnote blocks), then 61–65 (Brown, J.,
  dissenting).

Both are disclosed in the corresponding gaps. Every quotation used sits inside the first,
monotonic run of running text; none is from a footnote.

### 4.5 Separate-opinion check

Three of the six opinions carry separate opinions. Each quotation was confirmed to come from
the **majority**:

* White — majority by Broussard, J. through p. 891; quotations at p. 884.
* Quelimane — majority through p. 60; quotations at pp. 44, 45, 59. (The dissent, as
  published, prints `[wjrongfulness` for `[w]rongfulness` and a capitalized "Dismissing" after
  a comma — further scanning defects, noted in the gap, outside the quoted majority text.)
* Lawrence, Southland, Siegel, Soifer — single opinions.

---

## 5. Pin-cite corroboration

Where a later opinion cites a page of an earlier one quoted here, the two agree — an
independent check on the star pagination:

* Southland p. 536 ("A preliminary report, for which little or no charge is made…") — cited as
  "231 Cal.App.3d at p. 536" by **both** Siegel and Soifer.
* Southland p. 537 ("such reliance cannot be justified…") — cited as "Id. at p. 537" by Siegel.
* Lawrence pp. 74–75 (indemnity / no negligence on the policy alone) — cited as "192
  Cal.App.3d 70, 74-75" by **both** Southland and Siegel.
* Siegel pp. 1189–1190 (abstractor sentence) — cited as "46 Cal.App.4th at pp. 1189-1190" by
  Soifer; the sentence does span the 1189/1190 marker in the fetched Siegel text.
* Siegel p. 1193 — cited as "46 Cal.App.4th at p. 1193" by Soifer.

Soifer p. 367: the opinion's own body begins after the `label="367"` marker, which sits in the
`attorneys` block preceding the opinion text; the introductory sentence quoted precedes the
`label="368"` marker, so p. 367 is correct.

---

## 6. Normalization disclosed

The only normalization applied to any quotation: **runs of whitespace collapsed to a single
space, and non-breaking spaces replaced by ordinary spaces.** This was necessary because both
leginfo's and CourtListener's HTML break sentences across source lines and inside inline
markup tags (e.g. `<em>` around case names, `<span class="citation">` around reporter cites).
No line-wrap hyphenation or ligature normalization was needed. No other change was made to any
quoted text — curly quotation marks, apostrophes, em dashes and section symbols are preserved
as published. Disclosed in every authority-clause gap.

---

## 7. Negative results recorded

* No published California decision construing Ins. Code § 12401.1 or § 12401.7 was located in
  the searches run; recorded in the `titleins_rate_filing` gap as a negative result, not as a
  representation that none exists.
* § 12360 (last amended 1951) — no case quoted.
* § 12340.11 applies only prospectively: White holds it cannot reach a preliminary report
  procured before its January 1, 1982 effective date. Recorded, and the pre-1982 abstractor
  rule is given its own clause rather than being presented as current law.
* Quelimane decided the no-duty-to-insure question **on demurrer** and on a negligence theory
  only; the same opinion reversed the Court of Appeal as to the Cartwright Act and UCL counts.
  Recorded in both Quelimane clauses.
* § 12414.29 is described from Quelimane's own quotation of it and was not separately fetched
  from the code; recorded.
* Out of scope and recorded: guarantee products (litigation guarantee, trustee's sale
  guarantee), RESPA's federal kickback prohibition, and § 12389's underwritten-title-company
  net-worth and bond schedule.

---

## 8. Validation run

`validate.py` asserted: both files parse; clause ids unique (6446); doc ids unique (729); doc
titles unique; every `clauseOrder` id resolves; every authority clause has a non-empty gap and
≥ 1 citation; no orphan clauses; no undeclared `{{placeholders}}`; canonical key order for
clauses (`id,title,kind,status,checkedDate,body,gap,citations` / `id,title,kind,body`),
citations (`case,cite,url,quote`) and documents
(`id,title,description,categories,clauseOrder,fields`).

It then **re-read all 33 quotes out of the written `data/clauses.json`** and reconfirmed each
is a verbatim substring of the fetched source(s) — statutes against both leginfo and onecle,
cases against the CourtListener extraction.

```
parsed: 6446 clauses, 729 documents
re-read and rechecked 33 quotes from the written data/clauses.json
new document clauses: 15 (authority 13, drafting 2), citations 33
RESULT: PASS
```
