# Thirtieth document — Pregnant Workers Fairness Act Accommodation Request

## Why this one

Identified as a real gap while closing out the ADA Accommodation Request document: the
Pregnant Workers Fairness Act (PWFA), effective June 2023, is a distinct federal
accommodation duty that doesn't require the limitation to rise to the level of an ADA
disability. Nothing in the corpus stated this — the ADA Accommodation document only
covers the ADA's own test, and silently extending it to cover pregnancy-related
limitations would misstate the law that actually applies to most pregnancy
accommodation requests.

## Research

Fetched 42 U.S.C. § 2000gg (definitions, including "known limitation" and "qualified
employee") and § 2000gg-1 (the operative accommodation duty and its specific
restrictions on what an employer can and can't do) fresh from Cornell LII.

## The four clauses

- `pwfa_coverage` (authority) — the 15-employee threshold and the "known limitation"
  definition, citing § 2000gg(2)(B)(i) and § 2000gg(4). Gap makes explicit that this is
  a distinct statute from the ADA, not an ADA extension — the two overlap in some
  situations but apply different tests.
- `pwfa_accommodation_duty` (authority) — the duty itself: reasonable accommodation
  absent undue hardship, can't force a different accommodation than the one reached
  through the interactive process, can't force leave if another accommodation would
  work. Citing § 2000gg-1(1)-(2) and the "qualified employee" definition at
  § 2000gg(6). Gap flags the real, easy-to-miss carve-out: a temporary inability to
  perform an essential function doesn't remove PWFA protection if the inability is
  temporary, the function could be performed again soon, and it can be reasonably
  accommodated meanwhile.
- `pwfa_request_details` (drafting) — the actual accommodation request fields.
- `pwfa_ack` (drafting) — signature.

## Verification

- Both citation fragments in `pwfa_coverage` and both in `pwfa_accommodation_duty`
  re-verified against the fetched Cornell LII text, word for word, including the
  curly-quote apostrophe in "employee's representative."
- Every `gap` and `title` field checked for `{{` before the regression run — clean.
- Headless Playwright walkthrough: badge count matches (2), zero leftover
  placeholders, zero console errors. Screenshot confirms both badges expand with full
  citation sets.

## Net changes

- `data/clauses.json`: +4 clauses (`pwfa_coverage`, `pwfa_accommodation_duty`,
  `pwfa_request_details`, `pwfa_ack`), corpus now 101 clauses.
- `data/documents.json`: +1 document (`pwfa_accommodation`), corpus now 30 documents.
