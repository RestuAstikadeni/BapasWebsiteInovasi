import React from "react";
import ServiceBanner from "../assets/images/service-banner.jpg";

export default function Service() {
  const services = [
    {
      id: 1,
      title: "Pelayanan Pembuatan Litmas Anak",
      description:
        "Layanan penyusunan Penelitian Kemasyarakatan (Litmas) Anak untuk kebutuhan proses peradilan, diversi, pembinaan, dan rekomendasi hukum.",
      icon: "📄",
      color: "bg-blue-50 border-blue-100 text-blue-600",
    },
    {
      id: 2,
      title: "Pelayanan Pembuatan Litmas Dewasa",
      description:
        "Pembuatan laporan Litmas Dewasa sebagai bahan pertimbangan dalam proses peradilan dan program pembinaan klien pemasyarakatan.",
      icon: "🗂️",
      color: "bg-indigo-50 border-indigo-100 text-indigo-600",
    },
    {
      id: 3,
      title: "Pelayanan Bimbingan Klien Dewasa",
      description:
        "Pelaksanaan pembimbingan kepribadian dan kemandirian bagi klien dewasa yang menjalani program integrasi.",
      icon: "👥",
      color: "bg-amber-50 border-amber-100 text-amber-600",
    },
    {
      id: 4,
      title: "Pelayanan Pemberian Izin Klien ke Luar Kota",
      description:
        "Layanan pengajuan izin bepergian keluar kota bagi klien pemasyarakatan sesuai ketentuan yang berlaku.",
      icon: "🛣️",
      color: "bg-emerald-50 border-emerald-100 text-emerald-600",
    },
    {
      id: 5,
      title: "Pelayanan Pelimpahan Bimbingan Klien",
      description:
        "Layanan administrasi pelimpahan bimbingan klien pemasyarakatan ke Balai Pemasyarakatan lain sesuai wilayah domisili.",
      icon: "📬",
      color: "bg-cyan-50 border-cyan-100 text-cyan-600",
    },
    {
      id: 6,
      title: "Pelayanan Izin Klien ke Luar Negeri",
      description:
        "Layanan permohonan izin bepergian ke luar negeri bagi klien pemasyarakatan berdasarkan ketentuan hukum yang berlaku.",
      icon: "✈️",
      color: "bg-sky-50 border-sky-100 text-sky-600",
    },
    {
      id: 7,
      title: "Pelayanan Pendampingan ABH",
      description:
        "Pendampingan terhadap Anak yang Berhadapan dengan Hukum (ABH) pada setiap tahapan proses peradilan pidana anak.",
      icon: "🤝",
      color: "bg-rose-50 border-rose-100 text-rose-600",
    },
    {
      id: 8,
      title: "Pelayanan Konseling Klien Anak",
      description:
        "Layanan konseling dan pembinaan psikososial bagi klien anak guna mendukung reintegrasi sosial yang positif.",
      icon: "💬",
      color: "bg-yellow-50 border-yellow-100 text-yellow-600",
    },
    {
      id: 9,
      title: "Pelayanan Bimbingan Klien Anak",
      description:
        "Pelaksanaan program pembimbingan dan pengawasan terhadap klien anak selama menjalani masa integrasi.",
      icon: "🧒",
      color: "bg-lime-50 border-lime-100 text-lime-600",
    },
    {
      id: 10,
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
        <div className=" items-center mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
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
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Daftar Layanan</h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-amber-500" />

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Berikut merupakan layanan utama yang tersedia pada Balai
            Pemasyarakatan Kelas I Mataram.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border text-2xl ${service.color}`}
              >
                {service.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold leading-snug text-slate-900 group-hover:text-primary">
                {service.title}
              </h3>

              <p className="mb-6 flex-grow leading-relaxed text-slate-600">
                {service.description}
              </p>

              <div className="mt-auto inline-flex w-fit items-center rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700">
                Gratis
              </div>
            </div>
          ))}
        </div>
      </main>

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
