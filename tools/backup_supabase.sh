#!/usr/bin/env bash
# Phase 9.6: "document and script a backup of the Supabase table(s)."
#
# Wraps `supabase db dump`, the CLI's own backup mechanism -- not raw
# pg_dump against a direct connection string, since this project has
# no SUPABASE_DB_URL available outside an edge function's own runtime,
# and a direct psql/raw-TCP connection from this sandbox is explicitly
# off-limits (see DECISIONS.md). Same credential shape as the existing
# deploy-staging CI job: SUPABASE_ACCESS_TOKEN plus a project ref.
#
# No-ops cleanly (exit 0, not a failure) when the needed credentials
# or CLI aren't present, the same shape as every other credentials-
# gated script in this project (tests/auth_roundtrip.js,
# tools/analytics_report.js, the deploy-staging CI job) -- this is
# written and reasoned through, not run end to end from this sandbox.
#
# The output file is never meant to be committed -- see backups/ in
# .gitignore and this script's own README.md entry for why.
#
# Usage:
#   SUPABASE_ACCESS_TOKEN=... ./tools/backup_supabase.sh production impurvwwjdgurbjbnydu
#   SUPABASE_ACCESS_TOKEN=... ./tools/backup_supabase.sh staging ihlszzsnlcmtmuydkkpk
set -euo pipefail

TARGET="${1:-}"
PROJECT_REF="${2:-}"

if [ -z "$TARGET" ] || [ -z "$PROJECT_REF" ]; then
  echo "Usage: $0 <target-name> <project-ref>" >&2
  exit 1
fi

if [ -z "${SUPABASE_ACCESS_TOKEN:-}" ]; then
  echo "SUPABASE_ACCESS_TOKEN is not set -- backup skipped. See tools/README.md." >&2
  exit 0
fi

if ! command -v supabase >/dev/null 2>&1; then
  echo "supabase CLI is not installed -- backup skipped. See tools/README.md." >&2
  exit 0
fi

mkdir -p backups
OUT="backups/${TARGET}_$(date -u +%Y%m%dT%H%M%SZ).sql"

supabase db dump --project-ref "$PROJECT_REF" -f "$OUT"
echo "Wrote $OUT"
