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
      title: "Form Wajib Lapor",
      desc: "Atur form wajib lapor",
      icon: FileText,
      color: "bg-cyan-500",
      link: "/admin/form-wajib-lapor",
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
    <div className="w-full max-w-full space-y-10 overflow-x-hidden">
      {/* STATS */}
      <section>
        <SectionTitle
          title="Dashboard Admim"
          subtitle="Ringkasan data konten website Bapas."
        />

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      {item.title}
                    </p>

                    <h2 className="mt-3 text-3xl sm:text-5xl font-black text-slate-900">
                      {item.value}
                    </h2>

                    <p className="mt-2 text-xs xl:text-sm text-slate-500">
                      {item.desc}
                    </p>
                  </div>

                  <div
                    className={`flex h-8 w-8 sm:h-16 sm:w-16 items-center justify-center rounded-2xl text-white shadow-lg ${item.color}`}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
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
          className="w-full flex items-center justify-between"
        />

        {/* IMPORTANT */}
        <div className="grid items-start gap-6 grid-cols-1 xl:grid-cols-12">
          {/* SIDEBAR */}
          {/* MOBILE TOPBAR + DESKTOP SIDEBAR */}
          <div className="self-start xl:col-span-3">
            <div className="border border-slate-200 bg-white shadow-sm xl:rounded-3xl xl:p-5 xl:sticky xl:top-6 xl:max-h-[calc(100vh-48px)]">
              {/* MOBILE TOPBAR */}
              <div className="sticky top-0 z-20 border-b border-slate-200 bg-white px-4 py-4 xl:hidden">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-800">
                    Menu Pengelolaan
                  </h3>

                  <div className="rounded-full bg-navy/10 px-3 py-1 text-xs font-semibold text-primary">
                    {menus.length} Menu
                  </div>
                </div>

                {/* HORIZONTAL MENU */}
                <div className="flex gap-3 overflow-x-auto pb-1 custom-scrollbar">
                  {menus.map((item, index) => {
                    const Icon = item.icon;
                    const active = activeMenu === item.title;

                    return (
                      <button
                        key={index}
                        onClick={() => setActiveMenu(item.title)}
                        className={`flex min-w-fit items-center gap-3 rounded-2xl border px-4 py-3 transition ${
                          active
                            ? "border-primary bg-navy text-white"
                            : "border-slate-200 bg-white text-slate-700"
                        }`}
                      >
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-xl text-white ${
                            active ? "bg-white/20" : item.color
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="text-left">
                          <p className="whitespace-nowrap text-sm font-semibold">
                            {item.title}
                          </p>

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

              {/* DESKTOP SIDEBAR */}
              <div className="hidden xl:block">
                <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-500">
                  Navigasi Pengelolaan
                </h3>

                <div className="space-y-2 overflow-y-auto pr-1 custom-scrollbar xl:h-[calc(100vh-48px)]">
                  {menus.map((item, index) => {
                    const Icon = item.icon;
                    const active = activeMenu === item.title;

                    return (
                      <button
                        key={index}
                        onClick={() => setActiveMenu(item.title)}
                        className={`group flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left transition duration-200 ${
                          active ? "bg-navy text-white" : "hover:bg-slate-100"
                        }`}
                      >
                        <div
                          className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-white ${
                            active ? "bg-white/20" : item.color
                          }`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h4
                            className={`truncate text-sm font-semibold ${
                              active ? "text-white" : "text-slate-800"
                            }`}
                          >
                            {item.title}
                          </h4>

                          <p
                            className={`truncate text-xs ${
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
          </div>

          {/* CONTENT */}
          <div className="min-w-0 xl:col-span-9">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm xl:h-[calc(100vh-48px)] xl:flex xl:flex-col">
              {/* HEADER */}
              <div className="border-b border-slate-200 px-4 py-5 sm:px-7">
                <h3 className="break-words text-xl font-bold text-slate-900 sm:text-2xl">
                  {activeMenu}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Form pengelolaan konten website.
                </p>
              </div>
              {/* FORM CONTENT */}
              <div className="overflow-y-auto p-4 sm:p-7 xl:flex-1 custom-scrollbar">
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
                          <button className="rounded-2xl bg-navy px-7 py-4 text-sm font-bold text-white transition hover:opacity-90">
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

                        <button className="rounded-xl bg-navy px-4 py-2 text-sm font-bold text-white">
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

                        <button className="rounded-xl bg-navy px-4 py-2 text-sm font-bold text-white">
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

                        <button className="rounded-xl bg-navy px-4 py-2 text-sm font-bold text-white">
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

                        <button className="rounded-xl bg-navy px-4 py-2 text-sm font-bold text-white">
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
                      <button className="rounded-2xl bg-navy px-8 py-4 text-sm font-bold text-white transition hover:opacity-90">
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

                        <button className="rounded-2xl bg-navy px-5 py-3 text-sm font-bold text-white">
                          + Tambah Pejabat
                        </button>
                      </div>

                      {/* DESKTOP TABLE */}
                      <div className="hidden overflow-x-auto lg:block">
                        <table className="w-full min-w-[900px]">
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
                                <td className="px-5 py-4">
                                  <img
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop"
                                    alt="pegawai"
                                    className="h-16 w-16 rounded-2xl object-cover"
                                  />
                                </td>

                                <td className="px-5 py-4">
                                  <input
                                    type="text"
                                    defaultValue="Nama Pejabat"
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3"
                                  />
                                </td>

                                <td className="px-5 py-4">
                                  <input
                                    type="text"
                                    defaultValue="197912312007031001"
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3"
                                  />
                                </td>

                                <td className="px-5 py-4">
                                  <input
                                    type="text"
                                    defaultValue="Kepala Seksi"
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3"
                                  />
                                </td>

                                <td className="px-5 py-4">
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

                      {/* MOBILE CARD */}
                      <div className="space-y-4 lg:hidden">
                        {[1, 2, 3, 4].map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                          >
                            {/* FOTO */}
                            <div className="flex items-center gap-4">
                              <img
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop"
                                alt="pegawai"
                                className="h-20 w-20 rounded-2xl object-cover"
                              />

                              <div className="flex-1">
                                <label className="mb-2 block text-sm font-semibold text-slate-700">
                                  Upload Foto
                                </label>

                                <input
                                  type="file"
                                  className="w-full rounded-xl border border-dashed border-slate-300 bg-white px-3 py-2 text-sm"
                                />
                              </div>
                            </div>

                            {/* FORM */}
                            <div className="mt-5 space-y-4">
                              <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-700">
                                  Nama
                                </label>

                                <input
                                  type="text"
                                  defaultValue="Nama Pejabat"
                                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3"
                                />
                              </div>

                              <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-700">
                                  NIP
                                </label>

                                <input
                                  type="text"
                                  defaultValue="197912312007031001"
                                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3"
                                />
                              </div>

                              <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-700">
                                  Jabatan
                                </label>

                                <input
                                  type="text"
                                  defaultValue="Kepala Seksi"
                                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3"
                                />
                              </div>
                            </div>

                            {/* BUTTON */}
                            <div className="mt-5 flex gap-3">
                              <button className="flex-1 rounded-xl bg-blue-50 px-4 py-3 text-sm font-bold text-blue-700">
                                Edit
                              </button>

                              <button className="flex-1 rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
                                Hapus
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* BUTTON SAVE */}
                    <div className="flex flex-wrap gap-4">
                      <button className="rounded-2xl bg-navy px-8 py-4 text-sm font-bold text-white">
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

                        <button className="rounded-2xl bg-navy px-6 py-4 text-sm font-bold text-white transition hover:opacity-90">
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
                          <button className="rounded-2xl bg-navy px-8 py-4 text-sm font-bold text-white transition hover:opacity-90">
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

                        <button className="rounded-2xl bg-navy px-6 py-4 text-sm font-bold text-white transition hover:opacity-90">
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
                            <button className="rounded-2xl bg-navy px-7 py-4 text-sm font-bold text-white transition hover:opacity-90">
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
                      <div className="grid gap-6 p-7 sm:grid-cols-2 xl:grid-cols-3">
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
                    <div className="space-y-8">
                      {/* HEADER */}
                      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                        <div className="border-b border-slate-200 px-7 py-5">
                          <div className="flex flex-wrap items-center justify-between gap-4">
                            <div>
                              <h3 className="text-xl font-bold text-slate-900">
                                Daftar Layanan Website
                              </h3>

                              <p className="mt-1 text-sm text-slate-500">
                                Kelola seluruh layanan pada halaman layanan
                                website.
                              </p>
                            </div>

                            <button className="rounded-2xl bg-navy px-5 py-3 text-sm font-bold text-white">
                              + Tambah Layanan
                            </button>
                          </div>
                        </div>

                        {/* LIST */}
                        <div className="space-y-5 p-7">
                          {[
                            {
                              icon: "🧒",
                              title: "Pelayanan Klien Anak",
                              color: "bg-blue-100",
                            },
                            {
                              icon: "👥",
                              title: "Pelayanan Klien Dewasa",
                              color: "bg-indigo-100",
                            },
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                            >
                              <div className="grid gap-6 lg:grid-cols-12">
                                {/* ICON */}
                                <div className="lg:col-span-2">
                                  <label className="mb-3 block text-sm font-bold text-slate-700">
                                    Icon
                                  </label>

                                  <div
                                    className={`flex h-20 w-20 items-center justify-center rounded-3xl text-4xl ${item.color}`}
                                  >
                                    {item.icon}
                                  </div>
                                </div>

                                {/* FORM */}
                                <div className="space-y-5 lg:col-span-10">
                                  {/* TITLE */}
                                  <div>
                                    <label className="mb-3 block text-sm font-bold text-slate-700">
                                      Nama Layanan
                                    </label>

                                    <input
                                      type="text"
                                      defaultValue={item.title}
                                      className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4"
                                    />
                                  </div>

                                  {/* DESC */}
                                  <div>
                                    <label className="mb-3 block text-sm font-bold text-slate-700">
                                      Deskripsi Layanan
                                    </label>

                                    <textarea
                                      rows="4"
                                      defaultValue="Deskripsi layanan..."
                                      className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 leading-relaxed"
                                    />
                                  </div>

                                  {/* LINK */}
                                  <div>
                                    <label className="mb-3 block text-sm font-bold text-slate-700">
                                      Link Halaman
                                    </label>

                                    <input
                                      type="text"
                                      defaultValue="/layanan"
                                      className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4"
                                    />
                                  </div>

                                  {/* ACTION */}
                                  <div className="flex flex-wrap gap-3 pt-2">
                                    <button className="rounded-2xl bg-blue-50 px-5 py-3 text-sm font-bold text-blue-700">
                                      Edit
                                    </button>

                                    <button className="rounded-2xl bg-red-50 px-5 py-3 text-sm font-bold text-red-700">
                                      Hapus
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* SOP LAYANAN */}
                    <div className="space-y-8">
                      {/* SOP KLIEN ANAK */}
                      <div className="rounded-3xl border border-slate-200 bg-white p-7">
                        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900">
                              SOP Layanan Klien Anak
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                              Upload dan kelola dokumen SOP layanan klien anak.
                            </p>
                          </div>

                          <button className="rounded-2xl bg-navy px-5 py-3 text-sm font-bold text-white">
                            + Tambah SOP Anak
                          </button>
                        </div>

                        <div className="space-y-5">
                          {[1, 2, 3].map((item) => (
                            <div
                              key={item}
                              className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 lg:flex-row lg:items-center lg:justify-between"
                            >
                              {/* INFO */}
                              <div className="flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-2xl">
                                  📄
                                </div>

                                <div>
                                  <input
                                    type="text"
                                    defaultValue="SOP Pendampingan Anak"
                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-800"
                                  />

                                  <p className="mt-2 text-sm text-slate-500">
                                    File SOP layanan klien anak
                                  </p>
                                </div>
                              </div>

                              {/* UPLOAD */}
                              <div className="flex flex-col gap-3 sm:flex-row">
                                <input
                                  type="file"
                                  accept=".pdf"
                                  className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-3 text-sm"
                                />

                                <button className="rounded-xl bg-blue-50 px-5 py-3 text-sm font-bold text-blue-700">
                                  Edit
                                </button>

                                <button className="rounded-xl bg-red-50 px-5 py-3 text-sm font-bold text-red-700">
                                  Hapus
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* SOP KLIEN DEWASA */}
                      <div className="rounded-3xl border border-slate-200 bg-white p-7">
                        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900">
                              SOP Layanan Klien Dewasa
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                              Upload dan kelola dokumen SOP layanan klien
                              dewasa.
                            </p>
                          </div>

                          <button className="rounded-2xl bg-navy px-5 py-3 text-sm font-bold text-white">
                            + Tambah SOP Dewasa
                          </button>
                        </div>

                        <div className="space-y-5">
                          {[1, 2, 3].map((item) => (
                            <div
                              key={item}
                              className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 lg:flex-row lg:items-center lg:justify-between"
                            >
                              {/* INFO */}
                              <div className="flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
                                  📄
                                </div>

                                <div>
                                  <input
                                    type="text"
                                    defaultValue="SOP Pelaksanaan Bimbingan"
                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-800"
                                  />

                                  <p className="mt-2 text-sm text-slate-500">
                                    File SOP layanan klien dewasa
                                  </p>
                                </div>
                              </div>

                              {/* UPLOAD */}
                              <div className="flex flex-col gap-3 sm:flex-row">
                                <input
                                  type="file"
                                  accept=".pdf"
                                  className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-3 text-sm"
                                />

                                <button className="rounded-xl bg-blue-50 px-5 py-3 text-sm font-bold text-blue-700">
                                  Edit
                                </button>

                                <button className="rounded-xl bg-red-50 px-5 py-3 text-sm font-bold text-red-700">
                                  Hapus
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
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

                    {/* BUTTON */}
                    <div className="flex flex-wrap gap-4">
                      <button className="rounded-2xl bg-navy px-8 py-4 text-sm font-bold text-white">
                        Simpan Semua Perubahan
                      </button>

                      <button className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-700">
                        Reset
                      </button>
                    </div>
                  </div>
                )}

                {/* FORM WAJIB LAPOR */}
                {activeMenu === "Form Wajib Lapor" && (
                  <div className="space-y-8">
                    {/* HEADER */}
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900">
                            Pengaturan Form Wajib Lapor
                          </h3>

                          <p className="mt-2 text-sm text-slate-500">
                            Kelola seluruh konfigurasi form wajib lapor online.
                          </p>
                        </div>

                        <div className="rounded-2xl bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
                          Form Aktif
                        </div>
                      </div>
                    </div>

                    {/* BANNER */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-slate-900">
                          Banner & Header Form
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Pengaturan tampilan bagian atas form wajib lapor.
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Judul Form
                          </label>

                          <input
                            type="text"
                            defaultValue="WAJIB LAPOR KLIEN"
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                          />
                        </div>

                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Deskripsi Form
                          </label>

                          <textarea
                            rows="8"
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4 leading-relaxed"
                            defaultValue={`Yth. Bapak/Ibu/Saudara/i,

Formulir Wajib Lapor Online ini disediakan sebagai alternatif layanan pelaporan bagi klien pemasyarakatan yang benar-benar berhalangan hadir secara langsung ke kantor Balai Pemasyarakatan Kelas I Mataram karena kondisi tertentu yang dapat dipertanggungjawabkan.`}
                          />
                        </div>

                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Upload Banner Form
                          </label>

                          <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                            <input
                              type="file"
                              accept="image/*"
                              className="mx-auto block text-sm text-slate-500"
                            />

                            <p className="mt-4 text-sm text-slate-500">
                              Upload banner halaman wajib lapor
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* FIELD FORM */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-slate-900">
                          Pengaturan Field Form
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Pengaturan field wajib lapor sesuai form utama.
                        </p>
                      </div>

                      <div className="space-y-5">
                        {[
                          {
                            title: "Nama",
                            type: "Text",
                          },
                          {
                            title: "Alamat",
                            type: "Textarea",
                          },
                          {
                            title: "Nomor WhatsApp",
                            type: "Number",
                          },
                          {
                            title: "Tanggal Wajib Lapor",
                            type: "Date",
                          },
                          {
                            title: "Kasus",
                            type: "Radio",
                          },
                          {
                            title: "Nama PK",
                            type: "Radio",
                          },
                          {
                            title: "Nomor PK",
                            type: "Text",
                          },
                          {
                            title: "Alasan Tidak Dapat Hadir",
                            type: "Textarea",
                          },
                          {
                            title: "Lokasi GPS",
                            type: "GPS Location",
                          },
                          {
                            title: "Foto Kegiatan Klien",
                            type: "Camera Upload",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                          >
                            <div className="grid gap-5 lg:grid-cols-12">
                              <div className="lg:col-span-5">
                                <label className="mb-2 block text-sm font-bold text-slate-700">
                                  Nama Field
                                </label>

                                <input
                                  type="text"
                                  defaultValue={item.title}
                                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3"
                                />
                              </div>

                              <div className="lg:col-span-3">
                                <label className="mb-2 block text-sm font-bold text-slate-700">
                                  Tipe Input
                                </label>

                                <input
                                  type="text"
                                  value={item.type}
                                  disabled
                                  className="w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-600"
                                />
                              </div>

                              <div className="lg:col-span-2">
                                <label className="mb-2 block text-sm font-bold text-slate-700">
                                  Required
                                </label>

                                <div className="flex h-[52px] items-center rounded-2xl border border-slate-200 bg-white px-4">
                                  <input type="checkbox" defaultChecked />
                                </div>
                              </div>

                              <div className="lg:col-span-2">
                                <label className="mb-2 block text-sm font-bold text-slate-700">
                                  Status
                                </label>

                                <div className="flex h-[52px] items-center rounded-2xl border border-slate-200 bg-white px-4">
                                  <input type="checkbox" defaultChecked />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* PENGATURAN KASUS */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <div className="mb-8 flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">
                            Daftar Kasus
                          </h3>

                          <p className="mt-1 text-sm text-slate-500">
                            Kelola pilihan kasus pada form wajib lapor.
                          </p>
                        </div>

                        <button className="rounded-2xl bg-navy px-5 py-3 text-sm font-bold text-white">
                          + Tambah Kasus
                        </button>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        {[
                          "Narkotika",
                          "Korupsi",
                          "Pencurian",
                          "Penganiayaan",
                          "ITE",
                          "KDRT",
                          "Teroris",
                          "Perjudian",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
                          >
                            <input
                              type="text"
                              defaultValue={item}
                              className="w-full bg-transparent outline-none"
                            />

                            <button className="ml-4 rounded-xl bg-red-50 px-4 py-2 text-sm font-bold text-red-700">
                              Hapus
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* PENGATURAN PK */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <div className="mb-8 flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">
                            Daftar PK & Nomor WhatsApp
                          </h3>

                          <p className="mt-1 text-sm text-slate-500">
                            Pengaturan nama PK dan nomor otomatis.
                          </p>
                        </div>

                        <button className="rounded-2xl bg-navy px-5 py-3 text-sm font-bold text-white">
                          + Tambah PK
                        </button>
                      </div>

                      <div className="space-y-4">
                        {[
                          {
                            nama: "ANANDA SEPTIANA LESTARI,S.Tr.Pas",
                            nomor: "+62 859-3455-1717",
                          },
                          {
                            nama: "BADRUS",
                            nomor: "+62 819-3673-3209",
                          },
                          {
                            nama: "IKA INDAYANI, SH.",
                            nomor: "+62 817-5777-568",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 lg:grid-cols-12"
                          >
                            <div className="lg:col-span-5">
                              <label className="mb-2 block text-sm font-bold text-slate-700">
                                Nama PK
                              </label>

                              <input
                                type="text"
                                defaultValue={item.nama}
                                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3"
                              />
                            </div>

                            <div className="lg:col-span-5">
                              <label className="mb-2 block text-sm font-bold text-slate-700">
                                Nomor WhatsApp
                              </label>

                              <input
                                type="text"
                                defaultValue={item.nomor}
                                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3"
                              />
                            </div>

                            <div className="lg:col-span-2">
                              <label className="mb-2 block text-sm font-bold text-transparent">
                                Action
                              </label>

                              <button className="w-full rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
                                Hapus
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* GOOGLE APPS SCRIPT */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-slate-900">
                          Integrasi Google Spreadsheet
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Konfigurasi Google Apps Script dan Spreadsheet.
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            URL Google Apps Script
                          </label>

                          <input
                            type="text"
                            defaultValue="https://script.google.com/macros/s/AKfycbxngxLle_CBejptiQXS0yzow2qmX1-Qgx4QqlVnWuL8OCI5CL7MAOYl9O5hIoZmwnxs/exec"
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                          />
                        </div>

                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Link Spreadsheet
                          </label>

                          <input
                            type="text"
                            placeholder="https://docs.google.com/spreadsheets/..."
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                          />
                        </div>
                      </div>
                    </div>

                    {/* PENGATURAN LOKASI */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-slate-900">
                          Pengaturan Lokasi GPS
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Pengaturan fitur pengambilan lokasi otomatis.
                        </p>
                      </div>

                      <div className="space-y-6">
                        <label className="flex items-center justify-between rounded-2xl border border-slate-200 p-5">
                          <div>
                            <h4 className="font-bold text-slate-800">
                              Aktifkan GPS Wajib
                            </h4>

                            <p className="text-sm text-slate-500">
                              User wajib mengambil lokasi sebelum submit form
                            </p>
                          </div>

                          <input type="checkbox" defaultChecked />
                        </label>

                        <label className="flex items-center justify-between rounded-2xl border border-slate-200 p-5">
                          <div>
                            <h4 className="font-bold text-slate-800">
                              Tampilkan Link Google Maps
                            </h4>

                            <p className="text-sm text-slate-500">
                              Menampilkan tombol buka maps
                            </p>
                          </div>

                          <input type="checkbox" defaultChecked />
                        </label>
                      </div>
                    </div>

                    {/* BUTTON */}
                    <div className="flex flex-wrap gap-4">
                      <button className="rounded-2xl bg-navy px-8 py-4 text-sm font-bold text-white transition hover:opacity-90">
                        Simpan Pengaturan
                      </button>

                      <button className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-700 transition hover:bg-slate-100">
                        Reset
                      </button>
                    </div>
                  </div>
                )}

                {/* PENGATURAN WEBSITE */}
                {activeMenu === "Pengaturan Website" && (
                  <div className="space-y-8">
                    {/* IDENTITAS WEBSITE */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-slate-900">
                          Identitas Website
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Informasi utama website dan instansi.
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Nama Website
                          </label>

                          <input
                            type="text"
                            defaultValue="Bapas Kelas I Mataram"
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-primary"
                          />
                        </div>

                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Nama Instansi
                          </label>

                          <input
                            type="text"
                            defaultValue="Balai Pemasyarakatan Kelas I Mataram"
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-primary"
                          />
                        </div>

                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Deskripsi Website
                          </label>

                          <textarea
                            rows="5"
                            defaultValue="Website resmi Balai Pemasyarakatan Kelas I Mataram."
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4 leading-relaxed outline-none focus:border-primary"
                          />
                        </div>

                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Upload Logo Website
                          </label>

                          <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                            <input
                              type="file"
                              accept="image/*"
                              className="mx-auto block text-sm text-slate-500"
                            />

                            <p className="mt-4 text-sm text-slate-500">
                              Upload logo website
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* INFORMASI KONTAK */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-slate-900">
                          Informasi Kontak
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Informasi kontak resmi website.
                        </p>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            WhatsApp Admin
                          </label>

                          <input
                            type="text"
                            defaultValue="6281946691939"
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                          />
                        </div>

                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Email Resmi
                          </label>

                          <input
                            type="email"
                            defaultValue="bapas_mataram@email.com"
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                          />
                        </div>

                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Nomor Telepon
                          </label>

                          <input
                            type="text"
                            defaultValue="0370-xxxxxx"
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                          />
                        </div>

                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Link Google Maps
                          </label>

                          <input
                            type="text"
                            placeholder="https://maps.google.com/..."
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                          />
                        </div>
                      </div>

                      <div className="mt-6">
                        <label className="mb-3 block text-sm font-bold text-slate-700">
                          Alamat Kantor
                        </label>

                        <textarea
                          rows="4"
                          defaultValue="Jl. Langko No..."
                          className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                        />
                      </div>
                    </div>

                    {/* SOSIAL MEDIA */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-slate-900">
                          Sosial Media
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Kelola link sosial media website.
                        </p>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <input
                          type="text"
                          placeholder="Link Facebook"
                          className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                        />

                        <input
                          type="text"
                          placeholder="Link Instagram"
                          className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                        />

                        <input
                          type="text"
                          placeholder="Link Youtube"
                          className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                        />

                        <input
                          type="text"
                          placeholder="Link TikTok"
                          className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                        />
                      </div>
                    </div>

                    {/* WARNA WEBSITE */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-slate-900">
                          Branding Website
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Pengaturan warna dan tampilan website.
                        </p>
                      </div>

                      <div className="grid gap-6 md:grid-cols-3">
                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Warna Primary
                          </label>

                          <input
                            type="color"
                            defaultValue="#0f172a"
                            className="h-16 w-full rounded-2xl border border-slate-200"
                          />
                        </div>

                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Warna Secondary
                          </label>

                          <input
                            type="color"
                            defaultValue="#1e293b"
                            className="h-16 w-full rounded-2xl border border-slate-200"
                          />
                        </div>

                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Warna Button
                          </label>

                          <input
                            type="color"
                            defaultValue="#2563eb"
                            className="h-16 w-full rounded-2xl border border-slate-200"
                          />
                        </div>
                      </div>
                    </div>

                    {/* KEAMANAN ADMIN */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7">
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-slate-900">
                          Keamanan Admin
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Pengaturan akun admin dashboard.
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Username Admin
                          </label>

                          <input
                            type="text"
                            defaultValue="admin"
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                          />
                        </div>

                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Password Baru
                          </label>

                          <input
                            type="password"
                            placeholder="Masukkan password baru"
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                          />
                        </div>

                        <div>
                          <label className="mb-3 block text-sm font-bold text-slate-700">
                            Konfirmasi Password
                          </label>

                          <input
                            type="password"
                            placeholder="Konfirmasi password baru"
                            className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                          />
                        </div>
                      </div>
                    </div>

                    {/* BUTTON */}
                    <div className="flex flex-wrap gap-4">
                      <button className="rounded-2xl bg-navy px-8 py-4 text-sm font-bold text-white transition hover:opacity-90">
                        Simpan Pengaturan
                      </button>

                      <button className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-700 transition hover:bg-slate-100">
                        Reset
                      </button>
                    </div>
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
