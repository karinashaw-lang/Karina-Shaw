# Business Formation, new document: Nonprofit Religious Corporation — Formation Information Sheet

## Why this document

The corpus already covers the Nonprofit Public Benefit and Mutual
Benefit Corporation laws. "Religious corporation" appeared only in
passing mentions within those two documents' clauses — no dedicated
document covered California's third nonprofit corporation branch, the
Nonprofit Religious Corporation Law.

## What this document covers

9 clauses: 2 drafting (purpose/agent declaration, incorporator
signature) and 7 authority clauses:

- **`religcorp_required_content`** (Corp. Code § 9130) — required
  articles content, with a purpose statement genuinely different from
  the public benefit statute's.
- **`religcorp_eligibility_standard`** (Corp. Code § 9111; § 5111) —
  the "primarily or exclusively... religious purposes" eligibility
  standard, contrasted with public benefit's "public or charitable
  purposes."
- **`religcorp_attorney_general_oversight_exemption`** (Corp. Code
  § 9230(a); Gov. Code § 12583) — the Attorney General's blanket
  statutory bar from oversight, with narrow carve-outs, plus the
  separate charitable-trust-registry exemption.
- **`religcorp_distributions_cross_reference`** (Corp. Code
  § 9610(a), (b)) — the no-distributions rule applying by
  cross-reference to the public benefit chapter, with a narrower
  enforcement-standing list that omits the Attorney General.
- **`religcorp_dissolution_reduced_ag_role`** (Corp. Code § 9680(a))
  — dissolution asset disposition under the corporation's own
  articles, with a weaker Attorney General role (30 days' notice, not
  party status).
- **`religcorp_governance_removal_flexibility`** (Corp. Code
  § 9222(a); § 5222(a); § 7222(a)) — a genuine, narrow governance-
  flexibility difference in director removal.
- **`religcorp_federal_tax_exempt_cross_reference`** (26 U.S.C.
  § 501(c)(3)) — the separate federal tax-exempt question,
  cross-referencing rather than duplicating the existing public/
  mutual benefit documents' clauses on this point.

## Genuine corrections and findings

- Confirmed § 9130's required content, finding the purpose statement
  is not identical to the public benefit statute's: it is "primarily
  or exclusively" religious (not a public/charitable election), and a
  further purpose description is optional in every case (public
  benefit makes it mandatory when "public" purposes are elected).
- Confirmed the eligibility standard's language: "primarily or
  exclusively for any religious purposes" versus public benefit's "for
  any public or charitable purposes."
- **A significant, stronger-than-expected finding on reduced
  oversight**: § 9230(a) is a blanket statutory bar — "the Attorney
  General shall have no powers with respect to any corporation
  incorporated or classified as a religious corporation," subject only
  to three narrow carve-outs. Separately, Gov. Code § 12583
  categorically exempts religious corporations/organizations from the
  Attorney General's Registry of Charitable Trusts filing/
  registration/reporting regime — a real, distinct "reduced reporting"
  fact not present for public benefit corporations generally.
- **A correction to the original research framing on distributions/
  dissolution**: religious corporations don't have their own
  no-distribution statute. Section 9610(a) cross-references and
  imports the public-benefit distributions chapter (§ 5410 et seq.)
  wholesale, except it swaps in its own enforcement-standing provision
  (§ 9610(b)) that omits the Attorney General from who may sue (the
  public benefit parallel, § 5420(b), includes the AG). On
  dissolution, § 9680(a) expressly excludes § 6716 (which requires the
  AG be "a party" to the disposition proceeding) and substitutes its
  own rule requiring only 30 days' notice to the AG, not party status.
  No religious-corporation-law counterpart requiring assets go
  specifically to "another religious or charitable organization" by
  name on dissolution was found — that is a federal 501(c)(3)
  organizational-test constraint, not a state Part 4 requirement,
  corrected explicitly rather than assumed.
- Confirmed and precisely located a genuine governance-flexibility
  difference: § 9222(a)'s director-removal-without-cause default opens
  "Except as provided in the articles or bylaws," letting a religious
  corporation's governing documents override it. Public benefit's
  § 5222(a) and mutual benefit's § 7222(a) (both independently
  verified) instead open with "Subject to subdivisions (b) and (f)" —
  no such general override. A narrow, well-verified textual
  difference, not overgeneralized to every governance point.
- Confirmed via two independent sources (uscode.house.gov and
  law.cornell.edu) that IRC § 501(c)(3) itself lists "religious" as a
  qualifying purpose alongside charitable/scientific/educational.

## Honest gap disclosed

No case law was cited anywhere — this is a purely statutory topic.
The § 9230 clause explicitly flags that the "First Amendment/church-
autonomy" rationale sometimes offered for this exemption is
commentary, not a stated statutory holding, and no judicial authority
was verified for it.

## Method

Fetched Corp. Code §§ 9111, 9130, 9222, 9230, 9610, 9680, 5111, 5222,
7222, and Gov. Code § 12583 directly from `leginfo.legislature.ca.gov`,
and 26 U.S.C. § 501(c)(3) from both `uscode.house.gov` and
`law.cornell.edu`, each verified against a second, independent fetch
with a distinct User-Agent — confirmed byte-/text-identical. All
citation quotes programmatically confirmed as exact substrings of the
fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `principalOfficeAddress`, `agentName`,
  `agentAddress`, `incorporatorName`, `additionalPurposeDescription`)
  independently confirmed to match the existing Nonprofit Public
  Benefit and Mutual Benefit Corporation documents' fields exactly.
  New field: `religiousPurposeScope`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Nonprofit Religious Corporation — Formation
  Information Sheet (`nonprofit_religious_corporation_info_sheet`), 9
  clauses (7 authority + 2 drafting), in the Business Formation
  category. New field: `religiousPurposeScope`.
- Corpus: 1,427 → 1,436 clauses; 179 → 180 documents.
