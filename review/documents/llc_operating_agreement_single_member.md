# Research file: `llc_operating_agreement_single_member` — Single-Member LLC Operating Agreement

MVP_FINISH_VERIFY_SHARPEN.md item 1.5. Wedge document (the flagship of
the 7-document single-member-LLC-formation cluster — see
`LAUNCH_SET_PROPOSAL.md` §2). Sourced findings only; this is a
legal-research record, not advice, matching the rest of this corpus's
"inform, never advise" standard.

Current clauseOrder (read directly from `data/documents.json` and
`data/clauses.json`, not assumed): `llc_formation_statement`,
`llc_tax_classification`, `llc_tax_election_mechanics`,
`llc_liability_shield`, `llc_records_inspection`,
`llc_capital_contribution`, `llc_management`, `llc_distributions`,
`llc_dissolution`, `llc_death_succession`, `llc_ack`. Fields:
`companyName`, `memberName`, `stateOfFormation`.

## 1. Governing California law

California Revised Uniform Limited Liability Company Act (RULLCA),
Cal. Corp. Code Title 2.6, § 17701.01 et seq. The document's own
citations (already independently checked per their `checkedDate`
fields) map onto:

- **Liability shield** — Cal. Corp. Code § 17703.04(a)/(b):
  `llc_liability_shield`.
- **Records/tax-return access** — § 17704.10(b): `llc_records_inspection`.
- **Death and heir succession** — § 17707.01(c): `llc_death_succession`.
- **Federal tax classification** — 26 C.F.R. § 301.7701-3(b)(1)/(c)(1):
  `llc_tax_classification`, `llc_tax_election_mechanics`.

Additional controlling sections relevant to this document that it does
**not** currently cite, confirmed via Justia/FindLaw/public.law copies
of the current code text (cross-checking several independent mirrors
since this fork could not reach leginfo.legislature.ca.gov directly —
flagged honestly, not treated as a substitute for the primary source):

- **§ 17704.07** — default management rules (a member-managed LLC's
  members have equal rights in management unless the operating
  agreement says otherwise).
- **§ 17704.09** — member fiduciary duties in a member-managed LLC:
  subdivisions (b)/(c) set the duties of loyalty and care; subdivision
  (d) imposes a contractual obligation of good faith and fair dealing.
- **§ 17701.10** — what an operating agreement can and cannot change,
  including the non-waivable floor around § 17704.09's duties (see §3
  below).
- **§ 17704.01** — how a member is admitted, including the distinct
  rule for an LLC formed to have only one member.

## 2. Elements California commonly attaches that this document's clauseOrder omits

**Real finding — fiduciary duties and the admission of a later member
are both entirely absent.** Nothing in the current 11 clauses
mentions § 17704.09's duties of loyalty, care, or good faith/fair
dealing, or what happens if this sole-member LLC later admits a second
member. Research (web search against Justia/public.law code mirrors,
since CourtListener's own index doesn't carry statute text and this
fork could not reach leginfo.legislature.ca.gov directly) confirms:

- A true single-member LLC has no *other* member to owe § 17704.09's
  duties to in practice, which is likely why this corpus's own
  authors treated it as moot and left it out — a defensible choice,
  not an oversight, *as long as the LLC stays single-member*.
- But standard California single-member operating agreement practice
  (confirmed against a published template, ILRC's CA single-member
  operating agreement form) **does** include an admission-of-
  additional-members provision — typically requiring the sole
  member's written consent *and* an amendment or new operating
  agreement before any additional member is admitted. This document
  has no such provision. Once a second member is actually admitted,
  § 17704.09's duties stop being moot, and this agreement gives no
  notice of that or any transition mechanism.
- `llc_management`'s current body ("{{memberName}} has full authority
  ... as its sole member") implicitly assumes the sole-member
  structure is permanent. It does not say what happens, or what this
  agreement no longer covers, if that assumption stops holding.

This is a genuine missing-element finding, not a stylistic nitpick. See
§8 for a patch proposal.

## 3. Provisions California restricts or voids

