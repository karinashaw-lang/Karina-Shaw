# Family Law, new document: Spousal / Community Liability for Debts — Information Sheet

## Why this document

Second processed item of wave 95 (Family Law slot). A scoping pass
confirmed Family Code §§ 910-916 (the general default statutory rules on
spousal/community debt liability to an outside creditor) had zero prior
coverage — grepped for "Fam. Code § 910," "§ 916," "spousal liability,"
and "premarital debt," with no hits. Confirmed non-duplication against
the existing Premarital Agreement document (which addresses contractual
reallocation of debt responsibility between spouses, not the statutory
default) and the existing Family Code §§ 2640/2641 reimbursement
documents (which address tracing separate-property contributions at
division, not third-party creditor liability).

## What this document covers

7 clauses: 2 drafting (intro/scope, acknowledgment) and 5 authority
clauses, citing Family Code §§ 910, 911, 912, 913, 914, and 916:

- **`spousaldebt_general_community_liability`** (§§ 910(a)-(b), 912) —
  the community estate's default liability for either spouse's debt
  incurred before or during marriage, extended to quasi-community
  property.
- **`spousaldebt_separate_property_liability`** (§ 913(a)-(b)) — the
  converse default rule: a spouse's separate property is liable only for
  that spouse's own debts, and mere joinder in an encumbrance doesn't
  change that.
- **`spousaldebt_nondebtor_earnings_protection`** (§ 911(a)) — the
  earnings-segregation exception protecting a spouse's earnings from the
  other spouse's premarital debt.
- **`spousaldebt_necessaries_exception`** (§ 914(a)-(b)) — the
  necessaries-of-life exception restoring personal liability, with its
  own reimbursement right.
- **`spousaldebt_postdivision_property`** (§ 916(a)-(b)) — what happens
  to this liability scheme after the community estate is divided in a
  dissolution or legal separation.

Family Code § 915 (support arrears treated as a premarital debt) was
deliberately excluded from scope by the research agent to keep the
document focused on the general debt-liability scheme rather than
support-specific rules — a scoping choice, not an oversight, though not
separately flagged inside the clauses themselves (noted here for the
record).

## Genuine findings

- **A disclosed, deliberate choice not to force case law**: the research
  agent identified Lezine v. Security Pacific Financial Services, Inc.,
  14 Cal.4th 56 (1996) as a candidate citation, then on reading the
  actual fetched opinion text determined it concerns former Civil Code
  § 5127 (spousal-consent requirements for encumbering community real
  property) — a management-and-control/transfer-consent question, not
  the §§ 910-916 debt-liability scheme this document covers. Confirmed
  no mention of "section 911" or the other cited sections in the opinion
  text. Rather than force a weak fit, the agent used no case law at all
  — a legitimate, disclosed choice; this document is purely statutory.
- Correctly identified and disclosed, section by section, which
  citations are subdivisions of the same enacted section (not
  independent sources of each other) versus which clauses address
  genuinely distinct statutory exceptions to each other's general rules
  (e.g., § 911's earnings protection as an exception to § 910's general
  community-liability rule; § 914's necessaries exception as an
  exception to § 913's separate-property protection).

## Honest gap(s) disclosed

Section 914 does not itself define "necessaries of life," and this
document does not supply one. Section 914(a)(2)'s own cross-reference to
Family Code § 4302 is named but not addressed. Section 914(c)-(d)'s
special statute-of-limitations rule if the debtor spouse dies is not
covered. Section 916(a)(3)'s judgment-enforcement mechanics are
paraphrased rather than separately quoted. Section 915 (support arrears
as a premarital debt) is out of scope entirely. This document does not
determine whether any specific debt, account, or item of property is
reachable by a creditor.

## Method

Fetched Family Code §§ 910, 911, 912, 913, 914, and 916 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. All 9 citation quotes across the 5 authority
clauses programmatically confirmed by the research agent as exact,
contiguous substrings (no ellipsis-joined quotes).

Independently re-verified during integration review via a sixty-ninth
fetch (a new distinct curl User-Agent string,
"Groundtruth-69thVerify-SpousalDebt/1.0") of all six sections — all 9
quotes confirmed clean on direct substring match after HTML stripping and
whitespace normalization, no extraction artifacts encountered.

## Verification

- All six Family Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a sixty-ninth
  independent fetch during integration review; all 9 quotes confirmed
  clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are subdivisions of the same enacted section
  versus genuinely distinct statutory exceptions to another clause's
  general rule; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  drafting-clause title ("Purpose and Scope of This Information Sheet")
  duplicates an existing corpus title — consistent with this project's
  established pattern of generic, reused boilerplate titles; clause IDs
  remain unique.
- Checked every citation's `case` field for emptiness — all 9 populated
  with proper citation identifier strings.
- No new fields required — all four fields (`party1Name`, `party2Name`,
  `dateSigned`, `cityState`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Spousal / Community Liability for Debts — Information
  Sheet (`spousal_community_debt_liability_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Family Law category. No new fields.
- Corpus: 3,201 → 3,208 clauses; 423 → 424 documents. Second processed
  item of wave 95.
