import React from "react";
import { motion } from "framer-motion";
import { Building, UserRound, Users } from "../components/ui/Icons";

// IMPORT IMAGE
import Kabapas from "../assets/images/pegawai/kabapas.png";
import Kasiklienanak from "../assets/images/pegawai/kasiklienanak.png";
import Kasikliewndewasa from "../assets/images/pegawai/kasikliendewasa.png";
import Kasubagtu from "../assets/images/pegawai/kasubagtu.png";
import Kasubbimanak from "../assets/images/pegawai/kasubbimanak.png";
import Kasubbimdewasa from "../assets/images/pegawai/kasubbimdewasa.png";
import Kasubkeranak from "../assets/images/pegawai/kasubkeranak.png";
import Kasubkerdewasa from "../assets/images/pegawai/kasubkerdewasa.png";
import Kasubregisanak from "../assets/images/pegawai/kasubregisanak.png";
import Kasubregisdewasa from "../assets/images/pegawai/kasubregisdewasa.png";
import Kaurkeuangan from "../assets/images/pegawai/kaurkeuangan.png";
import Kaurpegawai from "../assets/images/pegawai/kaurpegawai.png";
import Kaurumum from "../assets/images/pegawai/kaurumum.png";

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

export default function Organization() {
  const kabapas = {
    nama: "ARIMIN, Bc.IP., S.Pd.",
    nip: "196912311993031001",
    jabatan: "Kepala Bapas Kelas I Mataram",
    pendidikan: "Sarjana Sosial",
    pengalaman:
      "Memimpin berbagai program pembimbingan dan pelayanan klien pemasyarakatan.",
    image: Kabapas,
  };

  const pejabat = [
    {
      nama: "I MADE KERTAYASA, S.Sos.",
      nip: "196912311992031003",
      jabatan: "Kepala Subbagian Tata Usaha",
      kategori: "Pejabat Struktural",
      image: Kasubagtu,
    },
    {
      nama: "LEO PUTRA CAHYA, S.E",
      nip: "199008142012101001",
      jabatan: "Kepala Urusan Kepegawaian",
      kategori: "Pejabat Struktural",
      image: Kaurpegawai,
    },
    {
      nama: "INDRIAWATI, S.H., M.M.",
      nip: "197307231993032001",
      jabatan: "Kepala Urusan Keuangan",
      kategori: "Pejabat Struktural",
      image: Kaurkeuangan,
    },
    {
      nama: "MASNIAR DAHLIA, S.H.",
      nip: "198510282005012001",
      jabatan: "Kepala Urusan Umum",
      kategori: "Pejabat Struktural",
      image: Kaurumum,
    },
    {
      nama: "SELAMAT RIADI, S.H.",
      nip: "197912312007031001",
      jabatan: "Kepala Seksi Bimbingan Klien Dewasa",
      kategori: "Pejabat Struktural",
      image: Kasikliewndewasa,
    },
    {
      nama: "ROMANIA MARIA, S.Pd.",
      nip: "197108091992032001",
      jabatan: "Kepala Seksi Bimbingan Klien Anak",
      kategori: "Pejabat Struktural",
      image: Kasiklienanak,
    },
    {
      nama: "RAJA ADIL ARDIANSYAH S., S.H.",
      nip: "197812022003121002",
      jabatan: "Kepala Subseksi Bimbingan Kemasyarakatan Klien Dewasa",
      kategori: "Pejabat Struktural",
      image: Kasubbimdewasa,
    },
    {
      nama: "FAOZIAH, S.H.",
      nip: "199109212010122001",
      jabatan: "Kepala Subseksi Registrasi Bimbingan Klien Dewasa",
      kategori: "Pejabat Struktural",
      image: Kasubregisdewasa,
    },
    {
      nama: "PURWANTO, S.H.",
      nip: "197003251990031002",
      jabatan: "Kepala Subseksi Bimbingan Kerja Bimbingan Klien Dewasa",
      kategori: "Pejabat Struktural",
      image: Kasubkerdewasa,
    },
    {
      nama: "MOH. ZAINUL AHZAN, S.Pd.I",
      nip: "198401292010121001",
      jabatan: "Kepala Subseksi Bimbingan Kemasyarakatan Klien Anak",
      kategori: "Pejabat Struktural",
      image: Kasubbimanak,
    },
    {
      nama: "LISA FARADEBI HERNANI, S.Tr.Pas.",
      nip: "199806082023012001",
      jabatan: "Kepala Subseksi Registrasi Bimbingan Klien Anak",
      kategori: "Pejabat Struktural",
      image: Kasubregisanak,
    },
    {
      nama: "MA'RUF",
      nip: "197910012001121001",
      jabatan: "Kepala Subseksi Bimbingan Kerja Bimbingan Klien Anak",
      kategori: "Pejabat Struktural",
      image: Kasubkeranak,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* HERO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-navy rounded-3xl px-4 py-10 text-white sm:px-6 lg:px-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-4 grid-span-full text-3xl font-bold leading-tight md:text-5xl"
        >
          Kepala Balai Pemasyarakatan Kelas I Mataram
        </motion.h1>

        <div className="mx-auto grid max-w-7xl lg:gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="mb-6 max-w-2xl leading-relaxed text-blue-100">
              Profil pimpinan Balai Pemasyarakatan Kelas I Mataram yang memimpin
              pelaksanaan tugas, fungsi, pembimbingan, pendampingan, pengawasan,
              dan pelayanan pemasyarakatan.
            </p>

            <div className="mb-6 rounded-3xl backdrop-blur">
              <h2 className="mb-4 text-2xl font-bold text-white">
                Riwayat Pendidikan
              </h2>

              <ul className="space-y-3 text-sm text-white">
                {[
                  {
                    title: "S1 – Universitas Negeri Manado",
                    desc: "Pendidikan Luar Sekolah • Sulawesi Utara",
                  },
                  {
                    title: "D3 – Akademi Ilmu Pemasyarakatan (AKIP)",
                    desc: "Ilmu Pemasyarakatan • DKI Jakarta",
                  },
                  {
                    title: "SMA",
                    desc: "Nusa Tenggara Barat",
                  },
                  {
                    title: "SMPN 1 Narmada",
                    desc: "Nusa Tenggara Barat",
                  },
                  {
                    title: "SDN No 1 Narmada",
                    desc: "Nusa Tenggara Barat",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 rounded-2xl bg-white/10 p-3"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-yellow-400"></span>

                    <div>
                      <p className="font-semibold">{item.title}</p>

                      <p className="text-xs text-blue-100">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* FOTO UTAMA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl lg:mt-6"
            >
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
                src={kabapas.image}
                alt={kabapas.nama}
                className="h-[420px] w-full rounded-2xl object-cover"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute bottom-8 left-8 right-8 rounded-2xl bg-navy/90 p-5 text-white backdrop-blur"
              >
                <h3 className="text-xl font-bold">{kabapas.nama}</h3>

                <p className="text-sm text-blue-100">{kabapas.jabatan}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* PEJABAT */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-3 text-3xl font-bold text-slate-900"
            >
              Pejabat Struktural
            </motion.h2>

            <p className="max-w-2xl text-slate-600">
              Informasi pejabat struktural Bapas Kelas I Mataram.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pejabat.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.2 },
                }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="h-56 overflow-hidden bg-slate-100">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={item.image}
                    alt={item.nama}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700"
                  >
                    <UserRound size={14} />
                    {item.kategori}
                  </motion.div>

                  <h3 className="mb-1 text-base font-bold leading-snug text-slate-900">
                    {item.nama}
                  </h3>

                  <p className="mb-2 text-sm font-medium text-blue-700">
                    NIP. {item.nip}
                  </p>

                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.jabatan}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
