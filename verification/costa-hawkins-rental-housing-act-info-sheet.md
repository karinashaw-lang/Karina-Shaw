# Real Estate, new document: Costa-Hawkins Rental Housing Act — Information Sheet

## Why this document

Confirmed by grep that "costa-hawkins," "costa hawkins," and "vacancy
decontrol" had zero hits anywhere. Read the full California Statewide
Just Cause Eviction and Rent Cap (AB 1482) document — confirmed it
never states Costa-Hawkins' preemption mechanism, new-construction
exemption, or vacancy decontrol; its own alienable-title exemption
clause cites a differently-worded, differently-conditioned AB
1482-specific provision (Civ. Code §§ 1947.12(d)(5)/1946.2(e)(8), with
a REIT/corporation ownership bar and mandatory tenant notice), not
Costa-Hawkins' own § 1954.52(a)(3). Confirmed non-duplicative. First
of wave 75's four documents (2×2: Real Estate + Estate Planning).

## What this document covers

6 clauses: 2 drafting (intro/scope, acknowledgment) and 4 authority
clauses, citing Cal. Civ. Code §§ 1954.50, 1954.51(d), 1954.52(a),
(a)(1)-(3), and 1954.53(a), (b), (d)(2)-(3):

- **`costahawkins_scope`** — **the central finding**: Costa-Hawkins is
  a preemption statute constraining LOCAL rent control ("public
  entity" ordinances), not itself a rent-control law — its operative
  provisions are framed as overriding contrary local law
  ("notwithstanding any other provision of law"), genuinely distinct
  in mechanism from the already-shipped AB 1482 document (a statewide
  substantive floor).
- **`costahawkins_condo_sfh_exemption`** (§ 1954.52(a)(3)(A)-(B)) — the
  single-family-home/condominium "alienable title" exemption, verified
  as having its OWN exceptions distinct from AB 1482's — no REIT/
  corporation ownership bar, no mandatory tenant-notice requirement
  (those are AB 1482 features, explicitly flagged as not conflated).
- **`costahawkins_new_construction_exemption`** (§ 1954.52(a)(1)-(2))
  — **a key finding**: a two-PATHWAY exemption, not one statewide
  cutoff date — a fixed Feb. 1, 1995 certificate-of-occupancy date, OR
  a unit already exempted under a LOCAL ordinance's own pre-existing
  new-construction exemption as of that date — meaning the practical
  qualifying date varies by jurisdiction.
- **`costahawkins_vacancy_decontrol`** (§ 1954.53(a), (b), (d)(2)-(3))
  — the rent-reset mechanism between tenancies, its exception for an
  owner-initiated no-fault termination, and the co-tenant exception
  when an original occupant remains in lawful possession.

## Genuine corrections and findings

- **The central finding**: correctly distinguished Costa-Hawkins'
  preemption mechanism (constraining local ordinances) from AB 1482's
  direct substantive regulation — two different, easily-conflated
  statutes with genuinely different operative mechanisms.
- Confirmed the new-construction exemption's two-pathway structure
  precisely from the statute's own text — avoided the common
  overclaim of a single, uniform statewide cutoff date.
- Confirmed the "alienable title" exemption's own exceptions (owner-
  initiated no-fault termination; unsold condominium units) are
  distinct from, and simpler than, AB 1482's differently-conditioned
  version of a similarly-named exemption — explicitly flagged to
  prevent conflating the two statutes' conditions.
- Confirmed the vacancy-decontrol exception applies only to an
  OWNER-initiated no-fault termination, not to a voluntary vacate or
  for-cause eviction — precisely distinguishing which terminations
  preserve, and which forfeit, the rent-reset right.
- Correctly flagged that "vacancy decontrol" is a commonly-used
  descriptive term not itself found in the statutory text quoted.

## Honest gap disclosed

§ 1954.53's provisions on prior governmental rent-limitation contracts,
physically-disabled tenants' right to move within a property,
security-deposit handling, and units cited for uncorrected serious
health/safety/fire/building-code violations are not restated. §
1954.535 (90-day notice for terminated government rent-limitation
contracts) was fetched but not used. No catalog of which California
cities' or counties' ordinances had a new-construction exemption in
effect on or before February 1, 1995 is attempted.

## Method

Fetched Cal. Civ. Code §§ 1954.50, 1954.51, 1954.52, 1954.53, and
1954.535 from `leginfo.legislature.ca.gov` via curl (through the
sandboxed proxy), each section fetched twice with distinct User-Agent
strings, confirmed byte-identical after whitespace normalization. All
11 citation quotes across the 4 authority clauses programmatically
confirmed as exact substrings of the confirmed text. Independently
re-verified during integration review via a third fetch (Chrome/
Windows User-Agent) of all four cited sections — all 11 quotes
confirmed clean.

## Verification

- Statutory sections fetched twice independently by the research agent
  with distinct User-Agent strings, plus a third independent fetch
  during integration review; all quotes confirmed clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — same-section
  citations (§ 1954.52(a)/(a)(2), § 1954.52(a)(3)(A)/(B), §
  1954.52(a)(1)/(2), § 1954.53's four subsections) each correctly
  disclosed as not independent of one another; § 1954.50 vs. § 1954.51
  vs. § 1954.52 correctly disclosed as independent sections; correct
  as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`propertyAddress`, `tenantName`, `landlordName`,
  `monthlyRent`, `dateSigned`, `cityState`) independently confirmed to
  match existing corpus field definitions. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: Costa-Hawkins Rental Housing Act — Information Sheet
  (`costa_hawkins_rental_housing_act_info_sheet`), 6 clauses (4
  authority + 2 drafting), in the Real Estate category. No new fields.
- Corpus: 2,655 → 2,661 clauses; 347 → 348 documents. First document
  of wave 75.
