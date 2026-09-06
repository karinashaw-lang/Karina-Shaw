# Hiring, new document: Wage Advances and Draws Against Commission — Information Sheet

## Why this document

Third processed item of wave 101 (Hiring slot). The scoping agent's
original DTSA §1833(b) top pick was scrapped as a duplicate (already
covered in the corpus's existing NDA documents under Confidentiality &
IP). The research agent for this topic then found, on its own
independent check of `data/clauses.json`, that Labor Code §§ 221-224
and § 2751 were already extensively covered by the existing wage-
clawback and commission-agreement documents, and pivoted honestly to a
genuinely uncovered angle within the same general subject: a guaranteed
draw against commission extended specifically at hire.

## What this document covers

6 clauses: 3 drafting (declaration, arrangement-terms description,
written-authorization/signature) and 3 authority clauses, citing Labor
Code §§ 221 and 224, IWC Wage Order No. 4-2001 § 4(B), and (reused from
the existing corpus, not independently re-verified this session)
*Steinhebel v. Los Angeles Times Communications, LLC*:

- **`wageadvance_s221_repayable_draw_advance`** — why a draw paid before
  a commission is earned is generally an advance, not a wage, so § 221's
  no-clawback rule doesn't by itself bar its recoupment.
- **`wageadvance_s224_written_authorization`** — the § 224
  written-authorization mechanism for a payroll deduction to recover an
  outstanding draw balance.
- **`wageadvance_wageorder_minimum_wage_floor`** — the actual statutory
  source (an IWC wage order, not § 224) of a minimum-wage floor on
  commission-based pay.

## Genuine findings

- **A pre-launch pivot away from a duplicated angle, honestly
  documented**: the agent checked the corpus's own clause data before
  drafting, found §§ 221-224 and § 2751 already substantially covered by
  the existing clawback and commission-agreement documents, and
  redirected to the hiring-stage guaranteed-draw angle specifically —
  reported transparently rather than silently forcing a redundant
  document.
- **A significant correction to the research brief's assumption**: the
  brief expected § 224 itself to contain minimum-wage/net-wage language.
  The agent read the current text and found § 224 contains no such
  language at all — the actual minimum-wage floor on commission pay
  comes from IWC Wage Order No. 4-2001 § 4(B), a different, independent
  source. Disclosed and corrected explicitly.
- **A disclosed, deliberate handling of a case-law citation the agent
  could not independently re-verify this session**: CourtListener's
  quota was exhausted, a direct courtlistener.com fetch returned an
  empty access-control-challenge response, and WebFetch reported the
  domain blocked — all three paths tried and disclosed as failed. Rather
  than state the Steinhebel quotation as freshly verified, the agent
  disclosed it as reused verbatim from this corpus's own
  already-verified `commpayout_earned_vs_contingent` clause, and
  explicitly noted Steinhebel addressed a per-sale commission chargeback,
  not a hiring-stage guaranteed draw — applying the same reasoning
  without overstating the case's actual holding.

## Genuine extraction-artifact and reuse finding (integration review)

Independently attempted a fresh CourtListener lookup during integration
review (a `clusters` endpoint call on the Steinhebel cluster id) and
confirmed the daily quota remains exhausted (~5 hours remaining at the
time of this check). Compared the Steinhebel quotation in this new
clause word-for-word against the already-verified quotation in the
existing `commpayout_earned_vs_contingent` clause — confirmed identical.
This is treated as a legitimate reused-and-previously-verified citation,
consistent with this corpus's established practice, rather than an
independently-verified-this-session citation.

## Honest gap(s) disclosed

This document does not determine whether any specific draw arrangement
is actually structured as an advance rather than an already-earned wage,
or whether any specific written authorization satisfies § 224's "not
amounting to a rebate" limitation. It does not verify whether other
California wage orders (beyond No. 4-2001) contain identically-worded
minimum-wage provisions, or which wage order covers any particular
employee's occupation. It does not state any case law squarely
addressing a guaranteed draw extended at hire (as opposed to a per-sale
commission chargeback, which is what Steinhebel actually addressed).

## Method

Fetched Labor Code §§ 221 and 224 from `leginfo.legislature.ca.gov`, and
IWC Wage Order No. 4-2001 from `dir.ca.gov`, each fetched twice by the
research agent with two distinct User-Agent strings, confirmed
byte-identical (the wage order PDF confirmed by matching MD5 checksum).
CourtListener's daily rate limit was already exhausted on a single
lightweight test call; the Steinhebel quotation was reused verbatim from
this corpus's own previously-verified clause rather than independently
re-fetched, a disclosed and legitimate choice. All fresh citation quotes
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
ninety-fourth fetch (a new distinct curl User-Agent string,
"Groundtruth-94thVerify-WageAdvance/1.0") of both statutory sections and
the wage order PDF (confirmed byte-identical to the research agent's own
copy by MD5 checksum) — all 3 fresh citation instances confirmed clean
on direct substring match. Also independently attempted a fresh
CourtListener lookup for the Steinhebel citation during integration
review; confirmed the daily quota remains exhausted, and confirmed the
reused quotation is word-for-word identical to the corpus's existing
verified quotation.

## Verification

- Labor Code §§ 221 and 224, and IWC Wage Order No. 4-2001, each fetched
  twice independently by the research agent with distinct User-Agent
  strings, plus a ninety-fourth independent fetch during integration
  review; all 3 fresh citation instances confirmed clean.
- The Steinhebel citation independently cross-checked against this
  corpus's existing, previously-verified `commpayout_earned_vs_contingent`
  clause — confirmed verbatim-identical, and a fresh independent
  CourtListener attempt during integration review reconfirmed the quota
  remains exhausted.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses correctly
  disclose that § 221, § 224, and the wage order are three independently
  sourced provisions.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all populated
  with proper citation identifier strings.
- One new field required: `drawAmount` (confirmed genuinely new via a
  corpus-wide field-id lookup before adding); the other nine fields
  (`companyName`, `employeeName`, `jobTitle`, `startDate`,
  `commissionStructure`, `payPeriodType`, `repaymentTriggerDescription`,
  `applicableMinimumWage`, `dateSigned`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Wage Advances and Draws Against Commission —
  Information Sheet (`wage_advances_draws_against_commission_info_sheet`),
  6 clauses (3 authority + 3 drafting), in the Hiring category. One new
  field: `drawAmount`.
- Corpus: 3,380 → 3,386 clauses; 448 → 449 documents. Third processed
  item of wave 101.
