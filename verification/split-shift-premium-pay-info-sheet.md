# During employment, new document: Split Shift Premium Pay — Additional Requirements Information Sheet

## Why this document

Fourth and final document of wave 78. Read the existing Reporting Time
Pay Information Sheet in full and found substantial pre-existing
overlap: its `reportingtime_split_shift_premium` clause already
covers the core one-hour-at-minimum-wage premium formula and the
live-in-employee exemption, cited to IWC Wage Order No. 4-2001
§ 4(C). Rather than restate that already-shipped content, this
document is deliberately scoped to three genuinely uncovered
sub-topics identified during the overlap check: the Wage Order's own
formal definition of "split shift" (never independently cited before),
DLSE's enforcement position on the duration threshold that turns an
interruption into a split shift (wholly new to the corpus), and the
Wage Order's separate recordkeeping duty for split shift intervals
(also new). Also read Wage Order Uniform Maintenance, Meal and Rest
Break Policy, Meal Period Waiver, and Alternative Workweek Schedule
Election documents in full — confirmed none address split shifts.
Confirmed non-duplicative via corpus-wide grep for "split shift."

## What this document covers

5 clauses: 2 drafting (intro/scope — explicitly cross-referencing and
disclaiming re-coverage of the existing Reporting Time Pay document,
and a signature/receipt block) and 3 authority clauses, citing IWC
Wage Order No. 4-2001 §§ 2(R) and 7(A)(3) (Cal. Code Regs., tit. 8,
§ 11040) and DLSE Opinion Letter No. 2002.12.11:

- **`splitshift_definition`** (Wage Order § 2(R)) — the Wage Order's
  own formal definition of a "split shift": a schedule interrupted by
  a non-paid, non-working period the employer establishes, other than
  a bona fide rest or meal period.
- **`splitshift_bona_fide_duration`** (DLSE Opinion Letter
  2002.12.11) — **the central finding**: DLSE's stated enforcement
  position that a "bona fide" meal period for this purpose does not
  exceed one hour, and that an interruption exceeding one hour
  triggers a split-shift situation — a specific duration threshold the
  Wage Order's own text does not itself state.
- **`splitshift_recordkeeping`** (Wage Order § 7(A)(3)) — the
  separate recordkeeping duty requiring split shift intervals, meal
  periods, and total daily hours worked to be recorded.

## Genuine corrections and findings

- **The central finding**: confirmed DLSE's specific one-hour
  duration threshold precisely from a 2002 opinion letter — a
  concrete, quantified standard that the Wage Order's own definitional
  text does not itself supply, honestly distinguished as agency
  interpretive guidance rather than codified regulatory text.
- Honestly disclosed that the DLSE opinion letter was written in
  response to an inquiry about Wage Order No. 9-2001 (Transportation
  Industry), not Wage Order No. 4-2001, though the letter's own text
  states the same split-shift definition applies "as with all of the
  orders" — and this project independently confirmed the identical
  definitional language in Wage Order 4-2001 § 2(R) before relying on
  the letter's duration guidance in this document.
- Identified and disclosed a PDF-extraction artifact during
  integration review: Wage Order 4-2001's source PDF renders
  "non-paid" with a spurious internal space ("non- paid") at a
  hyphenation point, causing a direct-substring check to initially
  fail; confirmed as a genuine extraction artifact (not a misquote)
  via whitespace-collapsed comparison and manual context inspection,
  per this project's established verification technique.
- Correctly declined to source the offset/credit mechanism (how wages
  paid above minimum wage offset the one-hour premium) from a
  secondary source after CourtListener access was rate-limited and
  direct fetches of case-law mirrors returned HTTP 403 — the governing
  authority for that specific point is case law (*Aleman v. Airtouch
  Cellular*), not the Wage Order's own text, and it was honestly
  omitted rather than guessed at or sourced from a non-primary
  reference.

## Honest gap(s) disclosed

The one-hour premium formula and the live-in-employee exemption are
not restated — already covered by the existing Reporting Time Pay
document's `reportingtime_split_shift_premium` clause. The offset/
credit mechanism for wages paid above minimum wage is not covered —
it derives from case law (*Aleman v. Airtouch Cellular* (2012) 209
Cal.App.4th 556) that could not be independently verified this wave
due to CourtListener rate-limiting and blocked direct fetches of
case-law mirror sites; flagged as a clean target for a future wave
once access resets. No penalty for a specific recordkeeping failure is
stated — the quoted subdivision does not itself specify one.

## Method

Fetched IWC Wage Order No. 4-2001 (dir.ca.gov/IWC/IWCArticle04.pdf)
and DLSE Opinion Letter No. 2002.12.11
(dir.ca.gov/dlse/opinions/2002-12-11.pdf), each fetched twice by the
research agent with two distinct User-Agent strings, confirmed
byte-identical (matching MD5 hashes). All 4 citation quotes across the
3 authority clauses programmatically confirmed as exact,
whitespace-normalized contiguous substrings (no ellipsis-joined
quotes). Independently re-verified during integration review via a
fourth fetch (a distinct curl User-Agent string,
"Groundtruth-FourthVerify-SplitShift/1.0") of both PDFs, extracted with
`pypdf` — 3 of 4 quotes matched directly; the fourth required the
whitespace-collapse-and-manual-context-inspection technique to confirm
a genuine PDF-extraction artifact rather than a misquote (documented
above).

## Verification

- Both primary sources fetched twice independently by the research
  agent with distinct User-Agent strings, plus a fourth independent
  fetch during integration review; all 4 quotes confirmed clean (one
  via the established PDF-artifact-verification technique).
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — the two DLSE
  Opinion Letter citations in `splitshift_bona_fide_duration` correctly
  disclosed as drawn from the same short letter, not independent of
  one another; each Wage Order citation correctly disclosed as a
  different, independently numbered subdivision of the same
  regulatory instrument already cited elsewhere in the corpus, not an
  independent second source; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("About This Information Sheet," "Signature
  and Receipt") do not collide with existing corpus titles.
- No new fields required — both fields (`employeeName`, `companyName`)
  reused from the existing corpus (122 and 180 prior documents
  respectively), matching the existing Reporting Time Pay document's
  own field set.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: Split Shift Premium Pay — Additional Requirements
  Information Sheet (`split_shift_premium_pay_info_sheet`), 5 clauses
  (3 authority + 2 drafting), in the During employment category. No
  new fields.
- Corpus: 2,756 → 2,761 clauses; 362 → 363 documents. Fourth and final
  document of wave 78.

**Wave 78 complete**: 2,738 → 2,761 clauses (23 new); 359 → 363
documents (4 new: Bona Fide Wage Dispute, California Bot Disclosure
Law, California Fee-Charging Employment Agency Regulation, and Split
Shift Premium Pay). Two of the four originally assigned topics
(pre-offer disability inquiry limits; postmortem right of publicity)
were found already fully covered and correctly substituted rather than
duplicated — Ending employment + Confidentiality & IP + Hiring +
During employment, filling wave 78's 1×4 slot per the established
strict-alternation pattern (wave 77 was 2×2; wave 79 should return to
2×2 across Real Estate + Estate Planning or Business Formation +
Family Law, whichever pairing keeps category counts balanced).
