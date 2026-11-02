#!/usr/bin/env python3
"""Tests for tools/tiering.py: Tier B is reached only when all three
real gates (complete field schema, every authority clause verified and
fresh, a golden fixture exists) hold; missing any one keeps a document
at Tier C; Tier A additionally needs every authority clause to carry a
clean adversarial-verifier result (verifier/checked.jsonl + no open
blocker/major finding in verifier/findings.jsonl + verifier/triage.jsonl)
and a passed per-document accessibility check (accessibility.json) --
an absent record for either is "not met," not "assumed met," which is
why a document with no such files in its corpus directory (every test
below except the two Tier-A-specific ones) can reach Tier B but never
Tier A; and --check correctly detects a tiers.json that no longer
matches a fresh computation.

Builds a minimal, otherwise-valid corpus in a throwaway directory and
runs the real tiering.py against it as a subprocess — what's tested is
the actual script CI would run, not a reimplementation of its logic.

Run directly: python3 tests/tiering/test_tiering.py
"""
import json
import os
import shutil
import subprocess
import sys
import tempfile
import unittest
from datetime import date, timedelta

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
TIERING = os.path.join(REPO_ROOT, 'tools', 'tiering.py')

RECENT_DATE = (date.today() - timedelta(days=30)).isoformat()
STALE_DATE = (date.today() - timedelta(days=900)).isoformat()  # well past 24 months


def authority_clause(cid, status='verified', checked_date=RECENT_DATE):
    return {
        "id": cid, "title": cid, "kind": "authority", "status": status,
        "checkedDate": checked_date, "body": f"Body of {cid}.", "gap": "Test gap.",
        "citations": [{"case": "Test v. Case", "cite": "1 Test 1",
                       "url": "https://example.com/1", "quote": "test quote"}],
    }


def make_field(fid, why_we_ask=None, shared_field_id=None):
    f = {"id": fid, "label": fid, "type": "text", "required": True}
    if shared_field_id:
        f['sharedFieldId'] = shared_field_id
    if why_we_ask:
        f['whyWeAsk'] = why_we_ask
    return f


TEST_STALENESS_CONFIG = {"defaultFatalMonths": 24, "defaultWarnMonths": 18, "categories": {}}


def build_corpus_dir(documents, clauses, shared_library=None, fixtures_for=(), staleness_config=None):
    d = tempfile.mkdtemp(prefix='tiering_test_')
    os.makedirs(os.path.join(d, 'data'))
    os.makedirs(os.path.join(d, 'schema', 'fields'))
    os.makedirs(os.path.join(d, 'tests', 'golden', 'fixtures'))
    os.makedirs(os.path.join(d, 'config'))
    with open(os.path.join(d, 'data', 'documents.json'), 'w') as f:
        json.dump(documents, f)
    with open(os.path.join(d, 'data', 'clauses.json'), 'w') as f:
        json.dump({"clauses": clauses}, f)
    with open(os.path.join(d, 'schema', 'fields', 'test.json'), 'w') as f:
        json.dump(shared_library or [], f)
    with open(os.path.join(d, 'config', 'staleness.json'), 'w') as f:
        json.dump(staleness_config or TEST_STALENESS_CONFIG, f)
    for doc_id in fixtures_for:
        with open(os.path.join(d, 'tests', 'golden', 'fixtures', f'{doc_id}.json'), 'w') as f:
            json.dump({"docId": doc_id}, f)
    return d


def write_jsonl(path, rows):
    with open(path, 'w') as f:
        for row in rows:
            f.write(json.dumps(row) + '\n')


def write_verifier_state(d, checked_clause_ids=(), findings=(), triage=()):
    os.makedirs(os.path.join(d, 'verifier'), exist_ok=True)
    write_jsonl(os.path.join(d, 'verifier', 'checked.jsonl'),
                [{"clauseId": cid} for cid in checked_clause_ids])
    write_jsonl(os.path.join(d, 'verifier', 'findings.jsonl'), findings)
    write_jsonl(os.path.join(d, 'verifier', 'triage.jsonl'), triage)


def write_accessibility(d, results):
    with open(os.path.join(d, 'accessibility.json'), 'w') as f:
        json.dump({"generatedAt": "2026-11-02", "documents": results}, f)


def run_tiering(dirpath, *args):
    return subprocess.run(
        [sys.executable, TIERING, *args],
        cwd=dirpath, capture_output=True, text=True,
    )


