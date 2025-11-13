// src/routes/AdminLogin.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("larissajayakarangawen@gmail.com");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const flag = localStorage.getItem("isAdmin");
    setIsAdmin(!!flag);
  }, []);

  const doLogin = async (e) => {
    e.preventDefault();

    // ---- simple demo auth (replace with Supabase / real auth as needed) ----
    // contoh: email = admin@example.com dan password = admin123 (ubah sesuai kebutuhan)
    if (email && password) {
      // TODO: ganti ke Supabase signIn jika perlu
      // simulasi sukses:
      localStorage.setItem("isAdmin", "1");
      setIsAdmin(true);

      // redirect otomatis ke add-product
      navigate("/admin/add-product", { replace: true });
    } else {
      alert("Masukkan email & password");
    }
  };

  const doLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
    setPassword("");
    // tetap di halaman login (atau redirect ke /)
  };

  return (
    <div className="container-narrow py-10">
      <h1 className="text-3xl font-extrabold text-rose-700 mb-6">Admin Login</h1>

      {isAdmin ? (
        <div className="card p-6">
          <p className="mb-4">Kamu sudah login sebagai admin.</p>
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/admin/add-product")}
              className="px-4 py-2 rounded-lg bg-rose-500 text-white"
            >
              Buka Dashboard / Tambah Produk
            </button>

            <button
              onClick={doLogout}
              className="px-4 py-2 rounded-lg border"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={doLogin} className="max-w-xl">
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border px-4 py-3 mb-4"
            type="email"
            required
          />

          <label className="block mb-2 text-sm font-medium">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border px-4 py-3 mb-4"
            type="password"
            required
          />

          <div className="flex items-center gap-3">
            <button type="submit" className="px-5 py-2 rounded-xl bg-rose-500 text-white shadow">
              Masuk
            </button>
            <button type="button" onClick={() => { setEmail(""); setPassword(""); }} className="px-4 py-2 rounded-xl border">
              Reset
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
