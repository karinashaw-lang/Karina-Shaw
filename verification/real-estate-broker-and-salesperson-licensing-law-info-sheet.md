# Real Estate, new document: Real Estate Broker and Salesperson Licensing Law — Information Sheet

## Why this document

Fourth and final processed item of wave 105 (Real Estate slot). A
scoping pass and clause-level duplication check confirmed zero prior
coverage of the licensing requirement itself anywhere in the corpus.
The agent read the existing Real Estate Agency Relationship Disclosure
document in full before drafting to confirm its scope (post-licensure
fiduciary duties within a transaction) and distinguish it from this
document's threshold licensing question.

## What this document covers

9 clauses: 2 drafting (intro, acknowledgment) and 7 authority clauses,
citing Bus. & Prof. Code §§ 10130, 10131, 10015, 10016, 10137,
10159.2(a), 10133, 10136, and 10139:

- **`relicense_licensing_requirement`** — the basic prohibition on
  acting as a broker, salesperson, or mortgage loan originator without
  a license.
- **`relicense_broker_definition`** — the statutory definition of acts
  requiring a broker's license.
- **`relicense_broker_salesperson_distinction`** — the broker/
  salesperson license distinction, with a salesperson's license
  operating through a retaining broker.
- **`relicense_supervision_and_compensation_flow`** — the rule that
  salesperson compensation must flow through the employing broker, and
  the corporate broker's supervision duty.
- **`relicense_exemptions`** — the statutory exemptions from the
  license requirement.
- **`relicense_unlicensed_compensation_bar`** — the bar on suing to
  collect compensation without alleging and proving licensure.
- **`relicense_criminal_penalties`** — the criminal penalty for
  unlicensed activity.

## Genuine findings

- **A significant correction to the research brief's classic-definition
  assumption**: the brief expected the salesperson definition at
  § 10132. The agent found § 10132 is now repealed/empty, and that the
  current statutory definition of "real estate salesperson" (a person
  "retained by a real estate broker") lives at § 10016, with "real
  estate broker" defined separately at § 10015 — used instead of the
  brief's outdated pointer.
- **A confirmed brief guess**: the brief's tentative placement of the
  unlicensed-compensation bar "around § 10136" was independently
  verified correct against the statute's actual text.
