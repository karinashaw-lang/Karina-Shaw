# Confidentiality & IP, new document: California Invasion of Privacy Act (CIPA) — Information Sheet

## Why this document

Confirmed by grep that "Penal Code § 630," "Invasion of Privacy Act,"
"637.2," and "two-party"/"all-party consent" had zero genuine hits —
a raw "632" grep returned only false positives (Prob. Code § 5632,
Gov. Code §§ 68632/68633, Fam. Code § 6320(c)), each checked in
context individually. Read the existing employee monitoring clause —
confirmed it's confined to case law on employer computer/email-system
privacy expectations, not CIPA's recording/wiretap prohibitions or
private right of action. First of wave 70's four documents
(Hiring/During employment/Confidentiality & IP/Ending employment
"1×4" alternation).

## What this document covers

7 clauses: 2 drafting (purpose/overview, acknowledgment) and 5
authority clauses, citing Cal. Penal Code §§ 631(a), (d), 632(a),
(b), (c), (d), and 637.2(a)-(c):

- **`cipa_631_wiretapping_and_unauthorized_connection`** (§ 631(a)) —
  the wiretapping/unauthorized-connection prohibition, the separate
  reading-contents prohibition, and the penalty structure with its
  enhanced repeat-offender fine.
- **`cipa_632_all_party_consent_recording`** (§ 632(a)) — **a key
  finding**: § 632(a)'s all-party consent language confirmed verbatim
  ("intentionally... and without the consent of all parties to a
  confidential communication"), the specific feature California's
  wiretapping law is known for, verified against the actual statutory
  text rather than asserted from common characterization.
- **`cipa_632_confidential_communication_defined`** (§ 632(b)-(c)) —
  the statute's own "confidential communication" definition
  (including its public-gathering/reasonable-expectation exclusions)
  and its "person" definition.
- **`cipa_evidence_exclusion_rule`** (§ 631(d), § 632(d)) — the
  parallel evidentiary exclusion rules both sections state for
  unlawfully obtained material.
- **`cipa_637_2_private_right_of_action`** (§ 637.2(a)-(c)) — the
  private civil right of action, statutory damages ($5,000/violation
  or 3x actual damages, whichever greater), injunctive relief, and
  the no-actual-damages-prerequisite rule.

## Genuine corrections and findings

- **The central finding**: confirmed § 632(a)'s all-party consent
  requirement precisely from the statute's own text, distinguishing
  it from the one-party-consent standard under federal wiretap law
  and many other states — verified rather than simply repeated as
  common knowledge.
- Confirmed penalties are precisely stated as wobblers (county jail
  or, for § 631, imprisonment under Penal Code § 1170(h); for § 632,
  county jail or state prison) rather than flatly labeled
  "misdemeanor," which would have understated the potential exposure.
- Confirmed § 637.2's private right of action reaches a violation of
  the entire Invasion of Privacy chapter (§§ 630-638.55), not only
  §§ 631/632 specifically — a scope point the clause states explicitly
  rather than implying narrower coverage.
- Confirmed the current $5,000/3x-actual-damages statutory damages
  figure against the actual fetched text rather than an assumed,
  possibly-stale number.

## Honest gap disclosed

§ 631(b)'s public-utility exemption is summarized rather than quoted
in full defined-term detail. How § 631/§ 632 apply to non-telephonic
technologies (VoIP, text messaging, internet-based communications)
was not researched. Case law construing "reasonable expectation" of
being overheard/recorded was not independently researched. § 637.2's
own statute of limitations and its trade-secret cross-reference
(§ 637.2(d)) were not independently verified.

## Method

Fetched Cal. Penal Code §§ 631, 632, and 637.2 from
`leginfo.legislature.ca.gov` via curl (through the sandboxed proxy),
each section fetched twice with distinct User-Agent strings, confirmed
byte-identical after whitespace normalization. All 11 citation quotes
across the 5 authority clauses programmatically confirmed as exact
substrings of the confirmed text.

## Verification

- All three statutory sections fetched twice independently with
  distinct User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — the § 631(a) triple
  citation, § 632(a) pair, § 632(b)-(c) pair, and § 637.2(a)-(c) triple
  citation each correctly disclosed as subsections of one statutory
  section; § 631(d) and § 632(d) correctly disclosed as independent,
  separately-numbered sections stating parallel rules; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none); the
  reused generic drafting title "Acknowledgment" matches this corpus's
  established cross-document pattern, not a substantive duplicate.
- Field names (`companyName`, `employeeName`, `signatureDate`)
  independently confirmed to match existing corpus field definitions
  exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: California Invasion of Privacy Act (CIPA) —
  Information Sheet (`california_invasion_of_privacy_act_info_sheet`),
  7 clauses (5 authority + 2 drafting), in the Confidentiality & IP
  category. No new fields.
- Corpus: 2,522 → 2,529 clauses; 327 → 328 documents. First document
  of wave 70.
