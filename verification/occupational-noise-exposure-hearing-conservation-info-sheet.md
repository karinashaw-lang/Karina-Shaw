# During employment, new document: Occupational Noise Exposure and Hearing Conservation — Information Sheet

## Why this document

First processed item of wave 124 (During employment slot, 1×4
pattern). The agent ruled out two candidates via specific
section-number greps before landing here: personnel/payroll record
inspection rights (Lab. Code §1198.5) was found already extensively
covered (51 hits) across the existing Personnel Records Request and
Retention Duration documents; indoor heat illness prevention (8 CCR
§3396) was found already covered inside the existing Heat Illness
Prevention document, which addresses both outdoor and indoor
provisions. The chosen topic — Cal/OSHA's occupational noise standard
(8 CCR §§5095-5100) — was confirmed genuinely open: every apparent hit
on §§5095-5100 elsewhere in the corpus was a confirmed false positive
(Civil Code §§5100-5145, HOA election law, or Corp. Code §25100).
Personally reconfirmed via corpus search: zero genuine prior mentions
of §§5095 through 5100 in a Cal/OSHA context anywhere in the corpus.

## What this document covers

11 clauses: 2 drafting (declaration/scope, acknowledgment) and 9
authority clauses, citing 8 Cal. Code Regs. §§ 5095(a)-(b), 5096(a)-(d)
and Table N-1, 5097(a), (b)(1), (b)(4)-(5), (c)(1)-(2), (c)(5)-(6),
(c)(8), (c)(10), (d)(4)-(5), (d)(5)(A), (d)(8), 5098(a)(1), (a)(3),
(b)(2)-(3), 5099(a)(1)-(2), (b)(1), 5100(a), (d)(1)-(2), (e)-(f):

- **`occnoise_scope_and_industry_exemptions`** — which workplaces are
  covered and the limits of the agriculture/construction/oil-and-gas
  exemption.
- **`occnoise_action_level_definition`** — the 85 dBA action level and
  90 dB criterion sound level.
- **`occnoise_permissible_exposure_limits`** — Table N-1 and the
  required engineering/administrative-controls-before-PPE hierarchy.
- **`occnoise_hearing_conservation_program_and_monitoring`** — the
  program trigger, monitoring duty, and employee observation/
  notification rights.
- **`occnoise_audiometric_testing_program`** — baseline audiograms, the
  14-hour quiet period, and annual retesting.
- **`occnoise_standard_threshold_shift_response`** — the STS
  definition, 21-day written notice, and required follow-up.
- **`occnoise_hearing_protectors`** — no-cost availability, employee
  selection, and required attenuation.
- **`occnoise_training_and_information_access`** — annual training and
  access to the regulation's own text.
- **`occnoise_recordkeeping_and_records_access`** — retention periods,
  access rights, and transfer on business change.

## Genuine findings

- **A disclosed, load-bearing textual observation**: the
  `occnoise_scope_and_industry_exemptions` clause's gap explicitly
  notes that §5095(a)'s industry exemption names only §§5097-5100, not
  §5096 — meaning the exempt industries are not, on this text, relieved
  of the exposure-limit and control-measure duties. This is flagged as
  an inference from what the text does and doesn't say, not asserted
  as a settled legal conclusion.
- **A disclosed source-formatting artifact, explained rather than
  silently corrected**: the Table N-1 citation preserves the source's
  own dot-leader table formatting exactly ("90........... 8-0......
  8.00"); the clause's gap field was strengthened during integration
  review to explicitly spell out that this states an 8-hour-0-minute
  (8.00-hour) permitted duration at 90 dBA, and that the dots are
  typographic table-column leaders in the source, not substantive text
  or an ellipsis-truncation.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on regulatory text alone.

## Honest gap(s) disclosed

This document does not resolve whether the industries exempt from
§§5097-5100 are also exempt from §5096, does not reproduce the full
Table N-1 (every integer sound level from 90 through 115 dBA) or its
combined-exposure formula, does not restate the technical
monitoring-method requirements or audiogram technician-qualification
standards, does not reproduce every standard-threshold-shift follow-up
sub-step or the age-correction procedure, does not restate the
mandatory-use triggers or attenuation-evaluation methodology for
hearing protectors, does not reproduce every training-content topic or
the OSHA-materials-passthrough duty, and does not restate the
audiogram record-content requirements or the cross-referenced 8 CCR
§3204 access procedures.

## Method

Fetched 8 Cal. Code Regs. §§5095 through 5100 from dir.ca.gov, each
fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical. CourtListener's daily rate limit was
already exhausted on the agent's test call; no case law was used, a
disclosed and legitimate choice. All 34 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
one-hundred-and-sixty-sixth fetch (a new distinct curl User-Agent
string, "Groundtruth-166thVerify-OccupationalNoise/1.0") of all six
sections — all 34 citation instances confirmed clean on direct
normalized-whitespace substring match, zero extraction artifacts
encountered beyond the disclosed Table N-1 formatting, which was
independently inspected in the raw HTML `<pre>` block and confirmed to
be the source's own literal dot-leader table rendering, not an error.
The action level, the exemption's precise language, the hearing
conservation program triggers, the standard-threshold-shift definition,
and the recordkeeping retention periods were all independently
reconfirmed present in the freshly fetched text.

## Verification

- All six primary sources fetched twice independently by the research
  agent with distinct User-Agent strings, plus a one-hundred-and-
  sixty-sixth independent fetch during integration review; all 34
  citation instances confirmed clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean. The one
  dot-leader-formatted quote was specifically inspected and confirmed
  to be a genuine source artifact rather than an ellipsis-truncation.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `occnoise_` prefix has zero collisions. Independently
  reconfirmed the corpus's apparent §§5095-5100 hits are all false
  positives from unrelated Civil Code and Corporations Code sections.
- Checked every citation's `case` field for emptiness — all 34
  populated with proper citation identifier strings.
- No new fields required — all three fields (`companyName`,
  `employeeName`, `programAdministratorName`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Occupational Noise Exposure and Hearing Conservation —
  Information Sheet
  (`occupational_noise_exposure_hearing_conservation_info_sheet`), 11
  clauses (9 authority + 2 drafting), in the During employment
  category. No new fields.
- Corpus: 4,044 → 4,055 clauses; 520 → 521 documents. First processed
  item of wave 124.
