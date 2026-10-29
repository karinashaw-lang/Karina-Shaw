-- Phase 9.4: "rate limiting for edge functions and magic-link
-- requests." Backs the shared rate limiter in
-- supabase/functions/_shared/rate_limit.ts, used by share-view and
-- share-sign (the two edge functions with no Supabase session at
-- all, exposed to anonymous callers). See that file and
-- DECISIONS.md for the full reasoning, including why magic-link
-- rate limiting itself needs no migration (it's a Supabase Auth
-- platform setting, on by default) and why list-sessions/
-- delete-account aren't included here (both require a session the
-- platform's own JWT verification already gates at the edge).
--
-- RLS is enabled with NO policies on purpose: this table must never
-- be reachable through the public REST API in either direction --
-- reading it would expose rate-limit state to probing, writing it
-- would let a client reset its own counter and defeat the point
-- entirely. The edge functions reach it only through a direct
-- Postgres connection (SUPABASE_DB_URL), which bypasses PostgREST/
-- RLS as a privileged connection, the same path list-sessions
-- already uses to read auth.sessions.
create table public.rate_limits (
  key text primary key,
  window_start timestamptz not null default now(),
  count integer not null default 1
);

alter table public.rate_limits enable row level security;
