import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { newsList } from "../data/newsData";

const mainNews = newsList[0];
const otherNews = newsList.slice(1);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function News() {
  return (
    <main className="w-full min-h-screen bg-slate-50">
      <section className="w-full py-10">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            INDEKS BERITA
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Kumpulan berita, informasi, kegiatan, dan pembaruan terbaru dari
            BAPAS.
          </p>
        </motion.div>

        {/* BERITA UTAMA */}
        <motion.article
          className="mb-12 overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-200 lg:grid lg:min-h-[520px] lg:grid-cols-2"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <Link
            to={`/news/${mainNews.id}`}
            className="relative block h-[420px] overflow-hidden bg-slate-100 lg:h-full"
          >
            <img
              src={mainNews.image || mainNews.images?.[0]}
              alt={mainNews.title}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />

            <div className="absolute left-5 top-5 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white shadow">
              {mainNews.category}
            </div>
          </Link>

          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="mb-3 text-sm font-medium text-slate-500">
              {mainNews.date}
            </p>

            <Link to={`/news/${mainNews.id}`}>
              <h2 className="text-2xl font-bold leading-tight text-slate-900 transition hover:text-primary sm:text-3xl lg:text-4xl">
                {mainNews.title}
              </h2>
            </Link>

            <p className="mt-4 text-base leading-7 text-slate-600">
              {mainNews.description}
            </p>

            <Link
              to={`/news/${mainNews.id}`}
              className="mt-6 w-fit rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              Baca Berita Utama
            </Link>
          </div>
        </motion.article>

        {/* KUMPULAN BERITA */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Berita Lainnya</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {otherNews.map((item, index) => (
            <motion.article
              key={item.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <Link
                to={`/news/${item.id}`}
                className="relative block h-48 overflow-hidden bg-slate-100"
              >
                <img
                  src={item.image || item.images?.[0]}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary shadow-sm">
                  {item.category}
                </div>
              </Link>

              <div className="p-6">
                <p className="mb-2 text-sm text-slate-500">{item.date}</p>

                <Link to={`/news/${item.id}`}>
                  <h3 className="text-xl font-bold leading-snug text-slate-900 transition group-hover:text-primary">
                    {item.title}
                  </h3>
                </Link>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <Link
                  to={`/news/${item.id}`}
                  className="mt-5 inline-block rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
