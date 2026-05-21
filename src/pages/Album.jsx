import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

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
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900 md:text-5xl"
          >
            Album Foto
          </motion.h1>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto mt-5 h-1 rounded-full bg-amber-500"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 md:text-base"
          >
            Dokumentasi kegiatan, pelayanan, pembimbingan, dan aktivitas Balai
            Pemasyarakatan Kelas I Mataram.
          </motion.p>
        </div>
      </motion.section>

      {/* GRID FOTO */}
      <section className="mt-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {albumPhotos.map((photo, index) => (
              <motion.button
                key={photo.id}
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm"
              >
                {/* IMAGE */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    src={photo.image}
                    alt={photo.title}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = DefaultImg;
                    }}
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  {/* CATEGORY */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.2 + index * 0.05,
                    }}
                    viewport={{ once: true }}
                    className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-700 shadow-sm"
                  >
                    {photo.category}
                  </motion.div>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <motion.h3
                    whileHover={{ x: 4 }}
                    className="line-clamp-2 text-base font-bold leading-snug text-slate-900"
                  >
                    {photo.title}
                  </motion.h3>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 px-4 py-6"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <motion.button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                whileHover={{ scale: 1.08, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-slate-800 shadow-md transition hover:bg-slate-100"
              >
                ✕
              </motion.button>

              {/* IMAGE */}
              <div className="bg-slate-100">
                <motion.img
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
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
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-3 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700"
                >
                  {selectedPhoto.category}
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold text-slate-900"
                >
                  {selectedPhoto.title}
                </motion.h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
