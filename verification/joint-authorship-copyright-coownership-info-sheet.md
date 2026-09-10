# Confidentiality & IP, new document: Joint Authorship and Copyright Co-Ownership — Information Sheet

## Why this document

Wave 154, Confidentiality & IP slot (one of four parallel, isolated
worktree tasks each adding one document to a different category).
Continues the round-robin covered by waves 146/148/150/152.

The task prompt's suggested candidates were checked first against
`data/documents.json` and a `grep` of the whole corpus:

- **CCPA employee/applicant data obligations** — already its own
  document, `ccpa_employee_job_applicant_data_info_sheet`. Not
  available.
- **Fair use factors (17 U.S.C. § 107)** — already its own document,
  `copyright_fair_use_info_sheet`. Not available.
- **Open-source license compliance in employee-created code** — not
  covered, but predominantly a matter of private license terms (GPL,
  MIT, Apache) rather than a controlling statute or California/Ninth
  Circuit decision; judged too thin on primary legal sources of the
  kind this pipeline requires, so not pursued.
- **Joint authorship / co-ownership of copyright (17 U.S.C. § 201(a),
  *Aalmuhammed v. Lee*)** — a `grep` for `Aalmuhammed`, `Richlin`,
  `Oddo`, `Sybersound`, `joint author`, and `joint work` found no
  document on the topic. The phrase "joint work" appears only
  incidentally in six clauses (the § 302(b) term in the copyright
  registration sheet, the VARA waiver rule, and unrelated hits on
  "jointly"), and `201(a)` hits are all to Labor Code § 201(a) (final
  pay) except one first-sentence quote in `copyrightassign_initial_ownership`
  that does not address joint works. Selected.

## What this document covers

15 clauses: 3 drafting (intro, cross-reference to sibling documents,
signature/acknowledgment) and 12 authority clauses, citing 17 U.S.C.
§ 101 ("joint work" definition), § 201(a), § 201(b), § 204(a), and
§ 302(b), plus three Ninth Circuit decisions:

- **`jointauth_statutory_definition`** — the § 101 definition.
- **`jointauth_initial_ownership`** — § 201(a): authors of a joint work
  are co-owners.
- **`jointauth_three_elements_copyrightable_contribution`** —
  *Aalmuhammed v. Lee*, 202 F.3d 1227 (9th Cir. 2000): three elements;
  each author must make an independently copyrightable contribution;
  speaking Arabic / coaching actors not copyrightable unless fixed in
  expression.
- **`jointauth_authorship_not_same_as_contribution`** — the holding
  that authorship is required and is not the same as a valuable,
  copyrightable contribution.
- **`jointauth_aalmuhammed_factors`** — control (superintendence),
  objective manifestations of shared intent, audience appeal; control
  usually most important.
- **`jointauth_contract_as_best_evidence_and_application`** — a
  contract is the best objective manifestation; no rigid formula;
  absence of control is strong evidence against co-authorship.
- **`jointauth_coowner_independent_use_no_infringement`** — *Oddo v.
  Ries*, 743 F.2d 630 (9th Cir. 1984): co-owner cannot infringe;
  independent right to use or license; plus the House Report
  tenants-in-common language as quoted in *Sybersound*.
- **`jointauth_duty_to_account_state_law`** — *Oddo*: duty to account
  arises from equitable/state-law principles, not the Copyright Act;
  footnote 2 on § 1338(a) jurisdiction.
- **`jointauth_coownership_without_joint_authorship_partnership`** —
  *Oddo*: rules extend to partners and non-author co-owners; state
  partnership-law breach is not federal infringement.
- **`jointauth_exclusive_license_requires_all_coowners`** — *Sybersound
  Records, Inc. v. UAV Corp.*, 517 F.3d 1137 (9th Cir. 2008): a lone
  co-owner can grant only a nonexclusive license; assignee lacked
  standing; plus § 204(a) writing requirement.
- **`jointauth_work_for_hire_distinction`** — § 201(b) plus
  *Aalmuhammed*'s treatment of the director's work-for-hire agreement.
- **`jointauth_duration_302b`** — § 302(b) joint-work term.

## Genuine findings

- **Reporter page break inside a quote, disclosed**: the *Oddo*
  sentence "A co-owner of a copyright cannot be liable to another
  co-owner for infringement of the copyright." straddles the *633 page
  break in CourtListener's text, where the star-pagination marker sits
  between "co-" and "owner". The quote joins the hyphenated word across
  the marker; nothing else was altered. Disclosed in that clause's
  `gap` field, and the verification script applies exactly that one
  substitution before matching.
- **Aalmuhammed text lacks page markers**: CourtListener's opinion
  767566 (the bulk.resource.org-derived text) carries no star
  pagination, so the F.3d pincites (1231, 1232, 1234, 1235) could not
  be confirmed from the retrieved text itself. Each *Aalmuhammed*
  clause's `gap` field discloses this. CourtListener also holds a
  duplicate cluster (7079925 / opinion 6985035) of the same decision
  that was not separately retrieved.
