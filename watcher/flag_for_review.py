#!/usr/bin/env python3
"""Phase 4.4: for one clause id the watcher found a change affecting,
creates a LOCAL git branch containing only a "needs review" note and
its evidence -- never an edit to the clause itself, and never pushed
or opened as a PR automatically.

Opening the actual PR is a deliberate, separate human (or explicitly
instructed agent) action. This project's standing rule is "never
create a pull request unless asked," and a law-change flag is exactly
the kind of thing that should get a human's eyes before it goes
anywhere a reviewer would see it -- see DECISIONS.md's Phase 4.4 entry
for the reasoning.

Looks up every watcher/changes.jsonl entry listing this clause id in
its affectedClauseIds, writes them as watcher/flags/<clauseId>.md on a
new branch off the current HEAD, commits just that one file, and
returns to the branch you started on.

    python3 watcher/flag_for_review.py <clauseId>
"""
import json
import os
import subprocess
import sys

CHANGES_PATH = 'watcher/changes.jsonl'


def load_changes_for(clause_id):
    changes = []
    try:
        with open(CHANGES_PATH, encoding='utf-8') as f:
            for line in f:
                if not line.strip():
                    continue
                entry = json.loads(line)
                if clause_id in entry.get('affectedClauseIds', []):
                    changes.append(entry)
    except FileNotFoundError:
        pass
    return changes


def run(*args):
    return subprocess.run(args, capture_output=True, text=True, check=True)


def current_branch():
    return run('git', 'rev-parse', '--abbrev-ref', 'HEAD').stdout.strip()


def working_tree_clean():
    return run('git', 'status', '--porcelain').stdout.strip() == ''


def render_flag(clause_id, changes):
    lines = [f'# Needs review: {clause_id}', '',
             'Flagged by the law-change watcher (Phase 4.4) -- not an edit to the '
             'clause, just the evidence for a human to review.', '']
    for c in changes:
        lines += [
            f"## {c['url']}", '',
            f"**What changed:** {c['whatChanged']}", '',
            f"**Evidence:** {c['evidenceQuote']}", '',
            f"**Source checked:** {c['sourceChecked']}", '',
            f"**Discovered:** {c['discoveredAt']}", '',
        ]
    return '\n'.join(lines) + '\n'


def main():
    if len(sys.argv) != 2:
        print('usage: flag_for_review.py <clauseId>', file=sys.stderr)
        return 1
    clause_id = sys.argv[1]

    changes = load_changes_for(clause_id)
    if not changes:
        print(f'No recorded watcher findings affect clause {clause_id!r} -- nothing to flag.', file=sys.stderr)
        return 1

    if not working_tree_clean():
        print('ABORT: working tree is not clean -- commit or stash first, so this branch '
              'contains only the flag file.', file=sys.stderr)
        return 1

    start_branch = current_branch()
    flag_branch = f'watcher/needs-review-{clause_id}'
    flag_path = os.path.join('watcher', 'flags', f'{clause_id}.md')
    os.makedirs(os.path.dirname(flag_path), exist_ok=True)

    run('git', 'checkout', '-b', flag_branch)
    try:
        with open(flag_path, 'w', encoding='utf-8') as f:
            f.write(render_flag(clause_id, changes))
        run('git', 'add', flag_path)
        run('git', 'commit', '-m', f'Flag {clause_id} for review (law-change watcher)')
    finally:
        run('git', 'checkout', start_branch)

    print(f'Created local branch {flag_branch!r} with {flag_path} ({len(changes)} finding(s)). '
          f'Not pushed -- pushing or opening a PR from it is a separate, deliberate step.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
