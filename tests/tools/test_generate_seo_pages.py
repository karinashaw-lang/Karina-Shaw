#!/usr/bin/env python3
"""Phase 8.3: checks tools/generate_seo_pages.py's real output against
the live corpus, and tools/validate_seo_pages.py's pure helper
functions against synthetic HTML -- not a reimplementation of either,
just real assertions on what they actually produce/compute.
"""
import os
import sys
import tempfile
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'tools'))
import generate_seo_pages as gen
import validate_seo_pages as val


class TestGenerateSeoPages(unittest.TestCase):
    def test_deterministic_output(self):
        with tempfile.TemporaryDirectory() as a, tempfile.TemporaryDirectory() as b:
            pages_a = gen.generate(a)
            pages_b = gen.generate(b)
            self.assertEqual(len(pages_a), len(pages_b))
            html_by_path_a = {p['path']: p['html'] for p in pages_a}
            html_by_path_b = {p['path']: p['html'] for p in pages_b}
            self.assertEqual(html_by_path_a, html_by_path_b)

    def test_document_page_has_real_content_not_placeholders(self):
        with tempfile.TemporaryDirectory() as tmp:
            pages = gen.generate(tmp)
            by_path = {p['path']: p for p in pages}
            page = by_path['documents/nda.html']
            self.assertIn('Non-Disclosure Agreement', page['title'])
            self.assertIn('Defend Trade Secrets Act', page['html'])
            self.assertNotIn('undefined', page['html'])
            self.assertNotIn('{{', page['html'])  # no leaked field placeholders

    def test_every_document_gets_a_page(self):
        with tempfile.TemporaryDirectory() as tmp:
            pages = gen.generate(tmp)
            doc_paths = {p['path'] for p in pages if p['path'].startswith('documents/')}
            docs = gen.load_json('data/documents.json')
            self.assertEqual(len(doc_paths), len(docs))
            for doc in docs:
                self.assertIn(f"documents/{doc['id']}.html", doc_paths)

    def test_titles_and_descriptions_are_unique(self):
        with tempfile.TemporaryDirectory() as tmp:
            pages = gen.generate(tmp)
            titles = [p['title'] for p in pages]
            descriptions = [p['description'] for p in pages]
            self.assertEqual(len(titles), len(set(titles)))
            self.assertEqual(len(descriptions), len(set(descriptions)))

    def test_question_with_no_supporting_authority_is_skipped(self):
        doc_no_authority = {'id': 'synthetic_doc', 'title': 'Synthetic Doc', 'clauseOrder': ['drafting_clause']}
        clauses_by_id = {'drafting_clause': {'id': 'drafting_clause', 'title': 'Drafting', 'kind': 'drafting', 'citations': []}}
        page = gen.render_question_page({'query': 'does this exist'}, doc_no_authority, clauses_by_id, '')
        self.assertIsNone(page)

    def test_question_with_supporting_authority_is_built(self):
        doc = {'id': 'synthetic_doc', 'title': 'Synthetic Doc', 'clauseOrder': ['authority_clause']}
        clauses_by_id = {
            'authority_clause': {
                'id': 'authority_clause', 'title': 'An Authority Clause', 'kind': 'authority',
                'citations': [{'case': 'Smith v. Jones', 'cite': '1 Cal. 1', 'url': 'https://example.com', 'quote': 'x'}],
            },
        }
        page = gen.render_question_page({'query': 'is this a real question'}, doc, clauses_by_id, '')
        self.assertIsNotNone(page)
        self.assertIn('Smith v. Jones', page['html'])
        self.assertIn('questions/is-this-a-real-question.html', page['path'])

    def test_jurisdiction_classification_matches_app_js_logic(self):
        clauses_by_id = {
            'ca_clause': {'id': 'ca_clause', 'kind': 'authority', 'citations': [{'case': 'X v. Y', 'cite': 'Cal. App. 1', 'url': ''}]},
        }
        doc = {'clauseOrder': ['ca_clause']}
        self.assertEqual(gen.classify_document_jurisdiction(doc, clauses_by_id), 'CA')

    def test_html_escaping_prevents_injection_from_corpus_text(self):
        doc = {'id': 'x', 'title': '<script>alert(1)</script>', 'description': 'd', 'categories': [], 'fields': [], 'clauseOrder': []}
        page = gen.render_document_page(doc, {}, [doc], '')
        self.assertNotIn('<script>alert(1)</script>', page['html'])
        self.assertIn('&lt;script&gt;', page['html'])


class TestValidateSeoPages(unittest.TestCase):
    def test_body_text_strips_head_and_tags(self):
        html_src = '<html><head><title>T</title></head><body><h1>Hello</h1><p>World</p></body></html>'
        self.assertEqual(val.body_text(html_src), 'Hello World')

    def test_shingles_and_jaccard_identical_text(self):
        text = 'the quick brown fox jumps over the lazy dog'
        a = val.shingles(text)
        b = val.shingles(text)
        self.assertEqual(val.jaccard(a, b), 1.0)

    def test_jaccard_completely_different_text(self):
        a = val.shingles('alpha bravo charlie delta echo foxtrot')
        b = val.shingles('one two three four five six')
        self.assertEqual(val.jaccard(a, b), 0.0)

    def test_jaccard_empty_sets(self):
        self.assertEqual(val.jaccard(set(), set()), 0.0)


if __name__ == '__main__':
    unittest.main()
