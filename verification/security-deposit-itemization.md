# Real Estate, fourth document: Security Deposit Itemization / Move-Out Statement

## Why this document

Continuing the "go as deep as humanely possible" build-out. This is a
landlord's itemized statement accounting for a tenant's security deposit
after move-out — the statutory cap, permitted deductions, the 21-day
return deadline, and the bad-faith retention penalty — distinct from the
existing Residential Lease Agreement and Notice to Pay Rent or Quit.
Sourced from California Civil Code § 1950.5.

## What this document covers

9 clauses (drawing one shared clause, `lease_security_deposit_inspection`,
from the existing Residential Lease Agreement rather than duplicating it
— see "Clause reuse" below): 3 new drafting clauses (deposit details,
itemized deductions schedule, and signature/certification) and 5 new
authority clauses:

- **`sdi_deposit_cap`** (§ 1950.5(c)(1), (2), (5)(A)-(B), (6)) — the
  current one-month cap (effective July 1, 2024), the narrow small-
  landlord two-month exception, its service-member carve-out, and the
  separate six-months'-advance-rent allowance for a long lease.
- **`sdi_permitted_uses`** (§ 1950.5(b), (b)(4), (e)(1)-(2)(A)) — the
  exhaustive four-item permitted-use list and the real, litigated
  ordinary-wear-and-tear carve-out, repeated three separate times in the
  statute.
- **`sdi_return_deadline`** (§ 1950.5(h)(1), (3), (4)(A), (7)) — the
  21-day itemization/refund deadline, the good-faith-estimate
  alternative when repairs aren't finished in time, the $125
  documentation threshold, and the harsher bad-faith forfeiture
  consequence specific to this subdivision.
- **`sdi_bad_faith_penalty`** (§ 1950.5(m), (h)(7), (o)) — the up-to-
  double statutory damages penalty, confirmed additive to (not
  inclusive of) actual damages, plus small-claims jurisdiction.
- **`sdi_interest_status`** (§ 1950.5(b) and amendment history) — an
  honest negative finding: the statute requires no interest on a held
  deposit, distinguished from local city/county ordinances that may.

## Clause reuse

The research initially proposed a ninth authority clause for the
pre-move-out inspection right, but an already-shipped clause in this
corpus — `lease_security_deposit_inspection` (from the Residential
Lease Agreement) — already states the same statutory right from the
same section with the same substance. Rather than ship a near-duplicate
clause with an identical title, the existing clause is reused directly
in this document's `clauseOrder`, following an established pattern in
this corpus of clause ids shared across multiple documents (e.g.
`at_will` across three Employment documents).

## Method

Fetched Civil Code § 1950.5 directly from `leginfo.legislature.ca.gov`,
verified against a second, independent fetch with a distinct User-Agent
— confirmed byte-identical. The operative text reflects the version
amended by Stats. 2025, Ch. 340 (AB 414), effective January 1, 2026 —
more current than the version cited by this corpus's existing lease
deposit clauses (checked one day earlier), though the substance
researched here is unchanged between versions.

## Defect caught and fixed during integration

`sdi_interest_status` initially lacked the standard single-source
disclosure sentence for its second citation (an amendment-history
citation of the same section) — corrected during validation.

## Verification

- Civil Code § 1950.5 fetched directly, then re-verified on a second,
  independent fetch with a distinct User-Agent.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked source-independence disclosure logic across all 5 new
  authority clauses (all cite only subsections of § 1950.5) — correct.
- Checked for duplicate clause IDs against the full corpus (none); the
  reused clause is intentional, not a defect.
- Full-corpus regression run headless against all documents.

## Net changes

- New document: Security Deposit Itemization / Move-Out Statement
  (`security_deposit_itemization`), 9 clauses (1 reused + 5 new
  authority + 3 new drafting), in the Real Estate category.
- Corpus: 439 → 447 clauses; 61 → 62 documents.
