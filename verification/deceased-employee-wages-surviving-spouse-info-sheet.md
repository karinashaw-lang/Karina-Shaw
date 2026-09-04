# Ending employment, new document: Payment of a Deceased Employee's Wages to a Surviving Spouse Without Probate — Information Sheet

## Why this document

Confirmed by grep that "13600" and "deceased employee" (in this
affirmative-payment sense) had zero genuine hits anywhere in the
corpus. Read the existing Unclaimed Final Wages document in full —
confirmed this is a genuine, non-duplicative companion: that document
covers wages that go unclaimed and escheat under the Unclaimed
Property Law; this document covers the different, affirmative
scenario where the employer has been notified of the employee's death
and a person entitled under Probate Code §§ 13600-13606 presents a
declaration to collect the wages directly. Third of wave 68's four
documents.

## What this document covers

8 clauses: 2 drafting (purpose, signature/acknowledgment) and 6
authority clauses, citing Cal. Prob. Code §§ 13600(a), 13601(a),
13601(a)(10), 13602, 13603, 13604(a)-(b), 13605(a)-(b), 13606, and a
Judicial Council of California publication of adjusted dollar amounts:

- **`deceasedwages_core_authorization`** (§ 13600(a) + Judicial
  Council PDF) — **a key finding that narrows the original research
  assignment**: this chapter is titled "Collection by Affidavit of
  Compensation Owed to Deceased Spouse" and sits within "Passage of
  Property to Surviving Spouse Without Administration" — it
  authorizes only the surviving spouse (or that spouse's guardian or
  conservator), not a general "successor," and states no order of
  priority among multiple claimants (unlike the separate § 13100
  personal-property affidavit chapter, which does). Also confirms no
  waiting period and the current CPI-adjusted dollar cap ($20,875 for
  deaths on/after April 1, 2025).
- **`deceasedwages_declaration_content`** (§ 13601(a), (a)(10)) — the
  declaration's required statutory content.
- **`deceasedwages_employer_payment_duty`** (§ 13602) — the
  employer's duty to pay promptly once a conforming declaration is
  presented.
- **`deceasedwages_employer_discharge`** (§ 13603) — the employer's
  discharge from liability for good-faith reliance, with no duty to
  inquire into the truth of the declaration's statements.
- **`deceasedwages_refusal_remedy`** (§ 13604(a)-(b)) — the surviving
  spouse's civil remedy and mandatory fee-shifting if the employer is
  found to have acted unreasonably in refusing to pay.
- **`deceasedwages_not_exclusive_and_recipient_liability`**
  (§§ 13605, 13606) — the procedure doesn't preclude probate, and the
  recipient remains accountable to the estate and liable (trebled, if
  fraudulent) to anyone with a superior right.

## Genuine corrections and findings

- **The central finding**: the research assignment's framing assumed
  a general "successor" procedure; the agent corrected this against
  the fetched statutory text and chapter title, confirming the
  procedure is limited to the surviving spouse specifically — a real,
  substantive narrowing that changed the document's title and scope
  rather than being silently absorbed.
- Confirmed the current CPI-adjusted dollar cap ($20,875 for deaths
  on/after April 1, 2025) via an independent, twice-fetched Judicial
  Council of California publication — genuinely independent of the
  leginfo statutory text since the base statutory figure ($16,625) is
  stale on its face and tied to a separate adjustment mechanism
  (§ 890) whose current output isn't stated in the leginfo text
  itself.
- Confirmed no waiting period applies ("at any time after a spouse
  dies") — contrasted explicitly with the 40-day wait some other
  small-estate procedures require, without asserting that contrast
  from an unfetched source.
- Confirmed the mandatory (not discretionary) attorney's-fee award if
  a court finds the employer acted unreasonably in refusing to pay.

## Honest gap disclosed

Whether a registered domestic partner is treated as a "surviving
spouse" for purposes of this chapter was not independently verified —
flagged rather than assumed either way. The identity-proof
cross-reference to Probate Code § 13104 was not independently fetched
or verified.

## Method

Fetched Cal. Prob. Code §§ 13600-13606 from `leginfo.legislature.ca.gov`,
plus the Judicial Council of California's adjusted-amounts PDF from
courts.ca.gov, via curl (through the sandboxed proxy). Each source
fetched twice with distinct User-Agent strings, confirmed
byte-identical after whitespace normalization. All 9 citation quotes
across the 6 authority clauses programmatically confirmed as exact
substrings of the confirmed text.

## Verification

- All seven statutory sections and the Judicial Council PDF fetched
  twice independently with distinct User-Agent strings; confirmed
  clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — the § 13601(a)/(a)(10)
  pair and § 13604(a)/(b) pair correctly disclosed as one statutory
  section each; §§ 13605 and 13606 correctly disclosed as
  independent, separately-numbered sections; the leginfo statutory
  text and the Judicial Council PDF correctly disclosed as genuinely
  independent sources (different origin, different publisher);
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none);
  the reused generic drafting titles "Purpose of This Information
  Sheet" and "Signature and Acknowledgment" match this corpus's
  established cross-document pattern, not substantive duplicates.
- Field names (`companyName`, `decedentName`, `dateOfDeath`,
  `survivingSpouseName`, `unpaidWagesAmount`) independently confirmed
  to match existing corpus field definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: Payment of a Deceased Employee's Wages to a Surviving
  Spouse Without Probate — Information Sheet
  (`deceased_employee_wages_surviving_spouse_info_sheet`), 8 clauses
  (6 authority + 2 drafting), in the Ending employment category. No
  new fields.
- Corpus: 2,483 → 2,491 clauses; 321 → 322 documents. Third document
  of wave 68.
