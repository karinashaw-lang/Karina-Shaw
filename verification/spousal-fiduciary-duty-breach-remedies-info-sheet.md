# Family Law, new document: Breach of Fiduciary Duty Between Spouses (Family Code Section 1101 Remedies) — Information Sheet

## Why this document

Wave 153 (Family Law slot), continuing the even round-robin also covering
Hiring, During Employment, and Estate Planning (the same four categories as
waves 145/147/149/151). This category has been flagged in prior waves as
unusually saturated. `data/documents.json` was read in full first: 79
existing Family Law documents were enumerated, and every candidate topic in
the task brief was checked by direct grep of `data/clauses.json` and
`data/documents.json` (both files, not just the category) before choosing:

- **Watts charges / Epstein credits** — already covered
  (`watts_epstein_info_sheet`).
- **De facto parent standing** — already covered
  (`de_facto_parent_status_info_sheet`); third-party/nonparent custody is
  also covered (`third_party_custody_visitation_info_sheet`).
- **Date of separation (Fam. Code § 70 / *In re Marriage of Davis*)** —
  already covered as a verified authority clause inside the Marital
  Settlement Agreement (`msa_date_of_separation`), which quotes § 70(a)-(c)
  in full (including the legislative abrogation of *Davis*) and § 771(a).
  A stand-alone sheet would have re-quoted the same two provisions.
- **Breach of fiduciary duty between spouses / Fam. Code § 1101 remedies**
  — genuinely open. Greps for `1101` in any Family Code context, `Rossi`,
  `Margulis`, `Hokanson`, `Section 1100`, `§ 1100`, and `highest fiduciary`
  returned **zero** Family Law hits. The only existing coverage of the
  underlying duty is one drafting-context clause in the Postnuptial
  Agreement (`postnup_fiduciary_duty`, quoting § 721(b) only) whose own
  `gap` field notes it rests on a single subsection with no independent
  source; nothing in the corpus addresses the § 1101 claim itself, its
  accounting/title-reformation remedies, its limitations period, the
  50 percent / 100 percent asset awards, Civil Code § 3294's incorporation,
  or the *Margulis* burden-shifting rule. (Wave 151's verification note
  listed "interspousal fiduciary duty" as covered by the postnup clauses;
  on inspection that coverage is the § 721(b) duty statement only, not the
  remedial statute, which is the subject here.)

Also confirmed uncovered but passed over as narrower: Moore/Marsden
apportionment, Pereira/Van Camp business apportionment, deferred sale of
home orders (Fam. Code §§ 3800-3810), and Smith/Ostler bonus orders.

## What this document covers

12 clauses: 3 drafting (party statement, scope-distinction, signature) and
9 authority clauses, 26 citations in total, citing Fam. Code §§ 721(a)-(b),
1100(b), (d), (e), 1101(a)-(d), (f)-(h), Civ. Code § 3294(a) and (c),
*In re Marriage of Rossi* (2001) 90 Cal.App.4th 34, and *In re Marriage of
Margulis* (2011) 198 Cal.App.4th 1252:

- **`spfid_fiduciary_duty_source`** — § 721(a) freedom to transact and
  § 721(b) duty of the highest good faith and fair dealing.
- **`spfid_management_duty_disclosure`** — § 1100(e) management-and-control
  fiduciary duty, full disclosure, equal access until division; § 1100(b)
  gift/below-value restriction; § 1100(d) remedies-only-under-§ 1101.
- **`spfid_claim_impairment`** — § 1101(a) claim for impairment of the
  present undivided one-half interest; § 1101(f) action with or without a
  dissolution; *Margulis* at 1270 describing § 1101 as creating a right of
  action and specific remedies.
- **`spfid_accounting_title_remedies`** — § 1101(b) accounting and
  classification; § 1101(c) title reformation and its four exceptions.
- **`spfid_limitations_laches`** — § 1101(d)(1)-(4) in full.
- **`spfid_fifty_percent_remedy`** — § 1101(g) 50 percent award, highest-
  value valuation, fees and costs; *Margulis* at 1270 (mandatory 50 percent
  award); *Rossi* at 43 (bracketed parenthetical on *Hokanson*: fees
  mandatory under (g), discretionary under (h)).
