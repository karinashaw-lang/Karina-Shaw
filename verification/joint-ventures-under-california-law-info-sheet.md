# Business Formation, new document: Joint Ventures Under California Law — Information Sheet

## Why this document

Second processed item of wave 135 (Business Formation slot, 2×2
pattern). The agent ruled out a hypothesized "Limited Cooperative
Association Act" (no such distinct statute exists — California's
Cooperative Corporation Law is already covered), redomestication
(already substantively covered by the existing statutory conversion
document), shareholder written consent, cumulative voting, and FTB
suspension of corporate powers — all confirmed already covered or
non-existent as separate statutes. The chosen topic — how California
treats an unincorporated joint venture in the absence of a dedicated
"joint venture" business-entity statute, including the licensed-
contractor joint-venture-license requirement and state tax
classification — was confirmed genuinely open: a full-text search for
"joint venture" across the corpus found only 6 incidental name-drops,
none substantively covering the topic.

## What this document covers

9 clauses: 3 drafting (declaration, venture/participant facts
worksheet, signature) and 6 authority clauses, citing Corp. Code
§ 16202(c)(1), (c)(3), § 16203, Bus. & Prof. Code § 7029, § 7029.1(a)-
(c), Rev. & Tax. Code § 17851, and 26 U.S.C. § 761(a):

- **`jv_partnership_law_no_dedicated_statute`** — no dedicated
  "joint venture" statute; the profit-sharing presumption governs
  characterization instead.
- **`jv_property_coownership_distinction`** — co-owning property and
  splitting proceeds does not by itself create a joint venture.
- **`jv_venture_property_not_individual_property`** — venture-acquired
  property belongs to the venture, not any one participant.
- **`jv_contractor_joint_venture_license_required`** — the CSLB joint
  venture license requirement and its automatic-suspension mechanic.
- **`jv_contractor_prelicense_bidding_and_discipline`** — the
  prohibition on jointly contracting without the license, the
  permitted pre-license joint-bidding carve-out, and the disciplinary
  consequence.
- **`jv_tax_classification_state_conformity`** — California's
  wholesale adoption of federal Subchapter K, whose "partnership"
  definition expressly includes "joint venture."

## Genuine findings

- **A disclosed negative-result check preventing a fabricated
  candidate**: the agent's research report describes verifying that no
  "Limited Cooperative Association Act" distinct from the existing
  Cooperative Corporation Law actually exists in California's
  Corporations Code, avoiding building a document around a
  non-existent statute.
- **A disclosed asymmetric bidding/contracting rule**: the
  prelicense-bidding clause states that joint bidding is permitted
  before securing a joint venture license even though jointly
  contracting without one is not — a real statutory asymmetry, not
  boilerplate.
- **A disclosed access limitation, not filled with an unverified
  claim**: the joint-venture-license clause's gap discloses that CSLB's
  own implementing regulations (16 Cal. Code Regs. §§ 821-822) were not
  fetched because the California Code of Regulations was not a
  confirmed-reachable host this session, and no unverified description
  of them is included.
- **A disclosed unaddressed election-out mechanism**: the tax-
  classification clause's gap notes 26 U.S.C. § 761(a) itself creates
  an election-out path for investment-only, joint-production, or
  short-term-underwriting ventures, which this document does not
  restate or evaluate.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not restate § 16202(c)(3)'s six lettered exceptions
to the profit-sharing presumption, does not address § 16202(c)(2)'s
separate gross-returns carve-out, does not trace CSLB's implementing
regulations or licensing-classification rules, does not trace the
Corporation Tax Law's separate conformity provisions for a corporate
participant, and does not evaluate whether any specific arrangement is
legally a joint venture, a partnership, or something else.

## Method

Fetched Corp. Code §§ 16202, 16203, Bus. & Prof. Code §§ 7029, 7029.1,
and Rev. & Tax. Code § 17851 from leginfo.legislature.ca.gov, and 26
U.S.C. § 761 from Cornell Law School's Legal Information Institute,
each fetched twice by the research agent with two distinct User-Agent
strings via curl, confirmed byte-identical. One transient connection
reset on § 7029.1 was resolved via retry-with-backoff. CourtListener's
daily quota was already exhausted (HTTP 429) on the agent's test call;
no case law was used or fabricated. All 9 citation instances were
programmatically confirmed by the research agent as exact, contiguous
substrings, with quotes deliberately started after subdivision labels
to sidestep leginfo's non-breaking-space artifact by design.

Independently re-verified during integration review via a two-
hundred-and-third fetch (a new distinct curl User-Agent string,
"Groundtruth-203rdVerify-JointVenture/1.0") of all six sources — all
fetched cleanly on the first attempt. All 9 citation instances
confirmed clean on direct normalized-whitespace substring match, with
no fallback needed. The profit-sharing presumption, the property-
co-ownership carve-out, the venture-property-ownership rule, the
joint-venture license requirement and its automatic-suspension
mechanic, the prelicense-bidding carve-out and disciplinary
consequence, and the state/federal tax-conformity provisions were all
independently reconfirmed present in the freshly fetched text.

## Verification

- All six cited sources fetched twice independently by the research
  agent with distinct User-Agent strings, plus a two-hundred-and-third
  independent fetch during integration review; all 9 citation
  instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `jv_` prefix has zero collisions. Ran section-number-
  specific greps for "16202," "16203," "7029," "17851," "761(a)," and
  the phrase "joint venture" across the full corpus — the sole § 16202
  hit was an existing clause citing different subdivisions ((a) and
  (b), versus the new clauses' (c)(1) and (c)(3)); the six "joint
  venture" phrase hits were all confirmed incidental name-drops inside
  unrelated documents (cohabitation, CCPA thresholds, bot disclosure,
  indemnification, unincorporated-association definitions); zero hits
  on every other section number.
- Checked every citation's `case` field for emptiness — all 9
  populated with proper citation identifier strings.
- No new field ids required — all seven fields (`preparerName`,
  `partnershipName`, `partner1Name`, `partner2Name`,
  `contractorLicenseNumber`, `dateSigned`, `cityState`) reused from
  the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Joint Ventures Under California Law — Information
  Sheet (`joint_venture_formation_info_sheet`), 9 clauses (6 authority
  + 3 drafting), in the Business Formation category. No new fields.
- Corpus: 4,436 → 4,445 clauses; 557 → 558 documents. Second processed
  item of wave 135.
