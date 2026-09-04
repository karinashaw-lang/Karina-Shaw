# Family Law, new document: California Indian Child Welfare Act (Cal-ICWA) — Information Sheet

## Why this document

This is a "deepen a flagged gap" document, not a fresh-topic pick.
The existing `thirdpartycustody_3041_detriment_standard` clause (in
the Third-Party Custody document) explicitly disclosed that Family
Code § 3041(e)'s cross-reference to the Indian Child Welfare Act's own
standard had never been independently verified. This document takes
up that flagged gap directly: it independently verifies and quotes
California's own Cal-ICWA implementing statutes, rather than restating
or resolving § 3041(e) itself.

Confirmed by grep that "Indian child," "ICWA," and "active efforts"
had zero prior hits in the corpus outside that one disclosure. Fourth
document of wave 77, filling the Family Law slot that opened up when
the genetic-testing-procedure research became a gap-fix into the
existing Paternity Action document instead of a new document.

## What this document covers

8 clauses: 2 drafting (purpose/declaration, signature block) and 6
authority clauses, citing Cal. Fam. Code §§ 177(a)-(c) and 170(c), and
Cal. Welf. & Inst. Code §§ 224.2(a), (c)-(d), (f), 224.3(a), (a)(1),
361.7(a)-(b), and 361.31(b)-(c):

- **`calicwa_scope`** (Fam. Code §§ 177(a)-(c), 170(c)) — which
  proceedings trigger Cal-ICWA's protections, including the important
  carve-out that an ordinary parent-vs-parent custody dispute is
  excluded unless it involves freeing a child from a parent's custody
  or control, or awarding custody to a nonparent over a parent's
  objection.
- **`calicwa_inquiry_duty`** (Welf. & Inst. Code § 224.2(a), (c)) —
  the affirmative, continuing duty to inquire whether a child is or
  may be an Indian child, including the on-the-record courtroom
  inquiry procedure.
- **`calicwa_reason_to_know_trigger`** (Welf. & Inst. Code § 224.2(d),
  (f)) — **a key finding**: the statute's own six specific, enumerated
  triggering circumstances for "reason to know" — not a vague or
  unconfirmed-suspicion standard — and the resulting notice duty.
- **`calicwa_notice_requirements`** (Welf. & Inst. Code § 224.3(a),
  (a)(1)) — the required notice's trigger, scope, recipients, and the
  registered/certified-mail delivery requirement.
