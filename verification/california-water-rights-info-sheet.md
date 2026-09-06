# Real Estate, new document: California Water Rights — Information Sheet

## Why this document

Second processed item of wave 128 (Real Estate slot, 1×4 pattern).
The agent ruled out seven candidates via specific section-number and
term greps before landing here — the homestead exemption (CCP
§704.710 et seq.), the documentary transfer tax (Rev. & Tax. Code
§11911), property-tax default/tax sale (Rev. & Tax. Code §3691), HOA
reserve study disclosure (Civ. Code §5300s), CID resale disclosure
(Civ. Code §4525), right of first refusal, and lis
pendens/mechanics-lien/party-wall/encroachment topics were all
confirmed already substantively covered or genuinely overlapping with
existing documents. Short-term/vacation rental regulation was
considered and set aside because California has no significant
statewide statutory regime to cite (regulation is almost entirely
local ordinance). The chosen topic — California water rights (Water
Code provisions on state ownership/reasonable use, the appropriation
permit system's scope, riparian priority, SGMA, groundwater
sustainability agency authority, the de minimis extractor exemption,
and the diversion-statement filing requirement) — was confirmed
genuinely open: zero prior corpus hits on "Water Code" anywhere in
either corpus file before drafting. A false-positive-adjacent
collision on the bare numbers "1200"/"1201" was checked and confirmed
unrelated (a case-reporter citation, a DMCA section, and a Government
Code section).

## What this document covers

10 clauses: 2 drafting (intro, acknowledgment) and 8 authority
clauses, citing Wat. Code §100, §102, §1200, §1201, §10720.1(b),
§10720.5(a)-(b), §10726.4(a)(1)-(2), (b), §10721(e), (g), §5101(a),
(a)(1), (b)(3):

- **`waterrights_state_ownership_reasonable_use`** — the foundational
  declaration that all water is public property, subject to a
  reasonable-and-beneficial-use limitation.
- **`waterrights_appropriation_scope_surface_only`** — the state
  appropriation permit system's statutory scope: surface water and
  known/definite subterranean streams, not percolating groundwater.
- **`waterrights_riparian_priority_over_appropriation`** — riparian use
  is carved out of, and takes priority over, water subject to
  appropriation.
- **`waterrights_sgma_intent_preserve_rights`** — SGMA's stated
  legislative intent to preserve existing water-rights security.
- **`waterrights_sgma_no_alteration_of_existing_rights`** — SGMA's
  express statement that it does not itself alter existing water
  rights, plus the narrower prescription-tolling rule in designated
  basins.
- **`waterrights_gsa_extraction_regulation_authority`** — a
  groundwater sustainability agency's extraction-control authority,
  expressly distinct from county well-construction permitting.
- **`waterrights_de_minimis_domestic_extractor_definition`** — the
  2-acre-foot/year de minimis extractor threshold and the statutory
  definition of "groundwater."
- **`waterrights_statement_of_diversion_and_use_filing`** — the
  periodic diversion-and-use filing requirement and its small-spring
  exemption.

## Genuine findings

- **A disclosed, deliberate choice not to fetch a basin-designation
  bulletin**: the SGMA clause's gap discloses that the Department of
  Water Resources' basin-prioritization bulletin was not fetched, so
  the document does not identify or verify any specific basin's
  medium-/high-priority designation for purposes of the
  prescription-tolling rule.
- **A disclosed, deliberate choice not to quote allocation-trading
  mechanics**: the GSA-authority clause's gap discloses that §10726.4
  (a)(3)-(4) (transfer/carryover mechanics) were fetched but not
  selected for quotation, as less central to the extraction-control
  and well-permitting framing this clause addresses.
- **A disclosed, deliberate choice to quote only one of seven
  exemption categories**: the diversion-filing clause's gap
  explicitly names the six other statutory exemption categories
  (small-use registration, watermaster administration, pre-2009
  diversions, etc.) fetched but not block-quoted, and the two
  now-superseded filing deadlines not reproduced.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on statute text alone, with each
  gap field naming exactly which doctrinal concept (reasonable and
  beneficial use, known and definite channel, riparian-right elements)
  has historically been given content through case law not fetched
  here.

## Honest gap(s) disclosed

This document does not determine what quantity or method of water use
is "reasonable" or "beneficial" for any specific use, does not
determine whether specific subsurface water is flowing through a
"known and definite channel" versus percolating groundwater, does not
define what makes land "riparian" or quantify a riparian right, does
not identify any specific groundwater basin's medium-/high-priority
designation, does not address SGMA's allocation-transfer/carryover
mechanics, does not quote six of §5101(a)'s seven filing exemption
categories or its superseded deadlines, and does not determine whether
any specific property is riparian to a watercourse, overlies a
particular groundwater basin, or falls within a groundwater
sustainability agency's jurisdiction.

## Method

Fetched Wat. Code §§100, 102, 1200, 1201, 10720.1, 10720.5, 10721,
10726.4, and 5101 from leginfo.legislature.ca.gov, each fetched twice
by the research agent with two distinct User-Agent strings, confirmed
byte-identical after whitespace/quote normalization. CourtListener's
daily quota was already exhausted (HTTP 429) on the agent's test call;
no case law was used or fabricated. All 17 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
one-hundred-and-seventy-ninth fetch (a new distinct curl User-Agent
string, "Groundtruth-179thVerify-WaterRights/1.0") of all nine
sections — two sections required a backoff retry after a transient
leginfo.legislature.ca.gov connection failure (the same known
transient-relay issue independently encountered and resolved elsewhere
in this project), both succeeding on retry. All 17 citation instances
confirmed clean; one initially-flagged apparent mismatch (the §5101
(a)(1) quote) was traced to a bug in my own comparison script's
curly-to-straight-apostrophe normalization, not a real discrepancy —
confirmed genuine on direct inspection of the raw fetched text. The
reasonable-and-beneficial-use declarations, the appropriation-permit
scope definition, the riparian-priority provision, SGMA's stated
intent and non-alteration rule, the GSA extraction-authority
provisions, the de minimis extractor definition, and the
diversion-statement filing rule were all independently reconfirmed
present in the freshly fetched text.

## Verification

- All nine Water Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-seventy-ninth independent fetch during integration
  review (with backoff retry on two transient failures); all 17
  citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `waterrights_` prefix has zero collisions. Ran
  section-number-specific greps for "Water Code", 10720.1, 10720.5,
  10721, 10726.4, and 5101 across the full corpus — zero hits outside
  the new clauses, confirming no disguised overlap.
- Checked every citation's `case` field for emptiness — all 17
  populated with proper citation identifier strings.
- One new field id confirmed genuinely necessary and non-duplicative:
  `groundwaterBasinName` — did not exist previously in the corpus
  under any name. Four other fields (`propertyAddress`, `ownerName`,
  `dateSigned`, `cityState`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: California Water Rights — Information Sheet
  (`california_water_rights_info_sheet`), 10 clauses (8 authority + 2
  drafting), in the Real Estate category. One new field:
  `groundwaterBasinName`.
- Corpus: 4,177 → 4,187 clauses; 533 → 534 documents. Second processed
  item of wave 128.
