# Confidentiality & IP, new document: Trade Secret Pre-Discovery Identification — Information Sheet

## Why this document

Third processed item of wave 106 (Confidentiality & IP slot). Extensive
scoping across CUTSA itself, state trademark registration, the
California Art Preservation Act's moral rights, VARA, postmortem right
of publicity, NIL for college athletes, cybersquatting/ACPA, the
Economic Espionage Act, the idea-submission doctrine, the Labor Code
§ 2870 invention-assignment carve-out, and CUTSA preemption all turned
up existing coverage in this unusually deep corpus. The agent widened
its search to civil-procedure-adjacent trade-secret topics and
confirmed zero prior coverage of Code of Civil Procedure § 2019.210's
pre-discovery identification requirement via both document-level and
clause-level checks — genuinely distinct from the existing Trade Secret
Misappropriation Cease and Desist Letter, Trade Secret Preemption
Doctrine, Criminal Trade Secret Theft, Economic Espionage Act, and
DTSA-focused NDA documents, none of which address discovery
sequencing in a filed civil action.

## What this document covers

8 clauses: 2 drafting (intro, closing signature) and 6 authority
clauses, citing Code Civ. Proc. § 2019.210 (multiple passages, including
its chapter heading) and Civ. Code § 3426.5:

- **`ts2019210_applies_to_cutsa_actions`** — the statute's scope: it
  applies to actions alleging misappropriation under CUTSA.
- **`ts2019210_identification_before_discovery`** — the core sequencing
  rule requiring identification with reasonable particularity before
  discovery.
- **`ts2019210_reasonable_particularity_undefined`** — the statute's
  text supplies no definition of "reasonable particularity."
- **`ts2019210_no_consequence_specified`** — the statute's text states
  no sanction or consequence for noncompliance.
- **`ts2019210_protective_order_secrecy_preservation`** — the companion
  secrecy-preservation measures available under Civ. Code § 3426.5.
- **`ts2019210_relationship_to_other_trade_secret_authorities`** — the
  statute's placement within the Civil Discovery Act, distinct from the
  substantive UTSA provisions it cross-references.

## Genuine findings

- **A disclosed limitation on federal-court applicability**: the agent
  found the statute's text does not itself state whether it applies of
  its own force to a DTSA-only action in federal court — a genuine
  scope question left unresolved by the statutory text and disclosed
  rather than assumed either way.
- **Two disclosed gaps on undefined operative terms**: the agent found
  "reasonable particularity" is the statute's operative standard but is
  nowhere defined in its text, and that the statute states no
  consequence for noncompliance (no sanction, dismissal, or
  evidence-exclusion rule written into the section) — both genuine
  textual gaps stated as such rather than filled in by inference or
  unverified case law.
- **A disclosed, deliberate choice not to cite unverified case law**:
  a CourtListener search returned HTTP 429 (quota exhausted); every
  authority clause proceeds on the statute's own text alone, disclosed
  explicitly in the two clauses most affected by the missing case-law
  gloss (reasonable particularity, consequence for noncompliance).

## Honest gap(s) disclosed

This document does not state the form the identification must take, a
numerical deadline, or which discovery methods count as "discovery
relating to the trade secret." It does not describe how California
courts have construed "reasonable particularity" or what procedural
consequences courts have imposed for noncompliance, since no case law
is cited here. It does not specify a procedure, motion, or timeline for
requesting § 3426.5 secrecy-preservation measures in connection with
the identification step specifically, and it does not evaluate whether
any specific description of a trade secret meets the reasonable-
particularity standard in a given case.

## Method

Fetched Code Civ. Proc. § 2019.210 and Civ. Code § 3426.5 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings (one pass-2 attempt hit a
transient TLS error and was retried successfully), confirmed
byte-identical after extraction and normalization. CourtListener's
daily rate limit was already exhausted on the agent's test call; no
case law was used, a disclosed and legitimate choice. All 6 citation
instances programmatically confirmed by the research agent as exact,
contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-fourteenth fetch (a new distinct curl User-Agent
string, "Groundtruth-114thVerify-TS2019210/1.0") of both sections — all
6 citation instances confirmed clean on direct normalized-whitespace
substring match, including the chapter-heading citation, no extraction
artifacts encountered. A personal spot-check searched the corpus for
"2019.210," "3426.5," and "reasonable particularity" and confirmed zero
prior coverage.

## Verification

- Both sections fetched twice independently by the research agent with
  distinct User-Agent strings, plus a one-hundred-and-fourteenth
  independent fetch during integration review; all 6 citation instances
  confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  overlapping or repeated passages from the same section (e.g. the
  identification and no-consequence clauses both draw from § 2019.210)
  correctly disclose they are not independent sources of each other;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); two
  drafting-clause titles ("Purpose of This Information Sheet,"
  "Signature and Acknowledgment") collide with generic boilerplate
  titles already reused by dozens of other drafting clauses across the
  corpus — confirmed as intentional generic-title reuse, not a content
  duplicate. Independently reconfirmed this document is distinct from
  the corpus's five other existing trade-secret documents.
- Checked every citation's `case` field for emptiness — all 6
  populated with proper citation identifier strings.
- No new fields required — all eight fields (`preparerName`,
  `companyName`, `adversePartyName`, `tradeSecretDescription`,
  `courtCaseNumber`, `courtName`, `dateSigned`, `cityState`) reused
  from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Trade Secret Pre-Discovery Identification —
  Information Sheet
  (`trade_secret_pre_discovery_identification_info_sheet`), 8 clauses
  (6 authority + 2 drafting), in the Confidentiality & IP category. No
  new fields.
- Corpus: 3,541 → 3,549 clauses; 468 → 469 documents. Third processed
  item of wave 106.
