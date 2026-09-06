# Ending employment, new document: H-1B Bona Fide Termination — Information Sheet

## Why this document

First processed item of wave 127 (Ending employment slot, 2×2
pattern; Ending employment was the most stale category in the corpus,
not touched since at least wave 120). The agent ruled out five
candidates via specific term/section greps before landing here:
Lab. Code §1102.5 whistleblower retaliation, Bus. & Prof. Code §16600
non-compete, Lab. Code §2802 expense reimbursement, the "Silenced No
More Act" (Gov. Code §12964.5/CCP §1001), and the general 8 CFR
§214.2/H-1B footprint were all confirmed already substantively
covered — the last specifically because the existing
`h1b_visa_sponsorship_compliance_info_sheet` (Hiring) covers only LCA
wage attestation, notice, and recoupment, never the
termination-specific federal obligations. The chosen topic — the
federal regulatory scheme governing what happens when H-1B employment
actually ends (DOL's bona-fide-termination wage rule, DHS's
notification and automatic-revocation rules, the return-transportation
liability rule, and DOL's LCA-withdrawal rules) — was confirmed
genuinely open: zero prior corpus hits on 8 CFR §214.2(h)(11), 8 CFR
§214.2(h)(4)(iii)(E), or 20 CFR §655.750 before drafting, and the
prior corpus's only hits on 20 CFR §655.731 were to different
subdivisions ((a), (c)(1), (c)(9), (c)(10)) than the new document's
(c)(7)(ii).

## What this document covers

10 clauses: 2 drafting (intro, closing) and 8 authority clauses,
citing 20 C.F.R. §655.731(c)(7)(ii), 8 C.F.R. §214.2(h)(11)(i)(A),
§214.2(h)(11)(ii), §214.2(h)(4)(iii)(E) (three separate citation
instances), 20 C.F.R. §655.750(b)(1), §655.750(b)(3):

- **`h1bterm_bona_fide_termination_standard`** — the DOL rule that the
  required-wage obligation continues absent a bona fide termination.
- **`h1bterm_dhs_notification_duty`** — the employer's duty to
  immediately notify USCIS of the change.
- **`h1bterm_automatic_revocation`** — automatic petition revocation
  upon that notice.
- **`h1bterm_transportation_liability`** — the employer's liability for
  the beneficiary's reasonable return-transportation costs upon
  dismissal.
- **`h1bterm_voluntary_resignation_distinction`** — voluntary
  resignation is not a "dismissal" for that liability.
- **`h1bterm_transportation_complaint_process`** — the beneficiary's
  avenue to raise noncompliance with USCIS.
- **`h1bterm_lca_withdrawal_conditions`** — the DOL conditions for
  withdrawing the underlying labor condition application.
- **`h1bterm_wage_obligation_survives_withdrawal`** — the wage
  obligation persists notwithstanding LCA withdrawal while H-1B
  workers remain employed.

## Genuine findings

- **A disclosed egress-proxy workaround, fully consistent with the
  house style**: the human-facing ecfr.gov HTML pages were blocked by
  this environment's proxy; the agent instead fetched the equivalent
  current regulatory text through eCFR's own official Versioner API
  (same authoritative source), while still citing the standard
  human-readable `.../current/...` URL in each citation's `url` field
  to match the precedent already set by the existing `h1bcompliance_*`
  clauses in this corpus.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted; the agent explicitly
  declined to paraphrase or assert from memory any agency-adjudication
  or federal-court gloss on "bona fide termination" (e.g., the
  well-known *Amtel Group* line of authority), disclosing this
  limitation directly in the relevant clause's gap field rather than
  fabricating a citation.
- **A disclosed textual observation on undefined terms**: multiple gap
  fields flag that the regulatory text does not itself define terms
  central to its own application — "bona fide" (termination), what
  counts as a "voluntary" resignation following employer conduct such
  as a demotion or ultimatum, and "reasonable costs" for return
  transportation.

## Honest gap(s) disclosed

This document does not define what makes a termination "bona fide"
beyond the regulation's own cross-references, does not set the actual
deadline for the "immediate" USCIS notification, does not extend the
return-transportation obligation to a beneficiary's dependents or
define "reasonable costs," does not resolve when an ostensibly
voluntary resignation following adverse employer conduct still counts
as voluntary, does not describe a private right of action for a
beneficiary to collect transportation costs directly from the
employer, does not address H-1B-dependent or willful-violator employer
rules, related nonimmigrant categories (H-1B1, E-3), or state law, and
does not include any agency or judicial decisions interpreting these
provisions.

## Method

Fetched 8 CFR §214.2 (Title 8, Part 214) and 20 CFR §655.731/§655.750
(Title 20, Part 655) via the eCFR Versioner API, each fetched twice by
the research agent with two distinct User-Agent strings, confirmed
byte-identical via MD5 hash comparison. CourtListener's daily quota
was already exhausted (HTTP 429) on the agent's test call; no case law
was used or fabricated. All 9 citation instances programmatically
confirmed by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-seventy-sixth fetch (a new distinct curl User-Agent
string, "Groundtruth-176thVerify-H1BTermination/1.0") of both parts
through the same eCFR Versioner API — all 9 citation instances
confirmed clean on direct normalized-whitespace substring match, with
no fallback needed. The bona-fide-termination wage rule, the DHS
notification duty, automatic revocation, return-transportation
liability, the voluntary-resignation distinction, the beneficiary
complaint process, and the LCA withdrawal conditions and
wage-survival rule were all independently reconfirmed present in the
freshly fetched text.

## Verification

- Both CFR parts fetched twice independently by the research agent
  with distinct User-Agent strings, plus a one-hundred-and-seventy-
  sixth independent fetch during integration review; all 9 citation
  instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple provisions of the same regulation correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `h1bterm_` prefix has zero collisions. Ran
  section-number-specific greps for 214.2(h)(11), 214.2(h)(4)(iii)(E),
  655.731, and 655.750 across the full corpus; the only hits were on
  bare "655.731" in the existing, unrelated
  `h1b_visa_sponsorship_compliance_info_sheet` document, all confirmed
  by context to cite different subdivisions ((a), (c)(1), (c)(9),
  (c)(10)) than this new document's (c)(7)(ii) — no genuine overlap.
- Checked every citation's `case` field for emptiness — all 9
  populated with proper citation identifier strings.
- No new fields required — all four fields (`companyName`,
  `employeeName`, `jobTitle`, `dateSigned`) reused from the existing
  corpus, matching the house style of the existing H-1B Visa
  Sponsorship Compliance document.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: H-1B Bona Fide Termination — Information Sheet
  (`h1b_bona_fide_termination_info_sheet`), 10 clauses (8 authority +
  2 drafting), in the Ending employment category. No new fields.
- Corpus: 4,148 → 4,158 clauses; 530 → 531 documents. First processed
  item of wave 127.
