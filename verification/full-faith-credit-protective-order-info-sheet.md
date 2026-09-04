# Family Law, new document: Full Faith and Credit for Out-of-State Protective Orders — Information Sheet

## Why this document

Confirmed by grep that "full faith and credit" had zero hits, and
that all existing "6403"/"6404" corpus hits are unrelated Probate
Code, Corp. Code, and Labor Code sections, not Family Code §§ 6403-6404.
Read the Domestic Violence Restraining Order and UIFSA documents in
full — confirmed neither addresses out-of-state protective-order
recognition (DVRO covers obtaining a California order; UIFSA covers
support orders, a different subject matter). Confirmed non-duplicative.
Third of wave 77's four documents.

## What this document covers

7 clauses: 2 drafting (identification, acknowledgment/signature) and 5
authority clauses, citing 18 U.S.C. § 2265(a), (b), (d)(2), and Cal.
Fam. Code §§ 6401(5), 6402(a), (d), 6403(a), (c), (d), and 6404(a)-(b):

- **`ffcpo_core_rule`** (18 U.S.C. § 2265(a), Fam. Code §§ 6402(a),
  6401(5)) — the core full-faith-and-credit mandate at both the
  federal and state level, and California's own "protection order"
  definition — with an honest disclosure that the federal statute's
  scope is facially broader than California's implementing definition,
  not reconciled.
- **`ffcpo_validity_conditions`** (18 U.S.C. § 2265(b), Fam. Code
  § 6402(d)) — full faith and credit is conditional, not automatic:
  the issuing court needed jurisdiction, and the respondent needed
  reasonable notice and an opportunity to be heard.
- **`ffcpo_no_registration_required`** — **the central finding**:
  neither federal nor California law makes registration in California
  a precondition to enforcement — verified from both statutes
  independently, flagged as likely the single most commonly
  misunderstood point in this area.
- **`ffcpo_law_enforcement_duty`** (Fam. Code § 6403(a), (c)) — the
  probable-cause standard for a peace officer's field enforcement
  (facial presentation of the order is itself probable cause; no
  certified copy required), and the notice-and-opportunity-to-comply
  procedure when the respondent hasn't yet been served.
- **`ffcpo_optional_registration`** (Fam. Code § 6404(a)-(b)) — a
  genuinely optional, protected-person-initiated registration
  mechanism, explicitly distinguished from the mandatory-enforcement
  rule so it isn't mistaken for a registration requirement.

## Genuine corrections and findings

- **The central finding**: confirmed from both the federal statute
  (18 U.S.C. § 2265(d)(2)) and California's own implementing statute
  (Fam. Code § 6403(d)) that registration is NOT a precondition to
  enforcement — correcting the common assumption that an out-of-state
  order must first be registered in California.
- Confirmed full faith and credit is conditional on jurisdiction and
  notice/opportunity to be heard — not presented as an unconditional
  recognition rule.
- Honestly disclosed an unreconciled scope difference between the
  federal statute (broader on its face) and California's own
  "protection order" definition (limited to domestic violence, family
  violence, or antistalking laws) rather than glossing over the
  discrepancy.
- Confirmed facial presentation of an order is itself sufficient
  probable cause for a California officer to enforce it — no
  certified copy required, and an electronically-stored order
  qualifies if retrievable in perceivable form.
- Corrected an initial extraction artifact during drafting (spurious
  spaces inserted before punctuation by a naive HTML-tag-stripping
  regex) before finalizing any quotes — disclosed by the research
  agent itself.

## Honest gap disclosed

Fam. Code § 6403(b) (other-information probable cause) and § 6405
(peace officer civil immunity for a good-faith arrest) are not
restated. The Judicial Council rules of court implementing the
optional registration mechanism are not described beyond what the
statute itself states.

## Method

Fetched Cal. Fam. Code §§ 6400-6409 from `leginfo.legislature.ca.gov`
and 18 U.S.C. § 2265 from Cornell LII, each fetched twice with
distinct User-Agent strings, confirmed byte-identical after whitespace
normalization (11 fetch pairs total). All 10 citation quotes across
the 5 authority clauses programmatically confirmed as exact contiguous
substrings (no ellipsis-joined quotes). Independently re-verified
during integration review via a third fetch (Safari/macOS User-Agent)
of the federal statute and all four cited Family Code sections — all
10 quotes confirmed clean.

## Verification

- Federal and state statutory sections fetched twice independently by
  the research agent with distinct User-Agent strings, plus a third
  independent fetch during integration review; all quotes confirmed
  clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — the two § 6403(a)/(c)
  citations correctly disclosed as not independent of one another;
  every federal-vs-state citation pairing (18 U.S.C. § 2265 vs. Fam.
  Code) correctly disclosed as independent, separately-enacted
  sources; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- One new field required (`protectedPersonName`) — checked against the
  full corpus's existing field ids first to confirm no equivalent
  field already existed. Seven other fields (`respondentName`,
  `issuingState`, `issuingCourtName`, `issuingCaseNumber`,
  `orderIssuanceDate`, `signatureDate`, `signatureCity`) reused from
  the existing corpus, all contextually appropriate as-is.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: Full Faith and Credit for Out-of-State Protective
  Orders — Information Sheet
  (`full_faith_credit_protective_order_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Family Law category. 1 new field.
- Corpus: 2,719 → 2,726 clauses; 357 → 358 documents. Third document
  of wave 77.
