# Business Formation, new document: When California Treats a Business as "Doing Business" Here for Tax Purposes (Rev. & Tax. Code §§ 23101, 23102, 23104, 23114, 23151, 23153, 17941; Corp. Code § 191; 15 U.S.C. §§ 381, 383; Swart Enterprises, Inc. v. Franchise Tax Board) — Information Sheet

Wave 168, Business Formation slot (wave 168 covers the same four
categories as waves 146/148/150/152/154/156/158/160/162/164/166:
Confidentiality & IP, Ending employment, Business Formation, Real
Estate).

## Why this document

Read all 87 existing "Business Formation" document titles and ids in
`data/documents.json` before choosing a topic, then grepped both data
files for every candidate the brief suggested. Almost all of them were
already whole documents: distributions to shareholders
(`distribution_restrictions_info_sheet`), derivative actions
(`shareholder_derivative_lawsuit_info_sheet`), interested-director
transactions
(`self_dealing_interested_director_officer_transactions_info_sheet`),
§ 2115 (`pseudo_foreign_corporation_2115_info_sheet`), statutory close
corporations (`close_corporation_info_sheet`), the § 25102(f) limited
offering exemption
(`california_limited_offering_exemption_info_sheet`), suspension and
revivor (`certificate_of_revivor_reinstatement_info_sheet`), entity
conversion (`statutory_conversion_info_sheet`), and partnership
formation by conduct under § 16202 (already treated inside
`partnership_agreement` and `joint_venture_formation_info_sheet`).

The chosen topic was confirmed genuinely open by grepping the whole
corpus:

- `"23101"` → 4 hits across both data files, all incidental: three
  clauses (`llc_articles_annual_tax`, `llcfee_addition_to_franchise_tax`,
  `scorptax_continues_subject_to_corporate_tax`) use the phrase "doing
  business in this state" or cite § 23101 in passing while explaining a
  different tax. No clause anywhere states the § 23101 test itself.
- `"Swart"` → 0 hits. `"86-272"` → 0 hits. `"23102"`, `"23104"`,
  `"23114"`, `"23151"` → 0 hits as section citations. `"commercially
  domiciled"` → 0 hits.
- `"23153"` appears only through the existing minimum-franchise-tax
  sheet, which states the $800 amount and which entities owe it, not the
  statutory meaning of "doing business" that triggers it for an entity
  formed elsewhere.
- Corp. Code § 191 is quoted in `foreign_entity_qualification_info_sheet`
  for the *registration* test; nothing in the corpus contrasts that test
  with the *tax* test, which is a recurring point of confusion for
  owners of out-of-state LLCs and corporations with California
  connections.

The question the new sheet answers — when does California tax law treat
a business formed elsewhere (or a passive owner of a California entity)
as "doing business" here — sits squarely in the Business Formation
category and is the one that decides whether the $800 minimum tax and a
California return are in play at all.

## What this document covers

Document id: `doing_business_in_california_tax_definition_info_sheet`.
13 clauses: 2 drafting (purpose/scope declaration, preparation and
signature block) and 11 authority clauses, carrying 30 citation quotes.

- **`cadoingbiz_statutory_definition`** — Rev. & Tax. Code § 23101(a)
  ("'Doing business' means actively engaging in any transaction for the
  purpose of financial or pecuniary gain or profit"), § 23151(a) (the
  franchise tax on every corporation doing business within the limits of
  this state, for the privilege of exercising its corporate franchises),
  and § 23151(e) (the 8.84 percent rate that supersedes the 7.6 percent
  figure printed in subdivision (a)).
- **`cadoingbiz_bright_line_thresholds`** — § 23101(b) intro and (b)(1)
  (organized or commercially domiciled here), (b)(2) sales, (b)(3)
  property, and (b)(4) compensation thresholds, each "the lesser of" a
  dollar amount or 25 percent of the taxpayer's total.
- **`cadoingbiz_indexing_and_passthrough_attribution`** — § 23101(c)
  (annual revision of the dollar amounts under § 17041(h), substituting
  "2012" for "1988") and § 23101(d) (the taxpayer's pro rata or
  distributive share of pass-through entities counts).
- **`cadoingbiz_minimum_franchise_tax_reach`** — § 23153(a) (period of
  liability, from the earlier of incorporation, qualification, or
  commencing to do business), § 23153(b)(1)–(3) (the three independent
  routes), and § 23153(d)(1) ($800).
- **`cadoingbiz_first_year_and_fifteen_day_rules`** — § 23153(f)(1)
  (first-taxable-year exemption, keyed to incorporating or qualifying on
  or after January 1, 2000) and § 23114(a)–(b) (the 15-day rule and its
  effect on the first-year count).
