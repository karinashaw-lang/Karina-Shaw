# Estate Planning, new document: Special Administrator of a Decedent's Estate — Information Sheet

## Why this document

Confirmed by grep that "special administrator," "8540," and
"temporary personal representative" had zero hits anywhere. Read the
Petition for Probate document in full — confirmed it covers only the
regular personal representative appointment process, never the
temporary/emergency special administrator mechanism. Third of wave
75's four documents.

## What this document covers

6 clauses: 2 drafting (intro, signature/acknowledgment) and 4 authority
clauses, citing Cal. Prob. Code §§ 8540(a)-(b), 8541(a)-(d),
8544(a)-(c), 8545(a), and 8546(a)-(c):

- **`specialadmin_grounds`** (§ 8540) — the "immediate appointment"
  trigger and confirmation that a special administrator's scope and
  duration is set by the individual court order, not a single fixed
  statutory role.
- **`specialadmin_ex_parte`** (§ 8541) — notice is discretionary, not
  mandatory (the statute's own language is "without notice," not
  "ex parte" — a precise correction of the research prompt's own
  assumed terminology), plus the court's preference for the person
  entitled to general appointment and its power to appoint the public
  administrator instead.
- **`specialadmin_powers_scope`** (§§ 8544, 8545(a)) — **the central
  finding**: a special administrator's DEFAULT powers are narrowly
  limited to four enumerated actions (take possession/preserve,
  collect claims/rents, sue or defend, sell perishable property);
  broader powers (borrowing, mortgaging) require a specific court
  order, and full general-personal-representative powers are
  available only via an affirmative § 8545 grant on its own required
  notice — never assumed by default.
- **`specialadmin_termination`** (§ 8546) — authority ends upon
  issuance of general letters (or as otherwise directed), with a duty
  to deliver estate property and a creditor-claim list, and to account.

## Genuine corrections and findings

- **The central finding**: precisely verified that a special
  administrator does NOT automatically have all the powers of a
  general personal representative — the default power set under
  § 8544(a)-(c) is narrow, and broader powers require an affirmative
  § 8545 court grant on notice. This was the topic's most easily
  overclaimed point, and the research explicitly avoided assuming
  power-parity with a general personal representative.
- **Corrected the research prompt's own terminology**: the statute's
  text uses "without notice," never "ex parte" — the agent used the
  statute's own language rather than the layperson term supplied in
  the research brief.
- **Corrected the research prompt's own section-range guess**: the
  brief suggested "Part 5"; the agent verified via the Probate Code's
  own table of contents that Special Administrators is actually
  Article 8 of Division 7, Part 2, Chapter 4 (§§ 8540-8547) — a
  genuine correction made by checking the primary source rather than
  trusting the prompt's assumption.
- Confirmed § 8544(c)'s precise rule that a special administrator is
  not even a proper party to a claim action against the decedent
  absent a § 8545 grant — a further precise scope limitation.

## Honest gap disclosed

Bond mechanics (§§ 8480-8488, 8543), letters-and-oath issuance
mechanics (§ 8542), § 8544(d) (no duty to take further protective
action for a particular-act appointment), and § 8545(b)-(c) (bond
conditions and letters-recital requirements for an § 8545 grant) are
not restated.

## Method

Fetched Cal. Prob. Code §§ 8540, 8541, 8544, 8545, and 8546 from
`leginfo.legislature.ca.gov` via curl (through the sandboxed proxy),
each section fetched twice with distinct User-Agent strings, confirmed
byte-identical after whitespace normalization. All 5 citation quotes
across the 4 authority clauses programmatically confirmed as exact
substrings of the confirmed text. Independently re-verified during
integration review via a third fetch (Safari/macOS User-Agent) of all
five sections — all 9 spot-checked passages confirmed clean.

## Verification

- Statutory sections fetched twice independently by the research agent
  with distinct User-Agent strings, plus a third independent fetch
  during integration review; all quotes confirmed clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 8540(a)/(b),
  § 8541(a)-(d), and § 8546(a)-(c) each correctly disclosed as
  subsections of one section, not independent of one another; § 8544
  vs. § 8545 correctly disclosed as independently-numbered sections;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`decedentName`, `dateOfDeath`, `petitionerName`,
  `countyOfFiling`, `dateSigned`, `cityState`) independently confirmed
  to match existing corpus field definitions. One new field
  (`emergencyCircumstances`) — checked against the full corpus's
  existing field ids first to confirm no equivalent field already
  existed.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: Special Administrator of a Decedent's Estate —
  Information Sheet (`special_administrator_info_sheet`), 6 clauses (4
  authority + 2 drafting), in the Estate Planning category. 1 new
  field (`emergencyCircumstances`).
- Corpus: 2,668 → 2,674 clauses; 349 → 350 documents. Third document
  of wave 75.
