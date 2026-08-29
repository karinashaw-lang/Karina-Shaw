# Documents 21-23 — PTO request, expense reimbursement, salary change

## Documents

- **PTO / Vacation Request Form** (`pto_request`, 2 clauses): `pto_request_details`
  (drafting) plus the existing **`overtime_approval`** clause reused as its
  approval block — a generic "approved by / signature / date" clause that turned out
  to fit this document exactly as written.
- **Business Expense Reimbursement Form** (`expense_reimbursement`, 2 clauses):
  `expense_details` (an itemized list) and `expense_certification` (employee
  certification plus manager approval combined into one clause). Both drafting.
- **Salary Change / Promotion Notice** (`salary_change`, 2 clauses):
  `salary_change_details` and `salary_change_ack`, both drafting. Introduces one new
  field id, `effectiveDate`, alongside reused `jobTitle` and `salary` field ids from
  the Offer Letter (re-labeled for this context: "New job title," "New base salary").

All six new clauses are `drafting` — none of these forms make a checkable legal claim.

## A small architecture cleanup caught while writing this batch

The first draft of `pto_request_details`'s approval block was written as a new clause,
`pto_approval`, with body text identical to the existing `overtime_approval` clause —
same three lines, word for word. Caught immediately on a second look before ever
committing it: rather than ship a near-duplicate clause, deleted `pto_approval` and
pointed `pto_request`'s `clauseOrder` at the existing `overtime_approval` clause
instead. `overtime_approval` is now reused across two documents. This is the same
clause-pool discipline the project already applies deliberately elsewhere (`at_will`,
`work_auth`, `timekeeping`, `offer_overtime`) — catching an accidental copy before it
became a second copy to maintain, rather than after.

## Verification

- Headless Playwright walkthrough of all 23 documents (corrected script): zero console
  errors, zero leftover placeholders.

## Net changes

- `data/clauses.json`: +5 new clauses, all drafting, corpus now 76 clauses.
- `data/documents.json`: +3 documents (`pto_request`, `expense_reimbursement`,
  `salary_change`), corpus now 23 documents.
