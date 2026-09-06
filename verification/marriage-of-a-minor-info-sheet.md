# Family Law, new document: Marriage of a Minor — Information Sheet

## Why this document

Fourth and final processed item of wave 106 (Family Law slot). Two
candidates were pivoted away from after the agent found substantial
existing coverage once checked deeply: the full Fam. Code § 4320
spousal-support factor list (already quoted verbatim in the existing
Marital Settlement Agreement document's `msa_spousal_support_factors`
and `msa_long_duration_marriage` clauses), and standard/public marriage
license requirements generally (partially touched by the existing
Common Law Marriage document's `commonlawmarriage_ca_formation_requirements`
clause quoting Fam. Code § 300(a)). The agent then confirmed zero prior
coverage of Family Code §§ 301-306, 420, and 423's minor-marriage
court-order and consent scheme via both document-level and clause-level
checks — the existing Confidential Marriage and Common Law Marriage
documents never touch it, and the Emancipation of a Minor document's
clause list doesn't cover it either.

## What this document covers

12 clauses: 2 drafting (intro/scope, signature block) and 10 authority
clauses, citing Fam. Code §§ 301, 302(a)-(b), 303, 304(a)(1)-(2), (a)(3)-(4),
(b), (c), (d)(1)-(3), (e), (e)(3), (f)(1)-(2), 306, 420(a), and 423(b):

- **`minormarriage_adult_baseline`** — the general age-18 baseline for
  consenting to marriage without a court order.
- **`minormarriage_court_order_requirement`** — the court-order
  requirement for a minor with a parent or guardian able to consent.
- **`minormarriage_no_capable_parent`** — the alternate pathway when a
  minor has no parent able to consent.
- **`minormarriage_interview_and_report_process`** — the Family Court
  Services interview and written-report process, including the
  child-abuse-reporting duty.
- **`minormarriage_thirty_day_wait`** — the 30-day waiting period for
  parties 17 or younger.
- **`minormarriage_premarital_counseling`** — the court's discretionary
  authority to order premarital counseling, with a religious-counselor
  bar.
- **`minormarriage_order_documentation_requirements`** — what the court
  order itself must document.
- **`minormarriage_required_disclosures_to_minor`** — the categories of
  information a minor must be given when an order issues.
- **`minormarriage_statutory_exceptions`** — the two distinct,
  non-overlapping exceptions to the interview/report process and the
  30-day wait.
- **`minormarriage_licensing_solemnization_return`** — the general
  licensing/solemnization process plus the minor-specific
  return-of-license requirement.

## Genuine findings

