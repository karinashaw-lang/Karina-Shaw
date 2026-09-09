# Family Law, new document: Community Property Interest in Employer Stock Options (Hug/Nelson Time-Rule) — Information Sheet

Part of wave 149 (Family Law category; wave 149 continues the same
category set as waves 145/147: Hiring, During employment, Estate
Planning, Family Law).

## Why this document

The task brief flagged Family Law as unusually saturated (~77-78
existing documents per category corpus-wide, 77 confirmed by reading
the full `data/documents.json` title list) and specifically named
several already-covered topics (premarital agreements, DVROs,
paternity, cohabitation/Marvin claims, spousal/child support factors,
several kinds of adoption, §2580-2581 joint-title presumption). It
also named UCCJEA, interstate/international custody enforcement,
temporary/pendente lite spousal support, and community property
characterization of retirement benefits as candidate directions — all
four were confirmed already covered by name in the existing corpus
(`uccjea_child_custody_jurisdiction_info_sheet`,
`icara_hague_convention_child_abduction_return_info_sheet`,
`full_faith_credit_protective_order_info_sheet`,
`temporary_pendente_lite_spousal_support_info_sheet`,
`retirement_benefits_division_qdro_info_sheet`), so none of the four
suggested directions was usable as-is.

Searched the full corpus (`grep` across `data/clauses.json` and
`data/documents.json`) for a long list of candidate topics before
settling on one: transmutation (§850-852, already substantially
covered via the postnuptial agreement document's
`postnup_transmutation_*` clauses and a quitclaim deed clause), the
putative spouse doctrine (§2251, already covered via the nullity
document's `nullity_putative_spouse_doctrine` clause), DVPA firearm
relinquishment (§6389, already covered via `dvro_firearm_relinquishment`),
"coercive control" (already covered via existing DVPA §6320 clauses),
UCCJEA registration/enforcement (§3446, already covered within the
UCCJEA document), the best-interest-of-the-child factors (§3011,
already cross-referenced pervasively but not tested), Gavron warnings
and §4320 spousal support factors (already covered), and §7611 presumed
parent status (already covered). All of these were genuinely already
present.

Found the eventual topic — apportionment of employer stock options
between community and separate property when granted during marriage
but exercisable only after separation — by reading the `gap` field of
the existing `qdro_ca_retirement_division_authority` clause in the
retirement-benefits/QDRO document, which explicitly discloses: *"This
clause does not state how a court values or apportions a benefit that
was earned partly before marriage and partly during it (sometimes
called a 'time rule' or similar apportionment approach) — attempts to
verify a citable primary source (statute or case) for that specific
formula were not completed with confidence in the time available, so
that topic is omitted here rather than described."* Confirmed via
`grep` that "Pereira," "Van Camp," "Hug formula," "Nelson formula,"
"stock option" (in the community-property apportionment sense), and
"time rule" as applied to stock options do not appear anywhere in the
existing corpus. This is a genuinely new, well-scoped, non-duplicative
topic, analytically distinct from the existing QDRO/retirement-plan
document (which addresses pension and defined-contribution retirement
plans under Fam. Code § 2610 and ERISA, not employer stock options,
which have no analogous statute and are governed instead by case law).

## What this document covers

11 clauses: 2 drafting (declaration, worksheet/signature) and 9
authority clauses, citing Cal. Fam. Code §§ 760, 771(a), and 2550, and
two published California Court of Appeal decisions, In re Marriage of
Hug (1984) 154 Cal.App.3d 780 and In re Marriage of Nelson (1986) 177
Cal.App.3d 150:

- **`stockopt_general_community_property_rule`** (§760) — the general
  baseline: property acquired during marriage is community property.
- **`stockopt_postseparation_earnings_separate`** (§771(a)) — the
  competing baseline: earnings/accumulations after separation are
  separate property — setting up the characterization puzzle Hug and
  Nelson resolve for stock options that straddle the separation date.
- **`stockopt_hug_holding_broad_discretion`** (Hug) — the core
  holding: trial courts have broad discretion to select an equitable
  allocation method for stock options granted before separation but
  exercisable after, and are not locked into any one formula.
- **`stockopt_hug_time_rule_formula`** (Hug) — the specific time-rule
  fraction the Hug trial court applied and the Court of Appeal found
  was not an abuse of discretion (numerator: months of service from
  hire to separation; denominator: months from hire to
  exercisability).
- **`stockopt_no_single_formula_required`** (Hug + Nelson, same
  sentence quoted in both opinions) — no single rule or formula
  applies to every case; broad trial-court discretion to reach an
  equitable result on the facts.
- **`stockopt_nelson_three_categories`** (Nelson) — Nelson's
  three-way sorting of options by timing (already-exercisable before
  separation = wholly community per the trial court, undisputed on
  appeal; intermediate = partly community under a time rule; granted
  after separation = wholly separate).
- **`stockopt_nelson_alternate_start_date`** (Nelson) — Nelson's
  different time-rule starting point (grant date, not hire date) and
  the Court of Appeal's stated reason: the purpose of the particular
  employer's option grants (future-productivity incentive vs.
  attracting employees / rewarding past service) drives which starting
  point is appropriate.
