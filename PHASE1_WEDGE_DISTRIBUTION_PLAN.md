# Phase 1 — Wedge + Distribution Built Together (v2 Section 7, tasks D1–D3)

Per-task breakdown at the v1 handoff's level of detail: files to
touch, what already exists vs. what's new, gates to run, and where
work stops for owner approval. Phase 0 (A0/A1/A2) is already done
(`MVP_BASELINE.md`, `review/A3_WEDGE_CONFIRMATION.md`, the commit-
discipline hooks) — this file starts from there.

**Hard dependency, not optional:** v2's own D2 text says Wave 1
publishes "ONLY after they pass A5 verification." A5 (verifying the
launch set, which the wedge is a subset of) is mid-flight in this
session as of this writing: buckets 1–3 done and pushed (launch-set
authority clauses: 575/684 adversarially checked, 102 verified, 7
blocked on a disclosed leginfo access limit), bucket 4 (332 drafting-
clause checks) running now. **D2 cannot start until A5 bucket 4
finishes and lands** — D1 and D3 don't have that dependency and can
start in parallel.

---

## D1 — Home page as self-demonstrating proof

**What already exists:** `index.html` is already wedge-focused (CA
Wedge Plan Step 19) and has a footer hint ("click one to see it") on
clicking a Verified badge to see its source. `account.js` already has
a `trackEvent()` pipeline writing to Supabase. `trust.html` (A13)
already computes its stats live, client-side, from the same JSON the
app uses — the right pattern to copy, not reinvent.

**What's missing, concretely:**
- No dedicated, above-the-fold interactive demo widget — today a
  visitor has to already be in the interview flow and click a badge;
  v2 wants this reachable and legible with zero clicks into the
  product, right on the landing page.
- No visible "verify-page promise" sentence above the fold.
- `HEADLINES.md` does not exist — never written, despite being
  referenced as a v1 deliverable.
- No `/verify/<id>` page exists at all (confirmed: nothing in the repo
  implements it — this is A10 from v1, not yet built, and D1's "verify-
  page promise" sentence is a promise about a page that doesn't exist
  yet). **D1's above-the-fold sentence can't honestly ship before A10
  exists**, even in skeleton form (the sentence can be true without
  the whole QR/export pipeline working, but the page it points to has
  to be real and live, not a 404).

### D1.1 — Build a minimal `/verify/<id>` page (prerequisite, pulled in from A10)

