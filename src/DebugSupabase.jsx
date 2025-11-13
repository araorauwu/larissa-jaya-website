// src/DebugSupabase.jsx
import { useEffect, useState } from "react";
import { supabase } from "./lib/supabaseClient";

export default function DebugSupabase() {
  const [status, setStatus] = useState(
    supabase ? "Menghubungkan ke Supabase..." : "Supabase belum dikonfigurasi (env missing)"
  );

  useEffect(() => {
    if (!supabase) {
      // Jika supabase null, hentikan percobaan koneksi
      setStatus("❌ Supabase env belum ada — set VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY");
      return;
    }

    let mounted = true;

    async function testConnection() {
      try {
        // contoh table `profiles` — ubah kalau tidak ada
        const { data, error } = await supabase.from("profiles").select("*").limit(1);
        if (!mounted) return;
        if (error) {
          console.error("Supabase error:", error);
          setStatus("❌ Gagal konek: " + error.message);
          return;
        }
        setStatus("✅ Terhubung ke Supabase! Data (contoh): " + JSON.stringify(data));
      } catch (err) {
        console.error("Error:", err);
        if (mounted) setStatus("❌ Gagal konek: " + err.message);
      }
    }

    testConnection();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Test Supabase Connection</h2>
      <p>{status}</p>
      {supabase ? (
        <p className="text-sm text-gray-500">Supabase client aktif.</p>
      ) : (
        <p className="text-sm text-gray-500">
          Untuk mengaktifkan, set environment variables VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY
          kemudian redeploy.
        </p>
      )}
    </div>
  );
}
