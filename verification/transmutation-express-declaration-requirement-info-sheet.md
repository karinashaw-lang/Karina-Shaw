# Family Law, new document: Transmutation of Marital Property and the Express Declaration Requirement (MacDonald/Benson/Valli/Brace) — Information Sheet

Part of wave 159 (Family Law category; wave 159 continues the same
category set as waves 145/147/.../157: Hiring, During employment,
Estate Planning, Family Law).

## Why this document

The task brief flagged Family Law as heavily saturated (82 existing
documents, confirmed by listing every Family Law title in
`data/documents.json`) and suggested several candidate directions.
Grepped both data files for each before choosing:

- Putative spouse doctrine (§ 2251; Ceja): already carried inside
  `nullity_of_marriage_info_sheet` (§§ 2251, 2254, 2255 clauses);
  not chosen.
- Nullity of marriage (§§ 2200-2210): its own document; not chosen.
- Move-away custody (LaMusga; § 7501): its own document
  (`move_away_custody_info_sheet`); not chosen.
- § 271 sanctions: its own document; not chosen.
- Support for an incapacitated adult child (§ 3910): its own
  document; not chosen.
- Parentage by assisted reproduction (§ 7613): 99 hits, carried by
  the sperm/egg donor and gestational-carrier documents; not chosen.
- Transmutation formalities: `§ 852` (with section sign) had zero
  clause hits; "MacDonald", "Valli", "Benson", and "Brace" had zero
  hits each. The existing coverage is four statute-only clauses in
  the multi-state Postnuptial Agreement (§ 852(a)-(c), § 853) and
  one quitclaim-deed clause whose `gap` expressly says that what
  makes a declaration "express" is a question "California courts
  have addressed" but that the clause does not reach. The wave-157
  verification file passed on this topic as "not chosen as a
  standalone" because a transmutation-writing clause already
  existed; the case-law layer -- what the writing must say, whether
  conduct or reliance can substitute, whether third-party purchases
  and form of title are caught -- is genuinely uncovered. Chosen,
  scoped to that case-law layer with the statute restated as its
  own baseline.

This is a well-scoped, non-duplicative topic anchored by four
California Supreme Court decisions (1990, 2005, 2014, 2020) and two
Family Code sections.

## What this document covers

14 clauses: 2 drafting (declaration, worksheet/signature) and 12
authority clauses, citing Cal. Fam. Code §§ 850 and 852 and four
California Supreme Court decisions (Estate of MacDonald (1990) 51
Cal.3d 262; In re Marriage of Benson (2005) 36 Cal.4th 1096; In re
Marriage of Valli (2014) 58 Cal.4th 1396; In re Brace (2020) 9
Cal.5th 903):

- **`txm_section_850_transmutation_authorized`** (§ 850) — spouses
  may transmute by agreement or transfer, subject to §§ 851-853.
- **`txm_section_852a_writing_and_express_declaration_requirement`**
  (§ 852(a)-(b); Benson) — the writing / express declaration /
  acceptance requirement, Benson's three-part reading, and the
  third-party recording rule.
- **`txm_macdonald_legislative_purpose_easy_transmutation`**
  (MacDonald pp. 268-270) — the Law Revision Commission's
  "easy transmutation" concern and the Legislature's purpose.
- **`txm_macdonald_express_declaration_test_no_extrinsic_evidence`**
  (MacDonald pp. 264, 271-273) — the writing must itself state that
  character or ownership is being changed; no extrinsic evidence.
- **`txm_macdonald_no_particular_words_ira_consent_example`**
  (MacDonald pp. 272-273) — no magic words; the IRA consent
  paragraphs failed; the court's illustrative sentence.
- **`txm_benson_no_part_performance_exception`** (Benson) — § 852(a)
  is not the statute of frauds; no part-performance exception; no
  writing about the property at all means no transmutation.
- **`txm_benson_later_decisions_title_changes_and_reliance`**
  (Benson) — Bibb, Barneson, and Campbell as Benson characterizes
  them (flagged not independently verified).
- **`txm_benson_fiduciary_duty_not_a_substitute`** (Benson) —
  § 721(b) does not create a transmutation that § 852(a) denies.
- **`txm_valli_third_party_purchases_subject_to_transmutation_statutes`**
  (Valli) — purchases from third parties with community funds in one
  spouse's name are subject to § 852; Lucas motor-home portion no
  longer good law.
- **`txm_valli_form_of_title_presumption_yields`** (Valli; Brace) —
  Evid. Code § 662 does not apply when it conflicts with the
  transmutation statutes.
