# Estate Planning, new document: Escheat of a Decedent's Estate to the State — Information Sheet

## Why this document

Second and final processed item of wave 117 (Estate Planning slot).
Document- and clause-level greps for "escheat," "professional
fiduciary," "virtual representation," "situs," "21622," "safe harbor,"
and "21320" confirmed no dedicated coverage of decedent-estate escheat
anywhere in the corpus's 63 existing Estate Planning documents. The only
"escheat" corpus hits were `unclaimedwages_*` clauses (Ending
employment category, CCP §1500 et seq., the general Unclaimed Property
Law for wages), `deceasedwages_purpose` (Prob. Code §§13600-13606, wage
payment without probate), and two other unrelated clauses — all
personally confirmed to address different statutes from Prob. Code §6800.
Two flagged near-misses were confirmed out of scope: Transfer-on-Death
Deed already has a `tod_revocation_methods` clause (ruling out "TOD deed
revocation" as a candidate), and the existing No-Contest Clause
Enforceability document covers only enforceability/probable-cause, not
the §21320 safe-harbor procedure. No pivot was needed — the first fully
verified candidate held up.

## What this document covers

11 clauses: 2 drafting (intro, acknowledgment) and 9 authority clauses,
citing Prob. Code §§ 6800(a), 6800(b), 6801, 6802, 6803(a), 6803(b),
6804, 6805(a), 6805(b), 6806 (two passages), and Civ. Proc. Code
§§ 1420(a), 1420(b), 1420(c), 1420(d), 1420(e), 1430(a), 1430(b),
1430(c), 1431, 1444:

- **`escheat_general_rule`** — the automatic-at-death escheat trigger
  when no one takes by testate or intestate succession.
- **`escheat_real_and_tangible_property`** — separate tests for real
  property and tangible personal property, with the reciprocal
  other-jurisdiction exception.
- **`escheat_intangible_property`** — the domicile-based test for
  intangible property, with its own reciprocal exception.
- **`escheat_benefit_plan_carveout`** — the carve-out for employee
  benefit plan trusts and funds, and its reversion rule.
- **`escheat_attorney_general_proceeding`** — the AG's two-year-wait,
  Sacramento County petition, and publication/show-cause procedure.
- **`escheat_effect_on_pending_administration`** — distribution to the
  state within an open probate administration, and the AG's authority
  to direct the public administrator.
- **`escheat_uncollected_known_heir_shares`** — the distinct one-year
  county-treasury rule for a known heir's uncollected share.
- **`escheat_permanent_escheat_and_claim_window`** — the five-year
  window before escheat becomes permanent, and the infant/unsound-mind
  and named-beneficiary/blood-relative claim rights.
- **`escheat_disposition_to_general_fund`** — final bookkeeping
  disposition of permanently escheated property to the General Fund.

## Genuine findings

- **A significant correction to the agent's own initial scoping
  assumption**: the agent initially assumed §6800 alone would suffice.
  Reading the full text revealed it explicitly cross-references CCP
  Title 10 for procedure, leading the agent to also research the actual
  escheat-proceeding mechanics (the AG's two-year wait, Sacramento
  County venue, publication, 60-day show-cause) and the five-year
  permanent-escheat claim window.
- **A genuine, unanticipated sub-topic discovery**: while reading CCP
  Chapter 6 Article 1, the agent found §1444 — a distinct rule for a
  *known* heir's or legatee's share that was never collected, separate
  from §6800's "no known heir at all" scenario — and incorporated it as
  its own clause rather than treating it as covered by the general rule.
- **A caught and corrected quote-extraction error**: the agent's own
  verification pass caught a double-space artifact in one quote
  ("of  Civil" vs. normalized "of Civil"), corrected before delivery.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not determine, for any specific estate, whether every
possible taker under intestate succession or another jurisdiction's law
has been exhausted, does not define "customarily kept" or resolve
close-case property-location disputes, does not define "domicile" for a
decedent with connections to multiple states, does not independently
verify CCP §1521 (the cross-referenced employee-benefit-plan provision),
does not state which specific escheat-proceeding path starts the
five-year permanent-escheat clock for a given estate, and does not
restate the notice a known distributee may have received before a §1444
county-treasury deposit.

## Method

Fetched Prob. Code §§ 6800-6806 and Civ. Proc. Code §§ 1420, 1430, 1431,
and 1444 from leginfo.legislature.ca.gov, each fetched twice by the
research agent with two distinct User-Agent strings; raw HTML differed
in every pair, traced to two dynamic, non-content artifacts (a
facelets debug-output timestamp and JSF ViewState CSRF tokens) — after
normalizing those, all 11 pairs were byte-for-byte identical. The agent
also independently cross-checked extracted section text against two
earlier bulk multi-section fetches, with matching content.
CourtListener's daily rate limit was already exhausted on the agent's
test call; no case law was used, a disclosed and legitimate choice. All
citation quotes programmatically confirmed by the research agent as
exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-forty-seventh fetch (a new distinct curl User-Agent
string, "Groundtruth-147thVerify-Escheat/1.0") of all eleven sections —
all 21 citation instances confirmed clean on direct normalized-
whitespace substring match, no extraction artifacts encountered. The
general escheat trigger, the real/tangible/intangible property tests,
the AG's proceeding mechanics, and the five-year claim window were all
independently reconfirmed present in the freshly fetched text.

## Verification

- All eleven Probate Code and Code of Civil Procedure sections fetched
  twice independently by the research agent with distinct User-Agent
  strings, plus a one-hundred-and-forty-seventh independent fetch during
  integration review; all 21 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
  Independently reconfirmed the `unclaimedwages_*` and `deceasedwages_purpose`
  corpus hits address different statutes (CCP §1500 et seq. and Prob.
  Code §§13600-13606, respectively), not Prob. Code §6800 decedent-
  estate escheat.
- Checked every citation's `case` field for emptiness — all 21
  populated with proper citation identifier strings.
- No new fields required — all six fields (`decedentName`,
  `dateOfDeath`, `estimatedEstateValue`, `preparerName`, `dateSigned`,
  `cityState`) reused from the existing corpus (same pattern as the
  Medi-Cal Estate Recovery document).
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Escheat of a Decedent's Estate to the State —
  Information Sheet (`escheat_of_decedent_estate_info_sheet`), 11
  clauses (9 authority + 2 drafting), in the Estate Planning category.
  No new fields.
- Corpus: 3,854 → 3,865 clauses; 501 → 502 documents. Second and final
  processed item of wave 117.

## Wave 117 summary

Wave 117 followed the established 2×2 pattern, targeting Ending
employment and Estate Planning — the two categories left tied lowest
after wave 116's rotation and not touched in the two immediately
preceding waves. Both agents ran careful duplication-check passes before
landing on genuinely open topics: Federal WARN Act: Government Notice,
Aggregation, and Business Transfer (a companion filling gaps in the
existing WARN Act Layoff Notice document, after ruling out four other
candidates as already covered) and Escheat of a Decedent's Estate to the
State (after confirming zero overlap with the general Unclaimed
Property Law and wage-payment-without-probate documents). Both
documents were built with CourtListener's daily quota exhausted
throughout. Each surfaced a genuine correction through close
primary-source reading: a corrected citation for the sale-of-business
rule's actual regulatory home, plus an expanded document structure from
a narrower initial plan (Federal WARN Act), and an unanticipated
discovery of a distinct known-heir-share statute while researching the
broader escheat scheme (Escheat of a Decedent's Estate). Per the
established alternation, wave 118 should return to a 1×4 pattern.
