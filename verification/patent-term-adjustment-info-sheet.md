# Confidentiality & IP, new document: Patent Term Adjustment — Information Sheet

## Why this document

Second processed item of wave 112 (Confidentiality & IP slot). An
extensive candidate list (right of publicity, moral rights, VARA, DMCA
§512 takedown, trademark dilution, trade dress, ACPA cybersquatting,
Economic Espionage Act, idea submission, copyright fair use, copyright
termination of transfer, shop right, trademark licensing, work-made-
for-hire, CIPA, trademark registration, and DTSA whistleblower notice)
was checked and confirmed already covered. The agent confirmed zero
prior coverage of patent term adjustment under 35 U.S.C. § 154(b) via
both document-level and clause-level checks — the corpus's existing
Provisional Patent Application, Patent Assignment, Patent License,
Patent Infringement, and False Patent Marking documents were confirmed
to address ownership, licensing, infringement scope, and marking
penalties, but never how a patent's term length is calculated or
extended.

## What this document covers

11 clauses: 2 drafting (intro, signature block) and 9 authority
clauses, citing 35 U.S.C. §§ 154(a)(2), (b)(1)(A), (b)(1)(A)(ii),
(b)(1)(B), (b)(1)(B)(i), (b)(1)(C), (b)(1)(C)(i), (b)(2)(A), (b)(2)(B),
(b)(2)(C)(i)-(ii), (b)(3)(B)(i)-(ii), (b)(4)(A)-(B), and 173:

- **`ptadj_statutory_basis_and_scope`** — the baseline 20-year term and
  how adjustment operates on top of it.
- **`ptadj_guarantee_a_prompt_response`** — the first delay guarantee:
  prompt PTO responses at specific procedural checkpoints.
- **`ptadj_guarantee_b_three_year_pendency`** — the second guarantee:
  no more than 3-year total application pendency.
- **`ptadj_guarantee_c_proceedings_orders_appeals`** — the third
  guarantee: derivation proceedings, secrecy orders, and successful
  appeals.
- **`ptadj_overlap_limitation`** — the no-double-counting rule across
  overlapping guarantee periods.
- **`ptadj_disclaimed_term_limitation`** — the terminal-disclaimer
  ceiling on any adjustment.
- **`ptadj_applicant_delay_reduction`** — the reduction for the
  applicant's own lack of reasonable efforts, including the deemed-
  failure rule for responses exceeding 3 months.
- **`ptadj_determination_and_appeal_procedure`** — the Director's
  determination, reconsideration, and exclusive judicial-review
  pathway.
- **`ptadj_distinct_from_design_patent_term_and_pte`** — a scope
  boundary distinguishing PTA from design patent term and § 156
  regulatory-review patent term extension.

## Genuine findings

- **A significant correction to the agent's own initial mental model**:
  the agent initially assumed PTA was "a simple day-for-day extension
  for USPTO delay." Reading the actual statutory structure showed three
  distinct, independently-triggered guarantees, each with its own
  trigger and exclusions; an overlap cap preventing double-counting
  across guarantees; a terminal-disclaimer ceiling; and — most easily
  missed — a reduction for the applicant's own lack of "reasonable
  efforts," including a deemed-failure rule for any Office-response
  time exceeding 3 months. The document's structure was corrected to
  reflect this richer, multi-part mechanism rather than a single
  day-counting rule.
- **A confirmed, disambiguated scope boundary**: the agent verified PTA
  is legally distinct from design patent term (15 years from grant, not
  filing, under a wholly separate statute) and from patent term
  extension under § 156 for regulatory review delay — a common
  real-world confusion the document explicitly addresses.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on the statute's own text alone, with
  the overlap clause explicitly noting unresolved case law (e.g.,
  *Novartis v. Lee*-type disputes over what counts as "overlap").

## Honest gap(s) disclosed

This document does not calculate a specific number of adjustment days
for any application, does not restate every checkpoint in § 154(b)(1)(A)
(two of four are covered), does not restate the full exclusions list
in § 154(b)(1)(B), does not define when a derivation proceeding or
secrecy order "begins" or "ends" for pendency counting, does not
address the Director's regulatory authority to define additional
failures of reasonable effort or the reinstatement procedure for a
due-care showing, and does not independently research or cite 35 U.S.C.
§ 156's text beyond noting its existence and general purpose.

## Method

Fetched 35 U.S.C. §§ 154 and 173 from Cornell LII, each fetched twice
by the research agent with two distinct User-Agent strings, confirmed
byte-identical via diff. CourtListener's daily rate limit was already
exhausted on the agent's test call; no case law was used, a disclosed
and legitimate choice. All 18 citation instances programmatically
confirmed by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-thirty-first fetch (a new distinct curl User-Agent
string, "Groundtruth-131stVerify-PatentTermAdj/1.0") of both sections —
all 18 citation instances confirmed clean on direct normalized-
whitespace substring match, no extraction artifacts encountered. The
three-guarantee structure and the applicant-delay reduction mechanic
were both independently reconfirmed present in the freshly fetched
text. A personal spot-check found the corpus's existing Provisional
Patent Application document already cites narrower fragments of
§ 154(a)(1)-(3) (the general term/grant provisions) from a different
angle (priority-date effect and "patent pending" meaning) — confirmed
as a minor citation overlap in subject matter, not a substantive
content duplicate, since this document's focus is the § 154(b)
adjustment mechanism entirely absent from those existing clauses.

## Verification

- Both sections fetched twice independently by the research agent with
  distinct User-Agent strings, plus a one-hundred-and-thirty-first
  independent fetch during integration review; all 18 citation
  instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of § 154(b) correctly disclose they are not
  independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); one
  drafting-clause title ("Declaration") collides with a generic
  boilerplate title already reused by 6 other drafting clauses across
  the corpus — confirmed as intentional generic-title reuse, not a
  content duplicate. Independently confirmed a minor citation overlap
  with the Provisional Patent Application document (see Method above)
  is not a substantive duplicate.
- Checked every citation's `case` field for emptiness — all 18
  populated with proper citation identifier strings.
- No new fields required — all five fields (`patentDescription`,
  `patentHolderName`, `filingDate`, `dateSigned`, `cityState`) reused
  from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Patent Term Adjustment — Information Sheet
  (`patent_term_adjustment_info_sheet`), 11 clauses (9 authority + 2
  drafting), in the Confidentiality & IP category. No new fields.
- Corpus: 3,692 → 3,703 clauses; 485 → 486 documents. Second processed
  item of wave 112.
