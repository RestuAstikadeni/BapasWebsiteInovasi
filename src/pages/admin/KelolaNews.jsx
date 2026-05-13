// src/admin/pages/KelolaNews.jsx

import React, { useState } from "react";
import SectionTitle from "./components/ui/SectionTitle";
import FormInput from "./components/ui/FormInput";
import FormTextarea from "./components/ui/FormTextarea";
import ImageUpload from "./components/ui/ImageUpload";

export default function KelolaNews() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Berita berhasil ditambahkan");
  };

  return (
    <div>
      <SectionTitle title="Kelola News" subtitle="Tambah dan edit berita" />

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-3xl bg-white p-8 shadow-sm"
      >
        <FormInput
          label="Judul Berita"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <FormTextarea
          label="Isi Berita"
          rows={8}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <ImageUpload value={image} onChange={setImage} />

        <button className="rounded-2xl bg-primary px-6 py-3 font-semibold text-white">
          Publish
        </button>
      </form>
    </div>
  );
}
