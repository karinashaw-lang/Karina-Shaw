# Business Formation, new document: Corporation's Annual Report to Shareholders — Information Sheet

## Why this document

Second and final processed item of wave 129 (Business Formation slot,
2×2 pattern). The agent ruled out six candidates via specific
section-number and term greps before landing here: the minimum
franchise/annual tax (Rev. & Tax. Code §§17941, 23153, 17935, 17948),
business entity naming requirements (Corp. Code §§201, 17701.08),
worker cooperatives, partner default fiduciary duties (Corp. Code
§16404), and unclaimed property on dissolution were all confirmed
already substantively covered. The chosen topic — Corp. Code §1501's
board-initiated duty to send shareholders an annual financial report
— was confirmed genuinely open: the sole prior corpus hit on bare
"1501" traced to Labor Code's organ-donor-leave clause (a different
code, unrelated), and the specialized Benefit Corporation and Social
Purpose Corporation annual-report statutes already documented in this
corpus never state what the *general* §1501 duty requires of an
ordinary corporation. This is distinct from the corpus's existing
demand-driven shareholder/member records-inspection-rights document
(§§1600-1603) — §1501 obligates the board to act on its own
initiative, without a shareholder demand.

## What this document covers

11 clauses: 2 drafting (intro, signature) and 9 authority clauses,
citing Corp. Code §1501(a)(1) (two citations), (a)(2), (a)(3), (b),
(b)(1), (b)(2), (c) (two citations), (e), (f), (g):

- **`annrpt_core_duty_deadline`** — the board's affirmative 120-day
  duty and the report's minimum content.
- **`annrpt_electronic_transmission`** — the board-approved electronic
  delivery option.
- **`annrpt_timing_relative_to_meeting`** — the 15/35-day delivery
  window before the annual meeting.
- **`annrpt_small_corp_gaap_exception`** — the relaxed accounting
  standard for corporations with fewer than 100 holders of record.
- **`annrpt_related_party_transaction_disclosure`** — the
  >$40,000 related-party transaction disclosure for qualifying
  mid-size corporations.
- **`annrpt_indemnification_disclosure`** — the >$10,000
  indemnification disclosure.
- **`annrpt_shareholder_demand_rights`** — a shareholder's fallback
  demand right when no report was sent, plus the 5%-holder interim-
  statement right.
- **`annrpt_enforcement_and_fee_shifting`** — superior court
  enforcement and the discretionary fee-award remedy.
- **`annrpt_scope_domestic_and_foreign`** — the section's reach to
  domestic corporations and certain foreign corporations.

## Genuine findings

- **A disclosed, deliberate distinction from a related-but-distinct
  existing document**: the related-party-transaction and
  indemnification disclosure clauses each explicitly distinguish this
  reporting obligation from the corpus's separate Self-Dealing/
  Interested-Director document (§310 safe-harbor procedures) and
  Director and Officer Indemnification document (§317 substantive
  standards) — this is a reporting duty about transactions already
  approved or payments already made, not a procedure for validating
  them.
- **A disclosed, deliberate choice not to equate two different scope
  tests**: the scope clause's gap explicitly declines to equate
  §1501(g)'s foreign-corporation trigger with the corpus's existing
  §2115 pseudo-foreign-corporation document's different multi-factor
  test, noting that document was not re-examined as part of this
  clause.
- **A disclosed, deliberate choice not to independently fetch several
  cross-referenced sections**: multiple gap fields disclose that
  Section 20 (electronic transmission definition), Section 114, 605,
  600, 2200, and Sections 13/12(g)(2)/153 of the Securities Exchange
  Act were not independently fetched or verified — each named
  specifically rather than glossed over.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on statute text alone, and the fee-
  shifting clause specifically flags the undefined "without
  justification" standard as one case law would normally elaborate.

## Honest gap(s) disclosed

This document does not independently examine Section 20's electronic-
transmission definition, Section 114's general financial-statement
definition, Section 605's "holder of record" determination method,
Section 600's annual-meeting requirement, Section 2200's penalty
provision, or the cross-referenced federal Exchange Act sections, does
not restate the remainder of subdivision (c) (30-day delivery and
12-month retention) or subdivision (d)'s accountant's-report
requirement for quarterly statements, does not predict how a court
would apply the "without justification" fee-shifting standard, and
does not claim §1501(g)'s foreign-corporation scope test is identical
to the corpus's separate §2115 pseudo-foreign-corporation test.

