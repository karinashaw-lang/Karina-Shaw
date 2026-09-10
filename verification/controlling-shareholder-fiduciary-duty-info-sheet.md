# Business Formation, new document: Controlling Shareholder Fiduciary Duty to Minority Shareholders — Information Sheet

Wave 154 (Business Formation category), continuing the round-robin also
covered by waves 146/148/150/152.

## Why this document

The corpus's Business Formation category (80 documents before this
wave) covers directors' duties (duty of care / business judgment rule,
self-dealing under § 310, indemnification), the procedural side of
derivative suits (§ 800), involuntary dissolution (§§ 1800–1809, § 2000),
alter ego liability, and LLC and limited-partnership fiduciary duties —
but nothing on the fiduciary duty that California case law imposes on
*controlling shareholders as such*. Grepped both data files for
"Ahmanson", "Jones v. H. F.", "controlling shareholder", "majority
shareholder", "minority shareholder", "squeeze", "freeze-out", "Jara",
"Sheley": zero hits for the doctrine and its cases (the two "minority
shareholder" hits are in unrelated contexts). This is the
shareholder-level counterpart to the existing director-level documents
and a natural companion to the derivative-lawsuit document, which
covers the § 800 procedure but not the Jones test for *whether* a claim
is derivative at all.

## What this document covers

11 clauses: 2 drafting (purpose declaration, closing/signature) and 9
authority clauses:

- **`ctrlsh_fiduciary_duty_rule`** — the Jones v. H. F. Ahmanson & Co.
  (1969) 1 Cal.3d 93, 108 rule (majority shareholders, singly or in
  concert, owe the minority and the corporation a duty to use control
  fairly; may not benefit themselves alone or to the minority's
  detriment; use of control must benefit all shareholders
  proportionately), corroborated by Jara v. Suprema Meats, Inc. (2004)
  121 Cal.App.4th 1238 and Sheley v. Harrop (2017) 9 Cal.App.5th 1147.
- **`ctrlsh_inherent_fairness_standard`** — the "comprehensive rule of
  inherent fairness" (Jones at 110) and the Remillard / Pepper v.
  Litton burden-of-proof and "arm's length bargain" language Jones
  reproduces at 108–109.
- **`ctrlsh_scope_of_the_duty`** — the rule "applies alike" to
  officers, directors and controlling shareholders, reaches statutory
  powers (In re Security Finance dissolution holding as summarized by
  Jones) and dealings in the control block itself (control-premium
  scrutiny, Jones at 117); closely-held-corporation vulnerability
  (Jones at 111).
- **`ctrlsh_jones_holding_on_its_facts`** — the holding-company
  scheme and the court's express limits on its holding (Jones at
  114–115).
- **`ctrlsh_individual_vs_derivative`** — the "gravamen of the
  complaint" test, disapproval of Shaw v. Empire Sav. & Loan, and the
  rule that an individual wrong need not be unique (Jones at 106–107).
- **`ctrlsh_jara_applying_the_test`** — Jara's application: excessive
  compensation retaining a disproportionate share of ongoing value is
  an individual claim; mismanagement (Nelson v. Anderson, as Jara
  describes it) is derivative (Jara at 1252, 1255, 1258–1259).
- **`ctrlsh_elements_and_director_overlap`** — elements of the claim
  and the overlap with Corp. Code § 309(a) when controllers are also
  directors (Sheley at 1171; § 309(a)).
- **`ctrlsh_remedy_in_jones`** — the remedy fashioned in Jones
  (117–118).
- **`ctrlsh_statutory_backdrop_1800`** — Corp. Code § 1800(b)(4)–(5)
  ("persistent unfairness" by "those in control"; small-corporation
  ground) as the statutory backdrop, cross-referencing the existing
  involuntary-dissolution document.

## Method — independent double-fetch

**Statutes.** Corp. Code §§ 309 and 1800 each fetched twice from
`leginfo.legislature.ca.gov` via `curl` with two distinct User-Agent
strings (`Mozilla/5.0 (Windows NT 10.0; Win64; x64)
GroundtruthResearchBot/1.0` and `curl/8.5.0 GroundtruthAgent2`). All
four fetches returned HTTP 200; after tag-stripping, entity-unescaping
and whitespace normalization the two extracted statutory texts for each
section were programmatically confirmed byte-identical.

**Case law.** Every other host tried for a second, non-CourtListener
copy of the opinions was unreachable from this environment: Justia
returned HTTP 403 to both curl and WebFetch; `static.case.law`,
Google Scholar and anylaw were blocked at the proxy (CONNECT 403);
CourtListener's own HTML opinion page returned a 202 bot-challenge to
curl and a blank page to WebFetch; and CourtListener's anonymous REST
API was throttled/401. The two independent fetches for each opinion
were therefore made through two *different CourtListener API paths*
via the CourtListener MCP server:

1. `get_endpoint_item` on the `opinions` endpoint (fields
   `plain_text` + `html_with_citations`) — Jones opinion id 1123091,
   Jara opinion id 2259573, Sheley opinion id 4154134 (cluster
   4376881). These full texts were saved locally and are the texts
   every quote was programmatically checked against.
