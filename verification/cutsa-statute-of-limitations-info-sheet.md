# Confidentiality & IP, new document: CUTSA Statute of Limitations and Continuing Misappropriation — Information Sheet

Part of wave 158 (Confidentiality & IP category; wave 158 covers the
same four categories as waves 146/148/150/152/154/156: Confidentiality &
IP, Ending employment, Business Formation, Real Estate).

## Why this document

The task brief listed the Confidentiality & IP category's recent
additions (customer lists under CUTSA, joint authorship, DMCA § 512(c),
first sale, copyright preemption, inevitable disclosure) and several
suggested topics. Reading `data/documents.json`'s full Confidentiality &
IP title list (82 documents) showed that three of the suggested topics
were already covered as whole documents (copyright termination of
transfers, the Comprehensive Computer Data Access and Fraud Act, and the
Lab. Code §§ 2870-2872 invention-assignment limits), and a fourth
(California state trademark registration) exists as a document in
another category. Grepped the whole corpus (both data files) for
"3426.6" (two hits, both inside a single citation entry of the Mutual
NDA's "contractual duty is separate from trade secret law" clause, used
there only to show the statute exists), "Cadence" (the same two hits),
"Avant" (none), "Glue-Fold" / "Slautterback" (none), "Cypress
Semiconductor" (none), "continuing misappropriation" (none), and "single
claim" (none) — no existing document addresses when a CUTSA claim
accrues, the discovery rule built into § 3426.6, or the single-claim
treatment of continuing misappropriation. The existing trade-secret
documents (cease-and-desist letter, injunctive-relief standards,
pre-discovery identification, preemption, inevitable disclosure,
customer lists, criminal theft, DTSA seizure, evidentiary privilege)
address other aspects and are cross-referenced rather than duplicated.

## What this document covers

18 clauses: 3 drafting (purpose/declaration, relationship to sibling
documents, signature/acknowledgment) and 15 authority clauses, citing
Cal. Civ. Code §§ 3426.6 and 3426.1(b); 18 U.S.C. § 1836(d); Cadence
Design Systems, Inc. v. Avant! Corp. (2002) 29 Cal.4th 215; Glue-Fold,
Inc. v. Slautterback Corp. (2000) 82 Cal.App.4th 1018; and Cypress
Semiconductor Corp. v. Superior Court (2008) 163 Cal.App.4th 575:

- **`cutsasol_three_year_period_and_discovery_rule`** (§ 3426.6, first
  sentence) — three years from actual or reasonably diligent discovery.
- **`cutsasol_continuing_misappropriation_single_claim_statute`**
  (§ 3426.6, second sentence; § 3426.1(b)) — a continuing
  misappropriation is a single claim; the definition of
  misappropriation it operates on.
- **`cutsasol_cadence_holding_claim_arises_once`** (Cadence) — the
  Ninth Circuit's certified question; the holding that a claim against
  a given defendant arises only once; the court's statement that its
  answer is narrow and does not construe the particular release.
- **`cutsasol_cadence_misappropriation_versus_claim`** (Cadence) — a
  "misappropriation" occurs with each misuse, but the "claim" arises
  once; meaning of "continuing misappropriation"; drafters affirmed
  Monolith.
- **`cutsasol_uniform_act_comment_rejects_continuing_wrong`**
  (Glue-Fold) — § 3426.6 derived almost verbatim from Uniform Act § 6;
  the commissioners' comment rejecting a continuing-wrong approach but
  delaying commencement until discovery.
- **`cutsasol_first_discovered_misappropriation_starts_clock`**
  (Glue-Fold; Cypress) — the first discovered or discoverable
  misappropriation (acquisition, disclosure, or use) starts the period.
- **`cutsasol_gluefold_pause_does_not_restart_period`** (Glue-Fold) —
  discovery Aug. 1995, halt Nov. 1995, resumption mid-1996, suit Jan.
  1999: barred; inactivity does not toll; later conduct is part of the
  single claim.
