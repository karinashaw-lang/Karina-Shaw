# Business Formation, new document: LLC Default Operating Rules — Information Sheet

## Why this document

Second and final processed item of wave 121 (Business Formation slot,
2×2 pattern). The agent's first candidate, the $800 minimum franchise
tax / first-year exemption, was found already substantially covered
across `articles_of_incorporation` and the existing LLC franchise-tax
clauses, so the agent pivoted away. It also ruled out preincorporation
share-subscription agreements (too narrow to sustain a full document)
and profession-specific professional-corporation requirements (too
close to the existing `professional_corporation_info_sheet`). The
chosen topic — what RULLCA's statutory default rules provide when an
LLC has no written operating agreement, or a written one is silent — is
a distinct legal question from the corpus's existing LLC operating
agreement drafting templates, which assume an agreement is being
actively created.

**A genuine, narrower duplication finding caught during integration
review**: one of the ten delivered clauses, `llcdefault_fiduciary_duties`,
substantially restated the same §17704.09 fiduciary-duty facts
(member-managed duty of loyalty/care, the manager-managed shift, and
the no-duty-solely-by-membership rule) already covered, in nearly
identical structure and near-identical sentence-level paraphrase, by
two existing clauses: `llc_mm_fiduciary_duties` (in the Multi-Member LLC
Operating Agreement document) and `founders_fiduciary_duties_by_entity`
(in the Founders' Agreement document). Personally confirmed the overlap
by reading both existing clause bodies directly and comparing them
sentence-by-sentence against the delivered clause. That one clause was
excluded from the merge; the other nine clauses were independently
confirmed non-duplicative (a broader corpus-wide search for §§
17701.02, 17701.10, 17701.11, 17701.12, and 17704.07 turned up only one
unrelated false-positive hit, a passing cross-reference inside an
existing Statement of Information clause).

## What this document covers

9 clauses: 2 drafting (declaration/scope, signature/certification) and
7 authority clauses, citing Cal. Corp. Code §§ 17701.02(s) (×2),
17701.10(a)-(e), 17701.11(b), 17701.12(d)(1)-(2), 17704.07(a),
(b)(2)-(5), (c)(1), (c)(5)-(6):

- **`llcdefault_operating_agreement_defined`** — an operating agreement
  can be oral, written, implied, or any combination; single-member
  agreements are enforceable; joining an LLC is deemed assent.
- **`llcdefault_statutory_gap_filling`** — the four subjects assigned to
  the operating agreement, and that the statute governs whatever it
  doesn't address.
- **`llcdefault_nonwaivable_floor`** — the non-waivable statutory floor
  (capacity to sue/be sued, duty of loyalty/care, good-faith
  obligation).
- **`llcdefault_written_agreement_required_for_some_variations`** —
  which statutory defaults can only be varied in a written agreement,
  and the informed-consent requirement for modifying fiduciary duties.
- **`llcdefault_management_and_voting`** — the default member-managed
  structure and its majority/unanimity voting thresholds.
- **`llcdefault_manager_managed_rules`** — the default rules if the LLC
  elects manager-management instead.
- **`llcdefault_filed_record_conflicts`** — how a conflict between a
  filed record and the operating agreement resolves, depending on who
  is asking.

## Genuine findings

- **A significant clause-level duplication caught during integration
  review, not by the research agent itself**: `llcdefault_fiduciary_duties`
  substantially restated statutory text and structure already covered
  by two existing clauses in two different documents. Rather than merge
  a redundant clause, only the nine genuinely novel clauses were merged;
  the document's `clauseOrder` was adjusted to remove the excluded
  clause.
- **A disclosed structural note**: the surviving
  `llcdefault_written_agreement_required_for_some_variations` clause
  still describes the written-only requirement for modifying fiduciary
  duties (a distinct fact — the procedural constraint on changing the
  default, not a restatement of the default duties themselves), so this
  document retains a genuine, non-duplicative connection to the
  fiduciary-duty topic without re-stating the duties' substantive
  content.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not supply an evidentiary standard for proving the
terms of an oral or implied operating agreement, does not define how
specific an informal agreement must be to count as "addressing" a
statutory subject, does not restate the full non-waivable list beyond
three representative items (the statute lists well over a dozen), does
not individually identify every provision restricted to written-only
variation (cited by cross-reference to other code sections rather than
described in the same sentence), does not define "ordinary course of
the activities" for voting-threshold purposes, does not restate the
detailed meeting/notice/quorum mechanics for manager-managed companies,
and does not define "reasonable reliance" for the filed-record-conflict
rule.

## Method

Fetched Cal. Corp. Code §§ 17701.02, 17701.10, 17701.11, 17701.12, and
17704.07 from leginfo.legislature.ca.gov, each fetched twice by the
research agent with two distinct User-Agent strings, confirmed
byte-identical. CourtListener's daily rate limit was already exhausted
on the agent's test call; no case law was used, a disclosed and
legitimate choice. All citation instances for the delivered clauses
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
one-hundred-and-fifty-ninth fetch (a new distinct curl User-Agent
string, "Groundtruth-159thVerify-LLCDefaultRules/1.0") of all five
sections — all 20 citation instances in the 9 merged clauses confirmed
clean on direct normalized-whitespace substring match, zero extraction
artifacts encountered. The broad operating-agreement definition, the
statutory gap-filling mechanism, the non-waivable floor, the
written-only variation list, the default voting thresholds, the
manager-managed rules, and the filed-record-conflict resolution were
all independently reconfirmed present in the freshly fetched text.

## Verification

- All five Corporations Code sections fetched twice independently by
  the research agent with distinct User-Agent strings, plus a
  one-hundred-and-fifty-ninth independent fetch during integration
  review; all 20 citation instances in the merged clauses confirmed
  clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `llcdefault_` prefix has zero collisions. Independently
  confirmed, by direct clause-body comparison, that
  `llcdefault_fiduciary_duties` substantially duplicated two existing
  clauses (`llc_mm_fiduciary_duties`, `founders_fiduciary_duties_by_entity`)
  and was excluded from the merge for that reason; independently
  reconfirmed the remaining nine clauses' underlying statutory sections
  do not appear elsewhere in the corpus (one unrelated false-positive
  hit found and ruled out).
- Checked every citation's `case` field for emptiness — all 20
  populated with proper citation identifier strings.
- No new fields required — all four fields (`preparerName`,
  `companyName`, `dateSigned`, `cityState`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: LLC Default Operating Rules — Information Sheet
  (`llc_default_operating_rules_info_sheet`), 9 clauses (7 authority +
  2 drafting), in the Business Formation category. No new fields. One
  of the ten clauses the research agent delivered
  (`llcdefault_fiduciary_duties`) was excluded from the merge as a
  substantial duplicate of existing corpus content (see Genuine
  findings, above).
- Corpus: 3,972 → 3,981 clauses; 513 → 514 documents. Second and final
  processed item of wave 121.

## Wave 121 summary

Wave 121 followed the established 2×2 pattern, targeting Confidentiality
& IP and Business Formation — the two categories tied lowest after wave
120's rotation and not touched in the two immediately preceding waves.
Both agents ran careful duplication-check passes before landing on
genuinely open topics: Intellectual Property License Bankruptcy
Protections (11 U.S.C. § 365(n), after ruling out five already-covered
candidates) and LLC Default Operating Rules (Cal. Corp. Code §
17701.01 et seq., after ruling out three already-covered or
too-narrow candidates). Each surfaced a genuine finding: a disclosed
choice to draw legislative-history facts from the Supreme Court's own
recitation rather than an independent primary fetch of the underlying
Fourth Circuit opinion (IP License Bankruptcy Protections), and a
clause-level duplication catch during integration review — one of ten
delivered clauses substantially restated fiduciary-duty content already
covered by two existing clauses in two different documents, and was
excluded from the merge (LLC Default Operating Rules). Per the
established alternation, wave 122 should return to a 1×4 pattern.
