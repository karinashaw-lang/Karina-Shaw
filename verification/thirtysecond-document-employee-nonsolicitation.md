# Thirty-second document — Employee Non-Solicitation Agreement

## Why this one

The last of the three gaps named when the corpus reached 29 documents. Distinct from
the existing Non-Compete Agreement (which restricts a former employee from working for
a competitor) and distinct from a customer non-solicitation clause — this restricts
recruiting a former employer's *other employees*, and whether that specific kind of
restriction can be enforced at all is a real, live, unresolved question in at least one
state, not a settled rule either way.

## Research

Fetched *Loral Corp. v. Moyes*, 174 Cal. App. 3d 268 (1985) and *AMN Healthcare, Inc.
v. Aya Healthcare Services, Inc.*, 28 Cal. App. 5th 923 (2018) fresh from CourtListener,
pulling the raw `html_lawbox` opinion text directly via `call_endpoint` rather than the
search tool's snippet text — the snippet text for AMN Healthcare returns HTML entities
(`&#x27;`, `&quot;`) undecoded, and decoding those correctly (as straight quotes, not
curly ones) matters enough for word-for-word accuracy that going to the raw opinion
text directly was safer than manually decoding entities.

Loral upheld a covenant restraining a former executive from "raiding" his former
employer's employees, reasoning it only slightly restrained trade. AMN Healthcare, 33
years later, applying the intervening California Supreme Court decision in *Edwards v.
Arthur Andersen LLP*, 44 Cal. 4th 937 (2008), expressly said it doubted Loral's
continuing validity and held a similar restriction void as applied to individual
defendants whose own profession was recruiting other people's employees — while noting
its decision didn't rest on that doubt alone, since the facts were also distinguishable
from Loral's. This is a real split, not a resolved question, and the newer case's own
language doubting the older one is worth quoting directly rather than just noting two
different outcomes and letting the reader infer a trend.

Also pulled AMN Healthcare's discussion of *The Retirement Group v. Galante*, 176 Cal.
App. 4th 1226 (2009), which distinguishes a *customer* non-solicitation clause (which a
California court won't specifically enforce, though it can still enjoin trade-secret
misuse) from the *employee* non-solicitation question this document is actually about —
a distinction worth stating explicitly since the two are easy to conflate.

## The four clauses

- `nonsolicit_scope` (drafting) — the actual restriction text, reusing the existing
  `restrictionPeriod` field id from the Non-Compete Agreement document.
- `nonsolicit_employee_split` (authority) — states the Loral/AMN Healthcare split
  directly, quoting Loral's holding, and both of AMN Healthcare's key statements (its
  doubt about Loral's continuing viability, and its independent conclusion that the
  restriction before it was void). Gap makes explicit this is one state's real,
  citable split as evidence of genuine uncertainty — not a claim about which state's
  law governs a specific agreement, or a prediction about how a court would rule on
  different facts than either case actually presented.
- `nonsolicit_customer_distinction` (authority) — distinguishes this document's
  subject (employee non-solicitation) from a customer non-solicitation clause, quoting
  AMN Healthcare's discussion of Galante. Gap cross-references the existing
  Non-Disclosure Agreement document for trade-secret obligations, rather than
  restating them.
- `nonsolicit_ack` (drafting) — signature.

## A quoting note

The Galante-via-AMN quote is trimmed to start at "specifically enforcing" rather than
including AMN's lead-in ("barred a court from"), because including the lead-in put the
opinion's own embedded quotation mark immediately adjacent to this document's badge
template's own quotation styling — accurate, but visually read as a doubled quote mark.
Trimming to start inside the already-quoted material avoids that without changing what
the citation actually establishes.

## Verification

- All three Loral/AMN quotes and the Galante-via-AMN quote checked against the raw
  `html_lawbox`/opinion text pulled via `call_endpoint`, not the search tool's snippet
  rendering.
- Every `gap` and `title` field grepped for `{{` before the regression run — clean.
- Headless Playwright walkthrough: badge count matches (2), zero leftover
  placeholders, zero console errors. Full 32-document regression also run clean.

## Net changes

- `data/clauses.json`: +4 clauses (`nonsolicit_scope`, `nonsolicit_employee_split`,
  `nonsolicit_customer_distinction`, `nonsolicit_ack`), corpus now 112 clauses.
- `data/documents.json`: +1 document (`employee_nonsolicit`), corpus now 32 documents.

## Status

This closes out all three documents named in the "fill in all gaps" request
(Pregnant Workers Fairness Act Accommodation, Whistleblower Policy, Employee
Non-Solicitation Agreement) and completes the employment-document phase as scoped —
32 documents, 112 clauses. Next: broaden beyond employment into other document
categories, per the earlier agreed plan.