- **`cutsasol_one_breach_puts_other_secrets_at_risk`** (Glue-Fold,
  quoting Intermedics) — once a defendant is known to have misused one
  secret it is unreasonable to assume it will protect others; covert
  nature of misappropriation acknowledged.
- **`cutsasol_cypress_plaintiff_suspicion_standard`** (Cypress, quoting
  Fox v. Ethicon) — discovery is the plaintiff's reason to suspect
  wrongdoing; the defendant's actual state of mind is irrelevant to
  accrual; inability to prove mental state goes to the merits only.
- **`cutsasol_cypress_defendant_identity_not_required`** (Cypress,
  applying Norgart) — ignorance of the defendant's identity does not
  postpone accrual.
- **`cutsasol_separate_claims_against_separate_defendants`** (Cadence on
  PMC v. Kadisha; Cypress rejecting Forcier) — separate defendants can
  carry separate claims with separate periods; a third-party claim
  accrues on discovery of that defendant's misappropriation.
- **`cutsasol_no_notice_duty_but_other_defenses`** (Cypress) — § 3426.6
  imposes no duty to notify third parties; reasonable-efforts and
  good-faith-acquirer defenses are separate from limitations.
- **`cutsasol_single_claim_beyond_limitations_releases_remedies`**
  (Cadence) — "for the purposes of this section" does not confine the
  single-claim concept to limitations; parties may draft releases as
  they choose; the full panoply of remedies remains and damages may
  expand with each use.
- **`cutsasol_companion_contract_and_ucl_claims_discovery_burden`**
  (Glue-Fold) — four-year periods (CCP § 337; B&P § 17208) for the
  contract and UCL claims; the common-law discovery rule places the
  burden on the plaintiff; Glue-Fold's showing of diligence was
  insufficient.
- **`cutsasol_dtsa_parallel_period`** (18 U.S.C. § 1836(d)) — the
  federal three-year, discovery-based, single-claim provision.

## Genuine corrections and findings

- **Two text versions of the same opinions, disclosed**: CourtListener's
  public search index holds a text version of Cadence (and, it appears,
  the other two opinions) in which possessives lose their apostrophe
  ("plaintiff's claim" is indexed as "plaintiffs claim"), while the
  `html_with_citations` version returned by the API keeps them. The
  quotes follow the API version (which matches the official reporter
  form); the phrase-feed verification drops possessive words and checks
  the surrounding phrases. The verification counts below reflect that
  method.
- **Two one-word discrepancies between the two text versions, found
  by the second path and handled, not smoothed over**: (a) Glue-Fold's
  burden-of-proof sentence ends "to bring itself within it" in the API
  text but "to bring himself within it" in the public index's text; the
  quote is trimmed to end at "the burden of proof" and the clause's gap
  field says why, with the body paraphrasing the omitted words. (b) The
  Cypress sentence "the first discovered (or discoverable)
  misappropriation of a trade secret commences the limitation period"
  reads "limitations period" in the index's text; the quote follows the
  API text, and the gap field of
  `cutsasol_first_discovered_misappropriation_starts_clock` discloses
  that this one word rests on a single source (the official reporter
  could not be checked from this environment). Every other word of both
  quotes matched on both paths.
- **A typographical artifact avoided in Cadence**: the opinion's opening
  statement of its conclusion reads "a plaintiffs action" in the
  retrieved text; the document quotes the formal Conclusion (p. 227)
  instead and the gap field says why. A footnote marker ("1") embedded
  in the certified-question sentence is omitted from that quote as a
  benign artifact.
- **"USTA" reproduced verbatim**: the Cadence remedies passage contains
  "under our interpretation of the USTA," an evident error for "UTSA" in
  the source; it is quoted as-is and disclosed in the gap field rather
  than silently corrected.
- **An em-dash-plus-space artifact handled by cutting the quote**: the
  Cadence sentence about PMC v. Kadisha carries "conduct— some" in the
  retrieved text; the quote stops at "types of tortious conduct" and the
  remainder is paraphrased, with the gap field disclosing this.
