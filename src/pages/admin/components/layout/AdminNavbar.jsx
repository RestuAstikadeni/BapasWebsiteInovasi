import React from "react";
import { Menu, Bell, LogOut } from "lucide-react";

export default function AdminNavbar({ setIsSidebarOpen }) {
  const handleLogout = () => {
    localStorage.removeItem("bapas_admin_login");

    window.location.href = "/login";
  };

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur sm:px-6 lg:px-8">
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="rounded-xl p-2 transition hover:bg-slate-100 lg:hidden"
        >
          <Menu size={24} />
        </button>

        <div>
          <h2 className="text-xl font-bold text-slate-900">Dashboard Admin</h2>

          <p className="text-sm text-slate-500">
            Website Bapas Kelas I Mataram
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <button className="relative rounded-2xl bg-slate-100 p-3 transition hover:bg-slate-200">
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-2xl bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </header>
  );
}
