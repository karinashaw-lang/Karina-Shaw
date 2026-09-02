# Estate Planning, new document: Petition for Probate — Information Sheet

## Why this document

The existing Small Estate Affidavit document covers the simplified,
no-court-proceeding process for estates under the statutory
threshold. This document covers the genuinely distinct formal,
court-supervised probate process required for estates that don't use
that mechanism: petitioning to open probate, appointing a personal
representative, notice and creditor claims, the intestate
administrator priority order, and the requirement of Letters before a
personal representative has any authority to act. Follows the same
informational, non-dispositive pattern as the Guardianship and
Conservatorship Petition documents.

## What this document covers

9 clauses: 2 drafting (declaration, signature block) and 7 authority
clauses:

- **`probate_scope_and_who_may_petition`** (Prob. Code § 8000(a);
  § 48(a)) — probate is opened only by court proceeding; who may
  petition.
- **`probate_no_general_filing_deadline`** (Prob. Code § 8001) — an
  honest correction: no general filing deadline exists; only a narrow
  30-day waiver rule for a named executor.
- **`probate_petition_required_contents`** (Prob. Code § 8002(a), (b))
  — the actual required petition contents.
- **`probate_notice_of_hearing_and_creditor_claims`** (Prob. Code
  § 8110; § 8100) — the 15-day notice requirement and the creditor
  claim-filing deadline.
- **`probate_intestate_administrator_priority`** (Prob. Code § 8460;
  § 8461) — the full statutory priority order for administrator
  appointment when there's no will.
- **`probate_letters_required_before_authority`** (Prob. Code § 8400;
  § 8403) — a personal representative has no power to act until
  Letters issue.
- **`probate_independent_administration_vs_court_supervision`** (Prob.
  Code § 10450; § 10501(a); § 10404) — IAEA authority and the matters
  that still require court supervision even under full authority.

## Genuine corrections caught during research

- The task brief assumed § 8001 sets a general filing deadline after
  death. Direct review shows no such general deadline exists — § 8001
  is a narrow rule under which only a person named executor in a will
  may waive their own appointment priority by not petitioning within
  30 days of learning of the death and their naming; it doesn't bar
  probate or bind anyone else.
- The task brief assumed required petition contents are in the
  §§ 8100-8110 range. Direct review shows that range actually governs
  the separate notice of hearing (§ 8100) and its service (§ 8110);
  the actual required-contents section is § 8002.
- The task brief's hypothesized administrator priority order (spouse,
  children, grandchildren, parents, siblings) was confirmed as
  accurate but incomplete — § 8461's actual list runs to 18 categories,
  continuing through issue of siblings, grandparents, several
  predeceased-spouse-related categories, other next of kin, an acting
  conservator/guardian, the public administrator, creditors, and
  finally any other person.

## Honest gaps disclosed

- § 8002 doesn't literally list "whether the decedent left a will" as
  a standalone required item; that fact surfaces through § 8002(b)'s
  conditional attachment/consent-waiver requirements — disclosed
  rather than overclaimed as an explicit checkbox item.
- § 10501(a)'s full ten-item list and § 10501(b)'s four items are
  summarized rather than fully reproduced, with that noted in the gap
  field; several conditioning provisions in the administrator-priority
  article (§§ 8462-8464) are disclosed rather than quoted.

## Method

Fetched Prob. Code §§ 48, 8000, 8001, 8002, 8100, 8110, 8460, 8461,
8400, 8403, 10450, 10501, and 10404 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical.
All 14 citation quotes verified as exact substrings of the fetched
text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 7 authority
  clauses — the one same-section clause
  (`probate_petition_required_contents`, citing § 8002(a) and (b))
  carries an explicit disclosure sentence — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`decedentName`, `dateOfDeath`, `dateSigned`,
  `cityState`) confirmed to match the existing Small Estate Affidavit,
  Guardianship Petition, and Conservatorship Petition documents'
  conventions exactly. New fields: `petitionerName`, `placeOfDeath`,
  `relationshipToDecedent`, `estimatedEstateValue`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Petition for Probate — Information Sheet
  (`petition_for_probate_info_sheet`), 9 clauses (7 authority + 2
  drafting), in the Estate Planning category. New fields:
  `petitionerName`, `placeOfDeath`, `relationshipToDecedent`,
  `estimatedEstateValue`.
- Corpus: 797 → 806 clauses; 106 → 107 documents.
