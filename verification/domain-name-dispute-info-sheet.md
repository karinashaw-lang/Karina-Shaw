# Confidentiality & IP, new document: Domain Name Dispute — Information Sheet

## Why this document

This topic was deferred earlier this session after a defective
delivery (5 of 7 authority clauses marked "verified" while carrying
bracketed placeholder text instead of real quotes, because icann.org
and its mirrors were blocked and CourtListener was rate-limited). That
delivery was rejected and never merged. This is a properly-scoped
retry.

## What this document covers

7 clauses: 2 drafting (declaration, signature) and 5 authority
clauses, built entirely on the Anticybersquatting Consumer Protection
Act (ACPA) — no UDRP-specific clause is included, for reasons
disclosed below:

- **`domaindispute_acpa_cause_of_action`** (15 U.S.C. § 1125(d)(1)
  (A), (D)) — the bad-faith-intent-to-profit cause of action and the
  limit on who can be liable.
- **`domaindispute_acpa_bad_faith_factors`** (15 U.S.C. § 1125(d)(1)
  (B)) — the statute's own "not limited to" bad-faith factors and its
  express fair-use/reasonable-grounds safe harbor.
- **`domaindispute_acpa_remedies`** (15 U.S.C. § 1125(d)(1)(C);
  § 1117(d)) — court-ordered forfeiture/cancellation/transfer and
  statutory damages of $1,000-$100,000 per domain name.
- **`domaindispute_acpa_in_rem_jurisdiction`** (15 U.S.C. § 1125(d)
  (2)) — the in rem option against the domain name itself when the
  registrant cannot be sued in personam.
- **`domaindispute_acpa_registrant_court_review`** (15 U.S.C.
  § 1114(2)(D)(v)) — a domain registrant's own right to sue for
  reactivation or transfer back after a registrar suspends a domain
  under a "reasonable policy."

## Genuine corrections and findings

- **Reachability, tested fresh this session**: icann.org, wipo.int,
  and web.archive.org (tried as a fallback UDRP-text mirror) were all
  still blocked by this environment's network egress policy
  (`connect_rejected`, "organization policy"), confirmed by direct
  `curl` test, not just the higher-level fetch tool. CourtListener
  returned HTTP 429 (daily quota exhausted, ~8+ hours remaining).
  law.cornell.edu was reachable via direct `curl` (though the
  higher-level fetch tool itself errored on the same host — worked
  around by using `curl` directly, with two independent fetches using
  distinct User-Agent strings, confirmed byte-identical).
- **Consequence, per the standing verification rule**: since UDRP
  policy text could not be verified from any reachable primary or
  judicially-quoted source, no UDRP clause is included at all — not
  even a hedged one. The document is built entirely on the ACPA.
- **A correction to the original framing**: the ACPA's dilution-alone
  route applies only to *famous* marks, not merely *distinctive*
  ones — distinctive-but-not-famous marks need the identical/
  confusingly-similar prong, not dilution alone. The original framing
  conflated the two prongs.
- Confirmed the statutory damages figures exactly as originally
  framed: $1,000 to $100,000 per domain name under § 1117(d).
- A genuine additional finding, not originally requested: § 1114(2)
  (D)(v) gives a domain registrant whose domain was suspended,
  disabled, or transferred under a registrar's reasonable dispute
  policy the right to sue in federal court for reactivation or
  transfer back. This is very likely what practitioners mean when they
  say a "UDRP loser can go to federal court," but the statute itself
  never names the UDRP — the clause states only what the statutory
  text actually supports, with the UDRP connection explicitly
  disclosed as unverified in the `gap` field rather than asserted.
- Could not confirm a "10 business days" filing deadline for that
  federal-court challenge from any reachable source — that figure
  appears only in the UDRP Policy text itself, which was unreachable,
  so no numeric claim about it is included anywhere in this document.

## Honest gap disclosed

The UDRP's three-element test (identical/confusingly similar; no
rights or legitimate interests; registered and used in bad faith) is
not covered by any clause in this document — not because the doctrine
doesn't exist, but because no primary or judicially-quoted source for
its text was reachable this session. A future retry, once network
access or CourtListener's quota changes, could add it.

## Method

Fetched 15 U.S.C. §§ 1125(d), 1117(d), and 1114(2)(D) directly from
`law.cornell.edu` via `curl` (the higher-level fetch tool errored on
this host; raw `curl` succeeded), each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-
identical. All 18 citation quotes programmatically confirmed as exact
substrings of the fetched, normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration. Independently re-confirmed no
  fabricated or placeholder quote text appears anywhere in any
  citation — the defect that sank the earlier attempt.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `trademarkDescription`,
  `goodsServicesDescription`, `demandDate`) independently confirmed to
  match existing corpus convention (Trademark Cease and Desist, Trade
  Dress documents). New fields: `disputedDomain`, `registrantName`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Domain Name Dispute — Information Sheet
  (`domain_name_dispute_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the Confidentiality & IP category. New fields:
  `disputedDomain`, `registrantName`.
- Corpus: 1,474 → 1,481 clauses; 185 → 186 documents.
