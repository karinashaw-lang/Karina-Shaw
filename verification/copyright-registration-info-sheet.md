# Confidentiality & IP, new document: Copyright Registration (U.S. Copyright Office) — Information Sheet

## Why this document

The existing Copyright Assignment Agreement covers transferring
ownership of an existing copyright. This document covers a genuinely
distinct, federal statutory topic: the process and legal effect of
registering a copyright with the U.S. Copyright Office. Confirmed no
overlap via review of the existing corpus (no `copyrightreg_*` id or
title collisions found anywhere).

## What this document covers

9 clauses: 2 drafting (work/claimant information record, closing
signature) and 7 authority clauses:

- **`copyrightreg_subject_matter_and_idea_expression`** (17 U.S.C.
  § 102(a), (b)) — what copyright protects and the idea/expression
  distinction.
- **`copyrightreg_basic_term_of_copyright`** (17 U.S.C. § 302(a), (c))
  — the basic term (life+70), and the distinct 95-year/120-year rule
  for anonymous, pseudonymous, and work-made-for-hire works, confirmed
  under the correct subsection.
- **`copyrightreg_registration_permissive_not_mandatory`** (17 U.S.C.
  § 408(a)) — registration is optional, not a condition of copyright's
  existence.
- **`copyrightreg_deposit_and_application_requirements`** (17 U.S.C.
  § 408(b)) — the deposit categories by publication status.
- **`copyrightreg_certificate_and_evidentiary_effect`** (17 U.S.C.
  § 410(a), (c)) — the certificate and its 5-year prima facie
  evidentiary window.
- **`copyrightreg_precondition_to_infringement_suit`** (17 U.S.C.
  § 411(a); Fourth Estate Public Benefit Corp. v. Wall-Street.com,
  LLC) — registration (or its refusal) as a precondition to an
  infringement lawsuit, with the Supreme Court's holding on what
  "registration...has been made" actually means.
- **`copyrightreg_safe_harbor_statutory_damages_fees`** (17 U.S.C.
  § 412) — the 3-month safe-harbor timing rule for statutory damages
  and attorney's fees.

## Genuine findings and honest handling of a rate-limited case citation

- All statutory mechanics matched the research brief's assumptions
  exactly (permissive registration, precondition to suit, 3-month safe
  harbor, 5-year evidentiary window) — no corrections needed there.
- CourtListener was rate-limited (125/day, already exhausted) when
  Fourth Estate v. Wall-Street.com was needed. Rather than quote from
  memory or skip the case, the agent located and fetched the Supreme
  Court's own opinion text from Cornell LII (`law.cornell.edu/
  supremecourt/text/17-571`), re-fetched independently with a distinct
  User-Agent, confirmed byte-identical, and pulled the exact holding
  language directly from that primary text.
- Honestly disclosed in the clause itself: the commonly-cited reporter
  pagination "586 U.S. 296 (2019)" was not independently confirmed
  against the bound U.S. Reports this session — the Cornell page
  displayed the case as a slip opinion without that pagination. Only
  the docket number, argued/decided dates, party names, and full
  holding text were directly verified.

## Honest gaps disclosed

- § 302's additional subsections on recording an author's date of
  death and the resulting presumption-of-death rule are not addressed
  (they concern proving the term's endpoint, not stating the term).
- § 408(c) (Register of Copyrights' authority to adjust deposit
  requirements by regulation), § 408(d) (correction procedure), and
  § 408(f) (preregistration) are noted as existing but not detailed.
- § 410(b) (refusal of registration) and § 410(d) (effective-date
  calculation) are noted as existing but not detailed.
- § 411(a)'s definition of "United States work" is not independently
  addressed.

## Method

Fetched 17 U.S.C. §§ 102, 302, 408, 410, 411, and 412 directly from
`law.cornell.edu/uscode`, each verified against a second, independent
fetch with a distinct User-Agent — confirmed byte-identical. All 12
citation quotes across the 9 clauses programmatically confirmed as
exact substrings of the verified text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — the delivering agent
  found and fixed 7 leaks (a `{{workTitle}}` placeholder embedded in
  `gap` narrative text) during its own self-check before delivery; my
  independent re-check on integration confirmed clean.
- Checked source-independence disclosure logic across all 7 authority
  clauses — every clause combining subsections of one statutory
  section carries an explicit disclosure; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`claimantName`, `workDescription`) confirmed to match
  existing Mechanics Lien Preliminary Notice and Copyright
  Assignment/Work Made for Hire documents' conventions. New fields:
  `workTitle`, `creationDate`, `firstPublicationDate`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Copyright Registration (U.S. Copyright Office) —
  Information Sheet (`copyright_registration_info_sheet`), 9 clauses
  (7 authority + 2 drafting), in the Confidentiality & IP category.
  New fields: `workTitle`, `creationDate`, `firstPublicationDate`.
- Corpus: 972 → 981 clauses; 127 → 128 documents.
