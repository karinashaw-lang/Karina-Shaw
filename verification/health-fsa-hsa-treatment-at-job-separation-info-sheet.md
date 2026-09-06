# Ending employment, new document: Health FSA and HSA Treatment at Job Separation — Information Sheet

## Why this document

Fourth and final processed item of wave 112 (Ending employment slot).
Roughly ten candidates (OWBPA/release-of-claims, commission payout,
direct-deposit/place-of-payment, golden parachute, blacklisting, Civ.
Code § 47(c) reference immunity, compelled self-publication defamation,
non-compete/§ 16600, grocery worker retention, USERRA, and the UI
pamphlet requirement) were all confirmed already covered, several in
unexpected depth. The agent confirmed zero prior coverage of health
FSA/HSA treatment at job separation via both document-level and
clause-level checks. No California-specific statute was found or
claimed for this topic; it is presented honestly as federal-only law.

## What this document covers

7 clauses: 2 drafting (intro, certification) and 5 authority clauses,
citing 26 U.S.C. §§ 125(d)(1), (d)(2)(A), (d)(2)(D), 223(d)(1)(E),
(f)(1), and 26 C.F.R. § 54.4980B-2, Q&A-8(a)(1), (c), (e):

- **`healthfsa_cafeteria_plan_definition`** — what a cafeteria plan and
  a health FSA are under § 125(d)(1).
- **`healthfsa_deferred_comp_anti_rollover_rule`** — the anti-deferred-
  compensation rule that is the statutory root of "use-it-or-lose-it"
  treatment.
- **`healthfsa_hsa_portability_contrast`** — the contrasting
  nonforfeitable, portable nature of an HSA balance, and the cafeteria-
  plan carve-out allowing pre-tax HSA contributions.
- **`healthfsa_cobra_general_rule`** — COBRA's general applicability to
  a health FSA, limited to the coverage actually being received.
- **`healthfsa_cobra_underspent_test`** — the two-condition test and
  underspent-account comparison that can eliminate a health FSA's
  COBRA obligation for the plan year of the qualifying event.

## Genuine findings

- **A significant correction to the agent's own initial assumption**:
  the agent initially assumed "use-it-or-lose-it" would be citable as a
  clean regulatory rule. Reading the actual statute showed the
  doctrine's real root is the anti-deferred-compensation provision in
  § 125(d)(2)(A) — cafeteria plans cannot exist as such if they let
  unused amounts roll over or be cashed out; "use-or-lose" is the
  industry description of that constraint's practical effect, not a
  phrase found in the statute itself. The clauses were corrected to
  reflect this and disclose that the specific regulation elaborating
  carryover/grace-period exceptions (Treas. Reg. § 1.125-5) was not
  independently verified after repeated fetch attempts failed
  (Cornell 404, eCFR bot-blocked, govinfo.gov wrong-package errors) —
  disclosed honestly rather than silently substituted with an
  unverified citation.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on the statute and regulation text
  alone.

## Honest gap(s) disclosed

This document does not verify Treas. Reg. § 1.125-5's detailed use-or-
lose mechanics or current carryover/grace-period dollar limits, does
not cover HSA eligibility, contribution-limit, or excise-tax rules, does
not restate the regulation's own worked example (which uses stale 2002
dollar figures), does not address dependent-care FSAs (excluded from
the COBRA analysis), and does not determine whether any specific health
FSA balance has been forfeited or whether any specific account is in
fact "underspent" as of a given qualifying event.

## Method

Fetched 26 U.S.C. §§ 125 and 223 and 26 C.F.R. § 54.4980B-2 from
Cornell LII, each fetched twice by the research agent with two
distinct User-Agent strings, confirmed byte-identical via MD5 hash
match. CourtListener's daily rate limit was already exhausted on the
agent's test call; no case law was used, a disclosed and legitimate
choice. All 8 citation instances programmatically confirmed by the
research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-thirty-third fetch (a new distinct curl User-Agent
string, "Groundtruth-133rdVerify-HealthFSA/1.0") of all three sources —
all 8 citation instances confirmed clean on direct normalized-
whitespace substring match, no extraction artifacts encountered. The
anti-deferral rule and the underspent-account two-condition test were
both independently reconfirmed present in the freshly fetched text.

## Verification

- All three federal sources fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-thirty-third independent fetch during integration
  review; all 8 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple provisions of the same regulation (Q&A-8's (a)(1), (c), (e))
  correctly disclose they are not independent sources of each other;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); two
  drafting-clause titles ("Purpose and Scope of This Information
  Sheet," "Certification") collide with generic boilerplate titles
  already reused elsewhere in the corpus — confirmed as intentional
  generic-title reuse, not a content duplicate. Independently
  reconfirmed this document is distinct from the existing Cal-COBRA
  Election Notice, Deferred Compensation/Equity Vesting, and 401(k)
  Distribution Notice documents.
- Checked every citation's `case` field for emptiness — all 8
  populated with proper citation identifier strings.
- No new fields required — all seven fields (`preparerName`,
  `companyName`, `employeeName`, `planName`, `qualifyingEventDate`,
  `dateSigned`, `cityState`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Health FSA and HSA Treatment at Job Separation —
  Information Sheet (`health_fsa_hsa_forfeiture_at_separation_info_sheet`),
  7 clauses (5 authority + 2 drafting), in the Ending employment
  category. No new fields.
- Corpus: 3,713 → 3,720 clauses; 487 → 488 documents. Fourth and final
  processed item of wave 112.

## Wave 112 summary

Wave 112 followed the established 1×4 pattern, targeting Hiring,
During employment, Confidentiality & IP, and Ending employment — the
four categories left tied lowest after wave 111, exactly matching the
categories not touched in the two immediately preceding waves. All
four agents ran extensive duplication-check pivots before landing on
genuinely open topics, continuing the saturation trend from recent
waves. All four completed documents were built with CourtListener's
daily quota exhausted throughout. Each surfaced a genuine correction
through close primary-source reading: a corrected scoping decision that
excluded unrelated neighboring statutory sections after reading their
actual text (Yellow-Dog Contract Prohibition), a corrected assumption
about a simple day-for-day extension replaced by a three-guarantee,
multi-limitation statutory mechanism (Patent Term Adjustment), a
corrected "leave law" framing replaced with the statute's actual
anti-retaliation/device-access structure (Workers' Rights in
Emergencies), and a corrected assumption about where "use-it-or-lose-
it" treatment actually originates in the statutory text (Health FSA/HSA
Treatment at Job Separation). Per the established alternation, wave 113
should return to a 2×2 pattern.
