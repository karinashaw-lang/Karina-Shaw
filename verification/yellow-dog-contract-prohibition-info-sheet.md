# Hiring, new document: Yellow-Dog Contract Prohibition — Information Sheet

## Why this document

First processed item of wave 112 (Hiring slot, 1×4 pattern). The
Displaced Janitor Opportunity Act, blacklisting (Lab. Code §§ 1050-1054),
and USERRA were confirmed already covered. The agent confirmed zero
prior coverage of Lab. Code §§ 920-923 (the "yellow-dog contract"
prohibition) and 11 U.S.C. § 525(b) via both document-level and
clause-level checks, and picked §§ 920-923 for its richer, more
directly quotable statutory text.

## What this document covers

8 clauses: 2 drafting (intro, acknowledgment) and 6 authority clauses,
citing Lab. Code §§ 920, 921 (two passages), 922, 923, and 29 U.S.C.
§ 158(a)(3):

- **`yellowdog_definitions`** — the chapter's deliberately broad
  definition of "promise," covering oral and implied undertakings.
- **`yellowdog_core_prohibition`** — the core rule voiding a promise to
  join, not join, or withdraw from membership in a labor or employer
  organization as a condition of employment.
- **`yellowdog_no_legal_effect`** — the promise's unenforceability in
  court, and the protection for advice urging a party to disregard it
  absent fraud or violence.
- **`yellowdog_misdemeanor_coercion`** — the separate misdemeanor for
  actively coercing such a promise.
- **`yellowdog_public_policy_declaration`** — the statute's own
  interpretive public-policy declaration.
- **`yellowdog_federal_nlra_comparison`** — a comparison to the federal
  NLRA's parallel unfair-labor-practice rule, enforced through a wholly
  different mechanism (NLRB charge, not state civil-void doctrine or
  misdemeanor prosecution).

## Genuine findings

- **A significant correction to the agent's own initial scoping
  assumption**: the agent initially assumed neighboring §§ 924-927
  might belong to the same "yellow-dog contract" topic. Reading the
  actual text showed § 924 doesn't exist, § 925 is an already-covered
  forum-selection statute, § 926 is an unrelated 2026 noncompete
  civil-action provision, and § 927 is an unrelated 2025 AI/digital-
  replica provision — the document was correctly scoped tightly to
  §§ 920-923 rather than over-including unrelated neighbors.
- **A caught extraction subtlety**: the agent found a non-breaking
  space character after the "(a)"/"(b)"/"(c)" subdivision labels in the
  raw leginfo HTML that a naive space-normalized quote extraction would
  have missed, and corrected the quote to match the source exactly.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on the statute's own text alone.

## Honest gap(s) disclosed

This document does not define "labor organization" or "employer
organization" (undefined anywhere in this chapter), does not state
whether § 921 creates a private civil damages action beyond voiding the
promise, does not define the "fraud or violence or threat thereof"
carve-out, does not state a specific penalty or prosecuting authority
for the § 922 misdemeanor, does not resolve how much independent legal
weight § 923's interpretive declaration carries beyond interpreting
§§ 921-922, and does not independently verify the NLRA's statutory
coverage exclusions (agricultural, domestic, independent-contractor
workers) or attempt any state/federal preemption analysis.

## Method

Fetched Lab. Code §§ 920, 921, 922, and 923 from leginfo.legislature.ca.gov
and 29 U.S.C. § 158 from Cornell LII, each fetched twice by the research
agent with two distinct User-Agent strings, confirmed byte-identical.
CourtListener's daily rate limit was already exhausted on the agent's
test call; no case law was used, a disclosed and legitimate choice. All
6 citation instances programmatically confirmed by the research agent
as exact, contiguous substrings against both independently fetched
copies.

Independently re-verified during integration review via a
one-hundred-and-thirtieth fetch (a new distinct curl User-Agent string,
"Groundtruth-130thVerify-YellowDog/1.0") of all five sections — all 6
citation instances confirmed clean on direct normalized-whitespace
substring match, no extraction artifacts encountered. A personal
spot-check confirmed the corpus's "labor organization" and "§ 920"
substring hits elsewhere were unrelated statutes and documents
(confidential intermediary proceedings, applicant retention, CRD
complaints), not genuine prior coverage.

## Verification

- All four Labor Code sections and the NLRA section fetched twice
  independently by the research agent with distinct User-Agent
  strings, plus a one-hundred-and-thirtieth independent fetch during
  integration review; all 6 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — the two § 921
  citations correctly disclose they are subdivisions of the same
  section, not independent sources; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); two
  drafting-clause titles ("Purpose of This Information Sheet,"
  "Acknowledgment") collide with generic boilerplate titles already
  reused by dozens of other drafting clauses across the corpus —
  confirmed as intentional generic-title reuse, not a content
  duplicate. Independently reconfirmed this document is distinct from
  the existing Restriction on Requiring Arbitration as a Condition of
  Employment document, as the intro clause itself explicitly
  distinguishes.
- Checked every citation's `case` field for emptiness — all 6
  populated with proper citation identifier strings.
- No new fields required — all four fields (`companyName`,
  `employeeName`, `dateSigned`, `cityState`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Yellow-Dog Contract Prohibition — Information Sheet
  (`yellow_dog_contract_prohibition_info_sheet`), 8 clauses (6
  authority + 2 drafting), in the Hiring category. No new fields.
- Corpus: 3,684 → 3,692 clauses; 484 → 485 documents. First processed
  item of wave 112.
