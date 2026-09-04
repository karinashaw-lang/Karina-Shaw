# Business Formation, new document: Director's Inspection Rights — Information Sheet

## Why this document

Substituted in place of an Officer/Director Indemnification topic
that turned out to be already substantively covered inside the
existing Corporate Bylaws document (three dedicated, verified § 317
clauses). Confirmed by grep that Corp. Code § 1602 combined with
director-inspection content had zero genuine hits. Read the existing
Shareholder and Member Inspection Rights document in full — confirmed
none of its clauses address a director's own § 1602 right (all are
shareholder/LLC-member rights). Second of wave 69's four documents.

## What this document covers

4 clauses: 2 drafting (purpose/scope, signature block) and 2
authority clauses, citing Cal. Corp. Code § 1602 and § 1603(a) (plus
the § 1600-1605 chapter caption as structural evidence):

- **`directorinspect_absolute_right`** (§ 1602) — **a key finding**:
  the statute's own text uses the word "absolute" — not a court's
  characterization — and states no purpose condition at all, a
  verified contrast with the shareholder's § 1601 right (which the
  statute expressly limits to a "purpose reasonably related to" the
  shareholder's interest).
- **`directorinspect_remedy`** (§ 1603(a) + chapter caption) — the
  court remedy for a refused inspection demand, with an honest
  disclosure that applying it to a refused director demand is a
  structural inference from the statute's placement and unqualified
  wording, not an express cross-reference naming § 1602 — and that no
  case law confirming this reading was located.

## Genuine corrections and findings

- **The central finding**: confirmed § 1602 itself uses the word
  "absolute" in its own statutory text, verified by direct fetch
  rather than assumed from the word's common use in case law
  describing director inspection rights.
- Confirmed § 1602 states no stated-purpose condition — a genuine,
  verified textual contrast to the shareholder's § 1601 right.
- Confirmed § 1602 contains no non-waivability sentence comparable to
  §§ 1600(d)/1601(b) — the agent explicitly declined to assert that a
  corporation's bylaws cannot limit a director's inspection right,
  since no statutory support for that claim was found, rather than
  assuming symmetry with the shareholder provisions.
- Confirmed the remedy clause's chapter-caption citation is offered
  only as structural evidence (chapter organization), not as an
  independent source from § 1602 itself — an honest, precise
  disclosure of what that citation actually proves.

## Honest gap disclosed

What counts as a "reasonable time" for a given inspection, and what
happens to the right once board service ends, are both left
undefined by the statute and not resolved by this document. Whether
a corporation's articles or bylaws may limit a director's § 1602
right is expressly left open rather than assumed either way.

## Method

Fetched Cal. Corp. Code § 1602 and § 1603(a) from
`leginfo.legislature.ca.gov` via curl (through the sandboxed proxy),
each fetched twice with distinct User-Agent strings (Chrome/Windows,
Safari/Mac for § 1602; Chrome/Windows, Chrome/Mobile-Linux for
§ 1603), confirmed byte-identical after whitespace normalization.
Both citation quotes programmatically confirmed as exact substrings
of the confirmed text.

## Verification

- Both statutory sections fetched twice independently with distinct
  User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 1602 correctly
  noted as a single undivided paragraph with only one citation; § 1603
  correctly disclosed as a genuinely separate section not expressly
  cross-referenced by § 1602, with the inference to a director-demand
  application explicitly flagged as structural, not textual; correct
  as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`companyName`, `directorName`, `dateSigned`,
  `cityState`) independently confirmed to match existing corpus field
  definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: Director's Inspection Rights — Information Sheet
  (`director_inspection_rights_info_sheet`), 4 clauses (2 authority +
  2 drafting), in the Business Formation category. No new fields.
- Corpus: 2,504 → 2,508 clauses; 324 → 325 documents. Second document
  of wave 69.
