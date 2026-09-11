#!/usr/bin/env bash
# Restores a backup produced by scripts/backup-db.sh into a target
# database — used both for real disaster recovery and for the restore
# drill (see README's "Database backup & restore" section).
#
# Usage: ./scripts/restore-db.sh <dump-file> [target-database-url]
# If target-database-url is omitted, restores into DATABASE_URL (from the
# environment or .env) — DANGEROUS on a live database, since pg_restore
# --clean drops existing objects first. Pass an explicit target (ideally a
# fresh, empty database) unless you specifically mean to overwrite the
# real one.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$(dirname "$SCRIPT_DIR")"

DUMP_FILE="${1:?Usage: restore-db.sh <dump-file> [target-database-url]}"
TARGET_URL="${2:-}"

if [ ! -f "$DUMP_FILE" ]; then
  echo "Dump file not found: $DUMP_FILE" >&2
  exit 1
fi

if [ -z "$TARGET_URL" ]; then
  if [ -z "${DATABASE_URL:-}" ] && [ -f "$APP_DIR/.env" ]; then
    TARGET_URL=$(grep -E '^DATABASE_URL=' "$APP_DIR/.env" | head -1 | cut -d= -f2- | tr -d '"')
  else
    TARGET_URL="${DATABASE_URL:-}"
  fi
  echo "No target database given — restoring into DATABASE_URL. This will drop and recreate existing objects there."
  read -r -p "Type 'yes' to continue: " CONFIRM
  if [ "$CONFIRM" != "yes" ]; then
    echo "Aborted."
    exit 1
  fi
fi

if [ -z "$TARGET_URL" ]; then
  echo "No target database URL available." >&2
  exit 1
fi

# Prisma's DATABASE_URL carries a `?schema=` query param pg_restore
# doesn't understand — strip any query string before using it.
PG_RESTORE_URL="${TARGET_URL%%\?*}"

echo "Restoring $DUMP_FILE into $PG_RESTORE_URL ..."
pg_restore --clean --if-exists --no-owner --no-privileges --dbname="$PG_RESTORE_URL" "$DUMP_FILE"
echo "Restore complete."
