# Real Estate, new document: Disposition of Personal Property Remaining on the Premises After Tenancy — Information Sheet

## Why this document

Second processed item of wave 132 (Real Estate slot, 1×4 pattern).
The agent ruled out six candidates via specific section-number greps
before landing here: the documentary transfer tax (already covered
inside the Quitclaim Deed document), Megan's Law database notice
(already covered), SGMA/groundwater rights (already substantively
covered inside the California Water Rights document), and home
inspector standards (Bus. & Prof. Code §§7195-7199, judged too thin —
not actually a licensing regime) were confirmed already covered or a
weaker fit. The chosen topic — the optional statutory procedure for
handling a tenant's personal property left behind after a tenancy
ends (Civ. Code §§1980-1991) — was confirmed genuinely open: zero
prior corpus hits on §§1980-1991 before drafting; the only apparent
hits traced to a different code entirely (Probate Code §§1980-2033,
the Uniform Adult Guardianship Act), a case name ("McCarty v.
McCarty (1981)"), and "1988" appearing only as a year in unrelated
legislative history — all confirmed false positives.

## What this document covers

10 clauses: 2 drafting (intro, notice worksheet/signature) and 8
authority clauses, citing Civ. Code §1980(a)-(d), (f), §1981(a), (c),
(e), §1982(a)-(b), §1983(a)-(c), §1984(a), (b)(1)-(2), §1985, §1986,
§1987(a), (c), §1988(a)-(c), §1989(a)-(c)(2), §1990(a)(1)-(2), (c),
§1991:

- **`abanprop_definitions`** — the chapter-specific definitions of
  Landlord, Owner, Premises, Tenant, and Reasonable belief.
- **`abanprop_scope_exclusions`** — the chapter's optional-procedure
  framing and its exclusions (mobilehomes, manufactured homes,
  commercial coaches, lost property).
- **`abanprop_notice_requirements`** — the notice content, the
  15/18-day deadline math, and delivery methods including optional
  email.
- **`abanprop_statutory_forms`** — the statutory notice forms and the
  two mutually-exclusive required disclosure statements.
- **`abanprop_storage_duty`** — the storage-pending-disposition duty
  and reasonable-care standard.
- **`abanprop_release_and_cost`** — release conditions, the two-day
  free-reclaim window, and storage-cost assessment.
- **`abanprop_disposal_and_sale`** — the public-sale procedure and the
  $700 low-value exception.
- **`abanprop_liability_limit`** — the landlord's liability
  limitations and coordination with a §1951.3 abandonment notice.

## Genuine findings

- **A disclosed, deliberate observation on statutory age**: the
  storage-duty clause's gap notes that §1986 has not been amended
  since its original 1974 enactment, even though several neighboring
  sections of the same chapter were amended as recently as 2012 — a
  specific, verified textual/historical observation, not a generic
  caveat.
- **A disclosed, unaddressed statutory gap flagged rather than
  resolved**: the release-and-cost clause's gap notes that §1987(c)'s
  two-day free-reclaim rule applies where property "remained in the
  dwelling," and the statute does not address whether that rule still
  applies if the landlord moved the property to off-site storage
  before the two days elapsed.
- **A disclosed textual observation on a fixed, non-indexed dollar
  figure**: the disposal-and-sale clause's gap notes the $700
  resale-value threshold has applied unchanged since a 2013 amendment,
  with no inflation indexing provided by the statute.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not define "Premises" beyond stating it "includes
any common areas," does not resolve what "substantial" compliance
with the statutory notice forms means, does not determine which of
the two required disclosure statements applies to any specific
property, does not define "place of safekeeping" or set a minimum
storage standard beyond "reasonable care," does not calculate a
specific dollar figure for "reasonable cost of storage," does not
address off-site storage's effect on the two-day free-reclaim rule,
and does not determine whether a landlord's belief about resale value
or lost-versus-abandoned status is factually reasonable in any
specific case.

## Method

Fetched Civ. Code §§1980-1991 (12 sections) from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed identical after
HTML-tag-stripping and whitespace normalization (raw byte counts
differed only due to a randomized JSF ViewState token). CourtListener's
daily quota was already exhausted (HTTP 429) on the agent's test call;
no case law was used or fabricated. Every citation's quote field was
programmatically confirmed by the research agent as an exact,
contiguous substring of the fetched source text.

Independently re-verified during integration review via a
one-hundred-and-ninety-first fetch (a new distinct curl User-Agent
string, "Groundtruth-191stVerify-AbandonedProperty/1.0") of all
twelve sections — all 29 citation instances confirmed clean on direct
normalized-whitespace substring match, with no fallback needed. The
definitions, the optional-procedure framing and exclusions, the
notice requirements and statutory forms, the storage duty, the
release conditions and cost-assessment rules, the disposal/public-sale
procedure, and the liability-limitation and §1951.3-coordination
provisions were all independently reconfirmed present in the freshly
fetched text.

## Verification

- All twelve Civil Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-ninety-first independent fetch during integration
  review; all 29 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `abanprop_` prefix has zero collisions. Ran
  section-number-specific greps for §§1980-1991 across the full
  corpus — zero hits outside the new clauses, confirming no disguised
  overlap.
- Checked every citation's `case` field for emptiness — all 29
  populated with proper citation identifier strings.
- Three new field ids confirmed genuinely necessary and non-
  duplicative: `claimLocationAddress`, `claimDeadlineDate`,
  `estimatedResaleValue` — none existed previously in the corpus under
  any name. Eight other fields (`landlordName`, `tenantName`,
  `propertyAddress`, `moveOutDate`, `personalPropertyDescription`,
  `noticeDate`, `dateSigned`, `cityState`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Disposition of Personal Property Remaining on the
  Premises After Tenancy — Information Sheet
  (`abandoned_personal_property_disposition_info_sheet`), 10 clauses
  (8 authority + 2 drafting), in the Real Estate category. Three new
  fields: `claimLocationAddress`, `claimDeadlineDate`,
  `estimatedResaleValue`.
- Corpus: 4,300 → 4,310 clauses; 545 → 546 documents. Second processed
  item of wave 132.
