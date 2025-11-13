// src/DebugSupabase.jsx
import { useEffect } from "react";
import { supabase } from "./lib/supabaseClient.js"; // pastikan .js

export default function DebugSupabase() {
  useEffect(() => {
    try {
      console.log("DEBUG: import.meta.env.VITE_SUPABASE_URL =", import.meta.env.VITE_SUPABASE_URL);
      console.log("DEBUG: import.meta.env.VITE_SUPABASE_ANON_KEY exists =", !!import.meta.env.VITE_SUPABASE_ANON_KEY);
      console.log("DEBUG: supabase typeof =", typeof supabase);
      // coba panggil method ringan (tidak butuh network)
      try {
        console.log("DEBUG: supabase.auth exists =", !!supabase?.auth);
      } catch(e) {
        console.error("DEBUG: supabase access error", e);
      }
    } catch (e) {
      console.error("DEBUG unexpected error", e);
    }
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>DebugSupabase</h2>
      <p>Periksa Console (F12 → Console) untuk hasil. Paste log ke chat.</p>
    </div>
  );
}
