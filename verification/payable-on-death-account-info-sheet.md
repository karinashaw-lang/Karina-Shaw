# Estate Planning, new document: Payable-on-Death (POD) Account Designation — Information Sheet

## Why this document

The existing Transfer-on-Death Deed document covers real property.
This document covers the parallel, but statutorily distinct,
nonprobate mechanism for bank and financial accounts under
California's Multiple-Party Accounts Law.

## What this document covers

8 clauses: 2 drafting (declaration, signature/acknowledgment) and 6
authority clauses:

- **`podaccount_definition`** (Prob. Code §§ 5140, 5132, 80) — what a
  P.O.D. account is, and how it statutorily differs from a Totten
  trust account.
- **`podaccount_creation`** (Prob. Code § 5203(a), (b)) — how a P.O.D.
  designation is created.
- **`podaccount_lifetime_rights`** (Prob. Code § 5301(d)) — the
  account holder's rights during their lifetime, and the honest
  refinement that the no-present-interest rule is a rebuttable
  default.
- **`podaccount_death_transfer`** (Prob. Code § 5302(a), (e); § 5040)
  — the automatic, no-probate transfer at death, including that a
  later will cannot change the designation.
- **`podaccount_multiple_beneficiaries`** (Prob. Code § 5302(b)) —
  the equal-and-undivided-shares default for multiple P.O.D. payees.
- **`podaccount_revocability_creditors`** (Prob. Code §§ 5303, 5305) —
  revocability mechanics, the direct statutory answer on community
  property, and the honest gap on creditor exposure after death.

## Genuine corrections and findings

- Confirmed § 5140 as the base definitional citation, but found it has
  two prongs rather than one: a single-party account payable to P.O.D.
  payees, and a multi-party account (e.g., co-owners) payable to
  P.O.D. payees only after all parties die — broader than the original
  single-party framing.
- **A significant correction**: "Totten trust" is not another name for
  a P.O.D. account under California law. Section 5132 lists joint
  account, P.O.D. account, and Totten trust account as three
  separately defined types of "multiple-party account." A Totten trust
  account is titled "as trustee for" a beneficiary (§ 80); a P.O.D.
  account is titled in the owner's own name with a named P.O.D. payee
  (§ 5140). They are colloquially interchangeable — both "poor man's
  wills" for bank accounts — but statutorily distinct, corrected rather
  than treated as synonyms.
- Confirmed the creation mechanism (§ 5203): model signature-card
  language, with § 5203(b) confirming exact statutory wording isn't
  mandatory if the deposit agreement creates substantially the same
  relationship.
- Refined the "no present interest" rule: § 5301(d) confirms it, but
  it is a rebuttable default ("unless there is clear and convincing
  evidence of a different intent") — not absolute as originally framed.
- Confirmed the multiple-beneficiary default is equal and undivided
  shares (§ 5302(b)(2)(B)), verified rather than assumed.
- Refined the revocability framing: the statute never uses the word
  "revocable" for POD accounts (unlike the TOD deed statute) — the
  clause describes the actual modification mechanics (§ 5303(b)-(c))
  rather than quoting a "revocability" label that doesn't exist in the
  text.
- Confirmed community property is addressed directly by § 5305 — a
  real, citable answer, not silence as might have been assumed.
- A genuine, honest finding: creditor exposure after death is not
  addressed by this statute. Unlike the TOD deed's §§ 5670-5674
  creditor-liability scheme, the Multiple-Party Accounts Law has no
  comparable provision — disclosed as a gap rather than assumed either
  "protected" or "exposed."
- A genuine additional finding: § 5040 provides that nonprobate
  transfers to a former spouse generally fail after divorce or
  annulment, and this expressly governs § 5302 POD transfers; and
  § 5302(e) confirms a POD designation cannot be changed by a later
  will — it must be changed on the account itself.

## Method

Fetched Prob. Code §§ 5140, 5142, 80, 5132, 5203, 5301, 5201, 5302,
5303, 5304, 5305, and 5040 directly from `leginfo.legislature.ca.gov`,
each verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical. All 16 citation quotes
programmatically confirmed as exact substrings of the verified text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Signature and Acknowledgment") confirmed as the
  corpus's established, accepted generic drafting-title-reuse pattern.
- Field names (`beneficiaryName`, `additionalBeneficiaryName` reused
  from the Transfer-on-Death Deed document; `accountHolderName` reused
  from the Digital Assets Access document) independently confirmed to
  match existing corpus convention. New fields:
  `financialInstitutionName`, `accountDescription`.
- Scanned for advisory ("you should/must") language — none found.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Payable-on-Death (POD) Account Designation —
  Information Sheet (`payable_on_death_account_info_sheet`), 8 clauses
  (6 authority + 2 drafting), in the Estate Planning category. New
  fields: `financialInstitutionName`, `accountDescription`.
- Corpus: 1,339 → 1,347 clauses; 168 → 169 documents. This completes
  wave 29 (4 documents: E-Verify, Wage Garnishment, Emergency Custody
  Order, and this document).
