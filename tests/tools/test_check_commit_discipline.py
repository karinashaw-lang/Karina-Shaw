#!/usr/bin/env python3
"""Tests for tools/check_commit_discipline.py (CA Wedge Plan Step 4).

Builds a throwaway git repo with a minimal corpus and a
.claude-protected-branch file, makes real commits against it, and runs
the real script as a subprocess -- what's tested is the actual script
the git hooks and CI call, not a reimplementation of its logic.

Includes a regression test for a real bug this script's own first
run caught: pairing citations by URL broke when a clause legitimately
cites the same source twice for two different quotes, flagging an
unrelated, unchanged quote as "changed" just because another citation
sharing its URL actually did change.

Run directly: python3 tests/tools/test_check_commit_discipline.py
"""
import json
import os
import subprocess
import shutil
import sys
import tempfile
import unittest

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SCRIPT = os.path.join(REPO_ROOT, 'tools', 'check_commit_discipline.py')
PROTECTED_BRANCH = 'claude/protected-test-branch'

BASE_CLAUSE = {
    "id": "test_clause", "title": "Test Clause", "kind": "authority",
    "status": "verified", "checkedDate": "2026-01-01",
    "body": "Original body text.", "gap": "Some gap.",
    "citations": [
        {"case": "Test v. Case", "cite": "1 Test 1", "url": "https://example.com/1", "quote": "original quote"},
    ],
    "state": "CA",
}


def git(dirpath, *args, check=True):
    return subprocess.run(['git', *args], cwd=dirpath, capture_output=True, text=True, check=check)


def run_check(dirpath, *args):
    return subprocess.run([sys.executable, SCRIPT, *args], cwd=dirpath, capture_output=True, text=True)


def write_clauses(dirpath, clauses):
    os.makedirs(os.path.join(dirpath, 'data'), exist_ok=True)
    with open(os.path.join(dirpath, 'data', 'clauses.json'), 'w') as f:
        json.dump({"clauses": clauses}, f)


def init_repo(clauses, branch=PROTECTED_BRANCH):
    d = tempfile.mkdtemp(prefix='commit_discipline_test_')
    git(d, 'init', '-q', '-b', branch)
    git(d, 'config', 'user.email', 'test@example.com')
    git(d, 'config', 'user.name', 'Test')
    # Always declares PROTECTED_BRANCH as protected, regardless of which
    # branch this particular repo is checked out on -- so a test that
    # passes a *different* `branch` genuinely exercises "not on the
    # protected branch," rather than accidentally protecting whatever
    # branch it happens to create.
    with open(os.path.join(d, '.claude-protected-branch'), 'w') as f:
        f.write(PROTECTED_BRANCH + '\n')
    write_clauses(d, clauses)
    git(d, 'add', '-A')
    git(d, 'commit', '-q', '-m', 'initial commit\n\nReviewed-By: test-setup')
    return d


