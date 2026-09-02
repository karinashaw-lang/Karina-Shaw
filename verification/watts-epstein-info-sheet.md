# Family Law, new document: Watts Charges and Epstein Credits — Information Sheet

## Why this document

Confirmed by grep that "Watts charge," "Epstein credit," "In re Marriage
of Watts," and "In re Marriage of Epstein" had zero hits anywhere in the
corpus. Distinct from the existing Marital Settlement Agreement and
Petition for Dissolution of Marriage documents. This document also
deliberately shifts toward case-law-based authority clauses — most recent
corpus additions have been statute-based.

## What this document covers

6 clauses: 2 drafting (declaration, signature/acknowledgment) and 4
authority clauses:

- **`wattsepstein_watts_charge_doctrine`** (*In re Marriage of Watts*, 171
  Cal.App.3d 366 (1985)) — a spouse with exclusive post-separation use of
  a community asset may be required to reimburse the community for its
  reasonable value; discretionary, not automatic.
- **`wattsepstein_epstein_credit_doctrine`** (*In re Marriage of Epstein*,
  24 Cal.3d 76 (1979)) — a spouse who uses separate funds to pay a
  preexisting community debt after separation should generally be
  reimbursed from the community upon dissolution.
- **`wattsepstein_epstein_credit_limits`** (same case, adjoining passage)
  — the exceptions where reimbursement should not be ordered: agreement
  not to reimburse, a true gift, payment not substantially exceeding the
  value of the paying spouse's use, or payment that in reality discharged
  a support obligation.
- **`wattsepstein_statutory_codification`** (Cal. Fam. Code § 2626) — the
  Legislature's express jurisdiction to order reimbursement for debts
  paid after separation but before trial.

## Genuine corrections and findings

- **A significant, honestly disclosed asymmetry**: Family Code § 2626
  codifies reimbursement jurisdiction that lines up with the
  Epstein-credit side of this pair (debts paid after separation), but no
  comparable Family Code provision was found that specifically codifies
  reimbursement for a spouse's exclusive post-separation use of a
  community asset — the Watts-charge side remains purely judicially
  created as far as this research could confirm. Disclosed explicitly
  rather than forcing a false statutory tie for Watts.
- Confirmed the Watts opinion itself distinguishes the two doctrines in
  its own text — the exclusive-use-reimbursement question is not the same
  question as reimbursement for separate funds used to pay community
  debts.
- Confirmed the Epstein reimbursement rule is not automatic — the
  Supreme Court adopted specific, named exceptions (agreement, gift,
  use-value offset, disguised support) in the same passage as the general
  rule.
- Confirmed Epstein's general rule was originally stated by the Court of
  Appeal in *In re Marriage of Smith* (1978) 79 Cal.App.3d 725, and the
  Supreme Court expressly adopted that language as its own holding —
  cited to Epstein (where it became binding Supreme Court authority)
  rather than to Smith directly.

## Honest gap disclosed

The support-obligation exception's own sub-questions (e.g., whether the
spouses separated "by agreement" within the meaning of former Civil Code
§ 5131) are left to the trial court's own determination per the Epstein
opinion, and are not addressed here. How a court values the "reasonable
value of use" for a Watts charge in a particular case is likewise left to
the trial court's factual determination, per Watts itself.

## Method

Fetched *In re Marriage of Watts* and *In re Marriage of Epstein* via two
distinct CourtListener MCP code paths each (`read_document` vs.
`get_endpoint_item` against the `opinions` REST endpoint) — confirmed
character-identical opinion text both times. Fetched Cal. Fam. Code
§ 2626 directly from `leginfo.legislature.ca.gov` twice via curl with
distinct User-Agent strings — confirmed identical apart from expected
per-request session-token noise. All 9 citation quotes programmatically
confirmed as exact substrings of the confirmed text.

## Verification

- Both opinions and the statute fetched twice independently; confirmed
  clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are passages of the same opinion versus the
  standalone statutory section; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  accepted generic drafting-title reuses ("Declaration of Parties and
  Purpose of This Information Sheet," "Signature and Acknowledgment — Not
  a Court Filing") — consistent with the corpus-wide pattern (also used
  by the ATROS document merged earlier this wave).
- Field names (`party1Name`, `party2Name`, `separationDate`,
  `countyOfFiling`, `dateSigned`, `cityState`) independently confirmed to
  match existing corpus convention. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Watts Charges and Epstein Credits — Information Sheet
  (`watts_epstein_info_sheet`), 6 clauses (4 authority + 2 drafting), in
  the Family Law category. No new fields.
- Corpus: 1,925 → 1,931 clauses; 246 → 247 documents. Fourth and final
  document of wave 49.
