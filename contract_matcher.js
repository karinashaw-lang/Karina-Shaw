// Phase 9.2 built the TF-IDF clause matcher inside contract_worker.js
// directly, duplicated from app.js because a Worker's global scope
// has no `document`. Phase 10.1 ("build a 50-passage eval set...
// try improvements... keep a change only if it improves the eval")
// needs the exact same algorithm runnable from a plain Node script
// too, and measuring an eval harness against anything other than
// what actually ships would defeat the entire point of having one.
// So this is now the one real copy: pure, DOM-free, Worker-API-free
// JavaScript with no import of its own, loadable three ways --
// `importScripts('contract_matcher.js')` from contract_worker.js,
// `require('./contract_matcher.js')` from tools/eval_contract_reader.js
// and its test, or a plain `<script>` tag, were one ever needed.
(function (global) {
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
  const MIN_PASSAGE_TOKENS = 5;

  function tokenize(text) {
    return (text.toLowerCase().match(/[a-z][a-z'-]{2,}/g) || [])
      .filter(w => !STOPWORDS.has(w));
  }

  function buildClauseIndex(clauses) {
    const df = new Map();
    const clauseTokenSets = clauses.map(c => {
      const set = new Set(tokenize(`${c.title} ${c.body}`));
      set.forEach(t => df.set(t, (df.get(t) || 0) + 1));
      return set;
    });

    const N = clauses.length;
    const clauseIdf = new Map();
    df.forEach((count, token) => clauseIdf.set(token, Math.log(1 + N / count)));

    const clauseInvertedIndex = new Map();
    clauseTokenSets.forEach((set, idx) => {
      set.forEach(t => {
        if (!clauseInvertedIndex.has(t)) clauseInvertedIndex.set(t, []);
        clauseInvertedIndex.get(t).push(idx);
      });
    });

    return { clauseTokenSets, clauseIdf, clauseInvertedIndex };
  }

  // Every candidate clause that shares at least one token with the
  // passage, ranked by cosine similarity, best first. matchPassage()
  // below is just the topK=1, thresholded, confidence-labeled version
  // of this that production actually uses; the eval harness
  // (tools/eval_contract_reader.js) calls this directly for a real
  // top-k accuracy metric, which needs the ranked list itself, not
  // just the single best guess.
  function rankPassage(index, passage, topK) {
    const { clauseTokenSets, clauseIdf, clauseInvertedIndex } = index;
    const tokens = tokenize(passage);
    const tokenSet = new Set(tokens);
    if (tokenSet.size < MIN_PASSAGE_TOKENS) return [];

    let selfWeight = 0;
    tokenSet.forEach(t => { selfWeight += (clauseIdf.get(t) || 0) ** 2; });
    if (selfWeight === 0) return [];

    const candidateScores = new Map();
    tokenSet.forEach(t => {
      const idf = clauseIdf.get(t);
      if (!idf) return;
      const clauseList = clauseInvertedIndex.get(t) || [];
      clauseList.forEach(idx => {
        candidateScores.set(idx, (candidateScores.get(idx) || 0) + idf * idf);
      });
    });

    const ranked = [];
    candidateScores.forEach((rawScore, idx) => {
      let clauseWeight = 0;
      clauseTokenSets[idx].forEach(t => { clauseWeight += (clauseIdf.get(t) || 0) ** 2; });
      if (clauseWeight === 0) return;
      const cosine = rawScore / (Math.sqrt(selfWeight) * Math.sqrt(clauseWeight));
      ranked.push({ clauseIndex: idx, cosine });
    });
    ranked.sort((a, b) => b.cosine - a.cosine);
    return topK ? ranked.slice(0, topK) : ranked;
  }

  function matchPassage(index, passage) {
    const [best] = rankPassage(index, passage, 1);
    if (!best || best.cosine < MATCH_THRESHOLD) return null;
    return {
      clauseIndex: best.clauseIndex,
      confidence: best.cosine >= STRONG_MATCH_THRESHOLD ? 'strong' : 'weak',
    };
  }

  const api = {
    STOPWORDS, MATCH_THRESHOLD, STRONG_MATCH_THRESHOLD, MIN_PASSAGE_TOKENS,
    tokenize, buildClauseIndex, rankPassage, matchPassage,
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  } else {
    Object.assign(global, api);
  }
})(typeof self !== 'undefined' ? self : this);
