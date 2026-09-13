# Hiring, new document: Car Wash Employer Registration, Bonding, and Successor Liability (Labor Code §§ 2050–2066) — Information Sheet

## Why this document

Wave 171, Hiring slot (one of four parallel tasks; wave 171 covers
Hiring, During employment, Estate Planning, and Family Law, continuing
the round-robin run by waves 145/147/.../169).

The 88 existing Hiring documents were listed from `data/documents.json`
first. Candidate topics suggested for this wave were grepped against
both `data/clauses.json` and `data/documents.json` before a choice was
made:

- Human trafficking notice posting (Civ. Code § 52.6) — 25 hits in
  `clauses.json`; already covered.
- Domestic Worker Bill of Rights (Lab. Code § 1450 et seq.) — 6 hits
  on "Domestic Worker" plus a document title match; already covered.
- Farm labor contractor licensing (Lab. Code § 1682 et seq.) —
  `farm_labor_contractor_licensing_info_sheet`; already covered.
- Talent agency licensing (Lab. Code § 1700 et seq.) —
  `talent_agencies_act_info_sheet`; already covered.
- Janitorial services registration (Lab. Code § 1420 et seq.) —
  `janitorial_employer_registration_info_sheet`; already covered.
- Lab. Code § 2778 written contract requirements — 9 hits; already
  covered.
- CRD pre-employment inquiry regulations (2 CCR § 11016) — 0 hits, but
  set aside in favor of a topic with a self-contained, quotable
  statutory scheme and on-point published case law.

The topic chosen — **car wash employer registration under Labor Code
Part 8.5 (§§ 2050–2068)** — was confirmed genuinely uncovered: a
corpus-wide search for "car wash", "Car Wash", "carwash", "2050",
"2051", "2054", "2055", "2059", "2064", "2066", and "Car Wash Worker
Restitution Fund" returned **zero** hits in either data file. It is a
close structural sibling of the corpus's existing industry-registration
info sheets (janitorial, farm labor contractor, garment manufacturing)
and fills the same shelf for a different industry.

## What this document covers

16 clauses: 2 drafting (intro, acknowledgment) and 14 authority
clauses, with 52 verbatim citations drawn from Lab. Code §§ 2050,
2051(a), (b)(1), (b)(2), (c), 2052 (intro, (a), (b), (c), (e)), 2053,
2054, 2055 (intro, (a), (b), (b)(1)–(b)(4), (c), (d)), 2056, 2057,
2058, 2059(a)(1), (a)(2), (b), 2060, 2061 (intro, (a), (a)(6), (a)(8),
(a)(9), (b)), 2062 (intro, (a), (b), (c)), 2063, 2064, 2065(a),
(a)(1)(B), (a)(2), (a)(2)(A), 2066 (intro, (a)–(d)), plus three
passages from *People ex rel. Harris v. Sunset Car Wash, LLC* (2012)
205 Cal.App.4th 1433.

- **`carwashreg_covered_business_and_employee_defined`** — § 2051's
  definitions of "car washing and polishing" (excluding motor vehicle
  repair), "employer," and a deliberately broad "employee" that names
  minors and non-citizens and covers tip-paid and piece-, task-, and
  commission-paid workers.
- **`carwashreg_employer_exclusions`** — § 2051(b)(2)'s five excluded
  categories (charitable/youth/service/veteran/sports fundraisers,
  dealers and rental agencies, new motor vehicle dealers, automotive
  repair dealers, and self-service or automated washes staffed only
  for cashiering or maintenance).
- **`carwashreg_annual_registration_required`** — §§ 2054 and 2060,
  with § 2050's police-power declaration and cumulative-penalty
  sentence.
- **`carwashreg_registration_conditions`** — § 2055's local-licensing
  proof, workers' compensation documentation, and fee conditions.
- **`carwashreg_surety_bond`** — § 2055(b)'s $150,000 surety bond, its
  beneficiaries (including employees damaged by a § 351 or § 353
  gratuities violation), the 30-day cancellation notice, the bar on
  operating pending a replacement bond, and the collective bargaining
  agreement carve-out.
- **`carwashreg_written_application`** — § 2061's sworn application and
  its backward-looking disclosures of unpaid wages, judgments, liens,
  taxes, and prior Labor Code citations.
- **`carwashreg_denial_grounds`** — § 2062's three bars to registration
  or renewal (unsatisfied wage judgment, unpaid UI contributions,
  unpaid FICA).
- **`carwashreg_fees_and_restitution_fund`** — § 2059's per-branch fee
  and its increase limit, and § 2065(a)'s Car Wash Worker Restitution
  Fund and disbursement standard.
