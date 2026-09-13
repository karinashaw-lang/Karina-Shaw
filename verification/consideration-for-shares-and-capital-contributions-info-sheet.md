# Business Formation, new document: What Counts as Payment for an Ownership Stake — Consideration for Corporate Shares and Contributions to an LLC, Limited Partnership, or General Partnership — Information Sheet

Part of wave 170 (Business Formation category; wave 170 covers the same
four categories as waves 146/148/150/152/154/156/158/160/162/164/166/168:
Confidentiality & IP, Ending employment, Business Formation, Real
Estate).

## Why this document

The brief's candidate list was checked first against the 88 existing
Business Formation documents in `data/documents.json`. Almost every
suggestion was already a whole document: limits on distributions
(`distribution_restrictions_info_sheet`), derivative actions and the
demand requirement (`shareholder_derivative_lawsuit_info_sheet`),
interested-director transactions
(`self_dealing_interested_director_officer_transactions_info_sheet`),
§ 2115 (`pseudo_foreign_corporation_2115_info_sheet`), statutory close
corporations (`close_corporation_info_sheet`), the § 25102(f) limited
offering exemption (`california_limited_offering_exemption_info_sheet`),
suspension and revivor
(`certificate_of_revivor_reinstatement_info_sheet`), and entity
conversion (`statutory_conversion_info_sheet`). Partnership formation by
conduct (§ 16202) is already covered across
`partnership_formation_default` and the joint venture document's
`jv_partnership_law_no_dedicated_statute` and
`jv_property_coownership_distinction` clauses, so it was dropped as a
near-duplicate.

Greps of both data files then showed a real hole in the most basic
formation question of all — *what may be given in exchange for the
ownership stake*: `Corp. Code § 409` (0 hits), `§ 410` / `§ 411` /
`§ 412` in this sense (0), `17704.02` (0), `17704.03` (0), `15905.01` /
`15905.02` (0), "consideration for shares" (0), "watered stock" (0),
"promissory note of the purchaser" (0). The single corpus hit for
"future services" was in the § 83(b) vesting clause of a different
document, about a substantial risk of forfeiture, not about what counts
as payment for stock. Labor Code §§ 406 and 407 and the carve-outs at
Corp. Code §§ 408(c) and 17704.01(e) were likewise absent.

This is a question founders actually get wrong: California's corporate
statute excludes the purchaser's own promissory note and future services
as payment for shares, while the LLC and limited partnership statutes
expressly list promissory notes and "contracts for services to be
performed" as permitted contributions. The document states both rules
side by side from the statutes themselves.

## What this document covers

15 clauses: 2 drafting (purpose/scope declaration, preparation and
signature block) and 13 authority clauses.

- **`payforshares_corporate_permitted_consideration`** — Corp. Code
  § 409(a)(1) (the five categories: money paid; labor done; services
  actually rendered to the corporation or for its benefit or in its
  formation or reorganization; debts or securities canceled; tangible or
  intangible property actually received) and § 409(a)(2) (share
  dividends, splits, reclassifications, conversions, exchanges).
- **`payforshares_notes_and_future_services_excluded`** — the closing
  proviso of § 409(a)(1): neither promissory notes of the purchaser
  (unless adequately secured by collateral *other than the shares
  acquired*, or unless permitted by § 408) nor future services constitute
  payment or part payment for shares.
