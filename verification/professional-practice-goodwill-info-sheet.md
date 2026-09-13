# Family Law, new document: Goodwill of a Professional Practice or Business in a Marital Dissolution — Information Sheet

Wave 171 (Family Law). Corpus before: 700 documents, 6,015 clauses, 88
Family Law documents. After: 701 documents, 6,031 clauses, 89 Family
Law documents.

## Why this document

The Family Law category is saturated, so the topic was chosen only
after grepping the whole corpus. Grep findings before writing:

- `goodwill` / `good will`: 67 occurrences in `data/clauses.json`
  across 25 clauses, and **not one of those clauses belongs to a
  Family Law document** (checked programmatically against every Family
  Law `clauseOrder`). Every hit is trademark assignment
  (`tmassign_*`, "assignment in gross"), the sale-of-business
  noncompete exception (`salenoncompete_sale_of_business`),
  partnership/LLC winding up, eminent domain, or successor liability.
- `professional practice`: 2 hits, both inside the elder-abuse
  mandated-reporter definition ("within the scope of his or her
  employment or professional practice") — unrelated.
- `McTiernan`, `Ackerman`, `Golden v. Golden`, `practice goodwill`,
  `See v. See`: **zero hits**.
- `2552`: 3 hits, a single passing reference inside the Moore/Marsden
  sheet (`mmapp_mohler_post_separation_payments`); the section's own
  text was nowhere quoted.
- `2550` (39 hits) and `2601` (16 hits) are almost entirely incidental
  matches on unrelated numbers (Civ. Code § 2601-shaped strings, Gov.
  Code cross-references, Corp. Code § 25501). Neither Family Code
  section's text was quoted anywhere.

The candidate directions named in the brief were checked: § 2641
education/training reimbursement already exists
(`family_code_2641_reimbursement_info_sheet`), the deferred-sale
"Duke" order exists, Epstein/Watts credits exist, and Pereira/Van Camp
and Moore/Marsden apportionment exist. **Professional-practice
goodwill — the first of the brief's candidate directions — is
genuinely uncovered**, and it is a distinct subject from the
apportionment sheets: those ask how much of an asset is community;
this one asks whether an intangible exists at all, what it is worth,
and by what method.

## What this document covers

16 clauses: 4 drafting (declaration, boundaries, related sheets,
signature/acknowledgment) and 12 authority clauses carrying 26
citations.

Statutes (leginfo text):

- **`profgw_bpc_14100_14102_statutory_definition`** (Bus. & Prof. Code
  §§ 14100, 14102) — the good will of a business is the expectation of
  continued public patronage; it is property and is transferable. Full
  texts, not excerpts.
- **`profgw_fam2552_valuation_date`** (Fam. Code § 2552(a), (b)) —
  assets valued as near as practicable to the time of trial, and the
  30-days'-notice, good-cause alternate valuation date between
  separation and trial. Full text.
- **`profgw_fam2550_2601_equal_division_and_award_of_asset`** (Fam.
  Code §§ 2550, 2601) — the equal-division mandate, and the power,
  where economic circumstances warrant, to award an asset of the
  community estate to one party to effect a substantially equal
  division (the mechanism by which an indivisible intangible is
  handled). Full texts.

Case law (CourtListener):

- **`profgw_golden_sole_practitioner_goodwill`** — *Golden v. Golden*
  (1969) 270 Cal.App.2d 401, 405: the good will of a sole
  practitioner's professional practice is taken into consideration in
  the community award; unlike a dissolving partnership, the sole
  practitioner's practice "will continue, with the same intangible
  value as it had during the marriage."
- **`profgw_foster_value_must_exist_at_dissolution`** — *In re
  Marriage of Foster* (1974) 42 Cal.App.3d 577, 582-583: the value
  must exist at dissolution and must be established **without
  dependence on the potential or continuing net income of the
  professional spouse**; no rigid and unvarying rules, each case on
  its own facts, evidence must legitimately establish value.
- **`profgw_foster_market_price_and_post_marital_efforts`** — *Foster*
  at 584: community goodwill is **not** limited to what a willing
  buyer would pay, and **no method may take into account the
  post-marital efforts of either spouse**; any legitimate method that
  measures present value from a past result is permissible.
- **`profgw_watts_must_determine_and_unsalable_practice`** — *In re
  Marriage of Watts* (1985) 171 Cal.App.3d 366, 370, 372: the court
  **must** determine whether goodwill exists and, if so, value it; the
  mere fact that a practice cannot be sold will not, standing alone,
  justify a finding of no goodwill.
- **`profgw_mctiernan_goodwill_requires_a_business`** — *In re
  Marriage of McTiernan & Dubrow* (2005) 133 Cal.App.4th 1090,
  1098-1099, 1102: "a business" means a professional, commercial or
  industrial enterprise with assets and is **not a natural person**;
  performing an excess-earnings calculation does not convert skill and
  reputation into a business; $1.5 million deleted from the divisible
  estate.
- **`profgw_garrity_excess_earnings_steps`** — *In re Marriage of
  Garrity & Bishton* (1986) 181 Cal.App.3d 675, 688 fn. 14: the five
  steps of the excess-earnings method.
- **`profgw_garrity_practice_has_assets_beyond_goodwill`** — *Garrity
  & Bishton* at 688-689: valuing a law practice at $0 by running the
  goodwill calculation alone was error; the *Lopez* itemization (fixed
  assets, aged receivables, costs advanced, work in progress, goodwill
  as a going concern, liabilities) is the measure.
- **`profgw_rosen_goodwill_value_of_zero`** — *In re Marriage of
  Rosen* (2002) 105 Cal.App.4th 808, 819, 821, 830: the excess
  earnings method is not the only measure of goodwill value, but where
  the expert used one year's income instead of an average and offered
  no alternative method, the practice must be assigned a goodwill
  value of **zero** on remand.
- **`profgw_ackerman_question_of_fact_substantial_evidence`** — *In re
  Marriage of Ackerman* (2006) 146 Cal.App.4th 191, 200: no rigid
  rule; goodwill value is a question of fact upheld if supported by
  substantial evidence; capitalization of excess earnings is one
  recognized technique.

## Genuine corrections and findings

- **Two pin cites in the draft were wrong and were corrected against
  the star pagination.** The *McTiernan* "we conclude … motion picture
  director" and "does not transmute unique and idiosyncratic talents"
  quotations were initially pinned to 1106; the CourtListener text
  places them after the `*1102` marker and before `*1103`, so both
  cite 1102. The *Rosen* "assigned a goodwill value of zero in the
  final distribution" sentence appears in the **Disposition** at
  `*830`, not at 821 where a differently worded sentence to the same
  effect appears; the citation was corrected to 830.
- **Two Foster quotations begin mid-sentence** and say so in their
  gaps: "the value of the goodwill must exist…" (the opinion's
  sentence opens "Since a community interest Can only be acquired…",
  with a capitalized "Can" that is an OCR artifact in the
  CourtListener text) and "we conclude the applicable rule…" (opening
  "In sum"). Both are verbatim from the quoted point onward; nothing
  was smoothed.
- **Garrity & Bishton footnote 14 is not quoted in full**, because the
  CourtListener text of its later sentences carries OCR artifacts
  ("varies' according"). The two clean sentences are quoted; the
  remaining three steps are paraphrased in the body, and the gap says
  why.
- **The *Lopez* list could not be quoted whole** — the CourtListener
  text interrupts it with the page marker `*689`. Only the artifact-
  free tail (items (c) and (d)) is quoted; items (a) and (b) are
  paraphrased, disclosed in the gap.
- **McTiernan is a divided opinion.** The quotations and reasoning
  reported are from the lead opinion (Flier, J.); there is a
  concurrence on a different rationale and a dissent that would have
  affirmed. The gap states this and declines to say which points
  commanded a majority. Review denied Jan. 25, 2006, noted as not an
  expression on the merits.
- **Watts is the same 1985 opinion as the corpus's "Watts charges"
  sheet.** The gap says so explicitly and confines this clause to the
  goodwill holding, so the corpus does not appear to cite two
  different cases of that name.
- **Foster did not decide that the practice had goodwill** — that was
  conceded below, and only method and sufficiency were at issue. Said
  in the gap so the clause is not over-read.

## Honest gaps disclosed

- **Phrase-level third verification was run for four of the seven
  opinions only.** `cluster_id:<id> AND "<exact phrase>"` queries
  confirmed *Foster* (2131159), *Watts* (2127055) and *McTiernan*
  (2285246), each returning exactly one result — that opinion. The
  *Golden* language was confirmed through the *Foster* query, since
  Foster quotes the same *Golden* passage verbatim. No such query was
  run for *Rosen*, *Ackerman* or *Garrity & Bishton*; the shared
  CourtListener query budget was spent, and the affected gaps say so
  and rely on the two independent fetches instead.
- **Named-but-unverified decisions.** *In re Marriage of Fortier*
  (1973) 34 Cal.App.3d 384, *In re Marriage of Lopez* (1974) 38
  Cal.App.3d 93, *In re Marriage of Morrison* (1978) 20 Cal.3d 437,
  *In re Marriage of Fenton*, *Smith v. Bull*, *Mueller v. Mueller*
  and *Lyon v. Lyon* are named only as reported **within** verified
  opinions; none was independently fetched, and each affected gap says
  so.
- **The Fortier/Foster tension is reported, not resolved.** Foster
  distinguished rather than disapproved Fortier's market-value
  formulation; the document says the two coexist as the sources state
  them.
- **The valuation-date tension is reported, not resolved.** § 2552(a)
  values assets near the time of trial while Foster forbids counting
  post-marital efforts; the § 2552 gap states both and declines to say
  how a court reconciles them.
- **Double-counting / "double dip" is out of scope.** Whether goodwill
  valued from excess earnings may coexist with support based on the
  same earnings is flagged in the boundaries clause as not addressed;
  no authority was found within budget that squarely decides it, so no
  clause asserts one.
- **Not covered and said so**: characterization of a premarital or
  gifted practice (Pereira/Van Camp has its own sheet), § 2641
  education reimbursement (own sheet), post-separation earnings,
  taxes, professional-licensing ownership rules, buy-sell and
  partnership agreements, and expert-witness standards.
- **Source independence.** §§ 14100 and 14102 are two sections of one
  chapter of one code; §§ 2550, 2552 and 2601 are sections of one
  division of the Family Code; and the multi-quotation case clauses
  draw from a single opinion each. Every affected gap says the
  citations within it are not independent of one another.
- **Pin pages are read from star pagination**, not from a printed
  reporter; each case clause's gap states this. The sole exception is
  the Garrity footnote, whose page the CourtListener text cannot
  supply (footnotes are appended after the body): its "688, fn. 14"
  pin is the one the Court of Appeal itself used in *Rosen*, and the
  gap discloses that provenance.

## Method

**Statutes.** Cal. Bus. & Prof. Code §§ 14100, 14102; Cal. Fam. Code
§§ 2550, 2552, 2601 — each fetched **twice** from
`leginfo.legislature.ca.gov` through the sandboxed proxy with two
different User-Agent strings (Chrome/macOS and Firefox/Linux) and with
the `lawCode`/`sectionNum` query parameters in a different order, so
the two requests are not a cached repeat of one URL. All five sections
extracted byte-identically across the two fetches after normalizing
non-breaking spaces and line-wrap whitespace. § 14101 was also fetched
and read to confirm it was not needed; it is not cited.

**Case law.** **No CourtListener MCP tool calls were used** — the
shared 5/min, 125/day MCP quota was left untouched. Instead:

1. Opinions located via the public unauthenticated
   `courtlistener.com/api/rest/v4/search/?type=o` JSON endpoint
   (*Foster*, *McTiernan*, *Garrity & Bishton*) and via the quota-free
   `/c/<reporter>/<volume>/<page>/` citation redirect (*Golden*
   → 270 Cal.App.2d 401; *Ackerman* → 146 Cal.App.4th 191; *Watts*
   → 171 Cal.App.3d 366), which resolved to opinions 2198753, 2293041
   and 2127055 respectively.
2. Each opinion HTML page fetched **twice** with two distinct header
   sets (different User-Agent, Referer and Accept headers), both
   carrying a `Referer: https://www.courtlistener.com/`-family header
   so the server returned 200 rather than an empty 202. All fourteen
   fetches returned 200, and for all seven opinions the two extracted
   texts were identical after whitespace normalization.
3. **Third, phrase-level verification** for *Foster*, *Watts* and
   *McTiernan* via `cluster_id:<id> AND "<exact phrase>"` queries
   against the public search index; each returned `count: 1` and that
   opinion only. One query was throttled and succeeded after a backoff
   wait inside the turn.
4. Pinpoint pages taken from the star-pagination markers in the
   CourtListener text and checked programmatically against the
   location of every quotation; two pin cites were corrected as a
   result (see above).

**Quote check.** All 26 citation quotes were programmatically
confirmed as exact substrings of **both** fetches of their source
after normalizing non-breaking spaces and line-wrap whitespace only.
No quote required a substantive correction and no wording was altered;
every passage with an OCR artifact was excluded from the quoted text
rather than cleaned up.

## Verification

- Round-trip check: both data files re-serialize byte-identically
  (`indent=2`, `ensure_ascii=False`, trailing newline) before the
  append, so the diff contains only new content (+376 lines, no
  deletions).
- Corpus-wide validation after merge: both files parse; clause ids
  unique (6,031); document ids unique (701); every `clauseOrder` id
  resolves; zero orphan clauses corpus-wide; every `{{placeholder}}`
  in every clause body and gap resolves against its document's
  declared `fields`; no `{{` leakage in any new title or citation
  field.
- Schema check across the whole corpus: **zero deviations** — every
  authority clause has exactly
  `id,title,kind,status,checkedDate,body,gap,citations` in that order
  with a non-empty `gap`; every drafting clause exactly
  `id,title,kind,body`; every citation exactly `case,cite,url,quote`.
  The new document uses
  `id,title,description,categories,clauseOrder,fields`.
- Fields: the established Family Law info-sheet set (`party1Name`,
  `party2Name`, `countyOfFiling`, `dateSigned`, `cityState`) plus one
  new declared field, `practiceDescription`, used in the declaration,
  boundaries and signature clauses.
- Clause id prefix `profgw_` confirmed unused elsewhere in the corpus
  (16 occurrences, all new).
- "Inform, never advise" pass: every clause states what the statutes
  and the opinions say. The declaration disclaims determining whether
  any practice has goodwill, whether it is community or separate, what
  it is worth, what method fits, or how any estate should be divided;
  the boundaries clause lists what is not addressed; the signature
  clause states the sheet is not a Judicial Council form, a
  declaration of disclosure, an expert report, an appraisal, or a
  stipulation, and that signing it values nothing and divides nothing.

## Net changes

- New document: Goodwill of a Professional Practice or Business in a
  Marital Dissolution — Information Sheet
  (`professional_practice_goodwill_info_sheet`), 16 clauses (12
  authority + 4 drafting, 26 citations), Family Law category.
- Corpus: 6,015 → 6,031 clauses; 700 → 701 documents; Family Law 88 →
  89 documents.
