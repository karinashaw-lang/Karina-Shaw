# Family Law, new document: Domestic Partnership Dissolution — Information Sheet

## Why this document

The existing Domestic Partnership Declaration document covers
formation. The existing Petition for Dissolution of Marriage document
is marriage-specific. This document covers a genuinely distinct
statutory track: how a registered domestic partnership is legally
terminated, including an administrative option that has no marriage
equivalent.

## What this document covers

10 clauses: 2 drafting (declaration, signature block) and 8 authority
clauses:

- **`dpdissolution_administrative_notice_eligibility`** (Fam. Code
  § 299(a)) — eligibility for the Secretary of State's administrative
  Notice of Termination.
- **`dpdissolution_administrative_effect_revocation_challenge`** (Fam.
  Code § 299(b)-(c)) — the 6-month effective delay, revocation window,
  and court challenge for fraud, duress, mistake, or ineligibility.
- **`dpdissolution_court_track_same_as_marriage`** (Fam. Code
  § 299(d)) — the judicial dissolution track for ineligible
  partnerships, following the same procedures as marital dissolution,
  plus a jurisdictional allowance broader than marriage's residency
  requirement.
- **`dpdissolution_effective_date_and_transition`** (Fam. Code
  § 299; § 297.5(k)(2)) — the current rules' 2011 effective date and a
  narrow pre-2005 transition rule.
- **`dpdissolution_same_rights_and_duties_general`** (Fam. Code
  § 297.5(a)) — the statutory basis for treating partnership
  dissolution like marital dissolution.
- **`dpdissolution_children_custody_standards`** (Fam. Code
  § 297.5(d)) — custody/support standards for a partner's children.
- **`dpdissolution_property_and_support_standards`** (Fam. Code
  § 297.5(k)(1); § 2550) — community property division, reaching
  domestic partnerships through the registration-date-as-marriage-date
  rule, not directly.
- **`dpdissolution_express_carveout_ltc`** (Fam. Code § 297.5(g)) — the
  one express statutory carve-out: long-term care plan eligibility for
  state employees/annuitants.

## Genuine corrections and findings

- Corrected an initial assumption that § 299.6 holds the
  court-dissolution provision. Direct review shows § 299.6 is a
  local-ordinance preemption provision, unrelated to dissolution — the
  "treated like marriage" judicial-dissolution language is actually in
  § 299(d) itself, the same section as the administrative path.
- Confirmed and completed the administrative-path eligibility list:
  § 299(a) has 10 numbered conditions, including two not originally
  anticipated — both partners must have read the Secretary of State's
  brochure, and there is a narrow real-property exception for a
  short-term lease with no purchase option ending within a year.
- A genuine, significant finding: § 299(d) grants a jurisdictional
  allowance broader than marriage's ordinary residency requirement — a
  domestic partnership dissolution, nullity, or legal separation
  proceeding may be filed in a California superior court even if
  neither partner resides in or is domiciled in California, based on
  consent built into the original Declaration of Domestic Partnership.
- Confirmed administrative termination is not instant: it takes effect
  six months after filing, is revocable up to that point, and can
  later be set aside by a court for fraud, duress, mistake, or failure
  to meet the § 299(a) conditions.
- Found one express statutory carve-out to the general same-rights-and-
  duties rule: § 297.5(g) exempts long-term care plan eligibility under
  a specific Government Code chapter for state employees/annuitants.
- Confirmed § 2550's equal-division default reaches domestic
  partnership dissolution only indirectly — its own text refers to
  "marriage"/"legal separation," not domestic partnership, and applies
  through the chain of § 299(d)'s same-procedures rule plus
  § 297.5(k)(1)'s rule treating the registration date as the marriage
  date. Stated this chain explicitly rather than assuming direct
  applicability.
- Confirmed the current § 299 termination criteria took effect January
  1, 2011, with a narrow transition rule in § 297.5(k)(2) for
  pre-2005-registered partnerships and premarital-style agreements
  executed before June 30, 2005.

## Honest gaps disclosed

- Section 2400's dollar thresholds (referenced in the property/support
  clause's broader context) are indexed and adjusted biennially by the
  Judicial Council; the base figures and adjustment mechanism are
  confirmed, but current adjusted amounts were not chased down.
- No case law was researched — this is a fully statutory topic.
- The comparison to marriage's ordinary residency requirement (Fam.
  Code § 2320) is sourced to this corpus's own already-verified
  clause on that statute, disclosed as such, not independently
  re-fetched in this pass.

## Method

Fetched Cal. Fam. Code §§ 299, 297.5, and 2550 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed textually
identical apart from session-only tokens. All 10 citation quotes
programmatically confirmed as exact substrings of the verified,
whitespace-normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none). One working title ("Declaration of Parties and Purpose of
  This Information Sheet") was caught by the agent's own self-check as
  colliding with the marriage-dissolution document's
  `dissolution_declaration` and renamed to "Declaration of Partners
  and Purpose of This Information Sheet" — independently confirmed
  clean against the full corpus.
- Field names (`party1Name`, `party2Name`, `countyOfFiling`,
  `dateSigned`, `cityState`) independently confirmed to match the
  existing Domestic Partnership Declaration and marriage-dissolution
  documents' fields exactly. New field: `registrationDate`, modeled on
  the existing `filingDate`/`marriageDate` naming pattern.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Domestic Partnership Dissolution — Information Sheet
  (`domestic_partnership_dissolution_info_sheet`), 10 clauses (8
  authority + 2 drafting), in the Family Law category. New field:
  `registrationDate`.
- Corpus: 1,180 → 1,190 clauses; 150 → 151 documents.
