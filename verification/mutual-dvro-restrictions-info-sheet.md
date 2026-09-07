# Family Law, new document: Mutual Restraining Orders in Domestic Violence Cases — Information Sheet

## Why this document

First processed item of wave 139 (Family Law slot #1, 2×2 pattern).
The agent ruled out several candidates already covered by direct
inspection (transmutation, interspousal fiduciary duty, earnings
assignment for child support, putative spouse doctrine, Marvin
claims, Fam. Code §§ 4320/4323) and confirmed the existing DVRO
petition-information document's clause order has no mention of
mutual orders. The chosen topic — Fam. Code § 6305's bar on a court
issuing a mutual domestic violence restraining order unless specific
conditions are met, cross-referencing Pen. Code § 836(c)(3)'s
"dominant aggressor" test, plus the published *Isidora M. v. Silvino
M.* holding — was confirmed genuinely open: zero prior corpus hits on
"6305," "836(c)(3)," "mutual restraining," "mutual order," "Isidora,"
or "dominant aggressor."

## What this document covers

7 clauses: 3 drafting (intro, scope distinction, signature
acknowledgment) and 4 authority clauses, citing Fam. Code § 6305(a),
(a)(1), (a)(2), (b), Pen. Code § 836(c)(3), and *Isidora M. v.
Silvino M.* (2015) 239 Cal. App. 4th 11:

- **`mutualdvro_written_request_requirement`** — the personal-
  appearance and written-evidence condition, including the rule that
  a responsive pleading alone doesn't satisfy it.
- **`mutualdvro_detailed_findings_requirement`** — the detailed-
  findings condition that both parties acted as primary aggressor and
  neither primarily in self-defense.
- **`mutualdvro_dominant_aggressor_cross_reference`** — the cross-
  reference to the Penal Code's dominant-aggressor concept.
- **`mutualdvro_case_law_written_request_by_both_parties`** — the
  *Isidora M.* holding that a mutual order requires a request from
  each party.

## Genuine findings

- **A disclosed context mismatch in a cross-referenced statute**: the
  dominant-aggressor clause's gap explicitly notes Pen. Code
  § 836(c)(3) is written for peace officers deciding whom to arrest,
  not family court judges, and that § 6305(b) borrows the concept by
  cross-reference without restating it — a reader should not assume
  every part of § 836(c)(3) transfers to the family-court context.
- **A disclosed narrow case-law scope**: the case-law clause's gap
  discloses this is a single published decision, not a survey, and
  names four other candidate cases found in the CourtListener search
  that were not reviewed or relied on.
- **Multiple disclosed leginfo formatting artifacts**: non-breaking
  spaces after subdivision labels (verified directly in raw HTML) and
  a mid-sentence line-wrap in § 6305(b) between "acted" and
  "primarily," both preserved verbatim and explained rather than
  silently normalized.

## Honest gap(s) disclosed

This document does not cover general DVRO petition procedure
(deliberately deferred to the existing Domestic Violence Restraining
Order document), does not quote the four lettered dominant-aggressor
factors (A)-(D) in Pen. Code § 836(c)(3), does not address how courts
apply the "detailed findings" standard evidentially, does not fetch
or quote Fam. Code § 6302's notice provisions referenced in the
case's reasoning, and does not survey case law beyond the single
*Isidora M.* decision.

## Method

Fetched Fam. Code § 6305 and Pen. Code § 836 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings via curl (one transient
connection reset on the second Penal Code fetch resolved via retry-
with-backoff), confirmed byte-identical. A CourtListener search
located *Isidora M. v. Silvino M.* without a rate-limit issue (hit
only a brief 5/min throttle, resolved by retrying); the holding
sentence was verified as a literal, contiguous match via the search
tool's document-search function. All 6 citation instances were
programmatically confirmed by the research agent as exact, contiguous
substrings via Python string-slicing directly against the extracted
source text.

Independently re-verified during integration review via a two-
hundred-and-eighteenth fetch (a new distinct curl User-Agent string,
"Groundtruth-218thVerify-MutualDVRO/1.0") of both statutory sections
— both fetched cleanly on the first attempt. All 5 statute citation
instances confirmed clean on direct normalized-whitespace substring
match. The case-law citation was independently reconfirmed via the
CourtListener MCP document-search tool against the opinion's internal
id (2824899, same as the cluster id in this instance) — an exact
match at the cited holding sentence. Both statutory conditions, the
dominant-aggressor cross-reference, and the case-law holding were all
independently reconfirmed present in the freshly fetched text.

## Verification

- Both cited statutory sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a two-
  hundred-and-eighteenth independent fetch during integration review;
  all 5 statute citation instances confirmed clean. The case-law
  citation independently re-verified via the CourtListener MCP API.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `mutualdvro_` prefix has zero collisions. Ran term-
  specific greps for "6305," "836(c)(3)," "mutual restraining,"
  "mutual order," "Isidora," and "dominant aggressor" — zero hits on
  all, confirming genuine novelty.
- Checked every citation's `case` field for emptiness — all 6
  populated with proper citation identifier strings.
- No new field ids required — all six fields (`petitionerName`,
  `respondentName`, `courtCaseNumber`, `countyOfFiling`, `dateSigned`,
  `cityState`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Mutual Restraining Orders in Domestic Violence Cases
  — Information Sheet (`mutual_dvro_restrictions_info_sheet`), 7
  clauses (4 authority + 3 drafting), in the Family Law category. No
  new fields.
- Corpus: 4,595 → 4,602 clauses; 572 → 573 documents. First processed
  item of wave 139.
