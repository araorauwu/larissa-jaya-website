// src/components/AdminLogin.jsx
import { useState } from "react";
import { supabase } from "../lib/supabaseClient.js";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErr(null);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email, password
      });
      if (error) throw error;

      const uid = data?.user?.id;
      if (!uid) throw new Error("No user id returned");

      const { data: profile, error: pErr } = await supabase
        .from("profiles")
        .select("is_admin")
        .eq("id", uid)
        .single();
      if (pErr) throw pErr;

      if (!profile?.is_admin) {
        setErr("Akun bukan admin.");
        await supabase.auth.signOut();
        return;
      }

      // show toast then redirect
      window.dispatchEvent(new CustomEvent("app:toast", { detail: { message: "✅ Berhasil login", timeout: 2500 } }));
      navigate("/admin/add");
    } catch (e) {
      setErr(e.message || JSON.stringify(e));
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      {err && <div className="text-red-600 mb-2">{err}</div>}
      <form onSubmit={handleLogin} className="space-y-3">
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="w-full p-3 border" />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" type="password" className="w-full p-3 border" />
        <button type="submit" className="px-4 py-2 bg-rose-600 text-white rounded">Masuk</button>
      </form>
    </div>
  );
}
