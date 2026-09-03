# During employment, new document: Cal/OSHA Injury and Illness Recording Requirements — Information Sheet

## Why this document

Confirmed by grep that "Form 300" and "14300" had zero genuine hits
anywhere in the corpus. Distinguished from the existing Injury and
Illness Prevention Program (IIPP) document, which covers the
forward-looking written safety-program requirement (Labor Code § 6401.7,
8 CCR § 3203) — this document covers the separate, after-the-fact
duty to record and, for serious cases, report injuries and illnesses
that have already occurred. Second document of wave 58.

## What this document covers

7 clauses: 2 drafting (declaration/scope, acknowledgment) and 5
authority clauses, citing 8 Cal. Code Regs. §§ 14300, 14300.1, 14300.2,
14300.7, 14300.32, 14300.33, 330, and 342:

- **`injuryrecording_recording_duty_and_recordable_criteria`**
  (§§ 14300, 14300.7) — the basic recording duty and the general
  recordability test, plus the always-record examples (cancer, chronic
  irreversible disease, fractured bone, punctured eardrum).
- **`injuryrecording_partial_exemption_size_and_industry`** (§§ 14300.1,
  14300.2) — two distinct partial exemptions, measured differently.
- **`injuryrecording_recordkeeping_retention`** (§ 14300.33) — the
  five-year retention period, distinguished from IIPP's separate
  one-year retention rule.
- **`injuryrecording_annual_summary_posting`** (§ 14300.32) — the
  annual summary creation, certification, and posting requirements.
- **`injuryrecording_serious_injury_reporting_deadline`** (§§ 330, 342,
  14300.7(b)(2)) — **a key finding**: a separate, more urgent reporting
  duty with a precise 8-hour deadline (extendable to 24 only on
  exigent circumstances) that survives both partial exemptions.

## Genuine corrections and findings

- **The two partial exemptions are measured differently, not
  interchangeably**: the size-based exemption (≤10 employees) is
  measured company-wide, based on peak employment during the prior
  calendar year; the industry-based exemption applies establishment by
  establishment — a multi-establishment company can have some
  establishments exempt and others not, confirmed precisely from the
  regulation's own text rather than assumed uniform.
- **Both exemptions expressly preserve the separate serious-injury
  reporting duty** — confirmed from the same sentence granting each
  exemption, not merely inferred.
- **A precisely dated, two-tier reporting deadline**: "immediately"
  means not longer than 8 hours after the employer knew or with
  diligent inquiry would have known, extendable to 24 hours only if
  exigent circumstances are demonstrated — a distinct, more urgent
  timeline than routine Form 300 logging.
- **Distinguished retention periods across two related documents**: this
  document's 5-year Form 300/301/300A retention period is explicitly
  distinguished from the existing IIPP document's separate 1-year
  retention rule for inspection and training records — different
  regulations, different durations, not to be confused.
- Confirmed the current regulatory text of § 330(h)'s "serious injury or
  illness" definition contains no explicit minimum-hospitalization-
  duration language, and explicitly declined to compare it to the
  federal OSHA counterpart (29 C.F.R. § 1904.39) since that text wasn't
  independently fetched — an honest gap rather than an assumed parallel.

## Honest gap disclosed

The NAICS industry-exemption table (Appendix A to § 14300.2) was
confirmed to exist but not reproduced in full. The government-request
override provisions (§§ 14300.41, 14300.42) were named but not
independently verified. Category-specific recording criteria (needlestick
injuries, musculoskeletal disorders, hearing loss) and the "company
executive" certifier definition (§ 14300.32(b)(4)) were described from
the fetched text but not separately quoted.

## Method

WebFetch was EGRESS_BLOCKED for dir.ca.gov, so curl through the
sandboxed proxy was used for both fetch methods, each source fetched
twice with distinct User-Agent/HTTP settings, confirmed byte-identical
after whitespace normalization. All 17 citation quotes programmatically
confirmed as exact substrings of the confirmed text.

## Verification

- All eight sections fetched twice independently via curl with
  distinct settings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — consecutively numbered
  sections within the same 2002 rulemaking correctly disclosed as one
  source; §§ 342/330 (a different chapter, adopted separately) correctly
  disclosed as independent of the § 14300 series while not independent
  of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  accepted generic drafting-title reuse ("Acknowledgment of Receipt").
- Field names (`companyName`, `employeeName`, `programAdministratorName`)
  independently confirmed to match existing corpus field definitions
  (the last reused from the IIPP and Heat Illness Prevention documents).
  No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Cal/OSHA Injury and Illness Recording Requirements —
  Information Sheet (`cal_osha_injury_illness_recording_info_sheet`), 7
  clauses (5 authority + 2 drafting), in the During employment category.
  No new fields.
- Corpus: 2,185 → 2,192 clauses; 280 → 281 documents. Second document
  of wave 58.
