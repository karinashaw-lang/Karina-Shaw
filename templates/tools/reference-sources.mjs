/* Who counts as a reference for market drafting practice, and what that can and cannot prove.

   This is not the same ladder as sources.mjs. sources.mjs answers "what does the law say" —
   a question with one right answer, decided by a sovereign. This answers "is this term drafted
   the way the market actually drafts it" — a question with no single right answer, only common
   practice, which is why the strongest thing corroboration against these hosts can ever
   establish is "not obviously unusual," never "correct" and never "reviewed by a lawyer."

   The registry stays deliberately small. Padding it with plausible-sounding hosts nobody has
   actually confirmed publish real, citable reference agreements would be the same mistake this
   project already made once with legal citations — confidence standing in for verification.
   Every host below is one this session is confident is real, well-known, and durable; where a
   template's subject matter (partnership buyouts, roommate splits) has no confident match, the
   corroboration for that document waits rather than reaching for something thin. */

export const REFERENCE_HOSTS = {
  /* Open, standardized commercial contracts, published specifically so companies stop
     drafting NDAs and MSAs from scratch — the closest thing this space has to a citable
     market standard for exactly the document types this corpus's commercial package covers. */
  'commonpaper.com': 'standard-form',
  /* Y Combinator's startup legal documents (SAFE, side letters) — free, public, and the
     de facto market standard for early-stage financing paperwork. */
  'ycombinator.com': 'standard-form',
  /* US Small Business Administration — a real federal agency, primary for its own guidance
     on small-business lending and contracting practice, not for what any statute means. */
  'sba.gov': 'agency-guidance',
  /* Consumer Financial Protection Bureau — federal agency, primary for its own consumer
     lending guidance, relevant to the money package's practice conventions. */
  'consumerfinance.gov': 'agency-guidance',
};

/* Named distinctly from sources.mjs's stripWww/hostOf — both files are inlined into the same
   script scope in the compiled prototype, and identical top-level names there collide. */
const refStripWww = h => String(h || '').replace(/^www\./, '');
export function refHostOf(url) { try { return refStripWww(new URL(url).host); } catch { return null; } }

export function referenceTierOf(url) {
  const h = refHostOf(url);
  if (!h) return null;
  if (REFERENCE_HOSTS[h]) return REFERENCE_HOSTS[h];
  const parent = Object.keys(REFERENCE_HOSTS).find(k => h.endsWith('.' + k));
  return parent ? REFERENCE_HOSTS[parent] : null;
}

export const isReferenceHost = url => referenceTierOf(url) !== null;
