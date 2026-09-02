# Hiring, new document: Unpaid Internship Compliance — Information Sheet

## Why this document

No existing document or clause covered whether an internship can
lawfully be unpaid — a distinct legal-classification question governed
by its own federal test and a separate, non-identical California
standard.

## What this document covers

11 clauses: 2 drafting (program declaration, signature/acknowledgment)
and 9 authority clauses:

- **`internship_flsa_default_rule`** (29 U.S.C. §§ 206(a), 207(a)(1))
  — the FLSA's default rule that "employees" must be paid minimum wage
  and overtime.
- **`internship_employee_test_required`** (29 U.S.C. § 203(e)(1),
  (g)) — why the circular statutory "employee"/"employ" definitions
  require a legal test, not just a label.
- **`internship_primary_beneficiary_test`** (*Walling v. Portland
  Terminal Co.*, 330 U.S. 148 (1947)) — the doctrinal ancestor of the
  primary-beneficiary line of cases.
- **`internship_seven_factors`** — the factors bearing on which party
  is the primary beneficiary, explicitly flagged as a weaker sourcing
  tier since the primary DOL source (dol.gov) was blocked.
- **`internship_public_agency_volunteers`** (29 C.F.R. § 553.101(a))
  — the separate volunteer rule, scoped specifically to public
  agencies, not nonprofits generally.
- **`internship_nonprofit_workers`** (*Tony and Susan Alamo Foundation
  v. Secretary of Labor*, 471 U.S. 290 (1985)) — confirming nonprofits
  are not categorically exempt.
- **`internship_california_dlse_standard`** (DLSE Enforcement Manual
  § 46.6.4) — a genuine, corrective finding that California's DLSE
  currently applies an older six-factor federal-derived test, not the
  primary-beneficiary test.
- **`internship_california_prior_eleven_factor_test`** (1998 DLSE
  opinion letter) — DLSE's superseded, stricter eleven-factor test,
  presented as historical context.
- **`internship_misclassification_consequences`** (29 U.S.C. § 216(b))
  — the consequences if an unpaid internship is later found not to
  qualify, cross-referencing rather than duplicating this corpus's
  existing California wage-claim remedy clauses.

## Genuine corrections and findings

- **A significant, corrective finding**: California's DLSE's own
  currently-published Enforcement Manual states it applies the older
  six-factor federal test (derived from *Walling*), not the
  primary-beneficiary test that federal courts and the DOL itself have
  used since 2018 — a real divergence between the state agency's
  stated standard and the federal test, not confirmed to have
  converged.
- Confirmed the six-factor DLSE test itself superseded an even older,
  stricter eleven-factor test in 2010 — verified and cited both the
  current standard and the superseded test as historical context.
- Confirmed 29 C.F.R. § 553.101(a)'s volunteer regulation is scoped
  specifically to public agencies, not nonprofits generally.
- Confirmed via *Tony and Susan Alamo Foundation v. Secretary of
  Labor* that nonprofits are not categorically exempt from FLSA
  employee status — "volunteers" can be FLSA employees if they work
  "in contemplation of compensation."
- Cross-referenced, rather than re-derived, this corpus's existing
  DLSE wage-claim remedy clauses for misclassification consequences.

## Honest gaps disclosed

- *Glatt v. Fox Searchlight Pictures* (2d Cir.) could not be verified
  against primary text: CourtListener's rate limit was already
  exhausted, direct opinion-page fetches hit an AWS WAF challenge, and
  courtlistener.com was blocked by this environment's network egress
  policy. A lighter CourtListener search did confirm matching case
  entries exist, plus a Ninth Circuit case (*Benjamin v. B&H
  Education*) — corroborating existence, not content.
- DOL Fact Sheet #71's seven primary-beneficiary factors could not be
  fetched from dol.gov (blocked both directly and via WebFetch). The
  seven factors are stated from general legal knowledge, only
  partially corroborated by unfetched web-search snippets — flagged
  explicitly as a weaker sourcing tier rather than presented as
  independently verified.

## Method

Fetched 29 U.S.C. §§ 206, 207, 203, 216, and 29 C.F.R. § 553.101, and
the U.S. Supreme Court opinions in *Walling* and *Alamo Foundation*,
directly from `law.cornell.edu`; fetched the DLSE Enforcement Manual
§ 46.6.4 and a 1998 DLSE opinion letter (PDF) directly from
`dir.ca.gov`. Each source verified against a second, independent fetch
with a distinct User-Agent — confirmed byte-identical. All 11 citation
quotes programmatically confirmed as exact substrings of the fetched
text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — every same-source
  citation pair (§ 203(e)/(g); the two DLSE Manual quotes; the two
  1998 opinion-letter quotes; the two *Alamo Foundation* quotes) is
  explicitly flagged "treated as one source, not independent"; correct
  as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Signature and Acknowledgment") confirmed as the
  corpus's established, accepted generic drafting-title-reuse pattern.
- Field names (`companyName`, `startDate`, `dateSigned`, `cityState`)
  independently confirmed to match existing corpus convention. New
  fields: `internName`, `endDate`, `hoursPerWeek`,
  `educationalInstitution`, `supervisorName`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Unpaid Internship Compliance — Information Sheet
  (`unpaid_internship_compliance_info_sheet`), 11 clauses (9 authority
  + 2 drafting), in the Hiring category. New fields: `internName`,
  `endDate`, `hoursPerWeek`, `educationalInstitution`,
  `supervisorName`.
- Corpus: 1,269 → 1,280 clauses; 160 → 161 documents. This completes
  wave 27 (4 documents: 1031 Exchange, Professional Corporation,
  Unemployment Insurance Appeal, and this document).
