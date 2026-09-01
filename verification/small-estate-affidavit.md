# Estate Planning, ninth document: Small Estate Affidavit

## Why this document

Continuing the "go as deep as humanely possible" build-out back into
Estate Planning. A Small Estate Affidavit is the no-probate mechanism a
successor uses to collect a decedent's personal property when the
estate is small enough to qualify. Sourced from California Probate Code
§§ 13050-13202 and § 890.

## What this document covers

11 clauses: 3 drafting (declaration, property schedule, and
signature/perjury declaration) and 8 authority clauses:

- **`smallestate_threshold_mechanism`** (§ 13100) — the core mechanism:
  a successor can collect without probate if the estate is under
  $166,250 and 40 days have passed since death. Flags that § 890
  requires periodic inflation re-adjustment of this figure.
- **`smallestate_excluded_property`** (§ 13050) — the real, itemized
  list of what doesn't count toward the ceiling: joint tenancy property,
  property passing to a surviving spouse, revocable-trust property,
  multiple-party accounts, registered vehicles/vessels, manufactured
  homes, and specific Armed Forces/unpaid-wage carve-outs.
- **`smallestate_40day_wait`** (§ 13100, § 13101(a)(3)) — the precise
  40-day waiting period, distinguished from the six-month wait that
  applies to the separate real-property mechanism.
- **`smallestate_affidavit_required_contents`** (§ 13101(a)) — the full
  statutorily required content of the affidavit itself.
- **`smallestate_multiple_successors_signing`** (§ 13101(b), (d)) — the
  rule for multiple successors and the required death-certificate
  attachment.
- **`smallestate_holder_protection`** (§ 13106(a), § 13105(b)) — the
  institutional-reliance protection: a holder who pays out under the
  affidavit is discharged from liability, and a successor has a remedy
  (including attorney's fees) if a holder unreasonably refuses.
- **`smallestate_transferee_liability`** (§ 13109(a)-(b), § 13111(a)-(b))
  — receiving property this way does not clear the decedent's unsecured
  debts or a later-surfacing superior claim; real, codified ongoing
  liability exposure for the transferee.
- **`smallestate_real_property_affidavit`** (§ 13200(a), (h), § 13202)
  — the separate, structurally different, court-filed mechanism for
  small amounts of real property, with its own six-month wait and its
  own (older, differently-adjusted) dollar ceiling.

## Method

Fetched all candidate California Probate Code sections directly from
`leginfo.legislature.ca.gov`. Every quote re-verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical,
including confirming the current $166,250 figure reflects the version
made operative January 1, 2025.

Flagged and disclosed rather than papered over: the real-property
mechanism's own statutory text still recites the older $55,425
pre-2022 baseline for deaths before April 1, 2022, pointing to (without
restating) a separately Judicial-Council-published adjusted figure for
later deaths — a genuine, disclosed currency gap between the two
mechanisms' statutory text.

## Defect caught and fixed during integration

Every one of the 8 authority clauses' `gap` fields was initially
written with literal `{{decedentName}}` placeholder syntax — the same
defect class caught earlier in the session on the Domestic Partnership
Declaration, this time self-introduced while drafting the clauses
directly rather than by a research agent. Caught by the standard
automated `{{`-leak check before merging into the corpus. Fixed by
rewriting each affected gap field with generic phrasing ("a specific
decedent's estate" instead of "{{decedentName}}'s estate"). Also added
missing single-source disclosure sentences to the 3 clauses that cite
only one statutory section each (`smallestate_threshold_mechanism`,
`smallestate_excluded_property`, `smallestate_affidavit_required_contents`).

## Verification

- Every candidate section fetched directly via `curl`, then
  re-verified on a second, independent fetch with a distinct
  User-Agent (confirmed via the research agent's own two-User-Agent
  fetch discipline).
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean
  after the fix described above.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Full-corpus regression run headless against all documents.

## Net changes

- New document: Small Estate Affidavit (`small_estate_affidavit`), 11
  clauses (8 authority + 3 drafting), in the Estate Planning category.
- Corpus: 359 → 370 clauses; 53 → 54 documents.
