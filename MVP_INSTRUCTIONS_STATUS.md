# MVP_BUILD_INSTRUCTIONS.md — status audit

Run 2026-11-19 against branch `claude/new-session-palh5c`, read-only
audit (no files changed except this one). Numbers re-measured today
via `tools/validate_corpus.py` and `tiers.json` (itself regenerated
today), not recalled from memory. Section numbers match
`MVP_BUILD_INSTRUCTIONS.md` exactly.

## Phase 0

**0.1 Re-baseline — ALREADY DONE, but surfaces one real mismatch.**
`MVP_BASELINE.md` and `BUILD_STATUS.md` both exist and were written
under the prior plan iteration. Re-running the measurement today:
741 documents / 6621 clauses (4989 authority, 1632 drafting), 11688
citations (`validate_corpus.py`); Tier A/B/C = 29 / 322 / 390, 9
drafting-only (`tiers.json`, `generated_at: 2026-11-19`).
**Mismatch:** `BUILD_STATUS.md` (dated 2026-11-16) still says "15 at
Tier A" — the real, current number is **29**, reflecting the A5
bucket-verification work done 2026-11-18. This is exactly the kind of
mismatch 0.1 asks to flag. `BUILD_STATUS.md` needs a refresh pass;
not done as part of this read-only audit.

**0.2 Source-access check — ALREADY DONE.** `review/SOURCE_BLOCKS.md`
exists with exact URLs and owner questions.

**0.3 Launch set — ALREADY DONE AND ALREADY APPROVED.**
`LAUNCH_SET_PROPOSAL.md`'s status line: "**APPROVED** (owner,
2026-11-18... 'Approve as proposed')." 128 documents (122 fillable +
the strongest info-sheets), not just ~50 — a deliberate, reasoned
expansion beyond this doc's "~50" suggestion, already owner-approved.
**Do not re-ask for this approval.**

**0.4 Cost gate — ALREADY DONE AND ALREADY APPROVED.**
`LAUNCH_SET_VERIFICATION_ESTIMATE.md` exists; owner answered "Approve
all 4 buckets" via AskUserQuestion on 2026-11-18, and all 4 buckets
were executed (`LAUNCH_SET_VERIFICATION_WAVE1/2/3.md`,
`verifier/findings.jsonl`/`triage.jsonl` entries, `clauses.json`
edits). **Do not re-ask for this approval.**

**0.5 Owner checklist — ALREADY DONE.** `OWNER_TODO.md` exists and has
been kept current all session, including a new item 8b added today
for the entitlements rebuild (Stripe Price, `ADMIN_API_SECRET`).

## Phase 1

**1.1 Wedge confirmation — ALREADY DONE.**
`review/A3_WEDGE_CONFIRMATION.md` (2026-11-18): all 7 wedge
documents' 40 authority clauses CA-primary-sourced, 0 open
blocker/major.

