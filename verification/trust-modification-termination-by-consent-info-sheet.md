# Estate Planning, new document: Trust Modification and Termination by Consent — Information Sheet

## Why this document

First processed item of wave 111 (Estate Planning slot, 2×2 pattern).
TOD deeds, omitted spouse/child protections, spousal property
petitions, charitable remainder trusts, special needs trusts, the
Uniform Prudent Investor Act, small estate affidavits, the slayer
statute, and no-contest clauses were all confirmed already covered.
The spousal property petition looked promising at first but was
already an 8-clause dedicated document. The agent confirmed zero prior
coverage of Prob. Code §§ 15403-15404's consent-based trust
modification/termination mechanisms via both document-level and
clause-level checks — the only tangential hit (`trustamend_vs_restatement`)
concerns amendment-vs-restatement drafting convention, not this
statutory mechanism.

## What this document covers

10 clauses: 3 drafting (intro, corpus-distinguishing note, signature
block) and 7 authority clauses, citing Prob. Code §§ 15403(a), (b), (c),
15404(a), (b), 15408(a), (b), 15409(a), and 15410(c):

- **`trustmodconsent_two_consent_routes`** — the two distinct consent-
  based routes: all-beneficiaries court petition versus settlor-and-
  beneficiaries written consent without court approval.
- **`trustmodconsent_material_purpose_limit`** — the material-purpose
  and spendthrift-restraint limitations on the court-petition route.
- **`trustmodconsent_settlor_participation_required`** — the
  without-court route's requirement of the settlor's own consent, not
  just the beneficiaries'.
- **`trustmodconsent_heirs_next_of_kin_class`** — the court's power to
  narrow the consenting class when remainder beneficiaries are
  described only as "heirs" or "next of kin."
- **`trustmodconsent_unanticipated_circumstances`** — the separate,
  consent-independent basis for court modification when unanticipated
  circumstances defeat the trust's purposes.
- **`trustmodconsent_small_or_uneconomical_trust`** — court termination
  for a trust too small relative to administration costs, plus a
  trustee's own $100,000-threshold self-termination power.
- **`trustmodconsent_disposition_on_termination`** — how trust property
  is distributed when a trust is terminated by consent specifically.

## Genuine findings

- **A significant correction to the agent's own initial expectation**:
  the agent initially expected beneficiaries alone might be able to use
  the without-court route. Reading § 15404(a) directly showed the
  settlor's own written consent is required, not merely all
  beneficiaries' — meaning that route is unavailable once a settlor has
  died or lost capacity, the common real-world scenario for an
  irrevocable trust. This distinction is stated as its own dedicated
  clause rather than assumed away.
- **A confirmed current dollar threshold**: the agent verified § 15408(b)'s
  trustee self-termination threshold is $100,000, reflecting a 2024
  amendment effective January 1, 2025 — disclosed as a snapshot subject
  to further amendment rather than treated as a permanently fixed
  figure.
- **A correctly identified shared provision**: the agent found §§ 15403(c)
  and 15404(c) contain identical "heirs/next of kin" class-narrowing
  language, a genuinely separate provision built into its own dedicated
  clause once found in the full text.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on the statute's own text alone, with
  the material-purpose clause explicitly noting that phrase has been
  the subject of substantial published California case law this
  document does not reach.

## Honest gap(s) disclosed

This document does not determine whether any specific trust is in fact
irrevocable, whether a specific group constitutes all of a trust's
beneficiaries, whether a specific settlor is alive and competent to
consent, what constitutes a "material purpose" or "good cause" in a
specific case, which persons a court would find "reasonably likely to
take" under the heirs/next-of-kin narrowing power, whether specific
unanticipated circumstances defeat a trust's purposes, or what
distribution terms specific parties actually agreed to on termination.
It does not track future amendments to the $100,000 threshold.

## Method

Fetched Prob. Code §§ 15403, 15404, 15408, 15409, and 15410 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical via the
extracted statute-text div. CourtListener's daily rate limit was
already exhausted on the agent's test call; no case law was used, a
disclosed and legitimate choice. All 11 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
one-hundred-and-twenty-eighth fetch (a new distinct curl User-Agent
string, "Groundtruth-128thVerify-TrustModConsent/1.0") of all 5
sections — all 11 citation instances confirmed clean on direct
normalized-whitespace substring match, no extraction artifacts
encountered. The settlor-consent requirement and the $100,000 threshold
were both independently reconfirmed present in the freshly fetched
text.

## Verification

- All 5 Probate Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-twenty-eighth independent fetch during integration
  review; all 11 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section, or two sections with
  identical language (§§ 15403(c)/15404(c)), correctly disclose the
  relationship; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either). Independently reconfirmed this document is
  distinct from the existing Trust Amendment and Trust Decanting
  documents, as a dedicated clause explicitly distinguishes.
- Checked every citation's `case` field for emptiness — all 11
  populated with proper citation identifier strings.
- No new fields required — all seven fields (`settlorName`,
  `trustName`, `originalTrustDate`, `trusteeName`, `beneficiaryName`,
  `dateSigned`, `cityState`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Trust Modification and Termination by Consent —
  Information Sheet
  (`trust_modification_termination_beneficiary_consent_info_sheet`),
  10 clauses (7 authority + 3 drafting), in the Estate Planning
  category. No new fields.
- Corpus: 3,665 → 3,675 clauses; 482 → 483 documents. First processed
  item of wave 111.
