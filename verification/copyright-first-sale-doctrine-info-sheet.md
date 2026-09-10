# Confidentiality & IP, new document: Copyright First Sale Doctrine — Information Sheet

Wave 150 (Confidentiality & IP category), continuing the round-robin wave
150 covers with waves 146 and 148 (Confidentiality & IP, Ending employment,
Business Formation, Real Estate). This worktree adds one document to the
Confidentiality & IP category.

## Why this document

Checked `data/documents.json` for the ~78 existing Confidentiality & IP
documents before starting. The task's suggested example topics were checked
and rejected as already substantively covered:

- Right of publicity surviving death (Civ. Code § 3344.1) — already fully
  covered, alongside the living-person § 3344 right, by the existing
  `right_of_publicity_info_sheet` document (its `publicity_posthumous_*`
  clauses).
- Moral rights in visual art (Cal. Civ. Code § 987, the California Art
  Preservation Act) — already covered by
  `california_art_preservation_act_info_sheet`, and the parallel federal
  Visual Artists Rights Act is separately covered by
  `visual_artists_rights_act_info_sheet`.
- Anti-SLAPP applied to confidentiality/IP disputes — already covered by
  `anti_slapp_confidentiality_ip_disputes_info_sheet`.
- Federal trademark dilution (15 U.S.C. § 1125(c)) — already covered, with
  the statute quoted, in the existing `trademark_cease_and_desist` document's
  `trademarkcd_federal_dilution` clause.
- Trademark genericide/abandonment — already covered across
  `tmlicense_naked_licensing_abandonment`, `tmlicense_cancellation_ground`,
  and `ttab_abandonment_ground` (including the Lanham Act's own nonuse
  presumption).

Also checked and confirmed not covered: the federal copyright "first sale"
doctrine, 17 U.S.C. § 109 — the statutory limit on a copyright owner's
exclusive distribution right once a particular copy has been lawfully sold
or its ownership otherwise transferred. A grep across `data/clauses.json`
found "first sale" mentioned only in the narrow context of the
license-versus-sale test for software (`swlicense_license_vs_sale`,
`swlicense_vernor_factors`, citing *Vernor v. Autodesk, Inc.*) and in a
`Close v. Sotheby's` cite inside the Resale Royalties Act document — no
document addresses § 109's own text (the core rule, the sound-recording/
computer-program rental exception and its nonprofit-library carve-out, the
public display exception, or the owner-only limitation), nor the two leading
appellate decisions applying it that this document covers. This is a natural
companion to the existing `swlicense_vernor_factors` clause (which addresses
the license-vs-sale threshold question for software specifically) and to the
Resale Royalties Act document (which discusses a different, California-law
right that operates downstream of a first sale).

## What this document covers

10 clauses: 3 drafting (purpose, description, signature/acknowledgment) and
7 authority clauses.

- **`cfsale_statute_core_right`** — 17 U.S.C. § 109(a): the core first-sale
  rule limiting the § 106(3) exclusive distribution right.
- **`cfsale_statute_rental_exception`** — 17 U.S.C. § 109(b)(1)(A): the
  sound-recording/computer-program rental restriction, and its nonprofit
  library and educational institution carve-out (two citations, same
  statutory paragraph).
- **`cfsale_statute_display_right`** — 17 U.S.C. § 109(c): the public
  display exception.
- **`cfsale_statute_nonowner_exclusion`** — 17 U.S.C. § 109(d): the
  privileges belong only to an owner, not a renter, lessee, or borrower.
- **`cfsale_case_kirtsaeng_holding`** — *Kirtsaeng v. John Wiley & Sons,
  Inc.*, 568 U.S. 519 (2013): the Supreme Court's "exhaustion" description
  of the doctrine, and its holding that the doctrine applies to copies
  lawfully made abroad (two citations, same opinion).
- **`cfsale_case_augusto_transfer_of_title`** — *UMG Recordings, Inc. v.
  Augusto*, 628 F.3d 1175 (9th Cir. 2011): promotional CDs labeled
  "licensed" were nonetheless found to be a transfer of title, given the
  distributor's lack of control after shipment and the absence of any
  recipient's assent to a license (two citations, same opinion).