- **Correctly identified operative provisions the brief did not name**:
  the agent located § 10137 (compensation must flow through the
  employing broker) and § 10159.2 (corporate broker's supervision duty)
  as the specific rules governing the broker/salesperson relationship,
  and added § 10139 (criminal penalty) and § 10133 (exemptions) for
  fuller coverage beyond the brief's narrower scope.
- **A disclosed, deliberate choice not to cite unverified case law**:
  a CourtListener search returned HTTP 429 (quota exhausted); every
  authority clause proceeds on the statute's own text alone, disclosed
  explicitly in the compensation-bar clause's gap field.

## Genuine extraction-artifact finding (integration review)

Independent re-verification found 2 of 9 citation instances (§ 10131
and § 10133) failed a normalized-whitespace match. Manual inspection
traced both to a spurious inserted space immediately before a
subdivision marker — e.g., the delivered quote reads "...for another or
others: (a) Sells..." while the raw leginfo HTML has "...for another or
others:(a)\xa0Sells..." with no space before "(a)" at all. This is the
same general class of markup-stripping whitespace artifact documented
repeatedly elsewhere in this corpus (spurious spaces at HTML element
boundaries), here manifesting around a parenthesized subdivision label
rather than before a comma or period. Both instances confirmed clean
after normalizing spacing around subdivision markers — no content
correction needed.

## Honest gap(s) disclosed

This document does not restate §§ 10131.01–10131.7's extensions of the
broker definition to advance-fee listings, securities transactions, or
mineral/oil/gas property; § 10133.1's separate, more detailed exemption
scheme for loan-related and lender-affiliated activity; or how courts
have applied the unlicensed-compensation bar to particular fact
patterns (e.g., substantial-compliance arguments), since no case law is
cited here. It does not determine whether any particular activity
requires a license, whether any exemption applies to any particular
person's conduct, or whether any particular broker or salesperson holds
a current, valid license.

## Method

Fetched Bus. & Prof. Code §§ 10130, 10131, 10131.1–10139 (as relevant),
10015, 10016, 10133, and 10159.2 from leginfo.legislature.ca.gov, each
of the 9 sections actually cited fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
normalization. CourtListener's daily rate limit was already exhausted
on the agent's test call; no case law was used, a disclosed and
legitimate choice. All 9 citation instances programmatically confirmed
by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-eleventh fetch (a new distinct curl User-Agent string,
"Groundtruth-111thVerify-RELicense/1.0") of all 9 sections — 7 of 9
citation instances confirmed clean on direct normalized-whitespace
match; the remaining 2 matched only after normalizing spacing around
subdivision markers, confirmed as a genuine benign extraction artifact
via direct byte-level inspection of each. Both structural findings (the
§ 10016 salesperson-definition correction and the confirmed § 10136
compensation-bar location) were independently reconfirmed present in
the freshly fetched text.

## Verification

- All 9 Business & Professions Code sections fetched twice
  independently by the research agent with distinct User-Agent strings,
  plus a one-hundred-and-eleventh independent fetch during integration
  review; all 9 citation instances confirmed clean, two after
  accounting for a confirmed genuine artifact.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each authority clause
  cites a single distinct statutory section (no clause combines
  subdivisions of the same section as if from independent sources);
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); two
  drafting-clause titles ("About This Information Sheet,"
  "Acknowledgment") collide with generic boilerplate titles already
  reused by 27 and 92 other drafting clauses respectively across the
  corpus — confirmed as intentional generic-title reuse, not a content
  duplicate. Independently reconfirmed this document's substance is
  distinct from the existing Real Estate Agency Relationship Disclosure
  document.
- Checked every citation's `case` field for emptiness — all 9
  populated with proper citation identifier strings.
- Two new fields required (`brokerName`, `salespersonName`), confirmed
  genuinely new via a corpus-wide field-id lookup; `dateSigned` and
  `cityState` confirmed already existing and reused.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Real Estate Broker and Salesperson Licensing Law —
  Information Sheet
  (`real_estate_broker_salesperson_licensing_info_sheet`), 9 clauses (7
  authority + 2 drafting), in the Real Estate category. Two new fields
  (`brokerName`, `salespersonName`).
- Corpus: 3,516 → 3,525 clauses; 465 → 466 documents. Fourth and final
  processed item of wave 105.

## Wave 105 summary

Wave 105 followed the established 2×2 pattern, targeting Business
Formation and Real Estate. This wave's scoping pass caught a genuine
overlap before any research agent was launched: the initially scoped
"FTB Suspension & Revivor" topic substantially overlapped an existing
clause (`soi_suspension_consequence`), so it was swapped out for two
confirmed-clean backups (Self-Dealing and UVTA) with zero wasted agent
work. All four completed documents were built with CourtListener's
daily quota exhausted throughout. Each surfaced genuine findings
through close primary-source reading: a corrected structural assumption
about a nonprofit self-dealing statute's mechanism (Self-Dealing), two
separate corrections splitting single-provision assumptions into their
actual multi-provision statutory structure (UVTA's constructive-fraud
test and limitations period), a corrected statutory anchor that
redirected the entire document to the right chapter (Manufactured Home
Title Transfer's § 18035 → § 18075 correction), and a corrected,
now-repealed classic citation replaced with the actual current
definition section (RE Broker Licensing's § 10132 → § 10016
correction). This wave also encountered, for the first time, both a
leginfo-specific line-wrap newline artifact (UVTA) and a
leginfo-specific spurious-space-before-subdivision-marker artifact (RE
Broker Licensing), distinct from but structurally analogous to the
previously documented Cornell LII space-before-punctuation pattern.
Per the established alternation, wave 106 should return to a 1×4
pattern.
