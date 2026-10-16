#!/usr/bin/env python3
"""Tests for validate_corpus.py's advisory-phrase lint (Phase 2.2b):
whyWeAsk/helpText text, wherever it appears (shared field library entries
or a document field's own), must not contain a banned advisory phrase
from lint/advisory_phrases.json. "Inform, never advise" is the project's
core rule; this is the one place that rule is checked mechanically rather
than by review alone.

Run directly: python3 tests/validate_corpus/test_advisory_lint.py
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

BASE_DOC = {
    "id": "test_doc",
    "title": "Test Document",
    "description": "A test document.",
    "categories": ["Hiring"],
    "clauseOrder": ["test_clause"],
}


def build_corpus_dir(fields, library_entries):
    d = tempfile.mkdtemp(prefix='validate_advisory_lint_test_')
    os.makedirs(os.path.join(d, 'data'))
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


class AdvisoryLintTests(unittest.TestCase):
    def setUp(self):
        self._dirs = []

    def tearDown(self):
        for d in self._dirs:
            shutil.rmtree(d, ignore_errors=True)

    def run_with(self, fields, library_entries=None):
        d = build_corpus_dir(fields, library_entries or [])
        self._dirs.append(d)
        return run_validate(d)

    def test_clean_why_we_ask_passes(self):
        fields = [{"id": "fieldA", "label": "Field A", "type": "text", "required": True,
                   "whyWeAsk": "This is a plain, factual description of the field."}]
        r = self.run_with(fields)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('validation passed', r.stdout)

    def test_advisory_phrase_in_document_field_caught(self):
        fields = [{"id": "fieldA", "label": "Field A", "type": "text", "required": True,
                   "whyWeAsk": "You should fill this in carefully."}]
        r = self.run_with(fields)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('banned phrase', r.stderr)

    def test_advisory_phrase_in_library_entry_caught(self):
        fields = [{"id": "fieldA", "label": "Field A", "type": "text", "required": True}]
        library = [{"id": "fieldA", "label": "Field A", "type": "text",
                    "whyWeAsk": "We recommend answering this honestly."}]
        r = self.run_with(fields, library)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('banned phrase', r.stderr)

    def test_advisory_phrase_in_help_text_caught(self):
        fields = [{"id": "fieldA", "label": "Field A", "type": "text", "required": True,
                   "helpText": "It is best to double check this value."}]
        r = self.run_with(fields)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('banned phrase', r.stderr)


if __name__ == '__main__':
    unittest.main()
