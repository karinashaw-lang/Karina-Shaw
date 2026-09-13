# Estate Planning, new document: Witnesses to a Will — Attestation, Interested Witnesses, and the Harmless-Error Rule — Information Sheet

Part of wave 171 (Estate Planning category; wave 171 continues the same
category set as waves 145/147/149/151/153/155/157/159/161/163/165/167/169:
Hiring, During employment, Estate Planning, Family Law).

## Why this document

The Estate Planning category held 88 documents before this one. Every
Estate Planning title in `data/documents.json` was listed, and each
candidate topic was grepped across both data files (clause bodies,
gaps, citation quotes, titles and ids) before choosing:

- **Gifts to an interested witness (Prob. Code § 6112)**: the string
  "6112" appeared exactly once in the whole corpus, inside
  `nocontest_direct_contest_defined`, where it is part of the quoted
  text of § 21310(b)(6) listing the grounds of a direct contest. No
  clause anywhere states what § 6112 provides. "interested witness"
  matched only four clauses, all in
  `anatomical_gift_organ_tissue_donation_info_sheet`, about witnesses
  to an anatomical gift. The previous wave's verification note
  (wave 169) expressly flagged § 6112 as "a viable future topic."
- **The witnessing requirement itself (§ 6110(c)) and the
  harmless-error paragraph (§ 6110(c)(2))**: "6110" matched ten
  clauses, none of which is about witnesses as a subject. Two are
  operative clauses of instruments (`will_execution_requirements` and
  `codicil_execution_requirements`), one is the statutory-will sheet,
  four are in the separate-writing sheet, and one is an unrelated
  Bus. & Prof. Code number in a bulk-sale sheet. "harmless error"
  matched a single clause, in a Family Law disclosure sheet, with no
  connection to wills. "attesting witness", "Saueressig", "Stoker"
  and "Ben-Ali" each returned zero hits corpus-wide; "attestation
  clause" returned three passing mentions.
- **Proof of a will (§§ 8220-8221, 8252-8253)**: "8221" and "8253"
  returned zero hits. "8220" appears once, in `will_proof_at_probate`
  (a clause of the Last Will instrument, quoting subdivisions (a) and
  (b) for the narrow purpose of that will). "8252" appears in the
  lost-will and dependent-relative-revocation sheets, for the
  different burdens those sheets address. "6113" and "6111.5"
  produced no substantive Probate Code coverage (the raw hits are
  17 U.S.C. and Civ. Code numbers in IP and real-estate documents).
- Candidates checked and rejected as already covered: the California
  statutory will (§ 6240), the revocable transfer on death deed
  (§ 5600 et seq.), the small-estate affidavit (§ 13100 et seq.), the
  spousal property petition (§ 13650), trustee removal (§ 15642),
  powers of appointment, guardianship nomination for minor children,
  and quasi-community property at death — each already has its own
  document. Revocation of a will by dissolution (§ 6122) was rejected
  as duplicative: it is already the subject of
  `will_revocation_by_divorce`, `statwill_divorce_revocation` and
  `drr_statutory_revocation_framework`.

Chosen topic: the witnesses to a California will — who may witness,
what each witness must do and when, what happens when the formalities
were not followed, what happens when a witness is also a beneficiary,
and how a will's execution is proved in the probate court.

## What this document covers

18 clauses: 2 drafting (declaration, signature block) and 16 authority
clauses, with 29 verified citation quotes drawn from 11 California
code sections — Prob. Code §§ 6104, 6110, 6111, 6112, 6113, 8220,
8221, 8252, 8253 and Evid. Code §§ 605, 606 — and three published
California decisions: Estate of Saueressig (2006) 38 Cal.4th 1045,
Estate of Stoker (2011) 193 Cal.App.4th 236, and Estate of Ben-Ali
(2013) 216 Cal.App.4th 1026:

- **`wilwit_two_witness_requirement`** (§ 6110(a)-(b), (c)(1)) — the
  writing requirement, the three ways a will may be signed, and the
  two-witness requirement: signature during the testator's lifetime,
  presence at the same time at the signing or acknowledgment, and
  understanding that the instrument is the testator's will.