- **`cadoingbiz_llc_annual_tax_same_definition`** — § 17941(a) (an LLC
  "doing business in this state (as defined in Section 23101)" owes the
  § 23153(d) amount) and § 17941(b)(1) (the separate filing-based
  trigger that runs until a certificate of cancellation is filed).
- **`cadoingbiz_statutory_carveouts`** — § 23102 (passive stock-and-bond
  holding companies) and § 23104(a) (convention and trade show activity
  of seven or fewer calendar days with $10,000 or less of gross income).
- **`cadoingbiz_public_law_86_272_federal_limit`** — 15 U.S.C. § 381(a)
  (solicitation of orders for tangible personal property filled from
  outside the state), § 381(b) (no protection for corporations
  incorporated in, or individuals resident in, the taxing state), and
  § 383 ("net income tax" means any tax imposed on, or measured by, net
  income).
- **`cadoingbiz_swart_passive_llc_member`** — Swart Enterprises, Inc. v.
  Franchise Tax Board (2017) 7 Cal.App.5th 497: the holding that
  passively holding a 0.2 percent interest in a manager-managed
  California LLC, with no right of control, is not "doing business"
  under § 23101; the comparison to a shareholder's receipt of dividends;
  the "akin to that of a limited partner" passage; and the closing
  conclusion at p. 513.
- **`cadoingbiz_swart_limits`** — the opinion's own limits: footnote 2
  (the post-2011 bases did not apply because the tax year ended June 30,
  2010), footnote 7 ("we can envision circumstances where the parties'
  conduct may evince an LLC member's participation in the control of the
  LLC"), and the court's refusal to reach the constitutional challenge.
- **`cadoingbiz_registration_test_is_different`** — Corp. Code § 191(a)
  ("transact intrastate business" = repeated and successive
  transactions, other than interstate or foreign commerce) and § 191(b)
  (ownership statuses that do not by themselves count), contrasted with
  § 23153(b)'s three tax routes.

Fields: `entityName`, `homeState`, `preparerName`, `dateSigned`,
`cityState` — all five declared and all five used; no undeclared
placeholder appears in any body or gap.

## Sources and how they were fetched

**California statutes.** Rev. & Tax. Code §§ 23101, 23102, 23104, 23114,
23151, 23153, 17941 and Corp. Code § 191 were fetched from
`leginfo.legislature.ca.gov` by curl through the environment proxy,
**twice each by two independent routes**: the single-section page
(`codes_displaySection.xhtml?lawCode=…&sectionNum=…`) with a browser
User-Agent, and the multi-section listing page for the containing
article or chapter (`codes_displayText.xhtml?…`) with a different
User-Agent — a different URL, a different server-rendered page, and a
different client string. Pairings actually used:

| Section | Fetch A | Fetch B |
| --- | --- | --- |
| R&T 23101, 23102, 23104, 23114 | displaySection | RTC Pt. 11, ch. 2, art. 1 listing |
| R&T 23151, 23153 | displaySection | RTC Pt. 11, ch. 2, art. 2 listing |
| R&T 17941 | displaySection | RTC Pt. 10, ch. 10.6 listing |
| Corp. 191 | displaySection | Corp. Div. 1, tit. 1, ch. 1 listing |

One `displaySection` request for Corp. Code § 191 was cut off by the
network ("Recv failure: Connection reset by peer") and was retried
successfully with a different User-Agent.

**Federal statute.** 15 U.S.C. §§ 381 and 383 (Public Law 86-272) were
fetched from **two independent government sources**: the Office of the
Law Revision Counsel (`uscode.house.gov`, prelim edition) and the
Government Publishing Office (`govinfo.gov`, USCODE-2023-title15). The
two texts agree word for word with one exception, disclosed in that
clause's `gap`: the Law Revision Counsel page renders the dash in
§ 381(b)'s "with respect to—" as a plain hyphen. The quote follows the
GPO typography (em dash).

**Case.** Swart Enterprises, Inc. v. Franchise Tax Board (2017) 7
Cal.App.5th 497 (5th Dist., No. F070922, filed Jan. 12, 2017),
CourtListener cluster 4338268, opinion 4115529. **No CourtListener MCP
tool was called for this document**, so no MCP quota was consumed. The
cluster was located through CourtListener's public, unauthenticated v4
search JSON via curl (the first attempt returned HTTP 429 and was
retried after a 60-second wait inside the turn). Two independent paths
were then used for the text:

1. The Official Reports text served as HTML at
   `courtlistener.com/opinion/4338268/…`, fetched **twice with two
   distinct full browser header sets** (Chrome/macOS and Firefox/Windows,
   each with `Referer: https://www.courtlistener.com/`); both fetches
   returned byte-identical content (96,619 bytes).
2. The court's **certified-for-publication slip opinion PDF** at
   `storage.courtlistener.com/pdf/2017/01/12/swart_enterprises_v._franchise_tax_bd..pdf`
   (19 pages), extracted with pypdf.

**Phrase-level third check.** `cluster_id:4338268 AND "passively holding
a 0.2 percent ownership interest"` against CourtListener's public search
feed returned `count: 1`, Swart Enterprises, Inc. v. Franchise Tax Board.
The first attempt returned HTTP 429 and was retried after a wait inside
the turn.

## Verification

- **All 30 citation quotes** were programmatically confirmed as exact
  whitespace-normalized substrings of **both** independent fetches of
  their source, first from the build script and again re-read straight
  out of the merged `data/clauses.json` (30/30).
- **OCR defects in the Official Reports HTML, disclosed in the clause
  gaps.** CourtListener's HTML text of Swart is an optical-character-
  recognition transcription of the bound reporter and corrupts
  individual words inside three of the passages quoted here: "Cypress
  LLC" → "Cypress FFC", "Like a shareholder's" → "Fike a shareholder's",
  "Swart's tax year ending June 30, 2010" → "Swait's", and "an FFC
  member" for "an LLC member". Every quoted string in this document is
  taken from the **slip opinion PDF**, which is clean; the HTML fetch was
  used as the second path to confirm the same passages are present, with
  the known OCR substitutions reversed before the automated substring
  comparison. This is recorded in the `gap` fields of both Swart clauses.
- **Quote-integrity correction made during drafting, disclosed here and
  in `cadoingbiz_swart_limits`'s gap.** The constitutional-avoidance
  sentence was first drafted through "…as it was not necessary to the
  disposition of this matter." In the slip opinion that sentence is
  interrupted by a page break and footnote 7, so the string is not
  contiguous there (it is contiguous in the reporter HTML). The quote
  was shortened to end at "on constitutional grounds", which is
  contiguous and verbatim in **both** sources; the omitted remainder is
  stated in the gap. No wording was changed.
- **Star-page pin cites** for all seven Swart quotes were checked
  against the nearest preceding star-page marker in the CourtListener
  reporter text. Two initial pins were corrected: the closing conclusion
  ("We conclude Swart was not doing business…") from 515-516 to 513, and
  footnote 7 from 516 to 513. Slip-opinion page numbers are given
  alongside each reporter pin.
- **Statutory text that could mislead if quoted alone** is flagged in
  the gaps rather than silently smoothed: § 23151(a)'s obsolete 7.6
  percent rate (superseded by subdivision (e)'s 8.84 percent, quoted as
  a second citation); § 23101(b)'s enacted dollar amounts (indexed
  annually under subdivision (c), so the figures in force for a given
  year are higher and are not stated here); § 23153(d)(1)'s omitted
  opening exceptions and the $25 mining minimum in paragraph (2);
  § 23153(f)(2)'s exclusion of LLCs, LPs, LLPs and others from the
  first-year exemption; § 23101(d)'s definition of "pass-through
  entities" as a partnership or an "S" corporation, which does not
  itself name LLCs; and § 23102's capitalized "this State", reproduced
  as the code prints it.
