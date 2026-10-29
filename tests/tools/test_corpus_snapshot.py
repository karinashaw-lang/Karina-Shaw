#!/usr/bin/env python3
"""Tests for tools/corpus_snapshot.py (Phase 9.6): --tag writes a
permanent, never-overwritten manifest under corpus_snapshots/; no
--tag only previews it; counts match the real corpus structure.

Run directly: python3 tests/tools/test_corpus_snapshot.py
"""
import json
import os
import shutil
import subprocess
import sys
import tempfile
import unittest

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SNAPSHOT_TOOL = os.path.join(REPO_ROOT, 'tools', 'corpus_snapshot.py')

DOC = {"id": "test_doc", "title": "Test Document", "categories": ["Hiring"], "clauseOrder": ["c1"]}
CLAUSE = {"id": "c1", "title": "C1", "kind": "authority", "status": "verified",
          "checkedDate": "2026-01-01", "body": "Body.", "gap": "Gap.",
          "citations": [{"case": "A v. B", "cite": "1 X 1", "url": "https://example.com", "quote": "q"}]}


def build_corpus_dir():
    d = tempfile.mkdtemp(prefix='corpus_snapshot_test_')
    os.makedirs(os.path.join(d, 'data'))
    os.makedirs(os.path.join(d, 'schema', 'fields'))
    os.makedirs(os.path.join(d, 'config'))
    os.makedirs(os.path.join(d, 'search'))
    os.makedirs(os.path.join(d, 'filing'))
    os.makedirs(os.path.join(d, 'index'))
    with open(os.path.join(d, 'data', 'documents.json'), 'w') as f:
        json.dump([DOC], f)
    with open(os.path.join(d, 'data', 'clauses.json'), 'w') as f:
        json.dump({'clauses': [CLAUSE]}, f)
    return d


def run_tool(dirpath, *args):
    return subprocess.run(
        [sys.executable, SNAPSHOT_TOOL, *args],
        cwd=dirpath, capture_output=True, text=True,
    )


class CorpusSnapshotTests(unittest.TestCase):
    def setUp(self):
        self._dirs = []

    def tearDown(self):
        for d in self._dirs:
            shutil.rmtree(d, ignore_errors=True)

    def mkdir(self):
        d = build_corpus_dir()
        self._dirs.append(d)
        return d

    def test_no_tag_writes_nothing(self):
        d = self.mkdir()
        r = run_tool(d)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertFalse(os.path.exists(os.path.join(d, 'corpus_snapshots')))

    def test_no_tag_prints_correct_counts(self):
        d = self.mkdir()
        r = run_tool(d)
        manifest = json.loads(r.stdout.split('\n\n(no --tag')[0])
        self.assertEqual(manifest['counts'], {'documents': 1, 'clauses': 1, 'citations': 1})

    def test_tag_writes_a_permanent_file(self):
        d = self.mkdir()
        r = run_tool(d, '--tag', 'v1')
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        out_path = os.path.join(d, 'corpus_snapshots', 'v1.json')
        self.assertTrue(os.path.exists(out_path))
        with open(out_path) as f:
            manifest = json.load(f)
        self.assertEqual(manifest['tag'], 'v1')
        self.assertIn('data/documents.json', manifest['file_hashes'])

    def test_tag_refuses_to_overwrite(self):
        d = self.mkdir()
        run_tool(d, '--tag', 'v1')
        r = run_tool(d, '--tag', 'v1')
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('already exists', r.stderr)

    def test_hash_changes_when_corpus_changes(self):
        d = self.mkdir()
        run_tool(d, '--tag', 'v1')
        with open(os.path.join(d, 'data', 'documents.json'), 'w') as f:
            json.dump([DOC, {**DOC, 'id': 'test_doc_2'}], f)
        run_tool(d, '--tag', 'v2')
        with open(os.path.join(d, 'corpus_snapshots', 'v1.json')) as f:
            v1 = json.load(f)
        with open(os.path.join(d, 'corpus_snapshots', 'v2.json')) as f:
            v2 = json.load(f)
        self.assertNotEqual(v1['file_hashes']['data/documents.json'], v2['file_hashes']['data/documents.json'])
        self.assertEqual(v2['counts']['documents'], 2)


if __name__ == '__main__':
    unittest.main()
