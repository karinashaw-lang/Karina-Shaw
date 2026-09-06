# Business Formation, new document: Federal Corporate Transparency Act / Beneficial Ownership Information Reporting — Information Sheet

## Why this document

First processed item of wave 96 (Business Formation slot, 1×4 pattern
targeting the corpus's current lowest-count categories). A scoping pass
confirmed zero prior coverage of the federal Corporate Transparency Act's
beneficial ownership information (BOI) reporting regime anywhere in the
corpus. This is a federal-law topic included because it directly and
substantially affects California-formed entities' compliance obligations,
consistent with this project's practice of including directly relevant
federal law alongside its primarily-California corpus.

## What this document covers

6 clauses: 2 drafting (intro, acknowledgment) and 4 authority clauses,
citing 31 U.S.C. § 5336(a)(3), (a)(11), (b)(1)(A) and 31 C.F.R.
§ 1010.380(a)(1), (c)(1)-(2), (c)(5), and its amendment history:

- **`ctaboi_reporting_company_definition`** — the statute's own
  definition of "reporting company," which by its terms includes
  domestic entities.
- **`ctaboi_2025_scope_narrowing`** — the central finding: FinCEN's
  2025-2026 regulatory narrowing that removed all domestic (U.S.-formed)
  entities and U.S. persons from the reporting requirement, leaving it
  applicable only to foreign-formed entities registered to do business
  in the U.S.
- **`ctaboi_beneficial_owner_definition`** — the statutory
  substantial-control/25-percent-ownership test.
- **`ctaboi_filing_mechanics`** — the general reporting obligation and
  the initial-report filing deadlines under the current regulation.

## Genuine findings

- **The central finding, current as of this session**: this area of law
  changed substantially in 2025-2026. The regulatory text itself (31
  C.F.R. § 1010.380(c)(1)(i), fetched directly from eCFR) is now marked
  "[Reserved]" for the domestic-entity branch of the reporting-company
  definition — confirming that, as currently in effect, no U.S.-formed
  entity (including a California-formed one) is a reporting company,
  and no U.S. person has any beneficial-owner or company-applicant
  reporting obligation. This was verified against the regulation's own
  current text, not secondary reporting, and independently re-confirmed
  during integration review via a fresh eCFR fetch.
- **A source-tier honesty distinction correctly maintained**: the dates
  and Federal Register citations for the 2025 interim rule and 2026
  final rule (90 FR 13697; 91 FR 52528) come from eCFR's own embedded
  amendment-history line — itself a primary source, independently
  fetched and confirmed twice — but the rule preambles themselves
  (fincen.gov, federalregister.gov, home.treasury.gov) were unreachable
  from this environment. No preamble language is quoted as verified;
  the document explicitly discloses this narrower verification tier.
- **Fixed during integration review**: the delivered intro clause
  originally told the reader that the company "should confirm its
  current status directly against FinCEN's own published guidance" —
  an instruction to act, crossing this project's inform-not-advise
  line. Revised to state facts only (what the document does and does
  not determine) without instructing any specific action. Two authority
  clauses were also delivered with empty `gap` fields, breaking this
  corpus's established convention that every authority clause discloses
  its own limitations; both were given substantive gap disclosures
  during integration review.

## Honest gap(s) disclosed

The statutory exclusions from the "beneficial owner" definition (minor
children, nominees, employees, inheritance expectancy, creditors) are
named but not separately quoted in full. The "company applicant"
definition is not separately addressed. FinCEN's BOI E-Filing System
interface and step-by-step filing instructions are not covered, since
they are published only on fincen.gov, which was unreachable. This
document does not determine whether any particular company currently has
a reporting obligation.

## Method

Fetched 31 U.S.C. § 5336 from `uscode.house.gov` and 31 C.F.R. § 1010.380
from the eCFR versioner API (`ecfr.gov/api/versioner`) — the human-facing
eCFR page redirects through a bot-check the environment's proxy rejects,
so the research agent used the API endpoint instead, disclosed as such.
Each source fetched twice with two distinct User-Agent strings, confirmed
byte-identical after whitespace normalization. federalregister.gov,
fincen.gov, home.treasury.gov, and several law-firm secondary sources
were all blocked by network egress controls; WebSearch worked and
corroborated the general contours of the 2025-2026 rulemaking in
secondary terms only, not as a source for any quoted text. All 7 citation
quotes programmatically confirmed by the research agent as exact,
contiguous substrings (no ellipsis-joined quotes).

Independently re-verified during integration review via a
seventy-second fetch (a new distinct curl User-Agent string,
"Groundtruth-72ndVerify-CTABOI/1.0") of both 31 U.S.C. § 5336 (via
uscode.house.gov) and 31 C.F.R. § 1010.380 (via the eCFR versioner API)
— all 7 quotes confirmed clean on direct substring match after HTML/XML
stripping and whitespace normalization, no extraction artifacts
encountered.

## Verification

- 31 U.S.C. § 5336 and 31 C.F.R. § 1010.380 each fetched twice
  independently by the research agent with distinct User-Agent strings,
  plus a seventy-second independent fetch during integration review;
  all 7 quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean after the fixes above.
- Checked the inform-vs-advise boundary specifically, given this
  document's unusually fast-changing subject matter — caught and fixed
  one instance of advisory language in the intro clause during
  integration review (see Genuine findings).
- Checked every authority clause for a non-empty `gap` field, per this
  corpus's established convention — caught and fixed two empty `gap`
  fields during integration review.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("About This Information Sheet,"
  "Acknowledgment") duplicate existing corpus titles — consistent with
  this project's established pattern of generic, reused boilerplate
  titles; clause IDs remain unique.
- Checked every citation's `case` field for emptiness — all 7 populated
  with proper citation identifier strings.
- No new fields required — all six fields (`companyName`,
  `authorizedSignerName`, `entityType`, `stateOfFormation`, `dateSigned`,
  `cityState`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Federal Corporate Transparency Act / Beneficial
  Ownership Information Reporting — Information Sheet
  (`corporate_transparency_act_boi_reporting_info_sheet`), 6 clauses (4
  authority + 2 drafting), in the Business Formation category. No new
  fields.
- Corpus: 3,220 → 3,226 clauses; 426 → 427 documents. First processed
  item of wave 96.
