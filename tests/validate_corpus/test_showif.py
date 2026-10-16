#!/usr/bin/env python3
"""Tests for validate_corpus.py's showIf checks.

Nothing in the real corpus uses showIf yet (Phase 2.4 is what adds real
conditional fields), so unlike the declared-but-unused-field check this
phase's migration also added — which immediately caught 4 real defects —
the showIf cycle detector has no live data to exercise it. Writing code
with no real input and trusting it to be correct the day it first matters
is exactly the kind of thing this project otherwise insists on testing
directly (see tests/merge_guard/ for the same reasoning applied to
merge_guard.py). These tests build a minimal, otherwise-fully-valid
corpus in a throwaway directory and run the real validate_corpus.py
against it as a subprocess, so what's being tested is the actual script
CI runs, not a reimplementation of its logic.

Run directly: python3 tests/validate_corpus/test_showif.py
"""
import json
import os
import shutil
import subprocess
import sys
import tempfile
import unittest

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
VALIDATE_CORPUS = os.path.join(REPO_ROOT, 'tools', 'validate_corpus.py')
REAL_SCHEMA = os.path.join(REPO_ROOT, 'schema', 'field.schema.json')
REAL_PHRASES = os.path.join(REPO_ROOT, 'lint', 'advisory_phrases.json')

# A minimal but fully valid authority clause — same shape validate_corpus.py
# requires: non-empty gap, at least one citation with url/quote, a verified
# status with a real, recent, non-future checkedDate.
BASE_CLAUSE = {
    "id": "test_clause",
    "title": "Test Clause",
    "kind": "authority",
    "status": "verified",
    "checkedDate": "2026-01-01",
    "body": "Test body.",
    "gap": "Test gap.",
    "citations": [
        {"case": "Test v. Case", "cite": "1 Test 1", "url": "https://example.com/1", "quote": "test quote"},
    ],
}

BASE_FIELDS = [
    {"id": "fieldA", "label": "Field A", "type": "text", "required": True},
    {"id": "fieldB", "label": "Field B", "type": "text", "required": True},
]

BASE_DOC = {
    "id": "test_doc",
    "title": "Test Document",
    "description": "A test document.",
    "categories": ["Hiring"],
    "clauseOrder": ["test_clause"],
    "fields": BASE_FIELDS,
}


def build_corpus_dir(fields):
    """Writes a throwaway corpus (data/*.json + a real copy of the field
    schema) to a new temp directory, with the document's fields[]
    replaced by `fields`. Everything else is the known-valid BASE_* shape,
    so a failure can only come from the showIf check under test — including
    the clause body, which references every given field id via {{...}} so
    the separate "declared field actually used" check (also added in
    Phase 2.1) never fires here regardless of which fields a given test
    passes in."""
    d = tempfile.mkdtemp(prefix='validate_showif_test_')
    os.makedirs(os.path.join(d, 'data'))
    os.makedirs(os.path.join(d, 'schema'))
    os.makedirs(os.path.join(d, 'lint'))
    doc = dict(BASE_DOC)
    doc['fields'] = fields
    with open(os.path.join(d, 'data', 'documents.json'), 'w') as f:
        json.dump([doc], f)
    clause = dict(BASE_CLAUSE)
    clause['body'] = 'Test body. ' + ' '.join(f'{{{{{f["id"]}}}}}' for f in fields)
    with open(os.path.join(d, 'data', 'clauses.json'), 'w') as f:
        json.dump({"clauses": [clause]}, f)
    shutil.copy(REAL_SCHEMA, os.path.join(d, 'schema', 'field.schema.json'))
    shutil.copy(REAL_PHRASES, os.path.join(d, 'lint', 'advisory_phrases.json'))
    return d


def run_validate(dirpath):
    return subprocess.run(
        [sys.executable, VALIDATE_CORPUS],
        cwd=dirpath, capture_output=True, text=True,
    )


class ShowIfTests(unittest.TestCase):
    def setUp(self):
        self._dirs = []

    def tearDown(self):
        for d in self._dirs:
            shutil.rmtree(d, ignore_errors=True)

    def run_with_fields(self, fields):
        d = build_corpus_dir(fields)
        self._dirs.append(d)
        return run_validate(d)

    def test_no_showif_passes(self):
        r = self.run_with_fields(BASE_FIELDS)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('validation passed', r.stdout)

    def test_valid_showif_passes(self):
        fields = [
            dict(BASE_FIELDS[0]),
            {**BASE_FIELDS[1], 'showIf': {'field': 'fieldA', 'equals': 'yes'}},
        ]
        r = self.run_with_fields(fields)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('validation passed', r.stdout)

    def test_showif_cycle_caught(self):
        fields = [
            {**BASE_FIELDS[0], 'showIf': {'field': 'fieldB', 'equals': 'yes'}},
            {**BASE_FIELDS[1], 'showIf': {'field': 'fieldA', 'equals': 'yes'}},
        ]
        r = self.run_with_fields(fields)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('showIf cycle', r.stderr)

    def test_showif_self_reference_caught(self):
        fields = [
            {**BASE_FIELDS[0], 'showIf': {'field': 'fieldA', 'equals': 'yes'}},
            dict(BASE_FIELDS[1]),
        ]
        r = self.run_with_fields(fields)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('not another field in the same document', r.stderr)

    def test_showif_undeclared_target_caught(self):
        fields = [
            {**BASE_FIELDS[0], 'showIf': {'field': 'noSuchField', 'equals': 'yes'}},
            dict(BASE_FIELDS[1]),
        ]
        r = self.run_with_fields(fields)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('not another field in the same document', r.stderr)

    def test_three_field_cycle_caught(self):
        fields = [
            {"id": "fieldA", "label": "A", "type": "text", "required": True,
             "showIf": {"field": "fieldB", "equals": "yes"}},
            {"id": "fieldB", "label": "B", "type": "text", "required": True,
             "showIf": {"field": "fieldC", "equals": "yes"}},
            {"id": "fieldC", "label": "C", "type": "text", "required": True,
             "showIf": {"field": "fieldA", "equals": "yes"}},
        ]
        r = self.run_with_fields(fields)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('showIf cycle', r.stderr)


if __name__ == '__main__':
    unittest.main()
