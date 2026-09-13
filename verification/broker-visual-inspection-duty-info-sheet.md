# Real Estate, new document: A Seller-Side Broker's Duty to Inspect and Disclose — Information Sheet

## Why this document

Real Estate slot of wave 172 (the round-robin's Confidentiality & IP /
Ending employment / Business Formation / Real Estate rotation, the same
four categories waves 146/148/…/170 covered). The corpus held 89 Real
Estate documents before this one, and the obvious residential-sale
disclosure angles were taken: the Real Estate Transfer Disclosure
Statement (Civ. Code § 1102 et seq.), natural hazard disclosure,
death-on-property disclosure, mold, bed bugs, meth/fentanyl
contamination, smoke alarms, water-conserving fixtures, the structural
pest control report, home inspector standards of practice (Bus. & Prof.
Code §§ 7195-7199), and agency-relationship disclosure (Civ. Code
§§ 2079.13-2079.24).

What was open was **the broker's own duty to look at the property** —
Civ. Code § 2079 and the article around it, and the case that produced
it, *Easton v. Strassburger* (1984) 152 Cal.App.3d 90. The corpus
itself pointed at the hole: the existing `agencydisc_scope` clause
mentions the visual-inspection duty only to say that it is a *separate
and narrower* duty "quoted here only for contrast," expressly not the
subject of that sheet.

Pre-merge greps of both data files returned: zero hits for "Easton",
"Strassburger", "Holmes v. Summer", "Padgett", "2079.3", "2079.4",
"2079.5"; two hits for "2079.2" (both inside the `agencydisc_scope`
contrast passage and its gap); and the § 2079 text appearing exactly
once, in that same contrast clause. "visual inspection" hit 27 times,
all in the balcony/EEE inspection sheet, the agency contrast clause, an
employer-exit-search wage clause, and a bed-bug notice clause — never
as the broker's duty in its own right. Other candidates were ruled out
by grep as already covered or already written: the homestead exemption
(`homestead_exemption_info_sheet`), relief from forfeiture (no document,
but see below), agreed boundaries (`boundary_line_agreement_info_sheet`),
easement by necessity (`prescriptive_easement_necessity_info_sheet`),
mechanics lien procedure (preliminary notice and waiver/release
documents), and the Megan's Law database notice of Civ. Code § 2079.10a
(16 hits across existing lease documents). Relief from forfeiture under
Code Civ. Proc. § 1179 is genuinely uncovered and remains available for
a future wave.

Document id: `broker_visual_inspection_duty_info_sheet`.

## What this document covers

12 clauses: 2 drafting (purpose/parties, factual record) and 10
authority clauses, with 32 verified citations drawn from 9 Civil Code
sections and 5 published California opinions.

- **`brokerinsp_statutory_duty`** — Civ. Code § 2079(a) in full (the
  duty owed to a *prospective buyer*, not a client; the one-to-four-unit
  and manufactured-home trigger; the written-contract-with-the-seller
  and cooperating-broker conditions) and § 2079(b)'s companion duty to
  comply with professional-conduct regulations.
- **`brokerinsp_easton_origin`** — *Easton v. Strassburger* (1984) 152
  Cal.App.3d 90, 102, 104 on the affirmative duty to inspect and on the
  jury needing only to find that a competent inspection *would have*
  uncovered the soils history, plus Civ. Code § 2079.12(a)(4) and (b),
  the Legislature's own statement that §§ 2079-2079.6 are a definition
  of the *Easton* duty and are "declarative of the common law."
- **`brokerinsp_covered_transactions`** — Civ. Code §§ 2079.1 (leases
  with an option to purchase, ground leases, real property sales
  contracts) and 2079.6 (the public-report subdivision-sale exception
  and its "previously occupied" limit).
- **`brokerinsp_standard_of_care`** — Civ. Code § 2079.2, with *Field
  v. Century 21 Klowden-Forness Realty* (1998) 63 Cal.App.4th 18, 24 on
  the statute limiting the *Easton* inspection to a visual one and on
  there being no obligation to investigate public records or permits.
- **`brokerinsp_inspection_limits`** — Civ. Code § 2079.3's exclusions,
  with *Wilson v. Century 21 Great Western Realty* (1993) 15
  Cal.App.4th 298, 308 applying them (no duty to order a radiograph
  examination for reinforcing steel; the *Easton* distinction).
- **`brokerinsp_seller_supplied_information`** — *Robinson v. Grossman*
  (1997) 57 Cal.App.4th 634, 643-644: § 2079 carries no duty to verify
  or disclaim the seller's representations; the agent must act in good
  faith and not pass on representations without a reasonable basis for
  believing them true.
- **`brokerinsp_buyer_own_care`** — Civ. Code § 2079.5 with *Easton* at
  p. 103 on the buyer's retained duty of reasonable care and on defects
  so clearly apparent that non-disclosure would not be negligent.
