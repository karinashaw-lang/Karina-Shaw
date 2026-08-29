# Eleventh document — WARN Act Layoff Notice

## Why this one

Pairs naturally with the existing Termination Letter and Severance Agreement, but
covers a scenario neither of those touch: a mass layoff or plant closing large enough
to trigger a federal advance-notice requirement. This is a real, high-stakes compliance
gap — the penalty for getting it wrong is back pay and benefits for every affected
employee, not a technicality — and it's the kind of document a small or mid-size
company doing its first real layoff is unlikely to know exists at all.

## Research

Fetched 29 U.S.C. §§ 2101, 2102, and 2104 in full from Cornell LII — the definitions,
the notice requirement and its exceptions, and the liability provision, respectively.

## The five clauses

- `warn_coverage` (authority) — states the coverage thresholds (100+ employee employer;
  50+ employee plant closing; 33%-and-50, or 500-employee, mass layoff), citing
  §2101(a)(1)-(3). Gap discloses that state "mini-WARN" laws can have lower thresholds,
  without asserting an unverified specific state figure.
- `warn_notice_requirement` (authority) — the 60-day advance written notice and who
  receives it, citing §2102(a). Gap names the separate state-agency and
  local-government filings this document doesn't itself satisfy.
- `warn_exceptions` (authority) — the three situations allowing less than 60 days'
  notice, citing §2102(b)(1)-(2) and §2102(b)(3) separately. **Real finding surfaced by
  reading past the exceptions employers usually cite (faltering company, unforeseeable
  circumstances):** the natural-disaster exception's own text says "no notice ... shall
  be required," while the very next paragraph's "as much notice as is practicable" duty
  is written to cover the whole exceptions subsection, including that one. The clause
  states both provisions as written and names the tension rather than resolving it.
- `warn_liability` (authority) — the back-pay/benefits exposure and its cap, citing
  §2104(a)(1) and §2104(a)(2)-(4) for the offsets, local-government civil penalty, and
  good-faith reduction.
- `warn_ack` (drafting) — acknowledgment of receipt (this document is a one-way notice,
  not a bilateral agreement, so it follows the Termination Letter's receipt-acknowledgment
  pattern rather than a mutual-agreement signature block).

## Real defect caught during drafting (before shipping)

Two of `warn_coverage`'s citation quotes — the `“employer”`, `“plant closing”`, and
`“mass layoff”` term definitions — were first transcribed with straight double quotes
(`"employer"`) instead of the source's actual curly quotation marks (`“employer”`).
The independent re-verification script (string-match against a fresh, separate fetch)
caught this immediately as two `MISSING` results — a small but real fidelity defect,
caught by the same discipline that's caught punctuation drift before in this project.
Fixed by copying the exact curly-quote characters from the source, then re-ran the
verification: all 11 quote fragments across the four authority clauses now match
word-for-word.

## Verification

- All 11 quote fragments (4 clauses, 6 citations) re-verified against a fresh, separate
  fetch of §§2101, 2102, and 2104 — programmatic substring match, not by eye.
- Headless Playwright walkthrough: 11 documents in the picker, "Ending employment"
  category filter correctly includes the new document, all 4 authority badges expand,
  zero leftover `{{placeholder}}` text (checked with the corrected script that opens
  badges and reads `textContent`), zero console errors.

## Net changes

- `data/clauses.json`: +5 clauses (`warn_coverage`, `warn_notice_requirement`,
  `warn_exceptions`, `warn_liability`, `warn_ack`), corpus now 49 clauses.
- `data/documents.json`: +1 document (`warn_notice`), corpus now 11 documents.