class TieringTests(unittest.TestCase):
    def setUp(self):
        self._dirs = []

    def tearDown(self):
        for d in self._dirs:
            shutil.rmtree(d, ignore_errors=True)

    def make_dir(self, documents, clauses, shared_library=None, fixtures_for=(), staleness_config=None):
        d = build_corpus_dir(documents, clauses, shared_library, fixtures_for, staleness_config)
        self._dirs.append(d)
        return d

    def load_tiers(self, d):
        with open(os.path.join(d, 'tiers.json')) as f:
            return json.load(f)

    def test_all_gates_met_reaches_tier_b(self):
        doc = {
            "id": "doc1", "title": "Doc 1", "description": "d", "categories": ["Hiring"],
            "clauseOrder": ["c1"],
            "fields": [make_field("fieldA", shared_field_id="fieldA")],
        }
        library = [{"id": "fieldA", "label": "Field A", "type": "text", "whyWeAsk": "Why we ask."}]
        d = self.make_dir([doc], [authority_clause("c1")], shared_library=library, fixtures_for=["doc1"])
        r = run_tiering(d)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        tiers = self.load_tiers(d)
        self.assertEqual(tiers['documents']['doc1']['tier'], 'B')
        self.assertEqual(tiers['documents']['doc1']['blockingB'], [])

    def test_missing_golden_fixture_keeps_tier_c(self):
        doc = {
            "id": "doc1", "title": "Doc 1", "description": "d", "categories": ["Hiring"],
            "clauseOrder": ["c1"],
            "fields": [make_field("fieldA", shared_field_id="fieldA")],
        }
        library = [{"id": "fieldA", "label": "Field A", "type": "text", "whyWeAsk": "Why we ask."}]
        d = self.make_dir([doc], [authority_clause("c1")], shared_library=library, fixtures_for=[])
        run_tiering(d)
        tiers = self.load_tiers(d)
        self.assertEqual(tiers['documents']['doc1']['tier'], 'C')
        self.assertIn('no golden fixture', tiers['documents']['doc1']['blockingB'][0])

    def test_field_without_why_we_ask_keeps_tier_c(self):
        doc = {
            "id": "doc1", "title": "Doc 1", "description": "d", "categories": ["Hiring"],
            "clauseOrder": ["c1"],
            "fields": [make_field("fieldA")],  # no whyWeAsk, no sharedFieldId
        }
        d = self.make_dir([doc], [authority_clause("c1")], fixtures_for=["doc1"])
        run_tiering(d)
        tiers = self.load_tiers(d)
        self.assertEqual(tiers['documents']['doc1']['tier'], 'C')
        self.assertTrue(any('incomplete field schema' in r for r in tiers['documents']['doc1']['blockingB']))

    def test_stale_clause_keeps_tier_c(self):
        doc = {
            "id": "doc1", "title": "Doc 1", "description": "d", "categories": ["Hiring"],
            "clauseOrder": ["c1"], "fields": [],
        }
        d = self.make_dir([doc], [authority_clause("c1", checked_date=STALE_DATE)], fixtures_for=["doc1"])
        run_tiering(d)
        tiers = self.load_tiers(d)
        self.assertEqual(tiers['documents']['doc1']['tier'], 'C')
        self.assertTrue(any('staleness' in r for r in tiers['documents']['doc1']['blockingB']))

    def test_per_category_threshold_used_not_flat_default(self):
        # Phase 4.3: Tier B's staleness gate must use the clause's own
        # category's fatal threshold from config/staleness.json, not a
        # flat default -- a clause checked 10 months ago is fine against
        # the 24-month default but must fail Tier B once its document's
        # category ("Hiring" here) has its own, tighter 6-month fatal
        # threshold.
        doc = {
            "id": "doc1", "title": "Doc 1", "description": "d", "categories": ["Hiring"],
            "clauseOrder": ["c1"], "fields": [],
        }
        ten_months_ago = (date.today() - timedelta(days=305)).isoformat()
        tight_config = {"defaultFatalMonths": 24, "defaultWarnMonths": 18,
                         "categories": {"Hiring": {"fatalMonths": 6, "warnMonths": 4}}}
        d = self.make_dir([doc], [authority_clause("c1", checked_date=ten_months_ago)],
                           fixtures_for=["doc1"], staleness_config=tight_config)
        run_tiering(d)
        tiers = self.load_tiers(d)
        self.assertEqual(tiers['documents']['doc1']['tier'], 'C')
        self.assertTrue(any('staleness' in r for r in tiers['documents']['doc1']['blockingB']))

    def test_unverified_clause_keeps_tier_c(self):
        doc = {
            "id": "doc1", "title": "Doc 1", "description": "d", "categories": ["Hiring"],
            "clauseOrder": ["c1"], "fields": [],
        }
        d = self.make_dir([doc], [authority_clause("c1", status="unverified")], fixtures_for=["doc1"])
        run_tiering(d)
        tiers = self.load_tiers(d)
        self.assertEqual(tiers['documents']['doc1']['tier'], 'C')

    def test_drafting_clause_needs_no_verification(self):
        # A drafting clause has no citation to verify at all — its
        # presence shouldn't block Tier B the way an unverified
        # authority clause does.
        doc = {
            "id": "doc1", "title": "Doc 1", "description": "d", "categories": ["Hiring"],
            "clauseOrder": ["c1"], "fields": [],
        }
        drafting = {"id": "c1", "title": "c1", "kind": "drafting", "body": "No citation needed."}
        d = self.make_dir([doc], [drafting], fixtures_for=["doc1"])
        run_tiering(d)
        tiers = self.load_tiers(d)
        self.assertEqual(tiers['documents']['doc1']['tier'], 'B')

    def test_tier_a_blocked_with_no_verifier_or_accessibility_records(self):
        # A document meeting every Tier B gate still can't reach Tier A
        # when neither verifier/ nor accessibility.json exists in the
        # corpus directory at all -- an absent record is "not met," not
        # "assumed met," for both signals independently.
        doc = {
            "id": "doc1", "title": "Doc 1", "description": "d", "categories": ["Hiring"],
            "clauseOrder": ["c1"], "fields": [],
        }
        d = self.make_dir([doc], [authority_clause("c1")], fixtures_for=["doc1"])
        run_tiering(d)
        tiers = self.load_tiers(d)
        self.assertEqual(tiers['documents']['doc1']['tier'], 'B')
        self.assertEqual(len(tiers['documents']['doc1']['blockingA']), 2)

    def test_tier_a_reached_when_both_real_signals_are_clean(self):
        doc = {
            "id": "doc1", "title": "Doc 1", "description": "d", "categories": ["Hiring"],
            "clauseOrder": ["c1"], "fields": [],
        }
        d = self.make_dir([doc], [authority_clause("c1")], fixtures_for=["doc1"])
        write_verifier_state(d, checked_clause_ids=["c1"])
        write_accessibility(d, {"doc1": {"passed": True, "violations": []}})
        run_tiering(d)
        tiers = self.load_tiers(d)
        self.assertEqual(tiers['documents']['doc1']['tier'], 'A')
        self.assertEqual(tiers['documents']['doc1']['blockingA'], [])

    def test_tier_a_blocked_by_unchecked_authority_clause(self):
        # c1 is verified/fresh enough for Tier B, but the adversarial
        # checkpoint has never actually reached it -- "verified" is a
        # drafting-time self-assessment, not the same thing.
        doc = {
            "id": "doc1", "title": "Doc 1", "description": "d", "categories": ["Hiring"],
            "clauseOrder": ["c1"], "fields": [],
        }
        d = self.make_dir([doc], [authority_clause("c1")], fixtures_for=["doc1"])
        write_verifier_state(d, checked_clause_ids=[])  # never checked
        write_accessibility(d, {"doc1": {"passed": True, "violations": []}})
        run_tiering(d)
        tiers = self.load_tiers(d)
        self.assertEqual(tiers['documents']['doc1']['tier'], 'B')
        self.assertTrue(any('adversarial-verifier' in r for r in tiers['documents']['doc1']['blockingA']))

    def test_tier_a_blocked_by_open_unreviewed_finding(self):
        doc = {
            "id": "doc1", "title": "Doc 1", "description": "d", "categories": ["Hiring"],
            "clauseOrder": ["c1"], "fields": [],
        }
        d = self.make_dir([doc], [authority_clause("c1")], fixtures_for=["doc1"])
        write_verifier_state(d, checked_clause_ids=["c1"], findings=[
            {"clauseId": "c1", "severity": "major", "category": "overclaiming",
             "summary": "s", "evidence": "e", "sourceChecked": "u", "suggestedFix": "f"},
        ])  # no triage.jsonl entry at all -- nobody has reviewed it yet
        write_accessibility(d, {"doc1": {"passed": True, "violations": []}})
        run_tiering(d)
        tiers = self.load_tiers(d)
        self.assertEqual(tiers['documents']['doc1']['tier'], 'B')

    def test_tier_a_blocked_by_accepted_finding(self):
        # "accepted" means the defect stands, just not corrected -- it
        # blocks Tier A exactly like an untriaged finding does.
        doc = {
            "id": "doc1", "title": "Doc 1", "description": "d", "categories": ["Hiring"],
            "clauseOrder": ["c1"], "fields": [],
        }
        d = self.make_dir([doc], [authority_clause("c1")], fixtures_for=["doc1"])
        write_verifier_state(
            d, checked_clause_ids=["c1"],
            findings=[{"clauseId": "c1", "severity": "blocker", "category": "superseded_law",
                       "summary": "s", "evidence": "e", "sourceChecked": "u", "suggestedFix": "f"}],
            triage=[{"findingId": "c1#0", "clauseId": "c1", "status": "accepted"}],
        )
        write_accessibility(d, {"doc1": {"passed": True, "violations": []}})
        run_tiering(d)
        tiers = self.load_tiers(d)
        self.assertEqual(tiers['documents']['doc1']['tier'], 'B')

    def test_tier_a_not_blocked_by_rejected_finding(self):
        # A false positive, once triaged "rejected," doesn't block
        # Tier A -- combined with a clean accessibility result this
        # document reaches Tier A.
        doc = {
            "id": "doc1", "title": "Doc 1", "description": "d", "categories": ["Hiring"],
            "clauseOrder": ["c1"], "fields": [],
        }
        d = self.make_dir([doc], [authority_clause("c1")], fixtures_for=["doc1"])
        write_verifier_state(
            d, checked_clause_ids=["c1"],
            findings=[{"clauseId": "c1", "severity": "major", "category": "overclaiming",
                       "summary": "s", "evidence": "e", "sourceChecked": "u", "suggestedFix": "f"}],
            triage=[{"findingId": "c1#0", "clauseId": "c1", "status": "rejected", "reason": "false positive"}],
        )
        write_accessibility(d, {"doc1": {"passed": True, "violations": []}})
        run_tiering(d)
        tiers = self.load_tiers(d)
        self.assertEqual(tiers['documents']['doc1']['tier'], 'A')

    def test_tier_a_blocked_by_failed_accessibility_check(self):
        doc = {
            "id": "doc1", "title": "Doc 1", "description": "d", "categories": ["Hiring"],
            "clauseOrder": ["c1"], "fields": [],
        }
        d = self.make_dir([doc], [authority_clause("c1")], fixtures_for=["doc1"])
        write_verifier_state(d, checked_clause_ids=["c1"])
        write_accessibility(d, {"doc1": {"passed": False, "violations": [
            {"id": "color-contrast", "impact": "serious", "help": "h", "nodeCount": 1, "theme": "light"},
        ]}})
        run_tiering(d)
        tiers = self.load_tiers(d)
        self.assertEqual(tiers['documents']['doc1']['tier'], 'B')
        self.assertTrue(any('accessibility' in r for r in tiers['documents']['doc1']['blockingA']))

    def test_tier_a_blocked_by_missing_accessibility_entry(self):
        # accessibility.json exists but has no entry for this document
        # -- same "absent is not met" rule as an unchecked clause.
        doc = {
            "id": "doc1", "title": "Doc 1", "description": "d", "categories": ["Hiring"],
            "clauseOrder": ["c1"], "fields": [],
        }
        d = self.make_dir([doc], [authority_clause("c1")], fixtures_for=["doc1"])
        write_verifier_state(d, checked_clause_ids=["c1"])
        write_accessibility(d, {})  # no entry for doc1
        run_tiering(d)
        tiers = self.load_tiers(d)
        self.assertEqual(tiers['documents']['doc1']['tier'], 'B')

    def test_check_passes_right_after_generation(self):
        doc = {
            "id": "doc1", "title": "Doc 1", "description": "d", "categories": ["Hiring"],
            "clauseOrder": ["c1"], "fields": [],
        }
        d = self.make_dir([doc], [authority_clause("c1")], fixtures_for=["doc1"])
        run_tiering(d)
        r = run_tiering(d, '--check')
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)

    def test_check_fails_without_tiers_json(self):
        doc = {
            "id": "doc1", "title": "Doc 1", "description": "d", "categories": ["Hiring"],
            "clauseOrder": ["c1"], "fields": [],
        }
        d = self.make_dir([doc], [authority_clause("c1")], fixtures_for=["doc1"])
        r = run_tiering(d, '--check')
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)

    def test_check_fails_on_stale_tiers_json(self):
        doc = {
            "id": "doc1", "title": "Doc 1", "description": "d", "categories": ["Hiring"],
            "clauseOrder": ["c1"], "fields": [],
        }
        d = self.make_dir([doc], [authority_clause("c1")], fixtures_for=["doc1"])
        run_tiering(d)
        # Simulate the corpus changing after tiers.json was generated:
        # remove the golden fixture that made doc1 Tier B.
        os.remove(os.path.join(d, 'tests', 'golden', 'fixtures', 'doc1.json'))
        r = run_tiering(d, '--check')
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('stale', r.stderr)


if __name__ == '__main__':
    unittest.main()
