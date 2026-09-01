# Estate Planning, fifth document: HIPAA Authorization

## Why this document

Continuing the Estate Planning build-out past the four core documents
(Will, Financial Power of Attorney, Advance Health Care Directive,
Revocable Living Trust). A standalone HIPAA Authorization is a distinct,
standard estate-planning instrument: it lets a named person receive
protected health information for reasons unrelated to health-care
decision-making authority — for example, so a family member who isn't a
designated health care agent can still get medical updates, or so an
agent can get records access even before a directive's decision-making
authority has actually been triggered. The existing Advance Health Care
Directive's `ahcd_records_access` clause already covers records access
tied to decision-making authority; this document is deliberately the
separate, narrower instrument.

## What this document covers

9 clauses: 2 drafting (the authorization declaration and signature block)
and 7 authority clauses. Unlike every other document in this project's
Estate Planning category, this one is primarily **federal law** — the
HIPAA Privacy Rule, 45 C.F.R. § 164.508 — since medical-privacy
authorization requirements are a national floor, not state-specific:

- **`hipaa_auth_general_rule`** (45 C.F.R. § 164.508(a)(1)) — the core
  rule: a covered entity can't use or disclose protected health
  information without a valid authorization.
- **`hipaa_auth_core_elements`** (45 C.F.R. § 164.508(c)(1)) — the actual
  required elements of a valid authorization (description of information,
  who's authorized, who receives it, purpose, expiration, signature).
- **`hipaa_auth_required_statements`** (45 C.F.R. § 164.508(c)(2)) — the
  separate, distinct list of required notice statements (revocation
  right, conditioning of treatment, redisclosure risk).
- **`hipaa_auth_revocation`** (45 C.F.R. § 164.508(b)(5)) — the actual
  revocation right and its two real exceptions.
- **`hipaa_auth_defective`** (45 C.F.R. § 164.508(b)(2)) — the concrete,
  specific list of what makes a signed authorization not valid.
- **`hipaa_auth_scope_distinction`** (45 C.F.R. §§ 164.508(a)(1) +
  164.506(a)-(b)) — how this authorization differs from a covered
  entity's separate ability to use/disclose information for treatment,
  payment, and health care operations without one.
- **`hipaa_auth_ca_state_law_note`** (Cal. Civ. Code § 56.10(a)) — an
  optional, explicitly-flagged bonus clause noting that California's own
  Confidentiality of Medical Information Act exists alongside the federal
  baseline, without conflating the two.

## Method

Fetched every federal citation directly from `ecfr.gov` (the official,
current electronic Code of Federal Regulations), and the one California
citation from `leginfo.legislature.ca.gov`. Every quote re-verified
against a second, independent fetch with a distinct User-Agent before
use — all confirmed byte-for-byte identical across both fetches.

This document required a different framing discipline than the rest of
this project's Estate Planning sector: instead of "one state's statute...
not a claim about which state's law governs," each clause's `gap` field
states that this is "a federal regulation that applies nationwide —
unlike the state-law documents elsewhere in this project's Estate
Planning category, this authorization's legal basis does not vary by
state." The one California citation is explicitly marked as a
supplemental, optional state-law layer, not part of the federal baseline,
consistent with this project's established discipline against conflating
different bodies of law within a single clause.

## Verification

- Every federal section fetched directly via `curl` against `ecfr.gov`;
  the one state citation fetched from `leginfo.legislature.ca.gov`. Both
  re-verified on a second, independent fetch with a distinct User-Agent.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked for duplicate clause IDs against the full corpus (none) and
  duplicate titles within this document's `clauseOrder` (none).
- Full-corpus regression run headless against all 43 documents: correct
  card count and titles, this document assembles all 9 clauses with no
  leftover placeholders, and zero errors across the whole run.

## Net changes

- New document: HIPAA Authorization (`hipaa_authorization`), 9 clauses
  (7 authority + 2 drafting), in the Estate Planning category.
- Corpus: 242 → 251 clauses; 42 → 43 documents.
