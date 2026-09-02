# Real Estate, new document: 3-Day Notice to Perform Covenant or Quit

## Why this document

The existing Notice to Pay Rent or Quit document covers specifically
nonpayment of rent under Code Civ. Proc. § 1161(2). This document
covers the genuinely distinct statutory notice used when a tenant has
breached some other lease covenant — an unauthorized pet, unauthorized
occupant, or similar violation — under § 1161(3).

## What this document covers

8 clauses: 2 drafting (notice details, signature/declaration of
service) and 6 authority clauses:

- **`covenantnotice_statutory_basis`** (Code Civ. Proc. § 1161(3)) —
  the statutory basis and requirement that the notice identify the
  specific covenant breached.
- **`covenantnotice_cure_right`** (Code Civ. Proc. § 1161(3), cure
  right and incurable-breach proviso) — the tenant's right to cure
  within the 3-day period, and the statute's own recognition that some
  breaches can't be cured after the fact.
- **`covenantnotice_no_cure_categories`** (Code Civ. Proc. § 1161(4))
  — a genuinely distinct category (unauthorized assignment/subletting,
  waste, nuisance, unlawful use) that terminates the lease outright,
  requiring only a straight notice to quit — not a perform-or-quit
  notice.
- **`covenantnotice_3day_timing`** (Code Civ. Proc. § 1161(3); § 12;
  § 12a) — the notice's own weekend/holiday exclusion controls over
  the general default computation rules.
- **`covenantnotice_service_methods`** (Code Civ. Proc. § 1162(a)) —
  confirms no difference in service method from the pay-rent-or-quit
  notice.
- **`covenantnotice_just_cause_context`** (Civ. Code § 1946.2(c),
  (n)) — this notice's role as the required cure step under
  California's statewide just-cause eviction law.

## Genuine corrections caught during research

- The task brief asked whether California case law treats some
  breaches as categorically incurable. The agent couldn't reach case
  law (CourtListener rate-limited before any query on this document
  could run), but found something better: the statute itself directly
  answers the question. § 1161(4) — a separate paragraph — treats
  unauthorized assignment/subletting, waste, nuisance, and unlawful
  use as categorically terminating the lease outright, requiring only
  a straight notice to quit rather than the perform-or-quit procedure.
  This is disclosed as drawn from statutory text alone, not
  case-law-corroborated.
- Confirmed the 3-day period's weekend/holiday exclusion is written
  directly into the notice's own statutory sentence, so it controls
  over the general default time-computation statutes (§ 12, § 12a)
  rather than needing to rely on them.
- Confirmed no difference in required service method between this
  notice and the existing pay-rent-or-quit notice — both governed by
  the same § 1162(a) subdivision.
- Found and added a clause tying this notice to California's statewide
  just-cause eviction law (Civ. Code § 1946.2(c)), which expressly
  cross-references § 1161(3) as the required cure step for a curable
  lease violation — directly relevant context not requested in the
  brief but genuinely useful.

## Honest gap disclosed

CourtListener returned a daily rate-limit error before any case-law
query on this document could run. Two points that would ideally be
case-law-corroborated are disclosed as resting on statutory text alone:
(1) how much factual particularity a notice must include when
identifying the breached covenant, and (2) the no-cure-categories
distinction in `covenantnotice_no_cure_categories`. The clauses note
that the same strict-compliance principle established by case law for
the pay-rent notice (Kwok v. Bergren, already cited elsewhere in the
corpus) likely extends here, but don't assert that as case-law-confirmed
for this specific notice.

## Method

Fetched Code Civ. Proc. §§ 1161, 1162, 12, 12a, and Civ. Code § 1946.2
directly from `leginfo.legislature.ca.gov`, each verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-identical after stripping a dynamic JSF debug timestamp. All 10
citations programmatically confirmed as exact substrings of the
fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 6 authority
  clauses — the two same-section clauses (`covenantnotice_cure_right`,
  citing two passages of § 1161(3); `covenantnotice_just_cause_context`,
  citing two subsections of § 1946.2) each carry an explicit disclosure
  sentence — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`landlordName`, `tenantName`, `propertyAddress`,
  `noticeDate`) confirmed to match the existing Notice to Pay Rent or
  Quit document's `fields` array exactly. New field:
  `covenantDescription`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: 3-Day Notice to Perform Covenant or Quit
  (`notice_to_perform_covenant_or_quit`), 8 clauses (6 authority + 2
  drafting), in the Real Estate category. New field:
  `covenantDescription`.
- Corpus: 886 → 894 clauses; 117 → 118 documents.
