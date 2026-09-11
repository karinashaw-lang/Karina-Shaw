#!/usr/bin/env bash
# Database backup (4.5 in the launch-blockers list) — a plain pg_dump,
# timestamped, kept for BACKUP_RETENTION_DAYS. Run this on a daily cron in
# production; in this dev environment it's invoked manually or via
# scripts/backup-db-cron-example.sh's schedule.
#
# Usage: ./scripts/backup-db.sh
# Reads DATABASE_URL from the environment (or .env in the app directory).

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$(dirname "$SCRIPT_DIR")"
BACKUP_DIR="${BACKUP_DIR:-$APP_DIR/backups}"
RETENTION_DAYS="${BACKUP_RETENTION_DAYS:-14}"

if [ -z "${DATABASE_URL:-}" ] && [ -f "$APP_DIR/.env" ]; then
  # shellcheck disable=SC1090
  DATABASE_URL=$(grep -E '^DATABASE_URL=' "$APP_DIR/.env" | head -1 | cut -d= -f2- | tr -d '"')
  export DATABASE_URL
fi

if [ -z "${DATABASE_URL:-}" ]; then
  echo "DATABASE_URL is not set (checked environment and $APP_DIR/.env)." >&2
  exit 1
fi

mkdir -p "$BACKUP_DIR"
TIMESTAMP=$(date -u +%Y%m%dT%H%M%SZ)
OUTPUT_FILE="$BACKUP_DIR/creatorplatform-$TIMESTAMP.dump"

# Prisma's DATABASE_URL carries a `?schema=` query param pg_dump doesn't
# understand — strip any query string before handing the URL to it.
PG_DUMP_URL="${DATABASE_URL%%\?*}"

echo "Backing up to $OUTPUT_FILE ..."
pg_dump "$PG_DUMP_URL" --format=custom --file="$OUTPUT_FILE"
echo "Backup complete: $(du -h "$OUTPUT_FILE" | cut -f1)"

echo "Pruning backups older than $RETENTION_DAYS days ..."
find "$BACKUP_DIR" -name 'creatorplatform-*.dump' -mtime "+$RETENTION_DAYS" -print -delete

echo "Current backups:"
ls -lh "$BACKUP_DIR"/creatorplatform-*.dump 2>/dev/null || echo "  (none yet)"
