# During employment, new document: Reproductive Health Decisionmaking Discrimination Protection (FEHA) — Information Sheet

## Why this document

Fourth and final processed item of wave 142 (During employment slot,
1×4 pattern, closing the wave). The agent ruled out personnel-file
inspection, social media passwords, credit reports, off-duty
cannabis, GPS monitoring, arbitration/AB 51, non-compete, WARN,
Equal Pay Act, religious accommodation, COVID, indoor heat, and the
Silenced No More Act — all already confirmed covered. The chosen
topic — "reproductive health decisionmaking" as its own FEHA protected
characteristic (Gov. Code §§ 12926(y), 12940(a)), added by the
Contraceptive Equity Act of 2022 — was confirmed genuinely open: the
phrase appeared only twice in the corpus, both incidental mentions
inside two different single-characteristic documents' shared quote of
the omnibus § 12940(a) sentence (physical disability and CROWN Act
hiring documents), neither of which addresses reproductive health
decisionmaking as its own subject.

## What this document covers

7 clauses: 2 drafting (purpose, acknowledgment) and 5 authority
clauses, citing Gov. Code § 12926(y), § 12926(d) (two citations),
§ 12940(a), *Paleny v. Fireplace Products U.S., Inc.* (Cal. Ct. App.,
2024) (three citations), and *Tulare Medical Center Property etc. v.
Valdivia* (Cal. Ct. App., 2026):

- **`reprohealth_definition`** — § 12926(y)'s non-exhaustive
  definition and its stated overlap with the FEHA "sex" definition.
- **`reprohealth_prohibition`** — § 12940(a)'s operative prohibition
  listing the characteristic among the statute's full protected-class
  list.
- **`reprohealth_employer_threshold`** — § 12926(d)'s five-employee
  coverage threshold and religious-nonprofit exception (two
  citations).
- **`reprohealth_enactment_history`** — two independent Court of
  Appeal descriptions of the 2022 enactment (two citations).
- **`reprohealth_retroactivity_unresolved`** — *Paleny*'s forfeiture
  ruling leaving retroactivity undecided, and its pre-amendment
  holding (two citations).

## Genuine findings

- **A confirmed non-duplicative reuse of an existing corpus
  quotation**: the § 12940(a) omnibus-prohibition quote already
  appears verbatim in two existing corpus clauses focused on
  different protected characteristics (physical disability, CROWN
  Act/race) — confirmed, on inspection, to be the corpus's
  established, accepted pattern of multiple single-characteristic
  documents each quoting the same shared statutory sentence, not a
  duplication requiring exclusion.
- **A disclosed cross-context case citation, clearly bounded**: the
  enactment-history clause's gap states that its second citation
  (*Tulare Medical Center*) comes from a public-accommodations case
  under the Unruh Civil Rights Act, not an employment case, and is
  quoted only for its legislative-history description, not for any
  employment-law holding.
- **A disclosed unresolved legal question, not silently assumed**:
  the retroactivity clause states plainly that the Court of Appeal
  resolved the retroactivity issue on forfeiture grounds, not the
  merits, and that no case located in this research decides whether
  the protection reaches pre-2023 conduct.
- **Multiple confirmed benign PDF-extraction line-wrap artifacts**,
  independently reconfirmed during integration review by inspecting
  the raw fetched opinion text: a mid-parenthetical wrap splitting
  "2021-2022" across a line break in the *Paleny* footnote 3 quote,
  and similar mid-word wraps throughout the *Paleny* forfeiture and
  holding quotes and the *Tulare Medical Center* quote — all confirmed
  via whitespace-normalized substring matching against the source
  text, consistent with the PDF-derived line-wrap artifact pattern
  already catalogued elsewhere in this corpus.

## Honest gap(s) disclosed

This document does not resolve the outer boundary of "reproductive
health decisionmaking" (no case yet construes it), does not address
FEHA's harassment (§ 12940(j)) or retaliation (§ 12940(h))
provisions, does not address the bona-fide-occupational-qualification
or security-regulation exceptions in § 12940's chapeau, does not
address independent-contractor, joint-employer, or staffing-agency
questions, does not independently verify the enacted bill text or
Legislative Counsel's Digest (relying instead on two appellate
descriptions), and does not resolve whether the protection applies
retroactively to pre-2023 conduct (expressly left open by *Paleny* on
forfeiture grounds).

## Method

