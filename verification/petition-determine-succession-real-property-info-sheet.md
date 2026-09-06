# Estate Planning, new document: Petition to Determine Succession to Real Property — Information Sheet

## Why this document

Third processed item of wave 120 (Estate Planning slot). The agent
ruled out three candidates before landing here: Prop 19 parent-child
transfer exclusion (already covered by `prop19_parent_child_transfer_exclusion_info_sheet`),
Guardianship of the Person of a Minor (already extensively covered
across the existing guardianship documents), and the Uniform TOD
Security Registration Act (deprioritized as a weaker candidate once
this topic was confirmed both open and recently, substantively
amended). Personally reconfirmed via corpus search: zero prior
mentions of "13150," "13151," or "determine succession to real
property" anywhere in the 65-document-deep Estate Planning category —
the only related hits are passing cross-references inside the existing
Small Estate Affidavit document (its §13100 exclusion for "any property
included in a petition filed under Section 13151"), which does not
itself explain the §13150-13157 procedure.

## What this document covers

11 clauses: 2 drafting (background/declaration, signature/
acknowledgment) and 9 authority clauses, citing Prob. Code §§
13150(a)-(b), 13151(a)-(b), 13152(a) intro & (1)-(2), 13152(a)(7),
13152(b), 13152(f), 13152 enactment note, 13153, 13154(a), 13154(c),
13155, 13156(a)-(b), 13157:

- **`detsucc_when_available`** — the two alternative conditions that
  make this procedure available, and the current text's "primary
  residence" limitation.
- **`detsucc_threshold_and_standing`** — who may file, the dollar
  ceiling, and the 40-day wait.
- **`detsucc_dollar_threshold_schedule`** — the statute's own four-part
  historical/current/future dollar-threshold schedule.
- **`detsucc_petition_contents_and_appraisal`** — the petition's
  required contents and the probate-referee appraisal requirement.
- **`detsucc_notice_requirements`** — the two separate notice
  obligations (to named heirs/devisees, and of the hearing).
- **`detsucc_court_determinations`** — what the court must determine,
  and the evidentiary shortcut for an attached inventory/appraisal.
- **`detsucc_order_finality`** — the order's unusually broad finality,
  extending to persons not yet in being.
- **`detsucc_personal_liability`** — the petitioner's personal
  liability for the decedent's unsecured debts, and its statutory cap.
- **`detsucc_attorney_fees_and_comparison`** — the private-agreement
  attorney's-fee rule, and a structural comparison to this corpus's
  existing Small Estate Affidavit, real-property affidavit, and full
  probate documents.

## Genuine findings

- **A significant, load-bearing amendment finding**: the entire chapter
  was substantially rewritten by Stats. 2024, Ch. 331 (AB 2016),
  effective January 1, 2025 — newly restricting the procedure to a
  decedent's primary residence only, and raising the dollar ceiling to
  $750,000 on a four-tier statutory schedule running from a
  pre-April-2022 figure of $166,250 through an April 2028 reversion to
  a periodically adjusted amount. This is disclosed prominently, with
  an explicit statement that the pre-January-1-2025 text was not
  independently fetched or characterized.
- **A disclosed structural comparison to three other corpus documents**
  (Small Estate Affidavit, the §13200 real-property affidavit, and full
  probate) — explicitly flagged as a summary comparison, not a
  re-verification of those other documents' own citations.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not independently fetch or verify Prob. Code §890
(the periodic dollar-adjustment mechanism), §8802 (the inventory-and-
appraisal form), §400 (probate referee appointment), §1220 (the
general hearing-notice procedure §13153 cross-references), Code Civ.
Proc. §366.2 (the statute-of-limitations cross-reference in §13156(e)),
or Prob. Code Part 4 commencing with §9000 (the creditor-claim bar
cross-referenced in §13156(d)); does not quote §13152(a)'s paragraphs
(3) through (6) or (8) verbatim; does not quote §13154(b)'s four
numbered determinations verbatim (paraphrased instead); does not
independently re-verify the Small Estate Affidavit or Petition for
Probate documents' own dollar-ceiling citations referenced in the
structural-comparison clause; and does not address general California
appellate-finality mechanics governing when an order "becomes final"
for purposes of §13155.

## Method

Fetched Prob. Code §§ 13150 through 13157 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical. Also
confirmed §13158 does not exist, consistent with the chapter's own
13150-13157 range. CourtListener's daily rate limit was already
exhausted on the agent's test call; no case law was used, a disclosed
and legitimate choice. All 17 citation instances (16 in authority
clauses' citation arrays) programmatically confirmed by the research
agent as exact, contiguous substrings extracted directly via
str.find/slicing rather than hand-typed.

Independently re-verified during integration review via a
one-hundred-and-fifty-sixth fetch (a new distinct curl User-Agent
string, "Groundtruth-156thVerify-DetermineSuccession/1.0") of all eight
sections — all 16 citation instances confirmed clean on direct
normalized-whitespace substring match, zero extraction artifacts
encountered. The primary-residence limitation, the four-part dollar
schedule (including the current $750,000 figure and its April 2025-
March 2028 window), the two separate notice obligations, the order's
finality language, and the personal-liability cap were all
independently reconfirmed present in the freshly fetched text.

## Verification

- All eight Probate Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a one-hundred-
  and-fifty-sixth independent fetch during integration review; all 16
  citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they are
  not independent sources of each other; clauses citing separately
  numbered sections (e.g., §13151(b) and §13153) correctly treat them
  as independent; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `detsucc_` prefix has zero collisions. Independently
  reconfirmed zero prior corpus mentions of "13150," "13151," or
  "determine succession to real property," and confirmed the agent's
  three pivot rationales (Prop 19 exclusion, guardianship of the
  person, and TOD securities) against the corpus.
- Checked every citation's `case` field for emptiness — all 16
  populated with proper citation identifier strings.
- No new fields required — all ten fields (`decedentName`,
  `dateOfDeath`, `petitionerName`, `propertyAddress`,
  `legalDescription`, `parcelNumber`, `estimatedEstateValue`,
  `countyOfFiling`, `dateSigned`, `cityState`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Petition to Determine Succession to Real Property —
  Information Sheet
  (`petition_determine_succession_real_property_info_sheet`), 11
  clauses (9 authority + 2 drafting), in the Estate Planning category.
  No new fields.
- Corpus: 3,942 → 3,953 clauses; 510 → 511 documents. Third processed
  item of wave 120.
