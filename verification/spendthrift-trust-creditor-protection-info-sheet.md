# Estate Planning, new document: Spendthrift Trust Provisions and Creditor Protection — Information Sheet

## Why this document

Wave 151 (Estate Planning slot; wave 145 covered Hiring, During
employment, Estate Planning, and Family Law, waves 147 and 149
returned to this same group, wave 151 continues the even round-robin
— one document per isolated worktree, no coordination needed). Before
drafting, `data/documents.json` was read in full and every one of the
category's existing 78 titles was checked. Several of the task
prompt's own example topics turned out to already be covered: the
Uniform Prudent Investor Act (`uniform_prudent_investor_act_info_sheet`),
the trustee's duty to account
(`beneficiary_right_to_trust_accounting_info_sheet` and
`trustee_notification_to_beneficiaries`), the pretermitted
spouse/child protections (`omitted_spouse_child_info_sheet`), and
special needs trusts (`special_needs_trust`) are all existing
documents.

A grep of `data/documents.json` and `data/clauses.json` for
"spendthrift", "self-dealing", "duty of loyalty", "15300", "15304",
and "holographic" was run and every hit opened and read in context
before ruling a topic in or out (not treated as evidence on its own).
That check found: (1) "holographic" appears only as a brief mention in
the existing Last Will and Testament document's
`will_holographic_alternative` clause — a full holographic-will
information sheet was considered but set aside as too close to
existing coverage; (2) "duty of loyalty" / "self-dealing" in a trust
context appears only briefly in the existing Revocable Living Trust
document's `trust_fiduciary_duty_loyalty` clause and the Testamentary
Trust document's `testtrust_trustee_obligations` clause — again set
aside as adjacent to existing coverage; (3) "spendthrift" appears only
as an incidental cross-reference inside three unrelated clauses
(`disclaimer_partial_and_bars`, `trustmodconsent_material_purpose_limit`,
`trustmodconsent_small_or_uneconomical_trust`) — none of which quotes,
cites, or substantively explains Probate Code §§ 15300-15307. No
existing document in the corpus, in Estate Planning or any other
category, is dedicated to the spendthrift-provision and
creditor-protection rules themselves. This confirmed spendthrift trust
provisions (Prob. Code §§ 15300-15307) as a genuinely new, well-scoped,
statute-grounded topic.

## What this document covers

11 clauses (`spend_*`): 2 drafting (`spend_declaration`,
`spend_signature_block`) and 9 authority clauses, all citing Probate
Code Chapter 2 of Part 2 of Division 9 ("Restrictions on Voluntary and
Involuntary Transfers"), §§ 15300-15307, subsection by subsection:

- **`spend_income_restraint`** (§ 15300) — the baseline rule: a valid
  restraint on transfer of a beneficiary's income interest makes that
  interest untransferable and unreachable by a money judgment until
  paid to the beneficiary.
- **`spend_principal_restraint`** (§ 15301(a)-(b)) — the parallel rule
  for principal, and its limit: once principal becomes due and
  payable, a judgment creditor may petition to reach it.
- **`spend_support_trust`** (§ 15302) — protection for a "support
  trust" (income/principal for education or support) even without an
  express restraint clause, limited to the amount necessary for that
  purpose.
- **`spend_discretionary_trust`** (§ 15303(a)-(b)) — a purely
  discretionary trust: no creditor/transferee right to compel payment,
  and trustee liability for paying with notice of a transfer or
  creditor proceeding.
- **`spend_self_settled_trust`** (§ 15304(a)-(b)) — the rule that a
  restraint is invalid against a settlor's own creditors when the
  settlor is also a beneficiary, and the capped amount a creditor may
  then reach.
- **`spend_support_judgment_exception`** (§ 15305(a),(b),(d)) — the
  spousal/former-spousal/minor-child support-judgment exception.
- **`spend_public_benefits_reimbursement`** (§ 15306(a),(b)) — the
  public-support reimbursement exception and its disability-trust
  carve-out.
- **`spend_general_creditor_25pct_cap`** (§ 15306.5(a)-(b)) — the
  general judgment-creditor exception, capped at 25% of the payment
  otherwise due the beneficiary.
- **`spend_excess_over_needs`** (§ 15307) — a money judgment may reach
  the portion of a distribution exceeding the beneficiary's education
  and support needs, regardless of an otherwise valid restraint.

No case law was included. Every clause in this document is grounded
directly in the statutory text of §§ 15300-15307; a topic scan did not
turn up settled, easily-verifiable case law central to this
particular statute's operation that would add checkable value beyond
the statute itself, so — consistent with the precedent set by this
category's existing purely-statutory information sheets (e.g., the
Advancements Against an Intestate Share info sheet) — none was forced
in.

## Method

Cal. Prob. Code §§ 15300, 15301, 15302, 15303, 15304, 15305, 15306,
15306.5, and 15307 were each fetched directly from
`leginfo.legislature.ca.gov` via `curl`, **twice**, independently,
using two distinct User-Agent strings:

