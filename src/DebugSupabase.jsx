// src/DebugSupabase.jsx
import { useEffect, useState } from "react";
import { supabase } from "./lib/supabaseClient";

export default function DebugSupabase() {
  const [status, setStatus] = useState("Menghubungkan ke Supabase...");

  useEffect(() => {
    async function testConnection() {
      try {
        const { data, error } = await supabase.from("profiles").select("*").limit(1);
        if (error) throw error;
        setStatus("✅ Terhubung ke Supabase! Data pertama: " + JSON.stringify(data));
        console.log("Data:", data);
      } catch (err) {
        console.error("Error:", err);
        setStatus("❌ Gagal konek: " + err.message);
      }
    }
    testConnection();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Test Supabase Connection</h2>
      <p>{status}</p>
    </div>
  );
}