- **`carwashreg_proof_posting_and_renewal`** — §§ 2057, 2056, 2058.
- **`carwashreg_recordkeeping`** — § 2052's three-year records,
  including daily gratuities and the ages of minor employees.
- **`carwashreg_public_list_and_enforcement`** — §§ 2063 and 2053.
- **`carwashreg_civil_fine_unregistered`** — § 2064's $100-per-day fine
  capped at $10,000, and the § 2065 split of collected fines.
- **`carwashreg_successor_liability_statute`** — § 2066's four
  disjunctive successor-liability criteria.
- **`carwashreg_sunset_car_wash_construction`** — how the Second
  District construed "successor" in § 2066 in *Sunset Car Wash*, the
  due process holding, and the dissent.

## Genuine findings

- **The statute's own internal inconsistencies were quoted, not
  silently smoothed.** Three are disclosed in `gap` fields rather than
  corrected: (1) § 2055(d) conditions registration on "the fees
  established pursuant to Section 2059," while § 2061(b) conditions
  approval on a fee paid "pursuant to subdivision (d) of Section 2055"
  — a circular pair of cross-references; (2) § 2061(a)(8) cites
  "subparagraphs (A), (B), or (C) of **subparagraph** (6)" while the
  parallel § 2061(a)(9) cites "**paragraph** (6)"; (3) § 2053 names the
  enforcing agency "The Division of Labor Standards **and** Enforcement,"
  a styling that differs from § 2057's "Division of Labor Standards
  Enforcement." All are reproduced verbatim as enacted.
