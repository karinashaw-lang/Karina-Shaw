# Real Estate, new document: Wrongful Foreclosure and the Void-Assignment Standing Rule

Document id: `wrongful_foreclosure_void_assignment`
Clause prefix: `yvvoid_`
Checked date on every authority clause: 2026-09-14

## Why this topic

The corpus already carries substantial nonjudicial-foreclosure coverage —
notice of default, notice of sale, reinstatement, the Homeowner Bill of
Rights, surplus proceeds under §§ 2924j/2924k, anti-deficiency, foreclosure
consultants — but nothing on the post-sale standing question the California
Supreme Court decided in *Yvanova v. New Century Mortgage Corp.* (2016) 62
Cal.4th 919.

Grep counts over `data/clauses.json` + `data/documents.json` before the
addition (case-insensitive, occurrences not clauses):

| term | hits |
|---|---|
| `Yvanova` | 0 |
| `62 Cal.4th 919` | 0 |
| `wrongful foreclosure` | 0 |
| `void assignment` | 0 |
| `securitiz` | 0 |
| `Glaski` | 0 |
| `Sciarratta` | 0 |
| `Saterbak` | 0 |
| `Yhudai` | 0 |
| `Jenkins v. JPMorgan` | 0 |
| `Gomes` | 0 |
| `Debrunner` | 0 |
| `Lueras` | 0 |
| `Kan v. Guild` | 0 |

Hits that were inspected and discounted as false positives:

- `2924` — 288 occurrences. Inspected: all 32 clauses matching `2924[^.0-9]`
  belong to the existing nonjudicial-foreclosure, HOA-lien, HBOR,
  surplus-proceeds, deed-of-trust and anti-deficiency sheets. None discusses
  assignment validity or borrower standing. Most of the 288 raw hits are
  matches inside `2924f`, `2924g`, `2924j`, `2924k`, `2923.5`, `2924.12` and
  similar neighbours.
- `tender` — 37 occurrences across 20 clauses. Inspected the full list: every
  one is unrelated to the foreclosure tender rule (job offers, OWBPA, tender
  of a shareholder list, Desny claims, waiting-time penalties, tangible
  personal property). Only `foreclosure_reinstatement_right` is about
  foreclosure at all, and it concerns curing a default, not tender as a
  condition of setting aside a sale.
- `standing to` — 79 occurrences; none in a foreclosure context.
- `void`/`voidable` — 28 occurrences of `void.{0,15}voidable`; inspected, none
  concerns assignments of a deed of trust.
- Two adjacent candidates were checked first and **rejected as already
  covered**: the equitable-easement doctrine (`Shoen` 31, `Hirshfield` 34,
  `equitable easement` 15, `Christensen v. Tucker` 8) and the real-estate
  agency-disclosure statutes (`2079.13` 18, `2079.16` 16 — an existing
  `agencydisc_*` document reproduces the statutory agency-disclosure form).

## Sources and fetch paths

Two genuinely independent publishers were used for every opinion, and two
independent publishers for every statute.

### 1. *Yvanova v. New Century Mortgage Corp.* (2016) 62 Cal.4th 919

- **Publisher A — Judicial Council of California, official slip opinion.**
  `https://www.courts.ca.gov/opinions/archive/S218973.PDF` (33 pp., 334,657
  bytes). Extracted twice with two different extractors, **pdfminer.six
  20260107** and **pypdf 6.18.1**. Result of the comparison: after
  normalization the two extractions are identical across the entire body of
  the opinion; the only differences are the order in which each extractor
  emits the first-page caption block and the marginal line numbers 1–31. No
  repeated, reordered or dropped body lines — the text layer is sound.
- **Publisher B — Official Reports text as republished by CourtListener.**
  `https://www.courtlistener.com/opinion/3178579/yvanova-v-new-century-mortgage-corp/`
  (HTTP 200 with a browser UA, `Accept: text/html` and
  `Referer: https://www.courtlistener.com/`). Star-paginated (\*924 … \*943),
  which is the source of every page pin cite in the clauses.

Comparison result: the two publications agree on all quoted spans, and
disagree at several unquoted points recorded under "Defects disclosed" below.

### 2. *Sciarratta v. U.S. Bank National Assn.* (2016) 247 Cal.App.4th 552

- **Publisher A** — official slip PDF,
  `https://www.courts.ca.gov/opinions/archive/D069439.PDF`, extracted with
  pdfminer.six and pypdf (both agree on the quoted passages).
- **Publisher B** — Official Reports text at
  `https://www.courtlistener.com/opinion/3204604/sciarratta-v-us-bank-national-assn/`,
  star-paginated.

Comparison result: no discrepancy found in the quoted passages.

### 3. *Yhudai v. Impac Funding Corp.* (2016) 1 Cal.App.5th 1252