- **`wilwit_formalities_not_required`** (Saueressig at p. 1049) —
  what the 1983 revision removed, including the requirement that the
  witnesses sign in the testator's presence.
- **`wilwit_who_may_witness`** (§ 6112(a)) — any person generally
  competent to be a witness may act as a witness to a will.
- **`wilwit_signing_during_lifetime`** (§ 6110(c)(1); Saueressig at
  pp. 1047, 1056) — the holding that a witness signature affixed
  after the testator's death does not satisfy the statute, the
  court's reasons, and the words "during the testator's lifetime" now
  in the section (credit line: Stats. 2008, Ch. 53, effective
  January 1, 2009).
- **`wilwit_harmless_error`** (§ 6110(c)(2); Ben-Ali at p. 1037) —
  the alternative to compliance with paragraph (1): the proponent's
  burden, the time the intent must have existed, and the clear and
  convincing standard; and the 2013 court's conclusion on the record
  before it.
- **`wilwit_harmless_error_reach`** (Stoker at pp. 242, 244) — the
  paragraph is not limited to typewritten wills, and it governs the
  procedure and evidentiary standard used at trials on validity.
- **`wilwit_interested_witness_validity`** (§ 6112(b)) — a will or
  any provision of it is not invalid because an interested witness
  signed it.
- **`wilwit_interested_witness_presumption`** (§ 6112(c); Evid. Code
  §§ 605, 606) — the presumption of procurement by duress, menace,
  fraud or undue influence, the two-other-disinterested-witnesses
  condition, the fiduciary-capacity exception, and what a presumption
  affecting the burden of proof is and does.
- **`wilwit_interested_witness_share_cap`** (§ 6112(d)) — the ceiling
  on what an interested witness takes when the presumption is not
  rebutted, and the saving sentence.
- **`wilwit_procured_execution`** (§ 6104) — an execution or
  revocation procured by duress, menace, fraud or undue influence is
  ineffective to that extent.
- **`wilwit_holographic_no_witnesses`** (§ 6111(a)) — the will that
  is valid whether or not witnessed.
- **`wilwit_choice_of_law`** (§ 6113) — the three alternative ways a
  written will may be validly executed.
- **`wilwit_proof_uncontested`** (§ 8220(a)-(b)) — proof on one
  subscribing witness's evidence, and by affidavit, when there is no
  contest.
- **`wilwit_no_subscribing_witness_available`** (§ 8221) — proof by
  handwriting and one of two listed documents when no subscribing
  witness is available within the meaning of Evid. Code § 240.
- **`wilwit_contest_burden_and_witnesses`** (§§ 8252(a), 8253;
  Ben-Ali at p. 1034) — who bears which burden at the trial of a
  contest, and the production and examination of each subscribing
  witness.
- **`wilwit_presumption_of_due_execution`** (Ben-Ali at pp. 1034,
  1036) — what the presumption of due execution rests on: proof of
  the signatures of the decedent and the witnesses makes out a prima
  facie case; proof of the decedent's and only one witness's does
  not.

Every clause states what the law is; none tells the reader who should
witness a will, how a will should be executed, or what to do about any
will or contest.

## Independent double-fetch

- **Statutes** (leginfo.legislature.ca.gov, via `curl` through the
  environment proxy): all 11 sections were fetched by two independent
  paths — the individual section page
  (`codes_displaySection.xhtml?lawCode=PROB|EVID&sectionNum=…`) with
  a Chrome-on-macOS User-Agent, and the page for the whole chapter or
  article containing the section (`codes_displayText.xhtml`:
  Division 6, Part 1, Chapter 2 for §§ 6110-6113; Division 6, Part 1,
  Chapter 1 for § 6104; Division 7, Part 2, Chapter 3, Article 2 for
  §§ 8220-8221 and Article 3 for §§ 8252-8253; Evid. Code Division 5,
  Chapter 3, Article 1 for §§ 605-606) with a Firefox-on-Linux
  User-Agent. Every quoted passage was located in both. Two fetches
  were reset mid-transfer by the proxy (`Recv failure: Connection
  reset by peer`) and were retried until they returned 200.
