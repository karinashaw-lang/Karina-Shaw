# Hiring, new document: Work Opportunity Tax Credit — Information Sheet

## Why this document

Second and final processed item of wave 109 (Hiring slot). Three
candidates (social media password protection, minor work permits,
apprenticeship agreements) were checked and confirmed already covered
by existing documents. The agent confirmed zero prior coverage of the
federal Work Opportunity Tax Credit (26 U.S.C. § 51) via both
document-level and clause-level checks, and distinguished it explicitly
from the existing New Hire Reporting document (an unrelated child-
support-location duty under a different statute).

## What this document covers

8 clauses: 2 drafting (intro, acknowledgment) and 6 authority clauses,
citing 26 U.S.C. §§ 51(a), (b)(3), (c)(4), (d)(1), (d)(12), (d)(13)(A),
(B), (C), (i)(2), (i)(3)(A), (B), plus California EDD's own program
page for administrative facts:

- **`wotc_credit_amount_and_wage_limits`** — the 40-percent credit rate
  and per-year wage caps, including higher veteran-category caps.
- **`wotc_targeted_groups`** — the ten statutory targeted-group
  categories that gate eligibility.
- **`wotc_certification_via_prescreening_notice`** — the pre-screening-
  notice mechanism and 28-day certification-request deadline.
- **`wotc_certification_denial_and_revocation`** — what happens when a
  certification request is denied or a certification is later revoked.
- **`wotc_ineligible_individuals_and_minimum_hours`** — related-
  individual and rehire exclusions, and the minimum-hours/reduced-rate
  rules.
- **`wotc_current_expiration_status`** — the credit's current statutory
  lapse.

## Genuine findings

- **A significant, substantively important correction to the agent's
  own initial framing**: the agent initially treated WOTC as a
  presently operating, open-ended hiring credit without qualification.
  Reading the actual current § 51(c)(4) text directly showed that
  "wages" excludes any amount paid to an individual who begins work
  after December 31, 2025 — meaning, as of this document's own
  September 2026 drafting date, no wages paid to an individual hired
  after that date currently qualify for the credit at all, absent a
  reauthorization not yet reflected in the fetched text. This was
  independently cross-checked against California EDD's own live
  program page, which confirms the same cutoff and describes EDD's
  practice of accepting and retaining (not rejecting) 2026-and-later
  applications pending federal reauthorization. Disclosed prominently
  as its own dedicated clause rather than buried in a gap field, and
  the clause honestly notes the program's history of retroactive
  extensions as context without predicting the outcome.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's first call;
  every authority clause proceeds on the statute and EDD text alone.
- **A disclosed sourcing limitation on the certification form number**:
  the agent did not independently fetch irs.gov to verify the specific
  IRS form number (commonly referenced as Form 8850) for the
  pre-screening notice, since the research pass was limited to Cornell
  LII and California EDD sources — disclosed rather than assumed.

## Genuine extraction-artifact finding (integration review)

