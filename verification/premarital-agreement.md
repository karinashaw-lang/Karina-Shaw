# New sector — Family Law — flagship document: Premarital Agreement

## Why this document, why now

Direct follow-up to "keep adding to this, choose new area and go deep."
Family Law was chosen because it's a genuinely distinct sector from
Employment, Business Formation, Real Estate, and Estate Planning, with
real self-help demand and a rich, well-defined California statute to
source from — the Uniform Premarital Agreement Act as adopted in
California, Family Code §1600 et seq. As with each prior category, this
opens the sector with one deeply-researched flagship document — here, a
Premarital Agreement — before expanding further.

## What this document covers

14 clauses: 3 drafting (the declaration of intent to marry, a financial
disclosure schedule reference, and the signature block) and 11 authority
clauses, all citing California Family Code §1610–1617 directly:

- **`prenup_definition_and_effective_date`** (§1610(a) + §1613) — the
  statutory definition of a premarital agreement and the rule that it
  becomes effective only on marriage.
- **`prenup_execution_formalities`** (§1611) — the actual minimum
  formality: writing and both parties' signatures.
- **`prenup_no_consideration_required`** (§1611 + §1614) — enforceable
  without consideration, both at signing and for any later amendment.
- **`prenup_permitted_subject_matter`** (§1612(a)) — the statute's full,
  specific list of what prospective spouses may contract about.
- **`prenup_child_support_not_waivable`** (§1612(b)) — a real, absolute
  limit: child support can't be adversely affected by the agreement.
- **`prenup_spousal_support_waiver_conditions`** (§1612(c)) — the double
  condition on any spousal-support provision: independent counsel at
  signing, and not unconscionable at the time enforcement is sought — with
  the statute's own clarification that counsel alone doesn't guarantee
  enforceability.
- **`prenup_unenforceability_test`** (§1615(a)-(b)) — the real two-part
  test: involuntary execution, or unconscionability plus a specific
  three-part disclosure failure.
- **`prenup_seven_day_counsel_presumption`** (§1615(c)) — the single
  densest, most concrete clause in the document: the voluntariness
  presumption's independent-counsel requirement, the seven-calendar-day
  mechanic (with its own history — different rules for agreements executed
  2002–2020 versus on or after 2020), and the unrepresented-party
  disclosure requirements.
- **`prenup_amendment_revocation`** (§1614) — amendment or revocation
  after marriage requires a signed writing from both parties.
- **`prenup_limitations_tolling`** (§1617) — claims under the agreement
  are tolled during the marriage, subject to laches and estoppel.
- **`prenup_void_marriage_effect`** (§1616) — a genuine bonus finding: if
  the marriage is later found void, the agreement survives only to the
  extent needed to avoid an inequitable result.

## Method

Fetched all 8 candidate California Family Code sections directly from
`leginfo.legislature.ca.gov`. Every quote used was re-verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-identical across both fetches for every section cited, including a
transient proxy connection reset during the §1612(c) fetch that was
retried and re-confirmed rather than silently accepted.

Applied the established source-independence rule: 2 of the 11 authority
clauses cite two genuinely different statutory sections and carry no
disclosure; the remaining 9 rest on a single statutory section each and
carry the corpus's standard single-source disclosure sentence.

Family law was flagged for extra jurisdiction-scoping care in every
clause's `gap` field, beyond this project's usual "one state's evidence"
framing — a premarital agreement's entire purpose is often to override a
state's own default property-division rules, so getting the
jurisdiction-neutrality framing right here matters more than usual, not
less.

## Verification

- All 8 statutory sections fetched directly via `curl`, then re-verified
  on a second, independent fetch with a distinct User-Agent.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked for duplicate clause IDs against the full 282-clause corpus
  (none) and duplicate titles within this document's `clauseOrder`
  (none).
- Full-corpus regression run headless against all 46 documents.

## Net changes

- New category: Family Law.
- New document: Premarital Agreement (`premarital_agreement`), 14
  clauses (11 authority + 3 drafting).
- Corpus: 268 → 282 clauses; 45 → 46 documents.

## Where this sector goes next

Following the established pattern (one flagship document per category
before expanding), natural next documents for Family Law would include a
Postnuptial Agreement, a Marital Settlement Agreement, or a Cohabitation
Agreement — not yet built, and not yet explicitly requested beyond the
standing "go deep" instruction that opened this document.