- **Case law** (CourtListener opinion HTML, via `curl` through the
  environment proxy, with `Referer: https://www.courtlistener.com/`
  and browser Accept headers): each opinion was fetched twice with
  two distinct User-Agent/header sets (Safari on macOS for the first
  fetch, Firefox on Windows with a different Accept-Language for the
  second). The extracted text of the two responses was byte-identical
  for each opinion — Saueressig SHA-1
  `569a55d93ad9f3d0bec73510ade778b5c538b072`, Stoker SHA-1
  `f238fb71fa3ecab66a76a8c2029385bcd761b15c`, Ben-Ali SHA-1
  `869973c87696efbcc5cdc0553fca6db7dd38c62c`. One second fetch
  returned an empty 202 bot-challenge body on the first try and was
  refetched after a pause with the `Referer` header restored, which
  returned 200 and the identical text.
- **Third, index-level check.** A cluster-restricted exact-phrase
  query against CourtListener's public search index was run for one
  quoted phrase from each opinion: `cluster_id:5608037 AND "We
  conclude that such postdeath subscription is not permitted"`
  returned `count: 1` (Smith v. Goff), `cluster_id:5810079 AND
  "handwritten nonholographic wills are not excluded from the scope
  of this statute"` returned `count: 1` (Gularte v. Pradia), and
  `cluster_id:5811766 AND "Proof of the signature of the decedent and
  of only one of the witnesses does not"` returned `count: 1` (Golde
  v. Wilburn). The first two queries returned 429 on an earlier
  attempt and were re-run after a 90-second wait.
- **Citation lookup.** CourtListener's quota-free `/c/` redirect was
  used to confirm that 193 Cal.App.4th 236 resolves to cluster
  5810079 and 216 Cal.App.4th 1026 to cluster 5811766. The lookup for
  38 Cal.4th 1045 returned HTTP 300 (multiple matching clusters), so
  that citation was confirmed instead from the `citation` field of
  the public search API result for cluster 5608037 (`38 Cal. 4th
  1045`) and from the star pagination `*1047`-`*1064` in the fetched
  text.
- **Case names.** CourtListener captions all three clusters by party
  name — Smith v. Goff, Gularte v. Pradia, Golde v. Wilburn — rather
  than by the reported "Estate of" captions used in this document and
  in the official reports. This is disclosed in the `gap` of every
  clause that quotes an opinion.
- **Second database not available.** Justia, FindLaw, Google Scholar
  and case.law are egress-blocked from this environment, and no
  slip-opinion PDF exists in CourtListener storage for a 2006, 2011
  or 2013 California opinion, so the two HTML fetches of each opinion
  are of the same underlying record; the phrase-level search queries
  above are an index-level check of that record rather than a second
  database. This limitation is disclosed in the `gap` field of every
  clause that quotes an opinion.
- **No CourtListener MCP call was made.** All case work went through
  `curl` to the public JSON search endpoint, the `/c/` citation
  redirect and opinion HTML pages, so the shared MCP quota was not
  consumed by this task.

## Quote-by-quote verification

