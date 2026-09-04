# Business Formation, new document: LLC Member Dissociation and Buyout — Information Sheet

## Why this document

Confirmed by grep that "17706" had zero hits combined with LLC-specific
dissociation content. Read the existing Partnership Agreement document
in full — confirmed its `partnership_dissociation_triggers` and
`partnership_dissolution_not_automatic` clauses cite California's 1994
Uniform Partnership Act (Corp. Code §§ 16601, 16801), a genuinely
separate statute for general partnerships — LLCs and partnerships have
distinct dissociation schemes in California, so this is a genuine
companion, not a duplicate. Confirmed the existing `llc_mm_distributions`
clause is a short drafting clause about distributions generally, not
dissociation/buyout. Fourth and last document of wave 69.

## What this document covers

7 clauses: 2 drafting (purpose/scope, acknowledgment) and 5 authority
clauses, citing Cal. Corp. Code § 17706.02(a)-(c), (f)-(g),
§ 17706.01(a), (c), § 17706.03(a)-(b), § 17707.01, and § 17707.03(c)(1):

- **`llcdissociation_triggers`** (§ 17706.02(a)-(c), (f)-(g)) — the
  statutory list of events causing a member's dissociation.
- **`llcdissociation_wrongful`** (§ 17706.01(a), (c)) — the
  distinction between the power to dissociate (always exists) and
  wrongful dissociation (narrower, carries liability).
- **`llcdissociation_effect`** (§ 17706.03(a)-(b)) — the default
  effect of dissociation: loss of voting/management rights,
  transferee-only economic status, and no discharge of pre-existing
  debts.
- **`llcdissociation_continuation`** (§ 17707.01) — dissociation is
  not itself one of the LLC's exhaustive dissolution triggers, so the
  LLC continues by default.
- **`llcdissociation_no_default_buyout`** (§ 17706.03(a)(3),
  § 17707.03(c)(1)) — **a key finding**: California's RULLCA provides
  NO general default buyout right for an ordinarily dissociated
  member — only a narrower mechanism letting other members avoid a
  judicial dissolution decree by buying out the member who sued for
  it, triggered by litigation, not by ordinary dissociation.

## Genuine corrections and findings

- **The central finding**: this was flagged in the research assignment
  as a topic where a wrong assumption (importing a general buyout
  right from partnership law or other states' LLC acts) would be a
  serious, misleading error. The agent verified precisely: California's
  RULLCA leaves a dissociated member as a mere transferee with no
  cash-out mechanism, and the only buyout provision in the statute is
  tied specifically to avoiding a judicial dissolution decree — a
  narrow, litigation-triggered mechanism, not a general default right.
  Stated as an affirmative finding, not a silent gap.
- Confirmed dissociation is not itself a listed dissolution trigger —
  the LLC continues by default with its remaining members.
- Confirmed the power-to-dissociate/wrongful-dissociation distinction:
  a member can always dissociate by express withdrawal, but doing so
  wrongfully (per the statute's own defined circumstances) carries
  liability for resulting damages.
- Confirmed LLC and general-partnership dissociation are genuinely
  separate statutory schemes in California, despite similar-sounding
  trigger events, rather than treating them as interchangeable.

## Honest gap disclosed

The detailed sub-grounds for expulsion by member consent or judicial
order (§ 17706.02's remaining subdivisions) were summarized in body
text rather than fully itemized and separately quoted. The statute's
full definition of "wrongful" dissociation lists additional
circumstances beyond those summarized here.

## Method

Fetched Cal. Corp. Code §§ 17706.01, 17706.02, 17706.03, 17707.01,
and 17707.03 from `leginfo.legislature.ca.gov` via curl (through the
sandboxed proxy), each section fetched twice with distinct User-Agent
strings, confirmed byte-identical after whitespace normalization. All
7 citation quotes across the 5 authority clauses programmatically
confirmed as exact substrings of the confirmed text.

## Verification

- All five statutory sections fetched twice independently with
  distinct User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- **Caught and fixed a field-placeholder mismatch** during my own
  integration validation: the delivered `stateOfFormation` field
  reused the generic corpus placeholder "Delaware," but this document
  is entirely about California's RULLCA specifically — every citation
  is to the California Corporations Code. Corrected the placeholder to
  "California," matching the convention already used by other
  California-statute-specific Business Formation documents in this
  corpus (e.g., Alter Ego/Piercing the Corporate Veil, Charging Order,
  Stock Certificates).
- Checked source-independence disclosure logic — the § 17706.02(a)-(c)/
  (f)-(g) pair and § 17706.01(a)/(c) pair each correctly disclosed as
  one statutory section; § 17706.03, § 17707.01, and § 17707.03
  correctly disclosed as independent, separately-numbered sections;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); the
  reused generic drafting titles "Purpose and Scope" and
  "Acknowledgment" match this corpus's established cross-document
  pattern, not substantive duplicates.
- Field names (`companyName`, `stateOfFormation`) independently
  confirmed to match existing corpus field definitions (after the
  placeholder fix). No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: LLC Member Dissociation and Buyout — Information
  Sheet (`llc_member_dissociation_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Business Formation category. No new
  fields; one existing field's placeholder corrected for this
  document.
- Corpus: 2,515 → 2,522 clauses; 326 → 327 documents. Fourth and last
  document of wave 69.
- **Wave 69 complete**: 2,504 → 2,522 clauses (18 new); 323 → 327
  documents (4 new), across Family Law (§ 2640 Reimbursement,
  Preliminary/Final Declarations of Disclosure) and Business Formation
  (Director's Inspection Rights, LLC Member Dissociation and Buyout) —
  the "2×2" alternation pattern.
