# Research file: `statement_of_information`

**MVP_FINISH_VERIFY_SHARPEN.md item 1.5.** Wedge document (single-member
LLC formation cluster). Reviewed against `data/documents.json`/
`data/clauses.json` as currently committed (8 clauses, all already
`status: verified` with `checkedDate: 2026-09-02`, except the two
`drafting`-kind clauses `soi_declaration` and
`soi_current_information_worksheet`, which carry no citations and need
none).

## 1. Governing California law

Confirmed directly against the current statutory text (checked today,
not assumed from the existing `checkedDate`):

- **Corporations:** Cal. Corp. Code § 1502 (initial/annual statement,
  90-day initial deadline, annual recurring cycle, required content,
  agent-for-service designation, no-change certification), § 2204
  (delinquency notice and FTB certification), § 2205 (suspension for
  sustained non-filing).
- **LLCs:** Cal. Corp. Code § 17702.09 (initial/biennial statement,
  parallel structure to § 1502 but a two-year cycle), § 17713.09
  (delinquency/certification), § 17713.10 (suspension).
- **Penalty:** Cal. Rev. & Tax. Code § 19141 ($250, triggered by either
  § 2204(a) or § 17713.09(a) certification) and § 23301 (the separate,
  tax-nonpayment suspension mechanism the suspension clause's own gap
  text already distinguishes from the filing-based one).

All of this matches what the existing clauses already cite, quote, and
disclose as scope limits. No drift found between the quoted statutory
text and the current, live text of each section.

## 2. Elements or notices California requires that this document's clauses omit

**None found.** The one candidate worth naming: SB 1201 (2023–2024
session) would have added a "beneficial owner" name-and-address
disclosure to both § 1502 and § 17702.09's required content, effective
January 1, 2026 — if it had passed. It did not. Multiple sources
(Hanson Bridgett's 2024 coverage, CalMatters' Digital Democracy bill
tracker) confirm it passed the Senate in May 2024 and died without an
Assembly vote before the legislative session closed; California has no
beneficial-ownership disclosure requirement in its Statement of
Information today. The existing clauses correctly make no mention of
it. Worth a forward-looking note only: bills of this shape get
reintroduced, so this is worth rechecking on a normal re-verification
cadence, not a reason to change anything now.

No other required-content element (signature-adjacent requirements,
business-license fields, or similar) turned up in the current
statutory text beyond what §1502(a)/(b) and §17702.09(a) already list
and the clauses already quote in full.

## 3. Provisions California restricts or voids

Nothing beyond what's already covered. Agent-for-service eligibility
(who may be designated) is this corpus's separate
`agent_for_service_of_process_info_sheet` document's subject, correctly
not duplicated here. No provision found that would void a late or
defective statement's effect beyond the penalty/suspension consequences
already in `soi_penalty_for_nonfiling`/`soi_suspension_consequence`.

## 4. Federal overlay

`soi_declaration`'s own body text already hedges this correctly: it
flags federal beneficial-ownership reporting (Corporate Transparency
Act) as background context only, explicitly unverified by this
document's own research, "subject to significant federal litigation
and rulemaking changes." That hedge held up well — as of this review,
FinCEN's final rule (effective August 14, 2026) permanently exempts
all U.S.-formed entities and U.S. persons from CTA beneficial-ownership
reporting; only certain foreign entities (reporting companies that are
not U.S.-formed, certain public companies, banks, and a few other
categories) still report. This is a real, settled change since the
clause's 2026-09-02 checkedDate, but the clause's own wording never
asserted a position that's now wrong — it said "go check this
separately," which remains the correct instruction regardless of the
outcome. Not a gap; worth noting only because a future pass could
tighten the wording now that the uncertainty it was hedging against
has resolved (an editorial opportunity, not a correctness problem).

## 5. Changes in the last 24 months / effective January 1 or July 1, 2027

No substantive amendment to §1502, §17702.09, §2204, §2205, §17713.09,
§17713.10, §19141, or §23301 was found in the last 24 months. One
procedural (not content-of-filing) change: as of August 1, 2026, the
California Secretary of State requires bizfile Online "web User
Access" before an entity can file a Statement of Information online —
a how-you-file change, not a what-you-must-report change, and this
document is explicitly a prep worksheet rather than a filing
walkthrough (`soi_current_information_worksheet`'s own body says so),
so this doesn't call for a clause change. Nothing found effective
January 1 or July 1, 2027.

## 6. Scope notes

Confirmed, not just assumed: § 1502 sits in Division 1 (General
Corporation Law), which governs domestic stock corporations only.
Nonprofit corporations are formed and governed under Divisions 2
(nonprofit public benefit), 3 (nonprofit mutual benefit), and 4
(nonprofit religious) of the Corporations Code, each with its own
statement-of-information provisions and, per § 19141, a different
($50, not $250) penalty amount — already disclosed in
`soi_penalty_for_nonfiling`'s own gap text and correctly out of this
document's scope (this project's separate Nonprofit Articles of
Incorporation document is the right place for that). Limited
partnerships have their own, separate periodic-filing requirement
under a different part of the Corporations Code, not addressed here
and not claimed to be.

## 7. Does the interview capture the facts the clauses depend on?

Fields: `companyName`, `entityType`, `principalOfficeAddress`,
`agentName`, `agentAddress`, `keyPersonnelNames`,
`businessActivityDescription`, `statementFiledDate` (optional). Every
`{{placeholder}}` used across the 8 clauses resolves to one of these —
confirmed by reading each clause body directly, not assumed. One real
gap, but a minor, non-blocking one: the interview never asks whether
the filer is a corporation or an LLC as a structured choice — it's
inferred from the free-text `entityType` field. Since
`soi_required_content_corporation` and `soi_required_content_llc` both
render unconditionally in `clauseOrder` regardless of answers (neither
carries an `includeIf`), every buyer currently sees both entity types'
required-content clauses rather than only the one that applies to
them — a clarity issue, not a legal-accuracy one, since both sections
are independently correct. Not a launch blocker: the content is
accurate either way, and a reader who filled in "LLC" as `entityType`
can tell which section is theirs from context. Worth a low-priority UX
follow-up (an `includeIf` on `entityType` for those two clauses), not
a citation fix.

## Structural note (not a legal finding)

Unlike its three wedge siblings that are also "info sheet"-style
documents (`llc_annual_fee_info_sheet`'s `llcfee_ack`,
`ein_info_sheet`'s `ein_closing_signature`,
`agent_for_service_of_process_info_sheet`'s
`agentservice_closing_signature`), this document's `clauseOrder` ends
on `soi_suspension_consequence` with no closing signature/certification
clause. This is plausibly intentional — `soi_current_information_worksheet`
already states plainly that "this worksheet... is not itself the
Secretary of State's official statement form" — but it's an
inconsistency with its siblings worth a deliberate decision (keep as
intentional, since a signature block on a document that explicitly
isn't the filing itself could be confusing) rather than an oversight
nobody noticed. Flagging for the owner's awareness, not proposing a
change.

## Launch-blocker determination

**No launch-blocking gap found.** Every citation checked directly
against the current, live statutory text and confirmed accurate; the
one real legal-landscape change found (CTA/BOI's permanent domestic
exemption) only strengthens the existing clause's deliberately
hedged wording, and the one legislative near-miss checked (SB 1201)
confirmed dead, not law. This wedge document's file is written and has
no blocker to resolve before its page publishes.
