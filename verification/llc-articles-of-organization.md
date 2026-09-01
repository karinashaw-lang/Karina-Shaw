# Business Formation, fourth new document: LLC Articles of Organization

## Why this document

Continuing the "go as deep as humanely possible" build-out. This
project's existing Single-Member and Multi-Member LLC Operating
Agreement documents cover internal governance between members — this
document is the real, distinct legal step that comes first: the actual
formation filing (Articles of Organization, form LLC-1) that must be
filed with the California Secretary of State to legally create the LLC
in the first place. The research confirmed no overlap with existing
`llc_`-prefixed clauses before drafting. Sourced from California
Corporations Code §§ 17701.08, 17701.13, 17701.16, 17702.01, 17702.09
and Revenue & Taxation Code §§ 17941, 23153.

## What this document covers

9 clauses: 3 drafting (articles declaration, agent designation, and
organizer signature) and 6 authority clauses:

- **`llc_articles_filing_requirement`** (§ 17702.01(a), (d), (e)) —
  that an LLC's legal existence begins at the moment of filing, not
  when members sign an operating agreement or start doing business.
- **`llc_articles_required_content`** (§ 17702.01(b)) — the actual
  current required-content list.
- **`llc_articles_name_requirements`** (§ 17701.08(a), (e)) — the
  required "LLC"/"L.L.C." designator and the real restricted-word list
  (bank, trust, trustee, incorporated, corporation, insurer) — with a
  correction of a commonly repeated but wrong assumption that "city" is
  on that list; it isn't.
- **`llc_articles_agent_for_service`** (§ 17701.13(a), (c);
  § 17701.16(c)) — the continuous agent-for-service-of-process
  requirement and the court-ordered fallback service on the Secretary
  of State if the agent can't be found.
- **`llc_articles_statement_of_information`** (§ 17702.09(a), (c)) —
  the follow-up 90-day initial and biennial Statement of Information
  filing.
- **`llc_articles_annual_tax`** (Rev. & Tax. Code § 17941(a), (b)(1),
  (g); § 23153(d)(1)) — the $800 annual minimum franchise tax, with an
  honest, carefully dated disclosure distinguishing the now-expired
  2021-2023 first-year exemption from a newer, narrower, not-yet-
  operative 2027-2029 reduced-rate provision (SB 180, effective July
  13, 2026) that the research flagged as only partially traced.

## Genuine corrections caught during research

- The task brief assumed a delayed-effective-date filing option exists
  for LLC articles (as it does for corporations under § 110). The
  research checked directly and found no such LLC-specific provision in
  § 17702.01 or the surrounding article — disclosed honestly rather
  than assumed.
- The task brief assumed "city" is a restricted word in an LLC name
  alongside "bank" and "corporation." The current statutory text does
  not include it — corrected in the clause's gap field.

## Method

Fetched all statutory sections directly from `leginfo.legislature.ca.gov`,
each verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical, including confirming the annual
tax statute's most recent 2026 amendment (SB 180).

## Defect caught and fixed during integration

`llc_articles_required_content` cites a single statutory subsection but
initially lacked the standard explicit single-source disclosure
sentence — added during integration.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked source-independence disclosure logic across all 6 authority
  clauses — corrected on one, confirmed correct on the rest.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).

## Net changes

- New document: LLC Articles of Organization
  (`llc_articles_of_organization`), 9 clauses (6 authority + 3
  drafting), in the Business Formation category.
- Corpus: 522 → 531 clauses; 70 → 71 documents.
