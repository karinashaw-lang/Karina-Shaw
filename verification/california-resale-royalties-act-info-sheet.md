# Confidentiality & IP, new document: California Resale Royalties Act (Civil Code § 986) — Information Sheet

## Why this document

Fourth and final processed item of wave 137 (Confidentiality & IP
slot #2, replacement research after a sibling agent's original slot-2
deliverable duplicated the just-merged Labor Code § 927 digital-
replica topic — see below). The agent ruled out a second candidate
(the Silenced No More Act, already covered) before landing on the
California Resale Royalties Act, Civil Code § 986 — the "droit de
suite" statute giving visual artists an unwaivable 5% royalty on
specified California resales of fine art, together with two Ninth
Circuit decisions from the same litigation that have since gutted its
practical effect. A duplication check found zero genuine corpus hits
on "986," "resale royalt[y/ies]," "droit de suite," "Sam Francis," or
"Close v. Sotheby's" — the 22 apparent "986" hits all traced to "1986"
date references, confirmed false positives on direct inspection.

## What this document covers

10 clauses: 2 drafting (declaration/purpose, signature record) and 8
authority clauses, citing Civ. Code § 986(a) (three citations),
(a)(1), (a)(2), (a)(5), (a)(3), (a)(7), (b)(3), (b)(1), (b)(2), (b)(4),
(b)(6), (b)(7), (c)(1)-(3), (e), plus *Sam Francis Foundation v.
Christie's, Inc.*, 784 F.3d 1320 (9th Cir. 2015) (en banc), and
*Close v. Sotheby's, Inc.*, 894 F.3d 1061 (9th Cir. 2018):

- **`resaleroyalty986_core_royalty_obligation`** — the core 5%
  royalty duty, its waiver-limit rule, and assignability.
- **`resaleroyalty986_withholding_and_payment_procedure`** — the
  agent's withholding duty, the 90-day Arts Council transfer rule,
  and the Arts Council's own duties.
- **`resaleroyalty986_remedies_and_time_limit`** — the civil action,
  its 3-year/1-year limitations period, and fee-shifting.
- **`resaleroyalty986_artist_death_and_heirs`** — the 20-year post-
  death survival rule, limited to artists who died after January 1,
  1983.
- **`resaleroyalty986_statutory_exemptions`** — five of subdivision
  (b)'s seven exemptions.
- **`resaleroyalty986_definitions`** — the statutory definitions of
  "artist," "fine art," and "art dealer."
- **`resaleroyalty986_dormant_commerce_clause_limitation`** — the
  Sam Francis Foundation en banc holding that the out-of-state-sales
  branch of the statute is unconstitutional, though severable.
- **`resaleroyalty986_copyright_act_preemption`** — the Close v.
  Sotheby's holding that post-1978 in-state claims are preempted by
  the federal Copyright Act, leaving only a narrow, contested 1977-
  1978 window.

## Genuine findings

- **A resolved integration-review discrepancy in my own tool use, not
  a defect in the delivered work**: during independent re-verification,
  CourtListener's opinion_id 4514890 (matching the courtlistener.com
  URL slug the clause cites for "894 F.3d 1061") initially returned an
  unrelated Texas appellate order when queried directly as an MCP tool
  `opinion_id` parameter. Investigation confirmed the courtlistener.com
  URL slug is the *cluster* id (4514890, correctly identifying "894
  F.3d 1061"), distinct from the underlying Opinion table's primary
  key (4292143) that the MCP tool's `opinion_id` parameter actually
  requires. Once the correct internal opinion id was used, all three
  Close v. Sotheby's quotes were confirmed exact matches. The clause's
  own citation `url` field was correct all along; no correction was
  needed.
- **A disclosed alternative-verification method for case law**: with
  CourtListener's search quota exhausted during the research agent's
  own work, both opinions were instead fetched directly from their
  public courtlistener.com pages with two distinct User-Agent strings;
  independent re-verification during integration review instead used
  the CourtListener MCP API's document-read tools once the daily quota
  reset, reaching the same confirmed-clean result via an independent
  path.
- **A disclosed genuine statutory typo preserved, not corrected**: the
  withholding clause's gap discloses that "tranferred" (missing the
  second "s") is the official statutory text's own misspelling,
  confirmed identical across independent fetches, not a transcription
  error.
- **A disclosed genuine stray space preserved**: the definitions
  clause's gap discloses a trailing space before a period in the
  "artist" definition ("...minimum of two years .") is reproduced
  exactly as it appears in the official statutory text.
- **Several disclosed mid-sentence line-wrap artifacts**, both from
  leginfo's HTML (statute quotes) and from courtlistener's PDF-derived
  plaintext (case-law quotes), each verified directly against raw
  source text and normalized to a single space rather than reproduced
  as a literal newline.

## Honest gap(s) disclosed

This document does not quote the (b)(5) fine-art-exchange exemption or
the (a)(4)/(a)(6) Special Deposit Fund and creditor-exemption
subdivisions, does not independently verify the Civ. Code § 1940,
Health & Safety Code § 50519, or Health & Safety Code § 18214 cross-
references relied on elsewhere in the corpus, does not resolve the
Takings Clause argument Close v. Sotheby's expressly left undecided
for the narrow 1977-1978 window, does not track the current docket
status of the remanded case, and does not determine that any specific
resale meets § 986's own definitions and conditions or that any
royalty is or was owed on it.

