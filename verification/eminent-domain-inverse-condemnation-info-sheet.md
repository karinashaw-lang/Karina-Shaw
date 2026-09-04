# Real Estate, new document: Eminent Domain and Inverse Condemnation — Information Sheet

## Why this document

A replacement topic for wave 63's fourth document. The originally
assigned topic, California's Accessory Dwelling Unit statute (Gov.
Code § 65852.2), could not be verified: the agent found a real,
reproducible leginfo.legislature.ca.gov rendering fault specific to
that statutory cluster (a full page shell loads but the statutory-text
div is empty), confirmed across 12 distinct fetch approaches and ruled
out as a general block by successfully fetching adjacent, unrelated
Government Code sections the same way. Per this project's discipline,
the agent shipped zero clauses rather than fabricate ADU content from
memory. Confirmed by grep that "eminent domain" and "inverse
condemnation" had only two passing, non-substantive mentions in the
corpus (inside disclosure-exemption clauses) — a genuine gap. Fourth
and final document of wave 63, closing the wave.

## What this document covers

8 clauses: 2 drafting (intro/scope, closing acknowledgment) and 6
authority clauses, citing Cal. Const. art. I, § 19(a), Cal. Civ. Proc.
Code §§ 1036, 1230.010, 1230.020, 1240.010, 1240.030, 1240.040,
1245.220-1245.250, 1250.410, and 1263.310-1263.320, plus Albers v.
County of Los Angeles (1965) 62 Cal.2d 250:

- **`emdomain_const_foundation`** (Cal. Const. art. I, § 19(a)) — the
  state constitutional taken-or-damaged and just-compensation
  provision, broader than the federal Fifth Amendment's "taken"-only
  text.
- **`emdomain_public_use_requirement`** (§§ 1230.010-1240.030) — the
  Eminent Domain Law's public-use and necessity-findings requirement.
- **`emdomain_resolution_of_necessity`** (§§ 1240.040, 1245.220-1245.250)
  — the resolution-of-necessity prerequisite, its required contents,
  the two-thirds vote, and its conclusive-presumption effect.
- **`emdomain_just_compensation_standard`** (§§ 1263.310-1263.320) —
  fair market value as the compensation measure and its statutory
  definition.
- **`emdomain_inverse_condemnation_doctrine`** (Cal. Const. art. I,
  § 19(a), § 1036 + Albers) — **a key finding**: inverse condemnation is
  a property owner's reverse action derived directly from the
  constitutional taken-or-damaged text, not from a dedicated defining
  statute, confirmed as a no-fault doctrine by Albers.
- **`emdomain_litigation_expenses`** (§§ 1250.410, 1036) — the distinct
  fee-shifting mechanisms for eminent domain versus inverse
  condemnation proceedings.

## Genuine corrections and findings

- **The central finding**: California's constitutional provision
  protects against both a "taking" and a "damaging" of private
  property, textually broader than the federal Fifth Amendment's
  "taken"-only language — verified from the constitutional text itself.
- **Confirmed inverse condemnation's doctrinal source precisely**: no
  statute was found that comprehensively defines the cause of action's
  elements — California's cost-shifting statute (§ 1036) presupposes
  and refers to "inverse condemnation proceedings" as an established
  category without defining them; the cause of action itself derives
  from the constitutional text as construed by courts. Stated as an
  honest finding, not glossed over.
- Confirmed Albers v. County of Los Angeles's no-fault holding
  precisely: liability for inverse condemnation does not depend on a
  showing of negligence — actual physical injury proximately caused by
  a deliberately designed public improvement is compensable regardless
  of foreseeability, subject to stated exceptions.
- Confirmed the eminent domain and inverse condemnation fee-shifting
  statutes operate on genuinely different mechanisms (offer/demand
  comparison versus prevailing-plaintiff reimbursement) rather than one
  uniform rule.

## Honest gap disclosed

The federal Fifth Amendment comparison is stated as well-established
background but was not independently verified against federal
constitutional text in this research. Gov. Code § 7267.2's
precondemnation-offer requirement is named but not independently
fetched. § 1245.250(b)-(d)'s carve-outs from the conclusive-presumption
rule were reviewed but not restated in full. Severance-damage and
business-goodwill compensation rules, and the large body of subsequent
inverse-condemnation case law refining causation and design-immunity
questions, are not covered.

## Method

Fetched Cal. Const. art. I, § 19 and Cal. Civ. Proc. Code §§ 1036,
1230.010, 1230.020, 1240.010, 1240.030, 1240.040, 1245.220, 1245.230,
1245.240, 1245.250, 1250.410, 1263.310, and 1263.320 from
`leginfo.legislature.ca.gov` via curl (WebFetch blocked), each section
fetched twice with distinct User-Agent strings, confirmed
byte-identical — no rendering fault encountered anywhere in this
topic, unlike the ADU cluster. Albers v. County of Los Angeles located
and read via CourtListener. All 17 citation quotes programmatically
confirmed as exact substrings of the confirmed text.

## Verification

- All fourteen leginfo pages fetched twice independently with distinct
  User-Agent strings; case law confirmed via CourtListener; confirmed
  clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — the Eminent Domain
  Law's own sections correctly disclosed as one integrated legislative
  scheme; the resolution-of-necessity sections correctly disclosed as
  one integrated procedural scheme; the compensation-standard sections
  correctly disclosed as one article; the constitutional citation and
  § 1036/Albers correctly disclosed as independent, different-type
  sources; the two litigation-expense statutes correctly disclosed as
  independent of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`propertyAddress`, `ownerName`, `dateSigned`,
  `cityState`) independently confirmed to match existing corpus field
  definitions. Two genuinely new fields added: `publicEntityName`,
  `projectDescription`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: Eminent Domain and Inverse Condemnation — Information
  Sheet (`eminent_domain_inverse_condemnation_info_sheet`), 8 clauses
  (6 authority + 2 drafting), in the Real Estate category. Two new
  fields: `publicEntityName`, `projectDescription`.
- Corpus: 2,343 → 2,351 clauses; 302 → 303 documents. Fourth and final
  document of wave 63, closing the wave.