- **Scanning artifacts in Glue-Fold and Cypress avoided**: "have ran,"
  "rale" (rule), "HQ" and "[ID" (paragraph markers), "Bemson" (Bernson),
  "CUTS A," and "begin to ran" all appear in the retrieved texts; no
  quote spans any of them, and each affected clause's gap field names
  the artifact it steered around.
- **Glue-Fold's two discovery dates**: the opinion reports Glue-Fold's
  alleged discovery as "August, 1995" (from the complaint) in one place
  and refers to its October 1995 protest letter in another; the
  document follows the court's own accrual finding (August 1995) and
  discloses the discrepancy.
- **Cypress left the accrual date to a jury**: the document does not
  state when Silvaco's claim accrued; it quotes the court's holding that
  the question could not be answered as a matter of law.
- **The DTSA quote source chosen for cleanliness**: Cornell's LII text
  of § 1836(d) has a stray space before the final period; the govinfo
  and uscode.house.gov texts are identical, and the quote follows
  govinfo.

## Honest gap disclosed

- Monolith Portland Midwest Co. v. Kaiser Aluminum & Chemical Corp.
  (9th Cir. 1969) 407 F.2d 288, Underwater Storage, Inc. v. United
  States Rubber Co. (D.C. Cir. 1966) 371 F.2d 950, Intermedics, Inc. v.
  Ventritex, Inc. (N.D.Cal. 1993) 822 F.Supp. 634, PMC, Inc. v. Kadisha
  (2000) 78 Cal.App.4th 1368, Forcier v. Microsoft Corp. (N.D.Cal.
  2000) 123 F.Supp.2d 520, Norgart v. Upjohn Co. (1999) 21 Cal.4th 383,
  Fox v. Ethicon Endo-Surgery, Inc. (2005) 35 Cal.4th 797, and Bernson
  v. Browning-Ferris Industries (1994) 7 Cal.4th 926 are relied on only
  as quoted or described in the three retrieved opinions; each clause's
  gap field says so. The Uniform Trade Secrets Act and its
  commissioners' comment were not separately retrieved.
- Civ. Code §§ 3426.2, 3426.3, 3426.7, and 3426.10, Code Civ. Proc.
  § 337, and Bus. & Prof. Code § 17208 are described only as the
  opinions describe them and are not quoted; the relationship clause
  places damages, injunctions, fees, preemption, equitable tolling, and
  fraudulent concealment out of scope.
- No federal decision construing 18 U.S.C. § 1836(d) is cited; the DTSA
  clause states only that the statutory text parallels § 3426.6 and
  that Cadence does not bind the federal provision's construction.

## Method

- Fetched Cal. Civ. Code §§ 3426.6 and 3426.1 from
  `leginfo.legislature.ca.gov` via curl through the sandbox proxy, each
  twice with distinct User-Agent strings; the extracted section bodies
  were identical across both fetches after markup stripping and
  whitespace normalization.
- Fetched 18 U.S.C. § 1836 from three independent hosts (govinfo.gov
  2023 edition, uscode.house.gov, law.cornell.edu) under two User-Agent
  strings; subsection (d) identical on govinfo and house.gov, with only
  a stray pre-period space on Cornell.
- Located Cadence (cluster 2602435), Glue-Fold (cluster 2268054) and
  Cypress (cluster 2265471) via CourtListener's public, unauthenticated
  `api/rest/v4/search/` endpoint (outside the MCP quota); the v4 result
  supplied each opinion's `absolute_url`, used in the citations.
