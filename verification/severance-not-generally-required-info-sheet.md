# Ending employment, new document: Severance Pay — Is It Required? Information Sheet

## Why this document

The originally-planned Ending employment document for wave 72 (UI
misconduct disqualification) turned into a gap-fix patched into the
existing `ui_claimant_info_sheet` document rather than a standalone
document, leaving the category's fourth slot open. Confirmed by grep
that no existing content states "no general requirement to pay
severance" or equivalent phrasing. Read the existing `severance`
document in full (fields `companyName`/`employeeName`/
`severanceAmount`; clauses `sev_terms`/`sev_release`/`sev_owbpa`/
`sev_ack`) — confirmed it is a drafting template for an actual
severance agreement, assuming severance is being paid, not an
explainer of whether it is legally required in the first place. Also
read the full `california_warn_act_info_sheet` document (8 clauses) —
confirmed no overlap; it covers Cal/WARN mechanics but never states
the general absence-of-severance-mandate point. Confirmed
non-duplicative. Fourth and last document of wave 72.

## What this document covers

5 clauses: 2 drafting (purpose/scope, acknowledgment) and 3 authority
clauses, citing *Scott v. Pacific Gas & Electric Co.* (1995) 11
Cal.4th 454, *Asmus v. Pacific Bell* (2000) 23 Cal.4th 1, and Cal.
Labor Code § 1402(a)-(b):

- **`severancenotrequired_general_absence`** — **the central
  finding**: California law gives no general, default right to
  severance pay simply because employment ends; unlike final wages,
  which state law requires by fixed deadlines regardless of
  circumstances, no statute or common-law rule entitles an employee to
  severance by default. Grounded in the California Supreme Court's
  approach to severance policies as a matter of contract-formation
  doctrine rather than a standing entitlement, plus this corpus's own
  already-verified final-wages documents, none of which identify a
  severance mandate.
- **`severancenotrequired_promise_enforceable`** — an employer's own
  voluntary severance policy or promise can become a binding
  unilateral contract once made and accepted (typically simply by the
  employee continuing to work), per *Asmus v. Pacific Bell* — the
  ordinary contract-law mechanism, not a default statutory
  entitlement.
- **`severancenotrequired_warn_distinction`** — distinguishes the
  California WARN Act's narrow, separate notice-failure liability
  (Lab. Code § 1402: back pay/benefits, capped at 60 days) from a
  general severance entitlement — it functions like severance in
  practice but is legally a penalty for a notice failure, owed by
  nothing else.

## Genuine corrections and findings

- **The central finding**: verified via case law (not a bare statutory
  canvass) that California courts analyze severance-pay policies
  exclusively through contract-formation doctrine — reasoning that
  would be unnecessary if the law already guaranteed severance pay by
  default. Confirmed via *Scott* (severance-pay policies can become
  implied contract terms, just like no-demotion or no-termination
  policies) and *Asmus* (a unilateral-contract theory, formed only
  upon employee acceptance).
- Confirmed the WARN Act's § 1402 liability is a notice-failure
  penalty, not a severance mandate — an employer that gives timely,
  complete notice owes nothing further under that statute, and an
  employer/event outside Cal/WARN's coverage thresholds is not reached
  by it at all.
- **Caught and fixed a real citation-accuracy bug during integration**:
  the delivered *Asmus* bracketed quote used a curly apostrophe (’) in
  "employer's agreement," but the source opinion (confirmed via
  CourtListener, opinion id 1159643) uses a straight apostrophe (').
  Verified the bracketed text itself is genuinely part of the *Asmus*
  opinion (a citing court's own parenthetical characterizing *Chinn v.
  China Nat. Aviation Corp.*, not a fabricated paraphrase), then
  corrected the apostrophe character so the quote is an exact
  substring of the source text. The second *Asmus* quote ("In a
  unilateral contract, there is only one promisor...") and the *Scott*
  quote were both independently re-verified as exact substrings with
  no changes needed.

## Honest gap disclosed

WebFetch was completely blocked in this environment for every domain
tested (leginfo.legislature.ca.gov, dir.ca.gov, justia, findlaw, even
wikipedia/google), so the Labor Code and DIR/DLSE guidance could not be
independently re-fetched this session. The "general absence" conclusion
rests on case-law reasoning plus this corpus's own already-verified
final-wages documents never surfacing a severance mandate — not an
exhaustive, line-by-line statutory canvass affirmatively ruling out
every possible severance provision — and no source was found stating
the negative proposition ("California has no general severance-pay
statute") in so many words. The Cal/WARN § 1402 quotes are reused
verbatim from this corpus's own already-verified `calwarn_liability`
clause (checked 2026-09-02) rather than freshly fetched this session,
disclosed plainly. In *Asmus*, only the antecedent point (a severance
policy can become binding) is drawn on; *Asmus*'s broader holding
(modification/termination of an already-binding policy) is not
addressed. *Chinn v. China Nat. Aviation Corp.*, quoted by *Asmus*, was
not independently read or verified. The ERISA point (severance plans
can be ERISA welfare-benefit plans, but ERISA doesn't require employers
to create one) was investigated but omitted entirely — no clean quote
establishing the non-mandate point was found, so it was left out rather
than guessed at, per this project's standing discipline.

## Method

Fetched and read *Scott v. Pacific Gas & Electric Co.* (opinion id
1387313) and *Asmus v. Pacific Bell* (opinion id 1159643) in full via
CourtListener. All 3 citation quotes across the 3 authority clauses
programmatically confirmed as exact substrings of the confirmed source
text — including a byte-level apostrophe-character fix caught and
corrected during integration review (see above).

## Verification

- Both case-law opinions read in full via CourtListener; all quotes
  re-verified as exact substrings against the raw opinion text
  (`html_with_citations` field), catching and fixing one
  curly-vs-straight-apostrophe mismatch before merging.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — the two § 1402
  subsections correctly disclosed as parts of one statutory section;
  the two *Asmus* quotes correctly disclosed as drawn from the same
  opinion, not independent of each other; *Scott* and *Asmus* are
  genuinely independent sources; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); the
  reused title "Acknowledgment" matches this corpus's established
  cross-document pattern, not a substantive duplicate.
- No new fields; `companyName`/`employeeName` independently confirmed
  to match existing corpus field definitions.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: Severance Pay — Is It Required? Information Sheet
  (`severance_not_generally_required_info_sheet`), 5 clauses (3
  authority + 2 drafting), in the Ending employment category. No new
  fields.
- Corpus: 2,598 → 2,603 clauses; 338 → 339 documents. Fourth and last
  document of wave 72.
- **Wave 72 complete**: 2,575 → 2,603 clauses (28 new); 335 → 339
  documents (4 new: Domestic Worker Bill of Rights [During employment],
  UI misconduct case-law gap-fix [Ending employment, no new document],
  California Genetic Information Privacy Act [Confidentiality & IP],
  Talent Agencies Act [Hiring], Severance Pay — Is It Required?
  [Ending employment]).
