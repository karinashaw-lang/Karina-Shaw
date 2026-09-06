# Family Law, new document: Appointment of Minor's Counsel in Custody Proceedings — Information Sheet

## Why this document

Second processed item of wave 103 (Family Law slot). A scoping pass and
clause-level duplication check confirmed zero prior coverage of Family
Code §§ 3150-3153 anywhere in the corpus, distinct from the existing
Guardian Ad Litem Appointment document (Code of Civ. Proc. § 372), which
enables a minor or incapacitated person to appear as a party at all —
a functionally different role from minor's counsel's independent
best-interest advocacy in a custody or visitation proceeding.

## What this document covers

8 clauses: 2 drafting (case declaration, record/signature block) and 6
authority clauses, citing Family Code §§ 3150(a)-(b), 3151(a)-(c),
(c)(5), 3152(a)-(c), and 3153(a)-(b):

- **`minorscounsel_appointment_standard_and_continuation`** — the
  discretionary best-interest appointment standard and how the
  appointment continues once made.
- **`minorscounsel_distinct_from_guardian_ad_litem`** — an explicit
  functional distinction from a guardian ad litem.
- **`minorscounsel_role_and_duties`** — counsel's evidence-gathering
  role and enumerated duties.
- **`minorscounsel_litigation_powers_and_access`** — counsel's
  procedural powers and a representative subset of the eight enumerated
  § 3151(c) rights, including records access.
- **`minorscounsel_cps_records_access`** — the noticed-motion procedure
  for releasing CPS records to counsel, with confidentiality preserved.
- **`minorscounsel_compensation_and_fee_allocation`** — how compensation
  is set and allocated, including the county-pay fallback.

## Genuine findings

- **A significant correction to the research brief's assumed appointment
  standard**: the brief implied a "may or must" standard with a
  mandatory-appointment ground. The agent read the actual text and found
  the standard is purely discretionary — "the court may appoint" — with
  no mandatory-appointment provision anywhere in §§ 3150-3153. Corrected
  and disclosed explicitly.
- **A significant correction to the research brief's fee-allocation
  framing**: the brief described cost allocation as "between the
  parties." The agent found § 3153(b) makes a *mandatory* county-pay
  fallback part of the statutory scheme whenever the court finds the
  parties financially unable to pay — not merely a discretionary add-on
  to party-only allocation.
- **A sharpened distinction from the guardian ad litem role**: reading
  § 3151(a) closely, the agent characterized minor's counsel's charge as
  "representation of the child's best interests" combined with a duty to
  report the child's stated wishes if desired — a best-interest model
  distinct from a pure client-directed attorney model, refining the
  GAL-distinction clause beyond a generic "different appointment" claim.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's first
  lightweight test call; every authority clause proceeds on the
  statute's own text alone.

## Honest gap(s) disclosed

This document does not independently verify California Rules of Court
5.240-5.242 or Family Code §§ 3177/3182, each cross-referenced by the
statute but not independently fetched. It does not quote all eight of
§ 3151(c)'s enumerated rights verbatim — only a representative subset.
It does not define undefined statutory terms ("best interest," "cause,"
"inappropriate," "relevant"). It does not source the Judicial Council's
financial-eligibility guidelines for county payment. It does not resolve
whether the same child could simultaneously have both a guardian ad
litem and minor's counsel in overlapping proceedings.

## Method

Fetched Family Code §§ 3150, 3151, 3152, and 3153 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings (one transient proxy connection
reset on § 3152's second pass, resolved on retry with the same
User-Agent), confirmed byte-identical after whitespace normalization.
CourtListener's daily rate limit was already exhausted on the agent's
first lightweight test call; no case law was used, a disclosed and
legitimate choice. All 14 citation instances programmatically confirmed
by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-first fetch (a new distinct curl User-Agent string,
"Groundtruth-101stVerify-MinorsCounsel/1.0") of all four sections — all
14 citation instances confirmed clean on direct substring match, no
extraction artifacts encountered.

## Verification

- Family Code §§ 3150-3153 each fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-first independent fetch during integration review;
  all 14 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses citing multiple
  subdivisions of the same statutory section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either), and independently reconfirmed no prior clause
  anywhere in the corpus references Family Code §§ 3150-3153, and that
  this document is genuinely distinct from the existing guardian ad
  litem document.
- Checked every citation's `case` field for emptiness — all 14
  populated with proper citation identifier strings.
- One new field required: `minorsCounselName` (confirmed genuinely new
  via a corpus-wide field-id lookup before adding); the other eight
  fields (`childName`, `parent1Name`, `parent2Name`, `courtName`,
  `courtCaseNumber`, `countyOfFiling`, `dateSigned`, `cityState`) reused
  from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Appointment of Minor's Counsel in Custody Proceedings —
  Information Sheet (`appointment_of_minors_counsel_info_sheet`), 8
  clauses (6 authority + 2 drafting), in the Family Law category. One
  new field: `minorsCounselName`.
- Corpus: 3,433 → 3,441 clauses; 455 → 456 documents. Second processed
  item of wave 103.