Cal. Corp. Code § 17701.10, read together with § 17704.09, sets a real
non-waivable floor (confirmed via the same code-mirror cross-check as
§2, not independently verified against leginfo.legislature.ca.gov by
this fork — flagged, not silently assumed primary-source-confirmed):

- The **duty of loyalty** (§ 17704.09(b)) cannot be eliminated
  entirely, though an operating agreement may identify specific
  categories of activity that don't violate it, if the restriction
  isn't manifestly unreasonable.
- The **contractual obligation of good faith and fair dealing**
  (§ 17704.09(d)) **cannot be eliminated** by the operating agreement
  at all — only the standards for measuring it may be set, and only if
  not manifestly unreasonable.
- The **duty of care** can be reduced by the operating agreement, but
  not unreasonably so.

This document's current clauses don't attempt to waive any of these —
there is no waiver language anywhere in `llc_management` or elsewhere
that would risk conflicting with this floor. The finding in §2 is an
omission (the document says nothing about these duties at all), not a
restricted/void provision actually present in the document today.

## 4. Federal overlay

Already deep on tax classification (two authority clauses,
`llc_tax_classification`/`llc_tax_election_mechanics`, independently
verified against 26 C.F.R. § 301.7701-3). No other federal statute
specifically governs a single-member LLC's *internal* operating
agreement the way RULLCA does at the state level — ERISA applies only
if the LLC has an employee benefit plan, which is outside this
document's scope (it has no employees/benefits provisions at all, and
shouldn't need any for a sole-member-with-no-employees document).

## 5. Changes in the last 24 months / effective Jan 1 or Jul 1, 2027

No chaptered amendment to RULLCA's management, distribution,
dissolution, or liability-shield provisions was found in the last 24
months. One pending bill is worth monitoring, not treating as a
blocker: **AB 683 (2025–2026 session)**, which would add a new
§ 17702.08 to the Corporations Code. As of the most recent search
result found, it passed the Assembly 70–0 (January 29, 2026) and was
amended in the Senate on May 28, 2026, then re-referred to Senate
Judiciary — not yet chaptered as of this file's writing. Available
sources only describe a state-mandate-reimbursement clause attached to
it, not its substantive content, so this file does not claim to know
what § 17702.08 will actually say. Re-check before relying on this
document for current-content claims closer to any effective date.

## 6. Scope notes

- **Multi-member LLCs**: not this document's job — `llc_operating_agreement_multi_member`
  covers that path (confirmed to exist as a separate document in
  `data/documents.json`). This document assumes exactly one member
  throughout and should not be used once a second member exists —
  see §2's finding, which is exactly the gap in saying so.
- **Professional LLCs**: California generally does not allow licensed
  professionals (law, medicine, accounting, etc.) to use an ordinary
  LLC for their practice — this document doesn't address professional-
  services restrictions at all, and shouldn't be assumed to fit that
  case.
- **Manager-managed election**: `llc_management`'s current body
  assumes member-management (the sole member runs everything
  directly) and never mentions the alternative of electing
  manager-management instead. `llc_default_operating_rules_info_sheet`
  (a separate wedge document) is where this corpus explains that
  choice in depth — cross-referenced here rather than duplicated, per
  this item's own instruction not to re-derive research another
  document file already owns.
- **Series LLCs**: California's RULLCA does not recognize series LLCs
  (a single filing creating multiple internally-siloed "series") the
  way Delaware and some other states do. This document is a single,
  ordinary LLC's operating agreement and does not fit a series
  structure.

## 7. Does the interview capture the facts the clauses depend on?

