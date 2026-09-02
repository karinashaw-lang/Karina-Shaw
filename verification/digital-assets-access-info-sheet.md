# Estate Planning, new document: Digital Assets and Online Account Access — Information Sheet

## Why this document

The existing Last Will and Testament, Financial Power of Attorney, and
Revocable Living Trust documents grant a fiduciary general authority
over a person's property. This document covers a separate, more
specific statutory layer — California's Revised Uniform Fiduciary
Access to Digital Assets Act — that governs the particular rules a
custodian and fiduciary must follow for digital assets specifically.
Confirmed no overlap: none of the existing documents mention digital
assets, RUFADAA, or custodian access.

## What this document covers

9 clauses: 2 drafting (declaration/purpose, signature/acknowledgment)
and 7 authority clauses:

- **`digitalassets_definitions`** (Prob. Code § 871(c), (d), (f), (h))
  — the statutory definitions of "digital asset," "custodian," and the
  content/catalogue distinction.
- **`digitalassets_scope_of_act`** (Prob. Code § 872(a), (b)) — which
  fiduciaries, time periods, and accounts the Act covers, including
  the 2024 extension to agents and conservators.
- **`digitalassets_priority_tiers`** (Prob. Code §§ 873(a), (b);
  874(c)) — the three-tier priority system: online tool, then
  estate-planning document, then terms of service.
- **`digitalassets_personal_representative_disclosure`** (Prob. Code
  §§ 876, 877) — the content/catalogue split for a personal
  representative, resolving whether general authority suffices.
- **`digitalassets_trustee_disclosure`** (Prob. Code §§ 878, 879) —
  the parallel split for a trustee, tied to the settlor's consent.
- **`digitalassets_agent_disclosure`** (Prob. Code §§ 879.1, 879.2) —
  the parallel split for an agent, requiring an *express* grant for
  content (a sharper standard than the other two roles).
- **`digitalassets_response_timeframe_and_liability`** (Prob. Code
  § 881(a), (f)) — the custodian's 60-day response deadline and
  qualified good-faith liability shield.

## Genuine corrections and findings

- The task brief guessed § 870 might hold the definitions. Direct
  review shows § 870 is only the short-title section — all definitions
  are in § 871.
- Confirmed the three-tier priority order (online tool → estate-
  planning document → terms of service) exactly as anticipated, with a
  refinement: the online tool only overrides tier 2 if it lets the user
  modify or delete a direction "at all times" — not unconditionally.
- The task brief's fuzziest question — whether general authority
  suffices — gets a role-specific, nuanced answer rather than a single
  yes/no: for the catalogue tier, general authority is sufficient
  across all three roles; for content, personal representatives and
  trustees need a record that "evidences consent" to content
  disclosure, while agents face the stricter "expressly grants"
  standard — a real, previously unidentified distinction in wording
  between fiduciary types.
- Corrected an assumed location: the content/catalogue split lives in
  four parallel section pairs (§§ 876/877, 878/879, 879.1/879.2), not
  in § 875, which the agent found actually governs custodian discretion
  over access format and administrative fees.
- Confirmed the 60-day compliance deadline and the good-faith immunity
  (forfeited only for gross negligence or willful/wanton misconduct)
  exactly as anticipated.
- A genuine, significant find: agent and conservator coverage was
  added only by a 2024 amendment (Stats. 2024, Ch. 799) effective
  January 1, 2025 — the original 2016 Act covered only will-fiduciaries,
  personal representatives, and trustees.

## Honest gaps disclosed

- § 879.3 (conservator disclosure, requiring a noticed hearing and
  court order rather than a document-based showing) is noted but not
  separately quoted or detailed.
- The federal Stored Communications Act cross-references (§§ 876, 881)
  are noted as showing state law operates alongside federal law, but
  the SCA's own text was not independently verified.
- No case law was located or needed — this is a young, largely
  unlitigated statute.

## Method

Fetched Prob. Code §§ 870-884 (including §§ 879.1-879.3) directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical.
All 19 citation quotes programmatically confirmed as exact substrings
of the verified text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic across all 7 authority
  clauses — every clause correctly distinguishes same-section citations
  from genuinely separate sections; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`preparerName`, `dateSigned`, `cityState`) confirmed to
  match existing corpus conventions. New fields: `accountHolderName`,
  `fiduciaryName`, `fiduciaryRole` — deliberately role-agnostic since
  the existing will/trust/POA documents use instrument-specific names
  (`executorName`/`trusteeName`/`agentName`) that didn't fit a
  cross-role information sheet.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Digital Assets and Online Account Access — Information
  Sheet (`digital_assets_access_info_sheet`), 9 clauses (7 authority +
  2 drafting), in the Estate Planning category. New fields:
  `accountHolderName`, `fiduciaryName`, `fiduciaryRole`.
- Corpus: 1,127 → 1,136 clauses; 144 → 145 documents. This completes
  wave 23 (4 documents: Pay Scale Disclosure, Bonus at Termination,
  Emancipation of a Minor, and this document).
