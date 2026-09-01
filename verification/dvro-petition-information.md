# Family Law, eleventh document: Domestic Violence Restraining Order (Request for Order) Information Sheet

## Why this document

The project's existing Civil Harassment Restraining Order document
covers Code of Civil Procedure § 527.6, which applies between people
who do NOT have a qualifying close/domestic relationship. This
document covers the legally distinct Domestic Violence Prevention Act
(DVPA) restraining order under Family Code § 6200 et seq., which
applies specifically between people who DO have a qualifying
relationship. The existing document's `dvpa_distinction` clause
already correctly notes that CCP § 527.6(w) carves out DVPA-covered
proceedings, confirming this new document's non-duplication going in.
This document is explicit throughout that it is informational only
and does not itself grant a restraining order — only a court order
does that.

## What this document covers

9 clauses: 2 drafting (incident/relationship declaration, verification
signature) and 7 authority clauses:

- **`dvro_scope_and_distinction`** (Fam. Code § 6200; CCP § 527.6(w))
  — the statutory basis for the DVPA/civil-harassment distinction.
- **`dvro_qualifying_relationships`** (Fam. Code §§ 6211, 6209) — the
  specific relationship categories the DVPA covers.
- **`dvro_abuse_definition`** (Fam. Code § 6203(a)-(b)) — the
  statutory definition of "abuse," broader than physical violence.
- **`dvro_disturbing_peace_coercive_control`** (Fam. Code § 6320(a),
  (c)) — the "disturbing the peace" standard, including coercive
  control (isolation, deprivation of necessities, monitoring,
  reproductive coercion).
- **`dvro_standard_of_proof`** (Fam. Code §§ 6300(a), 6301(d)) — the
  reasonable-proof standard and the totality-of-circumstances rule.
- **`dvro_ex_parte_and_duration`** (Fam. Code §§ 6326, 6345(a), (c)) —
  the same-day ex parte mechanism and permanent-order duration/
  renewal, including the uncapped renewal distinct from civil
  harassment's capped renewal.
- **`dvro_firearm_relinquishment`** (Fam. Code § 6389(a), (c)(1)-(2))
  — the mandatory firearm-relinquishment consequence, distinct from
  civil harassment orders.

## Genuine correction caught during research

The task brief attributed the "totality of the circumstances" standard
to § 6300. Direct review of the current statutory text (amended
effective January 1, 2025) shows § 6300(a) contains only "reasonable
proof of a past act or acts of abuse" — the totality-of-circumstances
language actually lives in the separate § 6301(d). Corrected and
disclosed in `dvro_standard_of_proof`'s gap field.

## Honest gaps disclosed

- § 6320(c)'s coercive-control language is reported to have first
  entered the statute via a 2020 amendment, but that specific
  origination was not independently confirmed against an archived
  pre-2025 version — only that it's part of the current, January 2026
  text (amended by SB 50).
- No specific day count for how long a DVPA temporary order remains in
  effect before a hearing is stated — § 6327 cross-references the
  general TRO provisions rather than stating its own fixed period, and
  no clean, self-contained citation was found, so it was left out
  rather than guessed at.

## Method

Fetched Family Code §§ 6200, 6203, 6209, 6211, 6218, 6300, 6301, 6320,
6321, 6326, 6327, 6345, 6389 and Code of Civil Procedure § 527.6
directly from `leginfo.legislature.ca.gov`, each verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-identical.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 7 authority
  clauses — correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); one
  title collision the agent caught and fixed itself during drafting.
- Field names (`petitionerName`, `respondentName`, `incidentDate`,
  `incidentLocation`, `incidentDescription`, `additionalIncidents`,
  `signatureDate`, `signatureCity`) confirmed to match the existing
  Civil Harassment Restraining Order document exactly.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Domestic Violence Restraining Order (Request for
  Order) Information Sheet (`dvro_petition_information`), 9 clauses (7
  authority + 2 drafting), in the Family Law category. New field:
  `qualifyingRelationship`.
- Corpus: 595 → 604 clauses; 79 → 80 documents.
