// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Optional: simple guard untuk membantu debug jika env kosong
if (!url || !key) {
  // jangan throw agar dev server tidak crash, tapi log agar terlihat
  console.warn('[supabaseClient] VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is missing');
}

export const supabase = createClient(url, key);
