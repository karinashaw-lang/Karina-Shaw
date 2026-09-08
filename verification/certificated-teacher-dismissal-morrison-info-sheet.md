# Ending employment, new document: Certificated Teacher Dismissal for Cause and the Morrison "Fitness to Teach" Standard — Information Sheet

## Why this document

Fourth and final processed item of wave 141 (Ending employment slot
#1, 2×2 pattern, closing the wave). This document's research agent
was lost to a container restart mid-research on its first attempt and
was relaunched with an identical brief, instructed to independently
re-run its own novelty check rather than trust the interrupted
agent's partial progress. The relaunched agent confirmed zero prior
corpus hits on "Morrison," "certificated teacher," "fitness to
teach," or Educ. Code §§ 44929.21/44932/44934/44944, and confirmed
the corpus's existing civil-service and peace-officer disciplinary
documents (`state_civil_service_disciplinary_due_process_info_sheet`,
`pobr_termination_appeal_info_sheet`) cover different, explicitly
distinct statutory schemes. A personal duplication spot-check
independently reconfirmed all of this against the corpus as it stood
after the wave's first three merges.

## What this document covers

9 clauses: 2 drafting (declaration, closing signature) and 7 authority
clauses, citing Educ. Code § 44929.21(b), § 44932(a) and (a)(1),
(a)(2), (a)(6), (a)(9), § 44934(b)-(c), § 44944(c)(2), (d)(1), (d)(4),
and *Morrison v. State Board of Education*, 1 Cal.3d 214 (1969) (two
citations):

- **`certdismiss_permanent_status`** — the two-consecutive-year path
  to permanent (tenured) status.
- **`certdismiss_statutory_grounds`** — the statute's eleven
  enumerated causes for dismissal (four quoted verbatim, seven
  described narratively).
- **`certdismiss_morrison_nexus_holding`** — *Morrison*'s holding that
  conduct-based dismissal causes require a showing of unfitness to
  teach.
- **`certdismiss_morrison_factors`** — *Morrison*'s non-exhaustive
  factor list (two non-adjacent citations).
- **`certdismiss_notice_and_charges`** — the written notice and
  statement-of-charges requirements (two citations).
- **`certdismiss_hearing_commission`** — the three-member Commission
  on Professional Competence.
- **`certdismiss_decision_and_binding_effect`** — the commission's
  binding, majority-vote decision (two citations).

## Genuine findings

- **A disclosed, corrected citation error caught by the research
  agent itself, not by integration review**: the task brief's
  reference to "55 Cal.2d 214" for *Morrison* was wrong; the agent
  verified the correct reporter citation (1 Cal.3d 214) directly from
  CourtListener's cluster metadata before drafting, rather than
  propagating the brief's error.
- **A disclosed genuine doctrinal gap, not resolved by this
  document**: the Morrison-nexus clause's gap states plainly that
  *Morrison* itself arose under a different, since-renumbered
  credentialing statute (former Educ. Code § 13202), not § 44932, and
  that no specific Court of Appeal decision extending *Morrison*'s
  holding to a § 44932 dismissal was independently researched — the
  extension is disclosed as an analogy, not represented as a holding.
- **A disclosed non-contiguous-quote handling**: the Morrison-factors
  clause quotes two separate spans of the opinion's factor list,
  rather than one contiguous span, because the source opinion
  interrupts the list with footnote markers; the three intervening
  factors are described narratively instead of quoted, avoiding
  splicing footnote-interrupted text as if contiguous — independently
  confirmed during integration review by locating the exact footnote
  markers between the two quoted spans in the freshly fetched opinion
  text.
- **Two disclosed benign formatting artifacts, confirmed against the
  raw source rather than silently corrected**: a non-breaking space
  after each subdivision marker in §§ 44929.21 and 44932, and a
  doubled space in § 44929.21(b) ("requiring  certification") — both
  confirmed identical across two independent fetches by the research
  agent, and independently reconfirmed during integration review via
  a whitespace-normalized substring match against a fresh, distinct
  fetch.

## Honest gap(s) disclosed

This document does not address the older three-year tenure track for
pre-1983-84 probationary periods, districts under 250 ADA, community
college faculty, § 44934.1's separate egregious-misconduct-only
procedure, charge-amendment rules, collective-bargaining-agreement
alternatives that can displace this scheme (Gov. Code § 3543.2(b)),
detailed hearing timelines and evidence-staleness rules, commission-
member eligibility/compensation, the procedural-error and
alternative-sanction limits on the commission's decision, and
judicial review via writ of mandate (Code Civ. Proc. § 1094.5), which
is flagged as unresearched.

## Method

Fetched Educ. Code §§ 44929.21, 44932, 44934, and 44944 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings via curl, confirmed byte-
identical. *Morrison v. State Board of Education* was located via
CourtListener `search` (type:"o") and verified via `get_endpoint_item`
using `html_with_citations` (`plain_text` was empty for this opinion).
All 14 citation instances were programmatically confirmed by the
research agent as exact, contiguous substrings, with two artifacts
(non-breaking space, doubled space) preserved and disclosed rather
than corrected.

Independently re-verified during integration review via a two-
hundred-and-twenty-ninth fetch (a new distinct curl User-Agent
string, "Groundtruth-229thVerify-CertificatedTeacherDismissalMorrison
/1.0") of all four statutory sections — all fetched cleanly on the
first attempt. The four §§ 44929.21/44932 quotes confirmed clean only
after normalizing the disclosed non-breaking-space and doubled-space
artifacts (matching the delivered gap disclosures exactly); the six
§§ 44934/44944 quotes confirmed clean on direct substring match. The
*Morrison* opinion was independently re-fetched via
`mcp__CourtListener__search` (confirming the correct opinion_id,
9541458 for the lead opinion, distinct from the cluster_id 1159400
used in the citation URL) and `get_endpoint_item` — all three
citation instances confirmed exact, contiguous substrings, and the
footnote-marker interruption between the two factor-list quotes was
independently located and confirmed in the freshly fetched opinion
text. The two-year tenure path, the eleven-cause list (four quoted
subdivisions), the *Morrison* nexus holding and factor list, the
notice-and-charges requirements, the commission's composition, and
its binding decision were all independently reconfirmed present in
the freshly fetched text.

## Verification

- All four cited statutory sections fetched twice independently by
  the research agent with distinct User-Agent strings, plus a two-
  hundred-and-twenty-ninth independent fetch during integration
  review; all 11 statutory citation instances confirmed clean (6 only
  after normalizing disclosed, source-side whitespace artifacts). The
  three *Morrison* citation instances independently re-verified via
  the CourtListener API against the correct internal opinion id; no
  defects found.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section, or the same single
  opinion, correctly disclose they are not independent sources of
  each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `certdismiss_` prefix has zero collisions. Ran
  section-number-specific greps for "44929.21," "44932," "44934,"
  "44944," and "Morrison v. State Board" — zero hits on all, confirming
  genuine novelty.
- Checked every citation's `case` field for emptiness — all 14
  populated with proper citation identifier strings.
- No new field ids required — all five fields (`employeeName`,
  `companyName`, `jobTitle`, `dateSigned`, `cityState`) reused from
  the existing corpus, with `companyName` relabeled for the
  school-district context, matching the reuse pattern already used by
  sibling civil-service documents.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Certificated Teacher Dismissal for Cause and the
  Morrison "Fitness to Teach" Standard — Information Sheet
  (`certificated_teacher_dismissal_morrison_info_sheet`), 9 clauses (7
  authority + 2 drafting), in the Ending employment category. No new
  fields.
- Corpus: 4,698 → 4,707 clauses; 583 → 584 documents. Fourth and
  final processed item of wave 141.

## Wave 141 summary

Wave 141 used a 2×2 rotation pattern (two documents each in Business
Formation and Ending employment), targeting the two tied-lowest
categories after wave 140 closed. This wave was interrupted twice by
container restarts — once losing one of the four in-progress agents
before it completed (Ending employment #1, recovered by relaunching
with an identical brief and an instruction to independently re-verify
its own novelty check rather than trust its interrupted predecessor's
partial progress), and once during integration review of the CalPERS
Golden Handshake document's case-law verification step (recovered by
scheduling a resumption reminder past the CourtListener rate-limit
window, though the rate limit cleared before the reminder fired).

1. **General Partner Fiduciary Duties in a California Limited
   Partnership — Information Sheet** (Business Formation) — 10
   clauses, Corp. Code §§ 15904.08, 15901.10.
2. **Nonprofit Public Benefit Corporation Merger — Information Sheet**
   (Business Formation) — 9 clauses, Corp. Code §§ 6010, 6011, 6012,
   6014, 6019, 6020.
3. **CalPERS "Golden Handshake" Early Retirement Incentive
   (Government Code § 20903) — Information Sheet** (Ending
   employment) — 11 clauses, Gov. Code § 20903, *Bunnett v. Regents of
   University of California*.
4. **Certificated Teacher Dismissal for Cause and the Morrison
   "Fitness to Teach" Standard — Information Sheet** (Ending
   employment) — 9 clauses, Educ. Code §§ 44929.21, 44932, 44934,
   44944, *Morrison v. State Board of Education*.

Corpus totals across the wave: 4,668 → 4,707 clauses (+39 net across
four documents: 10 + 9 + 11 + 9); 580 → 584 documents (+4). No genuine
duplication findings required excluding any delivered clause this
wave — every apparent grep hit across all four documents was
confirmed, on direct inspection, to be a false-positive cross-code
collision (Fam. Code § 3424(a) and Rev. & Tax. Code § 6014 for the
Nonprofit Merger document's "6010"/"6014" hits).
