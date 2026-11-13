#!/usr/bin/env python3
"""CA Wedge Plan Step 11: checks tools/generate_verify_pages.py's real
output against the live corpus — not a reimplementation, real
assertions on what it actually produces.
"""
import os
import sys
import tempfile
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'tools'))
import generate_verify_pages as gen


class TestGenerateVerifyPages(unittest.TestCase):
    def test_deterministic_output(self):
        with tempfile.TemporaryDirectory() as a, tempfile.TemporaryDirectory() as b:
            pages_a = gen.generate(a)
            pages_b = gen.generate(b)
            self.assertEqual(len(pages_a), len(pages_b))
            html_by_path_a = {p['path']: p['html'] for p in pages_a}
            html_by_path_b = {p['path']: p['html'] for p in pages_b}
            self.assertEqual(html_by_path_a, html_by_path_b)

    def test_every_document_gets_a_page(self):
        with tempfile.TemporaryDirectory() as tmp:
            pages = gen.generate(tmp)
            paths = {p['path'] for p in pages}
            docs = gen.load_json('data/documents.json')
            self.assertEqual(len(paths), len(docs))
            for doc in docs:
                self.assertIn(f"{doc['id']}.html", paths)

    def test_page_has_real_content_not_placeholders(self):
        with tempfile.TemporaryDirectory() as tmp:
            pages = gen.generate(tmp)
            by_path = {p['path']: p for p in pages}
            page = by_path['nda.html']
            self.assertIn('Non-Disclosure Agreement', page['title'])
            self.assertNotIn('undefined', page['html'])
            self.assertNotIn('{{', page['html'])

    def test_drafting_only_document_shows_no_authority_claim(self):
        with tempfile.TemporaryDirectory() as tmp:
            pages = gen.generate(tmp)
            by_path = {p['path']: p for p in pages}
            tiers = gen.load_tiers()
            drafting_only_id = next(did for did, info in tiers.items() if info.get('draftingOnly'))
            page = by_path[f'{drafting_only_id}.html']
            self.assertIn('makes no legal-authority claim', page['html'])

    def test_adversarially_checked_clause_shows_its_level(self):
        with tempfile.TemporaryDirectory() as tmp:
            pages = gen.generate(tmp)
            by_path = {p['path']: p for p in pages}
            tiers = gen.load_tiers()
            tier_a_id = next((did for did, info in tiers.items() if info.get('tier') == 'A'), None)
            self.assertIsNotNone(tier_a_id, 'expected at least one Tier A document in the live corpus')
            page = by_path[f'{tier_a_id}.html']
            self.assertIn('Adversarially checked', page['html'])

    def test_citation_links_are_real_urls(self):
        with tempfile.TemporaryDirectory() as tmp:
            pages = gen.generate(tmp)
            by_path = {p['path']: p for p in pages}
            page = by_path['nda.html']
            self.assertIn('href="https://', page['html'])


if __name__ == '__main__':
    unittest.main()
