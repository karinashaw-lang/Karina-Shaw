# During employment, new document: Jury Duty and Witness Leave — Information Sheet

## Why this document

Confirmed by grep that "jury duty" had zero hits anywhere in the
corpus. This document fills that gap — but the research surfaced a
much more significant finding than a simple gap-fill (see below).

## What this document covers

8 clauses: 2 drafting (leave notice, acknowledgment) and 6 authority
clauses:

- **`juryduty_current_codification`** (Gov. Code § 12945.8 amendment
  note; Lab. Code § 230(k)-(l)) — where this protection is codified
  today, and the transition from the old Labor Code section.
- **`juryduty_jury_protection`** (Gov. Code § 12945.8(a)(1), (c)(1)) —
  jury duty leave protection and its notice condition.
- **`juryduty_witness_protection`** (Gov. Code § 12945.8(a)(2),
  (c)(1)) — witness leave protection, with a flagged notice-scope
  nuance.
- **`juryduty_pay_and_leave_usage`** (Gov. Code § 12945.8(g)-(h)) —
  pay status and use of accrued leave.
- **`juryduty_no_interference`** (Gov. Code § 12945.8(f)) — the
  anti-interference provision.
- **`juryduty_related_but_distinct_scope`** (Gov. Code § 12945.8(a)(4),
  (b)) — a pointer to the same section's separate crime-victim/
  domestic-violence leave provisions, deliberately out of scope here.

## Genuine corrections and findings

- **A major, session-critical correction to the task's own premise**:
  the research brief assumed Labor Code § 230 (lettered subsections
  (a)-(e)) was the current governing statute. Direct verification
  against `leginfo.legislature.ca.gov` showed the Legislature moved
  this protection out of the Labor Code and into FEHA, effective
  January 1, 2025 (AB 2499), now codified at Government Code
  § 12945.8, most recently amended by AB 406 (Stats. 2025, Ch. 148,
  effective October 1, 2025) and enforced by the Civil Rights
  Department rather than the DLSE. The old Labor Code § 230 was
  confirmed to contain its own savings clause: it applies only to
  conduct on or before December 31, 2024, and is scheduled for repeal
  January 1, 2035. The document is built on the correct, current
  statute, with the transition explained in a dedicated clause rather
  than silently substituted.
- **A precision finding**: witness leave (unlike jury duty leave) has
  no express statutory advance-notice requirement — the notice
  condition in § 12945.8(c)(1) enumerates only paragraphs (1), (3),
  and (4) of subdivision (a), and subdivision (b); paragraph (a)(2)
  (witness leave) is not among them. Confirmed by directly reading the
  statute's own enumeration rather than assuming notice applies by
  analogy.
- Confirmed § 12945.8 does not itself create a paid-leave benefit —
  only permission to use existing accrued leave — and caps unpaid
  leave at the FMLA's 12 weeks.
- **A deliberate, disclosed omission**: the old Labor Code § 230 had
  its own self-contained reinstatement/reimbursement remedy clause and
  a misdemeanor penalty provision; the verified current text of
  § 12945.8 contains neither. The document does not assert either
  exists in current law, stating only what the verified text actually
  says (that interference with the section's rights is an unlawful
  employment practice).
- Flagged the same section's separate crime-victim/domestic-violence
  leave provisions as a distinct, substantial topic deliberately left
  uncovered, with the crime-victim judicial-proceeding provision noted
  as not commencing until January 1, 2026.

## Honest gap disclosed

Did not independently verify former Labor Code § 230.1's current
status, or FEHA's general administrative/civil remedy statutes (Gov.
Code §§ 12960/12965) — both explicitly flagged as unverified rather
than assumed.

## Method

Fetched Gov. Code § 12945.8 and Lab. Code § 230 directly from
`leginfo.legislature.ca.gov` via curl with two distinct User-Agent
strings each — confirmed byte-identical both times. All 12 citation
quotes programmatically confirmed as exact substrings of the fetched,
normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are subsections of the same section
  (treated as one source) versus the genuinely separate Labor Code vs.
  Government Code sources; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  accepted generic title reuse ("Acknowledgment") — consistent with
  the corpus-wide pattern.
- Field names (`employeeName`, `companyName`, `dateSigned`,
  `cityState`) independently confirmed to match existing corpus
  convention. New fields: `courtName`, `serviceStartDate`,
  `serviceEndDate`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Jury Duty and Witness Leave — Information Sheet
  (`jury_duty_witness_leave_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the During employment category. New fields:
  `courtName`, `serviceStartDate`, `serviceEndDate`.
- Corpus: 1,745 → 1,753 clauses; 222 → 223 documents. Completes wave
  43 (Post-Offer Medical Examination, Employee Invention Statutory
  Limits and Shop Right, Workers' Compensation Retaliation, Jury Duty
  and Witness Leave).
