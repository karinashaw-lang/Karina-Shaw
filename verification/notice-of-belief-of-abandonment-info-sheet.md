# Real Estate, new document: Notice of Belief of Abandonment (Real Property) — Information Sheet

## Why this document

Third processed item of wave 137 (Real Estate slot #1). The agent
ruled out §§ 1951.2/1951.4 (landlord's post-abandonment damages/
mitigation duty, already covered by the existing mitigation-of-
damages document), the abandoned-personal-property statute (already
covered, and that document's own gap field explicitly flags § 1951.3
as separate), PACE financing disclosures (independently covered by
this wave's Real Estate #2 document), private transfer fees, and the
HOA reserve-study funding disclosure — all confirmed already covered
or non-fits. The chosen topic — California's statutory Notice of
Belief of Abandonment procedure under Civ. Code §§ 1951.3 (non-
commercial real property) and 1951.35 (commercial real property,
added by AB 2847 effective Jan. 1, 2019) — was confirmed genuinely
open: § 1951.35 had zero prior corpus hits, and the single "1951.3"
hit traced to an existing clause's incidental cross-reference to how
a separate abandoned-personal-property notice may (but need not) be
combined with this notice, not substantive coverage of the notice
procedure itself.

## What this document covers

12 clauses: 4 drafting (intro, non-commercial notice form, commercial
notice form, recordkeeping/declaration of service) and 8 authority
clauses, citing Civ. Code § 1951.3(a), (b), (c) (two citations), (d),
(f) (two citations), (g), (h), § 1951.35(a)-(c), (d), and § 1954.26(d)
(two citations):

- **`noba_general_effect`** — the self-executing deemed-abandonment
  and lease-termination rule.
- **`noba_noncommercial_scope_and_trigger`** — the 14-day unpaid-rent
  and reasonable-belief threshold for non-commercial property.
- **`noba_commercial_real_property_definition`** — the § 1954.26(d)
  definition that determines which of the two parallel statutes
  applies.
- **`noba_delivery_methods`** / **`noba_termination_timing`** — the
  personal-delivery/mail delivery rules and the 15-day/18-day minimum
  timing.
- **`noba_rebuttal_grounds`** — the four statutory grounds defeating
  deemed abandonment.
- **`noba_not_exclusive_remedy`** — the notice is not the exclusive
  way to prove abandonment and does not substitute for a pay-rent-
  or-quit notice.
- **`noba_commercial_variant`** — § 1951.35's parallel commercial-
  property regime, contrasted point-by-point with § 1951.3.

## Genuine findings

- **A disclosed pre-statute case-law limitation**: the commercial-
  variant clause's gap discloses that CourtListener returned real
  results (not a rate-limit) — two published cases construing a
  notice of belief of abandonment for a commercial lease — but both
  predate § 1951.35's 2019 enactment, when a single undifferentiated
  § 1951.3 governed both commercial and non-commercial property; the
  document does not treat that pre-2019 case law as authority for how
  a court would apply the current, bifurcated statute.
- **A disclosed unresolved statutory ambiguity**: the rebuttal-
  grounds clause's gap notes the fourth ground's "all or a portion
  of" rent-payment language does not itself resolve whether partial
  payment during the window is sufficient to defeat deemed
  abandonment.
- **A disclosed dependency on un-fetched cross-referenced
  definitions**: the commercial-real-property-definition clause's gap
  discloses that Civ. Code § 1940, Health & Safety Code § 50519, and
  Health & Safety Code § 18214 — all cross-referenced by § 1954.26(d)
  — were not independently fetched or verified.

## Honest gap(s) disclosed

This document does not quote § 1951.35(f)-(h) in full (only
summarized by comparison to § 1951.3), does not independently verify
the cross-referenced definitions in Civ. Code § 1940 or Health &
Safety Code §§ 50519/18214, does not address Civ. Code § 1991 (the
statute permitting combination with the separate abandoned-personal-
property notice, left to that corpus document), does not rely on the
two pre-2019 CourtListener-found cases as authority for current law,
and does not determine whether any specific property is "commercial
real property" or whether any specific belief of abandonment was
reasonable.

## Method

Fetched Civ. Code §§ 1951.3, 1951.35, and 1954.26 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings via curl, confirmed identical
after excluding only the JSF ViewState token and debug timestamp. A
CourtListener search returned real results (not rate-limited) — two
published cases predating the 2019 statutory split — deliberately not
relied on as authority for the current bifurcated statute, per the
gap disclosure above. All 13 citation instances were programmatically
confirmed by the research agent as exact, contiguous substrings via a
Python script checking exact key sets, `{{` leaks, `clauseOrder`
parity, and full field/placeholder cross-reference.

Independently re-verified during integration review via a two-
hundred-and-thirteenth fetch (a new distinct curl User-Agent string,
"Groundtruth-213thVerify-NoticeBeliefAbandonment/1.0") of all three
sections — all fetched cleanly on the first attempt. All 13 citation
instances confirmed clean on direct normalized-whitespace substring
match, with no fallback needed. The general deemed-abandonment/
termination rule, the non-commercial threshold conditions, the
commercial-real-property definition, the delivery methods and timing
rules for both statutes, the four rebuttal grounds, the non-exclusive-
remedy provisions, and the commercial-property variant's points of
difference were all independently reconfirmed present in the freshly
fetched text.

## Verification

- All three cited sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a two-
  hundred-and-thirteenth independent fetch during integration review;
  all 13 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `noba_` prefix has zero collisions. Ran section-
  number-specific greps for "1951.3," "1951.35," "1954.26," "notice of
  belief of abandonment," "Photopoint," and "Avalon Pacific" — zero
  hits on all except one incidental, non-substantive cross-reference
  to § 1951.3 in an existing abandoned-personal-property clause,
  confirmed a false-positive collision, not substantive overlap.
- Checked every citation's `case` field for emptiness — all 13
  populated with proper citation identifier strings.
- Two new field ids confirmed genuinely necessary and non-duplicative:
  `landlordAddress` (no existing address field is landlord-facing for
  a tenant's response) and `rentUnpaidSinceDate` (semantically
  distinct from the existing `abandonmentDate` field, which records a
  different fact). Seven fields reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Notice of Belief of Abandonment (Real Property) —
  Information Sheet (`notice_of_belief_of_abandonment_info_sheet`), 12
  clauses (8 authority + 4 drafting), in the Real Estate category. Two
  new fields: `landlordAddress`, `rentUnpaidSinceDate`.
- Corpus: 4,541 → 4,553 clauses; 566 → 567 documents. Third processed
  item of wave 137 (Real Estate #1).
