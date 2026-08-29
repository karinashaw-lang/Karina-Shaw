# Tenth document — Employment Arbitration Agreement

## Why this one

A mandatory pre-dispute arbitration agreement is one of the most commonly issued —
and most commonly mis-drafted — employment documents. The specific, current gap most
generic form generators miss: the Ending Forced Arbitration of Sexual Assault and
Sexual Harassment Act of 2021, which took effect in 2022 and gives the person raising
a sexual-harassment or sexual-assault claim the unilateral election to void a
pre-dispute arbitration clause as to that claim — regardless of what the agreement
says. A boilerplate arbitration clause that doesn't disclose this isn't just incomplete,
it states the law incorrectly for exactly the claim type this now covers.

## Research

Fetched 9 U.S.C. § 2 (the FAA's core validity provision) and 9 U.S.C. §§ 401–402 (the
2022 carve-out, added as FAA chapter 4) directly from Cornell LII. Confirmed via
CourtListener: *Epic Systems Corp. v. Lewis*, 584 U.S. 497 (2018) (individualized
arbitration/class-waiver provisions must be enforced), and *EEOC v. Waffle House, Inc.*,
534 U.S. 279 (2002) (a private arbitration agreement doesn't bind a government agency
that wasn't a party to it).

## The four clauses

- `arb_agreement` (authority) — states the individual, binding arbitration requirement
  and class/collective-action waiver, citing 9 U.S.C. § 2 and *Epic Systems*.
- `arb_sexual_harassment_carveout` (authority) — the 2022 carve-out itself, citing both
  the definitions section (9 U.S.C. § 401) and the operative election provision
  (§ 402). Gap discloses that the carve-out is narrow — it reaches the sexual-assault
  or sexual-harassment dispute specifically, and doesn't resolve how a mixed case with
  other claims attached gets split.
- `arb_agency_rights` (authority) — states plainly that this agreement doesn't bind or
  limit a government agency's own enforcement authority (EEOC, NLRB), citing
  *Waffle House* and the EEOC's own independent statutory authority to sue
  (42 U.S.C. § 2000e-5(f)(1)).
- `arb_ack` (drafting) — signature block.

## Item-8 check

All three authority clauses state what the law requires or permits without telling the
specific reader whether to sign, whether to arbitrate, or how to respond to a dispute —
consistent with every other authority clause in the corpus.

## Verification

- Every statutory quote (9 U.S.C. §§ 2, 401, 402; 42 U.S.C. § 2000e-5(f)(1))
  re-verified programmatically against a second, independent fresh fetch — diffed by
  substring match, not by eye.
- Both case quotes (*Epic Systems*, *Waffle House*) re-verified independently via a
  second `search_document` call against the opinion text, word for word. The first
  *Waffle House* re-check attempt returned zero matches on a query containing an
  apostrophe — the same known `search_document` false-negative pattern documented
  earlier in this project (curly vs. straight apostrophe) — confirmed instead with an
  apostrophe-free substring from the same sentence.
- **Real defect caught and fixed before shipping:** the first draft of
  `arb_agency_rights`'s gap text used `{{employeeName}}` placeholder syntax, which gap
  text never substitutes — the same recurring bug class caught during Phase 18's
  `nda_definition` edit. This time the automated regression script's leftover-placeholder
  check missed it too, because the script read `innerText` on `#output-clauses` without
  first opening the `<details class="badge">` elements — closed `<details>` content is
  excluded from `innerText`, so gap text inside a collapsed badge was never actually
  scanned. Caught visually in a full-page screenshot instead. **Fixed both**: the gap
  text (now reads "the employee" in plain language), and the regression script itself
  (`drive-phase18-full.mjs`), which now force-opens every badge and reads `textContent`
  via `page.evaluate()` instead of `innerText`, so this check is reliable regardless of
  DOM open/closed state. Reran the corrected script across all 10 documents — clean.

## Net changes

- `data/clauses.json`: +4 clauses (`arb_agreement`, `arb_sexual_harassment_carveout`,
  `arb_agency_rights`, `arb_ack`), corpus now 44 clauses.
- `data/documents.json`: +1 document (`arbitration`), corpus now 10 documents.
