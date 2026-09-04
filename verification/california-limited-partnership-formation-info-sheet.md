# Business Formation, new document: California Limited Partnership Formation — Information Sheet

## Why this document

Second document of wave 81. Read the existing General Partnership
Agreement, Single-Member LLC Operating Agreement, and Charging Order
documents in full — confirmed none substantively covers limited
partnership formation. Confirmed by grep that "limited partnership,"
"certificate of limited partnership," and "15900" had only incidental
mentions elsewhere (Fictitious Business Name definitions, Foreign
Qualification, Statutory Conversion, Name Reservation) — no dedicated
LP-formation document existed despite the corpus already having
dedicated formation documents for general partnerships and both
single- and multi-member LLCs. Confirmed non-duplicative; a genuine,
foundational gap.

**Citation confirmation**: verified via leginfo's own expanded table of
contents that the governing law is Corp. Code Title 2, Chapter 4.5,
"Uniform Limited Partnership Act of 2008," §§ 15900-15912.07.

## What this document covers

8 clauses: 3 drafting (formation statement, certificate particulars,
signature block) and 5 authority clauses, citing Cal. Corp. Code
§§ 15902.01(a), (c), 15901.08(a)-(b), 15904.02(a), 15903.02,
15903.03(a), and 15904.04(a)-(b):

- **`lpform_formation_certificate`** (§ 15902.01(a), (c)) — formation
  by filing a Certificate of Limited Partnership with the Secretary of
  State, with formation pinpointed to the moment of filing (not an
  earlier partner-agreement date), and the certificate's five required
  content items.
- **`lpform_name_requirement`** (§ 15901.08(a)-(b)) — the naming
  requirement (must end with "limited partnership," "L.P.," or "LP").
- **`lpform_gp_lp_distinction`** (§ 15904.02(a), § 15903.02) — the
  structural agency distinction: a general partner is an agent who
  can bind the partnership; a limited partner has no power to bind it.
- **`lpform_lp_liability_shield`** (§ 15903.03(a)) — **the central
  finding**: the limited partner liability shield's own text-based
  exceptions — it does not protect someone named as a general partner
  in the certificate, nor a limited partner who participates in
  control of the business beyond exercising limited-partner rights,
  nor a limited partner's own tortious conduct.
- **`lpform_gp_liability`** (§ 15904.04(a)-(b)) — the converse rule:
  general partners are jointly and severally liable for partnership
  obligations, with a before-admission carve-out for a person who
  becomes a general partner of an already-existing limited
  partnership.

## Genuine corrections and findings

- **The central finding**: confirmed precisely from § 15903.03(a)'s
  own text that the limited-partner shield has two built-in
  exceptions in the same sentence (named-as-general-partner, and
  participating in control beyond a limited partner's rights) — not a
  simple, unconditional shield.
- Confirmed the moment of formation is pinpointed to the Secretary of
  State's filing of the certificate, not an earlier date the partners
  may have reached their own agreement — a real, non-obvious statutory
  rule.
- Confirmed § 15904.04's before-admission carve-out for a new general
  partner — correcting an assumption that joining as a general partner
  might create liability retroactive to before that person's
  admission.
- Correctly distinguished this Uniform Limited Partnership Act of 2008
  provision from the separate Uniform Partnership Act of 1994 general-
  partnership liability rule the corpus's existing General Partnership
  Agreement document cites — similar joint-and-several structure, but
  independently verified, separate statutes.

## Honest gap(s) disclosed

§ 15902.01(d)-(g) (certificate/agreement inconsistency, optional
county recording, dishonored-payment cancellation, annual-tax notice)
is not covered. The distinguishability requirement and the "LLLP"
foreign-entity designator (§ 15901.08(c)-(d)) are not covered. The
§ 15903.03(b) safe-harbor list of activities that do not count as
"control," the narrower liability rule for a limited partner who does
participate in control, and the separate good-faith-investor provision
(§ 15903.06) are not covered. § 15904.05's judgment-collection
mechanics against a general partner's own assets are not covered.
Foreign limited partnership registration (Article 9) and dissociation,
dissolution, contributions/distributions, and conversion/merger
(Articles 5, 6, 8, 11) are all out of scope. Current Secretary of
State filing fees and the specific form to use are not stated (agency
administrative practice, not statutory text).

## Method

Fetched Cal. Corp. Code Chapter 4.5, Articles 1-4 (via leginfo's
`codes_displayText` article view) from `leginfo.legislature.ca.gov`,
each article fetched twice by the research agent with two distinct
User-Agent strings, confirmed byte-identical after whitespace
normalization (one transient proxy connection reset, resolved on
retry). All 10 citation quotes across the 5 authority clauses
programmatically confirmed as exact contiguous substrings (no
ellipsis-joined quotes). Independently re-verified during integration
review via a thirteenth fetch (a distinct curl User-Agent string,
"Groundtruth-ThirteenthVerify-LPForm/1.0") of all four articles — all
10 quotes confirmed clean.

## Verification

- All four statutory articles fetched twice independently by the
  research agent with distinct User-Agent strings, plus a thirteenth
  independent fetch during integration review; all quotes confirmed
  clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — the § 15902.01(a)/(c)
  pair and the two § 15903.03(a) citations each correctly disclosed as
  not independent of one another (same statutory section); § 15904.02
  vs. § 15903.02, and § 15903.03 vs. § 15904.04, correctly treated as
  genuinely separate, independently-numbered provisions; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Two new fields required (`generalPartnerName`,
  `generalPartnerAddress`) — checked against the full corpus's
  existing field ids first, confirmed no equivalent field already
  existed. Eight fields (`partnershipName`, `filingDate`,
  `principalOfficeAddress`, `agentName`, `agentAddress`,
  `authorizedSignerName`, `dateSigned`, `cityState`) reused from the
  existing corpus.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: California Limited Partnership Formation — Information
  Sheet (`california_limited_partnership_formation_info_sheet`), 8
  clauses (5 authority + 3 drafting), in the Business Formation
  category. 2 new fields.
- Corpus: 2,818 → 2,826 clauses; 370 → 371 documents. Second addition
  of wave 81.
