# Research file: `ein_info_sheet` (wedge document)

MVP_FINISH_VERIFY_SHARPEN.md item 1.5. This document is an information
sheet, not a filing, about the federal Employer Identification Number
(EIN). Current clauseOrder (8 clauses, read directly from
`data/clauses.json`, not summarized from memory):
`ein_declaration`, `ein_statutory_basis`, `ein_which_entities_need_one`,
`ein_disregarded_entity_existing_number`,
`ein_new_ein_not_required_on_reorganization`, `ein_how_to_apply`,
`ein_state_vs_federal_disambiguation`, `ein_closing_signature`. Six of
the eight carry real citations and checked dates (five dated
2026-11-15, one — `ein_state_vs_federal_disambiguation` — dated
2026-09-02); the other two are drafting-only (declaration and
signature block, no claims to source).

## 1. Governing California law

This topic is overwhelmingly federal. The one CA-specific point in
scope — `ein_state_vs_federal_disambiguation` — is still accurate
against EDD's current own guidance: EDD issues its own 8-digit
"employer payroll tax account number" (SEIN/State ID number),
separate from the federal EIN, and instructs employers to include
their federal EIN on EDD registration so federal/state unemployment
tax payments reconcile correctly
([edd.ca.gov, "Step 3: Register for a Payroll Tax Account"](https://edd.ca.gov/en/payroll_taxes/step-3-register-for-a-payroll-tax-account/),
the same source already cited in the clause). No change found to this
since the clause's own 2026-09-02 check.

## 2. Elements California commonly attaches that the current clauseOrder omits

**A real, missing third number.** The corpus already disambiguates
EIN vs. SEIN (federal vs. EDD payroll), but a third, commonly-confused
number exists and isn't mentioned anywhere in this document: the
CDTFA **seller's permit number**, issued by the California Department
of Tax and Fee Administration to any business making retail sales,
which is neither the EIN nor the SEIN and does nothing for payroll or
income tax. Secondary sources (no official CDTFA page was reachable
from this research pass — see "Not independently confirmed" below)
consistently describe a buyer/vendor/bank asking for a "California
EIN" potentially meaning any of three different numbers: the federal
EIN, the EDD SEIN, or the CDTFA seller's permit number, and that
California does not let a federal EIN double as a state sales-tax ID
the way some other states do.
([UpCounsel, "SEIN Number: California Payroll Tax ID vs. EIN"](https://www.upcounsel.com/california-ein);
[ein.so, "EIN vs Sales Tax Permit: Do You Need Both?"](https://www.ein.so/ein-vs-sales-tax-permit/))

This is a genuine gap, not a style preference: a reader who only has
this document's existing two-number disambiguation (EIN vs. SEIN) and
then also needs a seller's permit (any LLC selling tangible goods at
retail) has no warning here that a third, different number is coming
and that it isn't covered by anything in this document. **Not a launch
blocker** on its own — nothing in the existing clauses is wrong, and
the document's own `ein_declaration` clause already states plainly
that it "is not this project's ... Seller's Permit (CDTFA) Information
Sheet," scoping the gap away rather than silently mis-covering it —
but it is a real, disclosable scope note (see §6) and a good candidate
for either a new short clause or a cross-reference line, subject to
owner approval (patch proposal below).

## 3. Provisions California restricts or voids

None found, and that is the expected, correct answer for this topic —
EIN issuance is governed by federal statute and Treasury regulation;
California has no authority to restrict or void a federal EIN
requirement, and nothing in the existing clauses claims otherwise.

## 4. Federal overlay

This is the document's actual substance, and it is already well-
sourced: `26 U.S.C. § 6109(a)(1)` (statutory identifying-number
mandate) and `26 C.F.R. § 301.6109-1` in four separately cited
subsections — `(a)(1)(i)` (EIN's numeric form), `(a)(1)(ii)(C)` (which
nonindividual persons must use an EIN), `(h)(2)(i)` (disregarded
single-owner entity uses the owner's TIN), and `(h)(1)` (EIN survives
a tax-classification change) — each checked directly against the
official electronic CFR (ecfr.gov), per the clauses' own gap text, not
assumed here. The disregarded-entity point the task asked to confirm
is already stated correctly and precisely in
`ein_disregarded_entity_existing_number`'s own gap text: the single-
member-LLC exception is for *federal tax purposes* only, and the IRS's
own guidance (already cited) states the boundary explicitly — a new,
separate EIN is still needed once the LLC has employees or an excise
tax obligation, which is an employment/excise-tax trigger, not a
general "always use the owner's SSN" rule. Nothing to add here; this
was already correct.

**One real candidate addition, not yet in any clause**: the IRS's
responsible-party rule. Form SS-4's current instructions and the
IRS's own internal guidance describe the "responsible party" named on
an EIN application as required to be an individual (not another
entity/EIN) for most applicants, and require a responsible-party
change to be reported to the IRS within 60 days on Form 8822-B.
([IRS, Instructions for Form SS-4 (Rev. 12/2025)](https://www.irs.gov/instructions/iss4);
[IRS Internal Revenue Manual 21.7.13](https://www.irs.gov/irm/part21/irm_21-007-013r))
**This was not independently confirmed against the IRS's own
"Responsible Parties and Nominees" page directly** — this research
pass could only reach it through a web search summary, not a direct
fetch (this fork has no browsing tool of its own; the page itself was
never actually loaded). This document's own fields already collect
`responsiblePartyName` and (optionally) `ssnOrItin`, with a `whyWeAsk`
note that already says the responsible party's SSN/ITIN is required to
submit the application — so the facts are already captured; only a
clause stating the individual-not-entity rule and the 60-day Form
8822-B update duty would be new content. Flagged as a *candidate*, not
a confirmed finding, pending a direct primary-source check someone
with working `irs.gov` access can do in minutes.

## 5. Changes in the last 24 months / effective January 1 or July 1, 2027

None found. Form SS-4's current instructions are the December 2025
revision (the most recent one located), and no announced IRS or
Treasury change to EIN application mechanics, the online tool, or the
responsible-party rule effective January 1 or July 1, 2027 was found
in this research pass. Reported as "none found," not "confirmed none
exist" — a generic web search is not the same as monitoring IRS
guidance for upcoming regulatory changes the way the corpus's own
watcher/recheck tooling does for this project's actually-cited sources.

## 6. Scope notes

- **Foreign applicants without a US SSN/ITIN**: already correctly
  scoped out by `ein_how_to_apply`'s own body text — "an applicant
  whose principal place of business is outside the United States must
  instead apply by phone, fax, or mail," not through the free online
  tool this clause otherwise describes. No gap here; already disclosed.
- **The CDTFA seller's permit confusion** (§2 above): currently
  disclosed as "not this document" via `ein_declaration`'s own
  explicit exclusion list, but not explained — a reader doesn't learn
  *why* it's a different number or that one even exists. Worth a
  one-line scope note or a short new clause, subject to owner approval.
- This document does not and should not cover state tax ID numbers
  generally (franchise tax account numbers, CDTFA accounts beyond the
  one cross-reference above) — that is correctly out of scope for an
  EIN-specific information sheet, not a gap.

## 7. Does the interview capture the facts the clauses depend on?

Yes, with one minor note. Fields: `companyName`, `entityType`,
`responsiblePartyName`, `ssnOrItin` (optional, marked `sensitive`,
explicitly "for reference only — not filed by this document"),
`authorizedSignerName`, `dateSigned`, `cityState`. Every clause
placeholder (`{{companyName}}`, `{{responsiblePartyName}}`,
`{{ssnOrItin}}`, `{{authorizedSignerName}}`, `{{dateSigned}}`,
`{{cityState}}`) has a matching field. `entityType` is collected but
not substituted into any clause body via a `{{entityType}}` token
except `ein_declaration`'s own opening sentence — confirmed used, not
dead. No fact a clause depends on is missing from the interview.

## Launch-blocker determination

**No launch blocker.** Every existing clause's claim is accurately
sourced and still current as of this review. The one real gap found
(§2, the CDTFA seller's permit disambiguation) is a disclosed, scoped-
out topic, not a wrong or missing claim about EIN itself — the
document already says plainly it isn't a seller's-permit sheet. It is
a genuine improvement opportunity, not a defect blocking launch.

## Patch proposal (for owner approval — not applied to `data/clauses.json`)

Two independent, optional additions, either or both:

1. **New short drafting-or-authority clause**, e.g.
   `ein_not_seller_permit_or_business_license`, stating that a
   California seller's permit (CDTFA, for retail sellers) and a local
   business license are separate numbers/filings this EIN-focused
   sheet does not cover, each issued by a different agency for a
   different purpose — mirroring the existing SEIN disambiguation
   clause's own structure and citing CDTFA's own seller's-permit page
   directly (not yet independently fetched in this pass; needs a real
   CDTFA primary-source citation before this becomes a real clause,
   not the secondary sources found here).
2. **New authority clause** on the Form SS-4 responsible-party rule
   (individual-only for most applicants; 60-day Form 8822-B update
   duty) — contingent on first directly confirming the exact wording
   against `irs.gov/businesses/small-businesses-self-employed/responsible-parties-and-nominees`
   and the current Form 8822-B instructions, since this pass could
   only reach IRS.gov through search-engine summaries, not a direct
   fetch.

Both are optional enhancements the owner may decline; neither is
required to keep this document accurate or to let it launch.
