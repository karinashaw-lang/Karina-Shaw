# The MVP spec against what exists

The MVP Product Spec (v1.0, August 2026) is the governing document. It asks for 20 templates in
four categories. This is what the corpus can assemble today, mapped onto that list. Counted from
`templates/`, not asserted.

## Business Formation — 4 of 5

| Spec template | Status |
|---|---|
| Delaware LLC Operating Agreement (single-member) | **have** — Governing document, 51 clauses, conditional on entity/state |
| Delaware LLC Operating Agreement (multi-member) | **have** — same document, member count is a wizard answer |
| California LLC Operating Agreement | **have** — same document, `opState=CA` adds the California overlays |
| Texas LLC Operating Agreement | **partial** — assembles, but only 10 Texas-specific clauses exist against 115 for California |
| Founder IP Assignment Agreement | **have** — 9 clauses |

## Employment — 4 of 5

| Spec template | Status |
|---|---|
| Independent Contractor Agreement | **have** — 15 clauses |
| Employment Offer Letter | **have** — Employment Agreement, 27 clauses |
| NDA (mutual) | **have** — 14 clauses |
| NDA (one-way) | **missing** — the corpus models the mutual form only; one-way is not a filter on it, the obligations run differently |
| Consulting Agreement | **partial** — the Contractor Agreement is close but not the same instrument |

## Sales & Business — 2 of 5

| Spec template | Status |
|---|---|
| Simple Service Agreement | **partial** — the MSA is 61 clauses and is not "simple"; a cut-down form does not exist |
| Statement of Work | **have** — 14 clauses |
| Sales Proposal | **have** (2026-08-20) — 14 clauses, reuses existing commercial questions |
| Invoice | **missing** |
| Letter of Intent (business purchase) | **missing** |

## Real Estate — 3 of 5

| Spec template | Status |
|---|---|
| Residential Lease | **have** (2026-08-20) — 20 clauses, fixed-term/month-to-month/pets/utilities variants |
| Month-to-Month Rental | **have** (2026-08-20) — a variant of the Residential Lease, chosen by the term answer |
| Sublease | **have** (2026-08-20) — 10 clauses, subordinate to the original lease by design |
| Roommate Agreement | **missing** |
| Lease Termination Notice | **missing** |

Nothing in the corpus touches residential tenancy. This is not a gap to fill in with variants of
existing clauses — it is a different body of law, with its own habitability, deposit, notice and
rent-control rules that vary by city as much as by state.

## What the corpus has that the spec does not ask for

| Document | Clauses |
|---|---|
| Master Services Agreement | 61 |
| Employee Handbook | 34 |
| California Employer Compliance Set | 37 |
| Compliance Calendar | 20 |
| Employment Policy Set | 20 |
| Data Processing Addendum | 16 |
| Charter filing | 14 |
| Initial Consent | 11 |
| Founder Vesting | 6 |
| Foreign Qualification | 5 |
| 83(b) Election | 3 |
| Schedules and Exhibits | 3 |

That is the bulk of the corpus, and most of the California depth — Prop 65, PAGA, meal and rest,
local ordinances, pay data reporting — lives in the compliance sets, which the spec's 20 templates
have no place for.

## The decision this forces

The corpus is a California compliance library. The MVP spec is a national template editor. They
are not the same product and the second does not need most of the first.

Three options, and this is a business call rather than a technical one:

1. **Follow the spec.** Build the 11 missing templates, including a residential tenancy body of
   law that does not exist here. Most of the California work becomes unused.
2. **Narrow the spec to what exists.** Ship formation, employment and commercial for California,
   drop real estate and the generic national forms. Fewer templates, much deeper.
3. **Keep both.** The templates the spec names are the front door; the California compliance
   material stays as the thing that makes the California templates worth more than a free PDF.

Option 3 is the only one that does not throw away work, but it is also the largest build.
