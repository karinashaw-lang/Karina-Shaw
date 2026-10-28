-- Phase 9.3: "client error reporting (a lightweight self-hosted or
-- privacy-respecting service, scrubbing field values)." This table is
-- the "self-hosted" service -- the project's own Supabase, not a
-- third-party SaaS -- and the scrubbing happens client-side before
-- anything is sent (account.js's reportError(), never raw
-- error.message/stack text): no column here is meant to ever hold a
-- wizard field's value. No user_id, same reasoning as
-- analytics_events -- an error isn't tied to an account, and most
-- usage has none.
--
-- Applied identically to both the production project
-- (impurvwwjdgurbjbnydu) and staging (ihlszzsnlcmtmuydkkpk) via
-- apply_migration, then mirrored here per this file's own purpose
-- (see 20261028000000_baseline.sql's header).
create table public.error_reports (
  id uuid primary key default gen_random_uuid(),
  error_name text not null,
  message text not null,
  source_file text,
  line_number integer,
  column_number integer,
  stack_frames jsonb not null default '[]'::jsonb,
  user_agent text,
  page text,
  client_session_id uuid,
  created_at timestamptz not null default now()
);

create index error_reports_created_at_idx on public.error_reports(created_at);
create index error_reports_error_name_idx on public.error_reports(error_name);

alter table public.error_reports enable row level security;

-- Same write-only-from-the-client shape as analytics_events: anyone
-- can insert, nobody (not even the reporter) can read it back via the
-- anon key. The project owner reads it with the service role key via
-- tools/error_report_summary.js, the same manual pattern as
-- tools/analytics_report.js.
create policy "Anyone can record an error report"
  on public.error_reports for insert
  with check (true);
