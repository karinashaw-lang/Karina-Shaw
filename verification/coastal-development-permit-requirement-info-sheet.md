# Real Estate, new document: Coastal Development Permit Requirement — Information Sheet

## Why this document

Second processed item of wave 108 (Real Estate slot). Extensive
scoping across the Subdivision Map Act, Mello-Roos, EV charging station
rights, the Williamson Act, density bonus law, documentary transfer
tax, water rights, the Subdivided Lands Act, and Megan's Law all turned
up existing coverage (or, for the Subdivision Map Act, only incidental
name-drops inside other clauses rather than dedicated treatment). The
agent confirmed zero prior coverage of the California Coastal Act's
permit requirement via both document-level and clause-level checks —
"coastal" produced zero hits anywhere in the corpus, a clean, confirmed
first pick.

## What this document covers

9 clauses: 2 drafting (intro, closing) and 7 authority clauses, citing
Pub. Res. Code §§ 30103(a), 30106, 30600(a), (d), 30601(1)-(2),
30519(a), 30610(a), (d), and 30820(a)(1), (b):

- **`cdp_coastal_zone_definition`** — the statutory "coastal zone"
  geographic definition and its map-based precision.
- **`cdp_development_definition`** — the broader-than-colloquial
  statutory definition of "development."
- **`cdp_general_permit_requirement`** — the general permit
  requirement and its dependence on Local Coastal Program status.
- **`cdp_commission_jurisdiction_areas`** — the additional, stacking
  Commission permit requirement in geographically sensitive areas.
- **`cdp_local_government_delegation`** — the delegation mechanism and
  its own exceptions once a Local Coastal Program is certified.
- **`cdp_statutory_exemptions`** — the statutory exemptions, each
  qualified by the Commission's own regulatory clawback authority.
- **`cdp_civil_penalties`** — the civil liability structure for a
  violation.

## Genuine findings

- **A significant correction to the agent's own initial framing**: the
  agent started with a "single Coastal Commission permit" assumption.
  Reading the actual statutes showed a far more layered structure:
  § 30600 splits authority between the Commission and local government
  by Local Coastal Program certification status; § 30601 imposes an
  *additional*, geographically-triggered Commission permit requirement
  that stacks on top of (not instead of) the § 30600 permit and applies
  only pre-certification; § 30519 is the actual delegation mechanism
  post-certification, with its own carve-outs (tidelands, ports, state
  university/college land); and § 30610's exemptions are not absolute —
  both quoted exemptions are subject to the Commission's own regulatory
  authority to claw a class of work back into the permit requirement.
  None of this layered structure was obvious from the statute's short
  name, and it is now stated across four separate clauses rather than
  collapsed into one.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on the statute's own text alone.

## Genuine extraction-artifact finding (integration review)

Independent re-verification found 11 of 12 citation instances clean on
direct normalized-whitespace match; the remaining instance
(§ 30601(1)) matched only after additionally normalizing spacing
around subdivision markers. Byte-level inspection confirmed the raw
leginfo HTML reads "...for any of the following:(1) Developments..."
with no space before "(1)," while the delivered quote reads "...for
any of the following: (1) Developments..." with an inserted space —
the same established spurious-space-before-subdivision-marker artifact
documented previously in this corpus for other leginfo-sourced
documents. Confirmed genuine and benign — no content correction needed.

## Honest gap(s) disclosed

This document does not examine any map to determine whether a
particular parcel lies within the coastal zone, does not independently
verify the Subdivision Map Act's own approval procedure or the
Government Code §§ 21066/25500 cross-references embedded in these
sections, does not track any legislative amendment postdating this
fetch (including to § 30820's dollar figures), does not evaluate
whether the Coastal Commission has adopted a clawback regulation for
any specific class of improvement or repair, and does not determine
whether any specific property, development, or activity falls within
any statutory category, exemption, or jurisdictional zone described
here. It does not address the Coastal Act's separate injunctive-relief,
cease-and-desist, restoration-order, or criminal-penalty provisions.

## Method

Fetched Pub. Res. Code §§ 30103, 30106, 30519, 30600, 30601, 30610, and
30820 from leginfo.legislature.ca.gov, each fetched twice by the
research agent with two distinct User-Agent strings, confirmed
byte-identical after whitespace normalization (one transient connection
reset on § 30103 pass 2 was retried successfully). CourtListener's
daily rate limit was already exhausted on the agent's test call; no
case law was used, a disclosed and legitimate choice. All 12 citation
instances programmatically confirmed by the research agent as exact,
contiguous substrings — the agent's own build process caught and fixed
two genuine bugs before delivery (a spurious trailing period not in the
source, and `{{placeholder}}` syntax mistakenly placed in gap fields,
both corrected prior to this integration review).

Independently re-verified during integration review via a
one-hundred-and-nineteenth fetch (a new distinct curl User-Agent
string, "Groundtruth-119thVerify-Coastal/1.0") of all 7 sections — 11
of 12 citation instances confirmed clean on direct normalized-
whitespace match; the remaining instance matched after normalizing
subdivision-marker spacing, confirmed as a genuine benign artifact via
byte-level inspection. The layered permitting structure (§ 30600/
§ 30601 stacking, § 30519 delegation, § 30610's qualified exemptions)
was independently reconfirmed present in the freshly fetched text.

## Verification

- All 7 Public Resources Code sections fetched twice independently by
  the research agent with distinct User-Agent strings, plus a
  one-hundred-and-nineteenth independent fetch during integration
  review; all 12 citation instances confirmed clean, one after
  accounting for a confirmed genuine artifact.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section (e.g. § 30103(a)'s two
  citations, § 30600's (a) and (d)) correctly disclose they are not
  independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); two
  drafting-clause titles ("About This Information Sheet,"
  "Acknowledgment") collide with generic boilerplate titles already
  reused by dozens of other drafting clauses across the corpus —
  confirmed as intentional generic-title reuse, not a content
  duplicate.
- Checked every citation's `case` field for emptiness — all 12
  populated with proper citation identifier strings.
- One new field required (`developmentDescription`), confirmed
  genuinely new via a corpus-wide field-id lookup; the remaining five
  fields (`propertyAddress`, `county`, `parcelNumber`, `ownerName`,
  `applicantName`) confirmed already existing and reused.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Coastal Development Permit Requirement — Information
  Sheet (`coastal_development_permit_requirement_info_sheet`), 9
  clauses (7 authority + 2 drafting), in the Real Estate category. One
  new field (`developmentDescription`).
- Corpus: 3,587 → 3,596 clauses; 473 → 474 documents. Second processed
  item of wave 108.
