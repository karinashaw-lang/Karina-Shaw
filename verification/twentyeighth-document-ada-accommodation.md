# Twenty-eighth document — ADA Reasonable Accommodation Request Form

## Why this one

The Employee Handbook has carried a well-sourced, previously-audited `accommodation`
clause since Phase 2 — the *Taylor v. Phoenixville* four-part test and the *Bultemeyer*
good-faith standard for the interactive process — but it never had its own standalone
request form, and it only covered half the real picture: the employer's duty to engage
in good faith, not the actual scope of the duty to accommodate (and its limit) or what
happens to the medical information behind the request. This document completes that
picture and reuses real, already-verified work rather than re-deriving it.

## Research

Fetched 42 U.S.C. §§12111 and 12112 in full from Cornell LII — the undue-hardship
definition and factors, the reasonable-accommodation duty itself, and the
medical-information confidentiality requirements for current employees.

## The five clauses

- `accommodation_request_details` (drafting) — the actual request fields.
- `accommodation` (authority, **reused from the Handbook**) — the interactive-process
  good-faith standard, zero new research needed.
- `accommodation_undue_hardship` (authority, new) — the reasonable-accommodation duty
  itself and its real limit, citing §12112(b)(5)(A) and the full undue-hardship
  definition and four-factor test at §12111(10). Gap makes clear undue hardship is
  evaluated against the specific employer's size and resources, not accommodation cost
  in isolation.
- `accommodation_confidentiality` (authority, new) — the requirement that medical
  information behind an accommodation request stay in separate, confidential files,
  citing §12112(d)(4)(C) and the exceptions at §12112(d)(3)(B) (supervisors/managers on
  necessary restrictions, safety personnel on emergency-treatment needs, compliance
  investigators). Gap clarifies confidentiality doesn't mean total secrecy — it means
  the underlying medical detail stays restricted to those specific circumstances.
- `accommodation_ack` (drafting) — signature.

## Verification

- All five new quote fragments (§12112(b)(5)(A), §12111(10) definition + factors,
  §12112(d)(4)(C), §12112(d)(3)(B)) re-verified against a second, independent fresh
  fetch — programmatic substring match.
- Every `gap` and `title` field checked for `{{` before the regression run — clean on
  the first pass, continuing the discipline established after the Anti-Harassment
  Policy's two catches.
- Headless Playwright walkthrough of all 28 documents: zero console errors, zero
  leftover placeholders.
- Screenshot confirms the reused `accommodation` clause renders its full four-citation
  set correctly in this new document, alongside the two new authority clauses.

## Net changes

- `data/clauses.json`: +4 clauses (`accommodation_request_details`,
  `accommodation_undue_hardship`, `accommodation_confidentiality`,
  `accommodation_ack`), corpus now 93 clauses.
- `data/documents.json`: +1 document (`ada_accommodation_request`), corpus now 28
  documents.
