# Estate Planning, new document: Community Property Agreement — Information Sheet

## Why this document

The existing Small Estate Affidavit document covers a different,
general small-estate mechanism (Prob. Code §§ 13100-13106, with a
dollar-value ceiling). This document covers a genuinely distinct
statutory track specific to a surviving spouse or registered domestic
partner: how community and quasi-community property passes without
formal probate administration, with no dollar-value ceiling.

## What this document covers

11 clauses: 2 drafting (declaration, signature/acknowledgment) and 9
authority clauses:

- **`commprop_survivors_own_half`** (Prob. Code §§ 100, 101) — the
  surviving spouse's own one-half of community/quasi-community
  property, which already belongs to them by operation of law at
  death, distinct from property that "passes" to them.
- **`commprop_no_administration_rule`** (Prob. Code § 13500) — the
  core passage-without-administration rule.
- **`commprop_property_excluded_from_13500`** (Prob. Code § 13501) —
  what remains subject to full administration (property passing to
  third parties, property left in trust, "qualified ownership"
  devises).
- **`commprop_election_to_administer`** (Prob. Code § 13502) — the
  surviving spouse's election to have the property administered
  anyway, with its 4-month filing deadline.
- **`commprop_right_to_dispose_real_property`** (Prob. Code § 13540) —
  the surviving spouse's power to sell or convey community real
  property after 40 days.
- **`commprop_spousal_property_petition`** (Prob. Code §§ 13650-13660)
  — the separate, optional court procedure for a recordable order
  confirming property passed to the surviving spouse.
- **`commprop_definitions`** (Fam. Code §§ 760, 125) — the statutory
  definitions of community property and quasi-community property.
- **`commprop_spousal_debt_liability`** (Prob. Code §§ 13550-13551) —
  the surviving spouse's continuing personal liability for the
  decedent's debts, capped at fair market value less liens.
- **`commprop_vs_small_estate_and_probate`** (Prob. Code §§ 13500,
  13100) — the factual distinction from the Small Estate Affidavit and
  from formal probate.

## Genuine corrections and findings

- Corrected an initial assumption that § 13500's text itself says
  property "belongs to" the surviving spouse and is limited to
  community/quasi-community property. Direct review shows § 13500
  actually states that property "passes to the survivor... and no
  administration is necessary" for whatever the will devises to the
  spouse outright (any character of property) or whatever passes
  intestate — the "belongs to" language and the community/
  quasi-community limitation actually come from the separate §§ 100
  and 101, which establish that the survivor's own one-half already
  belongs to them by operation of law at death, a distinct legal event
  from § 13500's passage rule.
- Confirmed § 13502 as the correct election-to-administer section,
  with its 4-month filing deadline from issuance of letters.
- Corrected an initial assumption about the Spousal Property Petition's
  section number: it lives at §§ 13650-13660, not § 13540 (which is
  actually a different, related provision — the 40-day real-property
  disposal power). Confirmed the petition is distinct and optional
  from automatic § 13500 passage, used to obtain a recordable court
  order, e.g., to clear title or resolve characterization disputes. A
  genuine additional finding: attorney's fees for this petition are
  set by private agreement, not court approval, under § 13660.
- Corrected the definitions citation: quasi-community property is
  defined at Fam. Code § 125 specifically (not §§ 125-126 generally —
  § 126 defines "Petitioner," an unrelated term). Community property
  is correctly Fam. Code § 760.
- Confirmed liability lives at §§ 13550-13551, capped at fair market
  value less liens of three defined property categories.
- Confirmed no dollar-value threshold exists in § 13500's text,
  contrasted directly against § 13100's explicit ceiling in the
  existing Small Estate Affidavit clause already in this corpus.

## Honest gap disclosed

The `commprop_vs_small_estate_and_probate` clause's § 13500 quote is
reused verbatim from the `commprop_no_administration_rule` clause
rather than an independent second finding — disclosed explicitly in
its `gap` field rather than presented as new corroboration.

## Method

Fetched Prob. Code §§ 100, 101, 13500, 13501, 13502, 13540, 13550,
13551, and 13650-13660, and Fam. Code §§ 125 and 760, directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed textually
identical. All quote fields programmatically confirmed as exact
substrings of the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic across all 9 authority
  clauses — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`decedentName`, `dateOfDeath`, `dateSigned`,
  `cityOfExecution`, `propertyDescription`) independently confirmed to
  match existing corpus convention across the Small Estate Affidavit,
  Petition for Probate, Trustee Notification, and Living Trust Funding
  documents. New field: `survivingSpouseName` (no existing spouse-name
  field found anywhere in the corpus to reuse).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Community Property Agreement — Information Sheet
  (`community_property_agreement_info_sheet`), 11 clauses (9 authority
  + 2 drafting), in the Estate Planning category. New field:
  `survivingSpouseName`.
- Corpus: 1,190 → 1,201 clauses; 151 → 152 documents.
