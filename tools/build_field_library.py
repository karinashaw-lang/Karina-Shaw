#!/usr/bin/env python3
"""Phase 2.2: build schema/fields/ (the shared field library) from the
corpus itself, and link data/documents.json fields to it via sharedFieldId.

Why this is data-driven rather than hand-curated: a field's id already
determines its meaning consistently across the whole corpus (verified
below — no reused id maps to more than one type), so the library's
canonical id is just that same id, and the set of ids worth defining is
whichever ones are reused often enough to matter. The master plan's "40
most frequently reused fields" is where to start, not the finish line —
the actual acceptance bar is "at least 80 percent of all field instances
... resolve to a shared definition", and the corpus's reuse curve is a
long tail (298 ids are reused at all, out of 822 total), so hitting 80%
coverage takes the top 172 ids, not 40. This script selects exactly as
many ids, ranked by frequency, as it takes to clear that bar — no more,
no fewer — and reports the real number instead of a round one chosen in
advance.

whyWeAsk/helpText are deliberately left unset on every entry this script
writes. That's Phase 2.2b's job, specifically so each one gets real
drafted text once at the library level instead of a placeholder sentence
repeated per document.

Dry run (default) prints the coverage report and writes nothing:
    python3 tools/build_field_library.py

Apply — writes schema/fields/*.json and adds sharedFieldId to every
linked field in data/documents.json:
    python3 tools/build_field_library.py --write
"""
import collections
import json
import os
import sys

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCUMENTS_PATH = os.path.join(REPO_ROOT, 'data', 'documents.json')
FIELDS_DIR = os.path.join(REPO_ROOT, 'schema', 'fields')

COVERAGE_TARGET = 0.80

# One output file per type bucket. Grouping by type rather than by the
# plan's illustrative semantic categories ("party names", "landlord/
# tenant", ...) is a deliberate simplification at this scale (172
# definitions): type is objective and already machine-verified
# consistent per id, where a semantic category would have to be guessed
# per field and could not be checked for correctness the way type can.
BUCKET_FILES = {
    'person-name': 'people.json',
    'entity-name': 'entities.json',
    'date': 'dates.json',
    'money': 'money.json',
    'address': 'addresses.json',
    'county': 'locations.json',
    'state': 'locations.json',
    'text': 'text.json',
    'longtext': 'text.json',
    'integer': 'text.json',
    'percent': 'text.json',
    'phone': 'text.json',
    'email': 'text.json',
}

SHARED_FIELD_KEY_ORDER = ['id', 'label', 'type', 'sensitive', 'whyWeAsk', 'helpText', 'validation']


def load_documents():
    with open(DOCUMENTS_PATH, encoding='utf-8') as f:
        return json.load(f)


def analyze(docs):
    """Returns (counter, label_counts, type_of, sensitive_of) across all
    fields in the corpus, and asserts the one invariant this whole design
    depends on: a reused field id never maps to more than one type."""
    counter = collections.Counter()
    label_counts = collections.defaultdict(collections.Counter)
    type_of = {}
    sensitive_of = collections.defaultdict(bool)
    for doc in docs:
        for field in doc.get('fields', []):
            fid = field['id']
            counter[fid] += 1
            label_counts[fid][field['label']] += 1
            if fid in type_of and type_of[fid] != field['type']:
                raise SystemExit(
                    f"ABORT: field id {fid!r} maps to both type {type_of[fid]!r} "
                    f"and {field['type']!r} — the one-id-one-meaning assumption "
                    f"this script relies on doesn't hold; stopping instead of "
                    f"guessing which is canonical."
                )
            type_of[fid] = field['type']
            if field.get('sensitive'):
                sensitive_of[fid] = True
    return counter, label_counts, type_of, sensitive_of


