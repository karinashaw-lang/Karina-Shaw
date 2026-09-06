# Real Estate, new document: Williamson Act (Land Conservation Contract) — Information Sheet

## Why this document

Second and final processed item of wave 113 (Real Estate slot). Roughly
fifteen candidates (mechanics lien, adverse possession, notice of
default/nonjudicial foreclosure, Homeowner Bill of Rights, deed of
trust, Home Equity Sales Contract Act, Transfer Disclosure Statement,
smoke/CO disclosure, common-interest-development transfer disclosure,
Good Neighbor Fence Act, Boundary Line Agreement, partition action,
Ellis Act, Prop 19 parent-child transfer, timeshare, manufactured home
title transfer, Mobilehome Residency Law) were confirmed already
covered. A "water rights" candidate's initial hit was confirmed a false
positive (a substring inside an unrelated easement clause). "Party
wall" was briefly pursued but abandoned honestly after research showed
California has no dedicated party-wall statute — secondary sources
conflate it with the already-covered Good Neighbor Fence Act. The agent
confirmed zero prior coverage of the Williamson Act via both
document-level and clause-level checks (including targeted searches for
"williamson," "land conservation act," "agricultural preserve,"
"51200," "51283," "cancellation fee," and "farmland security zone").

## What this document covers

11 clauses: 2 drafting (declaration/intro, signature acknowledgment) and
9 authority clauses, citing Gov. Code §§ 51200, 51201(b), 51201(d),
51240, 51244(a), 51245, 51282(a), 51282(b), 51282(d), 51283(a),
51283(b), 51283(f), 51283.4(a), 51286, and Rev. & Tax. Code § 423:

- **`williamsonact_definitions_and_purpose`** — the chapter's popular
  name and its "agricultural preserve"/"agricultural use" definitions.
- **`williamsonact_contract_authority`** — a city or county's voluntary
  authority to contract limiting agricultural land use.
- **`williamsonact_term_and_renewal`** — the 10-year minimum term and
  automatic annual renewal mechanism.
- **`williamsonact_notice_of_nonrenewal`** — the notice-of-nonrenewal
  procedure, minimum notice periods, and wind-down effect.
- **`williamsonact_cancellation_grounds`** — the separate cancellation
  petition process and its required findings.
- **`williamsonact_cancellation_fee`** — the assessor's valuation and
  the 12.5% cancellation fee, expressly not a tax.
- **`williamsonact_certificate_of_cancellation_process`** — the recorded
  certificate-of-tentative-cancellation procedure and conditions.
- **`williamsonact_judicial_review`** — the CCP § 1094.5 review pathway
  and 180-day limitations period.
- **`williamsonact_property_tax_valuation`** — the Rev. & Tax. Code § 423
  capitalized-income valuation method that makes the contract
  financially significant.

## Genuine findings

- **A significant correction to the agent's own initial framing**: the
  agent initially assumed a simple fixed-term contract. Reading the
  actual text showed the contract is a rolling minimum-10-year term that
  renews automatically each year unless a notice of nonrenewal is
  served — nonrenewal does not terminate the contract immediately but
  stops further renewal so the existing term winds down on its own
  schedule.
- **A corrected assumption about the cancellation fee's character**: the
  agent initially expected the fee might be tax-like; § 51283(f)
  explicitly states the Legislature's intent that it is not a tax but a
  payment conferring a private benefit.
- **A disclosed scoping decision**: the agent deliberately did not cite
  § 51244's complex county-revenue-determination phase-in subdivision
  (b), disclosing its existence in the gap field rather than
  oversimplifying a provision it did not fully verify.
- **An honest abandoned pivot, disclosed rather than hidden**: the
  "party wall" candidate was pursued first and dropped after research
  confirmed no dedicated California statute exists for it.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not evaluate whether any specific parcel lies within
