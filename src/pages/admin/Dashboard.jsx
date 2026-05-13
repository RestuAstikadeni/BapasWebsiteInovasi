import React from "react";
import {
  Newspaper,
  Images,
  Briefcase,
  Users,
  FolderKanban,
  ShieldCheck,
  Clock3,
  ArrowUpRight,
  UserRound,
  Settings,
  FileText,
  Activity,
  Database,
  Globe,
  Home,
} from "lucide-react";

import { Link } from "react-router-dom";

import SectionTitle from "./components/ui/SectionTitle";
import HomeImage from "../../assets/images/home-background.jpg";

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = React.useState("Kelola Home");
  const stats = [
    {
      title: "Total Berita",
      value: 12,
      desc: "Berita telah dipublikasikan",
      icon: Newspaper,
      color: "bg-blue-500",
    },
    {
      title: "Total Album",
      value: 28,
      desc: "Dokumentasi kegiatan",
      icon: Images,
      color: "bg-emerald-500",
    },
    {
      title: "Total Layanan",
      value: 7,
      desc: "Layanan aktif tersedia",
      icon: Briefcase,
      color: "bg-indigo-500",
    },
    {
      title: "Total Pejabat",
      value: 12,
      desc: "Data pejabat struktural",
      icon: Users,
      color: "bg-amber-500",
    },
  ];

  // MENU ADMIN SESUAI STRUKTUR FOLDER
  const menus = [
    {
      title: "Kelola Home",
      desc: "Edit banner dan halaman utama",
      icon: Home,
      color: "bg-sky-500",
      link: "/admin/kelola-home",
    },
    {
      title: "Kelola Profile",
      desc: "Edit visi misi dan informasi",
      icon: FolderKanban,
      color: "bg-rose-500",
      link: "/admin/kelola-profile",
    },
    {
      title: "Kelola Organisasi",
      desc: "Edit pejabat dan pegawai",
      icon: Users,
      color: "bg-amber-500",
      link: "/admin/kelola-organization",
    },
    {
      title: "Kelola Berita",
      desc: "Tambah dan edit berita website",
      icon: Newspaper,
      color: "bg-blue-500",
      link: "/admin/kelola-news",
    },
    {
      title: "Kelola Album",
      desc: "Upload dokumentasi dan galeri",
      icon: Images,
      color: "bg-emerald-500",
      link: "/admin/kelola-album",
    },
    {
      title: "Kelola Layanan",
      desc: "Atur seluruh layanan Bapas",
      icon: Briefcase,
      color: "bg-indigo-500",
      link: "/admin/kelola-service",
    },
    {
      title: "Kelola Klien Anak",
      desc: "Edit pelayanan klien anak",
      icon: UserRound,
      color: "bg-cyan-500",
      link: "/admin/kelola-klien-anak",
    },
    {
      title: "Kelola Klien Dewasa",
      desc: "Edit pelayanan klien dewasa",
      icon: FileText,
      color: "bg-violet-500",
      link: "/admin/kelola-klien-dewasa",
    },
    {
      title: "Pengaturan Website",
      desc: "Atur tampilan dan konfigurasi",
      icon: Settings,
      color: "bg-slate-700",
      link: "/admin/settings",
    },
  ];

  const activities = [
    {
      title: "Berita baru berhasil ditambahkan",
      time: "10 menit lalu",
    },
    {
      title: "Album dokumentasi diperbarui",
      time: "30 menit lalu",
    },
    {
      title: "Data layanan berhasil diubah",
      time: "1 jam lalu",
    },
    {
      title: "Profile website diperbarui",
      time: "2 jam lalu",
    },
    {
      title: "Data organisasi berhasil diperbarui",
      time: "3 jam lalu",
    },
  ];

  const quickInfo = [
    {
      title: "Framework",
      value: "React + Tailwind CSS",
      icon: Globe,
    },
    {
      title: "Penyimpanan",
      value: "Browser Local Storage",
      icon: Database,
    },
    {
      title: "Aktivitas",
      value: "Semua Sistem Normal",
      icon: Activity,
    },
  ];

  return (
    <div className="space-y-10">
      {/* STATS */}
      <section>
        <SectionTitle
          title="Dashboard Admim"
          subtitle="Ringkasan data konten website Bapas."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      {item.title}
                    </p>

                    <h2 className="mt-3 text-5xl font-black text-slate-900">
                      {item.value}
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">{item.desc}</p>
                  </div>

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg ${item.color}`}
                  >
                    <Icon size={30} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MENU */}
      <section>
        <SectionTitle
          title="Menu Pengelolaan"
          subtitle="Kelola seluruh modul dan konten website."
        />

        <div className="grid gap-6 xl:grid-cols-12">
          {/* SIDEBAR */}
          <div className="xl:col-span-3">
            <div className="sticky top-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-500">
                Navigasi Pengelolaan
              </h3>

              <div className="max-h-[700px] space-y-2 overflow-y-auto pr-2 custom-scrollbar">
                {menus.map((item, index) => {
                  const Icon = item.icon;
                  const active = activeMenu === item.title;

                  return (
                    <button
                      key={index}
                      onClick={() => setActiveMenu(item.title)}
                      className={`group flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left transition duration-200 ${
                        active ? "bg-primary text-white" : "hover:bg-slate-100"
                      }`}
                    >
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl text-white ${
                          active ? "bg-white/20" : item.color
                        }`}
                      >
                        <Icon size={20} />
                      </div>

                      <div>
                        <h4
                          className={`text-sm font-semibold ${
                            active ? "text-white" : "text-slate-800"
                          }`}
                        >
                          {item.title}
                        </h4>

                        <p
                          className={`text-xs ${
                            active ? "text-slate-200" : "text-slate-500"
                          }`}
                        >
                          Kelola data
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="xl:col-span-9">
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
              {/* HEADER */}
              <div className="border-b border-slate-200 px-7 py-5">
                <h3 className="text-2xl font-bold text-slate-900">
                  {activeMenu}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Form pengelolaan konten website.
                </p>
              </div>

              {/* FORM CONTENT */}
              <div className="p-7">
                {/* HOME */}
                {activeMenu === "Kelola Home" && (
                  <div className="space-y-8">
                    {/* PREVIEW */}
                    <div className="overflow-hidden rounded-3xl border border-slate-200">
                      <div className="relative h-[320px] w-full">
                        <img
                          src={HomeImage}
                          alt="Banner Preview"
                          className="h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-black/50" />

                        <div className="absolute bottom-0 left-0 z-10 p-8 text-white">
                          <h2 className="text-4xl font-black leading-tight">
                            Balai Pemasyarakatan
                            <br />
                            Kelas I Mataram
                          </h2>

                          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200">
                            Merupakan Unit Pelaksana Teknis yang melaksanakan
                            pembimbingan, pendampingan, dan pengawasan Klien
                            Pemasyarakatan untuk mendukung reintegrasi sosial di
                            masyarakat.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* FORM */}
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold text-slate-900">
                          Pengaturan Banner Home
                        </h3>

                        <p className="mt-2 text-sm text-slate-500">
                          Ubah judul, deskripsi, dan gambar banner halaman home.
                        </p>
                      </div>

                      <div className="space-y-7">
                        {/* JUDUL */}
                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Judul Banner
                          </label>

                          <input
                            type="text"
                            defaultValue="Balai Pemasyarakatan Kelas I Mataram"
                            placeholder="Masukkan judul banner"
                            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-800 outline-none transition focus:border-primary"
                          />
                        </div>

                        {/* DESKRIPSI */}
                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Deskripsi Banner
                          </label>

                          <textarea
                            rows="6"
                            defaultValue="Merupakan Unit Pelaksana Teknis yang melaksanakan pembimbingan, pendampingan, dan pengawasan Klien Pemasyarakatan untuk mendukung reintegrasi sosial di masyarakat."
                            placeholder="Masukkan deskripsi banner"
                            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 leading-relaxed text-slate-800 outline-none transition focus:border-primary"
                          />
                        </div>

                        {/* UPLOAD */}
                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Upload Foto Banner
                          </label>

                          <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-white p-8 text-center transition hover:border-primary">
                            <input
                              type="file"
                              accept="image/*"
                              className="mx-auto block text-sm text-slate-500"
                            />

                            <p className="mt-4 text-sm text-slate-500">
                              Upload gambar banner baru untuk halaman home
                            </p>
                          </div>
                        </div>

                        {/* BUTTON */}
                        <div className="flex flex-wrap gap-4 pt-4">
                          <button className="rounded-2xl bg-primary px-7 py-4 text-sm font-bold text-white transition hover:opacity-90">
                            Simpan Perubahan
                          </button>

                          <button className="rounded-2xl border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-700 transition hover:bg-slate-100">
                            Reset
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* PROFILE */}
                {activeMenu === "Kelola Profile" && (
                  <div className="space-y-8">
                    {/* HEADER */}
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                      <h3 className="text-2xl font-bold text-slate-900">
                        Pengaturan Halaman Profile
                      </h3>

                      <p className="mt-2 text-sm text-slate-500">
                        Kelola seluruh informasi profile Bapas Kelas I Mataram.
                      </p>
                    </div>

                    {/* TENTANG */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <h3 className="mb-6 text-xl font-bold text-slate-900">
                        Tentang Bapas
                      </h3>

                      <div className="space-y-6">
                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Judul Section
                          </label>

                          <input
                            type="text"
                            defaultValue="Apa itu Bapas Kelas I Mataram?"
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-primary"
                          />
                        </div>

                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Deskripsi Tentang Bapas
                          </label>

                          <textarea
                            rows="10"
                            placeholder="Masukkan deskripsi profile..."
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4 leading-relaxed outline-none focus:border-primary"
                          />
                        </div>

                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Upload Foto Kantor
                          </label>

                          <input
                            type="file"
                            className="w-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-5 py-6"
                          />
                        </div>
                      </div>
                    </div>

                    {/* STATISTIK */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <h3 className="mb-6 text-xl font-bold text-slate-900">
                        Statistik Profile
                      </h3>

                      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-slate-700">
                            Luas Lahan
                          </label>

                          <input
                            type="text"
                            defaultValue="2.206 m²"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-semibold text-slate-700">
                            Luas Bangunan
                          </label>

                          <input
                            type="text"
                            defaultValue="1.500 m²"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-semibold text-slate-700">
                            Jumlah Pegawai
                          </label>

                          <input
                            type="text"
                            defaultValue="65"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-semibold text-slate-700">
                            Jumlah Klien
                          </label>

                          <input
                            type="text"
                            defaultValue="1.683+"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3"
                          />
                        </div>
                      </div>
                    </div>

                    {/* VISI */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <h3 className="mb-6 text-xl font-bold text-slate-900">
                        Visi
                      </h3>

                      <textarea
                        rows="5"
                        placeholder="Masukkan visi..."
                        className="w-full rounded-2xl border border-slate-200 px-5 py-4 leading-relaxed outline-none focus:border-primary"
                      />
                    </div>

                    {/* MISI */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <div className="mb-6 flex items-center justify-between">
                        <h3 className="text-xl font-bold text-slate-900">
                          Misi
                        </h3>

                        <button className="rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white">
                          + Tambah Misi
                        </button>
                      </div>

                      <div className="space-y-4">
                        {[1, 2].map((item) => (
                          <textarea
                            key={item}
                            rows="3"
                            placeholder={`Misi ${item}`}
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                          />
                        ))}
                      </div>
                    </div>

                    {/* WILAYAH */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <div className="mb-6 flex items-center justify-between">
                        <h3 className="text-xl font-bold text-slate-900">
                          Wilayah Kerja
                        </h3>

                        <button className="rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white">
                          + Tambah Wilayah
                        </button>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        {[
                          "Kota Mataram",
                          "Kabupaten Lombok Barat",
                          "Kabupaten Lombok Tengah",
                        ].map((item, index) => (
                          <input
                            key={index}
                            type="text"
                            defaultValue={item}
                            className="rounded-xl border border-slate-200 px-4 py-3"
                          />
                        ))}
                      </div>
                    </div>

                    {/* FUNGSI BAPAS */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <div className="mb-6 flex items-center justify-between">
                        <h3 className="text-xl font-bold text-slate-900">
                          Fungsi Bapas
                        </h3>

                        <button className="rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white">
                          + Tambah Fungsi
                        </button>
                      </div>

                      <div className="space-y-4">
                        {[1, 2, 3].map((item) => (
                          <textarea
                            key={item}
                            rows="3"
                            placeholder={`Fungsi ${item}`}
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                          />
                        ))}
                      </div>
                    </div>

                    {/* PROGRAM SASARAN */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <div className="mb-6 flex items-center justify-between">
                        <h3 className="text-xl font-bold text-slate-900">
                          Program & Sasaran
                        </h3>

                        <button className="rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white">
                          + Tambah Program
                        </button>
                      </div>

                      <div className="space-y-4">
                        {[1, 2, 3].map((item) => (
                          <textarea
                            key={item}
                            rows="3"
                            placeholder={`Program ${item}`}
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                          />
                        ))}
                      </div>
                    </div>

                    {/* STRUKTUR ORGANISASI */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <h3 className="mb-6 text-xl font-bold text-slate-900">
                        Struktur Organisasi
                      </h3>

                      <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-10 text-center">
                        <input
                          type="file"
                          className="mx-auto block text-sm text-slate-500"
                        />

                        <p className="mt-4 text-sm text-slate-500">
                          Upload gambar struktur organisasi
                        </p>
                      </div>
                    </div>

                    {/* BUTTON */}
                    <div className="flex flex-wrap gap-4">
                      <button className="rounded-2xl bg-primary px-8 py-4 text-sm font-bold text-white transition hover:opacity-90">
                        Simpan Semua Perubahan
                      </button>

                      <button className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-700 transition hover:bg-slate-100">
                        Reset
                      </button>
                    </div>
                  </div>
                )}

                {/* ORGANISASI */}
                {activeMenu === "Kelola Organisasi" && (
                  <div className="space-y-8">
                    {/* HEADER */}
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                      <h3 className="text-2xl font-bold text-slate-900">
                        Pengaturan Halaman Organisasi
                      </h3>

                      <p className="mt-2 text-sm text-slate-500">
                        Kelola data kepala Bapas, pejabat struktural, dan
                        pegawai.
                      </p>
                    </div>

                    {/* KEPALA BAPAS */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <h3 className="mb-6 text-xl font-bold text-slate-900">
                        Kepala Bapas
                      </h3>

                      <div className="grid gap-8 lg:grid-cols-2">
                        {/* FORM */}
                        <div className="space-y-6">
                          <div>
                            <label className="mb-3 block text-sm font-bold text-slate-700">
                              Nama Kepala Bapas
                            </label>

                            <input
                              type="text"
                              defaultValue="I MADE KERTAYASA, S.Sos."
                              className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                            />
                          </div>

                          <div>
                            <label className="mb-3 block text-sm font-bold text-slate-700">
                              Jabatan
                            </label>

                            <input
                              type="text"
                              defaultValue="Kepala Subbagian Tata Usaha"
                              className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                            />
                          </div>

                          <div>
                            <label className="mb-3 block text-sm font-bold text-slate-700">
                              Deskripsi
                            </label>

                            <textarea
                              rows="6"
                              placeholder="Masukkan deskripsi kepala Bapas..."
                              className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                            />
                          </div>

                          <div>
                            <label className="mb-3 block text-sm font-bold text-slate-700">
                              Pendidikan
                            </label>

                            <textarea
                              rows="4"
                              placeholder="Masukkan riwayat pendidikan..."
                              className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                            />
                          </div>

                          <div>
                            <label className="mb-3 block text-sm font-bold text-slate-700">
                              Upload Foto Kepala Bapas
                            </label>

                            <input
                              type="file"
                              className="w-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-5 py-6"
                            />
                          </div>
                        </div>

                        {/* PREVIEW */}
                        <div className="overflow-hidden rounded-3xl bg-slate-100 p-5">
                          <img
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
                            alt="Preview"
                            className="h-[420px] w-full rounded-2xl object-cover"
                          />

                          <div className="mt-5">
                            <h3 className="text-2xl font-bold text-slate-900">
                              I MADE KERTAYASA, S.Sos.
                            </h3>

                            <p className="mt-2 text-primary">
                              Kepala Subbagian Tata Usaha
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* PEJABAT STRUKTURAL */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <div className="mb-6 flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">
                            Pejabat Struktural
                          </h3>

                          <p className="mt-1 text-sm text-slate-500">
                            Kelola seluruh data pejabat struktural.
                          </p>
                        </div>

                        <button className="rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-white">
                          + Tambah Pejabat
                        </button>
                      </div>

                      {/* TABLE */}
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-slate-50">
                            <tr>
                              <th className="px-5 py-4 text-left text-sm font-bold text-slate-600">
                                Foto
                              </th>

                              <th className="px-5 py-4 text-left text-sm font-bold text-slate-600">
                                Nama
                              </th>

                              <th className="px-5 py-4 text-left text-sm font-bold text-slate-600">
                                NIP
                              </th>

                              <th className="px-5 py-4 text-left text-sm font-bold text-slate-600">
                                Jabatan
                              </th>

                              <th className="px-5 py-4 text-right text-sm font-bold text-slate-600">
                                Aksi
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {[1, 2, 3, 4].map((item) => (
                              <tr
                                key={item}
                                className="border-t border-slate-100"
                              >
                                {/* FOTO */}
                                <td className="px-5 py-4">
                                  <img
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop"
                                    alt="pegawai"
                                    className="h-16 w-16 rounded-2xl object-cover"
                                  />
                                </td>

                                {/* NAMA */}
                                <td className="px-5 py-4">
                                  <input
                                    type="text"
                                    defaultValue="Nama Pejabat"
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3"
                                  />
                                </td>

                                {/* NIP */}
                                <td className="px-5 py-4">
                                  <input
                                    type="text"
                                    defaultValue="197912312007031001"
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3"
                                  />
                                </td>

                                {/* JABATAN */}
                                <td className="px-5 py-4">
                                  <input
                                    type="text"
                                    defaultValue="Kepala Seksi"
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3"
                                  />
                                </td>

                                {/* BUTTON */}
                                <td className="px-5 py-4 text-right">
                                  <div className="flex justify-end gap-3">
                                    <button className="rounded-xl bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                                      Edit
                                    </button>

                                    <button className="rounded-xl bg-red-50 px-4 py-2 text-sm font-bold text-red-700">
                                      Hapus
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* BUTTON SAVE */}
                    <div className="flex flex-wrap gap-4">
                      <button className="rounded-2xl bg-primary px-8 py-4 text-sm font-bold text-white">
                        Simpan Semua Perubahan
                      </button>

                      <button className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-700">
                        Reset
                      </button>
                    </div>
                  </div>
                )}

                {/* BERITA */}
                {activeMenu === "Kelola Berita" && (
                  <div className="space-y-8">
                    {/* HEADER */}
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900">
                            Pengaturan Berita
                          </h3>

                          <p className="mt-2 text-sm text-slate-500">
                            Kelola seluruh berita, kategori, thumbnail, dan
                            konten berita website.
                          </p>
                        </div>

                        <button className="rounded-2xl bg-primary px-6 py-4 text-sm font-bold text-white transition hover:opacity-90">
                          + Tambah Berita
                        </button>
                      </div>
                    </div>

                    {/* FORM BERITA */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-slate-900">
                          Form Berita
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Tambah atau edit berita website.
                        </p>
                      </div>

                      <div className="space-y-7">
                        {/* JUDUL */}
                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Judul Berita
                          </label>

                          <input
                            type="text"
                            placeholder="Masukkan judul berita..."
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-primary"
                          />
                        </div>

                        {/* GRID */}
                        <div className="grid gap-6 md:grid-cols-2">
                          {/* KATEGORI */}
                          <div>
                            <label className="mb-3 block text-sm font-bold text-slate-700">
                              Kategori Berita
                            </label>

                            <select className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-primary">
                              <option>Kegiatan</option>
                              <option>Informasi</option>
                              <option>Layanan</option>
                              <option>Pengumuman</option>
                            </select>
                          </div>

                          {/* TANGGAL */}
                          <div>
                            <label className="mb-3 block text-sm font-bold text-slate-700">
                              Tanggal Berita
                            </label>

                            <input
                              type="date"
                              className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-primary"
                            />
                          </div>
                        </div>

                        {/* DESKRIPSI */}
                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Deskripsi Singkat
                          </label>

                          <textarea
                            rows="4"
                            placeholder="Masukkan deskripsi singkat berita..."
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4 leading-relaxed outline-none focus:border-primary"
                          />
                        </div>

                        {/* ISI */}
                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Isi Berita
                          </label>

                          <textarea
                            rows="12"
                            placeholder="Masukkan isi lengkap berita..."
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4 leading-relaxed outline-none focus:border-primary"
                          />
                        </div>

                        {/* UPLOAD */}
                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Upload Thumbnail / Banner Berita
                          </label>

                          <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-10 text-center transition hover:border-primary">
                            <input
                              type="file"
                              accept="image/*"
                              className="mx-auto block text-sm text-slate-500"
                            />

                            <p className="mt-4 text-sm text-slate-500">
                              Upload gambar utama berita
                            </p>
                          </div>
                        </div>

                        {/* STATUS */}
                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Status Berita
                          </label>

                          <div className="flex flex-wrap gap-4">
                            <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-5 py-4">
                              <input
                                type="radio"
                                name="status"
                                defaultChecked
                              />
                              <span className="font-medium text-slate-700">
                                Publish
                              </span>
                            </label>

                            <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-5 py-4">
                              <input type="radio" name="status" />
                              <span className="font-medium text-slate-700">
                                Draft
                              </span>
                            </label>
                          </div>
                        </div>

                        {/* BUTTON */}
                        <div className="flex flex-wrap gap-4 pt-4">
                          <button className="rounded-2xl bg-primary px-8 py-4 text-sm font-bold text-white transition hover:opacity-90">
                            Simpan Berita
                          </button>

                          <button className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-700 transition hover:bg-slate-100">
                            Reset
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* TABEL BERITA */}
                    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                      {/* HEADER */}
                      <div className="border-b border-slate-200 px-7 py-5">
                        <h3 className="text-xl font-bold text-slate-900">
                          Daftar Berita
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Seluruh berita yang telah dibuat.
                        </p>
                      </div>

                      {/* TABLE */}
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-slate-50">
                            <tr>
                              <th className="px-6 py-4 text-left text-sm font-bold text-slate-600">
                                Thumbnail
                              </th>

                              <th className="px-6 py-4 text-left text-sm font-bold text-slate-600">
                                Judul
                              </th>

                              <th className="px-6 py-4 text-left text-sm font-bold text-slate-600">
                                Kategori
                              </th>

                              <th className="px-6 py-4 text-left text-sm font-bold text-slate-600">
                                Tanggal
                              </th>

                              <th className="px-6 py-4 text-center text-sm font-bold text-slate-600">
                                Status
                              </th>

                              <th className="px-6 py-4 text-right text-sm font-bold text-slate-600">
                                Aksi
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {[1, 2, 3].map((item) => (
                              <tr
                                key={item}
                                className="border-t border-slate-100 transition hover:bg-slate-50"
                              >
                                {/* IMAGE */}
                                <td className="px-6 py-4">
                                  <img
                                    src="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=600&auto=format&fit=crop"
                                    alt="news"
                                    className="h-20 w-28 rounded-2xl object-cover"
                                  />
                                </td>

                                {/* TITLE */}
                                <td className="px-6 py-4">
                                  <h3 className="max-w-xs font-bold text-slate-900">
                                    Kegiatan Pembimbingan Klien Pemasyarakatan
                                  </h3>

                                  <p className="mt-1 text-sm text-slate-500">
                                    Deskripsi singkat berita...
                                  </p>
                                </td>

                                {/* CATEGORY */}
                                <td className="px-6 py-4">
                                  <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700">
                                    Kegiatan
                                  </span>
                                </td>

                                {/* DATE */}
                                <td className="px-6 py-4 text-sm text-slate-600">
                                  12 Mei 2026
                                </td>

                                {/* STATUS */}
                                <td className="px-6 py-4 text-center">
                                  <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-bold text-emerald-700">
                                    Publish
                                  </span>
                                </td>

                                {/* BUTTON */}
                                <td className="px-6 py-4">
                                  <div className="flex justify-end gap-3">
                                    <button className="rounded-xl bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                                      Edit
                                    </button>

                                    <button className="rounded-xl bg-red-50 px-4 py-2 text-sm font-bold text-red-700">
                                      Hapus
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {/* ALBUM */}
                {activeMenu === "Kelola Album" && (
                  <div className="space-y-8">
                    {/* HEADER */}
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900">
                            Pengaturan Album Foto
                          </h3>

                          <p className="mt-2 text-sm text-slate-500">
                            Kelola galeri foto, kategori album, dan dokumentasi
                            kegiatan.
                          </p>
                        </div>

                        <button className="rounded-2xl bg-primary px-6 py-4 text-sm font-bold text-white transition hover:opacity-90">
                          + Tambah Foto
                        </button>
                      </div>
                    </div>

                    {/* FORM */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-slate-900">
                          Form Album Foto
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Tambah atau edit dokumentasi album website.
                        </p>
                      </div>

                      <div className="grid gap-8 lg:grid-cols-2">
                        {/* LEFT */}
                        <div className="space-y-7">
                          {/* TITLE */}
                          <div>
                            <label className="mb-3 block text-sm font-bold text-slate-700">
                              Judul Foto / Album
                            </label>

                            <input
                              type="text"
                              placeholder="Masukkan judul album..."
                              className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-primary"
                            />
                          </div>

                          {/* CATEGORY */}
                          <div>
                            <label className="mb-3 block text-sm font-bold text-slate-700">
                              Kategori Album
                            </label>

                            <select className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-primary">
                              <option>Kegiatan</option>
                              <option>Pelayanan</option>
                              <option>Pembimbingan</option>
                              <option>Koordinasi</option>
                              <option>Sosialisasi</option>
                              <option>Dokumentasi</option>
                            </select>
                          </div>

                          {/* DESC */}
                          <div>
                            <label className="mb-3 block text-sm font-bold text-slate-700">
                              Deskripsi Foto
                            </label>

                            <textarea
                              rows="6"
                              placeholder="Masukkan deskripsi album..."
                              className="w-full rounded-2xl border border-slate-200 px-5 py-4 leading-relaxed outline-none transition focus:border-primary"
                            />
                          </div>

                          {/* UPLOAD */}
                          <div>
                            <label className="mb-3 block text-sm font-bold text-slate-700">
                              Upload Foto
                            </label>

                            <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-10 text-center transition hover:border-primary">
                              <input
                                type="file"
                                accept="image/*"
                                className="mx-auto block text-sm text-slate-500"
                              />

                              <p className="mt-4 text-sm text-slate-500">
                                Upload foto dokumentasi kegiatan
                              </p>
                            </div>
                          </div>

                          {/* BUTTON */}
                          <div className="flex flex-wrap gap-4">
                            <button className="rounded-2xl bg-primary px-7 py-4 text-sm font-bold text-white transition hover:opacity-90">
                              Simpan Album
                            </button>

                            <button className="rounded-2xl border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-700 transition hover:bg-slate-100">
                              Reset
                            </button>
                          </div>
                        </div>

                        {/* RIGHT PREVIEW */}
                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Preview Foto
                          </label>

                          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
                            <img
                              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                              alt="preview"
                              className="h-[420px] w-full object-cover"
                            />

                            <div className="p-6">
                              <div className="mb-4 inline-flex rounded-full bg-amber-100 px-4 py-2 text-xs font-bold text-amber-700">
                                Kegiatan
                              </div>

                              <h3 className="text-2xl font-bold text-slate-900">
                                Kegiatan Bapas Mataram
                              </h3>

                              <p className="mt-3 leading-relaxed text-slate-600">
                                Dokumentasi kegiatan pembimbingan dan pelayanan
                                klien pemasyarakatan Bapas Kelas I Mataram.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* GALLERY TABLE */}
                    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                      {/* HEADER */}
                      <div className="border-b border-slate-200 px-7 py-5">
                        <h3 className="text-xl font-bold text-slate-900">
                          Daftar Album Foto
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Seluruh dokumentasi album website.
                        </p>
                      </div>

                      {/* GRID */}
                      <div className="grid gap-6 p-7 sm:grid-cols-2 xl:grid-cols-4">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                          <div
                            key={item}
                            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                          >
                            {/* IMAGE */}
                            <div className="relative h-60 overflow-hidden bg-slate-100">
                              <img
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                                alt="album"
                                className="h-full w-full object-cover"
                              />

                              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary">
                                Kegiatan
                              </div>
                            </div>

                            {/* CONTENT */}
                            <div className="p-5">
                              <h3 className="line-clamp-2 text-lg font-bold text-slate-900">
                                Kegiatan Bapas Mataram
                              </h3>

                              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                Dokumentasi kegiatan pelayanan dan pembimbingan.
                              </p>

                              {/* ACTION */}
                              <div className="mt-5 flex gap-3">
                                <button className="flex-1 rounded-xl bg-blue-50 px-4 py-3 text-sm font-bold text-blue-700">
                                  Edit
                                </button>

                                <button className="flex-1 rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
                                  Hapus
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* LAYANAN */}
                {activeMenu === "Kelola Layanan" && (
                  <div className="space-y-8">
                    {/* HEADER */}
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900">
                            Pengaturan Layanan
                          </h3>

                          <p className="mt-2 text-sm text-slate-500">
                            Kelola banner layanan, daftar layanan, dan maklumat
                            pelayanan.
                          </p>
                        </div>

                        <button className="rounded-2xl bg-primary px-6 py-4 text-sm font-bold text-white transition hover:opacity-90">
                          + Tambah Layanan
                        </button>
                      </div>
                    </div>

                    {/* HERO */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-slate-900">
                          Banner / Hero Layanan
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Kelola banner utama halaman layanan.
                        </p>
                      </div>

                      <div className="grid gap-8 lg:grid-cols-2">
                        {/* FORM */}
                        <div className="space-y-6">
                          <div>
                            <label className="mb-3 block text-sm font-bold text-slate-700">
                              Judul Banner
                            </label>

                            <input
                              type="text"
                              defaultValue="Layanan Bapas Kelas I Mataram"
                              className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                            />
                          </div>

                          <div>
                            <label className="mb-3 block text-sm font-bold text-slate-700">
                              Deskripsi Banner
                            </label>

                            <textarea
                              rows="6"
                              defaultValue="Balai Pemasyarakatan Kelas I Mataram memberikan layanan pemasyarakatan secara profesional, transparan, dan tanpa dipungut biaya sesuai standar pelayanan pemasyarakatan."
                              className="w-full rounded-2xl border border-slate-200 px-5 py-4 leading-relaxed"
                            />
                          </div>

                          <div>
                            <label className="mb-3 block text-sm font-bold text-slate-700">
                              Upload Banner
                            </label>

                            <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-10 text-center">
                              <input
                                type="file"
                                accept="image/*"
                                className="mx-auto block text-sm text-slate-500"
                              />

                              <p className="mt-4 text-sm text-slate-500">
                                Upload banner halaman layanan
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* PREVIEW */}
                        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
                          <img
                            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
                            alt="preview"
                            className="h-[420px] w-full object-cover"
                          />

                          <div className="p-6">
                            <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700">
                              Pelayanan Bapas
                            </div>

                            <h3 className="mt-4 text-3xl font-bold text-slate-900">
                              Layanan Bapas Kelas I Mataram
                            </h3>

                            <p className="mt-4 leading-relaxed text-slate-600">
                              Balai Pemasyarakatan Kelas I Mataram memberikan
                              layanan profesional dan gratis sesuai SOP.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* DAFTAR LAYANAN */}
                    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                      {/* HEADER */}
                      <div className="border-b border-slate-200 px-7 py-5">
                        <h3 className="text-xl font-bold text-slate-900">
                          Daftar Layanan
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Seluruh layanan yang tersedia pada website.
                        </p>
                      </div>

                      {/* TABLE */}
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-slate-50">
                            <tr>
                              <th className="px-6 py-4 text-left text-sm font-bold text-slate-600">
                                Icon
                              </th>

                              <th className="px-6 py-4 text-left text-sm font-bold text-slate-600">
                                Nama Layanan
                              </th>

                              <th className="px-6 py-4 text-left text-sm font-bold text-slate-600">
                                Deskripsi
                              </th>

                              <th className="px-6 py-4 text-left text-sm font-bold text-slate-600">
                                Link
                              </th>

                              <th className="px-6 py-4 text-right text-sm font-bold text-slate-600">
                                Aksi
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {[1, 2, 3, 4].map((item) => (
                              <tr
                                key={item}
                                className="border-t border-slate-100"
                              >
                                {/* ICON */}
                                <td className="px-6 py-5">
                                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                                    🧒
                                  </div>
                                </td>

                                {/* TITLE */}
                                <td className="px-6 py-5">
                                  <input
                                    type="text"
                                    defaultValue="Pelayanan Klien Anak"
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3"
                                  />
                                </td>

                                {/* DESC */}
                                <td className="px-6 py-5">
                                  <textarea
                                    rows="3"
                                    defaultValue="Layanan terpadu meliputi pembuatan Litmas Anak."
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3"
                                  />
                                </td>

                                {/* LINK */}
                                <td className="px-6 py-5">
                                  <input
                                    type="text"
                                    defaultValue="/layanan/klien-anak"
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3"
                                  />
                                </td>

                                {/* BUTTON */}
                                <td className="px-6 py-5">
                                  <div className="flex justify-end gap-3">
                                    <button className="rounded-xl bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                                      Edit
                                    </button>

                                    <button className="rounded-xl bg-red-50 px-4 py-2 text-sm font-bold text-red-700">
                                      Hapus
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* MAKLUMAT */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-slate-900">
                          Maklumat Pelayanan
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Pengaturan informasi maklumat pelayanan.
                        </p>
                      </div>

                      <div className="space-y-7">
                        {/* TITLE */}
                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Judul Maklumat
                          </label>

                          <input
                            type="text"
                            defaultValue="Seluruh Layanan Tidak Dipungut Biaya"
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                          />
                        </div>

                        {/* DESC */}
                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Deskripsi Maklumat
                          </label>

                          <textarea
                            rows="6"
                            defaultValue="Balai Pemasyarakatan Kelas I Mataram berkomitmen memberikan pelayanan prima, profesional, transparan, dan bebas dari pungutan liar."
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4 leading-relaxed"
                          />
                        </div>

                        {/* KEPDIRJEN */}
                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Dasar Hukum / Keterangan
                          </label>

                          <textarea
                            rows="4"
                            defaultValue="KEPDIRJENPAS NOMOR: PAS-36.OT.02.02 TAHUN 2020 Tentang Standar Pelayanan Pemasyarakatan."
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                          />
                        </div>
                      </div>
                    </div>

                    {/* FITUR */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <div className="mb-6 flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">
                            Fitur Layanan
                          </h3>

                          <p className="mt-1 text-sm text-slate-500">
                            Kelola fitur unggulan layanan.
                          </p>
                        </div>

                        <button className="rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-white">
                          + Tambah Fitur
                        </button>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {[1, 2, 3].map((item) => (
                          <div
                            key={item}
                            className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                          >
                            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                              🛡️
                            </div>

                            <div className="space-y-4">
                              <input
                                type="text"
                                defaultValue="Gratis"
                                className="w-full rounded-xl border border-slate-200 px-4 py-3"
                              />

                              <textarea
                                rows="4"
                                defaultValue="Seluruh layanan tidak dipungut biaya."
                                className="w-full rounded-xl border border-slate-200 px-4 py-3"
                              />

                              <div className="flex gap-3">
                                <button className="flex-1 rounded-xl bg-blue-50 px-4 py-3 text-sm font-bold text-blue-700">
                                  Edit
                                </button>

                                <button className="flex-1 rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
                                  Hapus
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* BUTTON */}
                    <div className="flex flex-wrap gap-4">
                      <button className="rounded-2xl bg-primary px-8 py-4 text-sm font-bold text-white">
                        Simpan Semua Perubahan
                      </button>

                      <button className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-700">
                        Reset
                      </button>
                    </div>
                  </div>
                )}

                {/* DEFAULT */}
                {!["Kelola Home", "Kelola Profile", "Kelola Berita"].includes(
                  activeMenu,
                ) && (
                  <div className="flex h-[350px] flex-col items-center justify-center text-center">
                    <div className="rounded-3xl bg-slate-100 p-6">
                      <ShieldCheck size={60} className="text-slate-400" />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                      {activeMenu}
                    </h3>

                    <p className="mt-3 max-w-md text-slate-500">
                      Form pengelolaan untuk menu ini belum dibuat.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM */}
      <section className="grid gap-8 xl:grid-cols-3">
        {/* AKTIVITAS */}
        <div className="xl:col-span-3 rounded-3xl bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Clock3 size={24} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Aktivitas Terbaru
              </h2>

              <p className="text-slate-500">
                Riwayat aktivitas dashboard admin.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {activities.map((item, index) => (
              <div
                key={index}
                className="flex items-start justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
              >
                <div>
                  <h3 className="font-semibold text-slate-800">{item.title}</h3>

                  <p className="mt-1 text-sm text-slate-500">{item.time}</p>
                </div>

                <div className="mt-1 h-3 w-3 rounded-full bg-emerald-500" />
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