- **`payforshares_section_408_plans`** — § 408(a) (employee/director
  stock purchase or option plans; the corporation may aid such persons in
  paying "by compensation for services rendered, promissory notes or
  otherwise") and § 408(b) (the list of permitted plan features).
- **`payforshares_labor_code_bond_and_carveouts`** — Lab. Code § 406
  (property put up by an employee or applicant is deemed put up as a
  bond, "regardless of the wording of the agreement"), Lab. Code § 407
  (investments and the sale of stock or an interest in a business in
  connection with securing a position are "illegal as against the public
  policy of the State"), and the carve-outs at Corp. Code § 408(c),
  § 408(c)(2), § 17704.01(e), and § 17704.01(e)(1).
- **`payforshares_board_valuation_and_fully_paid`** — § 409(e) (the board
  "shall state by resolution its determination of the fair value to the
  corporation in monetary terms" of non-money consideration; GAAP
  sentence) and § 409(b) (shares so issued are fully paid and
  nonassessable; absent fraud in the transaction the directors' judgment
  of value is conclusive).
- **`payforshares_timing_and_partly_paid_shares`** — § 410(b) (full
  agreed consideration paid prior to or concurrently with issuance) and
  § 409(d) (the partly paid share mechanism, the certificate/initial
  transaction statement disclosure, and the proportionate dividend rule).
- **`payforshares_who_owes_unpaid_consideration`** — § 410(a)
  (subscribers and original issuees liable to the corporation for the
  full agreed consideration), § 411 (good faith transferee liable only
  for the amount shown unpaid), § 412 (transferees of partly paid shares
  with notice or actual knowledge).
- **`payforshares_shareholder_determination_of_consideration`** —
  § 409(c) (articles may reserve the consideration decision to the
  shareholders) with § 152's definition of "approved by (or approval of)
  the outstanding shares."
- **`payforshares_llc_contributions_are_broader`** — § 17704.02 (a
  contribution may consist of "money, services performed, promissory
  notes, other agreements to contribute money or property, and contracts
  for services to be performed") and § 17704.01(d) (a person may become a
  member without making or being obligated to make a contribution).
- **`payforshares_llc_contribution_obligations_enforced`** —
  § 17704.03(a) (obligation not excused by death or inability; converts
  to money at the company's option), (b) (compromise only by consent of
  all members; conditional obligations), (c) (creditor who acts in
  reliance may enforce), and (d) (UVTA and equitable remedies preserved).
- **`payforshares_limited_partnership_contributions`** — § 15905.01 (same
  broad list as the LLC act) and § 15905.02(a), (b), (d) (including the
  act's express menu of default remedies a partnership agreement may
  impose, enforceable unless shown "unreasonable under the circumstances
  existing at the time the agreement was made").
- **`payforshares_general_partnership_default_rules`** — § 16401(a)(1),
  (b), (h): capital accounts credited with contributions, equal profit
  shares regardless of contribution size, and no remuneration for
  services except in winding up.
- **`payforshares_securities_qualification_is_separate`** — § 25110, to
  keep the "what may be given" question distinct from the "may this
  security be sold at all" question, cross-referencing this corpus's
  § 25102(f) and compensatory-equity-exemption documents.

## Genuine findings and corrections

- **No case-law anchor was invented.** The public CourtListener v4
  search JSON was queried for the exact phrases "Corporations Code
  section 409" and "Corp. Code, § 409" (one combined query, count = 1).
  The single hit is *Public Investment Ltd. v. Bandeirante Corp.* (D.C.
  Cir. 1984) 740 F.2d 1222 — a District of Columbia law decision whose
  footnote mentions California's § 409 only to compare state statutes
  ("Cal.Corp.Code § 409(a). The California Code does permit the sale of
  stock for secured promissory notes, and permits the sale of stock for
  third party notes."). Because it construes D.C. law, it is **not**
  cited in any clause. Instead, the three clauses that most invite a
  "what do the courts say" question (`..._corporate_permitted_
  consideration`, `..._notes_and_future_services_excluded`,
  `..._board_valuation_and_fully_paid`) disclose this negative search
  result in their `gap` field and say plainly that the clause rests on
  the statutory text alone. 74 of the 88 pre-existing Business Formation
  documents likewise cite no case law, so a statute-only sheet is within
  corpus norms — but the absence is disclosed rather than hidden.
- **Two web-sourced leads were checked and discarded.** A web search
  surfaced *Bowden v. Robinson* (1977) 67 Cal.App.3d 705 and a JDSupra
  post about § 409(e); the Bowden opinion is a Corporate Securities Act
  qualification/fraud case decided under pre-1977 law, and the JDSupra
  domain is egress-blocked from this environment. Neither is cited, and
  no proposition was taken on faith from a search-result snippet.
- **A paraphrase that would have characterized the statute was
  removed.** The § 25110 clause originally said qualification must be in
  place and "no stop order is in effect." The statute says "no order
  under Section 25140 or subdivision (a) of Section 25143 is in effect";
  calling those "stop orders" is an inference, so the body was rewritten
  to track the statutory words.
- **A cross-reference was verified rather than assumed.** § 408(b) makes
  repurchase rights "subject to the provisions of Chapter 5." Corp. Code
  § 500 was fetched to confirm that Chapter 5 of the General Corporation
  Law is "Dividends and Reacquisitions of Shares [500 - 511]" before the
  gap described it that way.
- **Quotes were trimmed, never stitched.** The § 412 quote ends at
  "until the shares are transferred to one who becomes liable therefor"
  and the § 17704.03(b) quote ends after the conditional-obligation
  sentence; in both cases the omitted proviso/example is described in the
  clause body in the corpus's own words rather than spliced into the
  quotation. The § 408(c) and § 17704.01(e) quotes are the subdivisions'
  lead-in sentences, with the enumerated paragraphs quoted separately or
  described.
- **Line-wrap artifacts only.** leginfo's rendered section text breaks
  long subdivisions mid-sentence (e.g. § 409(a)(1) wraps at "other than
  the / shares acquired"). Verification normalized whitespace and
  non-breaking spaces only; no character was changed, and typographic
  apostrophes (U+2019) were preserved exactly as leginfo renders them,
  matching existing corpus practice. No quote required correction.

## Method

- Statutes: Corp. Code §§ 152, 408, 409, 410, 411, 412, 15905.01,
  15905.02, 16401, 17704.01, 17704.02, 17704.03, 25110 and Lab. Code
  §§ 406, 407 were each fetched **twice by two genuinely different
  routes** on `leginfo.legislature.ca.gov` through the environment proxy:
  the single-section view (`codes_displaySection.xhtml`), fetched under
  two different User-Agent strings (Chrome/macOS and Firefox/Linux), and
  the whole-chapter or whole-article text view
  (`codes_displayText.xhtml`) under a third (Chrome/Windows) — Corp. Code
  ch. 4 (§§ 400-423) for §§ 408-412, Corp. Code div. 1 ch. 1 for § 152,
  Title 2.6 art. 4 for the §§ 17704.x sections, Title 2 ch. 4.5 art. 5
  for the §§ 15905.x sections, Title 2 ch. 5 art. 4 for § 16401, Title 4
  div. 1 pt. 2 ch. 2 for § 25110, and Lab. Code div. 2 pt. 1 ch. 3 art. 2
  for §§ 406-407.
- Case law: no case is cited. The one CourtListener search performed
  (public, unauthenticated v4 search JSON — **no MCP quota consumed at
  any point in this task**) is described above; the resulting D.C.
  Circuit opinion page was nonetheless fetched twice (a first attempt
  returned an empty HTTP 202; a second with a full browser header set
  returned 200) so that the footnote quoted in this file could be read in
  its own source rather than from a search snippet. Earlier search
  attempts hit the shared 125/day limit and returned HTTP 429; the work
  waited out the throttle inside the turn rather than working around it.
- All 33 citation quotes were programmatically confirmed to appear as
  exact substrings (after whitespace/nbsp normalization only) of **both**
  the single-section fetch and the independent multi-section text view of
  their source — 33/33, 0 failures.

## Verification

- Both data files parse; 5,976 clause ids unique; 697 document ids
  unique; every id in every document's `clauseOrder` across the whole
  corpus resolves to an existing clause (0 orphan clauses); every
  `{{placeholder}}` in every clause body and gap across the whole corpus
  resolves to a field declared by the document using it.
- Authority clauses carry exactly `{id,title,kind,status,checkedDate,
  body,gap,citations}` in that order, each with a non-empty `gap`;
  drafting clauses exactly `{id,title,kind,body}`; citations exactly
  `{case,cite,url,quote}`; the new document exactly `{id,title,
  description,categories,clauseOrder,fields}`. A whole-corpus schema
  check reported 0 problems.
- Source-independence disclosure: the subdivisions of a single section
  (§ 409(a)-(e); § 410(a)-(b); § 408(a)-(c); § 17704.01(d)-(e);
  § 17704.03(a)-(c); § 15905.02(a)-(d); § 16401(a)-(h)) are not
  independent of each other; independence here means each section's text
  was obtained through two different leginfo routes with different
  browser identifications and compared programmatically.
- Category count after merge: 89 Business Formation documents (was 88);
  corpus totals 697 documents and 5,976 clauses.
