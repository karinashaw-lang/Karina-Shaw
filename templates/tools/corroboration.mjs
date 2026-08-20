/* What a "practice-corroborated" claim has to show before it is believed.

   Same discipline as sources.mjs's meetsTwoPrimary, applied to a different kind of evidence.
   A drafting clause has no statute to check itself against, so this cannot require a primary
   source — what it can require is that someone actually looked at real reference agreements
   and ran the corpus's own internal-consistency checks, and left a record precise enough that
   a second person could redo the comparison and see the same thing.

   Two ways to fake this, both closed the same way the source rules close self-certification:

     - typing a URL into a list is not evidence anyone opened it. `fetchedAt` is required for
       exactly the reason `readBy` is required in sources.mjs — a citation nobody consulted.
     - a source from an unlisted host is not evidence of market practice, it is one page
       somebody found. Only hosts in reference-sources.mjs's registry count, for the same
       reason an unclassified host defaults to `secondary` there and never to `primary`.
*/
import {isReferenceHost} from './reference-sources.mjs';

/* Named distinctly from review.mjs's isDate — both are inlined into the same script scope
   in the compiled prototype, and identical top-level names there collide. */
const isCorrobDate = s => /^\d{4}-\d{2}-\d{2}$/.test(String(s || ''));

/* At least two independent reference documents, because one is a data point and two on
   different hosts is the beginning of a pattern — the same "two distinct hosts" reasoning
   sources.mjs applies to statutes, applied here to market practice instead of law. */
export function validateCorroboration(corrob) {
  const problems = [];
  if (!corrob || typeof corrob !== 'object') return ['no corroboration record'];

  const refs = Array.isArray(corrob.referenceSources) ? corrob.referenceSources : [];
  if (refs.length < 2) problems.push(`${refs.length} reference source(s) recorded; the standard is two`);

  const hosts = new Set();
  refs.forEach((r, i) => {
    if (!r || !r.url) { problems.push(`reference source ${i + 1} has no url`); return; }
    if (!isReferenceHost(r.url)) problems.push(`reference source ${i + 1} (${r.url}) is not on the reference-host registry — an unlisted host is not evidence of market practice`);
    else hosts.add(new URL(r.url).host.replace(/^www\./, ''));
    if (!r.fetchedAt) problems.push(`reference source ${i + 1} has no fetchedAt date — a url nobody records opening is a citation, not a source`);
    else if (!isCorrobDate(r.fetchedAt)) problems.push(`reference source ${i + 1} fetchedAt "${r.fetchedAt}" is not an ISO date`);
    if (!r.note || String(r.note).trim().length < 12) problems.push(`reference source ${i + 1} has no note on what it showed`);
  });
  if (refs.length >= 2 && hosts.size < 2)
    problems.push(`reference sources are on ${hosts.size} distinct host(s); the standard is two`);

  const checks = Array.isArray(corrob.consistencyChecks) ? corrob.consistencyChecks : [];
  if (!checks.includes('terminology'))
    problems.push('consistencyChecks does not include "terminology" — the corpus\'s own automated self-consistency check must have run');

  return problems;
}
