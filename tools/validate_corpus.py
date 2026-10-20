#!/usr/bin/env python3
"""Corpus-wide integrity check. Run after every merge, before committing.

Exits non-zero and names the first failure. Everything here has caught a
real defect at least once during corpus expansion.
"""
import json, re, sys, os, collections, itertools, random
from datetime import date

AUTH = ['id', 'title', 'kind', 'status', 'checkedDate', 'body', 'gap', 'citations']
DRAFT = ['id', 'title', 'kind', 'body']
CIT = ['case', 'cite', 'url', 'quote']
DOC = ['id', 'title', 'description', 'categories', 'clauseOrder', 'fields']

# The app has no other declaration of this list — renderCategoryFilter() in
# app.js just derives categories live from documents.json. A category name
# here that no longer matches any document's categories[] means a category
# was renamed or dropped and this list went stale; a document carrying a
# category not in this list means a typo or an undeclared 9th category, both
# silent in the UI (the picker's filter just grows or shrinks a chip) and
# both worth a deliberate decision rather than a silent commit.
CATEGORIES = {
    'Business Formation', 'Confidentiality & IP', 'During employment',
    'Ending employment', 'Estate Planning', 'Family Law', 'Hiring',
    'Real Estate',
}

def main():
    clauses = json.load(open('data/clauses.json'))['clauses']
    docs = json.load(open('data/documents.json'))
    fails = []

    def check(cond, msg):
        if not cond:
            fails.append(msg)

    ids = [c['id'] for c in clauses]
    check(len(ids) == len(set(ids)),
          f'duplicate clause ids: {[k for k, v in collections.Counter(ids).items() if v > 1][:5]}')
    dids = [d['id'] for d in docs]
    check(len(dids) == len(set(dids)),
          f'duplicate document ids: {[k for k, v in collections.Counter(dids).items() if v > 1][:5]}')
    titles = collections.Counter(d['title'] for d in docs)
    check(not [k for k, v in titles.items() if v > 1],
          f'duplicate document titles: {[k for k, v in titles.items() if v > 1][:3]}')

    # A clauseOrder entry is either a bare clause id (always included) or
    # {id, includeIf} (Phase 2.4 — conditionally included based on a
    # field answer; see app.js's clauseEntryId()/assembleDocument()).
    # Every check below that cares about *which clause* an entry names
    # goes through this helper so it doesn't matter which shape it's in.
    def entry_id(entry):
        return entry if isinstance(entry, str) else entry.get('id')

    def entry_include_if(entry):
        return None if isinstance(entry, str) else entry.get('includeIf')

    cid = set(ids)
    dangling = [(d['id'], entry_id(r)) for d in docs for r in d['clauseOrder'] if entry_id(r) not in cid]
    check(not dangling, f'clauseOrder ids that resolve to nothing: {dangling[:5]}')

    used = {entry_id(r) for d in docs for r in d['clauseOrder']}
    check(not (cid - used), f'orphan clauses referenced by no document: {sorted(cid - used)[:5]}')

    # includeIf (Phase 2.4): same shape as a field's showIf — must name a
    # field actually declared by the document, and have exactly one of
    # equals/notEquals (both or neither is a condition that can never
    # resolve meaningfully, not something a working renderer can execute).
    bad_include_if = []
    for d in docs:
        field_ids = {f['id'] for f in d.get('fields', [])}
        for r in d['clauseOrder']:
            cond = entry_include_if(r)
            if cond is None:
                continue
            tag = f'{d["id"]}.{entry_id(r)}'
            target = cond.get('field')
            if target not in field_ids:
                bad_include_if.append(f'{tag}.includeIf references {target!r}, not a field declared by this document')
            elif ('equals' in cond) == ('notEquals' in cond):
                bad_include_if.append(f'{tag}.includeIf must set exactly one of equals/notEquals')
    check(not bad_include_if, f'invalid includeIf: {bad_include_if[:5]}')

    # Acceptance (Phase 2.4): every document must render at least one
    # clause across every real combination of its conditional answers,
    # not just the combination whoever wrote it happened to test. Each
    # conditional field contributes one binary split (condition holds /
    # doesn't — a free-text field has no enumerable value set beyond
    # that), so a document with k distinct conditional fields has 2**k
    # branches; enumerated exactly up to BRANCH_CAP, sampled beyond it
    # rather than skipped, since skipping the check entirely above the
    # cap would quietly stop verifying the documents most likely to have
    # a real gap.
    BRANCH_CAP = 64
    empty_branches = []
    for d in docs:
        conditions = []
        for r in d['clauseOrder']:
            cond = entry_include_if(r)
            if cond is not None:
                conditions.append(cond)
        cond_fields = sorted({c['field'] for c in conditions})
        if not cond_fields:
            continue  # no conditionals: the one real branch is already
                      # covered by every other check in this file.

        def included_count(matches):
            # matches: {field_id: bool} — whether that field's answer
            # satisfies whichever single condition the entries check it
            # against (a document only ever has one include/exclude
            # question per conditional field in this corpus's design).
            count = 0
            for r in d['clauseOrder']:
                cond = entry_include_if(r)
                if cond is None:
                    count += 1
                    continue
                holds = matches[cond['field']]
                condition_true = holds if 'equals' in cond else not holds
                if condition_true:
                    count += 1
            return count

        n = len(cond_fields)
        if 2 ** n <= BRANCH_CAP:
            branch_iter = (
                dict(zip(cond_fields, bits))
                for bits in itertools.product([False, True], repeat=n)
            )
        else:
            rng = random.Random(f'{d["id"]}-branches')  # deterministic across runs
            branch_iter = (
                dict(zip(cond_fields, (rng.random() < 0.5 for _ in cond_fields)))
                for _ in range(BRANCH_CAP)
            )
        for matches in branch_iter:
            if included_count(matches) == 0:
                empty_branches.append((d['id'], matches))
                break
    check(not empty_branches,
          f'documents with a branch that includes zero clauses: {empty_branches[:5]}')

    auth = [c for c in clauses if c['kind'] == 'authority']
    check(not [c['id'] for c in auth if not (c.get('gap') or '').strip()],
          f'authority clauses with an empty gap: {[c["id"] for c in auth if not (c.get("gap") or "").strip()][:5]}')
    check(not [c['id'] for c in auth if not c.get('citations')],
          f'authority clauses with no citation: {[c["id"] for c in auth if not c.get("citations")][:5]}')

    # A clause isn't "verified" because it has a citation — it's verified
    # because that citation was actually checked, on an actual date. The
    # AUTH key-order check above already catches a missing checkedDate key;
    # this catches the key present but empty, malformed, or dated in the
    # future, which that check can't see.
    verified = [c for c in auth if c.get('status') == 'verified']
    bad_date = []
    for c in verified:
        raw = (c.get('checkedDate') or '').strip()
        try:
            if date.fromisoformat(raw) > date.today():
                bad_date.append(c['id'])
        except ValueError:
            bad_date.append(c['id'])
    check(not bad_date,
          f'verified clauses with a missing, malformed, or future checkedDate: {bad_date[:5]}')

    # "Verified" doesn't mean verified forever. A citation checked two years
    # ago could rest on a statute that's since been amended or a case that's
    # since been limited or overruled, and nothing short of re-checking it
    # catches that — so a clause's checkedDate has to actually stay recent,
    # not just exist. Past the fatal threshold the build fails until the
    # clause is re-verified (even just confirming the source still reads the
    # same way) and checkedDate is bumped. The warn threshold is a
    # non-fatal heads-up printed below, so a clause due for recheck shows
    # up before the day it turns into a hard failure.
    #
    # Phase 4.3 replaces the single global 24-month/18-month window with
    # per-category thresholds from config/staleness.json — law in a
    # faster-moving category (Hiring, During employment, Ending
    # employment, Real Estate) goes stale sooner than law in a slower one
    # (Confidentiality & IP, Estate Planning). A clause used by documents
    # in more than one category (true of 12 clauses in this corpus, as of
    # the migration that added this) is held to the strictest — the
    # lowest fatal/warn pair — of every category any of those documents
    # carries, never the most lenient: a clause a fast-moving document
    # depends on doesn't get a slow-moving document's extra runway just
    # because it's shared.
    staleness_config = json.load(open('config/staleness.json'))
    DEFAULT_FATAL = staleness_config['defaultFatalMonths']
    DEFAULT_WARN = staleness_config['defaultWarnMonths']
    CATEGORY_THRESHOLDS = staleness_config['categories']

    clause_categories = collections.defaultdict(set)
    for d in docs:
        for r in d['clauseOrder']:
            clause_categories[entry_id(r)].update(d.get('categories', []))

    def thresholds_for(clause_id):
        cats = clause_categories.get(clause_id)
        if not cats:
            return DEFAULT_FATAL, DEFAULT_WARN
        fatal = min(CATEGORY_THRESHOLDS.get(c, {}).get('fatalMonths', DEFAULT_FATAL) for c in cats)
        warn = min(CATEGORY_THRESHOLDS.get(c, {}).get('warnMonths', DEFAULT_WARN) for c in cats)
        return fatal, warn

    def months_old(checked_date):
        today = date.today()
        checked = date.fromisoformat(checked_date)
        months = (today.year - checked.year) * 12 + (today.month - checked.month)
        if today.day < checked.day:
            months -= 1
        return months

    dated = [c for c in verified if c['id'] not in bad_date]
    stale = [c['id'] for c in dated if months_old(c['checkedDate']) >= thresholds_for(c['id'])[0]]
    check(not stale,
          f'verified clauses past their category\'s fatal staleness threshold — due for recheck: {stale[:5]}')
    approaching = [c['id'] for c in dated
                   if thresholds_for(c['id'])[1] <= months_old(c['checkedDate']) < thresholds_for(c['id'])[0]]

    # Acceptance (Phase 4.3): report how many clauses these new,
    # category-specific thresholds flag (fatal or warn) that the old
    # single global 24/18-month window would not have — the real,
    # measurable effect of tightening the window for faster-moving
    # categories, not just an assertion that it was tightened.
    newly_fatal_under_new = [c['id'] for c in dated
                              if months_old(c['checkedDate']) >= thresholds_for(c['id'])[0]
                              and months_old(c['checkedDate']) < 24]
    newly_warn_under_new = [c['id'] for c in dated
                             if thresholds_for(c['id'])[1] <= months_old(c['checkedDate']) < 18]

    # Key order is part of the documented schema, so drift is a defect.
    # effectiveCycleChecked (below) is optional and, when present, must be
    # the last key — added by a one-time migration to the clauses it
    # applies to, not every authority clause.
    AUTH_WITH_CYCLE = AUTH + ['effectiveCycleChecked']
    check(all(list(c.keys()) in (AUTH, AUTH_WITH_CYCLE) for c in auth),
          f'authority clauses with non-canonical key order: {[c["id"] for c in auth if list(c.keys()) not in (AUTH, AUTH_WITH_CYCLE)][:5]}')
    check(all(list(c.keys()) == DRAFT for c in clauses if c['kind'] == 'drafting'),
          'drafting clauses with non-canonical key order')
    check(all(list(ct.keys()) == CIT for c in auth for ct in c['citations']),
          'citations with non-canonical key order')
    check(all(list(d.keys()) == DOC for d in docs),
          f'documents with non-canonical key order: {[d["id"] for d in docs if list(d.keys()) != DOC][:5]}')

    # Annual California-statute recheck rule (Phase 4.3). California
    # statutes amended during a legislative session generally take effect
    # the following January 1 — a per-category window of 12/18/24 months
    # isn't the right cadence for that specifically, because it can let a
    # clause in a slow-moving category go up to two full Jan-1 cycles
    # without a recheck. Any verified authority clause citing
    # leginfo.legislature.ca.gov (this project's own convention for a
    # primary-source statute citation — never used for case law, which
    # cites courtlistener.com or courts.ca.gov instead) must carry
    # effectiveCycleChecked >= the current year, confirming it's been
    # reconfirmed current as of this year's January 1 cycle. A missing or
    # outdated value fails regardless of how recent checkedDate otherwise
    # is.
    CA_STATUTE_URL_RE = re.compile(r'leginfo\.legislature\.ca\.gov', re.IGNORECASE)
    current_year = date.today().year
    missing_cycle, outdated_cycle = [], []
    for c in verified:
        cites_ca_statute = any(CA_STATUTE_URL_RE.search(ct.get('url') or '') for ct in c.get('citations', []))
        if not cites_ca_statute:
            continue
        cycle = c.get('effectiveCycleChecked')
        if cycle is None:
            missing_cycle.append(c['id'])
        elif not isinstance(cycle, int) or cycle < current_year:
            outdated_cycle.append(c['id'])
    check(not missing_cycle,
          f'verified clauses citing a CA statute with no effectiveCycleChecked: {missing_cycle[:5]}')
    check(not outdated_cycle,
          f'verified clauses citing a CA statute not yet reconfirmed for the {current_year} Jan 1 cycle: {outdated_cycle[:5]}')

    check(not [c['id'] for c in auth for ct in c['citations'] if not (ct.get('url') or '').strip()],
          'citations missing a url')
    check(not [c['id'] for c in auth for ct in c['citations'] if not (ct.get('quote') or '').strip()],
          'citations with an empty quote')

    # A {{field}} used in a body or gap must be declared by every document
    # that includes the clause, or it renders as raw braces to the reader.
    # The reverse also has to hold — a declared field nothing substitutes is
    # either dead data or a clause that forgot to use it — so both
    # directions are checked from the same per-document text, once.
    by_id = {c['id']: c for c in clauses}
    for d in docs:
        declared = {f['id'] for f in d.get('fields', [])}
        text = ' '.join((by_id[entry_id(r)].get('body', '') + ' ' + (by_id[entry_id(r)].get('gap') or ''))
                        for r in d['clauseOrder'] if entry_id(r) in by_id)
        used = set(re.findall(r'\{\{(\w+)\}\}', text))
        undeclared = used - declared
        check(not undeclared, f'{d["id"]} uses undeclared fields {sorted(undeclared)}')

        # A field with no effect on anything would be dead data, but a
        # field is not dead just because it's never literally substituted
        # into text — it can instead gate a field's showIf or a clause's
        # includeIf (Phase 2.4), which is a real effect on the assembled
        # document even though no {{field}} for it ever appears.
        conditioned_on = {f['showIf']['field'] for f in d.get('fields', []) if f.get('showIf')}
        conditioned_on |= {entry_include_if(r)['field'] for r in d['clauseOrder'] if entry_include_if(r)}
        referenced = used | conditioned_on
        unused = declared - referenced
        check(not unused, f'{d["id"]} declares fields nothing substitutes or conditions on: {sorted(unused)}')

    # Field schema (schema/field.schema.json) — loaded, not re-typed here,
    # so the enum of valid types and the set of required/orderable keys
    # can't quietly drift from the schema file itself. Phase 2.1 migrated
    # every document's fields[] to this shape (tools/migrate_fields.py);
    # this is what keeps it that way on every future edit.
    field_schema = json.load(open('schema/field.schema.json'))
    FIELD_KEY_ORDER = list(field_schema['properties'].keys())
    FIELD_REQUIRED_KEYS = set(field_schema['required'])
    FIELD_TYPES = set(field_schema['properties']['type']['enum'])
    FIELD_ID_RE = re.compile(field_schema['properties']['id']['pattern'])

    bad_keys, bad_order, bad_required, bad_type, bad_id, bad_label = [], [], [], [], [], []
    showif_edges = []  # (doc_id, field_id, target_id) for the cycle check below
    for d in docs:
        field_ids = {f['id'] for f in d.get('fields', [])}
        for f in d.get('fields', []):
            tag = f'{d["id"]}.{f.get("id", "?")}'
            keys = list(f.keys())
            unknown = set(keys) - set(FIELD_KEY_ORDER)
            if unknown:
                bad_keys.append(f'{tag} has unknown keys {sorted(unknown)}')
                continue
            if [k for k in FIELD_KEY_ORDER if k in f] != keys:
                bad_order.append(tag)
            if not FIELD_REQUIRED_KEYS <= set(keys):
                bad_required.append(f'{tag} missing {sorted(FIELD_REQUIRED_KEYS - set(keys))}')
            if f.get('type') not in FIELD_TYPES:
                bad_type.append(f'{tag}: {f.get("type")!r}')
            if not isinstance(f.get('required'), bool):
                bad_required.append(f'{tag}.required is not a bool')
            if not FIELD_ID_RE.match(f.get('id', '')):
                bad_id.append(tag)
            if not (f.get('label') or '').strip():
                bad_label.append(tag)
            show_if = f.get('showIf')
            if show_if:
                target = show_if.get('field')
                if target not in field_ids or target == f['id']:
                    check(False, f'{tag}.showIf references {target!r}, not another field in the same document')
                else:
                    showif_edges.append((d['id'], f['id'], target))

    check(not bad_keys, f'fields with keys outside schema/field.schema.json: {bad_keys[:5]}')
    check(not bad_order, f'fields with non-canonical key order (schema/field.schema.json order): {bad_order[:5]}')
    check(not bad_required, f'fields missing a required property or with the wrong type for one: {bad_required[:5]}')
    check(not bad_type, f'fields with a type outside schema/field.schema.json\'s enum: {bad_type[:5]}')
    check(not bad_id, f'field ids not matching schema/field.schema.json\'s id pattern: {bad_id[:5]}')
    check(not bad_label, f'fields with an empty label: {bad_label[:5]}')

    # Shared field library (schema/fields/*.json, Phase 2.2) — loaded the
    # same way as field.schema.json above, not re-typed. Every entry must
    # be individually valid against schema/shared_field.schema.json's
    # required keys/type enum, every id must be unique across all library
    # files (two conflicting canonical definitions for the same id would
    # defeat the point), and every document field that links to one via
    # sharedFieldId must resolve to a real entry whose type actually
    # matches — drift here means the library and the corpus disagree
    # about what a field id means.
    import glob
    shared_fields = {}
    dup_shared_ids = []
    bad_shared_entry = []
    for path in sorted(glob.glob('schema/fields/*.json')):
        for entry in json.load(open(path)):
            eid = entry.get('id')
            if eid in shared_fields:
                dup_shared_ids.append(eid)
            shared_fields[eid] = entry
            missing = {'id', 'label', 'type'} - set(entry.keys())
            if missing:
                bad_shared_entry.append(f'{path}:{eid} missing {sorted(missing)}')
            elif entry.get('type') not in FIELD_TYPES:
                bad_shared_entry.append(f'{path}:{eid} has type {entry.get("type")!r} outside the schema enum')
            elif not FIELD_ID_RE.match(eid or ''):
                bad_shared_entry.append(f'{path}:{eid} does not match the field id pattern')
    check(not dup_shared_ids, f'field ids defined more than once across schema/fields/*.json: {sorted(set(dup_shared_ids))[:5]}')
    check(not bad_shared_entry, f'invalid entries in schema/fields/*.json: {bad_shared_entry[:5]}')

    unresolved_shared = []
    type_mismatch = []
    linked_count = 0
    total_field_instances = 0
    for d in docs:
        for f in d.get('fields', []):
            total_field_instances += 1
            shared_id = f.get('sharedFieldId')
            if not shared_id:
                continue
            linked_count += 1
            entry = shared_fields.get(shared_id)
            if entry is None:
                unresolved_shared.append(f'{d["id"]}.{f["id"]} -> {shared_id!r}')
            elif entry.get('type') != f.get('type'):
                type_mismatch.append(f'{d["id"]}.{f["id"]}: field type {f.get("type")!r} vs shared {entry.get("type")!r}')
    check(not unresolved_shared, f'sharedFieldId references no entry in schema/fields/*.json: {unresolved_shared[:5]}')
    check(not type_mismatch, f'sharedFieldId type mismatch against the library: {type_mismatch[:5]}')

    if total_field_instances:
        print(f'{len(shared_fields)} shared field definitions in schema/fields/; '
              f'{linked_count}/{total_field_instances} field instances ({linked_count/total_field_instances:.1%}) '
              f'resolve to one (target: 80%)')

    # Advisory-phrase lint (Phase 2.2b) — "inform, never advise" is the
    # project's core rule, and whyWeAsk/helpText are exactly the kind of
    # free-form prose where that's easiest to slip on. Checked wherever
    # either property can appear: shared field library entries (the
    # primary source as of Phase 2.2b) and any document field that sets
    # its own (none do yet, but the check has to hold there too, not just
    # where today's data happens to live).
    banned_phrases = json.load(open('lint/advisory_phrases.json'))
    advisory_hits = []
    def lint_text(tag, text):
        if not text:
            return
        low = text.lower()
        for phrase in banned_phrases:
            if phrase in low:
                advisory_hits.append(f'{tag}: contains banned phrase {phrase!r}')
    for path in sorted(glob.glob('schema/fields/*.json')):
        for entry in json.load(open(path)):
            lint_text(f'{path}:{entry.get("id")}.whyWeAsk', entry.get('whyWeAsk'))
            lint_text(f'{path}:{entry.get("id")}.helpText', entry.get('helpText'))
    for d in docs:
        for f in d.get('fields', []):
            lint_text(f'{d["id"]}.{f["id"]}.whyWeAsk', f.get('whyWeAsk'))
            lint_text(f'{d["id"]}.{f["id"]}.helpText', f.get('helpText'))
    check(not advisory_hits, f'advisory phrasing (lint/advisory_phrases.json) found in whyWeAsk/helpText: {advisory_hits[:5]}')

    # Same lint, extended to Phase 5.1/5.2's search-facing copy: a lay
    # phrasing or an intake question/option label is just as much
    # user-facing prose as whyWeAsk/helpText, and just as easy to slip
    # advisory language into (a lay phrasing in particular is written
    # to sound like something a person would say, which is exactly the
    # register advisory language also lives in). Collected into its own
    # list so a hit here is reported distinctly from a whyWeAsk/helpText
    # hit, even though both go through the same lint_text() helper.
    search_advisory_hits = []
    def lint_search_text(tag, text):
        before = len(advisory_hits)
        lint_text(tag, text)
        search_advisory_hits.extend(advisory_hits[before:])
    if os.path.exists('search/lay_terms.json'):
        lay_terms = json.load(open('search/lay_terms.json'))
        for doc_id, phrases in lay_terms.items():
            for i, phrase in enumerate(phrases):
                lint_search_text(f'search/lay_terms.json:{doc_id}[{i}]', phrase)
    if os.path.exists('search/intake_flow.json'):
        intake_flow = json.load(open('search/intake_flow.json'))
        for category, questions in intake_flow.items():
            for q in questions:
                lint_search_text(f'search/intake_flow.json:{category}.{q["id"]}.prompt', q.get('prompt'))
                for opt in q.get('options', []):
                    lint_search_text(f'search/intake_flow.json:{category}.{q["id"]}.{opt["id"]}.label', opt.get('label'))
    check(not search_advisory_hits, f'advisory phrasing (lint/advisory_phrases.json) found in search copy: {search_advisory_hits[:5]}')

    # No document has a real showIf yet (Phase 2.4), but the cycle check is
    # written generically now so it's already correct the day one exists,
    # rather than being added under time pressure alongside the first real
    # conditional field.
    by_doc_edges = collections.defaultdict(dict)
    for doc_id, src, dst in showif_edges:
        by_doc_edges[doc_id][src] = dst
    cyclic = []
    for doc_id, edges in by_doc_edges.items():
        for start in edges:
            seen, cur = set(), start
            while cur in edges:
                if cur in seen:
                    cyclic.append(f'{doc_id}: showIf cycle involving {start}')
                    break
                seen.add(cur)
                cur = edges[cur]
    check(not cyclic, f'showIf cycles: {cyclic[:5]}')

    # A document's categories[] drives both the picker's category filter and
    # every "N documents across M categories" count anyone quotes about this
    # project. Three things have to hold for those counts to mean what they
    # say: every document is filed under at least one category (an empty
    # list makes it unreachable from the filtered picker), under at most two
    # (a guard against a data-entry slip, not a product decision — raise
    # this deliberately, in this file, if a document ever needs three), and
    # every category it names is one of the ones declared above.
    check(not [d['id'] for d in docs if not d.get('categories')],
          f'documents with no category: {[d["id"] for d in docs if not d.get("categories")][:5]}')
    check(not [d['id'] for d in docs if len(d.get('categories', [])) > 2],
          f'documents in more than two categories: {[d["id"] for d in docs if len(d.get("categories", [])) > 2][:5]}')
    unknown_cats = {cat for d in docs for cat in d['categories']} - CATEGORIES
    check(not unknown_cats, f'categories not in the declared list: {sorted(unknown_cats)}')

    # Phase 5.1's lay-term data: every document should have a non-empty
    # list of non-empty phrasings, kept in sync with the corpus itself
    # (a document added or removed without updating lay_terms.json
    # would otherwise go unnoticed until someone searched for it).
    if os.path.exists('search/lay_terms.json'):
        lay_terms = json.load(open('search/lay_terms.json'))
        doc_ids = {d['id'] for d in docs}
        missing_lay = sorted(doc_ids - set(lay_terms.keys()))
        extra_lay = sorted(set(lay_terms.keys()) - doc_ids)
        check(not missing_lay, f'documents with no entry in search/lay_terms.json: {missing_lay[:5]}')
        check(not extra_lay, f'search/lay_terms.json entries for documents no longer in the corpus: {extra_lay[:5]}')
        bad_lay = [doc_id for doc_id, phrases in lay_terms.items()
                   if not phrases or not all(isinstance(p, str) and p.strip() for p in phrases)]
        check(not bad_lay, f'search/lay_terms.json entries that are empty or contain a blank phrase: {bad_lay[:5]}')

    # Phase 5.2's intake flow: every declared category needs 2-4
    # narrowing questions, each with 2-4 options carrying a real label
    # and a string (possibly empty) keywords field -- the shape
    # app.js's renderIntakeStep()/renderIntakeResults() assume.
    if os.path.exists('search/intake_flow.json'):
        intake_flow = json.load(open('search/intake_flow.json'))
        missing_intake = sorted(CATEGORIES - set(intake_flow.keys()))
        unknown_intake = sorted(set(intake_flow.keys()) - CATEGORIES)
        check(not missing_intake, f'categories with no entry in search/intake_flow.json: {missing_intake}')
        check(not unknown_intake, f'search/intake_flow.json entries for unknown categories: {unknown_intake}')
        bad_intake = []
        for category, questions in intake_flow.items():
            if not (2 <= len(questions) <= 4):
                bad_intake.append(f'{category}: {len(questions)} questions (need 2-4)')
                continue
            for q in questions:
                if not (q.get('id') and (q.get('prompt') or '').strip()):
                    bad_intake.append(f'{category}.{q.get("id")}: missing id or prompt')
                if not (2 <= len(q.get('options', [])) <= 4):
                    bad_intake.append(f'{category}.{q.get("id")}: {len(q.get("options", []))} options (need 2-4)')
                    continue
                for opt in q['options']:
                    if not (opt.get('id') and (opt.get('label') or '').strip()):
                        bad_intake.append(f'{category}.{q["id"]}.{opt.get("id")}: missing id or label')
                    if not isinstance(opt.get('keywords'), str):
                        bad_intake.append(f'{category}.{q["id"]}.{opt.get("id")}: keywords is not a string')
        check(not bad_intake, f'invalid search/intake_flow.json entries: {bad_intake[:5]}')

    cats = collections.Counter(cat for d in docs for cat in d['categories'])
    multi = [d['id'] for d in docs if len(d.get('categories', [])) > 1]
    print(f'{len(docs)} documents / {len(clauses)} clauses '
          f'({len(auth)} authority, {len(clauses) - len(auth)} drafting), '
          f'{sum(len(c["citations"]) for c in auth)} citations')
    if approaching:
        print(f'{len(approaching)} verified clauses are within their category\'s warn window '
              f'(not failing yet, but due for recheck soon): {approaching[:5]}'
              + (f' (+{len(approaching) - 5} more)' if len(approaching) > 5 else ''))
    # Phase 4.3 acceptance: the real, measured effect of per-category
    # thresholds replacing the single global 24-month/18-month window —
    # how many clauses these tighter, category-specific windows flag
    # that the old uniform window would not have flagged yet.
    print(f'Per-category staleness thresholds (config/staleness.json) newly flag '
          f'{len(newly_fatal_under_new)} clause(s) fatal and {len(newly_warn_under_new)} '
          f'clause(s) warn that the old single 24-month/18-month window did not.')
    print(dict(sorted(cats.items())))
    # The per-category counts above sum to more than len(docs) whenever a
    # document carries two categories (handbook-style documents that are
    # genuinely both "Hiring" and "During employment", for example) — that's
    # expected, not a discrepancy, but it reads as one unless the gap is
    # spelled out every time these numbers get quoted, so spell it out here.
    check(sum(cats.values()) - len(docs) == len(multi),
          'category-tag sum does not reconcile with document count + multi-category documents '
          '(the two checks above should have already caught why)')
    if multi:
        print(f'({sum(cats.values())} category tags across {len(docs)} documents: '
              f'{len(multi)} documents carry two categories — {", ".join(sorted(multi))})')

    # verification/*.md holds free-form build notes, most but not all one
    # per document, written over months of renames and batch/process audits
    # (a "granularity-pass-*" or "checklist-audit-*" note isn't about any
    # single document, and isn't meant to be). Its file count has never been
    # a document-count proxy and asserting it against len(docs) would be
    # asserting something false — so this reports coverage instead of
    # failing the build: which current documents have no note under any
    # normalization of their id, so a real gap stays visible without
    # pretending the folder is 1:1 with documents.json.
    vdir = 'verification'
    if os.path.isdir(vdir):
        def norm(s):
            return re.sub(r'[-_]', '', s.lower())
        notes = {norm(f[:-3]) for f in os.listdir(vdir) if f.endswith('.md')}
        uncovered = [d['id'] for d in docs if norm(d['id']) not in notes
                     and norm(d['id'] + '_info_sheet') not in notes]
        print(f'{len(notes)} files in {vdir}/ (not 1:1 with documents — see tools/README.md); '
              f'{len(docs) - len(uncovered)}/{len(docs)} documents have a matching note by id')
        if uncovered:
            print(f'  documents with no matching note: {uncovered[:10]}'
                  + (f' (+{len(uncovered) - 10} more)' if len(uncovered) > 10 else ''))

    if fails:
        print('\nFAILED:', file=sys.stderr)
        for f in fails:
            print('  -', f, file=sys.stderr)
        return 1
    print('\nvalidation passed')
    return 0

if __name__ == '__main__':
    sys.exit(main())