class CheckCommitDisciplineTests(unittest.TestCase):
    def setUp(self):
        self._dirs = []

    def tearDown(self):
        for d in self._dirs:
            shutil.rmtree(d, ignore_errors=True)

    def make_repo(self, clauses=None, branch=PROTECTED_BRANCH):
        d = init_repo(clauses or [dict(BASE_CLAUSE)], branch=branch)
        self._dirs.append(d)
        return d

    def commit_msg_file(self, dirpath, message):
        path = os.path.join(dirpath, 'MSG')
        with open(path, 'w') as f:
            f.write(message)
        return path

    def test_commit_without_reviewed_by_on_protected_branch_fails(self):
        d = self.make_repo()
        msg = self.commit_msg_file(d, 'a plain commit message, no trailer')
        r = run_check(d, '--commit-msg-file', msg)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('Reviewed-By', r.stdout)

    def test_commit_with_reviewed_by_on_protected_branch_passes(self):
        d = self.make_repo()
        msg = self.commit_msg_file(d, 'a reviewed commit\n\nReviewed-By: someone')
        r = run_check(d, '--commit-msg-file', msg)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)

    def test_commit_without_reviewed_by_on_other_branch_passes(self):
        d = self.make_repo(branch='claude/some-child-branch')
        msg = self.commit_msg_file(d, 'agent work on its own child branch, no trailer needed')
        r = run_check(d, '--commit-msg-file', msg)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)

    def test_editing_existing_clause_body_without_patch_id_fails(self):
        d = self.make_repo()
        clauses = json.load(open(os.path.join(d, 'data', 'clauses.json')))['clauses']
        clauses[0]['body'] = 'Edited body text.'
        write_clauses(d, clauses)
        git(d, 'add', '-A')
        msg = self.commit_msg_file(d, 'edit a clause\n\nReviewed-By: someone')
        r = run_check(d, '--commit-msg-file', msg)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('Patch-ID', r.stdout)

    def test_editing_existing_clause_body_with_patch_id_passes(self):
        d = self.make_repo()
        clauses = json.load(open(os.path.join(d, 'data', 'clauses.json')))['clauses']
        clauses[0]['body'] = 'Edited body text.'
        write_clauses(d, clauses)
        git(d, 'add', '-A')
        msg = self.commit_msg_file(d, 'edit a clause\n\nReviewed-By: someone\nPatch-ID: P-1')
        r = run_check(d, '--commit-msg-file', msg)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)

    def test_adding_a_new_clause_needs_no_patch_id(self):
        # A brand-new clause has no prior text to have silently rewritten
        # -- Global Rule 7 is about editing what already exists.
        d = self.make_repo()
        clauses = json.load(open(os.path.join(d, 'data', 'clauses.json')))['clauses']
        new_clause = dict(BASE_CLAUSE)
        new_clause['id'] = 'brand_new_clause'
        clauses.append(new_clause)
        write_clauses(d, clauses)
        git(d, 'add', '-A')
        msg = self.commit_msg_file(d, 'add a new clause\n\nReviewed-By: someone')
        r = run_check(d, '--commit-msg-file', msg)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)

    def test_touching_only_status_and_checked_date_needs_no_patch_id(self):
        # Routine re-verification (bump checkedDate, flip status) without
        # rewriting the actual text isn't the "edit clause text" case
        # Global Rule 7 governs.
        d = self.make_repo()
        clauses = json.load(open(os.path.join(d, 'data', 'clauses.json')))['clauses']
        clauses[0]['checkedDate'] = '2026-06-01'
        write_clauses(d, clauses)
        git(d, 'add', '-A')
        msg = self.commit_msg_file(d, 'bump checked date\n\nReviewed-By: someone')
        r = run_check(d, '--commit-msg-file', msg)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)

    def test_duplicate_citation_url_does_not_cause_a_false_positive(self):
        # Regression test for a real bug: pairing citations by URL broke
        # when a clause cites the same source twice for two different
        # quotes (common in the real corpus) -- the wrong old citation
        # got matched to the wrong new one, flagging an untouched quote
        # as "changed." Two citations sharing a URL, neither one's text
        # actually edited, must not trip the Patch-ID requirement.
        clause = dict(BASE_CLAUSE)
        clause['citations'] = [
            {"case": "Test v. Case", "cite": "1 Test 1", "url": "https://example.com/1", "quote": "first quote"},
            {"case": "Test v. Case", "cite": "1 Test 5", "url": "https://example.com/1", "quote": "second quote"},
        ]
        d = self.make_repo(clauses=[clause])
        clauses = json.load(open(os.path.join(d, 'data', 'clauses.json')))['clauses']
        # Reorder the two same-URL citations -- still no actual text change.
        clauses[0]['citations'] = list(reversed(clauses[0]['citations']))
        write_clauses(d, clauses)
        git(d, 'add', '-A')
        msg = self.commit_msg_file(d, 'reorder citations only\n\nReviewed-By: someone')
        r = run_check(d, '--commit-msg-file', msg)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)

    def test_actually_editing_one_of_two_same_url_citations_is_caught(self):
        clause = dict(BASE_CLAUSE)
        clause['citations'] = [
            {"case": "Test v. Case", "cite": "1 Test 1", "url": "https://example.com/1", "quote": "first quote"},
            {"case": "Test v. Case", "cite": "1 Test 5", "url": "https://example.com/1", "quote": "second quote"},
        ]
        d = self.make_repo(clauses=[clause])
        clauses = json.load(open(os.path.join(d, 'data', 'clauses.json')))['clauses']
        clauses[0]['citations'][1]['quote'] = 'an actually different second quote'
        write_clauses(d, clauses)
        git(d, 'add', '-A')
        msg = self.commit_msg_file(d, 'actually edit one quote\n\nReviewed-By: someone')
        r = run_check(d, '--commit-msg-file', msg)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('Patch-ID', r.stdout)

    def test_rev_range_catches_a_historical_violating_commit(self):
        d = self.make_repo()
        clauses = json.load(open(os.path.join(d, 'data', 'clauses.json')))['clauses']
        clauses[0]['body'] = 'Edited without review.'
        write_clauses(d, clauses)
        git(d, 'add', '-A')
        # Bypass the hook entirely for this test (there is no hook
        # installed in this throwaway repo) to simulate a commit that
        # landed some other way -- exactly what --rev-range exists to
        # catch after the fact.
        git(d, 'commit', '-q', '-m', 'unreviewed edit, no patch id')
        old_sha = git(d, 'rev-list', '--max-parents=0', 'HEAD').stdout.strip()
        new_sha = git(d, 'rev-parse', 'HEAD').stdout.strip()
        r = run_check(d, '--rev-range', f'{old_sha}..{new_sha}')
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('Reviewed-By', r.stdout)
        self.assertIn('Patch-ID', r.stdout)

    def test_rev_range_passes_when_every_commit_is_clean(self):
        d = self.make_repo()
        clauses = json.load(open(os.path.join(d, 'data', 'clauses.json')))['clauses']
        clauses[0]['checkedDate'] = '2026-06-01'
        write_clauses(d, clauses)
        git(d, 'add', '-A')
        git(d, 'commit', '-q', '-m', 'clean commit\n\nReviewed-By: someone')
        old_sha = git(d, 'rev-list', '--max-parents=0', 'HEAD').stdout.strip()
        new_sha = git(d, 'rev-parse', 'HEAD').stdout.strip()
        r = run_check(d, '--rev-range', f'{old_sha}..{new_sha}')
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)


if __name__ == '__main__':
    unittest.main()
