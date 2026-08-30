# Thirty-third document — Single-Member LLC Operating Agreement

## Why this one

The first document outside employment law — the start of the "broaden beyond
employment" phase the earlier check-in flagged as next. Business formation is
LegalZoom's flagship category (the LLC-formation package is their best-known
product), and a single-member operating agreement is the natural first document in
it: no multi-member voting, buyout, or admission-of-new-member mechanics to design,
just the core governance content every LLC operating agreement needs.

## Research

- **Federal tax classification**: fetched 26 C.F.R. § 301.7701-3 (the "check-the-box"
  regulation) fresh from Cornell LII — the default classification rule at
  §301.7701-3(b)(1): a single-member domestic entity is disregarded for federal tax
  purposes unless it elects otherwise. This is genuinely federal, jurisdiction-neutral
  content, unlike almost everything else formation-related (LLC formation itself is
  a state filing).
- **Liability shield**: Delaware's own code site (`delcode.delaware.gov`) is blocked
  by this environment's egress policy, so used California's Revised Uniform Limited
  Liability Company Act instead (Cal. Corp. Code § 17703.04), fetched fresh from
  California's official legislature site — the same domain already proven reliable
  earlier in this project for Business and Professions Code §16600. Found a real,
  useful two-part structure: (a) the basic liability shield, and (b) the alter-ego
  carve-out — including a specific, non-obvious protection that failing to hold
  formal member/manager meetings does *not* by itself establish alter-ego liability,
  as long as the LLC's own governing documents don't require holding them.

## The eight clauses

- `llc_formation_statement` (drafting) — sole member and 100% ownership statement.
- `llc_tax_classification` (authority) — the default disregarded-entity rule, citing
  26 C.F.R. §301.7701-3(b)(1). Gap discloses the election alternative and separates
  the federal tax question from the state legal-existence question.
- `llc_liability_shield` (authority) — the liability shield and its alter-ego
  exception, citing Cal. Corp. Code §17703.04(a) and (b). Gap explicitly frames this
  as one state's statute used as real evidence the pattern exists generally, not a
  claim about which state's law governs a specific company — the same disclosure
  style already established for the Non-Compete and Employee Non-Solicitation
  documents' California-sourced content.
- `llc_capital_contribution`, `llc_management`, `llc_distributions`, `llc_dissolution`
  (drafting) — the governance mechanics themselves, no legal claims.
- `llc_ack` (drafting) — signature.

## A UX fix surfaced by the new field shape

`renderOutput()`'s "Prepared for X · Y" header line hardcoded `employeeName` and
`companyName` — every one of the first 32 documents used those exact field ids, so
it never surfaced as a problem. This document uses `memberName` instead of
`employeeName` (there's no employment relationship here), and the hardcoded
destructuring rendered "Prepared for — · Acme Ventures, LLC" — a bare em dash where
the member's name should be. Caught this on my own screenshot review before treating
the document as done.

Fixed by replacing the duplicated destructuring in `renderOutput()` and
`buildPlainText()` with a shared `preparedForLine(answers)` helper that falls back
across `employeeName` / `memberName` and degrades gracefully if only one of person/
company is present, rather than assuming every future document family will share the
same two field ids. Re-ran the full 33-document regression afterward specifically to
confirm this shared-code change didn't alter the header line on any of the 32
existing employment documents (it doesn't — they all still resolve `employeeName`
exactly as before).

## Verification

- Both citations checked against a second, independent fetch after the initial
  research pass — exact match.
- Every `gap`/`title` field grepped for `{{` — clean.
- Headless Playwright walkthrough: badge count matches (2), the new "Business
  Formation" category chip appears correctly in the picker, zero leftover
  placeholders, zero console errors. Directly checked the meta line's rendered text
  after the `preparedForLine` fix: "Prepared for Jordan Lee · Acme Ventures, LLC".
- Full 33-document regression run clean.

## Net changes

- `data/clauses.json`: +8 clauses, corpus now 120 clauses.
- `data/documents.json`: +1 document (`llc_operating_agreement_single_member`),
  corpus now 33 documents. First entry in a new "Business Formation" category.
- `app.js`: added `preparedForLine()`, used by both `renderOutput()` and
  `buildPlainText()` in place of the hardcoded `employeeName`/`companyName`
  destructuring.
