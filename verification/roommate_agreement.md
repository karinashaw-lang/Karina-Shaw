# Real Estate, new document: Roommate Agreement

## Why this document

No document in the corpus covered a peer-to-peer agreement among
roommates/co-tenants sharing a rental unit. The existing
`sublease_agreement` and `residential_lease` documents are both
tenant-landlord (or tenant-subtenant-landlord) instruments; this
document is instead between the people living together, and is
explicit throughout that it is a private contract separate from
whatever lease or rental agreement exists with the landlord.

## What this document covers

8 clauses: 6 drafting (parties/premises, rent and utility
cost-splitting, shared vs. private space and house-rules
acknowledgment, move-out notice between roommates, security-deposit
contribution/reimbursement, signatures) and 2 authority clauses:

- **`roommate_landlord_relationship_and_deposit`** (Civ. Code
  § 1950.5(a), (d)) — a roommate who is not named as a tenant on the
  master lease does not become a tenant, or acquire § 1950.5's
  protections against the landlord, merely by signing this Roommate
  Agreement; and this Agreement's own deposit-contribution/
  reimbursement promise is a private arrangement among the roommates,
  not something § 1950.5 itself gives one roommate a claim to against
  another, because that statute's deposit-handling duties run between
  the landlord and "the tenant who is party to the lease or
  agreement."
- **`roommate_joint_several_liability`** (Civ. Code §§ 1659, 1660;
  *DKN Holdings LLC v. Faerber*, 61 Cal.4th 813, 820 (2015)) — where
  multiple roommates sign the master lease together as co-tenants,
  California contract law presumes their promise to pay rent is joint
  and several, so each co-tenant can be held liable to the landlord
  for the *entire* rent, and the landlord — not being a party to this
  Roommate Agreement — is not bound by its internal rent-split.

## The two legal distinctions researched, and what was actually found

**1. Does a roommate who isn't on the master lease have any legal
relationship with the landlord?** Confirmed directly against Civil
Code § 1950.5's own text: subdivision (a) scopes the statute to
"security for a rental agreement for residential property that is
used as the dwelling of the tenant," and subdivision (d) says the
security "shall be held by the landlord for the tenant who is party
to the lease or agreement." Both subdivisions tie the statute's
protections to whoever is "the tenant" / "party to the lease," not to
every person who lives in the unit. No case was found (or needed to
be invented) that adjudicates a roommate-to-roommate deposit dispute
specifically — the conclusion is drawn directly from the statute's own
definitional language, and the clause's `gap` says so plainly rather
than implying a case decided this exact scenario.

