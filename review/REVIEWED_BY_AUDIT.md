# Reviewed-By audit (`MVP_FINISH_VERIFY_SHARPEN.md` item 1.3)

Run 2026-11-22 against branch `claude/new-session-palh5c`. Every
commit on this branch was checked against `tools/check_commit_discipline.py`'s
own logic (not a separate, parallel check that could disagree with
it) for two independent things: whether it carries a `Reviewed-By:`
trailer, and whether it changed the *legal text* of an already-
existing clause (its `body`, `gap`, or a citation's quote — not its
`status`, `checkedDate`, `sourceClass`, or a citation's `url`/`case`/
`cite` label alone, which routine re-verification legitimately
touches without rewriting the clause's own wording).

## Summary

**20 of 28 commits on this branch are missing the `Reviewed-By:`
trailer.** Of those 20, **3 also changed the legal text of an
existing clause**, which is the combination Global Rules 3 and 12
exist to catch — an unreviewed commit that rewrote legal content, not
just one that happened to land without the trailer on an otherwise
inert change (a doc save, a test file, a planning note).

| Commit | Touched clause legal text? | Clauses changed | What kind of change |
|---|---|---|---|
| `e7978c2` | **Yes** | 8 | Body text — real wording changes, need review below |
| `fd55d72` | Yes | 112 | Citation URL/label only (mirror → primary-official source) — no quote, body, or gap changed on any of the 112; see note below |
| `cd2db28` | **Yes** | 17 | 6 body + 11 gap — real wording changes, need review below |
| `9b5cd0a`, `532c271`, `040eea9`, `dc8a7b5`, `22c4c63`, `807269a`, `b4e513b`, `88234d3`, `27c2ef1`, `daf58c7`, `2ffa245`, `f0b84f3`, `54c3d7d`, `41ad3e5`, `3da578f`, `f0f23d7`, `4e8181f` | No | 0 | Code, infra, CI, docs, or non-text clause-field changes (status/checkedDate/sourceClass only) — no clause wording changed |
| `dc35119`, `542d580`, `d59f461`, `b01c651`, `67992d3`, `4925322`, `4f8194a`, `147d916` | — | — | Already carry the `Reviewed-By:` trailer (pre-date this session's own entitlements/CI work) |

**On `fd55d72`'s 112 citation-label changes:** every one is a
mirror-to-primary-official URL move (`law.cornell.edu` →
`govinfo.gov`/`uscode.house.gov`/`ecfr.gov`, or a label-text change
alongside the same URL) with the stored quote byte-identical before
and after — confirmed programmatically (`old_quotes == new_quotes`
for all 112, not asserted). This is exactly the mechanical, lower-
risk category Global Rule 7's own reasoning treats differently from a
body/gap/quote rewrite: there is no new claim here to approve, only a
better-sourced citation for a claim already approved. Not included in
the line-by-line review below for that reason; available on request
if the owner wants it anyway.

**On the 25 real wording changes below (`e7978c2`'s 8, `cd2db28`'s
17):** these are exactly the commits this audit flags for owner
review before any `Reviewed-By:` policy is implemented going
forward — see this file's own recommendation at the bottom. Every one
of these 25 was already described, with sourcing reasoning, in
`DECISIONS.md`'s 2026-11-18/19 entries for A5 buckets 2-4 at the time
it was made; this is the first time the exact before/after text has
been assembled into one reviewable document, as item 1.3 asks for,
rather than left scattered across commit messages and `DECISIONS.md`
prose.

## Line-by-line diff review

### Commit `e7978c2`


#### `boardconsent_signatures`
Used in: Corporate Board Resolution / Action by Written Consent

**body — before:**
```
The undersigned directors of {{companyName}} — {{directorNames}} — each sign below to evidence their unanimous written consent:

Director: _______________________ Date: _______________
Director: _______________________ Date: _______________
(Every director then serving must sign for this consent to be effective in place of a meeting. Add additional signature lines as needed.)
```
**body — after:**
```
The undersigned directors of {{companyName}} — {{directorNames}} — each sign below to evidence their unanimous written consent:

Director: _______________________ Date: _______________
Director: _______________________ Date: _______________
(Under the default rule of California law, every director then serving must sign for this consent to be effective in place of a meeting, unless {{companyName}}'s articles of incorporation or bylaws provide otherwise. Add additional signature lines as needed.)
```

#### `commlease_ack`
Used in: Commercial Lease Agreement

**body — before:**
```
Signed:

Landlord: ☐ _________________________ Date: _______________

Tenant: ☐ _________________________ Date: _______________

Guarantor (if applicable): ☐ _________________________ Date: _______________

A personal guaranty of Tenant's obligations under this lease is a separate promise that California law requires to be set out in a signed writing of its own; an individual's signature on this lease in a representative capacity for a business-entity Tenant does not, by itself, create a personal guaranty of that entity's obligations.
```
**body — after:**
```
Signed:

Landlord: ☐ _________________________ Date: _______________

Tenant: ☐ _________________________ Date: _______________

Guarantor (if applicable): ☐ _________________________ Date: _______________

See “Personal Guaranties Are General Contract Law, Not a Commercial-Lease-Specific Statute” above for what is required to create an enforceable personal guaranty of Tenant's obligations under this lease.
```

#### `deedoftrust_trustee_power_of_sale_and_reconveyance`
Used in: Deed of Trust and Promissory Note (Private/Seller-Financed Real Estate Loan)

**body — before:**
```
Trustor grants Trustee the power to sell the Property, to be exercised only after a breach of an obligation this Deed of Trust secures and only in the manner California law prescribes for a nonjudicial foreclosure sale under a power of sale — a process this document does not itself describe. {{beneficiaryName}}, as Beneficiary, may substitute a new trustee in place of {{trusteeName}} at any time by recording a substitution in the county where the Property is located, without needing Trustee's consent. Once the obligations this Deed of Trust secures have been paid and performed in full, Beneficiary must request a reconveyance, and Trustee must reconvey the Property to the person or persons legally entitled to it, releasing this Deed of Trust's lien, as provided by law. This Deed of Trust is to be recorded in the office of the County Recorder of {{recordingCounty}} County, California.
```
**body — after:**
```
Trustor grants Trustee the power to sell the Property, to be exercised only after a breach of an obligation this Deed of Trust secures and only in the manner California law prescribes for a nonjudicial foreclosure sale under a power of sale — a process this document does not itself describe. {{beneficiaryName}}, as Beneficiary, may substitute a new trustee in place of {{trusteeName}} at any time by recording a substitution in the county where the Property is located, without needing Trustee's consent. Once the obligations this Deed of Trust secures have been paid and performed in full, Beneficiary must request a reconveyance, and Trustee must reconvey the Property to the person or persons legally entitled to it, releasing this Deed of Trust's lien, as provided by law. If this Deed of Trust is recorded, it is to be recorded in the office of the County Recorder of {{recordingCounty}} County, California. Recording is not required for this Deed of Trust to be valid between Trustor and Beneficiary, but it affects priority against later-recorded interests and is ordinarily necessary before the power of sale can be enforced against third parties.
```

#### `melloroos_notice_delivery`
Used in: Residential Purchase Agreement

**body — before:**
```
If {{propertyAddress}} is subject to a special tax lien of the kind described in the Mello-Roos disclosure provisions below, Seller shall deliver to Buyer any Notice of Special Tax or other disclosure notice required by those provisions before Buyer signs a contract to purchase or a deposit receipt for the property, separately from the Transfer Disclosure Statement and Natural Hazard Disclosure Statement referenced elsewhere in this agreement.
```
**body — after:**
```
If {{propertyAddress}} is subject to a special tax lien of the kind described in the Mello-Roos disclosure provisions below, Seller shall deliver to Buyer the applicable Notice of Special Tax or other disclosure notice, separately from the Transfer Disclosure Statement and Natural Hazard Disclosure Statement referenced elsewhere in this agreement. For a new-subdivision sale, that notice is delivered before Buyer signs a contract to purchase or a deposit receipt, as described in the subdivision-sale timing provisions below. For a resale, the applicable special tax disclosure follows the timing and scope described in the general resale disclosure provisions below.
```

#### `qcd_signature_notarization`
Used in: Quitclaim Deed

**body — before:**
```
SIGNATURE AND DATE: {{grantorName}} signs and dates this deed below; the name should exactly match the name shown on the property's current title documents.

Signature of {{grantorName}}: _________________________ Date: _______________

ACKNOWLEDGMENT OF NOTARY: A notary public or other officer completing this certificate verifies only the identity of the individual who signed the document to which this certificate is attached, and not the truthfulness, accuracy, or validity of that document.

State of California ) County of _________________________ )

On _________________________ before me, _________________________ (here insert name and title of the officer), personally appeared _________________________, who proved to me on the basis of satisfactory evidence to be the person(s) whose name(s) is/are subscribed to the within instrument and acknowledged to me that they executed the same in their authorized capacity(ies), and that by their signature(s) on the instrument the person(s), or the entity upon behalf of which the person(s) acted, executed the instrument. I certify under PENALTY OF PERJURY under the laws of the State of California that the foregoing paragraph is true and correct.

WITNESS my hand and official seal.

Signature: _________________________ (Seal)

RECORDING: This deed transfers whatever interest {{grantorName}} has even if it is never recorded, but it is not recorded automatically upon signing. Recording is a separate step: presenting the signed, notarized deed to the county recorder in the county where the property is located, together with any required Preliminary Change of Ownership Report and any applicable documentary transfer tax.
```
**body — after:**
```
SIGNATURE AND DATE: {{grantorName}} signs and dates this deed below; the name should exactly match the name shown on the property's current title documents.

Signature of {{grantorName}}: _________________________ Date: _______________

ACKNOWLEDGMENT OF NOTARY: A notary public or other officer completing this certificate verifies only the identity of the individual who signed the document to which this certificate is attached, and not the truthfulness, accuracy, or validity of that document.

State of California ) County of _________________________ )

On _________________________ before me, _________________________ (here insert name and title of the officer), personally appeared _________________________, who proved to me on the basis of satisfactory evidence to be the person(s) whose name(s) is/are subscribed to the within instrument and acknowledged to me that they executed the same in their authorized capacity(ies), and that by their signature(s) on the instrument the person(s), or the entity upon behalf of which the person(s) acted, executed the instrument. I certify under PENALTY OF PERJURY under the laws of the State of California that the foregoing paragraph is true and correct.

WITNESS my hand and official seal.

Signature: _________________________ (Seal)

RECORDING: This deed is not recorded automatically upon signing. Recording is a separate step: presenting the signed, notarized deed to the county recorder in the county where the property is located, together with any required Preliminary Change of Ownership Report and any applicable documentary transfer tax. See “Recording: Constructive Notice and California's Race-Notice Rule” above for what recording does and does not affect.
```

#### `sev_release`
Used in: Severance Agreement

**body — before:**
```
In exchange for the severance payment above, {{employeeName}} releases {{companyName}} from all claims {{employeeName}} has or may have arising out of {{employeeName}}'s employment or its ending, to the fullest extent the law allows.
```
**body — after:**
```
In exchange for the severance payment above, {{employeeName}} releases {{companyName}} from all claims {{employeeName}} has or may have arising out of {{employeeName}}'s employment or its ending, to the fullest extent the law allows. If {{employeeName}} is 40 or older, this release includes a release of age-discrimination claims only if the additional requirements described below are met.
```

#### `tod_beneficiary_designation`
Used in: Transfer-on-Death Deed

**body — before:**
```
{{ownerName}} may name more than one beneficiary. If {{additionalBeneficiaryName}} is named as an additional beneficiary alongside {{beneficiaryName}}, the named beneficiaries take title to the property as tenants in common in equal shares on {{ownerName}}'s death. California's transfer-on-death deed statute does not provide a separate "contingent" or fallback beneficiary who stands in only if the primary beneficiary predeceases the owner; instead, if a named beneficiary does not survive {{ownerName}}, that beneficiary's share is redistributed among the other named beneficiaries who do survive. If no named beneficiary survives {{ownerName}}, this deed has no effect, and the property does not pass under it.
```
**body — after:**
```
{{ownerName}} may name more than one beneficiary. If {{additionalBeneficiaryName}} is named as an additional beneficiary alongside {{beneficiaryName}}, the named beneficiaries take title to the property as tenants in common in equal shares on {{ownerName}}'s death. See “Beneficiary Predeceasing the Owner” below for what happens if a named beneficiary does not survive {{ownerName}}, including the case where no named beneficiary survives.
```

#### `waitingtime_demand_letter_body`
Used in: Final Wage Payment / Waiting-Time Penalty Demand Letter

**body — before:**
```
Re: Demand for Payment of Final Wages — {{employeeName}}

To {{companyName}}:

This letter concerns the employment of {{employeeName}}, whose employment with {{companyName}} ended on {{terminationDate}}. The separation is described here as: {{separationType}}.

California Labor Code sections 201 and 202 set deadlines for paying an employee's final wages depending on how the employment ended. As of the date of this letter, {{employeeName}} has not received full payment of final wages owed, including all earned and unpaid wages and any accrued, unused vacation or paid time off required to be paid out as wages at termination. The unpaid amount is currently identified as approximately {{unpaidWagesAmount}}.

Because final wages were not paid by the applicable statutory deadline, California Labor Code section 203 provides that unpaid wages continue as a penalty at {{employeeName}}'s daily rate of pay — {{dailyWageRate}} per day — for each day payment remains outstanding, up to a maximum of 30 days.

Payment in full of the unpaid final wages described above, together with all waiting-time penalties accrued as of the date payment is made, is demanded.
```
**body — after:**
```
Re: Demand for Payment of Final Wages — {{employeeName}}

To {{companyName}}:

This letter concerns the employment of {{employeeName}}, whose employment with {{companyName}} ended on {{terminationDate}}. The separation is described here as: {{separationType}}.

California Labor Code sections 201 and 202 set deadlines for paying an employee's final wages depending on how the employment ended. As of the date of this letter, {{employeeName}} has not received full payment of final wages owed, including all earned and unpaid wages and any accrued, unused vacation or paid time off required to be paid out as wages at termination. The unpaid amount is currently identified as approximately {{unpaidWagesAmount}}.

Because final wages were not paid by the applicable statutory deadline, and this failure was willful within the meaning described below, California Labor Code section 203 provides that unpaid wages continue as a penalty at {{employeeName}}'s daily rate of pay — {{dailyWageRate}} per day — for each day payment remains outstanding, up to a maximum of 30 days.

Payment in full of the unpaid final wages described above, together with all waiting-time penalties accrued as of the date payment is made, is demanded.
```

### Commit `cd2db28`


#### `ahcd_scope_of_authority`
Used in: Advance Health Care Directive

**body — before:**
```
Unless this directive limits it, {{agentName}}'s authority to make health care decisions for {{patientName}} is as broad as {{patientName}}'s own authority would be — including consenting to or refusing any care, treatment, service, or procedure, and selecting or discharging health care providers and institutions. State law nonetheless withholds some decisions entirely, regardless of what this directive says: it does not authorize consent, on {{patientName}}'s behalf, to commitment to or placement in a mental health treatment facility, convulsive treatment, psychosurgery, sterilization, or abortion.
```
**body — after:**
```
Unless this directive limits it, {{agentName}}'s authority to make health care decisions for {{patientName}} is as broad as {{patientName}}'s own authority would be. State law nonetheless withholds some decisions entirely, regardless of what this directive says: it does not authorize consent, on {{patientName}}'s behalf, to commitment to or placement in a mental health treatment facility, convulsive treatment, psychosurgery, sterilization, or abortion.
```

#### `bylaws_director_removal`
Used in: Corporate Bylaws

**gap — before:**
```
This is one state's statute, used as real evidence of a genuine minority-shareholder protection — not a claim about which state's law governs a specific corporation. This protection exists specifically because of cumulative voting: it prevents a bare majority from simply voting out a director whom a large-enough minority elected using their cumulative-voting power, which would otherwise make that minority protection meaningless. Reducing the authorized number of directors, or amending the bylaws to reduce board classes, doesn't itself remove a sitting director before their term is up. All three citations below are subsections of the same statutory section (§ 303) rather than independently authored sources; no additional independent source was found for this.
```
**gap — after:**
```
This is one state's statute, used as real evidence of a genuine minority-shareholder protection — not a claim about which state's law governs a specific corporation. This protection exists specifically because of cumulative voting: it prevents a bare majority from simply voting out a director whom a large-enough minority elected using their cumulative-voting power, which would otherwise make that minority protection meaningless. Reducing the authorized number of directors, or amending the bylaws to reduce board classes, doesn't itself remove a sitting director before their term is up. A separate limit applies where a director was elected by a class or series of shares voting separately for that seat: under § 303(a)(2), that director may be removed only by a vote of that same class or series, regardless of the cumulative-voting analysis described above; confirmed via a mirror (law.onecle.com), not leginfo directly, which returned a Cloudflare block this session. All citations below are subsections of the same statutory section (§ 303) rather than independently authored sources; no additional independent source was found for this.
```

#### `covenantnotice_no_cure_categories`
Used in: 3-Day Notice to Perform Covenant or Quit

**gap — before:**
```
This is one state's statute, used as real evidence of California's unlawful detainer notice requirements — not a claim about which state's law governs a specific tenancy; landlord-tenant notice procedures vary significantly by state. This document addresses California's statewide statute only. This research attempted to confirm this distinction with published California case law (for example, cases discussing waste, nuisance, or illegal-use evictions as categorically incurable) but could not do so: CourtListener, the case-law research tool used for this project, returned a daily rate-limit error (429, "Rate limit exceeded: 125/day") before any such search could be run, and that limit could not be worked around within this research session. The finding above rests solely on the directly-verified text of the statute itself (Code of Civil Procedure section 1161, paragraph 4, as contrasted with paragraph 3), not on case law construing it. This document does not determine whether any specific act (an unauthorized subletting, an unauthorized pet, or any other lease violation) falls into this no-cure category as opposed to the perform-or-quit category described elsewhere in this document — that determination depends on the specific covenant, the specific conduct, and how a court would characterize it. In particular, paragraphs 3 and 4 of Code of Civil Procedure section 1161 both expressly address an unauthorized assignment or sublet — paragraph 3 (the perform-or-quit notice described elsewhere in this document) and paragraph 4 (the no-cure termination described in this clause) — and no case law was located resolving which paragraph controls when a lease covenant against assignment or subletting is breached. A drafter should treat this as an unresolved ambiguity requiring independent legal advice on which notice type applies to an unauthorized assignment or sublet, rather than assuming the two clauses describe non-overlapping categories of breach.
```
**gap — after:**
```
This is one state's statute, used as real evidence of California's unlawful detainer notice requirements — not a claim about which state's law governs a specific tenancy; landlord-tenant notice procedures vary significantly by state. This document addresses California's statewide statute only. This research attempted to confirm this distinction with published California case law (for example, cases discussing waste, nuisance, or illegal-use evictions as categorically incurable) but could not do so: CourtListener, the case-law research tool used for this project, returned a daily rate-limit error (429, "Rate limit exceeded: 125/day") before any such search could be run, and that limit could not be worked around within this research session. The finding above rests solely on the directly-verified text of the statute itself (Code of Civil Procedure section 1161, paragraph 4, as contrasted with paragraph 3), not on case law construing it. This document does not determine whether any specific act (an unauthorized subletting, an unauthorized pet, or any other lease violation) falls into this no-cure category as opposed to the perform-or-quit category described elsewhere in this document — that determination depends on the specific covenant, the specific conduct, and how a court would characterize it. In particular, paragraphs 3 and 4 of Code of Civil Procedure section 1161 both expressly address an unauthorized assignment or sublet — paragraph 3 (the perform-or-quit notice described elsewhere in this document) and paragraph 4 (the no-cure termination described in this clause) — and no case law was located resolving which paragraph controls when a lease covenant against assignment or subletting is breached. This document does not resolve whether paragraph (3) or paragraph (4) of Code of Civil Procedure section 1161 applies to an unauthorized assignment or sublease; no case law resolving that overlap was located.
```

#### `lease_entry_notice`
Used in: Residential Lease Agreement

**body — before:**
```
Landlord may enter the unit only in these specific cases: (1) an emergency; (2) to make necessary or agreed repairs, decorations, alterations, or improvements, to supply necessary or agreed services, or to show the unit to a prospective or actual purchaser, mortgagee, tenant, worker, or contractor, or to make the pre-move-out inspection described elsewhere in this document; (3) when Tenant has abandoned or surrendered the unit; or (4) under a court order. (Two further categories exist under separate statutes for specific health, safety, and emergency-preparedness purposes this document doesn't cover.) Except in an emergency or abandonment, entry is limited to normal business hours and generally requires reasonable written notice stating the date, approximate time, and purpose of the entry — but written notice itself isn't always required: no notice at all is required if Tenant is present and consents to the entry at the time of entry; oral notice is enough to show the unit to a prospective or actual purchaser, if Landlord has separately given Tenant written notice within the last 120 days that the property is for sale; and Landlord and Tenant may agree orally to a repair or service visit within the coming week, with no written notice required for that agreed visit either. Landlord can't abuse this right of access or use it to harass Tenant.
```
**body — after:**
```
Landlord may enter the unit only in these specific cases: (1) an emergency; (2) to make necessary or agreed repairs, decorations, alterations, or improvements, to supply necessary or agreed services, or to show the unit to a prospective or actual purchaser, mortgagee, tenant, worker, or contractor, or to make the pre-move-out inspection described elsewhere in this document; (3) when Tenant has abandoned or surrendered the unit; or (4) under a court order. (Two further categories exist under separate statutes for specific health, safety, and emergency-preparedness purposes this document doesn't cover.) Except in an emergency or abandonment, entry is limited to normal business hours (unless Tenant consents to off-hours entry at the time of entry) and generally requires reasonable written notice stating the date, approximate time, and purpose of the entry — but written notice itself isn't always required: no notice at all is required if Tenant is present and consents to the entry at the time of entry; oral notice is enough to show the unit to a prospective or actual purchaser, if Landlord has separately given Tenant written notice within the last 120 days that the property is for sale; and Landlord and Tenant may agree orally to a repair or service visit within the coming week, with no written notice required for that agreed visit either. Landlord can't abuse this right of access or use it to harass Tenant.
```

#### `mechlien_who_may_claim`
Used in: Mechanics Lien Preliminary Notice

**gap — before:**
```
This is one state's statute, used as real evidence of who California law recognizes as a potential lien claimant — not a claim about which state's law governs a particular project or contract. It states only that these categories of persons have a lien right; it doesn't state whether a specific person's work actually qualifies, whether that person is licensed as required for the work performed, or what amount, if any, that person could lawfully claim. This clause cites a single statutory section (§ 8400); no additional independent source was found for this.
```
**gap — after:**
```
This is one state's statute, used as real evidence of who California law recognizes as a potential lien claimant — not a claim about which state's law governs a particular project or contract. It states only that these categories of persons have a lien right; it doesn't state whether a specific person's work actually qualifies, whether that person is licensed as required for the work performed, or what amount, if any, that person could lawfully claim. This clause cites two independently enacted statutory sections, § 8400 and § 8402 (the site-improvement extension the body's second sentence describes), not subsections of the same section; § 8402's text was confirmed via a mirror (california.public.law), not leginfo directly, which returned a Cloudflare block this session.
```

#### `namechange_gender_identity_conforming_process`
Used in: Petition for Change of Name (Adult or Minor) — Information Sheet

**gap — before:**
```
Unlike every other authority clause in this document, this clause's status is deliberately 'unverified' rather than 'verified' -- a status value not otherwise used anywhere in this corpus, introduced here specifically because this clause could not be checked against the actual statutory text. Direct fetches of Health & Safety Code § 103437 and Code of Civil Procedure § 1277.5 were attempted against leginfo.legislature.ca.gov (returned a Cloudflare 403 to this sandbox -- the same access limitation already recorded elsewhere in this corpus for leginfo generally, see BUILD_STATUS.md's Freshness section and DECISIONS.md), law.onecle.com (404), and several guessed california.public.law URL slugs for both sections (all 404, including the working slug pattern confirmed against a known-good reference section). Instead, this clause's citations and quotes are drawn from the Judicial Council's Invitation to Comment W26-03, 'Civil Practice and Procedure: Name Change and Gender Change Rules and Forms' (courts.ca.gov), an official Judicial Council committee document describing the effect of two already-enacted statutes -- Senate Bill 59 (Stats. 2025, ch. 738) and Assembly Bill 1084 (Stats. 2025, ch. 723) -- both operative July 1, 2026, a date already past as of this clause's checkedDate. That document's own cover page states 'This proposal has not been approved by the Judicial Council ... circulated for comment purposes only,' but that caveat is about the specific rules and forms the committee was proposing to implement the two bills (new form numbers in a NC-200 series, comment period closing January 7, 2026), not about whether the underlying statutes themselves are enacted law -- they already are, independent of whatever forms the Judicial Council eventually adopts. For that reason this clause describes only the statutory confidentiality and no-hearing requirements, not any specific form name or number, and does not claim any particular form has been finally adopted. Typographic quotation marks and apostrophes in the source PDF have been normalized to straight quotes/apostrophes to match this corpus's convention; no wording was otherwise changed. This clause does not cover: Code of Civil Procedure § 1277.5(b)(2)(A)-(C)'s retained order-to-show-cause process for a minor's petition where not all living parents sign; § 1279.5(e)'s sex-offender-registrant bar (already covered by this document's companion clause on hearing standards and denial grounds); or the related but distinct 'recognition of a change in gender and sex identifier' petition track under Health & Safety Code §§ 103430 and 103435, which this document does not address at all.
```
**gap — after:**
```
This clause's citations and quotes are drawn from the Judicial Council's Invitation to Comment W26-03, 'Civil Practice and Procedure: Name Change and Gender Change Rules and Forms' (courts.ca.gov) -- an official Judicial Council committee document describing the effect of two already-enacted statutes, Senate Bill 59 (Stats. 2025, ch. 738) and Assembly Bill 1084 (Stats. 2025, ch. 723), both operative July 1, 2026 -- rather than a direct fetch of Health & Safety Code § 103437 or Code of Civil Procedure § 1277.5 themselves, which this sandbox cannot reach (leginfo.legislature.ca.gov returns a Cloudflare 403; law.onecle.com and california.public.law have no page yet for either section). Re-fetched and confirmed verbatim on 2026-11-19: all three stored quotes match the live PDF exactly. That document's own cover page states 'This proposal has not been approved by the Judicial Council ... circulated for comment purposes only,' but that caveat is about the specific rules and forms the committee was proposing to implement the two bills (new form numbers in a NC-200 series, comment period closing January 7, 2026), not about whether the underlying statutes themselves are enacted law -- they already are, independent of whatever forms the Judicial Council eventually adopts. For that reason this clause describes only the statutory confidentiality and no-hearing requirements, not any specific form name or number, and does not claim any particular form has been finally adopted. Typographic quotation marks and apostrophes in the source PDF have been normalized to straight quotes/apostrophes to match this corpus's convention; no wording was otherwise changed. This clause does not cover: Code of Civil Procedure § 1277.5(b)(2)(A)-(C)'s retained order-to-show-cause process for a minor's petition where not all living parents sign; § 1279.5(e)'s sex-offender-registrant bar (already covered by this document's companion clause on hearing standards and denial grounds); or the related but distinct 'recognition of a change in gender and sex identifier' petition track under Health & Safety Code §§ 103430 and 103435, which this document does not address at all.
```

#### `namechange_minor_petition_and_parental_notice`
Used in: Petition for Change of Name (Adult or Minor) — Information Sheet

**body — before:**
```
When the person whose name is proposed to be changed is under 18 years of age, several minor-specific requirements apply. Under § 1276(c), if a petition for a minor's name change is signed by only one parent, the petition must specify the other parent's address, if known and if that parent is living. Separately, under § 1277(a)(4), if a petition has been filed for a minor by one parent and the other parent, if living, does not join in consenting to it, the petitioner must cause notice of the hearing — or a copy of the order to show cause — to be served on the other parent at least 30 days before the hearing, in the manner used for service of a summons (or, where that cannot reasonably be accomplished, in a manner the court determines is reasonably calculated to give actual notice, which may include publication). Where a guardian, rather than a parent, files the petition on behalf of a minor ward, § 1277(f) separately requires the guardian to serve notice of the hearing on any living parent of the minor by personal service at least 30 days before the hearing, or, if a parent is deceased or cannot be located, to serve notice instead on the child's grandparents, if living.
```
**body — after:**
```
When the person whose name is proposed to be changed is under 18 years of age, several minor-specific requirements apply. Under § 1276(c), if a petition for a minor's name change is signed by only one parent, the petition must specify the other parent's address, if known and if that parent is living. Separately, under § 1277(a)(4), if a petition has been filed for a minor by one parent and the other parent, if living, does not join in consenting to it, the petitioner must cause notice of the hearing — or a copy of the order to show cause — to be served on the other parent at least 30 days before the hearing, in the manner used for service of a summons (or, where that cannot reasonably be accomplished, in a manner the court determines is reasonably calculated to give actual notice, which may include publication). Where a guardian, rather than a parent, files the petition on behalf of a minor ward, § 1277(f) separately requires the guardian to serve notice of the hearing on any living parent of the minor by personal service at least 30 days before the hearing.
```

#### `nda_dtsa_notice`
Used in: Non-Disclosure Agreement

**body — before:**
```
Federal law requires {{companyName}} to give {{employeeName}} this notice: {{employeeName}} cannot be held criminally or civilly liable under federal or state trade secret law for disclosing a trade secret in confidence to a government official or an attorney, solely to report or investigate a suspected violation of law, or in a court filing made under seal. This notice is here because federal law requires it in any agreement governing the use of confidential information — an employer that omits it loses the right to certain enhanced damages and attorney's fees against this recipient in a future trade secret lawsuit, even one unrelated to whistleblowing.
```
**body — after:**
```
Federal law requires {{companyName}} to give {{employeeName}} this notice: {{employeeName}} cannot be held criminally or civilly liable under federal or state trade secret law for disclosing a trade secret in confidence to a government official or an attorney, solely to report or investigate a suspected violation of law, or in a court filing made under seal. This notice is here because federal law requires it in any agreement governing the use of confidential information that is entered into or updated after the Defend Trade Secrets Act's May 11, 2016 enactment date — an employer that omits it loses the right to certain enhanced damages and attorney's fees against this recipient in a future trade secret lawsuit, even one unrelated to whistleblowing.
```

#### `patentassign_present_assignment_language`
Used in: Patent Assignment Agreement

**body — before:**
```
The exact words a patent assignment uses can determine whether it transfers ownership immediately or merely creates an obligation to transfer it later. Federal appellate courts have distinguished contract language promising to assign rights in the future — which courts have read as creating only a future obligation, not an immediate transfer — from language that assigns rights immediately, in the present tense, sometimes called a present assignment. In one closely watched case, a research scientist signed one agreement in which he merely "agree[d] to assign" future inventions to his university, and a separate agreement in which he stated he "will assign and do[es] hereby assign" his rights to a company; a federal appellate court held that only the second agreement's present-tense language actually transferred his rights — automatically, without any further paperwork, the moment the invention came into existence. This agreement is written to use present-tense assignment language for that reason: to transfer {{assignorName}}'s rights in {{patentDescription}} to {{assigneeName}} immediately upon signing, rather than merely promising a future transfer.
```
**body — after:**
```
The exact words a patent assignment uses can determine whether it transfers ownership immediately or merely creates an obligation to transfer it later. Federal appellate courts have distinguished contract language promising to assign rights in the future — which courts have read as creating only a future obligation, not an immediate transfer — from language that assigns rights immediately, in the present tense, sometimes called a present assignment. In one closely watched case, a research scientist signed one agreement in which he merely "agree[d] to assign" future inventions to his university, and a separate agreement in which he stated he "will assign and do[es] hereby assign" his rights to a company; a federal appellate court held that only the second agreement's present-tense language actually transferred his rights — automatically, without any further paperwork, the moment the invention came into existence. This agreement uses present-tense assignment language for that reason, with the aim of transferring {{assignorName}}'s rights in {{patentDescription}} to {{assigneeName}} at signing rather than merely promising a future transfer — though, as with any contract language, how a court reads this specific document in a future dispute is not something this sheet can guarantee.
```

#### `patentlicense_right_to_exclude`
Used in: Patent License Agreement

**body — before:**
```
A common misconception is that owning a patent gives the owner an affirmative legal right to make, use, or sell the patented invention. What federal law actually grants a patent owner is narrower, and in a sense the opposite: the right to exclude other people from making, using, offering for sale, or selling the invention -- not a guarantee that the patent owner is itself free to do those things, which can separately depend on other patents, regulations, or rights that exist independently of {{licensorName}}'s own patent. Understanding a patent as a right to exclude, rather than a right to practice, clarifies what a license under it actually does: it is fundamentally {{licensorName}}'s promise not to exercise that exclusionary right against {{licenseeName}} within the scope this agreement describes, permitting {{licenseeName}} to do what would otherwise infringe -- rather than some independently existing permission that {{licensorName}} is handing over.
```
**body — after:**
```
A common misconception is that owning a patent gives the owner an affirmative legal right to make, use, or sell the patented invention. What federal law actually grants a patent owner is narrower, and in a sense the opposite: the right to exclude other people from making, using, offering for sale, or selling the invention -- not a guarantee that the patent owner is itself free to do those things, which can separately depend on other patents, regulations, or rights that exist independently of {{licensorName}}'s own patent. Understanding a patent as a right to exclude, rather than a right to practice, clarifies what a license under it actually does: courts have accordingly described a patent license as, in effect, {{licensorName}}'s promise not to exercise that exclusionary right against {{licenseeName}} within the scope this agreement describes, permitting {{licenseeName}} to do what would otherwise infringe -- rather than some independently existing permission that {{licensorName}} is handing over.
```

#### `prop_return_deduction_limit`
Used in: Company Property & Equipment Return Acknowledgment

**gap — before:**
```
This is a federal wage-and-hour floor, not a full answer for every situation — many states go further and restrict or ban deductions for unreturned property entirely, or require the employee's written authorization first, regardless of whether minimum wage is affected. This document doesn't catalog those stricter state rules.
```
**gap — after:**
```
This is a federal wage-and-hour floor, not a full answer for every situation — many states go further and restrict or ban deductions for unreturned property entirely, or require the employee's written authorization first, regardless of whether minimum wage is affected. This document doesn't catalog those stricter state rules. The cited case, Stein v. hhgregg, did not itself involve a deduction for unreturned company property — it involved clawing back a sales-commission draw/advance at termination — and is cited here only by analogy, for the “free and clear” / anti-kickback principle under 29 C.F.R. § 531.35 that both situations share, not because its facts match a property-deduction scenario.
```

#### `purchase_liquidated_damages`
Used in: Residential Purchase Agreement

**gap — before:**
```
This is one state's statute, used as real evidence of how one jurisdiction structures a residential-purchase liquidated-damages presumption — not a claim about which state's law governs a specific residential purchase; liquidated-damages caps and formatting requirements vary by state and some states don't have a presumptive-validity statute like this one at all. § 1675 and § 1677 are different, independently-authored sections of the same statutory chapter (Title 4.5, Chapter 2 — Default on Real Property Purchase Contract), not subsections of a single section; the two citations to § 1675 below are subsections of that one section.
```
**gap — after:**
```
This is one state's statute, used as real evidence of how one jurisdiction structures a residential-purchase liquidated-damages presumption — not a claim about which state's law governs a specific residential purchase; liquidated-damages caps and formatting requirements vary by state and some states don't have a presumptive-validity statute like this one at all. § 1675 and § 1677 are different, independently-authored sections of the same statutory chapter (Title 4.5, Chapter 2 — Default on Real Property Purchase Contract), not subsections of a single section; the two citations to § 1675 below are subsections of that one section. If more than one payment is designated as liquidated damages (for example, an increased deposit paid later), § 1678 — not independently cited in this clause, confirmed via a mirror since leginfo returned a Cloudflare block this session — separately requires that each payment after the first be supported by its own § 1677-compliant signed or initialed provision.
```

#### `remains_priority_order`
Used in: Disposition of Remains Instructions

**gap — before:**
```
This is California's statute, used as real evidence of one state's default priority scheme for who has the legal right and duty to control disposition of a decedent's remains — not a claim about which state's law governs a specific person's remains, or that any other state orders priority the same way; both the identity and order of persons on this list vary significantly by state. The statutory text itself names only a "competent surviving spouse" in category (2); it does not say "or registered domestic partner." Whether a registered domestic partner is treated the same as a spouse for this specific list would depend on Family Code § 297.5's general rule equating domestic partners with spouses for most purposes, which has not been independently verified against this specific section as part of this research. This is a single statutory subsection (§ 7100(a)); no additional independent source was found for this.
```
**gap — after:**
```
This is California's statute, used as real evidence of one state's default priority scheme for who has the legal right and duty to control disposition of a decedent's remains — not a claim about which state's law governs a specific person's remains, or that any other state orders priority the same way; both the identity and order of persons on this list vary significantly by state. The statutory text itself names only a "competent surviving spouse" in category (2); it does not say "or registered domestic partner." Whether a registered domestic partner is treated the same as a spouse for this specific list would depend on Family Code § 297.5's general rule equating domestic partners with spouses for most purposes, which has not been independently verified against this specific section as part of this research. A person otherwise first in this order loses that priority — automatically, by operation of § 7100(b) — if that person has been charged with first- or second-degree murder or voluntary manslaughter in connection with the decedent's death and the funeral director or cemetery authority knows of the charge; the right then passes to the next person in line unless the charge is later dropped or results in acquittal. (§ 7100(b)'s text was confirmed via a mirror, not leginfo directly, which returned a Cloudflare block this session.) This is a single statutory subsection (§ 7100(a)); no additional independent source was found for this.
```

#### `smallclaims_judgment_enforcement`
Used in: Small Claims Court — Information Sheet

**gap — before:**
```
Unlike every other authority clause in this document, this clause remains sourced to the Judicial Council of California's statewide self-help website (selfhelp.courts.ca.gov), not to a direct fetch of statutory text, and so stays marked 'unverified'. Enforcement of a small claims judgment is governed by the general Enforcement of Judgments Law (Code Civ. Proc. §§ 680.010 et seq., including the judgment-debtor examination procedure), not by a section within the Small Claims Act's own article; no specific section of that law was fetched for this clause, so none is cited. This clause does not describe the specific enforcement mechanisms available (for example, a wage garnishment, a bank levy, or an abstract of judgment recorded against real property), only the general disclosure obligation and examination procedure described on the fetched self-help page.
```
**gap — after:**
```
This clause is sourced to the Judicial Council of California's statewide self-help website (selfhelp.courts.ca.gov) -- an official agency source, not the underlying statute directly -- re-fetched and confirmed verbatim on 2026-11-19 (all three stored quotes, plus the body's 30-day wait figure, match the live page). Enforcement of a small claims judgment is governed by the general Enforcement of Judgments Law (Code Civ. Proc. §§ 680.010 et seq., including the judgment-debtor examination procedure), not by a section within the Small Claims Act's own article; no specific section of that law is cited here. This clause does not describe the specific enforcement mechanisms available (for example, a wage garnishment, a bank levy, or an abstract of judgment recorded against real property), only the general disclosure obligation and examination procedure described on the fetched self-help page.
```

#### `tod_creditor_medical_recovery`
Used in: Transfer-on-Death Deed

**gap — before:**
```
The Medi-Cal-specific provision confirms that recording this deed does not remove the property from Department of Health Care Services claims, but it does so by cross-reference ("to the extent authorized by law") rather than by spelling out the mechanics of Medi-Cal estate recovery itself — those mechanics live in the Welfare and Institutions Code, outside this Probate Code part, and were not independently traced in this research; that narrower point is disclosed honestly rather than guessed at. The general creditor-liability provisions (personal liability capped at property value received, and lien-holder priority) are separately and directly codified. This is California's statutory scheme specifically; whether transferred property remains reachable by creditors or a state Medicaid-recovery program after a similar deed varies by state and is not assumed to be uniform.
```
**gap — after:**
```
The Medi-Cal-specific provision confirms that recording this deed does not remove the property from Department of Health Care Services claims, but it does so by cross-reference ("to the extent authorized by law") rather than by spelling out the mechanics of Medi-Cal estate recovery itself — those mechanics live in the Welfare and Institutions Code, outside this Probate Code part, and were not independently traced in this research; that narrower point is disclosed honestly rather than guessed at. The general creditor-liability provisions (personal liability capped at property value received, and lien-holder priority) are separately and directly codified. This is California's statutory scheme specifically; whether transferred property remains reachable by creditors or a state Medicaid-recovery program after a similar deed varies by state and is not assumed to be uniform. All four citations below (§§ 5654, 5670, 5672, 5674) are part of Probate Code Part 4 (§§ 5600-5698), which — per this document's companion clause on property scope — is presently scheduled to repeal itself on January 1, 2032 unless a later-enacted statute extends or removes that date.
```

#### `tod_revocability`
Used in: Transfer-on-Death Deed

**gap — before:**
```
This describes California's own statutory rule for revocable TOD deeds specifically, not a general statement about how every deed-like instrument works, and not a claim about which state's law applies to a given transfer — TOD-deed statutes are not uniform across the states that have them. This is a single statutory section (§ 5650); no additional independent source was found for this.
```
**gap — after:**
```
This describes California's own statutory rule for revocable TOD deeds specifically, not a general statement about how every deed-like instrument works, and not a claim about which state's law applies to a given transfer — TOD-deed statutes are not uniform across the states that have them. This is a single statutory section (§ 5650), part of Probate Code Part 4 (§§ 5600-5698), which — per this document's companion clause on property scope — is presently scheduled to repeal itself on January 1, 2032 unless a later-enacted statute extends or removes that date; no additional independent source was found for § 5650 itself.
```

#### `will_omitted_spouse`
Used in: Last Will and Testament

**gap — before:**
```
This is one state's statute, used as real evidence of a genuine, automatic protection — not a claim about which state's law governs a specific will. This default share doesn't apply in several real situations: if the will itself shows the omission was intentional; if the testator provided for the new spouse outside the will (and meant that transfer to replace a provision in it); if the spouse signed a valid waiver of the right to share in the estate; or — a specific anti-abuse rule — if the spouse was a paid care custodian of a testator who was a legally defined "dependent adult" (broadly, someone 65 or older with certain functional or mental limitations, or 18 or older with substantial difficulty managing their own finances or resisting fraud or undue influence because of a mental deficit), the marriage began while the spouse was providing that care (or within 90 days after), and the testator died less than six months after the marriage, unless the spouse can prove by clear and convincing evidence that the marriage wasn't the product of fraud or undue influence. This document doesn't update itself to reflect a marriage after signing — a testator who marries after execution needs a new will or a codicil to actually provide for the new spouse, rather than relying on this default share.
```
**gap — after:**
```
This is one state's statute, used as real evidence of a genuine, automatic protection — not a claim about which state's law governs a specific will. This default share doesn't apply in several real situations: if the will itself shows the omission was intentional; if the testator provided for the new spouse outside the will (and meant that transfer to replace a provision in it); if the spouse signed a valid waiver of the right to share in the estate; or — a specific anti-abuse rule — if the spouse was a paid care custodian of a testator who was a legally defined "dependent adult" (broadly, someone 65 or older with certain functional or mental limitations, or 18 or older with substantial difficulty managing their own finances or resisting fraud or undue influence because of a mental deficit), the marriage began while the spouse was providing that care (or within 90 days after), and the testator died less than six months after the marriage, unless the spouse can prove by clear and convincing evidence that the marriage wasn't the product of fraud or undue influence. This document does not update itself to reflect a marriage after signing; the default share described here applies only unless and until the will or a codicil is changed to address the new spouse.
```

## Recommendation (owner decides; this is a recommendation, not a policy)

Per `MVP_FINISH_VERIFY_SHARPEN.md` item 1.3: the owner reviews the 25
diffs above and either approves them (no rewrite needed — a
retroactive sign-off is logged here and in `DECISIONS.md`, nothing in
git history changes) or flags any that should be reverted or
corrected via a new, properly-trailered patch commit. The 112
citation-URL-only changes in `fd55d72` are lower-risk by construction
(same quote, better source) and this audit's own recommendation is
that they don't need the same line-by-line sign-off, but the owner
may ask to see them too.

Going forward, this audit's recommendation is: **keep the mechanism
exactly as `tools/check_commit_discipline.py` already implements it**
(a `Reviewed-By:` trailer required on every commit to this protected
branch; a `Patch-ID:` trailer additionally required on any commit
that changes an existing clause's `body`, `gap`, or citation quote) —
but resolve the one real gap this audit surfaced: this mechanism was
built to catch an unreviewed *delegated subagent* committing on its
own, and that is exactly what it has kept catching here, because nothing
in this session's own direct work has ever added the trailer to a
commit made directly in conversation with the owner. Two options,
genuinely the owner's call, not decided here:

1. **The owner reviews and the session adds a real `Reviewed-By:`
   value once given.** Mechanically identical to today's check; the
   only change is that a human sign-off actually happens before the
   trailer is written, even for work done in live conversation with
   the owner.
2. **A distinct trailer value for this case** (for example
   `Reviewed-By: owner-conversation` or similar, chosen by the
   owner), asserting "this commit was made directly in a live,
   turn-by-turn conversation with the owner, who could stop or
   redirect it at any point" — a real, different kind of review from
   an unsupervised subagent's commit, not a loophole dressed up to
   look like one. If the owner picks this option, the exact trailer
   text and when it is and isn't appropriate (for example, never for
   a commit a delegated subagent made without the owner present in
   the conversation) should be written down in `DECISIONS.md` before
   use, not improvised per commit.

Whichever the owner picks, `tools/check_commit_discipline.py` and
`.github/workflows/ci.yml`'s `branch-discipline` job need no code
change either way — both already enforce exactly this, correctly;
only the trailer value and who is allowed to write it is a policy
question, not a code gap.
