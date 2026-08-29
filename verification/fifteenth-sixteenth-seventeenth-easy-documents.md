# Documents 15-17 — three more lightweight documents, plus a reuse defect caught and fixed

## Documents

- **Written Warning / Corrective Action Notice** (`written_warning`, 4 clauses):
  `warning_description` and `warning_expectations` (drafting — the issue and
  expectations going forward), the existing **`at_will`** clause reused as-is, and
  `warning_ack` (drafting — explicitly notes that signing acknowledges receipt, not
  agreement, a real and accurate HR distinction).
- **New Hire Onboarding Checklist** (`onboarding_checklist`, 3 clauses):
  `onboarding_items` (drafting — W-4, equipment, handbook, emergency contact), the
  existing **`work_auth`** clause reused as-is (I-9 verification genuinely belongs in
  an onboarding checklist), and `onboarding_ack` (drafting).
- **Exit Interview Form** (`exit_interview`, 2 clauses): `exit_interview_questions`
  (drafting — five standard departure-feedback questions) and
  `exit_interview_completion` (drafting). No legal claim anywhere in this one; a
  feedback survey doesn't carry one.

Zero new legal research for two of the three documents — `at_will` and `work_auth`
were pulled from the existing 65-clause pool, which is exactly what the clause-pool
architecture is for.

## Real defect caught by the reuse itself

Screenshotting `written_warning` to confirm the reused `at_will` badge rendered
correctly surfaced a genuine problem: `at_will`'s gap text said *"That is exactly
where this document's own disclaimer (in the Welcome clause) currently sits — a real,
structural note for whoever finalizes this handbook, not a hypothetical."* That
sentence is only true inside the Handbook document, which has a `welcome` clause
containing a buried at-will disclaimer (the actual finding, sourced to *Lincoln v.
Wackenhut Corp.*, 867 P.2d 701 (Wyo. 1994)). `at_will` was already being reused in the
Offer Letter document too — with no `welcome` clause there either — so this was a
latent inaccuracy predating this session's changes; it just took a third reuse to make
it obviously wrong rather than something a reader might not think to question.

**Fix:** rewrote the gap to keep the real, sourced legal point (a disclaimer buried in
a handbook's welcoming section, rather than given its own prominent place, can be
legally insufficient) while removing the false, document-specific claim that this
issue is actively present wherever the clause appears. The rewritten gap now tells the
reader to check for this specific pattern *if* their document has a separate welcome or
introductory section — true and actionable in the Handbook (where the issue still
genuinely exists, unresolved) and neither false nor confusing in the Offer Letter,
Written Warning, or any future document that reuses `at_will`.

This is exactly the kind of cross-document consistency check that only becomes
visible once a clause built for one context gets reused in a genuinely different one
— worth a permanent note for future clause reuse: gap text that references "this
document's" specific structure needs to stay true across every document that clause
ends up in, not just the one it was written for.

## Verification

- Headless Playwright walkthrough of all 17 documents (corrected script): zero console
  errors, zero leftover placeholders.
- Targeted re-check: rendered the Handbook document specifically after the `at_will`
  gap rewrite to confirm the Lincoln v. Wackenhut finding still reads correctly and
  usefully in the one document where it's actually still an open, real issue.
- Screenshots taken of `written_warning` and `onboarding_checklist` confirming both
  reused clauses (`at_will`, `work_auth`) render their full citation sets correctly in
  the new contexts.

## Net changes

- `data/clauses.json`: +7 new clauses (corpus now 65 clauses), and one existing clause
  (`at_will`) edited for cross-document accuracy.
- `data/documents.json`: +3 documents (`written_warning`, `onboarding_checklist`,
  `exit_interview`), corpus now 17 documents.
