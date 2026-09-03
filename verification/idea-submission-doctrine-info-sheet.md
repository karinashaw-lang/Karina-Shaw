# Confidentiality & IP, new document: Idea Submission Doctrine (Desny v. Wilder) — Information Sheet

## Why this document

Confirmed by grep that "Desny" and "idea submission" had zero hits
anywhere in the corpus. Explicitly distinguished from the existing NDA,
Mutual NDA, and Invention Assignment & Confidentiality Agreement
documents, which operate on express written contracts, not the implied-
in-fact theory this document covers. Third of wave 58's four documents.

## What this document covers

8 clauses: 2 drafting (purpose, signature/acknowledgment) and 6
authority clauses, citing *Desny v. Wilder* (1956) 46 Cal.2d 715 and
*Faris v. Enberg* (1979) 97 Cal.App.3d 309:

- **`ideasubmission_why_doctrine_exists`** — why the doctrine exists:
  ideas aren't property or copyrightable, and an idea disclosed without
  a confidentiality restriction may not qualify as a trade secret.
- **`ideasubmission_implied_in_fact_contract_theory`** — the
  implied-in-fact contract theory Desny actually articulated.
- **`ideasubmission_conditioned_disclosure_required`** — Desny's key
  limit: an unconditioned disclosure, even if later profitable, creates
  no obligation to pay.
- **`ideasubmission_faris_four_elements`** — *Faris v. Enberg*'s later
  four-part synthesis of the Desny test.
- **`ideasubmission_novelty_not_required`** — **a key finding**:
  novelty is not a required element, contrary to common secondary
  summaries.
- **`ideasubmission_distinct_from_express_written_agreements`** — the
  contrast with the corpus's existing express-contract IP documents.

## Genuine corrections and findings

- **Novelty is not required, verified against the opinion's actual
  text**: Desny itself states that even a "widely known and generally
  understood" idea may be protected by contract "regardless of its lack
  of novelty" — corrected against how the doctrine is sometimes
  summarized in secondary sources. The document also carefully
  distinguishes this from Desny's separate discussion of "originality"
  in a different, literary-property theory.
- **The agent caught and fixed its own errors during verification**: a
  straight/curly quote-mark discrepancy in one Desny quote, and an
  overstated "all three sources match exactly" claim for the Faris
  quote that was corrected to disclose an actual minor OCR artifact in
  one of three digitization fields.
- Confirmed Desny's central limit precisely: "the idea man who blurts
  out his idea without having first made his bargain has no one but
  himself to blame" — the law will not retroactively imply a promise to
  pay from mere disclosure, value, and use.
- Independently located and verified a genuine later clarifying
  decision (*Faris v. Enberg*) distilling Desny into a four-part test,
  rather than restating Desny alone.

## Honest gap disclosed

Both Desny and Faris were retrieved through CourtListener; because
direct access to Justia, Google Scholar, and leginfo.legislature.ca.gov
was blocked, the "two independent paths" requirement was satisfied via
two distinct CourtListener retrieval methods, disclosed honestly as one
underlying database queried two ways rather than genuinely separate
hosting infrastructure — except for Faris, where three separately-
digitized text fields (Lawbox, Columbia, Harvard) were compared, two
matching exactly and the third differing only by disclosed OCR noise.
The California trade-secret statutory definition referenced in passing
was not independently re-verified in this session — the document
instead points to the corpus's existing NDA clauses, which already cite
it. Whether novelty carries different significance under other theories
(common-law copyright, breach of confidence) was not independently
researched.

## Method

Desny v. Wilder and Faris v. Enberg verified via CourtListener, each
opinion's text confirmed via two distinct retrieval methods (document-
read/search tools vs. direct REST API calls to differently-digitized
text fields). All 7 citation quotes programmatically confirmed as exact
substrings of the confirmed text.

## Verification

- Both cases cross-checked via multiple independent retrieval paths;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — every clause correctly
  discloses that its Desny citations are one primary source checked
  multiple ways, not independent sources; the Faris cross-verification
  correctly disclosed as genuine multi-digitization agreement rather
  than fully independent hosting; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names confirmed: `preparerName`, `recipientName`, `dateSigned`,
  `cityState` all match existing corpus field definitions exactly. Two
  genuinely new fields confirmed necessary and added: `ideaDescription`,
  `submissionDate`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Idea Submission Doctrine (Desny v. Wilder) —
  Information Sheet (`idea_submission_doctrine_info_sheet`), 8 clauses
  (6 authority + 2 drafting), in the Confidentiality & IP category. Two
  new fields: `ideaDescription`, `submissionDate`.
- Corpus: 2,192 → 2,200 clauses; 281 → 282 documents. Third document of
  wave 58.
