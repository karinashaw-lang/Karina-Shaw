# Estate Planning, twelfth document: Special Needs Trust

## Why this document

Continuing the "go as humanely possible" build-out. A Special Needs
Trust holds assets for the benefit of a person with a disability
without disqualifying that person from means-tested government
benefits like Medi-Cal and SSI — distinct from the existing Revocable
Living Trust. Sourced from 42 U.S.C. § 1396p(d), 20 C.F.R. §§ 416.1201,
416.1205, 26 U.S.C. § 529A, and California Probate Code §§ 3600, 3604.

## What this document covers

9 clauses: 3 drafting (declaration, discretionary distribution
standard, and signature block) and 6 authority clauses:

- **`snt_first_party_statutory_basis`** (42 U.S.C. § 1396p(d)(4)(A)) —
  the narrow federal exception letting a first-party trust hold a
  disabled individual's own assets without counting against Medicaid
  eligibility.
- **`snt_medicaid_payback_requirement`** (same subsection) — the
  mandatory state payback condition, presented as its own clause
  because it's one of the most consequential and misunderstood features
  of a first-party SNT, with an honest disclosure that it's the same
  statutory sentence as the eligibility clause, not an independent
  source.
- **`snt_third_party_no_payback`** (§ 1396p(d)(1), (d)(2)(A)) — an
  honest structural distinction: a third-party trust isn't subject to
  payback because it never meets the statute's definition of
  "established by" the individual, not because of a separate,
  standalone exemption statute.
- **`snt_ssi_resource_limit`** (20 C.F.R. §§ 416.1205(c), 416.1201(a)(1))
  — the real $2,000/$3,000 SSI resource limit and the general
  right-to-liquidate test a properly drafted SNT is built around.
- **`snt_able_account_alternative`** (26 U.S.C. § 529A(b)(2), (e)(1);
  Pub. L. 113-295 § 103(a)) — the distinct ABLE account savings vehicle,
  its age-46 eligibility cutoff, and the $100,000 SSI resource-disregard
  ceiling, with an honest disclosure that the exact current annual
  contribution limit (tied to the inflation-adjusted gift-tax exclusion)
  wasn't independently pinned to a specific dollar figure.
- **`snt_ca_probate_special_needs_trust`** (Cal. Prob. Code §§ 3600,
  3604) — an honest scoping clause: California's own "special needs
  trust" statute is narrower than the name suggests, applying only to
  court-approved litigation settlements/judgments for a minor or
  disabled person, not general estate-planning SNTs.

## Method

Fetched federal statutes/regulations from `law.cornell.edu` and the
California Probate Code from `leginfo.legislature.ca.gov`, each
verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical. The research first read this
project's existing Revocable Living Trust verification doc and clause
set to match field-naming conventions before drafting.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked source-independence disclosure logic across all 6 authority
  clauses — correct throughout.
- Checked for duplicate clause IDs against the full corpus (none); two
  duplicate titles ("Declaration," "Signature and Notarization") are
  the pre-existing generic drafting-title pattern shared with the
  Revocable Living Trust.

## Net changes

- New document: Special Needs Trust (`special_needs_trust`), 9 clauses
  (6 authority + 3 drafting), in the Estate Planning category.
- Corpus: 495 → 504 clauses; 67 → 68 documents.
