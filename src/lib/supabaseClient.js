// src/lib/supabaseClient.js
// safe wrapper: only call createClient when both env vars exist
import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

let _supabase = null;

if (url && key) {
  // only create client if both present
  _supabase = createClient(url, key);
} else {
  // do NOT call createClient with empty string (that causes the runtime error)
  // log so you know why supabase is disabled
  // in production you can provide the env vars in Vercel dashboard
  // or keep supabase disabled if you don't use it on public site
  // (this prevents the bundle from throwing at runtime)
  // eslint-disable-next-line no-console
  console.warn(
    "[supabaseClient] supabase disabled — missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY"
  );
}

export const supabase = _supabase;
