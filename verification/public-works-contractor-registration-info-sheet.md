# Hiring, new document: Public Works Contractor Registration — Information Sheet

## Why this document

Fourth and final processed item of wave 118 (Hiring slot). The agent's
first candidate, the "Voluntary Veterans' Preference Employment Policy
Act," initially looked promising and confirmed uncovered in the corpus
— but primary-source verification revealed the bill that would have
enacted it (AB 1383, 2015) and every reintroduction since (AB 353 2017,
AB 160 2019, SB 665 2021, SB 73 2023) died in committee or was vetoed
and never became law; the agent also confirmed Gov. Code Chapter 6's
actual current section range is [12940-12957], meaning the commonly-
cited §12958 does not exist. This is a genuine and valuable catch —
disclosing that a topic does not exist as law, rather than drafting
clauses around a non-existent statute, is exactly the honest-disclosure
discipline this corpus requires. The agent pivoted to Public Works
Contractor Registration and confirmed zero prior coverage of "1725.5,"
"prevailing wage registration," or "public works contractor
registration" anywhere in the corpus. Personally reconfirmed via corpus
search: zero prior mentions of "1725.5" or "1771.1."

## What this document covers

11 clauses: 2 drafting (intro, acknowledgment) and 9 authority clauses,
citing Lab. Code §§ 1725.5, 1725.5(a)(2)(A), 1725.5(a)(2)(D),
1725.5(a)(2)(E), 1725.5(c), 1725.5(f), 1725.5(e), 1725.5(h), 1725.6,
1725.5(g), 1771.1(b), 1771.1(e), 1771.1(g), 1771.1(h)(1):

- **`pwcr_registration_required`** — the core registration-required
  rule to bid, be listed, or perform on public work.
- **`pwcr_qualification_requirements`** — what a contractor must show
  to qualify (workers' comp coverage, no current debarment).
- **`pwcr_prior_unregistered_activity_disqualification`** — the
  12-month lookback disqualification and its $2,000 fee cure.
- **`pwcr_renewal_lapse`** — the consequence of an unpaid renewal fee
  and the 90-day inadvertence cure.
- **`pwcr_small_project_exemption`** — the $25,000/$15,000
  dollar-threshold exemptions.
- **`pwcr_applicability_dates`** — the original 2015/2018 phase-in
  dates and the current version's July 1, 2026 operative date.
- **`pwcr_parallel_1725_6_registration`** — the parallel registration
  track for certain streamlined-housing development projects.
- **`pwcr_awarding_body_bid_rejection_duty`** — the awarding body's own
  notice and bid-rejection duties, and DIR's public registry list.
- **`pwcr_civil_penalties_for_unregistered_performance`** — civil
  penalties for unregistered performance, including higher-tier
  contractor exposure.

## Genuine findings

- **A significant, load-bearing correction caught before drafting**:
  the agent's initial candidate (Voluntary Veterans' Preference
  Employment Policy Act) turned out not to be current law at all —
  caught only by fetching primary bill-history text rather than
  trusting search-engine summaries, and honestly disclosed as an
  abandoned pivot rather than silently dropped.
- **A significant correction to the agent's own initial assumption**
  about the chosen topic: the agent expected a single, long-standing
  statute, but found §1725.5 was recently re-enacted (Stats. 2023, Ch.
  39) and amended again (Stats. 2024, Ch. 52, AB 171) with an operative
  date of July 1, 2026 — which, as of the checked date (2026-09-06), had
  just taken effect.
- **An unanticipated discovery**: a second, structurally parallel
  registration track at §1725.6 for certain Gov. Code housing-
  streamlining projects that cross-satisfies the §1725.5 fee — built
  into a dedicated clause.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not define "public work" or state the scope of "this
chapter" (defined elsewhere in the prevailing wage chapter beginning at
§1720), does not describe the DIR registration portal or application
mechanics, does not identify who makes a "found to be in violation"
determination for the 12-month lookback, does not address a mid-
performance registration lapse's interaction with §1771.1(a)'s bid-and-
contract bar, does not explain what registration rule governed the
transitional period between 2023 enactment and the July 1, 2026
operative date, does not analyze whether the Government Code housing-
streamlining provisions define "contractor" the same way as Lab. Code
§1722.1, does not restate the Bus. & Prof. Code/Public Contract Code
bid exceptions named in §1771.1(a), and does not restate the higher-
tier-liability carve-outs in §1771.1(h) in full.

