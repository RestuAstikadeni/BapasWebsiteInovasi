import React from "react";
import { Building, UserRound, Users } from "../components/ui/Icons";

export default function Organization() {
  const pejabat = [
    {
      nama: "I MADE KERTAYASA, S.Sos.",
      nip: "196912311992031003",
      jabatan: "Kepala Subbagian Tata Usaha",
      kategori: "Pejabat Struktural",
      image: "/images/pegawai/kasubag-tu.jpg",
    },
    {
      nama: "LEO PUTRA CAHYA, S.E",
      nip: "199008142012101001",
      jabatan: "Kepala Urusan Kepegawaian",
      kategori: "Pejabat Struktural",
      image: "/images/pegawai/kepegawaian.jpg",
    },
    {
      nama: "INDRIAWATI, S.H., M.M.",
      nip: "197307231993032001",
      jabatan: "Kepala Urusan Keuangan",
      kategori: "Pejabat Struktural",
      image: "/images/pegawai/keuangan.jpg",
    },
    {
      nama: "MASNIAR DAHLIA, S.H.",
      nip: "198510282005012001",
      jabatan: "Kepala Urusan Umum",
      kategori: "Pejabat Struktural",
      image: "/images/pegawai/umum.jpg",
    },
    {
      nama: "SELAMAT RIADI, S.H.",
      nip: "197912312007031001",
      jabatan: "Kepala Seksi Bimbingan Klien Dewasa",
      kategori: "Pejabat Struktural",
      image: "/images/pegawai/bkd.jpg",
    },
    {
      nama: "ROMANIA MARIA, S.Pd.",
      nip: "197108091992032001",
      jabatan: "Kepala Seksi Bimbingan Klien Anak",
      kategori: "Pejabat Struktural",
      image: "/images/pegawai/bka.jpg",
    },
    {
      nama: "RAJA ADIL ARDIANSYAH S., S.H.",
      nip: "197812022003121002",
      jabatan: "Kepala Subseksi Bimbingan Kemasyarakatan Klien Dewasa",
      kategori: "Pejabat Struktural",
      image: "/images/pegawai/sub-bkd.jpg",
    },
    {
      nama: "FAOZIAH, S.H.",
      nip: "199109212010122001",
      jabatan: "Kepala Subseksi Registrasi Bimbingan Klien Dewasa",
      kategori: "Pejabat Struktural",
      image: "/images/pegawai/sub-regdewasa.jpg",
    },
    {
      nama: "PURWANTO, S.H.",
      nip: "197003251990031002",
      jabatan: "Kepala Subseksi Bimbingan Kerja Bimbingan Klien Dewasa",
      kategori: "Pejabat Struktural",
      image: "/images/pegawai/sub-kerjadewasa.jpg",
    },
    {
      nama: "MOH. ZAINUL AHZAN, S.Pd.I",
      nip: "198401292010121001",
      jabatan: "Kepala Subseksi Bimbingan Kemasyarakatan Klien Anak",
      kategori: "Pejabat Struktural",
      image: "/images/pegawai/sub-bka.jpg",
    },
    {
      nama: "LISA FARADEBI HERNANI, S.Tr.Pas.",
      nip: "199806082023012001",
      jabatan: "Kepala Subseksi Registrasi Bimbingan Klien Anak",
      kategori: "Pejabat Struktural",
      image: "/images/pegawai/sub-reganak.jpg",
    },
    {
      nama: "MA'RUF",
      nip: "197910012001121001",
      jabatan: "Kepala Subseksi Bimbingan Kerja Bimbingan Klien Anak",
      kategori: "Pejabat Struktural",
      image: "/images/pegawai/sub-kerjaanak.jpg",
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

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pejabat.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-56 bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.nama}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/images/pegawai/default.jpg";
                    }}
                  />
                </div>

                <div className="p-4">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                    <UserRound size={14} />
                    {item.kategori}
                  </div>

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
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
