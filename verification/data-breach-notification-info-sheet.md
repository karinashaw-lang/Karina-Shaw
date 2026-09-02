# Confidentiality & IP, new document: Data Breach Notification — Information Sheet

## Why this document

The existing CCPA Service Provider Data Processing Agreement and
Website/App Privacy Policy documents concern ongoing CCPA data-
handling and notice obligations. This document covers a separate,
older statutory duty that predates and is independent of the CCPA:
notifying affected individuals after a security breach involving
personal information, under Civil Code § 1798.82.

## What this document covers

9 clauses: 2 drafting (purpose/scope, record and signature) and 7
authority clauses:

- **`databreach_covered_persons_and_breach_definition`** (Civ. Code
  § 1798.82(a)(1), (b), (g)) — who must comply and the statutory
  definition of "breach of the security of the system."
- **`databreach_personal_information_definition`** (Civ. Code
  § 1798.82(h)(1), (h)(2), (i)(1)) — the statutory definition of
  "personal information" for this section, narrower than and distinct
  from the CCPA's own broader definition.
- **`databreach_timing_requirement`** (Civ. Code § 1798.82(a)(2)(A),
  (a)(2)(B), (c)) — the current, recently amended 30-calendar-day
  fixed deadline and its permitted delay grounds.
- **`databreach_required_notice_content`** (Civ. Code § 1798.82(d)(1),
  (d)(2), (d)(3)) — required title, headings, plain-language format,
  and minimum content, versus optional/discretionary content.
- **`databreach_substitute_notice`** (Civ. Code § 1798.82(j)(3)) — the
  $250,000/500,000-affected-person/insufficient-contact-information
  thresholds for substitute notice.
- **`databreach_ag_notification`** (Civ. Code § 1798.82(f)) — the
  500-resident threshold and 15-calendar-day deadline for notifying
  the California Attorney General.
- **`databreach_civil_remedies`** (Civ. Code § 1798.84(b), (c), (e)) —
  the Customer Records title's general civil action and injunctive
  relief, with a careful correction distinguishing them from the
  fixed-dollar penalties in (c), which are tied specifically to a
  different section (§ 1798.83), not to § 1798.82.

## A major, honestly surfaced correction

The task brief asked the agent not to assume whether a fixed deadline
(e.g., 45 days) exists or whether the standard is only the flexible
"most expedient time possible and without unreasonable delay"
language. Neither guess was right: the currently operative statute
(as amended by SB 446, Stats. 2025, Ch. 319, Sec. 1, effective January
1, 2026 — in force less than a year as of this document's research
date) fixes a **30-calendar-day deadline** from discovery or
notification of the breach, subject to law-enforcement and scope-
determination delay grounds. The older "most expedient time
possible"/"without unreasonable delay" phrasing does not appear
anywhere in the current statutory text. The agent explicitly disclosed
that it did not fetch or verify the pre-amendment statutory language,
so this document does not claim to know what the prior standard read.

## Other findings

- Confirmed the substitute-notice thresholds ($250,000 cost / 500,000
  affected persons / insufficient contact information) and the
  Attorney General notification terms (500 residents, 15 calendar
  days, sample copy excluding PII) exactly as anticipated.
- Confirmed § 1798.82(h)(2) (username/email + password/security
  question) is present in the current definition, though the agent
  did not independently verify which amendment first added it.
- Caught and correctly distinguished a real, easy-to-blur point: the
  $500/$3,000 per-violation civil penalties in § 1798.84(c) are tied
  specifically to violations of § 1798.83 (direct-marketing
  disclosure), not to § 1798.82 (breach notification) — § 1798.82
  itself has no penalty provision, though the title's general civil
  action in § 1798.84(b) is not limited to any one section.

## Honest gaps disclosed

- The parallel state-agency breach-notification statute (Civ. Code
  § 1798.29) was not fetched or verified.
- Pre-SB-446 statutory text and legislative history were not checked.
- The Government Code cross-reference in § 1798.82(f) (public records
  law) and § 1798.82(j)(4)-(5)'s narrower account-security-only
  substitute notice were not independently researched.
- The CCPA's separate, narrower private right of action for certain
  security-failure breaches (Civ. Code § 1798.150) was noted as
  out of scope, not researched.

## Method

Fetched Civ. Code §§ 1798.82 and 1798.84 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical.
All quotes programmatically confirmed as exact substrings of the
verified text (including curly-quote punctuation, which the agent
initially got wrong with straight quotes and then corrected).

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — the delivering agent
  found and fixed 5 leaks (`{{businessName}}` embedded in `gap`
  narrative text) during its own self-check before delivery; my
  independent re-check on integration confirmed clean.
- Checked source-independence disclosure logic across all 7 authority
  clauses — every clause combining subsections of one statutory
  section carries an explicit disclosure; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`businessName`, `contactMethod`, `dateSigned`)
  confirmed to match existing CCPA documents' fields exactly. No new
  fields introduced.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Data Breach Notification — Information Sheet
  (`data_breach_notification_info_sheet`), 9 clauses (7 authority + 2
  drafting), in the Confidentiality & IP category. No new fields.
- Corpus: 991 → 1,000 clauses; 129 → 130 documents.
