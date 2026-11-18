#!/usr/bin/env python3
"""Full-corpus completion spec, Task B1: checks tools/citation_recheck.py's
pure text-matching logic against synthetic text -- the normalization
and quote-checking rules, which is the part worth testing without a
real network fetch. Each case here reproduces a real artifact this
tool's own development found on a live source (see
review/CITATION_RECHECK_REPORT.md), not a hypothetical.
"""
import os
import sys
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'tools'))
import citation_recheck as cr  # noqa: E402


class TestNormalize(unittest.TestCase):
    def test_collapses_whitespace(self):
        self.assertEqual(cr.normalize('a   b\n\nc'), 'a b c')

    def test_strips_soft_hyphen(self):
        self.assertEqual(cr.normalize('there­under'), 'thereunder')

    def test_html_tag_boundary_space_before_punctuation(self):
        self.assertEqual(cr.normalize('this title , except'), 'this title, except')

    def test_space_around_quote_marks_is_stripped(self):
        # Deliberately aggressive: any space adjacent to a quote mark is
        # removed, not just the space just inside it, since this is a
        # drift-detection comparison, not a formatter -- see the real
        # Cornell LII <dfn>"term"</dfn> case this rule was built for.
        self.assertEqual(cr.normalize('a " term " is'), 'a"term"is')

    def test_space_around_apostrophe(self):
        self.assertEqual(cr.normalize("employee 's spouse"), "employee's spouse")
        self.assertEqual(cr.normalize("employee' s spouse"), "employee's spouse")

    def test_quote_mark_font_substitution(self):
        self.assertEqual(cr.normalize('―Employer‖ means'), '"Employer"means')

    def test_courtlistener_pdf_apostrophe_font_substitution(self):
        self.assertEqual(cr.normalize('the court‟s view'), "the court's view")

    def test_collapses_hyphen_runs(self):
        self.assertEqual(cr.normalize('a--b'), 'a-b')
        self.assertEqual(cr.normalize('a—b'), 'a-b')


class TestQuoteSegments(unittest.TestCase):
    def test_splits_on_ellipsis(self):
        self.assertEqual(cr.quote_segments('first part ... second part'),
                          ['first part', 'second part'])

    def test_no_ellipsis_is_one_segment(self):
        self.assertEqual(cr.quote_segments('a single quote'), ['a single quote'])

    def test_bracket_ellipsis_variant(self):
        self.assertEqual(cr.quote_segments('alpha [...] beta'), ['alpha', 'beta'])


class TestCheckQuote(unittest.TestCase):
    def test_exact_match(self):
        self.assertEqual(cr.check_quote('the quick fox', 'the quick fox jumps'), 'exact')

    def test_no_match(self):
        self.assertFalse(cr.check_quote('the quick fox', 'a slow turtle'))

    def test_spliced_quote_segments_must_appear_in_order(self):
        text = 'alpha beta gamma delta'
        self.assertEqual(cr.check_quote('alpha ... delta', text), 'exact')
        self.assertFalse(cr.check_quote('delta ... alpha', text))

    def test_empty_quote_never_matches(self):
        self.assertFalse(cr.check_quote('', 'anything at all'))

    def test_pdf_linewrap_whitespace_is_fuzzy_not_exact(self):
        quote = 'nontransferable license'
        text = 'a nontransfer able license granted here'
        self.assertEqual(cr.check_quote(quote, text), 'fuzzy')

    def test_pdf_inconsistent_hyphenation_is_fuzzy(self):
        quote = 'full-time employment'
        text = 'defined as fulltime employment status'
        self.assertEqual(cr.check_quote(quote, text), 'fuzzy')

    def test_fi_ligature_drop_is_fuzzy(self):
        quote = 'a three-year period for filing suit'
        text = 'a three-year period for fling suit, here'
        self.assertEqual(cr.check_quote(quote, text), 'fuzzy')

    def test_fuzzy_never_claims_exact(self):
        quote = 'full-time'
        text = 'fulltime'
        self.assertNotEqual(cr.check_quote(quote, text), 'exact')


class TestDomain(unittest.TestCase):
    def test_extracts_host(self):
        self.assertEqual(cr.domain('https://www.example.gov/path?x=1'), 'www.example.gov')

    def test_handles_no_scheme_gracefully(self):
        self.assertEqual(cr.domain(''), '')


if __name__ == '__main__':
    unittest.main()
