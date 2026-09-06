# Business Formation, new document: Unincorporated Nonprofit Association — Formation and Member Liability Information Sheet

## Why this document

Fourth and final processed item of wave 97 (Business Formation slot). A
scoping pass confirmed this corpus's only prior "unincorporated
association" mentions were incidental — inside a cooperative corporation
naming-requirement clause, a General Corporation Law derivative-suit
definitions clause, and Registry-of-Charitable-Trusts clauses — none
addressing formation, member/officer liability, or property capacity.

## What this document covers

7 clauses: 2 drafting (intro, acknowledgment) and 5 authority clauses,
citing Corp. Code §§ 18015, 18020, 18035, 18065, 18105, 18110, 18115,
18260, 18270, 18605, 18610, 18615, 18620, 18630, Code Civ. Proc. § 369.5,
and Heiman v. Workers' Compensation Appeals Board, 149 Cal.App.4th 724
(2007):

- **`unincorpassoc_definition`** — the statutory definitions of
  "unincorporated association," "nonprofit association," and "member."
- **`unincorpassoc_member_liability`** — the general shield from personal
  liability solely by reason of membership or office, its statutory
  exceptions, and preserved alter-ego exposure.
- **`unincorpassoc_contract_liability`** — the narrower, more detailed
  contract-specific liability conditions for members versus directors/
  officers/agents.
- **`unincorpassoc_property_and_capacity`** — the association's capacity
  to hold property and sue or be sued in its own name.
- **`unincorpassoc_judgment_enforcement`** — the exhaustion requirement
  before a judgment against the association may be enforced against an
  individual member's assets.

## Genuine findings

- **A significant correction to the research brief's own assumed section
  range**: the brief guessed §§ 18605-18630. Rather than trust that
  guess, the research agent browsed leginfo's actual Corporations Code
  table of contents and found the true structure spans much further:
  Title 3 "Unincorporated Associations" §§ 18000-24001.5, with
  definitions in §§ 18000-18035, property capacity in §§ 18100-18135,
  and judgment-enforcement limits in §§ 18250-18270 — all outside the
  guessed range — while the sue/be-sued-in-own-name rule turned out to
  live in Code of Civil Procedure § 369.5, not the Corporations Code at
  all. None of this would have been caught by trusting the assumed
  range.
- **A well-chosen, correctly-scoped case citation**: Heiman v. WCAB is
  cited only for the common-law principle it states and applies
  (a member isn't liable for unauthorized association acts) — the gap
  field explicitly discloses that the case arose in a different
  statutory context (workers'-compensation "employer" status under
  § 18250, not § 18605) and is cited for the shared common-law principle,
  not as an interpretation of § 18605 itself.
- Correctly distinguished the member-liability contract exception
  (§ 18610, which includes a benefit-received ground) from the parallel
  director/officer/agent statute (§ 18615, which does not) — a real,
  easy-to-miss asymmetry in the statutory scheme.

## Honest gap(s) disclosed

This document does not quote § 18055's exclusion list (corporations,
government entities, partnerships, LLCs, and certain labor organizations
are excluded from Title 3's general provisions). It does not resolve the
fact-intensive questions of whether a particular arrangement meets the
"mutual consent for a common lawful purpose" standard, whether specific
conduct falls within § 18620(a)'s liability exceptions, or whether the
alter-ego factors in § 18630 are satisfied on any given facts. It does
not address CCP § 369.5(b)'s member-joinder mechanism. It does not
determine whether any specific group is an unincorporated association or
nonprofit association, or whether any specific property has been validly
acquired, held, or transferred in an association's name.

## Method

Confirmed the correct statutory landscape by browsing leginfo's
Corporations Code table of contents rather than trusting the assumed
section range, then fetched 15 statutory sections (Corp. Code §§ 18015,
18020, 18035, 18065, 18105, 18110, 18115, 18260, 18270, 18605, 18610,
18615, 18620, 18630, and CCP § 369.5) from `leginfo.legislature.ca.gov`,
each fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical after whitespace normalization. Heiman
v. WCAB verified via the CourtListener MCP tool (direct curl and
WebFetch to courtlistener.com remain blocked in this environment); no
cluster-id/opinion-id mismatch found (both 2276075). All 17 citation
instances programmatically confirmed by the research agent as exact,
contiguous substrings.

Independently re-verified during integration review via a
seventy-ninth fetch (a new distinct curl User-Agent string,
"Groundtruth-79thVerify-UnincorpAssoc/1.0") of all 15 statutory sections
— all 16 statutory quotes confirmed clean on direct substring match.
Heiman independently re-verified via the CourtListener MCP tool,
including a fresh cluster/opinion-id check confirming no mismatch — the
1 case-law quote confirmed clean.

## Verification

- All 15 statutory sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a seventy-ninth
  independent fetch during integration review; all 16 statutory
  citation instances confirmed clean.
- Heiman v. WCAB independently re-verified via the CourtListener MCP
  tool during integration review, including a fresh cluster/opinion-id
  check; the 1 case-law quote confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses correctly
  disclose which citations are from the same statutory chapter versus
  genuinely independent sources, and explicitly disclose that Heiman is
  cited for a shared common-law principle rather than as an
  interpretation of the specific statute it's paired with; correct as
  delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 17 populated
  with proper citation identifier strings.
- No new fields required — all five fields (`associationName`,
  `nonprofitPurpose`, `dateSigned`, `cityState`, `preparerName`) reused
  from the existing corpus; confirmed via a corpus-wide field-id check
  during integration review.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Unincorporated Nonprofit Association — Formation and
  Member Liability Information Sheet
  (`unincorporated_nonprofit_association_formation_liability_info_sheet`),
  7 clauses (5 authority + 2 drafting), in the Business Formation
  category. No new fields.
- Corpus: 3,270 → 3,277 clauses; 433 → 434 documents. Fourth and final
  processed item of wave 97.

## Wave 97 summary

Wave 97 followed the established 2×2 pattern, targeting Business
Formation and Estate Planning (tied at the corpus low of 54 documents
each before this wave): General Partnership Dissolution and Winding-Up
and this Unincorporated Nonprofit Association document for Business
Formation; Charitable Remainder Trust Basics and Medi-Cal Estate
Recovery for Estate Planning. Per the established alternation, wave 98
should return to a 1×4 pattern (one document spread across four
categories).
