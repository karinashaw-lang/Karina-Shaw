# Estate Planning, new document: Trustee Liability for Breach of Trust — Remedies, Measure of Liability, and Exculpatory Clauses — Information Sheet

Part of wave 167 (Estate Planning category; wave 167 continues the same
category set as waves 145/147/149/151/153/155/157/159/161/163/165:
Hiring, During employment, Estate Planning, Family Law).

## Why this document

The Estate Planning category held 86 documents before this one. Every
Estate Planning title in `data/documents.json` was listed and each
candidate topic was grepped across both data files before choosing:

- Exculpatory clauses (Prob. Code § 16461): "16461" had 10 hits in
  `data/clauses.json`, all inside two clauses of the
  `beneficiary_right_to_trust_accounting_info_sheet` and all about
  subdivisions (c)-(e) (the shortened objection period and its
  boldface notice). Subdivisions (a)-(b), the exculpatory-provision
  rule itself, were not covered anywhere.
- Measure of liability (Prob. Code §§ 16440-16442): zero hits for
  "16440", "16441", "16442" anywhere in the corpus.
- Remedies (Prob. Code § 16420): hits only inside the
  `trustee_compensation_info_sheet` clause on § 16420(a)(7)
  (reduction or denial of compensation).
- Liability for agents, cotrustees, predecessors (§§ 16401-16403),
  consent/release/affirmance (§§ 16463-16465), directed acts under a
  revocable trust (§ 16462): zero hits.
- Limitations (§ 16460): three hits, all in the accounting sheet.
- Other candidates checked and rejected as already covered: the
  California statutory will (§ 6240), the revocable transfer on death
  deed (§ 5600 et seq.), small-estate affidavit collection (§ 13100
  et seq.), the spousal property petition (§ 13650), trustee removal
  (§ 15642), powers of appointment, the trustee's duty to report and
  account (§§ 16060-16064) — each already has its own document.
- Gifts to interested witnesses (§ 6112) was considered and left as a
  viable future topic; it is currently mentioned once, in a no-contest
  clause.

Chosen topic: the whole of Probate Code Chapter 4 of Part 4 of
Division 9 — "Liability of Trustees to Beneficiaries," §§ 16400-16465
— i.e. what happens after a breach of trust: what a breach is, who
answers for whom, what proceedings lie, how liability is measured,
what interest runs, when a court may excuse, how long a beneficiary
has, and the four statutory ways liability can be narrowed or
discharged.

## What this document covers

18 clauses: 2 drafting (declaration, signature block) and 16 authority
clauses, with 66 verified citation quotes drawn from 15 Probate Code
sections and three published California Court of Appeal decisions
(Uzyel v. Kadisha (2010) 188 Cal.App.4th 866; Noggle v. Bank of
America (1999) 70 Cal.App.4th 853; People ex rel. Harris v. Shine
(2017) 16 Cal.App.5th 524):

- **`brtrust_what_is_a_breach`** (§ 16400; Uzyel at p. 888) — a
  violation of any duty the trustee owes the beneficiary is a breach
  of trust; the structure of Chapter 4.
- **`brtrust_liability_for_agents`** (§ 16401) — the general rule and
  the six circumstances in which a trustee answers for an agent.
- **`brtrust_liability_for_cotrustee`** (§ 16402) — the general rule
  and the five circumstances for a cotrustee's breach.
- **`brtrust_successor_trustee`** (§ 16403) — the general rule and
  the three circumstances for a predecessor's breach.
- **`brtrust_remedies_available`** (§ 16420(a); Uzyel at p. 893) —
  the nine proceedings a beneficiary or cotrustee may commence; the
  common law governs availability of a particular remedy.
- **`brtrust_equitable_and_nonexclusive`** (§§ 16420(b), 16421,
  16442; Uzyel at p. 889) — remedies are exclusively in equity and
  the statutory list is not exclusive.
- **`brtrust_measure_of_liability`** (§ 16440(a); Uzyel at p. 911) —
  the three measures, and abuse-of-discretion review of the choice
  among them.
- **`brtrust_disgorgement_of_profits`** (§ 16440(a)(2); Uzyel at
  pp. 878, 891) — no tracing requirement for disgorgement.
