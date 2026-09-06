# Ending employment, new document: COBRA Notice Penalties — Information Sheet

## Why this document

Fourth and final processed item of wave 114 (Ending employment slot).
Four candidates were checked and confirmed already covered before the
agent settled on this topic: Lab. Code §227.3 vacation forfeiture
(already covered by the Vacation/PTO Payout document's accrual-cap-vs-
forfeiture distinction), Lab. Code §201.3 temp-services final-wage
timing (folded into the Final Paycheck Delivery Method document),
Lab. Code §2802 expense reimbursement (already its own info sheet,
filed under During employment), and building-service-worker displaced-
worker notice (already covered by the Displaced Janitor Opportunity Act
document). The agent confirmed the existing COBRA Election Notice
document covers only the notice/election mechanics (qualifying events,
timing, election period, premium cap) and never the penalty/enforcement
consequences of a missed or defective notice. Personally reconfirmed:
the only existing "4980B"/"1132"/COBRA-penalty corpus hit
(`healthfsa_signature_block`) cites the unrelated Treasury regulation
§54.4980B-2 (COBRA continuation-coverage eligibility for FSA/HSA
balances), not the penalty statute; the existing COBRA Election Notice
document's clause order (`cobra_election_notice_letter`,
`cobra_qualifying_events`, `cobra_notice_timing`, `cobra_election_period`,
`cobra_coverage_scope_duration`, `cobra_premium`,
`cobra_small_employer_scope`, `cobra_election_form`) confirms none touch
enforcement.

## What this document covers

10 clauses: 2 drafting (intro, acknowledgment) and 8 authority clauses,
citing 29 U.S.C. §§ 1132(c)(1)(A), 1132(c)(1) (two passages),
1132(a)(1)(A), 29 C.F.R. § 2575.502c-1, and 26 U.S.C. §§ 4980B(a),
4980B(b)(1), 4980B(c)(3), 4980B(c)(2), 4980B(c)(4)(A), 4980B(e)(1)(A):

- **`cobrapenalty_erisa_admin_penalty`** — the ERISA § 502(c)(1) civil
  penalty against the plan administrator personally, up to $100/day.
- **`cobrapenalty_separate_violations`** — each notice failure to each
  person counted as a separate violation.
- **`cobrapenalty_adjusted_amount`** — the DOL regulation increasing the
  penalty to $110/day effective post-July 29, 1997, with a disclosed
  gap on later inflation adjustments.
- **`cobrapenalty_civil_action`** — the requirement that enforcement
  proceeds through a civil action, not automatically.
- **`cobrapenalty_excise_tax_employer`** — the separate 26 U.S.C.
  § 4980B excise tax on the group health plan's own noncompliance.
- **`cobrapenalty_excise_tax_caps`** — the $100/$200 daily caps.
- **`cobrapenalty_excise_tax_overall_cap_and_correction`** — the 30-day
  reasonable-cause correction safe harbor and the annual 10%/$500,000
  overall cap.
- **`cobrapenalty_liable_party`** — who owes the excise tax (employer or
  plan) as distinct from who owes the ERISA penalty (the administrator).

## Genuine findings

- **A significant correction to the agent's own initial assumption**:
  the agent initially assumed the CFR-adjusted COBRA penalty figure
  would reflect the current dollar amount. Reading the full text of 29
  C.F.R. § 2575.502c-1 showed it only fixes the 1997 adjustment
  ($100→$110/day) and does not reflect later inflation adjustments
  required by 2015 statutory amendments — disclosed explicitly as a gap
  rather than guessing a current figure from memory.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute and regulation text alone.

## Honest gap(s) disclosed

This document does not state the current inflation-adjusted ERISA
penalty maximum beyond the 1997-fixed $110 figure, does not resolve who
qualifies as "administrator" of a particular plan or whether a court
would exercise discretion to impose the maximum penalty, does not
address venue or limitations periods for the ERISA civil action, does
not restate the higher minimum-tax rule triggered by a notice of
examination or the multiemployer-plan version of the overall cap, and
does not reproduce the excise tax's narrower third-party-liability rule.