- **`brokerinsp_two_year_limit`** — Civ. Code § 2079.4's two-year
  outside limit measured from the statutory "date of possession," with
  *Field*'s footnote 12 on which claims that period reaches.
- **`brokerinsp_buyers_own_broker`** — *Field* at p. 26 on a broker's
  fiduciary duty to its own client being potentially "much broader"
  than the visual inspection, including title records § 2079 excludes.
- **`brokerinsp_other_duties_untouched`** — Civ. Code § 2079.7(b) (the
  booklet neither increases nor decreases duties) and *Holmes v.
  Summer* (2010) 188 Cal.App.4th 1510, 1515, 1520 on a listing broker's
  duty to disclose an impediment to conveying clear title.

## Genuine findings

- **A statutory text that reads as though a word is missing, quoted as
  written.** Civ. Code § 2079.1 says "The provisions of this article
  relating sale transactions of residential real property…" — not
  "relating *to* sale transactions." Both fetch paths (individual
  section page and whole-article page) return the same wording, and it
  has stood since Stats. 1985, Ch. 223. The clause quotes it verbatim
  and its gap says explicitly that this is the statute's own wording,
  not a transcription error introduced here.
- **The statute has drifted away from the opinions that construe it.**
  The current § 2079(a) speaks of a "prospective buyer of residential
  real property *improved with* one to four dwelling units" and of
  facts "that an investigation would reveal" (Stats. 2019, Ch. 310,
  § 8, AB 892). *Wilson* (1993), *Robinson* (1997) and *Field* (1998)
  all quote an earlier text: "prospective purchaser of residential real
  property *comprising* one to four dwelling units" and "such an
  investigation." Likewise § 2079.3 now reads "inaccessible to *this
  type of an* inspection" where those opinions quote "inaccessible to
  *such an* inspection." No opinion quotation was silently modernised;
  the divergence is stated in the `brokerinsp_statutory_duty`,
  `brokerinsp_standard_of_care` and `brokerinsp_inspection_limits`
  gaps.
