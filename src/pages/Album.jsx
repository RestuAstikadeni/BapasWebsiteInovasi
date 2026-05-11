import React, { useState } from "react";

// IMPORT GAMBAR
import Album1 from "../assets/images/album/album-1.jpg";
import Album2 from "../assets/images/album/album-2.jpg";
import Album3 from "../assets/images/album/album-3.jpg";
import Album4 from "../assets/images/album/album-4.jpg";
import Album5 from "../assets/images/album/album-5.jpg";
import Album6 from "../assets/images/album/album-6.jpg";
import Album7 from "../assets/images/album/album-7.jpg";
import Album8 from "../assets/images/album/album-8.jpg";
import DefaultImg from "../assets/images/album/default.jpg";

export default function Album() {
  const albumPhotos = [
    {
      id: 1,
      title: "Kegiatan Bapas Mataram",
      category: "Kegiatan",
      image: Album1,
    },
    {
      id: 2,
      title: "Pelayanan Klien Pemasyarakatan",
      category: "Pelayanan",
      image: Album2,
    },
    {
      id: 3,
      title: "Kegiatan Pembimbingan",
      category: "Pembimbingan",
      image: Album3,
    },
    {
      id: 4,
      title: "Koordinasi dan Sinergi",
      category: "Koordinasi",
      image: Album4,
    },
    {
      id: 5,
      title: "Kegiatan Internal Pegawai",
      category: "Internal",
      image: Album5,
    },
    {
      id: 6,
      title: "Sosialisasi dan Penyuluhan",
      category: "Sosialisasi",
      image: Album6,
    },
    {
      id: 7,
      title: "Pendampingan Klien",
      category: "Pendampingan",
      image: Album7,
    },
    {
      id: 8,
      title: "Dokumentasi Kantor",
      category: "Dokumentasi",
      image: Album8,
    },
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <main className="min-h-screen bg-slate-50 py-10 font-sans">
      {/* HEADER */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-3xl font-bold text-slate-900 md:text-5xl">
            Album Foto
          </h1>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-amber-500" />

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
            Dokumentasi kegiatan, pelayanan, pembimbingan, dan aktivitas Balai
            Pemasyarakatan Kelas I Mataram.
          </p>
        </div>
      </section>

      {/* GRID FOTO */}
      <section className="mt-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {albumPhotos.map((photo) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* IMAGE */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = DefaultImg;
                    }}
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h3 className="line-clamp-2 text-base font-bold leading-snug text-slate-900">
                    {photo.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 px-4 py-6">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-slate-800 shadow-md transition hover:bg-slate-100"
            >
              ✕
            </button>

            {/* IMAGE */}
            <div className="bg-slate-100">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[75vh] w-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = DefaultImg;
                }}
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <div className="mb-3 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                {selectedPhoto.category}
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {selectedPhoto.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
