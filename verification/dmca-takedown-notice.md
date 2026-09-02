# Confidentiality & IP, new document: DMCA Takedown Notice (Copyright Infringement Notification)

## Why this document

The existing Copyright Assignment Agreement document covers ownership
transfer, not infringement enforcement. This document covers a
genuinely distinct area: the notice-and-takedown procedure under 17
U.S.C. § 512(c) — the federal mechanism a copyright holder uses to get
infringing content removed from a website or platform, and the
service provider's own liability safe harbor for responding to such
notices.

## What this document covers

8 clauses: 3 drafting (notice identification, required statements,
signature block) and 5 authority clauses:

- **`dmca_required_elements`** (17 U.S.C. § 512(c)(3)(A)) — the six
  required elements of an effective takedown notification.
- **`dmca_designated_agent_requirement`** (17 U.S.C. § 512(c)(2)) — the
  designated-agent precondition to the safe harbor.
- **`dmca_misrepresentation_liability`** (17 U.S.C. § 512(f)) —
  damages liability for a knowing material misrepresentation.
- **`dmca_counternotice_putback`** (17 U.S.C. § 512(g)(2)(B)-(C),
  (g)(3)) — the counter-notification content requirements and the
  10-to-14-business-day put-back window.
- **`dmca_not_a_lawsuit`** (17 U.S.C. § 512(l); § 501(b); § 411(a)) —
  confirms § 512 is a service-provider liability mechanism, not a
  direct claim against an infringer, and that registration is required
  to sue but not to send a takedown notice.

## Genuine corrections caught during research

- None of the task brief's substantive assumptions were wrong — the
  agent independently verified the six § 512(c)(3)(A) elements, the
  § 512(f) damages remedy, and confirmed the put-back window is
  specifically 10-to-14 business days (not a different figure) rather
  than assuming it matched the brief's framing.
- The task brief asked whether § 512 creates a private right of action
  directly against an infringer. Direct review of § 512(l) confirms
  affirmatively (not just by inference) that it does not — a copyright
  owner's claim against an infringer arises separately under Title
  17's general infringement provisions (§ 501(b)), and registration is
  a precondition to suit (§ 411(a)) but is not among the required
  elements of a takedown notice.

## Honest gap disclosed

*Lenz v. Universal Music Corp.*, 815 F.3d 1145 (9th Cir. 2016), could
not be independently verified this session: CourtListener returned a
daily rate-limit error on every attempt, and direct/automated fetches
from the Ninth Circuit's own opinion PDF and other sources were
blocked by this environment's network egress controls. Rather than
quote the case from memory, it was omitted entirely from
`dmca_misrepresentation_liability`'s citations; the gap is disclosed
explicitly in that clause's `gap` field, including what was tried and
why it failed. That clause rests only on the directly-fetched,
dual-verified text of § 512(f) itself.

## Method

Fetched 17 U.S.C. §§ 512(c), 512(f), 512(g), 512(l), 501(b), and
411(a) from `law.cornell.edu/uscode`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical.
§ 512(c)(3)(A) additionally cross-checked against the independent
uscode.house.gov (OLRC) mirror — matched word-for-word.

## Verification

- All citations fetched twice independently with distinct User-Agents
  (plus one additional independent-mirror cross-check); confirmed
  clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 5 authority
  clauses — the one same-section clause (`dmca_counternotice_putback`,
  citing two subsections of § 512(g)) carries an explicit disclosure
  sentence; `dmca_not_a_lawsuit` cites three different sections and its
  gap field notes that distinction for clarity even though disclosure
  isn't required for different sections.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- New fields (no existing two-party notice document with a matching
  field set to reuse): `copyrightHolderName`, `serviceProviderName`
  (reused from the CCPA Service Provider document's naming
  convention), `copyrightedWorkDescription`, `infringingContentURL`,
  `contactInfo`, `dateSigned` (reused).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: DMCA Takedown Notice (Copyright Infringement
  Notification) (`dmca_takedown_notice`), 8 clauses (5 authority + 3
  drafting), in the Confidentiality & IP category. New fields:
  `copyrightHolderName`, `copyrightedWorkDescription`,
  `infringingContentURL`, `contactInfo`.
- Corpus: 765 → 773 clauses; 102 → 103 documents.
