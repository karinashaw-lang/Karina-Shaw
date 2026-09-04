# Family Law, new document: Interstate Compact on the Placement of Children (ICPC) — Information Sheet

## Why this document

Confirmed by grep that "ICPC" and "interstate compact on placement"
had zero hits anywhere in the corpus. Read the Guardianship of the
Person, Stepparent Adoption, and Independent Adoption documents in
full — none mention interstate placement, sending/receiving states, or
cross-state agency notice. Confirmed non-duplicative. Second of wave
73's four documents.

## What this document covers

7 clauses: 2 drafting (declaration/purpose, signature block) and 5
authority clauses, citing Cal. Fam. Code § 7901's compact text
(Articles 1, 2, 3, 5, 8) and the separate administering-authority
statutes §§ 7903-7904:

- **`icpc_purpose`** (Art. 1, 1(b), 1(d)) — the compact's own stated
  purpose: cooperation between party states, the receiving state's
  opportunity to evaluate a proposed placement, and promotion of
  appropriate jurisdictional arrangements.
- **`icpc_definitions_exclusions`** (Art. 2(d), Art. 8(a)) — **a key
  finding**: the compact does not apply to every interstate child
  movement — it applies only to the compact's own defined
  "placement," and Article 8(a) expressly excludes a parent,
  stepparent, grandparent, adult sibling, adult aunt/uncle, or
  guardian sending a child to that same relative in the receiving
  state.
- **`icpc_notice_requirement`** (Art. 3(a), 3(b), 3(d)) — the
  sending agency's mandatory pre-placement written notice to the
  receiving state, and the bar on sending the child until the
  receiving state confirms in writing the placement doesn't appear
  contrary to the child's interest.
- **`icpc_continuing_jurisdiction`** (Art. 5(a)) — **the central
  finding**: placement under the compact does NOT transfer legal
  jurisdiction to the receiving state — the sending agency retains
  jurisdiction (custody, supervision, care, treatment, disposition,
  financial responsibility) until adoption, majority, self-support, or
  discharge, while the receiving state separately retains its own
  jurisdiction over delinquency/crime committed there.
- **`icpc_administering_authority`** (§§ 7903-7904) — rather than
  assuming which California agency administers the compact, verified
  California's own statutory designation: the State Department of
  Social Services is named by statute (not the compact text itself)
  as the recipient of Article 3 notices and the Article 5(a)
  "appropriate authority in receiving state."

## Genuine corrections and findings

- **The central finding**: confirmed from the compact's own text that
  a sending agency's jurisdiction over a placed child is retained, not
  transferred, and that this retained jurisdiction coexists with —
  rather than displaces — a receiving state's own separate authority
  over delinquency or crime committed within its borders.
- Confirmed the Article 8(a) relative-placement exclusion precisely —
  a real, citable carve-out from compact coverage, not assumed or
  overclaimed as covering every family placement.
- Confirmed California's agency designation for compact purposes comes
  from separate, independently-numbered statutes (§§ 7903-7904), not
  from the compact text itself — correctly treated as independent
  sources rather than subsections of § 7901.
- Did not assume or assert how the State Department of Social Services
  carries out its designated role in practice, day to day, beyond what
  the statute itself states.

## Honest gap disclosed

Article 8(b)'s separate exclusion (a placement under a different
interstate compact/agreement with the force of law), Article 3(c)
(receiving state's right to request additional information), Article
4 (the penalty for a placement made in violation of Article 3),
Article 5(b)-(c) (service-agreement and private-agency provisions),
and §§ 7902/7905/7906 (procedural detail, including financial-default
resolution) were confirmed to exist but not built into their own
clauses or independently detailed.

## Method

Fetched Cal. Fam. Code §§ 7900-7907 from `leginfo.legislature.ca.gov`
via curl (through the sandboxed proxy), each section fetched twice
with distinct User-Agent strings (Chrome/Windows, Safari/macOS),
confirmed byte-identical after whitespace normalization. All 12
citation quotes across the 5 authority clauses programmatically
confirmed as exact substrings of the confirmed text. Independently
re-verified during integration review via a third, separate fetch
(Safari/macOS User-Agent) of §§ 7901 and 7903, spot-checking 6 of the
document's distinct quoted passages — confirmed clean.

## Verification

- Statutory sections fetched twice independently by the research agent
  with distinct User-Agent strings, plus a third independent fetch
  during integration review; all spot-checked quotes confirmed clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — all Article citations
  drawn from § 7901 correctly disclosed as parts of one statutory
  section, not independent of one another; §§ 7903 and 7904 correctly
  disclosed as two separate, independently-numbered sections and cited
  as independent sources; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Two new fields required (`otherState`, `placingPartyName`) — checked
  against the full corpus's existing field ids first (including
  superficially similar fields like `stateOfFormation`, `issuingState`,
  and `childCurrentState`, all confirmed to be distinct concepts from
  different documents) to confirm no equivalent field already existed
  under a different name. Four other fields (`childName`, `childDOB`,
  `dateSigned`, `cityState`) reused from the existing corpus.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: Interstate Compact on the Placement of Children (ICPC)
  — Information Sheet (`interstate_compact_placement_children_info_sheet`),
  7 clauses (5 authority + 2 drafting), in the Family Law category. 2
  new fields (`otherState`, `placingPartyName`).
- Corpus: 2,610 → 2,617 clauses; 340 → 341 documents. Second document
  of wave 73.
