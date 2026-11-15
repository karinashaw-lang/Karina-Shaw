// CA Wedge Plan Step 18. External file, not inline, so trust.html's
// own CSP (script-src 'self') allows it without weakening the policy
// with 'unsafe-inline' -- same convention index.html/app.js already
// use. Computes every number on the page from the same public JSON
// files index.html itself fetches, never a value typed by hand
// (Global Rule 13).
(async function () {
  const statsEl = document.getElementById('trust-stats');
  const staleEl = document.getElementById('trust-stale-note');
  const sampleEl = document.getElementById('trust-sample-link');
  try {
    const [tiers, levels] = await Promise.all([
      fetch('tiers.json').then(r => r.json()),
      fetch('verification_levels.json').then(r => r.json()),
    ]);
    const all = tiers.summary.ALL;
    const counts = levels.counts;
    const stats = [
      { num: all.total.toLocaleString(), label: 'Documents in the corpus' },
      { num: all.A.toLocaleString(), label: 'Tier A documents' },
      { num: all.B.toLocaleString(), label: 'Tier B documents' },
      { num: (counts.adversarially_checked || 0).toLocaleString(), label: 'Clauses adversarially checked' },
      { num: (counts.verified || 0).toLocaleString(), label: 'Clauses verified' },
      { num: (counts.cited || 0).toLocaleString(), label: 'Clauses cited (not yet verified)' },
    ];
    statsEl.innerHTML = '';
    stats.forEach(s => {
      const card = document.createElement('div');
      card.className = 'trust-stat';
      const num = document.createElement('span');
      num.className = 'num';
      num.textContent = s.num;
      const label = document.createElement('span');
      label.className = 'label';
      label.textContent = s.label;
      card.appendChild(num);
      card.appendChild(label);
      statsEl.appendChild(card);
    });

    // A real, live example rather than a hand-picked document id that
    // could stop existing later -- the first Tier A document found,
    // so this link is only ever wrong if none exist at all.
    const tierADocId = Object.keys(tiers.documents).find(id => tiers.documents[id].tier === 'A');
    if (tierADocId) {
      const link = document.createElement('a');
      link.href = `verify/${tierADocId}.html`;
      link.textContent = `See a real verification record (${tierADocId})`;
      sampleEl.appendChild(link);
    } else {
      sampleEl.textContent = 'No Tier A document exists yet to link to as an example.';
    }
  } catch (err) {
    console.error('trust.html: failed to load stats', err);
    staleEl.hidden = false;
  }
})();
