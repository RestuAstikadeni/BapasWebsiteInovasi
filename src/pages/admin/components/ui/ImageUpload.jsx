import React from "react";
import { ImagePlus } from "lucide-react";

export default function ImageUpload({
  label = "Upload Gambar",
  value,
  onChange,
}) {
  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      onChange(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-10 transition hover:border-primary hover:bg-primary/5">
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="hidden"
        />

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <ImagePlus size={30} />
        </div>

        <p className="mt-4 text-sm font-semibold text-slate-700">
          Klik untuk upload gambar
        </p>

        <p className="mt-1 text-xs text-slate-500">PNG, JPG, JPEG</p>
      </label>

      {value && (
        <div className="mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <img src={value} alt="Preview" className="h-64 w-full object-cover" />
        </div>
      )}
    </div>
  );
}
