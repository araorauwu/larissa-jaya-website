// src/components/AdminLogin.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

/**
 * Simple Admin Login component using Supabase email/password sign-in.
 * - setelah login sukses redirect ke /admin/add-product (sesuai permintaan)
 * - menampilkan tombol Logout jika sudah login
 * - aman jika supabase null (env belum dikonfigurasi)
 */
export default function AdminLogin() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(null);
  const [message, setMessage] = useState("");

  // guard: jika supabase belum ada, tampilkan pesan informatif
  if (!supabase) {
    return (
      <div className="container-narrow py-10">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <div className="p-6 rounded-xl border bg-yellow-50 text-yellow-900">
          Supabase belum dikonfigurasi. Untuk mengaktifkan login, set environment variables:
          <div className="text-sm mt-2">VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY</div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    let mounted = true;

    async function fetchSession() {
      try {
        const { data } = await supabase.auth.getSession();
        if (!mounted) return;
        setSession(data?.session ?? null);
      } catch (err) {
        console.error("AdminLogin:getSession", err);
      }
    }

    fetchSession();

    const { data: sub } = supabase.auth.onAuthStateChange((_event, _session) => {
      if (!mounted) return;
      setSession(_session);
    });

    return () => {
      mounted = false;
      sub?.subscription?.unsubscribe?.();
    };
  }, []);

  async function handleLogin(e) {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Login error:", error);
        setMessage(error.message || "Gagal login");
        setLoading(false);
        return;
      }

      // sukses -> redirect ke add product
      nav("/admin/add-product");
    } catch (err) {
      console.error("Unhandled login error:", err);
      setMessage(err?.message || "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    try {
      await supabase.auth.signOut();
      setMessage("Anda sudah logout.");
      setSession(null);
      nav("/admin-login");
    } catch (err) {
      console.error("Logout error:", err);
      setMessage("Gagal logout");
    }
  }

  return (
    <div className="container-narrow py-10">
      <h1 className="text-3xl font-extrabold text-rose-700 mb-6">Admin Login</h1>

      {session ? (
        <div className="card p-6">
          <div className="mb-3 text-sm text-gray-700">Anda sudah login sebagai:</div>
          <div className="mb-4 font-medium">{session.user.email}</div>
          <div className="flex gap-3">
            <button
              className="px-4 py-2 rounded-xl bg-rose-500 text-white"
              onClick={() => nav("/admin/add-product")}
            >
              Buka Dashboard
            </button>
            <button
              className="px-4 py-2 rounded-xl border"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          {message && <div className="mt-3 text-sm text-gray-600">{message}</div>}
        </div>
      ) : (
        <form onSubmit={handleLogin} className="max-w-lg">
          <label className="block mb-3">
            <div className="text-sm text-gray-700 mb-1">Email</div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-200"
            />
          </label>

          <label className="block mb-4">
            <div className="text-sm text-gray-700 mb-1">Password</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-200"
            />
          </label>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-rose-500 text-white shadow"
              disabled={loading}
            >
              {loading ? "Memproses..." : "Masuk"}
            </button>

            <button
              type="button"
              className="px-4 py-2 rounded-xl border text-sm"
              onClick={() => {
                setEmail("");
                setPassword("");
                setMessage("");
              }}
            >
              Reset
            </button>
          </div>

          {message && <div className="mt-4 text-sm text-red-600">{message}</div>}
        </form>
      )}
    </div>
  );
}
