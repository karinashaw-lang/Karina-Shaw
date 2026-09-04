# Confidentiality & IP, new document: Patent License Agreement

## Why this document

Category-balance analysis flagged Confidentiality & IP as one of wave
60's four perpetually-thin categories. Read the existing
`patentassign_*` clauses and the `patent_assignment`/
`software_license`/`trademark_license` documents in full first to
confirm this is a genuine companion (license = permission to practice
without transferring title) rather than a duplicate of the Patent
Assignment Agreement (title transfer). Fourth and final document of
wave 60, closing the wave.

## What this document covers

9 clauses: 3 drafting (grant, term/termination, acknowledgment) and 6
authority clauses, citing 35 U.S.C. §§ 261, 100(d), 154(a)(1), 271(d),
and 281, plus Waterman v. Mackenzie (1891) 138 U.S. 252 and
Independent Wireless Telegraph Co. v. Radio Corp. of America (1926)
269 U.S. 459:

- **`patentlicense_assignment_vs_license`** (Waterman v. Mackenzie) —
  **a key finding**: whether a transfer is legally an assignment or a
  mere license depends on its actual legal effect, not its label —
  drawn entirely from case law, not statute.
- **`patentlicense_statute_no_license_definition`** (§ 261) — the
  Patent Act's core ownership provision never actually defines
  "license."
- **`patentlicense_right_to_exclude`** (§ 154(a)(1)) — a patent grants
  a right to exclude others, not an affirmative right to practice the
  invention.
- **`patentlicense_recording_scope`** (§ 261 + Waterman) — USPTO
  recording requirements clearly reach an assignment or a geographic
  exclusive grant, but don't obviously reach a bare license.
- **`patentlicense_standing_exclusive_licensee`** (§§ 281, 100(d) +
  Independent Wireless) — an exclusive licensee's judge-made path to
  enforce the patent, explicitly flagged as 1926-era doctrine distinct
  from more recent Federal Circuit refinements.
- **`patentlicense_misuse_safe_harbor`** (§ 271(d)(4)-(5)) — a patent
  owner's statutory freedom to refuse to license or to license
  selectively, with the tying-based market-power limit stated
  precisely.

## Genuine corrections and findings

- **The central finding, drawn from case law not statute**: 35 U.S.C.
  § 261 never uses the word "license" anywhere in its text (verified
  directly) — the assignment-vs-license line is drawn entirely by
  Waterman v. Mackenzie.
- **Standing traced precisely**: § 281's "patentee" is defined by
  § 100(d) to include only successors in title, not licensees; an
  exclusive licensee's practical path to relief comes from a 1926
  Supreme Court case (Independent Wireless), explicitly disclosed as
  older doctrine that a comprehensive account of modern Federal Circuit
  standing refinements was not independently verified for.
- **An OCR artifact caught and disclosed, not silently fixed**: one
  retrieval of the Independent Wireless quote showed a stray artifact
  ("by'" vs. "by") in one database field; resolved by cross-checking
  two other independently-retrieved renderings that agreed, and the
  discrepancy is disclosed in the clause's `gap` field.
- Confirmed the patent-misuse safe harbor's tying-based limit applies
  only where the patent owner has market power in the relevant market
  — outside that, refusing to license or licensing selectively is
  expressly protected.

## Honest gap disclosed

Waterman's three-category framework is not resolved against every
possible hybrid license structure (e.g., a field-of-use exclusive not
tied to a geographic part of the U.S.) — a comprehensive survey of
later case law on every such fact pattern was not undertaken. Modern
Federal Circuit refinements on exactly how much of the bundle of
exclusive rights a licensee must hold to sue entirely on its own were
not independently verified. The patent-misuse doctrine's "market
power" definition, and antitrust law's separate constraints on
licensing terms, are not addressed.

## Method

Fetched 35 U.S.C. §§ 261, 100, 154, 271, and 281 from Cornell LII via
curl, each fetched twice with two distinct User-Agent strings,
confirmed byte-identical. Fetched Waterman v. Mackenzie and
Independent Wireless Telegraph Co. v. Radio Corp. of America from
CourtListener via two structurally different tool calls
(`read_document` vs. `get_endpoint_item` on the REST `opinions`
endpoint), confirming identical text. All 11 citation quotes
programmatically confirmed as exact substrings of the confirmed text.

## Verification

- All statutory sections fetched twice independently with distinct
  User-Agent strings; both cases fetched via two structurally
  different CourtListener methods; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — passages from the
  same statutory section, and the two Waterman-citing clauses, both
  correctly disclosed as not fully independent of each other; correct
  as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  accepted generic drafting-title reuse ("Acknowledgment").
- Field names (`licensorName`, `licenseeName`, `patentDescription`)
  independently confirmed to match existing corpus field ids. For this
  document, used the plainer "Licensor's name"/"Licensee's name"
  labels from the existing `software_license` document rather than
  `trademark_license`'s "(mark owner)"-qualified variant, since this
  document concerns patents, not trademarks. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: Patent License Agreement (`patent_license_agreement`),
  9 clauses (6 authority + 3 drafting), in the Confidentiality & IP
  category. No new fields.
- Corpus: 2,257 → 2,266 clauses; 290 → 291 documents. Fourth and final
  document of wave 60, closing the wave.
