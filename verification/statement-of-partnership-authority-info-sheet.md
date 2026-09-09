# Business Formation, new document: Statement of Partnership Authority — Information Sheet

## Why this document

Business Formation slot of wave 146 (parallel with one new document
each in Confidentiality & IP, Ending Employment, and Real Estate, each
worked in its own isolated git worktree). All eight corpus categories
sat at exactly 76 documents before this wave.

Dup-check: read the full list of the category's existing ~76 titles
in `data/documents.json` first. The category already covers LLC
operating agreements, corporate/nonprofit formation and bylaws,
partnership *formation* (`partnership_agreement`) and *dissolution*
(`general_partnership_dissolution_winding_up_info_sheet`), the
Statement of Information periodic filing, the fictitious business name
(DBA) statement, foreign-entity qualification, professional
corporations, series LLCs, and a long tail of governance-doctrine
sheets (preemptive rights, cumulative voting/director removal — inside
`corporate_bylaws` — voting trusts, self-dealing, director duty of
care, etc.). Several candidate topics suggested by the task brief were
checked and rejected as already covered: cumulative voting for
directors and director removal are both inside the existing
`corporate_bylaws` clauses (`bylaws_cumulative_voting`,
`bylaws_director_removal`); the $800 minimum franchise tax and its
first-year exemptions are covered inside the existing LLC Articles of
Organization and Articles of Incorporation documents; 83(b) elections
are covered inside the Founders' Agreement document. A full-corpus
grep for "statement of partnership authority," "16303," "16304," and
"16302" returned zero hits, confirming genuine novelty for the actual
topic selected: the optional Secretary of State filing under
Corporations Code §§ 16105, 16301-16305 (part of the Uniform
Partnership Act of 1994) by which a general partnership can publicly
identify its partners, name the partners authorized to transfer
partnership real property, and grant or limit individual partners'
authority — distinct from both `partnership_agreement` (the partners'
private governing contract) and the dissolution info sheet.

## What this document covers

11 clauses: 2 drafting (intro, closing acknowledgment) and 9 authority
clauses, citing Corp. Code §§ 16301(1)-(2), 16303(a), 16303(b),
16303(d)(1)-(2), 16303(e)-(f), 16304, 16105(a),(c),(d),(e),(f),
16302(a),(d), and *Elias Real Estate, LLC v. Tseng*, 156 Cal.App.4th
425 (2007) (two citations):

- **`sopa_default_partner_agency`** — the default rule (independent of
  any filing) that each partner is an agent of the partnership for
  ordinary-course acts, and that non-ordinary-course acts require
  actual authorization from the other partners.
- **`sopa_filing_and_required_content`** — the optional filing itself
  and its required content under § 16303(a).
- **`sopa_agent_maintained_partner_list`** — the agent-list alternative
  to listing every partner directly, § 16303(b).
- **`sopa_conclusive_grant_of_authority`** — the conclusive-in-favor-
  of-good-faith-value-givers effect of a filed grant of authority,
  both the general rule and the parallel recorded-real-property rule,
  § 16303(d)(1)-(2).
- **`sopa_notice_of_limitations`** — the narrower constructive-notice
  rule: a limitation on authority is only deemed known to third
  parties when it concerns recorded real property, § 16303(e)-(f).
- **`sopa_statement_of_denial`** — the companion filing by which a
  named partner can contest the statement, § 16304.
- **`sopa_execution_amendment_filing_mechanics`** — general filing,
  execution (two-partner signature plus a perjury declaration),
  amendment/cancellation, and partner-notice mechanics, § 16105(a),
  (c), (d), (e), (f).
- **`sopa_property_transfer_by_holding_form`** — how partnership
  property is actually transferred depending on how title is held,
  § 16302(a), (d).
- **`sopa_ordinary_course_case_illustration`** — *Elias Real Estate,
  LLC v. Tseng*'s application of the ordinary-course distinction to a
  real fact pattern (a clothing-import partnership's sale of its real
  property), including the statute-of-frauds consequence.

## Genuine findings

- **A confirmed structural link the statute states explicitly**:
  § 16301's default agency rule textually operates "subject to the
  effect of a statement of partnership authority under Section
  16303," and § 16302(a)(1)'s property-transfer rule is likewise
  stated "subject to the effect of a statement of partnership
  authority under Section 16303" — both clauses' `gap` fields and
  bodies reflect this rather than treating the default rule and the
  optional filing as unrelated topics.
- **A real, on-point Court of Appeal case found via targeted
  CourtListener search** (`"statement of partnership authority"
  California`, type "o"): *Elias Real Estate, LLC v. Tseng* directly
  interprets § 16301 (via its predecessor, former § 15009) in a
  concrete real-property-sale dispute, including a footnote that
  quotes the current § 16301 text verbatim — independently confirming
  the leginfo statutory text fetched separately.
- **A disclosed scope boundary on the case citation**: the case's
  holding rests on the *specific* partnership's actual business
  (clothing import/distribution, not real estate) — the clause's `gap`
  field discloses this is a fact-bound application, not a general rule
  about partnership real-estate sales.

## Honest gap(s) disclosed