- **`spfid_hundred_percent_remedy`** — § 1101(h); Civ. Code § 3294(a) and
  (c)(1)-(3); *Rossi* at 40 on the clear-and-convincing standard of review.
- **`spfid_rossi_concealment_application`** — *Rossi* at 42-43: intentional
  concealment of lottery winnings, no unclean-hands exception, statute
  unambiguous, purpose of full disclosure, mandatory asset award vs.
  discretionary fees.
- **`spfid_margulis_burden_shift`** — *Margulis* at 1258, 1267, 1268:
  burden shifts to the managing spouse once the nonmanaging spouse makes a
  prima facie showing of missing post-separation assets.

## Independent double-fetch

**Statutes (Fam. Code §§ 721, 1100, 1101; Civ. Code § 3294):** each fetched
twice directly from `leginfo.legislature.ca.gov` via `curl` through the
environment's proxy, using two distinct User-Agent strings:
1. `Mozilla/5.0 (Windows NT 10.0; Win64; x64) Groundtruth-Research/1.0`
2. `curl/8.4.0 Groundtruth-Research-B`

Two of the eight requests (§ 721 with UA 2, § 1101 with UA 1) were reset by
the peer on the first attempt and were retried after a short pause; all
eight ultimately returned HTTP 200. Raw HTML sizes differed slightly between
fetches (dynamic JSF session state), so the `codeLawSectionNoHead` block was
extracted from each fetch independently, tag-stripped, HTML-unescaped, and
whitespace-normalized; the two extracted statute texts were then compared by
direct Python string equality and found **character-for-character
identical** for every section (§ 721: 1,907 chars; § 1100: 3,299; § 1101:
4,063; § 3294: 2,914). The leginfo HTML did contain `&nbsp;` entities
(19/15/28/30 per section); these were normalized to ordinary spaces, which
is the only alteration applied.

**Case law (*Rossi*):** located via `mcp__CourtListener__search` (type "o",
citation "90 Cal. App. 4th 34" — a case-name search for "Marriage of Rossi"
returned nothing because CourtListener titles the cluster "Rossi v.
Rossi"). Single result, `cluster_id` 5808687, `opinion_id` 5664050 (the two
ids differ here). Fetched twice via `mcp__CourtListener__get_endpoint_item`
(endpoint `opinions`, item 5664050; first call requesting
`id`/`cluster_id`/`html_with_citations`/`plain_text`, second requesting
`id`/`cluster_id`/`html_with_citations`). `plain_text` was empty; both
`html_with_citations` payloads returned the same id/cluster and identical
opinion text, reviewed in full in-conversation. The first payload was
transcribed to disk (`rossi_A.html`) and used for programmatic quote
verification.

**Case law (*Margulis*):** located via `mcp__CourtListener__search` (type
"o", citation "198 Cal. App. 4th 1252"; cluster titled
"Prentis-Margulis v. Margulis"). Single result, `cluster_id` 5810544,
`opinion_id` 5665987 (ids differ). Fetched twice via
`mcp__CourtListener__get_endpoint_item` (endpoint `opinions`, item 5665987,
fields `id`/`cluster_id`/`html_with_citations`). Each 100,489-character
payload exceeded the tool's inline limit and was saved to disk by the
harness; the two files were compared by direct Python string equality and
are **byte-for-byte identical** (raw JSON and the `html_with_citations`
field both).

CourtListener's shared 5-requests/minute throttle (consumed concurrently by
the other wave-153 agents) forced these calls to be serialized with pauses;
no fetch was skipped.

## Quote-by-quote verification

All 26 quotations across the 9 authority clauses were checked
programmatically by loading the extracted, whitespace-normalized source text
(statute or opinion, matched by the `citations[].url`) and confirming each
`citations[].quote` is an exact contiguous substring after normalizing only
whitespace runs and nbsp. Result: **26/26 verified present, verbatim.** No
genuine defects were found; no quote required correction or a disclosure
sentence.

