# The Template Details spec against the corpus

Counted from `templates/`, not asserted. 237 clauses, 17 documents, all jurisdiction-neutral.

## The shared clause library — 17 of 18 already exist

The spec wants 18 blocks draggable into **any** template. Almost all of them are already written,
just attached to particular documents:

| Block | In the corpus as |
|---|---|
| Confidentiality | `msa_confidentiality`, `nda_definition`, `ic_confidentiality` |
| Intellectual Property | `ipa_assign`, `emp_ip`, `ic_ip` |
| Non-Solicitation | `msa_nonsolicit`, `nda_nonsolicit`, `ea_nonsolicit` |
| Indemnification | `gov_indemnify`, `charter_charter_indemnify` |
| Limitation of Liability | `msa_liability_cap` |
| Force Majeure | `msa_force_majeure` |
| Dispute Resolution | `msa_dispute`, `gov_dispute`, `emp_arbitration` |
| Severability | `gov_sever` |
| Entire Agreement | `msa_entire`, `gov_entire` |
| Assignment | `msa_assignment` |
| Waiver | `gov_waiver` |
| Notice | `msa_notices`, `gov_notices` |
| Governing Law | `msa_govlaw`, `nda_govlaw`, `gov_govlaw` |
| Amendment | `gov_amend` |
| Termination for Convenience | `msa_term_convenience` |
| Termination for Cause | `msa_term_cause` |
| Return of Property | `nda_return`, `ea_return_property` |
| **Non-Compete** | **nothing** — the only gap |

Non-Compete is absent for a reason worth knowing rather than just filling: the corpus had a clause
saying non-competes are void, which is the opposite of a non-compete covenant, and it went with the
California material. Writing one is a real drafting decision, not a copy job — enforceability
varies more by state than almost anything else on this list, and the spec calls for generic
templates with no jurisdiction warnings.

## The architectural problem

Every clause in the corpus carries a `doc` field: it belongs to exactly one document.
`msa_confidentiality` is part of the MSA and nothing else. The spec wants one Confidentiality block
usable in all 20 templates.

That is a schema change, not a content change. Three ways to do it:

1. **Promote to a shared pool.** Add a document id like `_shared`, move the 17 blocks there, and let
   any template draw from it. Cleanest, and it makes the duplicates visible — there are three
   separate governing-law clauses today because each document got its own.
2. **Allow `doc` to be a list.** Least disruptive to the existing data, worst for the validator,
   which currently proves mutual exclusivity per document.
3. **Leave it.** Each template keeps its own copy. Simple, and it guarantees the copies drift.

Option 1 is the right one and the duplicates are the reason: the corpus already has the same clause
written three times, and nothing keeps those versions in agreement.

## The 20 templates

**5 have** — LLC Operating Agreement (45 sections), Independent Contractor (11), Employment Offer
Letter (19), NDA (14), Statement of Work (13).

**3 partial** — Founder Agreement (vesting and IP assignment exist as separate documents and would
need merging), Consulting Agreement (the contractor agreement is close but is a different
instrument), Service Agreement (the MSA has 51 sections; the spec asks for 13).

**12 missing** — Partnership Agreement, Business Plan, Sales Proposal, Invoice, Residential Lease,
Rental Application, Sublease, Roommate Agreement, Loan Agreement, Promissory Note, General
Contract, Letter of Agreement.

Three of those are not contracts at all and need different machinery:

- **Business Plan** is a narrative document with financial projections.
- **Rental Application** is a data-collection form, and it asks for a Social Security number and
  driver's licence number — that is regulated personal data with storage and retention
  consequences, and it is the only template here that collects rather than produces.
- **Invoice** needs arithmetic the engine does not have: line item amount = quantity × rate,
  subtotal, tax, total. The Complete Product Spec calls this "calculated fields" and the corpus
  has no concept of one.

## What the MSA problem really is

The spec's Service Agreement has 13 sections. The corpus MSA has 51. It is not too long by
accident — it was written as an enterprise agreement with security, data processing, insurance and
audit provisions. Cutting it to 13 is a drafting exercise, and the 38 sections dropped are not
waste: they are the difference between a freelancer's service agreement and a vendor contract a
procurement team would sign.

Worth deciding deliberately rather than by truncation.
