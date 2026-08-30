# Twenty-ninth document — Exempt / Non-Exempt Classification Notice

## Why this one

Misclassification is one of the most litigated wage-and-hour issues in practice, and
it's a genuinely distinct gap in the corpus — nothing existing states the actual test
for whether a position is exempt at all. The real-world failure mode this document
targets directly: treating "exempt" as a title an employer can simply assign, when it's
actually a three-part legal test (salary basis, minimum salary level, and a specific
duties test) that a job title alone never satisfies.

## Research

Fetched 29 U.S.C. §213(a)(1) (the white-collar exemption categories), 29 U.S.C.
§207(a)(1) (the underlying overtime default, already used elsewhere in the corpus but
re-verified fresh here too), and the two operative DOL regulations: 29 C.F.R. §541.100
(the executive exemption's duties test, used as the one worked example) and 29 C.F.R.
§541.600 (the minimum salary amount required for any white-collar exemption).

## The four clauses

- `classification_default_rule` (authority) — states the FLSA overtime default,
  citing §207(a)(1). Gap discloses this is a federal floor only — states can require
  more.
- `classification_exemption_test` (authority) — the three-part test (salary basis,
  salary level, duties test), using the executive exemption's actual duties test as one
  concrete, fully-quoted example, citing §213(a)(1), §541.100, and §541.600. Gap is
  explicit that this describes one of five separate exemption categories (executive),
  and that satisfying the salary requirements or the duties test alone — without the
  other — never qualifies a position as exempt.
- `classification_decision` (drafting) — the actual classification checkbox and salary/
  hourly-rate fields.
- `classification_ack` (drafting) — signature.

Deliberately scoped: rather than build out all five white-collar exemption duties
tests (executive, administrative, professional, computer, outside sales) in one
document, this uses the executive exemption as a real, fully-sourced worked example and
discloses plainly that the other four have their own separate tests this document
doesn't state — an honest scope boundary rather than either an incomplete claim of full
coverage or an unnecessarily bloated first pass.

## Verification

- All 7 quote fragments (§207(a)(1), §213(a)(1), §541.100, §541.600) re-verified
  against a second, independent fresh fetch — programmatic substring match.
- Every `gap` and `title` field checked for `{{` before the regression run — clean.
- Headless Playwright walkthrough of all 29 documents: zero console errors, zero
  leftover placeholders.
- Screenshot confirms both badges expand with their full citation sets and the
  classification checkbox/fields render cleanly.

## Net changes

- `data/clauses.json`: +4 clauses (`classification_default_rule`,
  `classification_exemption_test`, `classification_decision`, `classification_ack`),
  corpus now 97 clauses.
- `data/documents.json`: +1 document (`flsa_classification`), corpus now 29 documents.
