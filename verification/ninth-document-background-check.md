# Ninth document — Background Check Disclosure & Authorization

## Why this one

Every document so far is employment-relationship content (handbook, offer, IP, contractor
status, termination, confidentiality, noncompete, severance). A background-check
disclosure and authorization form is a different kind of document — a compliance form
tied to a specific federal consumer-protection statute (the Fair Credit Reporting Act)
rather than general employment or contract law — and it's one of the most commonly
gotten-wrong HR documents in practice: the stand-alone-disclosure requirement below is a
real, frequently-litigated trap that generic form generators routinely miss by bundling
a liability waiver into the same document.

## Research

Fetched 15 U.S.C. § 1681b in full (not just the employment-purposes subsection) and 15
U.S.C. § 1681m in full, both from Cornell LII, fresh. Found and confirmed via CourtListener:
*Sarmad Syed v. M-I, LLC*, 853 F.3d 492 (9th Cir. 2017) — a case of first impression in
the federal courts of appeals holding that combining a liability waiver into the FCRA
disclosure document is itself a statutory violation, and a *willful* one, because the
statute requires the disclosure to appear in a document that "consists solely" of the
disclosure.

## The four clauses

- `bgc_disclosure` (authority) — the stand-alone disclosure statement itself, citing
  15 U.S.C. § 1681b(b)(2)(A)(i) and *Syed*. Gap discloses the willfulness consequence and
  that state law adds its own requirements on top of this federal floor (this document
  doesn't catalog those, consistent with the "general, not state-specific" policy).
- `bgc_authorization` (authority) — the written authorization, citing § 1681b(b)(2)(A)(ii)
  and the same *Syed* opinion (a different holding from it — the 1998 amendment allowing
  authorization on the same document as the disclosure — giving this clause its own
  independent second source rather than reusing the exact same quote as the first clause).
- `bgc_adverse_action` (authority) — the pre-adverse-action requirement (copy of the
  report + rights description, before the decision is final), citing § 1681b(b)(3)(A) and
  § 1681m(a). Gap discloses that the statute doesn't fix a waiting-period length, and that
  a second, later, different notice applies once a final decision is actually made — a
  requirement this document doesn't cover, named rather than left implicit.
- `bgc_ack` (drafting) — signature block, same pattern as every other document's ack
  clause.

## Item-8 check (informing, not advising)

All three authority clauses state what the law requires and what happens if it isn't
followed — none tell the specific reader whether to run a background check, what to do
if one comes back negative, or how to respond to a candidate. The adverse-action clause
in particular was written to state the requirement and its trigger ("if this report
leads to a negative decision") without suggesting how to decide.

## Verification

- Every statutory quote re-verified against a **second, independent fresh fetch** of
  15 U.S.C. § 1681b and § 1681m (separate from the fetch used while drafting), diffed
  programmatically rather than by eye.
- Both *Syed* quotes re-verified via `search_document` against the opinion text
  independently, word for word — no discrepancies.
- Headless Playwright walkthrough: 9 documents now show in the picker, the "Hiring"
  category filter correctly includes the new document, all 3 authority-clause badges
  expand with citations, zero leftover `{{placeholder}}` text, zero console errors.
- Print flow exercised via the actual print button (not `emulateMedia` alone, per the
  Phase 12 methodology correction) — no errors.

## Net changes

- `data/clauses.json`: +4 clauses (`bgc_disclosure`, `bgc_authorization`,
  `bgc_adverse_action`, `bgc_ack`), corpus now 40 clauses.
- `data/documents.json`: +1 document (`background_check`), corpus now 9 documents.
