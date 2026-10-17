#!/usr/bin/env python3
"""Tests for the Phase 4.1 verifier scripts (verifier/sample.py,
record_result.py, report.py): the sample is drawn once and reused
(resuming a run must not redraw a different set of clauses), only
authority clauses are ever sampled, a clause's packet includes its
sibling authority clauses but never a sibling drafting clause's text
(the rubric has nothing to check there) or any verification/*.md
content, record_result.py enforces its schema and refuses to
double-record a clause, and report.py's finding-rate/severity math is
correct.

Builds a minimal, throwaway corpus and runs the real scripts against it
as subprocesses from that directory (cwd), the same pattern as
tests/validate_corpus/*.

Run directly: python3 tests/verifier/test_verifier.py
"""
import json
import os
import shutil
import subprocess
import sys
import tempfile
import unittest

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SAMPLE_PY = os.path.join(REPO_ROOT, 'verifier', 'sample.py')
RECORD_PY = os.path.join(REPO_ROOT, 'verifier', 'record_result.py')
REPORT_PY = os.path.join(REPO_ROOT, 'verifier', 'report.py')


def authority_clause(cid, title=None):
    return {
        "id": cid, "title": title or cid, "kind": "authority", "status": "verified",
        "checkedDate": "2026-01-01", "body": f"Body of {cid}.", "gap": "Test gap.",
        "citations": [{"case": "Test v. Case", "cite": "1 Test 1",
                       "url": "https://example.com/1", "quote": "test quote"}],
    }


def drafting_clause(cid):
    return {"id": cid, "title": cid, "kind": "drafting", "body": f"Drafting body of {cid}."}


def build_corpus_dir(clauses, documents):
    d = tempfile.mkdtemp(prefix='verifier_test_')
    os.makedirs(os.path.join(d, 'data'))
    os.makedirs(os.path.join(d, 'verifier'))
    with open(os.path.join(d, 'data', 'clauses.json'), 'w') as f:
        json.dump({"clauses": clauses}, f)
    with open(os.path.join(d, 'data', 'documents.json'), 'w') as f:
        json.dump(documents, f)
    return d


def run(script, dirpath, *args):
    return subprocess.run([sys.executable, script, *args], cwd=dirpath, capture_output=True, text=True)


class SampleTests(unittest.TestCase):
    def setUp(self):
        self._dirs = []

    def tearDown(self):
        for d in self._dirs:
            shutil.rmtree(d, ignore_errors=True)

    def make_dir(self, clauses, documents):
        d = build_corpus_dir(clauses, documents)
        self._dirs.append(d)
        return d

    def test_sample_reused_on_second_call(self):
        clauses = [authority_clause(f'c{i}') for i in range(10)]
        doc = {"id": "doc1", "title": "Doc 1", "description": "d", "categories": ["Hiring"],
               "clauseOrder": [c['id'] for c in clauses], "fields": []}
        d = self.make_dir(clauses, [doc])
        r1 = run(SAMPLE_PY, d, '--n', '3', '--status')
        r2 = run(SAMPLE_PY, d, '--n', '3', '--status')
        self.assertEqual(r1.returncode, 0, r1.stdout + r1.stderr)
        # Same clause ids both times -> same "Remaining clause ids" line
        line1 = [l for l in r1.stdout.splitlines() if l.startswith('Remaining clause ids')][0]
        line2 = [l for l in r2.stdout.splitlines() if l.startswith('Remaining clause ids')][0]
        self.assertEqual(line1, line2)

    def test_only_authority_clauses_sampled(self):
        clauses = [authority_clause('auth1'), drafting_clause('draft1')]
        doc = {"id": "doc1", "title": "Doc 1", "description": "d", "categories": ["Hiring"],
               "clauseOrder": ["auth1", "draft1"], "fields": []}
        d = self.make_dir(clauses, [doc])
        r = run(SAMPLE_PY, d, '--n', '10')
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        packets = json.loads(r.stdout)
        sampled_ids = [p['clause']['id'] for p in packets]
        self.assertIn('auth1', sampled_ids)
        self.assertNotIn('draft1', sampled_ids)

    def test_packet_includes_sibling_authority_not_drafting(self):
        clauses = [authority_clause('target'), authority_clause('sibling_auth'), drafting_clause('sibling_draft')]
        doc = {"id": "doc1", "title": "Doc 1", "description": "d", "categories": ["Hiring"],
               "clauseOrder": ["target", "sibling_auth", "sibling_draft"], "fields": []}
        d = self.make_dir(clauses, [doc])
        with open(os.path.join(d, 'verifier', 'sample.json'), 'w') as f:
            json.dump({"drawnAt": "2026-01-01", "seed": 1, "populationSize": 1, "clauseIds": ["target"]}, f)
        r = run(SAMPLE_PY, d, '--n', '1')
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        packets = json.loads(r.stdout)
        sibling_ids = [s['id'] for s in packets[0]['siblingAuthorityClauses']]
        self.assertIn('sibling_auth', sibling_ids)
        self.assertNotIn('sibling_draft', sibling_ids)

    def test_remaining_excludes_already_checked(self):
        clauses = [authority_clause('c1'), authority_clause('c2')]
        doc = {"id": "doc1", "title": "Doc 1", "description": "d", "categories": ["Hiring"],
               "clauseOrder": ["c1", "c2"], "fields": []}
        d = self.make_dir(clauses, [doc])
        with open(os.path.join(d, 'verifier', 'sample.json'), 'w') as f:
            json.dump({"drawnAt": "2026-01-01", "seed": 1, "populationSize": 2, "clauseIds": ["c1", "c2"]}, f)
        with open(os.path.join(d, 'verifier', 'checked.jsonl'), 'w') as f:
            f.write(json.dumps({"clauseId": "c1", "checkedAt": "x", "findingCount": 0}) + '\n')
        r = run(SAMPLE_PY, d, '--remaining')
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        packets = json.loads(r.stdout)
        ids = [p['clause']['id'] for p in packets]
        self.assertEqual(ids, ['c2'])


