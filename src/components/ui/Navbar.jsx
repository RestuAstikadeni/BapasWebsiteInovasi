import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import ImipasLogo from "../../assets/images/logo-imipas.png";
import PasLogo from "../../assets/images/logo-pas.png";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    {
      title: "Beranda",
      path: "/",
    },
    {
      title: "Profil",
      path: "/profile",
      children: [
        { title: "Tentang BAPAS", section: "profile" },
        { title: "Visi & Misi", section: "visi-misi" },
        { title: "Tugas Pokok & Fungsi", section: "tugas-pokok" },
        { title: "Program dan Sasaran", section: "program-sasaran" },
        { title: "Struktur Organisasi", section: "struktur-organisasi" },
      ],
    },
    {
      title: "Publikasi",
      path: "/news",
      children: [
        { title: "Indeks Berita", path: "/news" },
        { title: "Album", path: "/album" },
      ],
    },
    {
      title: "Layanan",
      path: "/services",
      children: [
        { title: "Daftar Layanan", section: "services-list" },
        { title: "Pelayanan Klien Anak", path: "/layanan/klien-anak" },
        { title: "Pelayanan Klien Dewasa", path: "/layanan/klien-dewasa" },
        { title: "Pelayanan Pemberian Izin Klien ke Luar Kota", path: "/layanan/izin-luar-kota" },
        { title: "Pelayanan Pelimpahan Bimbingan Klien", path: "/layanan/pelimpahan-bimbingan" },
        { title: "Pelayanan Izin Klien ke Luar Negeri", path: "/layanan/izin-luar-negeri" },
        { title: "Pelayanan Pendampingan ABH", path: "/layanan/pendampingan-abh" },
        { title: "Pelayanan Pencabutan Integrasi Klien Pemasyarakatan", path: "/layanan/pencabutan-integrasi" },


      ],
    },
    {
      title: "Admin",
      path: "/adminlogin",
      icon: <User size={20} />,
    },
  ];

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleChildClick = (child, parentPath) => {
    closeMenu();

    if (child.path) {
      navigate(child.path);
      return;
    }

    if (child.section) {
      if (location.pathname !== parentPath) {
        navigate(parentPath);

        setTimeout(() => {
          scrollToSection(child.section);
        }, 200);

        return;
      }

      scrollToSection(child.section);
    }
  };

  const isMenuActive = (item) => {
    if (location.pathname === item.path) return true;

    return item.children?.some((child) => {
      if (!child.path) return false;
      return location.pathname === child.path;
    });
  };

  const navClass =
    "rounded-lg px-4 py-2 text-base font-medium transition xl:px-6 xl:text-[1.05rem]";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex items-center justify-between px-4 py-3 sm:px-6 md:px-10 lg:px-20 xl:px-40">
        {/* Logo */}
        <div className="flex min-w-0 items-center gap-3">
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <img
              src={ImipasLogo}
              alt="Imipas Logo"
              className="h-7 w-auto rounded-full sm:h-7"
            />
            <img
              src={PasLogo}
              alt="PAS Logo"
              className="h-7 w-auto rounded-full sm:h-7"
            />
          </Link>

          <Link
            to="/"
            className="truncate text-sm font-bold tracking-tight text-navy-dark sm:text-base md:text-sm"
          >
            BALAI PEMASYARAKATAN KELAS I MATARAM
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-2 lg:flex">
          {menuItems.map((item) => {
            const active = isMenuActive(item);

            if (item.children) {
              return (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.title)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() => navigate(item.path)}
                    className={`${navClass} ${
                      active
                        ? "bg-navy text-white"
                        : "text-navy-dark hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {item.title} ▾
                  </button>

                  {openDropdown === item.title && (
                    <div className="absolute right-0 top-full w-max min-w-[220px] rounded-xl border border-slate-200 bg-white py-2 shadow-lg">
                      {item.children.map((child) => (
                        <button
                          key={child.title}
                          type="button"
                          onClick={() => handleChildClick(child, item.path)}
                          className="block w-full px-4 py-2 text-left text-sm text-navy-dark transition hover:bg-slate-100"
                        >
                          {child.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.title}
                to={item.path}
                className={`rounded-lg px-4 py-2 text-base font-medium transition xl:px-6 xl:text-[1.05rem] ${
                  active
                    ? "bg-navy text-white"
                    : "text-navy-dark hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.icon ? item.icon : item.title}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="ml-3 inline-flex rounded-lg border border-slate-200 p-2 text-navy-dark lg:hidden"
        >
          <span className="sr-only">Toggle Menu</span>
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => {
              const active = isMenuActive(item);

              return (
                <div key={item.title}>
                  <Link
                    to={item.path}
                    onClick={closeMenu}
                    className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition ${
                      active
                        ? "bg-navy text-white"
                        : "text-navy-dark hover:bg-slate-100"
                    }`}
                  >
                    {item.icon ? item.icon : item.title}
                  </Link>

                  {item.children && (
                    <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-slate-200 pl-3">
                      {item.children.map((child) => (
                        <button
                          key={child.title}
                          type="button"
                          onClick={() => handleChildClick(child, item.path)}
                          className="rounded-lg px-4 py-2 text-left text-sm text-slate-600 transition hover:bg-slate-100"
                        >
                          {child.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
