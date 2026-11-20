-- MVP_BUILD_INSTRUCTIONS.md item 2.3/2.4: the actual re-export-count
-- enforcement release-document needs. has_active_entitlement() already
-- checks exports_used < exports_allowed, but a check alone never
-- consumes anything -- without this, exports_allowed would stay a
-- column nothing ever increments, the exact gap
-- MVP_SPEC_STATUS.md's audit flagged before any of this existed.
--
-- security definer, callable by the service role only (not granted to
-- authenticated/anon) -- release-document's own service-role client is
-- the only caller, after it has already independently verified
-- entitlement via the user's own RPC call to has_active_entitlement().
-- This function does not re-check entitlement itself; it only does the
-- one thing its name says, atomically, so a race between two
-- concurrent exports can't both read the same pre-increment count and
-- both think they had room.
create or replace function public.increment_exports_used(for_document_id text, for_user_id uuid)
returns void
language sql
security definer
set search_path = public, pg_temp
as $$
  update public.entitlements
  set exports_used = exports_used + 1
  where document_id = for_document_id
    and user_id = for_user_id
    and status = 'active';
$$;

revoke all on function public.increment_exports_used(text, uuid) from public, anon, authenticated;
grant execute on function public.increment_exports_used(text, uuid) to service_role;
