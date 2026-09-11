# Business Formation, new document: Corporate Opportunity Doctrine — Information Sheet

Wave 156 (Business Formation category), continuing the round-robin also
covered by waves 146/148/150/152/154.

## Why this document

The corpus's Business Formation category (81 documents before this
wave) covers directors' duty of care and the business judgment rule,
self-dealing under § 310, indemnification, controlling-shareholder
duties (Jones v. Ahmanson), derivative suits, alter ego liability,
charging orders, shareholder and director inspection rights, and the
statutory fiduciary duties of LLC members/managers and limited-
partnership general partners — but nothing on the *corporate
opportunity doctrine*, the duty-of-loyalty rule that a director,
officer, or other corporate fiduciary may not take for personal
benefit a business opportunity in which the corporation has an interest
or expectancy. Grepped both data files for "corporate opportunity",
"usurp", "Kelegian", "Thompson v. Price", "Industrial Indem", "New v.
New", "Xum Speegle", "Bancroft-Whitney", "line of business": zero hits
for the doctrine and its cases (the two "line of business" hits and the
existing "appropriation of a partnership opportunity" quotation in the
LP fiduciary-duty document are incidental and do not describe the
doctrine). The other candidates named in the wave brief (shareholder
inspection rights, alter ego, charging orders) were checked and are
already covered by existing documents.

## What this document covers

11 clauses: 2 drafting (purpose declaration, closing/signature) and 9
authority clauses:

- **`corpopp_doctrine_stated`** — the doctrine as stated in Kelegian v.
  Mgrdichian (1995) 33 Cal.App.4th 982, 988–989 (adopting 3 Fletcher
  § 861.10) and in Thompson v. Price (1967) 251 Cal.App.2d 182, 189–190
  (reproducing New v. New (1957) 148 Cal.App.2d 372, 384–385, quoting
  Industrial Indemnity Co. v. Golden State Co. (1953) 117 Cal.App.2d
  519, 533, on Guth v. Loft).
- **`corpopp_three_tests`** — line-of-business, interest-or-expectancy,
  and fairness tests; "reasonably incident to the corporation's present
  or prospective business" and "capacity to engage"; no single factor
  (Kelegian at 988–989).
- **`corpopp_interest_or_expectancy_factors`** — the "beachhead"
  formulation, hinder-or-defeat-corporate-plans and financial-resources
  considerations (Kelegian at 990, quoting Fletcher § 861.30); the
  "needs and situation of the corporation, its financial ability and
  fair expectation" factors (Thompson at 190).
- **`corpopp_fairness_and_question_of_fact`** — fairness basis of the
  doctrine, "mainly for the trier of the facts" (Thompson at 190);
  "simply a substantial evidence case" (Kelegian at 990).
- **`corpopp_permitted_outside_activity`** — the doctrine "does not
  exclude the fiduciary from all business activity of his own in the
  field"; limit on competing businesses; Thompson's affirmance of the
  no-usurpation finding on its facts (Thompson at 190–191).
- **`corpopp_director_purchase_of_shares`** — Kelegian's holding that a
  director's purchase of the corporation's own shares is not a
  corporate opportunity absent a corporate repurchase policy or formal
  corporate action; adoption of Zidell v. Zidell (Or. 1977) (Kelegian
  at 985, 989–990, 992).
- **`corpopp_remedy_accounting`** — "the corporation may claim for
  itself all benefits so obtained"; accounting for profits; the
  derivative posture of Kelegian; Thompson's constructive trust on the
  faithless director's stock (with the gap noting that the constructive
  trust rested on unjust enrichment, not on usurpation) (Thompson at
  189; Kelegian at 985).
- **`corpopp_statutory_llc_partnership_opportunity`** — the codified
  duty to account for "the appropriation of a limited liability company
  / partnership / limited partnership opportunity" in Corp. Code
  §§ 17704.09(b)(1), 16404(b)(1), and 15904.08(b)(1), with
  § 17704.09(e) (conduct furthering own interest) and (f)(3)
  (manager-managed LLCs).
- **`corpopp_director_standard_309`** — Corp. Code § 309(a) and (c) as
  the statutory backdrop for directors, with the gap noting that the
  fetched decisions do not cite § 309.

## Method — independent double-fetch

