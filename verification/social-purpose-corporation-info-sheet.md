# Business Formation, new document: Social Purpose Corporation — Information Sheet

## Why this document

Third processed item of wave 108 (Business Formation slot). Roughly
ten candidate topics (social purpose corp, flexible purpose corp,
pseudo-foreign § 2115, voting trusts, preemptive rights,
redomestication) were checked; "voting trust" produced only incidental
phrase hits inside existing inspection-rights clauses, not a dedicated
treatment. "Social purpose"/"flexible purpose" produced zero hits
anywhere in the corpus, confirming a genuinely open topic distinct from
the corpus's existing Benefit Corporation document (a separate statute,
Corp. Code Part 13, §§ 14600-14631, with its own purpose language,
annual-report content, and enforcement mechanism).

## What this document covers

14 clauses: 3 drafting (intro, purpose/agent declaration, incorporator
signature) and 11 authority clauses, citing Corp. Code §§ 2500, 2501,
2502, 2513, 2600(a), (c), 2601(b)(3), 2602(a), (b)(1)(A), (b)(2),
(b)(2)(A)-(B), 2604, 2700(a), (c), (e), (f), 3500(a)-(b), 3501(a),
(c)(2), 3502(g), and 3503, 3503(a):

- **`socialpurpose_act_name_and_history`** — the Act's name, its 2011
  flexible-purpose-corporation predecessor, and the continuity rule for
  unconverted pre-2015 entities.
- **`socialpurpose_general_corporation_law_applies`** — the General
  Corporation Law backdrop that fills gaps in this division.
- **`socialpurpose_formation_and_name`** — formation by filing articles
  and the required name element.
- **`socialpurpose_required_purpose_statements`** — the required
  general-purpose statement plus one of two enumerated special-purpose
  categories.
- **`socialpurpose_powers_subject_to_special_purpose`** — general
  business powers, expressly conditioned on consistency with the
  articles-stated special purpose.
- **`socialpurpose_director_duty_of_care`** — the division's own
  director duty-of-care statute, including the corporation's stated
  purposes as a permissive factor.
- **`socialpurpose_no_third_party_rights_created`** — the rule that
  naming a stakeholder group creates no enforceable third-party right.
- **`socialpurpose_annual_report_and_mda`** — the 120-day annual report
  and special purpose MD&A requirement.
- **`socialpurpose_current_report`** — the event-triggered 45-day
  special purpose current report.
- **`socialpurpose_small_corporation_financial_statement_exception`** —
  the relaxed GAAP standard for a corporation with fewer than 100
  holders of record.
- **`socialpurpose_false_report_liability`** — personal liability for a
  knowingly false statutory report.

## Genuine findings

- **A significant correction to the agent's own initial assumption**:
  the agent initially assumed this might be a freestanding 2015-era
  entity type. Reading the actual text showed it is the renamed
  successor to the 2011 "flexible purpose corporation" (SB 1301, Stats.
  2014, Ch. 694, effective January 1, 2015), and that pre-2015 entities
  that never amended their articles still exist and are legally
  referred to as "flexible purpose corporations" under the same
  division — a real continuity wrinkle disclosed in its own dedicated
  clause rather than glossed over.
- **A correctly identified, easy-to-misread statutory bar**: the agent
  confirmed § 2700(e)-(f) affirmatively bars any third-party
  beneficiary right from the special-purpose language — naming a
  stakeholder group in the articles does not create an enforceable
  stake for that group, a legally load-bearing point that became its
  own dedicated clause rather than being assumed from the "special
  purpose" framing.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on the statute's own text alone.

## Honest gap(s) disclosed

This document does not draft specific special-purpose language, does
not address the separate prescribed purpose statements for a
professional, banking-law, or insurance-code social purpose corporation
(§ 2602(b)(1)(B), (b)(4)-(5)), does not catalog every Division 1
provision incorporated by reference, does not identify whether any
specific existing entity is an unconverted flexible purpose
corporation, does not address the federal-Exchange-Act reporting
alternative (§ 3502(h)) or the small-corporation exception in full,
does not quote every § 3501 triggering event or § 3503 liability-
triggering act, and does not evaluate whether any specific proposed
purpose text or board decision satisfies the statute.

## Method

Fetched Corp. Code §§ 2500, 2501, 2502, 2513, 2600, 2601, 2602, 2604,
2700, 3500, 3501, 3502, and 3503 from leginfo.legislature.ca.gov, each
fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical. CourtListener's daily rate limit was
already exhausted on the agent's test call; no case law was used, a
disclosed and legitimate choice. All 26 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings, verified via a second independent automated pass covering
both quote content and full schema shape.

Independently re-verified during integration review via a
one-hundred-and-twentieth fetch (a new distinct curl User-Agent
string, "Groundtruth-120thVerify-SocialPurpose/1.0") of all 13
sections — all 26 citation instances confirmed clean on direct
normalized-whitespace substring match, no extraction artifacts
encountered. The 2011-predecessor/2015-rename history and the
§ 2700(e)-(f) no-third-party-rights bar were both independently
reconfirmed present in the freshly fetched text. A personal spot-check
searched the corpus for "social purpose," "flexible purpose," and each
cited section number and confirmed zero genuine prior coverage (all
apparent numeric hits were false-positive substring collisions with
dollar amounts or unrelated Probate Code §13500-series references).

## Verification

- All 13 Corporations Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-twentieth independent fetch during integration
  review; all 26 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section (e.g. § 2601(b)(3)'s two
  citations, § 2700's four citations across three clauses) correctly
  disclose they are not independent sources of each other; correct as
  delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either). Independently reconfirmed this document is
  distinct from the existing Benefit Corporation document.
- Checked every citation's `case` field for emptiness — all 26
  populated with proper citation identifier strings.
- No new fields required — all seven fields (`companyName`,
  `additionalPurposeDescription`, `principalOfficeAddress`,
  `agentName`, `agentAddress`, `authorizedShares`, `incorporatorName`)
  reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Social Purpose Corporation — Information Sheet
  (`social_purpose_corporation_info_sheet`), 14 clauses (11 authority +
  3 drafting), in the Business Formation category. No new fields.
- Corpus: 3,596 → 3,610 clauses; 474 → 475 documents. Third processed
  item of wave 108.