- **`cfsale_case_augusto_labeling_not_dispositive`** — *Augusto*'s general
  principle that labeling an arrangement a "license" is a factor courts
  consider, not the deciding factor.

## Sources fetched and dual-fetch confirmation

**Statute — 17 U.S.C. § 109**, fetched twice directly from the official
U.S. Code site (`uscode.house.gov`) via `curl`, using two different
`User-Agent` strings (`GroundtruthResearchBot/1.0 (+legal-research)` and
`curl/8.5.0 GroundtruthResearch/2`). The two raw HTML responses (175,156
and 175,016 bytes) differed only in dynamically generated session-state
noise; after stripping HTML tags and normalizing whitespace, a `diff` of
the two normalized text extracts showed **zero differences** (confirmed
programmatically — see `verify_quotes.py` in this worktree's method notes
below). All five statutory quotes used in this document
(§ 109(a), § 109(b)(1)(A) twice, § 109(c), § 109(d)) were confirmed as exact
substrings of both independently normalized fetches.

**Case law — fetched via CourtListener MCP tools**, per the required
pipeline, with a genuine second, independent fetch for each case drawn from
a *different* CourtListener text representation (not merely a repeated call
against the same field):

- *Kirtsaeng v. John Wiley & Sons, Inc.*, 568 U.S. 519 (2013) — found via
  `search` (type "o"); cluster_id 2959744, lead/majority opinion_id 9812706
  (noted per the required pipeline: this case also has a *combined-opinion*
  object whose id, 2959744, coincides with the cluster_id — a case where the
  two ids differ for the lead opinion but coincide for the combined
  opinion). First fetch: `get_endpoint_item` (`opinions`, item_id 9812706,
  field `html_with_citations`). Second, independent fetch: `get_endpoint_item`
  (`opinions`, item_id 2959744, field `plain_text` — a different underlying
  object and a different text representation). Both quoted passages (the
  "exhausted" sentence and the "We hold that..." holding sentence) were
  confirmed as exact substrings of both fetches programmatically
  (`verify_case_quotes.py`), after normalizing two benign, disclosed
  formatting differences between the two representations: the plain_text
  fetch renders "§106(3)" without an internal space where html_with_citations
  renders "§ 106(3)" with one, and the plain_text fetch's PDF-style line
  wrapping used soft hyphens (e.g., "subse­quent") that were stripped for
  comparison. Neither is a genuine defect in the quoted text; both are
  disclosed in the `cfsale_case_kirtsaeng_holding` clause's `gap` field, and
  the document's quotes use the html_with_citations rendering for
  consistency with this project's existing § 106(3) citations.
- *UMG Recordings, Inc. v. Augusto*, 628 F.3d 1175 (9th Cir. 2011) — found
  via `search` (type "o"); cluster_id 182134, opinion_id 182134 (the ids
  coincide for this single-opinion decision — checked carefully, no
  mismatch). First fetch: `get_endpoint_item` (`opinions`, item_id 182134,
  field `html_with_citations`). Second, independent fetch: a separate
  `get_endpoint_item` call for the same item requesting only the `plain_text`
  field (populated on this second call; it had returned empty on the first,
  combined-field request for Kirtsaeng's lead opinion, which is why the
  second Kirtsaeng fetch targeted the combined-opinion object instead — this
  difference in which object/field carries populated `plain_text` was
  itself observed and worked around, not assumed). All three quoted passages
  were confirmed as exact substrings of both fetches, after normalizing the
  plain_text fetch's line-wrap hyphenation (e.g., "sup-port", "con-clude") —
  again a benign formatting artifact, disclosed in the relevant clauses'
  `gap` fields, not a genuine defect.

