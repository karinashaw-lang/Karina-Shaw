# Family Law, new document: Section 2640 Reimbursement of Separate Property Contributions — Information Sheet

## Why this document

Confirmed by grep that "2640," "2641," and "reimbursement of separate
property" had zero genuine hits anywhere in the corpus. Read the
existing Watts/Epstein document in full — confirmed this is a
genuine, non-duplicative companion: Watts addresses reimbursement for
exclusive post-separation use of a community asset; Epstein addresses
separate funds paying a community debt after separation; § 2640
addresses a third, distinct doctrine — tracing a separate-property
contribution to the ACQUISITION of community property made DURING the
marriage. First of wave 69's four documents (Business Formation +
Family Law "2×2" alternation).

## What this document covers

6 clauses: 2 drafting (declaration, signature/acknowledgment) and 4
authority clauses, citing Cal. Fam. Code § 2640(a), (b) (two sentences
cited separately), and (c):

- **`reimbursement2640_qualifying_contributions`** (§ 2640(a)) — the
  statute's own definition of "contributions to the acquisition of
  property" (down payments, improvement payments, principal-reduction
  payments) and its express exclusions (interest, maintenance,
  insurance, taxation payments).
- **`reimbursement2640_core_right`** (§ 2640(b), first sentence) —
  the mandatory reimbursement right for traced separate-source
  contributions, subject to a written-waiver exception.
- **`reimbursement2640_limit`** (§ 2640(b), second sentence) — **a
  key finding**: the reimbursement is a fixed-dollar formula (no
  interest, no adjustment for value change, capped at the property's
  net value at division) — explicitly NOT a pro-rata appreciation-
  sharing rule, a distinction the agent verified precisely rather than
  assuming from a related but different doctrine (e.g., Moore/Marsden
  calculations).
- **`reimbursement2640_separate_to_separate`** (§ 2640(c)) — the
  related but distinct rule for contributions to the OTHER spouse's
  separate property, included only to mark the boundary against the
  community-property reimbursement right the rest of the document
  describes.

## Genuine corrections and findings

- **The central finding**: confirmed § 2640's reimbursement formula
  is fixed-dollar (traced contribution amount only, no interest, no
  value adjustment, capped at net value at division) — the agent
  explicitly verified this against the actual statutory text rather
  than assuming a pro-rata appreciation-sharing approach by analogy to
  other California family-law reimbursement/credit doctrines.
- Confirmed the statute's own express exclusions from "contributions
  to the acquisition of property" (interest, maintenance, insurance,
  taxation payments) — a real limit that narrows what qualifies.
- Confirmed the written-waiver exception's exact statutory language
  ("a written waiver... or has signed a writing that has the effect
  of a waiver") without inventing a specific required form the statute
  doesn't itself state.
- Confirmed § 2641 exists but governs an unrelated doctrine (education/
  training reimbursement with interest) — correctly excluded from this
  document rather than conflated with § 2640.

## Honest gap disclosed

The statute's own text does not define what form a waiver-writing
must take beyond being written (and signed, where not itself a
waiver), does not define the tracing methodology or burden of proof,
and does not spell out step-by-step division mechanics beyond "in the
division of the community estate" — each disclosed explicitly rather
than inferred. The transmutation-in-writing cross-reference in
§ 2640(c) (Fam. Code § 850 et seq.) was not independently researched.

## Method

Fetched Cal. Fam. Code § 2640 from `leginfo.legislature.ca.gov` via
curl (through the sandboxed proxy), fetched twice with distinct
User-Agent strings, confirmed byte-identical after whitespace
normalization. All 4 citation quotes across the 4 authority clauses
programmatically confirmed as exact substrings of the confirmed text.

## Verification

- The statutory section fetched twice independently with distinct
  User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — all four citations
  correctly disclosed as subdivisions of the same statutory section,
  not independent of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none);
  the reused titles "Declaration of Parties and Purpose of This
  Information Sheet" and "Signature and Acknowledgment — Not a Court
  Filing" match an established Family Law boilerplate pattern already
  used across five other documents in this corpus, not a substantive
  duplicate.
- Field names (`party1Name`, `party2Name`, `countyOfFiling`,
  `dateSigned`, `cityState`) independently confirmed to match existing
  corpus field definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: Section 2640 Reimbursement of Separate Property
  Contributions — Information Sheet
  (`family_code_2640_reimbursement_info_sheet`), 6 clauses (4
  authority + 2 drafting), in the Family Law category. No new fields.
- Corpus: 2,498 → 2,504 clauses; 323 → 324 documents. First document
  of wave 69.
