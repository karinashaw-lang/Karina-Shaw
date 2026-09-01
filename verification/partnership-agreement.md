# Business Formation, new document: General Partnership Agreement

## Why this document

Continuing the "go as deep as humanely possible" build-out into
Business Formation. A General Partnership Agreement is distinct from
the LLC operating agreements already in the corpus: California
partnership law lets a general partnership exist by operation of law,
with no signed paperwork required at all, and gives partners none of an
LLC's or corporation's liability shield. Sourced from the California
Uniform Partnership Act of 1994, Cal. Corp. Code § 16100 et seq.

## What this document covers

12 clauses: 3 drafting (formation/partners statement, capital
contributions, and acknowledgment) and 9 authority clauses:

- **`partnership_formation_default`** (§ 16101(a)(9)-(10), § 16202(a)-(b))
  — the real, often-surprising fact that a general partnership forms by
  operation of law whether or not the parties intend it, and that a
  "partnership agreement" can be written, oral, or implied.
- **`partnership_default_profit_loss_share`** (§ 16401(b)) — the default
  equal profit share and proportional loss share, regardless of unequal
  capital contributions.
- **`partnership_default_management`** (§ 16401(f)) — the default equal
  management-rights rule.
- **`partnership_fiduciary_duties`** (§ 16404(a)-(c)) — the actual
  statutory duty of loyalty (with its three enumerated components) and
  the narrower duty of care (limited to gross negligence, recklessness,
  intentional misconduct, or a knowing violation of law).
- **`partnership_property_ownership`** (§ 16204(a)-(d)) — the real
  statutory test for whether an asset is partnership property or a
  partner's separate property, including both rebuttable presumptions.
- **`partnership_personal_liability`** (§ 16306(a)-(b)) — the default
  joint-and-several personal liability structure, with the carve-out
  protecting a newly admitted partner from pre-admission obligations.
- **`partnership_records_access`** (§ 16403(b)) — the statutory
  books-and-records access right for current and former partners.
- **`partnership_dissociation_triggers`** (§ 16601(1)-(3), (6)(A), (7))
  — the real statutory list of what triggers a partner's dissociation.
- **`partnership_dissolution_not_automatic`** (§ 16801(1), (2)(A)-(C))
  — the genuinely significant modern-law point that a partner's
  departure does not automatically dissolve the partnership (a real
  change from the 1914 Uniform Partnership Act's default), with the
  actual statutory dissolution triggers for at-will and term
  partnerships.

## Method

A background research agent fetched all candidate California
Corporations Code sections directly from `leginfo.legislature.ca.gov`,
each verified against a second, independent fetch with a distinct
User-Agent. One access-path note: § 16101 redirects to a disambiguation
page on `codes_displaySection.xhtml`; the agent worked around this using
`codes_displayText.xhtml` to render the section unambiguously, verified
the same two-fetch way.

The research report already used correct generic phrasing in every gap
field (e.g., "a specific general partnership") rather than
`{{partnershipName}}` — the `{{}}`-in-gap-field defect class caught
twice earlier in this session did not recur here.

## Verification

- All citations fetched twice independently with distinct User-Agents
  by the research agent; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked source-independence disclosure logic (citations to
  subsections of the same statutory section carry the required
  disclosure sentence; citations to genuinely different sections do
  not need one) — correct throughout.
- Checked for duplicate clause IDs and titles against the full corpus
  (none, aside from the pre-existing "Acknowledgment"/"Signatures"
  pattern).
- Full-corpus regression run headless against all documents.

## Net changes

- New document: General Partnership Agreement (`partnership_agreement`),
  12 clauses (9 authority + 3 drafting), in the Business Formation
  category.
- Corpus: 370 → 382 clauses; 54 → 55 documents.
