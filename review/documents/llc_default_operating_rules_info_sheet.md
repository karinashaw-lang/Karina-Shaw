# Research file: `llc_default_operating_rules_info_sheet`

MVP_FINISH_VERIFY_SHARPEN.md item 1.5. Wedge document. Reviewed
2026-11-25 against `data/documents.json`/`data/clauses.json` as they
stand today (9 clauses: `llcdefault_declaration`,
`llcdefault_operating_agreement_defined`,
`llcdefault_statutory_gap_filling`, `llcdefault_nonwaivable_floor`,
`llcdefault_written_agreement_required_for_some_variations`,
`llcdefault_management_and_voting`, `llcdefault_manager_managed_rules`,
`llcdefault_filed_record_conflicts`, `llcdefault_ack`; 7 of 9 are
`kind: authority`, `status: verified`, checked 2026-09-06 or
2026-11-03).

## 1. Governing California law

California's Revised Uniform Limited Liability Company Act (RULLCA),
Cal. Corp. Code § 17701.01 et seq. The document's existing citations
were independently re-fetched (via law.onecle.com, since
leginfo.legislature.ca.gov and law.justia.com both returned bot-
challenge pages to this session's fetch, and codes.findlaw.com 403'd)
and every quoted sentence matches the statute's current text exactly:

- § 17701.02(s) — "operating agreement" definition (oral/record/
  implied, enforceable with a sole member).
- § 17701.10(a)-(b) — the four subjects the operating agreement
  governs; the statute fills any gap.
- § 17701.10(c) — the non-waivable floor (confirmed full text below).
- § 17701.10(d)-(e) — written-agreement-only variations and the
  fiduciary-duty informed-consent requirement.
- § 17704.07(a)-(c) — member-managed default, voting thresholds,
  manager-managed default rules.
- § 17701.12(d) — filed-record-vs-operating-agreement conflict rule.

All current law; § 17701.10's most recent amendment is Stats. 2015,
Ch. 775 (AB 506), effective January 1, 2016 — no later amendment
found (see §5).

## 2. Elements California commonly attaches that this document omits

**Real finding, not disclosed anywhere in the document or its own gap
text:** California's default rule for how profits, losses, and
interim distributions are split among members when the operating
agreement is silent is **not based on ownership percentage or equal
per-capita shares** — it is based on the relative value of each
member's actual contributions:

> Cal. Corp. Code § 17704.04(a): "If the operating agreement does not
> otherwise provide, distributions shall be on the basis of the
> value, as stated in the required records when the limited liability
> company decides to make the distribution, of the contributions the
> limited liability company has received from each member..."
>
> § 17704.04(e): "If the operating agreement does not otherwise
> provide, profits and losses shall be allocated in proportion to the
> value, as stated in the required records, of the contributions the
> limited liability company has received from each member."
> (https://law.onecle.com/california/corporations/17704.04.html,
> text amended by Stats. 2015, Ch. 775, Sec. 6, effective Jan. 1,
> 2016 — the current version.)

This is arguably the single most commonly-assumed-wrong default rule
in this whole topic (most people assume a 50/50 split for a two-
member LLC with no agreement, or a split matching stated "ownership
percentages" — the actual default tracks contributed value instead,
which only coincides with an assumed ownership percentage when
contributions and intended ownership happen to match). The document's
own title and description promise "the rules that govern a limited
liability company's internal affairs... when the members have no
written operating agreement" and already cover the comparably
important voting-threshold default — omitting the profit/loss/
distribution default while covering voting is an asymmetric, not a
deliberately scoped, omission. **This is a launch-blocking missing-
element finding under item 1.5's own rule.** Patch proposal in §8.

Two further, lower-priority omissions found (real default rules, but
ones the document's own stated scope — "voting thresholds, manager-
managed default rules, default fiduciary duties, the non-waivable
statutory floor, and which defaults can be changed only in writing" —
never promised to cover, so these read as a narrower scope choice
already implicit in the document's own description, not a launch
blocker, but worth adding in a later pass):

- § 17705.02(a)(3)(A): a transfer of a membership interest does not
  by itself give the transferee any right to vote or participate in
  management — only the transferor's distribution rights pass, by
  default.
- § 17706.02: the full list of events that dissociate a member (death,
  expulsion, bankruptcy in a member-managed LLC, etc.) is not
  summarized anywhere in this document (one item, death of a sole
  member, is covered instead in `llc_operating_agreement_single_member`'s
  own `llc_death_succession` clause).

## 3. Provisions California restricts or voids

Confirmed the non-waivable floor's completeness directly against the
statute's full current text (not just plausibility): § 17701.10(c)
actually lists **15** numbered items (1)-(15), and subdivision (d)
adds 4 more — the existing `llcdefault_nonwaivable_floor` clause
quotes only 3 of these ((c)(1), (c)(4), (c)(5)) and its own `gap` text
already says so accurately ("this sheet lists only a sample... Section
17701.10 enumerates well over a dozen additional items"). That
disclosure is correct and not an overstatement — confirmed, not a
finding.

## 4. Federal overlay

None specific to this document's topic (state-law default internal-
governance rules). Federal tax classification defaults are a
real, separate topic, already covered by `llc_tax_classification`/
`llc_tax_election_mechanics` in `llc_operating_agreement_single_member`,
not duplicated here — appropriate division of scope between the two
wedge documents, not a gap.