**Statutes.** Corp. Code §§ 309, 15904.08, 16404 and 17704.09 each
fetched twice from `leginfo.legislature.ca.gov` via `curl` with two
distinct User-Agent strings (`Mozilla/5.0 (Windows NT 10.0; Win64; x64)
GroundtruthResearchBot/1.0` and `curl/8.5.0 GroundtruthAgent2`). All
eight fetches returned HTTP 200; after tag-stripping, entity-unescaping
and whitespace normalization the two extracted statutory texts for each
section were programmatically confirmed byte-identical (`extract.py`),
and all 7 statutory quotes were programmatically confirmed as exact
substrings of the extracted text (`verify_statutes.py`: 7/7).

**Case law.** As in wave 154, every non-CourtListener host tried for a
second copy of the opinions was unreachable from this environment:
Justia returned HTTP 403 to both curl and WebFetch; casetext returned
410; FindLaw 403; leagle, casemine and Google Scholar were blocked at
the proxy (CONNECT 403); CourtListener's own HTML opinion page
returned a 202 bot-challenge (empty body) to curl and a blank page to
WebFetch; and CourtListener's anonymous REST API (v3 and v4) returned
401. In addition, during this wave the CourtListener MCP server's
shared daily quota (125 requests/day, shared with the three parallel
wave-156 agents) was exhausted partway through research, so the fetch
sequence was: (1) Kelegian full text via `get_endpoint_item`
(`opinions` 2263940, `html_with_citations`; `plain_text` is empty for
this opinion) and Thompson full text via `read_document` (opinion
2214462, `html_with_citations`) before the quota ran out; then (2)
after the quota window reset, the second, independent server-side
fetch described below. New v. New (opinion 1392058) and Industrial
Indemnity (opinion 1170520) could not be fetched before the quota ran
out; the document relies on Thompson's verbatim reproduction of their
language and says so in the relevant gap fields.

Second fetch (independent of the MCP quota): CourtListener's *public,
unauthenticated v4 search API*
(`https://www.courtlistener.com/api/rest/v4/search/?type=o&q=…`),
queried with `curl` through the environment proxy under a distinct
User-Agent (`GroundtruthVerifier/2.0`). Each case quote was sent as an
exact-phrase query scoped to the opinion id (`id:<opinion_id> AND
"<quote>"`); a result of `count == 1` with the matching cluster id
means the phrase occurs in that opinion's server-side *search-index*
text (a different representation from the `html_with_citations` field
returned by fetch 1); `count == 0` means it does not. A deliberately
bogus phrase was run as a negative control and returned 0
(`verify_cases_searchapi.py`, `…2.py`, `…3.py`, `probe.py`; logs in
`searchapi_results*.log`). The API's anonymous throttle returned
intermittent 429s, handled by in-turn sleep-and-retry.

Result: 25/25 case quotes confirmed server-side. 23 matched as whole
phrases (after mapping curly apostrophes to straight ones and dropping
em dashes / ellipses, which the phrase parser does not tokenize as the
index does); 2 quotes that contain source ellipses or an em dash
("The question is indeed often a close one … definite rules." and
"However, no California authority addresses … presented here.") were
confirmed as complete sets of word-sequence fragments split only at
those punctuation joints. The locally saved passages
(`case_passages.txt`, transcribed from fetch 1) were used for the
exact-punctuation programmatic pass (`verify_cases_local.py`: 25/25).

The search-index check also surfaced two places where CourtListener's
two representations of the opinions *disagree*, and the quotes were
trimmed in response (see below): the selling director's surname in
Kelegian ("Stem" in the HTML text, "Stern" in the index text), and
the wording of Thompson's question-form heading "Should Price account
for profits made in transactions he entered into …" (the words
"transactions he entered into" do not match in the index text). Both
fetches ultimately come from the same upstream corpus (CourtListener),
obtained through distinct paths (MCP `get_endpoint_item` /
`read_document` on the opinion record versus the public search index),
which is the strongest independence obtainable from this environment.

## Quote-by-quote verification

All 32 citation quotes (25 Kelegian/Thompson + 7 statutory, across 9
authority clauses — counted programmatically) were checked as exact
substrings of the normalized fetched text (nbsp → space, whitespace
collapsed on both sides — benign line-wrap normalization only), and
the 25 case quotes additionally as server-side phrase matches as
described above. 32/32 passed.

