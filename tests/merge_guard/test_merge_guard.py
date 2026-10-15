#!/usr/bin/env python3
"""Tests for tools/merge_guard.py.

merge_guard.py's whole job is catching the specific failure mode a
union-merge produces: an edit to a clause or document that already existed
on both sides gets silently reverted to "ours," with no conflict reported.
These tests build a throwaway git repo with a minimal corpus, mutate it
the same ways a real correction would, and confirm the guard actually
flags each one — not just that it runs. A guard nobody has tested against
a known-bad case is just a script that happens to have passed so far.

Run directly: python3 tests/merge_guard/test_merge_guard.py
"""
import json
import os
import shutil
import subprocess
import sys
import tempfile
import unittest

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
MERGE_GUARD = os.path.join(REPO_ROOT, 'tools', 'merge_guard.py')

BASE_CLAUSE = {
    "id": "test_clause",
    "title": "Test Clause",
    "kind": "authority",
    "status": "verified",
    "checkedDate": "2026-01-01",
    "body": "Original body text.",
    "gap": "Some gap.",
    "citations": [
        {"case": "Test v. Case", "cite": "1 Test 1", "url": "https://example.com/1", "quote": "original quote"},
    ],
}
BASE_DOC = {
    "id": "test_doc",
    "title": "Test Document",
    "description": "A test document.",
    "categories": ["Hiring"],
    "clauseOrder": ["test_clause"],
    "fields": [],
}


def write_data(dirpath, clauses, docs):
    os.makedirs(os.path.join(dirpath, 'data'), exist_ok=True)
    with open(os.path.join(dirpath, 'data', 'clauses.json'), 'w') as f:
        json.dump({"clauses": clauses}, f)
    with open(os.path.join(dirpath, 'data', 'documents.json'), 'w') as f:
        json.dump(docs, f)


def git(dirpath, *args):
    return subprocess.run(['git', *args], cwd=dirpath, capture_output=True, text=True, check=True)


def init_repo(clauses, docs):
    d = tempfile.mkdtemp(prefix='merge_guard_test_')
    git(d, 'init', '-q')
    git(d, 'config', 'user.email', 'test@example.com')
    git(d, 'config', 'user.name', 'Test')
    write_data(d, clauses, docs)
    git(d, 'add', '.')
    git(d, 'commit', '-q', '-m', 'base')
    base_sha = git(d, 'rev-parse', 'HEAD').stdout.strip()
    return d, base_sha


def run_guard(dirpath, base_ref):
    return subprocess.run(
        [sys.executable, MERGE_GUARD, base_ref],
        cwd=dirpath, capture_output=True, text=True,
    )


class MergeGuardTests(unittest.TestCase):
    def setUp(self):
        self.dir, self.base_sha = init_repo([dict(BASE_CLAUSE)], [dict(BASE_DOC)])

    def tearDown(self):
        shutil.rmtree(self.dir, ignore_errors=True)

    def test_clean_noop_passes(self):
        r = run_guard(self.dir, self.base_sha)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('clean: additions only', r.stdout)

    def test_pure_addition_passes(self):
        # A worker branch adding a new clause/document is exactly the case
        # union-merge handles correctly — the guard must not flag it.
        clauses = [dict(BASE_CLAUSE), {**BASE_CLAUSE, "id": "new_clause", "title": "New"}]
        docs = [dict(BASE_DOC), {**BASE_DOC, "id": "new_doc", "title": "New Doc", "clauseOrder": ["new_clause"]}]
        write_data(self.dir, clauses, docs)
        r = run_guard(self.dir, self.base_sha)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)

    def test_body_text_revert_caught(self):
        mutated = dict(BASE_CLAUSE)
        mutated['body'] = "A silently reverted, different body."
        write_data(self.dir, [mutated], [dict(BASE_DOC)])
        r = run_guard(self.dir, self.base_sha)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('MODIFIED test_clause', r.stdout)

    def test_citation_revert_caught(self):
        mutated = dict(BASE_CLAUSE)
        mutated['citations'] = [{**BASE_CLAUSE['citations'][0], 'quote': 'a different, reverted quote'}]
        write_data(self.dir, [mutated], [dict(BASE_DOC)])
        r = run_guard(self.dir, self.base_sha)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('MODIFIED test_clause', r.stdout)

    def test_citation_url_revert_caught(self):
        mutated = dict(BASE_CLAUSE)
        mutated['citations'] = [{**BASE_CLAUSE['citations'][0], 'url': 'https://example.com/reverted'}]
        write_data(self.dir, [mutated], [dict(BASE_DOC)])
        r = run_guard(self.dir, self.base_sha)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('MODIFIED test_clause', r.stdout)

    def test_checked_date_revert_caught(self):
        mutated = dict(BASE_CLAUSE)
        mutated['checkedDate'] = "2020-01-01"
        write_data(self.dir, [mutated], [dict(BASE_DOC)])
        r = run_guard(self.dir, self.base_sha)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('MODIFIED test_clause', r.stdout)

    def test_dropped_clause_caught(self):
        write_data(self.dir, [], [dict(BASE_DOC)])
        r = run_guard(self.dir, self.base_sha)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('DROPPED  test_clause', r.stdout)

    def test_document_field_revert_caught(self):
        mutated_doc = dict(BASE_DOC)
        mutated_doc['description'] = "A different, reverted description."
        write_data(self.dir, [dict(BASE_CLAUSE)], [mutated_doc])
        r = run_guard(self.dir, self.base_sha)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('MODIFIED test_doc', r.stdout)

    def test_dropped_document_caught(self):
        write_data(self.dir, [dict(BASE_CLAUSE)], [])
        r = run_guard(self.dir, self.base_sha)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('DROPPED  test_doc', r.stdout)

    def test_default_base_ref_is_head_noop_on_a_real_checkout(self):
        # Documents a real sharp edge (also called out in BASELINE.md).
        # A normal CI checkout has NO uncommitted working-tree changes —
        # the working tree always equals whatever commit is checked out.
        # So the moment the mutation is committed (simulating a real PR/
        # push, as opposed to this test's other cases which compare an
        # uncommitted working-tree edit against the still-unmoved HEAD),
        # HEAD moves right along with it, and comparing the working tree
        # against the default base-ref of "HEAD" compares that commit
        # against itself: always clean, regardless of what actually
        # changed since the true base. Passing the real base ref
        # explicitly (as CI's workflow does) is what catches it.
        mutated = dict(BASE_CLAUSE)
        mutated['body'] = "This change is invisible to a default-arg run."
        write_data(self.dir, [mutated], [dict(BASE_DOC)])
        git(self.dir, 'add', '.')
        git(self.dir, 'commit', '-q', '-m', 'the mutation, committed like a real push would be')

        default_run = subprocess.run([sys.executable, MERGE_GUARD], cwd=self.dir, capture_output=True, text=True)
        self.assertEqual(default_run.returncode, 0, default_run.stdout + default_run.stderr)

        explicit_run = run_guard(self.dir, self.base_sha)
        self.assertEqual(explicit_run.returncode, 1, explicit_run.stdout + explicit_run.stderr)
        self.assertIn('MODIFIED test_clause', explicit_run.stdout)


if __name__ == '__main__':
    unittest.main()
