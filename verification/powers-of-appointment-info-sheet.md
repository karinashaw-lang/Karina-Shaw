# Estate Planning, new document: Powers of Appointment — Information Sheet

## Why this document

Fourth and final processed item of wave 108 (Estate Planning slot). An
extensive candidate list (TOD deeds, omitted spouse/child, spousal
property petitions, trust modification, the rule against perpetuities,
charitable remainder trusts, special needs trusts, the Uniform Prudent
Investor Act, pet trusts, decanting, digital assets, small estates,
family allowance, disclaimers, simultaneous death, ancillary probate,
probate homestead, anatomical gifts, disposition of remains,
GRAT/QPRT/ILIT, and trustee accounting) all turned up existing coverage
or a near-miss too close to existing content. General/special powers
of appointment as their own body of substantive law (Prob. Code
§§ 600-695) appeared only as a passing substring hit inside the
existing Rule Against Perpetuities document's `perpetuities_powers_of_appointment`
clause, which covers only the perpetuities *timing* rule for powers
(§§ 21206-21207) — confirmed by direct inspection to say nothing about
how a power is defined, created, exercised, or released, the substance
of this document.

## What this document covers

13 clauses: 2 drafting (intro, closing signature) and 11 authority
clauses, citing Prob. Code §§ 610, 611, 613, 630, 632, 641, 660, 661,
670, 671, 672, 680, 681, 682, and 690:

- **`poapt_key_definitions`** — the statutory vocabulary (power of
  appointment, donor, creating instrument), with an express carve-out
  distinguishing a power of appointment from a power of attorney.
- **`poapt_general_vs_special`** — the general/special classification
  and its ascertainable-standard and adverse-interest carve-outs.
- **`poapt_imperative_vs_discretionary`** — the separate
  imperative/discretionary classification based on donor intent.
- **`poapt_manner_of_exercise`** — compliance with the creating
  instrument's formal requirements, plus the inter-vivos/will default.
- **`poapt_specific_reference_requirement`** — the specific-reference
  requirement where the creating instrument imposes one.
- **`poapt_residuary_clause_does_not_exercise`** — the separate rule
  that an ordinary residuary clause does not exercise a power.
- **`poapt_contracts_and_release`** — contracting to appoint and
  releasing a power.
- **`poapt_overbroad_exercise_saved`** — an overbroad exercise saved to
  the extent permissible.
- **`poapt_failure_to_exercise_default_rules`** — the different default
  outcomes for an unexercised imperative versus discretionary power.
- **`poapt_creditors_rights`** — creditor exposure differing by the
  general/special classification.
- **`poapt_perpetuities_cross_reference`** — the statutory bridge to
  the separate Rule Against Perpetuities document.

## Genuine findings

- **A significant correction to the agent's own initial guess**: the
  agent initially guessed the part might follow Uniform Powers of
  Appointment Act numbering. Reading § 600 directly showed California's
  Part 14 (added 1992, substantially amended by AB 2846 in 2016) is its
  own codification layered on the common law ("the common law as to
  powers of appointment is the law of this state" except where modified
  by statute), not an adoption of the more recent Uniform Act.
- **A correctly flagged, easy-to-confuse boundary**: the agent found
  § 610(f) expressly excludes powers of attorney from the definition of
  "power of appointment" — a distinction worth stating explicitly given
  the corpus's separate existing Power of Attorney content that could
  otherwise be confused with this topic, and it is stated directly in
  the definitions clause and the intro.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on the statute's own text alone.

## Honest gap(s) disclosed

This document does not address § 611(c)-(e)'s adverse-interest carve-out
or mixed general/special classification, § 631's substantial-compliance
doctrine, § 660(c)'s same-person donor/powerholder rule, § 661(b)'s
limits on releasing a power in a way that creates an imperative
remainder or § 662's minor-powerholder release procedure, § 671(b)-(c)'s
defective-execution and compel-exercise provisions, § 672(b)'s implied-
alternative-appointment rule, § 681(b)'s exceptions exposing special-
power property to creditors, or §§ 683-684. It does not restate the
perpetuities test itself (addressed in the corpus's separate Rule
Against Perpetuities document) and does not evaluate any specific
instrument's actual language or any specific attempted exercise,
release, or contract to appoint.

