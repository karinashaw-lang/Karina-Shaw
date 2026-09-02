# Confidentiality & IP, new document: California "Shine the Light" Law — Information Sheet

## Why this document

Civil Code § 1798.83 previously appeared in the corpus only as a
cross-reference inside the existing Data Breach Notification document's
discussion of § 1798.84's penalty structure — never independently fetched
or verified for its own substantive content. Confirmed no existing
document covers the Shine the Light request/response mechanism or its
opt-out alternative.

## What this document covers

8 clauses: 2 drafting (purpose/scope, compliance-method declaration and
signature) and 6 authority clauses, citing Cal. Civ. Code §§ 1798.83 and
1798.84:

- **`shinelight_covered_businesses_and_exemption`** (§ 1798.83(a), (c)(1))
  — the trigger conditions (established relationship, prior disclosure,
  actual/constructive knowledge) and the fewer-than-20-employee exemption.
- **`shinelight_customer_request_and_designated_channel`** (§ 1798.83(a),
  (b)(1)) — how a customer may request, and the business's duty to
  designate a channel.
- **`shinelight_required_disclosure_content_and_response_time`**
  (§ 1798.83(a)(1)-(2), (b)(1), (c)(1), (b)(3)) — required response
  content, the two-tier 30-day/150-day deadline, the once-per-year limit,
  and the standardized-format allowance.
- **`shinelight_optout_alternative_compliance`** (§ 1798.83(c)(2)) — the
  alternative opt-out/opt-in privacy-policy compliance path, distinct
  from responding to individual requests.
- **`shinelight_definitions_customer_and_direct_marketing`**
  (§ 1798.83(e)(1)-(2)) — the statutory definitions of "customer" and
  "direct marketing purposes."
- **`shinelight_remedies`** (§ 1798.84(b), (c), (d), (g), (e)) — the
  general civil action, the § 1798.83-specific $3,000/$500 civil penalty,
  the 90-day cure defense, prevailing-plaintiff attorney's fees, and
  injunctive relief.

## Genuine corrections and findings

- **A genuine structural finding**: § 1798.83 offers two alternative
  compliance paths, not a single mandatory response duty — a business may
  either respond to individual requests, or adopt and publicly disclose
  an opt-in/opt-out policy against third-party direct-marketing
  disclosure instead. The opt-out path had never appeared in the corpus
  before.
- **A two-tier deadline finding worth flagging**: the response deadline is
  30 days only if the request lands at the business's designated channel
  — otherwise up to 150 days — easy to conflate with a flat 30-day rule.
- **An expansion of what the corpus previously captured about § 1798.84**:
  the existing Data Breach document only cited subsections (b), (c), and
  (e) for breach-notification purposes; this document independently
  re-verifies § 1798.84 and surfaces two provisions specific to § 1798.83
  that were never previously in the corpus — the 90-day cure/complete-
  defense provision (subd. (d)) and the prevailing-plaintiff attorney's-
  fee provision (subd. (g)).
- Confirmed the small-business exemption (fewer than 20 full- or
  part-time employees) applies regardless of whether the general trigger
  conditions are otherwise met.
- Careful, repeated disambiguation throughout every clause's `gap` field
  distinguishing Shine the Light's own "customer"/"direct marketing
  purposes" definitions from the CCPA's differently defined "consumer"
  and "sharing" concepts — flagged explicitly rather than assumed
  interchangeable.

## Honest gap disclosed

The full statutory list of "categories of personal information" under
§ 1798.83(e)(6)-(7) is described but not exhaustively quoted. The GLBA
safe-harbor provision (§ 1798.83(b)(2)), the three publicity-method
options (§ 1798.83(b)(1)(A)-(C)), the disclosure exclusions (§ 1798.83(d)),
the affiliated-brand-name exception (§ 1798.83(f)), and the
financial-institution exemption (§ 1798.83(h)) were all identified but
not independently verified or covered. No case law interpreting either
section was located or relied on.

## Method

Fetched Cal. Civ. Code §§ 1798.83 and 1798.84 directly from
`leginfo.legislature.ca.gov`, each twice using distinct User-Agent
strings (Chrome/Windows and Safari/macOS) — confirmed byte-identical
(21,763 and 2,891 characters respectively) after whitespace
normalization. All 14 citation quotes programmatically confirmed as exact
substrings of the confirmed text; six instances of `{{businessName}}`
that leaked into `gap` text on a first draft were caught and corrected
before delivery.

## Verification

- Both sections fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are subsections of the same statutory section
  versus genuinely separate sections (§ 1798.83 vs. § 1798.84); correct
  as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  accepted generic drafting-title reuse ("Purpose and Scope of This
  Information Sheet") — also used by the Blacklisting document merged
  earlier this same wave.
- Field names (`businessName`, `websiteURL`, `contactMethod`,
  `preparerName`, `dateSigned`, `cityState`) independently confirmed to
  match existing corpus convention. New fields: `complianceMethod`,
  `designatedRequestChannel`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: California "Shine the Light" Law — Information Sheet
  (`shine_the_light_info_sheet`), 8 clauses (6 authority + 2 drafting), in
  the Confidentiality & IP category. New fields: `complianceMethod`,
  `designatedRequestChannel`.
- Corpus: 1,947 → 1,955 clauses; 249 → 250 documents. Third document of
  wave 50.
