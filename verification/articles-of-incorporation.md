# Business Formation, fifth new document: Articles of Incorporation (California Corporation)

## Why this document

The project already has Corporate Bylaws (internal governance after
incorporation) and, from the prior wave, LLC Articles of Organization
(the LLC's actual formation filing). This document is the parallel
formation filing for a corporation — the actual document filed with
the California Secretary of State that legally creates the
corporation in the first place, distinct from Bylaws.

## What this document covers

10 clauses: 3 drafting (declaration, agent designation, incorporator
signature) and 7 authority clauses:

- **`articlesinc_formation_and_existence`** (Corp. Code § 200(a)-(c))
  — who may form a corporation, who must sign, and that corporate
  existence begins at filing.
- **`articlesinc_required_content`** (§ 202(a)-(f)) — the actual
  required-content list, including the two alternative purpose
  statements.
- **`articlesinc_name_requirements`** (§§ 201(a)-(b), 202(a)) — the
  real naming restrictions, correcting an assumption that a
  designator word ("Corporation," "Incorporated," "Limited") is
  required for every corporation — it's actually required only for a
  close corporation.
- **`articlesinc_agent_for_service`** (§§ 202(c), 1502(b)) — the
  agent-for-service-of-process requirement and qualifications.
- **`articlesinc_statement_of_information`** (§ 1502(a), (d)) — the
  90-day initial and **annual** (not biennial, unlike the LLC
  statute) follow-up filing.
- **`articlesinc_annual_franchise_tax`** (Rev. & Tax. Code
  § 23153(a), (d)(1), (f)(1)-(2)) — the $800 minimum franchise tax and
  its permanent first-year exemption, carefully distinguished from the
  LLC's separate, temporary 2021-2023 exemption.
- **`articlesinc_delayed_filing_date`** (Corp. Code § 110(a), (c)) —
  the two non-interchangeable timing mechanisms, correcting an
  assumption that the "delayed effective date" option (§ 110(c))
  applies to original articles — it explicitly excludes them; only
  the separate withhold-from-filing mechanism (§ 110(a)) does.

## Genuine corrections caught during research

- A designator word is not required for an ordinary corporation's
  name — only for one that elects close-corporation status under
  § 158. This corrects an assumption drawn by analogy to the LLC
  naming statute, which does require a designator for every LLC.
- § 110(c)'s delayed-effective-date option explicitly excludes
  original articles of incorporation from its scope — corrected rather
  than assumed to parallel corporations generally.
- The corporate first-year franchise-tax exemption (§ 23153(f)(1)) is
  a different, permanent, more broadly available provision than the
  LLC's temporary 2021-2023 exemption already documented in this
  project's LLC Articles of Organization — not the same rule extended
  to a second entity type.
- The Statement of Information cadence for corporations is annual,
  not biennial like the LLC's — flagged explicitly so the two sibling
  documents aren't misread against each other.

## Method

Fetched Corporations Code §§ 110, 200, 201, 202, 1502 and Revenue &
Taxation Code § 23153 directly from `leginfo.legislature.ca.gov`, each
verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical (network proxy required several
retries).

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 7 authority
  clauses — correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); one
  drafting-clause title collision the agent caught and fixed itself
  during drafting.
- Field names (`companyName`) reused from the existing Bylaws/LLC
  convention; new fields (`authorizedShares`, `principalOfficeAddress`,
  `agentName`, `agentAddress`, `incorporatorName`) added only where
  genuinely new.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Articles of Incorporation (California Corporation)
  (`articles_of_incorporation`), 10 clauses (7 authority + 3
  drafting), in the Business Formation category.
- Corpus: 564 → 574 clauses; 75 → 76 documents.
