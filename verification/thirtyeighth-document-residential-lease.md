# Thirty-eighth document — Residential Lease Agreement

## Why this one

First document in a new category, Real Estate — the flagship document for the
category, analogous to how the Employee Handbook opened Employment and the
Single-Member LLC Operating Agreement opened Business Formation. Chosen for
genuinely well-documented, checkable statutory content: security deposit limits,
the habitability duty, and landlord entry-notice requirements are all real,
specific, litigated rules — not vague policy language.

## Research

Fetched four California Civil Code provisions fresh, all from the same
legislature site already proven reliable across six earlier documents:

- **Cal. Civ. Code § 1950.5** — the security deposit cap. Confirmed the current
  text reflects California's 2024 law change (the general cap dropped to one
  month's rent), plus two real exceptions worth disclosing: a small individual
  landlord (natural person, or an LLC whose members are all natural persons,
  owning no more than two properties totaling four units) can charge up to two
  months' rent instead, and a lease of six months or longer can separately
  require up to six months' rent as an advance payment — a different rule from
  the deposit cap, easy to conflate with it. Also pulled the 21-day itemized
  return requirement.
- **Cal. Civ. Code § 1941** — the landlord's habitability duty. Its own text says
  the duty applies "in the absence of an agreement to the contrary," which reads
  as if a lease could waive it.
- **Cal. Civ. Code § 1942.1** — resolves that apparent tension directly: any
  lease clause waiving the habitability duty is void as against public policy for
  any condition that actually makes the unit uninhabitable. Landlord and tenant
  can agree to have the tenant handle specific repairs as part of the rental
  terms, but that's different from waiving the duty itself. Caught this while
  reading §1941's full text rather than stopping at the first clean quote —
  exactly the kind of "check against the source's full picture" the checklist
  calls for, since quoting §1941 alone would have left an accurate-sounding but
  materially incomplete impression.
- **Cal. Civ. Code § 1954** — landlord's right to enter: limited to specific
  purposes, normal business hours except in an emergency or abandonment, written
  notice stating date/time/purpose, a 24-hour presumption of reasonableness (a
  presumption, not a floor), and a ban on abusing access to harass the tenant.

All ten quotes checked against a second, independent fetch before writing.

## The eight clauses

- `lease_parties_property`, `lease_rent` (drafting) — identifying facts.
- `lease_security_deposit` (authority) — the cap, the small-landlord exception,
  the six-month-lease advance-rent rule, and the return deadline, citing four
  subsections of §1950.5.
- `lease_habitability` (authority) — the duty and its non-waivability, citing
  §1941 and §1942.1 together so the apparent tension in §1941's own text doesn't
  stand unresolved.
- `lease_entry_notice` (authority) — entry conditions, notice, the 24-hour
  presumption, and the anti-harassment rule, citing four points from §1954.
- `lease_maintenance`, `lease_late_fees`, `lease_ack` (drafting) — tenant
  upkeep duties, a blank late-fee schedule, and signatures.

## A second instance of the `preparedForLine` gap, fixed generically this time

The same header-line bug caught on the first LLC document recurred: this
document's fields are `landlordName`/`tenantName`, not `employeeName`/
`memberName`/`companyName`, so `preparedForLine()` fell through to a bare em
dash. Rather than special-case a third pair of field ids (the same shortcut that
caused this to recur once already), generalized the fallback: when neither known
pair matches, it now reads the current document's own `fields` array in
declared order and uses the first one or two answered values. This should hold
for every future document family without further special-casing — confirmed by
re-running the full 38-document regression afterward to check the change didn't
alter the header line on any of the 32 already-shipped documents that do use the
original `employeeName`/`memberName`/`companyName` pattern.

## Verification

- All ten citations checked against a second, independent fetch — exact match.
- Every `gap`/`title` field grepped for `{{` — clean. Checked for duplicate
  clause titles within the document (the mistake made twice on earlier
  documents) — none found.
- Headless Playwright walkthrough: badge count matches (3), the new "Real
  Estate" category chip appears correctly, zero leftover placeholders, zero
  console errors. Confirmed the corrected header line reads "Prepared for Acme
  Properties, LLC · Jordan Lee."
- Full 38-document regression run clean.

## Net changes

- `data/clauses.json`: +8 clauses, corpus now 157 clauses.
- `data/documents.json`: +1 document (`residential_lease`), corpus now 38
  documents. First entry in a new "Real Estate" category.
- `app.js`: generalized `preparedForLine()`'s fallback to read the current
  document's own field list instead of only recognizing hardcoded field-id pairs.
