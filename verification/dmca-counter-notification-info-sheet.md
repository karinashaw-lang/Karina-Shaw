# Confidentiality & IP, new document: DMCA Counter-Notification — Information Sheet

## Why this document

The existing DMCA Takedown Notice document covers sending the
original takedown notice under 17 U.S.C. § 512(c) and only briefly
mentions the counter-notification process in passing. This document
is the companion piece — the counter-notification process under
§ 512(g), covered in much greater depth than the existing document's
passing mention.

## What this document covers

8 clauses: 2 drafting (counter-notification declaration, signature
block) and 6 authority clauses:

- **`dmcacounter_required_elements`** (17 U.S.C. § 512(g)(3)) — the
  required elements of an effective counter-notification, in the
  statute's actual order.
- **`dmcacounter_good_faith_standard`** (17 U.S.C. § 512(g)(3)(C)) —
  the narrow scope of the sworn statement: mistake or misidentification
  of the material, not disagreement or a fair-use argument.
- **`dmcacounter_who_may_file`** (17 U.S.C. § 512(g)(2)(B), (3)(D)) —
  only the subscriber may file, and doing so mechanically forwards the
  subscriber's real identity to the complaining party.
- **`dmcacounter_putback_timeline`** (17 U.S.C. § 512(g)(2)(A)-(C)) —
  the three-step put-back sequence: notice to the subscriber,
  forwarding to the complainant, and the 10-to-14-business-day
  restoration window.
- **`dmcacounter_misrepresentation_liability`** (17 U.S.C. § 512(f))
  — misrepresentation liability applying to a false counter-
  notification, not just a false takedown notice.
- **`dmcacounter_safe_harbor_incentive`** (17 U.S.C. § 512(c)) —
  the factual incentive structure: a service provider's own safe
  harbor depends on correctly following the process.

## Genuine corrections and findings

- Corrected the assumed order of the required elements: the statute's
  actual order is (A) signature first, (B) identification and location
  of the material, (C) the sworn statement, then (D) name/address/
  phone plus consent to jurisdiction — not the identification-first
  order originally assumed.
- Corrected and completed the put-back timeline: it is not simply a
  10-to-14-business-day window. It is a three-step sequence — prompt
  notice to the subscriber that material was removed, prompt
  forwarding of a valid counter-notice to the complainant with a
  10-business-day warning, then restoration in the 10-to-14-business-
  day window unless the complainant has filed suit seeking a
  restraining court order.
- Confirmed § 512(f) misrepresentation liability runs in both
  directions and applies to a false counter-notification specifically,
  distinct from the takedown-side framing already covered in the
  existing document.
- A genuine, non-obvious finding: "subscriber" is not defined anywhere
  in § 512, including its own Definitions subsection (§ 512(k)), which
  defines only "service provider" and "monetary relief" — confirmed by
  fetching and reading the full subsection. The term carries only its
  ordinary meaning.
- Confirmed the anonymity complication is a direct, mechanical
  consequence of the statute's own text — § 512(g)(3)(D)'s real name/
  address/phone requirement combined with § 512(g)(2)(B)'s forwarding
  requirement — not an inference layered on top of the statute.
- Confirmed the sworn statement's scope is narrowly limited to
  mistake or misidentification of which material was targeted, stated
  explicitly by the statute's own text, not merely implied.

## Honest gap disclosed

CourtListener's rate limit (125 requests/day) was already exhausted,
confirmed by a direct test call. No case law (e.g., *Lenz v. Universal
Music Corp.*) is cited — disclosed in the misrepresentation-liability
clause's `gap` field rather than fabricated, consistent with this
corpus's established honesty pattern.

## Method

Fetched 17 U.S.C. § 512 (including subsections (g), (f), (c), and
(k)) directly from `law.cornell.edu`, verified against a second,
independent fetch with a distinct User-Agent — confirmed
byte-identical. All citation quotes programmatically confirmed as
exact substrings of the fetched, whitespace-normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`serviceProviderName`, `contactInfo`, `dateSigned`)
  independently confirmed to match the existing DMCA Takedown Notice
  document's fields exactly. New fields: `subscriberName`,
  `removedMaterialDescription`, `contentLocationURL`,
  `consentDistrict`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: DMCA Counter-Notification — Information Sheet
  (`dmca_counter_notification_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Confidentiality & IP category. New fields:
  `subscriberName`, `removedMaterialDescription`, `contentLocationURL`,
  `consentDistrict`.
- Corpus: 1,280 → 1,288 clauses; 161 → 162 documents. First document
  of wave 28.