**2. Are co-tenants on one lease jointly and severally liable to the
landlord for the whole rent, regardless of a private roommate-to-
roommate split?** Yes, as a default presumption, not a tenancy-specific
rule: Civil Code § 1659 ("[w]here all the parties who unite in a
promise receive some benefit from the consideration ... their promise
is presumed to be joint and several") and § 1660 (same presumption for
"a promise, made in the singular number, but executed by several
persons") are general contract-law provisions enacted in 1872. The
California Supreme Court's 2015 decision in *DKN Holdings LLC v.
Faerber* quotes both sections verbatim while explaining why California
replaced the common-law joinder rule with joint-and-several liability,
and states directly: "Parties to a joint and several contract are thus
bound jointly, so that they are liable for the entire obligation, and
severally, so that each may be sued separately for the entire loss."
The honest limitation, disclosed in the clause's `gap`: the *lease in
DKN itself* expressly recited "joint and several responsibility," so
the Supreme Court did not need to — and did not — apply § 1659's
default presumption to a lease that was silent on the question. The
clause is written to reflect that § 1659/1660's presumption is a
*default* that a master lease's own express terms could override, not
a holding that DKN itself applied to silent facts.

## Research process and sources — one citation at a time

### Civil Code § 1950.5(a) and (d)

- **Attempt 1 (primary):** `curl` directly to
  `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1950.5.`
  — returned a Cloudflare "Just a moment..." interstitial (HTTP 403),
  not the statute text. leginfo is network-blocked in this sandbox, as
  the task description anticipated.
- **Attempt 2 (mirror, used):** `curl` to
  `https://law.onecle.com/california/civil/1950.5.html` — HTTP 200,
  full statute text returned. This mirror's page is dated to a
  2013-amended version of § 1950.5 (pre-dating 2023-2024's AB 12
  amendments, which lowered the deposit cap in subdivision (c)). The
  quotes used from it — subdivisions (a) and (d) — do **not** touch
  subdivision (c)'s dollar/month cap at all, so the one part of the
  statute this mirror is stale on is not relied upon.
- **Cross-check of currency:** `WebFetch` on
  `https://california.public.law/codes/ca_civ_code_section_1950.5`
  (a direct `curl` to that same host was itself blocked by a separate
  Cloudflare challenge; `WebFetch`'s own fetch path reached it where a
  direct terminal fetch could not) returned a page labeled "(2025)"
  with a source note citing a January 1, 2026 update, and quoted
  subdivision (d) back verbatim as: "Any security shall be held by the
  landlord for the tenant who is party to the lease or agreement. ...
  The claim of a tenant to the security shall be prior to the claim of
  any creditor of the landlord." — identical to the onecle mirror's
  2013-dated text for that subdivision. **Disclosed, not silently
  fixed:** this means subdivision (d)'s specific holding-for-the-tenant
  language is corroborated as unchanged across a thirteen-year gap
  between the two mirror snapshots, even though neither is the
  official leginfo source — the clause's `gap` field says this
  explicitly, and `sourceClass` is set to `"mirror"` rather than
  `"primary-official"` for both citations.
- **Quote verification:** both quotes used in the clause —
  "This section applies to security for a rental agreement for
  residential property that is used as the dwelling of the tenant."
  and "Any security shall be held by the landlord for the tenant who
  is party to the lease or agreement. The claim of a tenant to the
  security shall be prior to the claim of any creditor of the
  landlord." — were confirmed as exact substrings of the text actually
  fetched from `law.onecle.com` (checked programmatically with a
  substring search against the saved fetch, after discovering and
  working around one non-breaking-space (`\xa0`) character the mirror's
  HTML inserted directly after "(a)"/"(d)" subdivision markers — the
  quotes were trimmed to start after that marker rather than typed
  from memory, so the stored quote is a true verbatim substring of the
  fetched text, not a reconstruction).

### Civil Code § 1659 and § 1660

- **Attempt 1 (primary):** same leginfo URL pattern for §§ 1659 and
  1660 — both blocked by the same Cloudflare interstitial (HTTP 403).
- **Attempt 2 (mirror, used):** `curl` to
  `https://law.onecle.com/california/civil/1659.html` and
  `.../1660.html` — both HTTP 200. Both sections are marked "(Enacted
  1872.)" — pre-statehood-era codification text not substantively
  amended since.
- **Independent corroboration:** both mirror quotes were checked,
  word for word, against the California Supreme Court's own 2015
  quotation of the same two sections inside *DKN Holdings LLC v.
  Faerber* (read directly from CourtListener's opinion text — see
  below) and matched exactly. That is real corroboration from a
  second, independent (and more authoritative) source that the
  mirror's text of these two sections is accurate, even though it is
  not the official leginfo source; disclosed in the clause's `gap`.

### DKN Holdings LLC v. Faerber, 61 Cal.4th 813 (2015)

- **Source used:** CourtListener, via the `search` and `read_document`
  MCP tools (opinion id `2816609`, cluster id `2816609`,
  `absolute_url` `/opinion/2816609/dkn-holdings-llc-v-faerber/`),
  `sourceClass: "court-opinion"`. No separate "primary vs. mirror"
  choice applies here — CourtListener is the designated primary path
  for case law in this corpus, and it was directly reachable (no
  fallback needed).