Direct fetches of `courtlistener.com` opinion pages and of Justia case-law
pages via `curl` (attempted as further independent paths, with different
User-Agent strings) failed: `courtlistener.com` returned a proxy CONNECT
tunnel failure, `law.justia.com` returned HTTP 403, and `supreme.justia.com`
also failed to connect — consistent with limits other agents in this effort
have already disclosed. An attempt to fetch Kirtsaeng's slip opinion
directly from `supremecourt.gov` also did not succeed (the docket-specific
PDF path guessed did not resolve, and the term's slip-opinion index page did
not list the case in a way this session could locate a working link for).
Given these failures, the CourtListener MCP tool's two independent text
representations (`html_with_citations` and `plain_text`, fetched via
separate calls, from different underlying opinion objects where available)
were used as the dual-fetch method for both cases, consistent with this
project's established practice when direct courtlistener.com/Justia access
is blocked in this environment.

## Quote-by-quote verification results

| Clause | Quote source | Verified against |
|---|---|---|
| `cfsale_statute_core_right` | 17 U.S.C. § 109(a) | Dual curl fetch (uscode.house.gov), byte-identical after normalization |
| `cfsale_statute_rental_exception` | 17 U.S.C. § 109(b)(1)(A) (restriction + library carve-out) | Dual curl fetch, byte-identical after normalization |
| `cfsale_statute_display_right` | 17 U.S.C. § 109(c) | Dual curl fetch, byte-identical after normalization |
| `cfsale_statute_nonowner_exclusion` | 17 U.S.C. § 109(d) | Dual curl fetch, byte-identical after normalization |
| `cfsale_case_kirtsaeng_holding` | *Kirtsaeng v. John Wiley & Sons, Inc.* (2 quotes) | Two independent CourtListener fetches (`html_with_citations` on the lead opinion; `plain_text` on the combined opinion) |
| `cfsale_case_augusto_transfer_of_title` | *UMG Recordings, Inc. v. Augusto* (2 quotes) | Two independent CourtListener fetches (`html_with_citations`; `plain_text`, separate call) |
| `cfsale_case_augusto_labeling_not_dispositive` | *UMG Recordings, Inc. v. Augusto* (1 quote) | Same two independent fetches as above |

No genuine defects were found in any quote — no character present in a
proposed quote was absent from its source in both representations checked.
Two benign, source-formatting differences were found and disclosed (not
corrected as "defects," since neither representation is wrong — they are
two different valid renderings of the same underlying opinion text):

1. CourtListener's `plain_text` field renders "§106(3)" without an internal
   space where `html_with_citations` renders "§ 106(3)" with one (Kirtsaeng).
2. CourtListener's `plain_text` field line-wraps with soft hyphens inserted
   mid-word (e.g., "subse­quent", "sup-port", "con-clude") where
   `html_with_citations` does not (Kirtsaeng and Augusto).

Both are disclosed in the affected clauses' `gap` fields. No `gap` field
required a "genuine defect, corrected" disclosure sentence, because no
character appeared in a candidate quote that was absent from the source.

## Honest limitations disclosed (in each clause's `gap` field)

- The `cfsale_case_kirtsaeng_holding` clause discloses that the Kirtsaeng
  holding resolves only the geographic-manufacture question, not whether any
  specific foreign-made copy was itself "lawfully made" — a separate,
  fact-specific inquiry the holding does not address.
- The `cfsale_case_augusto_transfer_of_title` and
  `cfsale_case_augusto_labeling_not_dispositive` clauses disclose that no
  reporter (F.3d) pinpoint page could be confirmed for the Augusto quotes:
  the page markers embedded in the `plain_text` fetch form a self-contained
  sequence beginning at page 323, which does not correspond to the case's
  628 F.3d 1175 volume-and-page citation. Rather than guess or fabricate a
  pinpoint, both citations cite the case generally (628 F.3d 1175 (9th Cir.
  2011)) without a page number.
- The `cfsale_case_augusto_labeling_not_dispositive` clause discloses that
  the four software-licensing decisions Augusto cites for its general
  labeling principle (*Vernor*, *Wall Data*, *Triad Systems*, *MAI Systems*)
  were not independently fetched or verified for this document — the
  clause's quote is Augusto's own summary statement of the principle, not a
  quotation from any of those four cases.
