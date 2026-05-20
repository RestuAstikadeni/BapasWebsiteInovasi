import React from "react";
import ServiceBanner from "../assets/images/service-banner.jpg";
import { Link } from "react-router-dom";

export default function Service() {
  const services = [
    {
      id: 1,
      title: "Pelayanan Klien Anak",
      description:
        "Layanan terpadu meliputi pembuatan Litmas Anak, konseling klien anak, dan bimbingan klien anak untuk mendukung proses pembinaan, pendampingan, dan reintegrasi sosial Anak yang Berhadapan dengan Hukum (ABH).",
      icon: "🧒",
      color: "bg-blue-50 border-blue-100 text-blue-600",
      link: "/layanan/klien-anak",
    },
    {
      id: 2,
      title: "Pelayanan Klien Dewasa",
      description:
        "Layanan terpadu meliputi pembuatan Litmas Dewasa dan bimbingan klien dewasa sebagai bagian dari proses pembinaan dan pendampingan klien pemasyarakatan.",
      icon: "👥",
      color: "bg-indigo-50 border-indigo-100 text-indigo-600",
      link: "/layanan/klien-dewasa",
    },
    {
      id: 3,
      title: "Pelayanan Pemberian Izin Klien ke Luar Kota",
      description:
        "Layanan pengajuan izin bepergian keluar kota bagi klien pemasyarakatan sesuai ketentuan yang berlaku.",
      icon: "🛣️",
      color: "bg-emerald-50 border-emerald-100 text-emerald-600",
    },
    {
      id: 4,
      title: "Pelayanan Pelimpahan Bimbingan Klien",
      description:
        "Layanan administrasi pelimpahan bimbingan klien pemasyarakatan ke Balai Pemasyarakatan lain sesuai wilayah domisili.",
      icon: "📬",
      color: "bg-cyan-50 border-cyan-100 text-cyan-600",
    },
    {
      id: 5,
      title: "Pelayanan Izin Klien ke Luar Negeri",
      description:
        "Layanan permohonan izin bepergian ke luar negeri bagi klien pemasyarakatan berdasarkan ketentuan hukum yang berlaku.",
      icon: "✈️",
      color: "bg-sky-50 border-sky-100 text-sky-600",
    },
    {
      id: 6,
      title: "Pelayanan Pendampingan ABH",
      description:
        "Pendampingan terhadap Anak yang Berhadapan dengan Hukum (ABH) pada setiap tahapan proses peradilan pidana anak.",
      icon: "🤝",
      color: "bg-rose-50 border-rose-100 text-rose-600",
    },
    {
      id: 7,
      title: "Pelayanan Pencabutan Integrasi Klien Pemasyarakatan",
      description:
        "Penanganan administrasi pencabutan program integrasi bagi klien yang melakukan pelanggaran atau tidak memenuhi ketentuan.",
      icon: "⚠️",
      color: "bg-red-50 border-red-100 text-red-600",
    },
  ];

  const features = [
    {
      icon: "🛡️",
      title: "Gratis",
      desc: "Seluruh layanan tidak dipungut biaya.",
    },
    {
      icon: "⏱️",
      title: "Cepat & Tepat",
      desc: "Pelayanan dilakukan sesuai SOP yang berlaku.",
    },
    {
      icon: "🏅",
      title: "Profesional",
      desc: "Dilayani oleh Pembimbing Kemasyarakatan yang kompeten.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* HERO */}
      <section className="w-full flex items-center align-middle">
        <div className=" items-center mx-auto max-w-7xl py-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* IMAGE */}
            <div className="mx-auto w-full max-w-5xl">
              <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
                <img
                  src={ServiceBanner}
                  alt="Layanan Bapas Kelas I Mataram"
                  loading="lazy"
                  className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="mx-auto max-w-2xl text-center lg:text-left">
              <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
                Pelayanan Bapas
              </span>

              <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                Layanan Bapas Kelas I Mataram
              </h1>

              <p className="mt-6 text-base leading-7 text-slate-600 md:text-lg">
                Balai Pemasyarakatan Kelas I Mataram memberikan layanan
                pemasyarakatan secara profesional, transparan, dan tanpa
                dipungut biaya sesuai standar pelayanan pemasyarakatan.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:justify-start">
                <button className="rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-hover">
                  Hubungi Admin
                </button>

                <button className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100">
                  Lihat Layanan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services-list" className="mx-auto max-w-7xl  py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Daftar Layanan</h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-amber-500" />
        </div>

        {/* LAYANAN ANAK */}
        <section id="layanan-anak" className="mb-12 overflow-hidden rounded-3xl bg-white shadow-sm">
          <div className="bg-navy px-8 py-6 text-white">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-4xl backdrop-blur-sm">
                    🧒
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">Layanan Klien Anak</h3>

                    <p className="mt-1 text-blue-100">
                      Pelayanan khusus Anak yang Berhadapan dengan Hukum (ABH)
                    </p>
                  </div>
                </div>

                <p className="mt-2 text-blue-100">
                  Pelayanan khusus Anak yang Berhadapan dengan Hukum (ABH)
                  meliputi pendampingan, penelitian kemasyarakatan, dan
                  pembimbingan.
                </p>
              </div>
            </div>
          </div>

          <div className="px-8 py-8">
            <div className="space-y-4">
              {[
                {
                  title: "SOP Pendampingan Anak Dibawah 12 Tahun",
                  file: "SOP PENDAMPINGAN ANAK DIBAWAH 12 TAHUN.pdf",
                },
                {
                  title: "SOP Pendampingan Awal Anak di Tingkat Penyidikan",
                  file: "SOP PENDAMPINGAN AWAL ANAK DITINGKAT PENYIDIKAN.pdf",
                },
                {
                  title: "SOP Pendampingan Diversi pada Tahap Penuntutan",
                  file: "SOP PENDAMPINGAN DIVERSI PADA TAHAP PENUNTUTAN.pdf",
                },
                {
                  title: "SOP Pendampingan Diversi pada Tahap Penyidikan",
                  file: "SOP PENDAMPINGAN DIVERSI PADA TAHAP PENYIDIKAN.pdf",
                },
                {
                  title: "SOP Pendampingan Hasil Kesepakatan Diversi",
                  file: "SOP PENDAMPINGAN HASIL KESEPAKATAN DIVERSI.pdf",
                },
                {
                  title: "SOP Pendampingan Mediasi",
                  file: "SOP PENDAMPINGAN MEDIASI.pdf",
                },
                {
                  title: "SOP Pendampingan Pelaksanaan Putusan Pengadilan",
                  file: "SOP PENDAMPINGAN PELAKSANAAN PUTUSAN PENGADILAN.pdf",
                },
                {
                  title: "SOP Pendampingan Pemeriksaan Anak di Kejaksaan",
                  file: "SOP PENDAMPINGAN PEMERIKSAAN ANAK DI KEJAKSAAN PADA SAAT PELIMPAHAN BERKAS.pdf",
                },
                {
                  title: "SOP Pendampingan Sidang Pengadilan Anak",
                  file: "SOP PENDAMPINGAN SIDANG PENGADILAN ANAK.pdf",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-xl">
                      📄
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {item.title}
                      </h4>

                      <p className="text-sm text-slate-500">
                        Dokumen SOP layanan klien anak
                      </p>
                    </div>
                  </div>

                  <a
                    href={`/sop/anak/${item.file}`}
                    download
                    className="inline-flex items-center justify-center rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary"
                  >
                    Download SOP
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LAYANAN DEWASA */}
        <section id="layanan-dewasa" className="overflow-hidden rounded-3xl border border-indigo-100 bg-white shadow-sm">
          <div className="bg-navy px-8 py-6 text-white">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-4xl backdrop-blur-sm">
                    👨‍💼
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">Layanan Klien Dewasa</h3>

                    <p className="mt-1 text-indigo-100">
                      Pelayanan pembimbingan dan administrasi klien dewasa
                    </p>
                  </div>
                </div>

                <p className="mt-2 text-indigo-100">
                  Pelayanan pembimbingan dan administrasi klien dewasa sesuai
                  standar pelayanan pemasyarakatan.
                </p>
              </div>
            </div>
          </div>

          <div className="px-8 py-8">
            <div className="space-y-4">
              {[
                {
                  title:
                    "SOP Layanan Antar Gratis Klien Pulang Kampung (ANGKLUNG)",
                  file: "SOP LAYANAN ANTAR GRATIS KLIEN PULANG KAMPUNG (ANGKLUNG).pdf",
                },
                {
                  title: "SOP Pelaksanaan Bimbingan Kemandirian",
                  file: "SOP PELAKSANAAN BIMBINGAN KEMANDIRIAN.pdf",
                },
                {
                  title: "SOP Pelaksanaan Bimbingan Kepribadian Perorangan",
                  file: "SOP PELAKSANAAN BIMBINGAN KEPRIBADIAN PERORANGAN.pdf",
                },
                {
                  title: "SOP Pelaksanaan Bimbingan",
                  file: "SOP PELAKSANAAN BIMBINGAN.pdf",
                },
                {
                  title: "SOP Pelaksanaan Penerimaan Klien",
                  file: "SOP PELAKSANAAN PENERIMAAN KLIEN.pdf",
                },
                {
                  title: "SOP Pelaksanaan Putusan Tindakan",
                  file: "SOP PELAKSANAAN PUTUSAN TINDAKAN.pdf",
                },
                {
                  title: "SOP Pelimpahan Bimbingan",
                  file: "SOP PELIMPAHAN BIMBINGAN.pdf",
                },
                {
                  title: "SOP Pemberian Izin Klien ke Luar Negeri",
                  file: "SOP PEMBERIAN IJIN KLIEN KE LUAR NEGERI.pdf",
                },
                {
                  title: "SOP Pendaftaran Klien",
                  file: "SOP PENDAFTARAN KLIEN.pdf",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-xl">
                      📄
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {item.title}
                      </h4>

                      <p className="text-sm text-slate-500">
                        Dokumen SOP layanan klien dewasa
                      </p>
                    </div>
                  </div>

                  <a
                    href={`/sop/dewasa/${item.file}`}
                    download
                    className="inline-flex items-center justify-center rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary"
                  >
                    Download SOP
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* MAKLUMAT */}
      <section className="bg-blue-950 py-16 text-white rounded-3xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="rounded-full bg-blue-800 px-4 py-1 text-sm font-semibold text-blue-100">
                Maklumat Pelayanan
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
                Seluruh Layanan Tidak Dipungut Biaya
              </h2>

              <p className="mt-5 leading-relaxed text-blue-100">
                Balai Pemasyarakatan Kelas I Mataram berkomitmen memberikan
                pelayanan prima, profesional, transparan, dan bebas dari
                pungutan liar.
              </p>

              <div className="mt-8 rounded-2xl border border-blue-800 bg-blue-900/40 p-5 text-sm leading-relaxed text-blue-100">
                Berdasarkan:
                <br />
                KEPDIRJENPAS NOMOR: PAS-36.OT.02.02 TAHUN 2020
                <br />
                Tentang Standar Pelayanan Pemasyarakatan.
              </div>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start rounded-2xl border border-blue-800 bg-blue-900/40 p-5"
                >
                  <div className="mr-5 text-3xl">{feature.icon}</div>

                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {feature.title}
                    </h4>

                    <p className="mt-1 text-blue-200">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
