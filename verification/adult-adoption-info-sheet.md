# Family Law, new document: Adult Adoption in California — Information Sheet

## Why this document

Fourth and final processed item of wave 103 (Family Law slot). A
scoping pass and clause-level duplication check confirmed zero prior
coverage of Family Code §§ 9320-9328 anywhere in the corpus, distinct
from the existing minor-adoption documents (Stepparent Adoption,
Independent Adoption) and Guardianship of the Person document, all of
which govern children under 18 built around a birth parent's or
existing legal parent's consent.

## What this document covers

8 clauses: 2 drafting (declaration, signature block) and 6 authority
clauses, citing Family Code §§ 9320(a)-(b), 9321(a)-(b), 9322, 9323,
9324, 9325, 9326(a)-(b), 9327, 9328(a)-(c), and Probate Code §§
6450(b), 6451(a):

- **`adultadopt_eligibility_and_agreement`** — who may adopt whom and
  the jointly-executed written adoption agreement mechanism.
- **`adultadopt_petition_and_venue`** — the petition-filing venue rule
  and required petition content.
- **`adultadopt_hearing_notice_and_appearance`** — hearing-setting,
  notice to interested persons, and the personal-appearance requirement.
- **`adultadopt_investigation_and_developmental_disability_notice`** —
  the default no-investigation rule and its narrower exception for
  adults with developmental disabilities adopted by their care
  providers.
- **`adultadopt_court_approval_standard`** — the court's best-interest
  approval standard and relaxed evidentiary rules.
- **`adultadopt_inheritance_effect`** — the adoption's effect on
  inheritance from the adoptee's birth family under Probate Code
  §§ 6450-6451.

## Genuine findings

- **A corrected statutory range**: the brief guessed §§ 9320-9326; the
  agent found via leginfo's own chapter heading that the actual range is
  §§ 9320-9328, capturing three additional sections (hearing/notice,
  investigation, and the approval standard) the brief's narrower guess
  would have missed entirely.
- **A significant correction to two common assumptions**: the brief
  assumed a separate written consent document from the adoptee and a
  spouse-consent requirement. The agent found neither exists — § 9320(b)
  requires one jointly-executed written adoption agreement (functioning
  as consent but not framed as a unilateral form), and the only spousal
  restriction is a bar on adopting one's own spouse, with no requirement
  that the adoptee's own spouse consent.
- **A disclosed, unanticipated exception the brief missed**: §§ 9326-9327
  impose a narrower mandatory notice/report requirement specific to
  adoptions of adults with developmental disabilities by their care
  providers — an exception to the general no-investigation default the
  brief's framing didn't anticipate.
- **A corrected assumption about the inheritance rule**: the brief
  implied a distinct adult-adoption inheritance rule. The agent found
  Family Code Chapter 2 says nothing about inheritance at all — Probate
  Code §§ 6450-6451 govern, applying identically to adult and minor
  adoptees with no adult-specific carve-out, and (since an adult adopter
  is typically not the adoptee's natural parent's spouse or adopting
  after that parent's death) the birth-family severance default, not its
  narrow exception, will typically apply.
- **A genuine defect caught and fixed by the agent's own verification
  script**: an initial quote-verification pass caught an unescaped
  quotation mark breaking JSON validity and two quotes matching only
  after flattening incidental HTML line-wraps — both fixed before
  delivery, confirmed clean on the final run.

## Honest gap(s) disclosed

This document does not independently verify § 8613.5's remote-appearance
criteria (cross-referenced by § 9324), the Welfare and Institutions Code
regional-center definition cross-referenced by § 9326, or every
procedural detail of § 9321's six required petition items beyond the
four quoted verbatim. It does not state any case law construing
"interested person" under § 9323 or the personal-appearance requirement
under § 9324. It does not address testate succession, nonprobate
transfers, or any other body of law that might treat an adopted adult
differently outside intestate succession. It does not determine whether
any specific petition, adoptee, or adoptive parent meets any of these
statutory conditions.

## Method

Fetched Family Code §§ 9320-9328 and Probate Code §§ 6450-6451 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings (one transient connection reset on
§ 9328's second pass, resolved on retry), confirmed byte-identical after
whitespace/non-breaking-space normalization. CourtListener's daily rate
limit was already exhausted on the agent's first lightweight test call;
no case law was used, a disclosed and legitimate choice. All 15 citation
instances programmatically confirmed by the research agent as exact,
contiguous substrings, following the agent's own internal catch-and-fix
of two quote-matching defects before delivery.

Independently re-verified during integration review via a
one-hundred-and-third fetch (a new distinct curl User-Agent string,
"Groundtruth-103rdVerify-AdultAdopt/1.0") of all eleven sections — all
15 citation instances confirmed clean on direct substring match, no
further extraction artifacts encountered.

## Verification

- Family Code §§ 9320-9328 and Probate Code §§ 6450-6451 each fetched
  twice independently by the research agent with distinct User-Agent
  strings, plus a one-hundred-and-third independent fetch during
  integration review; all 15 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses citing multiple
  subdivisions of the same statutory section, versus separate
  independently-numbered sections, correctly disclose which is which;
  correct as delivered throughout.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either), and independently reconfirmed this document is
  genuinely distinct from the corpus's minor-adoption and guardianship
  documents.
- Checked every citation's `case` field for emptiness — all 15
  populated with proper citation identifier strings.
- One new field required: `adopteeName` (confirmed genuinely new via a
  corpus-wide field-id lookup before adding); the other four fields
  (`petitionerName`, `countyOfFiling`, `dateSigned`, `cityState`) reused
  from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Adult Adoption in California — Information Sheet
  (`adult_adoption_info_sheet`), 8 clauses (6 authority + 2 drafting),
  in the Family Law category. One new field: `adopteeName`.
- Corpus: 3,449 → 3,457 clauses; 457 → 458 documents. Fourth and final
  processed item of wave 103.

## Wave 103 summary

Wave 103 followed the established 2×2 pattern, targeting Estate
Planning and Family Law — the corpus's two then-lowest-tied categories.
This wave's scoping pass applied the strengthened cross-category,
clause-level duplication check for the second consecutive wave, and all
four top-pick topics were confirmed clean before launch, with no
mid-research pivots needed. All four completed documents were built
with CourtListener's daily quota exhausted throughout, consistent with
the adaptation established in wave 98. Each surfaced genuine findings
through close primary-source reading: a materially more complete
statutory picture with four unanticipated provisions (Stepped-Up Basis
at Death), a corrected section range and a sharpened distinction
between full transfer and mere registration (Interstate Conservatorship
Jurisdiction), a corrected discretionary-versus-mandatory appointment
standard and fee-allocation rule (Appointment of Minor's Counsel), and
a corrected statutory range plus two corrected assumptions about
consent requirements and the inheritance rule (Adult Adoption). Per the
established alternation, wave 104 should return to a 1×4 pattern.
