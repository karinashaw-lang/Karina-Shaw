# Family Law, new document: Vexatious Litigant Designation in Family Court — Information Sheet

## Why this document

First processed item of wave 119 (Family Law slot, 2×2 pattern). The
agent's first candidate, long-term spousal support factors under Fam.
Code §4320, was found already substantially covered — the existing
`msa_spousal_support_factors` clause quotes nearly the full §4320(a)-(l)
factor list — so the agent pivoted away rather than force a duplicate.
Personally reconfirmed that finding via direct clause inspection. The
agent then confirmed zero hits for "vexatious" anywhere in the entire
corpus (any practice area, not just Family Law) via document- and
clause-level greps for "vexatious" and "391," a genuine gap. No further
pivot was needed.

## What this document covers

10 clauses: 2 drafting (intro, acknowledgment) and 8 authority clauses,
citing Civ. Proc. Code §§ 391(a)-(b)(1)-(4), 391(b)(5), 391.1(a),
391.1(b), 391.2, 391.3(a), 391.3(b), 391.4, 391.6, 391.7(a), 391.7(d):

- **`vexlit_definition_criteria`** — the first four statutory
  definitional categories of "vexatious litigant."
- **`vexlit_dv_basis`** — the fifth category, added effective January
  1, 2023, based on violating a DVPA restraining order.
- **`vexlit_motion_for_security`** — the motion procedure for security
  or dismissal, and the filing-fee exemption for a DVPA-protected
  person's motion.
- **`vexlit_hearing_standard`** — the non-merits-determination rule
  governing the security-motion hearing.
- **`vexlit_security_or_dismissal_order`** — the security order
  standard and the narrower merits-based dismissal remedy.
- **`vexlit_dismissal_nonpayment`** — automatic dismissal for failing
  to furnish ordered security.
- **`vexlit_automatic_stay`** — the automatic stay triggered by filing
  a security motion.
- **`vexlit_prefiling_order`** — the prefiling-order mechanism and its
  express extension of "litigation" to Family Code and Probate Code
  filings.

## Genuine findings

- **A significant correction to the agent's own initial assumption**:
  the agent initially assumed this was a purely general-civil statute
  with no family-law-specific content. Reading the full text overturned
  that: §391(b)(5) (added by AB 2391, effective January 1, 2023)
  creates a vexatious-litigant category specifically tied to violating a
  DVPA restraining order; §391.1(b) waives the filing fee for the
  protected person's motion; and §391.7(d) explicitly extends the
  prefiling-order statute's definition of "litigation" to reach Family
  Code and Probate Code filings — the strongest evidence this is a
  genuine, non-duplicative Family Law topic rather than a generic
  civil-procedure import.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not define "finally determined adversely,"
"unjustifiably permitted to remain pending," "meritless," or "harassed
or intimidated" beyond the statute's own bare text, does not resolve
whether a family law motion filed against a prefiling-order requirement
also counts toward the separate five-litigation threshold in
§391(b)(1)-(4), does not describe a grace period or extension procedure
for furnishing ordered security, and does not identify any published
case law applying these provisions (particularly the 2023 DVPA-based
category) to family law filings.

## Method

Fetched Civ. Proc. Code §§ 391, 391.1, 391.2, 391.3, 391.4, 391.6, and
391.7 from leginfo.legislature.ca.gov, each fetched twice by the
research agent with two distinct User-Agent strings, confirmed
byte-identical for the substantive content region after excluding the
JSF ViewState session token. CourtListener's daily rate limit was
already exhausted on the agent's test call; no case law was used, a
disclosed and legitimate choice. All 11 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings sliced directly from canonical extracted text rather than
hand-retyped.

Independently re-verified during integration review via a
one-hundred-and-fifty-second fetch (a new distinct curl User-Agent
string, "Groundtruth-152ndVerify-VexatiousLitigant/1.0") of all seven
sections — all 11 citation instances confirmed clean on direct
normalized-whitespace substring match, no extraction artifacts
encountered. The 2023 DVPA-based category, the filing-fee exemption,
and the prefiling order's express reach into Family Code and Probate
Code filings were all independently reconfirmed present in the freshly
fetched text.

## Verification

- All seven Civ. Proc. Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a one-hundred-
  and-fifty-second independent fetch during integration review; all 11
  citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `vexlit_` prefix has zero collisions. Independently
  reconfirmed the pivot rationale — `msa_spousal_support_factors`
  already covers the §4320 spousal support factors this agent
  originally considered.
- Checked every citation's `case` field for emptiness — all 11
  populated with proper citation identifier strings.
- No new fields required — all six fields (`petitionerName`,
  `respondentName`, `courtCaseNumber`, `countyOfFiling`, `cityState`,
  `dateSigned`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Vexatious Litigant Designation in Family Court —
  Information Sheet (`vexatious_litigant_family_court_info_sheet`), 10
  clauses (8 authority + 2 drafting), in the Family Law category. No
  new fields.
- Corpus: 3,907 → 3,917 clauses; 506 → 507 documents. First processed
  item of wave 119.
