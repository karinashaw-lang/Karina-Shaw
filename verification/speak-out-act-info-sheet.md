# Confidentiality & IP, new document: Speak Out Act — Information Sheet

## Why this document

Third processed item of wave 104 (Confidentiality & IP slot). A
scoping pass and clause-level duplication check confirmed zero prior
coverage of the Speak Out Act anywhere in the corpus. The agent read
the existing Non-Disparagement Agreement document in full before
drafting to confirm its scope (Code Civ. Proc. § 1001, Gov. Code
§ 12964.5, NLRA §§ 157-158) and avoid duplication.

## What this document covers

8 clauses: 2 drafting (intro, closing/cross-reference) and 6 authority
clauses, citing 42 U.S.C. §§ 19402(1)-(4), 19403(a)-(d), and 19404:

- **`speakoutact_definitions_disputes`** — the statutory definitions of
  "sexual assault dispute" and "sexual harassment dispute."
- **`speakoutact_definitions_clauses`** — the statutory definitions of
  "nondisclosure clause" and "nondisparagement clause."
- **`speakoutact_predispute_only_voided`** — the core rule voiding
  judicial enforcement of a predispute clause relating to such a
  dispute.
- **`speakoutact_postdispute_settlements_not_covered`** — the flip side:
  post-dispute settlement agreements fall outside this federal bar.
- **`speakoutact_carveouts`** — the preserved state-law, pseudonym-
  filing, and trade-secret carve-outs.
- **`speakoutact_applicability_date`** — the December 7, 2022
  claim-filing-date applicability trigger.

## Genuine findings

- **A significant correction to the research brief's own citation**:
  the brief cited "Pub. L. 117-90." The agent fetched the statute's own
  short-title note and found the correct citation is Pub. L. 117-224
  (Dec. 7, 2022, 136 Stat. 2290) — corrected and disclosed explicitly.
- **A confirmed, not merely assumed, scope limitation**: the brief
  assumed only predispute clauses are voided, with post-dispute
  settlements untouched. The agent verified this directly against
  § 19403(a)'s actual text and built a dedicated clause making the
  post-dispute carve-out explicit rather than leaving it implicit.
- **A precise handling of what "judicially enforceable" does and does
  not mean**: the agent's `speakoutact_predispute_only_voided` clause
  explicitly notes the statute bars judicial enforcement specifically —
  it doesn't say the clause is void or illegal for every purpose —
  avoiding an overstatement common in casual summaries of this law.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's first
  lightweight test call; every authority clause proceeds on the
  statute's own text alone, disclosed as especially expected given how
  recent this 2022 statute is.

## Honest gap(s) disclosed

This document does not independently fetch or verify 18 U.S.C. § 2246's
cross-referenced "sexual act"/"sexual contact" definitions. It does not
define "sexual harassment" itself — the statute borrows whatever
definition already exists under the governing law for the dispute at
hand. It does not resolve when a dispute "arises" for timing purposes,
what counts as a claim being "filed" under § 19404, what makes a state
law "at least as protective," or what qualifies as "trade secrets or
proprietary information" — none of these terms are defined in the
statute's text.

## Method

Fetched 42 U.S.C. §§ 19401-19404 from Cornell LII, each section fetched
twice by the research agent with two distinct User-Agent strings,
confirmed byte-identical (MD5-verified). CourtListener's daily rate
limit was already exhausted on the agent's first lightweight test call;
no case law was used, a disclosed and legitimate choice, especially
expected given the statute's recency. All 10 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
one-hundred-and-sixth fetch (a new distinct curl User-Agent string,
"Groundtruth-106thVerify-SpeakOutAct/1.0") of all four sections — all 10
citation instances confirmed clean on direct substring match, and the
Pub. L. 117-224 correction independently reconfirmed against the
statute's own short-title note.

## Verification

- 42 U.S.C. §§ 19401-19404 each fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-sixth independent fetch during integration review;
  all 10 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — the predispute and
  post-dispute clauses correctly disclose they cite the same subsection
  (§ 19403(a)), not independent sources of each other; the three
  carve-out citations correctly disclosed as subsections of the same
  section as those two clauses.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either), and independently reconfirmed this document does
  not restate the existing Non-Disparagement Agreement document's
  content.
- Checked every citation's `case` field for emptiness — all 10
  populated with proper citation identifier strings.
- No new fields required — all three fields (`companyName`,
  `employeeName`, `dateSigned`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Speak Out Act — Information Sheet
  (`speak_out_act_info_sheet`), 8 clauses (6 authority + 2 drafting), in
  the Confidentiality & IP category. No new fields.
- Corpus: 3,473 → 3,481 clauses; 460 → 461 documents. Third processed
  item of wave 104.
