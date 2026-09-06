# Hiring, new document: H-1B Visa Sponsorship Compliance — Information Sheet

## Why this document

Second processed item of wave 104 (Hiring slot). A scoping pass and
clause-level duplication check confirmed zero prior coverage of H-1B
sponsorship compliance anywhere in the corpus.

## What this document covers

8 clauses: 2 drafting (intro, closing/recordkeeping) and 6 authority
clauses, citing 8 U.S.C. § 1182(n)(1)(A)(i)(I)-(II), (ii), (C)(i)-(ii),
and 20 C.F.R. § 655.731(a), (c)(1), (c)(9)(ii), (c)(9)(iii)(C),
(c)(10)(i)(A)-(B), (c)(10)(ii):

- **`h1bcompliance_lca_wage`** — the LCA wage-attestation requirement
  (greater of actual or prevailing wage) and working-conditions
  attestation.
- **`h1bcompliance_lca_notice`** — the LCA filing-notice requirement to
  a bargaining representative or, absent one, via posting/electronic
  notification.
- **`h1bcompliance_required_wage_source`** — the cash-in-hand
  requirement and the authorized-deduction exception.
- **`h1bcompliance_no_recoupment_attorney_fees`** — the prohibition on
  recouping attorney fees or H-1B filing costs from the worker's wages.
- **`h1bcompliance_no_early_termination_penalty`** — the penalty-versus-
  liquidated-damages distinction for early departure.
- **`h1bcompliance_no_filing_fee_rebate`** — the prohibition on rebating
  the employer's own ACWIA filing fee.

## Genuine findings

- **A significant correction to the research brief's imprecise
  citation**: the brief guessed "20 C.F.R. § 655.731(c)(9)" as the
  single no-recoupment provision. The agent found the attorney-fee/
  filing-cost no-recoupment rule actually appears twice, under two
  independent deduction-criteria sets — § 655.731(c)(9)(ii) and
  (c)(9)(iii)(C) — and that the "penalty for ceasing employment early"
  concept is a wholly separate rule at § 655.731(c)(10)(i), turning on a
  state-law liquidated-damages-versus-penalty distinction rather than
  the attorney-fee business-expense concept. A third distinct sub-rule
  at § 655.731(c)(10)(ii) bars rebate of the employer's own ACWIA filing
  fee. The agent split these into three separate clauses rather than
  conflating them under one imprecise citation.
- **A confirmed workaround for a known environment issue**: eCFR's
  human-facing pages redirected through a bot-check
  (unblock.federalregister.gov) exactly as documented in this corpus's
  established pattern; the agent used the eCFR versioner API instead,
  consistent with this project's prior successful workaround.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's first
  lightweight test call; every authority clause proceeds on the
  statute/regulation text alone.

## Genuine extraction-artifact finding (integration review)

Independent re-verification found 1 of 12 citations (8 U.S.C.
§ 1182(n)(1)(C)(ii)) mismatched on a strict check, passing after
normalizing space-before-punctuation. Manual inspection confirmed the
established Cornell LII markup-stripping whitespace artifact: a
spurious space before a comma from a stripped inline link/anchor
("no such bargaining representative ," vs. the natural reading "no such
bargaining representative,"). Confirmed as a genuine, already-
documented source-side rendering artifact — no correction needed.

## Honest gap(s) disclosed

This document does not state the DOL's prevailing/actual wage
calculation methodology (20 C.F.R. § 655.731(a) itself, not this
document, supplies that). It does not detail the posting-duration,
content, or location requirements of § 655.734. It does not catalog
every category of authorized wage deduction. It does not state a
federal test for distinguishing a "penalty" from "liquidated damages" —
that classification depends on state contract law, not federal text.
It does not address other H-1B filing fees (base I-129, premium
processing) or obligations specific to H-1B-dependent employers or
employers with a history of willful violations.

## Method

Fetched 8 U.S.C. § 1182(n) from Cornell LII and 20 C.F.R. § 655.731 via
the eCFR versioner API, each fetched twice by the research agent with
two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. CourtListener's daily rate limit was already
exhausted on the agent's first lightweight test call; no case law was
used, a disclosed and legitimate choice. All 12 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
one-hundred-and-fifth fetch (a new distinct curl User-Agent string,
"Groundtruth-105thVerify-H1BCompliance/1.0") of both sources — 11 of 12
citation instances confirmed clean on direct substring match; the
twelfth (8 U.S.C. § 1182(n)(1)(C)(ii)) matched only after normalizing
space-before-punctuation, confirmed as the established Cornell LII
whitespace artifact via manual context inspection.

## Verification

- 8 U.S.C. § 1182(n) and 20 C.F.R. § 655.731 each fetched twice
  independently by the research agent with distinct User-Agent strings,
  plus a one-hundred-and-fifth independent fetch during integration
  review; all 12 citation instances confirmed clean, one after
  accounting for a confirmed genuine artifact.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses citing multiple
  subdivisions of the same statutory/regulatory section correctly
  disclose they are not independent sources of each other; correct as
  delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 12
  populated with proper citation identifier strings.
- No new fields required — all four fields (`companyName`,
  `employeeName`, `jobTitle`, `dateSigned`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: H-1B Visa Sponsorship Compliance — Information Sheet
  (`h1b_visa_sponsorship_compliance_info_sheet`), 8 clauses (6 authority
  + 2 drafting), in the Hiring category. No new fields.
- Corpus: 3,465 → 3,473 clauses; 459 → 460 documents. Second processed
  item of wave 104.
