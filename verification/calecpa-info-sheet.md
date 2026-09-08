# Confidentiality & IP, new document: California Electronic Communications Privacy Act (CalECPA) — Information Sheet

## Why this document

Third processed item of wave 143 (Confidentiality & IP slot #2, 2×2
pattern). The agent ruled out the Silenced No More Act (already
covered by the existing non-disparagement document, discovered
after tracing that lead) and confirmed the corpus's existing CIPA
document covers a different Penal Code chapter (§§ 630-638.55,
private-party wiretapping) and the Vehicle Tracking Device document
covers only § 637.7. A personal duplication spot-check independently
confirmed zero prior corpus hits on "1546," "Meza," or "CalECPA."

## What this document covers

8 clauses: 2 drafting (intro, closing acknowledgment) and 6 authority
clauses, citing Pen. Code § 1546(d), (g) (definitions), § 1546.1(a)(1)-
(3), (b), (b)(1), (b)(4), (c)(4)-(6), § 1546.2(a)(1) (two citations),
(b)(1)-(2), § 1546.4(a), (c), and *People v. Meza*, 90 Cal.App.5th 520
(2023):

- **`calecpa_definitions`** — "electronic communication information"
  and "electronic device information" (two citations).
- **`calecpa_general_prohibition`** — the three baseline prohibitions
  on compelling or accessing information without authorization
  (three citations).
- **`calecpa_warrant_and_order_pathways`** — the enumerated pathways
  for compelling records from a service provider (three citations).
- **`calecpa_physical_device_access_exceptions`** — the consent and
  emergency exceptions for direct device access (three citations).
- **`calecpa_notice_and_delay`** — the notice duty and the court's
  power to delay it (four citations).
- **`calecpa_remedies`** — the suppression and void/modify/destroy
  remedies, illustrated by *Meza*'s distinction between statutory and
  constitutional particularity and the good-faith exception (three
  citations).

## Genuine findings

- **A disclosed, corrected citation-sourcing gap**: the remedies
  clause's gap discloses that CourtListener's own citation metadata
  for the *Meza* opinion record was empty, and states how the reporter
  citation (90 Cal.App.5th 520) was instead confirmed from the
  opinion's own internal self-reference in a later dissenting
  statement — a transparent account of how a citation was sourced
  rather than a silent assumption.
- **A disclosed limit on what the case shows**: the remedies clause's
  gap states plainly that the California Supreme Court's denial of
  review is not endorsement of the reasoning, and that this document
  does not track whether other courts have since followed or
  distinguished *Meza*.
- **A consistently disclosed pattern of partial-subdivision coverage**:
  every authority clause's gap names the specific neighboring
  paragraphs not quoted — for example, 9 of subdivision (c)'s 12
  device-access exceptions, and the separate Reader Privacy Act
  cross-reference in the warrant-pathways clause (a statute this
  session verified independently in a separate document earlier this
  same wave).

## Honest gap(s) disclosed

This document does not restate 10 of the statute's 12 lettered
definitions, the wiretap-order or pen-register/trap-and-trace
pathways for compelling provider records, 9 of the 12 device-access
exceptions in subdivision (c) (including warrant, correctional-
facility, and 911-emergency-location exceptions), the Attorney
General's separate civil-action remedy or corporate-immunity
provision, or the Department of Justice reporting duty for
no-identified-target warrants — each flagged in the relevant clause's
gap rather than left unstated.

## Method

Fetched Pen. Code §§ 1546, 1546.1, 1546.2, and 1546.4 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings via curl, confirmed byte-
identical (including line-wrap placement within affected paragraphs).
*People v. Meza* was located via CourtListener `search` and verified
via `get_endpoint_item`, checked against both `plain_text` and
`html_with_citations` representations. All 18 citation instances were
programmatically confirmed by the research agent as exact substrings
after normalizing disclosed line-wrap artifacts.

Independently re-verified during integration review via a two-
hundred-and-thirty-sixth fetch (a new distinct curl User-Agent
string, "Groundtruth-236thVerify-CalECPA/1.0") of all four statutory
sections — all fetched cleanly on the first attempt. 10 of 17
statutory citation instances confirmed clean on direct substring
match; the remaining 7 confirmed clean only after normalizing the
line-wrap artifacts already disclosed in the delivered clauses' gap
fields. The *Meza* citation was independently re-verified via
`mcp__CourtListener__search` (confirming opinion_id 9556587 for
cluster_id 9421025 — distinct ids, contrary to the research agent's
report that they coincided for this case) and `get_endpoint_item` —
the quote confirmed an exact match on normalized whitespace against
the freshly fetched opinion text. The two statutory definitions, the
three baseline prohibitions, the warrant/subpoena pathways, the
consent and emergency device-access exceptions, the notice and delay
provisions, and the suppression and void/modify/destroy remedies were
all independently reconfirmed present in the freshly fetched text.

## Verification

- All four cited statutory sections fetched twice independently by
  the research agent with distinct User-Agent strings, plus a two-
  hundred-and-thirty-sixth independent fetch during integration
  review; all 17 statutory citation instances confirmed clean. The
  case-law citation independently re-verified via the CourtListener
  API, correcting the research agent's cluster_id/opinion_id
  coincidence claim in the process; no defect found in the delivered
  quote itself.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `calecpa_` prefix has zero collisions. Ran term-
  specific greps for "1546," "Meza," and "CalECPA" — zero hits on all,
  confirming genuine novelty.
- Checked every citation's `case` field for emptiness — all 18
  populated with proper citation identifier strings.
- No new field ids required — all four fields (`preparerName`,
  `companyName`, `personName`, `dateSigned`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: California Electronic Communications Privacy Act
  (CalECPA) — Information Sheet (`calecpa_info_sheet`), 8 clauses (6
  authority + 2 drafting), in the Confidentiality & IP category. No
  new fields.
- Corpus: 4,756 → 4,764 clauses; 590 → 591 documents. Third processed
  item of wave 143.