- **Sources not independently fetched, and disclosed as such:** the
  Franchise Tax Board's Regulation 23101 (Cal. Code Regs., tit. 18,
  § 23101), which appears only as the Court of Appeal quoted it; FTB
  Legal Ruling No. 2014-01 and the State Board of Equalization decisions
  the court discusses; and Internal Revenue Code § 513(d)(3)(A), which
  § 23104 incorporates by reference.
- **Corpus-wide validation after the merge**: both data files parse;
  clause ids unique (5,859 clauses, no duplicates); document ids unique
  (689 documents); every `clauseOrder` id in every document resolves to
  an existing clause; every `{{placeholder}}` in every clause body and
  gap resolves to a field declared by each document that uses the clause.
  Business Formation now has 88 documents.
- **Diff shape**: `git diff --numstat` shows 313 added lines in
  `data/clauses.json` and 55 in `data/documents.json`, 0 deletions; the
  pre-merge content of both files was confirmed to be an unchanged
  prefix of the post-merge content.

## Inform-never-advise check

Every authority clause states what a statute or the opinion says and
attributes it. No clause tells a reader to register, to file, to pay, to
restructure an ownership interest, or to take any other step; the two
drafting clauses say expressly that the sheet does not determine whether
the named entity is doing business in California, what it owes, or
whether registration is required, and that those determinations are made
by the Franchise Tax Board and by courts applying these statutes to
specific facts.
