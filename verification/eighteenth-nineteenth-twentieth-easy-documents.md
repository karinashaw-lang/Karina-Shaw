# Documents 18-20 — three more lightweight documents

## Documents

- **Employment Verification Letter** (`employment_verification`, 2 clauses):
  `verification_statement` and `verification_signature`, both drafting. The classic
  "proof of employment" letter landlords, lenders, and background-check companies ask
  for — genuinely high real-world utility, zero legal claims (a factual confirmation
  letter doesn't assert anything checkable against a source).
- **Timesheet / Time Records** (`timesheet`, 3 clauses): `timesheet_entry` (drafting —
  a plain weekly hours grid), the existing **`timekeeping`** clause reused as-is, and
  `timesheet_ack` (drafting — employee certifies the hours are accurate).
- **Overtime Authorization Form** (`overtime_authorization`, 3 clauses):
  `overtime_request` (drafting), the existing **`offer_overtime`** clause reused as-is,
  and `overtime_approval` (drafting — sign-off block).

Zero new legal research for two of the three documents — `timekeeping` and
`offer_overtime` were both already fully document-agnostic in their body text (no
reference to "this offer" or any other document-specific framing), so they dropped
into new contexts cleanly. Checked both rendered screenshots directly to confirm — no
repeat of the `at_will` cross-document mistake found and fixed in the previous batch.

## Verification

- Headless Playwright walkthrough of all 20 documents (corrected script): zero console
  errors, zero leftover placeholders.
- Screenshots of `timesheet` and `overtime_authorization` confirm both reused clauses
  render their full citation sets correctly, and the new drafting clauses (weekly hours
  grid, request/approval blocks) format cleanly.

## Net changes

- `data/clauses.json`: +6 new clauses, all drafting, corpus now 71 clauses.
- `data/documents.json`: +3 documents (`employment_verification`, `timesheet`,
  `overtime_authorization`), corpus now 20 documents.
