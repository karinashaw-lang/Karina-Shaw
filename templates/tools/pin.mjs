/* Assertion pinning.

   Holding a trusted text is not the same as knowing a clause is right. The link has to
   be made assertion by assertion: this sentence in the clause rests on THAT span of THAT
   attested text. Pinning records it as an exact quoted substring plus its offset and
   hash, so the claim is checkable by anyone, mechanically, without re-reading anything.

   Two properties enforced here:

   - A pin must QUOTE. The quoted span has to appear verbatim in the attested text at the
     recorded offset. A pin that no longer matches is broken and reported, not repaired
     silently — a quote that has drifted is exactly the case where a summary would hide
     the problem.

   - Only pinned-and-matching assertions count toward primary-verified. Everything else
     stays where it was. The reviewer still signs; pinning only removes the need to take
     anyone's word about what the source says.

   Usage:
     node templates/tools/pin.mjs --check                 verify every existing pin
     node templates/tools/pin.mjs --clause <id> --text <textId> --quote "..." --assertion "..."
*/
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {get, loadIndex} from './textstore.mjs';
import {ROOT} from './corpus.mjs';

export const PINS = path.join(ROOT,'sources','pins.json');
const arg = n => { const i=process.argv.indexOf('--'+n); return i>0 ? process.argv[i+1] : null; };

export function loadPins(){ return fs.existsSync(PINS) ? JSON.parse(fs.readFileSync(PINS,'utf8')) : {version:'1.0.0', pins:[]}; }
export function savePins(p){ fs.writeFileSync(PINS, JSON.stringify(p,null,2)+'\n'); }

export function quoteHash(q){ return crypto.createHash('sha256').update(q).digest('hex').slice(0,16); }

/* The whole mechanism, as a pure function so the test can enumerate it. */
export function checkPin(pin, text){
  if(text===null)      return {ok:false, state:'text-missing',  why:'the attested text this pin depends on is not in the store'};
  if(text.tampered)    return {ok:false, state:'text-tampered', why:'stored bytes no longer hash to their own id'};
  const at = text.text.indexOf(pin.quote);
  if(at === -1)        return {ok:false, state:'quote-absent',
    why:'the quoted span does not appear in the attested text — either the pin is wrong or the source was amended'};
  if(pin.offset !== undefined && at !== pin.offset) return {ok:false, state:'quote-moved', at,
    why:`the quote appears at offset ${at}, not the recorded ${pin.offset} — the surrounding text changed`};
  if(pin.quoteHash && pin.quoteHash !== quoteHash(pin.quote)) return {ok:false, state:'quote-altered',
    why:'the recorded quote hash does not match the quote itself'};
  return {ok:true, state:'matched', at};
}

/* A clause may claim primary-verified only if every one of its assertions is pinned to a
   matching span AND a human has signed. Neither alone is sufficient. */
export function clauseVerdict(assertions, pins, checks, reviewer){
  const pinnedIds = new Set(pins.map(p=>p.assertion));
  const unpinned  = assertions.filter(a=>!pinnedIds.has(a));
  const broken    = checks.filter(c=>!c.ok);
  if(!assertions.length)  return {eligible:false, why:'no assertions recorded for this clause'};
  if(unpinned.length)     return {eligible:false, why:`${unpinned.length} assertion(s) are not pinned to any source text`};
  if(broken.length)       return {eligible:false, why:`${broken.length} pin(s) do not match the attested text`};
  if(!reviewer)           return {eligible:false, why:'pins all match, but primary-verified additionally requires a named reviewer'};
  return {eligible:true, why:`all ${assertions.length} assertion(s) pinned and matching, signed off by ${reviewer}`};
}

const INVOKED = process.argv[1] && process.argv[1].endsWith('pin.mjs');
if(INVOKED){
  const store = loadPins();
  if(process.argv.includes('--check')){
    const ix = loadIndex();
    if(!store.pins.length){
      console.log('no pins recorded.');
      console.log(`${Object.keys(ix.texts).length} attested text(s) available to pin against.`);
      console.log('\nNothing can be pinned until a source text is ingested. See ingest.mjs.');
      process.exit(0);
    }
    let ok=0, bad=0;
    for(const p of store.pins){
      const r = checkPin(p, get(p.textId));
      if(r.ok) ok++; else { bad++; console.log(`BROKEN  ${p.clause} / ${p.assertion}\n        ${r.state}: ${r.why}`); }
    }
    console.log(`${ok} pin(s) match, ${bad} broken`);
    process.exit(bad?1:0);
  }

  const clause=arg('clause'), textId=arg('text'), quote=arg('quote'), assertion=arg('assertion');
  if(!clause||!textId||!quote||!assertion){
    console.error('need --clause, --text, --quote and --assertion'); process.exit(1);
  }
  const text = get(textId);
  const pin = {clause, assertion, textId, quote, quoteHash:quoteHash(quote), pinnedAt:new Date().toISOString()};
  const r = checkPin(pin, text);
  if(!r.ok){ console.error(`refused: ${r.state} — ${r.why}`); process.exit(2); }
  pin.offset = r.at;
  store.pins.push(pin); savePins(store);
  console.log(`pinned ${clause} / "${assertion}" to ${textId.slice(0,12)} at offset ${r.at}`);
}
