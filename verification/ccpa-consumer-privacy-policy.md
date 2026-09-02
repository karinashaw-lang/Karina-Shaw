# Confidentiality & IP, new document: Website/App Privacy Policy — CCPA Consumer-Facing Disclosure

## Why this document

The existing CCPA Service Provider Data Processing Agreement document
covers the B2B contract terms between a business and its service
providers. This document covers a genuinely distinct, consumer-facing
topic: the notice and rights disclosures a business itself must give
to the consumers whose personal information it collects.

## What this document covers

9 clauses: 3 drafting (recitals, disclosure/contact block, non-
discrimination-consumer framing) and 6 authority clauses:

- **`ccpapolicy_notice_at_collection_requirement`** (Civ. Code
  § 1798.100(a), (b)) — the notice-at-collection requirement: what
  must be disclosed, and that it must occur at or before collection.
- **`ccpapolicy_rights_to_know_delete_correct`** (Civ. Code
  § 1798.100(a); § 1798.105(a); § 1798.106(a)) — the consumer's rights
  to know, delete, and correct.
- **`ccpapolicy_rights_optout_and_limit_sensitive`** (Civ. Code
  § 1798.120(a); § 1798.121(a)) — the rights to opt out of sale/
  sharing and to limit use of sensitive personal information.
- **`ccpapolicy_donotsell_link_and_optout_signal`** (Civ. Code
  § 1798.135(a), (b)) — the required homepage link(s) and the
  opt-out preference signal alternative, correcting an assumption
  that the statute names "Global Privacy Control" specifically.
- **`ccpapolicy_privacy_policy_required_content`** (Civ. Code
  § 1798.130(a)(5)) — the privacy policy's own required content.
- **`ccpapolicy_nondiscrimination`** (Civ. Code § 1798.125(a)(1)) —
  the non-discrimination provision and its financial-incentive
  exception.

## Genuine corrections caught during research

- The task brief assumed the opt-out mechanism statute names "Global
  Privacy Control" by name. Direct review of § 1798.135(b) shows the
  statute uses only the generic term "opt-out preference signal" and
  never names any specific technical standard — GPC is an
  implementation of that generic requirement, not a statutory term.
- § 1798.130(a)(5)(A)'s cross-reference to the "two or more designated
  methods" requirement in § 1798.130(a)(1)(A) was identified but not
  independently re-verified against the full text of (a)(1)(A) in this
  pass — disclosed as a gap rather than assumed correct by inference.
- § 1798.125(a)(1)(E)'s anti-retaliation provision for employees,
  applicants, and independent contractors was confirmed to exist in
  the statute but is noted as outside this document's consumer-facing
  scope, since it addresses a different relationship (employment, not
  consumer transactions) already covered by other documents in the
  corpus.

## Honest gaps disclosed

- The precise interplay between § 1798.130(a)(5)(A)'s privacy-policy
  content list and § 1798.130(a)(1)(A)'s "two or more designated
  methods" requirement for handling requests was not independently
  re-verified in full.
- The financial-incentive exception's own disclosure and calculation
  requirements (§ 1798.125(b)) are noted as existing but not detailed
  in this document.
- The distinct opt-in (rather than opt-out) requirement for known
  minors under 16 (§ 1798.120(c), (d)) was identified as adjacent but
  not incorporated into this general-audience document.

## Method

Fetched Civ. Code §§ 1798.100, 1798.105, 1798.106, 1798.110, 1798.115,
1798.120, 1798.121, 1798.125, 1798.130, and 1798.135 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical
(excluding the dynamic per-request ViewState token). All quotes
programmatically re-confirmed as exact substrings of the verified text;
one `{{` leak in a `gap` field was caught and fixed during the
delivering agent's own self-check before delivery.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean on integration
  (the one leak found was already fixed by the delivering agent).
- Checked source-independence disclosure logic across all 6 authority
  clauses — the three same-section clauses
  (`ccpapolicy_notice_at_collection_requirement`,
  `ccpapolicy_donotsell_link_and_optout_signal`,
  `ccpapolicy_nondiscrimination`) each carry an explicit disclosure
  that citations to the same statutory section are treated as one
  source, not independent — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`businessName`) confirmed to match the existing CCPA
  Service Provider Data Processing Agreement document's field exactly.
  New fields: `categoriesCollected`, `purposesOfUse`, `contactMethod`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Website/App Privacy Policy — CCPA Consumer-Facing
  Disclosure (`ccpa_consumer_privacy_policy`), 9 clauses (6 authority
  + 3 drafting), in the Confidentiality & IP category. New fields:
  `categoriesCollected`, `purposesOfUse`, `contactMethod`.
- Corpus: 920 → 929 clauses; 121 → 122 documents.
