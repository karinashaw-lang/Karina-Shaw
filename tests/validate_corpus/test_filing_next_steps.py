#!/usr/bin/env python3
"""Tests for validate_corpus.py's Phase 6.4 checks on filing/next_steps.json
-- the "what happens after this document" packets. Unlike
search/lay_terms.json (every document needs an entry), coverage here
is deliberately sparse: only a document with a real filing or
follow-on step gets one, so there's no "every document must have an
entry" check, only "every entry that exists is real": a known
document id, every step with at least one fully-filled-in citation and
a real, non-future checkedDate, and -- for a step with a computed
reminder -- a dateFieldId that actually names a real date-type field
declared on that same document (not a typo that the pre-existing
"declares fields nothing substitutes or conditions on" check would
otherwise wrongly flag as dead data, or silently accept as a
reference to nothing). The advisory-phrase lint (Phase 2.2b) extends
here too, the same way it already extends to search/'s copy.

Same approach as test_search_data.py — a minimal, otherwise-valid
synthetic corpus in a throwaway directory, running the real
validate_corpus.py against it as a subprocess.

Run directly: python3 tests/validate_corpus/test_filing_next_steps.py
"""
import copy
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

# No extra fields by default -- a plain document with nothing for a
# next-steps reminder to point at. Tests that exercise a reminder use
# doc_with_date_field() instead, so a bare BASE_DOC never ends up
# declaring a field that's genuinely unused in that test's scenario
# (which the pre-existing "nothing substitutes or conditions on" check
# would then, correctly, flag).
BASE_DOC = {
    "id": "test_doc",
    "title": "Test Document",
    "description": "A test document.",
    "categories": ["Business Formation"],
    "clauseOrder": ["test_clause"],
    "fields": [],
}


def doc_with_date_field(field_id='filedDate', field_type='date'):
    doc = copy.deepcopy(BASE_DOC)
    doc['fields'].append({"id": field_id, "label": "Filed date", "type": field_type, "required": False})
    return doc


VALID_STEP = {
    "id": "step_one",
    "title": "File a follow-up form",
    "body": "A real agency requires a follow-up filing within a set window after this document is signed.",
    "checkedDate": date.today().isoformat(),
    "citations": [
        {"case": "Test Agency Rule 1", "cite": "Test Code § 1", "url": "https://example.com/agency", "quote": "the filing must be made within the window"},
    ],
    "reminder": {"dateFieldId": "filedDate", "offsetDays": 90, "label": "Follow-up filing due"},
}


def valid_next_steps():
    # deepcopy, not dict(...): VALID_STEP's nested citations list and
    # reminder dict are shared objects otherwise, so a test that
    # mutates "its own" copy's nested structure (e.g. deleting a
    # citation field) would corrupt every other test's baseline too.
    return {"test_doc": [copy.deepcopy(VALID_STEP)]}


def build_corpus_dir(next_steps=None, doc=None):
    d = tempfile.mkdtemp(prefix='filing_next_steps_test_')
    os.makedirs(os.path.join(d, 'data'))
    os.makedirs(os.path.join(d, 'schema'))
    os.makedirs(os.path.join(d, 'lint'))
    os.makedirs(os.path.join(d, 'config'))
    os.makedirs(os.path.join(d, 'filing'))
    with open(os.path.join(d, 'data', 'documents.json'), 'w') as f:
        json.dump([doc if doc is not None else BASE_DOC], f)
    with open(os.path.join(d, 'data', 'clauses.json'), 'w') as f:
        json.dump({"clauses": [BASE_CLAUSE]}, f)
    shutil.copy(REAL_SCHEMA, os.path.join(d, 'schema', 'field.schema.json'))
    shutil.copy(REAL_PHRASES, os.path.join(d, 'lint', 'advisory_phrases.json'))
    with open(os.path.join(d, 'config', 'staleness.json'), 'w') as f:
        json.dump(TEST_STALENESS_CONFIG, f)
    if next_steps is not None:
        with open(os.path.join(d, 'filing', 'next_steps.json'), 'w') as f:
            json.dump(next_steps, f)
    return d


def run_validate(dirpath):
    return subprocess.run(
        [sys.executable, VALIDATE_CORPUS],
        cwd=dirpath, capture_output=True, text=True,
    )


