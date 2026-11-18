# Owner to-do — things only you can do

**Final consolidation pass (CA Wedge Plan, 2026-11-16):** this is now
the single, complete list — every item below was re-checked against
today's live tools and the live Supabase project while writing
`LAUNCH_READINESS.md`, and three items (9-11) were added that earlier
individual steps had left undocumented here even though they're real,
owner-only actions. Nothing in this file has been applied. Each item
is something this session genuinely cannot do itself (a credential, a
dashboard-only toggle, a destructive SQL statement blocked by a
confirmation gate this session never receives, or a decision that
needs a human — a real contact address, an attorney's judgment, a
business decision about money). See `LAUNCH_READINESS.md` for which of
these specifically block a real, paid launch of the wedge cluster
versus which are independently switchable later.

## 1. Three CI repository secrets

Two already-written CI jobs (`deploy-staging`, `backup.yml`) are
currently no-ops because these don't exist yet. Add them at:
**GitHub → this repo → Settings → Secrets and variables → Actions →
New repository secret.**

| Secret name | Value | Where to get it |
| --- | --- | --- |
| `SUPABASE_ACCESS_TOKEN` | A personal access token | Supabase dashboard → your account menu → **Access Tokens** → Generate new token. One token covers both jobs below — add it once. |
| `SUPABASE_STAGING_PROJECT_REF` | `ihlszzsnlcmtmuydkkpk` | This is the staging project's ref — already known, just paste it in. |
| `SUPABASE_PROD_PROJECT_REF` | `impurvwwjdgurbjbnydu` | This is the production project's ref — already known, just paste it in. |

Once all three exist, `deploy-staging` starts pushing migrations/
functions to staging on every push to the default branch, and
`backup.yml` starts actually backing up production (it already
runs the restore-test half today, with nothing to restore yet).

## 2. Enable Supabase leaked-password protection

**Supabase dashboard → the production project → Authentication →
Policies (or Providers, depending on dashboard version) → Password
→ turn on "Leaked password protection."** No API or MCP path reaches
this setting — it's dashboard-only. This project uses passwordless
magic-link sign-in today, not passwords, but Supabase Auth's own
password-based paths (which exist under the hood even if unused) stay
safer with this on, and `ROADMAP.md`'s case against adding real
password sign-in partly rests on this being enabled.

## 3. Two RLS/performance fixes — SQL shown below, NOT applied

Both are blocked by the same destructive-SQL confirmation gate that
also blocks `DELETE`/`TRUNCATE`/`DROP TABLE` from this session —
`DROP POLICY` triggers it too. Run each block below **yourself**, in
the Supabase dashboard's SQL editor (where the confirmation prompt
actually surfaces), against the **production** project
(`impurvwwjdgurbjbnydu`). Do not run these from this session; nothing
here has executed them.

**3a. `agreements` — `auth_rls_initplan` (4 policies call `auth.uid()`
per-row instead of once per query; harmless at current row counts,
but cheap to fix before it gets copied forward into more tables):**

```sql
drop policy if exists "Users can view their own agreements" on public.agreements;
create policy "Users can view their own agreements" on public.agreements
  for select using ((select auth.uid()) = user_id);
drop policy if exists "Users can insert their own agreements" on public.agreements;
create policy "Users can insert their own agreements" on public.agreements
  for insert with check ((select auth.uid()) = user_id);
drop policy if exists "Users can update their own agreements" on public.agreements;
create policy "Users can update their own agreements" on public.agreements
  for update using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
drop policy if exists "Users can delete their own agreements" on public.agreements;
create policy "Users can delete their own agreements" on public.agreements
  for delete using ((select auth.uid()) = user_id);
```
**Expected effect:** no behavior change for any user — same rows
readable/writable by the same people. Only the query plan improves
(each policy's `auth.uid()` check runs once per query instead of once
per row scanned).

**3b. `feedback` — `multiple_permissive_policies` (two separate
INSERT policies, one for anonymous feedback and one for signed-in
users' own feedback, both apply to the same action — merging them
into one is cheaper for Postgres to evaluate):**

```sql
drop policy if exists "Anyone can submit anonymous feedback" on public.feedback;
drop policy if exists "Users can insert their own feedback" on public.feedback;
create policy "Users can insert their own or anonymous feedback" on public.feedback
  for insert with check (user_id is null or (select auth.uid()) = user_id);
```
**Expected effect:** no behavior change — anonymous feedback
(`user_id is null`) and a signed-in user inserting their own feedback
(`user_id` matches their own id) both still work exactly as before,
now through one policy instead of two.

Run both the same way on the **staging** project too
(`ihlszzsnlcmtmuydkkpk`) so the two environments don't drift from
each other — staging's `agreements` table was created with the fixed
`(select auth.uid())` form from the start, so only 3b applies there.

(A third, unrelated item needing the same dashboard access, not part
of this phase's scope: a leftover empty probe table,
`public._scratch_probe`, two rows, no real data, blocked from removal
by the same gate — `drop table public._scratch_probe;` whenever
convenient.)