Fetched Gov. Code §§ 12926 and 12940 from leginfo.legislature.ca.gov,
each fetched twice by the research agent with two distinct User-Agent
strings via curl, confirmed byte-identical. *Paleny* and *Tulare
Medical Center* were located via CourtListener `search` (confirming
correct opinion_ids distinct from cluster_ids) and verified via two
independent fetch paths (`get_endpoint_item` and `call_endpoint`),
confirmed byte-identical by the research agent. All 8 citation
instances were programmatically confirmed by the research agent as
exact, contiguous substrings, with two disclosed whitespace
normalizations.

Independently re-verified during integration review via a two-
hundred-and-thirty-third fetch (a new distinct curl User-Agent
string, "Groundtruth-233rdVerify-ReproductiveHealthDecisionmaking/1.0")
of both statutory sections — both fetched cleanly on the first
attempt. 3 of 4 statutory citation instances confirmed clean on direct
substring match; the § 12940(a) quote confirmed clean only after
normalizing a benign leginfo line-wrap artifact identical to the one
already implicitly present (and previously accepted) in this same
sentence as quoted by two existing corpus clauses. Both case citations
were independently re-verified via `mcp__CourtListener__search` and
`get_endpoint_item` — all 4 case-law citation instances confirmed
clean only after normalizing benign, source-side PDF-extraction
line-wrap artifacts (disclosed above under Genuine findings). The
non-exhaustive definition, the operative prohibition and its full
protected-class list, the five-employee threshold and religious-
nonprofit exception, the 2022 enactment description, and the
forfeiture ruling and pre-amendment holding were all independently
reconfirmed present in the freshly fetched text.

## Verification

- Both cited statutory sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a two-
  hundred-and-thirty-third independent fetch during integration
  review; all 4 statutory citation instances confirmed clean. Both
  case-law citations independently re-verified via the CourtListener
  API against the correct internal opinion ids; no defects found
  beyond benign, disclosed source-formatting artifacts.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section, or the same single
  opinion, correctly disclose they are not independent sources of
  each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `reprohealth_` prefix has zero collisions. Ran a
  term-specific grep for "reproductive health decisionmaking" — the
  two hits confirmed a non-duplicative, already-established corpus
  pattern (shared omnibus-sentence quotation across single-
  characteristic documents) by inspecting each hit's context directly.
- Checked every citation's `case` field for emptiness — all 8
  populated with proper citation identifier strings.
- No new field ids required — all four fields (`companyName`,
  `employeeName`, `dateSigned`, `cityState`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Reproductive Health Decisionmaking Discrimination
  Protection (FEHA) — Information Sheet
  (`reproductive_health_decisionmaking_discrimination_info_sheet`), 7
  clauses (5 authority + 2 drafting), in the During employment
  category. No new fields.
- Corpus: 4,730 → 4,737 clauses; 587 → 588 documents. Fourth and
  final processed item of wave 142.

## Wave 142 summary

Wave 142 used a 1×4 rotation pattern (one document each in Estate
Planning, Hiring, Family Law, and During employment), targeting the
two tied-lowest categories after wave 141 closed (Estate Planning,
Hiring) plus the two least-recently-touched categories among the four
tied one tier up (Family Law, During employment).

1. **QTIP Trust (Qualified Terminable Interest Property) —
   Information Sheet** (Estate Planning) — 9 clauses, 26 U.S.C.
   §§ 2056(b)(7), 2044, Cal. Probate Code §§ 21522, 21524, 21526.
2. **State Disability Insurance New-Hire Notice — Information Sheet**
   (Hiring) — 6 clauses, Unemp. Ins. Code § 2613.
3. **Section 2556 Omitted or Unadjudicated Community Property —
   Information Sheet** (Family Law) — 8 clauses, Fam. Code §§ 63,
   2556, Thorne v. Raccina, Henn v. Henn.
4. **Reproductive Health Decisionmaking Discrimination Protection
   (FEHA) — Information Sheet** (During employment) — 7 clauses, Gov.
   Code §§ 12926, 12940, Paleny v. Fireplace Products U.S., Inc.,
   Tulare Medical Center Property etc. v. Valdivia.

Corpus totals across the wave: 4,707 → 4,737 clauses (+30 net across
four documents: 9 + 6 + 8 + 7); 584 → 588 documents (+4). No genuine
duplication findings required excluding any delivered clause this
wave — every apparent grep hit across all four documents was
confirmed, on direct inspection, to be a false-positive cross-code
collision, an incidental non-substantive mention, a self-corrected
reviewer extraction artifact, or a legitimate, already-established
corpus pattern (the shared § 12940(a) omnibus-sentence quotation
across single-characteristic documents).