2. `read_document` (Jones, chunks 1–4 covering pp. 105–112) and
   `search_document` (literal grep against the server-side
   `html_with_citations`), used as the second fetch: each key quoted
   passage was re-located on the server and the returned snippet
   compared by eye with the locally saved text. Passages re-located
   this way: Jones — proportionality rule (p. 108), Remillard /
   inherent-fairness passages (108–110), "rule applies alike" and
   Security Finance summary (110), closely-held passage (111),
   "Alternatives were available" / "In so holding" / "Nor do we
   suggest" (114–115), control-premium passage (117), derivative test
   and "Although she does allege" / "individual wrong" / "incidential"
   passage (106–107), remedy passage (117–118); Jara — "parties do not
   question" (1252), Nelson description (1255), gravamen passage
   (1258), policy passage (1259), "We see nothing in Jones" (1259);
   Sheley — elements passage and "owed respondent a fiduciary duty"
   (1171). All matched.

This is disclosed candidly: both fetches come from the same upstream
corpus (CourtListener), obtained through distinct endpoints and
representations (`plain_text` vs `html_with_citations`), which is the
strongest independence obtainable from this environment.

## Quote-by-quote verification

All 31 citation quotes (24 Jones/Jara/Sheley + 1 § 309 + 2 § 1800,
across 9 authority clauses — counted programmatically) were checked as
exact substrings of the normalized fetched text (nbsp → space,
whitespace collapsed on both sides — benign line-wrap normalization
only). 31/31 passed.

Genuine source characteristics disclosed in `gap` fields rather than
silently normalized:

- **"incidential"** — the CourtListener text of Jones at p. 107 reads
  "If the injury is not incidential to an injury to the corporation";
  reproduced verbatim and flagged in
  `ctrlsh_individual_vs_derivative`'s gap as an apparent
  typographical artifact (official reporter not separately checked).
- **Sheley colon discrepancy** — CourtListener's `plain_text` (slip
  opinion) reads "are: (1) the existence…" while `html_with_citations`
  (reporter-derived, page-numbered) reads "are (1) the existence…".
  The quote follows the reporter-derived text; the difference is
  disclosed in `ctrlsh_elements_and_director_overlap`'s gap. Pin cite
  1171 taken from the `star-pagination` labels (`*1171` … `*1172`)
  bracketing the passage in the HTML text — *not* from the
  `id="b1162-…"` block anchors, which are scan-block ids and were
  initially misread as reporter pages before the star labels were
  checked; the same star-label check fixed the pin for Jara's
  policy passage from 1258 to 1259 and Jones's "Alternatives were
  available" sentence from 114 to 115. All 28 case pin cites were
  then re-derived from star-pagination labels programmatically and
  confirmed to match the `cite` fields exactly.
- **Headnote markers** — Jones's text carries reporter headnote
  numbers "(7)", "(9)", "(10)", "(16)", "(17)", "(19a)", "(20)"
  between sentences; quotes were cut so as not to span them, and the
  gap of `ctrlsh_inherent_fairness_standard` says so.
- **Star pagination** — the "equity demands that *118 the minority…"
  sentence spans a page break; the quote starts after the marker (a
  verbatim fragment) rather than normalizing the marker away.
- **§ 1800(a)(2)'s "33 1/3 percent"** renders on leginfo with
  fraction spacing ("33 1 / 3"); paraphrased in the body, not quoted,
  and disclosed.
- Curly apostrophes in Jara ("Jara, Sr.'s", "corporation's") are
  preserved as the source has them.

## Schema validation

Read `data/clauses.json` and `data/documents.json` first. Authority
clauses use exactly
`{id,title,kind,status,checkedDate,body,gap,citations:[{case,cite,url,quote}]}`;
drafting clauses exactly `{id,title,kind,body}`; the document
`{id,title,description,categories,clauseOrder,fields}`. Verified by
key-set equality before merging — all 11 clauses conform.

Field reuse: `companyName`, `entityType`, `shareholderName`,
`transactionDescription`, `ownershipPercentage`, `dateSigned`,
`cityState` all already exist as field ids elsewhere in the corpus
(the first four and last two are the Shareholder Derivative Lawsuit
document's set; `ownershipPercentage` is used generically elsewhere).
No new field ids.

## Corpus-wide validation (after merge)

Script confirmed: both files parse; no duplicate clause ids (5,167
total); no duplicate document ids or titles (633 total); every clause
id in every document's `clauseOrder` exists; every `{{placeholder}}` in
every document's clause bodies resolves to a declared field of that
document; no `{{` leakage in the new clauses' `title`/`gap` or any
citation `case`/`cite`/`url`/`quote`. All clean.

## Net changes

- New document: Controlling Shareholder Fiduciary Duty to Minority
  Shareholders — Information Sheet
  (`controlling_shareholder_fiduciary_duty_info_sheet`), 11 clauses
  (9 authority + 2 drafting), Business Formation. No new fields.
- Corpus: 5,156 → 5,167 clauses; 632 → 633 documents; Business
  Formation 80 → 81. Wave 154, Business Formation.