**1.2 Three-level clause labels — ALREADY DONE.** `methodology.html`
states exactly this three-level model ("Cited, Verified,
Adversarially checked") with the badge/check-date/plain-explanation
language this item asks for (lines 75-76).

**1.3 sourceClass — ALREADY DONE.** `verifier/NON_PRIMARY_SOURCES.md`
and `review/NON_PRIMARY.md` both exist, listing mirror/secondary
clauses queued for re-verification.

**1.4 The four specific re-verifications — ALREADY DONE,** confirmed
by direct read of `data/clauses.json` today:
- `smallclaims_judgment_enforcement`: `status: "verified"`,
  `checkedDate: "2026-11-19"` (today).
- `namechange_gender_identity_conforming_process`: `status:
  "verified"`, `checkedDate: "2026-11-19"` (today). Both of these
  were the exact two clauses `MVP_BASELINE.md` (2026-11-17) had
  flagged as still `"unverified"` — resolved since, in the A5
  bucket-verification work.
- Small-claims CCP clauses (`smallclaims_jurisdiction_and_dollar_limits`
  and five siblings): all `verified`, checked 2026-11-09.
- AI Transparency Act clauses (`aitransparency_covered_provider` and
  four siblings): all `verified`, checked 2026-09-04/2026-10-31; none
  carries an `unverified` status, so the SB 1000 item appears resolved
  too (not independently re-fetched in this read-only audit).

**1.5 Launch-set verification — ALREADY DONE.** This is exactly the
A3/A5 work: adversarial checks per clause, findings with severity/
quote/patch, triage, re-verify, log — all executed and committed
(`verifier/findings.jsonl`, `triage.jsonl`, `changelog.html`,
`LAUNCH_SET_VERIFICATION_WAVE1/2/3.md`).

**1.6 Research files — NOT DONE, confirmed genuinely absent.** No
`review/documents/` directory exists at all (`ls` returns "No such
file or directory"), and nothing in `DECISIONS.md` describes an
equivalent file under another name. This is a real, unstarted,
per-launch-document deliverable — 128 files, one per launch-set
document, each needing governing-law research, omission findings,
voided-provision findings, federal overlay, recent/upcoming changes,
scope notes, and an interview-coverage check. The single largest
Phase 1 gap.

**1.7 Tiers — ALREADY DONE** and current (`tiers.json` regenerated
today, Tier A = 29, `tiering.py`/`validate_corpus.py` both reflect
it; drafting-only documents correctly excluded from Tier A).

**1.8 `verifier/LAUNCH_SET_REPORT.md` — NOT DONE under that exact
filename,** but the substance mostly exists split across
`LAUNCH_SET_VERIFICATION_WAVE1/2/3.md` and
`LAUNCH_SET_VERIFICATION_ESTIMATE.md` (finding rates, triage
outcomes, what's unresolved). No single consolidated report file
exists under the name this item specifies — call this PARTIALLY DONE:
real content exists, assembling it into the one named file is a small
remaining step, not new verification work.

## Phase 2 (buy flow — freshest ground, just rebuilt this session)

**2.1 Pricing decision — PARTIALLY DONE.** `PRICING_OPTIONS.md`
exists; `config/pricing.json` is `"model": "per_document"` with every
`priceUsd` still `null`. `editsIncluded: {reExports: 3, windowDays:
30}` answers "how many edits/re-exports a purchase includes." Two
specific sub-asks remain genuinely open: **(a)** the "optional paid
reminder add-on" question — `pricing.json`'s `subscription` block is
explicitly `"active": false` / deferred, so no add-on decision has
been made either way; **(b)** no-guest-checkout — not found recorded
as a decision anywhere in `DECISIONS.md` (grepped, no match) even
though the actual implementation requires sign-in (`accountState.session`
gates every entitlement check) — the decision was made in effect by
the code but never written down as a decision per this item's own
instruction ("Record the no-guest-checkout decision in DECISIONS.md").

**2.2 Supabase migrations — ALREADY DONE,** and more completely than
this item's own wording suggests at first read: `orders` and
`order_items` tables already exist
(`supabase/migrations/20261028000000_baseline.sql`, predates this
session), separate from `entitlements`
(`supabase/migrations/20261113000000_entitlements.sql`, restructured
today by `20261119000000_entitlements_per_document.sql`). All three
tables have RLS enabled. **Real partial gap:** "adversarial tests on
every table (a second user cannot select, insert, update or delete)"
— `DECISIONS.md` documents a real adversarial-RLS-testing technique
used earlier (direct Postgres role/claim impersonation, not a live
anon-key client, since this sandbox's egress to the live project is
blocked) but that was applied to the *original* `entitlements`/
`agreements`/`document_versions`/`document_shares` policies, not
re-run against the *new* `has_active_entitlement(document_id)`
function or the restructured policies from today's migration. No
automated/persisted RLS test suite exists anywhere in the repo
(searched for RLS test files — none found). This is a real, concrete,
not-yet-done verification step on work from today's own commit.

**2.3 `release-document` edge function — NOT DONE, confirmed.**
`supabase/functions/` contains: `_shared`, `admin-refund`,
`create-checkout-session`, `create-portal-session`,
`delete-account`, `list-sessions`, `send-review-requests`,
`share-sign`, `share-view`, `stripe-webhook`. No `release-document`
function, and no server-side PDF/DOCX rendering exists anywhere in
the codebase (confirmed by the earlier `MVP_SPEC_STATUS.md` audit and
reconfirmed here). This is the single biggest unbuilt piece of Phase
2, and arguably of the whole MVP.

**2.4 Golden text-parity tests / removing client-side export for paid
docs — NOT DONE, and worse than "not yet built": there is currently
NO paywall gating of any kind on document export.** Direct grep of
`app.js`'s export handlers (`output-download-pdf`, `output-download-
docx`, the plain-text/JSON export buttons, all built on
`buildPdfDocDefinition()`/`buildDocxDocument()`/`buildPlainText()`)
returns **zero** references to `isEntitledFor`/`entitled` anywhere in
`app.js`. Every export format is fully free, client-side, for every
document, right now. This directly contradicts Global Rule 2 ("Paid
export needs the backend") and Global Rule 11 ("All paywall
enforcement is server-side. Client-side gating is cosmetic.") — not
because client-side gating was wrongly relied on, but because there
is currently *no gating at all*, client-side or server-side. The
per-document entitlements/Stripe stack rebuilt today
(`account.js`'s `isEntitledFor()`) governs cloud save, sharing, and
e-signature — it was never wired to the export buttons themselves,
because 2.3's `release-document` function (the thing that's actually
supposed to gate export) doesn't exist yet to wire it to. **This is
the most urgent, concrete finding in this entire audit:** the product
today sells nothing, because the thing it would charge for is given
away unconditionally.

**2.5 Stripe webhooks/e2e tests/rate limits/anomaly alerts/Stripe Tax
— PARTIALLY DONE, with one deliberate, documented divergence.**
`stripe-webhook/index.ts` handles exactly `checkout.session.completed`,
`charge.refunded`, `charge.dispute.created` — not
`invoice.paid`/`invoice.payment_failed`/`customer.subscription.updated`/
`deleted`, which this item's literal list still includes.
`DECISIONS.md`'s 2026-11-19 entry documents why: those four events
cannot fire for a one-time `mode: 'payment'` Checkout Session (no
Invoice object is ever created), so handling them would be dead code,
not missing code. **This is a considered, documented divergence from
this document's literal wording, not an oversight** — flagging for
the owner to confirm the reasoning is accepted, since the document as
written still lists them as required. Genuinely NOT DONE: end-to-end
test-mode tests (purchase/failed-payment/refund/cancel/duplicate-
webhook-replay/dispute/unauthorized-release) — none of this session's
edge-function work has ever actually been invoked from this sandbox
(no `deno` binary, confirmed in `DECISIONS.md`; only a `tsc`
type-check was run) — real rate limits, download limits, and anomaly
alerts (none found in any edge function); and a Stripe Tax
evaluation / sales-tax note for the accountant in `DECISIONS.md`
(grepped, not found).

**2.6 California Automatic Renewal Law — correctly N/A for now,
consistent with 2.1 being open.** No recurring-charge copy exists
anywhere in the live pricing model (`subscription.active: false`), so
ARL doesn't currently apply — this is the right state, not a gap,
*unless* 2.1's still-open "paid reminder add-on" question is answered
yes, at which point this becomes live work. `DECISIONS.md` already
has substantial prior ARL research on record (lines ~3365, ~3958,
~4108, ~4128 — from when the Step 7 guarantee proposal and the
now-reversed subscription model were active) that would still apply
if an add-on reintroduces recurring charges.

## Phase 3

**3.1 Source panel — ALREADY DONE** (confirmed built and tested in
this session's own D1.2 work and pre-existing wedge-callout/source-
panel code).

**3.2 Verify page — PARTIALLY DONE, same spec/design tension flagged
before, now confirmed sharper under this document's wording.**
`tools/generate_verify_pages.py` builds `verify/${doc.id}.html` keyed
by **document template id**, not a per-purchase/per-generation unique
id (confirmed: `app.js`'s `verifyPageUrl(doc)` returns
`verify/${doc.id}.html` — the same URL for every person who generates
that same document type). This satisfies "a footer link to
/verify/<id>" and the content requirements (title, clause ids with
level/check date, corpus version) but does **not** match "unguessable
ids... ids cannot be enumerated" — the ids are not just guessable,
they're the literal, public document slugs. `MVP_SPEC_STATUS.md`
already flagged this as a possible spec/design mismatch rather than a
confirmed vulnerability, because no per-user data is stored on these
pages today — that reasoning still holds, but this document's much
more explicit, repeated emphasis on unguessable/non-enumerable ids
(twice in one sentence) suggests the owner may actually want the
per-generation model this item describes, which would be new work
(a verify record per document generated, not per document type).
Worth an explicit owner call rather than silently picking one reading.

**3.3 Trust page — ALREADY DONE** (`/trust`, CI-rebuilt from corpus/
verifier data, per CA Wedge Plan Step 18, already completed this
session per the task list).

**3.4 Home page — ALREADY DONE** (demo-clause widget built and tested
this session's D1.2 work; `HEADLINES.md` has three options, lint-
clean against `lint/advisory_phrases.json`).

**3.5 Paid experience — PARTIALLY DONE.** Full preview/sources are
free before payment (true, and unaffected by the 2.4 gap above — this
is about browsing, not export). The "what you get" panel (formats,
edits included, download window, refund policy) is **not** confirmed
built anywhere searched; `account.js`'s new `renderPurchaseSection()`
(built today) shows a one-line description, not a structured panel
with all four of these fields, and the refund policy itself is still
an unwritten owner decision (`pricing.json`'s own `refundPolicy._note`:
"Not yet written").

## Phase 4

**4.1 Verify tool v1 — PARTIALLY DONE, real shape mismatch.** A free,
no-account, browser-based tool exists (`contract_matcher.js`/
`contract_worker.js`), but it is paste-only TF-IDF resemblance
matching against the corpus — it matches this item's "resemblance
reader" description reasonably well (shows sources, presumably a
"no close match" floor), but **no separate single-citation lookup
tool** (showing current statute text + check date for one citation
typed in) was found anywhere — `app.js`/`methodology.html`/
`changelog.html` all reference citations in context, not a standalone
lookup. The 55-case eval (78% top-1 / 98% top-3) — not re-confirmed in
this audit; would need the eval script run, not just a grep. This
item's single-citation lookup half appears genuinely unbuilt.

**4.2 SEO Wave 1 — ALREADY DONE (built, not published).**
`SEO_LAUNCH_PLAN.md`'s own first line: "Nothing described in this
document has been published anywhere" — wedge-first Wave 1 pages
built per CA Wedge Plan Step 22, correctly withheld pending owner
go-ahead, exactly as both this item and item 4.3 require.

**4.3 Publish Wave 1 — correctly NOT published, waiting on owner
go** (`SEO_LAUNCH_PLAN.md` confirms; `LAUNCH_PLAN.md` itself wasn't
separately located by name in this audit's file listing — worth a
follow-up check, but `SEO_LAUNCH_PLAN.md` appears to cover the same
ground).

## Phase 5

**5.1 Legal pages — ALREADY DONE** (Terms/Privacy/refund/storage
notice drafts per CA Wedge Plan Step 20, `PRIVACY_DATA_INVENTORY.md`
exists).

**5.2 Notices + copy lint — ALREADY DONE** (`lint/copy_lint.py` passes
clean on every gate run this session, confirmed again today).

**5.3 Analytics on trust moments — ALREADY DONE** (`trackEvent(` calls
exist 6 times each in `app.js` and `account.js`, matching the
documented trust-moment events from CA Wedge Plan Step 23).

**5.4 Commit-discipline CI/hooks — ALREADY DONE as a mechanism, but
NOT currently active, and this surfaced a real, live problem.**
`tools/check_commit_discipline.py` already implements exactly what
this item describes: every commit on the protected branch
(`.claude-protected-branch` → `claude/new-session-palh5c`, i.e. this
session's own working branch) must carry a `Reviewed-By:` trailer,
and any commit changing clause *text* (not status/checkedDate/
sourceClass) must carry a `Patch-ID:` trailer — enforced locally via
`.githooks/commit-msg` + `.githooks/pre-push`, and server-side via a
`branch-discipline` CI job in `.github/workflows/ci.yml` that "can't
be skipped with --no-verify." **Running this check directly against
this session's own most recent commit (`532c271`, the entitlements
rebuild) fails it: "no 'Reviewed-By:' trailer."** `git config
core.hooksPath` is unset in this sandbox clone, meaning the local
hooks were never installed/active this session, so this and very
likely other recent commits were never checked before push. Given the
CI job runs server-side on every push regardless of local hooks, this
strongly suggests **CI on `claude/new-session-palh5c` is red right
now** on GitHub, specifically on the `branch-discipline` job, over
commit `532c271` (and possibly earlier ones — not exhaustively
checked). This is a live, already-triggered failure, not a
theoretical gap, and should be the first thing addressed once
building resumes — either by amending history to add the trailer (a
rewrite, needs explicit owner sign-off per Global Rule 10) or by some
other owner-approved remediation.

**5.5 Launch-critical checks — PARTIALLY DONE.**
`LAUNCH_CRITICAL_CHECKS.md` exists (CA Wedge Plan Step 21). Two
specific sub-items confirmed still missing, consistent with the
earlier `MVP_SPEC_STATUS.md` finding: **no freshness-watcher cron**
(`.github/workflows/*.yml` has exactly one `schedule:` trigger, in
`backup.yml`, unrelated to law-change watching or citation rechecks)
and **no runbook files** (`find . -iname "*runbook*"` returns
nothing) for a legal-content error, a payment incident, or a data
incident.

**5.6 User test plan — ALREADY DONE** (`USER_TEST_PLAN.md`, CA Wedge
Plan Step 23).

**5.7 `LAUNCH_READINESS.md` — ALREADY DONE,** but explicitly flagged
STALE-NEEDS-RECHECK per this session's own earlier audit — not
re-verified line-by-line in this pass; the file exists and has the
right shape (pass/fail table, top-five risks, live-mode switch
procedure).

## Owner-approval gates

**(a) Already granted this session — do not re-ask:**
- Launch set (0.3 / `LAUNCH_SET_PROPOSAL.md`) — "Approve as proposed," 2026-11-18.
- Verifier cost estimate (0.4 / `LAUNCH_SET_VERIFICATION_ESTIMATE.md`) — "Approve all 4 buckets," 2026-11-18.
- The per-document vs. subscription pricing-model direction itself — "The former," 2026-11-19 (this is the decision this document's own 2.1 restates; already acted on).

**(b) Still genuinely open:**
- 2.1's two unresolved sub-questions: the optional paid reminder add-on (yes/no), and formally recording the no-guest-checkout decision (the code already enforces it; the written decision doesn't exist yet).
- The actual price points in `config/pricing.json` (all `null`).
- The refund policy window/summary (`pricing.json`'s `refundPolicy._note`: "Not yet written").
- 3.2's verify-page identity model: accept the current per-document-template design (static, low-risk, already built), or require a genuinely new per-generation unique-id design to literally satisfy "unguessable... cannot be enumerated."
- 2.5's event-list divergence: accept the documented reasoning for not handling `invoice.*`/`customer.subscription.*` events under a one-time-purchase model, or treat this document's literal list as overriding that reasoning.
- Everything already listed in `OWNER_TODO.md` (Stripe account/keys, CI secrets, domain/hosting, attorney review, etc.) — unchanged by this audit, not re-litigated here.

## Real, concrete, un-started gaps — ranked by how foundational they are to "launch"

1. **No paywall gating exists on document export at all (2.4).** Every
   export format is free for every document right now. This is more
   urgent than "build the release-document function" — it means the
   product currently cannot charge for anything even once a backend
   exists, because nothing stops a buyer from just using the existing
   free client-side export instead.
2. **No `release-document` server-side rendering function exists
   (2.3).** The prerequisite for fixing #1 properly (Global Rule 11:
   client-side gating is cosmetic) — without this, #1 can only be
   patched with client-side checks, which the project's own rules say
   don't count as real enforcement.
3. **CI is very likely red right now on `branch-discipline` over
   commit `532c271`** (5.4) — a live, already-triggered failure
   uncovered by this audit, not a future risk.
4. **No research files for any of the 128 launch-set documents (1.6)**
   — the largest single unstarted content deliverable.
5. **No adversarial RLS re-test of today's new entitlements schema/
   policies (2.2)** — the general technique exists and was used
   before, just not re-run against today's own migration.
6. **No end-to-end test-mode Stripe testing, rate limits, or anomaly
   alerts (2.5)** — none of this session's edge-function code has
   ever actually executed.
7. **No freshness-watcher cron or incident runbooks (5.5)** — known
   gap, reconfirmed.
8. **No standalone single-citation lookup tool (4.1)** — the
   resemblance-reader half of the verify tool exists; this half does
   not.

## Conflicts with a decision already made this session

- None found that aren't already called out above as open questions
  (3.2's verify-page identity model, 2.5's webhook event list). The
  per-document purchase direction this document assumes (2.1's "price
  the document," the "Do Not Build" list's "subscriptions beyond the
  optional add-on decision") matches, rather than conflicts with,
  today's entitlements rebuild and the owner's "The former" answer —
  no silent re-litigation needed there.
