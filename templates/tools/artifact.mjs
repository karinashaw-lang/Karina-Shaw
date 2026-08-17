/* Generated files that only change when something changed.

   `npm run audit` re-measures rather than caches, which is right — a cached probe result is
   an assertion about the network from an unknown time. But every run stamped a fresh
   timestamp and fresh millisecond latencies into the committed artifacts, so the working
   tree was dirty after every audit whether or not anything had happened. That makes
   "reproducible with npm run audit" do less work than it appears to: if the diff is always
   non-empty, a real change is indistinguishable from having run the tool.

   The fix is to separate the measurement from the finding. A latency of 275ms rather than
   567ms is not a finding; `connect_rejected` rather than `200 OK` is. So an artifact is
   rewritten only when its substance changes, and when it does not, the existing file is left
   untouched — which means its timestamp stops meaning "when the tool last ran" and starts
   meaning "when this result was first observed". That is the more useful of the two, and the
   one a reader would assume anyway.

   The consequence worth having: after an audit, `git status` is empty unless something
   actually moved, so a dirty tree is now a signal instead of noise.
*/

/* Deep-delete the keys whose values are expected to differ between identical runs. Returns a
   copy; the caller's object is not touched, because a comparison helper that mutates its
   input is a trap. */
export function stripVolatile(value, volatile = []){
  const drop = new Set(volatile);
  const walk = v => {
    if(Array.isArray(v)) return v.map(walk);
    if(v && typeof v === 'object'){
      const out = {};
      for(const [k,val] of Object.entries(v)) if(!drop.has(k)) out[k] = walk(val);
      return out;
    }
    return v;
  };
  return walk(value);
}

/* For text artifacts: drop whole lines matching any pattern before comparing. */
export function stripVolatileLines(text, patterns = []){
  return String(text).split('\n')
    .filter(line => !patterns.some(re => re.test(line)))
    .join('\n');
}

export function sameSubstance(a, b, {volatile = [], linePatterns = []} = {}){
  if(typeof a === 'string' || typeof b === 'string'){
    return stripVolatileLines(a, linePatterns) === stripVolatileLines(b, linePatterns);
  }
  return JSON.stringify(stripVolatile(a, volatile)) === JSON.stringify(stripVolatile(b, volatile));
}

/* Write only if the substance moved.

   `fsImpl` is injected so this is testable without touching disk — the tests for a module
   about not writing files should not write files.

   Returns {written, reason} rather than a bare boolean, because a caller reporting "no
   change" to a human should be able to say which of the two no-changes it was. */
export function writeIfChanged(filePath, nextContent, {
  volatile = [], linePatterns = [], parse = null, fsImpl = null
} = {}){
  const fs = fsImpl;
  if(!fs) throw new Error('writeIfChanged needs an fs implementation passed in');

  if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath, nextContent);
    return {written:true, reason:'created'};
  }

  const prevRaw = fs.readFileSync(filePath, 'utf8');
  if(prevRaw === nextContent) return {written:false, reason:'byte-identical'};

  let prev = prevRaw, next = nextContent;
  if(parse){
    try{ prev = parse(prevRaw); next = parse(nextContent); }
    catch{ /* an unparseable previous file is a reason to overwrite, not to crash */
      fs.writeFileSync(filePath, nextContent);
      return {written:true, reason:'previous file could not be parsed'};
    }
  }

  if(sameSubstance(prev, next, {volatile, linePatterns}))
    return {written:false, reason:'only volatile fields differ'};

  fs.writeFileSync(filePath, nextContent);
  return {written:true, reason:'substance changed'};
}

/* The volatile field names used across this repo's generated artifacts, in one place so a
   new generator does not have to rediscover them. `ms` is latency; the rest are stamps. */
export const VOLATILE_FIELDS = [
  'ms', 'probedAt', 'startedAt', 'finishedAt', 'lintedAt', 'scoredAt', 'generatedAt', 'ranAt'
];

export const VOLATILE_LINES = [
  /^Measured at .* by `npm run/,
  /^Generated .* by `npm run/,
  /^_Last run: /
];
