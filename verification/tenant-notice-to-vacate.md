# Real Estate, seventh new document: Tenant's Notice of Intent to Vacate

## Why this document

Every existing notice-type document in the Real Estate category is
landlord-initiated (Notice to Pay Rent or Quit) or a post-move-out
statement (Security Deposit Itemization). This document is
tenant-initiated: the tenant's own notice ending a periodic tenancy.
Confirmed non-duplicative against the `lease_` clauses, the
`notice_pay_rent_*` family, and the Commercial Lease Agreement's
`commlease_notice_to_terminate` clause before drafting, reusing rather
than re-deriving any content already covered elsewhere.

## What this document covers

6 clauses: 2 drafting (notice details, signature/service declaration)
and 4 authority clauses:

- **`vacatenotice_periodic_30day_default`** (Civ. Code § 1946(a), (b);
  Code Civ. Proc. § 1162(a)) — the two-way 30-day default and a
  tenant-only alternative service method (mail/delivery to the
  landlord's rent-collecting agent) not previously quoted in the
  corpus.
- **`vacatenotice_fixed_term_no_statutory_notice`** (Civ. Code §§ 1946,
  1945) — that a fixed-term lease needs no statutory notice to expire
  on its stated date, with the holdover-presumption wrinkle that
  converts it to a periodic tenancy if the landlord accepts rent
  afterward.
- **`vacatenotice_1946_1_scope`** (Civ. Code § 1946.1(a), (e)) — that
  § 1946.1 is mostly a landlord-side duty (already sourced elsewhere in
  the corpus), with one narrow tenant-facing provision: a competing,
  earlier-dated notice after the landlord has already given one.
- **`vacatenotice_moveout_inspection_trigger`** (Civ. Code
  § 1950.5(f)(1)) — that giving this notice triggers the landlord's
  pre-move-out inspection duty, cross-referencing rather than
  re-deriving that right's full mechanics (already covered by the
  Security Deposit Itemization document).

## Honest gap disclosed

No statute or published California case addressing whether a tenant
may unilaterally rescind a notice of intent to vacate once validly
given was located (CourtListener searched; one promising hit turned
out to be a false lead — a citation year, not a Civil Code § 1946
reference). Disclosed plainly rather than asserting an answer either
way.

## Method

Fetched Civil Code §§ 1945, 1946, 1946.1, 1950.5 and Code of Civil
Procedure § 1162 directly from `leginfo.legislature.ca.gov`, each
verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 4 authority
  clauses — correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); one
  title collision the agent caught and fixed itself during drafting.
- Field names (`landlordName`, `tenantName`, `propertyAddress`,
  `monthlyRent`, `noticeDate`, `moveOutDate`) confirmed to match
  existing corpus conventions.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Tenant's Notice of Intent to Vacate
  (`tenant_notice_to_vacate`), 6 clauses (4 authority + 2 drafting),
  in the Real Estate category. New field: `forwardingAddress`.
- Corpus: 634 → 640 clauses; 84 → 85 documents.
