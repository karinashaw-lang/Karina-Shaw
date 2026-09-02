# Ending employment, new document: California WARN Act (Cal/WARN) — Information Sheet

## Why this document

The existing "WARN Act Layoff Notice" document cites only the federal
statute (29 U.S.C. §§ 2101-2104, Cornell LII text). Confirmed by grep that
"Cal-WARN", "California WARN", and "Labor Code § 140" had zero hits
anywhere in the corpus. California's own Worker Adjustment and Retraining
Act (Labor Code § 1400 et seq.) is a separate statute with materially
different thresholds, triggers, notice content, and remedies — not a
restatement of the federal law.

## What this document covers

8 clauses: 2 drafting (notice declaration, acknowledgment) and 6 authority
clauses, all citing California Labor Code §§ 1400.5-1406:

- **`calwarn_coverage`** (§ 1400.5(a), (b), (h)) — the 75-employee covered-
  establishment threshold, the "employer" definition, and the 6-of-12-month
  "employee" definition.
- **`calwarn_triggers`** (§ 1400.5(d)-(g)) — the three triggering events
  (mass layoff, relocation, termination) and the project-based/seasonal
  carve-outs.
- **`calwarn_notice_requirement`** (§ 1401(a)-(e)) — the 60-day notice
  requirement, recipients, and California-specific required content
  (rapid-response disclosure, CalFresh information, employer contact info).
- **`calwarn_exceptions`** (§ 1401(f); § 1402.5) — the physical-calamity/
  act-of-war exception and the non-self-executing active-seeking-capital
  exception.
- **`calwarn_liability`** (§ 1402(a)-(c)) — the back-pay/benefits formula,
  its cap, and offsets.
- **`calwarn_penalties_enforcement`** (§§ 1403-1406) — the government-
  notification civil penalty, private civil action, good-faith penalty
  reduction, and Labor Commissioner enforcement authority.

## Genuine corrections and findings

- **Coverage threshold is different, not just lower**: 75+ employees (vs.
  federal 100+), and California's definition does not exclude part-time
  workers the way the federal one does.
- **No percentage-of-workforce test**: California's "mass layoff" is a flat
  50-or-more-employees-in-30-days count regardless of total workforce size
  — it drops the federal law's alternative 33%-of-workforce test entirely.
- **Three triggers, not two**: mass layoff, relocation (100+ miles), and
  termination (cessation of operations) — federal law has only plant
  closing and mass layoff.
- **No self-executing "unforeseeable business circumstances" exception**:
  Cal/WARN's closest analog, the active-seeking-capital exception
  (§ 1402.5), does not apply automatically — it requires an EDD
  determination backed by a written record and a perjury-sworn affidavit,
  and by its own terms does not apply to mass layoffs at all (only
  relocations/terminations).
- **Richer required notice content**: California notices must include
  CalFresh program information, rapid-response-service disclosures, and
  the employer's own contact information — none required by federal law.
- **A statutory drafting anomaly, disclosed rather than silently
  corrected**: § 1402.5(d) still cross-references "subdivision (d) of
  Section 1400" for the mass-layoff definition, but current § 1400 is only
  the Act's short-title section with no subdivisions — the actual
  definition now lives at § 1400.5(d) after a 2022 renumbering (AB 1601)
  that moved definitions out of § 1400 without updating this internal
  cross-reference.
- Confirmed the $500/day civil penalty (§ 1403) attaches only to failing
  to notify the government recipients (EDD, workforce board, local
  officials) under § 1401(a)(2) — not to failing to notify employees
  themselves, a narrower trigger than it might first appear.
- Confirmed a separate government-enforcement track exists alongside the
  private right of action: the Labor Commissioner has independent
  investigation and citation authority under § 1406.

## Honest gap disclosed

The separate call-center-relocation article (Labor Code §§ 1409-1413,
which applies its own relocation definition to call centers specifically)
was identified but deliberately excluded as out of scope for a general
information sheet. Labor Code § 18 (the general "person" definition that
§ 1400.5(b)'s "employer" definition cross-references) was not
independently fetched or verified.

## Method

Fetched Cal. Labor Code §§ 1400, 1400.5, 1401, 1402, 1402.5, 1403, 1404,
1405, and 1406 directly from `leginfo.legislature.ca.gov`, each via two
independent requests using distinct User-Agent strings (WebFetch was
blocked by the egress proxy for this domain, so two independent curl
requests were used instead) — confirmed byte-identical after whitespace
normalization. All 15 citation quotes programmatically re-verified as
exact substrings of the confirmed text.

## Verification

- All nine sections fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are subdivisions of the same statutory section
  versus genuinely separate sections (e.g. `calwarn_penalties_enforcement`
  draws on four independently numbered sections, §§ 1403-1406); correct
  as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  accepted title reuses: "Whether This Notice Is Required" (deliberately
  parallel to the federal WARN Act document's own coverage clause) and
  "Acknowledgment" (established generic drafting pattern).
- Field names (`companyName`, `employeeName`, `terminationDate`)
  independently confirmed to match the existing federal WARN Act
  document's field ids exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: California WARN Act (Cal/WARN) — Information Sheet
  (`california_warn_act_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Ending employment category. No new fields.
- Corpus: 1,887 → 1,895 clauses; 241 → 242 documents. Third document of
  wave 48.
