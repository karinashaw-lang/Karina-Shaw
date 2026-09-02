# Business Formation, seventh new document: Corporate Board Resolution / Action by Written Consent

## Why this document

The existing Corporate Bylaws and Articles of Incorporation documents
cover governance structure and formation, not the actual mechanics of
taking a specific board or shareholder action without a meeting.
Confirmed non-duplicative by reading the existing `bylaws_` clauses
first — `bylaws_written_consent` already covers the general
shareholder-consent vote-count rule and director-election unanimity
exception; this document instead covers board written consent (not
covered anywhere), the meeting-notice-and-waiver alternative, the two
mechanical shareholder-consent rules (post-consent notice, revocation)
the existing clause's own gap note flagged but didn't cite, and
committee delegation.

## What this document covers

8 clauses: 3 drafting (consent heading, resolution text, signatures)
and 5 authority clauses:

- **`boardconsent_board_written_consent`** (Corp. Code § 307(b)-(c)) —
  board action without a meeting requires unanimous written consent
  from every director then serving, stricter than a meeting's
  majority-vote default.
- **`boardconsent_meeting_notice_and_waiver`** (Corp. Code § 307(a)(2),
  (a)(3)) — the meeting alternative's notice requirements and how a
  director waives notice.
- **`boardconsent_unanimity_distinction`** (Corp. Code §§ 307(b),
  603(a)) — the real structural asymmetry: board consent always
  requires unanimity, while shareholder consent generally needs only
  the same vote count a meeting would require, except for director
  elections.
- **`boardconsent_shareholder_consent_procedure`** (Corp. Code
  § 603(b)-(c)) — the post-consent notice duty to non-signing
  shareholders and the revocation deadline.
- **`boardconsent_committee_delegation`** (Corp. Code § 311) — a
  board's authority to delegate to a committee and the fixed statutory
  limits on that delegation.

## Genuine corrections caught during research

- The task brief guessed the meeting-notice requirement was at § 311
  and the waiver mechanism at § 307(a)(8). Both were wrong: § 311 is
  actually the committee-delegation statute; the waiver mechanism is
  § 307(a)(3) (§ 307(a)(8) is the majority-vote-at-a-meeting rule).
- The task brief assumed California requires unanimous written consent
  for both board AND shareholder action generally, by analogy to how
  other states are commonly described. Direct review shows that's
  wrong for shareholders: only director-election consent is truly
  unanimous; other shareholder action by written consent uses the same
  vote count a meeting would require, often well short of unanimous.
  Board consent, by contrast, genuinely has no lesser-vote option.

## Method

Fetched Corp. Code §§ 307, 311, 603 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed
byte-identical, with every quote re-checked as an exact substring of
the verified text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 5 authority
  clauses — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field name (`companyName`) reused from the existing Bylaws/Articles
  convention.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Corporate Board Resolution / Action by Written Consent
  (`board_written_consent`), 8 clauses (5 authority + 3 drafting), in
  the Business Formation category. New fields: `stateOfFormation`
  (reused from Bylaws), `resolutionDate`, `resolutionDescription`,
  `directorNames`.
- Corpus: 675 → 683 clauses; 90 → 91 documents.
