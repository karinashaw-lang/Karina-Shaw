-- Phase 9.3: a committed, accurate baseline of the full live schema,
-- generated from the production project's own pg_catalog/information_schema
-- (not reconstructed from memory of the original migration SQL, which
-- would risk drifting from what's actually live -- see DECISIONS.md).
--
-- This is the one supabase/migrations/ file this project has: Phase
-- 7.1 deliberately didn't mirror its migrations into local files,
-- since this session only had MCP tools, not the Supabase CLI, to
-- pull them down -- but a real "CI deploys to staging" path needs a
-- local file for `supabase db push` to apply, so this file exists
-- specifically to make that possible going forward. It was applied
-- once, directly, to bring the new staging project
-- (ihlszzsnlcmtmuydkkpk) into sync with production
-- (impurvwwjdgurbjbnydu) -- any schema change from here on should add
-- a NEW migration file, the normal way, rather than editing this one.
--
-- Covers every table except `agreements`, which stays the one
-- hand-run, schema.sql-documented table (see supabase/schema.sql and
-- DECISIONS.md's Phase 7.1 entry for why) -- schema.sql must be run
-- against a new project (staging included) before this file.

create table public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  stripe_checkout_session_id text,
  stripe_payment_intent_id text,
  amount_cents integer not null check (amount_cents >= 0),
  currency text not null default 'usd',
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index orders_user_id_idx on public.orders(user_id);
alter table public.orders enable row level security;
create policy "Users can view their own orders" on public.orders for select using ((select auth.uid()) = user_id);
drop trigger if exists orders_set_updated_at on public.orders;
create trigger orders_set_updated_at before update on public.orders for each row execute function public.set_updated_at();

create table public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  document_id text not null,
  description text not null,
  amount_cents integer not null check (amount_cents >= 0),
  created_at timestamptz not null default now()
);
create index order_items_order_id_idx on public.order_items(order_id);
create index order_items_user_id_idx on public.order_items(user_id);
alter table public.order_items enable row level security;
create policy "Users can view their own order items" on public.order_items for select using ((select auth.uid()) = user_id);

create table public.audit_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  document_id text not null,
  corpus_version text,
  clause_ids jsonb not null default '[]'::jsonb,
  clause_checked_dates jsonb not null default '{}'::jsonb,
  output_hash text not null,
  created_at timestamptz not null default now()
);
create index audit_log_user_id_idx on public.audit_log(user_id);
alter table public.audit_log enable row level security;
create policy "Users can view their own audit log" on public.audit_log for select using ((select auth.uid()) = user_id);
create policy "Users can insert their own audit log entries" on public.audit_log for insert with check ((select auth.uid()) = user_id);

create table public.document_versions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  agreement_id text not null references public.agreements(id) on delete cascade,
  schema_version integer not null,
  corpus_version text,
  clause_snapshots jsonb not null default '[]'::jsonb,
  generated_at timestamptz not null,
  replaced_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);
create index document_versions_agreement_id_idx on public.document_versions(agreement_id);
create index document_versions_user_id_idx on public.document_versions(user_id);
alter table public.document_versions enable row level security;
create policy "Users can view their own document versions" on public.document_versions for select using ((select auth.uid()) = user_id);
create policy "Users can insert their own document versions" on public.document_versions for insert with check ((select auth.uid()) = user_id);
create policy "Users can delete their own document versions" on public.document_versions for delete using ((select auth.uid()) = user_id);

create table public.feedback (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  category text check (category is null or category in ('confusing_question', 'wrong_or_outdated', 'missing_document')),
  message text not null,
  rating integer check (rating >= 1 and rating <= 5),
  document_id text,
  clause_id text,
  routed_at timestamptz,
  created_at timestamptz not null default now(),
  constraint feedback_clause_id_required_for_wrong_or_outdated check (category <> 'wrong_or_outdated' or clause_id is not null)
);
create index feedback_user_id_idx on public.feedback(user_id);
alter table public.feedback enable row level security;
create policy "Users can view their own feedback" on public.feedback for select using ((select auth.uid()) = user_id);
create policy "Users can insert their own feedback" on public.feedback for insert with check ((select auth.uid()) = user_id);
create policy "Anyone can submit anonymous feedback" on public.feedback for insert with check (user_id is null);

create table public.document_shares (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  token text not null unique,
  document_id text not null,
  title text not null,
  answers jsonb not null default '{}'::jsonb,
  clause_snapshots jsonb not null default '[]'::jsonb,
  schema_version integer not null,
  corpus_version text,
  expires_at timestamptz not null,
  created_at timestamptz not null default now()
);
create index document_shares_owner_id_idx on public.document_shares(owner_id);
alter table public.document_shares enable row level security;
create policy "Owners can view their own shares" on public.document_shares for select using ((select auth.uid()) = owner_id);
create policy "Owners can create their own shares" on public.document_shares for insert with check ((select auth.uid()) = owner_id);
create policy "Owners can delete their own shares" on public.document_shares for delete using ((select auth.uid()) = owner_id);

create table public.document_signatures (
  id uuid primary key default gen_random_uuid(),
  share_id uuid not null references public.document_shares(id) on delete cascade,
  owner_id uuid not null references auth.users(id) on delete cascade,
  signer_name text not null,
  signature_type text not null check (signature_type in ('typed', 'drawn')),
  signature_data text not null,
  signer_ip text,
  signed_at timestamptz not null default now()
);
create index document_signatures_owner_id_idx on public.document_signatures(owner_id);
create index document_signatures_share_id_idx on public.document_signatures(share_id);
alter table public.document_signatures enable row level security;
create policy "Owners can view signatures on their own shares" on public.document_signatures for select using ((select auth.uid()) = owner_id);

create table public.analytics_events (
  id uuid primary key default gen_random_uuid(),
  event_type text not null check (event_type in ('opened', 'step_reached', 'completed', 'exported', 'search')),
  document_id text,
  step_id text,
  export_format text check (export_format is null or export_format in ('pdf', 'docx', 'txt', 'json')),
  search_query text,
  search_result_count integer,
  created_at timestamptz not null default now(),
  client_session_id uuid
);
create index analytics_events_type_created_idx on public.analytics_events(event_type, created_at);
create index analytics_events_document_id_idx on public.analytics_events(document_id) where document_id is not null;
create index analytics_events_session_idx on public.analytics_events(client_session_id) where client_session_id is not null;
alter table public.analytics_events enable row level security;
create policy "Anyone can record an analytics event" on public.analytics_events for insert with check (true);
