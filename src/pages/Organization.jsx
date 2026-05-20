import React from "react";
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

            <div className="mb-6 rounded-2xl bg-white/10 p-5 backdrop-blur">
              <h2 className="mb-2 text-2xl font-bold text-white">Pendidikan</h2>

              <p className="text-white">
                Sarjana Sosial dan pengalaman panjang di bidang pemasyarakatan.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <h2 className="mb-2 text-2xl font-bold text-white">Pengalaman</h2>

              <p className="text-white">
                Memimpin berbagai program pembimbingan dan pelayanan klien
                pemasyarakatan.
              </p>
            </div>
          </div>

          {/* FOTO UTAMA */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl">
              <img
                src={kabapas.image}
                alt={kabapas.nama}
                className="h-[420px] w-full rounded-2xl object-cover"
              />

              <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-navy/90 p-5 text-white backdrop-blur">
                <h3 className="text-xl font-bold">{kabapas.nama}</h3>

                <p className="text-sm text-blue-100">{kabapas.jabatan}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PEJABAT */}
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
