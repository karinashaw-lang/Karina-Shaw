# Real Estate, new document: Smoke Alarm and Carbon Monoxide Device Compliance Disclosure — Information Sheet

## Why this document

Substituted in place of the originally-assigned Megan's Law standalone
document, which turned out to already be fully covered inside the
existing Residential Purchase Agreement document (and instead
surfaced a real gap-fix, see the separate lease-Megan's-Law
verification doc). Confirmed by grep that "smoke alarm," "carbon
monoxide," "13113.8," and "17926" had zero genuine hits anywhere in
the corpus. Read the existing Residential Purchase Agreement (with
its verified TDS clauses) and Natural Hazard Disclosure Statement
documents in full — confirmed neither touches smoke alarm or CO
device compliance specifically. Fourth and last document of wave 67.

## What this document covers

7 clauses: 2 drafting (declaration, transferor's statement/signature)
and 5 authority clauses, citing Cal. Health & Safety Code
§§ 13113.8(a)-(g) and 17926(a)-(d):

- **`detectorcompliance_smoke_alarm_requirement`** (§ 13113.8(a)-(c))
  — the smoke alarm requirement and the transferor's written
  compliance statement, with its own delivery-timing rule.
- **`detectorcompliance_smoke_alarm_exemptions`** (§ 13113.8(d)(1)-(9))
  — **a key finding**: the statute's own 9-item exemption list, which
  overlaps with but is not identical to this corpus's TDS exemption
  list (adding public-report and Unclaimed Property/tax-default
  exemptions not on the TDS list).
- **`detectorcompliance_smoke_alarm_liability`** (§ 13113.8(e)-(g)) —
  agent/escrow non-liability (except known-false disclosure), no duty
  to monitor compliance, and the $100 actual-damages cap as the
  exclusive remedy.
- **`detectorcompliance_co_device_requirement`** (§ 17926(a)-(b)) —
  **a key finding**: the CO device installation requirement is an
  ongoing owner obligation tied to dwelling occupancy features, with
  phased deadlines (2011/2013/2017) all now past — structurally
  different from the smoke alarm statute's sale-triggered duty.
- **`detectorcompliance_co_device_consequences`** (§ 17926(c)-(d)) —
  the $200 infraction fine with a mandatory 30-day cure notice, and a
  parallel $100 transfer-remedy cap mirroring the smoke alarm statute.

## Genuine corrections and findings

- **The central finding**: confirmed a genuine structural asymmetry
  between the two statutes — § 13113.8 has an explicit sale-triggered
  written-compliance-statement duty; § 17926 does not have a
  comparable transfer-disclosure duty of its own, only an ongoing
  installation obligation plus a separate infraction penalty. The
  research agent did not fabricate a parallel compliance-statement
  requirement for CO devices where none exists in the statutory text
  — disclosed honestly in the clause's own `gap` field.
- Confirmed the smoke alarm exemption list is broader than, and not
  identical to, this corpus's existing TDS exemption list — flagged
  as a distinct list that shouldn't be assumed to mirror the other.
- Confirmed both statutes independently cap the transfer-related
  remedy for noncompliance at $100 in actual damages, with neither
  invalidating the transfer itself.
- Confirmed the CO device statute's phased installation deadlines
  (2011 single-family, 2013 other dwellings, 2017 hotels/motels) have
  all already passed as of this document's preparation date, so the
  requirement now applies to all covered existing dwelling units.
- Correctly distinguished § 17926.1 (a separate landlord/tenant CO
  maintenance duty) as not relied on for this document's transfer-
  disclosure-focused clauses.

## Honest gap disclosed

The statute's own definition of "single-family dwelling" (excluding
manufactured homes, mobilehomes, and commercial coaches) is narrower
than, and differently drawn from, the "single-family residential
property" language this corpus's TDS clauses use — flagged rather
than treated as interchangeable. § 17926.1's landlord/tenant CO
maintenance duty was fetched for context but not built into a clause
or relied on for any citation here.

## Method

Fetched Cal. Health & Safety Code §§ 13113.8 and 17926 (plus § 17926.1
for context) from `leginfo.legislature.ca.gov` via curl (through the
sandboxed proxy), each cited section fetched twice with distinct
User-Agent strings, confirmed byte-identical after whitespace
normalization (only the statutory-text div compared; page-level JS
session-nonce differences were correctly disregarded as irrelevant).
All 9 citation quotes across the 5 authority clauses programmatically
confirmed as exact substrings of the confirmed text.

## Verification

- Both statutory sections fetched twice independently with distinct
  User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — all subsection
  citations within § 13113.8 and within § 17926 correctly disclosed
  as one statutory section each, not independent of one another;
  correct as delivered.
- Checked for duplicate clause IDs and duplicate titles against the
  full corpus (none).
- Field names (`sellerName`, `buyerName`, `propertyAddress`)
  independently confirmed to match existing corpus field definitions
  exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: Smoke Alarm and Carbon Monoxide Device Compliance
  Disclosure — Information Sheet
  (`smoke_alarm_co_device_compliance_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Real Estate category. No new
  fields.
- Corpus: 2,464 → 2,471 clauses; 318 → 319 documents. Fourth and
  last document of wave 67.
- **Wave 67 complete**: 2,441 → 2,471 clauses (30 new, including the
  Megan's Law lease gap-fix); 315 → 319 documents (4 new), across
  Real Estate (Partition Action, Smoke Alarm/CO Device Compliance)
  and Estate Planning (Probate Homestead Set-Aside, Personal
  Representative Statutory Compensation) — the "2×2" alternation
  pattern.
