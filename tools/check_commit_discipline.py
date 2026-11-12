#!/usr/bin/env python3
"""CA Wedge Plan Step 4: mechanical branch/commit discipline, not just a
written rule. Two independent checks, both scoped to the one branch this
session's own instructions designate as the shared, reviewed branch
(read from `.claude-protected-branch`, not hardcoded here, so the branch
name lives in one place):

1. Every commit landing on that branch must carry a `Reviewed-By:`
   trailer in its message. Global Rule 12 (CA Wedge Plan): "Agent work
   goes on child branches or worktrees and is handed over for review.
   Do not commit directly to the main working branch." A delegated
   subagent's prompt never tells it to add this trailer, so a plain
   `git commit` from an unreviewed subagent fails here -- this is the
   actual, repeated failure mode this session has hit three times
   (a subagent told not to commit, committing anyway with an ordinary
   message), not a hypothetical.
2. A commit that changes the *legal text* of an already-existing
   clause (its body, gap, or a citation's case/cite/url/quote -- not
   its status, checkedDate, sourceClass, or state, which routine
   re-verification legitimately touches without rewriting the text
   itself) must also carry a `Patch-ID:` trailer. Global Rule 7:
   "Never auto-edit legal clause text from verifier output. Write
   patch files, show me the diff, wait for approval." The trailer is
   this check's mechanical proxy for "that approval happened" -- it
   doesn't verify the approval's content, only that the step wasn't
   skipped silently.

Used by .githooks/commit-msg (checks the one commit being made),
.githooks/pre-push (checks every commit about to be pushed that isn't
already on the remote), and the `branch-discipline` CI job (checks
every commit in the pushed range, the backstop for a clone that never
ran tools/install_hooks.sh).

    python3 tools/check_commit_discipline.py --commit-msg-file <path> [--rev <sha>]
    python3 tools/check_commit_discipline.py --rev-range <old>..<new>
"""
import json
import re
import subprocess
import sys

REVIEWED_BY_RE = re.compile(r'^Reviewed-By:\s*\S+', re.MULTILINE)
PATCH_ID_RE = re.compile(r'^Patch-ID:\s*\S+', re.MULTILINE)
LEGAL_TEXT_CLAUSE_FIELDS = ('body', 'gap')
LEGAL_TEXT_CITATION_FIELDS = ('case', 'cite', 'url', 'quote')


def protected_branch():
    try:
        return open('.claude-protected-branch', encoding='utf-8').read().strip()
    except FileNotFoundError:
        return None


def current_branch():
    out = subprocess.run(['git', 'rev-parse', '--abbrev-ref', 'HEAD'],
                          capture_output=True, text=True)
    return out.stdout.strip()


def commit_message(rev):
    out = subprocess.run(['git', 'log', '-1', '--format=%B', rev],
                          capture_output=True, text=True)
    return out.stdout


def show_json(rev, path):
    out = subprocess.run(['git', 'show', f'{rev}:{path}'], capture_output=True, text=True)
    if out.returncode != 0:
        return None
    try:
        return json.loads(out.stdout)
    except json.JSONDecodeError:
        return None


def clauses_by_id(parsed):
    if parsed is None:
        return {}
    return {c['id']: c for c in parsed.get('clauses', [])}


def citation_text_tuple(ct):
    return tuple(ct.get(f) for f in LEGAL_TEXT_CITATION_FIELDS)


def legal_text_changed(old_clause, new_clause):
    for field in LEGAL_TEXT_CLAUSE_FIELDS:
        if old_clause.get(field) != new_clause.get(field):
            return True
    # Citations aren't paired by position or URL -- a clause can cite the
    # same source twice for two different quotes (common in this corpus),
    # and pairing by URL alone matched the wrong one of a pair to the
    # wrong old citation, flagging an unrelated quote as "changed" (a
    # real false positive caught the first time this check ran for
    # real -- see DECISIONS.md). Instead: every old citation's exact
    # (case, cite, url, quote) must still appear somewhere in the new
    # list. A new citation being added is fine; an old one silently
    # missing means it was either edited or dropped, either way a real
    # legal-text change.
    old_tuples = {citation_text_tuple(ct) for ct in (old_clause.get('citations') or [])}
    new_tuples = {citation_text_tuple(ct) for ct in (new_clause.get('citations') or [])}
    return not old_tuples.issubset(new_tuples)


