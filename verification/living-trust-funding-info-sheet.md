# Estate Planning, new document: Living Trust Funding — Information Sheet

## Why this document

The existing Revocable Living Trust document is the trust instrument
itself. This document covers a genuinely distinct, practical topic:
the separate legal act of actually transferring property into an
already-created trust — a step many people mistakenly assume happens
automatically. Confirmed no overlap: Transfer-on-Death Deed is a
separate non-probate mechanism; Trust Amendment covers modification,
not funding.

## What this document covers

8 clauses: 2 drafting (declaration, signature/acknowledgment block)
and 6 authority clauses:

- **`trustfunding_creation_methods_funding_gap`** (Prob. Code § 15200)
  — how a trust is created, and why creation (or merely listing
  property in a schedule) doesn't by itself fund it.
- **`trustfunding_real_property_deed_requirement`** (Civ. Code § 1091)
  — the written, signed instrument required to transfer real property.
- **`trustfunding_recording_effect`** (Civ. Code § 1217; § 1214) — what
  recording a deed does and doesn't do to a transfer's validity.
- **`trustfunding_creditor_exposure_during_life`** (Prob. Code § 18200)
  — a genuinely counter-intuitive consequence: funded property in a
  revocable trust remains reachable by the settlor's own creditors
  during the settlor's lifetime.
- **`trustfunding_heggstad_petition`** (Prob. Code § 850(a)(3)(A)-(B);
  Estate of Heggstad) — the statutory safety valve for incomplete
  funding, with honest handling of a rate-limited case citation.
- **`trustfunding_personal_property_assignment_risk`** (Prob. Code
  § 15207(a)-(b)) — the clear-and-convincing-evidence standard for an
  unwritten personal-property transfer, and that the settlor's own
  oral statement alone is insufficient.

## Genuine findings and honest handling of a rate-limited case citation

- No single statute states the "deed must be executed and recorded"
  principle as one rule. The agent sourced it correctly from three
  distinct sections: Civ. Code § 1091 (writing/signature required to
  transfer real property at all), § 1217 (an unrecorded instrument
  remains valid between the parties — recording is not what makes the
  transfer effective), and § 1214 (recording's actual function: cutting
  off later good-faith purchasers) — a more accurate three-piece
  picture than a single blanket "must be recorded" statute would give.
- Confirmed Prob. Code § 18200 (creditor exposure during the settlor's
  lifetime) and § 850(a)(3) (the Heggstad-petition statutory basis)
  exactly as anticipated.
- CourtListener's opinion-text tool was rate-limited before Estate of
  Heggstad's holding could be independently verified, and a direct
  opinion-page fetch returned empty (HTTP 202/403). Rather than quote
  a holding from memory, the agent verified only the case's identity —
  exact citation (16 Cal.App.4th 943, 20 Cal.Rptr.2d 433), court,
  docket number (A055005), decision date — against CourtListener's
  search index, fetched twice and confirmed byte-identical, and
  disclosed plainly in the clause that the holding description
  reflects the case's well-established secondary characterization, not
  a verified primary-text quote.

## Honest gaps disclosed

- The related pour-over-will mechanism (routing unfunded probate
  assets into the trust at death) is cross-referenced to this corpus's
  existing Revocable Living Trust document rather than repeated.
- Title-transfer/registration procedures for specific personal-property
  categories (vehicles, securities, financial accounts) are noted as
  outside this document's scope.

## Method

Fetched Prob. Code §§ 15200, 18200, 850, 15207 and Civ. Code §§ 1091,
1217, 1214 directly from `leginfo.legislature.ca.gov`, each verified
against a second, independent fetch with a distinct User-Agent —
confirmed byte-identical (including cross-checking § 15200's quote
against the corpus's existing `trust_creation_methods` clause for
consistency). All statutory quotes programmatically confirmed as exact
substrings of the verified text.

## Verification

- All statutory citations fetched twice independently with distinct
  User-Agents; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic across all 6 authority
  clauses — every clause correctly distinguishes same-section-multiple
  -subsection citations (§ 850(a)(3)(A)-(B), § 15207(a)-(b)) from
  citations to genuinely separate sections (§ 1217 and § 1214 are
  explicitly noted as two independent, corroborating sources, not
  subsections of one section); correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`settlorName`, `trustName`, `trusteeName`,
  `originalTrustDate`, `propertyDescription`, `dateSigned`, `cityState`)
  confirmed to match existing Revocable Living Trust and Trust
  Amendment document conventions exactly. No new fields introduced.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Living Trust Funding — Information Sheet
  (`living_trust_funding_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Estate Planning category. No new fields.
- Corpus: 1,009 → 1,017 clauses; 131 → 132 documents.