**Real finding — `stateOfFormation` lets a buyer pick a state the
document's own citations don't match, with the default placeholder
making the mismatch worse, not better.** The `stateOfFormation` field
is free-text/state-picker with **no actual constraint to California**
— its own `placeholder`/`example` value in `data/documents.json` is
literally `"Delaware"`, not California. `llc_formation_statement`'s
body uses `{{stateOfFormation}}` directly ("organized under the laws
of {{stateOfFormation}}"), so a buyer who enters, say, Delaware or
Texas gets a document that says their LLC is organized under that
state's law, while every single authority clause in the document
(`llc_liability_shield`, `llc_records_inspection`, `llc_death_succession`)
cites California statutes specifically — law that would not actually
govern an LLC formed somewhere else.

This is not a total, undisclosed gap: the generic
`classifyDocumentJurisdiction()`/`JURISDICTION_NOTICE` mechanism (built
this session, `supabase/functions/_shared/document_engine.mjs` and
`app.js`) pattern-matches this document's citations as California-only
and surfaces "This document's legal clauses are sourced primarily to
California law. Outside California, some of what it cites may not
apply." on every export and the verify page — so a buyer entering a
non-CA state is not left with zero warning. But that notice is
generic and document-wide; it doesn't specifically flag that the
buyer's own entered answer (`{{stateOfFormation}}`) is the exact thing
the notice is warning about. A buyer skimming past the notice could
still walk away with a document that internally contradicts itself
(says "Delaware" in one sentence, cites California in the next ten).

All other fields are satisfied correctly: `companyName` and
`memberName` are the only other `{{placeholders}}` used across the 11
clauses' bodies (confirmed by grepping every clause body above), and
both are collected. No clause assumes an effective date, a specific
contribution amount, or anything else the interview doesn't ask.

## 8. Patch proposals for owner approval

Not editing `data/clauses.json` or `data/documents.json` directly —
these are proposals, with citations, for sign-off.

**8a. New clause — fiduciary duties and admission of additional members
(addresses §2's finding).** Proposed new authority clause,
`llc_fiduciary_duties_and_admission`, placed after `llc_management`:

> Body: "As the sole member of {{companyName}}, {{memberName}} owes no
> fiduciary duty to any other member, because there is none. If
> {{companyName}} later admits an additional member, California law's
> duties of loyalty and care, and its non-waivable obligation of good
> faith and fair dealing, begin applying between members at that
> point. {{memberName}} agrees that no additional member will be
> admitted to {{companyName}} without {{memberName}}'s written consent
> and without first amending this agreement or adopting a new
> operating agreement to address the resulting multi-member
> structure."
>
> Citations: Cal. Corp. Code § 17704.09(b)-(d) (duties of loyalty,
> care, good faith and fair dealing — California Legislative
> Information text,
> https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CORP&sectionNum=17704.09.);
> Cal. Corp. Code § 17701.10 (what an operating agreement may and may
> not change — California Legislative Information text,
> https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CORP&sectionNum=17701.10.).
>
> **Before adopting:** this fork could not independently fetch and
> re-confirm these two sections' exact current text directly against
> leginfo.legislature.ca.gov (network access was unavailable to this
> fork specifically — see each section's own note above); the
> corpus's own citation-recheck tooling (`tools/recheck_findings.py`
> or equivalent) should do that confirmation pass before this clause
> is actually added, the same way every existing citation in this
> corpus already has been.

**8b. Sharper, field-specific notice for `stateOfFormation` (addresses
§7's finding).** Rather than relying solely on the generic
document-wide jurisdiction notice, consider either (i) restricting
`stateOfFormation` to California only for this specific document
(simplest fix — this corpus's stated scope is California self-help
documents, and this document's authority clauses are all CA-specific
regardless of what the field allows today), or (ii) adding a
conditional note to `llc_formation_statement` itself when
`{{stateOfFormation}}` is not California, naming the specific mismatch
rather than relying on the generic notice alone. Left as the owner's
choice between the two, not decided here — (i) is the lower-effort,
lower-risk option given this product's stated California-only scope.

## Launch-blocker determination

Per this item's own rule ("Any missing-element finding on a wedge
document is a launch blocker"): **§2's finding (no fiduciary-
duties/admission-of-members provision) is a real missing element and
is flagged as a blocker pending owner review of patch 8a.** §7's
finding is **not** treated as a hard blocker, because a real,
already-shipping disclosure mechanism (the jurisdiction notice) already
covers the risk generically — but 8b's tightening is recommended, not
optional, before this document is treated as fully resolved for launch
by this file's own standard.
