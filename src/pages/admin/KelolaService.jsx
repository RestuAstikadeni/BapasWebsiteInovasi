// src/admin/pages/KelolaService.jsx

import React, { useState } from "react";
import SectionTitle from "./components/ui/SectionTitle";
import FormInput from "./components/ui/FormInput";
import FormTextarea from "./components/ui/FormTextarea";

export default function KelolaService() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Layanan berhasil disimpan");
  };

  return (
    <div>
      <SectionTitle
        title="Kelola Service"
        subtitle="Kelola daftar layanan Bapas"
      />

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-3xl bg-white p-8 shadow-sm"
      >
        <FormInput
          label="Nama Layanan"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <FormTextarea
          label="Deskripsi"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="rounded-2xl bg-primary px-6 py-3 font-semibold text-white">
          Simpan
        </button>
      </form>
    </div>
  );
}
