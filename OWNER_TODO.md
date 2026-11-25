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

## 8. Approve (or amend) the refund-window copy — Automatic Renewal Law largely moot now

**Updated 2026-11-19**: the pricing model reverted from subscription
back to per-document, one-time purchase (`DECISIONS.md`, MVP_SPEC.md
Section 3) — California's Automatic Renewal Law mainly governs
*recurring* charges, so most of `PRICING_STEP7_GUARANTEE_PROPOSAL.md`'s
renewal-disclosure/acknowledgment-email copy no longer applies to what
this project actually sells today. The 30-day refund-window half of
that proposal is still relevant to any purchase model and still needs
your approval or amendment — `config/pricing.json`'s `refundPolicy`
fields are still `null`, and `terms.html`'s "Payments" section (Step
20) still stops short of final refund language. If a subscription
add-on (PRICING_OPTIONS.md's Option C) is ever revisited post-launch,
the renewal-law copy becomes relevant again at that point, not before.

## 8b. Stripe setup for the per-document purchase flow (new, 2026-11-19)

Two things only you can do before `create-checkout-session` can run
for real:
- Create a **one-time** (not recurring) Stripe Price for the
  per-document purchase amount once you've picked it, and set its id
  as this project's `STRIPE_PRICE_ID` secret — the code reads the
  price from this id, never a dollar amount written into the
  codebase, so there's nothing else to change there once you do this.
- Set a new `ADMIN_API_SECRET` secret (any long random string) for
  the new `admin-refund` edge function (`supabase/functions/admin-refund/`)
  — there's no admin-role login system built yet, so this function is
  gated by a shared secret you keep private, called via curl/Postman
  today, not from any page. Issuing a refund still also needs your
  Stripe dashboard access or this function's secret either way.

## 8c. Deploy and test `release-document` before trusting it with a real sale (updated 2026-11-23 — partially done, one step left only you can finish)

This is the function that actually renders and paywall-gates PDF/DOCX/
text export server-side (`supabase/functions/release-document/`) —
before it existed, every export was free and unpaywalled for everyone,
client-side only (confirmed by `MVP_INSTRUCTIONS_STATUS.md`'s audit).

**Done this session (MVP_FINISH_VERIFY_SHARPEN.md item 1.1):**
- Comparing the actual released PDF/DOCX against the on-screen preview
  found three real, undisclosed gaps — the rendered output had no
  jurisdiction notice, no real per-page/footer-section document-id-and-
  date footer, and no verify-page link, unlike the client's own export.
  All three are fixed (see `DECISIONS.md`'s 2026-11-23 entry) and
  covered by a parity test across 5 real documents spanning every
  jurisdiction-notice variant (CA/FED/MIXED/none).
- The function (real, unmodified `index.ts`/`document_engine.mjs`/
  `rate_limit.ts`) is **already deployed live** — but with a **test-only,
  3-document data bundle** (`nda`, `llc_operating_agreement_single_member`,
  `noncompete`) and a **fake `baseUrl`**
  (`https://groundtruth-test.example.com`), not the real 128-document
  launch set, kept small on purpose to limit how much had to pass
  through this session's own context window. **Redeploy the real bundle
  before any real customer can reach this** — from a machine with a
  normal `supabase` CLI and network access:
  ```
  python3 tools/build_release_bundle.py   # regenerates the real data/launch_set_*.json files, baseUrl='' until a domain is set
  supabase functions deploy release-document
  ```
- This session set up a throwaway test buyer for its own verification
  attempt and asked to delete it again afterward — see the session's
  own chat record for whether that cleanup was confirmed, since this
  file can't track that after the fact. Either way, create your own
  fresh one rather than reusing anything from this session (anyone
  with normal network access to supabase.co can do this in a minute or
  two; this sandbox's own egress policy hard-blocks that host,
  confirmed by a 403 "do not route around it" from this session's
  proxy, which is why this session couldn't finish the step itself):
  ```sql
  -- 1. Run in the SQL editor, with a password of your own choosing:
  with new_user as (
    insert into auth.users (
      instance_id, id, aud, role, email, encrypted_password,
      email_confirmed_at, raw_app_meta_data, raw_user_meta_data,
      created_at, updated_at, confirmation_token, email_change,
      email_change_token_new, recovery_token
    ) values (
      '00000000-0000-0000-0000-000000000000', gen_random_uuid(),
      'authenticated', 'authenticated', 'release-document-test@example.com',
      extensions.crypt('<choose a password>', extensions.gen_salt('bf')),
      now(), '{"provider":"email","providers":["email"]}', '{}',
      now(), now(), '', '', '', ''
    ) returning id, email
  )
  insert into auth.identities (id, user_id, provider_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
  select gen_random_uuid(), id, id::text, jsonb_build_object('sub', id::text, 'email', email), 'email', now(), now(), now()
  from new_user
  returning user_id;  -- copy this id, you'll need it below

  insert into public.agreements (id, user_id, document_id, title, answers)
  values ('owner-test-nda', '<user_id from above>', 'nda', 'Non-Disclosure Agreement',
    '{"companyName": "Test Co.", "employeeName": "Test Person"}'::jsonb);

  insert into public.entitlements (user_id, document_id, status, exports_used, exports_allowed)
  values ('<user_id from above>', 'nda', 'active', 0, 3);
  ```
  ```
  # 2. Sign in to get a real access token:
  curl -s -X POST 'https://impurvwwjdgurbjbnydu.supabase.co/auth/v1/token?grant_type=password' \
    -H 'apikey: <the anon/publishable key from Project Settings -> API>' \
    -H 'Content-Type: application/json' \
    -d '{"email":"release-document-test@example.com","password":"<the password you chose above>"}'
  # copy the "access_token" from the response

  # 3. Call release-document for the nda/pdf agreement you just seeded:
  curl -s -X POST 'https://impurvwwjdgurbjbnydu.supabase.co/functions/v1/release-document' \
    -H 'Authorization: Bearer <access_token from step 2>' \
    -H 'Content-Type: application/json' \
    -d '{"documentId":"nda","format":"pdf"}'
  # the response's "url" is a 5-minute signed download link -- open it
  # and confirm: real text, the jurisdiction notice (nda has none, by
  # design -- try llc_operating_agreement_single_member or noncompete,
  # both of which do), a footer reading "nda · generated <today>" with
  # page numbers, and a "Verify this document's sourcing at: ..." line
  # (real, since this test deploy's baseUrl is set -- the real deploy's
  # won't show one until a domain is configured, by the same design the
  # client already uses).
  # Repeat with "format":"docx" to check the .docx the same way.
  ```
  ```sql
  -- 4. Once you're done, delete your test user and its data (replace
  -- <user_id> with the id from step 1):
  delete from public.entitlements where user_id = '<user_id>';
  delete from public.agreements where user_id = '<user_id>';
  delete from auth.identities where user_id = '<user_id>';
  delete from auth.users where id = '<user_id>';
  ```
- Also worth testing the same way while you're in there, per
  `MVP_FINISH_VERIFY_SHARPEN.md` item 1.1: a second real purchase of the
  same document (confirm `exports_used` increments and a 4th export is
  refused once `exports_allowed` is hit), and an entitlement row with
  `status` set to `'refunded'` or `'disputed'` (confirm release is then
  refused) — both easy to simulate by editing the seeded entitlement row
  directly before step 2 above, without needing a real Stripe event.
- What this session could *not* verify, and why: a real Stripe
  test-mode checkout, webhook delivery, refund, dispute, or duplicate-
  webhook replay. Not a sandbox limitation this time — this session has
  no Stripe test-mode API keys at all, so the full money path from
  checkout through to `stripe-webhook` writing the entitlement row has
  never run anywhere in this project. Everything above tests the half
  of the money path downstream of that write (entitlement check through
  rendered bytes), which is the part this session could actually reach.
- The PDF/DOCX rendering libraries (`pdf-lib`, `docx`) themselves remain
  the single least-verified piece of code in this project in one
  specific sense: their real npm API shape has still only been checked
  against hand-written `tsc` stubs (no `deno` binary in this sandbox,
  and an autonomous `npm install` to check against the real packages
  was refused by this session's own safety controls) — never actually
  executed anywhere until whoever runs the curl commands above does so.
  If the PDF or DOCX comes back malformed, that is the first place to
  look — the clause-assembly logic itself (title, prepared-for line,
  clause bodies, citations, conditional-clause notes, jurisdiction
  notice) is proven byte-identical to the live client by
  `tests/release_document/test_document_engine_parity.js`, which did
  run and pass in this sandbox across 5 real documents, so a problem is
  far more likely to be in the PDF/DOCX layout code than in which
  content got selected.

## 8d. Approve or reject 5 patch proposals on wedge documents before publishing their pages (new, 2026-11-25)

`MVP_FINISH_VERIFY_SHARPEN.md` item 1.5 asked for a `review/documents/<docId>.md`
research file on every launch-set document, wedge first, with its own
rule: "Any missing-element finding on a wedge document is a launch
blocker... Do not publish a wedge page until its file is written and
its blockers are resolved." All 7 wedge documents now have one
(`review/documents/`) — real legal research against current CA/federal
law, not a code-review pass, using CourtListener and web search, with
every claim either citation-checked or explicitly flagged as not yet
confirmed to this corpus's own primary-source standard. **5 of the 7
found a real, sourced gap** — none of these are stylistic, all come
with a concrete patch proposal (new or changed clause text, with
citations) for you to approve or reject. None have been applied to
`data/clauses.json` — that's your call, consistent with this project's
Reviewed-By discipline for clause-text changes (see `review/REVIEWED_BY_AUDIT.md`
and item 1.3 above).

1. **`llc_articles_of_organization`** — its own `llc_articles_required_content`
   clause already quotes Cal. Corp. Code § 17702.01(b)(3), which
   requires stating the LLC's principal office street address — but no
   field or clause in this document actually collects or states that
   address (only the separate agent-for-service address is collected).
   A buyer using this document today would file articles missing a
   statutorily required element with nothing in the interview to catch
   it. Patch: new `principalOfficeAddress` field + new drafting clause.
   See `review/documents/llc_articles_of_organization.md` §2.
2. **`llc_operating_agreement_single_member`** (the wedge's flagship
   document) — no clause addresses RULLCA's § 17704.09 fiduciary duties
   (loyalty/care/good-faith-fair-dealing — the last is statutorily
   non-waivable), or what happens if the sole member later admits a
   second member. Both are standard practice for this document type.
   See `review/documents/llc_operating_agreement_single_member.md` §8
   for the two patch proposals. That file also flags (non-blocking, but
   worth your attention): the `stateOfFormation` field's own example
   value is "Delaware," even though every authority clause cites
   California law specifically — the jurisdiction-notice mechanism
   built earlier this session (see `DECISIONS.md`'s 2026-11-23 entry)
   partly covers this, but the file recommends tightening further.
3. **`llc_default_operating_rules_info_sheet`** — covers the default
   voting-threshold rule (§17704.07) but omits California's default
   profit/loss/distribution rule (§17704.04 — split by relative
   *contribution value*, not ownership percentage or equal shares, a
   commonly-misassumed point). See
   `review/documents/llc_default_operating_rules_info_sheet.md` §8.
4. **`llc_annual_fee_info_sheet`** — its `llcfee_addition_to_franchise_tax`
   clause says the § 17941 flat annual LLC tax is "currently $800" with
   no qualification. That's no longer true for every LLC: § 17941(g)(2)
   (added by Stats. 2026, ch. 85 (SB 180), effective July 13, 2026) sets
   that first-year amount at **$400** for an LLC whose first taxable
   year begins on or after January 1, 2027 and before January 1, 2030.
   This was checked twice over in this session — once by the research
   fork, then independently re-confirmed by fetching the current
   codified § 17941(g)(2) text directly and quoting it verbatim — so
   the citation and quote in the patch proposal are solid; one more
   direct check against `leginfo.legislature.ca.gov` itself (blocked
   from this sandbox, not from a normal connection) is still recommended
   before committing it, per this corpus's own standard. See
   `review/documents/llc_annual_fee_info_sheet.md` §2. (The sibling
   `llc_articles_of_organization` document's own equivalent clause
   already discloses this correctly — confirmed, not a gap there.)
5. **`agent_for_service_of_process_info_sheet`** — no clause states that
   an agent's address must be a physical California street address; a
   P.O. box is rejected by the Secretary of State. Corroborated by
   several independent secondary sources (commercial registered-agent
   sites, not the Secretary of State's own page directly) both by the
   research fork and by this session's own follow-up search — flagged
   as needing a primary-source (the actual LLC-12/SI-550 form
   instructions) confirmation before the patch's exact wording is
   finalized. See `review/documents/agent_for_service_of_process_info_sheet.md`'s
   own patch-proposal section.

**Two wedge documents found no blocker**: `statement_of_information` and
`ein_info_sheet` — both files say so explicitly, with what was checked
and ruled out (including, for the Statement of Information, a dead bill
that would have added a beneficial-owner disclosure, and confirming the
current federal Corporate Transparency Act/FinCEN BOI exemption status
doesn't change anything here).

**The other 121 launch-set documents (item 1.5's second half) have not
been started** — this session did the 7 wedge documents only, as the
item's own "wedge first" instruction asks.

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

## 14. Pending legislation may change the home-improvement cancellation clause's windows

Found 2026-11-19 while triaging `homeimprove_right_to_cancel`'s open
finding (`verifier/findings.jsonl`). The clause states Bus. & Prof.
Code § 7159(e)(6)-(7)'s cancellation windows as settled law (three
business days generally, five for senior citizens). Two bills pending
in the 2025-2026 session — SB 784 (Durazo) and AB 2993 (Grayson) —
would each extend those to five and seven days respectively; this
session could not confirm whether either was chaptered before or
after this clause's `checkedDate` (2026-09-01), since both
`leginfo.legislature.ca.gov` and `legiscan.com` returned a Cloudflare
block. If you can check leginfo directly (or know whether either bill
passed), let a future session know so this clause's day-counts can be
confirmed or updated — accepted as an open, disclosed risk rather than
guessed at either way.

## 15. One click to actually turn on the simple build (`.github/workflows/deploy-pages.yml`)

This is a different, smaller thing than item 10's SEO/domain/hosting
decision — it publishes just the free, no-backend tier of the main
app (browsing, search, interview, live preview, source panels, verify
pages, the contract reader) to a `*.github.io` URL, no domain purchase
and no new credentials needed, via `tools/build_site.py`. It stays
completely dormant — the workflow exists but never fires — until two
things happen, both already true of normal project workflow except
the very last step:

1. This branch gets merged to `main` (the workflow only runs on a push
   to the repo's actual default branch, same gate as the existing
   Supabase `deploy-staging` job).
2. In this repo's own GitHub Settings -> Pages, set **Source: GitHub
   Actions** (currently unset, since no deploy workflow existed to
   point at before this). This is the one step only you can do -- a
   repo-admin setting, not something a workflow file can turn on for
   itself. Until it's set, the workflow's build step still succeeds,
   but the final deploy step fails with a clear, named error pointing
   at this exact setting.

No Stripe, no Supabase, no pricing decision, and no `config.js` are
needed for this -- the deployed site runs in the same "cloud accounts
aren't turned on for this deployment yet" mode as every environment
this session has tested in. A custom domain can be layered on top
later (a `CNAME` file plus a DNS record) without touching this
workflow.
