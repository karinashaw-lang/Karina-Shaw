# Ending employment, new document: State Civil Service Disciplinary Due Process — Information Sheet

## Why this document

Fourth and final processed item of wave 135 (Ending employment slot,
2×2 pattern, closing the wave). The agent ruled out final-pay timing
for temp-services employers, forum/choice-of-law, whistleblower
retaliation, expense reimbursement, cannabis discrimination,
domestic-violence leave, piece-rate, and E-Verify — all confirmed
already covered. The chosen topic — the disciplinary-proceedings
article of California's State Civil Service Act, Gov. Code
§§ 19570-19589 — was confirmed genuinely open: zero prior corpus hits
on any of the twelve cited section numbers. The only related mentions
in the corpus were a single incidental "Skelly"-type disclaimer inside
the existing POBR document and an unrelated "State Personnel Board"
mention inside an applicant-retention clause — neither substantive
coverage of this state-civil-service-specific statutory scheme, which
is legally distinct from the existing Public Safety Officers
Procedural Bill of Rights Act document (limited to peace officers
under different Penal Code cross-references).

## What this document covers

12 clauses: 2 drafting (declaration, closing signature) and 10
authority clauses, citing Gov. Code § 19570, § 19571, § 19572(a)-(c),
§ 19574(a)-(b), § 19575, § 19576, § 19578, § 19583, § 19584 (three
citations), § 19586, § 19588, and § 19589:

- **`civilsvcdp_adverse_action_definition`** — the article's own
  "adverse action" definition and managerial-employee exclusion.
- **`civilsvcdp_causes_for_discipline`** — the 24 enumerated statutory
  causes for discipline.
- **`civilsvcdp_notice_requirement`** — the five-element pre-discipline
  written notice and 15-day board-filing deadline.
- **`civilsvcdp_bargaining_unit_limitation`** — a major limitation:
  the notice rule now applies only to State Bargaining Unit 5, and an
  MOU can override the hearing rules.
- **`civilsvcdp_right_to_answer`** / **`civilsvcdp_hearing_right`** —
  the 30-day answer deadline and the resulting hearing right.
- **`civilsvcdp_decision_backpay_and_mitigation`** — the board's
  decision standard and the backpay/mitigation offset rules.
- **`civilsvcdp_rehearing_and_judicial_review`** — the 30-day
  rehearing petition and the separately preserved writ-of-mandate
  right.
- **`civilsvcdp_reprimand_removal`** — the three-year reprimand-letter
  removal-and-destruction rule.

## Genuine findings

- **A disclosed, deliberate non-resolution of a facially ambiguous
  statute**: the bargaining-unit-limitation clause's gap flags that
  § 19574(b)'s own text is ambiguous about whether "this subdivision"
  in its first sentence refers to subdivision (a) or (b) itself, and
  explicitly declines to resolve that ambiguity rather than guessing.
- **A disclosed source-formatting artifact, preserved rather than
  corrected**: the causes-for-discipline clause's gap discloses that
  leginfo's raw HTML abuts consecutive lettered subdivisions with no
  space at all between one's closing period and the next's opening
  parenthesis, verified byte-for-byte in the raw HTML and preserved
  exactly in the quote rather than silently smoothed over.
- **A disclosed real limit on a seemingly broad remedy**: the
  decision/backpay clause states the board's backpay authority is
  capped by a "ready, able, and willing to work" condition and a
  mandatory earned-or-reasonably-earned-elsewhere offset for any
  period beginning more than six months after suspension.
- **A disclosed, deliberate choice not to cite unverified case law**:
  a CourtListener search for *Skelly v. State Personnel Board*
  returned a 429; every authority clause proceeds on statute text
  alone, with no case law cited or recalled from memory.

## Honest gap(s) disclosed

This document does not resolve § 19574(b)'s facial ambiguity, does not
identify which employees fall within "State Bargaining Unit 5," does
not restate Gov. Code §§ 19590.5, 19592, 19592.2 (the managerial-
employee exceptions) or § 11513 (the cross-referenced general hearing
procedure), does not address representation rights at a hearing, and
does not address the Code of Civil Procedure's writ-of-mandate filing
deadline or standard of judicial review.

