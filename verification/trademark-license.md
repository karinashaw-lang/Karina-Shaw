# Confidentiality & IP, seventh document: Trademark License Agreement

## Why this document

Every existing IP document in the corpus is copyright- or invention-
focused. Trademark licensing is a genuinely distinct area of federal
law with its own doctrine — the Lanham Act's related-company
inurement rule and the "naked licensing" abandonment risk — confirmed
non-duplicative against the existing `ip_` and `copyrightassign_`
clauses before drafting.

## What this document covers

7 clauses: 2 drafting (grant of license, quality control) and 5
authority clauses:

- **`tmlicense_what_is_a_trademark`** (15 U.S.C. § 1127) — the
  statutory definition of "trademark."
- **`tmlicense_related_company_inurement`** (15 U.S.C. §§ 1127, 1055)
  — the statutory basis for a licensee's use benefiting the licensor,
  conditioned on the licensor actually controlling quality.
- **`tmlicense_naked_licensing_abandonment`** (*Barcamerica
  International USA Trust v. Tyfield Importers, Inc.*, 289 F.3d 589
  (9th Cir. 2002); 15 U.S.C. § 1127) — that a license granted without
  real quality control risks the mark being deemed abandoned.
- **`tmlicense_cancellation_ground`** (15 U.S.C. § 1064(3)) — that
  abandonment is a codified, no-time-limit cancellation ground.
- **`tmlicense_no_statutory_writing_requirement`** (15 U.S.C.
  § 1060(a)(3), contrast) — that unlike a copyright transfer or a
  trademark assignment, no statute requires a trademark license itself
  to be in writing.

## Genuine correction caught during research

The task brief guessed the abandonment cancellation ground was at
§ 1064(5). Direct review of the statutory text shows it's actually
§ 1064(3) — corrected and disclosed in `tmlicense_cancellation_ground`
rather than assumed.

## Defect caught and fixed by the agent itself

The agent's own `{{` leak self-check caught a real leak in
`tmlicense_what_is_a_trademark`'s gap field (`{{trademarkDescription}}`)
before delivery and fixed it with generic phrasing — confirmed clean
on independent re-check during integration.

## Defects caught and fixed during integration

`tmlicense_what_is_a_trademark` and `tmlicense_cancellation_ground`
each cite a single statutory subsection but initially lacked the
standard explicit single-source disclosure sentence — added during
integration.

## Method

Fetched 15 U.S.C. §§ 1055, 1060, 1064, 1127 from `law.cornell.edu`,
each verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical. *Barcamerica International USA
Trust v. Tyfield Importers, Inc.* verified via CourtListener against
full opinion text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean on this final
  pass (one real leak was caught and fixed by the agent before
  delivery).
- Checked source-independence disclosure logic across all 5 authority
  clauses — corrected on two, confirmed correct on the rest.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Trademark License Agreement (`trademark_license`), 7
  clauses (5 authority + 2 drafting), in the Confidentiality & IP
  category. New fields: `licensorName`, `licenseeName`,
  `trademarkDescription`.
- Corpus: 640 → 647 clauses; 85 → 86 documents.
