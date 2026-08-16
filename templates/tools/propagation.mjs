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

/* Checkable particulars: the facts in a clause a reader could look up and disagree with —
   a number with a unit, a named form, a dollar figure. Prose differences between two
   near-duplicate clauses are usually style; a particular present in one and absent from the
   other is a difference about the world. */
export function particulars(text){
  const out = new Set();
  const b = String(text||'');
  /* The corpus writes durations as "fifteen (15) days", so the numeral sits inside
     parentheses ahead of the unit. Matching only "15 days" missed every one of them. */
  for(const m of b.matchAll(/(?:\((\d[\d,]*)\)|\b(\d[\d,]*))\s*(calendar days|business days|days|hours|weeks|months|years|percent|employees)\b/gi))
    out.add(`${(m[1]||m[2]).replace(/,/g,'')} ${m[3].toLowerCase()}`);
  for(const m of b.matchAll(/\$\s?([\d,]+)/g)) out.add(`$${m[1].replace(/,/g,'')}`);
  for(const m of b.matchAll(/\b(?:Form|Forms)\s+([A-Z][A-Z0-9-]{1,8})/g)) out.add(`form ${m[1]}`);
  return out;
}

/* What does one member of a near-duplicate group say that another does not?

   A particular stated by one member and absent from another means one of them is
   incomplete, unless the omission is deliberate specialisation. This caught can_edd
   omitting the DE 34 new-hire report its pair states, and cal_soi omitting the filing
   cadence its pair carries in a field — two defects found with no source at all.

   There was a second check here and it has been removed rather than shipped: flagging the
   same UNIT carrying different VALUES across a group, as an internal contradiction needing
   no source. It cannot work at this level. A single clause legitimately says "register
   within 15 days" and "report a hire within 20 days"; both are days, neither contradicts
   the other, and nothing in the text tells the two concepts apart. A check that cannot
   distinguish two concepts will call every multi-deadline clause self-contradictory.

   The underlying question was still worth asking, so it was asked properly once, scoped by
   shared citation where the concept IS pinned down: across all 17 provisions cited by two
   or more clauses, no two clauses state different numbers. That is not reassurance. A
   corpus written from one memory is consistently wrong rather than inconsistently wrong, so
   internal agreement carries no information about correctness. It only means the cheap
   check has no yield here and the expensive one still has to be run. */
export function divergences(clauses, group){
  const byId = new Map(clauses.map(c=>[c.id,c]));
  const facts = group.map(id=>({id, p: particulars(byId.get(id)?.body)}));
  const all = new Set(facts.flatMap(f=>[...f.p]));
  const asymmetric = [];
  for(const v of all){
    const statedBy = facts.filter(f=>f.p.has(v)).map(f=>f.id);
    const absentFrom = facts.filter(f=>!f.p.has(v)).map(f=>f.id);
    if(statedBy.length && absentFrom.length) asymmetric.push({particular:v, statedBy, absentFrom});
  }
  return {asymmetric};
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
