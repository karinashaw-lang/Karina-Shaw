# Business Formation, new document: Limited Partner Control Safe Harbor — Information Sheet

## Why this document

First processed item of wave 126 (Business Formation slot, 1×4
pattern). The agent's first two candidates (nonprofit dissolution;
general partnership UPA formation basics) were confirmed already
covered, so it pivoted. The chosen topic — the safe-harbor list of
Corp. Code §15903.03(b)-(c) and the good-faith-erroneous-investor
protections of §15903.06 — was directly signposted by the existing
corpus's own honest disclosure: the existing
`california_limited_partnership_formation_info_sheet` document's
`lpform_lp_liability_shield` clause quotes only §15903.03(a) (the
general liability rule) and its own `gap` field explicitly states that
subdivision (b)'s safe-harbor list and §15903.06 were "not
independently researched for this clause." Personally reconfirmed this
disclosure by reading the existing clause directly, and confirmed via
corpus search that neither §15903.03(b) nor §15903.06 is quoted
anywhere else in the corpus.

## What this document covers

10 clauses: 2 drafting (identification, signature) and 8 authority
clauses, citing Corp. Code § 15903.03(b) intro, (c), (b)(1)(A)-(F),
(b)(2)-(3), (b)(4)-(5), (b)(9)-(10), (b)(6)-(7), (b)(8), (b)(11)-(13),
§ 15903.06(a)-(c):

- **`lpcontrol_safe_harbor_intro`** — the safe-harbor rule's
  introductory clause and the non-exhaustive-enumeration disclaimer.
- **`lpcontrol_safe_harbor_relationship_roles`** — holding related
  roles or transacting business with the partnership or a general
  partner.
- **`lpcontrol_safe_harbor_advice_and_credit`** — consulting/advising a
  general partner, and credit-related dealings.
- **`lpcontrol_safe_harbor_voting_and_meetings`** — voting, meeting
  participation, and approval-committee service.
- **`lpcontrol_safe_harbor_winding_up_and_filings`** — winding up the
  partnership and certain Secretary of State filings.
- **`lpcontrol_safe_harbor_oversight_and_catchall`** — audit committee
  service, derivative actions, related-entity roles, and the residual
  catch-all.
- **`lpcontrol_good_faith_erroneous_investor`** — the protection for a
  person who erroneously but in good faith believed they had become a
  limited partner.
- **`lpcontrol_diligent_effort_withdrawal_right`** — the withdrawal
  right when a diligent good-faith correction effort fails.

## Genuine findings

- **A pivot directly signposted by an existing clause's own honest
  disclosure**: the topic was identified not by a fresh search but by
  reading the existing corpus's own admission of an unresearched gap —
  a direct, positive example of the disclosure discipline this project
  maintains paying off in guiding future work.
- **A disclosed, deliberate choice not to independently verify
  cross-referenced statutes**: the winding-up/filings clause's gap
  explicitly discloses that Corp. Code §§15908.03, 15902.05, and
  15902.04(a)(4)/(a)(6), cross-referenced by §15903.03(b)(6)-(7), were
  not independently fetched or verified.
- **A verified non-issue flagged proactively by the agent**: the agent
  disclosed splitting one continuous sentence of §15903.06(c) across
  two adjacent citations due to a raw HTML line-wrap in the source
  markup; independently re-fetching the source confirmed the two
  quoted fragments form one seamless, unbroken sentence with no actual
  gap or omission between them — a non-issue, but disclosed rather than
  silently handled.
- **A disclosed, deliberate choice not to cite unverified case law**:
  no case law was researched for any clause; the document rests
  entirely on statute text.

## Honest gap(s) disclosed

This document does not restate the underlying "participates in
control" liability test itself (addressed in the existing companion
document's `lpform_lp_liability_shield` clause), does not determine
whether any specific person's role or conduct falls within a listed
safe-harbor category, does not quantify how much consulting, advising,
or credit activity might combine with other conduct to support a
control finding, does not restate quorum/notice/voting-threshold rules
for partner meetings, does not independently verify the cross-
referenced winding-up and filing statutes, does not enumerate every
other statutory right or power the residual catch-all might reach,
does not define "diligent effort in good faith," and does not address
liability already incurred under §15903.06(b) before a correcting or
withdrawal filing.

## Method

Fetched Corp. Code §§15903.03 and 15903.06 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical.
CourtListener was not attempted for this narrow statutory-safe-harbor
topic; no case law was used or fabricated. All 21 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
one-hundred-and-seventy-second fetch (a new distinct curl User-Agent
string, "Groundtruth-172ndVerify-LPControlSafeHarbor/1.0") of both
sections — all 21 citation instances confirmed clean on direct
normalized-whitespace substring match. The flagged §15903.06(c) split
was specifically inspected in context and confirmed to form one
continuous, unbroken sentence in the source with no gap between the
two quoted fragments. The safe-harbor introductory clause, all
thirteen enumerated safe-harbor categories, and the good-faith-
erroneous-investor and diligent-effort-withdrawal provisions were all
independently reconfirmed present in the freshly fetched text.

## Verification

- Both primary sources fetched twice independently by the research
  agent with distinct User-Agent strings, plus a one-hundred-and-
  seventy-second independent fetch during integration review; all 21
  citation instances confirmed clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean. The specific
  split-sentence citation pair was inspected and confirmed to
  represent one continuous source sentence, not an ellipsis-stitching
  or improper truncation.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `lpcontrol_` prefix has zero collisions. Independently
  confirmed the existing `lpform_lp_liability_shield` clause's own gap
  field discloses exactly the unresearched territory this new document
  now covers.
- Checked every citation's `case` field for emptiness — all 21
  populated with proper citation identifier strings.
- One new field id confirmed genuinely necessary and non-duplicative:
  `limitedPartnerName` — did not exist previously in the corpus under
  any name. Five other fields (`partnershipName`, `generalPartnerName`,
  `authorizedSignerName`, `dateSigned`, `cityState`) reused from the
  existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Limited Partner Control Safe Harbor — Information
  Sheet (`limited_partner_control_safe_harbor_info_sheet`), 10 clauses
  (8 authority + 2 drafting), in the Business Formation category. One
  new field: `limitedPartnerName`.
- Corpus: 4,107 → 4,117 clauses; 526 → 527 documents. First processed
  item of wave 126.
