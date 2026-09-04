# Estate Planning, new document: Inheritance Disqualification for Elder or Dependent Adult Abuse — Information Sheet

## Why this document

Third processed item of wave 93 (Estate Planning slot). Read the existing
"Slayer Statute" and "Elder and Dependent Adult Financial Abuse"
documents' clauses in full — confirmed the Slayer Statute (Prob. Code
§§ 250-254) disqualifies only for a felonious and intentional killing, and
the Financial Abuse document (Welf. & Inst. Code § 15600 et seq.) covers
only civil damages remedies during the victim's life. Neither touches
Prob. Code § 259's inheritance-disqualification-for-abuse mechanism.
Grepped the corpus for "259," "predeceased," and "elder abuse" combined
with "disqualif"/"inherit" — zero prior coverage. Confirmed a real,
non-duplicative gap.

## What this document covers

7 clauses: 2 drafting (declaration, certification/signature) and 5
authority clauses, citing Prob. Code § 259(a)-(e), § 801, Penal Code
§ 236, § 368(b)(1), (d), (f), and Welf. & Inst. Code § 15610.63(a)-(d),
§ 15610.57(a):

- **`eldabusedisq_civil_findings_required`** (§ 259(a)) — the four
  conjunctive clear-and-convincing findings required for the civil path.
- **`eldabusedisq_conviction_alternative`** (§ 259(b); Penal Code §§ 236,
  368(b)(1), (d), (f)) — the independent criminal-conviction path.
- **`eldabusedisq_predecease_effect_and_limits`** (§ 259(c)) — the
  "deemed to have predeceased" consequence and the regained-capacity
  limit.
- **`eldabusedisq_definitions`** (§ 259(d); Welf. & Inst. Code
  § 15610.63(a)-(d), § 15610.57(a)) — the cross-referenced definitions of
  physical abuse, neglect, false imprisonment, and financial abuse.
- **`eldabusedisq_severance_to_civil_action`** (§ 259(e); § 801) — the
  severance-and-transfer mechanism.

## Genuine corrections and findings

- **A genuine structural finding**: § 259 has two independent
  disqualification paths, not one — a civil path requiring four
  conjunctive findings (liability by clear and convincing evidence, bad
  faith, recklessness/oppression/fraud/malice, and the decedent's
  diminished capacity), and a simpler criminal-conviction path. Disclosed
  as two distinct mechanisms rather than conflated.
- **A genuine finding correcting an assumption the task brief itself
  flagged for verification**: false imprisonment is NOT part of the
  civil-path conduct list in § 259(a) (only physical abuse, neglect, and
  financial abuse are) — it enters § 259 only through the criminal-
  conviction path in § 259(b).
- **A genuine finding on the false-imprisonment cross-reference**:
  § 259(d)(3) cross-references Penal Code § 368 (the elder/dependent-
  adult-specific false imprisonment offense at § 368(f)), not the general
  Penal Code § 236 false imprisonment definition — verified by fetching
  both and confirming § 368(f) is the provision that actually corresponds.
- **A genuine finding on the mechanism's structure**: unlike the Slayer
  Statute's § 250(b), which says "as if" the disqualified person
  predeceased the decedent, § 259 uses its own "deemed to have
  predeceased ... to the extent provided in subdivision (c)" phrasing,
  with subdivision (c) itself defining that extent — disclosed as a
  genuinely different textual mechanism, not assumed identical to the
  Slayer Statute's.
- Correctly disclosed § 259(c)'s regained-capacity carve-out (tied to
  Prob. Code § 1801(b) and Civil Code § 39(b)) without independently
  fetching those two cross-referenced provisions — described only as
  § 259(c) itself characterizes them.
- Correctly avoided duplicating the existing corpus's verified financial-
  abuse definition (Welf. & Inst. Code § 15610.30), pointing to the
  existing Elder and Dependent Adult Financial Abuse document's clause
  instead of re-fetching and re-quoting it.

## Honest gap(s) disclosed

The procedure by which a court makes the § 259(a) findings (what
petition, at what point in estate administration) is not addressed, since
§ 259 itself does not specify it. Prob. Code § 39 (fiduciary definition),
§ 1801(b), and Civil Code § 39(b) are named but not independently fetched.
Penal Code § 368's other subdivisions (legislative findings, misdemeanor
version, caretaker-specific theft offense, definitions of "elder"/
"dependent adult"/"caretaker" for § 368 purposes specifically, sentencing
provisions) are not quoted. Welf. & Inst. Code § 15610.63's sexual-assault
and restraint/medication subdivisions, and § 15610.57's illustrative list
and homelessness provision, are summarized but not quoted verbatim. This
document does not identify, name, or make any claim about any specific
individual, and does not determine whether any specific person is
disqualified under § 259.

## Method

Fetched Prob. Code §§ 259 and 801, Penal Code §§ 236 and 368, and Welf. &
Inst. Code §§ 15610.63 and 15610.57 from `leginfo.legislature.ca.gov`,
each fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical. All 12 citation quotes across the 5
authority clauses programmatically confirmed as exact contiguous
substrings (no ellipsis-joined or mid-word-truncated quotes).
Independently re-verified during integration review via a sixty-second
fetch (a distinct curl User-Agent string,
"Groundtruth-62ndVerify-ElderAbuseDisq/1.0") of all six sections — all 12
quotes confirmed clean on direct substring match, no extraction artifacts
encountered.

## Verification

- All six statutory sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a sixty-second independent
  fetch during integration review; all 12 quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same statutory
  section versus genuinely independent sections/codes (§ 259's own
  subdivisions vs. its Penal Code and Welfare and Institutions Code
  cross-references); correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 12 populated
  with proper citation identifier strings.
- No new fields required — all four fields (`preparerName`,
  `decedentName`, `dateSigned`, `cityState`) reused from the existing
  corpus, mirroring the sibling Slayer Statute document's field set.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Inheritance Disqualification for Elder or Dependent Adult
  Abuse — Information Sheet
  (`elder_abuse_inheritance_disqualification_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Estate Planning category. No new fields.
- Corpus: 3,150 → 3,157 clauses; 416 → 417 documents. Third processed
  item of wave 93. Estate Planning category slot complete (2 of 2
  documents shipped).
