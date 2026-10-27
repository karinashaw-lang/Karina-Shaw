// Phase 9.2: "move heavy work (TF-IDF indexing...) off the main
// thread with web workers if profiling shows jank." Profiled first,
// not assumed: tests/performance/performance_budget.js's contract-
// reader budget measured matchPassage() against a realistic 20-page
// paste (60 passages) at ~1.9s of synchronous main-thread work on
// this sandbox -- a real, visible freeze for anyone pasting a long
// contract, not a hypothetical one. This worker is the fix: it builds
// its own copy of the clause index and does the actual TF-IDF scoring
// off the main thread, so the UI (and every other screen) stays
// responsive while it runs.
//
// Duplicates tokenize()/buildClauseIndex()/matchPassage() from app.js
// rather than importScripts()-ing it: app.js's top level runs
// `document.getElementById(...)` and other DOM calls the moment it
// loads, which don't exist in a Worker's global scope and would throw
// immediately. Same tradeoff sign.js already made for substitute() --
// a small, pure, easy-to-keep-in-sync piece of logic duplicated on
// purpose, rather than restructuring app.js around a Worker's
// constraints just to share it.

const STOPWORDS = new Set([
  'the', 'and', 'for', 'that', 'this', 'with', 'from', 'shall', 'will', 'are', 'was',
  'were', 'been', 'being', 'have', 'has', 'had', 'not', 'but', 'can', 'may', 'must',
  'any', 'all', 'each', 'such', 'other', 'than', 'then', 'also', 'into', 'onto',
  'upon', 'under', 'over', 'between', 'within', 'without', 'about', 'above',
  'below', 'after', 'before', 'during', 'while', 'when', 'where', 'which', 'who',
  'whom', 'whose', 'what', 'their', 'they', 'them', 'its', 'his', 'her', 'you',
  'your', 'our', 'out', 'both', 'either', 'neither', 'more', 'most', 'some',
  'these', 'those', 'there', 'here', 'only', 'same', 'own', 'per', 'pursuant',
  'section', 'subsection', 'paragraph', 'article', 'agreement', 'party',
  'parties', 'clause', 'provision', 'provisions', 'including', 'include',
  'includes', 'provided', 'otherwise', 'herein', 'hereof', 'hereto',
  'hereunder', 'thereof', 'thereto', 'whether', 'means', 'shall', 'would',
  'could', 'should', 'does', 'did', 'doing', 'done', 'made', 'make', 'makes',
  'got', 'get', 'gets', 'getting', 'im', 'my', 'mine', 'myself',
]);

const MATCH_THRESHOLD = 0.22;
const STRONG_MATCH_THRESHOLD = 0.4;

let clauses = [];
let clauseTokenSets = [];
let clauseIdf = new Map();
let clauseInvertedIndex = new Map();

function tokenize(text) {
  return (text.toLowerCase().match(/[a-z][a-z'-]{2,}/g) || [])
    .filter(w => !STOPWORDS.has(w));
}

function buildClauseIndex() {
  const df = new Map();
  clauseTokenSets = clauses.map(c => {
    const set = new Set(tokenize(`${c.title} ${c.body}`));
    set.forEach(t => df.set(t, (df.get(t) || 0) + 1));
    return set;
  });

  const N = clauses.length;
  clauseIdf = new Map();
  df.forEach((count, token) => clauseIdf.set(token, Math.log(1 + N / count)));

  clauseInvertedIndex = new Map();
  clauseTokenSets.forEach((set, idx) => {
    set.forEach(t => {
      if (!clauseInvertedIndex.has(t)) clauseInvertedIndex.set(t, []);
      clauseInvertedIndex.get(t).push(idx);
    });
  });
}

function matchPassage(passage) {
  const tokens = tokenize(passage);
  const tokenSet = new Set(tokens);
  if (tokenSet.size < 5) return null;

  let selfWeight = 0;
  tokenSet.forEach(t => { selfWeight += (clauseIdf.get(t) || 0) ** 2; });
  if (selfWeight === 0) return null;

  const candidateScores = new Map();
  tokenSet.forEach(t => {
    const idf = clauseIdf.get(t);
    if (!idf) return;
    const clauseList = clauseInvertedIndex.get(t) || [];
    clauseList.forEach(idx => {
      candidateScores.set(idx, (candidateScores.get(idx) || 0) + idf * idf);
    });
  });

  let best = null;
  candidateScores.forEach((rawScore, idx) => {
    let clauseWeight = 0;
    clauseTokenSets[idx].forEach(t => { clauseWeight += (clauseIdf.get(t) || 0) ** 2; });
    if (clauseWeight === 0) return;
    const cosine = rawScore / (Math.sqrt(selfWeight) * Math.sqrt(clauseWeight));
    if (!best || cosine > best.cosine) best = { idx, cosine };
  });

  if (!best || best.cosine < MATCH_THRESHOLD) return null;
  return {
    clauseIndex: best.idx,
    confidence: best.cosine >= STRONG_MATCH_THRESHOLD ? 'strong' : 'weak',
  };
}

self.onmessage = e => {
  const { type, id } = e.data;
  if (type === 'init') {
    clauses = e.data.clauses;
    buildClauseIndex();
    self.postMessage({ type: 'ready' });
  } else if (type === 'match') {
    const results = e.data.passages.map(matchPassage);
    self.postMessage({ type: 'matches', id, results });
  }
};
