# Estate Planning, new document: California Uniform Directed Trust Act ('Trust Director' / 'Trust Protector') — Information Sheet

## Why this document

Third document of wave 79. Read the existing Revocable Living Trust,
Trust Amendment, and Trust Decanting documents in full and grepped for
"trust protector," "16342," and "protector" — confirmed zero prior
coverage. Confirmed non-duplicative.

**Citation correction**: the research brief assumed Probate Code
§ 16342 as the governing statute — that section is actually in the
Uniform Fiduciary Income and Principal Act's receipt-allocation
article and has nothing to do with a trust-protector-type role.
California has not codified a role called "trust protector" by that
name at all. What it has codified, confirmed directly against
leginfo's Division 9 table of contents and a full-text search of the
enacting bill (2023 SB 801), is the California Uniform Directed Trust
Act (Prob. Code §§ 16600-16632, effective January 1, 2024), which uses
the statutory terms "trust director" and "power of direction" instead.

## What this document covers

7 clauses: 2 drafting (background/declaration, signature block) and 5
authority clauses, citing Cal. Prob. Code §§ 16600(b), 16602(d), (g),
16604(a), 16606(a), 16608, 16612(a)(1)-(2), (b), 16614(a)-(b),
16616(a)-(b), and 16628:

- **`trustprotector_terminology_and_definition`** (§ 16600(b),
  § 16602(g)) — **the terminology correction itself**: the statute's
  own text never uses "trust protector" — but a role a trust
  instrument does call "trust protector" can still be a "trust
  director" for statutory purposes, regardless of the label the
  instrument uses.
- **`trustprotector_scope_and_exclusions`** (§ 16602(d), § 16608,
  § 16606(a)) — **the central finding**: the statute expressly
  excludes the power to appoint or remove a trustee from its own
  definition of "power of direction" — a role commonly assumed to
  include that power is, as to that specific power, NOT governed by
  this chapter's fiduciary-status and compliance rules.
- **`trustprotector_fiduciary_status`** (§ 16612(a)(1)-(2), (b)) — the
  default fiduciary duty/liability standard (same as a sole or
  cotrustee, depending on how the power is held), its variability by
  the trust instrument, and the health-care-professional carve-out.
- **`trustprotector_directed_trustee_relationship`** (§ 16614(a)-(b),
  § 16616(a)-(b)) — the directed trustee's default duty to comply
  (and non-liability for complying), the willful-misconduct exception,
  and the reciprocal information-sharing duty.
- **`trustprotector_procedural_defaults`** (§ 16628, § 16604(a)) —
  the default cross-reference to trustee rules on acceptance, bond,
  compensation, resignation, and vacancy, and the statute's
  non-retroactive applicability date.

## Genuine corrections and findings

- **The citation correction itself**: caught that the research brief's
  assumed statutory citation was entirely wrong (a different article
  of a different chapter), and independently confirmed via leginfo's
  own table of contents and the enacting bill's text that California
  has not codified a role called "trust protector" — it codified
  "trust director" instead.
- **The central finding**: confirmed precisely that the power to
  appoint or remove a trustee is expressly excluded from the statute's
  "power of direction" definition — correcting a natural assumption in
  general estate-planning practice that a "trust protector" role
  typically includes that power and would be governed by this
  chapter's rules.
- **A genuine schema defect caught during integration review**: all 13
  citations in the delivered batch had an empty `"case"` field (a
  required field per this project's schema) — fixed by deriving a
  proper case-identifier string for each citation from its already-
  correct `"cite"` field before merging, and re-verified clean across
  the full corpus afterward.
- Confirmed the statute's own non-retroactivity rule precisely: it
  applies to a pre-2024 trust only for decisions or actions occurring
  on or after January 1, 2024, not retroactively.

## Honest gap(s) disclosed

§ 16605 (public administrator/guardian/conservator consent to serve),
§ 16610 (Medicaid payback/charitable-interest parity rule), § 16618
(default no-duty-to-monitor rule), § 16620 (parallel cotrustee-relief
rule outside directed trusts), §§ 16622/16624 (limitation period and
defenses in a breach action against a trust director), § 16626
(personal jurisdiction), § 16630 (uniformity-of-construction canon),
and § 16632 (E-SIGN Act interaction) are all referenced but not
independently developed into their own clauses. This document does not
independently verify or address the individual trustee-focused
statutory sections that § 16628 cross-references (§§ 15600, 15601,
15602, 15681, 15640, 15660).

## Method

Fetched the California Uniform Directed Trust Act's full chapter text
(Prob. Code §§ 16600-16632, via leginfo's `codes_displayText` chapter
view) from `leginfo.legislature.ca.gov`, fetched twice by the research
agent with two distinct User-Agent strings (Chrome/Windows and
Safari/macOS), confirmed byte-identical after whitespace
normalization. All 13 citation quotes across the 5 authority clauses
programmatically confirmed as exact contiguous substrings (no
ellipsis-joined quotes). Independently re-verified during integration
review via a sixth fetch (a distinct curl User-Agent string,
"Groundtruth-SixthVerify-TrustDirector/1.0") of the same chapter text —
all 13 quotes confirmed clean, and the agent's negative claim that the
phrase "trust protector" does not appear anywhere in the chapter's
text was independently spot-checked and confirmed true against this
sixth fetch.

## Verification

- Chapter text fetched twice independently by the research agent with
  distinct User-Agent strings, plus a sixth independent fetch during
  integration review; all quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean after the empty-case-field fix described above.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are provisions of the same statutory
  chapter (not independent of one another beyond the dual-fetch
  consistency check, since all are drawn from a single chapter's text);
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- One new field required (`trustDirectorName`) — checked against the
  full corpus's existing field ids first, confirming no equivalent
  field already existed (a `directorName` field exists but is scoped to
  corporate-board-director clauses, a legally distinct role — correctly
  not reused). Five fields (`settlorName`, `trustName`, `trusteeName`,
  `dateSigned`, `cityState`) reused from the existing corpus (6, 10,
  11, 148, and 127 prior documents respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: California Uniform Directed Trust Act ('Trust
  Director' / 'Trust Protector') — Information Sheet
  (`california_directed_trust_act_info_sheet`), 7 clauses (5 authority
  + 2 drafting), in the Estate Planning category. 1 new field.
- Corpus: 2,774 → 2,781 clauses; 364 → 365 documents. Third addition
  of wave 79.
