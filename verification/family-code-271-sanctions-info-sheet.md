# Family Law, new document: Family Code Section 271 Sanctions — Information Sheet

## Why this document

Third processed item of wave 95 (Family Law slot). A scoping pass
confirmed this corpus's existing sanctions coverage was limited to
need-based fee awards (Family Code § 2030) and disclosure-noncompliance
sanctions (Family Code §§ 2100-2113) — a genuinely distinct general
litigation-conduct sanction under Family Code § 271 had zero prior
coverage. Confirmed non-duplication by checking that no statutory text or
case quotes from the existing § 2030 or §§ 2100-2113 documents are
repeated here.

## What this document covers

7 clauses: 2 drafting (intro, acknowledgment) and 5 authority clauses,
citing Family Code § 271(a)-(c) and three published California Court of
Appeal decisions:

- **`fc271sanctions_statutory_standard`** — the furthers-or-frustrates-
  settlement-policy standard, the sanction's nature, and the
  income/assets/liabilities and unreasonable-financial-burden limits.
- **`fc271sanctions_no_financial_need_required`** — the statute's own
  no-financial-need sentence, plus In re Marriage of Corona's and In re
  Marriage of Feldman's description of the doctrine as not requiring
  actual injury or particular harm.
- **`fc271sanctions_notice_and_payment_source`** — the notice-and-
  opportunity-to-be-heard requirement and the source from which an award
  is payable.
- **`fc271sanctions_case_law_application`** — the abuse-of-discretion
  standard of review, and Corona's application of § 271 as an alternate
  basis for a sanction the trial court had also described using
  "bad faith" language under a different statute.
- **`fc271sanctions_distinguishing_2030_and_2100`** — how § 271 differs
  from § 2030 (individual conduct versus relative circumstances, per In
  re Marriage of Smith's footnote 6) and from §§ 2100-2113 (general
  conduct-based sanction versus disclosure-specific mandatory sanctions).

## Genuine findings

- **A correctly scoped, non-overstated finding on the bad-faith
  question**: Corona affirmed a § 271 sanction as an alternate ground
  where the trial court had also used "bad faith" language under a
  different, non-family-law sanctions statute. The document describes
  this as how one decision applied § 271, explicitly disclaiming that
  it establishes a bad-faith finding is legally irrelevant to every
  § 271 case, and noting this is not a survey of the full body of § 271
  case law on that question.
- **An honestly disclosed chain-of-quotation**: Corona's
  "does not require any actual injury" language is itself quoting and
  applying Feldman; the clause discloses this rather than presenting
  Corona's restatement as if it were that decision's own independent
  holding.
- **A disclosed, self-authored comparison rather than a case holding**:
  the distinguishing clause's statement that § 271 is not limited to
  disclosure violations (unlike §§ 2100-2113) is disclosed as this
  document's own reading of § 271's "notwithstanding any other
  provision" text and code placement — the one case found on point
  (Smith's footnote 6) compares § 271 only to § 2030, not to the
  disclosure sanctions statutes.
- Correctly avoided a CourtListener star-pagination artifact in Corona
  (a `*1227` mid-sentence page marker) by truncating the affected quote
  before the marker rather than quoting across it.

## Honest gap(s) disclosed

The statute does not define "unreasonable financial burden" numerically,
and this document does not resolve how a court weighs a party's
income/assets/liabilities against a proposed sanction on any particular
record. What specific form of notice satisfies subdivision (b), and how
a party's "share of the community property" is identified under
subdivision (c) before a final division, are not resolved by the
statutory text alone. This document does not survey the full body of
§ 271 case law, does not resolve whether particular conduct could
support relief under more than one of § 271, § 2030, and §§ 2100-2113 at
once, and does not tell either party whether a sanction should be
requested, opposed, or is likely to be granted in any specific case.

## Method

Fetched Family Code § 271 from `leginfo.legislature.ca.gov`, fetched
twice by the research agent with two distinct User-Agent strings,
confirmed byte-identical after whitespace normalization. In re Marriage
of Feldman (2007) 153 Cal.App.4th 1470, In re Marriage of Corona (2009)
172 Cal.App.4th 1205, and In re Marriage of Smith (2015) 242 Cal.App.4th
529 verified via the CourtListener MCP tool (direct curl and WebFetch to
courtlistener.com remain blocked in this environment); the research
agent confirmed no cluster-id/opinion-id mismatch on any of the three.
All 13 citation instances programmatically confirmed by the research
agent as exact, contiguous substrings (no ellipsis-joined quotes).

Independently re-verified during integration review via a seventieth
fetch (a new distinct curl User-Agent string,
"Groundtruth-70thVerify-FC271Sanctions/1.0") of the statute, and via the
CourtListener MCP tool for all three cases — all 13 citation instances
(5 statutory, 1 Feldman, 4 distinct Corona quotes appearing across 5
citation entries, 2 Smith) confirmed clean on direct substring match, no
extraction artifacts encountered. CourtListener's hourly rate limit
(50 requests/hour) was hit twice during this integration review; each
wait was handled with a single timed pause rather than a polling retry
loop, and verification resumed cleanly once the limit reset.

## Verification

- Family Code § 271 fetched twice independently by the research agent
  with distinct User-Agent strings, plus a seventieth independent fetch
  during integration review; all 5 statutory citation instances
  confirmed clean.
- Feldman, Corona, and Smith each independently re-verified via the
  CourtListener MCP tool during integration review; all 8 case-law
  citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — the clauses correctly
  disclose the Corona-quoting-Feldman chain and correctly scope the
  bad-faith finding to a single decision rather than the full body of
  § 271 case law; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("About This Information Sheet,"
  "Acknowledgment") duplicate existing corpus titles — consistent with
  this project's established pattern of generic, reused boilerplate
  titles; clause IDs remain unique.
- Checked every citation's `case` field for emptiness — all 13 populated
  with proper citation identifier strings.
- No new fields required — all six fields (`petitionerName`,
  `respondentName`, `courtCaseNumber`, `countyOfFiling`, `dateSigned`,
  `cityState`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Family Code Section 271 Sanctions — Information Sheet
  (`family_code_271_sanctions_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the Family Law category. No new fields.
- Corpus: 3,208 → 3,215 clauses; 424 → 425 documents. Third processed
  item of wave 95.
