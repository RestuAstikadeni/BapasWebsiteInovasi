import React from "react";
import { Building, UserRound, Users } from "../components/ui/Icons";

export default function Organization() {
  const pejabat = [
    {
      nama: "Nama Kepala Bapas",
      jabatan: "Kepala Bapas Kelas I Mataram",
      kategori: "Pejabat Struktural",
      image: "/images/pegawai/kepala-bapas.jpg",
    },
    {
      nama: "Nama Pejabat",
      jabatan: "Kepala Sub Bagian Tata Usaha",
      kategori: "Pejabat Struktural",
      image: "/images/pegawai/kasubag-tu.jpg",
    },
    {
      nama: "Nama Pejabat",
      jabatan: "Kepala Urusan Kepegawaian",
      kategori: "Pejabat Struktural",
      image: "/images/pegawai/kepegawaian.jpg",
    },
    {
      nama: "Nama Pejabat",
      jabatan: "Kepala Urusan Keuangan",
      kategori: "Pejabat Struktural",
      image: "/images/pegawai/keuangan.jpg",
    },
    {
      nama: "Nama Pejabat",
      jabatan: "Kepala Urusan Umum",
      kategori: "Pejabat Struktural",
      image: "/images/pegawai/umum.jpg",
    },
  ];

  const pegawai = [
    {
      nama: "Nama Pegawai",
      jabatan: "Pembimbing Kemasyarakatan",
      kategori: "Pegawai",
      image: "/images/pegawai/pegawai-1.jpg",
    },
    {
      nama: "Nama Pegawai",
      jabatan: "Pembimbing Kemasyarakatan",
      kategori: "Pegawai",
      image: "/images/pegawai/pegawai-2.jpg",
    },
    {
      nama: "Nama Pegawai",
      jabatan: "Staff Tata Usaha",
      kategori: "Pegawai",
      image: "/images/pegawai/pegawai-3.jpg",
    },
    {
      nama: "Nama Pegawai",
      jabatan: "Staff Administrasi",
      kategori: "Pegawai",
      image: "/images/pegawai/pegawai-4.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <section className="bg-navy px-4 py-10 text-white sm:px-6 lg:px-8 rounded-3xl">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
              Kepala Bapas Kelas I Mataram
            </h1>

            <p className="mb-6 max-w-2xl leading-relaxed text-blue-100">
              Profil pimpinan Bapas Kelas I Mataram yang memimpin pelaksanaan
              tugas, fungsi, pembimbingan, pendampingan, pengawasan, dan
              pelayanan pemasyarakatan.
            </p>

            <div className=" mb-6 rounded-2xl backdrop-blur">
              <h2 className="mb-2 text-2xl font-bold text-white">Pendidikan</h2>
              <p className="text-white">awdawd</p>
            </div>
            <div className="rounded-2xl backdrop-blur">
              <h2 className="mb-2 text-2xl font-bold text-white">Pendidikan</h2>
              <p className="text-white">awdawd</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl">
              <img
                src={pejabat[0].image}
                alt={pejabat[0].nama}
                className="h-[420px] w-full rounded-2xl object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/images/pegawai/default.jpg";
                }}
              />

              <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-navy/90 p-5 text-white backdrop-blur">
                <h3 className="text-xl font-bold">{pejabat[0].nama}</h3>
                <p className="text-sm text-blue-100">{pejabat[0].jabatan}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h2 className="mb-3 text-3xl font-bold text-slate-900">
              Pejabat Struktural
            </h2>
            <p className="max-w-2xl text-slate-600">
              Informasi pejabat struktural Bapas Kelas I Mataram.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pejabat.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-72 bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.nama}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/images/pegawai/default.jpg";
                    }}
                  />
                </div>

                <div className="p-6">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                    <UserRound size={14} />
                    {item.kategori}
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-slate-900">
                    {item.nama}
                  </h3>

                  <p className="leading-relaxed text-slate-600">
                    {item.jabatan}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h2 className="mb-3 text-3xl font-bold text-slate-900">Pegawai</h2>
            <p className="max-w-2xl text-slate-600">
              Daftar pegawai Bapas Kelas I Mataram.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pegawai.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-5 h-40 w-40 overflow-hidden rounded-full bg-slate-200">
                  <img
                    src={item.image}
                    alt={item.nama}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/images/pegawai/default.jpg";
                    }}
                  />
                </div>

                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
                  <Users size={14} />
                  {item.kategori}
                </div>

                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  {item.nama}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600">
                  {item.jabatan}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
