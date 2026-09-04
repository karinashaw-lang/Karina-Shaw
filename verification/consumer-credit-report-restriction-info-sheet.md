# Hiring, new document: Employer Use of Consumer Credit Reports — Information Sheet

## Why this document

Confirmed by grep that "1024.5" and "consumer credit report" (as a
restriction on *use*, not disclosure) had zero hits anywhere in the
corpus. Read the existing ICRAA document first — this document is a
genuine companion, not a duplicate: ICRAA governs the disclosure,
authorization, and adverse-action mechanics for a broader category of
"investigative consumer report"; Labor Code § 1024.5 is a narrower,
threshold restriction on whether an employer may use an ordinary
credit-based consumer credit report at all, for most positions,
regardless of what disclosure has been given. Third of wave 66's four
documents.

## What this document covers

7 clauses: 2 drafting (purpose, signature/acknowledgment) and 5
authority clauses, citing Cal. Labor Code §§ 1024.5(a)-(c), 2699(a),
(f), and Cal. Civil Code § 1785.3(c):

- **`creditreport_core_prohibition`** (§ 1024.5(a)) — the default
  prohibition on using a consumer credit report for employment
  purposes unless the position falls within a statutory exception.
- **`creditreport_exempt_positions`** (§ 1024.5(a)(1)-(8)) — the full
  eight-category exempted-positions list, quoted in full.
- **`creditreport_definitions`** (§ 1024.5(c)(1)-(2) + Civ. Code
  § 1785.3(c)) — the statute's own definitions of "consumer credit
  report" (by cross-reference to the CCRAA, with its own carve-out for
  income/employment-only verification reports) and "managerial
  position" (by cross-reference to the IWC Wage Order 4 executive
  exemption).
- **`creditreport_financial_institution_exclusion`** (§ 1024.5(b)) —
  the exclusion for persons/businesses subject to Gramm-Leach-Bliley
  (15 U.S.C. §§ 6801-6809) and regulatory compliance oversight.
- **`creditreport_enforcement`** (§ 2699(a), (f)) — **a key finding**:
  § 1024.5 states no remedy or private right of action of its own,
  unlike ICRAA; the general PAGA default civil-penalty mechanism is
  described as a general framework, explicitly disclosed as not
  independently confirmed to apply to § 1024.5 by name in any source
  found.

## Genuine corrections and findings

- **The central finding**: confirmed Labor Code § 1024.5 has no
  section-specific enforcement provision of its own — a real
  asymmetry with ICRAA, which does state its own civil-liability
  provision (already documented elsewhere in this corpus). This
  document states the general PAGA default mechanism instead, with an
  explicit disclosure that no source discusses PAGA's application to
  § 1024.5 by name — the connection is drawn from PAGA's own general
  text ("all provisions of this code except those for which a civil
  penalty is specifically provided"), not from any source addressing
  § 1024.5's enforcement specifically.
- Confirmed "consumer credit report" is defined by cross-reference to
  the CCRAA (Civ. Code § 1785.3(c)), not defined independently by
  § 1024.5 itself — with § 1024.5's own added carve-out for
  income/employment-only verification reports.
- Confirmed "managerial position" is defined by cross-reference to the
  IWC Wage Order 4 executive exemption rather than given its own
  independent statutory definition.
- Confirmed the financial-institution exclusion (§ 1024.5(b)) requires
  both Gramm-Leach-Bliley coverage and actual regulatory compliance
  oversight — not either alone.

## Honest gap disclosed

The two integration-time `{{}}` leaks caught during my own validation
(see below) were fixed before merge — this is disclosed here as part
of the record, not glossed over. The regulatory text of Wage Order 4 /
8 Cal. Code Regs. § 11040 and 15 U.S.C. §§ 6801-6809 were not
independently fetched — only the Labor Code's cross-references to them
are quoted. PAGA's notice-to-agency prerequisite (Lab. Code § 2699.3)
was not independently fetched or addressed. Whether some other remedy
(e.g., the Unfair Competition Law) might apply to a § 1024.5 violation
was not researched.

## Method

Fetched Cal. Labor Code §§ 1024.5, 2699 and Cal. Civil Code § 1785.3
from `leginfo.legislature.ca.gov` via curl (WebFetch blocked), each
section fetched twice with distinct User-Agent strings, confirmed
byte-identical after whitespace normalization. All 7 citation quotes
programmatically confirmed as exact substrings of the confirmed text.

## Verification

- All three sections fetched twice independently with distinct
  User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — **caught two real
  leaks** in the delivered batch: `creditreport_exempt_positions` and
  `creditreport_financial_institution_exclusion` both referenced
  `{{jobTitle}}`/`{{companyName}}` inside their `gap` field, which is
  never substituted at render time. Both rewritten to plain,
  non-placeholder language ("the position at issue" / "the employer at
  issue") before merge; re-scanned clean after the fix.
- Checked source-independence disclosure logic — the Civil Code
  § 1785.3(c) / Labor Code § 1024.5(c)(1) pair correctly disclosed as
  the same defined term at its point of origin and at the statute
  adopting it by cross-reference, not independent corroboration; the
  two § 2699 subdivisions correctly disclosed as one statutory
  section; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`companyName`, `employeeName`, `jobTitle`)
  independently confirmed to match existing corpus field definitions
  exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: Employer Use of Consumer Credit Reports — Information
  Sheet (`consumer_credit_report_restriction_info_sheet`), 7 clauses
  (5 authority + 2 drafting), in the Hiring category. No new fields.
- Corpus: 2,425 → 2,432 clauses; 313 → 314 documents. Third document
  of wave 66.