def select_ids(counter):
    """Ranks reused ids (count >= 2) by frequency and takes as many as it
    takes to clear COVERAGE_TARGET of all field instances in the corpus —
    not a fixed count chosen in advance."""
    total = sum(counter.values())
    selected = []
    cumulative = 0
    for fid, count in counter.most_common():
        if count < 2:
            break
        selected.append(fid)
        cumulative += count
        if cumulative / total >= COVERAGE_TARGET:
            break
    return selected, cumulative, total


def build_library_entries(selected, label_counts, type_of, sensitive_of):
    entries_by_file = collections.defaultdict(list)
    for fid in selected:
        entry = {
            'id': fid,
            'label': label_counts[fid].most_common(1)[0][0],
            'type': type_of[fid],
        }
        if sensitive_of[fid]:
            entry['sensitive'] = True
        entry = {k: entry[k] for k in SHARED_FIELD_KEY_ORDER if k in entry}
        bucket_file = BUCKET_FILES[type_of[fid]]
        entries_by_file[bucket_file].append(entry)
    for entries in entries_by_file.values():
        entries.sort(key=lambda e: e['id'])
    return entries_by_file


def write_library(entries_by_file):
    os.makedirs(FIELDS_DIR, exist_ok=True)
    for filename, entries in entries_by_file.items():
        path = os.path.join(FIELDS_DIR, filename)
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(entries, f, indent=2, ensure_ascii=False)
            f.write('\n')


def link_documents(docs, selected_set):
    """Returns a new list with sharedFieldId appended to every field whose
    id is in selected_set, and the count of fields actually touched.
    sharedFieldId is the last property in field.schema.json's canonical
    key order, so appending it to a dict (which preserves insertion
    order) is always correct regardless of which other optional keys a
    given field already has — nothing in the schema comes after it."""
    linked = 0
    for doc in docs:
        new_fields = []
        for field in doc.get('fields', []):
            if field['id'] in selected_set and 'sharedFieldId' not in field:
                new_field = dict(field)
                new_field['sharedFieldId'] = field['id']
                new_fields.append(new_field)
                linked += 1
            else:
                new_fields.append(field)
        doc['fields'] = new_fields
    return docs, linked


def round_trip_is_noop(docs):
    with open(DOCUMENTS_PATH, encoding='utf-8') as f:
        original = f.read()
    dumped = json.dumps(docs, indent=2, ensure_ascii=False) + '\n'
    return dumped == original


def main():
    write = '--write' in sys.argv
    docs = load_documents()

    if not round_trip_is_noop(docs):
        raise SystemExit(
            'ABORT: json.dump(docs, indent=2, ensure_ascii=False) + "\\n" is '
            'not byte-identical to the file on disk before any change is '
            'made. Refusing to write — see tools/migrate_fields.py and '
            'GOLDEN_REVIEW.md for why this check exists.'
        )

    counter, label_counts, type_of, sensitive_of = analyze(docs)
    selected, covered, total = select_ids(counter)
    entries_by_file = build_library_entries(selected, label_counts, type_of, sensitive_of)

    print(f'{len(counter)} distinct field ids, {total} field instances total.')
    print(f'{len(selected)} ids selected for the shared library '
          f'(covers {covered}/{total} = {covered/total:.1%} of all field '
          f'instances; target is {COVERAGE_TARGET:.0%}).')
    print()
    for filename in sorted(entries_by_file):
        print(f'  {filename}: {len(entries_by_file[filename])} definitions')

    if not write:
        print('\nDry run — pass --write to apply.')
        return

    write_library(entries_by_file)
    docs, linked = link_documents(docs, set(selected))

    dumped = json.dumps(docs, indent=2, ensure_ascii=False) + '\n'
    with open(DOCUMENTS_PATH, 'w', encoding='utf-8') as f:
        f.write(dumped)

    print(f'\nWrote {sum(len(v) for v in entries_by_file.values())} shared field '
          f'definitions across {len(entries_by_file)} files in schema/fields/.')
    print(f'Linked {linked} field instances in data/documents.json via sharedFieldId.')


if __name__ == '__main__':
    main()
