# Real Estate, new document: California Homeowner Bill of Rights — Information Sheet

## Why this document

Confirmed by grep that "Homeowner Bill of Rights," "dual track," and
"single point of contact" had zero hits anywhere in the corpus. Framed
explicitly as a companion to — not a duplicate of — the corpus's
existing Notice of Default / Nonjudicial Foreclosure Process document,
which covers the general § 2924 foreclosure timeline rather than these
borrower-protection provisions layered on top of it. Second of wave 55's
two Real Estate documents.

## What this document covers

8 clauses: 2 drafting (purpose/scope, closing acknowledgment) and 6
authority clauses, citing Cal. Civ. Code §§ 2923.5, 2923.6, 2923.7,
2924.12, 2924.15, and 2924.18:

- **`hbor_scope_owner_occupied`** (§ 2924.15(a)-(b)) — the scope limit:
  first-lien loans secured by owner-occupied residential property with
  no more than four dwelling units.
- **`hbor_preforeclosure_contact_requirement`** (§ 2923.5(a)(1)(A),
  (a)(2)(A)) — the pre-notice-of-default borrower contact/due-diligence
  requirement.
- **`hbor_dual_track_prohibition`** (§§ 2923.6(c), 2924.18(a)(1)) — two
  independently numbered, overlapping dual-tracking prohibitions with
  different exemption scopes.
- **`hbor_single_point_of_contact`** (§ 2923.7(a), (b)(5)) — the
  single-point-of-contact requirement and its statutory duties.
- **`hbor_small_servicer_exemption`** (§§ 2924.18(b), 2923.6(i)) — the
  two small-servicer categories and which sections they're carved out
  of.
- **`hbor_remedy_private_right_of_action`** (§ 2924.12(a)(1), (b)) — the
  pre-sale injunction and post-sale damages remedies.

## Genuine corrections and findings

- **Two independent, differently-scoped dual-tracking prohibitions**:
  § 2923.6(c) and § 2924.18(a)(1) both bar dual tracking, but only
  § 2923.6(c)-(h) carries the small-servicer carve-out under
  § 2923.6(i) — § 2924.18(a)'s own dual-tracking prohibition is not
  subject to that same carve-out. Stated precisely rather than treated
  as one uniform rule.
- **A precisely bounded private right of action**: § 2924.12's remedy is
  expressly limited by its own text to violations of §§ 2923.55, 2923.6,
  2923.7, 2924.9, 2924.10, 2924.11, and 2924.17 — omitting § 2923.5 and
  § 2924.18 by number. The document explicitly discloses that it does
  not resolve what remedy, if any, exists for a violation of those two
  sections specifically, rather than assuming the remedy is universal.
- **The small-servicer exemption's actual reach is narrower than a
  blanket carve-out**: it exempts qualifying servicers from §§ 2923.6,
  2923.7, and other listed sections, but not from § 2923.5's
  pre-foreclosure contact requirement or from § 2924.18's own
  dual-tracking prohibition.
- Confirmed the two small-servicer categories precisely: a
  ≤175-foreclosures-per-year regulated institution, or a ≤7-loans-
  serviced-per-year entity — distinct thresholds under the same
  subsection.

## Honest gap disclosed

The document does not determine, for any specific loan or servicer,
whether the owner-occupied/first-lien scope requirement or either
small-servicer exemption category actually applies — those are
fact-dependent determinations the sheet explicitly declines to make.
What remedy (if any) exists for a violation of § 2923.5 or § 2924.18
specifically, given § 2924.12's narrower list, is left unresolved.

## Method

Fetched Cal. Civ. Code §§ 2923.5, 2923.6, 2923.7, 2924.12, 2924.15, and
2924.18 directly from `leginfo.legislature.ca.gov`, each independently
re-fetched with distinct User-Agent strings/headers and confirmed
byte-identical after whitespace normalization. All 11 citation quotes
programmatically confirmed as exact substrings of the confirmed text.

## Verification

- All sections fetched twice independently with distinct request
  signatures; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — subdivisions of the
  same section correctly disclosed as one source; §§ 2923.6 and 2924.18
  correctly disclosed as genuinely independent, overlapping provisions;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  accepted generic drafting-title reuses ("Purpose and Scope —
  Informational Only," "Acknowledgment — Informational Sheet Only").
- Field names confirmed: `propertyAddress`, `trustorName`,
  `beneficiaryName`, `dateSigned`, `cityState` all match the existing
  Notice of Default document's field definitions exactly. Two genuinely
  new fields confirmed necessary and added: `mortgageServicerName` and
  `loanNumber` — no existing field ids cover a mortgage servicer's
  identity or a loan number.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: California Homeowner Bill of Rights — Information Sheet
  (`california_homeowner_bill_of_rights_info_sheet`), 8 clauses (6
  authority + 2 drafting), in the Real Estate category. Two new fields:
  `mortgageServicerName`, `loanNumber`.
- Corpus: 2,093 → 2,101 clauses; 268 → 269 documents. Second document of
  wave 55.
