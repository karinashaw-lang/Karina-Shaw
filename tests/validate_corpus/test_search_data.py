#!/usr/bin/env python3
"""Tests for validate_corpus.py's Phase 5.1/5.2 checks on search/
data: every document needs a non-empty, non-blank search/lay_terms.json
entry kept in sync with the corpus (no missing/extra ids); every
declared category needs a search/intake_flow.json entry with 2-4
narrowing questions, each with 2-4 options carrying a real id/label and
a string keywords field; and the advisory-phrase lint (Phase 2.2b)
extends to both files' user-facing copy -- a lay phrasing or an intake
prompt/label is just as much prose a reader sees as whyWeAsk/helpText.

Same approach as test_staleness.py/test_advisory_lint.py — a minimal,
otherwise-valid synthetic corpus in a throwaway directory, running the
real validate_corpus.py against it as a subprocess.

Run directly: python3 tests/validate_corpus/test_search_data.py
"""
import json
import os
import shutil
import subprocess
import sys
import tempfile
import unittest
from datetime import date

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
VALIDATE_CORPUS = os.path.join(REPO_ROOT, 'tools', 'validate_corpus.py')
REAL_SCHEMA = os.path.join(REPO_ROOT, 'schema', 'field.schema.json')
REAL_PHRASES = os.path.join(REPO_ROOT, 'lint', 'advisory_phrases.json')
TEST_STALENESS_CONFIG = {"defaultFatalMonths": 24, "defaultWarnMonths": 18, "categories": {}}

BASE_CLAUSE = {
    "id": "test_clause",
    "title": "Test Clause",
    "kind": "authority",
    "status": "verified",
    "checkedDate": date.today().isoformat(),
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
    "fields": [],
}

VALID_LAY_TERMS = {"test_doc": ["need a job offer letter", "hiring paperwork template"]}

# All 8 real categories need an entry whenever intake_flow.json is
# present at all (validate_corpus.py checks against its own CATEGORIES
# set, not just the categories the synthetic doc happens to use).
ALL_CATEGORIES = [
    'Business Formation', 'Confidentiality & IP', 'During employment',
    'Ending employment', 'Estate Planning', 'Family Law', 'Hiring',
    'Real Estate',
]

VALID_QUESTION = {
    "id": "what",
    "prompt": "What's this about?",
    "options": [
        {"id": "a", "label": "Option A", "keywords": "a b c"},
        {"id": "b", "label": "Option B", "keywords": "d e f"},
    ],
}


def valid_intake_flow():
    return {cat: [dict(VALID_QUESTION), {**VALID_QUESTION, "id": "second"}] for cat in ALL_CATEGORIES}


def build_corpus_dir(lay_terms=None, intake_flow=None):
    d = tempfile.mkdtemp(prefix='search_data_test_')
    os.makedirs(os.path.join(d, 'data'))
    os.makedirs(os.path.join(d, 'schema'))
    os.makedirs(os.path.join(d, 'lint'))
    os.makedirs(os.path.join(d, 'config'))
    os.makedirs(os.path.join(d, 'search'))
    with open(os.path.join(d, 'data', 'documents.json'), 'w') as f:
        json.dump([BASE_DOC], f)
    with open(os.path.join(d, 'data', 'clauses.json'), 'w') as f:
        json.dump({"clauses": [BASE_CLAUSE]}, f)
    shutil.copy(REAL_SCHEMA, os.path.join(d, 'schema', 'field.schema.json'))
    shutil.copy(REAL_PHRASES, os.path.join(d, 'lint', 'advisory_phrases.json'))
    with open(os.path.join(d, 'config', 'staleness.json'), 'w') as f:
        json.dump(TEST_STALENESS_CONFIG, f)
    if lay_terms is not None:
        with open(os.path.join(d, 'search', 'lay_terms.json'), 'w') as f:
            json.dump(lay_terms, f)
    if intake_flow is not None:
        with open(os.path.join(d, 'search', 'intake_flow.json'), 'w') as f:
            json.dump(intake_flow, f)
    return d


def run_validate(dirpath):
    return subprocess.run(
        [sys.executable, VALIDATE_CORPUS],
        cwd=dirpath, capture_output=True, text=True,
    )


