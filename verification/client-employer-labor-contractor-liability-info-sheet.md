# Hiring, new document: Client Employer / Labor Contractor Liability (Labor Code § 2810.3) — Information Sheet

## Why this document

First processed item of wave 95 (Hiring slot, 2×2 pattern targeting Hiring
and Family Law — the corpus's two most-balanced-low categories at 53
documents each before this wave). A scoping pass confirmed Labor Code
§ 2810.3 was only ever cross-referenced in passing inside unrelated
clauses (about a different statute's definition of "employer") — no
dedicated document existed. Confirmed non-duplication against the
existing California Pay Data Reporting document, which uses a
`laborContractorUseDescription` field but does not address § 2810.3's own
liability-sharing scheme.

## What this document covers

8 clauses: 2 drafting (intro, acknowledgment) and 6 authority clauses,
citing Labor Code § 2810.3 subdivisions (a) through (p) and one Court of
Appeal decision:

- **`clientemployer2810_definitions`** — the "client employer," "labor
  contractor," and "usual course of business" definitions.
- **`clientemployer2810_exclusions`** — the workforce-size, public-entity,
  and labor-contractor-type exclusions (two distinct exclusion lists,
  correctly kept separate rather than conflated).
- **`clientemployer2810_liability_scope`** — the shared civil liability
  for wage payment and workers' compensation coverage, the non-delegable
  occupational safety and health duties, and Noe v. Superior Court's
  description of the resulting joint liability.
- **`clientemployer2810_special_carveouts`** — the homeowner,
  independent-contractor, and specific-industry (motor carrier,
  household mover, cable/telephone, motor club) carve-outs.
- **`clientemployer2810_enforcement`** — the 30-day pre-filing notice,
  anti-retaliation provision, and state-agency information requests.
- **`clientemployer2810_indemnification_waiver`** — the parties'
  preserved contractual remedies against each other, and the statute's
  anti-waiver rule.

## Genuine findings

- **A correction to an assumption in the research brief**: the brief
  assumed the statute's liability scope "generally doesn't extend to
  anti-discrimination/retaliation claims." The agent could not verify
  this from the statute's own text — § 2810.3 simply states what it does
  cover (wages, workers' comp coverage, OSHA duties) and says nothing
  about discrimination or retaliation claims either way. The document
  states the actual covered scope factually and does not assert an
  exclusion the text doesn't support.
- **A correction to a second assumption**: the brief assumed a single,
  generic exclusion list (small business/nonprofit/motor
  carrier/construction). The statute actually has two textually distinct
  exclusion lists — one narrowing "client employer" (workforce size,
  public entities), the other narrowing "labor contractor" (nonprofits,
  labor organizations, motion-picture payroll companies, qualifying
  employee-leasing arrangements) — disclosed as such rather than
  presented as one undifferentiated list.
- Correctly declined to force a generic "unionized construction"
  exclusion that does not actually appear in the statute's text beyond
  the labor-organization/hiring-hall language actually quoted.

## Honest gap(s) disclosed

The special-carve-outs clause paraphrases all six specific-category
carve-outs in subdivision (p) but only quotes three (the introductory
clause, the motor-carrier example, and the cable/telephone example);
disclosed explicitly rather than presented as a complete quotation of all
six. The definitions clause discloses that "labor," "wages," and "worker"
incorporate other Labor Code sections by reference. This document does
not determine whether § 2810.3 applies to any particular arrangement, and
does not describe implementing regulations the Labor Commissioner,
Cal/OSHA, or EDD may have adopted.

## Method

Fetched Labor Code § 2810.3 from `leginfo.legislature.ca.gov`, fetched
twice by the research agent with two distinct User-Agent strings,
confirmed byte-identical after whitespace normalization (172,083 bytes
each; the only raw differences were a per-request JSF debug timestamp and
CSRF token, both non-content). Noe v. Superior Court (2015) 237
Cal.App.4th 316 verified via the CourtListener MCP tool (direct curl and
WebFetch to courtlistener.com remain blocked in this environment); in
this case the cluster id and the underlying opinion id coincided (both
2804850), confirmed via the cluster's `sub_opinions` field rather than
assumed. All 26 statutory quotes and the 1 case-law quote
programmatically confirmed as exact, contiguous substrings (no
ellipsis-joined quotes) by the research agent.

Independently re-verified during integration review via a sixty-eighth
fetch (a new distinct curl User-Agent string,
"Groundtruth-68thVerify-ClientEmployer2810/1.0") of § 2810.3 — all 26
statutory quotes confirmed clean on direct substring match after HTML
stripping and whitespace normalization, no extraction artifacts
encountered. Noe v. Superior Court independently re-verified via the
CourtListener MCP tool's `search` and `get_endpoint_item` tools — the
single case-law quote confirmed as an exact, contiguous substring of the
opinion's `plain_text`.

## Verification

- Labor Code § 2810.3 fetched twice independently by the research agent
  with distinct User-Agent strings, plus a sixty-eighth independent
  fetch during integration review; all 26 statutory quotes confirmed
  clean.
- Noe v. Superior Court independently re-verified via the CourtListener
  MCP tool during integration review; the 1 case-law quote confirmed
  clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses citing multiple
  subdivisions of the same § 2810.3 correctly disclose they are not
  independent of each other (added during integration review to two
  clauses that were missing a `gap` field, to match this corpus's
  established convention that every authority clause carries one:
  `clientemployer2810_enforcement` and
  `clientemployer2810_indemnification_waiver`).
- Checked for duplicate clause IDs against the full corpus (none). One
  drafting-clause title ("Acknowledgment") duplicates existing corpus
  titles — consistent with this project's established pattern of
  generic, reused boilerplate titles; clause IDs remain unique.
- Checked every citation's `case` field for emptiness — all 27 populated
  with proper citation identifier strings.
- No new fields required — all five fields (`companyName`,
  `laborContractorUseDescription`, `preparerName`, `cityState`,
  `dateSigned`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Client Employer / Labor Contractor Liability (Labor Code
  § 2810.3) — Information Sheet
  (`client_employer_labor_contractor_liability_info_sheet`), 8 clauses (6
  authority + 2 drafting), in the Hiring category. No new fields.
- Corpus: 3,193 → 3,201 clauses; 422 → 423 documents. First processed
  item of wave 95.