This document does not draft or file an actual statement of
partnership authority or statement of denial for any specific
partnership; does not resolve, for any specific transaction, whether
it was "apparently in the ordinary course" of a specific partnership's
business or whether a specific third party "gave value without
knowledge to the contrary"; does not restate § 16105(g)'s narrower
dishonored-payment cancellation procedure or the cross-referenced
notice rules in §§ 16704 and 16805; does not state the dollar amount
of any Secretary of State filing fee or county recording fee; and does
not summarize §§ 16302(b)-(c)'s more conditional property-recovery
rules against a transferee verbatim (they are described rather than
quoted, and the clause's `gap` field discloses this).

## Method

Fetched Corp. Code §§ 16105, 16301, 16302, 16303, and 16304 directly
from leginfo.legislature.ca.gov, each fetched twice independently via
curl with two distinct User-Agent strings ("Mozilla/5.0 ...
Groundtruth-Research-UA1/1.0" and "GroundtruthResearchBot/2.0
(+https://example.invalid; independent-fetch-2)"). All five sections'
two fetches were diffed and found byte-identical after HTML-tag
stripping and whitespace normalization (16301: 1,368 chars; 16302:
2,848 chars; 16303: 3,792 chars; 16304: 1,041 chars; 16105: 3,182
chars). One initial fetch attempt for § 16302 (first UA) and later for
§§ 16105/16301 (both UAs) hit a transient `Recv failure: Connection
reset by peer` from the agent proxy; all were retried successfully
within the same session (§ 16302 succeeded on retry with the same
UA1 string; §§ 16105/16301 succeeded on a retry loop with up to 4
attempts and short backoff) — a transient network condition, not a
source-content defect, and not something requiring a `gap` disclosure
since the final content used was confirmed identical across both
independent User-Agent fetches.

*Elias Real Estate, LLC v. Tseng* was located via
`mcp__CourtListener__search` (type "o", query `"statement of
partnership authority" California`), returning exactly one result:
cluster_id/opinion_id 2290594 (the two coincide for this opinion).
Fetched twice independently via `mcp__CourtListener__get_endpoint_item`
(endpoint_id "opinions", item_id 2290594, fields ["id",
"html_with_citations"] then ["id", "plain_text", "html_with_citations"]
on the first call) — `plain_text` was empty for this opinion, so
`html_with_citations` was used as the source text; both calls returned
byte-identical HTML. The HTML was saved to a local file, HTML tags
stripped, entities unescaped, and both quoted spans were chosen to
fall entirely within plain-text passages (no embedded `<em>`/`<span>`
citation-link tags mid-quote) so that tag-stripping could not
introduce or remove any quoted character. Both quotes were then
programmatically confirmed as exact, whitespace-normalized substrings
of the cleaned opinion text.

All 18 citation instances across the 9 authority clauses (16 statutory
+ 2 case) were programmatically confirmed as exact substrings of their
respective independently-fetched, whitespace-normalized source texts
before the document was assembled — script run against the actual
`spa_fetch/*_ua1.txt` extracts and the cleaned Elias opinion text, all
18 returned `True` with zero manual quote adjustments needed after the
first pass (no genuine defects found; no `gap`-field correction
disclosures were required for any citation's quote text itself).

## Verification

- All five statutory sections fetched twice independently with
  distinct User-Agent strings; all byte-identical after normalization.
  Both case-law fetches (via `get_endpoint_item`, called twice)
  byte-identical.
- All 18 citation `quote` strings programmatically confirmed as exact
  substrings of their source text (16 statutory citations across
  §§ 16105, 16301, 16302, 16303, 16304; 2 case citations from *Elias
  Real Estate, LLC v. Tseng*).
- Checked for `{{` leakage (unbalanced double-brace placeholders) in
  every clause's `body`/`gap` — none found; used-placeholder set
  ({`partnershipName`, `preparerName`, `dateSigned`, `cityState`})
  matches exactly the four fields declared on the new document, with
  none left unused and none referenced but undeclared.
- Checked schema conformance against `data/clauses.json`'s existing
  shape: every authority clause has exactly
  `{id,title,kind,status,checkedDate,body,gap,citations[{case,cite,
  url,quote}]}`; every drafting clause has exactly `{id,title,kind,
  body}` — no extra or missing keys.
- Checked for duplicate clause IDs and duplicate document IDs against
  the full corpus (post-merge counts: 4,845 → 4,856 clauses; 600 → 601
  documents; both counts match exactly 11 new clauses and 1 new
  document with zero collisions). Confirmed the `sopa_` clause-id
  prefix has zero prior collisions in the corpus.
- Checked every citation's `case` field for emptiness — all 18
  populated with proper citation identifier strings.
- Checked source-independence disclosure logic: clauses citing
  multiple subdivisions of the same statutory section (e.g.
  `sopa_default_partner_agency` citing § 16301(1) and (2);
  `sopa_execution_amendment_filing_mechanics` citing five subdivisions
  of § 16105) correctly disclose in their `gap` field that these are
  one statutory source, not independent corroboration; the two Elias
  quotes are likewise disclosed as one case, not two sources.
- Ran a corpus-wide validation script (JSON parses for both files,
  clause-id uniqueness, document-id uniqueness, every document's
  `clauseOrder` entries resolve to an existing clause id, the new
  document's placeholders all resolve to its declared fields, no empty
  `case` fields) — all checks passed cleanly.
- Confirmed the git diff for this change is purely additive (2 files
  changed, 266 insertions, 0 deletions) — no existing content was
  modified.

## Net changes

- New document: Statement of Partnership Authority — Information Sheet
  (`statement_of_partnership_authority_info_sheet`), 11 clauses (9
  authority + 2 drafting), in the Business Formation category. 4 new
  fields (`partnershipName`, `preparerName`, `dateSigned`, `cityState`)
  — all four reused verbatim from the existing corpus convention (e.g.
  `partnership_agreement`, `general_partnership_dissolution_winding_up_info_sheet`),
  no newly-invented field ids.
- Corpus: 4,845 → 4,856 clauses; 600 → 601 documents. Business
  Formation category: 76 → 77 documents.
