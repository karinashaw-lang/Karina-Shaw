# Confidentiality & IP, new document: Trade Secret Preemption Doctrine — Information Sheet

## Why this document

Confirmed by grep that Civil Code § 3426.7 and the CUTSA preemption
doctrine had no substantive coverage anywhere in the corpus — one prior
narrow citation to subdivision (b) alone exists in the existing Mutual
NDA document's `mutualnda_contractual_independent_of_tradesecret`
clause, with no doctrine discussion or case law. Framed as a companion
to the existing Trade Secret Misappropriation Cease and Desist Letter
document, which covers a different question (the definition of
misappropriation and remedies for it) rather than what happens to other
civil claims arising from the same facts. Fourth and final document of
wave 56, closing the wave.

## What this document covers

7 clauses: 2 drafting (purpose, signature/acknowledgment) and 5
authority clauses, citing Cal. Civ. Code § 3426.7(a)-(c) and *K.C.
Multimedia, Inc. v. Bank of America Technology & Operations, Inc.*, 171
Cal.App.4th 939 (Cal. Ct. App., 6th Dist. 2009):

- **`cutsapreempt_no_supersession_other_ts_statutes`** (§ 3426.7(a)) —
  CUTSA does not supersede other trade-secret-specific statutes absent
  express provision otherwise.
- **`cutsapreempt_preserved_contract_criminal_other_civil`**
  (§ 3426.7(b)) — **a key finding**: the statute's own text never uses
  "preempt" or "preemption"; it says "does not affect" for the three
  preserved categories of remedy.
- **`cutsapreempt_public_records_act_carveout`** (§ 3426.7(c)) — a
  narrower, distinct carve-out for Public Records Act disclosures.
- **`cutsapreempt_case_law_same_nucleus_of_facts_test`** and
  **`cutsapreempt_case_law_application_to_common_claims`** (*K.C.
  Multimedia*) — the case-law-developed "same nucleus of facts" test
  that gives content to the statute's "does not affect" language, and
  its application to specific claims.

## Genuine corrections and findings

- **The central finding, precisely verified**: a programmatic
  `grep -io "preempt"` search of both independently fetched copies of
  § 3426.7 returned zero matches — the statute itself never uses
  "preempt" or "preemption" anywhere. That terminology comes entirely
  from case law construing the section, not the statutory text. This is
  stated explicitly rather than assumed from common usage of "CUTSA
  preemption" as a label.
- **Three textually distinct provisions, not one general rule**:
  subdivision (a) addresses CUTSA's relationship to other
  trade-secret-specific statutes; (b) addresses contractual, criminal,
  and non-trade-secret civil remedies; (c) is a narrower, separate
  carve-out for Public Records Act disclosures — each independently
  cited and disclosed as a distinct subdivision.
- Confirmed, via a published Court of Appeal decision independently
  verified two ways through CourtListener, the actual "same nucleus of
  facts" test courts use to apply § 3426.7(b), and its concrete
  application to breach of confidence, interference with contract, and
  unfair competition claims — while explicitly declining to generalize
  that those claim types are always preempted.

## Honest gap disclosed

Case-law verification for *K.C. Multimedia* came from two CourtListener
retrieval paths against the same underlying database (a document-read
call and a full-text search), not two independently hosted sources —
disclosed explicitly rather than presented as full independence. The
decision is a single Court of Appeal opinion from one appellate
district, not a California Supreme Court decision, and the document
does not represent that every district has adopted identical language.
Pre-CUTSA law governing subdivision (c)'s Public Records Act carve-out
was not researched.

## Method

Fetched Cal. Civ. Code § 3426.7 directly from
`leginfo.legislature.ca.gov` twice via curl with two different
User-Agent headers, confirmed byte-identical after whitespace
normalization. *K.C. Multimedia* verified via CourtListener's
document-read function and a separate full-text search for the exact
quoted phrase. All 5 citation quotes programmatically confirmed as
exact substrings of the confirmed text.

## Verification

- Statute fetched twice independently with distinct User-Agent headers;
  case law cross-checked via two distinct CourtListener query paths;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — subdivisions (a), (b),
  (c) correctly disclosed as one statutory source, not independent of
  each other; the two case-law clauses correctly disclosed as drawing on
  the same opinion, not independent sources; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names confirmed: `companyName`, `dateSigned`, `cityState`,
  `preparerName`, `adversePartyName` all match existing corpus field
  definitions exactly. One genuinely new field confirmed necessary and
  added: `otherClaimsDescription`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Trade Secret Preemption Doctrine — Information Sheet
  (`trade_secret_preemption_doctrine_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Confidentiality & IP category. One new
  field: `otherClaimsDescription`.
- Corpus: 2,138 → 2,145 clauses; 274 → 275 documents. Fourth and final
  document of wave 56, closing the wave.
