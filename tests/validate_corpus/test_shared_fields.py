#!/usr/bin/env python3
"""Tests for validate_corpus.py's schema/fields/*.json (shared field
library, Phase 2.2) checks: duplicate ids across library files, a
library entry missing a required key or using a bad type, and a
document's sharedFieldId either resolving to nothing or resolving to an
entry whose type disagrees with the document field's own type. Same
approach as test_showif.py — build a minimal, otherwise-valid corpus in
a throwaway directory (including its own schema/fields/) and run the
real validate_corpus.py against it as a subprocess.

Run directly: python3 tests/validate_corpus/test_shared_fields.py
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
    {"id": "fieldA", "label": "Field A", "type": "text", "required": True, "sharedFieldId": "fieldA"},
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

BASE_LIBRARY = [
    {"id": "fieldA", "label": "Field A", "type": "text"},
]


def build_corpus_dir(fields, library_entries):
    d = tempfile.mkdtemp(prefix='validate_shared_fields_test_')
    os.makedirs(os.path.join(d, 'data'))
    os.makedirs(os.path.join(d, 'schema'))
    os.makedirs(os.path.join(d, 'schema', 'fields'))
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
    with open(os.path.join(d, 'schema', 'fields', 'test.json'), 'w') as f:
        json.dump(library_entries, f)
    return d


def run_validate(dirpath):
    return subprocess.run(
        [sys.executable, VALIDATE_CORPUS],
        cwd=dirpath, capture_output=True, text=True,
    )


class SharedFieldTests(unittest.TestCase):
    def setUp(self):
        self._dirs = []

    def tearDown(self):
        for d in self._dirs:
            shutil.rmtree(d, ignore_errors=True)

    def run_with(self, fields, library_entries):
        d = build_corpus_dir(fields, library_entries)
        self._dirs.append(d)
        return run_validate(d)

    def test_valid_shared_field_passes(self):
        r = self.run_with(BASE_FIELDS, BASE_LIBRARY)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('validation passed', r.stdout)
        self.assertIn('1 shared field definitions', r.stdout)

    def test_unresolved_shared_field_id_caught(self):
        fields = [
            {"id": "fieldA", "label": "Field A", "type": "text", "required": True, "sharedFieldId": "noSuchSharedField"},
            dict(BASE_FIELDS[1]),
        ]
        r = self.run_with(fields, BASE_LIBRARY)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('references no entry', r.stderr)

    def test_type_mismatch_against_library_caught(self):
        fields = [
            {"id": "fieldA", "label": "Field A", "type": "date", "required": True, "sharedFieldId": "fieldA"},
            dict(BASE_FIELDS[1]),
        ]
        r = self.run_with(fields, BASE_LIBRARY)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('type mismatch', r.stderr)

    def test_duplicate_library_id_caught(self):
        library = [
            {"id": "fieldA", "label": "Field A", "type": "text"},
            {"id": "fieldA", "label": "Field A again", "type": "text"},
        ]
        r = self.run_with(BASE_FIELDS, library)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('defined more than once', r.stderr)

    def test_library_entry_missing_required_key_caught(self):
        library = [{"id": "fieldA", "type": "text"}]  # no label
        r = self.run_with(BASE_FIELDS, library)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('invalid entries', r.stderr)

    def test_library_entry_bad_type_caught(self):
        library = [{"id": "fieldA", "label": "Field A", "type": "not-a-real-type"}]
        r = self.run_with(BASE_FIELDS, library)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('invalid entries', r.stderr)


if __name__ == '__main__':
    unittest.main()
