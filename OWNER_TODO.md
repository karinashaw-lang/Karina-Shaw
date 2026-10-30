# Owner to-do — things only you can do

Nothing in this file has been applied. Each item is something this
session genuinely cannot do itself (a credential, a dashboard-only
toggle, a destructive SQL statement blocked by a confirmation gate
this session never receives, or a decision that needs a human — a
real contact address, an attorney's judgment). Phase 5 of this build
phase may append one more item here if the AI Transparency Act
re-verification is still blocked after a fresh attempt.

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

None of these are blocked on engineering work — they're ready for
review as they stand.
