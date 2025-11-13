// src/routes/AdminLogin.jsx
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient.js";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState(""); // kosongkan default
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // jika supabase belum dikonfigurasi, skip
    if (!supabase) return;

    // cek session
    supabase.auth.getSession().then(({ data }) => {
      setSession(data?.session ?? null);
    });

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess ?? null);
    });

    return () => subscription?.subscription?.unsubscribe?.();
  }, []);

  async function handleLogin(e) {
    e.preventDefault();
    if (!supabase) return alert("Supabase belum dikonfigurasi.");

    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      setLoading(false);
      if (error) {
        alert("Login gagal: " + error.message);
        return;
      }
      // arahkan ke admin add product (sesuai request)
      navigate("/admin/add-product");
    } catch (err) {
      setLoading(false);
      console.error(err);
      alert("Terjadi error saat login.");
    }
  }

  async function handleLogout() {
    if (!supabase) return;
    await supabase.auth.signOut();
    setSession(null);
    setEmail("");
    setPassword("");
  }

  return (
    <div className="container-narrow py-12">
      <h1 className="text-3xl font-extrabold text-rose-700 mb-6">Admin Login</h1>

      {session ? (
        <div className="bg-white p-6 rounded-md shadow-sm">
          <p className="mb-4">Anda sudah masuk sebagai admin.</p>
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/admin")}
              className="btn-primary"
            >
              Buka Dashboard
            </button>
            <button onClick={handleLogout} className="btn-ghost">
              Logout
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleLogin} className="max-w-lg">
          <label className="block mb-2 font-medium">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@contoh.com"
            className="input w-full mb-4"
            type="email"
          />

          <label className="block mb-2 font-medium">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=""
            className="input w-full mb-6"
            type="password"
          />

          <div className="flex gap-3">
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Loading..." : "Masuk"}
            </button>
            <button
              type="button"
              onClick={() => { setEmail(""); setPassword(""); }}
              className="btn-ghost"
            >
              Reset
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