- **`txm_brace_joint_tenancy_title_not_an_express_declaration`**
  (Brace) — § 662 yields to § 760 even against a bankruptcy trustee;
  joint tenancy titling on/after 1985 is not by itself a
  transmutation; the 1975-1984 and pre-1975 rules.
- **`txm_section_852_gift_exception_commingling_and_1985_cutoff`**
  (§ 852(c)-(e); Valli; Brace) — personal-gift exception, commingling
  savings clause, and the January 1, 1985 cutoff.

Every clause states what the law is; none instructs the reader what
to do about a particular asset or writing.

## Independent double-fetch

- **CourtListener MCP quota**: used sparingly -- exactly two MCP
  calls (`get_endpoint_item` on `opinions` 1218605 and 2567157 with
  `fields` restricted to id/type/plain_text/html_with_citations),
  because MacDonald (1990) and Benson (2005) have no slip-opinion
  PDFs in CourtListener storage and the site's opinion HTML pages
  returned an HTTP 202 AWS-WAF JavaScript challenge body to `curl`
  under two full browser header sets; the anonymous REST API
  returned 401. `plain_text` was empty for both; the text was taken
  from `html_with_citations` with tags stripped (52,354 and 40,391
  characters).
- **Cluster identification** (CourtListener public JSON search API,
  `/api/rest/v4/search/?type=o&q=…`, via `curl` through the
  environment proxy -- not subject to the MCP quota): MacDonald
  cluster 1218605; Benson 2567157; Valli 2674462 (local path
  `pdf/2014/05/15/marr._of_valli.pdf`) and its May 16, 2014 repost
  2674880 (`pdf/2014/05/16/marr._of_valli.pdf`); Brace 4770328
  (`pdf/2020/07/23/in_re_brace.pdf`).