## 5. Changes in the last 24 months / effective Jan 1 or July 1, 2027

No amendment found to §§ 17701.10, 17701.12, 17704.04, or 17704.07
more recent than the 2015 AB 506 chapter (effective Jan. 1, 2016) —
checked via web search for any 2023-2026 amending bill; none surfaced.
No pending change effective January 1 or July 1, 2027 found for any
of these sections. Report this as "none found," not confirmed absent
by exhaustive search of every future legislative session — a targeted
search, not a guarantee.

## 6. Scope notes

- **Pre-2014 LLCs**: checked specifically, since RULLCA replaced the
  prior Beverly-Killea Act effective January 1, 2014, and this was a
  real candidate for an undisclosed scope gap. Resolved, not a gap:
  Cal. Corp. Code § 17713.04(a) sweeps in "all domestic limited
  liability companies existing on or after January 1, 2014... and to
  all actions taken by the managers or members of a limited liability
  company on or after that date" — RULLCA, and therefore this
  document's default rules, governs an existing pre-2014 LLC's current
  and future conduct. Only acts, votes, and contracts that actually
  occurred before January 1, 2014 are grandfathered under "prior law"
  (§ 17713.04(b)-(e)). This document is accurate for any LLC operating
  today regardless of its formation date.
- **Manager-managed election**: `llcdefault_management_and_voting`'s
  own wording ("unless the articles of organization contain the
  specific statement required to make it manager-managed instead")
  already correctly implies the real risk this review was checking
  for — an LLC that intended manager-management but never got the
  correct statement into its filed Articles of Organization remains
  member-managed by default under § 17704.07(a). Confirmed accurate
  as written; not a new finding.

## 7. Does the interview capture the facts the clauses depend on?

This document's `fields` are `preparerName`, `companyName` (optional),
`dateSigned`, `cityState` — no field asks whether the reader's LLC
actually has an operating agreement, is member- or manager-managed,
or was formed before or after 2014. That's consistent with what this
document actually is (a general reference sheet on what the statute
says, explicitly "read on its own, without it filled in," per
`llcdefault_declaration`'s own body) rather than a document that
claims to describe one specific LLC's actual situation — every clause
states the statutory rule conditionally ("absent a contrary
election," "if the operating agreement does not otherwise provide"),
never asserts which branch applies to the reader. Not a gap for this
document's own stated purpose.

## 8. Patch proposal (owner approval needed before this is a launch blocker is resolved)

Add one new `kind: authority` clause to `data/clauses.json`, inserted
into `llc_default_operating_rules_info_sheet`'s `clauseOrder` after
`llcdefault_management_and_voting` (same topic family: what happens
with no agreement, by analogy to the voting-rights clause already
there) and before `llcdefault_manager_managed_rules`:

```
id: llcdefault_distributions_and_allocations (suggested)
title: "The Default Profit, Loss, and Distribution Rule"
kind: authority
body (suggested): "California's LLC statute does not default to
  splitting profits, losses, or distributions equally among members,
  or according to any stated ownership percentage. Absent a contrary
  provision in the operating agreement, distributions before
  dissolution are made, and profits and losses are allocated, in
  proportion to the value of each member's actual contributions to
  the company, not in proportion to membership interest or an equal
  per-member share. A person has no right to any interim distribution
  at all unless the company decides to make one, and -- unless the
  articles of organization or a written operating agreement says
  otherwise -- a member who dissociates is not entitled to a
  distribution simply because of the dissociation."
citations:
  - Cal. Corp. Code § 17704.04(a) (distributions default to value of
    contributions) — https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CORP&sectionNum=17704.04.
  - Cal. Corp. Code § 17704.04(e) (profit/loss allocation default,
    same basis) — same URL.
  - Cal. Corp. Code § 17704.04(b) (no right to an interim distribution
    absent a company decision to make one; dissociation doesn't by
    itself entitle a distribution) — same URL.
gap (suggested): "This rule can produce a different split than many
  members assume if their actual capital contributions don't match
  what they consider their 'ownership percentage' to be -- those are
  legally two different things unless the operating agreement ties
  them together. The statute's own 'value... of the contributions...
  as stated in the required records' standard also presumes the
  company is actually keeping the records (Section 17701.13) that
  would state that value; this sheet doesn't address what happens
  if those records were never kept."
```

This is a proposal, not an edit — `data/clauses.json` was not changed
by this review. Citation URLs above were format-matched to this
corpus's existing `leginfo.legislature.ca.gov` convention for this
same statute family (used throughout the document's other clauses),
even though this session's own fetch of that domain returned a bot
challenge page and the quoted text above was independently confirmed
against law.onecle.com's mirror instead — the same primary statute,
re-hosted, not a secondary summary.

## Verdict

One real, launch-blocking missing-element finding (§2, patch proposed
in §8) — needs owner sign-off before this wedge document's page
publishes, per item 1.5's own rule. Everything else checked (citation
accuracy, non-waivable-floor completeness, federal overlay, recency,
pre-2014 scope, manager-managed-election scope, interview-fact
capture) came back clean; reported here as ruled-out, not left
unchecked.
