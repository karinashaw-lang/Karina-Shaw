/* Defects do not stay in the clause you found them in.

   `msa_ca_925` was checked and found to say an employee "primarily works in California"
   where the statute says "primarily resides and works". That is the identical error already
   confirmed in `ea_ca_925` — written twice, found twice, at the cost of two searches. Nobody
   looking at one clause would have known to look at the other.

   That is a general property of a corpus written from memory: the same wrong recollection
   comes out the same way every time it is needed. So a confirmed defect is not one finding,
   it is a lead on every clause built from the same recollection, and there are two ways to
   tell which those are.

     TEXT — clauses sharing distinctive runs of wording. Near-duplicate bodies almost
       always come from one act of authorship, so a defect in one is a defect in all of
       them unless something was deliberately changed.

     CITATION — clauses resting on the same provision. If the corpus misread §1542 once, it
       misread it everywhere it relied on §1542, regardless of how the sentence came out.

   Neither proves anything. A shared phrase in a different context can be right, and two
   clauses on one statute can make different claims about it. What they do is turn one
   search into a short list of clauses worth reading next, which is the difference between
   checking 360 clauses and checking the ones that are wrong for a reason you already know.

   Pure functions of the corpus and the findings. No network, no model.
*/

const norm = s => String(s||'').toLowerCase().replace(/[^a-z0-9 ]+/g,' ').replace(/\s+/g,' ').trim();

/* k-word runs. Eight is long enough that a shared run is authorship rather than idiom —
   "the parties agree that" recurs everywhere and carries no information. */
export function shingles(text, k=8){
  const w = norm(text).split(' ').filter(Boolean);
  const out = new Set();
  for(let i=0; i+k<=w.length; i++) out.add(w.slice(i,i+k).join(' '));
  return out;
}

export function overlap(a, b){
  if(!a.size || !b.size) return {shared:0, jaccard:0};
  let n=0;
  for(const x of a) if(b.has(x)) n++;
  return {shared:n, jaccard: n/(a.size + b.size - n)};
}

/* Citations compared on their text, normalised for the ways a section symbol gets written.
   This deliberately does not try to parse ranges: §§1030–1034 and §1031 are different
   strings and are left as different provisions, because claiming they are the same would
   assert a containment this function cannot check. */
export const normCitation = s => String(s||'')
  .replace(/§+\s*/g,'§').replace(/\s+/g,' ').trim().toLowerCase();

export function citationsOf(clause){
  return (clause.sources||[]).map(s=>s.citation).filter(Boolean).map(normCitation);
}

/* Which unchecked clauses does a confirmed defect implicate?
   `defective` and `checked` are id sets supplied by the caller, so this file never has to
   decide what counts as a defect — findings.mjs owns that. */
export function implicated(clauses, {defective, checked, minShared=3}){
  const sh = new Map(clauses.map(c=>[c.id, shingles(c.body)]));
  const byId = new Map(clauses.map(c=>[c.id,c]));
  const out = new Map();

  const note = (id, entry) => {
    if(!out.has(id)) out.set(id, {clause:id, reasons:[]});
    out.get(id).reasons.push(entry);
  };

  for(const d of defective){
    const src = byId.get(d);
    if(!src) continue;

    for(const c of clauses){
      if(c.id===d || checked.has(c.id)) continue;

      const o = overlap(sh.get(d), sh.get(c.id));
      if(o.shared >= minShared)
        note(c.id, {kind:'text', from:d, shared:o.shared, jaccard:o.jaccard,
                    why:`shares ${o.shared} distinctive runs of wording with ${d}, where the defect is confirmed`});

      const common = citationsOf(src).filter(x=>citationsOf(c).includes(x));
      for(const cit of common)
        note(c.id, {kind:'citation', from:d, citation:cit,
                    why:`rests on the same provision as ${d}, where the corpus is known to have read it wrong`});
    }
  }

  /* Strongest reason first, then a clause implicated two ways outranks one implicated once. */
  const rank = r => (r.kind==='text' ? 100*r.jaccard : 0) + (r.kind==='citation' ? 10 : 0);
  return [...out.values()].map(e=>({
    ...e,
    reasons: e.reasons.sort((a,b)=>rank(b)-rank(a)),
    score: e.reasons.reduce((s,r)=>s+rank(r),0) + (new Set(e.reasons.map(r=>r.kind)).size>1 ? 25 : 0)
  })).sort((a,b)=>b.score-a.score);
}

/* Duplicate groups regardless of any finding — the standing exposure. Every group is a
   place where one defect would land more than once, whether or not one has been found yet. */
export function duplicateGroups(clauses, {minShared=3}={}){
  const sh = new Map(clauses.map(c=>[c.id, shingles(c.body)]));
  const seen = new Set(), groups = [];
  for(const a of clauses){
    if(seen.has(a.id)) continue;
    const members = [a.id];
    for(const b of clauses){
      if(b.id===a.id || seen.has(b.id)) continue;
      if(overlap(sh.get(a.id), sh.get(b.id)).shared >= minShared) members.push(b.id);
    }
    if(members.length>1){ members.forEach(m=>seen.add(m)); groups.push(members); }
  }
  return groups;
}
