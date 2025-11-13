// src/testSupabase.jsx
import React, { useEffect } from "react";
import { supabase } from "./lib/supabaseClient";

export default function TestSupabase() {
  useEffect(() => {
    async function fetchProfiles() {
      const { data, error } = await supabase.from("profiles").select("*");
      if (error) {
        console.error("❌ Gagal konek:", error.message);
      } else {
        console.log("✅ Koneksi berhasil! Data profiles:", data);
      }
    }
    fetchProfiles();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔍 Tes Koneksi Supabase</h2>
      <p>Lihat hasilnya di Console browser (F12 → Console).</p>
    </div>
  );
}
