# Family Law, new document: Pension Apportionment and the Gillmore Election — Information Sheet

Part of wave 165 (Family Law category; wave 165 continues the same
category set as waves 145/147/.../163: Hiring, During employment,
Estate Planning, Family Law).

## Why this document

The task brief flagged Family Law as heavily saturated (85 existing
documents, confirmed by listing every Family Law title in
`data/documents.json`) and offered candidate directions. Each was
grepped against both data files before anything was chosen:

- Putative spouse (§ 2251; *Ceja*): 13 hits, carried inside
  `nullity_of_marriage_info_sheet`; not chosen.
- Nullity (§§ 2200-2210): `nullity_of_marriage_info_sheet` exists.
- Move-away custody (*LaMusga*; § 7501): `move_away_custody_info_sheet`
  exists.
- § 271 sanctions: `family_code_271_sanctions_info_sheet` exists.
- § 3910 adult incapacitated child support:
  `adult_incapacitated_child_support_info_sheet` exists.
- § 7613 assisted reproduction: `sperm_egg_donor_parentage_info_sheet`
  exists (46 hits on "7613").
- Child's preference (§ 3042): 10 hits, all inside the guardianship
  and § 7891 termination clauses; partly covered.
- Mandatory custody mediation (§ 3170):
  `mandatory_child_custody_mediation_info_sheet` exists.
- Earnings assignment (§ 5230): 3 hits on the section number, already
  quoted in `child_support_agreement` and cross-referenced from the
  wage-garnishment documents; partly covered.

**Chosen: pensions and the Gillmore election.** The wave-163
verification note records that this direction was considered and set
aside as "too adjacent" to `retirement_benefits_division_qdro_info_sheet`.
That judgment was re-examined here rather than inherited, and the
grep evidence points the other way:

- `Gillmore`, `Cornejo`, and `Lehman` each returned **zero hits** in
  both data files.
- `Marriage of Brown` returned exactly **one** hit corpus-wide — a
  nested quotation inside the *Henn v. Henn* clause of
  `family_code_2556_omitted_community_property_info_sheet`. No clause
  anywhere states Brown's holding.
- The 14 clauses mentioning a "time rule" are wage-and-hour documents,
  a UCC priority clause, and the stock-option clauses of
  `employee_stock_options_hug_nelson_info_sheet` (a different asset,
  under *Hug* and *Nelson*). The 15 hits on "nonvested" are all
  Probate Code rule-against-perpetuities text.
- Most decisively, `qdro_ca_retirement_division_authority`'s own `gap`
  already discloses the hole this document fills: it states that the
  clause "does not state how a court values or apportions a benefit
  that was earned partly before marriage and partly during it
  (sometimes called a 'time rule' or similar apportionment approach)"
  and that the topic was "omitted here rather than described."

The existing QDRO sheet covers the statutory and federal *mechanics*
of getting a plan to pay (Fam. Code § 2610(a), public-plan statutes,
ERISA anti-alienation, QDRO contents, plan-administrator review). This
document covers the *substantive* questions that precede those
mechanics — is the benefit community property at all, what share is
community, and what happens when the employee spouse is eligible to
retire but keeps working. The one overlap (Fam. Code § 2610(b)(2)) is
disclosed in the relevant `gap` as not independent of that document.

## What this document covers

11 clauses: 2 drafting (declaration, signature block) and 9 authority
clauses, citing *In re Marriage of Brown* (1976) 15 Cal.3d 838,
*In re Marriage of Gillmore* (1981) 29 Cal.3d 418, *In re Marriage of
Cornejo* (1996) 13 Cal.4th 381, *In re Marriage of Lehman* (1998) 18
Cal.4th 169, and Cal. Fam. Code § 2610(b)(2). Twenty-seven citation
quotes in all.

- **`pensiongillmore_brown_pension_property`** (*Brown* pp. 842, 844)
  — pension rights, vested or not, are a property interest and a
  community asset to the extent earned during marriage; the
  specialized marital-property meaning of "vested" (not subject to
  forfeiture if employment ends before retirement).
- **`pensiongillmore_brown_division_methods`** (*Brown* pp. 848, 849,
  851) — present-value division versus awarding each spouse a portion
  of each payment as paid; the continuing jurisdiction a deferred
  division requires; Brown's own reserved-jurisdiction limit on its
  retroactive reach.
- **`pensiongillmore_time_rule_apportionment`** (*Lehman* pp. 176,
  187, 188) — the court must apportion; it has discretion in method;
  the result must be "reasonable and fairly representative of the
  relative contributions of the community and separate estates"; the
  time-rule fraction stated in full.
- **`pensiongillmore_lehman_enhanced_benefits`** (*Lehman* pp. 174,
  180) — a community interest in the benefits carries a community
  interest in the benefits *as enhanced*, but that does not make the
  enhancement community in its entirety; characterization versus
  apportionment.
