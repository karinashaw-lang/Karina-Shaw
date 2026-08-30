# Twenty-seventh document — FMLA Leave Request & Employer Notice

## Why this one

The single most common leave-of-absence request in U.S. employment, and one every
company with 50+ employees eventually has to handle. Generic templates routinely get
two things wrong: treating "12 months employed" as the only eligibility test (missing
the 1,250-hour and 50-employees-within-75-miles conditions), and treating restoration
as an absolute right (missing both its real limits and the highly-compensated-employee
exception). Both are covered here with the actual statutory text, not a paraphrase.

## Research

Fetched 29 U.S.C. §§2611, 2612, 2614, and 2615 in full from Cornell LII — the
eligible-employee definition, the leave entitlement, the restoration-to-position
provision (including its limitations and the highly-compensated-employee exemption),
and the interference/retaliation provisions.

## The six clauses

- `fmla_eligibility` (authority) — the three cumulative eligibility conditions, citing
  §2611(2)(A) and the worksite-size exclusion at §2611(2)(B)(ii).
- `fmla_entitlement` (authority) — the four most commonly used qualifying reasons,
  citing §2612(a)(1)(A)-(D). Gap discloses the two categories this clause doesn't
  cover: qualifying-exigency military family leave, and the 26-workweek (not 12)
  servicemember-caregiver leave.
- `fmla_request_details` (drafting) — the actual leave request fields.
- `fmla_restoration` (authority) — the restoration right, its real limits (no
  entitlement to accrue seniority/benefits during leave, no better position than the
  employee would otherwise have had), and the highly-compensated-employee exemption
  that lets an employer deny restoration under specific conditions — three separate
  citations (§2614(a)(1)-(2), §2614(a)(3), §2614(b)) for three distinct, real points.
- `fmla_no_interference` (authority) — interference and retaliation protection, citing
  §2615(a) and §2615(b) separately (rights-interference vs. proceeding-interference are
  textually distinct subsections).
- `fmla_ack` (drafting) — signature.

## Verification

- All 11 quote fragments across the four authority clauses re-verified against a
  second, independent fresh fetch of §§2611, 2612, 2614, and 2615 — programmatic
  substring match, not by eye.
- This document's clauses were written with the two bug classes caught in the previous
  document (Anti-Harassment Policy) specifically in mind: every `gap` and `title` field
  was checked for `{{` before the regression run, not after — and came back clean on
  the first pass, unlike the previous two documents in a row.
- Headless Playwright walkthrough of all 27 documents: zero console errors, zero
  leftover placeholders.
- Screenshot of the assembled document confirms all four badges expand with their full
  citation sets, and the leave-request fill-in fields render cleanly.

## Net changes

- `data/clauses.json`: +6 clauses (`fmla_eligibility`, `fmla_entitlement`,
  `fmla_request_details`, `fmla_restoration`, `fmla_no_interference`, `fmla_ack`),
  corpus now 89 clauses.
- `data/documents.json`: +1 document (`fmla_leave`), corpus now 27 documents.
