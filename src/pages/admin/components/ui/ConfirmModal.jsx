import React from "react";
import { X } from "lucide-react";

export default function ConfirmModal({
  isOpen,
  title = "Konfirmasi",
  message = "Apakah Anda yakin?",
  confirmText = "Hapus",
  cancelText = "Batal",
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl">
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <h2 className="text-xl font-bold text-slate-900">{title}</h2>

          <button
            onClick={onCancel}
            className="rounded-xl p-2 transition hover:bg-slate-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="px-6 py-6">
          <p className="leading-relaxed text-slate-600">{message}</p>
        </div>

        {/* ACTION */}
        <div className="flex justify-end gap-3 border-t border-slate-200 px-6 py-5">
          <button
            onClick={onCancel}
            className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            className="rounded-2xl bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
