# During employment, new document: Bereavement Leave — Information Sheet

## Why this document

Confirmed as a genuine gap: grep for "bereavement" across the corpus
returned zero hits.

## What this document covers

8 clauses: 2 drafting (request notice, acknowledgment) and 6 authority
clauses, all citing Gov. Code § 12945.7 by subdivision:

- **`bereavement_entitlement`** — the core 5-day entitlement, not
  required to be consecutive.
- **`bereavement_employer_coverage`** — the 5+ employee coverage
  threshold.
- **`bereavement_eligibility`** — the 30-day tenure eligibility
  requirement.
- **`bereavement_timing_and_pay`** — the 3-month timing window and
  default unpaid status.
- **`bereavement_documentation`** — the employer's limited
  documentation rights and confidentiality mandate.
- **`bereavement_retaliation`** — the statute's own dedicated
  anti-retaliation and anti-interference provisions.

## Genuine corrections and findings

- **A correction to the original framing**: confirmed the citation is
  Government Code § 12945.7, not Labor Code — added within FEHA's
  Chapter 6 (Discrimination Prohibited) by Stats. 2022, Ch. 767 (AB
  1949), effective January 1, 2023.
- Confirmed the 5-day entitlement, 5+ employee threshold, 30-day
  tenure requirement, and 3-month timing window exactly as originally
  framed.
- Confirmed the paid/unpaid default: governed by the employer's own
  existing policy; absent a policy, unpaid except the employee may use
  accrued vacation/personal/sick/comp time.
- Confirmed the employer may request documentation within 30 days of
  leave start, from a non-exclusive list (death certificate, obituary,
  written verification from a mortuary/funeral home/etc.), and
  confirmed a genuine confidentiality mandate on both the leave
  request itself and any documentation.
- **A significant correction on anti-retaliation**: this is not
  merely FEHA's general anti-retaliation framework borrowed in —
  § 12945.7 contains its own dedicated anti-retaliation (subd. (g))
  and anti-interference (subd. (h)) provisions specific to bereavement
  leave, cited directly rather than assumed to be generic.

## Honest gaps disclosed

- A statutory exclusion for employees covered by Gov. Code § 19859.3
  exists but was not independently fetched; its existence is disclosed
  in the relevant clause's `gap` field without characterizing its
  content.
- The statute's more granular "top-up to 5 days" blending rules for
  partial existing employer policies were omitted rather than risk an
  imprecise restatement.
- The "family member" definition's cross-reference to CFRA (Gov. Code
  § 12945.2, for "parent-in-law") was not independently fetched;
  flagged as unverified in the relevant clause's `gap`.
- All six authority clauses cite the same single statutory section
  (Gov. Code § 12945.7), differing only by subdivision — disclosed
  plainly as one primary source, not multiple independent ones.

## Method

Fetched Gov. Code § 12945.7 directly from `leginfo.legislature.ca.gov`,
verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical (both 4,884 characters after
normalization). All citation quotes programmatically confirmed as
exact substrings of the fetched, normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Acknowledgment") confirmed as the corpus's
  established, accepted generic drafting-title-reuse pattern.
- Field names (`companyName`, `employeeName`) independently confirmed
  to match existing corpus convention. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Bereavement Leave — Information Sheet
  (`bereavement_leave_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the During employment category. No new fields.
- Corpus: 1,611 → 1,619 clauses; 203 → 204 documents.