- **What was read:** the opinion's `html_with_citations` text, in two
  consecutive 8,000-character chunks (`chunk_index` 0 and 1), covering
  the facts (a commercial fitness-club lease signed by three lessees
  whose lease itself said they "shall have *joint and several*
  responsibility"), the procedural history, and the court's discussion
  of why California moved from common-law joint liability to
  statutory joint-and-several liability.
- **Quote used:** "Parties to a joint and several contract are thus
  bound jointly, so that they are liable for the entire obligation,
  and severally, so that each may be sued separately for the entire
  loss." — confirmed present verbatim in the fetched `chunk_index: 0`
  text (it appears immediately before the chunk boundary, right after
  the opinion cites 12 Williston on Contracts § 36:1). Page pin
  (*820*) determined from the opinion's own `star-pagination` markers
  in the surrounding text (the marker for page *820* appears shortly
  before this passage, and *821* only several paragraphs later), not
  guessed.
- **Comparison result / what was disclosed rather than silently
  smoothed over:** the facts of *DKN* involved a lease with an
  *express* joint-and-several clause, so the Supreme Court's discussion
  of § 1659/§ 1660's default presumption is doctrinal background, not
  an application of the presumption to a silent lease. The clause's
  `gap` says this directly, and the clause's `body` is worded as a
  default presumption that a master lease's own express terms could
  displace, rather than claiming *DKN* held that every multi-tenant
  lease is automatically joint-and-several regardless of its own text.
  *DKN* is also a commercial, not residential, lease dispute — noted
  in the `gap` as well, consistent with how this corpus treats *Kendall
  v. Ernest Pestana* and *Hartman Ranch Co.* in `sublease_agreement`'s
  authority clauses.

## Field and schema checks

- All 8 `{{field}}` placeholders used in clause bodies/gaps
  (`propertyAddress`, `roommate1Name`, `roommate2Name`,
  `additionalRoommateNames`, `masterLeaseTenantNames`,
  `totalMonthlyRent`, `securityDepositTotal`, `moveOutNoticeDays`) are
  declared in the document's own `fields` array, and every declared
  field is used by at least one included clause (both directions
  checked by `tools/validate_corpus.py`).
- `propertyAddress` links to the existing shared field of the same id
  in `schema/fields/addresses.json`; `totalMonthlyRent` links to the
  existing shared `monthlyRent` field in `schema/fields/money.json`
  (with a document-specific `label`, matching the pattern
  `sublease_agreement` itself uses for `monthlyRent`). No new shared
  field was declared — `schema/fields/*.json` was checked first.
- Checked every clause body for banned advisory phrasing
  (`lint/advisory_phrases.json`) by hand before running the validator;
  none present ("you should", "you must", "we recommend", etc. do not
  appear — all text is written as "the Roommates will…" / "a Roommate
  who…" descriptive/operative drafting language, or "California law
  provides…" / "the statute's… duties run…" informative language, not
  advice to the reader about what to do).
- Checked for `{{` leakage in clause `gap` text and citation
  `case`/`cite`/`quote`/`url` fields — clean.
- No `effectiveCycleChecked` key added to either authority clause,
  because neither clause cites `leginfo.legislature.ca.gov` directly
  (both had to fall back to a mirror for every statutory citation, for
  the reasons disclosed above) — the annual-recheck rule in
  `tools/validate_corpus.py` is keyed off that specific URL and does
  not apply here.

## Verification

- `python3 tools/validate_corpus.py` — passes (`validation passed`;
  742 documents / 6629 clauses / 11693 citations after this addition).
  Required adding one entry to `search/lay_terms.json` for
  `roommate_agreement` (a sibling file the validator checks for
  1:1 document coverage; not itself part of `data/clauses.json` or
  `data/documents.json`).
- Golden fixture: started `python3 -m http.server 8933` in the
  worktree, ran `node tests/golden/golden.js --update` (created
  `tests/golden/fixtures/roommate_agreement.json`, "1 fixture(s)
  created or changed. 742/742 documents covered."), then
  `node tests/golden/golden.js` in check mode — "742/742 documents
  match their golden fixture. golden passed." Manually read the
  rendered `expectedText` for `roommate_agreement` in the generated
  fixture to confirm the assembled document reads correctly end to
  end with no stray `{{placeholder}}` or awkward blank-field
  grammar.

## Net changes (this pass)

- `data/clauses.json`: +8 clauses (2 authority, 6 drafting) —
  `roommate_parties_and_premises`,
  `roommate_landlord_relationship_and_deposit`,
  `roommate_rent_utility_split`, `roommate_joint_several_liability`,
  `roommate_shared_private_spaces_and_house_rules`,
  `roommate_move_out_notice`, `roommate_deposit_contribution`,
  `roommate_signatures`. 6621 → 6629 clauses.
- `data/documents.json`: +1 document — `roommate_agreement`
  ("Roommate Agreement", category `Real Estate`). 741 → 742
  documents.
- `search/lay_terms.json`: +1 entry (`roommate_agreement`, 6 lay-
  search phrases), required by `tools/validate_corpus.py`'s 1:1
  coverage check against `data/documents.json`.
- `tests/golden/fixtures/roommate_agreement.json`: new golden fixture.
- Append-only throughout: no existing entry in any of these files was
  modified, reordered, or removed.
