# Real Estate, new document: Deed of Trust and Promissory Note (Private/Seller-Financed Real Estate Loan)

## Why this document

Third document of wave 88. Read the existing "Notice of Default,"
"Nonjudicial Foreclosure Process," and "California Homeowner Bill of
Rights" documents in full — confirmed all three assume a deed of trust
already exists and describe only the foreclosure/default process.
Confirmed "Grant Deed" and "Quitclaim Deed" cover outright title
transfers, not security instruments. Grepped the corpus and confirmed
all 19 "deed of trust" hits in `data/clauses.json` sit inside
foreclosure-adjacent or unrelated documents (HOA lien foreclosure,
homestead forced sale, wage-claim limitations, ademption/exoneration),
none creating the instrument itself; confirmed no "reconveyance"
clause exists anywhere; confirmed no standalone Promissory Note
document exists from any prior phase of this project (the "promissory
note" text hits were false positives in unrelated clauses). Confirmed
a genuine, high-value gap: the corpus had no document-creation side
for a private/seller-financed secured real estate loan.

## What this document covers

8 clauses: 4 drafting (fillable deed of trust granting clause,
trustee's power-of-sale/reconveyance clause, fillable promissory note,
signature/acknowledgment/recording block) and 4 authority clauses,
citing Cal. Civ. Code §§ 2920(a)-(b), 2924(a), 2932, 2932.5, 2934a(a)(1),
2941(b)(1), (b)(1)(A), 1213, and Cal. Gov. Code § 27280(a):

- **`deedoftrust_definition_and_three_party_structure`** (§ 2920(a)-(b);
  § 2934a(a)(1)) — the statutory mortgage definition, the express
  carve-out naming a deed of trust as distinct from a mortgage, and
  the beneficiary's statutory right to substitute the trustee.
- **`deedoftrust_recording_requirement`** (Gov. Code § 27280(a);
  Civ. Code § 1213; § 2932.5) — recording's permissive (not mandatory)
  nature, its constructive-notice/priority effect, and the recording
  requirement for an assignee to exercise the power of sale.
- **`deedoftrust_power_of_sale_statutory_basis`** (§ 2932; § 2924(a);
  § 2932.5) — the statutory basis for a deed of trust's power-of-sale
  mechanism and its assignability along with the secured debt.
- **`deedoftrust_reconveyance_obligation`** (§ 2941(b)(1), (b)(1)(A))
  — the beneficiary's 30-day and trustee's 21-day statutory
  reconveyance deadlines once the debt is satisfied.

The drafting clauses include an actual fillable deed of trust
(granting clause with trustor/trustee/beneficiary and secured
obligation), a fillable promissory note, and a signature/notarial-
acknowledgment/recording-request block — the document-creation
instrument itself, not merely an explanatory sheet.

## Genuine corrections and findings

- **A genuine correction to the task's own research brief**: the brief
  assumed the recording requirement was anchored within Civ. Code
  §§ 2920-2944.5. The agent independently confirmed the actual
  recording-authorization citation sits outside that range, in Gov.
  Code § 27280 (Title 4, "Transfer" chapter) and Civ. Code § 1213 —
  used the correct citations rather than forcing an in-range one.
- **A genuine finding on citation independence**: confirmed § 2924(a)
  is the same section the corpus's existing Notice of Default document
  already cites, but from a different part of that subdivision — the
  existing document quotes the notice-of-default filing/content
  requirements, while this document quotes the earlier language about
  how the power of sale is created in the first place. Disclosed this
  relationship explicitly rather than treating the two documents'
  citations as duplicative.
- Correctly declined to restate the corpus's existing race-notice
  priority framework (`qcd_recording_effect`), cross-referencing it
  instead — avoided duplicative re-verification of already-covered
  ground.
- Every authority clause explicitly cross-references the existing
  Notice of Default and Homeowner Bill of Rights documents for
  what happens after a default, rather than re-describing the
  foreclosure process this new document is not meant to cover.

## Honest gap(s) disclosed

The trustee's reconveyance fee (§ 2941(e)), the electronic-note
reconveyance procedure, and remedies for a missed reconveyance
deadline are not covered. The mortgage-side parallel provisions
(§ 2941(a), § 2920(a) as applied to mortgages rather than deeds of
trust) are not covered, since this document is deed-of-trust-specific.
County-specific recording formatting, documentary transfer tax, and
Preliminary Change of Ownership Report obligations are not covered.
This document does not describe the notice-of-default/notice-of-sale/
reinstatement/anti-deficiency process that follows a default — that is
the subject of the corpus's separate foreclosure documents.

## Method

Fetched Cal. Civ. Code §§ 2920, 2924, 2932, 2932.5, 2934a, 2941, 1213
and Cal. Gov. Code § 27280 from `leginfo.legislature.ca.gov`, each
fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical after whitespace normalization. All
12 citation quotes across the 4 authority clauses programmatically
confirmed as exact contiguous substrings (no ellipsis-joined quotes).
Independently re-verified during integration review via a
forty-second fetch (a distinct curl User-Agent string,
"Groundtruth-42ndVerify-DeedOfTrust/1.0") of all eight sections — all
12 quotes confirmed clean.

## Verification

- All eight statutory sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  forty-second independent fetch during integration review; all
  quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same
  statutory section versus genuinely independent sections (§ 2920 vs.
  § 2934a; Gov. Code § 27280 vs. Civ. Code §§ 1213 and 2932.5;
  § 2932 vs. § 2924 vs. § 2932.5); correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 12
  populated with proper case/citation identifier strings.
- Ten fields reused (`trustorName`, `trusteeName`, `beneficiaryName`,
  `propertyAddress`, `legalDescription`, `parcelNumber`,
  `recordingCounty`, `dateSigned`, `cityState`, `loanNumber`). Five new
  fields required (`loanAmount`, `interestRate`,
  `monthlyPaymentAmount`, `firstPaymentDueDate`, `maturityDate`) —
  grepped the corpus and confirmed no mortgage-scale loan/interest/
  payment fields existed anywhere (the closest, the SAFE Note
  document's equity-financing fields, are not a fit for a secured real
  estate loan).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Deed of Trust and Promissory Note (Private/Seller-
  Financed Real Estate Loan) (`deed_of_trust_promissory_note`), 8
  clauses (4 authority + 4 drafting), in the Real Estate category.
  Five new fields (`loanAmount`, `interestRate`,
  `monthlyPaymentAmount`, `firstPaymentDueDate`, `maturityDate`).
- Corpus: 3,013 → 3,021 clauses; 397 → 398 documents. Third addition of
  wave 88.