Independent re-verification found 14 of 15 citation instances clean on
direct normalized-whitespace match; the remaining instance (the EDD
mailing-address quote) matched only after additionally treating HTML
block-level tags (`<br>`, `<p>`, `<div>`) as line breaks before
whitespace normalization. Byte-level inspection confirmed the raw EDD
page runs separate address lines together with no separator at all
("...DepartmentAttn: Work Opportunity...Center\xa02901 50th
StreetSacramento, CA 95817"), while the delivered quote reads them as
normally spaced lines. This is a source-formatting artifact distinct
from, but structurally similar to, the leginfo/Cornell markup-stripping
patterns documented elsewhere in this corpus — confirmed genuine and
benign, no content correction needed.

## Honest gap(s) disclosed

This document does not restate each targeted-group category's full
detailed statutory definition, the family-relationship cross-references
incorporated from §§ 152(d)(2) and 267(c), § 51(d)(13)(D)'s alternative
veteran certification pathway, §§ 51(f), (h), or (k)'s trade-or-business,
agricultural/railway, and successor-employer rules, or the separate
long-term-family-assistance "qualified second-year wages" scheme under
§ 51(e). It does not independently verify the IRS form number for the
pre-screening notice, does not state a deadline for a denial
explanation or an appeal process, and does not state whether any
specific employer, hire, or targeted-group membership qualifies for the
credit. It does not track whether Congress has reauthorized the program
since this document's checked date.

## Method

Fetched 26 U.S.C. § 51 from Cornell LII, fetched twice by the research
agent with two distinct User-Agent strings, confirmed byte-identical
via both diff and MD5 hash match. Also fetched California EDD's WOTC
program page once for corroborating administrative facts, consistent
with the corpus's established convention for EDD-page citations. A
separate CFR regulation (26 C.F.R. § 1.51-1) was fetched but correctly
excluded after the agent found it was obsolete pre-1996 Targeted Jobs
Tax Credit text never updated to match the current statutory scheme —
a disclosed, deliberate sourcing decision. CourtListener's daily rate
limit was already exhausted on the agent's first call; no case law was
used, a disclosed and legitimate choice. All 15 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings, verified via a second independent post-hoc pass.

Independently re-verified during integration review via a
one-hundred-and-twenty-third fetch (a new distinct curl User-Agent
string, "Groundtruth-123rdVerify-WOTC/1.0") of both sources — 14 of 15
citation instances confirmed clean on direct normalized-whitespace
match; the remaining instance confirmed clean after normalizing HTML
block-element line breaks, traced to a genuine source-formatting
artifact via byte-level inspection. The December 31, 2025 expiration
finding was independently reconfirmed present in both the freshly
fetched § 51(c)(4) text and the EDD program page's own current notice.

## Verification

- 26 U.S.C. § 51 fetched twice independently by the research agent
  with distinct User-Agent strings, plus a one-hundred-and-twenty-third
  independent fetch during integration review; all 15 citation
  instances confirmed clean, one after accounting for a confirmed
  genuine artifact.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section, or combining U.S. Code
  text with the EDD page, correctly disclose these as distinct,
  non-merged sources; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); one
  drafting-clause title ("Acknowledgment") collides with a generic
  boilerplate title already reused by dozens of other drafting clauses
  across the corpus — confirmed as intentional generic-title reuse, not
  a content duplicate. Independently reconfirmed this document is
  distinct from the existing New Hire Reporting, Apprenticeship
  Agreement, and EIN documents.
- Checked every citation's `case` field for emptiness — all 15
  populated with proper citation identifier strings.
- No new fields required — all six fields (`companyName`,
  `employeeName`, `jobTitle`, `startDate`, `dateSigned`, `cityState`)
  reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Work Opportunity Tax Credit — Information Sheet
  (`work_opportunity_tax_credit_info_sheet`), 8 clauses (6 authority +
  2 drafting), in the Hiring category. No new fields.
- Corpus: 3,631 → 3,639 clauses; 477 → 478 documents. Second and final
  processed item of wave 109.

## Wave 109 summary

Wave 109 followed the established 2×2 pattern, targeting Hiring and
Confidentiality & IP — two of the four categories left tied lowest
after wave 108, rotating away from wave 108's Business Formation, Real
Estate, Estate Planning, and Family Law coverage. Both agents reported
duplication-check pivots (False Patent Marking pivoted from a
near-duplicate § 287(a) candidate; WOTC screened and rejected three
already-covered candidates first) before landing on genuinely open
topics. Both completed documents were built with CourtListener's daily
quota exhausted throughout. Each surfaced a genuine, substantively
important finding through close primary-source reading: a corrected
assumption about a 2011 statutory amendment that eliminated a
qui tam private-suit mechanism (False Patent Marking), and — the more
significant finding of the wave — a discovery that the federal Work
Opportunity Tax Credit lapsed on December 31, 2025 and remains lapsed
pending congressional reauthorization as of this document's own
drafting date, independently cross-checked against California EDD's
own live program page rather than assumed from memory. This wave also
encountered two new artifact variants: a spurious-space-at-list-item-
boundary pattern on Cornell LII (distinct from the previously
documented defined-term-link and subdivision-marker variants), and a
block-element line-break concatenation pattern on a non-legislative
source (California EDD's program page) for the first time this window.
Per the established alternation, wave 110 should return to a 1×4
pattern.