- **Publisher A** — official slip PDF,
  `https://www.courts.ca.gov/opinions/archive/B262509.PDF`, extracted with
  pdfminer.six and pypdf.
- **Publisher B** — Official Reports text at
  `https://www.courtlistener.com/opinion/4242947/yhudai-v-impac-funding-corp/`,
  star-paginated.

Comparison result: **the two publications differ by one word** in the very
sentence quoted. See "Defects disclosed".

### 4. Civil Code § 2924, subd. (a)(6) and § 2924.17, subd. (b)

- **Publisher A — Legislative Counsel of California.**
  `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=2924.`
  and `...sectionNum=2924.17.` (JSF session cookie seeded from
  `/faces/codes.xhtml`).
- **Publisher B — Public.Resource-derived text at california.public.law.**
  `https://california.public.law/codes/civil_code_section_2924` and
  `.../civil_code_section_2924.17`.

Comparison result: identical word for word; they differ only in whitespace
around subdivision markers (`(6)An entity` vs `(6) An entity`), which
whitespace normalization collapses.

## Normalization applied (disclosed in every clause `gap`)

Before comparison, both sides of every pair were normalized for benign
extraction artifacts only:

- soft hyphens removed; hyphen-plus-line-break joined (line-wrap
  de-hyphenation);
- `fi`/`fl` ligatures expanded; non-breaking spaces converted to spaces;
- curly quotation marks and apostrophes folded to ASCII; en/em dashes folded
  to `-`/`--`;
- **the slip PDFs' font mapping**, which emits U+2015 for an opening double
  quotation mark, U+2016 for a closing one and U+2017 for an opening single
  quotation mark, folded to ASCII quotes;
- runs of whitespace collapsed to a single space.

No word, number or punctuation mark was otherwise altered. One consequence of
de-hyphenation is recorded in the clause `yvvoid_who_may_direct_sale`: the
slip PDF wraps "well-established" across a line, so de-hyphenation yields
"wellestablished" where the Official Reports read "well-established". That
sentence is therefore paraphrased, not quoted.

## Defects disclosed rather than corrected

**(a) The official slip opinion in *Yvanova* misspells a case name the
Official Reports print correctly.** Footnote 14 of the courts.ca.gov slip PDF
for S218973 cites "**Leuras** v. BAC Home Loans Servicing, LP (2013) 221
Cal.App.4th 49, 86, fn. 14". Both pdfminer.six and pypdf read it that way, so
it is not an extraction error. The Official Reports text republished by
CourtListener reads "**Lueras**". Index confirmation:
`q=cluster_id:3178579 AND "Lueras v. BAC Home Loans Servicing"` → count **1**;
a corpus-wide `q="Leuras v. BAC Home Loans Servicing"` → count **0**; and a
search for the underlying case returns *Lueras v. BAC Home Loans Servicing,
LP*, 221 Cal.App.4th 49. The Reporter of Decisions corrected the slip.
Disclosed in the `gap` of `yvvoid_statute_2924_a6`.

**(b) The two published copies of *Yhudai* disagree on a word.** The slip PDF
for B262509 reads "Based on the authorities cited above **indicate**, a
postclosing assignment of a loan to an investment trust ... renders the
assignment voidable, not void, under New York law." — ungrammatical, and read
identically by both extractors. The Official Reports text republished by
CourtListener omits "indicate". Index confirmation:
`q=cluster_id:4242947 AND "Based on the authorities cited above, a postclosing assignment"`
→ count **1**; `q=cluster_id:4242947 AND "authorities cited above indicate"` →
count **0** (this query was first throttled with HTTP 429 and re-run after
waiting). The quoted span in the clause begins after the point of divergence
and is verbatim in both. Disclosed in the `gap` of `yvvoid_post_yhudai`.

**(c) The CourtListener republication of the Official Reports carries optical
scan damage that the official slip PDFs do not.** In *Yvanova*: "Lebruary 28,
2012" for "February 28, 2012"; "dishnct" for "distinct"; "{Jenkins)" and
"{Id. at p. 514.)" with a brace for an opening parenthesis; the possessive apostrophe dropped at
at least six points ("plaintiffs allegations" ×2, "plaintiffs authority",
"plaintiffs note", "plaintiffs petition", "plaintiffs property"); and, in
footnote 13, "Wells Fargo **Batik**,
N.A.." and "Mortgage Electronic Registration Systems**.** Inc." In *Yhudai*:
"Embobo" once for "Erobobo". Index confirmations:
`cluster_id:3178579 AND "dishnct"` → **1**;
`cluster_id:3178579 AND "distinct question of whether"` → **0**;
`cluster_id:3178579 AND "dated February 28, 2012"` → **0**;
`cluster_id:4242947 AND "Embobo"` → **1**. So the damage is in that
publication's stored text, not in this extraction. Every quoted span was
checked to be free of it in both publications; two quotes
(`yvvoid_presale_reserved`, `yvvoid_disapproved_decisions`) were deliberately
truncated to start after or to exclude a damaged word rather than silently
correcting it. Disclosed in the `gap`s of `yvvoid_holding`,
`yvvoid_presale_reserved` and `yvvoid_disapproved_decisions`.

