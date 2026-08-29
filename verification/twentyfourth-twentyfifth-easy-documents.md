# Documents 24-25 — job description template and interview scorecard

## Documents

- **Job Description Template** (`job_description`, 1 clause): `job_description_details`
  — a fill-in template with sections for summary, responsibilities, and required/
  preferred qualifications. First document in the corpus with no `employeeName`
  field at all, since a job posting has no specific person attached to it yet — a
  reminder that a document's field list is independent per document, not a fixed set.
- **Interview Scorecard** (`interview_scorecard`, 1 clause):
  `interview_scorecard_details` — a standard candidate-evaluation form (ratings,
  strengths, concerns, recommendation). Reuses `employeeName` for the candidate's
  name (labeled "Candidate name" for this context) and `jobTitle` for the position,
  matching the established pattern of relabeling shared field ids per document
  (`background_check`'s "Applicant / employee name," `referral_bonus`'s "Referring
  employee's name").

Both are single-clause, fully drafting documents — genuinely useful hiring-team
paperwork with no legal claim to source.

## Verification

- Headless Playwright walkthrough of all 25 documents (corrected script): zero console
  errors, zero leftover placeholders.

## Net changes

- `data/clauses.json`: +2 new clauses, both drafting, corpus now 78 clauses.
- `data/documents.json`: +2 documents (`job_description`, `interview_scorecard`),
  corpus now 25 documents.

## Status check-in

This closes out a run of six batches (18 documents) added purely from the "easy,
low-hanging fruit" instruction: property return, direct deposit, referral bonus,
written warning, onboarding checklist, exit interview, employment verification,
timesheet, overtime authorization, PTO request, expense reimbursement, salary
change, job description, and interview scorecard — plus one real cross-document
defect (`at_will`'s gap text) caught and fixed along the way.

The corpus is now broad: 25 documents spanning hiring, active employment, and
termination, built on 78 clauses with real, independently-verified sourcing wherever
a document actually makes a legal claim, and honest `drafting` classification
everywhere it doesn't. The remaining low-effort, high-value ideas in this specific
vein (employment-HR paperwork) are largely exhausted — what's left either repeats a
pattern already covered, or would need the kind of real research the last three
document-additions before this streak used (WARN Act, arbitration, background checks).
