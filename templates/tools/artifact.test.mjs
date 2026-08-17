/* Tests for write-if-changed.

   The property under test is narrow and load-bearing: a difference that is only a timestamp
   or a latency must not count as a change, and a difference in anything else must. Getting
   that backwards in either direction is worse than not having the check — too loose and the
   tree is always dirty again, too tight and a real change is silently not written.

   No file is touched. A module about not writing files is tested against an in-memory fs.
*/
import {stripVolatile, stripVolatileLines, sameSubstance, writeIfChanged,
        VOLATILE_FIELDS, VOLATILE_LINES} from './artifact.mjs';

let pass=0, fail=0;
const t=(n,c)=>{ if(c) pass++; else {fail++; console.log('  FAIL  '+n);} };

/* an fs that records what it was asked to do */
const fakeFs = (files={}) => {
  const writes = [];
  return {
    files, writes,
    existsSync: p => p in files,
    readFileSync: p => files[p],
    writeFileSync: (p,c) => { files[p]=c; writes.push(p); }
  };
};

console.log('stripVolatile');
t('a volatile key is removed', !('ms' in stripVolatile({ms:5, host:'a'}, ['ms'])));
t('a substantive key survives', stripVolatile({ms:5, host:'a'}, ['ms']).host==='a');
t('nested volatiles are removed',
   stripVolatile({rows:[{ms:1, ok:true}]}, ['ms']).rows[0].ms===undefined);
t('nested substance survives', stripVolatile({rows:[{ms:1, ok:true}]}, ['ms']).rows[0].ok===true);
t('the input is not mutated', (()=>{ const o={ms:1}; stripVolatile(o,['ms']); return o.ms===1; })());
t('arrays keep their order', stripVolatile([{n:1},{n:2}],['ms']).map(x=>x.n).join()==='1,2');
t('primitives pass through', stripVolatile('text',['ms'])==='text');
t('null survives', stripVolatile({a:null},['ms']).a===null);

console.log('stripVolatileLines');
t('a matching line is dropped',
   !stripVolatileLines('keep\nMeasured at 2026 by `npm run probe`\nkeep2', VOLATILE_LINES).includes('Measured'));
t('other lines survive',
   stripVolatileLines('keep\nMeasured at 2026 by `npm run probe`', VOLATILE_LINES).includes('keep'));

console.log('sameSubstance');
{
  const a = {probedAt:'2026-01-01', rows:[{host:'x', status:'connect_rejected', ms:500}]};
  const b = {probedAt:'2026-06-06', rows:[{host:'x', status:'connect_rejected', ms:12}]};
  t('a different timestamp and latency is the same substance',
     sameSubstance(a, b, {volatile:VOLATILE_FIELDS}));

  const c = {probedAt:'2026-06-06', rows:[{host:'x', status:'200 OK', ms:12}]};
  t('a different verdict is a different substance',
     !sameSubstance(a, c, {volatile:VOLATILE_FIELDS}));

  const d = {probedAt:'2026-06-06', rows:[{host:'x', status:'connect_rejected', ms:12},
                                          {host:'y', status:'connect_rejected', ms:9}]};
  t('an added row is a different substance', !sameSubstance(a, d, {volatile:VOLATILE_FIELDS}));
  t('text compares by line patterns',
     sameSubstance('Measured at A by `npm run probe`\nbody',
                   'Measured at B by `npm run probe`\nbody', {linePatterns:VOLATILE_LINES}));
  t('and a changed body is not the same',
     !sameSubstance('Measured at A by `npm run probe`\nbody',
                    'Measured at A by `npm run probe`\nother', {linePatterns:VOLATILE_LINES}));
}

console.log('writeIfChanged');
{
  const J = o => JSON.stringify(o,null,2)+'\n';
  const prev = J({probedAt:'2026-01-01', rows:[{host:'x', status:'connect_rejected', ms:500}]});

  const fs1 = fakeFs({'/p.json':prev});
  const same = J({probedAt:'2026-06-06', rows:[{host:'x', status:'connect_rejected', ms:11}]});
  const r1 = writeIfChanged('/p.json', same,
    {volatile:VOLATILE_FIELDS, parse:JSON.parse, fsImpl:fs1});
  t('a timestamp-only difference is not written', r1.written===false);
  t('and the reason says so', r1.reason==='only volatile fields differ');
  t('the original file is left byte-for-byte', fs1.files['/p.json']===prev);
  t('nothing was written at all', fs1.writes.length===0);

  const fs2 = fakeFs({'/p.json':prev});
  const changed = J({probedAt:'2026-06-06', rows:[{host:'x', status:'200 OK', ms:11}]});
  const r2 = writeIfChanged('/p.json', changed,
    {volatile:VOLATILE_FIELDS, parse:JSON.parse, fsImpl:fs2});
  t('a changed verdict is written', r2.written===true);
  t('and the reason names the substance', r2.reason==='substance changed');
  t('the new content landed', fs2.files['/p.json']===changed);

  const fs3 = fakeFs({});
  t('a missing file is created', writeIfChanged('/new.json','{}',{fsImpl:fs3}).reason==='created');

  const fs4 = fakeFs({'/p.json':prev});
  t('byte-identical content short-circuits',
     writeIfChanged('/p.json', prev, {volatile:VOLATILE_FIELDS, parse:JSON.parse, fsImpl:fs4}).reason==='byte-identical');

  const fs5 = fakeFs({'/p.json':'not json at all'});
  const r5 = writeIfChanged('/p.json', J({a:1}), {volatile:VOLATILE_FIELDS, parse:JSON.parse, fsImpl:fs5});
  t('an unparseable previous file is overwritten rather than crashing', r5.written===true);
  t('and says why', r5.reason.includes('could not be parsed'));

  let threw=false;
  try{ writeIfChanged('/x','y'); }catch{ threw=true; }
  t('an injected fs is required rather than assumed', threw);
}

console.log('every generator that writes a committed artifact goes through this');
{
  /* The four generators fixed first were found by running the audit and watching the tree.
     That works once. This finds the next one before it is committed: any tool writing into
     verification/ or the source registry must route through writeIfChanged, or the audit
     stops being idempotent again and nobody notices until a stop hook complains. */
  const fs = await import('node:fs');
  const skip = new Set([
    'artifact.mjs',        // the helper itself
    'build.mjs',           // writes the prototype, which is compiled output, not a measurement
    'textstore.mjs',       // content-addressed store: every write is a new file by construction
    'ingest.mjs',          // writes only through textstore
    'corpus.mjs', 'evaluator.mjs', 'review.mjs', 'sources.mjs',
    'propagation.mjs', 'classification.mjs', 'docdefects.mjs', 'lint.mjs',
    'pin.mjs', 'provenance.mjs', 'queue.mjs', 'cost.mjs',
  ]);
  const offenders = [];
  for(const f of fs.readdirSync('templates/tools').filter(n=>n.endsWith('.mjs') && !n.endsWith('.test.mjs'))){
    if(skip.has(f)) continue;
    const src = fs.readFileSync('templates/tools/'+f,'utf8');
    const code = src.replace(/\/\*[\s\S]*?\*\//g,'').replace(/^\s*\/\/.*$/gm,'');
    const writesArtifact = /writeFileSync\([^)]*(?:outDir|verification|REG|out\b)/.test(code);
    if(writesArtifact && !/writeIfChanged/.test(code)) offenders.push(f);
  }
  t(`no generator writes a committed artifact directly${offenders.length?' — '+offenders.join(', '):''}`,
     offenders.length===0);
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
