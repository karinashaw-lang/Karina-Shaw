# Hiring, new document: Wage Repayment / Clawback — Information Sheet

## Why this document

Fourth and final document of wave 92 (Hiring slot). Read the existing
"Employee Referral Bonus Agreement" document's clauses in full — confirmed
it addresses only referral-incentive eligibility, no repayment/deduction/
clawback mechanics. Found a partial, narrower overlap: an existing
"Commission Payout Upon Termination" document (Ending employment category)
already has a clause quoting § 221 and the Steinhebel case, but scoped
specifically to commission chargebacks. Judged this non-substantial
overlap and proceeded with a new document, disclosing the connection
honestly and reusing the already-verified quote rather than duplicating
verification effort.

## What this document covers

7 clauses: 2 drafting (declaration, acknowledgment) and 5 authority
clauses, citing Lab. Code §§ 221, 222, 223, 224, *Steinhebel v. Los
Angeles Times Communications, LLC* (2005) 126 Cal. App. 4th 696, 707, and
two DLSE opinion letters (1987.07.01, 1993.01.19):

- **`wageclawback_s221_core_prohibition`** (§ 221) — the core rule barring
  an employer from collecting back wages already paid, with the genuine
  finding that "clawback," "chargeback," and "training repayment
  agreement" appear nowhere in its text.
- **`wageclawback_s222_s223_related`** (§§ 222, 223) — two narrower,
  fact-specific prohibitions (collective-bargaining wage withholding;
  secret underpayment against a designated wage scale).
- **`wageclawback_s224_exception`** (§ 224) — the statute's own three
  qualifying exceptions and its Government Code § 50026 anti-circumvention
  disclaimer.
- **`wageclawback_s221_judicial_gloss`** (*Steinhebel*) — the judicial
  reading that § 221 protects only wages actually earned, not a
  conditional advance — reused verbatim from the corpus's existing,
  already-verified Commission Payout clause.
- **`wageclawback_dlse_opinion_letters`** (DLSE Opinion Letters 1987.07.01,
  1993.01.19) — non-binding agency guidance on bonus repayment,
  explicitly distinguished from statute and case law.

## Genuine corrections and findings

- **A genuine correction to the task's own framing**: the brief described
  § 224's exception as roughly two categories. The verified statutory text
  actually has three — (1) legally required/empowered, (2) individually
  authorized in writing (insurance/hospital/medical dues), (3) collectively
  bargained health/welfare/pension contributions — plus a Government Code
  § 50026 anti-circumvention proviso. Corrected accordingly.
- **A genuine finding, exactly matching the task's own caution**: none of
  §§ 221-224 mention "signing bonus," "relocation," "training repayment,"
  or "clawback" by name — that application comes entirely from case law
  and DLSE guidance, not the statute. Disclosed explicitly rather than
  presenting agency/case-law gloss as if it were settled statutory text.
- **A genuine, disclosed access limitation, handled by cross-referencing
  rather than fabricating**: CourtListener was rate-limited, a direct
  curl fetch hit an AWS WAF challenge, and WebFetch reported the domain
  itself blocked by network egress rules — all three access paths tried
  and failed. Rather than skip the Steinhebel citation or retype it from
  memory, the agent reused the exact quote already independently verified
  in this corpus's Commission Payout Upon Termination document, disclosed
  as reused-and-previously-verified rather than independently re-verified
  this session. Independently cross-checked during integration review:
  confirmed byte-identical to the existing corpus clause.
- Correctly distinguished DLSE opinion letters as non-binding agency
  guidance, quoting the 1993 letter's own admission that such letters are
  "entitled to little or no weight in the courts" — disclosed the
  1987 letter's uncited case references ("Kerr's Catering and Barnhill")
  as the letter's own characterization, not independently verified case
  law.
- Correctly disclosed that no DLSE opinion letter specifically addressing
  a signing bonus, relocation cost, or training-repayment agreement by
  that name was found in DLSE's own opinion-letter index — the 1987 letter
  concerns only a quarterly-versus-annual bonus scenario.

## Honest gap(s) disclosed

Government Code § 50026 is named but not independently fetched. The two
court decisions the 1987 DLSE letter references ("Kerr's Catering and
Barnhill") are not independently verified. Whether a specific signed
repayment agreement for a signing bonus, relocation payment, or training
cost would qualify as a § 224 category-(2) deduction is not resolved. No
case law squarely addressing signing-bonus, relocation, or training-cost
recoupment specifically (as opposed to commission chargebacks) was
independently verified. This document does not determine whether any
specific amount is lawfully owed, collectible, or deductible.

## Method

Fetched Lab. Code §§ 221, 222, 223, 224 and the two DLSE opinion letter
PDFs, each fetched twice by the research agent with two distinct
User-Agent strings, confirmed byte-identical. The Steinhebel quote was
reused verbatim from an already-verified corpus clause rather than
re-fetched, due to three independently attempted and failed access paths
(CourtListener rate limit, WAF challenge, blocked egress). All 8 citation
quotes programmatically confirmed as exact contiguous substrings ending at
sentence/clause boundaries (no ellipsis-joined or mid-word-truncated
quotes). Independently re-verified during integration review via a
fifty-ninth fetch (a distinct curl User-Agent string,
"Groundtruth-59thVerify-WageClawback/1.0") of all four statutory sections
and both PDFs (extracted via pdfminer) — all 7 fetchable quotes confirmed
clean; the reused Steinhebel quote independently cross-checked
byte-identical against its source clause in the existing corpus.

## Verification

- All four statutory sections and both PDF opinion letters fetched twice
  independently by the research agent with distinct User-Agent strings,
  plus a fifty-ninth independent fetch during integration review; all 7
  fetchable quotes confirmed clean, plus independent cross-check of the
  reused Steinhebel quote.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are independent statutory sections
  versus the same section, and distinguishes statute from case law from
  non-binding agency guidance; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles duplicate existing corpus titles — consistent
  with this project's established pattern of generic, reused boilerplate
  drafting-clause titles; clause IDs remain unique.
- Checked every citation's `case` field for emptiness — all 8 populated
  with proper citation identifier strings.
- Two fields reused (`companyName`, `employeeName`). Two new fields
  required (`repaymentTriggerDescription`, `repaymentAmount`) — grepped
  the corpus and confirmed no existing fields cover these concepts.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Wage Repayment / Clawback — Information Sheet
  (`wage_repayment_clawback_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the Hiring category. Two new fields
  (`repaymentTriggerDescription`, `repaymentAmount`).
- Corpus: 3,129 → 3,136 clauses; 413 → 414 documents. Fourth and final
  document of wave 92.

## Wave 92 summary

Wave 92 closes at 3,136 clauses / 414 documents (from 3,115/411 at this
wave's first addition): Temporary Pendente Lite Spousal Support (Family
Law), Criminal Wage Theft as Grand Theft (Ending employment), Post-
Foreclosure Tenant 90-Day Notice (Real Estate), and Wage Repayment/
Clawback (Hiring) — one document in each of four target categories,
following the established 1×4 strict-alternation pattern. This wave
produced no delivered-quote defects requiring correction at the
integration-review stage (the second wave in a row with a clean batch,
after wave 91's gap-fix/new-document mix), while surfacing several notable
genuine research corrections (the narrow § 3600 cross-reference limiting
temporary spousal support's factors; the § 487m/§ 1197.1 separate-origin
finding; the "bona fide tenant" terminology correction; the § 224
three-category correction) and one instance of principled reuse of an
already-verified citation when live source access was independently
confirmed blocked through three separate paths. Wave 93 should return to
a 2×2 pattern across two of the less-recently-touched category pairs.
