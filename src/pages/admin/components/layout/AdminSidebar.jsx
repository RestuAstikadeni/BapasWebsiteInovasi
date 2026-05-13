import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Newspaper,
  Images,
  Building2,
  Briefcase,
  Users,
  Settings,
  X,
} from "lucide-react";

const menus = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Kelola Berita",
    path: "/admin/news",
    icon: Newspaper,
  },
  {
    name: "Kelola Album",
    path: "/admin/album",
    icon: Images,
  },
  {
    name: "Kelola Profile",
    path: "/admin/profile",
    icon: Building2,
  },
  {
    name: "Kelola Organization",
    path: "/admin/organization",
    icon: Users,
  },
  {
    name: "Kelola Service",
    path: "/admin/service",
    icon: Briefcase,
  },
  {
    name: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <aside
      className={`
        fixed left-0 top-0 z-50 flex h-screen w-72 flex-col
        border-r border-slate-200 bg-white shadow-xl
        transition-transform duration-300
        lg:translate-x-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      {/* HEADER */}
      <div className="flex h-20 items-center justify-between border-b border-slate-200 px-6">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Bapas Admin</h1>

          <p className="text-sm text-slate-500">CMS Dashboard</p>
        </div>

        <button
          onClick={() => setIsSidebarOpen(false)}
          className="rounded-xl p-2 transition hover:bg-slate-100 lg:hidden"
        >
          <X size={22} />
        </button>
      </div>

      {/* MENU */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="space-y-2">
          {menus.map((menu, index) => {
            const Icon = menu.icon;

            return (
              <NavLink
                key={index}
                to={menu.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-primary text-white shadow-lg"
                      : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                <Icon size={20} />
                {menu.name}
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* FOOTER */}
      <div className="border-t border-slate-200 p-4">
        <div className="rounded-2xl bg-slate-100 p-4">
          <p className="text-sm font-semibold text-slate-800">Administrator</p>

          <p className="mt-1 text-xs text-slate-500">admin@bapas.go.id</p>
        </div>
      </div>
    </aside>
  );
}
