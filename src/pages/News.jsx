import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { newsList } from "../data/newsData";

const mainNews = newsList[0];
const otherNews = newsList.slice(1);

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

export default function News() {
  return (
    <main className="min-h-screen w-full bg-slate-50">
      <section className="w-full py-4">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
          >
            INDEKS BERITA
          </motion.h1>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 h-1 rounded-full bg-amber-500"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 text-base leading-7 text-slate-600"
          >
            Kumpulan berita, informasi, kegiatan, dan pembaruan terbaru dari
            BAPAS.
          </motion.p>
        </motion.div>

        {/* BERITA UTAMA */}
        <motion.article
          className="mb-12 overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-200 lg:grid lg:min-h-[520px] lg:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Link
            to={`/news/${mainNews.id}`}
            className="relative block h-[420px] overflow-hidden bg-slate-100 lg:h-full"
          >
            <motion.img
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.5 }}
              src={mainNews.image || mainNews.images?.[0]}
              alt={mainNews.title}
              className="h-full w-full object-cover"
            />

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute left-5 top-5 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white shadow"
            >
              {mainNews.category}
            </motion.div>
          </Link>

          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-3 text-sm font-medium text-slate-500"
            >
              {mainNews.date}
            </motion.p>

            <Link to={`/news/${mainNews.id}`}>
              <motion.h2
                whileHover={{ x: 5 }}
                className="text-2xl font-bold leading-tight text-slate-900 transition hover:text-primary sm:text-3xl lg:text-4xl"
              >
                {mainNews.title}
              </motion.h2>
            </Link>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-4 text-base leading-7 text-slate-600"
            >
              {mainNews.description}
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-fit"
            >
              <Link
                to={`/news/${mainNews.id}`}
                className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
              >
                Baca Berita Utama
              </Link>
            </motion.div>
          </div>
        </motion.article>

        {/* KUMPULAN BERITA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 flex items-center justify-between"
        >
          <h2 className="text-2xl font-bold text-slate-900">Berita Lainnya</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {otherNews.map((item, index) => (
            <motion.article
              key={item.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
            >
              <Link
                to={`/news/${item.id}`}
                className="relative block h-48 overflow-hidden bg-slate-100"
              >
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  src={item.image || item.images?.[0]}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary shadow-sm"
                >
                  {item.category}
                </motion.div>
              </Link>

              <div className="p-6">
                <p className="mb-2 text-sm text-slate-500">{item.date}</p>

                <Link to={`/news/${item.id}`}>
                  <motion.h3
                    whileHover={{ x: 4 }}
                    className="text-xl font-bold leading-snug text-slate-900 transition group-hover:text-primary"
                  >
                    {item.title}
                  </motion.h3>
                </Link>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-3 text-sm leading-6 text-slate-600"
                >
                  {item.description}
                </motion.p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Link
                    to={`/news/${item.id}`}
                    className="mt-5 inline-block rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary"
                  >
                    Baca Selengkapnya
                  </Link>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
