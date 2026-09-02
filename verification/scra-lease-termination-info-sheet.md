# Real Estate, new document: Servicemembers Civil Relief Act — Lease Termination Information Sheet

## Why this document

Confirmed by grep that "SCRA" and "servicemembers civil relief" had
zero hits anywhere in the corpus. A federal topic with clean,
well-defined statutory text; the delivering agent read the existing
Residential Lease Agreement document's clauses first for tone/format
consistency.

## What this document covers

7 clauses: 2 drafting (termination notice, delivery/signature) and 5
authority clauses:

- **`scralease_eligibility`** (50 U.S.C. § 3955(a)(1), (b)(1)(A)-(B))
  — the two triggering events for lease termination.
- **`scralease_scope`** (§ 3955(b)(1)-(2)) — which leases this covers.
- **`scralease_notice_mechanism`** (§ 3955(c)(1)(A); (i)(1)) — the
  notice-and-military-orders requirement.
- **`scralease_effective_date`** (§ 3955(d)(1)(A)) — when termination
  actually takes effect.
- **`scralease_no_penalty`** (§ 3955(e)(1); (f)) — no early-termination
  charge, but what remains owed, and the refund requirement.

## Genuine corrections and findings

- **Confirmed the statute's scope is broader than "residential"**: it
  covers premises leases for "residential, professional, business,
  agricultural, or similar purpose" — not dwellings only. This
  document deliberately narrows its focus to the residential/dwelling
  situation, disclosed as a narrowing choice rather than the statute's
  full reach.
- **A precision correction on the notice requirement**: a common
  assumption treats military orders and a commanding officer's letter
  as two alternative attachments. The statute's own definition of
  "military orders" already includes a commanding officer's
  notification/certification/verification as one qualifying form — so
  there is one document requirement, broadly defined, not two
  independent options.
- **A significant timing correction**: the 30-day termination clock
  runs from the next rent due date after notice, not from the notice
  date itself — termination can land close to two months after notice
  depending on where in the rent cycle it falls.
- Confirmed the 90-day threshold is premises-lease-specific; the
  motor-vehicle-lease branch of the same section uses 180 days, not
  the same threshold.
- Confirmed "no early termination charge" is not "nothing owed" —
  prorated arrearages, excess-wear charges, and taxes/summonses tied
  to the lease survive termination and remain collectible.

## Honest gap disclosed

Two additional statutory triggers (a stop-movement-order scenario, and
a one-year window for a deceased or catastrophically injured
lessee's spouse/dependent) exist in the statute but are not detailed
in this document's clauses — disclosed explicitly rather than folded
in without citation support. The misdemeanor penalty provision for
wrongfully seizing a servicemember's property is likewise noted as
existing but not independently quoted.

## Method

Fetched 50 U.S.C. § 3955 from `law.cornell.edu` via curl with two
distinct User-Agent strings — byte-identical both times — and
cross-checked against a separate two-fetch retrieval of the official
U.S. House Office of the Law Revision Counsel text at
`uscode.house.gov`, also identical on both fetches and matching
Cornell's text word for word. All 10 citation quotes programmatically
confirmed as exact substrings of the fetched text.

## Verification

- All citations fetched and cross-source verified; confirmed clean on
  integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses that its citations are subsections of the same statutory
  section, and that the two source mirrors (Cornell, House OLRC) carry
  the same enacted text rather than being independent authorities;
  correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none — no title reuse at all in this delivery).
- Field names (`tenantName`, `landlordName`, `propertyAddress`,
  `noticeDate`, `dateSigned`, `cityState`) independently confirmed to
  match existing corpus convention. New fields: `ordersDate`,
  `dutyStationOrDeploymentDescription`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Servicemembers Civil Relief Act — Lease Termination
  Information Sheet (`scra_lease_termination_info_sheet`), 7 clauses
  (5 authority + 2 drafting), in the Real Estate category. New fields:
  `ordersDate`, `dutyStationOrDeploymentDescription`.
- Corpus: 1,775 → 1,782 clauses; 226 → 227 documents. Completes wave
  44 (Slayer Statute, Tenant Habitability Remedies, Anatomical Gift,
  SCRA Lease Termination).
