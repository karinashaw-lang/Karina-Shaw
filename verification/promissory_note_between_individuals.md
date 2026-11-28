# `promissory_note_between_individuals` — build and verification notes

Built 2026-11-28. A brand-new document — no prior equivalent existed in
the corpus (confirmed by reading `data/documents.json` for every
"promissory"/"loan" hit: the only existing promissory-note document is
`deed_of_trust_promissory_note`, a seller-financed **real-estate**
deed of trust and note, with trustor/trustee/beneficiary machinery, a
power of sale, and reconveyance deadlines. This document is the plain,
unsecured counterpart described in the task brief: no deed of trust,
no lien, no trustee, no collateral — a simple two-party IOU).

9 clauses (4 authority / 5 drafting), category `Consumer & Civil
Court`. 8 citations across the 4 authority clauses.

## Network access

`leginfo.legislature.ca.gov` was attempted directly (both a raw `curl`
and this session's `WebFetch` tool) for every statute cited below, on
first and second attempts, and failed every time: `curl` received a
Cloudflare "Just a moment..." interstitial (HTTP 200 but a JS
challenge page, not the statute), and `WebFetch` received a bare HTTP
403. Per the task brief, every citation below was instead sourced to
`law.onecle.com` and disclosed as `sourceClass: "mirror"`, never
silently treated as primary. A second source, `codes.findlaw.com`, was
also reachable through `WebFetch` (though that tool returns a
processed summary rather than raw page text, so it was used only as
non-formal corroboration, never as a `citations[]` entry — see the
Code Civ. Proc. § 337 section below). `codes.findlaw.com` fetched via
direct `curl` hit the same Cloudflare challenge as leginfo and was
unusable that way. `justia.com` could not be resolved at all from this
session's network (`ENOTFOUND`) and was not used.

## Per-citation verification

### Cal. Const. art. XV, § 1 (usury rate cap) — `promnote_usury_rate_limit`

- **Attempt 1 (leginfo.legislature.ca.gov):** `WebFetch` → HTTP 403.
  Direct `curl` → Cloudflare challenge page, no statute text. Not
  usable.
- **Attempt 2 (law.onecle.com/california/constitution/article-15.html):**
  direct `curl` succeeded (HTTP 200, ~14 KB). The full text of Section
  1 was extracted from the raw HTML (tags stripped, whitespace
  collapsed) and read in full, not just the short excerpt a
  summarizing fetch tool would return.
- **Comparison:** no second independent source for this exact page was
  fetched (onecle was the only one reachable), so this citation rests
  on one mirror rather than two independent sources corroborating each
  other. That is disclosed in the clause's own `gap`, which is why the
  clause's two citations — the personal-use 10% tier and the
  other-use "higher of 10% or 5% + FRBSF rate" tier — are flagged there
  as two quotations of the *same* section rather than independent
  sources.
- **What was confirmed, verbatim, from the fetched text:** the 10%
  cap for a loan "for use primarily for personal, family, or household
  purposes" (with the carve-out that a loan used primarily to buy,
  build, or improve real property is *not* treated as personal/family/
  household use for this purpose); the alternative "higher of (a) 10
  percent per annum or (b) 5 percent per annum plus" the Federal
  Reserve Bank of San Francisco's member-bank advance rate for a loan
  used for any other purpose; and the list of exempt lender categories
  (banks, building and loan associations, industrial loan companies,
  credit unions, licensed pawnbrokers, real-estate brokers for
  broker-arranged loans, and others) — this last part was read and
  used to write the clause's "neither party is in an exempt category"
  sentence, but was not itself pulled out as a separate `citations[]`
  entry (it would have been a third quotation of the same single
  section, and two was enough to support the clause's own claims).
- **What this surprised/confirmed against general assumption:** the
  commonly-assumed flat "10% usury cap" is only half right — it is
  the ceiling for *personal, family, or household* use specifically;
  a loan for any other purpose has a different, Fed-rate-pegged
  ceiling that can run above 10%. The brief's own framing anticipated
  this, and the fetched text confirms it precisely.
- **Disclosed, not silently fixed:** no current statutory penalty
  provision for exceeding either cap was located. The historical
  forfeiture-of-interest penalty predates the 1979 constitutional
  revision that produced the text above, and nothing in this research
  identified its modern replacement (if any). The clause's `gap` says
  this plainly rather than asserting a remedy that was never verified.

### Civ. Code §§ 1916.1, 1916.2, 1916.5 (usury implementing statutes) — `promnote_usury_implementing_statutes`

- **Attempt 1 (leginfo.legislature.ca.gov):** `WebFetch` on
  `sectionNum=1916.1.` → HTTP 403. Not attempted again for 1916.2/1916.5
  once 1916.1 confirmed the block.
- **Attempt 2 (law.onecle.com):** direct `curl` against
  `/california/civil/1916.1.html`, `1916.2.html`, and `1916.5.html` all
  succeeded (HTTP 200) and were read in full.
- `1916.3.html` and `1916.4.html` were also requested directly (`curl`)
  as part of mapping the full `1916.x` series the task brief asked
  about; both returned a plain HTTP 404 ("The requested URL was not
  found on this server"), and onecle's own "Previous/Next" section
  navigation on the neighboring pages skips straight from 1916.2 to
  1916.5, confirming (on this mirror, not independently against a
  legislative-history source) that no section exists at those two
  numbers today.
- **Comparison:** same single-mirror situation as the constitutional
  citation above — no second independent source was fetched for these
  three sections. Here, though, each of the three citations is a
  genuinely distinct statutory section (not the same section quoted
  twice), so the clause's gap does not need the "same section twice"
  disclosure the usury-cap clause needed.
- **What was confirmed:** § 1916.1 exempts a real-estate-broker-made-
  or-arranged loan secured by a lien on real property; § 1916.2 exempts
  an out-of-state public pension system's loans; § 1916.5(b)(1) limits
  the variable-rate rules in §§ 1916.5–1916.9 to a mortgage, deed of
  trust, or real estate sales contract financing four-or-fewer-unit
  residential property. None of the three describes the unsecured,
  two-individual loan this document covers — which is exactly the
  point the clause makes (a scoping/negative clause, not an
  affirmative different cap).

### Code Civ. Proc. §§ 337, 312 (statute of limitations) — `promnote_statute_of_limitations`

- **Attempt 1 (leginfo.legislature.ca.gov):** `WebFetch` → HTTP 403.
  Direct `curl` → Cloudflare challenge page.
- **Attempt 2 (law.onecle.com):** direct `curl` against
  `/california/civil-procedure/337.html` and `/312.html` succeeded
  (HTTP 200) and both were read in full from the raw HTML.
- **Attempt 3, corroboration only (codes.findlaw.com):** reached via
  `WebFetch` (not `curl` — `curl` hit the same Cloudflare challenge as
  leginfo). FindLaw's page is labeled "Current as of January 01, 2026"
  and now numbers § 337's provisions as subsections (a)–(d) rather than
  the "1.", "2.", "3." numbering the 2017 onecle snapshot still shows.
  `WebFetch`'s own tool confirmed the operative phrase — "An action
  upon any contract, obligation or liability founded upon an
  instrument in writing" — reads identically under the new lettering.
  Because `WebFetch` returns a processed/summarized result rather than
  the raw page (and truncates literal quotes to ~125 characters), this
  was **not** used as a formal `citations[]` entry; it is recorded only
  in the clause's `gap` as corroboration that the renumbering is
  non-substantive, and the actual citation quote comes from the onecle
  mirror, verified against the raw HTML.
- **What was confirmed:** the operative four-year period for "an
  action upon any contract, obligation or liability founded upon an
  instrument in writing" (CCP § 337) and the general accrual-based
  commencement rule in CCP § 312 ("Civil actions, without exception,
  can only be commenced within the periods prescribed in this title,
  after the cause of action shall have accrued..."). Both quotes are
  verbatim substrings of the fetched onecle text.
- **Disclosed, not resolved:** this research did not determine, for an
  installment note with an acceleration clause, exactly when the
  four-year clock starts for a given missed payment, nor whether
  partial payment or written acknowledgment of the debt tolls it. The
  clause's `gap` says this explicitly rather than asserting an accrual
  rule beyond what § 337/§ 312's own text states.

### Civ. Code § 1550; Com. Code § 3104(a) (no witness/notarization requirement) — `promnote_signature_requirements`

- **Attempt 1 (leginfo.legislature.ca.gov):** `WebFetch` on
  `sectionNum=1916.1.` had already confirmed the 403 pattern; the same
  block was assumed (and separately re-confirmed for a different
  section earlier in this session) rather than re-tested a third time
  for these two sections specifically.
- **Attempt 2 (law.onecle.com):** direct `curl` against
  `/california/civil/1550.html` and `/california/commercial/3104.html`
  both succeeded (HTTP 200) and were read in full.
- **Comparison:** single-mirror again; no second independent source
  fetched.
- **What was confirmed:** Civil Code § 1550 lists exactly four things
  as "essential to the existence of a contract" — capable parties,
  consent, a lawful object, and sufficient cause or consideration —
  with no mention of witnessing or notarization anywhere in that list.
  Commercial Code § 3104(a) separately defines a negotiable "note" by
  its own, different test (unconditional promise, fixed amount,
  payable to bearer/order, on demand or at a definite time, no other
  undertakings), which likewise imposes no witness or notarization
  requirement.
- **Disclosed, not overclaimed:** the clause's `gap` is explicit that
  this shows the absence of a witness/notarization requirement by the
  law's own affirmative list of what *is* essential, not by an
  exhaustive negative search of the entire California code for every
  conceivable requirement; and that a particular lender's own practice
  (asking for notarization anyway) is a private preference, not a
  statutory requirement, and is out of scope for the clause.

## Build artifacts

- `data/clauses.json` — 9 new clauses appended (`promnote_*`), no
  existing entries modified.
- `data/documents.json` — 1 new document appended
  (`promissory_note_between_individuals`), no existing entries
  modified.
- `search/lay_terms.json` — 1 new entry appended for this document id
  (required for `tools/validate_corpus.py` to pass; `search/
  intake_flow.json` needed no change since the `Consumer & Civil
  Court` category already exists with intake questions that are not
  per-document).
- `python3 tools/validate_corpus.py` — passes.
- `tests/golden/golden.js --update` then (check mode) — 742/742
  documents match their golden fixture, including the new one.
  Note for whoever next runs the golden harness in this sandbox: port
  8933 was already bound by a `python3 -m http.server` process left
  running from a **different** git worktree (confirmed via
  `/proc/<pid>/cwd`), so `GOLDEN_BASE_URL` was pointed at a second
  server on port 8934 serving this worktree's own files. Running the
  harness against a stale port silently produces fixtures from the
  wrong checkout's `data/documents.json` with no error — it is worth
  checking `curl localhost:<port>/data/documents.json` names the
  expected document before trusting an `--update` run's output.
