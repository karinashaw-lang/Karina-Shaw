# Business Formation, new document: Director and Officer Indemnification — Information Sheet

## Why this document

Fourth and final new-document item of wave 91 (second Business Formation
slot). The research brief hypothesized indemnification appeared in the
existing Corporate Bylaws document only as "one incidental bullet," but the
agent found this was inaccurate — three verified, § 317-cited clauses
already exist there (`bylaws_indemnification` for the permissive
third-party standard, `bylaws_indemnification_mandatory` for the
success-on-the-merits rule, `bylaws_indemnification_advancement` for
expense advancement). Rather than treat this as full overlap and stop, the
agent applied this project's established "spin off a deeper single-topic
document" pattern (already used for the Duty-of-Care/§309 and
Director-Inspection/§1602 documents): six of § 317's ten subdivisions —
definitions, the full derivative-action standard, the approval procedure,
the statutory bars, non-exclusivity, and D&O insurance — had zero coverage
anywhere in the corpus, including two topics the brief explicitly asked
for (approval procedure, insurance). Confirmed a real, substantial,
non-duplicative gap alongside genuine partial prior coverage.

## What this document covers

7 new clauses (2 drafting, 5 authority) plus 3 reused existing clauses
from the Corporate Bylaws document, assembled by clause-ID reference into
a single 10-clause document, citing Corp. Code § 317(a), (c), (e), (h),
(i) (new) and § 317(b), (d), (f) (reused from Corporate Bylaws):

- **`doindemnify_definitions`** (§ 317(a)) — the statutory definitions of
  "agent," "proceeding," and "expenses."
- **`doindemnify_derivative_standard`** (§ 317(c)) — the different,
  narrower permissive standard for a derivative action (expenses only, no
  judgments/fines/settlements), distinguished from the third-party
  standard already covered by `bylaws_indemnification`.
- **`doindemnify_approval_procedure`** (§ 317(e)) — the four statutory
  methods for authorizing indemnification in a specific case
  (disinterested-director vote, independent counsel opinion, shareholder
  approval, or court application) — new coverage, quoted nowhere else in
  the corpus.
- **`doindemnify_bars`** (§ 317(h)) — the two statutory bars on
  indemnification (inconsistency with governing documents/agreements in
  effect at claim accrual, or with a court-imposed settlement condition).
- **`doindemnify_insurance`** (§ 317(i)) — the corporation's separate power
  to purchase D&O liability insurance, which can reach some liability the
  indemnification provisions would not permit covering directly.

## Genuine corrections and findings

- **A genuine correction to the task's own research premise**: the brief's
  assumption that indemnification was only lightly touched in the corpus
  was wrong — it is already a substantive 3-clause treatment. The agent
  corrected course by deliberately not re-quoting the already-verified
  subdivisions (b), (d), (f), and instead recommending clause-ID reuse
  (pulling `bylaws_indemnification`, `bylaws_indemnification_mandatory`,
  and `bylaws_indemnification_advancement` into this new document's
  `clauseOrder` by reference), consistent with this corpus's established
  practice of reusing clause IDs across multiple documents (e.g.,
  `at_will` already appears in 3 documents).
- Correctly distinguished the derivative-action standard from the
  third-party standard already covered elsewhere, and disclosed that
  § 317(c)'s further limitations beyond the introductory sentence (the
  bar on indemnifying someone adjudged liable absent a court determination,
  already quoted elsewhere; two additional settlement-without-court-
  approval bars, quoted nowhere) are not restated here.
- Correctly declined to independently fetch or verify Corp. Code § 204(a)(11)
  or § 207(f) — cross-referenced by § 317(g)/(i)/(j) — disclosing this as a
  genuine limitation rather than fabricating their content.
- Deliberately avoided reusing the corpus's existing `agentName` field id
  despite § 317's own "agent" terminology, since that id is already
  heavily overloaded elsewhere for "agent for service of process"/
  power-of-attorney contexts — used `directorName` instead to avoid
  confusion.

