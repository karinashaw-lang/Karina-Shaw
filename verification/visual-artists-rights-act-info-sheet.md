# Confidentiality & IP, new document: Federal Visual Artists Rights Act (VARA) — Information Sheet

## Why this document

Confirmed by grep that "Visual Artists Rights Act" / "VARA" / "17
U.S.C. § 106A" had no dedicated document — only a brief mention inside
the Copyright Assignment document's `copyrightassign_moral_rights`
clause noting VARA exists as separate from copyright ownership,
without describing its own substantive requirements. Read the existing
California Art Preservation Act (CAPA) document's 7 clauses in full
first, since this document's central point is how the federal statute
relates to that state one. Third of wave 62's four documents.

## What this document covers

7 clauses: 2 drafting (declaration/purpose, record/signature) and 5
authority clauses, citing 17 U.S.C. §§ 101, 106A, and 301, plus Cal.
Civ. Code § 987(g)(1):

- **`vara_attribution_and_integrity_rights`** (§ 106A(a)-(b)) — the two
  core personal rights (attribution and integrity), held only by the
  individual author regardless of copyright ownership.
- **`vara_work_of_visual_art_definition`** (§ 101) — the narrow
  statutory definition and its express exclusions, contrasted
  factually against CAPA's broader "fine art" definition.
- **`vara_duration`** (§ 106A(d)(1)-(2)) — life-of-author term for
  post-effective-date works versus a copyright-coextensive term for
  pre-effective-date, not-yet-transferred works.
- **`vara_waiver`** (§ 106A(e)(1)-(2)) — the signed-writing waiver
  requirement, distinct from ownership transfer and from CAPA's own
  separate waiver provision.
- **`vara_preemption_of_state_law`** (§ 301(f)(1)-(2) + Cal. Civ. Code
  § 987(g)(1)) — **the key finding**: preemption is conditional, not
  blanket, with express statutory carve-outs.

## Genuine corrections and findings

- **The central finding, precisely scoped**: § 301(f)(1)'s preemption
  reaches only rights "equivalent" to § 106A's, in works meeting
  § 106A's own definition, for conduct on or after VARA's effective
  date — § 301(f)(2) expressly preserves state-law rights and remedies
  for pre-effective-date conduct, non-equivalent rights, and rights
  extending beyond the author's life.
- **One concrete, verified application, not a sweeping conclusion**:
  CAPA's own text (Cal. Civ. Code § 987(g)(1)) extends its rights
  "until the 50th anniversary of the death of the artist" — a right
  extending beyond the author's life falls within § 301(f)(2)(C)'s
  express carve-out and is not preempted. The document explicitly
  declines to reach any broader conclusion about CAPA's overall
  preemption status.
- Confirmed VARA's "work of visual art" definition is narrower than
  CAPA's "fine art" definition in concrete, specific ways (VARA's
  single-copy/200-copy-edition limit vs. CAPA's no-such-limit
  "recognized quality" standard) while also reaching categories (signed
  photographs) CAPA doesn't mention.
- Confirmed the June 1, 1991 effective date is the document's own
  arithmetic from the quoted "6 months after Dec. 1, 1990" session-law
  text, not a separately stated calendar date in the statute — disclosed
  rather than presented as directly quoted.

## Honest gap disclosed

§ 106A(c)'s aging/conservation/public-presentation exceptions to the
integrity right are described in summary but not separately cited.
The "recognized stature" case-law gloss (e.g., Carter v.
Helmsley-Spear) was deliberately omitted as unverified rather than
characterized from memory or secondary sources. § 106A(d)(3)'s joint-
work duration rule and § 106A(d)(4)'s year-end rounding rule are not
addressed.

## Method

Fetched 17 U.S.C. §§ 101, 106A, and 301 from `law.cornell.edu` via
curl, each fetched twice with distinct User-Agent strings, confirmed
byte-identical. All 8 citation quotes programmatically confirmed as
exact substrings of the confirmed text.

## Verification

- All three sections fetched twice independently with distinct
  User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — §§ 101, 106A, and 301
  correctly disclosed as independent, separately-numbered sections; each
  section's own subsections (e.g., § 106A(a)/(b), § 301(f)(1)/(f)(2))
  correctly disclosed as not independent of each other; the Cal. Civ.
  Code § 987(g)(1) citation correctly used only for the one narrow,
  verified application described above; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`workDescription`, `workTitle`, `artistName`,
  `ownerName`, `dateSigned`, `cityState`) matched exactly to the
  existing CAPA document's own field definitions (better contextual
  labels than a generic fallback). No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: Federal Visual Artists Rights Act (VARA) — Information
  Sheet (`visual_artists_rights_act_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Confidentiality & IP category. No new
  fields.
- Corpus: 2,307 → 2,314 clauses; 297 → 298 documents. Third document of
  wave 62.
