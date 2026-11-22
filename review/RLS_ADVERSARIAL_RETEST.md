# Entitlement RLS adversarial retest (`MVP_FINISH_VERIFY_SHARPEN.md` item 1.2)

Run 2026-11-22 directly against the live `impurvwwjdgurbjbnydu` project
via `mcp__Supabase__execute_sql`, using real Postgres role/JWT-claim
impersonation (`SET LOCAL ROLE authenticated; SET LOCAL request.jwt.claims
= '{"sub": "<uuid>", ...}'`), not a code-review inference from reading
the policy definitions. Every claim below is the actual query result,
not what the policy *should* do.

**Test identities used:** the two pre-existing leftover test users
from 2026-10-03 (`groundtruth-rls-test-a@example.com` /
`-b@example.com`, confirmed by email before use — not created for
this task), and the one pre-existing leftover test order from
2026-10-27, both already in the live project from earlier RLS work
this session never successfully cleaned up (`DECISIONS.md`,
2026-10-14 entry). Four new `entitlements` rows and one new
`agreements` row were inserted for this test (ids/document ids
prefixed `rls_adv_test_`/`rls-adv-test-`, clearly marked, never
confused with real data) and **all five were deleted at the end of
this task** — confirmed by a follow-up count query, not assumed.
Nothing from this task is left in the live database.

## Results

| # | Claim to disprove | Method | Result |
|---|---|---|---|
| 1 | A second user can read another user's entitlement | User B (`SET LOCAL` as B) selects rows where `user_id` = A | **0 rows returned** — cannot read |
| 2 | A second user can read another user's order | Same, against `orders` | **0 rows returned** |
| 3 | A second user can update another user's entitlement (e.g. reset the re-export counter) | User B `UPDATE ... SET exports_used = 0` on A's row | **0 rows affected** — `exports_used` unchanged (confirmed 3 before and after) |
| 4 | A second user can delete another user's entitlement | User B `DELETE` on A's 4 rows | **0 rows affected** — all 4 still present afterward |
| 5 | A second user can update/delete another user's order | User B `UPDATE`/`DELETE` on A's order | **0 rows affected** — order still `status = 'paid'` afterward |
| 6 | A second user can update/delete another user's agreement | User B `UPDATE`/`DELETE` on A's agreement | **0 rows affected** — title still `"Positive control"` afterward |
| 7 | A user can insert/claim their own entitlement row directly (self-grant, or duplicate an existing purchase) | User A `INSERT INTO entitlements` for themselves | **Hard error**: `new row violates row-level security policy for table "entitlements"` — there is no INSERT policy on this table for any role but the service role, so even the legitimate owner cannot self-grant |
| 8 | A user can update/delete their own entitlement row directly (e.g. reset their own re-export counter, or self-refund) | User A `UPDATE`/`DELETE` on their own row | **0 rows affected both times** — same reason: no UPDATE/DELETE policy exists for this table at all outside the service role |
| 9 | Entitlement for one document grants release of a different document ("document scope can be widened") | `has_active_entitlement('rls_adv_test_doc_active')` vs `has_active_entitlement('rls_adv_test_doc_nonexistent')`, same user | `true` / **`false`** — scoped correctly per call |
| 10 | A refunded entitlement still grants release | `has_active_entitlement()` on a row with `status = 'refunded'` | **`false`** |
| 11 | An expired entitlement (past `ends_at`) still grants release | `has_active_entitlement()` on a row with `ends_at` 30 days in the past | **`false`** |
| 12 | An entitlement with its re-export limit reached still grants release | `has_active_entitlement()` on a row with `exports_used = exports_allowed = 3` | **`false`** |
| 13 | A user can widen scope indirectly via `agreements`/`document_shares` (insert a record for a document they aren't entitled to, using an entitlement they hold for a *different* document) | User A, entitled only for `rls_adv_test_doc_active`, tries `INSERT INTO agreements`/`document_shares` for `rls_adv_test_doc_NOT_entitled` | **Both hard errors**: `new row violates row-level security policy` on `agreements` and on `document_shares` |
| 14 (positive control) | Confirm the policy isn't just blocking everything by accident | User A inserts an `agreements` row for the document they *are* entitled to | **Succeeded** — proves tests 7-13's blocks are the policy actually discriminating, not a broken policy that denies all writes regardless of entitlement |

**All 14 claims were disproven.** No policy failed. Nothing needed
fixing as a result of this task.

## Why this holds, mechanically

`public.entitlements` and `public.orders`/`public.order_items` carry
**only a `SELECT` policy**, scoped to `auth.uid() = user_id` — no
`INSERT`, `UPDATE`, or `DELETE` policy exists for any client role at
all. In Postgres RLS, the absence of a policy for a given command is
equivalent to `USING (false)`/`WITH CHECK (false)` for that command,
so every write from any authenticated client is denied by
construction, not by a rule that has to correctly exclude every
attack case — there is no case for it to get wrong. The only writer
is the service-role-authenticated edge functions
(`stripe-webhook`, `release-document`'s `increment_exports_used`
RPC), which bypass RLS entirely and were not re-tested here (that is
a code-review question about the edge function logic, not an RLS
question — see `DECISIONS.md`'s entries on `release-document` and
`increment_exports_used` for that review).

`has_active_entitlement(document_id)` is the single `SECURITY
DEFINER` function both the `agreements`/`document_versions`/
`document_shares` write policies and `release-document`'s own check
call — one source of truth, confirmed structurally (grep, not
assumed) and now confirmed behaviorally (tests 9-13 above) to
actually enforce per-document scope, active status, the access
window, and the re-export limit, all four correctly, on live data.

## get_advisors (security), run after this task

Same three pre-existing/expected findings as every prior check this
session (`_scratch_probe`/`rate_limits` RLS-no-policy,
`has_active_entitlement`'s already-accepted `SECURITY DEFINER` WARN,
leaked-password-protection in `OWNER_TODO.md` item 12) — nothing new
introduced by this task's test inserts or deletes.

## One incidental finding, unrelated to RLS

Cleanup `DELETE` statements for the test fixtures above completed
immediately, with no hang. The 2026-10-14 finding that destructive
SQL via `execute_sql` reliably timed out in this sandbox does **not**
reproduce today — whatever caused it then (recorded as unresolved at
the time) is not blocking this session's own `DELETE` statements now.
Not re-investigated further since it isn't this task's subject, and
Rule 6's "no destructive action without the owner's yes" was still
honored throughout: everything deleted here was data this task
itself had just inserted, during this task, for this purpose.