- **`pensiongillmore_election_right_to_immediate_payment`**
  (*Gillmore* p. 423; *Cornejo* p. 383) — the employee spouse cannot
  time retirement to defeat the other's share; a unilateral choice to
  postpone retirement cannot impair that interest; Cornejo's summary
  of the resulting sequence of choices.
- **`pensiongillmore_payment_source_and_plan_limit`** (*Gillmore*
  p. 427; Fam. Code § 2610(b)(2)) — the employee spouse is free to
  keep working but must reimburse the other spouse from his own
  funds; the statute separately bars ordering the *plan* to pay before
  the member retires.
- **`pensiongillmore_election_consequences`** (*Gillmore* p. 428 and
  p. 428, fn. 9) — the option to wait and share in future increases,
  the right to elect immediate payment, and the footnote's
  "irrevocable election" language forfeiting future increases.
- **`pensiongillmore_cornejo_effective_date`** (*Cornejo* pp. 383,
  385, 387) — payments run from the date the motion seeking immediate
  payment is filed; no premotion payment; eligibility alone is too
  early.
- **`pensiongillmore_support_not_substitute`** (*Brown* p. 848;
  *Gillmore* p. 428) — support discretion is not a substitute for a
  property right; the benefit is divided first and support is
  addressed afterward.

Every clause states what the law is; none instructs the reader what to
do about a particular pension or proceeding. The drafting clauses say
in terms that the document does not divide, value, or apportion any
benefit, makes and preserves no election, and is not a motion.

## Independent double-fetch

- **CourtListener MCP quota: zero MCP tool calls.** Every source was
  reached with `curl` through the environment proxy (CA bundle
  `/root/.ccr/ca-bundle.crt`).
- **Cluster identification** (public JSON search API,
  `/api/rest/v4/search/?type=o&q=…`, no MCP): *Brown* cluster 1367330
  (15 Cal. 3d 838; 544 P.2d 561; filed 1976-01-16); *Gillmore*
  cluster 1271657 (29 Cal. 3d 418; 629 P.2d 1; filed 1981-06-08);
  *Cornejo* cluster 1801910 (13 Cal. 4th 381; 916 P.2d 476; filed
  1996-05-30); *Lehman* cluster 1242627 (18 Cal. 4th 169; 955 P.2d
  451; filed 1998-05-28). One search returned HTTP 429 and was
  retried inside the same turn after a sleep.
- **Opinion HTML pages**, each fetched twice from
  `https://www.courtlistener.com/opinion/<id>/<slug>/` with a
  `Referer: https://www.courtlistener.com/` header and two distinct
  full browser header sets — pass A Chrome/macOS UA with
  `Accept-Language: en-US,en;q=0.9`, pass B Firefox/Linux UA with
  `Accept-Language: en-GB,en;q=0.7`:
  - *Brown*: pass A HTTP 200, 107,801 bytes; pass B HTTP 200, 107,801
    bytes.
  - *Gillmore*: pass A HTTP 200, 84,008 bytes; pass B returned the
    HTTP 202 challenge body (2,446 bytes) twice and, on a third
    attempt after a sleep inside the same turn, HTTP 200 at 84,008
    bytes. A **third** fetch was taken after the merge (HTTP 200,
    84,008 bytes) and all Gillmore quotes were re-checked against it.
  - *Cornejo*: pass A returned the 202 challenge body and was retried
    to HTTP 200, 80,193 bytes; pass B returned 202 once and then HTTP
    200, 80,193 bytes.
  - *Lehman*: pass A returned 202 and was retried to HTTP 200,
    157,085 bytes; pass B HTTP 200, 157,085 bytes.
  - For every opinion the tag-stripped text of the two passes is
    **byte-identical** (`cmp` clean).
