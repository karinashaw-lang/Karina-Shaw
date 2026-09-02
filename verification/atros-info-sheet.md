# Family Law, new document: Automatic Temporary Restraining Orders (ATROS) — Information Sheet

## Why this document

Confirmed by grep that "ATROS" and "automatic temporary restraining
order" had zero hits anywhere in the corpus. Distinct from the existing
Domestic Violence Restraining Order (Request for Order) document, which
covers a separate, discretionary order a party must actively request
based on alleged abuse — ATROS attach automatically to every dissolution,
nullity, or legal separation summons regardless of abuse. Distinct also
from the existing Petition for Dissolution of Marriage document.

## What this document covers

8 clauses: 2 drafting (declaration, signature/acknowledgment) and 6
authority clauses, citing Cal. Family Code §§ 2040, 231, and 233:

- **`atros_automatic_attachment_and_scope`** (§ 2040(a); § 231) — the
  orders are a mandatory component of the summons itself, not a
  separately requested order.
- **`atros_effective_dates_duration_and_enforcement`** (§ 233(a)-(c)) — the
  petitioner/respondent timing asymmetry, duration, statewide
  enforceability, and Penal Code violation provisions.
- **`atros_property_transfer_restraint_and_exceptions`** (§ 2040(a)(2)
  (A)-(B)) — the property-transfer restraint, its ordinary-course/
  necessities-of-life exceptions, and the attorney's-fees carve-out.
- **`atros_child_removal_and_passport_restraint`** (§ 2040(a)(1)) —
  restraint on removing a minor child from the state or applying for a
  passport.
- **`atros_insurance_and_beneficiary_restraint`** (§ 2040(a)(3), both
  operative-date versions) — restraint on canceling/changing beneficiaries
  of insurance coverage.
- **`atros_nonprobate_transfer_restraint_and_exceptions`** (§ 2040(a)(4);
  (b)) — the nonprobate-transfer restraint and the five things ATROS do
  not restrain (wills, notice-conditioned trust revocation, etc.).

## Genuine corrections and findings

- **A significant cross-reference-chain finding**: the timing asymmetry
  the assignment asked about (when ATROS take effect against the
  petitioner versus the respondent) is not stated in § 2040 itself — it
  lives in a separate, cross-referenced section, § 233, which by its own
  terms (via § 231) governs § 2040 summonses. Traced and verified this
  chain explicitly rather than assuming or fabricating timing language
  into § 2040.
- Confirmed § 2040 has two operative-date versions from the same 2025
  enactment (Stats. 2025, Ch. 48): the currently operative text (Jan. 1,
  2026 – Jan. 1, 2027) and a further amendment already enacted, becoming
  operative Jan. 1, 2027, adding "allowing to lapse for nonpayment of
  premiums, failing to renew" to the insurance restraint — disclosed as
  the same enacted chapter and paragraph, not independent corroboration.
- Confirmed § 231 also covers a separate branch (Uniform Parentage Act
  proceedings under § 7700) that this document deliberately does not
  address, scoped out rather than guessed at.
- Confirmed the property-transfer restraint's exceptions (ordinary course
  of business, necessities of life) and the separate attorney's-fees
  carve-out are stated on the statute's own face, not left to be inferred.
- Confirmed § 2040(b) lists five specific things ATROS do not restrain,
  including revoking a revocable trust or eliminating a right of
  survivorship — but only if notice is filed and served before the change
  takes effect.

## Honest gap disclosed

Family Code § 7700 (Uniform Parentage Act restraining orders) and
§ 2040(d)'s full statutory definition of "nonprobate transfer" were not
independently researched or verified — flagged as out of scope rather
than addressed by assumption.

## Method

Fetched Cal. Family Code §§ 2040, 231, and 233 directly from
`leginfo.legislature.ca.gov`, each twice using distinct User-Agent strings
(Chrome/Windows and Safari/macOS) through independent HTTP sessions
replicating the site's multi-version postback for § 2040's two enacted
versions — confirmed byte-identical after whitespace normalization. All 8
citation quotes programmatically confirmed as exact substrings of the
confirmed text.

## Verification

- All three sections fetched twice independently with distinct
  User-Agents; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are subdivisions of the same section, which
  are genuinely separate sections (§ 2040 vs. § 231), and which are two
  operative-date versions of the same enacted paragraph; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  accepted generic drafting-title reuses ("Declaration of Parties and
  Purpose of This Information Sheet," "Signature and Acknowledgment — Not
  a Court Filing") — consistent with the corpus-wide pattern across the
  family-law petition-style documents.
- Field names (`petitionerName`, `respondentName`, `proceedingType`,
  `countyOfFiling`, `dateSigned`, `cityState`) independently confirmed to
  match existing corpus convention. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Automatic Temporary Restraining Orders (ATROS) —
  Information Sheet (`atros_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Family Law category. No new fields.
- Corpus: 1,917 → 1,925 clauses; 245 → 246 documents. Third document of
  wave 49.
