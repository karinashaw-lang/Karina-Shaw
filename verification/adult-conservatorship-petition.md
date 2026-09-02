# Estate Planning, new document: Conservatorship of an Adult — Petition Information Sheet

## Why this document

The existing Guardianship Petition document covers minors. The existing
Financial Power of Attorney and Advance Health Care Directive documents
are private, voluntary designations an adult makes for themself while
still competent. This document covers the genuinely distinct
court-supervised process for appointing a conservator over an adult who
cannot care for themself or manage their finances — brought about by
someone else, over the proposed conservatee's objection if necessary.
Follows the same informational, non-dispositive pattern as the
Guardianship Petition document: explicit throughout that it does not
itself establish a conservatorship.

## What this document covers

8 clauses: 2 drafting (declaration, signature block) and 6 authority
clauses:

- **`conserv_scope_and_petitioners`** (Prob. Code § 1820(a)) — that a
  conservatorship is created only through an actual court proceeding,
  and who may file the petition.
- **`conserv_two_types_and_standard`** (Prob. Code § 1801(a), (b), (c),
  (e)) — the two distinct, severable types (conservator of the person;
  conservator of the estate) and the clear-and-convincing standard of
  proof.
- **`conserv_petition_contents`** (Prob. Code § 1821(a)(1), (b)) — the
  required petition contents, correcting an assumption that a physician
  capacity declaration is part of the petition itself.
- **`conserv_investigation_requirement`** (Prob. Code § 1826(a)(1)-(2),
  (a)(9)-(10)) — the court investigator's mandatory independent
  investigation, interviews, and medical-report review.
- **`conserv_conservatee_rights_hearing`** (Prob. Code § 1828(a)(6),
  § 1827) — the proposed conservatee's rights to oppose, a jury trial,
  and counsel (appointed if unrepresented).
- **`conserv_limited_conservatorship_distinct`** (Prob. Code § 1801(d),
  § 2351.5(a)) — the distinct, narrower limited-conservatorship category
  for a developmentally disabled adult.

## Genuine corrections caught during research

- The task brief assumed "who may petition" is found in §§ 1800-1801.
  Direct review shows § 1800 is legislative intent and § 1801 is the
  two-types/standard provision; the actual petitioner list is at
  § 1820(a).
- The task brief assumed § 1821 requires a capacity declaration from a
  licensed physician or other qualified professional as part of the
  petition. Direct review shows no such requirement exists in § 1821's
  text — the actual physician-input mechanism is a separate one: under
  § 1826(a)(9), it is the court investigator, not the petitioner, who
  must gather and review the proposed conservatee's medical reports as
  part of the mandatory post-filing investigation.

## Method

Fetched Prob. Code §§ 1800, 1801, 1820, 1821, 1823, 1826, 1827, 1828,
1828.5, and 2351.5 directly from `leginfo.legislature.ca.gov`, each
verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical (all 10 sections matched
exactly). No case law cited; the statutory text is unambiguous.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — the agent caught and
  fixed one real leak (a stray `{{proposedConserveeName}}` in
  `conserv_scope_and_petitioners`'s `gap` field) before delivery;
  independently re-confirmed clean on integration.
- Checked source-independence disclosure logic across all 6 authority
  clauses — correct as delivered (each same-section clause carries an
  explicit "cites N subsections of the same section" disclosure
  sentence, including for the single-citation clause).
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- New fields: `proposedConservatorName`, `proposedConserveeName`,
  `relationshipToConservatee`, `conservatorshipTypeSought`,
  `dateSigned`, `cityState`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Conservatorship of an Adult — Petition Information
  Sheet (`adult_conservatorship_petition_info`), 8 clauses (6 authority
  + 2 drafting), in the Estate Planning category. New fields:
  `proposedConservatorName`, `proposedConserveeName`,
  `relationshipToConservatee`, `conservatorshipTypeSought`,
  `dateSigned`, `cityState`.
- Corpus and document totals (this wave, four documents merged
  together): 728 → 757 clauses; 97 → 101 documents.
