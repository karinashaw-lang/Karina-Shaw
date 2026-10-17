#!/usr/bin/env python3
"""Tests for validate_corpus.py's Phase 4.3 staleness checks: the
per-category fatal/warn thresholds loaded from config/staleness.json
(replacing the old single global 24-month/18-month window), the
strictest-threshold-wins rule for a clause shared across categories, and
the annual California-statute recheck rule (effectiveCycleChecked).

Like test_showif.py, these build a minimal, otherwise-fully-valid corpus
in a throwaway directory and run the real validate_corpus.py against it
as a subprocess, so what's being tested is the actual script CI runs.
The test corpus carries its own small config/staleness.json rather than
a copy of the real one, since the real file's specific month values are
data this project can tune later without these tests caring what the
numbers are -- only that validate_corpus.py applies them correctly.

Run directly: python3 tests/validate_corpus/test_staleness.py
"""
import calendar
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

TEST_STALENESS_CONFIG = {
    "description": "test fixture, not the real project config",
    "defaultFatalMonths": 24,
    "defaultWarnMonths": 18,
    "categories": {
        "Hiring": {"fatalMonths": 12, "warnMonths": 9},
        "Estate Planning": {"fatalMonths": 24, "warnMonths": 18},
    },
}


def months_ago(n):
    """An ISO date `n` whole months before today, same day-of-month (or
    the closest valid day), so validate_corpus.py's months_old() counts
    exactly `n` months -- it only decrements when today's day-of-month is
    *less than* checkedDate's, which this construction avoids."""
    today = date.today()
    total = today.year * 12 + (today.month - 1) - n
    year, month = divmod(total, 12)
    month += 1
    day = min(today.day, calendar.monthrange(year, month)[1])
    return date(year, month, day).isoformat()


def make_clause(clause_id, checked_date, url='https://example.com/opinion', extra=None):
    c = {
        "id": clause_id,
        "title": f"Clause {clause_id}",
        "kind": "authority",
        "status": "verified",
        "checkedDate": checked_date,
        "body": "Test body.",
        "gap": "Test gap.",
        "citations": [
            {"case": "Test v. Case", "cite": "1 Test 1", "url": url, "quote": "test quote"},
        ],
    }
    if extra:
        c.update(extra)
    return c


def make_doc(doc_id, categories, clause_ids):
    return {
        "id": doc_id,
        "title": f"Doc {doc_id}",
        "description": "A test document.",
        "categories": categories,
        "clauseOrder": clause_ids,
        "fields": [],
    }


def build_corpus_dir(clauses, docs, staleness_config=None):
    d = tempfile.mkdtemp(prefix='validate_staleness_test_')
    os.makedirs(os.path.join(d, 'data'))
    os.makedirs(os.path.join(d, 'schema'))
    os.makedirs(os.path.join(d, 'lint'))
    os.makedirs(os.path.join(d, 'config'))
    with open(os.path.join(d, 'data', 'documents.json'), 'w') as f:
        json.dump(docs, f)
    with open(os.path.join(d, 'data', 'clauses.json'), 'w') as f:
        json.dump({"clauses": clauses}, f)
    shutil.copy(REAL_SCHEMA, os.path.join(d, 'schema', 'field.schema.json'))
    shutil.copy(REAL_PHRASES, os.path.join(d, 'lint', 'advisory_phrases.json'))
    with open(os.path.join(d, 'config', 'staleness.json'), 'w') as f:
        json.dump(staleness_config or TEST_STALENESS_CONFIG, f)
    return d


def run_validate(dirpath):
    return subprocess.run(
        [sys.executable, VALIDATE_CORPUS],
        cwd=dirpath, capture_output=True, text=True,
    )


