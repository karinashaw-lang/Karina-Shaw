-- CA Wedge Plan Step 8: entitlements for the subscription model the
-- owner decided on 2026-11-10 (see DECISIONS.md, PRICING_OPTIONS.md).
-- One row per subscriber, not one per document -- document_id stays
-- nullable only so a future per-document add-on (currently
-- config/pricing.json's perDocument.active=false) wouldn't need a
-- schema redesign, exactly as flagged when the subscription decision
-- was made.
--
-- This table is written only by the Stripe webhook edge function
-- (Step 9, service-role key) -- there is deliberately NO insert/
-- update/delete policy for an authenticated user below, only
-- select-your-own. Global Rule 10: "All paywall enforcement
-- server-side" starts here -- a client can never grant itself an
-- entitlement by writing this row directly.
create table public.entitlements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  type text not null default 'subscription' check (type in ('subscription', 'per_document')),
  document_id text,
  status text not null check (status in ('active', 'past_due', 'canceled', 'expired')),
  stripe_customer_id text,
  stripe_subscription_id text,
  current_period_end timestamptz,
  cancel_at_period_end boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint entitlements_document_id_only_for_per_document
    check (type = 'subscription' or document_id is not null)
);
create unique index entitlements_stripe_subscription_id_idx
  on public.entitlements(stripe_subscription_id) where stripe_subscription_id is not null;
create index entitlements_user_id_idx on public.entitlements(user_id);
alter table public.entitlements enable row level security;
create policy "Users can view their own entitlements" on public.entitlements
  for select using ((select auth.uid()) = user_id);

drop trigger if exists entitlements_set_updated_at on public.entitlements;
create trigger entitlements_set_updated_at before update on public.entitlements
  for each row execute function public.set_updated_at();

-- One shared definition of "does this user currently have paid
-- access," so every table's RLS policy and every edge function check
-- the same thing instead of each re-deriving "active" from raw rows
-- (which is exactly how the honest-tiering work earlier in this
-- project got bitten by duplicated logic disagreeing with itself --
-- see tools/clause_levels.py's docstring). security definer because
-- a client calling this needs the answer without itself having
-- select access beyond its own row, which it already has anyway --
-- this just keeps the "active" definition in one place.
create or replace function public.has_active_entitlement(check_user_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1 from public.entitlements
    where user_id = check_user_id
      and status = 'active'
      and (current_period_end is null or current_period_end > now())
  );
$$;
grant execute on function public.has_active_entitlement(uuid) to authenticated, anon;

-- Server-side release, the actual point of this migration: the three
-- paywalled actions that touch this database (cloud save, sharing,
-- and -- by requiring an entitled owner to create the share in the
-- first place -- e-signature) now require an active entitlement, not
-- just a signed-in session. A signed-in-but-not-subscribed user can
-- still browse/search/interview/preview for free (Global Rule 3 --
-- none of that touches these tables), but writing to them without an
-- active entitlement is rejected by Postgres itself regardless of
-- what the client-side JS does or doesn't check first.
--
-- The remaining paywalled actions (PDF/.docx/plain text/JSON export,
-- sources appendix) render entirely client-side with no server round
-- trip in this architecture, so they cannot be enforced the same way
-- -- noted honestly in DECISIONS.md rather than claimed otherwise;
-- they are UI-gated (shown locked without a subscription) as a UX
-- measure, not a cryptographic one.
drop policy if exists "Users can insert their own agreements" on public.agreements;
create policy "Entitled users can insert their own agreements" on public.agreements
  for insert with check ((select auth.uid()) = user_id and public.has_active_entitlement((select auth.uid())));

drop policy if exists "Users can update their own agreements" on public.agreements;
create policy "Entitled users can update their own agreements" on public.agreements
  for update using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id and public.has_active_entitlement((select auth.uid())));

drop policy if exists "Users can insert their own document versions" on public.document_versions;
create policy "Entitled users can insert their own document versions" on public.document_versions
  for insert with check ((select auth.uid()) = user_id and public.has_active_entitlement((select auth.uid())));

drop policy if exists "Owners can create their own shares" on public.document_shares;
create policy "Entitled owners can create their own shares" on public.document_shares
  for insert with check ((select auth.uid()) = owner_id and public.has_active_entitlement((select auth.uid())));

-- Deliberately NOT changed: select/delete policies on all three
-- tables (an entitlement that lapses should not strand or hide a
-- document someone already saved or shared -- see DECISIONS.md for
-- the reasoning on why lapsed access still means read-and-export-once
-- locally, not data loss), and document_signatures (it has no
-- client-facing insert policy at all; share-sign writes it with the
-- service-role key after checking the share itself exists and is
-- unexpired -- gating share creation above already covers this path).
