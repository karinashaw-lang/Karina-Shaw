-- CA Wedge Plan Step 8 follow-up: fixes a real bug the previous
-- migration's own security advisor run caught immediately after
-- applying it -- see DECISIONS.md. has_active_entitlement(uuid) took
-- an arbitrary user id and was granted to both `anon` and
-- `authenticated`, which let any caller (including a logged-out one)
-- query whether ANY OTHER user currently has an active subscription
-- via PostgREST's /rest/v1/rpc/has_active_entitlement -- an
-- enumeration/privacy leak that has nothing to do with the RLS use
-- this function actually exists for.
--
-- Fix: drop the argument entirely and read auth.uid() internally, so
-- a caller can only ever learn their OWN status, never anyone else's.
-- RLS policies that reference the old two-argument form are replaced
-- to call the new no-argument form. `authenticated` keeps EXECUTE
-- (needed: a WITH CHECK clause calls this function as the invoking
-- role, so the signed-in writer of agreements/document_versions/
-- document_shares needs privilege to call it); `anon` is revoked
-- entirely -- no anon-role policy ever needs it, and anon has no
-- auth.uid() to check anyway.
drop policy if exists "Entitled users can insert their own agreements" on public.agreements;
drop policy if exists "Entitled users can update their own agreements" on public.agreements;
drop policy if exists "Entitled users can insert their own document versions" on public.document_versions;
drop policy if exists "Entitled owners can create their own shares" on public.document_shares;

drop function if exists public.has_active_entitlement(uuid);

create or replace function public.has_active_entitlement()
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1 from public.entitlements
    where user_id = (select auth.uid())
      and status = 'active'
      and (current_period_end is null or current_period_end > now())
  );
$$;
revoke all on function public.has_active_entitlement() from public, anon;
grant execute on function public.has_active_entitlement() to authenticated;

create policy "Entitled users can insert their own agreements" on public.agreements
  for insert with check ((select auth.uid()) = user_id and public.has_active_entitlement());

create policy "Entitled users can update their own agreements" on public.agreements
  for update using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id and public.has_active_entitlement());

create policy "Entitled users can insert their own document versions" on public.document_versions
  for insert with check ((select auth.uid()) = user_id and public.has_active_entitlement());

create policy "Entitled owners can create their own shares" on public.document_shares
  for insert with check ((select auth.uid()) = owner_id and public.has_active_entitlement());
