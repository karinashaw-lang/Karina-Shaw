# Granularity pass — deeper into LLC, Bylaws, and S Corp

## Why this pass

Direct follow-up to a specific question: whether the corpus could be made more
granular still, asked as an audit. The answer was yes, with concrete unexplored
sections named in each already-cited statute — this pass mines those sections.
Unlike the earlier granularity passes, which re-read the full text of statutes
already cited by an existing clause, most of this pass opens *new* sections of
the same statutory titles that no existing clause had touched at all.

## LLC Operating Agreements (both single- and multi-member)

- **Cal. Corp. Code § 17704.10** (records access) — neither LLC document said
  anything about a member's right to see the company's own records. **New
  clause** `llc_records_inspection`, added to both documents: the right to
  inspect and copy required records during normal business hours, and to get a
  copy of the company's tax returns, extending to a transferee (an heir, for
  example) as well as a member.
- **Cal. Corp. Code § 17707.01** (dissolution triggers, multi-member) — the
  existing `llc_mm_dissolution` clause is a drafting-only blank-fill clause that
  never stated what the law actually defaults to. **New clause**
  `llc_mm_dissolution_triggers`: the real statutory trigger set (an
  agreement-specified event, a 50%-or-more member vote, 90 consecutive days with
  no members, or judicial dissolution) — including a precise correction that the
  statutory default is "50 percent or more," not "more than 50%," a small but
  real difference from the multi-member document's own drafting default,
  flagged directly in the new clause's gap field.
- **Cal. Corp. Code § 17707.01(c)** (sole-member death, single-member) — the
  single most consequential fact missing from the single-member document: a
  common misconception is that a single-member LLC dissolves automatically when
  its sole owner dies. The statute says otherwise — the interest can pass to
  heirs by will or applicable law, who become substituted members without
  anyone's consent, so the 90-day no-members dissolution clock doesn't apply on
  a sole member's death. **New clause** `llc_death_succession`.
- **Cal. Corp. Code § 17704.09** (member fiduciary duties, multi-member) — never
  addressed anywhere in the corpus: what members actually owe each other. **New
  clause** `llc_mm_fiduciary_duties`, tied directly to the existing
  member-managed/manager-managed checkbox in `llc_mm_management`: in a
  member-managed LLC, each member owes duties of loyalty (account for
  company-derived property/profit/opportunities; don't deal adversely; don't
  compete) and care (a low bar — grossly negligent, reckless, intentional, or
  knowingly unlawful conduct only); in a manager-managed LLC those duties shift
  entirely to the manager, and a member who isn't also a manager owes no
  fiduciary duty at all solely by being a member.

## Corporate Bylaws

- **Cal. Corp. Code § 603** (written consent) — the document never said whether
  or how shareholders could act without a meeting, a mechanism small
  corporations use constantly. **New clause** `bylaws_written_consent`: the
  general majority-of-the-necessary-vote consent mechanism, plus a real,
  easy-to-miss exception — electing directors by written consent requires
  unanimous consent, not just a majority, except to fill a vacancy.
- **Cal. Corp. Code § 708** (cumulative voting) and **§ 303** (director
  removal) — neither was addressed before. **New clauses**
  `bylaws_cumulative_voting` (the default right to concentrate votes across
  fewer director candidates, and its notice precondition) and
  `bylaws_director_removal` (shareholders can remove a director without cause,
  but not if the votes against removal would have been enough to elect that
  director cumulatively — a protection that only makes sense once cumulative
  voting is itself on the page, which is why these two were added together).

## S Corporation Election Overview

- **26 U.S.C. § 1362(d)(1)** (revocation) — the document covered how to elect
  S status but never how to un-elect it. **New clause** `scorp_revocation`:
  revocation takes more-than-half of shares (not unanimous consent like the
  original election), with a real asymmetry worth flagging, plus the
  effective-date timing rule.
- **26 U.S.C. § 1362(d)(3)** (involuntary termination) — a genuinely
  surprising fact for any S corp that used to be a C corp: three consecutive
  years of both accumulated earnings and profits and more than 25% passive
  investment income terminates S status automatically, with no vote at all.
  **New clause** `scorp_termination_passive_income`.
- **26 U.S.C. § 1362(f)-(g)** (after termination) — **new clause**
  `scorp_after_termination` covering both the IRS's inadvertent-termination
  relief mechanism and the five-year bar on re-electing after a termination
  absent IRS consent.

## Verification

- All 21 new/added quotes checked against a second, independent fetch before
  writing (one initial California fetch failed with a connection reset and was
  retried successfully before use).
- One quote (`26 U.S.C. § 1362(f)`) was strengthened mid-draft: the first pass
  quoted only the "Secretary determines... inadvertent" fragment of a
  multi-part conditional, which reads as incomplete on its own; added a second
  citation quoting the actual operative "then... shall be treated as an S
  corporation" outcome clause so the relief itself, not just one precondition
  of it, is directly sourced.
- Every clause in every touched document's `clauseOrder` re-checked for `{{`
  leakage and duplicate titles across the full 38-document corpus — clean.
- Full-corpus regression run after all edits.

## Net changes

- LLC Operating Agreement (single-member): 9 → 11 clauses.
- LLC Operating Agreement (multi-member): 9 → 13 clauses.
- Corporate Bylaws: 12 → 15 clauses.
- S Corporation Election Overview: 7 → 10 clauses.
- Corpus total: 171 → 181 clauses.

## Where this stops being "more granular"

Asked directly whether more depth was available, the honest answer was yes —
in identifiable places, not just in the abstract — and this pass mined the
ones already named. Beyond this point, going further within these same four
documents would mean citing agency guidance rather than codified statute (IRS
guidance on what counts as "reasonable cause" for late elections or
"inadvertent" for terminated ones), which is a different tier of authority
that needs to be labeled as such rather than folded in as if it carried the
same weight as the U.S. Code or the California Corporations Code. That's a
real stopping point, not a budget one.
