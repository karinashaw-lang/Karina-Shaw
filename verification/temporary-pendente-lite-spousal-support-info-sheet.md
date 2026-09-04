# Family Law, new document: Temporary (Pendente Lite) Spousal Support — Information Sheet

## Why this document

First processed item of wave 92 (Family Law slot). Read the existing
Marital Settlement Agreement document's clauses in full — confirmed they
cite only Fam. Code §§ 4320 and 4336, the post-judgment standard. Grepped
the corpus for "pendente lite," "temporary spousal support," "3600," and
"4336" and found only false-positive hits (Probate Code, Labor Code
workers'-comp § 3600, a passing mention in an unrelated disclosure clause).
Confirmed a real, non-duplicative gap.

## What this document covers

6 clauses: 2 drafting (declaration, signature block) and 4 authority
clauses, citing Fam. Code §§ 3600, 3602, 3603, 3604, 4320(i), (m), 4325(a)-(a)(1):

- **`temppendlite_pendency_authority`** (§ 3600) — the court's authority to
  order support while a dissolution/legal-separation/nullity proceeding is
  pending, distinct from and not dependent on a final judgment.
- **`temppendlite_narrower_standard`** (§ 3600's cross-reference; § 4320(i),
  (m); § 4325(a)-(a)(1)) — the genuine finding that temporary support is
  tied only to the domestic-violence-history and abusive-spouse-conviction
  factors, not the full post-judgment factor list.
- **`temppendlite_reconciliation_bar`** (§ 3602) — automatic
  unenforceability during a period of reconciliation.
- **`temppendlite_modification_and_termination`** (§§ 3603, 3604) —
  modification/termination, the bar on retroactive modification, and the
  non-prejudice effect on later orders.

## Genuine corrections and findings

- **A genuine correction to the task's own research premise**: the brief
  assumed the chapter ran §§ 3600-3603. The agent found the actual chapter
  (Fam. Code Div. 9, Pt. 1, Ch. 4) runs §§ 3600-3604, and correctly
  included § 3604's non-prejudice provision.
- **A genuine, significant finding directly answering the task's own
  research question**: the temporary-vs-permanent support distinction is
  not a separately stated "different standard" doctrine — it is a narrow,
  explicit statutory cross-reference. § 3600(a) ties a temporary order only
  to Family Code § 4320's subdivisions (i) (domestic-violence history) and
  (m) (abusive-spouse conviction), plus § 4325 (the domestic-violence-
  misdemeanor presumption) — not the full 14-factor § 4320 list governing
  permanent support. Verified by fetching § 4320 in full and confirming
  (i) and (m)'s exact content.
- **A genuine finding by absence, honestly disclosed as such rather than
  fabricated**: none of §§ 3600, 3602-3604, 4320(i), 4320(m), or 4325
  contain any guideline-formula language, unlike child support's
  statutory § 4055 formula (already cited elsewhere in the corpus). The
  document takes no position on any county's local-rule guideline-formula
  practice, since it rests on local court practice rather than the
  verified statutory text.
- Correctly excluded § 3601 (in the same chapter) after confirming it
  governs only child-support-order termination by operation of law, not
  spousal support — disclosed rather than silently included or silently
  omitted without explanation.
- Correctly declined to independently fetch or verify Family Code § 4324.5
  (cross-referenced by § 4320(m) alongside § 4325) — disclosed as out of
  scope.

## Honest gap(s) disclosed

The standard a court applies in deciding whether to actually grant a
modification or termination motion (§ 3603 states only the retroactivity
limit, not a substantive standard) is not addressed. Whether or how a
temporary support order automatically terminates upon entry of a final
judgment, beyond § 3604's non-prejudice principle, was not researched.
Family Code § 4324.5 is named but not independently verified. This
document does not create, modify, or terminate any temporary spousal
support obligation — only a court order can do that.

## Method

Fetched Fam. Code §§ 3600, 3602, 3603, 3604, 4320, and 4325 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical. All 8
citation quotes across the 4 authority clauses programmatically confirmed
as exact contiguous substrings ending at sentence/clause boundaries (no
ellipsis-joined or mid-word-truncated quotes). Independently re-verified
during integration review via a fifty-sixth fetch (a distinct curl
User-Agent string, "Groundtruth-56thVerify-TempPendLite/1.0") of all six
sections — all 8 quotes confirmed clean on direct substring match, no
extraction artifacts encountered.

## Verification

- All six statutory sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a fifty-sixth independent
  fetch during integration review; all 8 quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same statutory
  section versus genuinely independent sections (§ 3600 vs. § 4320 vs.
  § 4325; § 3603 vs. § 3604); correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles duplicate existing corpus titles — consistent
  with this project's established pattern of generic, reused boilerplate
  drafting-clause titles; clause IDs remain unique.
- Checked every citation's `case` field for emptiness — all 8 populated
  with proper citation identifier strings.
- No new fields required — all seven fields (`party1Name`, `party2Name`,
  `marriageDate`, `separationDate`, `countyOfFiling`, `dateSigned`,
  `cityState`) reused from the existing corpus.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Temporary (Pendente Lite) Spousal Support — Information
  Sheet (`temporary_pendente_lite_spousal_support_info_sheet`), 6 clauses
  (4 authority + 2 drafting), in the Family Law category. No new fields.
- Corpus: 3,109 → 3,115 clauses; 410 → 411 documents. First processed item
  of wave 92.