1. `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 GroundtruthResearch/1.0`
2. `Mozilla/5.0 (X11; Linux x86_64) Gecko/20100101 Firefox/128.0`

All 18 fetches (9 sections × 2 User-Agents) returned HTTP 200. (Three
of the second-User-Agent requests initially failed with a transient
`ws_closed_mid_exchange` proxy error on the first attempt — a known,
documented characteristic of this environment's egress proxy, not a
source-content issue — and succeeded on retry with the same
User-Agent string; no WebFetch was attempted since curl through the
proxy reached the host directly without needing that fallback.)

For each of the 9 sections, the statutory text was extracted from both
independently-fetched HTML files by isolating the
`id="codeLawSectionNoHead"` container, stripping tags (inserting a
single space at each `><` tag boundary to avoid concatenating adjacent
`<p>` paragraphs — the same benign source-formatting artifact
documented by prior agents in this effort), HTML-unescaping entities,
and collapsing `&nbsp;`/whitespace runs to single spaces. For every
section, the two independently-fetched, independently-extracted texts
were compared programmatically and found **byte-for-byte identical**
after that normalization — no discrepancy of any kind, dynamic or
substantive, was found between the two User-Agent fetches for any of
the 9 sections.

## Quote verification

All 15 citation quotes across the 9 authority clauses were extracted
as programmatic substrings of the verified statutory text (not
retyped by hand), then independently re-verified — after merging into
`data/clauses.json`, not merely at drafting time — as exact substrings
of the normalized source text for their cited subsection. A script
(`verify.py` in the working scratch directory) parsed each citation's
`url` for its section number, looked up that section's independently
verified extracted text, and confirmed `quote in source_text` for
every one of the 15 quotes. Result: **all 15 quotes verified as exact
substrings, no failures.**

No genuine defect (a character present in a quote but absent from the
source) was found in any quote. No `gap`-field correction disclosure
was needed for any quote's text itself. Several `gap` fields do
disclose, as intended by this pipeline's scope-accuracy practice,
which adjacent subsections of the same statutory sections were *not*
separately quoted or fully explained in a given clause (e.g.,
§ 15304(c)'s tax-reimbursement carve-out, § 15305(c)'s discretionary-
payment branch, § 15306(a)(2)-(3) and (b)'s ineligibility proviso, and
§ 15306.5(c)-(f)'s priority, aggregate-cap, and trustee-immunity
rules) — these are scope disclosures about what a clause does not
cover, not corrections to a quote's accuracy.

## Verification

- Both `data/clauses.json` and `data/documents.json` parse as valid
  JSON after the merge.
- No duplicate clause ids and no duplicate document ids in the full
  corpus (5,033 clauses; 621 documents).
- Every clause id in the new document's `clauseOrder` (all 11
  `spend_*` ids) exists in `data/clauses.json`, checked both for this
  document specifically and by re-checking every `clauseOrder`
  reference in every document in the entire corpus (0 missing refs
  corpus-wide).
- Every authority clause has exactly the required keys (`id`, `title`,
  `kind`, `status`, `checkedDate`, `body`, `gap`, `citations`); every
  drafting clause has exactly `id`, `title`, `kind`, `body`; every
  citation object has exactly `case`, `cite`, `url`, `quote` — checked
  programmatically, no extra or missing keys.
- Every `{{...}}` placeholder used in any clause `title`, `body`, or
  `gap` field, and in any citation's `case`/`cite`/`quote` field,
  matches a field id declared in the new document's `fields` array; no
  unresolved or stray placeholders anywhere in the new content.
- All 15 citation quotes independently confirmed as exact substrings
  of the section text extracted from both independently-fetched
  copies of the relevant statute (which were themselves confirmed
  identical to each other).
- Field ids used: `trustName`, `trusteeName`, `beneficiaryName`,
  `dateSigned`, `cityState` all reuse this corpus's established
  field-id and label conventions from prior Estate Planning documents
  (e.g., the Beneficiary's Right to a Trust Accounting information
  sheet uses the identical `trustName`/`trusteeName`/`beneficiaryName`/
  `dateSigned`/`cityState` id-and-label pattern); `settlorName` reuses
  the "Settlor's name" / `Jordan Alex Lee` convention used by the
  Revocable Living Trust, Special Needs Trust, Pet Trust, and several
  other existing trust-related documents. No new field ids were
  introduced.

## Net changes

- New document: Spendthrift Trust Provisions and Creditor Protection
  — Information Sheet (`spendthrift_trust_creditor_protection_info_sheet`),
  11 clauses (9 authority + 2 drafting), in the Estate Planning
  category.
- No new field ids (all six reuse existing corpus conventions).
- Corpus: 5,022 → 5,033 clauses; 620 → 621 documents; Estate Planning
  category: 78 → 79 documents.
- Part of wave 151 (Estate Planning slot of the four parallel,
  isolated-worktree additions continuing the even round-robin begun
  in waves 145/147/149).
