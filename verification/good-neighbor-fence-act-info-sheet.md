# Real Estate, new document: Good Neighbor Fence Act — Information Sheet

## Why this document

Confirmed by grep that "good neighbor fence" had zero hits anywhere.
Read the Boundary Line Agreement document in full — confirmed it
covers only the common-law agreed-boundaries doctrine (resolving an
uncertain boundary LOCATION), never fence cost-sharing or notice.
Confirmed non-duplicative. Second of wave 75's four documents.

## What this document covers

7 clauses: 2 drafting (purpose, 30-day notice/signature) and 5
authority clauses, citing Cal. Civ. Code § 841(a), (b)(1)-(4), and
(c)(1)-(2):

- **`goodneighborfence_presumption`** (§ 841(a), (b)(1)) — the
  presumption of equal benefit and equal cost responsibility for a
  boundary fence, displaceable only by the landowners' own written
  agreement.
- **`goodneighborfence_notice_requirement`** (§ 841(b)(2)) — the
  30-day prior written notice requirement and its exact required
  content (presumption notification, problem description, proposed
  solution, estimated cost, cost-sharing approach, timeline).
- **`goodneighborfence_rebuttal_factors`** (§ 841(b)(3)) — the
  preponderance-of-the-evidence "unjust" standard and the five
  enumerated factors a court considers.
- **`goodneighborfence_dispute_recourse`** — **a key finding**:
  precisely states what the statute DOES provide once the presumption
  is rebutted (a discretionary reduced-or-no-contribution order) and
  explicitly discloses what it does NOT address (a non-responding
  landowner, which specific court has jurisdiction, any required
  mediation step) — an honest disclosure of statutory silence rather
  than an invented mechanism.
- **`goodneighborfence_definitions`** (§ 841(c)(1)-(2)) — the
  statute's own "landowner" (excluding public entities) and
  "adjoining" definitions, plus confirmation the statute never defines
  "fence" or uses the phrase "good neighbor fence."

## Genuine corrections and findings

- **The central finding**: confirmed the statute's only stated
  disagreement-resolution mechanism is a court's discretionary
  cost-reduction order once the presumption is rebutted — and
  correctly declined to invent a small-claims-court venue, a
  non-response consequence, or a mediation requirement the statute's
  own text does not state, rather than assuming a generic dispute-
  resolution process applies.
- Confirmed "good neighbor fence" is a popular, non-statutory label —
  the phrase never appears in § 841's own text — disclosed honestly
  rather than presented as an official statutory title.
- Confirmed the statute's own "landowner" definition excludes public
  entities (cities, counties, districts) — a precise, easy-to-overclaim
  scope limitation verified from the text rather than assumed to cover
  every adjoining owner.
- Confirmed the presumption applies automatically without requiring
  the landowners to first enter into any agreement, and can be
  displaced only by their own written agreement or by rebutting it
  under the statutory factors — not by informal disagreement alone.

## Honest gap disclosed

The statute's own text does not define "fence." No criminal or code-
enforcement consequence for noncompliance appears in the statute's
text — kept strictly to the civil, private-dispute framing. Delivery
method for the 30-day notice is not separately prescribed by the
statute.

## Method

Fetched Cal. Civ. Code § 841 from `leginfo.legislature.ca.gov` via
curl (through the sandboxed proxy), twice with distinct User-Agent
strings, confirmed byte-identical (matching MD5 hashes) after
whitespace normalization. All 7 citation quotes across the 5 authority
clauses programmatically confirmed as exact substrings of the
confirmed text. Independently re-verified during integration review
via a third fetch (Safari/macOS User-Agent) — all 7 quotes confirmed
clean.

## Verification

- Statutory section fetched twice independently by the research agent
  with distinct User-Agent strings (matching MD5 hashes), plus a third
  independent fetch during integration review; all quotes confirmed
  clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 841(a)/(b)(1) and
  § 841(c)(1)/(2) each correctly disclosed as subsections of the same
  section, not independent of one another; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- **Caught and fixed a field-mislabeling issue during integration**:
  the delivered clauses reused the existing `party1Name`/`party2Name`
  field ids, but those fields' stored labels ("First party's full
  legal name") come from marital-agreement documents — contextually
  mismatched for a real-estate fence dispute. Per this project's
  field-reuse-with-document-specific-label pattern, defined this
  document's own labels ("First landowner's full name," "Second
  (adjoining) landowner's full name") in its own `fields` array entry.
  `party1PropertyAddress`/`party2PropertyAddress` (reused from the
  Boundary Line Agreement document) and `noticeDate` were already
  contextually appropriate. Six new fields
  (`fenceLocationDescription`, `fenceProblemDescription`,
  `proposedSolution`, `estimatedCost`, `proposedCostSharing`,
  `proposedTimeline`) — checked against the full corpus's existing
  field ids first to confirm no equivalent field already existed.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: Good Neighbor Fence Act — Information Sheet
  (`good_neighbor_fence_act_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the Real Estate category. 6 new fields; 2 existing
  fields given document-specific labels.
- Corpus: 2,661 → 2,668 clauses; 348 → 349 documents. Second document
  of wave 75.
