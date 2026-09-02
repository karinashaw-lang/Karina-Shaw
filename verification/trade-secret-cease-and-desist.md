# Confidentiality & IP, new document: Trade Secret Misappropriation Cease and Desist Letter

## Why this document

The existing NDA and Mutual NDA documents are preventive (formed
before any disclosure) and already cite the DTSA trade-secret
definition (18 U.S.C. § 1839(3)) and whistleblower notice (§ 1833(b)).
This document is an enforcement document sent after a suspected
misappropriation has already occurred — covering the cause of action,
remedies, and misappropriation definitions those preventive documents
don't touch.

## What this document covers

9 clauses: 4 drafting (intro, description of trade secret/conduct,
demand, reservation/signature) and 5 authority clauses:

- **`tsmisap_dtsa_cause_of_action`** (18 U.S.C. § 1836(b)(1), (d)) —
  the federal private civil cause of action and its 3-year limitations
  period.
- **`tsmisap_dtsa_misappropriation_definition`** (18 U.S.C. § 1839(5),
  (6)) — the statutory definitions of "misappropriation" and "improper
  means," adding to (not duplicating) the trade-secret definition
  already in the corpus.
- **`tsmisap_dtsa_remedies`** (18 U.S.C. § 1836(b)(3)) — injunctive
  relief, damages, and the 2x exemplary-damages cap plus attorney's
  fees.
- **`tsmisap_ca_misappropriation_definition`** (Civ. Code § 3426.1(b))
  — California's parallel misappropriation definition.
- **`tsmisap_ca_remedies`** (Civ. Code § 3426.3; § 3426.4) —
  California's parallel remedy structure, including the matching 2x
  exemplary-damages cap and an added attorney's-fees provision not in
  the original task brief.

## Genuine corrections caught during research

- The task brief mislabeled 18 U.S.C. § 1839(5) as the "trade secret"
  definition; direct review confirms trade secret is actually defined
  at § 1839(3) (already in the corpus), while § 1839(5) is the
  misappropriation definition — the brief's substantive description of
  misappropriation was correct, just attached to the wrong subsection
  label.
- Confirmed both the federal and California exemplary-damages caps are
  2x, exactly as assumed.
- Found and added Cal. Civ. Code § 3426.4 (attorney's fees for
  bad-faith claims or willful/malicious misappropriation) as a genuine
  parallel to the DTSA's fee-shifting provision — not requested in the
  brief but directly relevant to a complete remedies picture.

## Honest gap disclosed

CourtListener returned a rate-limit error on every case-law search
attempted for this document. No case law was added; every authority
clause discloses this explicitly and rests on statutory text alone.

## Method

Fetched 18 U.S.C. §§ 1836 and 1839 from `law.cornell.edu/uscode`, and
Cal. Civ. Code §§ 3426.1, 3426.3, and 3426.4 from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — normalized text
confirmed byte-identical. All citation quotes programmatically
confirmed as verbatim substrings of the fetched source.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 5 authority
  clauses — the two same-section clauses
  (`tsmisap_dtsa_cause_of_action`, `tsmisap_dtsa_misappropriation_definition`)
  each carry an explicit disclosure sentence — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field name (`companyName`) confirmed to match existing NDA
  conventions; `recipientName` is a deliberate, justified departure
  from `employeeName` since the letter's recipient need not be an
  employee. New fields: `tradeSecretDescription`,
  `misappropriationDescription`, `demandDate`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.
- Advisory-language check: the letter-drafting clauses use qualified
  language ("believes may involve," "not a judicial finding") rather
  than asserting misappropriation as established fact.

## Net changes

- New document: Trade Secret Misappropriation Cease and Desist Letter
  (`trade_secret_cease_and_desist`), 9 clauses (5 authority + 4
  drafting), in the Confidentiality & IP category. New fields:
  `recipientName`, `tradeSecretDescription`,
  `misappropriationDescription`, `demandDate`.
- Corpus: 894 → 903 clauses; 118 → 119 documents.
