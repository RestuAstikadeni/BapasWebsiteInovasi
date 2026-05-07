import React from "react";
import OfficeImg from "../assets/images/home-background.jpg";
import { Link } from "react-router-dom";
import StrukturOrganisasiImg from "../assets/images/struktur-organisasi.png";
import {
  Building,
  CheckCircle,
  MapPin,
  Target,
  FileText,
  ShieldCheck,
} from "../components/ui/Icons";

export default function Profile() {
  const fungsiBapas = [
    "Melaksanakan Penelitian Kemasyarakatan (LITMAS) untuk bahan peradilan dan untuk pembinaan dalam Lembaga Pemasyarakatan serta Pembinaan Klien BAPAS.",
    "Melaksanakan Registrasi klien Pemasyarakatan.",
    "Melakukan Bimbingan Kemasyarakatan dan Pengentasan Anak.",
    "Mengikuti sidang Peradilan Negeri dan sidang Tim Pengamat Pemasyarakatan (TPP) di Lembaga Pemasyarakatan sesuai dengan perundang-undangan yang berlaku.",
    "Memberikan bantuan bimbingan kepada bekas Narapidana, Anak Negara dan Klien Pemasyarakatan yang memerlukan.",
    "Melaksanakan Tata Usaha Balai Pemasyarakatan.",
  ];

  const misiList = [
    "Melaksanakan bimbingan terhadap Klien Pemasyarakatan.",
    "Meningkatkan profesionalisme petugas Bapas, khususnya Pembimbing Kemasyarakatan.",
  ];

  const wilayahKerja = [
    "Kota Mataram",
    "Kabupaten Lombok Barat",
    "Kabupaten Lombok Tengah",
    "Kabupaten Lombok Utara",
    "Kabupaten Lombok Timur",
  ];

  const stats = [
    { value: "2.206 m²", label: "Luas Lahan" },
    { value: "1.500 m²", label: "Luas Bangunan" },
    { value: "65", label: "Jumlah Pegawai" },
    { value: "1.683+", label: "Klien Pemasyarakatan" },
  ];

  const programSasaran = [
    "Mempersiapkan para klien menjadi tenaga kerja yang terampil untuk berwiraswasta dan mengisi lowongan kerja.",
    "Usaha mencari keluarga yang bersedia menampung dan mengasuh anak Negara yang telah berkelakuan baik.",
    "Usaha mencari badan-badan sosial yang bersedia mengasuh dan menampung anak Negara yang telah berkelakuan baik.",
    "Usaha mencari fasilitas untuk kepentingan atau kesejahteraan klien.",
    "Usaha memberikan penyuluhan kepada masyarakat untuk menghilangkan prasangka buruk atau stigma terhadap bekas narapidana dan anak Negara.",
    "Usaha menjalin sinergi dan kolaborasi antara Kementerian Imigrasi dan Pemasyarakatan dengan pemerintah daerah serta instansi terkait melalui Griya Abhipraya Mandalika Mataram.",
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <section
        id="profile"
        className="w-full px-4 py-4 sm:px-6 lg:px-8 lg:py-4"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-amber-500">
              Tentang Bapas Mataram
            </h3>

            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
              Apa itu Bapas Kelas I Mataram?
            </h2>

            <p className="mb-5 leading-relaxed text-slate-600">
              Balai Pemasyarakatan (BAPAS) Kelas I Mataram merupakan Unit
              Pelaksana Teknis di bawah naungan Kementerian Imigrasi dan
              Pemasyarakatan Republik Indonesia yang memiliki peran strategis
              dalam penyelenggaraan sistem pemasyarakatan. BAPAS melaksanakan
              tugas pembimbingan, pendampingan, pengawasan, serta penelitian
              kemasyarakatan terhadap Klien Pemasyarakatan.
            </p>

            <p className="mb-5 leading-relaxed text-slate-600">
              Secara historis, BAPAS berawal dari lembaga yang dikenal dengan
              nama Balai Bimbingan Kemasyarakatan dan Pengentasan Anak atau
              Balai BISPA. BISPA Mataram berdiri pada tahun 1981 dan kini telah
              berkembang menjadi Balai Pemasyarakatan Kelas I Mataram yang
              berlokasi di Jalan Kokok Segara No.06, Kelurahan Kekalik Jaya,
              Kecamatan Sekarbela, Kota Mataram, Nusa Tenggara Barat.
            </p>

            <p className="mb-5 leading-relaxed text-slate-600">
              Dalam sistem peradilan pidana terpadu, BAPAS memiliki peran
              penting dalam mendukung penerapan keadilan restoratif. BAPAS tidak
              berfungsi sebagai lembaga pemidanaan, melainkan sebagai institusi
              yang menitikberatkan pada proses pembinaan, reintegrasi sosial,
              serta pemulihan hubungan antara klien, keluarga, korban, dan
              masyarakat.
            </p>

            <p className="mb-5 leading-relaxed text-slate-600">
              Melalui Pembimbing Kemasyarakatan, BAPAS hadir dalam berbagai
              tahapan proses hukum, mulai dari penyusunan Penelitian
              Kemasyarakatan (Litmas), pendampingan Anak yang Berhadapan dengan
              Hukum, pembimbingan Klien Pemasyarakatan, hingga pengawasan
              terhadap klien yang menjalani program reintegrasi sosial seperti
              Pembebasan Bersyarat, Cuti Bersyarat, Cuti Menjelang Bebas, dan
              Asimilasi.
            </p>

            <p className="mb-8 leading-relaxed text-slate-600">
              BAPAS Kelas I Mataram juga terus membangun sinergi dengan aparat
              penegak hukum, pemerintah daerah, lembaga sosial, kelompok
              masyarakat, dan berbagai mitra strategis lainnya. Kolaborasi ini
              menjadi bagian penting dalam mendukung keberhasilan reintegrasi
              sosial, mengurangi stigma terhadap klien pemasyarakatan, serta
              mencegah pengulangan tindak pidana di tengah masyarakat.
            </p>

            <div className="grid grid-cols-2 gap-4 border-t border-slate-200 pt-8 sm:grid-cols-4">
              {stats.map((item, index) => (
                <div key={index}>
                  <div className="mb-1 text-2xl font-bold text-blue-700">
                    {item.value}
                  </div>
                  <div className="text-sm text-slate-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-navy p-8 text-white shadow-2xl">
              <img
                src={OfficeImg}
                alt="Kantor Bapas Kelas I Mataram"
                className="mb-6 h-72 w-full rounded-2xl object-cover"
              />
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={OfficeImg}
                  alt="Kantor Bapas Kelas I Mataram"
                  className="mb-6 h-64 w-full rounded-2xl object-cover"
                />
                <img
                  src={OfficeImg}
                  alt="Kantor Bapas Kelas I Mataram"
                  className="mb-6 h-64 w-full rounded-2xl object-cover"
                />
              </div>

              <h4 className="mb-3 text-2xl font-bold">
                Kantor Bapas Kelas I Mataram
              </h4>

              <p className="leading-relaxed text-blue-100">
                Jalan Kokok Segara No.06, Kelurahan Kekalik Jaya, Kecamatan
                Sekarbela, Kota Mataram, Nusa Tenggara Barat 83116.
              </p>
            </div>

            <div className="absolute -bottom-6 -left-6 -z-10 h-48 w-48 rounded-3xl bg-amber-400 opacity-50 blur-2xl" />
          </div>
        </div>
      </section>

      <section id="visi-misi" className="bg-navy py-10 text-white rounded-3xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Visi & Misi</h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-amber-500" />
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-700 bg-slate-800/50 p-8 md:p-12">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-600/20">
                <Target size={32} className="text-blue-400" />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-amber-400">Visi</h3>

              <p className="text-xl font-light italic leading-relaxed text-slate-300">
                “Terwujudnya Klien Pemasyarakatan yang mandiri, taat hukum,
                mempunyai harkat dan martabat, serta didukung oleh peningkatan
                sumber daya petugas Bapas.”
              </p>
            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-800/50 p-8 md:p-12">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-600/20">
                <FileText size={32} className="text-emerald-400" />
              </div>

              <h3 className="mb-6 text-2xl font-bold text-amber-400">Misi</h3>

              <ul className="space-y-4">
                {misiList.map((misi, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle
                      size={24}
                      className="mr-4 mt-0.5 shrink-0 text-emerald-400"
                    />
                    <span className="text-lg leading-relaxed text-slate-300">
                      {misi}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="tugas-pokok"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="h-full rounded-3xl border border-blue-100 bg-blue-50 p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white">
                <MapPin size={28} />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                Wilayah Kerja
              </h3>

              <p className="mb-6 text-slate-600">
                Bapas Kelas I Mataram melaksanakan tugas pemasyarakatan di
                wilayah hukum Pulau Lombok.
              </p>

              <ul className="space-y-3">
                {wilayahKerja.map((wilayah, idx) => (
                  <li
                    key={idx}
                    className="flex items-center rounded-lg border border-slate-100 bg-white p-3 font-medium text-slate-800 shadow-sm"
                  >
                    <div className="mr-3 h-2 w-2 rounded-full bg-amber-500" />
                    {wilayah}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-bold text-primary">
                Tugas Pokok
              </h3>

              <p className="mb-8 leading-relaxed text-slate-600">
                Tugas Balai Pemasyarakatan (BAPAS) adalah memberikan bimbingan
                kemasyarakatan dan pengentasan anak sesuai dengan Peraturan
                Perundang-undangan yang berlaku.
              </p>

              <h3 className="mb-5 text-2xl font-bold text-primary">
                Fungsi Bapas
              </h3>

              <ul className="space-y-4">
                {fungsiBapas.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      {index + 1}
                    </div>

                    <span className="leading-relaxed text-slate-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="program-sasaran" className="bg-white py-10 rounded-3xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Program dan Sasaran
            </h2>

            <p className="mx-auto max-w-2xl text-slate-600">
              Program dan sasaran yang ditempuh untuk mempersiapkan klien
              kembali ke tengah-tengah masyarakat.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programSasaran.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <ShieldCheck
                  size={22}
                  className="mt-0.5 shrink-0 text-blue-600"
                />
                <span className="font-medium leading-relaxed text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="struktur-organisasi"
        className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Struktur Organisasi
            </h2>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-amber-500" />
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
            <img
              src={StrukturOrganisasiImg}
              alt="Struktur Organisasi Bapas Kelas I Mataram"
              className="h-auto w-full rounded-2xl object-contain"
            />
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/organization"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-bold text-white shadow-md transition hover:bg-primary-hover hover:shadow-lg"
            >
              Selengkapnya
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