class SearchDataTests(unittest.TestCase):
    def setUp(self):
        self._dirs = []

    def tearDown(self):
        for d in self._dirs:
            shutil.rmtree(d, ignore_errors=True)

    def run_with(self, lay_terms=None, intake_flow=None):
        d = build_corpus_dir(lay_terms, intake_flow)
        self._dirs.append(d)
        return run_validate(d)

    def test_no_search_files_passes(self):
        r = self.run_with()
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('validation passed', r.stdout)

    def test_valid_search_files_pass(self):
        r = self.run_with(lay_terms=VALID_LAY_TERMS, intake_flow=valid_intake_flow())
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('validation passed', r.stdout)

    def test_missing_lay_terms_entry_caught(self):
        r = self.run_with(lay_terms={})
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('no entry in search/lay_terms.json', r.stderr)

    def test_extra_lay_terms_entry_caught(self):
        lay = dict(VALID_LAY_TERMS)
        lay['no_such_doc'] = ['some phrase here']
        r = self.run_with(lay_terms=lay)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('no longer in the corpus', r.stderr)

    def test_empty_phrase_list_caught(self):
        r = self.run_with(lay_terms={"test_doc": []})
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('empty or contain a blank phrase', r.stderr)

    def test_blank_phrase_caught(self):
        r = self.run_with(lay_terms={"test_doc": ["real phrase", "   "]})
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('empty or contain a blank phrase', r.stderr)

    def test_advisory_phrase_in_lay_term_caught(self):
        r = self.run_with(lay_terms={"test_doc": ["you should ask for a raise"]})
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('advisory phrasing', r.stderr)
        self.assertIn('search copy', r.stderr)

    def test_missing_intake_category_caught(self):
        flow = valid_intake_flow()
        del flow['Hiring']
        r = self.run_with(intake_flow=flow)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('no entry in search/intake_flow.json', r.stderr)

    def test_unknown_intake_category_caught(self):
        flow = valid_intake_flow()
        flow['Not A Real Category'] = [dict(VALID_QUESTION), {**VALID_QUESTION, "id": "second"}]
        r = self.run_with(intake_flow=flow)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('unknown categories', r.stderr)

    def test_too_few_questions_caught(self):
        flow = valid_intake_flow()
        flow['Hiring'] = [dict(VALID_QUESTION)]
        r = self.run_with(intake_flow=flow)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('need 2-4', r.stderr)

    def test_too_few_options_caught(self):
        flow = valid_intake_flow()
        flow['Hiring'] = [
            {**VALID_QUESTION, "options": [{"id": "a", "label": "Only one", "keywords": ""}]},
            {**VALID_QUESTION, "id": "second"},
        ]
        r = self.run_with(intake_flow=flow)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('need 2-4', r.stderr)

    def test_missing_option_label_caught(self):
        flow = valid_intake_flow()
        flow['Hiring'] = [
            {**VALID_QUESTION, "options": [{"id": "a", "label": "", "keywords": ""}, {"id": "b", "label": "B", "keywords": ""}]},
            {**VALID_QUESTION, "id": "second"},
        ]
        r = self.run_with(intake_flow=flow)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('missing id or label', r.stderr)

    def test_keywords_not_a_string_caught(self):
        flow = valid_intake_flow()
        flow['Hiring'] = [
            {**VALID_QUESTION, "options": [{"id": "a", "label": "A", "keywords": None}, {"id": "b", "label": "B", "keywords": ""}]},
            {**VALID_QUESTION, "id": "second"},
        ]
        r = self.run_with(intake_flow=flow)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('keywords is not a string', r.stderr)

    def test_advisory_phrase_in_intake_prompt_caught(self):
        flow = valid_intake_flow()
        flow['Hiring'] = [
            {**VALID_QUESTION, "prompt": "You should consider this"},
            {**VALID_QUESTION, "id": "second"},
        ]
        r = self.run_with(intake_flow=flow)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('advisory phrasing', r.stderr)
        self.assertIn('search copy', r.stderr)

    def test_advisory_phrase_in_intake_option_label_caught(self):
        flow = valid_intake_flow()
        flow['Hiring'] = [
            {**VALID_QUESTION, "options": [{"id": "a", "label": "We recommend this one", "keywords": ""}, {"id": "b", "label": "B", "keywords": ""}]},
            {**VALID_QUESTION, "id": "second"},
        ]
        r = self.run_with(intake_flow=flow)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('advisory phrasing', r.stderr)
        self.assertIn('search copy', r.stderr)


if __name__ == '__main__':
    unittest.main()
