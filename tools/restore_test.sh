#!/usr/bin/env bash
# Phase 9.6: "a restore test." Restores a dump produced by
# tools/backup_supabase.sh into a disposable Postgres instance and
# checks that every table this project actually owns comes back --
# proving a backup is actually usable, not just that the dump command
# exited 0.
#
# Takes a connection string to an already-running, disposable Postgres
# server to restore INTO; this script never creates one itself, so it
# has no opinion on how you got one. CI's backup.yml workflow uses a
# `services: postgres:` container; locally, any throwaway Postgres (a
# fresh `supabase start` local stack, a scratch Docker container)
# works the same way.
#
# Never point this at a real project's own database -- it replays the
# dump's DDL directly, and running that against a database that
# already has the same tables fails loudly. That's the point: this is
# a restore-from-nothing test, not a migration tool.
#
# Usage:
#   RESTORE_DB_URL=postgresql://postgres:postgres@localhost:5432/postgres \
#     ./tools/restore_test.sh backups/production_20261029T000000Z.sql
set -euo pipefail

DUMP_FILE="${1:-}"
if [ -z "$DUMP_FILE" ]; then
  echo "Usage: $0 <dump-file>" >&2
  exit 1
fi
if [ -z "${RESTORE_DB_URL:-}" ]; then
  echo "RESTORE_DB_URL is not set -- nowhere to restore into. See tools/README.md." >&2
  exit 1
fi
if [ ! -f "$DUMP_FILE" ]; then
  echo "$DUMP_FILE does not exist." >&2
  exit 1
fi

echo "Restoring $DUMP_FILE into $RESTORE_DB_URL ..."
psql "$RESTORE_DB_URL" -v ON_ERROR_STOP=1 -f "$DUMP_FILE" > /dev/null

# Every table this project owns (supabase/schema.sql +
# supabase/migrations/*.sql) -- the same list
# tools/generate_data_inventory.py derives from those files and
# checks in CI, kept in sync by hand here rather than parsed a second
# time, since a script invoked with bash -c in CI has no easy way to
# share Python's parsing without adding a cross-language dependency
# for one short list.
EXPECTED_TABLES=(agreements orders order_items audit_log document_versions feedback document_shares document_signatures analytics_events error_reports rate_limits)

FAIL=0
for t in "${EXPECTED_TABLES[@]}"; do
  COUNT=$(psql "$RESTORE_DB_URL" -tAc "select count(*) from information_schema.tables where table_schema='public' and table_name='${t}'" | tr -d '[:space:]')
  if [ "$COUNT" != "1" ]; then
    echo "FAIL  table public.${t} missing after restore" >&2
    FAIL=1
  else
    echo "OK    table public.${t} present"
  fi
done

if [ "$FAIL" != "0" ]; then
  echo "restore test FAILED" >&2
  exit 1
fi
echo "restore test passed"