## Method

Fetched Civ. Code § 986 from leginfo.legislature.ca.gov, fetched twice
by the research agent with two distinct User-Agent strings via curl,
confirmed byte-identical statutory text. With CourtListener's search
quota exhausted, both Ninth Circuit opinions were fetched directly
from courtlistener.com, each with two distinct User-Agent strings,
confirmed identical apart from a per-request CSP nonce. All 22
citation instances were programmatically confirmed by the research
agent as exact, contiguous substrings, with several genuine source
artifacts (a statutory typo, a stray space, and multiple line-wraps)
identified and disclosed rather than silently corrected or
reproduced.

Independently re-verified during integration review via a two-
hundred-and-twelfth fetch (a new distinct curl User-Agent string,
"Groundtruth-212thVerify-ResaleRoyalties/1.0") of Civ. Code § 986 —
fetched cleanly on the first attempt, all 15 statute citation
instances confirmed clean on direct match. Direct curl and WebFetch
attempts against courtlistener.com, law.justia.com, and the Ninth
Circuit's own cdn.ca9.uscourts.gov were all blocked by this
environment's network egress controls (a WAF challenge and outright
domain blocks, respectively) — a genuine environmental limitation
disclosed here rather than worked around by skipping verification.
Once CourtListener's own API quota reset, all four Sam Francis
Foundation/Close v. Sotheby's quotes were independently confirmed
exact via the CourtListener MCP document-search tool, correcting an
initial false alarm caused by conflating a courtlistener.com URL's
cluster-id slug with the API's internal opinion-id parameter (see
Genuine findings above) — the delivered citations required no
correction.

## Verification

- The statute fetched twice independently by the research agent with
  distinct User-Agent strings, plus a two-hundred-and-twelfth
  independent fetch during integration review; all 15 statute citation
  instances confirmed clean. Both case-law opinions independently
  re-verified via the CourtListener MCP API once its quota reset,
  after direct web-fetch verification was blocked by this
  environment's network egress controls; all 7 case-law citation
  instances confirmed clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section, or quoting the same
  source fetched for a companion clause, correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `resaleroyalty986_` prefix has zero collisions. Ran
  term-specific greps for "986," "resale royalt," "droit de suite,"
  "Sam Francis," and "Close v. Sotheby" — the 22 "986" hits all traced
  to unrelated "1986" date references; zero genuine hits on any other
  term, confirming genuine novelty.
- Checked every citation's `case` field for emptiness — all 22
  populated with proper citation identifier strings.
- One new field id confirmed genuinely necessary and non-duplicative:
  `saleDate` — no existing field represents a generic transaction
  date; the closest candidates (`foreclosureSaleDate`, `closingDate`)
  are domain-specific to unrelated transaction types. Six fields
  reused from the existing corpus with document-specific relabeling.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: California Resale Royalties Act (Civil Code § 986) —
  Information Sheet (`california_resale_royalties_act_info_sheet`),
  10 clauses (8 authority + 2 drafting), in the Confidentiality & IP
  category. One new field: `saleDate`.
- Corpus: 4,553 → 4,563 clauses; 567 → 568 documents. Fourth and final
  processed item of wave 137.

## Wave 137 summary

Wave 137 used a 2×2 rotation pattern (two documents each in Real
Estate and Confidentiality & IP), targeting the two tied-lowest,
least-recently-touched categories after wave 136 closed. One
Confidentiality & IP slot required a mid-wave replacement: both
sibling agents assigned to that category independently researched and
drafted documents on the identical statute (Labor Code § 927, the
AB 2602 digital-replica contract-formation rule) — a genuine topic
collision, confirmed by direct comparison of both deliverables' clause
content, definitions, and conditions. The first agent's document was
merged; the second, duplicate deliverable was discarded, and a
replacement research agent was launched for that slot with explicit
instructions to avoid the now-taken topic.

1. **Digital Replica Provisions in Personal and Professional Services
   Contracts — Information Sheet** (Confidentiality & IP #1) — 10
   clauses, Lab. Code § 927 (AB 2602).
2. **PACE (Property Assessed Clean Energy) Financing — Information
   Sheet** (Real Estate #2) — 14 clauses, Sts. & High. Code Chapter 29
   (§§ 5898.10-5899.4), Fin. Code §§ 22680-22697.
3. **Notice of Belief of Abandonment (Real Property) — Information
   Sheet** (Real Estate #1) — 12 clauses, Civ. Code §§ 1951.3, 1951.35,
   1954.26.
4. **California Resale Royalties Act (Civil Code § 986) — Information
   Sheet** (Confidentiality & IP #2, replacement) — 10 clauses, Civ.
   Code § 986, plus two Ninth Circuit decisions.

Corpus totals across the wave: 4,517 → 4,563 clauses (+46 net across
four documents: 10 + 14 + 12 + 10); 564 → 568 documents (+4, matching
the wave's four-document target despite the mid-wave topic-collision
replacement). No genuine duplication findings required excluding any
delivered clause this wave beyond the one full-document topic
collision described above — every other apparent grep hit across all
four documents was confirmed, on direct inspection, to be a
false-positive cross-code collision, an incidental non-substantive
cross-reference, or (in one case) a resolved tooling discrepancy in
this session's own case-law re-verification method rather than a
defect in delivered work.
