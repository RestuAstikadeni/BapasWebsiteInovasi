import React, { useState } from "react";
import { Image, X } from "../components/ui/Icons";

export default function Album() {
  const albumPhotos = [
    {
      id: 1,
      title: "Kegiatan Bapas Mataram",
      category: "Kegiatan",
      image: "/images/album/album-1.jpg",
    },
    {
      id: 2,
      title: "Pelayanan Klien Pemasyarakatan",
      category: "Pelayanan",
      image: "/images/album/album-2.jpg",
    },
    {
      id: 3,
      title: "Kegiatan Pembimbingan",
      category: "Pembimbingan",
      image: "/images/album/album-3.jpg",
    },
    {
      id: 4,
      title: "Koordinasi dan Sinergi",
      category: "Koordinasi",
      image: "/images/album/album-4.jpg",
    },
    {
      id: 5,
      title: "Kegiatan Internal Pegawai",
      category: "Internal",
      image: "/images/album/album-5.jpg",
    },
    {
      id: 6,
      title: "Sosialisasi dan Penyuluhan",
      category: "Sosialisasi",
      image: "/images/album/album-6.jpg",
    },
    {
      id: 7,
      title: "Pendampingan Klien",
      category: "Pendampingan",
      image: "/images/album/album-7.jpg",
    },
    {
      id: 8,
      title: "Dokumentasi Kantor",
      category: "Dokumentasi",
      image: "/images/album/album-8.jpg",
    },
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <section className="bg-navy px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500">
            <Image size={34} />
          </div>

          <h1 className="mb-4 text-3xl font-bold md:text-5xl">Album Foto</h1>

          <p className="mx-auto max-w-2xl leading-relaxed text-blue-100">
            Dokumentasi kegiatan, pelayanan, pembimbingan, dan aktivitas Bapas
            Kelas I Mataram.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h2 className="mb-3 text-3xl font-bold text-slate-900">
              Semua Foto
            </h2>

            <p className="max-w-2xl text-slate-600">
              Kumpulan dokumentasi foto Bapas Kelas I Mataram.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {albumPhotos.map((photo) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/images/album/default.jpg";
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100" />

                  <div className="absolute left-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white">
                    {photo.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold leading-snug text-slate-900">
                    {photo.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedPhoto && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 px-4 py-6">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition hover:bg-slate-100"
              aria-label="Tutup"
            >
              <X size={22} />
            </button>

            <div className="bg-slate-100">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[75vh] w-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/images/album/default.jpg";
                }}
              />
            </div>

            <div className="p-6">
              <div className="mb-3 inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
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