class FilingNextStepsTests(unittest.TestCase):
    def setUp(self):
        self._dirs = []

    def tearDown(self):
        for d in self._dirs:
            shutil.rmtree(d, ignore_errors=True)

    def run_with(self, next_steps=None, doc=None):
        d = build_corpus_dir(next_steps, doc)
        self._dirs.append(d)
        return run_validate(d)

    def test_no_filing_file_passes(self):
        r = self.run_with()
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('validation passed', r.stdout)

    def test_sparse_coverage_is_not_an_error(self):
        # No requirement that every document (or any document) has an
        # entry -- an empty object is valid, unlike lay_terms.json.
        r = self.run_with(next_steps={})
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)

    def test_valid_next_steps_pass(self):
        r = self.run_with(next_steps=valid_next_steps(), doc=doc_with_date_field())
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('validation passed', r.stdout)

    def test_unknown_document_id_caught(self):
        steps = valid_next_steps()
        steps['no_such_doc'] = [copy.deepcopy(VALID_STEP)]
        r = self.run_with(next_steps=steps, doc=doc_with_date_field())
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('unknown documents', r.stderr)

    def test_missing_title_caught(self):
        steps = valid_next_steps()
        steps['test_doc'][0]['title'] = ''
        r = self.run_with(next_steps=steps, doc=doc_with_date_field())
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('missing title', r.stderr)

    def test_missing_body_caught(self):
        steps = valid_next_steps()
        steps['test_doc'][0]['body'] = ''
        r = self.run_with(next_steps=steps, doc=doc_with_date_field())
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('missing body', r.stderr)

    def test_duplicate_step_id_caught(self):
        steps = valid_next_steps()
        steps['test_doc'].append(copy.deepcopy(VALID_STEP))
        r = self.run_with(next_steps=steps, doc=doc_with_date_field())
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('duplicate step id', r.stderr)

    def test_no_citations_caught(self):
        steps = valid_next_steps()
        steps['test_doc'][0]['citations'] = []
        r = self.run_with(next_steps=steps, doc=doc_with_date_field())
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('no citations', r.stderr)

    def test_citation_missing_quote_caught(self):
        steps = valid_next_steps()
        del steps['test_doc'][0]['citations'][0]['quote']
        r = self.run_with(next_steps=steps, doc=doc_with_date_field())
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('citation missing quote', r.stderr)

    def test_future_checked_date_caught(self):
        steps = valid_next_steps()
        steps['test_doc'][0]['checkedDate'] = '2099-01-01'
        r = self.run_with(next_steps=steps, doc=doc_with_date_field())
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('future checkedDate', r.stderr)

    def test_malformed_checked_date_caught(self):
        steps = valid_next_steps()
        steps['test_doc'][0]['checkedDate'] = 'not-a-date'
        r = self.run_with(next_steps=steps, doc=doc_with_date_field())
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('malformed checkedDate', r.stderr)

    def test_reminder_unknown_field_caught(self):
        steps = valid_next_steps()
        steps['test_doc'][0]['reminder']['dateFieldId'] = 'noSuchField'
        r = self.run_with(next_steps=steps, doc=doc_with_date_field())
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('is not a field on test_doc', r.stderr)

    def test_reminder_non_date_field_caught(self):
        # Same field id, but declared as type "text" -- the id has to
        # exist AND be the right type.
        steps = valid_next_steps()
        r = self.run_with(next_steps=steps, doc=doc_with_date_field(field_type='text'))
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('is not a date-type field', r.stderr)

    def test_reminder_field_not_flagged_as_unused(self):
        # The reminder's dateFieldId is never substituted into any
        # clause body -- confirms the unused-fields check (which runs
        # earlier, over different data) doesn't wrongly flag it as dead.
        r = self.run_with(next_steps=valid_next_steps(), doc=doc_with_date_field())
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertNotIn('nothing substitutes or conditions on', r.stderr)

    def test_unreferenced_date_field_still_caught_as_unused(self):
        # Sanity check in the other direction: a date field genuinely
        # unused by anything (no clause, no showIf/includeIf, no
        # next-steps reminder) must still be caught -- confirms the
        # reminder exemption isn't accidentally swallowing this check
        # whole.
        doc = doc_with_date_field()
        doc['fields'].append({"id": "trulyUnused", "label": "Unused", "type": "date", "required": False})
        r = self.run_with(next_steps=valid_next_steps(), doc=doc)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('nothing substitutes or conditions on', r.stderr)
        self.assertIn('trulyUnused', r.stderr)

    def test_reminder_bad_offset_caught(self):
        steps = valid_next_steps()
        steps['test_doc'][0]['reminder']['offsetDays'] = -5
        r = self.run_with(next_steps=steps, doc=doc_with_date_field())
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('offsetDays must be a non-negative integer', r.stderr)

    def test_reminder_missing_label_caught(self):
        steps = valid_next_steps()
        steps['test_doc'][0]['reminder']['label'] = ''
        r = self.run_with(next_steps=steps, doc=doc_with_date_field())
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('reminder missing label', r.stderr)

    def test_advisory_phrase_in_body_caught(self):
        steps = valid_next_steps()
        steps['test_doc'][0]['body'] = 'You should file this promptly.'
        r = self.run_with(next_steps=steps, doc=doc_with_date_field())
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('advisory phrasing', r.stderr)
        self.assertIn('filing/next_steps.json', r.stderr)

    def test_advisory_phrase_in_title_caught(self):
        steps = valid_next_steps()
        steps['test_doc'][0]['title'] = 'You must file this form'
        r = self.run_with(next_steps=steps, doc=doc_with_date_field())
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('advisory phrasing', r.stderr)


if __name__ == '__main__':
    unittest.main(verbosity=2)
