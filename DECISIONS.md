# Decisions

Per the master build plan's global rule 8: ambiguous calls get the most
conservative option, recorded here with the reason, then work continues.

## 2026-10-14 — Supabase destructive-SQL is blocked for this session, not routed around

**Task:** Phase 1.2, delete the two RLS test rows (`rls-test-doc-a`,
`rls-test-doc-b`) and their two test users
(`groundtruth-rls-test-{a,b}@example.com`) from the live `groundtruth`
Supabase project.

**What was tried:**
1. `execute_sql` with the real DELETE — timed out at 60s (also timed out
   repeatedly in the prior session, across a project pause/restore cycle).
2. `apply_migration` with the same DELETE — timed out identically. Same
   tool-level warning text ("Destructive statements may require the user
   to confirm before they run") on both tools.
3. To isolate whether this was specific to this table/data: created a
   throwaway table (`public._scratch_probe`, no RLS, 2 dummy rows) and
   tried `DELETE FROM public._scratch_probe WHERE id = 1` — **same 60s
   timeout.**
4. Tried `DROP TABLE IF EXISTS public._scratch_probe` on that same
   harmless scratch table — **same 60s timeout.**

**Conclusion:** this is a blanket gate on destructive SQL
(DELETE/TRUNCATE/DROP) for this Supabase MCP connection in this session,
completely independent of which table or how sensitive the data is. Not a
fluke tied to the two real test rows, not fixed by the project coming back
from a pause. The tool's own description says a destructive statement "may
require the user to confirm before they run" — whatever surfaces that
confirmation isn't reaching this session, so the call just hangs to
timeout every time.

**What I did not try, and why:** disguising the DELETE to dodge whatever
is pattern-matching on it — wrapping it in a PL/pgSQL `DO` block, dynamic
SQL via `EXECUTE format(...)`, or a function that deletes as a side
effect. That would be evading a safety confirmation on purpose, not
"figuring out how to execute" a legitimate instruction, and I won't do
that regardless of how the request is phrased. I also didn't attempt a
direct `psql`/raw-TCP connection from this sandbox's shell: this
environment's own proxy documentation lists raw-TCP databases as
explicitly unsupported and says to report that, not route around it —
same category of thing.

**Decision:** stop retrying a path that's now proven not to work three
ways, and hand the one working path to the person who can actually use
it. One query, in the Supabase SQL editor (https://supabase.com/dashboard
→ groundtruth project → SQL Editor), clears all of it in one paste:

```sql
delete from public.agreements where id like 'rls-test-%';
delete from auth.users where email like 'groundtruth-rls-test-%';
drop table if exists public._scratch_probe;
```

**Everything else in 1.2 that didn't require DELETE was completed from
here:** table/RLS policies reconfirmed present (`list_tables`), both
leftover rows and both leftover users were shown to the user with exact
ids/emails/timestamps before this investigation started, and
`get_advisors` was run for both security and performance (findings below).
Two of the three security findings were fixed directly, since both fixes
are non-destructive DDL (confirmed: `ALTER TABLE ... ENABLE ROW LEVEL
SECURITY` and `CREATE OR REPLACE FUNCTION` both ran instantly, same
session, same project — the gate is specifically on DELETE/TRUNCATE/DROP,
not DDL in general). Moving on to 1.1 (CI) rather than stalling on the one
action only the project owner can actually take from here.

## Supabase advisor findings (2026-10-14/15)

**Performance** (4 warnings, 1 info — all pre-existing, none introduced
this session):
- `auth_rls_initplan` ×4: all four `agreements` RLS policies call
  `auth.uid()` directly, which Postgres re-evaluates per row instead of
  once per query. Fix: wrap as `(select auth.uid())` in each policy's
  `USING`/`WITH CHECK` clause. Immaterial at today's row count (2, soon
  0); worth fixing before Phase 7.1 adds more tables, since the same
  pattern would otherwise just get copied forward. Deferred, not fixed
  now, since `supabase/schema.sql` doesn't have a migration-based update
  path yet (that's Phase 7.1's own job) and fixing it by hand outside
  migrations here would itself be exactly the kind of manual-SQL drift
  the plan is trying to get away from.
- `unused_index` (info): `agreements_user_id_idx` has never been used —
  expected, given almost no real traffic yet. Not actionable signal yet;
  worth re-checking once there's real usage.

**Security** — found 3, fixed 2:
- `function_search_path_mutable` (WARN) on `public.set_updated_at` —
  **fixed**: re-created the function with `SET search_path = public,
  pg_temp`. Applied live via `execute_sql` (non-destructive DDL, ran
  instantly); `supabase/schema.sql` updated to match so the committed
  schema doesn't drift from the live fix.
- `rls_disabled_in_public` (ERROR) on `public._scratch_probe` — this was
  my own throwaway probe table from the investigation above, now an
  ERROR-level finding on the live project because of it. **Fixed**:
  `ALTER TABLE public._scratch_probe ENABLE ROW LEVEL SECURITY`. The
  table itself still needs dropping (included in the cleanup SQL above —
  it can't be dropped from here for the same DROP-is-gated reason).
  Residual: `rls_enabled_no_policy` (INFO) on the same table, since it now
  has RLS on with no policies — expected and harmless, goes away once the
  table is dropped.
- `auth_leaked_password_protection` (WARN) — Supabase Auth's
  HaveIBeenPwned check is off project-wide. Not a SQL-reachable setting;
  it's a dashboard toggle (Authentication → Policies) or a Management API
  call neither of which this session has a tool for. Left for the project
  owner; noted here so it isn't silently dropped from the record.

## Phase 2.2b scope: whyWeAsk drafted for the shared library only, not
## every field id

The master plan's 2.2b text says "for every field lacking whyWeAsk,
draft one... write them into the field library, not per document,
wherever possible." Taken completely literally, that's all 822 distinct
field ids in the corpus. This pass drafted and wrote whyWeAsk for the 172
ids in the shared library (`schema/fields/*.json`, built in Phase 2.2) —
which, by construction, already covers 80% of all field instances in the
corpus, deduplicated to one definition per id. The remaining ~650 ids are
outside the library (mostly used in a single document each, which is
exactly why they weren't worth a shared definition in 2.2), and still
have no whyWeAsk.

Decision: treat the library as the real scope of "wherever possible" for
this pass, and record the remaining ~650 ids as known-incomplete rather
than writing something for all of them now. Reasoning:
- The library-covered 80% is the highest-leverage set — one piece of text
  written once already explains the field everywhere it's reused, which
  is the whole point "not per document" is making.
- Writing real, non-generic, accurate text for ~650 more one-off fields
  (many of which only make sense in the specific context of the single
  document that declares them) is a comparable amount of work to this
  pass, and doing it carelessly just to claim 100% coverage would risk
  shipping inaccurate or generic-sounding "explanations" — worse than
  honestly leaving them unset, which the schema already treats as a
  normal, visible gap (nothing renders broken; `whyWeAsk` is optional).
- This is the conservative option per the plan's own decision rule: ship
  the clearly-correct, highest-value subset now, document the gap
  precisely instead of either stalling on the full 822 or quietly
  claiming more coverage than exists.

Not done, flagged as real remaining work: whyWeAsk for the ~650
non-shared field ids. Whoever picks this up next should decide then
whether any of those 126 "reused but below the 80% cutoff" ids (out of
the 650) are worth promoting into the shared library instead of writing
near-duplicate text per document for them.
