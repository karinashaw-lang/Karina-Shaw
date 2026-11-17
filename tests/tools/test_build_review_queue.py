#!/usr/bin/env python3
"""Full-corpus completion spec, WS0: checks tools/build_review_queue.py's
real output against the live corpus -- real assertions on what it
actually computes, not a reimplementation of its logic.
"""
import json
import os
import sys
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'tools'))
import build_review_queue as brq  # noqa: E402


class TestBuildReviewQueue(unittest.TestCase):
    def setUp(self):
        self.rows = brq.build_rows()
        self.clause_rows = [r for r in self.rows if r['type'] == 'clause']
        self.doc_rows = [r for r in self.rows if r['type'] == 'document']

    def test_one_row_per_clause_and_per_document(self):
        with open('data/clauses.json', encoding='utf-8') as f:
            clauses = json.load(f)['clauses']
        with open('data/documents.json', encoding='utf-8') as f:
            docs = json.load(f)
        self.assertEqual(len(self.clause_rows), len(clauses))
        self.assertEqual(len(self.doc_rows), len(docs))

    def test_rows_sorted_by_descending_priority(self):
        scores = [r['priorityScore'] for r in self.rows]
        self.assertEqual(scores, sorted(scores, reverse=True))

    def test_all_seven_wedge_documents_flagged(self):
        wedge_rows = [r for r in self.doc_rows if r['isWedgeCluster']]
        self.assertEqual({r['id'] for r in wedge_rows}, brq.WEDGE_CLUSTER_DOC_IDS)
        self.assertEqual(len(brq.WEDGE_CLUSTER_DOC_IDS), 7)

    def test_wedge_documents_outrank_non_wedge_documents_on_average(self):
        wedge_scores = [r['priorityScore'] for r in self.doc_rows if r['isWedgeCluster']]
        other_scores = [r['priorityScore'] for r in self.doc_rows if not r['isWedgeCluster']]
        self.assertGreater(sum(wedge_scores) / len(wedge_scores), sum(other_scores) / len(other_scores))

    def test_drafting_clauses_have_no_verification_level(self):
        drafting = [r for r in self.clause_rows if r['kind'] != 'authority']
        self.assertTrue(drafting)
        self.assertTrue(all(r['verificationLevel'] is None for r in drafting))

    def test_authority_clause_with_mirror_citation_is_flagged(self):
        mirror_rows = [r for r in self.clause_rows if r['kind'] == 'authority' and r['hasNonPrimaryCitation']]
        self.assertTrue(mirror_rows)
        self.assertTrue(all(r['priorityScore'] > 0 for r in mirror_rows))

    def test_priority_scores_bounded(self):
        self.assertTrue(all(0 <= r['priorityScore'] <= 1 for r in self.rows))

    def test_output_file_matches_fresh_build(self):
        self.assertTrue(os.path.isfile(brq.QUEUE_PATH),
                         'review/queue.jsonl must be committed -- run tools/build_review_queue.py')
        with open(brq.QUEUE_PATH, encoding='utf-8') as f:
            on_disk = f.read()
        rendered = '\n'.join(json.dumps(r, sort_keys=True) for r in self.rows) + '\n'
        self.assertEqual(on_disk, rendered)


if __name__ == '__main__':
    unittest.main()