- **A source-text oddity preserved verbatim**: the retrieved
  *Aalmuhammed* text renders one phrase as `the "author " of that
  expression` (stray space before the closing quotation mark). The
  quote reproduces the source as retrieved rather than silently
  tidying it, and the quote is ended before the source's `17 U.S.C. S
  101` rendering (where the section symbol was mangled to "S" in the
  bulk text) so that no mangled character appears in the quote.
- **Independent second-source fetch attempted and blocked**: the
  environment proxy rejected CONNECT to `law.resource.org` (the
  bulk.resource.org mirror of *Oddo* and *Aalmuhammed*) and to
  `cdn.ca9.uscourts.gov` (the *Sybersound* slip PDF), so no
  non-CourtListener copy of any opinion could be fetched. In lieu of a
  second fetch, every *Oddo* quote was re-checked API-side with
  CourtListener's `search_document` literal-phrase tool against the
  stored opinion, independent of the preparer's own transcription of
  the HTML (see Method).

## Honest gap(s) disclosed

This document does not resolve whether any particular work is a joint
work or whether any contributor is an author; does not address the
Second/Seventh Circuit tests (*Childress v. Taylor*, *Thomson v.
Larson*, *Erickson v. Trinity Theatre*) beyond noting that *Aalmuhammed*
discusses them; does not retrieve the House Report itself (quoted only
as it appears inside *Sybersound*); does not retrieve the earlier Ninth
Circuit decision *Aalmuhammed* cites for the independently-copyrightable-
contribution rule; does not address the current California partnership
statute (Corp. Code § 16100 et seq.) that replaced the § 15025
provision *Oddo* applied; does not address community-property treatment
of copyrights, co-ownership of patents or trademarks, or the VARA
joint-work waiver rule (covered elsewhere in the corpus); and does not
address the supplemental-jurisdiction statute that post-dates *Oddo*'s
"pendent jurisdiction" remark. All disclosed in the relevant `gap`
fields or the sibling-documents drafting clause.

## Method

Statutes: 17 U.S.C. §§ 101, 201, 204, and 302 were each fetched twice
from `uscode.house.gov` (Office of the Law Revision Counsel, current
prelim edition) via `curl` with two distinct User-Agent strings:
`"Mozilla/5.0 (X11; Linux x86_64) Groundtruth-verifier/1.0"` and
`"curl/8.0 Groundtruth-verifier-secondpass/2.0"`. The raw HTML files
differ by a few bytes (per-request session tokens in page chrome); after
stripping markup and collapsing whitespace, the two fetches of every
section are character-identical (`A==B(cleaned): True` for all four).

Case law via the CourtListener MCP tools:

- *Oddo v. Ries* — `search` (type `o`, case_name) → cluster/opinion
  441709 (identical ids); `get_endpoint_item` on `opinions` 441709
  returned an empty `plain_text` and the full `html_with_citations`,
  which was converted to plain text by hand-stripping markup into a
  scratch file. Because that conversion was manual, all eight *Oddo*
  quotes were additionally re-checked with `search_document` on
  opinion 441709 (literal phrase search against CourtListener's stored
  text): every phrase returned exactly one match whose surrounding
  snippet reproduces the quoted sentence verbatim (including the
  *633 page-break marker inside "co-owner" noted above).
- *Aalmuhammed v. Lee* — `search` (type `o`, case_name) returned three
  entries: cluster 7079925 / opinion 6985035 and cluster 767566 /
  opinion 767566 (both 202 F.3d 1227) plus the earlier withdrawn 162
  F.3d 1167. `get_endpoint_item` on `opinions` 767566 returned empty
  `plain_text`; a second call for `html_with_citations` returned the
  full text (64 KB), which the harness saved to a file; markup was
  stripped by script.
- *Sybersound Records, Inc. v. UAV Corp.* — `search` (type `o`,
  case_name) returned cluster/opinion 1462778 (F.3d text, identical
  ids) and cluster 3051234 (slip PDF); `get_endpoint_item` on `opinions`
  1462778 for `html_with_citations` returned the full text (80 KB),
  saved to a file and stripped by script. This text carries *1144–*1147
  star pagination, used for the pincites.

Several CourtListener calls hit the shared 5/min throttle (HTTP 429);
each was retried after an in-turn background `sleep` and a blocking
`until` loop, never by ending the turn.

All 27 citation `quote` values (7 statutory, 20 case) were verified by
`verify.py` as exact, whitespace-normalized, contiguous substrings of
the fetched/retrieved source text (curly quotes and apostrophes
preserved as in each source; NBSP and whitespace runs collapsed; the
single disclosed *633 join applied to *Oddo*). Result: 27 checked, 0
failures, on the final pass.

## Verification

- Both fetches of each of §§ 101, 201, 204, 302 returned content and
  are identical after markup stripping.
- All 27 quotes confirmed as exact substrings of source text after
  whitespace normalization only (plus the one disclosed page-break
  join); zero failures.
- Every *Oddo* quote independently confirmed via `search_document`
  against CourtListener's stored opinion.
- Every clause checked against the exact key schema of
  `data/clauses.json` (drafting: `{id,title,kind,body}`; authority:
  `{id,title,kind,status,checkedDate,body,gap,citations}`; citations:
  `{case,cite,url,quote}`) and the document against
  `{id,title,description,categories,clauseOrder,fields}` — asserted in
  `merge.py` before writing.
- No duplicate clause or document ids before or after merge; all 15
  `clauseOrder` entries resolve; every `{{placeholder}}`
  (`preparerName`, `workDescription`, `contributorsDescription`,
  `dateSigned`, `cityState`) resolves to a declared field and no
  declared field is unused.
- Both JSON files re-parse; `git diff --stat` shows insertions only
  (312 + 57 lines, 0 deletions).
- Corpus-wide validation after merge: 5,171 clauses, 633 documents,
  category counts recomputed (Confidentiality & IP: 80 → 81; all
  others 80) — clean.

## Net changes

- New document: Joint Authorship and Copyright Co-Ownership —
  Information Sheet (`joint_authorship_copyright_coownership_info_sheet`),
  15 clauses (12 authority + 3 drafting), Confidentiality & IP. 5
  fields (`preparerName`, `workDescription`, `contributorsDescription`,
  `dateSigned`, `cityState`), following sibling info-sheet conventions.
- Corpus: 5,156 → 5,171 clauses; 632 → 633 documents. Confidentiality
  & IP: 80 → 81. Wave 154, Confidentiality & IP slot.
