-- Groundtruth — accounts & storage schema.
--
-- Run this once, in the Supabase SQL editor, against a new project.
-- It creates one table — the cloud mirror of what the app already
-- stores in the browser's localStorage "library" — and locks every
-- row to its owner with Row Level Security, so the anon key that
-- ships in the client-side config can safely be public: Postgres
-- itself refuses any query that isn't scoped to auth.uid().
--
-- Nothing here runs automatically. This app has no server of its
-- own and never will for this piece — Supabase's own auth and
-- database are the entire backend, reached directly from the
-- browser with the anon key.

create table if not exists public.agreements (
  id text primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  document_id text not null,
  title text not null,
  answers jsonb not null default '{}'::jsonb,
  generated_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists agreements_user_id_idx on public.agreements(user_id);

alter table public.agreements enable row level security;

create policy "Users can view their own agreements"
  on public.agreements for select
  using (auth.uid() = user_id);

create policy "Users can insert their own agreements"
  on public.agreements for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own agreements"
  on public.agreements for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own agreements"
  on public.agreements for delete
  using (auth.uid() = user_id);

-- Keeps updated_at honest on every write, so "last synced" can be
-- shown accurately without the client having to set it itself.
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists agreements_set_updated_at on public.agreements;
create trigger agreements_set_updated_at
  before update on public.agreements
  for each row execute function public.set_updated_at();
