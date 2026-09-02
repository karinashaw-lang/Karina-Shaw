# Ending employment, new document: Employee's Request to Inspect Personnel and Payroll Records

## Why this document

The existing Final Wage Payment/Waiting-Time Penalty and Commission
Payout documents cover final WAGE PAYMENT itself. Neither covers the
separate statutory right to inspect and obtain copies of personnel
and payroll records — a right available during employment but very
commonly exercised at or around termination. This document covers
that genuinely distinct right, drawing on two separate statutes with
two separate deadlines.

## What this document covers

8 clauses: 2 drafting (request letter body, closing/signature) and 6
authority clauses:

- **`personnelrec_two_distinct_rights`** (Lab. Code § 1198.5(a)(1);
  § 226(c)) — the two separate statutory rights (personnel records vs.
  payroll records) with two different deadlines.
- **`personnelrec_who_may_request`** (Lab. Code § 1198.5(a)(1), (d),
  (e)) — who may request (current/former employee or representative)
  and the once-per-year cap for former employees.
- **`personnelrec_response_timeframe`** (Lab. Code § 1198.5(b)(1)) —
  the 30-calendar-day deadline, extendable to 35 by written agreement.
- **`personnelrec_exclusions`** (Lab. Code § 1198.5(h)) — the real
  statutory exclusions list.
- **`personnelrec_payroll_records_226`** (Lab. Code § 226(b), (c),
  (f)) — the separate 21-calendar-day payroll-records right.
- **`personnelrec_penalty_and_remedies`** (Lab. Code § 1198.5(k), (l),
  (m)) — the $750 penalty, injunctive relief, and infraction status.

## Genuine corrections caught during research

- The agent noted that § 226(b)-(c)/(f) is already partly covered by
  an existing `wagestmt_inspection_right` clause in the Wage Statement
  Itemization Policy document. Rather than depend on that other
  document's clause, the agent independently re-verified and re-cited
  § 226(b)/(c)/(f) here so this document is self-contained, disclosing
  the overlap explicitly in the relevant clause's `gap` field.
- Confirmed the two deadlines are genuinely different: 30 calendar
  days (extendable to 35 by written agreement) for personnel records
  under § 1198.5(b)(1), vs. 21 calendar days for payroll records under
  § 226(c).
- Verified the real § 1198.5(h) exclusions list, which includes two
  categorical employee exclusions (Public Safety Officers Procedural
  Bill of Rights employees; employees of agencies subject to the
  Information Practices Act of 1977) not anticipated in the task brief.
- Confirmed the § 1198.5(k) penalty is $750 — the same dollar figure
  as the separate § 226(f) payroll-records penalty, arising under two
  different statutes.

## Honest gap disclosed

The statutory text of § 1198.5(k) does not itself specify the
procedural mechanism through which an employee's own recovery of the
$750 penalty proceeds (a Labor Commissioner wage claim, a direct civil
action, or either) — disclosed as unresolved rather than assumed, since
no case law or DLSE guidance on the point was independently verified
this session.

## Method

Fetched Lab. Code §§ 1198.5 and 226 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical
apart from dynamic session-token noise. All 13 citation quotes verified
as exact substrings of the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — the agent caught and
  fixed three real leaks in `gap` fields during its own drafting
  process before delivery; independently re-confirmed clean on
  integration.
- Checked source-independence disclosure logic across all 6 authority
  clauses — the three same-section clauses
  (`personnelrec_who_may_request`, `personnelrec_penalty_and_remedies`,
  `personnelrec_payroll_records_226`) each carry an explicit "treated
  as one source, not independent" disclosure sentence — correct as
  delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`employeeName`, `companyName`) confirmed to match
  existing termination-document conventions exactly. New fields:
  `employmentStatus`, `requestDate`, `recordsRequested`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Employee's Request to Inspect Personnel and Payroll
  Records (`personnel_records_request`), 8 clauses (6 authority + 2
  drafting), in the Ending employment category. New fields:
  `employmentStatus`, `requestDate`, `recordsRequested`.
- Corpus: 789 → 797 clauses; 105 → 106 documents.
