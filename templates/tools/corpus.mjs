/* Loads the template corpus off disk and returns it as one object. */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = p => JSON.parse(fs.readFileSync(path.join(ROOT,p),'utf8'));

export function loadCorpus(){
  const taxonomy  = read('taxonomy.json');
  const rulesFile = read('rules.json');
  const glossary  = read('glossary.json');
  const documents = read('schemas/documents.json');
  const fields    = read('schemas/fields.json');
  const aliases   = read('schemas/aliases.json');
  const dir = path.join(ROOT,'clauses');
  const files = fs.readdirSync(dir).filter(f=>f.endsWith('.json')).sort();
  const clauses=[], sources={};
  for(const f of files){
    const d = read(path.join('clauses',f));
    d.clauses.forEach(c=>{ sources[c.id]=f; clauses.push(c); });
  }
  return {taxonomy, rules:rulesFile.rules, glossary:glossary.terms,
          documents:documents.documents, fields:fields.fields, aliases:aliases.aliases, clauses, sources, files};
}
export {ROOT};
