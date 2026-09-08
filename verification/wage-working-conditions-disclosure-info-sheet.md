# Confidentiality & IP, new document: Employee Wage and Working Conditions Disclosure Rights (Labor Code §§ 232, 232.5) — Information Sheet

## Why this document

Third processed item of wave 140 (Confidentiality & IP slot, 1×4
pattern). The agent ruled out the Silenced No More Act/CCP § 1001
(already covered by the existing non-disparagement document), trade-
secret pre-discovery identification (Civ. Code § 2019.210, already
covered), and reverse engineering (already covered) — all confirmed
by direct grep. The chosen topic — Lab. Code §§ 232 and 232.5's bar
on requiring an employee to keep wage amounts or working conditions
confidential, with § 232.5's own trade-secret/proprietary/privilege
carve-out, plus *Grant-Burton v. Covenant Care*'s public-policy tort
recognition and broad "wages" definition — was confirmed genuinely
open. A duplication check found an existing clause,
`fairpay_retaliation_and_wage_discussion_protection`, covering wage-
discussion protection — confirmed to be Lab. Code § 1197.5(k)(1), a
distinct, separately enacted statute from §§ 232/232.5, and the new
document's own scope-note clause explicitly discloses that
distinction rather than duplicating that coverage.

## What this document covers

8 clauses: 3 drafting (purpose, scope note, acknowledgment) and 5
authority clauses, citing Lab. Code § 232(a)-(c), § 232.5(a)-(c),
§ 232.5(d), and *Grant-Burton v. Covenant Care, Inc.*, 99 Cal. App.
4th 1361 (2002) (two citations):

- **`wageconf_wage_disclosure_prohibition`** — the § 232 bar on
  requiring wage-amount confidentiality, waivers, or retaliation.
- **`wageconf_workingconditions_disclosure_prohibition`** — the
  parallel § 232.5 bar for working-conditions disclosure.
- **`wageconf_tradesecret_privilege_carveout`** — § 232.5's own
  express carve-out for proprietary information, trade secrets, and
  privilege (the IP tie-in).
- **`wageconf_public_policy_tort_recognition`** — *Grant-Burton*'s
  recognition of a public-policy wrongful-termination tort claim
  grounded in § 232.
- **`wageconf_wages_broad_definition`** — *Grant-Burton*'s holding
  that "wages" reaches discretionary bonuses, not only base pay.

## Genuine findings

- **A disclosed distinction from an existing corpus clause, not a
  duplication**: the scope-note clause explicitly distinguishes this
  document's §§ 232/232.5 coverage from the existing Fair Pay Act
  document's Lab. Code § 1197.5(k) wage-discussion protection — a
  separate statute the new document deliberately does not restate.
- **A disclosed superseded-quotation avoidance**: the public-policy-
  tort clause's gap notes the *Grant-Burton* opinion itself quotes an
  older version of § 232(c) containing language ("for job
  advancement") no longer in the current statute (amended by Stats.
  2002, Ch. 934, eff. Jan. 1, 2003) — the clause deliberately quotes
  only the court's own reasoning, not its quotation of the now-
  superseded statutory text, to avoid misstating current law.
- **A disclosed negative case-law finding for § 232.5 specifically**:
  the working-conditions and trade-secret-carveout clauses' gaps both
  disclose that CourtListener searches for case law construing
  § 232.5 (as opposed to § 232) returned only tangential mentions,
  not genuine construction — disclosed honestly rather than stretched
  into citations.
- **A disclosed undefined cross-statute term**: the trade-secret-
  carveout clause's gap notes § 232.5 uses the broader, undefined
  phrase "proprietary information" alongside "trade secret
  information," and does not resolve how it interacts with the UTSA's
  Civ. Code § 3426.1(d) trade-secret definition.

## Honest gap(s) disclosed

This document does not address a private civil remedy or enforcement
mechanism for a § 232/232.5 violation (the statutes' text is silent),
does not cover Lab. Code § 1197.5, § 432.3, or NLRA concerted-activity
protections, does not independently verify Lab. Code § 200(a)'s
"wages" definition (relies on the Court of Appeal's own
characterization), and relies on a single Court of Appeal decision
from one district for the public-policy tort recognition.

## Method

Fetched Lab. Code §§ 232 and 232.5 from leginfo.legislature.ca.gov,
each fetched twice by the research agent with two distinct User-Agent
strings via curl (one connection reset on the first request resolved
via retry), confirmed byte-identical. A CourtListener search located
*Grant-Burton v. Covenant Care, Inc.* without a rate-limit issue; its
quotes were verified via the tool-returned internal opinion id's
`html_with_citations` field. All 5 citation instances were
programmatically confirmed by the research agent as exact, contiguous
substrings, using exact-URL-suffix matching after catching and fixing
a substring-matching bug in the verification script itself.

Independently re-verified during integration review via a two-
hundred-and-twenty-fourth fetch (a new distinct curl User-Agent
string, "Groundtruth-224thVerify-WageWorkingConditionsDisclosure/1.0")
of both statutory sections — both fetched cleanly on the first
attempt. All 3 statute citation instances confirmed clean on direct
normalized-whitespace substring match. Both *Grant-Burton* citations
independently reconfirmed via the CourtListener API's
`get_endpoint_item` against the opinion's internal id — exact
matches, no defects found. The wage-disclosure prohibition, the
parallel working-conditions prohibition, the trade-secret/proprietary/
privilege carve-out, the public-policy tort holding, and the broad
"wages" definition were all independently reconfirmed present in the
freshly fetched text.

## Verification

- Both cited statutory sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a two-
  hundred-and-twenty-fourth independent fetch during integration
  review; all 3 statute citation instances confirmed clean. Both
  case-law citations independently re-verified via the CourtListener
  API against the correct internal opinion id; no defects found.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section, or drawn from the same
  single opinion, correctly disclose they are not independent sources
  of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `wageconf_` prefix has zero collisions. Ran term-
  specific greps for "232.5," "Grant-Burton," and wage-discussion
  phrasing — the one substantive hit (`fairpay_retaliation_and_wage_
  discussion_protection`) confirmed a different statute (Lab. Code
  § 1197.5(k)), already disclosed as distinct in the new document's
  own scope-note clause; zero genuine duplication.
- Checked every citation's `case` field for emptiness — all 5
  populated with proper citation identifier strings.
- No new field ids required — both fields (`companyName`,
  `employeeName`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Employee Wage and Working Conditions Disclosure
  Rights (Labor Code §§ 232, 232.5) — Information Sheet
  (`wage_working_conditions_disclosure_info_sheet`), 8 clauses (5
  authority + 3 drafting), in the Confidentiality & IP category. No
  new fields.
- Corpus: 4,650 → 4,658 clauses; 578 → 579 documents. Third processed
  item of wave 140.
