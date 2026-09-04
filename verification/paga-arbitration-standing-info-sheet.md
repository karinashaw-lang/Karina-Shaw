# Ending employment, new document: PAGA Representative Claims and Arbitration — Information Sheet

## Why this document

Confirmed by grep that "viking river," "moriana," and "adolph v. uber"
had zero hits anywhere. Read the PAGA Pre-Suit Notice Letter,
Restriction on Requiring Arbitration, and Employment Arbitration
Agreement documents in full — none address whether an arbitration
agreement can split an individual PAGA claim from its representative
portion. Confirmed non-duplicative. Fourth and last document of wave
76.

## What this document covers

6 clauses: 2 drafting (intro, acknowledgment) and 4 authority clauses,
tracing *Viking River Cruises, Inc. v. Moriana*, 596 U.S. 639 (2022)
and *Adolph v. Uber Technologies, Inc.* (2023) 14 Cal.5th 1104:

- **`pagaarb_viking_river_preemption`** — the FAA preempts *Iskanian*'s
  rule against splitting PAGA claims by agreement; an individual PAGA
  claim can be compelled to arbitration.
- **`pagaarb_viking_river_dismissal_reasoning`** — what *Viking River*
  itself said should happen to the non-individual claims once the
  individual claim is arbitrated: the plaintiff loses standing and
  dismissal is the correct course — the part of the opinion a later
  California Supreme Court decision treats differently.
- **`pagaarb_adolph_standing`** — **the central finding**: *Adolph*
  reached the opposite conclusion as a matter of California law —
  compelling arbitration of the individual claim does NOT strip
  standing to litigate the representative claims in court, so long as
  the plaintiff remains an "aggrieved employee."
- **`pagaarb_combined_current_picture`** — the combined current
  picture (arbitrate the individual claim, litigate the rest), with an
  honest disclosure that no post-*Adolph* decision revisiting this
  specific question was found.

## Genuine corrections and findings

- **The central finding**: correctly traced how *Adolph* responds to
  *Viking River* — not as "abrogating" a federal holding (impossible,
  different sovereigns), but as California's own courts reaching an
  independent conclusion on a state-law standing question the U.S.
  Supreme Court was never bound to get right, per the opinion's own
  framing.
- Confirmed *Adolph*'s standing holding is not unconditional — a trial
  court has discretion to stay the representative claims pending
  arbitration, and if the arbitrator finds the plaintiff isn't
  genuinely an aggrieved employee, standing can still be lost — a
  precise qualification rather than an overstated absolute rule.
- **Caught and corrected a real citation-format issue during
  integration review**: two of the six delivered citations used
  ellipses to stitch together non-adjacent passages from the source
  opinions, which breaks this corpus's established convention that
  every `quote` be an exact, contiguous substring of the fetched text.
  Independently re-fetched both opinions directly from
  supremecourt.gov and courts.ca.gov, located each segment's exact
  boundaries in the source, and split the two ellipsis-joined
  citations into 5 separate contiguous quotes (3 for the Viking River
  dismissal-reasoning clause, 2 for the Adolph standing clause),
  re-verifying each independently before merging.
- In resolving that fix, found and corrected one further precision
  issue: the delivered Viking River quote read "non-individual" for a
  phrase the opinion's actual text renders as "nonindividual" (no
  hyphen) in that specific instance — corrected to match the source
  exactly.

## Honest gap disclosed

Whether lower courts have applied *Adolph* consistently in every
context, and whether *Adolph*'s discretionary-stay approach has itself
generated further litigation since 2023, was not independently
reviewed. No 2024 PAGA reform provision (AB 2288, SB 92, or AB 1170)
revisiting this specific arbitration-splitting question was found; the
2024 reform's separate tightening of the "aggrieved employee"
definition is addressed in this project's existing PAGA Pre-Suit
Notice Letter document, not restated here.

## Method

CourtListener's daily rate limit (125 requests) was exhausted before
this research reached these two cases, so the research agent fetched
the official primary-source slip opinions directly from
supremecourt.gov (*Viking River Cruises*) and courts.ca.gov (*Adolph*),
extracted text with pdfplumber, and disclosed the extraction-cleanup
methodology in each clause's `gap` field. During integration review, I
independently re-fetched both PDFs directly and re-extracted text with
`pypdf`, confirming all 9 final citation quotes as exact substrings —
two initially appeared not to match due to PDF-extraction artifacts (a
running page-header injected mid-sentence in one Adolph passage, and
font-kerning-induced spurious internal spaces in another), both
resolved by locating the passage in raw context and confirming an
exact match once the artifact is accounted for, consistent with this
corpus's established handling of similar PDF-extraction quirks in
prior waves.

## Verification

- Both opinions fetched directly from their official government
  sources and independently re-fetched during integration review; all
  9 final citation quotes confirmed as exact, contiguous substrings.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — same-opinion
  citations within `pagaarb_viking_river_dismissal_reasoning` and
  `pagaarb_adolph_standing` each correctly disclosed as not
  independent of one another; the Viking River vs. Adolph citation in
  `pagaarb_combined_current_picture` correctly disclosed as
  independent (different courts, different opinions); correct as
  delivered (after the ellipsis-to-separate-citations restructuring).
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`companyName`, `employeeName`) independently confirmed
  to match existing corpus field definitions. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: PAGA Representative Claims and Arbitration —
  Information Sheet (`paga_arbitration_standing_info_sheet`), 6
  clauses (4 authority + 2 drafting), in the Ending employment
  category. No new fields.
- Corpus: 2,700 → 2,706 clauses; 354 → 355 documents. Fourth and last
  document of wave 76.
- **Wave 76 complete**: 2,687 → 2,706 clauses (19 new); 352 → 355
  documents (4 new: California ABC Test for Worker Classification
  [Hiring], California Warehouse Quota Law [During employment],
  California Eraser Law [Confidentiality & IP], PAGA Representative
  Claims and Arbitration [Ending employment]).