## Method

Fetched Gov. Code §§ 19570, 19571, 19572, 19574, 19575, 19576, 19578,
19583, 19584, 19586, 19588, 19589 from leginfo.legislature.ca.gov, each
fetched twice by the research agent with two distinct User-Agent
strings via curl, confirmed byte-identical after normalizing the JSF
ViewState token. CourtListener's daily quota was already exhausted
(HTTP 429) on the agent's test call; no case law was used or
fabricated. All 15 citation instances were programmatically confirmed
by the research agent as exact, contiguous substrings via
string-slicing between verified start/end markers rather than
hand-typed quotes, catching the non-breaking-space subdivision-
abutment artifact before finalizing.

Independently re-verified during integration review via a two-
hundred-and-fifth fetch (a new distinct curl User-Agent string,
"Groundtruth-205thVerify-CivilServiceDP/1.0") of all twelve
sections — one transient connection reset on § 19572 was resolved via
retry-with-backoff; all others fetched cleanly on the first attempt.
All 15 citation instances confirmed clean on direct normalized-
whitespace substring match, with no fallback needed. The adverse-
action definition, the causes for discipline, the notice requirement
and its bargaining-unit limitation, the answer and hearing rights, the
decision/backpay/mitigation rules, the rehearing and judicial-review
provisions, and the reprimand-removal rule were all independently
reconfirmed present in the freshly fetched text.

## Verification

- All twelve cited sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a two-
  hundred-and-fifth independent fetch during integration review; all
  15 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `civilsvcdp_` prefix has zero collisions. Ran
  section-number-specific greps for all twelve cited sections, "State
  Personnel Board," and "Skelly" across the full corpus — zero hits on
  every section number; the two phrase hits traced to an unrelated
  applicant-retention clause and the existing POBR document's own
  passing disclaimer, neither substantive coverage.
- Checked every citation's `case` field for emptiness — all 15
  populated with proper citation identifier strings.
- No new field ids required — all five fields (`employeeName`,
  `companyName`, `jobTitle`, `dateSigned`, `cityState`) reused from
  the existing corpus, relabeled for the civil-service context.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: State Civil Service Disciplinary Due Process
  (Government Code §§ 19570-19589) — Information Sheet
  (`state_civil_service_disciplinary_due_process_info_sheet`), 12
  clauses (10 authority + 2 drafting), in the Ending employment
  category. No new fields.
- Corpus: 4,457 → 4,469 clauses; 559 → 560 documents. Fourth and final
  processed item of wave 135.

## Wave 135 summary

Wave 135 used a 2×2 rotation pattern (two documents each in Ending
employment and Business Formation), targeting the two least-recently-
touched of the four tied-lowest categories after wave 134 closed:

1. **Furlough (Temporary Reduction in Work or Pay) — Information
   Sheet** (Ending employment) — 11 clauses, Cal/WARN, federal WARN,
   UI partial benefits, exempt salary-basis, and COBRA reduction-of-
   hours definitions.
2. **Joint Ventures Under California Law — Information Sheet**
   (Business Formation) — 9 clauses, Corp. Code §§ 16202-16203, Bus. &
   Prof. Code §§ 7029-7029.1, Rev. & Tax. Code § 17851, 26 U.S.C.
   § 761(a).
3. **Compensatory Equity Plan Securities Exemption — Information
   Sheet** (Business Formation) — 12 clauses, Corp. Code § 25102(o),
   17 C.F.R. § 230.701, 10 Cal. Code Regs. §§ 260.140.41, 260.140.46.
4. **State Civil Service Disciplinary Due Process — Information
   Sheet** (Ending employment) — 12 clauses, Gov. Code §§ 19570-19589.

Corpus totals across the wave: 4,436 → 4,469 clauses (+33 net; the
wave itself added 44 clauses: 11 + 9 + 12 + 12, starting from wave
134's close at 4,425 and continuing through this wave's own count
after the Furlough document's addition at 4,436); 556 → 560 documents
(+4). No genuine duplication findings required excluding any delivered
clause this wave — every apparent grep hit across all four documents
was confirmed, on direct inspection, to cite a different subdivision
or section, or to be a coincidental or incidental mention.