## Honest gap(s) disclosed

Section 317(g) (non-exclusivity — broader indemnification rights a
corporation's articles may authorize), the remainder of § 317(i) (captive-
insurer conditions), § 317(j) (the employee-benefit-plan carve-out and its
cross-reference to § 207(f)), and § 317(c)(2)-(3) (the two additional
derivative-action settlement bars) are named but not covered. No case law
was researched. This document does not determine whether any specific
director, officer, employee, or agent is entitled to indemnification or
insurance coverage for any specific proceeding, and does not itself
obligate the corporation to indemnify, advance expenses to, or insure
anyone.

## Method

Fetched Corp. Code § 317 from `leginfo.legislature.ca.gov`, fetched twice
by the research agent with two distinct User-Agent strings, confirmed
byte-identical. All 5 citation quotes across the 5 new authority clauses
programmatically confirmed as exact contiguous substrings ending at
sentence/clause boundaries (no ellipsis-joined or mid-word-truncated
quotes) — the agent's own self-report disclosed catching and fixing two
missing-space-before-parenthetical-marker defects before delivery,
confirmed already corrected on independent review. Independently
re-verified during integration review via a fifty-fifth fetch (a distinct
curl User-Agent string, "Groundtruth-55thVerify-DOIndemnify/1.0") of the
same section — all 5 quotes confirmed clean on direct substring match, no
further defects found.

## Verification

- The statutory section fetched twice independently by the research agent
  with distinct User-Agent strings, plus a fifty-fifth independent fetch
  during integration review; all 5 quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses that all citations are subdivisions of the same statutory
  section (§ 317), and cross-references which of the corpus's existing
  Corporate Bylaws clauses cite the other subdivisions; correct as
  delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either for the 7 new clauses).
- Checked every citation's `case` field for emptiness — all 5 populated
  with proper citation identifier strings.
- Confirmed the three reused clause IDs (`bylaws_indemnification`,
  `bylaws_indemnification_mandatory`, `bylaws_indemnification_advancement`)
  exist in the corpus and their `{{companyName}}` placeholder resolves
  against this new document's own `fields` array.
- No new fields required — all five fields (`companyName`,
  `directorName`, `preparerName`, `dateSigned`, `cityState`) reused from
  the existing corpus.
- Corpus-wide validation (placeholder resolution against document
  `fields` — including for reused cross-document clauses, dup clause ids,
  dup doc ids, `{{}}` leaks, schema check, empty-case-field check) run
  across the full updated corpus — clean.

## Net changes

- New document: Director and Officer Indemnification — Information Sheet
  (`director_officer_indemnification_info_sheet`), 10 clauses total (7 new
  — 5 authority + 2 drafting — plus 3 reused from the existing Corporate
  Bylaws document), in the Business Formation category. No new fields.
- Corpus: 3,102 → 3,109 clauses (7 new); 409 → 410 documents. Fourth and
  final new-document item of wave 91.

## Wave 91 summary

Wave 91 closes at 3,109 clauses / 410 documents (from 3,086/407 at this
wave's start): a gap-fix adding two Rev. & Tax. Code § 23153 subdivisions
to the existing Articles of Incorporation document, Criminal Trade Secret
Theft (Confidentiality & IP), Sale-of-Business and Dissolution Noncompete
Exceptions (Confidentiality & IP), and Director and Officer Indemnification
(Business Formation) — following the established 2×2 pattern, with one
slot resolved as a gap-fix rather than a full new document after genuine
overlap analysis, matching this project's established practice of
preferring an honest gap-fix over a padded, mostly-duplicative new
document. This wave's integration review found no delivered-quote defects
requiring correction beyond what the research agents themselves caught and
fixed before delivery — a first for this window's waves — while still
independently re-confirming several notable genuine findings (the
"capital stockholder" statutory drafting inconsistency; the textually
identical § 499c/CUTSA trade-secret definitions). Wave 92 should return to
a 1×4 pattern across four categories.
