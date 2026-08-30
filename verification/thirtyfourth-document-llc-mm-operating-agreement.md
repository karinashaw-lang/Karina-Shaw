# Thirty-fourth document — Multi-Member LLC Operating Agreement

## Why this one

The second Business Formation document, following through on the plan laid out
after the single-member LLC document shipped. Genuinely distinct content from the
single-member version — multiple owners means voting, a membership/ownership
schedule, and a real default-distribution question that doesn't arise when there's
only one member to distribute to.

## An architecture constraint, handled honestly

The wizard's field system is a flat set of named text inputs — there's no
"add another member" repeating-field UI. Rather than build that (a separate,
larger engineering feature) or fake a fixed member count, the membership,
contribution, and ownership schedule is a blank fill-in table with three starter
rows and an explicit "add additional lines as needed" instruction — the same
established pattern this corpus already uses for other variable-length content
(e.g. the PWFA accommodation-request fields, the classification checkbox). This
also means the document only needs two fields (`companyName`, `stateOfFormation`,
both reused from the single-member document) rather than a fixed set of
member-name fields that would silently cap the document at some arbitrary number
of owners.

## Research

- **Tax classification**: reused the exact, already-verified 26 C.F.R.
  §301.7701-3(b)(1) quote from the single-member document (same citation object,
  no new fetch needed) — it already states both halves of the default rule
  ("partnership if two or more members... disregarded if a single owner"), so the
  multi-member clause draws on the same source, just the other half of the same
  sentence.
- **Liability shield**: reused the same Cal. Corp. Code §17703.04(a)/(b) citations
  from the single-member document, generalized from `{{memberName}}` to plural
  "a member"/"members" language since this document has no single named-member
  field.
- **Distributions** (new research): fetched Cal. Corp. Code §17704.04 fresh from
  California's legislature site. Found a genuinely useful, non-obvious default: if
  an operating agreement doesn't say how to split distributions, the default is
  based on the *value of each member's capital contribution* — not stated
  ownership percentage. That matters concretely for a common real setup (a member
  contributing services rather than cash, given a stated ownership percentage that
  doesn't match a dollar contribution) — under the default rule that member could
  receive far less than their ownership percentage implies, or nothing, absent an
  agreement saying otherwise. Also found that a departing member isn't
  automatically entitled to a distribution under the same default framework. Both
  quotes independently re-verified via a second fetch before writing.

## The eight clauses

- `llc_mm_formation_statement`, `llc_mm_members` (drafting) — formation statement
  and the membership/contribution/ownership schedule.
- `llc_mm_tax_classification` (authority) — partnership default, reusing the
  single-member document's verified citation.
- `llc_mm_liability_shield` (authority) — same liability-shield and alter-ego
  citations as the single-member document, generalized to plural members.
- `llc_mm_management` (drafting) — member-managed/manager-managed checkbox
  (matching the existing checkbox convention from `classification_decision`) plus
  a majority-vote default for ordinary decisions and a unanimous-vote requirement
  for admitting a new member, amending the agreement, or selling substantially all
  assets — the parties' own chosen structure, not a legal claim.
- `llc_mm_distributions` (authority) — the new default-distribution research above.
- `llc_mm_dissolution` (drafting) — majority-vote dissolution trigger.
- `llc_mm_ack` (drafting) — repeating signature-line block, same "add additional
  lines" pattern as the membership schedule.

## Verification

- Both new distribution-default quotes checked against a second, independent
  fetch before writing — exact match.
- Every `gap`/`title` field grepped for `{{` — clean.
- Headless Playwright walkthrough: badge count matches (3), zero leftover
  placeholders, zero console errors. The "Prepared for" header correctly falls
  back to company-name-only (via the `preparedForLine()` helper added for the
  single-member document) since this document has no person-name field at all —
  confirms that fix generalizes beyond the two cases it was written for.
- Full 34-document regression run clean.

## Net changes

- `data/clauses.json`: +8 clauses, corpus now 128 clauses.
- `data/documents.json`: +1 document (`llc_operating_agreement_multi_member`),
  corpus now 34 documents.