Two artifacts worth noting, neither a defect: (1) the *Rossi* parenthetical
at page 43 reads "conduct <em>not </em>amounting" in the source HTML — tag
stripping plus whitespace normalization yields "conduct not amounting",
which is what the quote reproduces; (2) the § 1101(d) quote begins with the
subdivision label "(d) (1)" exactly as it appears in the statute.

Case-law pinpoints: all 12 opinion quotations were checked against the
`*NNNN` page-break markers in the normalized text (last marker preceding the
quote's position); **12/12** pinpoint pages match the `cite` field (Rossi
40, 42, 42, 42, 42, 43, 43; Margulis 1258, 1267, 1268, 1270, 1270).

## Schema and corpus-wide validation

- `data/clauses.json` and `data/documents.json` were read first. Before
  writing, a JSON load/dump round-trip (indent 2, non-ASCII preserved,
  trailing newline) was asserted **byte-identical** to both files, so the
  merge appended without reformatting any existing entry.
- Authority clauses use exactly
  `{id,title,kind,status,checkedDate,body,gap,citations[{case,cite,url,quote}]}`;
  drafting clauses exactly `{id,title,kind,body}` — asserted
  programmatically for all 12 new clauses.
- No `{{...}}` in any new clause `title`/`gap` or any citation field.
- Every `{{placeholder}}` in the new drafting bodies resolves to a declared
  field: `party1Name`, `party2Name`, `marriageDate`, `dateSigned`,
  `cityState` — all five reused field ids already in the corpus; no new
  field introduced.
- `spfid_` prefix: zero collisions with the corpus; document id unique.
- Corpus-wide after merge: both files parse; zero duplicate clause ids;
  zero duplicate document ids; zero missing `clauseOrder` references and
  zero unresolved placeholders across all 629 documents.

## Honest gaps disclosed (in clause `gap` fields)

- Every statutory clause discloses that its quotations come from one
  section (or adjacent subdivisions of one section) and are not independent
  of each other; the § 3294 clause discloses that § 3294 is incorporated by
  reference and that its inapplicable subdivisions are omitted.
- The § 721 clause discloses that it omits the Probate Code exceptions and
  the Corporations Code partner-duty cross-references, and points to the
  Postnuptial Agreement clause that quotes § 721(b) in full.
- The § 1100 clause discloses that subdivisions (a), (c), and most of (d)
  are not reproduced and that community real property (§ 1102) is not
  addressed.
- The claim clause discloses that § 1101(e) (dispensing with consent) is
  not covered.
- The 50 percent clause discloses that the "fees mandatory under (g)" point
  rests on *Rossi*'s bracketed summary of *In re Marriage of Hokanson*
  (1998) 68 Cal.App.4th 987, which was **not** independently fetched, and
  that *Rossi* quoted a pre-2002 version of § 1101(g) that has since been
  amended (the clause relies on the current text).
- Both case-law clauses disclose they rest on a single published opinion,
  that all their quotations are from that one opinion, and that the
  *Rossi* "mandatory asset / discretionary fees" sentence is itself a
  quotation of *Hokanson*; the *Margulis* clause discloses that the court
  described its rule as not previously articulated in any published case.
- This document does not address *In re Marriage of Fossum* (2011) 192
  Cal.App.4th 336 or *In re Marriage of Schleich* (2017) 8 Cal.App.5th 267
  (double-recovery between § 1101 and § 2107), which were considered but
  not fetched because of the CourtListener throttle; the § 2107 disclosure
  sanctions are covered by the existing disclosure sheet and are expressly
  excluded from this document's scope.

## Net changes

- New document: Breach of Fiduciary Duty Between Spouses (Family Code
  Section 1101 Remedies) — Information Sheet
  (`spousal_fiduciary_duty_breach_remedies_info_sheet`), 12 clauses
  (9 authority + 3 drafting), in the Family Law category. No new fields.
- Corpus: 5,104 → 5,116 clauses; 628 → 629 documents. Family Law item of
  wave 153.
