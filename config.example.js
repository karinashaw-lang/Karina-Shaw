// Groundtruth — cloud account configuration.
//
// The app works completely with no file here at all: every document
// stays local to the browser, exactly as it always has. This file
// only turns on the optional "Account" feature (sign in, sync your
// saved documents across devices), and it's entirely client-side —
// there is no server of Groundtruth's own to configure.
//
// To turn it on:
//   1. Create a free project at https://supabase.com (a couple
//      minutes, no cost at this scale).
//   2. In the Supabase SQL editor, run supabase/schema.sql once.
//   3. In Project Settings -> API, copy the Project URL and the
//      "anon" public key (not the service_role key — that one must
//      never appear in client-side code).
//   4. Copy this file to config.js (already gitignored) and fill in
//      the two values below.
//
// The anon key is safe to ship to the browser by design — it can't
// read or write anything the database's row-level security policies
// (see schema.sql) don't already allow for the signed-in user.

window.GROUNDTRUTH_CONFIG = {
  supabaseUrl: '',   // e.g. 'https://xxxxxxxxxxxx.supabase.co'
  supabaseAnonKey: '',
};
