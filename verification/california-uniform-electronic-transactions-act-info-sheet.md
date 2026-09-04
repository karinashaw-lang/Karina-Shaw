# Confidentiality & IP, new document: California Uniform Electronic Transactions Act (UETA) — Information Sheet

## Why this document

Fourth and final document of wave 80. Confirmed by grep that "Uniform
Electronic Transactions Act," "UETA," and "1633" had only 3 prior
incidental mentions (a TDS timing clause's parenthetical naming UETA's
title/section range as context, and two IP-assignment writing-
requirement clauses' gap fields disclaiming "a state UETA-equivalent
statute" without quoting or explaining it). Read all three in full —
confirmed none substantively explains UETA's own validity rule,
agreement requirement, definitions, or attribution rule. Confirmed
non-duplicative; this foundational, cross-cutting topic warranted its
own general treatment.

## What this document covers

7 clauses: 2 drafting (purpose, signature/acknowledgment) and 5
authority clauses, citing Cal. Civ. Code §§ 1633.2(g)-(h), 1633.3(a),
(b)(1)-(2), (f), 1633.5(a)-(c), 1633.7(a)-(d), and 1633.9(a)-(b):

- **`ueta_core_validity_rule`** (§ 1633.7(a)-(d)) — the central rule:
  a record, signature, or contract may not be denied legal effect
  solely because it is in electronic form, and electronic records/
  signatures satisfy writing/signature legal requirements.
- **`ueta_agreement_to_conduct_electronically`** (§ 1633.5(a)-(c)) —
  **a key finding**: UETA applies only where the parties have agreed
  to conduct a transaction electronically (a fact-specific,
  context-and-conduct determination) — and the statute expressly
  restricts how that agreement may be shown: not via a standard-form
  contract's own boilerplate (with a narrow carve-out), and not merely
  inferred from using electronic means to pay an account.
- **`ueta_electronic_signature_defined`** (§ 1633.2(g)-(h)) — UETA's
  definitions of "electronic record" and "electronic signature" — the
  latter is broader than "digital signature" (a specific cryptographic
  technology defined elsewhere), reaching a typed name or click-to-sign
  action if executed with intent to sign.
- **`ueta_attribution`** (§ 1633.9(a)-(b)) — the attribution rule: an
  electronic record/signature is attributable to a person if it was
  that person's act, provable by any means, not limited to a specific
  authentication technology.
- **`ueta_scope_exclusions`** (§ 1633.3(a), (b)(1)-(2), (f)) — **the
  central finding**: UETA's own text excludes wills, codicils, and
  testamentary trusts, and most UCC Division 1 provisions, from its
  scope — but an exclusion from UETA doesn't itself bar electronic
  form if some other law permits it.

## Genuine corrections and findings

- **A real defect caught and fixed during integration review**: three
  of the delivered citation quotes had a missing space at a subsection
  boundary (e.g., "electronic form.(b) A contract..." instead of the
  source's "electronic form. (b) A contract..."), which failed the
  direct exact-substring check. Confirmed via whitespace-collapsed
  comparison and manual context inspection against the independently
  fetched source (both showed the space genuinely present in the
  source text) that this was a delivered-quote formatting artifact,
  not a misquote — fixed the three quotes to include the space before
  merging, then re-verified all 13 quotes clean.
- **The central finding**: confirmed precisely that UETA's own
  wills/codicils/testamentary-trusts exclusion exists — a commonly
  known but easy-to-misstate carve-out, verified word-for-word rather
  than assumed from general familiarity with the model UETA.
- Confirmed the statute's specific restrictions on how "agreement to
  transact electronically" may be shown — correcting an assumption
  that merely using electronic payment methods would suffice to show
  consent.
- Correctly declined to quote § 1633.3(c)'s lengthy list of additional
  excluded California statutes verbatim (dozens of cross-referenced
  sections across multiple codes) — summarized in prose instead, with
  an explicit instruction to check that list's current text directly
  rather than rely on the summary.

## Honest gap(s) disclosed

§ 1633.3(c)'s extensive list of additional excluded California
consumer/real-estate/insurance/vehicle statutes is summarized, not
quoted verbatim. §§ 1633.8, 1633.11-1633.17 (delivery/presentation,
notarization, retention of originals, admissibility, automated
transactions, time/place of sending, transferable records, government
agencies) are not covered — flagged as more mechanical/procedural
provisions outside this document's four core research targets. The
federal E-SIGN Act is mentioned only as a contrast point, not
independently researched.

## Method

Fetched Cal. Civ. Code §§ 1633.2, 1633.3, 1633.5, 1633.7, and 1633.9
from `leginfo.legislature.ca.gov`, each fetched twice by the research
agent with two distinct User-Agent strings, confirmed byte-identical
after whitespace normalization. Independently re-verified during
integration review via an eleventh fetch (a distinct curl User-Agent
string, "Groundtruth-EleventhVerify-UETA/1.0") of all five sections —
10 of 13 quotes matched directly; 3 required the established
whitespace-collapse-and-manual-context-inspection technique, which
confirmed a genuine missing-space artifact in the delivered quotes
(not in the source) — fixed and re-verified all 13 quotes clean
against the eleventh fetch.

## Verification

- Statutory sections fetched twice independently by the research agent
  with distinct User-Agent strings, plus an eleventh independent fetch
  during integration review; all 13 quotes confirmed clean after the
  three-quote fix described above.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same
  statutory section; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- No new fields required — all four fields (`preparerName`,
  `transactionDescription`, `dateSigned`, `cityState`) reused from the
  existing corpus (24, 1, 151, and 130 prior documents respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: California Uniform Electronic Transactions Act (UETA)
  — Information Sheet
  (`california_uniform_electronic_transactions_act_info_sheet`), 7
  clauses (5 authority + 2 drafting), in the Confidentiality & IP
  category. No new fields.
- Corpus: 2,805 → 2,812 clauses; 368 → 369 documents. Fourth and final
  addition of wave 80.

**Wave 80 complete**: 2,792 → 2,812 clauses (20 new); 367 → 369
documents (3 new: Fraudulent Inducement to Relocate, Phase-In Overtime
for Agricultural Workers Act, and California UETA — plus one gap-fix,
temporary services employer final-wage timing, added to the existing
Final Paycheck Delivery Method document). Hiring + During Employment +
Confidentiality & IP + Ending Employment, per the established
strict-alternation pattern (wave 79 was 2×2; wave 81 should return to
2×2, most likely Business Formation + Family Law or Real Estate +
Estate Planning, whichever keeps category counts balanced).
