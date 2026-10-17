#!/usr/bin/env python3
"""Tests for validate_corpus.py's clause-level includeIf checks (Phase
2.4): a clauseOrder entry's includeIf.field must name a field the
document actually declares, must set exactly one of equals/notEquals,
and every real branch across a document's conditional fields must still
include at least one clause. Nothing in the real corpus uses includeIf
yet, so — same reasoning as test_showif.py for field-level showIf —
this builds a minimal, otherwise-valid corpus in a throwaway directory
and runs the real validate_corpus.py against it as a subprocess.

Run directly: python3 tests/validate_corpus/test_include_if.py
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

BASE_FIELDS = [
    {"id": "wantsArbitration", "label": "Include arbitration clause?", "type": "text", "required": True},
]

BASE_DOC = {
    "id": "test_doc",
    "title": "Test Document",
    "description": "A test document.",
    "categories": ["Hiring"],
    "clauseOrder": [],
    "fields": BASE_FIELDS,
}


def authority_clause(cid):
    return {
        "id": cid, "title": cid, "kind": "authority", "status": "verified",
        "checkedDate": "2026-01-01", "body": f"Body of {cid}.", "gap": "Test gap.",
        "citations": [{"case": "Test v. Case", "cite": "1 Test 1",
                       "url": "https://example.com/1", "quote": "test quote"}],
    }


def build_corpus_dir(clause_order, clauses, fields=None):
    d = tempfile.mkdtemp(prefix='validate_includeif_test_')
    os.makedirs(os.path.join(d, 'data'))
    os.makedirs(os.path.join(d, 'schema'))
    os.makedirs(os.path.join(d, 'lint'))
    doc = dict(BASE_DOC)
    doc['clauseOrder'] = clause_order
    if fields is not None:
        doc['fields'] = fields
    with open(os.path.join(d, 'data', 'documents.json'), 'w') as f:
        json.dump([doc], f)
    with open(os.path.join(d, 'data', 'clauses.json'), 'w') as f:
        json.dump({"clauses": clauses}, f)
    shutil.copy(REAL_SCHEMA, os.path.join(d, 'schema', 'field.schema.json'))
    shutil.copy(REAL_PHRASES, os.path.join(d, 'lint', 'advisory_phrases.json'))
    return d


def run_validate(dirpath):
    return subprocess.run(
        [sys.executable, VALIDATE_CORPUS],
        cwd=dirpath, capture_output=True, text=True,
    )


class IncludeIfTests(unittest.TestCase):
    def setUp(self):
        self._dirs = []

    def tearDown(self):
        for d in self._dirs:
            shutil.rmtree(d, ignore_errors=True)

    def run_with(self, clause_order, clauses, fields=None):
        d = build_corpus_dir(clause_order, clauses, fields=fields)
        self._dirs.append(d)
        return run_validate(d)

    def test_all_unconditional_passes(self):
        # No conditional field in play at all here, so the document
        # declares none (fields=[]) — a field would be legitimately dead
        # in this case, not an artifact of the test.
        r = self.run_with(['c1'], [authority_clause('c1')], fields=[])
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('validation passed', r.stdout)

    def test_valid_include_if_passes(self):
        order = ['c1', {'id': 'c2', 'includeIf': {'field': 'wantsArbitration', 'equals': 'yes'}}]
        r = self.run_with(order, [authority_clause('c1'), authority_clause('c2')])
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('validation passed', r.stdout)

    def test_undeclared_field_caught(self):
        order = ['c1', {'id': 'c2', 'includeIf': {'field': 'noSuchField', 'equals': 'yes'}}]
        r = self.run_with(order, [authority_clause('c1'), authority_clause('c2')])
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('not a field declared by this document', r.stderr)

    def test_both_equals_and_not_equals_caught(self):
        order = ['c1', {'id': 'c2', 'includeIf': {'field': 'wantsArbitration', 'equals': 'yes', 'notEquals': 'no'}}]
        r = self.run_with(order, [authority_clause('c1'), authority_clause('c2')])
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('exactly one of equals/notEquals', r.stderr)

    def test_neither_equals_nor_not_equals_caught(self):
        order = ['c1', {'id': 'c2', 'includeIf': {'field': 'wantsArbitration'}}]
        r = self.run_with(order, [authority_clause('c1'), authority_clause('c2')])
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('exactly one of equals/notEquals', r.stderr)

    def test_all_clauses_conditional_with_an_empty_branch_caught(self):
        # Both clauses are only included when the field equals "yes", with
        # no unconditional clause as a floor — whenever the answer isn't
        # "yes", the document would render zero clauses. This is exactly
        # the mistake the branch-enumeration check exists to catch.
        order = [
            {'id': 'c1', 'includeIf': {'field': 'wantsArbitration', 'equals': 'yes'}},
            {'id': 'c2', 'includeIf': {'field': 'wantsArbitration', 'equals': 'yes'}},
        ]
        r = self.run_with(order, [authority_clause('c1'), authority_clause('c2')])
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('zero clauses', r.stderr)

    def test_mixed_conditional_and_floor_clause_never_empty(self):
        order = [
            'c1',  # unconditional floor clause
            {'id': 'c2', 'includeIf': {'field': 'wantsArbitration', 'equals': 'yes'}},
        ]
        r = self.run_with(order, [authority_clause('c1'), authority_clause('c2')])
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('validation passed', r.stdout)


if __name__ == '__main__':
    unittest.main()