- **Deviation from the usual two-API-fetch method, disclosed**: the
  shared CourtListener API quota (125/day across the parallel wave-158
  agents) was exhausted on the first attempt; after waiting the quoted
  ~23 minutes inside the turn, one `read_document` call per opinion
  succeeded (three MCP calls total). Cadence and Cypress were returned
  inline; Glue-Fold was persisted to disk by the tool harness and
  converted to plain text. CourtListener's opinion HTML pages are behind
  an AWS WAF JavaScript challenge (HTTP 202 to every header set tried),
  the `storage.courtlistener.com` XML path listed for Glue-Fold returned
  NoSuchKey, and Stanford SCOCAL, anylaw, casetext (410), Justia,
  FindLaw, Google Scholar and case.law were blocked or gone. The
  second, independent retrieval was therefore performed against
  CourtListener's public search index under a distinct User-Agent:
  every case quote was split into quotation-mark-free sub-phrases
  (possessive words dropped, see above), and each sub-phrase was
  submitted as an exact-phrase query restricted to the opinion's
  cluster (`cluster_id:<id> AND "<phrase>"`), chunked into windows of
  at most 12 words because the public phrase search did not match a
  22-word phrase whose 18-word neighbours matched. Result (final run,
  `feedcheck3.log`): 143 sub-phrases, 140 matched their opinion as the
  sole hit as whole phrases; of the remaining three, one (Cadence,
  "a single UTSA claim against a single defendant misappropriating a
  single") matched as two halves around an in-sentence "*176"
  (Cal.Rptr.2d) page marker in the index's text, and two exposed
  one-word differences between CourtListener's two text versions of
  the same opinion (see "Genuine corrections and findings" — one quote
  trimmed, the other disclosed). Negative controls — a fabricated
  phrase against the Cadence cluster, a genuine Cadence phrase against
  the Glue-Fold cluster, and a one-word-altered Cadence phrase against
  the Cadence cluster — each returned zero. The public search endpoint
  itself throttles anonymous callers (intermittent HTTP 429), which the
  checker handled with backoff; every query eventually returned 200.
- All statutory quotes and all Glue-Fold quotes programmatically
  confirmed as exact substrings of the saved fetched texts; the Cadence
  and Cypress quotes were transcribed from the inline API responses into
  excerpt files and confirmed as exact substrings of those excerpts by
  the same script (`verify.py`), then independently confirmed
  phrase-by-phrase against the public index as above. Each affected
  clause's gap field describes this accurately rather than claiming two
  API fetches.

## Verification

- Both California statutes fetched twice and confirmed identical; the
  federal statute confirmed across three hosts; all three opinions
  retrieved via the API and independently re-checked against the
  public search index.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean. Scanned clause
  bodies for advisory phrasing ("you should," "we recommend," etc.) —
  none.
- Source-independence disclosure: the two § 3426.6 quotes are the two
  sentences of one section and are disclosed as not independent;
  § 3426.1(b) is a different section of the same title; the three
  opinions are independent decisions of different courts (Supreme
  Court; First District, Division Four; Sixth District), and Cypress
  cites both Cadence and Glue-Fold, which the gap fields note.
- No duplicate clause ids against the full corpus. Two accepted generic
  drafting-title reuses ("Relationship to Other Documents in This
  Project," "Signature and Acknowledgment"), per the corpus's
  id-is-the-uniqueness-key convention.
- Field ids and labels (`preparerName`, `companyName`, `dateSigned`,
  `cityState`, and `tradeSecretDescription` / "Description of the trade
  secret") match the most common existing corpus definitions exactly;
  two new document-specific fields, `discoveryDate` and
  `suspectedMisappropriationDate`. All fields are required because the
  app leaves a blank field's `{{placeholder}}` visible in the output.
- Authority clauses carry exactly `{id,title,kind,status,checkedDate,
  body,gap,citations}`; drafting clauses exactly `{id,title,kind,body}`;
  citations exactly `{case,cite,url,quote}`; document exactly
  `{id,title,description,categories,clauseOrder,fields}`.
- Corpus-wide validation after merge: both JSON files parse; no
  duplicate clause or document ids; every id in every document's
  `clauseOrder` resolves to an existing clause; every `{{placeholder}}`
  in every document's clause bodies and gap notes resolves to a declared
  field on that document.

## Net changes

- New document: CUTSA Statute of Limitations and Continuing
  Misappropriation — Information Sheet
  (`cutsa_statute_of_limitations_info_sheet`), 18 clauses (15 authority
  + 3 drafting), in the Confidentiality & IP category. Two new fields
  (`discoveryDate`, `suspectedMisappropriationDate`).
- Corpus: 5,365 → 5,383 clauses; 650 → 651 documents. Wave 158,
  Confidentiality & IP.
