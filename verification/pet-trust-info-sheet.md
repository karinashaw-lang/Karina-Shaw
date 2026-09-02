# Estate Planning, new document: Pet Trust — Information Sheet

## Why this document

No existing document or clause covered California's statutory pet
trust — a distinct mechanism from the corpus's existing revocable
living trust and special needs trust documents, with its own
termination trigger, enforcement rules, and exemption from the general
noncharitable-trust duration cap.

## What this document covers

9 clauses: 2 drafting (declaration, signature/acknowledgment) and 7
authority clauses:

- **`pettrust_core_authorization`** (Prob. Code § 15212(a)) — the
  core authorization and termination on the covered animal's death.
- **`pettrust_animal_scope_limitation`** (Prob. Code § 15212(a),
  (i)) — what counts as a covered animal, and the honest limitation
  that the trigger is an animal living on the date of the settlor's
  death, not "alive during the settlor's lifetime" generally.
- **`pettrust_use_restriction_and_distribution`** (Prob. Code
  § 15212(b)) — the use restriction and distribution of remaining
  funds on termination, with an honest disclosure that California has
  no judicial-reduction-of-excess-funds mechanism.
- **`pettrust_enforcement_standing`** (Prob. Code § 15212(c)) — who
  can enforce the trust.
- **`pettrust_trustee_vacancy_and_court_authority`** (Prob. Code
  § 15212(d)) — trustee vacancy and the court's supervisory authority.
- **`pettrust_accounting_threshold_and_inspection`** (Prob. Code
  § 15212(e), (f)) — the accounting duty, its $40,000 waiver
  threshold, and inspection rights.
- **`pettrust_displaces_honorary_trust_doctrine`** (Prob. Code
  § 15212(g), (h); § 15211) — how the statute exempts a pet trust from
  the general noncharitable-purpose-trust 21-year duration cap and the
  low-value unilateral-termination rule, displacing the older
  honorary-trust enforceability problem.

## Genuine corrections and findings

- Corrected an initial assumption misattributing enforcement/standing
  to § 15212(b). Direct review shows enforcement/standing is actually
  § 15212(c); subsection (b) instead holds the use-restriction and
  distribution rules.
- A significant correction: no "excess funds" judicial-reduction
  mechanism exists in current California law. Both fetches of all nine
  subsections of § 15212 found no provision letting a court reduce an
  oversized transfer — a real feature of some other states' statutes,
  but not California's. Corrected explicitly rather than fabricating a
  citation for an absent provision.
- Refined the "alive during the settlor's lifetime" framing: the
  actual statutory cutoff is an animal living on the date of the
  settlor's death, not lifetime generally — an animal that predeceased
  the settlor doesn't count, even if alive at some earlier point.
- A genuine, significant finding: § 15212(h) expressly exempts a pet
  trust from § 15211's 21-year cap on any noncharitable-purpose trust
  — direct statutory proof the section was built to escape the
  older "honorary trust" enforceability problem.
- Found § 15212(g) also exempts a pet trust from the ordinary rule
  letting a trustee unilaterally terminate a trust worth $100,000 or
  less for being too small to administer.
- Found § 15212(e) imposes an accounting duty, but waives it by
  statute for any pet trust holding $40,000 or less, unless a court or
  the trust instrument requires it anyway; § 15212(f) creates a
  separate inspection right held by beneficiaries, the designated
  enforcer, or qualifying nonprofits.

## Honest gaps disclosed

- California Law Revision Commission legislative-history commentary
  was not fetched — the operative text of § 15212(h) is direct enough
  primary-source evidence on its own.
- No case law was researched — this is a purely statutory topic.
- The "no future/unborn animal covered" conclusion is flagged as an
  inference from the statute's termination trigger and animal
  definition, not a directly quoted holding.

## Method

Fetched Prob. Code §§ 15212, 15211, and 15408 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed
byte-identical apart from dynamic page-state tokens. All 12 citation
quotes programmatically confirmed as exact substrings of the verified
text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic across all 7 authority
  clauses — correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  title matches ("Declaration," "Signature and Acknowledgment")
  confirmed as the corpus's established, accepted generic drafting-
  title-reuse pattern.
- Field names (`settlorName`, `settlorCounty`, `trustName`,
  `dateSigned`, `cityState`) independently confirmed to match existing
  corpus convention across the Revocable Living Trust, Special Needs
  Trust, and Trust Amendment documents. New fields: `animalDescription`,
  `caretakerName`, `successorCaretakerName`, `enforcerName`,
  `trustFundingAmount`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Pet Trust — Information Sheet (`pet_trust_info_sheet`),
  9 clauses (7 authority + 2 drafting), in the Estate Planning
  category. New fields: `animalDescription`, `caretakerName`,
  `successorCaretakerName`, `enforcerName`, `trustFundingAmount`.
- Corpus: 1,219 → 1,228 clauses; 154 → 155 documents.