- **`stockopt_postseparation_grant_separate_property`** (Nelson) — the
  affirmance that a specific post-separation option grant and bonus
  were properly found to be separate property, on a substantial-
  evidence standard of review tied to the specific factual record.
- **`stockopt_equal_division_baseline`** (§2550) — the general rule
  that whatever community-property share results must be divided
  equally, subject to the statute's own listed exceptions.

## Independent double-fetch

- **Case law** (CourtListener MCP): Located both cases via `search`
  (type "o") — Hug: cluster/opinion id 2115889 (`In Re Marriage of
  Hug`, 154 Cal.App.3d 780, filed 1984-04-20); Nelson: cluster/opinion
  id 2148554 (`In Re Marriage of Nelson`, 177 Cal.App.3d 150, filed
  1986-02-04, found by restricting the search to court `calctapp` and
  the 1985-1987 filing window to avoid dozens of same-named
  out-of-state cases). Fetched each opinion's `html_with_citations`
  twice independently through two different tool call paths —
  `get_endpoint_item` (endpoint "opinions") and `call_endpoint`
  (endpoint "opinions", query `{"id": ..., "fields": [...]}`) — with
  the full returned HTML byte-identical between the two calls for both
  opinions.
- **Statutes** (leginfo.legislature.ca.gov, via `curl` through the
  environment's proxy, since this matches the fallback the task brief
  described): Cal. Fam. Code §§ 760, 771, and 2550 each fetched twice
  independently with two distinct User-Agent strings — first as
  `Mozilla/5.0 (Windows NT 10.0; Win64; x64) Groundtruth-Research/1.0`,
  then (after one transient `curl: (35) Recv failure: Connection reset
  by peer` on the first attempt for §771, resolved by a retry) as
  `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15
  (KHTML, like Gecko) Version/17.4 Safari/605.1.15`. All three
  sections' extracted `codeLawSectionNoHead` bodies were identical
  across their two independent fetches.

## Quote-by-quote verification

All 12 citation quotes across the 9 authority clauses (2 quotes each
in `stockopt_hug_holding_broad_discretion`,
`stockopt_no_single_formula_required`, and
`stockopt_nelson_alternate_start_date`; 1 quote each in the remaining
6 authority clauses) were programmatically checked as exact,
contiguous substrings of the confirmed source texts, using a Python
script that stripped HTML tags, normalized curly quotes to straight
quotes, and collapsed whitespace on both the quotes and the source
text before comparing. All 12 passed on the final check.

One genuine defect was caught and corrected during this process: the
first draft of the Hug time-rule formula quote began "The community
property portion..." but the source's actual sentence, quoting the
trial court's own finding, begins "*[t]he* community property
portion..." (bracketed lowercase "t" indicating the original opinion
altered capitalization to fit the sentence it was embedded in). The
quote in the published clause was corrected to match the source
exactly, including the bracketed "[t]he".

One formatting artifact was identified and deliberately avoided rather
than "corrected" into a quote: Nelson's footnote 4 contains the OCR
substitution "It was therefore appropriate to place mor**é**
emphasis..." (an accented "é" standing in for a plain "e" in "more,"
apparently an artifact of the original scanned reporter volume as
captured in CourtListable's stored text). Rather than quote through
that glitch or silently normalize a character that is not whitespace,
the clause's citation quote was drawn from the clean, unglitched
sentence immediately before it in the same footnote, and the
substance of the "moré emphasis" sentence is paraphrased (not quoted)
in the clause's own body text.

## Schema and corpus validation

- Confirmed the exact current schema by reading `data/clauses.json`
  and `data/documents.json` before writing: authority clauses use
  exactly `{id, title, kind:"authority", status:"verified",
  checkedDate, body, gap, citations:[{case, cite, url, quote}]}`;
  drafting clauses use exactly `{id, title, kind:"drafting", body}`.
  A Python schema-check script confirmed no extra or missing keys on
  any of the 11 new clauses or their citations.
- Checked all 11 new clause ids and the 1 new document id against the
  full existing corpus for collisions — none found.
- After merging, ran a corpus-wide validation script: both
  `data/clauses.json` and `data/documents.json` parse as valid JSON;
  no duplicate clause ids across the full corpus (4,964 clauses); no
  duplicate document ids (613 documents); every clause id in the new
  document's `clauseOrder` resolves to an existing clause in
  `data/clauses.json`.

## Net changes

- New document: Community Property Interest in Employer Stock Options
  (Hug/Nelson Time-Rule) — Information Sheet
  (`employee_stock_options_hug_nelson_info_sheet`), 11 clauses (9
  authority + 2 drafting), in the Family Law category. New fields:
  `party1Name`, `party2Name`, `marriageDate`, `separationDate`,
  `employerName`, `optionGrantDates`.
- Corpus: 4,953 → 4,964 clauses; 612 → 613 documents. Wave 149, Family
  Law.
