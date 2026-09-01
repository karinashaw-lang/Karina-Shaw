# Real Estate, fourth new document: Commercial Lease Agreement

## Why this document

Every lease-family document built so far in this project (Residential
Lease Agreement, Notice to Pay Rent or Quit, Security Deposit
Itemization) is residential. Commercial leases sit on a genuinely
different, thinner statutory baseline — several of California's best-
known tenant protections (the residential security-deposit cap and
itemization statute, the statewide just-cause termination rule, the
statewide rent cap, the implied warranty of habitability) apply only to
residential tenancies by their own terms. The research confirmed this
scope limitation directly against each statute's text rather than
assuming it.

## What this document covers

10 clauses: 3 drafting (parties/premises/rent, permitted use,
signatures) and 7 authority clauses:

- **`commlease_residential_protections_not_applicable`** (Civ. Code
  §§ 1950.5(a), 1946.2(k)(2), 1947.12(g)(4)) — confirms, from each
  statute's own scope language, that the residential deposit cap,
  just-cause termination rule, and rent cap don't reach a commercial
  tenancy.
- **`commlease_no_implied_habitability`** (*Green v. Superior Court*,
  10 Cal.3d 616 (1974); Civ. Code §§ 1941.1(a), 1942.1) — the implied
  warranty of habitability is a residential doctrine; the statutory
  tenantability checklist and its non-waiver rule are both written in
  terms of a "dwelling."
- **`commlease_security_deposit`** (Civ. Code § 1950.7(a), (c), (f)) —
  the real, distinct commercial deposit statute: no amount cap, no
  itemized-statement duty, but real use restrictions, return
  deadlines, and a $200 bad-faith penalty cap.
- **`commlease_casp_disclosure`** (Civ. Code § 1938(a), (e), (f)) — the
  mandatory pre-lease Certified Access Specialist inspection-status
  disclosure, with the exact required statutory paragraph.
- **`commlease_casp_inspection_right`** (Civ. Code § 1938(e), (c)) — the
  tenant's right to request a CASp inspection and the default
  cost-allocation rules.
- **`commlease_notice_to_terminate`** (Civ. Code §§ 1946, 1946.1(b)-(c),
  1946.1(k)(4); Code Civ. Proc. §§ 1161(2), 1161(7), 1162(b)-(c)) — the
  30-day default periodic-tenancy notice, the narrower 60/30-day
  extension for a "qualified commercial tenant," and the same
  three-day pay-or-quit unlawful detainer notice used residentially,
  confirmed to reach commercial tenancies by its own terms.
- **`commlease_personal_guaranty`** (Civ. Code § 1624(a)(2), (a)(3)) —
  there is no commercial-lease-specific guaranty statute; a personal
  guaranty is governed by the general statute of frauds.

## Genuine correction caught during research

The task brief assumed commercial security deposits are essentially
unregulated in California. That's wrong: Civil Code § 1950.7 directly
and specifically governs them — just far more thinly than the
residential statute (no amount cap, no itemization duty, a much lower
bad-faith penalty ceiling). Disclosed and corrected in
`commlease_security_deposit` rather than repeating the incorrect
assumption.

## Method

Fetched all statutory sections directly from `leginfo.legislature.ca.gov`,
each verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical. *Green v. Superior Court*
verified via CourtListener (direct `curl` to courtlistener.com is
blocked by a WAF in this environment).

## Verification

- All citations fetched twice independently with distinct User-Agents
  (case law via CourtListener); confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean on delivery, no
  fix needed (the recurring defect class this project has hit
  repeatedly did not recur here).
- Checked source-independence disclosure logic across all 7 authority
  clauses — correct throughout as delivered; no fix needed.
- Checked for duplicate clause IDs against the full corpus (none); one
  duplicate title ("Signatures") is the pre-existing generic
  drafting-title pattern.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across all 72 documents —
  clean.
- Full headless Playwright regression across all 72 documents — zero
  console errors, zero leftover placeholders.

## Net changes

- New document: Commercial Lease Agreement (`commercial_lease`), 10
  clauses (7 authority + 3 drafting), in the Real Estate category. New
  field: `permittedUse` (all other fields reused from the Residential
  Lease Agreement's established naming convention).
- Corpus: 531 → 541 clauses; 71 → 72 documents.