All 29 citation quotes were re-checked **after** the merge, reading
them back out of `data/clauses.json` and matching them against the
fetched sources (`reverify.py` in the session scratchpad). Matching
normalizes only benign artifacts — curly quotation marks and
apostrophes to straight ones, em/en dashes to hyphens, non-breaking
spaces to spaces, and runs of whitespace (including leginfo's and
CourtListener's line wrapping) to a single space.

- Against the **primary** fetch path: **ok=29, bad=0**.
- Against the **second, independent** fetch path (chapter/article
  pages for the statutes, second header set for the opinions):
  **ok=29, bad=0**.

Each stored quote is the exact source substring with the source's own
characters preserved (leginfo and CourtListener both use U+2019
apostrophes and U+201C/U+201D quotation marks, and those are kept).
No quote was edited, and no defect required correction.

Artifacts identified and handled rather than silently normalized:

- leginfo's individual section page for § 6112 renders subdivision
  (b) with a double space ("signed  by an interested witness") and
  puts each subdivision on its own line; the chapter page renders the
  same text with single spacing. The stored quotes use single
  spacing, i.e. the chapter-page rendering, and collapse the
  line breaks leginfo inserts between subdivisions. Disclosed in the
  `gap` of every clause quoting a statute.
- CourtListener's text of Estate of Ben-Ali is a scan with
  optical-character-recognition defects elsewhere in the document
  ("instmment" for "instrument"; a stray apostrophe inside its block
  quotation from Estate of Pitcairn, "genuine',"). Every quoted
  passage was checked character by character and none contains such a
  defect; the Pitcairn block quotation was deliberately not quoted.
  Disclosed in the `gap` of `wilwit_presumption_of_due_execution` and
  in the shared case-method text of every clause quoting an opinion.
- Passages carrying several layers of nested quotation marks were
  deliberately not quoted: Ben-Ali's restatement of the clear and
  convincing standard (quoting Lackner v. North), and Saueressig's
  five-item list of the formalities dropped in 1983. Both are
  reported in clause bodies from the fetched text and the omission is
  disclosed in the relevant `gap`.
- Quotations that would straddle a star-pagination marker were
  avoided, so no stored quote required removal of a page number.
  Pin cites are derived from the star-pagination markers embedded in
  CourtListener's text.
- **No published California decision applying Prob. Code § 6112 was
  found.** A search of CourtListener's California Supreme Court and
  Court of Appeal opinions for the phrase "section 6112" returned six
  decisions; those examined cite the section only in passing (for
  example, in reciting § 21310(b)(6)'s list of direct-contest
  grounds). The § 6112 clauses therefore rest on the statutory text
  alone, and this is disclosed in the `gap` of
  `wilwit_interested_witness_share_cap`.
- Sections referred to but not fetched or quoted — Evid. Code § 240
  (unavailability, cross-referenced by §§ 8221 and 8253), the
  Evidence Code provisions on witness competency behind § 6112(a),
  Evid. Code §§ 1411-1418 (authentication), Prob. Code § 6111(b)-(c)
  and § 6111.5, § 8252(b), and Prob. Code § 21380 — are named as the
  quoted text names them, and each omission is disclosed in the
  relevant clause's `gap`.
- Overlap with existing documents is disclosed rather than ignored:
  § 6110 and § 8220 are already quoted, for the narrow purpose of a
  particular instrument, in the Last Will and Testament document, and
  § 8252 in the lost-will and dependent-relative-revocation sheets;
  the relevant `gap` fields say so.

## Schema and corpus validation

- Confirmed the current schema by reading `data/clauses.json` and
  `data/documents.json` before writing: authority clauses use exactly
  `{id, title, kind:"authority", status:"verified", checkedDate, body,
  gap, citations:[{case, cite, url, quote}]}`; drafting clauses use
  exactly `{id, title, kind:"drafting", body}`; documents use
  `{id, title, description, categories, clauseOrder, fields}`. A
  script asserted exact key order on all 18 new clauses and their 29
  citations, and that every authority clause has a non-empty `gap`.
- Checked all 18 new clause ids and the new document id against the
  full existing corpus for collisions — none found.
- After merging (2-space indent, non-ASCII preserved, trailing
  newline, as in the existing files), `git diff --stat` shows
  362 and 60 lines added and none removed — insertions only, no
  existing line reformatted. A round-trip re-dump of both files
  before the merge was byte-identical to the originals, confirming
  the writer settings match the repository's.
- A corpus-wide validation script confirmed: both data files parse as
  valid JSON; no duplicate clause ids (6,033 clauses); no duplicate
  document ids (701 documents); every clause id in every document's
  `clauseOrder` resolves to an existing clause; and every
  `{{placeholder}}` appearing in any clause body or gap resolves to a
  field declared by every document that uses that clause
  (`testatorName`, `countyName`, `preparerName`, `dateSigned`,
  `cityState` for this document).

## Net changes

- New document: Witnesses to a Will — Attestation, Interested
  Witnesses, and the Harmless-Error Rule (Prob. Code §§ 6104,
  6110-6113, 8220-8221, 8252-8253; Evid. Code §§ 605-606; Estate of
  Saueressig; Estate of Stoker; Estate of Ben-Ali) — Information
  Sheet (`will_witnesses_attestation_info_sheet`), 18 clauses
  (16 authority + 2 drafting), in the Estate Planning category.
- Corpus: 6,015 → 6,033 clauses; 700 → 701 documents. Wave 171,
  Estate Planning (89 Estate Planning documents).