class RecordResultTests(unittest.TestCase):
    def setUp(self):
        self._dirs = []

    def tearDown(self):
        for d in self._dirs:
            shutil.rmtree(d, ignore_errors=True)

    def make_dir(self):
        d = tempfile.mkdtemp(prefix='verifier_record_test_')
        os.makedirs(os.path.join(d, 'verifier'))
        self._dirs.append(d)
        return d

    def write_and_run(self, d, results):
        path = os.path.join(d, 'results.json')
        with open(path, 'w') as f:
            json.dump(results, f)
        return run(RECORD_PY, d, path)

    def test_clean_result_recorded(self):
        d = self.make_dir()
        r = self.write_and_run(d, [{"clauseId": "c1", "findings": []}])
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        with open(os.path.join(d, 'verifier', 'checked.jsonl')) as f:
            self.assertEqual(len(f.readlines()), 1)

    def test_finding_missing_required_key_rejected(self):
        d = self.make_dir()
        bad_finding = {"severity": "major", "category": "overclaiming", "summary": "x",
                       "evidence": "x", "sourceChecked": "x"}  # missing suggestedFix
        r = self.write_and_run(d, [{"clauseId": "c1", "findings": [bad_finding]}])
        self.assertNotEqual(r.returncode, 0)
        self.assertIn('missing keys', r.stderr)

    def test_invalid_severity_rejected(self):
        d = self.make_dir()
        bad_finding = {"severity": "catastrophic", "category": "overclaiming", "summary": "x",
                       "evidence": "x", "sourceChecked": "x", "suggestedFix": "x"}
        r = self.write_and_run(d, [{"clauseId": "c1", "findings": [bad_finding]}])
        self.assertNotEqual(r.returncode, 0)
        self.assertIn('invalid severity', r.stderr)

    def test_duplicate_clause_rejected(self):
        d = self.make_dir()
        self.write_and_run(d, [{"clauseId": "c1", "findings": []}])
        r2 = self.write_and_run(d, [{"clauseId": "c1", "findings": []}])
        self.assertNotEqual(r2.returncode, 0)
        self.assertIn('already recorded', r2.stderr)


class ReportTests(unittest.TestCase):
    def setUp(self):
        self._dirs = []

    def tearDown(self):
        for d in self._dirs:
            shutil.rmtree(d, ignore_errors=True)

    def make_dir(self):
        d = tempfile.mkdtemp(prefix='verifier_report_test_')
        os.makedirs(os.path.join(d, 'verifier'))
        self._dirs.append(d)
        return d

    def test_report_math_matches_fixture(self):
        d = self.make_dir()
        checked = [
            {"clauseId": "c1", "checkedAt": "x", "findingCount": 0},
            {"clauseId": "c2", "checkedAt": "x", "findingCount": 2},
            {"clauseId": "c3", "checkedAt": "x", "findingCount": 0},
            {"clauseId": "c4", "checkedAt": "x", "findingCount": 0},
        ]
        findings = [
            {"clauseId": "c2", "foundAt": "x", "severity": "blocker", "category": "overclaiming",
             "summary": "s1", "evidence": "e1", "sourceChecked": "u1", "suggestedFix": "f1"},
            {"clauseId": "c2", "foundAt": "x", "severity": "minor", "category": "advisory_language",
             "summary": "s2", "evidence": "e2", "sourceChecked": "u2", "suggestedFix": "f2"},
        ]
        with open(os.path.join(d, 'verifier', 'checked.jsonl'), 'w') as f:
            for c in checked:
                f.write(json.dumps(c) + '\n')
        with open(os.path.join(d, 'verifier', 'findings.jsonl'), 'w') as f:
            for fnd in findings:
                f.write(json.dumps(fnd) + '\n')
        r = run(REPORT_PY, d)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('Clauses checked: 4', r.stdout)
        self.assertIn('Clauses with at least one finding: 1 (25.0%)', r.stdout)
        self.assertIn('Total findings: 2 (0.50 per clause checked)', r.stdout)
        self.assertIn('blocker  1', r.stdout)
        self.assertIn('minor    1', r.stdout)

    def test_report_handles_no_data_gracefully(self):
        d = self.make_dir()
        r = run(REPORT_PY, d)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('No clauses checked yet', r.stdout)


if __name__ == '__main__':
    unittest.main()