- **A significant correction to the agent's own initial recollection**:
  the agent expected a simple one-line rule ("no minimum age but
  requires a court order"). Reading § 304 directly revealed a far
  richer scheme: a mandatory Family Court Services interview and
  written report assessing coercion/duress/fraud with a CPS-reporting
  duty, an in-camera court interview, a 30-day post-order wait (only
  for parties 17 or younger), discretionary (not mandatory) premarital
  counseling with an explicit religious-counselor bar, mandatory
  disclosures to the minor (emancipation rights, nullity/dissolution
  procedure, DV/SA hotlines, shelter and contract rights), and two
  narrow, non-overlapping exceptions — corrected and stated with that
  full structure rather than the simplified assumption.
- **A correctly identified non-overlap between the two § 304(f)
  exceptions**: the agent found the diploma/equivalency exception
  (paragraph (1)) excuses both the interview process and the 30-day
  wait, while the pregnancy exception (paragraph (2)) excuses only the
  30-day wait — explicitly stated as non-interchangeable rather than
  conflated.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on the statute's own text alone.

## Honest gap(s) disclosed

This document does not verify what "not otherwise disqualified" means
under § 301 (incest/bigamy rules elsewhere in the Family Code), does
not verify Health & Safety Code §§ 102233 or 102356 (cross-referenced
by § 304(d) but not fetched), does not verify Fam. Code § 307 (§ 306's
cross-referenced exception) or § 422 (§ 423(a)'s cross-referenced
endorsement requirement), does not describe county-level administrative
or verification practices, and does not reproduce the substantive
emancipation or nullity information § 304(e) requires be disclosed —
this project's separate Emancipation of a Minor and Nullity of Marriage
documents address that in more depth.

## Method

Fetched Fam. Code §§ 300, 301, 302, 303, 304, 306, 420, and 423 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
isolating and diffing the statute-text div (one § 423 fetch hit a
transient TLS error and was retried successfully). CourtListener's
daily rate limit was already exhausted on the agent's test call; no
case law was used, a disclosed and legitimate choice. All 18 citation
instances programmatically confirmed by the research agent as exact,
contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-fifteenth fetch (a new distinct curl User-Agent string,
"Groundtruth-115thVerify-MinorMarriage/1.0") of all 7 cited sections —
all 18 citation instances confirmed clean on direct normalized-
whitespace substring match, no extraction artifacts encountered. A
personal spot-check searched the corpus for "minor marriage," "marry,"
"§ 302," "§ 303," and "§ 304," and confirmed the apparent hits on
"§ 302" and "§ 304" were false-positive substring collisions (e.g.
§ 3040, § 3103) unrelated to this statutory scheme, not genuine prior
coverage.

## Verification

- All 7 cited Family Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-fifteenth independent fetch during integration
  review; all 18 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of § 304 correctly disclose they are not
  independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); two
  drafting-clause titles ("About This Information Sheet," "Signatures
  and Acknowledgment") collide with generic boilerplate titles already
  reused by 27 and 4 other drafting clauses respectively — confirmed as
  intentional generic-title reuse, not a content duplicate.
  Independently reconfirmed this document is distinct from the existing
  Confidential Marriage, Common Law Marriage, and Emancipation of a
  Minor documents.
- Checked every citation's `case` field for emptiness — all 18
  populated with proper citation identifier strings.
- No new fields required — all nine fields (`party1Name`, `party2Name`,
  `petitionerDOB`, `countyOfFiling`, `courtName`, `courtCaseNumber`,
  `marriageDate`, `parentName`, `dateSigned`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Marriage of a Minor — Information Sheet
  (`marriage_of_a_minor_info_sheet`), 12 clauses (10 authority + 2
  drafting), in the Family Law category. No new fields.
- Corpus: 3,549 → 3,561 clauses; 469 → 470 documents. Fourth and final
  processed item of wave 106.

## Wave 106 summary

Wave 106 followed the established 1×4 pattern, targeting Hiring,
Confidentiality & IP, Estate Planning, and Family Law — rotating away
from the four categories wave 104 had just covered (Hiring, Ending
employment, During employment, Confidentiality & IP shared that wave,
so Hiring and Confidentiality & IP were included here only because
Estate Planning and Family Law alone could not fill a four-category
1×4 slot; both nonetheless surfaced genuinely uncovered topics after
extensive scoping). Every one of this wave's four agents reported
extensive near-miss pivots before landing on a genuinely uncovered
topic — this unusually deep corpus (3,561 clauses after this wave) is
increasingly saturated on the most obvious topics within each category,
requiring scoping agents to search progressively more specific or
adjacent statutory ground. All four completed documents were built
with CourtListener's daily quota exhausted throughout. Each surfaced
genuine findings through close primary-source reading: a corrected
common paraphrase against actual statutory wording (CROWN Act's
"traits associated with race," not "historically associated"), a
corrected structural assumption replacing an imagined automatic
next-of-kin default with the statute's actual provider-selection
mechanism (Health Care Surrogates), two disclosed textual gaps on
undefined operative statutory terms rather than filled by inference
(Trade Secret Pre-Discovery Identification's "reasonable particularity"
and unstated noncompliance consequence), and a corrected initial
recollection that expanded a simplified one-line assumption into the
statute's actual multi-step scheme (Marriage of a Minor's Family Court
Services process). Per the established alternation, wave 107 should
return to a 2×2 pattern.
