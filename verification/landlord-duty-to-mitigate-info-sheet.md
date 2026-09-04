# Real Estate, new document: Landlord's Duty to Mitigate Damages on Tenant Abandonment — Information Sheet

## Why this document

Confirmed by grep that "1951.2," "duty to mitigate," and "abandonment"
of leased premises had zero hits anywhere in the corpus. Read the
existing Residential Lease, Tenant Notice to Vacate, and Tenant
Habitability Remedies documents in full first — this document is a
genuine companion (what happens to the landlord's damages claim after
abandonment) rather than overlap with the lease itself. First of wave
63's four documents.

## What this document covers

7 clauses: 2 drafting (purpose/scope, damages worksheet/signature) and
5 authority clauses, citing Cal. Civ. Code §§ 1951.2 and 1951.4, plus
Desert Plaza Partnership v. Waddell, 180 Cal.App.3d 805 (1986):

- **`mitigate_trigger_termination`** (§ 1951.2(a)) — when a landlord's
  damages claim arises.
- **`mitigate_damages_components`** (§ 1951.2(a)(1)-(4), (b)) — the
  four statutory damages categories and the "worth at the time of
  award" computation.
- **`mitigate_mitigation_offset`** (§ 1951.2(a)(2)-(3), (d)) — **a key
  finding**: mitigation is framed as a subtraction built into the
  damages formula itself, not an all-or-nothing bar, with the burden of
  proving avoidability placed on the tenant.
- **`mitigate_reletting_and_burden`** (§ 1951.2(c)(1)-(2) + Desert
  Plaza) — the reletting precondition for future-term rent and a
  Court of Appeal's observation on the tenant's procedural disadvantage
  under that burden allocation.
- **`mitigate_continue_lease_election`** (§ 1951.4(a)-(c)) — the
  alternative remedy of continuing the lease instead of terminating it.

## Genuine corrections and findings

- **The central finding**: California's mitigation duty is not a
  separate, all-or-nothing bar on recovery — it's a subtraction
  embedded directly in the rent-damages formula for two of the four
  damages categories, with the tenant (not the landlord) bearing the
  burden of proving a loss could have been reasonably avoided.
- Confirmed a genuinely independent, different-type source (Desert
  Plaza Partnership v. Waddell) supplies a court's own observation that
  this burden allocation disadvantages tenants procedurally — correctly
  flagged as dicta (the case turned on a different question) rather
  than presented as the court's holding.
- Confirmed § 1951.2(d)'s explicit rule that a landlord's mitigation
  efforts do not themselves waive the right to recover damages.
- Confirmed the reletting precondition for future-term rent requires
  either lease language authorizing it or the landlord's own proof of
  reasonable, good-faith reletting efforts.

## Honest gap disclosed

Neither § 1951.2's text nor the Desert Plaza opinion defines what
reletting efforts are "reasonable" or made in "good faith" with any
checklist or numeric standard — no such standard was found and none is
supplied. § 1951.2 does not define "abandonment." § 1951.4(b)(2)'s
granular burden-of-proof presumption on lease subletting/assignment
terms was omitted as too fine-grained to state accurately in a short
clause rather than stated imprecisely.

## Method

Fetched Cal. Civ. Code §§ 1951.2 and 1951.4 from
`leginfo.legislature.ca.gov` via curl, each fetched twice with distinct
User-Agent strings, confirmed byte-identical. Desert Plaza Partnership
v. Waddell located and read via CourtListener. All 16 citation quotes
programmatically confirmed as exact substrings of the confirmed text.

## Verification

- Both statutory sections fetched twice independently with distinct
  User-Agent strings; case law confirmed via CourtListener; confirmed
  clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — all § 1951.2
  subsections correctly disclosed as one statutory section; § 1951.4's
  subsections correctly disclosed as one section separate from
  § 1951.2; Desert Plaza correctly disclosed as an independent,
  different-type source whose passage is dicta, not the holding;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`landlordName`, `tenantName`, `propertyAddress`,
  `monthlyRent`, `leaseStartDate`, `leaseEndDate`, `dateSigned`,
  `cityState`) independently confirmed to match existing corpus field
  definitions exactly. One genuinely new field added: `abandonmentDate`
  (deliberately not reusing the corpus's existing `terminationDate`,
  which means employment termination everywhere else it's used).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: Landlord's Duty to Mitigate Damages on Tenant
  Abandonment — Information Sheet
  (`landlord_duty_to_mitigate_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the Real Estate category. One new field:
  `abandonmentDate`.
- Corpus: 2,321 → 2,328 clauses; 299 → 300 documents. First document of
  wave 63.
