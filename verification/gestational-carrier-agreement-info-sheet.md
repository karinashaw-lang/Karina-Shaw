# Family Law, new document: Gestational Carrier (Surrogacy) Agreement — Information Sheet

## Why this document

The existing Voluntary Declaration of Parentage and Paternity Action
documents don't cover the distinct statutory framework establishing
parentage for intended parents via a gestational carrier agreement —
generally a separate, faster mechanism than a paternity action. The
only prior mention of "surrogacy" in this corpus was a false-positive
substring inside an unrelated stepparent adoption clause.

## What this document covers

8 clauses: 2 drafting (declaration, signature/acknowledgment) and 6
authority clauses:

- **`gestcarrier_definitions`** (Fam. Code §§ 7960, 7606) — key
  statutory terms: "gestational carrier," "intended parent," and
  "assisted reproduction."
- **`gestcarrier_execution_requirements`** (Fam. Code § 7962(a)-(d))
  — the statutory requirements for a valid agreement.
- **`gestcarrier_parentage_establishment`** (Fam. Code § 7962(f); § 7633)
  — how parentage is established before birth, without the carrier
  being a legal parent.
- **`gestcarrier_noncompliance_consequences`** (Fam. Code § 7962(f))
  — the narrower-than-assumed noncompliance fallback.
- **`gestcarrier_compensation`** (Fam. Code §§ 7960, 7961) —
  compensation and facilitator fee handling.
- **`gestcarrier_gestational_vs_traditional`** (Fam. Code § 7960(f))
  — the explicit statutory distinction between gestational and
  traditional surrogacy.

## Genuine corrections and findings

- **A significant correction**: there is no such statutory term as
  "gestational carrier agreement." The statute never uses that
  phrase — the operative contract is called an "assisted reproduction
  agreement for gestational carriers," built on the general "assisted
  reproduction agreement" term defined at § 7606(b), not within § 7960.
- Corrected an assumption about § 7960's content: it is mostly a
  facilitator/escrow-terms definitions section, and § 7961 is entirely
  about facilitator escrow handling, not agreement substance. Part 7's
  actual heading is "Surrogacy and Donor Facilitators, Assisted
  Reproduction Agreements for Gestational Carriers, and Oocyte
  Donations."
- Corrected and completed the requirements list: § 7962(a)-(d)
  actually requires written contents (execution date, gamete source,
  intended parent identity, medical-expense disclosure), independent
  counsel before execution, notarized/witnessed signatures, and no
  embryo transfer or injectable medications until the agreement is
  fully executed. A genuine finding: no psychological-evaluation
  requirement appears in the statutory text — flagged explicitly
  rather than assuming the original list was complete.
- Confirmed the pre-birth order mechanism with a real citation:
  § 7962(f)(2) requires a "forthwith" judgment (absent good-faith
  doubt about compliance) that can issue before or after birth;
  § 7633 separately permits pre-birth entry but stays enforcement
  until birth. Confirmed the carrier and any spouse/partner are
  non-parents under a compliant agreement.
- Corrected an overstatement in the noncompliance framing: the statute
  does not say a noncompliant agreement becomes mere "evidence of
  intent." It says courts aren't barred from finding intended-parent
  status despite noncompliance, but "sufficient proof" is then
  required — narrower than an automatic evidentiary fallback, and no
  more forthwith/automatic judgment.
- Confirmed compensation is not prohibited, but found no affirmative
  "surrogacy contracts are not against public policy" sentence in
  §§ 7960-7962. The conclusion rests on the absence of a prohibition
  plus the statute's own assumption (medical-expense disclosure,
  facilitator fund-management/escrow rules) that money changes hands —
  disclosed as an inference, not a quoted holding.
- Confirmed the traditional-versus-gestational distinction is explicit
  in the statute (§ 7960(f): two "different and distinct types"), and
  that § 7962's entire mechanism is textually scoped to "gestational
  carriers" only — honestly disclosed that the statute does not
  resolve what, if anything, governs traditional surrogacy in
  California.

## Honest gap disclosed

CourtListener was already rate-limited (confirmed via a live 429
response). *Johnson v. Calvert* — commonly associated with California
surrogacy law — was not verified and is not cited anywhere in this
document; disclosed honestly in each relevant clause's `gap` field
rather than fabricated.

## Method

Fetched Cal. Fam. Code §§ 7960, 7961, 7962, 7606, and 7633 directly
from `leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed
byte-identical. All 17 citation quotes programmatically confirmed as
exact substrings of the fetched, normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — same-section
  citations (§ 7960(c)+(f); § 7962's multi-subsection clauses;
  § 7606(a)-(b)) correctly disclosed; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`dateSigned`, `cityState`, `countyOfFiling`)
  independently confirmed to match existing corpus convention. New
  fields: `intendedParent1Name`, `intendedParent2Name`,
  `gestationalCarrierName`, `carrierSpousePartnerName`, following the
  corpus's established `party1Name`/`party2Name` naming pattern.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Gestational Carrier (Surrogacy) Agreement —
  Information Sheet (`gestational_carrier_agreement_info_sheet`), 8
  clauses (6 authority + 2 drafting), in the Family Law category. New
  fields: `intendedParent1Name`, `intendedParent2Name`,
  `gestationalCarrierName`, `carrierSpousePartnerName`.
- Corpus: 1,355 → 1,363 clauses; 170 → 171 documents.