def changed_legal_text_clause_ids(rev):
    """Clause ids whose legal text (not just status/checkedDate/
    sourceClass/state) differs between rev^ and rev in data/clauses.json.
    A new clause (not present in rev^) is never "changed" -- there's no
    prior text to have silently rewritten, so Global Rule 7 doesn't
    apply to it; only an edit to an already-existing clause does."""
    old = clauses_by_id(show_json(f'{rev}^', 'data/clauses.json'))
    new = clauses_by_id(show_json(rev, 'data/clauses.json'))
    return [cid for cid, new_c in new.items()
            if cid in old and legal_text_changed(old[cid], new_c)]


def check_one_commit(rev, branch):
    """Returns a list of violation strings for this single commit; empty
    means clean."""
    violations = []
    message = commit_message(rev)

    if branch == protected_branch() and not REVIEWED_BY_RE.search(message):
        violations.append(
            f'{rev}: on protected branch "{branch}" with no "Reviewed-By:" trailer -- '
            'this is exactly the "agent committed without review" failure mode Global Rule 12 exists to stop.'
        )

    changed = changed_legal_text_clause_ids(rev)
    if changed and not PATCH_ID_RE.search(message):
        violations.append(
            f'{rev}: changes the legal text of {len(changed)} existing clause(s) '
            f'({changed[:5]}{"..." if len(changed) > 5 else ""}) with no "Patch-ID:" trailer -- '
            'Global Rule 7 requires a reviewed, approved patch for any edit to existing clause text.'
        )

    return violations


def main():
    args = sys.argv[1:]
    violations = []

    if '--commit-msg-file' in args:
        msg_path = args[args.index('--commit-msg-file') + 1]
        message = open(msg_path, encoding='utf-8').read()
        branch = current_branch()
        if branch == protected_branch() and not REVIEWED_BY_RE.search(message):
            violations.append(
                f'On protected branch "{branch}" with no "Reviewed-By:" trailer in this commit message.'
            )
        # The commit object doesn't exist yet at commit-msg time, so the
        # legal-text check here compares the staged tree against HEAD
        # directly rather than via changed_legal_text_clause_ids(rev).
        staged = subprocess.run(['git', 'show', ':data/clauses.json'], capture_output=True, text=True)
        if staged.returncode == 0:
            try:
                new_parsed = json.loads(staged.stdout)
                old = clauses_by_id(show_json('HEAD', 'data/clauses.json'))
                new = clauses_by_id(new_parsed)
                changed = [cid for cid, new_c in new.items()
                           if cid in old and legal_text_changed(old[cid], new_c)]
                if changed and not PATCH_ID_RE.search(message):
                    violations.append(
                        f'Changes the legal text of {len(changed)} existing clause(s) '
                        f'({changed[:5]}{"..." if len(changed) > 5 else ""}) with no "Patch-ID:" trailer.'
                    )
            except json.JSONDecodeError:
                pass
    elif '--rev-range' in args:
        rev_range = args[args.index('--rev-range') + 1]
        old_rev, new_rev = rev_range.split('..')
        revs = subprocess.run(['git', 'rev-list', '--reverse', rev_range],
                               capture_output=True, text=True).stdout.split()
        branch = current_branch()
        for rev in revs:
            violations.extend(check_one_commit(rev, branch))
    elif '--rev' in args:
        rev = args[args.index('--rev') + 1]
        violations.extend(check_one_commit(rev, current_branch()))
    else:
        print(__doc__)
        return 2

    if violations:
        print('Commit discipline check FAILED:')
        for v in violations:
            print(f'  - {v}')
        return 1
    print('Commit discipline check passed.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
