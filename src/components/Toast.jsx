// src/components/Toast.jsx
import { useEffect, useState } from "react";

/**
 * Simple global toast listener.
 * Trigger dengan:
 * window.dispatchEvent(new CustomEvent('app:toast', { detail: { message: 'Hello', timeout: 3000 } }));
 */
export default function Toast() {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      const { message, timeout = 3000 } = e.detail || {};
      if (!message) return;
      setToast({ message });
      setTimeout(() => setToast(null), timeout);
    };
    window.addEventListener("app:toast", handler);
    return () => window.removeEventListener("app:toast", handler);
  }, []);

  if (!toast) return null;
  return (
    <div className="fixed right-5 bottom-8 z-50">
      <div className="px-4 py-2 bg-green-600 text-white rounded-lg shadow">
        <div className="text-sm">{toast.message}</div>
      </div>
    </div>
  );
}
