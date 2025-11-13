// src/components/RequireAuth.jsx
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children, adminOnly = true, fallback = "/admin-login" }) {
  const [status, setStatus] = useState({ checking: true, allowed: false });

  useEffect(() => {
    let mounted = true;

    async function check() {
      // ambil session
      const { data: sessionData } = await supabase.auth.getSession();
      const session = sessionData?.session;

      if (!session) {
        if (mounted) setStatus({ checking: false, allowed: false });
        return;
      }

      // dapatkan user id
      const uid = session.user.id;

      if (!adminOnly) {
        if (mounted) setStatus({ checking: false, allowed: true });
        return;
      }

      // cek profile is_admin
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("is_admin")
        .eq("id", uid)
        .single();

      if (error || !profile?.is_admin) {
        if (mounted) setStatus({ checking: false, allowed: false });
      } else {
        if (mounted) setStatus({ checking: false, allowed: true });
      }
    }

    check();

    // optional: dengarkan perubahan auth (login/logout) untuk update state
    const { data: sub } = supabase.auth.onAuthStateChange((_event, _session) => {
      check();
    });

    return () => {
      mounted = false;
      sub?.subscription?.unsubscribe?.();
    };
  }, [adminOnly]);

  if (status.checking) return <div>Memeriksa akses...</div>;
  if (!status.allowed) return <Navigate to={fallback} replace />;
  return children;
}
