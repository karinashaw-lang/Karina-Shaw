# Real Estate, new document: California Statewide Just Cause Eviction and Rent Cap (AB 1482) — Information Sheet

## Why this document

The existing Notice to Pay Rent or Quit and 3-Day Notice to Perform
Covenant or Quit documents concern specific eviction notices for
specific lease violations. This document covers a genuinely broader,
separate statewide statutory framework — the Tenant Protection Act of
2019 — within which those specific notices operate.

## What this document covers

10 clauses: 2 drafting (introduction/scope, acknowledgment) and 8
authority clauses covering both of AB 1482's requirements: a rent cap
(Civ. Code § 1947.12) and a just-cause requirement (Civ. Code
§ 1946.2):

- **`justcause_occupancy_threshold_and_definition`** — the 12-month
  occupancy threshold, including a wrinkle when an additional adult
  tenant is added, and the two just-cause categories.
- **`justcause_at_fault_grounds`** — all 11 enumerated at-fault
  grounds, correcting an assumption that only a few illustrative
  grounds exist.
- **`justcause_no_fault_grounds`** — the 4 no-fault grounds, including
  the statutorily-defined "substantially remodel" standard.
- **`justcause_relocation_assistance`** — the one-month relocation-
  assistance-or-rent-waiver requirement, including that noncompliance
  voids the termination notice — a genuine find beyond the original
  brief.
- **`justcause_rent_cap_formula`** — the 5%-plus-CPI/10% cap, applied
  to the lowest gross rate in the prior 12 months, plus the separate
  twice-per-12-months increase limit.
- **`justcause_rent_cap_exemptions`** — the rent cap's 6-category
  exemption list.
- **`justcause_eviction_exemptions`** — the just-cause requirement's
  separate, 9-category exemption list, plus the local-ordinance
  displacement rule.
- **`justcause_single_family_exemption_notice`** — the shared
  alienable-title exemption's required statutory notice language,
  including a genuine, carefully-flagged one-word textual variance
  between the two parallel statutes.

## Genuine corrections and findings

- Confirmed the rent-cap formula (5% + regional CPI, or 10%, whichever
  is lower) exactly as guessed, but the task brief missed that it's
  applied to the *lowest* gross rate in the prior 12 months, and that
  increases are separately capped at twice per 12-month period
  regardless of the percentage math.
- Confirmed the 12-month occupancy threshold, but found a wrinkle not
  in the task brief: it shifts to a 24-month rule when an additional
  adult tenant is added before the original tenant reaches 12 months.
- The task brief anticipated only a few illustrative at-fault grounds.
  Direct review shows there are 11 enumerated grounds, including
  several not anticipated (refusal to sign a renewal lease,
  unauthorized subletting, refusal of entry, unlawful use, holdover by
  a terminated employee/agent/licensee).
- Confirmed the 4 no-fault grounds match the task brief's guess
  exactly, with the "substantially remodel" standard's own statutory
  definition (≥30 consecutive vacate-days) confirmed.
- The relocation-assistance requirement (one month's rent, 15-day
  payment window) was confirmed, and the agent found and added a
  genuine, unrequested finding: noncompliance voids the termination
  notice.
- **A significant correction**: the task brief assumed the rent-cap
  and just-cause exemption lists are the same. Direct review shows
  they are not — 6 categories versus 9, with just-cause exempting
  categories (transient hotels, nonprofit hospitals/care facilities,
  shared-bath/kitchen situations) the rent cap doesn't, while sharing
  three categories (15-year-new-construction, deed-restricted
  affordable housing, and the alienable-title/non-corporate-ownership
  exemption).
- A genuine textual find: the shared alienable-title exemption's
  required notice statement is identical between the two statutes, but
  their lead-in sentences differ by one word ("residential property"
  vs. "residential real property") — flagged as a real variance, not
  dismissed as a typo.

## Honest gaps disclosed

- Only a subset of subsections in the at-fault-grounds, no-fault-
  grounds, and both exemption-list clauses are quoted verbatim; the
  remainder are summarized, with each clause explicitly noting this so
  a reader needing exact wording is directed to the statute itself.
- This document addresses statewide law only; local rent-control and
  just-cause ordinances that may impose different or more protective
  requirements are not catalogued.

## Method

Fetched Civ. Code §§ 1946.2 and 1947.12 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical
(§ 1946.2 current through the 2025 AB 1529 amendment operative January
1, 2026; § 1947.12 current through its 2023 SB 567 reenactment). All
citation quotes programmatically confirmed as exact substrings of the
verified text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic across all 8 authority
  clauses — every clause correctly distinguishes same-section citations
  from citations to a genuinely different statute (the cross-statute
  notice-language clause explicitly notes its § 1947.12 citation is not
  independent corroboration of its § 1946.2 citations); correct as
  delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`landlordName`, `tenantName`, `propertyAddress`,
  `monthlyRent`, `dateSigned`, `cityState`) confirmed to match existing
  Real Estate document conventions exactly. No new fields introduced.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: California Statewide Just Cause Eviction and Rent Cap
  (AB 1482) — Information Sheet
  (`just_cause_eviction_rent_cap_info_sheet`), 10 clauses (8 authority
  + 2 drafting), in the Real Estate category. No new fields.
- Corpus: 1,069 → 1,079 clauses; 138 → 139 documents.