an established agricultural preserve or is in fact subject to a
Williamson Act contract, does not restate § 51244's county
revenue-determination phase-in subdivision or § 51245's partial-
nonrenewal option in full, does not restate § 51282's "public interest"
alternative finding or full petition procedure, does not restate
§ 51283's fee waiver/deferral exception or § 51283.4's recomputation and
certificate-of-withdrawal provisions in full, does not describe the
substantive standard of review under Code of Civil Procedure § 1094.5
(not separately fetched), and does not restate § 423's own exceptions
for commercial timber production land or land addressed by §§ 423.7 and
423.8 (not separately fetched or cited).

## Method

Fetched Gov. Code §§ 51200, 51201, 51240, 51244, 51245, 51282, 51283,
51283.4, 51286, and Rev. & Tax. Code § 423 from leginfo.legislature.ca.gov,
each fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical via the extracted statute-text block
after normalization. CourtListener's daily rate limit was already
exhausted on the agent's test call; no case law was used, a disclosed
and legitimate choice. All 15 citation instances programmatically
confirmed by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-thirty-fifth fetch (a new distinct curl User-Agent
string, "Groundtruth-135thVerify-WilliamsonAct/1.0") of all ten
sections — all 15 citation instances confirmed clean on direct
normalized-whitespace substring match, no extraction artifacts
encountered. The automatic-renewal/nonrenewal wind-down mechanic, the
two required cancellation findings, the 12.5% fee rate, and the
capitalized-income valuation rule were all independently reconfirmed
present in the freshly fetched text.

## Verification

- All ten Government Code and Revenue and Taxation Code sections
  fetched twice independently by the research agent with distinct
  User-Agent strings, plus a one-hundred-and-thirty-fifth independent
  fetch during integration review; all 15 citation instances confirmed
  clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section (§§ 51201, 51282, 51283)
  correctly disclose they are not independent sources of each other;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); no
  drafting-clause title collisions found for this document's two
  drafting titles. Independently reconfirmed zero prior corpus mentions
  of "williamson," "land conservation act," or "agricultural preserve,"
  and independently reconfirmed this document is distinct from the
  existing Subdivision Map Act and Property Tax Parent-Child Transfer
  Exclusion (Proposition 19) documents, exactly as the intro clause
  itself states.
- Checked every citation's `case` field for emptiness — all 15
  populated with proper citation identifier strings.
- No new fields required — all six fields (`propertyAddress`, `county`,
  `parcelNumber`, `legalDescription`, `ownerName`, `signatureDate`)
  individually confirmed to already exist in the corpus with consistent
  labels/placeholders, reused here for the first time together on one
  document.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Williamson Act (Land Conservation Contract) —
  Information Sheet (`williamson_act_info_sheet`), 11 clauses (9
  authority + 2 drafting), in the Real Estate category. No new fields.
- Corpus: 3,729 → 3,740 clauses; 489 → 490 documents. Second and final
  processed item of wave 113.

## Wave 113 summary

Wave 113 followed the established 2×2 pattern, targeting Business
Formation and Real Estate — the two categories left tied lowest after
wave 112's rotation and not touched in the two immediately preceding
waves. Both agents ran careful duplication-check passes before landing
on genuinely open topics (Voting Trusts and Shareholder Voting
Agreements per a specific research hint; the Williamson Act after an
honestly abandoned "party wall" pivot), continuing the saturation trend
from recent waves. Both documents were built with CourtListener's daily
quota exhausted throughout. Each surfaced a genuine correction through
close primary-source reading: a corrected assumption that voting trusts
would be governed by their own dedicated section, replaced by the
discovery that § 706 bundles two distinct devices with cross-referenced
formalities (Voting Trusts), and a corrected assumption about a
fixed-term contract, replaced by the statute's actual rolling
automatic-renewal/wind-down structure, plus a corrected assumption about
the cancellation fee's character (Williamson Act). Per the established
alternation, wave 114 should return to a 1×4 pattern.