## Method

Fetched Prob. Code §§ 610, 611, 613, 630, 632, 641, 660, 661, 670, 671,
672, 680, 681, 682, and 690 from leginfo.legislature.ca.gov, each
fetched twice by the research agent with two distinct User-Agent
strings (via `curl --http1.1`, with several transient connection resets
retried successfully), confirmed byte-identical after whitespace
normalization. CourtListener's daily rate limit was already exhausted
on the agent's test call; no case law was used, a disclosed and
legitimate choice. All 16 citation instances programmatically confirmed
by the research agent as exact, contiguous substrings, with a second
independent pass catching and fixing 3 accidental `{{placeholder}}`
violations in gap fields prior to delivery.

Independently re-verified during integration review via a
one-hundred-and-twenty-first fetch (a new distinct curl User-Agent
string, "Groundtruth-121stVerify-PowersOfAppointment/1.0") of all 15
sections — all 16 citation instances confirmed clean on direct
normalized-whitespace substring match, no extraction artifacts
encountered. The § 600 common-law-codification finding and the § 610(f)
power-of-attorney exclusion were both independently reconfirmed present
in the freshly fetched text. A personal spot-check confirmed the
existing `perpetuities_powers_of_appointment` clause covers only the
perpetuities timing rule, not this document's substantive scope.

## Verification

- All 15 Probate Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-twenty-first independent fetch during integration
  review; all 16 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section, or multiple sections
  (e.g. §§ 660-661, §§ 671-672, §§ 680-682), correctly disclose they
  are not merged into a single source; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); one
  drafting-clause title ("Acknowledgment and Signature") collides with
  a generic boilerplate title already reused elsewhere in the corpus —
  confirmed as intentional generic-title reuse, not a content
  duplicate. Independently reconfirmed this document is distinct from
  the existing Rule Against Perpetuities, Certification of Trust,
  California Uniform Directed Trust Act, and Disclaimer documents, as
  the intro clause itself explicitly distinguishes.
- Checked every citation's `case` field for emptiness — all 16
  populated with proper citation identifier strings.
- Three new fields required (`appointmentDonorName`,
  `appointmentPowerholderName`, `appointmentInstrumentDescription`),
  confirmed genuinely new via a corpus-wide field-id lookup (the
  existing `donorName` field is scoped to sperm/egg-donor parentage, a
  semantically unrelated concept); the remaining three fields
  (`preparerName`, `dateSigned`, `cityState`) confirmed already
  existing and reused.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Powers of Appointment — Information Sheet
  (`powers_of_appointment_info_sheet`), 13 clauses (11 authority + 2
  drafting), in the Estate Planning category. Three new fields
  (`appointmentDonorName`, `appointmentPowerholderName`,
  `appointmentInstrumentDescription`).
- Corpus: 3,610 → 3,623 clauses; 475 → 476 documents. Fourth and final
  processed item of wave 108.

## Wave 108 summary

Wave 108 followed the established 1×4 pattern, targeting Business
Formation, Real Estate, Estate Planning, and Family Law — the four
categories rotating away from wave 107's During/Ending employment
coverage, chosen after all eight categories reached a perfect 60-
document tie. Every one of this wave's four agents reported extensive
near-miss pivots before landing on a genuinely uncovered topic,
continuing the saturation trend from waves 106-107. All four completed
documents were built with CourtListener's daily quota exhausted
throughout. Each surfaced a genuine correction through close primary-
source reading: a corrected assumption about a statutory rule's
polarity (Pet Animal Custody's care-based override of the equal-
division default, rather than an extension of it), a corrected
statutory anchor and a revealed multi-agency permitting structure
(Coastal Development Permit's layered § 30600/§ 30601/§ 30519 scheme),
a corrected assumption about a corporate form's origin and continuity
(Social Purpose Corporation's 2011 flexible-purpose-corporation
predecessor), and a corrected assumption about which body of law
governs an entity's own statute (Powers of Appointment's California-
specific codification rather than the Uniform Act). This wave also
encountered a new instance of the established leginfo spurious-space-
before-subdivision-marker artifact (Coastal Development Permit's
§ 30601(1)), consistent with the pattern first documented in wave 105.
Per the established alternation, wave 109 should return to a 2×2
pattern.