Genuine source characteristics disclosed in `gap` fields rather than
silently normalized:

- **"Tine of business’"** — CourtListener's text of Kelegian at p. 988
  renders the first of the three tests as "the Tine of business’ test"
  (scanning artifact for "the ‘line of business’ test"). The quotation
  in `corpopp_three_tests` is cut before the names of the tests, the
  names are stated in the body, and the gap discloses the artifact.
- **"leading ease of Guth v. Loft"** — CourtListener's text of Thompson
  at p. 190 reads "Since the leading ease of Guth v. Loft" ("case").
  The quotation in `corpopp_doctrine_stated` begins after those words
  and the gap discloses the artifact.
- **Ellipses in the source** — the Thompson passage contains "to the
  corporation ... or whether" and "This turns . . . upon" as printed;
  reproduced verbatim and disclosed in
  `corpopp_interest_or_expectancy_factors`.
- **Star pagination** — two quoted sentences span reporter page
  breaks: Kelegian's "Whether or not a given opportunity meets *989 the
  requisite relationship …" (paraphrased, not quoted; disclosed) and
  Thompson's "the nature of J-A-C as an *191 investment tool …"
  (quoted from after the break as a verbatim fragment; disclosed).
- **Curly apostrophes and quotation marks** ("corporation’s",
  "Mgrdichian’s", "shareholder’s", "trial court’s",
  "member’s", "person’s", "limited partnership’s", “beachhead”,
  ‘interest or expectancy’) are preserved as the sources have them.
- **"Stem" / "Stern"** — the HTML text of Kelegian renders the selling
  director's surname "Stem" (the index text has "Stern", which is
  presumably correct). The two quotes that contained the name (pp. 985
  and 992) were cut to exclude it ("should be voided because the
  purchase was a misappropriation of a corporate opportunity."; "The
  record supports the trial court’s finding that the actions of the
  parties belied any corporate interest or intent to repurchase" plus
  "No “beachhead” was established."), the body refers to "a fellow
  director", and the gap of `corpopp_director_purchase_of_shares`
  discloses the discrepancy.
- **Question-form heading** — Thompson's "Should Price account for
  profits made in transactions he entered into while an officer,
  director and attorney for J-A-C ? No." did not match the index text
  at "transactions he entered into"; it is paraphrased rather than
  quoted, the accounting quote was replaced by the next sentence of
  the opinion ("The trial court determined the evidence did not
  justify an accounting."), and the gap of `corpopp_remedy_accounting`
  says so.
- **Pin cites** — all 25 case pin cites were taken from the
  `star-pagination` labels (`*985` … `*992`; `*189` … `*191`)
  bracketing each passage in the `html_with_citations` text, not from
  the `id="b…"` block anchors.

## Schema validation

Read `data/clauses.json` and `data/documents.json` first. Authority
clauses use exactly
`{id,title,kind,status,checkedDate,body,gap,citations:[{case,cite,url,quote}]}`;
drafting clauses exactly `{id,title,kind,body}`; the document
`{id,title,description,categories,clauseOrder,fields}`. Verified by
key-list equality before merging (`merge_validate.py`) — all 11
clauses conform.

Field reuse: `companyName`, `entityType`, `fiduciaryName`,
`transactionDescription`, `businessActivityDescription`,
`preparerName`, `dateSigned`, `cityState` all already exist as field
ids elsewhere in the corpus. One new field id: `fiduciaryRole` (the
person's role with the entity — director, officer, member, manager, or
partner — needed because the document spans entity types).

## Corpus-wide validation (after merge)

Script confirmed: both files parse; no duplicate clause ids (5,251
total); no duplicate document ids or titles (640 total); every clause
id in every document's `clauseOrder` exists; every `{{placeholder}}` in
every document's clause bodies resolves to a declared field of that
document; no `{{` leakage in the new clauses' `title` or any citation
`case`/`cite`/`url`/`quote`. All clean.

## Net changes

- New document: Corporate Opportunity Doctrine — Information Sheet
  (`corporate_opportunity_doctrine_info_sheet`), 11 clauses (9
  authority + 2 drafting), Business Formation. One new field id
  (`fiduciaryRole`).
- Corpus: 5,240 → 5,251 clauses; 639 → 640 documents; Business
  Formation 81 → 82. Wave 156, Business Formation.