## Method

Fetched Corp. Code §1501 from leginfo.legislature.ca.gov, fetched
twice by the research agent with two distinct User-Agent strings,
confirmed byte-identical after whitespace normalization (the two
fetches differed only in dynamic debug-session timestamps unrelated to
the statutory text). CourtListener's daily quota was already exhausted
(HTTP 429) on the agent's test call; no case law was used or
fabricated. All 13 citation instances programmatically confirmed by
the research agent as exact, contiguous substrings — the agent also
disclosed correcting two quotes that initially used straight
apostrophes where the source uses curly apostrophes, consistent with
the corpus's established practice of preserving source punctuation
exactly.

Independently re-verified during integration review via a
one-hundred-and-eighty-third fetch (a new distinct curl User-Agent
string, "Groundtruth-183rdVerify-AnnualReportShareholders/1.0") of
§1501 — one transient connection-reset failure was resolved with a
backoff retry, the same known transient-relay issue independently
encountered and resolved elsewhere in this project. All 13 citation
instances confirmed clean on direct normalized-whitespace substring
match, with no fallback needed. The 120-day core duty, the electronic-
transmission option, the meeting-timing rule, the GAAP exception, both
mid-size-corporation disclosure items, the shareholder demand rights,
the enforcement/fee-shifting remedy, and the domestic/foreign scope
provision were all independently reconfirmed present in the freshly
fetched text.

## Verification

- The source fetched twice independently by the research agent with
  distinct User-Agent strings, plus a one-hundred-and-eighty-third
  independent fetch (with backoff retry) during integration review;
  all 13 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `annrpt_` prefix has zero collisions. Ran a
  section-number-specific grep for "1501" across the full corpus; the
  four hits were confirmed by context as either different codes
  entirely (Prob. Code §1511, CCP §1501(c) — unclaimed property
  dormancy, Lab. Code §1509) or a mere name-drop in the existing
  §2115 pseudo-foreign-corporation document's list of applicable
  California General Corporation Law provisions, without substantive
  coverage of §1501's own content — no genuine duplication.
- Checked every citation's `case` field for emptiness — all 13
  populated with proper citation identifier strings.
- Two new field ids confirmed genuinely necessary and non-duplicative:
  `fiscalYearEndDate` and `holdersOfRecordCount` — neither existed
  previously in the corpus under any name (the closest candidates,
  `reportingYear` and `maxShareholders`, have different semantics).
  Five other fields (`companyName`, `shareholderName`, `preparerName`,
  `dateSigned`, `cityState`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Corporation's Annual Report to Shareholders —
  Information Sheet (`annual_report_to_shareholders_info_sheet`), 11
  clauses (9 authority + 2 drafting), in the Business Formation
  category. Two new fields: `fiscalYearEndDate`,
  `holdersOfRecordCount`.
- Corpus: 4,218 → 4,229 clauses; 537 → 538 documents. Second and final
  processed item of wave 129.

## Wave 129 summary

Wave 129 followed the established 2×2 pattern, targeting
Confidentiality & IP and Business Formation — the two categories tied
lowest after wave 128's rotation and least recently touched (both last
touched in wave 126). Both agents ran section-number-specific
duplication checks before landing on genuinely open topics: the Trade
Secret Evidentiary Privilege (Evid. Code §§1060-1062, after ruling out
seven already-covered candidates, a procedural/evidentiary facet
distinct from the corpus's existing substantive trade-secret coverage)
and the Corporation's Annual Report to Shareholders (Corp. Code §1501,
after ruling out six already-covered candidates, a board-initiated
duty distinct from the corpus's demand-driven inspection-rights and
specialized-entity annual-report documents). This wave produced zero
genuine duplication findings requiring exclusion — every delivered
clause across both documents survived independent integration review
intact, aside from one routine transient-connectivity retry. Each
document surfaced at least one genuine, disclosed finding: a deliberate
exclusion of a subsection containing a genuine source typo, plus a
disclosed choice not to compare two cross-referenced trade-secret
definitions (Trade Secret Evidentiary Privilege); and a disclosed
choice not to equate two different foreign-corporation scope tests,
plus explicit distinctions from two related-but-different existing
documents (Annual Report to Shareholders). Per the established
alternation, wave 130 should return to a 1×4 pattern.
