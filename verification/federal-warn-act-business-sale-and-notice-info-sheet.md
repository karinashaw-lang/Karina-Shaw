# Ending employment, new document: Federal WARN Act: Government Notice, Aggregation, and Business Transfer — Information Sheet

## Why this document

First processed item of wave 117 (Ending employment slot, 2×2
pattern). Four candidates were checked and confirmed already covered
before the agent settled on this topic: OWBPA individual (non-group)
waiver requirements (already fully covered by `sev_owbpa`, including
*Oubre v. Entergy*), the §280G shareholder-approval exemption (already
covered by `goldenparachute_shareholder_approval_exception`), the EDD
pamphlet/brochure distribution duty (already covered by
`unemploynotice_pamphlet_requirement`), and UI "misconduct"
disqualification (already covered by `uimisconduct_case_law_standard`).
The agent also ruled out §2751 commission-writing, motion-picture/
broadcasting final-wage timing, and sick-leave payout at termination as
already covered. Personally reconfirmed the existing `warn_notice`
document's five clauses (`warn_coverage`, `warn_notice_requirement`,
`warn_exceptions`, `warn_liability`, `warn_ack`) cover only the basic
100-employee/plant-closing-or-mass-layoff thresholds, the 60-day
employee/union notice, the two statutory exceptions, and back-pay
liability with the local-government civil penalty — confirming zero
overlap with this document's government-recipient rules, 90-day
aggregation, single-site definition, part-time exclusion, sale-of-
business rules, qualifying-transfer exclusion, and liability offsets.

## What this document covers

10 clauses: 2 drafting (intro, closing/signature) and 8 authority
clauses, citing 29 U.S.C. §§ 2101(a)(8), 2101(b)(1), 2101(b)(2),
2102(a), 2102(d), 2104(a)(2), 2104(b), and 20 C.F.R. §§ 639.3, 639.3(i),
639.4(a), 639.4(c), 639.5(a)(1)(ii), 639.7(e):

- **`warnsale_govt_notice_recipients`** — the additional notice
  obligation to a state dislocated-worker unit and local government.
- **`warnsale_govt_notice_content`** — the distinct content
  requirements for employee-representative, unrepresented-employee, and
  government notices.
- **`warnsale_aggregation_90day`** — the 90-day rule aggregating smaller
  job-loss rounds to reach a covered threshold.
- **`warnsale_single_site_definition`** — the regulatory definition of
  "single site of employment."
- **`warnsale_parttime_employee_exclusion`** — the statute's own
  part-time-employee definition excluded from coverage/threshold counts.
- **`warnsale_business_sale_seller_buyer`** — the seller/buyer notice
  split on a business sale and automatic employee continuity.
- **`warnsale_qualifying_transfer_exclusion`** — the offered-transfer
  exclusion from "employment loss" for a relocation or consolidation.
- **`warnsale_liability_offsets_no_injunction`** — statutory offsets to
  back-pay liability and the bar on federal injunctive relief.

## Genuine findings

- **A significant correction to the agent's own initial assumption**:
  the agent initially guessed the sale-of-business rule would live in
  20 C.F.R. §639.5. Reading the actual regulation showed §639.5 covers
  timing/transfers/temporary-employment/strike exemptions, while the
  sale-of-business rule is actually at §639.4(c) — corrected before the
  citation was finalized.
- **An expanded document structure from full-text reading**: the agent
  initially planned a narrower 3-4 clause document, but full reading of
  §2101(b) surfaced the qualifying-transfer exclusion and the
  sale-of-business successor rule, and full reading of §2104 surfaced
  the liability-offset and no-injunction rules, expanding the document
  into a coherent 8-authority-clause set.
- **A caught and corrected quote-extraction error**: the agent's own
  verification pass caught a stray space-before-period artifact from
  Cornell's markup in one quote, corrected before delivery.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute and regulation text alone.

## Honest gap(s) disclosed

This document does not state what happens if government-unit recipients
are omitted while employees are timely notified, does not restate the
abbreviated alternative government-unit notice or its on-site-
recordkeeping condition, does not resolve how an employer demonstrates
job-loss rounds were genuinely "separate and distinct" rather than
staged to evade the Act, does not address the "truly unusual
organizational situations" the single-site regulation itself
acknowledges as unresolved, does not address how the 90-day aggregation
rule applies across a business-sale date, does not distinguish a stock
sale from an asset/operations sale, does not define "reasonable
commuting distance" numerically, and does not address the discretionary
good-faith defense to liability.

## Method

Fetched 29 U.S.C. §§ 2101, 2102, and 2104, and 20 C.F.R. §§ 639.3,
639.4, 639.5, and 639.7 from Cornell LII, each fetched twice by the
research agent with two distinct User-Agent strings, confirmed
byte-identical via diff. CourtListener's daily rate limit was already
exhausted on the agent's test call; no case law was used, a disclosed
and legitimate choice. All 13 citation instances programmatically
confirmed by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-forty-sixth fetch (a new distinct curl User-Agent
string, "Groundtruth-146thVerify-WARNSale/1.0") of all seven sources —
all 13 citation instances confirmed clean on direct normalized-
whitespace substring match, no extraction artifacts encountered. The
90-day aggregation rule, the seller/buyer notice split, and the
liability offset categories were all independently reconfirmed present
in the freshly fetched text.

## Verification

- All seven federal sources fetched twice independently by the research
  agent with distinct User-Agent strings, plus a one-hundred-and-
  forty-sixth independent fetch during integration review; all 13
  citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — the two clauses citing
  a statutory provision alongside its implementing regulation
  (`warnsale_aggregation_90day`, `warnsale_parttime_employee_exclusion`)
  correctly disclose the regulation is not an independent source from
  the statute it interprets; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
  Independently reconfirmed the existing `warn_notice` document's five
  clauses cover none of this document's sub-rules — genuinely
  non-duplicative companion coverage.
- Checked every citation's `case` field for emptiness — all 13
  populated with proper citation identifier strings.
- No new fields required — all three fields (`companyName`,
  `employeeName`, `dateSigned`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Federal WARN Act: Government Notice, Aggregation, and
  Business Transfer — Information Sheet
  (`federal_warn_act_business_sale_and_notice_info_sheet`), 10 clauses
  (8 authority + 2 drafting), in the Ending employment category. No new
  fields.
- Corpus: 3,844 → 3,854 clauses; 500 → 501 documents. First processed
  item of wave 117.
