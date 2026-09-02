# Hiring, new document: Apprenticeship Agreement — Information Sheet

## Why this document

No existing document or clause covered California's statutory
apprenticeship framework — a distinct compliance regime administered
through the Division of Apprenticeship Standards.

## What this document covers

8 clauses: 2 drafting (declaration, signature/acknowledgment) and 6
authority clauses:

- **`apprentice_definition`** (Lab. Code § 3077) — the definition of
  "apprentice," including the age-16 minimum and the correct
  contracting counterparty.
- **`apprentice_agreement_required_content`** (Lab. Code § 3078) —
  the full, 11-item required content of a written apprentice
  agreement.
- **`apprentice_agreement_approval`** (Lab. Code § 3079; § 3077) —
  the approval process, with an honest gap on the consequence of a
  skipped approval.
- **`apprentice_wage_schedule`** (Lab. Code § 3078(f); § 3071;
  § 3076) — the graduated wage schedule requirement, without a
  statutory percentage mandate.
- **`apprentice_related_supplemental_instruction`** (Lab. Code
  § 3078(d); § 3078.5) — the related/supplemental instruction
  requirement, including the 144-hour/2,000-hour time-based figures.
- **`apprentice_termination_cancellation`** (Lab. Code § 3078(g);
  § 3081) — termination and cancellation mechanics.

## Genuine corrections and findings

- Confirmed the age-16 minimum, but corrected the contracting
  counterparty: the written agreement is with an employer or program
  sponsor, not an "apprenticeship committee" — committees approve and
  administer agreements, they aren't the contracting party.
- **A significant correction**: the required-content list has 11
  items, (a)-(k), not the 6 originally assumed. In addition to
  parties, trade, term, wages, hours split, and probation, the
  statute also requires the apprentice's date of birth, a process-by-
  process training schedule, a dispute-routing provision, an
  employer-transfer provision, a catch-all for Council/Chief-
  prescribed additional terms, and an injury-liability clause.
- On approval, the original assumption that unapproved agreements
  might not be enforceable was not confirmed. The statute requires
  approval (by the local joint committee, CBA parties, or the
  administrator, with a copy filed with the Division) and separately
  requires the Chief to approve the occupation's term, but nowhere
  states the consequence of a skipped approval — disclosed as an
  honest open gap rather than an asserted unenforceability rule.
- Confirmed the statute requires the agreement to state a graduated
  wage scale but does not itself specify percentages — those come from
  Council-issued standards (building/construction/firefighter
  programs) or Chief-set standards (other programs).
- **A genuine correction on related/supplemental instruction**: the
  statute does specify a concrete figure for the "time-based"
  approach — at least 144 hours of related/supplemental instruction
  and 2,000 hours of on-the-job learning. This applies to building/
  construction/firefighter programs (mandatory) and is one of three
  optional measurement approaches for other programs (competency-
  based/hybrid programs use a 6-month minimum instead).
- Confirmed termination mechanics: a probation period capped at the
  shorter of 25% of program length or one year; post-probation
  termination by administrator (mutual agreement) or cancellation
  (good and sufficient reason); a separate investigation/hearing
  process under § 3081. No standalone "notice to the Division upon
  cancellation" provision distinct from the initial filing requirement
  was found — disclosed as a gap, not asserted as nonexistent.

## Honest gaps disclosed

- No statutory text found for the legal consequence of an unapproved
  or unfiled agreement.
- No statutory text found for a cancellation-specific notice-to-
  Division requirement.
- Section 3076's Chief-set wage-standard process for non-building/
  firefighter programs is confirmed to exist but not detailed to the
  same depth as § 3071's Council process — CCR Title 8 regulatory
  detail was not pursued, prioritizing the statute.
- No case law was used — this topic is purely statutory.

## Method

Fetched Labor Code §§ 3071, 3076, 3077, 3078, 3078.5, 3079, and 3081
directly from `leginfo.legislature.ca.gov`, each verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-identical. All 12 citation quotes programmatically confirmed as
exact substrings of the fetched, normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration. Independently re-confirmed no
  fabricated or placeholder quote text appears in any citation.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Signature and Acknowledgment") confirmed as the
  corpus's established, accepted generic drafting-title-reuse pattern.
- Field names (`cityState`, `dateSigned`) independently confirmed to
  match existing corpus convention. New fields: `apprenticeName`,
  `employerOrProgramName`, `tradeOrCraft`, `apprenticeshipTerm`,
  `wageSchedule`, `probationaryPeriod`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Apprenticeship Agreement — Information Sheet
  (`apprenticeship_agreement_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Hiring category. New fields: `apprenticeName`,
  `employerOrProgramName`, `tradeOrCraft`, `apprenticeshipTerm`,
  `wageSchedule`, `probationaryPeriod`.
- Corpus: 1,444 → 1,452 clauses; 181 → 182 documents.
