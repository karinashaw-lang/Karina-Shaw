# Estate Planning, new document: Caregiver's Authorization Affidavit — Information Sheet

## Why this document

First processed item of wave 100 (Estate Planning slot, 1×4 pattern
targeting six categories tied at the corpus's then-lowest count). A
scoping pass confirmed zero prior coverage of Family Code §§ 6550/6552's
self-executing caregiver affidavit, distinct from the existing
Nomination of Guardian for Minor Children document, which is a step
toward a court-supervised guardianship proceeding rather than a
self-executing statutory tool.

## What this document covers

8 clauses: 2 drafting (intro, caregiver declaration) and 6 authority
clauses, citing Family Code §§ 6550(a)-(c), (f), (h)(2)-(3), and 6552:

- **`caregiverauth_who_may_execute`** — who may sign, and the baseline
  school-enrollment/school-related-medical-care authority available to
  any caregiver 18 or older.
- **`caregiverauth_relative_definition`** — the statutory "relative"
  definition gating the fuller, guardian-level medical/dental authority.
- **`caregiverauth_scope_and_immunizations`** — the statutory definition
  of "school-related medical care," recently amended to expressly list
  immunizations.
- **`caregiverauth_parental_supersession`** — the parent's-contrary-
  decision-controls rule, and the notice-to-parent precondition for the
  fuller medical authority.
- **`caregiverauth_no_guardianship_created`** — the affidavit's own
  statement that it does not affect parental rights or create legal
  custody, and requires no court seal or notarization.
- **`caregiverauth_termination_and_reliance`** — the notice-based
  invalidation rule and the good-faith-reliance immunity for a school or
  provider that acts on the affidavit.

## Genuine findings

- **A corrected section-range framing**: the brief assumed a "§§
  6550-6552" range; the agent confirmed the article header itself reads
  "[6550-6552]" but § 6551 (and § 6553) return no operative statutory
  text — only §§ 6550 and 6552 are actually populated. Disclosed
  explicitly rather than fabricating § 6551 content, and independently
  re-confirmed during integration review.
- **A significant, very recent statutory finding**: both sections were
  amended by Stats. 2025, Ch. 664 (AB 495), effective January 1,
  2026 — a matter of weeks before this document's checked date. The
  amendment added an explicit statutory definition of "school-related
  medical care" that now expressly lists immunizations, a fact the
  agent flagged as making older descriptions of this statute
  potentially outdated.
- **A corrected oversimplification in the research brief**: the brief
  assumed the affidavit categorically "does NOT authorize immunizations
  if the parent objects." The agent read the actual text and found no
  immunization-specific carve-out — only a general parental-
  supersession rule applying to medical/dental decisions broadly,
  disclosed as broader (and thus different) than the brief's assumed
  immunization-specific rule.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's single
  lightweight test call; the document proceeds statute-only, disclosed
  explicitly in each affected clause's gap field.

## Honest gap(s) disclosed

This document does not address how a specific school, doctor, or health
plan will in practice treat the affidavit, which can vary. It does not
compare the "relative" definition used here to different relative
definitions used elsewhere in California law (e.g., relative-placement
or probate-guardianship contexts). It does not resolve how "jeopardize
the life, health, or safety of the minor" applies to a specific dispute,
or how a specific existing custody order or prior guardianship would
interact with a caregiver's use of this affidavit. It does not state
that invalidity is automatic upon a change in living arrangement — only
upon actual notice to the recipient.

## Method

Fetched Family Code §§ 6550, 6551, and 6552 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical on the
extracted statutory-text content after whitespace normalization (§ 6551
confirmed empty in both fetches). CourtListener's daily rate limit was
already exhausted on a single lightweight test call; no case law was
used, a disclosed and legitimate choice. All 9 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via an
eighty-eighth fetch (a new distinct curl User-Agent string,
"Groundtruth-88thVerify-CaregiverAuth/1.0") of all three sections — all
9 citation instances confirmed clean on direct substring match, and
§ 6551 independently reconfirmed to render no operative statutory text.

## Verification

- Family Code §§ 6550, 6551, and 6552 each fetched twice independently
  by the research agent with distinct User-Agent strings, plus an
  eighty-eighth independent fetch during integration review; all 9
  citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses citing multiple
  subdivisions of § 6550, or both § 6550 and § 6552's affidavit-form
  text, correctly disclose they are not independent sources of each
  other; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 9 populated
  with proper citation identifier strings.
- One new field required: `caregiverName` (confirmed genuinely new via a
  corpus-wide field-id lookup before adding); the other three fields
  (`minorChildName`, `parentName`, `relationshipToChild`) reused from
  the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Caregiver's Authorization Affidavit — Information Sheet
  (`caregiver_authorization_affidavit_info_sheet`), 8 clauses (6
  authority + 2 drafting), in the Estate Planning category. One new
  field: `caregiverName`.
- Corpus: 3,333 → 3,341 clauses; 442 → 443 documents. First processed
  item of wave 100.