- **Valli**: fetched the May 15 slip-opinion PDF from
  storage.courtlistener.com (159,170 bytes, SHA-1 b3b269bb…) with a
  Chrome User-Agent and, as the independent second copy, the May 16
  repost ("Reposted to correct Court of Appeal docket number; no
  change to opinion text"; 156,190 bytes, SHA-1 637c2e3a…) with a
  Safari User-Agent. Text extracted with pypdf (26 pages each).
  Every Valli quote was required to appear in both copies.
- **Brace**: fetched from storage.courtlistener.com (368,590 bytes,
  SHA-1 1d9f8a7f…) and from the California courts' own archive
  (`https://www.courts.ca.gov/opinions/archive/S252473.PDF`, 713,053
  bytes, SHA-1 044bb426…, `application/pdf`) with two different
  User-Agents. Text extracted with pypdf (60 pages each). Every Brace
  quote was required to appear in both copies. (The Valli archive
  URL `S193990.PDF` no longer exists on courts.ca.gov -- 404 -- and
  the old courtinfo.ca.gov path redirects to the courts home page,
  so the repost served as Valli's second copy instead.)
- **MacDonald and Benson** (one MCP fetch each): every quoted passage
  was second-verified by an exact-phrase query against the public
  search API restricted to the opinion's cluster
  (`cluster_id:1218605 AND "<phrase>"` / `cluster_id:2567157 AND
  "<phrase>"`). All 24 such queries returned exactly one result, the
  correct cluster. One long Benson sentence containing nested
  parentheses ("Section 852(a) does not operate like the general
  statute of frauds (Civ.Code, § 1624…") returned zero hits as a
  single phrase because of the punctuation; it was re-run as two
  sub-phrases ("does not operate like the general statute of frauds"
  and "in which the requirement of a basic writing is subject to an
  implied exception for part performance of the contract"), each of
  which returned exactly the Benson cluster. Results are logged in
  the session scratchpad (`feed_log.json`). Several queries hit the
  public API's per-minute throttle (HTTP 429) and were retried after
  a sleep inside the same turn. This is disclosed in the `gap` field
  of every MacDonald and Benson clause.
- **Statutes** (leginfo.legislature.ca.gov, via `curl` through the
  environment's proxy): Cal. Fam. Code §§ 850 and 852 each fetched
  twice -- once from `codes_displaySection.xhtml` with a Chrome
  User-Agent and once from `printCodeSectionWindow.xhtml` with a
  Safari User-Agent. The extracted section text was identical across
  the two fetches for both sections (SHA-1 prefixes of the section
  text: § 850 identical, § 852 9c5e7eb3fee2). Both carry the
  enactment note "Enacted by Stats. 1992, Ch. 162, Sec. 10. Operative
  January 1, 1994."

## Quote-by-quote verification

All 44 citation quotes across the 12 authority clauses were checked
by a Python script (`verify_quotes.py`) that normalized curly and
typographic quotes/apostrophes (including the slip opinion's ‟ and „
glyphs) to straight ones, non-breaking spaces to plain spaces, em/en
dashes to hyphens, and collapsed whitespace on both sides before
comparing. Final run: ok=44, bad=0. The 6 statute quotes, 10
MacDonald quotes, 13 Benson quotes, 9 Valli quotes (both copies), and
6 Brace quotes (both copies) all passed as exact contiguous
substrings; the MacDonald and Benson quotes additionally passed the
cluster-restricted phrase check described above.

Artifacts identified and handled rather than silently normalized:

- The CourtListener texts of MacDonald and Benson carry Official
  Reports / Cal.Rptr.3d star-page markers (`*268`, `*479`, …). Three
  quotes span a page break (MacDonald pp. 272-273; Benson pp. 478-479
  and 482-483); the comparison stripped the marker only, and the
  affected clauses' `gap` fields say so. No words were changed.
- In the fetched Benson text the two em dashes in "evidence — oral,
  behavioral, or documentary — that" are rendered as the control
  character U+0097 (the Windows-1252 em-dash byte). It was normalized
  to a dash for comparison; Valli's double-fetched PDF quotes the
  same Benson sentence with em dashes. Disclosed in the `gap` of
  `txm_benson_no_part_performance_exception`.
- The Brace PDF's extracted text carries running headers ("In re
  BRACE / Opinion of the Court by Liu, J. / <page>") and occasional
  split words ("t rustee", "af fected"). One quote spans the header
  between slip pages 2 and 3; the header lines were removed for
  comparison and no quote containing a split word was used. One
  Brace quote and one Brace-quoting-Valli quote were deliberately
  ended before a passage with split words rather than "repaired".
- The § 850 quote initially failed because the first extraction
  started at subdivision (a) and dropped the preamble ("Subject to
  Sections 851 to 853, inclusive, married persons may …"); the
  section was re-extracted in full from both fetches (identical) and
  the quote passed. No quote text was changed.
- Benson's Official Reports pin cites: the fetched text is paginated
  to 32 Cal.Rptr.3d; the only 36 Cal.4th pin used (p. 1106) is
  Valli's own citation of the "blocks efforts" sentence. Every Benson
  `cite` gives the Cal.Rptr.3d pin in brackets, and the `gap` fields
  disclose the omission of other Cal.4th pins.
- Valli and Brace are slip opinions without Official Reports
  pagination; `cite` fields give slip-opinion page or part numbers,
  and the one 58 Cal.4th pin used (p. 1406) is Brace's citation of
  Valli.
- Decisions described only as characterized by the four Supreme
  Court opinions -- Bennett (1949), Lucas (1980), Haines (1995),
  Barneson (1999), Campbell (1999), Bibb (2001), Steinberger (2001),
  Cross (2001), Summers (9th Cir. 2003), Brooks & Robinson (2008),
  Buie & Neighbors (2009), Hall (1990), Blair (1988), and the 1984
  Law Revision Commission report -- are flagged as not independently
  verified in the relevant `gap` fields.

## Schema and corpus validation

- Confirmed the exact current schema by reading `data/clauses.json`
  and `data/documents.json` before writing: authority clauses use
  exactly `{id, title, kind:"authority", status:"verified",
  checkedDate, body, gap, citations:[{case, cite, url, quote}]}`;
  drafting clauses use exactly `{id, title, kind:"drafting", body}`;
  documents use `{id, title, description, categories, clauseOrder,
  fields}`. `merge.py` asserted exact key order on all 14 new
  clauses, their 44 citations, and the document.
- Checked all 14 new clause ids (`txm_` prefix) and the new document
  id against the full existing corpus for collisions -- none found.
- After merging (2-space indent, non-ASCII preserved, trailing
  newline, as in the existing files; `git diff` shows 464 insertions
  and no removed lines), a corpus-wide validation confirmed: both
  data files parse as valid JSON; no duplicate clause ids (5,390
  clauses); no duplicate document ids (652 documents); every clause
  id in every document's `clauseOrder` resolves to an existing
  clause; and every `{{placeholder}}` in every document's clauses
  (body and gap) resolves to a declared field -- for this document
  `party1Name`, `party2Name`, `marriageDate`, `propertyDescription`,
  `writingDescription`.

## Net changes

- New document: Transmutation of Marital Property and the Express
  Declaration Requirement (MacDonald/Benson/Valli/Brace) —
  Information Sheet
  (`transmutation_express_declaration_requirement_info_sheet`), 14
  clauses (12 authority + 2 drafting), in the Family Law category.
- Corpus: 5,376 → 5,390 clauses; 651 → 652 documents. Wave 159,
  Family Law (83 Family Law documents).
