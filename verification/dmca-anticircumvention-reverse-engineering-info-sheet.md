# Confidentiality & IP, new document: DMCA Anti-Circumvention and Reverse-Engineering Exemptions — Information Sheet

## Why this document

Fourth and final processed item of wave 99 (Confidentiality & IP slot,
second of the 2×2 pattern). A scoping pass confirmed zero prior coverage
of 17 U.S.C. § 1201 anywhere in the corpus — distinct from the existing
DMCA Takedown Notice and DMCA Counter-Notification documents (which
cover § 512's notice-and-takedown safe harbor, an entirely separate
DMCA provision) and from the existing trade secret documents (which
address state/federal trade-secret "improper means," a different body
of law).

## What this document covers

7 clauses: 2 drafting (intro, acknowledgment) and 5 authority clauses,
citing 17 U.S.C. §§ 1201(a)(1)(A), 1201(a)(3)(A)-(B), 1201(f)(1), (4),
1201(g)(2), (2)(C), 1203(a), and Cal. Civ. Code § 3426.1(a):

- **`dmca1201_general_prohibition`** — the core access-control
  prohibition, distinguished from the separate trafficking prohibitions
  in (a)(2) and (b), plus the § 1203 civil remedy.
- **`dmca1201_circumvention_defined`** — the statute's own definitions of
  "circumvent" and "effectively controls access."
- **`dmca1201_interoperability_exemption`** — the § 1201(f)
  reverse-engineering exemption's four interlocking, conditional
  paragraphs, framed explicitly as conditional rather than automatic.
- **`dmca1201_encryption_research_exemption`** — the § 1201(g)
  encryption-research exemption's own conditions and relevant factors.
- **`dmca1201_distinction_from_trade_secret_reverse_engineering`** — an
  explicit analytical distinction between DMCA circumvention and
  California trade-secret law's more permissive treatment of reverse
  engineering, citing Civil Code § 3426.1(a).

## Genuine findings

- **A more complete statutory analysis than the research brief's own
  summary**: the brief described § 1201(f) as essentially one
  exemption; the agent found and verified it is actually four
  interlocking paragraphs ((f)(1)-(4)), each independently conditioned,
  and represented that structure accurately rather than compressing it
  into an oversimplified "reverse engineering is exempt" statement.
- **A disclosed, deliberate choice not to cite unverified case law**: a
  lightweight CourtListener search call made before other research
  returned a 429 (daily quota already exhausted by earlier session
  research). Rather than describe emulator/chip or other § 1201(f) case
  law from memory, the agent disclosed the gap explicitly and left the
  document statute-only for that point.
- **A correctly maintained cross-document boundary in two directions**:
  the agent confirmed the existing DMCA takedown/counter-notification
  documents cover only § 512 (no § 1201 content), and confirmed the
  existing trade-secret document covers the federal DTSA's parallel
  "improper means" definition (18 U.S.C. § 1839(6)) rather than
  California's CUTSA text used here — avoiding duplication both with the
  DMCA documents and the trade-secret document.
- **A genuine extraction-artifact finding (integration review)**:
  independent re-verification found 2 of 10 quotes mismatched on a
  strict check, both passing after normalizing space adjacent to
  quotation marks. Manual inspection confirmed the established Cornell
  LII markup-stripping whitespace artifact — spurious spaces inserted
  around a stripped inline defined-term marker (e.g., `to " circumvent a
  technological measure " means` vs. the natural `to "circumvent a
  technological measure" means`) — the same pattern already documented
  multiple times this window (e.g., the Physical Ability Testing
  document's § 12112(b)(6) quote). Confirmed as a genuine, already-
  documented source-side rendering artifact — no correction needed.

## Honest gap(s) disclosed

This document does not restate § 1201(a)(1)(B)-(E)'s periodic rulemaking
exception, § 1201(d), (e), (i), or (j)'s other exemptions, or § 1204's
separate criminal penalties. It does not state any case law applying
§ 1201(f) or the "effectively controls access" definition to specific
technologies (e.g., video game console/emulator or authentication-chip
disputes) — that entire body of case law is disclosed as unverified this
session due to CourtListener quota exhaustion. It does not resolve
whether any specific act of reverse engineering or encryption research
satisfies the § 1201(f) or (g) exemption's fact-specific conditions, or
whether it would separately constitute or avoid trade-secret
misappropriation.

## Method

Fetched 17 U.S.C. § 1201 and § 1203 from Cornell LII, and Cal. Civ. Code
§ 3426.1 from `leginfo.legislature.ca.gov`, each fetched twice by the
research agent with two distinct User-Agent strings, confirmed
byte-identical after whitespace normalization (the leginfo fetch's raw
bytes differed only in a per-request JSF ViewState token). CourtListener's
daily rate limit was already exhausted on the agent's first lightweight
test call; no case law was used, a disclosed and legitimate choice. All
10 citation instances programmatically confirmed by the research agent
as exact, contiguous substrings.

Independently re-verified during integration review via an
eighty-seventh fetch (a new distinct curl User-Agent string,
"Groundtruth-87thVerify-DMCA1201/1.0") of all three sources — 8 of 10
citation instances confirmed clean on direct substring match; the other
2 (both from 17 U.S.C. § 1201, the "circumvent" definition and the
"interoperability" definition) matched only after normalizing space
adjacent to quotation marks, confirmed as the established Cornell LII
whitespace artifact via manual context inspection.

## Verification

- 17 U.S.C. §§ 1201 and 1203, and Cal. Civ. Code § 3426.1, each fetched
  twice independently by the research agent with distinct User-Agent
  strings, plus an eighty-seventh independent fetch during integration
  review; all 10 citation instances confirmed clean, two after
  accounting for a confirmed genuine artifact.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — the general-prohibition
  and trade-secret-distinction clauses correctly disclose that both cite
  the same § 1201(a)(1)(A) text, not independent sources of each other;
  correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 10 populated
  with proper citation identifier strings.
- No new fields required — all four fields (`companyName`,
  `softwareDescription`, `preparerName`, `dateSigned`) reused from the
  existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: DMCA Anti-Circumvention and Reverse-Engineering
  Exemptions — Information Sheet
  (`dmca_anticircumvention_reverse_engineering_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Confidentiality & IP category. No new
  fields.
- Corpus: 3,326 → 3,333 clauses; 441 → 442 documents. Fourth and final
  processed item of wave 99.

## Wave 99 summary

Wave 99 followed the established 2×2 pattern, concentrating on the
corpus's then-lowest-count categories: During employment (Tip Pooling
and Gratuities Ownership; On-Call and Standby Time Compensability) and
Confidentiality & IP (Electronic Vehicle Tracking Device Privacy; DMCA
Anti-Circumvention and Reverse-Engineering Exemptions). All four
documents were completed as statute/regulation-only treatments after
each research agent's own lightweight CourtListener test call confirmed
the daily 125-request quota (first discovered in wave 98) remained
exhausted throughout this wave, consistent with the operational
adaptation built into wave 99's research-agent instructions: check
quota early, and disclose rather than wait out a multi-hour reset. Each
document nonetheless surfaced genuine, substantive findings through
close reading of the primary statutory text alone — a corrected
citation location (tip pooling's credit-card timing rule), a corrected
statutory framing (vehicle tracking's business exception), a more
complete statutory structure than assumed (DMCA's four-part § 1201(f)),
and a properly scoped distinction from an existing corpus document
(on-call time versus reporting-time pay) — continuing this corpus's
practice of extracting genuine value from primary-source verification
even when case-law research is unavailable. Per the established
alternation, wave 100 should return to a 1×4 pattern.
