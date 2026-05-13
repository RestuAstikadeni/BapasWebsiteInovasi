// src/admin/pages/KelolaAlbum.jsx

import React, { useState } from "react";
import SectionTitle from "./components/ui/SectionTitle";
import FormInput from "./components/ui/FormInput";
import ImageUpload from "./components/ui/ImageUpload";

export default function KelolaAlbum() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Album berhasil ditambahkan");
  };

  return (
    <div>
      <SectionTitle
        title="Kelola Album"
        subtitle="Kelola dokumentasi dan galeri foto"
      />

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-3xl bg-white p-8 shadow-sm"
      >
        <FormInput
          label="Judul Album"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <ImageUpload value={image} onChange={setImage} />

        <button className="rounded-2xl bg-primary px-6 py-3 font-semibold text-white">
          Simpan
        </button>
      </form>
    </div>
  );
}
