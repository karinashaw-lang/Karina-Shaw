# Confidentiality & IP, new document: Trade Secret Evidentiary Privilege — Information Sheet

## Why this document

First processed item of wave 129 (Confidentiality & IP slot, 2×2
pattern). The agent ruled out seven candidates via specific
section-number greps before landing here: DTSA whistleblower immunity
(18 U.S.C. §1833(b)), the Silenced No More Act (Gov. Code §12964.5)
and CCP §1001 settlement-disclosure ban, Civ. Code §3426.5 civil
protective orders (already covered as a companion provision inside
the existing pre-discovery-identification document), CCP §2019.210
pre-discovery identification (already its own document), source code
escrow agreements (deprioritized as primarily contract law, not
statutory), and CUTSA's reverse-engineering carve-out (Civ. Code
§3426.1(a), already covered) were all confirmed already substantively
covered or a weaker fit. The chosen topic — the Evidence Code §§1060-
1062 trade secret evidentiary privilege and its criminal-proceeding-
specific protective-order and closure machinery — was confirmed
genuinely open: zero prior corpus hits on Evid. Code §1060, §1061, or
§1062 before drafting. This is a procedural/evidentiary facet of
trade secret law, distinct from this corpus's existing substantive
(CUTSA, DTSA, criminal theft, economic espionage) and civil-procedure
(pre-discovery identification, civil protective orders) coverage.

## What this document covers

10 clauses: 2 drafting (intro, closing/signature) and 8 authority
clauses, citing Evid. Code §1060, §1061(a), (b)(1)-(2), (b)(3)-(4),
(b)(4)(A), (E), (c)-(d), §1062(a), (b)-(e):

- **`evid1060_general_privilege`** — the §1060 privilege and its
  fraud/injustice limit.
- **`evid1061_definitions`** — the cross-referenced "trade secret" and
  "article" definitions borrowed for the criminal-proceeding
  procedure.
- **`evid1061_protective_order_motion_procedure`** — the motion,
  affidavit, and opposition procedure for a criminal-case protective
  order.
- **`evid1061_protective_order_standard`** — the preponderance
  standard and discretionary in-camera hearing.
- **`evid1061_protective_order_permissible_terms`** — the permissive
  (not mandatory) contents a protective order may include.
- **`evid1061_no_effect_on_status_or_civil_case`** — a protective-order
  ruling does not decide trade-secret status or bind civil litigation.
- **`evid1062_closure_of_proceedings`** — the standard for closing part
  of a criminal proceeding to the public.
- **`evid1062_scope_review_and_transcript`** — closure's scope
  limitation, appellate review, and later public transcript access.

## Genuine findings

- **A disclosed, deliberate exclusion of a subsection containing a
  genuine source typo**: §1062(f) was excluded entirely from the
  document because the official leginfo text itself contains an
  apparent typographical error ("pursaunt" for "pursuant"); the agent
  disclosed the exclusion and the typo directly rather than quoting
  around it or silently correcting it.
- **A disclosed, deliberate choice not to compare two cross-referenced
  definitions**: the definitions clause's gap explicitly discloses
  that the document did not independently compare the Civil Code
  §3426.1(d) and Penal Code §499c(a)(9) trade-secret definitions
  §1061(a) offers as alternatives, to determine whether they differ in
  scope.
- **A disclosed textual observation on undefined scope**: the general-
  privilege clause's gap notes that §1060's own text does not state in
  which kinds of proceedings (civil, criminal, administrative) the
  privilege may be claimed, while the specific motion procedure in
  §1061 applies, by its own terms, only "during a criminal
  proceeding."
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on statute text alone, with gap
  fields naming exactly which undefined terms (substantial
  probability, serious harm, overriding public interest) case law
  would normally elaborate.

## Honest gap(s) disclosed

This document does not define "trade secret" as used in §1060 itself
(as opposed to the cross-referenced definitions borrowed specifically
for §§1061-1063), does not state a filing deadline for a §1061
protective-order motion, does not resolve whether the two
cross-referenced trade-secret definitions are identical in scope, does
not define "preponderance of the evidence," "substantial probability,"
"serious harm," or "overriding public interest," does not address
§1062(f) (excluded due to a source typo), does not state a specific
deadline for "as soon as practicable" transcript release, and does not
address closing a civil or administrative proceeding (the closure
authority applies, by its own text, only "in a criminal case").

## Method

Fetched Evid. Code §§1060, 1061, and 1062 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical
(excluding the dynamic JSF ViewState token). CourtListener's daily
quota was already exhausted (HTTP 429) on the agent's test call; no
case law was used or fabricated. All 14 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings, with non-breaking-space (`\xa0`) source formatting treated
as ordinary whitespace during verification.

Independently re-verified during integration review via a
one-hundred-and-eighty-second fetch (a new distinct curl User-Agent
string, "Groundtruth-182ndVerify-TradeSecretPrivilege/1.0") of all
three sections — all 14 citation instances confirmed clean; 1 of the
14 required the standard whitespace-stripped fallback check (the
familiar subdivision-marker-spacing artifact in §1061(a)), confirmed
benign via direct context inspection of the raw fetched text. The
general privilege, the borrowed definitions, the motion/affidavit
procedure, the preponderance standard, the permissible protective-
order terms, the no-effect-on-status rule, the closure standard, and
the scope/review/transcript rules were all independently reconfirmed
present in the freshly fetched text.

## Verification

- All three Evidence Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-eighty-second independent fetch during integration
  review; all 14 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `evid1060_`/`evid1061_`/`evid1062_` prefixes have zero
  collisions. Ran section-number-specific greps for Evid. Code §§1060,
  1061, and 1062 across the full corpus — zero hits outside the new
  clauses, confirming no disguised overlap.
- Checked every citation's `case` field for emptiness — all 14
  populated with proper citation identifier strings.
- No new fields required — all eight fields (`preparerName`,
  `companyName`, `adversePartyName`, `tradeSecretDescription`,
  `courtCaseNumber`, `courtName`, `dateSigned`, `cityState`) reused
  from the existing corpus, matching the house style of sibling
  documents (Trade Secret Pre-Discovery Identification, Criminal Trade
  Secret Theft).
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Trade Secret Evidentiary Privilege — Information
  Sheet (`trade_secret_evidentiary_privilege_info_sheet`), 10 clauses
  (8 authority + 2 drafting), in the Confidentiality & IP category. No
  new fields.
- Corpus: 4,208 → 4,218 clauses; 536 → 537 documents. First processed
  item of wave 129.
