# Estate Planning, new document: Trust Decanting — Information Sheet

## Why this document

Confirmed by grep that "decanting"/"decant" had zero hits anywhere in
the corpus. Distinct from the existing Trust Amendment document, which
covers a settlor's own power to modify a still-revocable trust —
decanting applies to irrevocable trusts a settlor can no longer simply
amend. Confirmed via § 19503(a)'s own scope language.

## What this document covers

8 clauses: 2 drafting (background declaration, signature/record) and
6 authority clauses:

- **`decanting_definition`** (Prob. Code § 19502(j), (l), (v)) — what
  "decanting" means and the "first trust"/"second trust" terminology.
- **`decanting_authority_and_scope`** (§ 19502(c)(1); § 19503(a)) —
  who qualifies as an authorized fiduciary and which trusts the Act
  reaches.
- **`decanting_discretion_distinction`** (§ 19502(k); § 19511(b);
  § 19512(a), (c)) — expanded versus limited distributive discretion
  and the different rules each triggers.
- **`decanting_notice_and_objection`** (§ 19507(a)-(c), (g)(5);
  § 19509(a)) — notice, objection, and why court approval isn't
  automatically required.
- **`decanting_beneficiary_protections`** (§ 19511(c)) — what an
  expanded-discretion fiduciary cannot do to a beneficiary's interest.
- **`decanting_tax_and_charitable_limitations`** (§ 19514(c);
  § 19519(b)(1), (b)(10)) — protections for charitable interests and
  tax-sensitive provisions.

## Genuine corrections and findings

- Confirmed decanting is a fiduciary mechanism, not a settlor
  mechanism — operating by the trustee distributing/redirecting
  principal or reshaping the first trust's terms, distinct from the
  Trust Amendment document's settlor-driven power.
- **A significant, precise correction**: the statute does not set a
  single symmetrical "60-day notice period." Advance notice must be
  given at least 60 days before exercise, but the defined "notice
  period" itself and the required contest warning both run 59 days —
  two different numbers doing different jobs, not one round figure.
- **A significant correction on beneficiary protections**: California's
  statute does not flatly bar "adding any new beneficiary" or protect
  "a beneficiary's fixed income interest" in the abstract — the
  restriction is narrowly keyed to specific statutory categories
  (current beneficiary status, presumptive remainder/successor status,
  and the defined term "vested interest"), operating differently from
  the separate "substantially similar" test under limited discretion.
- Confirmed § 5115/§ 19507 shows a 2023 amendment (effective January
  1, 2024) in the fetched text, confirming the current operative
  version rather than the statute's original 2019 text.
- Flagged, but deliberately did not draft, a related nuance: certain
  other actions under the Act (increasing fiduciary compensation,
  modifying removal/replacement power) require consent or court
  approval even though general decanting does not — noted to avoid
  conflating it with the general no-approval-needed rule.

## Honest gap disclosed

§ 19519(b)'s tax-protection list is considerably longer than the two
representative subdivisions quoted (marital deduction and grantor-trust
status) — the remaining items (charitable deduction, gift-tax annual
exclusion, S-corp eligibility, GST zero-inclusion-ratio status,
retirement-plan minimum distributions) are named but not individually
quoted or independently verified.

## Method

Fetched the full Uniform Trust Decanting Act text (Prob. Code
§§ 19501-19530) directly from `leginfo.legislature.ca.gov` via two
independent fetches with distinct User-Agent headers — byte-identical
after whitespace normalization. All 18 citation quotes programmatically
confirmed as exact substrings of the verified text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean (two instances
  caught and fixed during the delivering agent's own self-review).
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are subdivisions of the same statutory
  section versus genuinely separate sections; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none — no title reuse at all in this delivery).
- Field names (`trusteeName`, `trustName`, `originalTrustDate`,
  `dateSigned`, `cityState`) independently confirmed to match existing
  corpus convention. New field: `secondTrustName`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Trust Decanting — Information Sheet
  (`trust_decanting_info_sheet`), 8 clauses (6 authority + 2 drafting),
  in the Estate Planning category. New field: `secondTrustName`.
- Corpus: 1,846 → 1,854 clauses; 236 → 237 documents. Second document
  of wave 47.
