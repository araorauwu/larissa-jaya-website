// src/components/RequireAuth.jsx
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

/**
 * RequireAuth
 * - children: komponen yang diproteksi
 * - adminOnly: (opsional) tidak dipakai detail role di contoh ini, hanya menjaga session
 * - fallback: alamat redir jika tidak login
 */
export default function RequireAuth({ children, adminOnly = true, fallback = "/admin-login" }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  // Jika supabase tidak dikonfigurasi, jangan coba panggil API - redirect ke login
  if (!supabase) {
    console.warn("RequireAuth: Supabase client belum tersedia — redirect ke login.");
    return <Navigate to={fallback} replace />;
  }

  useEffect(() => {
    let mounted = true;

    async function checkSession() {
      try {
        const { data } = await supabase.auth.getSession();
        if (!mounted) return;
        setSession(data?.session ?? null);
      } catch (err) {
        console.error("RequireAuth -> getSession error:", err);
        if (mounted) setSession(null);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    checkSession();

    // listen auth state change
    const { data: sub } = supabase.auth.onAuthStateChange((_event, _session) => {
      if (!mounted) return;
      setSession(_session);
    });

    return () => {
      mounted = false;
      // unsubscribe listener jika tersedia
      sub?.subscription?.unsubscribe?.();
    };
  }, []);

  if (loading) {
    return (
      <div className="p-6">
        <div className="text-sm text-gray-600">Memeriksa sesi ...</div>
      </div>
    );
  }

  if (!session) {
    return <Navigate to={fallback} replace />;
  }

  return children;
}
