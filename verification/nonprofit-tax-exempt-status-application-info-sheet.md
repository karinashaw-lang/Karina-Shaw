# Business Formation, new document: Nonprofit Tax-Exempt Status Application (Federal and California) — Information Sheet

## Why this document

Fourth and final processed item of wave 102 (Business Formation slot).
Rather than a newly-discovered gap, this document deliberately fills a
gap the corpus's existing nonprofit-formation documents already
flagged as unaddressed: clauses like `mutualbenefit_federal_tax_status_separate_question`,
`nonprofit_purpose_state_vs_federal`, and
`religcorp_federal_tax_exempt_cross_reference` each explicitly note that
obtaining federal/state tax-exempt recognition is a separate question
from forming the nonprofit entity itself, without addressing that
question. This document is the piece those documents point to.

## What this document covers

7 clauses: 3 drafting (intro, procedural-details disclosure,
acknowledgment) and 4 authority clauses, citing 26 U.S.C. § 501(c)(3),
26 U.S.C. § 508(a)-(c)(1), Cal. Rev. & Tax. Code § 23701d(a), and Cal.
Rev. & Tax. Code § 23701(a)-(a)(2), (b)(1)-(b)(1)(A), (b)(2)(A):

- **`taxexemptapp_federal_purposes_and_operational_test`** — the closed
  list of § 501(c)(3) purposes and its inurement/lobbying/political-
  campaign conditions, all from one statutory paragraph.
- **`taxexemptapp_federal_notice_and_private_foundation_presumption`** —
  § 508's notice-of-application requirement, the private-foundation
  presumption, and the church/small-organization exceptions.
- **`taxexemptapp_state_organizational_test`** — California's parallel
  § 23701d exemption, including its own irrevocable-dedication-of-assets
  language.
- **`taxexemptapp_state_application_pathways`** — California's two
  statutory routes to recognized state exemption (general application
  versus submitting an existing IRS determination letter).

## Genuine findings

- **A corrected citation format**: the brief called the state provision
  "§ 23701(d)" as if it were a lettered subdivision. The agent found it
  is actually its own separately-numbered section, § 23701d (letter
  appended directly, no parenthesis), confirmed by testing that
  `sectionNum=23701.d` returns an empty content div while
  `sectionNum=23701d.` returns the actual text.
- **A significant structural asymmetry between the federal and state
  statutes**: California's § 23701d(a) writes its irrevocable-
  dedication-of-assets requirement directly into the statutory text
  itself, while the equivalent federal concept doesn't appear in
  26 U.S.C. § 501(c)(3)'s text at all — it exists only in Treasury
  regulations. Disclosed explicitly as a genuine difference, not
  glossed over.
- **The actual statutory basis for the "Form 3500 vs. 3500A" distinction
  the brief asked about**: the agent found it in Rev. & Tax. Code
  § 23701(a) (general application + FTB determination) versus § 23701(b)
  (submit an existing IRS determination letter → FTB issues an
  "acknowledgment" instead) — while confirming neither specific form
  number appears anywhere in the statutory text itself.
- **A disclosed, honest handling of an unreachable procedural source**:
  the FTB's exemption-application web page returned HTTP 403 when
  checked; current form numbers, revision dates, and fees are
  explicitly flagged as unverified rather than stated from memory or
  guessed.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's first
  lightweight test call; every authority clause proceeds on statutory
  text alone, disclosed explicitly.

## Honest gap(s) disclosed

This document does not restate the Treasury regulations implementing
the federal "organizational test" and "operational test," which add
detail (e.g., required articles wording) beyond the bare statutory
text. It does not address employer identification numbers, unrelated
business income tax, the private-foundation-versus-public-charity
classification tests beyond the basic presumption, state/local sales or
property tax exemptions, or Attorney General charitable-trust
registration — each flagged as a separate, uncovered matter. It does
not state any current IRS or FTB form number, filing fee, or
form-revision date.

## Method

Fetched 26 U.S.C. §§ 501 and 508 from Cornell LII, and Cal. Rev. & Tax.
Code §§ 23701d and 23701 from `leginfo.legislature.ca.gov`, each fetched
twice by the research agent with two distinct User-Agent strings,
confirmed byte-identical after whitespace normalization. CourtListener's
daily rate limit was already exhausted on the agent's first lightweight
test call; no case law was used, a disclosed and legitimate choice. All
12 citation instances programmatically confirmed by the research agent
as exact, contiguous substrings.

Independently re-verified during integration review via a
ninety-ninth fetch (a new distinct curl User-Agent string,
"Groundtruth-99thVerify-TaxExemptApp/1.0") of all four sources — all 12
citation instances confirmed clean on direct substring match, no
extraction artifacts encountered.

## Verification

- 26 U.S.C. §§ 501 and 508, and Cal. Rev. & Tax. Code §§ 23701d and
  23701, each fetched twice independently by the research agent with
  distinct User-Agent strings, plus a ninety-ninth independent fetch
  during integration review; all 12 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses citing multiple
  subdivisions of the same statutory section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either), and independently reconfirmed this document is the
  genuine, deliberate fill of the gap the existing nonprofit-formation
  clauses explicitly flag, not an accidental duplicate of any of them.
- Checked every citation's `case` field for emptiness — all 12
  populated with proper citation identifier strings.
- No new fields required — all four fields (`companyName`,
  `preparerName`, `dateSigned`, `cityState`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Nonprofit Tax-Exempt Status Application (Federal and
  California) — Information Sheet
  (`nonprofit_tax_exempt_status_application_info_sheet`), 7 clauses (4
  authority + 3 drafting), in the Business Formation category. No new
  fields.
- Corpus: 3,418 → 3,425 clauses; 453 → 454 documents. Fourth and final
  processed item of wave 102.

## Wave 102 summary

Wave 102 followed the established 1×4 pattern, targeting four of the
six categories tied at the corpus's then-lowest count: During
employment, Confidentiality & IP, Business Formation, and Real Estate
(the other two tied categories, Estate Planning and Family Law, were
left for a future wave, having been covered most recently in wave 100).
This wave's scoping pass incorporated a strengthened duplication check
(both document-level and clause-level, run corpus-wide rather than only
within the target category) after wave 101 caught two near-misses that
a document-title-only search had missed — that stronger check confirmed
all four top-pick topics clean before any research agent was launched,
and no mid-research pivots were needed this wave. All four completed
documents were built with CourtListener's daily quota exhausted
throughout, consistent with the adaptation established in wave 98. Each
surfaced genuine findings through close primary-source reading: an
omitted statutory day-cap and an incorrect "IVF" shorthand (Reproductive
Loss Leave), a collapsed two-directional rule properly separated
(College Athlete NIL), a corrected citation format and a disclosed
federal/state textual asymmetry (Nonprofit Tax-Exempt Status), and a
corrected foreclosure-trigger definition plus a genuine invisible
soft-hyphen extraction artifact handled by paraphrasing rather than
misquoting (Home Equity Sales Contract Act). Per the established
alternation, wave 103 should return to a 2×2 pattern.
