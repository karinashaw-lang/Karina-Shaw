# Confidentiality & IP, new document: Trade Secret Injunctive Relief Standards — Information Sheet

## Why this document

First processed item of wave 114 (Confidentiality & IP slot, 1×4
pattern). DTSA whistleblower immunity (§1833(b)), §2870 (already its own
"Employee Invention Assignment" info sheet), federal trademark dilution
(§1125(c), folded into the trademark cease-and-desist doc), and CUTSA
damages/attorney's-fees (§§3426.3-3426.4, already covered together in
the existing Trade Secret Misappropriation Cease and Desist Letter's
remedies clauses) were all confirmed already covered via document- and
clause-level checks. The agent confirmed Civ. Code § 3426.2 — CUTSA's
dedicated injunctive-relief provision — had zero prior coverage, and
noted that the existing DTSA remedies clause (`tsmisap_dtsa_remedies`)
explicitly abridges the injunction detail of 18 U.S.C. § 1836(b)(3)(A)
with an ellipsis, leaving it genuinely unaddressed. Personally
reconfirmed via corpus search: the three existing hits for "3426.2" or
"injunction"+"trade secret" (`tsmisap_dtsa_remedies`, `tsmisap_ca_remedies`,
`econespionage_relationship_to_state_and_civil_law`) cite different
subsections or ellipsis-abridge the injunction detail, none duplicating
this document's substantive coverage.

## What this document covers

9 clauses: 2 drafting (intro, signature/acknowledgment) and 7 authority
clauses, citing Civ. Code §§ 3426.2(a), 3426.2(b), 3426.2(c), and 18
U.S.C. §§ 1836(b)(3)(A)(i), 1836(b)(3)(A)(i)(I)-(II), 1836(b)(3)(A)(ii),
1836(b)(3)(A)(iii):

- **`tsinjunct_ca_enjoin_and_termination`** — CUTSA's rule enjoining
  actual or threatened misappropriation and the termination/continuation
  rule once the trade secret ceases to exist.
- **`tsinjunct_ca_royalty_in_lieu`** — CUTSA's royalty-in-lieu-of-
  injunction mechanism, triggered by an "unreasonable to prohibit"
  finding.
- **`tsinjunct_ca_affirmative_acts`** — CUTSA's authorization for
  court-compelled affirmative acts to protect a trade secret.
- **`tsinjunct_dtsa_enjoin_standard`** — the DTSA's parallel
  enjoin-actual-or-threatened-misappropriation standard.
- **`tsinjunct_dtsa_employment_and_state_law_limits`** — the DTSA's two
  express limits (no employment-relationship bar absent evidence of
  threatened misappropriation; no conflict with state anti-restraint
  law) that CUTSA's text does not separately state.
- **`tsinjunct_dtsa_affirmative_acts`** — the DTSA's parallel
  affirmative-acts authorization.
- **`tsinjunct_dtsa_royalty_in_lieu`** — the DTSA's royalty-in-lieu
  mechanism, triggered by "exceptional circumstances" rendering an
  injunction "inequitable" — different trigger language from CUTSA's
  "unreasonable" standard, flagged as an unresolved textual difference.

## Genuine findings

- **A significant correction to the agent's own initial assumption**:
  the agent initially expected the DTSA's injunction provision to
  closely mirror California's. Reading the full text showed DTSA
  §1836(b)(3)(A) contains two express carve-outs entirely absent from
  CUTSA's text — an employment-mobility protection and a state-law
  non-conflict rule — built into a dedicated clause rather than treated
  as equivalent to the California standard.
- **A disclosed, unresolved textual comparison**: the agent noted CUTSA's
  royalty-in-lieu trigger ("unreasonable to prohibit future use") uses
  different language from the DTSA's ("exceptional circumstances" that
  render an injunction "inequitable"), and explicitly declined to assert
  the two standards are functionally identical.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not state the procedural standard (e.g., likelihood
of success, irreparable harm) a plaintiff must meet to obtain a
preliminary injunction under either statute, does not define "reasonable
royalty" or a calculation method, does not elaborate what circumstances
are "appropriate" for a compelled affirmative act, does not identify
which California statutes qualify as "applicable State law prohibiting
restraints" for DTSA purposes, and does not resolve whether CUTSA's
"unreasonable" trigger and the DTSA's "exceptional circumstances"/
"inequitable" trigger function differently in practice.

## Method

Fetched Civ. Code § 3426.2 from leginfo.legislature.ca.gov and 18 U.S.C.
§ 1836 from Cornell LII, each fetched twice by the research agent with
two distinct User-Agent strings, confirmed byte-identical (MD5 match for
the federal source; byte-identical statute-text block for the state
source). CourtListener's daily rate limit was already exhausted on the
agent's test call; no case law was used, a disclosed and legitimate
choice. All 7 citation instances programmatically confirmed by the
research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-thirty-sixth fetch (a new distinct curl User-Agent
string, "Groundtruth-136thVerify-TradeSecretInjunct/1.0") of both
sources — all 7 citation instances confirmed clean on direct
normalized-whitespace substring match, no extraction artifacts
encountered. The DTSA's two express employment/state-law limits and the
CUTSA/DTSA royalty-trigger wording difference were both independently
reconfirmed present in the freshly fetched text. A personal spot-check
confirmed the existing `tsmisap_dtsa_remedies` clause ellipsis-abridges
exactly the injunction detail this document now covers in full, and
`tsmisap_ca_remedies` cites the separate damages/fees provisions
(§§3426.3-3426.4), not §3426.2 — confirming no substantive overlap.

## Verification

- Both primary sources fetched twice independently by the research
  agent with distinct User-Agent strings, plus a one-hundred-and-
  thirty-sixth independent fetch during integration review; all 7
  citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — the three Civ. Code
  §3426.2 subdivision citations and the four 18 U.S.C. §1836(b)(3)(A)
  subclause citations each correctly disclose they are not independent
  sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). The
  signature-block drafting clause's "declare under penalty of perjury"
  framing was checked against the corpus's existing, directly-analogous
  `cutsapreempt_signature_and_acknowledgment` clause (from the Trade
  Secret Preemption Doctrine info sheet) and confirmed to match an
  established, intentional convention for this sub-family of documents,
  not a deviation. Independently reconfirmed this document does not
  duplicate the existing Trade Secret Misappropriation Cease and Desist
  Letter's remedies clauses (see Method above).
- Checked every citation's `case` field for emptiness — all 7 populated
  with proper citation identifier strings.
- No new fields required — all six fields (`preparerName`, `companyName`,
  `tradeSecretDescription`, `adversePartyName`, `dateSigned`, `cityState`)
  reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Trade Secret Injunctive Relief Standards — Information
  Sheet (`trade_secret_injunctive_relief_standards_info_sheet`), 9
  clauses (7 authority + 2 drafting), in the Confidentiality & IP
  category. No new fields.
- Corpus: 3,740 → 3,749 clauses; 490 → 491 documents. First processed
  item of wave 114.
