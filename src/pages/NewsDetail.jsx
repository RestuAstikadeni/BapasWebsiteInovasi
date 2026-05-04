import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { newsList } from "../data/newsData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function NewsDetail() {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(null);

  const news = newsList.find((item) => item.id === Number(id));

  if (!news) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
          <h1 className="text-2xl font-bold text-slate-900">
            Berita tidak ditemukan
          </h1>

          <p className="mt-3 text-slate-600">
            Berita yang kamu cari tidak tersedia atau sudah dipindahkan.
          </p>

          <Link
            to="/news"
            className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
          >
            Kembali ke Indeks Berita
          </Link>
        </div>
      </main>
    );
  }

  const galleryImages = news.images?.length ? news.images : [news.image];

  const relatedNews = newsList
    .filter((item) => item.id !== news.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="w-full py-10">
        <motion.div
          className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/news"
            className="mb-6 inline-flex items-center text-sm font-semibold text-primary transition hover:text-primary/80"
          >
            ← Kembali ke Indeks Berita
          </Link>

          <article className="overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-200">
            {/* FOTO UTAMA */}
            <div className="relative h-[320px] overflow-hidden bg-slate-100 sm:h-[420px] lg:h-[560px]">
              <img
                src={news.image}
                alt={news.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              <div className="absolute left-5 top-5 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white shadow">
                {news.category}
              </div>

              <div className="absolute bottom-5 left-5 right-5">
                <p className="mb-2 text-sm font-medium text-white/80">
                  {news.date}
                </p>

                <h1 className="max-w-4xl text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  {news.title}
                </h1>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <p className="max-w-4xl text-lg leading-8 text-slate-600">
                {news.description}
              </p>

              {/* GALERI FOTO THUMBNAIL */}
              <div className="mt-8">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Galeri Foto
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Dokumentasi kegiatan dan foto pendukung berita.
                    </p>
                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {galleryImages.length} Foto
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {galleryImages.map((image, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveImage(image)}
                      className={`group relative overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200 ${
                        index === 0
                          ? "sm:col-span-2 lg:col-span-2 lg:row-span-2"
                          : ""
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${news.title} - Foto ${index + 1}`}
                        className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                          index === 0 ? "h-72 lg:h-full" : "h-40"
                        }`}
                      />

                      <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/25" />

                      <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 opacity-0 shadow-sm transition group-hover:opacity-100">
                        Lihat Foto
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* ISI BERITA */}
              <div className="mt-10 space-y-5 border-t border-slate-200 pt-8">
                {news.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base leading-8 text-slate-700 sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* FOTO DALAM ISI BERITA */}
              {galleryImages.length > 1 && (
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {galleryImages.slice(1, 3).map((image, index) => (
                    <figure
                      key={index}
                      className="overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200"
                    >
                      <img
                        src={image}
                        alt={`${news.title} - Dokumentasi ${index + 1}`}
                        className="h-64 w-full object-cover"
                      />

                      <figcaption className="bg-white px-5 py-4 text-sm text-slate-500">
                        Dokumentasi kegiatan {news.title}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </article>

          {/* BERITA TERKAIT */}
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              Berita Terkait
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {relatedNews.map((item) => (
                <Link
                  key={item.id}
                  to={`/news/${item.id}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="h-40 overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <p className="text-xs font-semibold text-primary">
                      {item.category}
                    </p>

                    <h3 className="mt-2 line-clamp-2 text-base font-bold leading-snug text-slate-900 transition group-hover:text-primary">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">{item.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* MODAL PREVIEW FOTO */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 px-4 py-6"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow"
          >
            Tutup
          </button>

          <img
            src={activeImage}
            alt="Preview berita"
            className="max-h-[85vh] max-w-5xl rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