Scope only what D1's promise needs, not all of A10's export/QR
pipeline (that depends on A7's server-side release, Phase 2):
- `verify.html` (or `verify/index.html` with query-param routing,
  matching this project's existing static-page convention) — given a
  document id, renders: title, corpus version/commit, each authority
  clause's id, verification level, and check date, computed client-
  side from the same public JSON `trust.html` already reads
  (`tiers.json`, `verification_levels.json`) — no server call, no
  account needed, same CSP discipline as `trust.html`.
- Since no document has been *exported* yet (that needs A7, Phase 2),
  this page works off a document id in the URL for now — "whether any
  clause changed since generation" (the full A10 spec) waits for A7;
  this skeleton only needs to prove the mechanism, matching D1's own
  framing ("watch the trust mechanism work without signing up").
- Files: `verify.html`, maybe a small `verify.js`; update
  `tools/validate_corpus.py` or a new `tools/validate_static_pages.py`
  check if this project's convention is to gate every new static page
  (check `tools/README.md` for the existing pattern before adding a
  new gate).
- Gates: `node tools/regression.js` (needs a local server — note this
  session's own sandbox blocks starting one; a future session or CI
  will need to run this), accessibility check if one exists for static
  pages, `python3 tools/validate_corpus.py`.

### D1.2 — Interactive demo widget on `index.html`

- Pick one wedge clause with a clean `adversarially_checked` level
  (per A5's bucket-1-3 work, most wedge clauses now qualify —
  `llc_articles_filing_requirement` or `llc_liability_shield` are
  reasonable choices, Tier A/B document, `leginfo.legislature.ca.gov`
  citation).
- Render it live on the landing page, above the fold: clause text,
  "Verified" badge, and a source panel that expands in place (no
  navigation) showing: source name, the exact quote, check date,
  `leginfo` URL. Reuse the existing badge/source-panel component
  `app.js` already has for the interview flow — do not build a second
  implementation of the same UI.
- Add the one-sentence verify-page promise directly below it, linking
  to `/verify/<id>` (D1.1).
- New `trackEvent()` calls (D3 depends on these existing):
  `demo_clause_viewed`, `demo_source_panel_expanded`,
  `demo_to_interview_started` (fired when a visitor clicks from the
  demo into the real interview flow for that document).

### D1.3 — Three headline options

- `HEADLINES.md` (new file): three candidate headlines, each checked
  against the copy lint (`tools/` — find or confirm the existing copy-
  lint script before assuming one needs to be written) for no advice,
  no guaranteed-outcome language, no "AI-powered" framing. **Owner
  picks one — do not choose unilaterally and ship it** (v2 Section 16:
  "pick headline" is listed as an owner decision).

**Gates for all of D1:** `python3 tools/validate_corpus.py`,
whatever copy-lint script exists, `node tools/regression.js` if a
server can be started, manual check in a real browser per this
project's "test the golden path" standing instruction.

**Commit convention:** one commit for D1.1 (verify page skeleton), one
for D1.2 (demo widget + analytics events), `HEADLINES.md` can ride
with either or its own tiny commit — follow `DECISIONS.md`'s existing
per-task entry convention either way.

---

## D2 — SEO Wave 1 published with the wedge

**Blocked until A5 bucket 4 lands** (see above). Once unblocked:

**What already exists:** `tools/generate_seo_pages.py` already has a
`--wedge-first` flag and `WEDGE_CLUSTER_DOC_IDS` (CA Wedge Plan Step
22) that makes the 7 wedge documents count as stage-1/indexable
regardless of their own Tier A/B split, gated correctly on "no open
blocker/major." `tools/validate_seo_pages.py` already enforces unique
content, citation density, no near-duplicates. `SEO_LAUNCH_PLAN.md`
already documents wedge-cluster status as of CA Wedge Plan Step 22 —
**re-run this, don't trust the stale numbers in it**, since A5's work
this session changed tier/verification levels for several wedge and
non-wedge documents since that file was last written.

**What's new, concretely:**
- v2 adds a second intent category D2 explicitly calls out:
  obligation/penalty-intent pages ("California LLC annual report
  deadline penalty," "Franchise Tax Board minimum franchise tax,"
  "BOI report deadline"). Check whether `tools/generate_seo_pages.py`'s
  existing question-page generator (drawn from
  `tests/search/golden_queries.json`) already covers these, or whether
  new golden queries need to be added first — v2's own text implies
  this is new reach, not already-covered ground.
- Confirm Wave 1's actual page count against v2's "~50 pages" target
  once A5 bucket 4 lands and tiers are recomputed; `SEO_LAUNCH_PLAN.md`
  needs a fresh run of `tools/generate_seo_pages.py --stage 1
  --wedge-first` and `tools/validate_seo_pages.py` to get real,
  current numbers — don't carry over Step 22's numbers as if current.

**Still not published anywhere** — `build/seo/` stays gitignored and
undeployed until the owner's explicit go, per v1 Global Rule 10 and
v2's own Section 0 framing (distribution ships *with* the wedge, but
publishing is still an owner action, not an engineering default).

**Gates:** `python3 tools/generate_seo_pages.py --stage 1 --wedge-first`,
`python3 tools/validate_seo_pages.py`, re-derive every number in
`SEO_LAUNCH_PLAN.md` fresh rather than editing stale prose in place.

**Owner approval needed:** the actual Wave 1 list (v2 Section 16:
"approve Wave 1 list") and the publish action itself.

---

## D3 — Analytics on the proof moment

**What already exists:** `account.js`'s `trackEvent()` pipeline
(Supabase-backed), already recording `opened`, `step_reached`,
`completed`, `search`, `exported`, plus CA Wedge Plan Step 23/24's
`wedge_link_clicked` and `referral_link_clicked`.

**What's new:** the four event types D3 names don't exist yet:
`demo_clause_viewed`, `demo_source_panel_expanded` (both added in
D1.2 above — D1 and D3 are the same code change, not sequential),
`verify_page_scanned` (fires when `/verify/<id>` loads with a
referrer or query param indicating it came from a printed QR code —
this needs A7/A10's real export pipeline to mean anything with a real
QR code, so this specific event is a Phase 2+ follow-up, not fully
buildable now; a plain page-view count on `/verify/<id>` is buildable
today as a placeholder), and `demo_to_interview_started` (added in
D1.2).

**No separate D3 task, in practice** — this is instrumentation riding
inside D1.2's commit, plus one follow-up item to revisit once A7/A10
ship for real in Phase 2 (the true "verify-page scan from a printed
export" event). Note this explicitly in `DECISIONS.md` when D1.2
lands, so it isn't mistaken for complete.

---

## Sequencing within Phase 1

1. D1.1 (verify page skeleton) and D1.3 (headlines, owner pick) can
   start immediately — no A5 dependency.
2. D1.2 (demo widget + analytics) can start immediately in parallel;
   needs D1.1's `/verify/<id>` page to exist for its link to be real.
3. D2 waits on A5 bucket 4 landing, then its own fresh numbers, then
   owner approval of the Wave 1 list, then owner go to publish.
4. D3 is folded into D1.2; its one real gap (verify-page-scan-from-QR)
   waits on Phase 2's A7/A10.
