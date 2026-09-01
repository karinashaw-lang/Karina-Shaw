# Estate Planning, tenth document: Transfer-on-Death Deed

## Why this document

Continuing the "go as deep as humanely possible" build-out. California's
Revocable Transfer on Death Deed lets someone transfer their residence to
a named beneficiary automatically at death, without probate, while
retaining full ownership and control during their lifetime. Sourced from
California Probate Code Part 4, §§ 5600-5698.

## What this document covers

11 clauses: 3 drafting (declaration, multiple-beneficiary designation,
and signature/witness/notarization block) and 8 authority clauses:

- **`tod_property_scope`** (§ 5610) — the real, narrow property
  eligibility test (1-4 unit residential, or a qualifying condominium
  unit; excludes agricultural land over 40 acres).
- **`tod_revocability`** (§ 5650) — no present transfer during the
  owner's lifetime; the owner keeps full control and the property stays
  reachable by the owner's own creditors.
- **`tod_execution_formalities`** (§§ 5624, 5626) — the two-witness,
  notarization, and 60-day recording-deadline requirements.
- **`tod_revocation_methods`** (§§ 5628, 5630, 5632, 5642(b)) — the
  three real statutory revocation methods.
- **`tod_effect_on_will`** (§§ 5660, 5642(b)) — the priority rule
  between a TOD deed and a will or other instrument.
- **`tod_joint_tenancy_community_property`** (§§ 5664, 5666) — the
  real statutory treatment of co-owned property, including the
  deed-is-void rule when survivorship co-ownership is still in place.
- **`tod_beneficiary_predecease`** (§§ 5652(a), 5642(b)) — the real
  lapse rule, including the disclosed fact that this specific mechanism
  disapplies California's general anti-lapse statute (§ 21110).
- **`tod_creditor_medical_recovery`** (§§ 5654, 5670, 5672, 5674(b)) —
  that passing outside probate does not shield the property from
  creditor claims or Medi-Cal recovery exposure, with an honest
  disclosure that the Medi-Cal recovery mechanics themselves sit outside
  the Probate Code and weren't independently traced.

## A genuine staleness catch: not "made permanent"

The research task brief assumed this statute had been "made permanent."
That assumption was checked against the actual statutory text and found
to be incorrect: Probate Code § 5600(c), as currently amended, sunsets
the entire Part 4 on January 1, 2032 unless a later-enacted statute
extends or removes that date — confirmed directly from the operative
statutory text rather than accepted at face value. This is disclosed
directly in the `tod_property_scope` clause's gap field rather than
silently corrected or ignored.

## Method

Fetched all 15 candidate California Probate Code sections directly from
`leginfo.legislature.ca.gov`. Every quote re-verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked source-independence disclosure logic across all 8 authority
  clauses — correct throughout.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Full-corpus regression run headless against all documents.

## Net changes

- New document: Transfer-on-Death Deed (`transfer_on_death_deed`), 11
  clauses (8 authority + 3 drafting), in the Estate Planning category.
- Corpus: 409 → 420 clauses; 58 → 59 documents.
