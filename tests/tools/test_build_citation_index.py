#!/usr/bin/env python3
"""Tests for tools/build_citation_index.py: every citation in
data/clauses.json produces exactly one entry in the index, grouped by
url and then kept distinct by its own (case, cite) pair so two
different pin-cites sharing one statute page don't collapse into a
single undifferentiated clauseIds list; and --check detects a stale
index/citation_to_clauses.json the same way tools/tiering.py's --check
detects a stale tiers.json.

Builds a minimal, otherwise-valid corpus in a throwaway directory and
runs the real build_citation_index.py against it as a subprocess.

Run directly: python3 tests/tools/test_build_citation_index.py
"""
import json
import os
import shutil
import subprocess
import sys
import tempfile
import unittest

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
BUILD_INDEX = os.path.join(REPO_ROOT, 'tools', 'build_citation_index.py')


def authority_clause(cid, citations):
    return {
        "id": cid, "title": cid, "kind": "authority", "status": "verified",
        "checkedDate": "2026-01-01", "body": f"Body of {cid}.", "gap": "Test gap.",
        "citations": citations,
    }


def citation(case, cite, url):
    return {"case": case, "cite": cite, "url": url, "quote": "test quote"}


def build_corpus_dir(clauses):
    d = tempfile.mkdtemp(prefix='citation_index_test_')
    os.makedirs(os.path.join(d, 'data'))
    with open(os.path.join(d, 'data', 'clauses.json'), 'w') as f:
        json.dump({"clauses": clauses}, f)
    return d


def run_build(dirpath, *args):
    return subprocess.run(
        [sys.executable, BUILD_INDEX, *args],
        cwd=dirpath, capture_output=True, text=True,
    )


class CitationIndexTests(unittest.TestCase):
    def setUp(self):
        self._dirs = []

    def tearDown(self):
        for d in self._dirs:
            shutil.rmtree(d, ignore_errors=True)

    def load_index(self, d):
        with open(os.path.join(d, 'index', 'citation_to_clauses.json')) as f:
            return json.load(f)

    def test_every_citation_covered(self):
        clauses = [
            authority_clause('c1', [citation('Case A', '1 A 1', 'https://example.com/a')]),
            authority_clause('c2', [citation('Case B', '2 B 2', 'https://example.com/b')]),
        ]
        d = build_corpus_dir(clauses)
        self._dirs.append(d)
        r = run_build(d)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        index = self.load_index(d)
        self.assertEqual(index['citationCount'], 2)
        self.assertEqual(index['uniqueUrls'], 2)
        self.assertEqual(index['byUrl']['https://example.com/a'][0]['clauseIds'], ['c1'])
        self.assertEqual(index['byUrl']['https://example.com/b'][0]['clauseIds'], ['c2'])

    def test_same_citation_shared_across_clauses_merges_clause_ids(self):
        shared = citation('Case A', '1 A 1', 'https://example.com/a')
        clauses = [
            authority_clause('c1', [shared]),
            authority_clause('c2', [dict(shared)]),
        ]
        d = build_corpus_dir(clauses)
        self._dirs.append(d)
        run_build(d)
        index = self.load_index(d)
        entries = index['byUrl']['https://example.com/a']
        self.assertEqual(len(entries), 1)
        self.assertEqual(entries[0]['clauseIds'], ['c1', 'c2'])

    def test_distinct_pin_cites_sharing_a_url_stay_separate(self):
        # Same statute page, two different subsections pin-cited -- must
        # NOT collapse into one undifferentiated clauseIds list.
        clauses = [
            authority_clause('c1', [citation('29 U.S.C. § 207(a)(1)', 'overtime', 'https://example.com/statute')]),
            authority_clause('c2', [citation('29 U.S.C. § 207(a)(2)', 'exemption', 'https://example.com/statute')]),
        ]
        d = build_corpus_dir(clauses)
        self._dirs.append(d)
        run_build(d)
        index = self.load_index(d)
        entries = index['byUrl']['https://example.com/statute']
        self.assertEqual(len(entries), 2)
        clause_ids_by_case = {e['case']: e['clauseIds'] for e in entries}
        self.assertEqual(clause_ids_by_case['29 U.S.C. § 207(a)(1)'], ['c1'])
        self.assertEqual(clause_ids_by_case['29 U.S.C. § 207(a)(2)'], ['c2'])

    def test_drafting_clauses_have_no_citations_to_index(self):
        clauses = [
            {"id": "d1", "title": "d1", "kind": "drafting", "body": "No citation needed."},
        ]
        d = build_corpus_dir(clauses)
        self._dirs.append(d)
        r = run_build(d)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        index = self.load_index(d)
        self.assertEqual(index['citationCount'], 0)
        self.assertEqual(index['byUrl'], {})

    def test_check_passes_right_after_generation(self):
        clauses = [authority_clause('c1', [citation('Case A', '1 A 1', 'https://example.com/a')])]
        d = build_corpus_dir(clauses)
        self._dirs.append(d)
        run_build(d)
        r = run_build(d, '--check')
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)

    def test_check_fails_without_index_file(self):
        clauses = [authority_clause('c1', [citation('Case A', '1 A 1', 'https://example.com/a')])]
        d = build_corpus_dir(clauses)
        self._dirs.append(d)
        r = run_build(d, '--check')
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)

    def test_check_fails_on_stale_index(self):
        clauses = [authority_clause('c1', [citation('Case A', '1 A 1', 'https://example.com/a')])]
        d = build_corpus_dir(clauses)
        self._dirs.append(d)
        run_build(d)
        # Simulate the corpus changing after the index was generated: add
        # a brand-new citation nothing in the on-disk index reflects.
        clauses.append(authority_clause('c2', [citation('Case B', '2 B 2', 'https://example.com/b')]))
        with open(os.path.join(d, 'data', 'clauses.json'), 'w') as f:
            json.dump({"clauses": clauses}, f)
        r = run_build(d, '--check')
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('stale', r.stderr)


if __name__ == '__main__':
    unittest.main()