- **`brtrust_lost_profits`** (§ 16440(a)(3); Uzyel at pp. 907-908) —
  appreciation damages as lost profits where an asset was sold in
  breach of the duty of loyalty.
- **`brtrust_excusing_liability`** (§§ 16440(b), 16441(b); Uzyel at
  p. 906) — the court's discretion to excuse, and its limit where the
  trustee served his own interests.
- **`brtrust_interest`** (§ 16441(a); Uzyel at pp. 878, 921-922) —
  the greater of the legal rate on judgments or interest actually
  received; prejudgment interest mandatory under § 16440(a)(1);
  Civ. Code § 3287(a) available on lost-profit damages.
- **`brtrust_three_year_limitation`** (§ 16460; Noggle at p. 860) —
  the three-year period, adequate disclosure, deemed receipt, and
  that accountings need not conform to § 16063.
- **`brtrust_exculpatory_clause`** (§ 16461(a)-(b); Shine at p. 536 &
  fn. 5) — a trust instrument may relieve the trustee of liability,
  but not for a breach committed intentionally, with gross
  negligence, in bad faith, or with reckless indifference, nor for
  profit derived from a breach.
- **`brtrust_shortened_objection_period`** (§ 16461(c)-(e)) — the
  180-day floor and the conditions on a release based on failure to
  object.
- **`brtrust_revocable_trust_directions`** (§ 16462) — written
  directions from the person holding the power to revoke.
- **`brtrust_consent_release_affirmance`** (§§ 16463, 16464, 16465) —
  the effect of a beneficiary's consent, release, or affirmance and
  the exceptions to each.

Every clause states what the law is; none instructs the reader what to
do about any trust, any trustee, or any claim.

## Independent double-fetch

- **Statutes** (leginfo.legislature.ca.gov, via `curl` through the
  environment proxy): all 15 sections (16400, 16401, 16402, 16403,
  16420, 16421, 16440, 16441, 16442, 16460, 16461, 16462, 16463,
  16464, 16465) were fetched by two independent paths — the
  individual section page (`codes_displaySection.xhtml`) with a
  Chrome User-Agent, and the page for the whole article containing
  the section (`codes_displayText.xhtml`, Articles 1, 2, 3 and 4 of
  Chapter 4) with a Firefox User-Agent. The section text extracted
  from the two paths was identical for all 15 sections after
  non-breaking-space conversion and whitespace collapsing (script
  `compare.py` in the session scratchpad; "ALL MATCH"). Two fetches
  were reset mid-transfer by the proxy and were retried until they
  returned 200. Probate Code § 16443 does not exist (leginfo returns
  a no-section page); Article 3 ends at § 16442.
- **Case law** (CourtListener opinion HTML, via `curl` through the
  environment proxy, with `Referer: https://www.courtlistener.com/`
  and browser Accept headers): each of the three opinions was fetched
  twice with two distinct User-Agent/header sets (Chrome on Windows
  or Safari on macOS for the first fetch; Firefox on Linux or Windows
  for the second). The extracted text of the two responses was
  byte-identical for each opinion (SHA-1: Uzyel
  `ee5981cb7834…`, Noggle `a170c79e0d8a…`, Shine `5373907e98bd…`).
  One Shine fetch returned the empty HTTP 202 bot-challenge body and
  was retried successfully with a different header set.
