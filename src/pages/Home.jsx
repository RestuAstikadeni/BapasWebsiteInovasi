import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HomeImage from "../assets/images/home-background.jpg";
import { newsList } from "../data/newsData";

import WajibLaporImg from "../assets/images/wajib-lapor.png";
import PermohonanIzinImg from "../assets/images/permohonan-izin.png";
import PencabutanIntegrasiImg from "../assets/images/pencabutan-integrasi.png";
import LaporanPengaduanImg from "../assets/images/laporan-pengaduan.png";


import Album1 from "../assets/images/news/news-1.jpg";
import Album2 from "../assets/images/news/news-2.jpg";
import Album3 from "../assets/images/news/news-3.jpg";
import Album4 from "../assets/images/news/news-4.jpg";
import Album5 from "../assets/images/news/news-5.jpg";
import Album6 from "../assets/images/news/news-6.jpg";

const services = [
  {
    title: "Wajib Lapor",
    image: WajibLaporImg,
    link: "https://forms.gle/7WtrwykWPH4j3YzL8",
  },
  {
    title: "Pengaduan",
    image: LaporanPengaduanImg,
    link: "https://forms.gle/DMLAtwaWUWyVQ7oH9",
  },
];

const albumItems = [
  { image: Album1, title: "Kegiatan Bapas Mataram" },
  { image: Album2, title: "Pelayanan Klien Pemasyarakatan" },
  { image: Album3, title: "Kegiatan Pembimbingan" },
  { image: Album4, title: "Kegiatan Litmas" },
  { image: Album5, title: "Kegiatan Informasi Layanan" },
  { image: Album6, title: "Kegiatan Wajib Lapor" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const getNewsImage = (news) => {
  return news.image || news.images?.[0] || "";
  
};

export default function Home() {
  return (
    <div className="w-full space-y-10 bg-background text-primary md:space-y-20">
      {/* ================= WELCOME SECTION ================= */}
      <section className="relative h-[45vh] min-h-[360px] overflow-hidden rounded-xl sm:h-[55vh] md:h-[80vh] md:min-h-[520px] md:rounded-2xl">
        <motion.img
          src={HomeImage}
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />

        <div className="absolute inset-0 bg-primary/70" />

        <motion.div
          className="relative z-10 flex h-full w-full items-end px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <div className="w-full max-w-3xl space-y-4 text-white">
            <h1 className="text-xl font-bold leading-[1.2] sm:text-4xl md:text-[3rem] md:leading-[1.1]">
              Balai Pemasyarakatan
              <br />
              Kelas I Mataram
            </h1>

            <p className="max-w-xl text-xs leading-6 text-blueSoft-light sm:text-sm sm:leading-5 md:text-[1rem] md:leading-6">
              Merupakan Unit Pelaksana Teknis yang melaksanakan pembimbingan,
              pendampingan, dan pengawasan Klien Pemasyarakatan untuk mendukung
              reintegrasi sosial di masyarakat.
            </p>

            <div className="mt-5">
              <Link
                to="/profile"
                className="inline-flex rounded-lg bg-white px-4 py-2 text-xs font-bold text-navy transition hover:bg-slate-200 sm:px-5 sm:py-3 sm:text-sm"
              >
                Selengkapnya...
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= UNIT SECTION ================= */}
      <motion.section
        className="px-4 sm:px-6 md:px-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
      >
        <div className="mb-10 text-center">
          <div className="my-2 text-center text-[2rem] font-bold leading-tight text-primary sm:text-[2.5rem] md:text-[2.5rem] ">
            LAYANAN KAMI
          </div>
          <div className="mx-auto h-1 w-24 rounded-full bg-amber-500 " />
        </div>

        <div
          className={`items-center align-middle flex flex-wrap justify-center gap-20 md:flex`}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
            >
              <Link
                to={service.link}
                className="group flex flex-col items-center text-center"
              >
                <div className="flex h-32 w-32 items-center justify-center rounded-xl border border-navy p-5 shadow-sm transition duration-300 group-hover:-translate-y-2 group-hover:shadow-lg sm:h-36 sm:w-36 md:h-40 md:w-40">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full scale-125 full object-contain transition duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-5 text-base font-bold leading-snug text-primary transition group-hover:text-secondary sm:text-lg md:text-xl">
                  {service.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= BERITA SECTION ================= */}
      <motion.section
        className="px-4 py-4 "
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="mb-10 text-center">
          <h2 className="my-2 text-center text-[2rem] font-bold leading-tight text-primary sm:text-[2.5rem]">
            BERITA TERBARU
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-amber-500 " />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {newsList.slice(0, 6).map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Link to={`/news/${item.id}`} className="block">
                <div className="h-56 w-full overflow-hidden bg-slate-100">
                  {getNewsImage(item) ? (
                    <img
                      src={getNewsImage(item)}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-200 text-sm font-medium text-slate-500">
                      Gambar tidak tersedia
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-primary-hover">
                    <span>📅 {item.date}</span>
                    <span>🗂️ {item.category}</span>
                  </div>

                  <h3 className="line-clamp-2 text-lg font-bold leading-snug text-primary transition group-hover:text-secondary md:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-primary-hover">
                    {item.description}
                  </p>

                  <div className="mt-5 inline-flex text-sm font-bold text-black hover:text-secondary transition">
                    Baca Selengkapnya...
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/news"
            className="inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-hover"
          >
            Lihat Semua Berita
          </Link>
        </div>
      </motion.section>

      {/* ================= ALBUM SECTION ================= */}
      <motion.section
        className="rounded-3xl bg-navy px-4 py-6 sm:px-6 md:px-16 md:py-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        \
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-center text-3xl font-bold text-primary text-white">
            GALERI FOTO
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-amber-500 " />
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-6">
          {albumItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative h-44 overflow-hidden md:h-64"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <img
                src={item.image}
                alt={item.title || `Album ${index + 1}`}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/30" />

              {item.title && (
                <p className="absolute bottom-3 left-3 text-sm font-bold text-white">
                  {item.title}
                </p>
              )}
            </motion.div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            to="/album"
            className="inline-flex rounded-lg bg-white px-6 py-3 text-sm font-bold text-primary transition hover:bg-slate-200"
          >
            Lihat Album
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
 