- **§ 2066(d) is ungrammatical as enacted** ("Is an immediate family
  member of any owner, partner, officer, or director of the predecessor
  employer of any person who had a financial interest in the predecessor
  employer"). The quote reproduces it exactly and the clause's `gap`
  says so and declines to interpret it.
- **The same sentence appears twice in § 2065.** "Fifty percent of the
  fines collected pursuant to Section 2064." is both § 2065(a)(1)(B)
  (Restitution Fund) and § 2065(b)(1)(A) (Car Wash Worker Fund). The
  quotation is attributed to the first, and the `gap` discloses the
  duplication so the attribution is checkable.
- **Section 2067 does not exist.** Part 8.5 runs 2050–2068 but skips
  2067: Chapter 3 is § 2066 alone, and Chapter 5 (§ 2068) is a
  one-time 2008 reporting duty. A fetch of `sectionNum=2067.` returned
  a page with no section body. Nothing in the document relies on 2067.
- **A live doctrinal tension is described without being resolved.**
  *Sunset Car Wash* was a 2-1 decision: the majority held that the four
  subdivisions of § 2066 *are* the definition of "successor," so an
  unrelated new tenant operating at the same site after a foreclosure
  was liable for the evicted predecessor's wage debts; the dissent read
  the statute to require actual succession to the business first. The
  clause reports both and states that this is one district's decision.
  Review was denied July 25, 2012.

## Honest gap(s) disclosed

Each authority clause's `gap` names what it does not restate.
Collectively: § 2051(d)'s definition of "commissioner"; the undefined
terms "intermittent basis," "ancillary," and "primarily engaged" in the
exclusions; the § 2055(b)(4)(A)–(D) items following the quoted colon
(summarized, not quoted); §§ 2061(a)(1)–(5) and (7) (summarized, not
quoted); the procedure for assessing or contesting a § 2064 fine and
for a § 2062 denial (notice, hearing, appeal rights are not stated in
those sections' own text); § 2065(b)'s separate Car Wash Worker Fund
and § 2065(c)'s rulemaking authorization; any regulations the
commissioner has adopted under § 2053; any current dollar figure for
the § 2059 registration fee, which the statute states only by reference
to administrative cost; and the relationship between § 2052 and the
general payroll-record duties of §§ 226 and 1174 and the IWC wage
orders. No clause determines that any specific business or individual
meets any statutory definition, qualifies for any exclusion, is
registered, or is a successor under § 2066.

## Method

**Statutes — two independent paths, two User-Agent strings.**

1. *Per-section fetches.* Each of §§ 2050–2068 was fetched individually
   from `leginfo.legislature.ca.gov` via
   `codes_displaySection.xhtml?lawCode=LAB&sectionNum=<n>.` with
   User-Agent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) ... Chrome/126.0".
   All returned HTTP 200 (2067 returned a page with no section body —
   see Genuine findings).
2. *Part-level fetches.* The same text was fetched a second time by a
   different endpoint —
   `codes_displayText.xhtml?lawCode=LAB&division=2.&title=&part=8.5.&chapter=<n>.`
   for chapters 1, 2, 3, and 5 — with a different User-Agent
   ("Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101
   Firefox/128.0"). One request (chapter 2) was cut off by the proxy
   with a connection reset and succeeded on retry after a short wait.
   A part-level fetch without a chapter parameter returned a page with
   an empty section list and was discarded rather than relied on.

Both are leginfo, the official publisher; they differ in endpoint,
page-generation path, and User-Agent. No independent non-leginfo full
text of these sections was used, and no third path was attempted —
disclosed here rather than implied.

**Case law — CourtListener, no MCP quota consumed.** The opinion was
located through the public unauthenticated
`api/rest/v4/search/?type=o&q="car washing and polishing"` endpoint via
curl (2 results; one on point). The opinion page
`/opinion/5811074/people-ex-rel-harris-v-sunset-car-wash-llc/` was then
fetched twice with two distinct header sets (Chrome-on-Windows and
Safari-on-macOS User-Agents, different `Accept-Language`, both with
`Referer: https://www.courtlistener.com/`); both returned HTTP 200 and
identical extracted text (25,347 characters). Because both HTML fetches
hit the same origin, a third, index-level check was run: a single
`search` query of the form
`cluster_id:5811074 AND "<phrase 1>" AND "<phrase 2>" AND "<phrase 3>"`,
carrying all three quoted passages, returned exactly 1 result (this
case) — confirming each phrase against CourtListener's search index
independently of the HTML page. No CourtListener MCP tool was called at
any point.

## Verification

- All **52** `citations[].quote` strings were checked programmatically
  as exact, whitespace-normalized substrings of **both** independent
  fetches of their source (statute quotes against both the per-section
  and the part-level leginfo text; case quotes against both opinion-page
  fetches). All 52 passed against both. The build script fails hard and
  writes nothing if any quote misses either source.
- The only artifacts encountered were HTML line-wrap whitespace inside
  long subdivisions (e.g. "The bond required by\n this section",
  "“Employer” does not\n include any charitable") and
  non-breaking spaces — normalized to single spaces per the corpus's
  established convention. No genuine textual defect was found, so no
  quote required a `gap` correction disclosure on that account.
- Checked for ellipsis-stitched quotes (`...` or `…`) — none; every
  quote is one contiguous run of source text.
- Checked every citation's `case` field for emptiness — all 52
  populated.
- Checked for `{{` placeholder leakage into any `title`, `gap`, or
  citation field — none (placeholders appear only in `body` fields).
- Checked schema conformance: each `drafting` clause has exactly
  `{id, title, kind, body}`; each `authority` clause has exactly
  `{id, title, kind, status, checkedDate, body, gap, citations}` in
  that key order, with a non-empty `gap`; each citation has exactly
  `{case, cite, url, quote}` in that key order.
- Checked the 16 new clause IDs against the full corpus — no
  collisions; the `carwashreg_` prefix was previously unused.
- Checked the new document ID (`car_wash_employer_registration_info_sheet`)
  against all 700 existing document IDs — no collision.
- Checked that `clauseOrder` lists exactly the 16 new clause IDs, in
  order, none missing and none extra.
- Checked that every `{{placeholder}}` used (`companyName`, `jobTitle`,
  `applicantName`, `dateSigned`) matches a declared field, and that
  every declared field is used — exact match both directions.
- Ran a corpus-wide validation after merging: both `data/clauses.json`
  and `data/documents.json` parse; 6,031 clause IDs unique corpus-wide;
  701 document IDs unique corpus-wide; every `clauseOrder` entry in
  every one of the 701 documents resolves to an existing clause; every
  `{{placeholder}}` in every referenced clause resolves to a field
  declared by its document (0 unresolved corpus-wide).
- Confirmed `git status --porcelain` was clean before the merge, and
  that the resulting diff is purely additive (530 insertions, 0
  deletions across the two data files).

## Net changes

- New document: Car Wash Employer Registration, Bonding, and Successor
  Liability (Labor Code §§ 2050–2066) — Information Sheet
  (`car_wash_employer_registration_info_sheet`), 16 clauses (14
  authority + 2 drafting), Hiring category. No new field IDs (all four
  reused from the existing corpus).
- Corpus: 6,015 → 6,031 clauses; 700 → 701 documents. Hiring category:
  88 → 89 documents.

## Wave 171 summary

Hiring slot of wave 171 (Hiring, During employment, Estate Planning,
Family Law). The other three slots were handled by parallel,
independent tasks.