- **Phrase-level third check** (CourtListener public search feed,
  `cluster_id:<id> AND "<exact phrase>"`), one query per case, each
  returning `count=1` on the expected cluster: *Gillmore* ("A
  unilateral choice to postpone retirement cannot be manipulated so
  as to impair a spouse's interest in those retirement benefits"),
  *Brown* ("Pension rights, whether or not vested, represent a
  property interest"), *Cornejo* ("the correct answer is the date on
  which the nonemployee spouse files a motion seeking immediate
  payment"), *Lehman* ("the separate property interest is the
  percentage representing the remainder of 100 percent"). A first
  Lehman attempt containing a curly apostrophe ("employee spouse's")
  returned `count=0`; the index does not match on that character, so
  an apostrophe-free phrase from the same sentence was used instead.
  This is a search-index artifact, not a text discrepancy — the full
  sentence is present verbatim in both fetched copies.
- **Statute** (`leginfo.legislature.ca.gov`,
  `codes_displaySection.xhtml?lawCode=FAM&sectionNum=2610`), two
  independent fetches with two distinct User-Agent strings
  (Chrome/Windows and Safari/macOS): both HTTP 200 at 166,210 bytes.
  The raw HTML differs from byte 3,476 (the JSF `ViewState` token
  only); the extracted Code Text region is byte-identical between the
  two passes. Enactment note: "(Amended by Stats. 2019, Ch. 115,
  Sec. 22. (AB 1817) Effective January 1, 2020.)"
- **No non-CourtListener copy** of any of the four opinions was
  obtained: `courts.ca.gov` does not publish slip opinions from 1976,
  1981, 1996, or 1998, and Justia, FindLaw, Google Scholar, and
  case.law are egress-blocked in this environment. That limitation is
  disclosed in the `gap` of every clause resting on case law.

## Quote-by-quote verification

All 27 citation quotes across the 9 authority clauses were re-checked
**after** the merge, reading them back out of `data/clauses.json` and
comparing each against every independent fetch of its own source
(tags stripped, entities unescaped, `&nbsp;` replaced, runs of
whitespace collapsed to one space — no other change). Final run:
27 citations checked, 0 failures; Gillmore quotes matched 3/3 fetches,
all others 2/2.

Artifacts identified and disclosed rather than silently normalized:

- **OCR defects in the 1981 *Gillmore* scan.** The CourtListener text
  contains visible damage elsewhere in the opinion, including footnote
  2's "if he retires or' loses his job" and a stray doubled period at
  the end of that footnote. The quoted sentences were deliberately
  selected from defect-free passages; in particular, footnote 2's
  definition of a "matured" pension was **not** quoted for this
  reason, and the body clause describes maturity in its own words
  instead. Disclosed in the `gap` of
  `pensiongillmore_election_right_to_immediate_payment`.
- **OCR defects in the 1998 *Lehman* scan.** The same text renders
  "time rule" as "time rale" in several places and "born" as "bom".
  Every sentence quoted from Lehman was checked to be free of such
  damage — including the p. 188 sentence, which spells "time rule"
  correctly — and the defect is disclosed in the `gap` of
  `pensiongillmore_time_rule_apportionment` and referred to again in
  `pensiongillmore_lehman_enhanced_benefits`.
- **Markup-induced spacing inside two quoted sentences.** In the
  *Gillmore* page the phrase "in determining *spousal support*," is
  broken by an italics element, and in *Lehman* the star-page markers
  sit inside the quoted sentences. Both are rendering artifacts, not
  text differences; the normalization above closes them to a single
  space and changes nothing else.
- **Two quotations are themselves nested quotations.** *Gillmore*
  footnote 9 quotes *In re Marriage of Luciano* (1980) 104
  Cal.App.3d 956 for the "irrevocable election" language, and the
  *Brown* alimony sentence quotes *In re Marriage of Peterson* (1974)
  41 Cal.App.3d 642 (including that opinion's own ellipsis). Both
  quotes preserve the internal quotation marks and the ellipsis
  exactly as published, and both `gap` fields state that the language
  originates with the Court of Appeal.
- **Pinpoint pages** were derived from the star pagination embedded in
  the CourtListener Official Reports text by locating each quote
  relative to the surrounding `*NNN` markers, not from a printed
  reporter volume; the `gap` of
  `pensiongillmore_lehman_enhanced_benefits` says so.
- **Facts of the cited cases.** Several quoted sentences use the
  Gillmore and Cornejo parties' own names, pronouns, and dollar or
  year figures (for example Lehman's 17.39 and 32.67 years). Each
  affected `gap` states that these are the cited parties' own facts
  and say nothing about any other marriage.
- **Overlap with an existing document.** Fam. Code § 2610(b) is quoted
  in `qdro_ca_retirement_division_limits`; this document quotes only
  subdivision (b)(2) and its `gap` states that the two documents are
  not independent sources as to that statutory point.

## Corpus-wide validation after merge

- Both `data/clauses.json` and `data/documents.json` parse as JSON.
- Totals: 5,706 clauses (up from 5,695) and 677 documents (up from
  676). Family Law now has 86 documents.
- All 5,706 clause ids unique; all 677 document ids unique.
- Every id in every document's `clauseOrder` resolves to an existing
  clause (0 problems corpus-wide); 0 unreferenced clauses.
- Every `{{placeholder}}` in any clause body or gap resolves to a
  field declared by every document that orders that clause (0
  problems corpus-wide). The five fields declared here are
  `party1Name`, `party2Name`, `countyOfFiling`, `dateSigned`,
  `cityState`, matching the convention of the other Family Law
  information sheets.
- Key order checked programmatically: authority clauses are exactly
  `id, title, kind, status, checkedDate, body, gap, citations`;
  drafting clauses are exactly `id, title, kind, body`; each citation
  is exactly `case, cite, url, quote`; every authority clause has a
  non-empty `gap`; every `status` is `"verified"`.
- The document's top-level keys use the current order
  (`id, title, description, categories, clauseOrder, fields`).
- `checkedDate` on every new authority clause: `2026-09-13`.
- `git diff --stat` after the merge shows insertions only (273 lines
  in `data/clauses.json`, 53 in `data/documents.json`); no existing
  line was modified or removed.