- The `cfsale_statute_core_right` clause discloses that § 109(a) contains a
  second sentence (not quoted) concerning restored-copyright works under
  17 U.S.C. § 104A, outside this document's general-scenario scope.
- The `cfsale_statute_rental_exception` clause discloses that § 109(b)(1)(B)
  and § 109(b)(2) (narrower carve-outs for embedded/video-game software and
  a separate nonprofit-library computer-program lending provision) are not
  addressed.

## Method

1. Checked `data/documents.json` and `data/clauses.json` for existing
   Confidentiality & IP coverage; rejected five suggested/adjacent topics as
   already covered; selected the copyright first sale doctrine (17 U.S.C.
   § 109) as a genuinely uncovered, well-scoped topic with clean primary
   sources.
2. Fetched 17 U.S.C. § 109 twice from `uscode.house.gov` via `curl` with two
   different User-Agent strings; confirmed byte-identical after normalizing
   HTML/session-state noise; extracted and verified all five statutory
   quotes as exact substrings programmatically.
3. Used CourtListener `search` (type "o") to find *Kirtsaeng v. John Wiley &
   Sons, Inc.* and *UMG Recordings, Inc. v. Augusto*; fetched each opinion
   twice via `get_endpoint_item`, deliberately requesting a different text
   field/object on the second call to obtain a genuinely independent text
   representation rather than repeating the identical request; extracted and
   verified all five case-law quotes as exact substrings of both fetches
   programmatically, after normalizing disclosed, benign formatting
   differences.
4. Confirmed each case's CourtListener `absolute_url` slug via a follow-up
   `search` call (rather than guessing the slug) before using it in
   citation URLs.
5. Attempted direct fetches of courtlistener.com, Justia, and
   supremecourt.gov as further independent paths; all failed to connect or
   returned HTTP 403/404 in this environment, consistent with limits other
   agents in this effort have disclosed; disclosed this rather than treating
   the CourtListener MCP tool's own two-representation dual-fetch as
   something other than what it is.
6. Drafted 10 clauses matching the exact schema in `data/clauses.json` and
   `data/documents.json` (confirmed against several existing documents
   first, including the exact drafting-clause key set), keeping every
   clause in "inform, never advise" voice.
7. Merged via a Python script (`merge.py`) that validates before writing:
   no duplicate clause/document ids (within the new content or against the
   existing corpus), every clause has exactly the allowed schema keys for
   its kind (authority vs. drafting), every citation has exactly
   `{case, cite, url, quote}`, every document field has exactly
   `{id, label, placeholder, required}`, `clauseOrder` matches the new
   clause set exactly, every `{{field}}` referenced in a clause body is
   declared in the document's `fields` array (and every declared field is
   used at least once), no `{{` template syntax leaked into any `title`,
   `gap`, or citation field, and the document's `categories` is exactly
   `["Confidentiality & IP"]`. The script also confirmed, by re-serializing
   the *unmodified* existing files, that `json.dumps(..., indent=2,
   ensure_ascii=False)` plus a trailing newline reproduces the existing
   files byte-for-byte, so the merge would not introduce unrelated
   formatting churn — confirmed by `git diff --stat` after the merge
   showing only pure additions to both files.
8. Ran corpus-wide validation after merging (`validate_corpus.py`): both
   JSON files parse; clause ids and document ids are unique across the full
   corpus (4,997 clauses, 617 documents); every `clauseOrder` reference
   across all 617 documents resolves to an existing clause id; category
   counts confirmed (79 documents now in Confidentiality & IP, up from 78).

## Net changes

- New document: Copyright First Sale Doctrine — Information Sheet
  (`copyright_first_sale_doctrine_info_sheet`), 10 clauses (7 authority + 3
  drafting), in the Confidentiality & IP category. New fields:
  `workDescription`, `transactionDescription` (others —
  `preparerName`, `dateSigned`, `cityState` — reuse the existing
  corpus-standard field ids and follow the same conventions).
- Corpus: 4,987 → 4,997 clauses; 616 → 617 documents. Confidentiality & IP:
  78 → 79 documents.
- Wave 150, Confidentiality & IP category.
