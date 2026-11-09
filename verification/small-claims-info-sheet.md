# `small_claims_info_sheet` — build and verification notes

Built 2026-11-09, Phase 12 Step 10, document 2 of 5. This is a brand-new
document — no prior equivalent existed in the corpus (confirmed by
grepping `data/documents.json` and `data/clauses.json` for "small
claim"/"sc-100"; the only hits were other documents mentioning small
claims court as a side venue or remedy — security-deposit bad-faith
damages, HOA assessment collection, landlord-harassment civil
penalties, a vexatious-litigant definition, and the unrelated federal
Copyright Claims Board — none actually about the small claims process
itself).

## Revision history

A first draft of this document was built with all 8 authority clauses
marked `"status": "unverified"`, because every attempt in that pass to
reach the actual statutory text failed: `leginfo.legislature.ca.gov`
(403, Cloudflare — the same limitation on record elsewhere in this
corpus), `law.onecle.com` (404), `law.justia.com` (403),
`www.lawserver.com` (unresolvable), and `codes.findlaw.com` (reachable,
but its summarizing fetch tool declined to reproduce verbatim text).
That draft was sourced entirely to the Judicial Council of California's
statewide self-help website (`selfhelp.courts.ca.gov`) — a real
official source, but plain-language guidance, not the statute, and one
that names no Code of Civil Procedure section numbers itself; every
section number in that draft reflected general background knowledge,
not an in-session fetch.

Before accepting that draft, a second verification pass found that
`california.public.law` — already a precedented source in this corpus
(139 existing citations, e.g. the clauses citing Probate Code §§ 15800,
15802, 16069, 17200) — is reachable from this session and mirrors the
actual statutory text, sourced from and checked against
`leginfo.legislature.ca.gov`. Direct `curl` fetches (not the WebFetch
tool, which truncates quotes to short excerpts) retrieved the full,
real text of Code of Civil Procedure §§ 116.220, 116.221, 116.231,
116.260, 116.340, 116.360, 116.530, 116.610, and 116.710. Seven of the
eight original clauses were rewritten against that real text and
promoted to `"status": "verified"`, with the self-help-sourced
citations replaced by verbatim statutory quotes. A new clause,
`smallclaims_vexatious_filer_limit` (Code Civ. Proc. § 116.231), was
added using the same real text, covering the two-claims-over-$2,500
filing limit that the original draft had identified as a gap and left
out entirely. A second original clause, `smallclaims_who_may_sue_and_be_sued`,
was dropped rather than rewritten: no single fetched statutory
provision cleanly states "who may be sued" as a general matter (CCP §
116.220(a) lists categories of actions, not defendant types), and
keeping a self-help-paraphrased, unverified version of it alongside six
newly-verified clauses was the less honest option — per Global Rule 10,
the more conservative choice is to drop a claim rather than retain a
weak one once better-sourced neighbors exist.

**One clause remains `"status": "unverified"`: `smallclaims_judgment_enforcement`.**
Judgment collection/enforcement is governed by the general Enforcement
of Judgments Law (Code Civ. Proc. §§ 680.010 et seq.), not by a
section within the Small Claims Act's own article, and no specific
section of that law was fetched this session. This clause stays
sourced to the Judicial Council self-help site and stays unverified,
consistent with this corpus's standing rule never to mark a clause
verified without an actual primary-source check.

## Clause-by-clause (current)

| Clause | Status | Source | What it covers |
|---|---|---|---|
| `smallclaims_declaration` | drafting | — | Intro/declaration, no legal claim |
| `smallclaims_jurisdiction_and_dollar_limits` | verified | CCP §§ 116.220(a)(1), 116.221 | $6,250 general / $12,500 individual-plaintiff limit |
| `smallclaims_no_attorney_at_hearing` | verified | CCP § 116.530(a)-(c) | No lawyer at the hearing; exceptions for self-representation, testimony, appeal, enforcement |
| `smallclaims_service_of_the_claim` | verified | CCP § 116.340(a)-(c) | Service methods; 15-day/20-day deadline; proof of service |
| `smallclaims_defendants_claim_option` | verified | CCP § 116.360(a)-(c) | Defendant's claim mechanics and service deadlines |
| `smallclaims_judgment_and_asymmetric_appeal` | verified | CCP §§ 116.610(a)-(b), 116.710(a)-(d) | Judgment scope; asymmetric appeal right; insurer appeal |
| `smallclaims_vexatious_filer_limit` | verified | CCP § 116.231(a), (b), (d) | Two-claims-over-$2,500-per-year limit; public-entity carve-out |
| `smallclaims_judgment_enforcement` | **unverified** | Judicial Council self-help site | Court doesn't collect for you; debtor disclosure/examination |
| `smallclaims_advisor_services` | verified | CCP § 116.260 | Free advisor assistance required in each county |
| `smallclaims_signature_block` | drafting | — | Closing signature block |

Not included, for lack of a fetched source: venue/filing-county rules,
filing fees and fee waivers, § 116.220(c)'s guarantor/assignee
sub-limit, and the specific Enforcement of Judgments Law mechanics
(garnishment, levy, abstract of judgment).

## Checks run (2026-11-09, after the verification-upgrade pass)

```
python3 tools/validate_corpus.py        -> validation passed (741 docs / 6621 clauses, 4989 authority)
node tools/regression.js (full file)    -> regression passed (8 original categories still level 93-94)
node tools/wizard_regression.js         -> 741/741 documents completed the wizard end to end
python3 tools/merge_guard.py HEAD       -> clean: additions only
```

A new entry was also added to `search/lay_terms.json` (required by
`validate_corpus.py`) and the existing `search/intake_flow.json`
"Consumer & Civil Court" → "small_claims" intake option (added in the
category-infrastructure commit) was left untouched — it already points
here correctly once this document exists.
