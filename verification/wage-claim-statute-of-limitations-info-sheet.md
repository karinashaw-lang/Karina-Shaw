# Ending employment, new document: Wage-and-Hour Claim Filing Deadlines — Information Sheet

## Why this document

Confirmed by grep that no dedicated limitations-period document
existed. Read the existing Waiting-Time Penalty Demand and DLSE Wage
Claim documents in full — found both already contain partial
limitations-period content with explicit, self-flagged gaps: the
waiting-time-penalty document's `waitingtime_statute_of_limitations`
clause quotes Labor Code § 203(b) but discloses no case law had been
verified on how § 203 penalties relate to the underlying wage claim's
period; the DLSE document's `dlsewageclaim_wage_claim_limitations_periods`
clause quotes CCP §§ 337/338/339 generally but discloses it couldn't
verify via case law which claim types fall into which category, and
doesn't address CCP § 340 at all. Rather than duplicate, this document
fills exactly those disclosed gaps with newly verified case law.
Fourth and last document of wave 70.

## What this document covers

6 clauses: 2 drafting (declaration, closing/signature) and 4
authority clauses, citing Cal. Code Civ. Proc. §§ 338(a), 337(a),
340(a), Cal. Lab. Code §§ 203(b), 98(a), *Murphy v. Kenneth Cole
Productions, Inc.* (2007) 40 Cal.4th 1094, and *Pineda v. Bank of
America, N.A.* (2010) 50 Cal.4th 1389:

- **`wagelimitations_338a_statutory_wage_claims`** (§ 338(a) +
  *Murphy*) — the 3-year deadline for a statutory wage claim,
  confirmed for both unpaid final wages and meal/rest period premium
  pay (which *Murphy* held is a "wage or premium pay," not a
  "penalty").
- **`wagelimitations_337_written_contract_wages`** (§ 337(a)) — the
  4-year deadline for a claim founded on a written contract, with an
  honest disclosure that no case law was found confirming when a wage
  claim is actually treated as "founded upon" a written employment
  agreement for this purpose.
- **`wagelimitations_203_penalty_tracks_wage_claim`** (§ 340(a),
  § 203(b) + *Pineda*) — **the central finding**: resolves the exact
  nuance flagged as unverified in the existing waiting-time-penalty
  clause — § 203(b) is the "different limitation" § 340(a) allows, so
  a waiting-time-penalty claim tracks the underlying wage claim's own
  deadline, confirmed by *Pineda* even where the penalty is sued for
  alone.
- **`wagelimitations_dlse_no_separate_administrative_period`**
  (§ 98(a)) — an absence-based finding: the statute authorizing the
  Labor Commissioner's hearing process states no separate
  administrative filing deadline of its own.

## Genuine corrections and findings

- **The central finding**: confirmed via *Pineda v. Bank of America*
  (California Supreme Court) that Labor Code § 203(b) is precisely the
  statutory "different limitation" that CCP § 340(a) contemplates,
  so waiting-time-penalty claims are governed by the underlying wage
  claim's own deadline (typically 3 years) rather than the general
  1-year penalty period — and that this holds true even when the
  penalty alone is sued for, without a companion unpaid-wages claim.
  This directly resolves the open gap the corpus's own existing
  waiting-time-penalty clause had flagged.
- Confirmed via *Murphy v. Kenneth Cole Productions* that meal/rest
  period premium pay is a "wage or premium pay" under the 3-year
  period, not a "penalty" under the shorter period — a genuinely
  easy-to-conflate distinction, resolved by directly-read Supreme
  Court authority.
- Confirmed Labor Code § 98's hearing-authorization text states no
  separate administrative filing deadline — stated as a disclosed,
  non-exhaustive absence finding (text-only review, not a full DLSE
  manual review) rather than an overclaimed negative.
- Honestly declined to resolve when a wage claim is treated as
  "founded upon" a written contract for CCP § 337's 4-year period —
  flagged as unresolved by any case law found, rather than assumed.

## Honest gap disclosed

No case law was found confirming when a wage claim triggers the
4-year written-contract period as opposed to the 3-year statutory
period, even where a written employment agreement exists — this
depends on how the claim is pled and the agreement's terms, and is
explicitly left open. The DLSE administrative-deadline finding was
verified only against Labor Code § 98's text, not the DLSE's internal
Policies and Procedures manual or every other Labor Code section
referencing the Labor Commissioner's process.

## Method

Fetched Cal. Code Civ. Proc. §§ 337, 338, 340 and Cal. Lab. Code §§ 98,
203 from `leginfo.legislature.ca.gov` via curl (through the sandboxed
proxy), each section fetched twice with distinct User-Agent strings,
confirmed byte-identical after whitespace normalization. Read and
verified *Murphy v. Kenneth Cole Productions* and *Pineda v. Bank of
America* directly via CourtListener. All 6 citation quotes across the
4 authority clauses programmatically confirmed as exact substrings/
quotes of the confirmed sources.

## Verification

- All five statutory sections fetched twice independently with
  distinct User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — both `{{` occurrences
  in the delivered file confirmed safely inside `body` fields only.
- Checked source-independence disclosure logic — § 340(a), § 203(b),
  and *Pineda* correctly disclosed as independent of one another (two
  separate statutes in different codes plus a case construing both);
  § 338(a) and *Murphy* correctly disclosed as confirming the 3-year
  period for two distinct categories of compensation, not repeating
  one holding; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `employeeName`, `terminationDate`,
  `dateSigned`, `cityState`) independently confirmed to match existing
  corpus field definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: Wage-and-Hour Claim Filing Deadlines — Information
  Sheet (`wage_claim_statute_of_limitations_info_sheet`), 6 clauses
  (4 authority + 2 drafting), in the Ending employment category. No
  new fields.
- Corpus: 2,541 → 2,547 clauses; 330 → 331 documents. Fourth and last
  document of wave 70.
- **Wave 70 complete**: 2,529 → 2,547 clauses (18 new); 328 → 331
  documents (4 new), across Confidentiality & IP (CIPA), During
  employment (Political Activity Protection), Hiring (Mandatory
  Arbitration Restriction), and Ending employment (Wage Claim
  Statute of Limitations) — the standard "1×4" alternation pattern.
