-- Reverses the 2026-11-10 subscription decision back to
-- PRICING_OPTIONS.md's own original recommendation (Option A,
-- per-document one-time purchase), per the owner's explicit direction
-- against MVP_SPEC.md (2026-11-19, see DECISIONS.md) -- that spec's
-- own exclusion list puts the subscription tier in Phase 5+, which
-- conflicted with the entitlements/Stripe stack this project had
-- actually built. PRICING_OPTIONS.md's own "Technical needs" row for
-- Option A already named this exact shape (`type`, `document_id`,
-- `source`, `status`, `starts_at`, `ends_at`) before the subscription
-- decision was made -- this migration is catching up the schema to
-- what that document already specified, not inventing a new one.
--
-- Applied directly to the live project (confirmed via execute_sql
-- immediately before: 0 rows in public.entitlements) -- test mode
-- only, never actually written to by a live webhook per the prior
-- entitlements migration's own comment, so this is altered directly
-- rather than treated as a backward-compatible change protecting
-- real data that doesn't exist.

-- Drop the policies that reference the old no-arg has_active_entitlement()
-- FIRST -- Postgres won't let the function itself be dropped while
-- any policy still depends on it.
drop policy if exists "Entitled users can insert their own agreements" on public.agreements;
drop policy if exists "Entitled users can update their own agreements" on public.agreements;
drop policy if exists "Entitled users can insert their own document versions" on public.document_versions;
drop policy if exists "Entitled owners can create their own shares" on public.document_shares;

alter table public.entitlements
  drop constraint if exists entitlements_document_id_only_for_per_document;
alter table public.entitlements
  drop constraint if exists entitlements_type_check;
drop index if exists public.entitlements_stripe_subscription_id_idx;

-- document_id becomes mandatory: every entitlement is now for one
-- specific document, never a blanket subscription.
alter table public.entitlements
  alter column document_id set not null;

alter table public.entitlements
  drop column if exists stripe_subscription_id,
  drop column if exists current_period_end,
  drop column if exists cancel_at_period_end;

alter table public.entitlements
  alter column type set default 'document_purchase';
update public.entitlements set type = 'document_purchase' where type in ('subscription', 'per_document');
alter table public.entitlements
  add constraint entitlements_type_check check (type = 'document_purchase');

alter table public.entitlements
  drop constraint if exists entitlements_status_check;
alter table public.entitlements
  add constraint entitlements_status_check check (status in ('active', 'refunded', 'disputed'));

-- PRICING_OPTIONS.md's own exact field name ("source") for what was
-- implicitly always Stripe before -- generalizes cleanly if a future
-- non-Stripe purchase path (a promo code, a gift) is ever added
-- without another migration.
alter table public.entitlements
  add column if not exists source text not null default 'stripe';

-- starts_at/ends_at replace current_period_end's role: a one-time
-- document purchase "starts" at the moment of payment and "ends" per
-- PRICING_OPTIONS.md's own stated default access window (30 days
-- from purchase) -- ends_at is set by the webhook at insert time to
-- created_at + 30 days, not left for a separate job to compute.
alter table public.entitlements
  add column if not exists starts_at timestamptz not null default now();
alter table public.entitlements
  add column if not exists ends_at timestamptz;

-- The other half of PRICING_OPTIONS.md's stated default ("3
-- re-exports, or 30 days, whichever comes first") -- schema-ready
-- now, but NOT server-enforced yet: the only export paths that exist
-- today are entirely client-side (DECISIONS.md, MVP_SPEC_STATUS.md
-- Section 3), so nothing currently increments exports_used. Recorded
-- honestly as a real, known gap rather than claimed as working.
alter table public.entitlements
  add column if not exists exports_used integer not null default 0;
alter table public.entitlements
  add column if not exists exports_allowed integer not null default 3;

-- Correlation ids for a one-time Checkout Session: stripe_customer_id
-- is kept (still useful to reuse a returning buyer's Stripe customer
-- and for the billing portal's payment-history view); the dedup/
-- idempotency key a subscription id used to be is now the Checkout
-- Session id (checkout.session.completed cannot fire twice for the
-- same session, so an upsert keyed on it is naturally idempotent);
-- the payment intent id is stored separately because charge.refunded
-- and charge.dispute.created carry a charge object whose own
-- `payment_intent` field is what correlates back to this row, not
-- the checkout session id.
alter table public.entitlements
  add column if not exists stripe_checkout_session_id text;
alter table public.entitlements
  add column if not exists stripe_payment_intent_id text;
create unique index if not exists entitlements_stripe_checkout_session_id_idx
  on public.entitlements(stripe_checkout_session_id) where stripe_checkout_session_id is not null;
create index if not exists entitlements_stripe_payment_intent_id_idx
  on public.entitlements(stripe_payment_intent_id) where stripe_payment_intent_id is not null;
create index if not exists entitlements_user_document_idx
  on public.entitlements(user_id, document_id);

-- Replaces the no-argument has_active_entitlement() (Step 8's own
-- security fix, kept here: still reads auth.uid() internally rather
-- than taking a user_id parameter, so a caller still can never query
-- anyone else's entitlement status -- only the new document_id
-- parameter is caller-supplied, which leaks nothing since every
-- authenticated caller can already see the full, public document
-- catalog). Active now means: an 'active' row for this exact
-- document, not expired by date, and not yet at its export limit --
-- the export-count half is inert today (see note on exports_used
-- above) but written into the check now so enforcing it later is a
-- behavior change in the export path, not a second migration to this
-- function.
drop function if exists public.has_active_entitlement();
create or replace function public.has_active_entitlement(for_document_id text)
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1 from public.entitlements
    where user_id = (select auth.uid())
      and document_id = for_document_id
      and status = 'active'
      and (ends_at is null or ends_at > now())
      and exports_used < exports_allowed
  );
$$;
revoke all on function public.has_active_entitlement(text) from public, anon;
grant execute on function public.has_active_entitlement(text) to authenticated;

-- RLS policies: now check entitlement for the SPECIFIC document being
-- written, not "any active entitlement at all" -- the actual point of
-- moving to a per-document model. agreements/document_shares carry
-- document_id directly; document_versions only carries agreement_id,
-- so its check joins back to the parent agreement's own document_id.
create policy "Entitled users can insert their own agreements" on public.agreements
  for insert with check (
    (select auth.uid()) = user_id
    and public.has_active_entitlement(document_id)
  );

create policy "Entitled users can update their own agreements" on public.agreements
  for update using ((select auth.uid()) = user_id)
  with check (
    (select auth.uid()) = user_id
    and public.has_active_entitlement(document_id)
  );

create policy "Entitled users can insert their own document versions" on public.document_versions
  for insert with check (
    (select auth.uid()) = user_id
    and public.has_active_entitlement((select document_id from public.agreements where id = agreement_id))
  );

create policy "Entitled owners can create their own shares" on public.document_shares
  for insert with check (
    (select auth.uid()) = owner_id
    and public.has_active_entitlement(document_id)
  );

comment on table public.entitlements is
  'One row per document purchase (per-document one-time purchase model, PRICING_OPTIONS.md Option A / MVP_SPEC.md Section 3) -- not one row per subscriber. Written only by the stripe-webhook edge function; no client insert/update policy exists.';
comment on column public.entitlements.exports_used is
  'Not yet incremented anywhere -- server-side export rendering does not exist yet (MVP_SPEC_STATUS.md Section 3). Schema-ready, not enforced.';
