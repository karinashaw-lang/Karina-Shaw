# Hiring, new document: Restriction on Requiring Arbitration as a Condition of Employment — Information Sheet

## Why this document

Confirmed by grep that "432.6," "AB 51," and "mandatory arbitration"
had zero genuine hits. Read the existing Arbitration document in
full — confirmed it's a drafting template for signing an arbitration
agreement itself; this document covers the separate statutory
restriction on requiring arbitration in the first place. Third of
wave 70's four documents.

## What this document covers

6 clauses: 2 drafting (purpose, acknowledgment) and 4 authority
clauses, citing Cal. Lab. Code § 432.6(a)-(c), (e)-(h), *Chamber of
Commerce of the United States of America v. Bonta*, 62 F.4th 473 (9th
Cir. 2023), and the district court's permanent-injunction order (E.D.
Cal. No. 2:19-cv-02456-KJM-DB):

- **`mandatoryarb_prohibition`** (§ 432.6(a)-(c)) — the statutory
  prohibition on requiring a waiver of FEHA/Labor Code rights as a
  condition of employment, the anti-retaliation provision, and the
  opt-out-treated-as-condition-of-employment rule.
- **`mandatoryarb_faa_savings`** (§ 432.6(e)-(h)) — the statute's own
  carve-out preserving FAA-enforceable arbitration agreements, the
  securities/settlement/severance exclusions, and the January 1, 2020
  effective date.
- **`mandatoryarb_ninth_circuit_preemption`** — **a key finding**: the
  Ninth Circuit's 2023 holding that the FAA preempts § 432.6 as
  applied to arbitration agreements, verified by directly reading the
  actual opinion via CourtListener, including its full procedural
  history (a 2-1 panel decision, an earlier withdrawn 2021 opinion, a
  mooted en banc petition, and confirmation no further appeal
  followed).
- **`mandatoryarb_current_status`** — **the central finding**: the
  January 2024 permanent injunction actually entered against named
  California officials, read directly from the filed order, with
  precise scope limits (only bars enforcement where the alleged waiver
  is an FAA-covered arbitration agreement; the statute's text remains
  unrepealed; what force it retains outside FAA-covered agreements is
  expressly left unresolved).

## Genuine corrections and findings

- **The central finding**: this document does not simply quote § 432.6
  as freely enforceable statutory text — it verifies and states the
  actual current enforcement status: a federal court has permanently
  enjoined named California officials from enforcing the statute's
  core prohibitions wherever the waiver takes the form of an
  FAA-covered arbitration agreement. This is exactly the nuance the
  research assignment flagged as critical, and the agent got it right
  by reading the actual case docket and order rather than assuming a
  resolution.
- Confirmed the full procedural history precisely: the 2021 opinion
  was withdrawn after a rehearing petition, the panel reissued in
  2023, the en banc petition was denied as moot, and the case then
  proceeded to a stipulated final judgment — never tested by the
  Ninth Circuit en banc or the U.S. Supreme Court.
- Confirmed the injunction's precise scope: it runs against four named
  officials specifically and only bars enforcement where the alleged
  waiver is an FAA-covered arbitration agreement — not a blanket
  nullification of § 432.6's text.
- Honestly left open whether § 432.6(d)'s "prevailing plaintiff"
  language implies an independent private right of action distinct
  from the enjoined state officials' own enforcement — flagged as
  unresolved by the docket record rather than guessed at.

## Honest gap disclosed

The docket search (95 entries) found no further modification, appeal,
or reopening of the injunction as of the research date, but the agent
explicitly disclosed this cannot rule out developments outside that
docket. What (if anything) of § 432.6 retains force where the alleged
waiver isn't an FAA-covered arbitration agreement is not established
by the verified record.

## Method

Fetched Cal. Lab. Code § 432.6 from `leginfo.legislature.ca.gov` via
curl (through the sandboxed proxy), fetched twice with distinct
User-Agent strings, confirmed byte-identical after whitespace
normalization. Read the Ninth Circuit's opinion and the district
court's permanent-injunction order directly via CourtListener,
including tracing the full docket history. All 4 citation quotes
across the 4 authority clauses programmatically confirmed as exact
substrings/quotes of the confirmed sources.

## Verification

- The statutory section fetched twice independently with distinct
  User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — the § 432.6(a)-(c)
  and § 432.6(e)-(h) citations correctly disclosed as the same
  statutory section, not independent of each other; the Ninth Circuit
  opinion and the district court's implementing order correctly
  disclosed as independent of each other (appellate vs. district
  court, though one implements the other); correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); the
  reused generic drafting title "Acknowledgment of Receipt" matches
  this corpus's established cross-document pattern, not a substantive
  duplicate.
- Field names (`companyName`, `employeeName`) independently confirmed
  to match existing corpus field definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: Restriction on Requiring Arbitration as a Condition of
  Employment — Information Sheet
  (`mandatory_arbitration_restriction_info_sheet`), 6 clauses (4
  authority + 2 drafting), in the Hiring category. No new fields.
- Corpus: 2,535 → 2,541 clauses; 329 → 330 documents. Third document
  of wave 70.