- **Third check not available.** The cluster-restricted exact-phrase
  queries against CourtListener's public search index
  (`cluster_id:<id> AND "<phrase>"`) that were planned as a
  phrase-level second verification could not be run: the index shares
  a daily request quota with every other agent, and it returned HTTP
  429 ("Rate limit exceeded: 125/day. Expected available in 1209
  seconds") when this document was prepared. The public search API
  was reachable earlier in the session and was used only to locate
  the three clusters (2278013 Uzyel, 2258500 Noggle, 6239123 Shine).
  No second database of any of the three opinions was reachable:
  Justia, FindLaw, Google Scholar and case.law are egress-blocked,
  and no slip-opinion PDF exists in CourtListener storage for a 2010,
  1999 or 2017 opinion of these courts (two path guesses returned
  404). This limitation is disclosed in the `gap` field of every
  clause that quotes an opinion.
- **No CourtListener MCP call was made.** All case work went through
  `curl` to the public JSON search endpoint and to opinion HTML
  pages, so the shared MCP quota was not consumed by this task.

## Quote-by-quote verification

All 66 citation quotes were re-checked **after** the merge, reading
them back out of `data/clauses.json` and matching them against the
fetched source documents (`reverify.py`). Matching normalizes only
benign artifacts — curly quotation marks and apostrophes to straight
ones, en/em dashes to hyphens, non-breaking spaces to spaces, and runs
of whitespace (including leginfo's and CourtListener's line wrapping)
to a single space. Result: **ok=66, bad=0**.

The 46 statute quotes were additionally matched against the
second-path (article-page) fetches: **ok=46, bad=0**.

Each stored quote is the exact source substring, with the source's own
characters preserved (leginfo uses U+2019 apostrophes, and those are
kept in the stored quotes); only line-wrap whitespace was collapsed.
No quote was edited, and no defect required correction.

Artifacts identified and handled rather than silently normalized:

- CourtListener's copies of Uzyel and Noggle are scans with
  optical-character-recognition defects elsewhere in each opinion
  (Uzyel repeatedly renders "trust" as "tmst" and "foll." as "foil.";
  Noggle renders bracketed paragraph symbols as "R[]" and "[^]").
  Every quoted passage was checked character by character and none
  contains such a defect; passages that do contain one — including
  Uzyel's own re-quotation of § 16440(a)(2) — were deliberately not
  quoted. This is disclosed in the `gap` of each affected clause.
- Pin cites are derived from the star-pagination markers embedded in
  CourtListener's text. Shine's copy prints footnotes after the body
  rather than at the foot of the page, so the page given for its
  footnote 5 is the page on which the footnote's reference marker
  appears in the body (between the markers for pages 536 and 537);
  this is disclosed in that clause's `gap`.
- Civil Code § 3287 is referred to only as the Uzyel opinion
  describes it; it was not fetched. Disclosed in the `gap` of
  `brtrust_interest`.
- Probate Code § 18100 (protection of third persons dealing with a
  trustee), referred to three times inside § 16420(a), is named but
  not quoted; disclosed in the `gap` of `brtrust_remedies_available`.

## Schema and corpus validation

- Confirmed the current schema by reading `data/clauses.json` and
  `data/documents.json` before writing: authority clauses use exactly
  `{id, title, kind:"authority", status:"verified", checkedDate, body,
  gap, citations:[{case, cite, url, quote}]}`; drafting clauses use
  exactly `{id, title, kind:"drafting", body}`; documents use
  `{id, title, description, categories, clauseOrder, fields}`. A
  script asserted exact key order on all 18 new clauses, their 66
  citations, and the document, and that every authority clause has a
  non-empty `gap`.
- Checked all 18 new clause ids and the new document id against the
  full existing corpus for collisions — none found.
- After merging (2-space indent, non-ASCII preserved, trailing
  newline, as in the existing files), `git diff --numstat` shows
  584/0 and 72/0 — insertions only, no line removed or reformatted.
- A corpus-wide validation script confirmed: both data files parse as
  valid JSON; no duplicate clause ids (5,807 clauses); no duplicate
  document ids (685 documents); every clause id in every document's
  `clauseOrder` resolves to an existing clause; and every
  `{{placeholder}}` appearing in the new clauses' bodies and gaps
  resolves to a declared field (`trustName`, `trustDate`,
  `trusteeName`, `countyName`, `preparerName`, `dateSigned`,
  `cityState`).

## Net changes

- New document: Trustee Liability for Breach of Trust — Remedies,
  Measure of Liability, and Exculpatory Clauses (Prob. Code
  §§ 16400-16465; Uzyel v. Kadisha; Noggle v. Bank of America; People
  ex rel. Harris v. Shine) — Information Sheet
  (`trustee_breach_of_trust_liability_info_sheet`), 18 clauses
  (16 authority + 2 drafting), in the Estate Planning category.
- Corpus: 5,789 → 5,807 clauses; 684 → 685 documents. Wave 167,
  Estate Planning (87 Estate Planning documents).