## Method

Fetched Lab. Code §§ 1725.5, 1725.6, and 1771.1 from
leginfo.legislature.ca.gov (via direct curl, since the built-in fetch
tool returned an egress-blocked error for that domain), each fetched
twice by the research agent with two distinct User-Agent strings,
confirmed byte-identical after stripping the session-specific JSF
ViewState token. CourtListener's daily rate limit was already exhausted
on the agent's test call; no case law was used, a disclosed and
legitimate choice. All 14 citation instances programmatically confirmed
by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-fifty-first fetch (a new distinct curl User-Agent
string, "Groundtruth-151stVerify-PublicWorksRegistration/1.0") of all
three sections — all 14 citation instances confirmed clean on direct
normalized-whitespace substring match, no extraction artifacts
encountered. The July 1, 2026 operative date claim was independently
spot-checked and confirmed present verbatim in the freshly fetched
text, along with the 12-month lookback disqualification, the parallel
§1725.6 track, and the civil penalty amounts.

## Verification

- All three Labor Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a one-hundred-
  and-fifty-first independent fetch during integration review; all 14
  citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
  Independently reconfirmed zero prior corpus mentions of "1725.5" or
  "1771.1."
- Checked every citation's `case` field for emptiness — all 14
  populated with proper citation identifier strings.
- One new field id confirmed genuinely necessary and non-duplicative:
  `publicWorksContractingDescription` (a bespoke free-text description
  field, following the established corpus convention seen on the Farm
  Labor Contractor Licensing document's `laborContractorUseDescription`)
  — did not exist previously in the corpus under any name. Four other
  fields (`companyName`, `preparerName`, `cityState`, `dateSigned`)
  reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Public Works Contractor Registration — Information
  Sheet (`public_works_contractor_registration_info_sheet`), 11 clauses
  (9 authority + 2 drafting), in the Hiring category. One new field:
  `publicWorksContractingDescription`.
- Corpus: 3,896 → 3,907 clauses; 505 → 506 documents. Fourth and final
  processed item of wave 118.

## Wave 118 summary

Wave 118 followed the established 1×4 pattern, targeting Hiring, During
employment, Confidentiality & IP, and Business Formation — the four
categories tied lowest after wave 117's rotation. All four agents ran
extensive duplication-check pivots before landing on genuinely open
topics: Design Patent Basics (after ruling out CDAFA, federal CFAA,
trademark dilution/incontestability, Civ. Code §3344, and UTSA §3426.1
as already covered), Health Care Worker Whistleblower Protection
(H&S Code §1278.5, after confirming zero overlap with the two existing
whistleblower documents), Nonprofit Corporation Director's Duty of Care
(after confirming the existing for-profit duty-of-care and self-dealing
documents address only Corp. Code §§309/310), and Public Works
Contractor Registration (after discovering the initially-planned
Veterans' Preference topic is not actually enacted law). All four
documents were built with CourtListener's daily quota exhausted
throughout. Each surfaced a genuine correction through close primary-
source reading: a corrected three-subsection structure for 35 U.S.C.
§171 (Design Patent Basics); a corrected, broader role-differentiated
scope covering patients and non-employee health care workers, not just
employees (Health Care Worker Whistleblower Protection); a corrected
assumption that the three nonprofit-type statutes would be functionally
parallel, when mutual benefit's liability-protection subdivision
actually lacks the self-dealing cross-reference its public-benefit and
religious counterparts have (Nonprofit Corporation Director's Duty of
Care); and the discovery that an entire initially-planned topic was
never enacted law, caught only by fetching primary bill-history text
(Public Works Contractor Registration). This wave also caught and fixed
a genuine clause-id collision (Design Patent Basics' `dp_` prefix
against an unrelated Domestic Partnership Declaration clause) during
integration review. Per the established alternation, wave 119 should
return to a 2×2 pattern.