- **`calicwa_active_efforts`** (Welf. & Inst. Code § 361.7(a)-(b)) —
  **the central finding**: the heightened "active efforts" standard
  (explicitly distinct from the otherwise-applicable "reasonable
  efforts" standard, per the statute's own "Notwithstanding Section
  361.5" language) required before an involuntary foster care
  placement or termination of parental rights involving an Indian
  child, and what the statute itself says "active efforts" requires.
- **`calicwa_placement_preferences`** (Welf. & Inst. Code § 361.31(b),
  (c)) — the statutory descending-priority placement hierarchy, for
  foster care/guardianship placements and for adoptive placements,
  explicitly disclosed as not absolute (a tribe's own order can take
  precedence, and a "good cause" departure is possible).

## Genuine corrections and findings

- **The central finding**: confirmed precisely from § 361.7(a)'s own
  "Notwithstanding Section 361.5" language that "active efforts" is a
  distinct, heightened standard from California's otherwise-applicable
  "reasonable efforts" standard — without claiming to have
  independently verified § 361.5's own text for direct comparison
  (honestly disclosed as unverified).
- Confirmed the "reason to know" trigger is defined by six specific,
  enumerated circumstances in § 224.2(d) — not a general impression or
  unconfirmed guess — correcting a natural assumption that the
  standard might be vaguer than it actually is.
- Confirmed Family Code § 170(c)'s carve-out for ordinary
  parent-vs-parent custody disputes precisely: the exclusion does NOT
  apply if the proceeding involves a petition to free the child from a
  parent's custody/control, or a grant of custody to a nonparent over
  a parent's objection — a real, non-obvious distinction within the
  statute's own text.
- Confirmed the placement-preference hierarchy is not absolute —
  disclosed the existence of the tribe's-own-order and "good cause"
  departure provisions (§ 361.31(d), (h)-(j)) without independently
  verifying or quoting their text, so the hierarchy isn't presented as
  more rigid than it is.
- Confirmed the notice-sending duty under § 224.3(a) falls on "the
  court, a social worker, or probation officer" who has reason to know,
  and the delivery-method requirement (registered or certified mail,
  return receipt requested) is a separate, additional requirement
  within the same section.

## Honest gap(s) disclosed

Welfare and Institutions Code §§ 300, 601, 602 (the underlying petition
types that trigger § 224.2's inquiry duty), § 224.2(b) and (e)-(k)
(when a county's own inquiry duty begins, the lower "reason to
believe" showing, a tribe's own determination, remote-participation
rights), § 224.3(a)(2)-(5) and the section's remaining subdivisions
(the tribal-chairperson service rule, Secretary of the Interior notice,
the notice's required content, and timing), § 361.5 (the baseline
"reasonable efforts" standard, not independently verified for direct
comparison to "active efforts"), § 361.7(c) and § 224.6 (the
qualified-expert-witness requirement and definition), § 361.31(d) and
(h)-(j) (tribal-order precedence and "good cause" departure), and 25
U.S.C. § 1903 and § 1912 of the federal Indian Child Welfare Act
(cross-referenced by the state statutes but not independently verified
or quoted) are all flagged as existing but not covered by this
document.

## Method

Fetched Cal. Fam. Code §§ 177 and 170, and Cal. Welf. & Inst. Code
§§ 224.2, 224.3, 361.7, and 361.31, from `leginfo.legislature.ca.gov`,
each section fetched twice by the research agent with distinct
User-Agent strings, confirmed byte-identical after whitespace
normalization. All 14 citation quotes across the 6 authority clauses
programmatically confirmed as exact contiguous substrings (no
ellipsis-joined quotes). Independently re-verified during integration
review via a third fetch (a distinct curl User-Agent string) of all
six sections — confirmed byte-identical (after whitespace
normalization) to the agent's own two fetches, and all 14 quotes
independently re-confirmed as exact contiguous substrings against that
third fetch.

## Verification

- Statutory sections fetched twice independently by the research agent
  with distinct User-Agent strings, plus a third independent fetch
  during integration review; all three fetches confirmed byte-identical
  after whitespace normalization; all 14 quotes confirmed clean against
  the third fetch.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — the § 177(a)/(b)/(c)
  triple citation, the § 224.2(a)/(c) pair, the § 224.2(d)/(f) pair,
  the § 224.3(a)/(a)(1) pair, the § 361.7(a)/(b) pair, and the
  § 361.31(b)/(c) pair are each correctly disclosed as not independent
  of one another (same statutory section); Fam. Code § 177 vs. § 170 is
  correctly disclosed as independent (separately numbered sections);
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- One new field required (`possibleTribeName`) — independently checked
  against the full corpus's existing field ids first, confirming no
  equivalent field already existed. Seven other fields (`petitionerName`,
  `childName`, `childDOB`, `relationshipToChild`, `dateSigned`,
  `cityState`, `countyOfFiling`) reused from the existing corpus (17,
  17, 11, 5, 146, 125, and 33 prior documents respectively); `petitionerName`
  and `relationshipToChild` given this document's own contextually
  appropriate labels ("Your full name" / "Your relationship to the
  child, if any") rather than reusing a mismatched prior label, per
  this project's established field-reuse-with-document-specific-label
  pattern.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: California Indian Child Welfare Act (Cal-ICWA) —
  Information Sheet (`california_indian_child_welfare_act_info_sheet`),
  8 clauses (6 authority + 2 drafting), in the Family Law category. 1
  new field.
- Corpus: 2,730 → 2,738 clauses; 358 → 359 documents. Fourth and final
  document of wave 77.

**Wave 77 complete**: 2,706 → 2,738 clauses (32 new); 355 → 359
documents (4 new: UCC-1 Financing Statement, California Corporate
Statutory Merger, Full Faith and Credit for Out-of-State Protective
Orders, and California Indian Child Welfare Act — plus one gap-fix,
genetic-testing procedure, added to the existing Paternity Action
document rather than shipping as a fifth document). Business Formation
+ Family Law, per the established strict-alternation pattern (wave 76
was 1×4; wave 78 should return to 1×4).