- **A footnote marker inside the sentence that states *Easton*'s
  holding.** CourtListener's scan-derived text of *Easton* at p. 102
  carries an inline footnote reference number between "residential" and
  "property" ("…inspection of the residential 8 property listed for
  sale…"). Rather than delete a character from a quotation, the clause
  quotes the sentence in two verbatim pieces that break at the marker,
  with the word "property" appearing between them outside the quotation
  marks; the `brokerinsp_easton_origin` gap says so.
- **A footnote is labelled as a footnote.** The two-year-limit clause
  relies on *Field*'s footnote 12, not on its holding text. The gap
  says the sentences come from footnote 12, gives the page numbers as
  read from star pagination, notes that a footnote is reasoning rather
  than the operative holding (which was that § 2079.4 did not bar the
  buyers' action against their own broker), and records that *Field*
  itself cites *Loken v. Century 21-Award Properties* (1995) 36
  Cal.App.4th 263 applying § 2079.4 to negligence and
  negligent-misrepresentation claims against a seller's broker.
- **OCR noise located and avoided.** CourtListener's *Robinson* text
  garbles the bracketed paragraph markers in its long quotation of the
  legislative-intent statute ("[*][]… [%"). No quotation in this sheet
  comes from that passage; the legislative-intent language is quoted
  from leginfo's text of § 2079.12 instead, and the
  `brokerinsp_seller_supplied_information` gap records why.
- **Punctuation moved outside quotation marks, not inside the quote.**
  Six quoted fragments in draft clause bodies, and one in a draft gap,
  ended with a comma where the source has a period; each was rewritten
  so the quoted words reproduce the source exactly, with the comma
  outside the closing quotation mark (and in one place by starting the
  *Holmes* quotation at "have been held to have a duty…" rather than at
  the court's "we observe that"). A scripted check now confirms every
  quoted fragment in the new bodies and gaps appears verbatim in a
  fetched source.
- **A procedural posture stated.** *Holmes* reached the Court of Appeal
  on a demurrer, so the court assumed the buyers' allegations true and
  held only that a duty could be owed on those facts. The gap says so
  rather than letting "the brokers were obligated to disclose" read as
  a finding of breach.

## Honest gap(s) disclosed

This sheet reports duties, not remedies: § 2079 states a duty and no
measure of damages, and no clause supplies one. It does not say what
counts as a "red flag" on any property (*Easton* uses the phrase for
what the agents in that case saw, and the gap says the opinion supplies
no list), does not say which limitations period governs any particular
theory of liability, does not address dual agency, does not address
intentional fraud or concealment (*Robinson*'s holding is expressly
about negligence and negligent misrepresentation), and does not
evaluate any actual sale, broker, or condition. Cases named inside the
quoted passages — *Loken*, *Salahutdin v. Valley of California*,
*Padgett v. Phariss*, *Lingsch v. Savage*, *Brady v. Carman* — were not
separately fetched; each is attributed in the relevant gap to the
fetched opinion in which its language was read, and none is treated as
independently corroborated.

**One disclosure about the double fetch itself.** For the five
opinions, no second *publisher's* text was obtainable: Justia,
FindLaw, Google Scholar and case.law are all egress-blocked from this
environment. Each opinion was therefore fetched twice from
CourtListener by two different routes and header sets (details below),
which verifies the retrieval rather than the reporter. Every authority
clause citing an opinion says this in its `gap`.

## Method

**Statutes.** Civ. Code §§ 2079, 2079.1, 2079.2, 2079.3, 2079.4,
2079.5, 2079.6, 2079.7 and 2079.12 were each fetched twice by curl
through the environment proxy, by two independent paths: the individual
section page
(`codes_displaySection.xhtml?lawCode=CIV&sectionNum=…`) with a
Chrome/Windows User-Agent, and the page for the whole article
containing them (`codes_displayText.xhtml?lawCode=CIV&division=3.&title=6.&part=4.&chapter=3.&article=2.`,
Civil Code Division 3, Part 4, Title 6, Chapter 3, Article 2 [2079 -
2079.25]) with a Firefox/Linux User-Agent and a different Accept
header. The extracted text of every quoted passage was identical across
the two paths after nbsp conversion and whitespace collapsing.

**Case law.** No CourtListener MCP tool was used; the shared MCP quota
was left untouched. *Easton* was located through the public
unauthenticated search API
(`/api/rest/v4/search/?type=o&q="Easton v. Strassburger"&court=calctapp`),
which returned cluster `2125100`, and its opinion page was then fetched
twice with two distinct header sets (Chrome/Windows and Firefox/Linux
User-Agents, different Accept and Accept-Language headers, `Referer:
https://www.courtlistener.com/` on both). The other four opinions were
resolved without spending any API quota, through CourtListener's
citation redirect `/c/Cal.App.4th/<volume>/<page>/`:

| Case | Citation | Redirect resolved to |
| --- | --- | --- |
| *Wilson v. Century 21 Great Western Realty* | 15 Cal.App.4th 298 | `/opinion/2289821/` |
| *Robinson v. Grossman* | 57 Cal.App.4th 634 | `/opinion/2307224/` |
| *Field v. Century 21 Klowden-Forness Realty* | 63 Cal.App.4th 18 | `/opinion/2252257/` |
| *Holmes v. Summer* | 188 Cal.App.4th 1510 | `/opinion/2278072/` |

Each of those four was fetched a first time through the citation
redirect (Chrome/Windows headers) and a second time directly from the
resolved opinion URL (Firefox/Linux headers, different Accept and
Accept-Language). For all five opinions the extracted text of the two
fetches was byte-identical.

**Phrase-level third check.** Two load-bearing quotations were
additionally confirmed through CourtListener's public search feed with
`cluster_id:<id> AND "<exact phrase>"` queries: the *Easton* holding
phrase (cluster `2125100`) and the *Robinson* good-faith sentence
(cluster `2307224`). Each returned exactly one hit, the expected
cluster. The same check for *Wilson*, *Field* and *Holmes* could not be
run: the shared CourtListener API returned HTTP 429 with
`"Rate limit exceeded: 125/day"` and an expected-availability window of
roughly eight hours. That third check is supplementary; the required
double fetch for those three opinions was completed by the two routes
described above.

**Quote verification.** A script re-extracted all nine statutory
section pages, the whole-article page, and both fetches of all five
opinions, and checked every one of the document's 32
`citations[].quote` values, whitespace- and nbsp-normalized, against
both fetches of its source. All 32 matched verbatim in both. A second
pass checked every double-quoted fragment appearing in the new clause
bodies (35 fragments) and in the gaps (16 fragments) against the same
sources; all matched after the punctuation fixes described above.

**Corpus validation.** Both data files parse; all clause ids and
document ids are unique; every `clauseOrder` entry across all 705
documents resolves to an existing clause; every `{{placeholder}}` in
the new clauses' bodies and gaps resolves to a declared field
(`propertyAddress`, `county`, `buyerName`, `sellerName`, `brokerName`,
`conditionDescription`, `possessionDate`, `recordDate` — all eight
declared fields are used). Authority clauses use the exact key order
`id, title, kind, status, checkedDate, body, gap, citations` with
non-empty gaps, drafting clauses use exactly `id, title, kind, body`,
each citation uses exactly `case, cite, url, quote`, and the document
uses `id, title, description, categories, clauseOrder, fields`. The
diff against both data files is purely additive (386 inserted lines, 0
deleted). Corpus after merge: 705 documents, 6,093 clauses, 90 Real
Estate documents.
