# Business Formation, new document: Nonprofit Mutual Benefit Corporation — Formation Information Sheet

## Why this document

The existing Nonprofit Public Benefit Corporation Articles of
Incorporation document covers the public/charitable branch of
California's Nonprofit Corporation Law. This document covers the
separate mutual benefit branch — a genuinely distinct statutory part,
with its own required-content statute, its own distributions and
dissolution rules, and a different default outcome for members at
dissolution.

## What this document covers

8 clauses: 2 drafting (purpose/agent declaration, incorporator
signature) and 6 authority clauses:

- **`mutualbenefit_required_content`** (Corp. Code § 7130(a)-(b)(1),
  (c)-(e)) — the mutual benefit statute's own required articles
  content, including the prescribed purpose statement.
- **`mutualbenefit_purpose_distinct_from_public_benefit`** (Corp. Code
  § 7111; § 7122(b)) — the statutory line between a mutual benefit
  purpose and a public/charitable purpose, from both the authorization
  statute and the naming statute.
- **`mutualbenefit_federal_tax_status_separate_question`** (26 U.S.C.
  § 501(c)(4)(A); § 501(c)(6)) — the separate federal tax-exemption
  question the state formation statute does not answer.
- **`mutualbenefit_distributions_limitation`** (Corp. Code § 7410;
  § 7411(a)-(b)) — the general no-distributions-except-on-dissolution
  rule and its narrow membership purchase/redemption exception.
- **`mutualbenefit_dissolution_distribution_to_members`** (Corp. Code
  § 8713(a); § 8717(a)-(b)) — a genuinely different default rule than
  the public benefit corporation's: remaining assets may go to members.
- **`mutualbenefit_member_approval_major_transactions`** (Corp. Code
  § 7911(a); § 8012) — member approval requirements for a sale of
  substantially all assets and for mergers.

## Genuine corrections and findings

- Confirmed the mutual benefit statute's required-content list, unlike
  the public benefit statute's, does not ask the incorporator to elect
  "public" or "charitable" purposes and never makes a further purpose
  description mandatory — it is always optional for a mutual benefit
  corporation.
- Confirmed the statutory line between mutual benefit and public
  benefit is drawn twice in the Corporations Code: once by an
  affirmative exclusion in the authorization statute (§ 7111) and once
  by a naming-statute bar on names implying a public/charitable/
  religious purpose (§ 7122(b)) — two independently enacted sections,
  not one.
- A genuine, significant finding: California's default dissolution
  rule for a mutual benefit corporation runs the opposite direction
  from a public benefit corporation's. Absent a contrary articles or
  bylaws provision, § 8717(b) itself directs that remaining assets
  "shall be distributed among the members in accordance with their
  respective rights therein" — a real, member-facing default that does
  not exist for a public benefit corporation, whose assets remain
  subject to charitable-trust and Attorney General oversight.
- Confirmed the ongoing-operations distributions rule (§ 7411) does
  not apply to the winding-up/dissolution process itself (§ 7410) —
  the two statutes govern different phases of the corporation's life,
  and the dissolution-stage member-distribution rule is a distinct,
  separately cited statute (§ 8717), not an extension of § 7411.
- Confirmed the federal tax-exemption question is fully separate from
  the state formation statute, and that a mutual benefit corporation's
  purpose (not limited to charitable/religious/public ends) does not
  correspond to 26 U.S.C. § 501(c)(3) the way a public benefit
  corporation's purpose can — more commonly, organizations of this
  kind correspond to other federal categories such as § 501(c)(4) or
  § 501(c)(6), cited here only as illustrative categories, not as a
  claim about which category fits any specific organization.
- Confirmed member approval, not board approval alone, is required by
  statute for a sale of substantially all assets outside the usual and
  regular course of activities, and for the principal terms of a
  merger — in both cases, member approval may come before or after
  board approval.

## Honest gaps disclosed

- The document does not address the narrow exceptions substituting
  other prescribed purpose language for a corporation formed under the
  California Credit Union Law or as a statutorily defined public bank.
- The document does not address the further statutory requirements
  (§§ 7412-7414) that condition the narrow membership
  purchase-or-redemption exception to the no-distributions rule.
- Federal tax-exempt status determinations, and whether a specific
  organization actually qualifies under § 501(c)(4), § 501(c)(6), or
  any other Internal Revenue Code category, are explicitly disclosed as
  outside this document's scope — a separate IRS determination this
  document does not make.

## Method

Fetched Corp. Code §§ 7111, 7122, 7130, 7410, 7411, 7911, 8012, 8713,
and 8717 directly from `leginfo.legislature.ca.gov`, and 26 U.S.C.
§ 501(c) from `uscode.house.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed
byte-identical. All 14 citation quotes programmatically confirmed as
exact substrings of the verified text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic across all 6 authority
  clauses — every clause correctly distinguishes same-section
  citations (§ 7130, § 501(c)) from citations to genuinely separate
  sections (§ 7111/§ 7122, § 7410/§ 7411, § 8713/§ 8717, § 7911/§ 8012);
  correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `principalOfficeAddress`, `agentName`,
  `agentAddress`, `incorporatorName`) independently confirmed to match
  the existing Nonprofit Public Benefit Corporation document's fields
  exactly. New field: `additionalPurposeDescription` (optional, since
  the mutual benefit statute never makes a further purpose description
  mandatory).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Nonprofit Mutual Benefit Corporation — Formation
  Information Sheet (`nonprofit_mutual_benefit_corporation_info_sheet`),
  8 clauses (6 authority + 2 drafting), in the Business Formation
  category. New field: `additionalPurposeDescription`.
- Corpus: 1,144 → 1,152 clauses; 146 → 147 documents.
