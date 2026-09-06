# Hiring, new document: No-Poach / No-Hire Agreement Between Businesses — Information Sheet

## Why this document

Fourth and final processed item of wave 95 (Hiring slot). A scoping pass
confirmed this corpus's existing employee non-solicitation document
addresses an individual former employee's own promise not to recruit
ex-coworkers — a genuinely distinct topic from a restraint BETWEEN TWO
BUSINESSES not to hire or solicit each other's workers (e.g., between
staffing agencies, or a franchisor and its franchisees). Confirmed zero
prior coverage of the business-to-business version via corpus grep for
"no-poach," "no-hire agreement," and "AMN Healthcare."

## What this document covers

5 clauses: 2 drafting (the restraint terms, acknowledgment) and 3
authority clauses, citing Business and Professions Code § 16600(a) and
(c) and a 2019 California Attorney General enforcement announcement:

- **`nopoach_bpc16600_general_rule`** (§ 16600(a)) — California's general
  restraint-of-trade voidness rule, not limited to individual employment
  noncompetes.
- **`nopoach_bpc16600_third_party_reach`** (§ 16600(c)) — the
  2024-effective subdivision confirming the rule reaches a contract
  between two businesses even though the restrained worker is not a
  party to it.
- **`nopoach_ag_enforcement_context`** — the California AG's March 2019
  multistate settlements requiring several national franchise companies
  to drop no-poach provisions from their franchise agreements, cited as
  enforcement/settlement context, not a judicial holding.

## Genuine findings

- **A significant correction to the research brief's own premise**: the
  brief's suggested citation — "AMN Healthcare, Inc. v. Aya Healthcare
  Services, Inc., 28 F.4th 923 (9th Cir. 2022)" — does not exist. The
  research agent searched CourtListener extensively (by case name, by
  that exact citation, by court and date range) and found no match.
  Independently re-confirmed during integration review: a CourtListener
  citation search for "28 F.4th 923" returns zero results, and a
  case-name search for "Aya Healthcare" surfaces only a 2018 California
  Court of Appeal decision (AMN Healthcare, Inc. v. Aya Healthcare
  Services, Inc., 28 Cal.App.5th 923 (2018) — the source of the
  brief's citation confusion appears to be conflating this state
  reporter volume/page with a federal one) and an unrelated, much more
  recent Ninth Circuit wage-class-action opinion (O'Dell v. Aya
  Healthcare Services, Inc., decided 2026) that does not concern a
  no-poach agreement.
- **A correct, deliberate exclusion**: the 2018 California Court of
  Appeal AMN v. Aya decision that does exist was independently read in
  full by the research agent and confirmed to concern individual former
  employees and a "CNDA," not a business-to-business restraint — the
  same distinction this document's intro clause draws against the
  existing employee non-solicitation document. It was correctly excluded
  rather than force-fit into this document.
- **A disclosed, unverifiable secondary claim, not fabricated as a
  citation**: reporting exists (via web search, not independently
  fetchable due to blocked egress to the reporting outlets) describing a
  real, differently-named Ninth Circuit case (Aya Healthcare Services,
  Inc. v. AMN Healthcare, Inc., decided ~2021) applying federal Sherman
  Act rule-of-reason analysis to a non-solicitation clause between two
  staffing companies. This document mentions that litigation exists as
  unquoted background context in a clause's `gap` field, explicitly
  flagged as unverified this session — it is not cited as an authority
  and carries no citation entry.

## Honest gap(s) disclosed

This document does not evaluate whether a statutory exception (for
example, restraints tied to the sale of a business's goodwill, or
partnership/LLC dissolution) could apply to a particular no-hire
arrangement. It does not cite a federal antitrust case for the
business-to-business no-hire context, since none could be independently
verified through the primary-source channels available this session.
Other states treat business-to-business no-hire agreements differently,
including some that permit them if reasonable in scope — this document
is California law only. The March 2019 AG settlement is disclosed as one
verifiable example among a broader, multistate, multi-round enforcement
effort, not a complete account of all such state enforcement activity.

## Method

Fetched Business and Professions Code § 16600 from
`leginfo.legislature.ca.gov`, fetched twice by the research agent with
two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization (only dynamic JSF ViewState/debug-timestamp
tokens differed, both non-content). Fetched the California AG's March
2019 press release directly via curl — unlike courtlistener.com,
oag.ca.gov was not blocked in this environment. All 3 citation quotes
programmatically confirmed by the research agent as exact, contiguous
substrings (no ellipsis-joined quotes).

Independently re-verified during integration review via a seventy-first
fetch (a new distinct curl User-Agent string,
"Groundtruth-71stVerify-NoPoach/1.0") of both § 16600 and the AG press
release — all 3 quotes confirmed clean on direct substring match, no
extraction artifacts encountered. The research agent's negative finding
on the nonexistent federal citation was independently spot-checked via
the CourtListener MCP tool's citation search — confirmed zero results
for "28 F.4th 923," corroborating the agent's conclusion rather than
simply trusting its self-report.

## Verification

- Business and Professions Code § 16600 fetched twice independently by
  the research agent with distinct User-Agent strings, plus a
  seventy-first independent fetch during integration review; both
  statutory quotes confirmed clean.
- The AG press release fetched directly by the research agent and
  independently re-fetched during integration review; the 1 quote
  confirmed clean.
- The research agent's finding that no case exists at "28 F.4th 923"
  independently corroborated via a fresh CourtListener citation search
  during integration review, rather than accepted on the agent's
  self-report alone.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("Restriction," "Acknowledgment") duplicate
  existing corpus titles — consistent with this project's established
  pattern of generic, reused boilerplate titles; clause IDs remain
  unique.
- Checked every citation's `case` field for emptiness — all 3 populated
  with proper citation identifier strings.
- One new field required: `secondCompanyName` (the second business
  party to the restraint) — confirmed genuinely new via a corpus-wide
  field-id check before being added.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: No-Poach / No-Hire Agreement Between Businesses —
  Information Sheet
  (`no_poach_no_hire_agreement_between_businesses_info_sheet`), 5
  clauses (3 authority + 2 drafting), in the Hiring category. One new
  field: `secondCompanyName`.
- Corpus: 3,215 → 3,220 clauses; 425 → 426 documents. Fourth and final
  processed item of wave 95.

## Wave 95 summary

Wave 95 followed the established 2×2 pattern, targeting Hiring and
Family Law (the corpus's two most-balanced-low categories at 53
documents each before this wave): Client Employer / Labor Contractor
Liability (Labor Code § 2810.3) and No-Poach / No-Hire Agreement Between
Businesses for Hiring; Spousal / Community Liability for Debts and
Family Code Section 271 Sanctions for Family Law. Per the established
alternation, wave 96 should return to a 1×4 pattern (one document spread
across four categories).