## Method

Fetched 29 U.S.C. § 1132, 26 U.S.C. § 4980B, and 29 C.F.R. § 2575.502c-1
from Cornell LII, each fetched twice by the research agent with two
distinct User-Agent strings, confirmed byte-identical via diff.
CourtListener's daily rate limit was already exhausted on the agent's
test call; no case law was used, a disclosed and legitimate choice. All
11 citation instances programmatically confirmed by the research agent
as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-thirty-ninth fetch (a new distinct curl User-Agent
string, "Groundtruth-139thVerify-CobraPenalty/1.0") of all three
sources — all 11 citation instances confirmed clean on direct
normalized-whitespace substring match (curly apostrophes normalized),
no extraction artifacts encountered. The separate-violations counting
rule, the 30-day correction safe harbor, and the employer/plan-vs-
administrator liability distinction were all independently reconfirmed
present in the freshly fetched text.

## Verification

- All three federal sources fetched twice independently by the research
  agent with distinct User-Agent strings, plus a one-hundred-and-
  thirty-ninth independent fetch during integration review; all 11
  citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subsections of the same statute (§§1132, 4980B) correctly
  disclose they are not independent sources of each other; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none); one
  drafting-clause title ("Acknowledgment of Receipt") collides with a
  generic boilerplate title already reused elsewhere in the corpus —
  confirmed as intentional generic-title reuse, not a content
  duplicate. Independently reconfirmed this document does not overlap
  the existing COBRA Election Notice document's notice/election
  mechanics, and that the sole prior "4980B" corpus hit
  (`healthfsa_signature_block`) cites an unrelated Treasury regulation.
- Checked every citation's `case` field for emptiness — all 11
  populated with proper citation identifier strings.
- No new fields required — both fields (`companyName`, `employeeName`)
  reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: COBRA Notice Penalties — Information Sheet
  (`cobra_notice_penalties_info_sheet`), 10 clauses (8 authority + 2
  drafting), in the Ending employment category. No new fields.
- Corpus: 3,771 → 3,781 clauses; 493 → 494 documents. Fourth and final
  processed item of wave 114.

## Wave 114 summary

Wave 114 followed the established 1×4 pattern, targeting Confidentiality
& IP, Family Law, Estate Planning, and Ending employment — the four
categories tied lowest after wave 113's rotation. All four agents ran
extensive duplication-check pivots before landing on genuinely open
topics, continuing the saturation trend from recent waves: Trade Secret
Injunctive Relief Standards (after ruling out DTSA whistleblower
immunity, §2870, and federal dilution as already covered), Family Law
Facilitator Act (after pivoting away from Putative Spouse Doctrine and
Presumption of Parentage §7611), Beneficiary's Right to a Trust
Accounting (after pivoting away from the Heggstad Petition and an
escheat/unclaimed-property candidate), and COBRA Notice Penalties (after
ruling out §227.3, §201.3, §2802, and building-service-worker notice as
already covered). All four documents were built with CourtListener's
daily quota exhausted throughout. Each surfaced a genuine correction
through close primary-source reading: a corrected assumption that the
DTSA's injunction standard would mirror CUTSA's, replaced by the
discovery of two express carve-outs absent from state law (Trade Secret
Injunctive Relief Standards); a corrected assumption that "self-help
center" was part of the same statutory scheme, replaced by the
statute's actual, narrower "family law information center" concept
(Family Law Facilitator Act); a corrected assumption about companion
waiver sections that turned out not to exist, replaced by locating the
actual waiver text inside §16064 and §16062(e) (Beneficiary's Right to
a Trust Accounting); and a corrected assumption that the CFR penalty
figure reflected the current dollar amount, replaced by the disclosure
that it only fixes the 1997 adjustment (COBRA Notice Penalties). Per the
established alternation, wave 115 should return to a 2×2 pattern.