## 4. A real contact email for the Privacy and Terms pages

`privacy.html` and `terms.html` each currently show literal placeholder
text: `[project owner's contact email — to be added before this page
is published]`. Replace that string (search for it in both files) with
a real address before either page is published anywhere.

## 5. Attorney review

None of the following have been reviewed by an attorney, and each
page/feature says so explicitly where relevant:
- `privacy.html`, `terms.html`, `storage-notice.html` — the new
  Privacy Policy, Terms of Service, and Cookie/Storage notice pages.
- The "Read a contract" feature's wording (`app.js`'s
  `renderIncomingResults()`) — describes only textual resemblance,
  never legal effect; worth a legal read for the same reason the
  pages above need one.
- The filing/next-steps packet wording (`filing/next_steps.json` and
  its rendering) — states deadlines and procedural facts with
  citations; worth confirming none of it reads as instruction rather
  than information.
- Two new sections added to `terms.html`/`privacy.html` for Steps
  16/17: the referral/partner-link disclosure (FTC Endorsement Guide
  material-connection disclosure) and the review-request email
  section (CAN-SPAM, the FTC's Consumer Review Fairness Act). Worth a
  specific look since these touch advertising/consumer-protection law
  this project hasn't needed an attorney's eyes on before now.
- `terms.html`'s "Payments" section is deliberately left incomplete
  (see item 8's guarantee-copy approval, still pending) — once that's
  approved, this section needs the final price/refund/Automatic
  Renewal Law language actually written in, not just the honest
  placeholder it has today.

None of these are blocked on engineering work — they're ready for
review as they stand.

## 6. Pick real referral partners (registered agent + attorney review)

`config/referrals.json` has two slots — `registeredAgent` and
`attorneyReview` — both `enabled: false` with `url: null` and
`partnerName: null`. Nothing renders on the output screen until both
`enabled` is `true` and `url` is a real link for a given slot; this
session has no basis to pick a real company from training data, so
it was left as a placeholder, same discipline as `config/pricing.json`'s
`priceUsd` fields. To turn one on:
1. Pick a real registered-agent service and/or attorney-referral
   service (e.g. your state bar's own lawyer-referral service, or a
   vetted legal marketplace) and get your actual affiliate/referral
   URL from them.
2. Set that slot's `enabled: true`, `url`, and (optional, but shown
   in the on-screen copy if set) `partnerName` in `config/referrals.json`.
3. Confirm the referral/affiliate agreement itself doesn't require
   anything this project doesn't already do -- in particular, it must
   never require sending a user's name, address, or document contents
   to the partner (the link is always a plain, static URL with
   nothing about the specific user or document appended; see
   `renderReferralLinks()` in app.js and Global Rule 14).
`registeredAgent` only ever shows on a document that actually asks for
an agent for service of process; `attorneyReview` shows on every
document's output screen once enabled.

## 7. Review-capture email: six secrets and a schedule, all dashboard-only

The `send-review-requests` edge function (CA Wedge Plan Step 17) sends
one honest, one-time "would you leave a review" email per subscriber,
14 days after their subscription became active, and marks
`entitlements.review_requested_at` so it never repeats for that
subscription. It is deployed and fully written, but **refuses to send
anything** until every one of these Supabase edge function secrets
exists (**Supabase dashboard → this project → Edge Functions →
send-review-requests → Secrets**, or `create_edge_function_secret`):

| Secret | What it's for |
| --- | --- |
| `RESEND_API_KEY` | A [Resend](https://resend.com) API key (or swap the one `fetch('https://api.resend.com/emails', ...)` call in `supabase/functions/send-review-requests/index.ts` for whichever email provider you'd rather use). |
| `RESEND_FROM_ADDRESS` | The "from" address Resend is allowed to send as (must be a domain you've verified with Resend). |
| `REVIEW_EMAIL_CRON_SECRET` | A random string you make up. Whatever triggers this function on a schedule (see below) must send it back as the `X-Cron-Secret` request header, or the function returns 401. |
| `OWNER_REPLY_TO_EMAIL` | Shown in the email as the reply-to address for feedback/opt-out requests. Can reuse the same address item 4 above asks for. |
| `OWNER_MAILING_ADDRESS` | **Required by federal law** (CAN-SPAM, 15 U.S.C. § 7704) in every commercial email — a real postal address. This function will not send a single email without it; there's no "skip this" option. |
| `REVIEW_LINK_URL` | Where the email actually sends people to leave a review (e.g. a Google Business Profile review link, a Trustpilot page). Nothing invented here either. |

Once all six exist, you still need to make the function actually fire
on a schedule — nothing calls it automatically. Easiest path:
**Supabase dashboard → this project → Edge Functions → Cron** (or any
external scheduler that can send an HTTP request), pointed at this
function's URL, daily, with header `X-Cron-Secret: <the same value as
the REVIEW_EMAIL_CRON_SECRET secret above>`. A run with nothing to do
(no subscription has crossed 14 days yet) is a harmless no-op.

## 8. Approve (or amend) the 30-day guarantee / Automatic Renewal Law copy

`PRICING_STEP7_GUARANTEE_PROPOSAL.md` (Step 7) proposed a 30-day
unconditional refund window plus the specific pre-purchase disclosure
and acknowledgment-email copy California's Automatic Renewal Law
requires for a subscription — still sitting unapproved. Nothing
downstream has been written as if it were approved:
`config/pricing.json`'s `refundPolicy` fields are still `null`, and
`terms.html`'s "Payments" section (Step 20) deliberately stops short
of final refund/renewal language, saying plainly that it's still
pending. Read that proposal, approve it, amend it, or write your own;
once you do, the refund window and renewal-disclosure copy need to
actually go into `config/pricing.json` and `terms.html` before real
payments go live.

## 9. Run the Step 23 user test with real people

`USER_TEST_PLAN.md` is a ready-to-run, 6-task script centered on the
wedge cluster (find it unprompted, fill out the Articles of
Organization, find the filing next-steps section, use the contract
reader, understand the free/paid split, and the real question
everything builds toward — would they trust this for their own LLC).
This session can write the script but can't recruit or sit with 3-5
real people — that's genuinely something only you can do. It doesn't
need to wait on any other item in this file; running it now, before
the owner-gated items below clear, would surface product-level
problems earlier rather than later.

## 10. Decide on SEO publishing (domain, hosting, Search Console)

`build/seo/` stays gitignored and `config/seo.json`'s `baseUrl` is
still `""` — Step 22's own "do not publish" gate, deliberately left
uncrossed by this session. `SEO_LAUNCH_PLAN.md` recommends
`python3 tools/generate_seo_pages.py --stage 1 --wedge-first`
(20 pages: the 7-document wedge cluster plus 15 unrelated Tier A
documents) as the first real publish, but that needs three things
only you can set up: a real domain, hosting for the generated static
pages, and a Google Search Console property pointed at it. None of
this blocks the product being usable today — it only blocks organic
search traffic finding it, which this plan always treated as later
than the product itself being ready.

## 11. Decide whether Step 25 (optional minimal business profile) happens at all

The master plan marks this step optional, and this session's local
context doesn't retain its exact scope text (it came from an earlier
part of this long-running conversation, not a file in this repo) —
see `LAUNCH_READINESS.md` and `DECISIONS.md`'s Step 24 entry for why
guessing at unspecified scope and building something unasked-for was
judged the wrong call under Global Rule 15. If you want this step
done, the next session needs either the original plan's wording for
it or a fresh, explicit scope from you.

## 12. A real dead-link pattern on uscode.house.gov, and whether leginfo/eCFR are reachable from your own network

Found during Part B's citation recheck (`review/CITATION_RECHECK_REPORT.md`,
2026-11-18):

- **53 unique `uscode.house.gov` URLs (194 citations) return a
  genuine 404** — confirmed not a sandbox issue: the site's own
  homepage works, a real browser User-Agent makes no difference, and
  the 404 is a real, rendered "Page Not Found - US Code" page. The
  URL format this corpus uses (`edition=prelim` with no release
  number) looks like a stale link scheme the site has since moved
  past. This needs a real fix — a corrected URL format or a
  different official source — through the normal patch-file process;
  not fixed yet, since Global Rule 5 means an engineering session
  doesn't rewrite a citation's URL without that review step.
- **`www.ecfr.gov` is now confirmed blocked from this sandbox too** —
  every real eCFR URL redirects to a bot-verification page
  (`unblock.federalregister.gov`) this sandbox's own network policy
  refuses to reach. Same question as `leginfo.legislature.ca.gov`
  (item still open, not repeated here): can either be reached from
  your own network, or from a session with different access? If so,
  the 113 eCFR-cited and 7,281 leginfo-cited citations (73.1% of all
  authority clauses) could actually be re-verified instead of staying
  blocked indefinitely.

## 13. CourtListener's own API quota is capping how fast B1's second half can finish

Found 2026-11-18 (`review/COURTLISTENER_RECHECK_B1.md`,
`DECISIONS.md`). The CourtListener MCP tool shares one account-wide
budget across every call: **5/min, 50/hour, and 125/day**. A single
session burns through the hourly and most of the daily allowance in
well under an hour of real work, so finishing the remaining ~2,100
CourtListener citation-checks (plus the 19 opinion-ID re-checks and 57
old-file re-checks this session already identified as needed) will
take several more sessions spread over several days at this account's
current quota, not one sitting. This doesn't block anything else —
it's not owner-only work — but if you have, or can get, a
CourtListener account with a higher API tier, pointing this session's
MCP connection at it would turn a multi-day task into an
afternoon. Otherwise no action needed; future sessions will keep
chipping away at `review/COURTLISTENER_RECHECK_B1.md`'s "What's left"
list as quota allows.
