#!/usr/bin/env python3
"""Tests for validate_corpus.py's Master Plan Part 1, Step 6.1 checks on
drafting-clause *body* text: advisory language, internal contradiction, and
jurisdiction disclosure. Everything in test_advisory_lint.py only ever
checked field metadata (whyWeAsk/helpText) or search copy -- this is the
first check against a clause's own body, the actual words a buyer reads.

Same approach as test_advisory_lint.py -- a minimal, otherwise-valid
synthetic corpus in a throwaway directory, running the real
validate_corpus.py against it as a subprocess.

Run directly: python3 tests/validate_corpus/test_drafting_clause_lint.py
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
REAL_CONTRADICTION_PAIRS = os.path.join(REPO_ROOT, 'lint', 'contradiction_pairs.json')
REAL_STATUTORY_NOTICE_CLAUSES = os.path.join(REPO_ROOT, 'lint', 'statutory_notice_clauses.json')
TEST_STALENESS_CONFIG = {"defaultFatalMonths": 24, "defaultWarnMonths": 18, "categories": {}}

BASE_DOC = {
    "id": "test_doc",
    "title": "Test Document",
    "description": "A test document.",
    "categories": ["Hiring"],
    "clauseOrder": ["test_drafting_clause"],
    "fields": [],
    "state": "CA",
}


def build_corpus_dir(body, statutory_notice_clauses=None):
    d = tempfile.mkdtemp(prefix='validate_drafting_lint_test_')
    os.makedirs(os.path.join(d, 'data'))
    os.makedirs(os.path.join(d, 'schema', 'fields'))
    os.makedirs(os.path.join(d, 'lint'))
    os.makedirs(os.path.join(d, 'config'))
    with open(os.path.join(d, 'data', 'documents.json'), 'w') as f:
        json.dump([BASE_DOC], f)
    clause = {
        "id": "test_drafting_clause",
        "title": "Test Drafting Clause",
        "kind": "drafting",
        "body": body,
        "state": "CA",
    }
    with open(os.path.join(d, 'data', 'clauses.json'), 'w') as f:
        json.dump({"clauses": [clause]}, f)
    shutil.copy(REAL_SCHEMA, os.path.join(d, 'schema', 'field.schema.json'))
    shutil.copy(REAL_PHRASES, os.path.join(d, 'lint', 'advisory_phrases.json'))
    shutil.copy(REAL_CONTRADICTION_PAIRS, os.path.join(d, 'lint', 'contradiction_pairs.json'))
    if statutory_notice_clauses is None:
        shutil.copy(REAL_STATUTORY_NOTICE_CLAUSES, os.path.join(d, 'lint', 'statutory_notice_clauses.json'))
    else:
        with open(os.path.join(d, 'lint', 'statutory_notice_clauses.json'), 'w') as f:
            json.dump(statutory_notice_clauses, f)
    with open(os.path.join(d, 'config', 'staleness.json'), 'w') as f:
        json.dump(TEST_STALENESS_CONFIG, f)
    with open(os.path.join(d, 'schema', 'fields', 'test.json'), 'w') as f:
        json.dump([], f)
    return d


def run_validate(dirpath):
    return subprocess.run(
        [sys.executable, VALIDATE_CORPUS],
        cwd=dirpath, capture_output=True, text=True,
    )


class DraftingClauseLintTests(unittest.TestCase):
    def setUp(self):
        self._dirs = []

    def tearDown(self):
        for d in self._dirs:
            shutil.rmtree(d, ignore_errors=True)

    def run_with(self, body, statutory_notice_clauses=None):
        d = build_corpus_dir(body, statutory_notice_clauses)
        self._dirs.append(d)
        return run_validate(d)

    def test_clean_drafting_body_passes(self):
        r = self.run_with('This handbook describes company policy. It is not a contract.')
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('validation passed', r.stdout)

    def test_advisory_phrase_in_drafting_body_caught(self):
        r = self.run_with('You should keep a copy of this agreement for your records.')
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('drafting clause body', r.stderr)
        self.assertIn('banned phrase', r.stderr)

    def test_statutory_notice_allowlisted_clause_not_flagged(self):
        r = self.run_with(
            'NOTICE TO EMPLOYEES: You must be given time off to vote.',
            statutory_notice_clauses={"test_drafting_clause": "Elections Code posting text, quoted for accuracy."},
        )
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('validation passed', r.stdout)

    def test_internal_contradiction_caught(self):
        r = self.run_with('This license is exclusive. Separately, this license is non-exclusive.')
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('internal contradiction', r.stderr)

    def test_checkbox_alternative_options_not_a_contradiction(self):
        r = self.run_with(
            '___ This license is exclusive: Licensor will not itself practice the patent.\n\n'
            '___ This license is non-exclusive: Licensor may itself continue to practice the patent.'
        )
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('validation passed', r.stdout)

    def test_jurisdiction_mismatch_caught(self):
        r = self.run_with('This document is governed by the laws of the State of Texas.')
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('jurisdiction disclosure mismatch', r.stderr)

    def test_matching_jurisdiction_passes(self):
        r = self.run_with('This document is governed by the laws of the State of California.')
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('validation passed', r.stdout)


if __name__ == '__main__':
    unittest.main()
