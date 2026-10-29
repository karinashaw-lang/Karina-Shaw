// Phase 9.2: "move heavy work (TF-IDF indexing...) off the main
// thread with web workers if profiling shows jank." Profiled first,
// not assumed: tests/performance/performance_budget.js's contract-
// reader budget measured the TF-IDF scoring against a realistic
// 20-page paste (60 passages) at ~1.9s of synchronous main-thread
// work on this sandbox -- a real, visible freeze for anyone pasting
// a long contract, not a hypothetical one. This worker is the fix: it
// builds its own copy of the clause index and does the actual
// scoring off the main thread, so the UI (and every other screen)
// stays responsive while it runs.
//
// The actual matching algorithm lives in contract_matcher.js (Phase
// 10.1 pulled it out of this file into its own, so the eval harness
// in tools/eval_contract_reader.js measures the exact same code this
// worker runs, not a second copy that could silently drift from it).
// importScripts() works here because that file touches no DOM --
// app.js itself can't be shared the same way, since its top level
// calls document.getElementById(...) immediately, which throws in a
// Worker's global scope.
importScripts('contract_matcher.js');

let clauseIndex = null;

self.onmessage = e => {
  const { type, id } = e.data;
  if (type === 'init') {
    clauseIndex = buildClauseIndex(e.data.clauses);
    self.postMessage({ type: 'ready' });
  } else if (type === 'match') {
    const results = e.data.passages.map(p => matchPassage(clauseIndex, p));
    self.postMessage({ type: 'matches', id, results });
  }
};
