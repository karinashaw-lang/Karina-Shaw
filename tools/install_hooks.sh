#!/usr/bin/env bash
# CA Wedge Plan Step 4: `core.hooksPath` is a local git config, never
# cloned with the repo, so .githooks/ existing in version control isn't
# enough on its own -- each fresh clone (including a worktree a
# delegated agent is given) needs this run once. Idempotent; safe to
# re-run.
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"
git config core.hooksPath .githooks
chmod +x .githooks/commit-msg .githooks/pre-push
echo "Hooks installed: core.hooksPath -> .githooks"
echo "Protected branch: $(cat .claude-protected-branch 2>/dev/null || echo '(none set)')"