class StalenessTests(unittest.TestCase):
    def setUp(self):
        self._dirs = []

    def tearDown(self):
        for d in self._dirs:
            shutil.rmtree(d, ignore_errors=True)

    def run_corpus(self, clauses, docs, staleness_config=None):
        d = build_corpus_dir(clauses, docs, staleness_config)
        self._dirs.append(d)
        return run_validate(d)

    def test_fresh_clause_under_tight_category_passes(self):
        clause = make_clause('c1', months_ago(8))  # below Hiring's warn(9)
        doc = make_doc('d1', ['Hiring'], ['c1'])
        r = self.run_corpus([clause], [doc])
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('validation passed', r.stdout)

    def test_warn_window_reported_not_fatal(self):
        clause = make_clause('c1', months_ago(10))  # Hiring: warn(9) <= 10 < fatal(12)
        doc = make_doc('d1', ['Hiring'], ['c1'])
        r = self.run_corpus([clause], [doc])
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('warn window', r.stdout)
        self.assertIn('c1', r.stdout)

    def test_tight_category_fails_before_old_global_window(self):
        clause = make_clause('c1', months_ago(13))  # Hiring fatal(12) <= 13 < old global 24
        doc = make_doc('d1', ['Hiring'], ['c1'])
        r = self.run_corpus([clause], [doc])
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn("fatal staleness threshold", r.stderr)
        self.assertIn('c1', r.stderr)
        self.assertIn('newly flag 1 clause(s) fatal', r.stdout)

    def test_category_not_in_config_uses_default(self):
        # 'Business Formation' has no entry in TEST_STALENESS_CONFIG, so it
        # must fall back to defaultFatalMonths/defaultWarnMonths (24/18),
        # not silently treat an unconfigured category as 0 or unlimited.
        clause = make_clause('c1', months_ago(13))  # below default fatal(24) and warn(18)
        doc = make_doc('d1', ['Business Formation'], ['c1'])
        r = self.run_corpus([clause], [doc])
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('validation passed', r.stdout)

    def test_shared_clause_uses_strictest_threshold(self):
        # c1 is used by a Hiring doc (fatal=12) and an Estate Planning doc
        # (fatal=24). At 13 months old it must fail -- the strict Hiring
        # threshold applies even though Estate Planning's own window
        # wouldn't have flagged it yet.
        clause = make_clause('c1', months_ago(13))
        doc_hiring = make_doc('d1', ['Hiring'], ['c1'])
        doc_estate = make_doc('d2', ['Estate Planning'], ['c1'])
        r = self.run_corpus([clause], [doc_hiring, doc_estate])
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn("fatal staleness threshold", r.stderr)
        self.assertIn('c1', r.stderr)

    def test_ca_statute_missing_effective_cycle_fails(self):
        clause = make_clause(
            'c1', months_ago(1),
            url='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV',
        )
        doc = make_doc('d1', ['Estate Planning'], ['c1'])
        r = self.run_corpus([clause], [doc])
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('with no effectiveCycleChecked', r.stderr)
        self.assertIn('c1', r.stderr)

    def test_ca_statute_outdated_effective_cycle_fails(self):
        clause = make_clause(
            'c1', months_ago(1),
            url='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV',
            extra={'effectiveCycleChecked': date.today().year - 1},
        )
        doc = make_doc('d1', ['Estate Planning'], ['c1'])
        r = self.run_corpus([clause], [doc])
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('not yet reconfirmed for the', r.stderr)
        self.assertIn('c1', r.stderr)

    def test_ca_statute_current_effective_cycle_passes(self):
        clause = make_clause(
            'c1', months_ago(1),
            url='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV',
            extra={'effectiveCycleChecked': date.today().year},
        )
        doc = make_doc('d1', ['Estate Planning'], ['c1'])
        r = self.run_corpus([clause], [doc])
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('validation passed', r.stdout)

    def test_non_ca_statute_clause_needs_no_effective_cycle(self):
        clause = make_clause('c1', months_ago(1), url='https://www.courtlistener.com/opinion/123/test/')
        doc = make_doc('d1', ['Estate Planning'], ['c1'])
        r = self.run_corpus([clause], [doc])
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('validation passed', r.stdout)

    def test_effective_cycle_out_of_order_key_caught(self):
        # effectiveCycleChecked must be the LAST key when present -- a
        # clause with it spliced in earlier is neither AUTH nor
        # AUTH_WITH_CYCLE's key order.
        clause = {
            "id": "c1",
            "title": "Clause c1",
            "kind": "authority",
            "status": "verified",
            "checkedDate": months_ago(1),
            "effectiveCycleChecked": date.today().year,
            "body": "Test body.",
            "gap": "Test gap.",
            "citations": [
                {"case": "Test v. Case", "cite": "1 Test 1",
                 "url": "https://leginfo.legislature.ca.gov/faces/x", "quote": "test quote"},
            ],
        }
        doc = make_doc('d1', ['Estate Planning'], ['c1'])
        r = self.run_corpus([clause], [doc])
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('non-canonical key order', r.stderr)
        self.assertIn('c1', r.stderr)


if __name__ == '__main__':
    unittest.main()
