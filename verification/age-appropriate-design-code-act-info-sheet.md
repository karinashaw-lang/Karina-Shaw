# Confidentiality & IP, new document: California Age-Appropriate Design Code Act — Information Sheet

## Why this document

Confirmed by grep that "age-appropriate design code," "1798.99.28,"
and "netchoice" had zero hits anywhere. Read the CCPA Employee and Job
Applicant Data, Website/App Privacy Policy (CCPA), Genetic Information
Privacy Act, and CalOPPA documents in full — none address the AADC.
Fourth and last document of wave 74.

## What this document covers

8 clauses: 2 drafting (purpose/scope, acknowledgment) and 6 authority
clauses, citing Cal. Civ. Code §§ 1798.99.30(b)(1), (b)(4),
1798.99.31(a)(1)(A), (a)(5), (a)(6), (b)(1), (b)(7), 1798.99.35(a),
(c)(2), (d), and *NetChoice, LLC v. Bonta* at two stages of the
litigation:

- **`aadc_scope`** (§ 1798.99.30(b)(1), (b)(4)) — the statute's own
  six-indicator "likely to be accessed by children" coverage test —
  not a claim that every site a child could theoretically visit is
  covered.
- **`aadc_core_duties`** (§ 1798.99.31(a)(1)(A), (a)(5), (a)(6)) — the
  codified Data Protection Impact Assessment, age estimation (with its
  statutory alternative of applying children's protections to all
  consumers), and default-privacy-settings duties.
- **`aadc_prohibited_actions`** (§ 1798.99.31(b)(1), (b)(7)) — the
  materially-detrimental-use restriction and the dark patterns
  restriction.
- **`aadc_enforcement`** (§ 1798.99.35(a), (c)(2), (d)) — exclusive
  Attorney General enforcement, no private right of action, and the
  90-day notice-and-cure mechanism.
- **`aadc_netchoice_dpia_injunction`** — **the central finding**:
  traces *NetChoice I* (2024) affirming a preliminary injunction
  against the DPIA requirement and the notice-and-cure provision on
  First Amendment grounds, confirmed still controlling by a later
  panel's direct quotation.
- **`aadc_netchoice_current_status`** — **a second key finding**: the
  March 2026 Ninth Circuit panel VACATED the injunction as to the
  coverage definition and age estimation requirement (NetChoice didn't
  carry its facial-challenge burden), but AFFIRMED the injunction as
  to the data-use and dark-patterns restrictions on a DIFFERENT legal
  theory — due-process vagueness (undefined "material detriment,"
  "best interests," "well-being"), not First Amendment content-basis.

## Genuine corrections and findings

- **The central finding**: correctly distinguished which AADC
  provisions are currently enjoined from which are not, as of the most
  recent ruling reviewed — a genuinely mixed picture (DPIA and
  notice-and-cure enjoined on First Amendment grounds since 2024;
  data-use/dark-patterns restrictions enjoined since March 2026 on a
  separate vagueness theory; coverage definition and age estimation
  NOT enjoined) rather than treating the statute as either fully
  enforceable or fully dead.
- Confirmed the litigation's posture is a preliminary injunction, not
  a final judgment — the case remains pending and was remanded again
  on severability.
- Confirmed the statute's own text states no private right of action
  exists — enforcement is Attorney-General-exclusive.
- Correctly declined to resolve the current injunction status of the
  separate "policy enforcement requirement" (§ 1798.99.31(a)(9)),
  disclosed honestly as unresolved by the March 2026 opinion's own
  footnote rather than assumed either way.

## Honest gap disclosed

The full text of the 2024 *NetChoice I* opinion beyond its official
case summary could not be independently fetched this session due to a
CourtListener rate limit; the DPIA/notice-and-cure holdings rest on
that summary plus a later panel's direct quotation of *NetChoice I*.
§ 1798.99.30(a)'s CCPA-definitions incorporation, § 1798.99.31(b)(2)-(6)
and (8) (paraphrased or unquoted), § 1798.99.35(b) and (e), and
whether a separate statute (e.g. the UCL) might supply another
enforcement avenue are not restated or researched.

## Method

Fetched Cal. Civ. Code §§ 1798.99.30, 1798.99.31, and 1798.99.35 from
`leginfo.legislature.ca.gov` via curl (through the sandboxed proxy),
each fetched twice with distinct User-Agent strings, confirmed
byte-identical after whitespace normalization. Read the 2024 *NetChoice
I* case summary and the March 12, 2026 Ninth Circuit opinion in full
via CourtListener. All 14 citation quotes across the 6 authority
clauses programmatically confirmed as exact substrings. Independently
re-verified during integration review via a third fetch of all three
statutory sections (Chrome/Windows User-Agent) — all 10 statutory
quotes confirmed clean. The 4 case-law quotes could not be
independently re-checked during integration review because
CourtListener's rate limit had been reached this session (also
encountered by the research agent); this is disclosed rather than
silently skipped.

## Verification

- Statutory sections fetched twice independently by the research agent
  with distinct User-Agent strings, plus a third independent fetch
  during integration review; all 10 statutory quotes confirmed clean.
  Case-law quotes not independently re-checked this session due to a
  CourtListener rate limit — disclosed as a genuine, unresolved
  verification gap rather than presented as double-confirmed.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — same-section
  statutory citations correctly disclosed as not independent of one
  another; the two NetChoice opinions correctly disclosed as
  sequential rulings in one ongoing case, not fully independent
  corroborating sources, despite being separately published; correct
  as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`businessName`, `websiteURL`, `preparerName`,
  `signatureDate`) independently confirmed to match existing corpus
  field definitions. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: California Age-Appropriate Design Code Act —
  Information Sheet (`age_appropriate_design_code_act_info_sheet`), 8
  clauses (6 authority + 2 drafting), in the Confidentiality & IP
  category. No new fields.
- Corpus: 2,647 → 2,655 clauses; 346 → 347 documents. Fourth and last
  document of wave 74.
- **Wave 74 complete**: 2,629 → 2,655 clauses (26 new); 343 → 347
  documents (4 new: Coogan Law Trust Account [Hiring], California
  Grocery Worker Retention Law [Ending employment], Wage Order Uniform
  Requirement [During employment], California Age-Appropriate Design
  Code Act [Confidentiality & IP]).
