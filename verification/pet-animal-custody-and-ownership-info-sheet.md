# Family Law, new document: Pet Animal Custody and Ownership — Information Sheet

## Why this document

First processed item of wave 108 (Family Law slot, 1×4 pattern
targeting four categories rotating away from waves 106-107 coverage).
An unusually long list of candidates (move-away/relocation, UIFSA,
DVRO, putative spouse, premarital agreements, grandparent visitation,
stepparent adoption, paternity/parentage, surrogacy, ATROS, guideline
child support, Watts/Epstein, § 2640 reimbursement, bifurcation,
need-based fees, § 271 sanctions, summary dissolution, legal
separation, the § 3044 DV custody presumption, the § 3040 nonparent
custody preference, confidential marriage, declarations of disclosure,
independent/agency adoption, putative father notice, confidential
intermediary, retirement division/QDRO, guardian ad litem, emancipation,
and de facto parent status) all turned up existing coverage in this
mature corpus. The agent confirmed zero prior coverage of Family Code
§ 2605 (pet animal custody/ownership in a dissolution) via both
document-level and clause-level checks, and distinguished it explicitly
from the existing Pet Trust Information Sheet, a Probate Code mechanism
for post-death/incapacity animal care, not a family court's property
division.

## What this document covers

7 clauses: 3 drafting (intro, declaration, signature block) and 4
authority clauses, citing Fam. Code §§ 2605(a), 2605(b), 2550,
2605(c)(1), and 2605(c)(2):

- **`petcustody_interim_care_order`** — the court's authority to enter
  an interim pet-care order during a pending proceeding, expressly
  non-binding on the final ownership determination.
- **`petcustody_ownership_assignment_standard`** — the care-based
  standard for final ownership assignment, and its express override of
  § 2550's equal-division default.
- **`petcustody_care_definition`** — the nonexclusive statutory
  definition of "care."
- **`petcustody_pet_animal_definition`** — the statutory definition of
  "pet animal" as community property kept as a household pet.

## Genuine findings

- **A significant correction to the agent's own initial assumption**:
  the agent initially assumed § 2605 might simply extend the equal-
  division rule to pets. Reading § 2605(b) directly showed it does the
  opposite: it expressly overrides § 2550 by name ("notwithstanding any
  other law, including, but not limited to, Section 2550") and lets a
  court award sole ownership of a community-property pet animal based
  on a "care" factor — a real departure from, not a restatement of,
  the default equal-division regime. Both statutes were fetched and
  quoted so the contrast rests on primary text.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on the statute's own text alone.

## Honest gap(s) disclosed

This document does not independently fetch or verify Penal Code § 597,
which § 2605(c)(1)'s definition of "care" cross-references for "harm or
cruelty." It does not state what factors govern an interim care order
or its duration, how much weight the care factor gets relative to other
considerations, what counts as "kept as a household pet," or how a
partly-community/partly-separate-property animal is treated. It does
not determine whether § 2605 applies to any particular animal, whether
an animal is community property, or how a court would weigh any
party's care of the animal in a specific case.

## Method

Fetched Fam. Code §§ 2605 and 2550 from leginfo.legislature.ca.gov,
each fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical after whitespace normalization.
CourtListener's daily rate limit was already exhausted on the agent's
test call; no case law was used, a disclosed and legitimate choice. All
5 citation instances programmatically confirmed by the research agent
as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-eighteenth fetch (a new distinct curl User-Agent
string, "Groundtruth-118thVerify-PetCustody/1.0") of both sections —
all 5 citation instances confirmed clean on direct normalized-
whitespace substring match, no extraction artifacts encountered. A
personal spot-check searched the corpus for "2605," "pet animal,"
"household pet," and "petcustody" and confirmed zero prior coverage
(the one "pet animal" hit found was the unrelated Probate Code pet
trust clause, already explicitly distinguished in the intro).

## Verification

- Both Family Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-eighteenth independent fetch during integration
  review; all 5 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — the ownership-
  assignment clause cites two distinct sections (§ 2605(b) and § 2550)
  and correctly presents them as two separate provisions in contrast,
  not a single merged source; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either — no generic-boilerplate collisions this time).
  Independently reconfirmed this document is distinct from the
  existing Pet Trust Information Sheet.
- Checked every citation's `case` field for emptiness — all 5
  populated with proper citation identifier strings.
- No new fields required — all six fields (`party1Name`, `party2Name`,
  `countyOfFiling`, `animalDescription`, `dateSigned`, `cityState`)
  reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Pet Animal Custody and Ownership — Information Sheet
  (`pet_animal_custody_ownership_info_sheet`), 7 clauses (4 authority +
  3 drafting), in the Family Law category. No new fields.
- Corpus: 3,580 → 3,587 clauses; 472 → 473 documents. First processed
  item of wave 108.
