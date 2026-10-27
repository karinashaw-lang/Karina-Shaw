#!/usr/bin/env python3
"""Phase 8.3: "do not publish thin or duplicate pages. Add a
validation rule: minimum unique content per page and no two pages with
more than a set similarity." Runs generate_seo_pages.py into a fresh
temp directory (so this never depends on, or mutates, whatever happens
to already be in build/seo/) and checks the real output:

  - every <title> and meta description is unique across all pages
  - every page has at least MIN_WORDS words of real body content
  - no two pages exceed MAX_SIMILARITY on a word-shingle Jaccard score

Similarity is only compared within documents sharing a category, and
within the question pages as their own group -- two pages about
unrelated legal topics are never going to collide, so comparing every
pair across ~840 pages would be pure wasted CI time for zero
additional safety.

    python3 tools/validate_seo_pages.py
"""
import itertools
import os
import re
import sys
import tempfile

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import generate_seo_pages as gen  # noqa: E402

MIN_WORDS = 60
MAX_SIMILARITY = 0.8
SHINGLE_SIZE = 5

TAG_RE = re.compile(r'<[^>]+>')
TITLE_RE = re.compile(r'<title>(.*?)</title>', re.S)
DESC_RE = re.compile(r'<meta name="description" content="(.*?)">', re.S)


def body_text(html_src):
    # Strips the <head> (title/meta/schema -- not body content) before
    # counting words or shingling, so a page can't pad its similarity
    # score down (or its word count up) with boilerplate every page
    # shares anyway.
    body_match = re.search(r'<body>(.*?)</body>', html_src, re.S)
    inner = body_match.group(1) if body_match else html_src
    text = TAG_RE.sub(' ', inner)
    return re.sub(r'\s+', ' ', text).strip()


def shingles(text, n=SHINGLE_SIZE):
    words = text.lower().split()
    return {tuple(words[i:i + n]) for i in range(len(words) - n + 1)} if len(words) >= n else {tuple(words)}


def jaccard(a, b):
    if not a or not b:
        return 0.0
    return len(a & b) / len(a | b)


def main():
    with tempfile.TemporaryDirectory() as tmp:
        pages = gen.generate(tmp)

        failures = []

        titles = {}
        descriptions = {}
        word_counts = {}
        shingle_sets = {}

        for page in pages:
            title_match = TITLE_RE.search(page['html'])
            desc_match = DESC_RE.search(page['html'])
            title = title_match.group(1) if title_match else ''
            description = desc_match.group(1) if desc_match else ''

            if title in titles:
                failures.append(f"duplicate title {title!r}: {titles[title]} and {page['path']}")
            titles[title] = page['path']

            if description in descriptions:
                failures.append(f"duplicate meta description: {descriptions[description]} and {page['path']}")
            descriptions[description] = page['path']

            text = body_text(page['html'])
            word_count = len(text.split())
            word_counts[page['path']] = word_count
            if word_count < MIN_WORDS:
                failures.append(f"{page['path']}: only {word_count} words of body content (minimum {MIN_WORDS})")

            shingle_sets[page['path']] = shingles(text)

        # Group document pages by category (sharing none -> never compared)
        # and question pages as one group of their own.
        docs_by_id = {d['id']: d for d in gen.load_json('data/documents.json')}
        groups = {}
        for page in pages:
            if page['path'].startswith('documents/'):
                doc_id = page['path'][len('documents/'):-len('.html')]
                for cat in docs_by_id[doc_id].get('categories') or ['(uncategorized)']:
                    groups.setdefault(('doc', cat), []).append(page['path'])
            else:
                groups.setdefault(('question', None), []).append(page['path'])

        checked_pairs = set()
        for _, paths in groups.items():
            for a, b in itertools.combinations(sorted(set(paths)), 2):
                if (a, b) in checked_pairs:
                    continue
                checked_pairs.add((a, b))
                sim = jaccard(shingle_sets[a], shingle_sets[b])
                if sim > MAX_SIMILARITY:
                    failures.append(f"{a} and {b} are {sim:.0%} similar (maximum {MAX_SIMILARITY:.0%})")

        print(f"{len(pages)} pages generated, {len(checked_pairs)} same-group pairs compared for similarity.")
        if failures:
            print(f"\n{len(failures)} problem(s):")
            for f in failures:
                print(f"  FAIL {f}")
            return 1
        print("validation passed")
        return 0


if __name__ == '__main__':
    sys.exit(main())
