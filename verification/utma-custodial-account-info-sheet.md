# Estate Planning, new document: Custodial Account for a Minor (UTMA) — Information Sheet

## Why this document

The corpus's existing Guardianship of the Estate and Testamentary
Trust documents mention California's Uniform Transfers to Minors Act
only in passing, as an alternative mechanism (the $5,000
guardianship-of-the-estate threshold and a will's built-in minor's
trust). Neither document analyzes the custodianship mechanism itself
— its creation, the custodian's powers and duties, and termination.

## What this document covers

8 clauses: 2 drafting (transfer declaration, signature/certification)
and 6 authority clauses:

- **`utma_creation_method`** (Prob. Code § 3909) — how a custodial
  transfer is created and what property qualifies.
- **`utma_custodian_powers_standard`** (§§ 3912-3913) — the
  custodian's management powers and prudent-person standard of care.
- **`utma_permitted_uses`** (§ 3914) — permitted uses of custodial
  property for the minor's benefit without court order.
- **`utma_termination_age`** (§§ 3920, 3920.5) — the termination age
  and the delay mechanism extending it beyond the default.
- **`utma_irrevocability_vested_title`** (§ 3911(b)) — irrevocability
  and vested legal title in the minor.
- **`utma_liability_successor_custodian`** (§§ 3917-3918) —
  custodian liability limits and successor-custodian rules.

## Genuine corrections and findings

- Confirmed the statutory range: Prob. Code Part 9, §§ 3900-3925
  (with an inserted § 3920.5; there is no § 3924).
- **A significant correction to the original framing**: California's
  *default* termination age is 18, not 21 — this differs from many
  other states' UTMA/UGMA defaults. A transferor can select a later
  age in the transfer instrument under § 3920.5, but the ceiling
  depends on how the transfer was made: up to 21 for an
  irrevocable-gift transfer under § 3904, or up to 25 for transfers
  under a nomination, governing will, or trust (§§ 3903/3905).
  Flagged explicitly in the `utma_termination_age` clause's `gap`
  field rather than silently asserting 21.
- Confirmed the irrevocability and indefeasibly-vested-title language
  verbatim in § 3911(b), as originally framed.
- Confirmed via re-grep that the corpus's existing
  `guardestate_alternatives_small_estate` and `testtrust_common_uses`
  clauses cite § 3401 only for the $5,000 guardianship-of-the-estate
  deduction and the minor's-trust alternative, respectively, and
  explicitly disclaim analyzing Part 9's own creation/duty/termination
  rules — confirming this document's genuine, non-duplicative depth.

## Honest gaps disclosed

- No separate clause was written on § 3906/§ 3920.5(f)'s
  trustee-transfer delay ceiling, or on § 3915's compensation/bond
  provisions — noted as gaps in the relevant clauses rather than
  glossed over.
- No independent second source beyond the statute itself was sought
  for any provision, since California's Probate Code is the sole
  primary authority for its own mechanics.
- No case law was used — this is a purely statutory topic.

## Method

Fetched the full text of Cal. Prob. Code Part 9 (§§ 3900-3925)
directly from `leginfo.legislature.ca.gov`, and spot-confirmed
individual citation-URL pages, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-
identical apart from session-timestamp JS tokens. All 9 citation
quotes programmatically confirmed as exact substrings of the fetched,
normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Signature and Certification") confirmed as the
  corpus's established, accepted generic drafting-title-reuse pattern.
- Field names (`dateSigned`, `cityState`, `propertyDescription`)
  independently confirmed to match existing corpus convention. New
  fields: `transferorName`, `custodianName`, `minorName`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Custodial Account for a Minor (UTMA) — Information
  Sheet (`utma_custodial_account_info_sheet`), 8 clauses (6 authority
  + 2 drafting), in the Estate Planning category. New fields:
  `transferorName`, `custodianName`, `minorName`.
- Corpus: 1,494 → 1,502 clauses; 188 → 189 documents.
