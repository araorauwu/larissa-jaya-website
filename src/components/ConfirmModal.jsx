// src/components/ConfirmModal.jsx
export default function ConfirmModal({ open, title = "Konfirmasi", children, onConfirm, onCancel }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[90%] max-w-md bg-white rounded-lg p-5 shadow-lg">
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        <div className="mb-4">{children}</div>
        <div className="flex justify-end gap-3">
          <button onClick={onCancel} className="px-3 py-2 border rounded">Batal</button>
          <button onClick={onConfirm} className="px-3 py-2 bg-rose-600 text-white rounded">Ya, keluar</button>
        </div>
      </div>
    </div>
  );
}