**(d) The Official Reports opening paragraph and the slip differ in
capitalization.** The slip opens the framing of the issue with lowercase
"whether the borrower on a home loan..."; the Official Reports print
"Whether". The clause quotes instead the later passage reciting the order
limiting review, where the two agree character for character. Disclosed in the
`gap` of `yvvoid_question_presented`.

**(e) Footnote relocation defeats star pagination, so three quotes carry no
page pin cite.** The CourtListener mirror moves all of *Yvanova*'s footnotes
into a block after the end of the main text. The star marker preceding
footnote 4 in that block reads \*943 — the opinion's last page, not the page on
which footnote 4 is printed in the bound reports — and a second \*942 appears
inside footnote 14, after \*943 in the linear text. The slip PDF is not
star-paginated. Rather than infer page numbers, the two footnote-4 quotes and
the footnote-13 quote are cited as "62 Cal.4th 919, fn. 4 (2016) (no page pin
cite; see gap)" and "fn. 13", with the reason recorded in the clause `gap`s.
Every other pin cite in the document was read off star pagination in the
CourtListener text, not from memory.

## Negative results recorded in the clauses

- *Yvanova* expressly reserved: whether the plaintiff must allege **tender**
  (fn. 4); **prejudice as an element** of the wrongful foreclosure tort
  (fn. 4 and p. 937); the **substantive elements** of the tort generally
  (p. 924); whether a borrower may bring a **pre-sale** injunctive or
  declaratory action (p. 934); and whether a **post-closing-date transfer**
  into a New York securitized trust is void or merely voidable (p. 931), on
  which it expressed no opinion as to *Glaski*'s correctness.
- The Court also declined to decide whether the 2012 Homeowner Bill of Rights
  provisions it identified (Civ. Code §§ 2924(a)(6), 2923.55(b)(1)(B)(iii),
  2924.17(b)) furnish additional support for its holding (p. 942).
- **Amendment postdating the opinion:** Civil Code § 2924 has been amended
  since 2016, most recently by Stats. 2024, ch. 142 (AB 295). The
  subdivision (a)(6) text quoted in the clause is the current text as fetched
  on 2026-09-14 from both publishers, and it matches the language *Yvanova*
  quoted in footnote 14.

## Intermediate-court and out-of-state authority

Every proposition drawn from *Glaski*, *Jenkins*, *Siliga*, *Fontenot*,
*Herrera*, *Culhane*, *Reinagel*, *Rajamin*, *Erobobo*, the Restatement
Second of Contracts, *Little v. CFS Service Corp.* and *Colby v. Title Ins.
and Trust Co.* is described **only as the California Supreme Court (or, for
*Erobobo*, the California Court of Appeal in *Yhudai*) reproduced it**, and
none of those sources is quoted independently or treated as California
authority. This is stated in the `gap`s of `yvvoid_void_vs_voidable`,
`yvvoid_nonparty_and_prejudice_objections`, `yvvoid_presale_reserved` and
`yvvoid_post_yhudai`.

*Sciarratta* and *Yhudai* are published California Court of Appeal decisions
and are quoted directly, but each `gap` states the district, states that the
decision is not Supreme Court authority, does not bind other districts, and
answers a question *Yvanova* expressly left open.

## Egress notes

Justia (`law.justia.com`) returned HTTP 403 and was not usable as a third
publisher. `california.public.law` requires following a 301 from the
`ca_civ_code_section_*` path to `civil_code_section_*`. A CourtListener search
query was throttled once (HTTP 429, "available in 760 seconds") and re-run
successfully in the same turn.

## Validation

Script asserts: both data files parse; clause ids unique; document ids unique;
document titles unique; every `clauseOrder` entry resolves to a clause; every
authority clause has a non-empty `gap` and at least one citation with a
non-empty quote; no orphan clauses; no `{{placeholder}}` used in any body or
gap that the owning document does not declare in `fields`; canonical key order
for authority clauses (`id, title, kind, status, checkedDate, body, gap,
citations`), drafting clauses (`id, title, kind, body`), citations
(`case, cite, url, quote`) and documents
(`id, title, description, categories, clauseOrder, fields`).

Result: **0 errors**, 6,328 clauses, 721 documents.

Quote read-back from the written `data/clauses.json`: **29 of 29** citation
quotes are verbatim substrings of every normalized fetch of their source
(3 fetches each for the three opinions — CourtListener plus two independent
extractions of the official slip PDF; 2 fetches each for the two statutes).

Clause split counted from the written file: **15 clauses — 13 authority,
2 drafting — 29 citations.**
