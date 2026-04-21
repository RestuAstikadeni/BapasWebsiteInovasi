import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "News", path: "/news" },
    { title: "Profile", path: "/profile" },
    { title: "Services", path: "/services" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-lg font-bold tracking-tight text-slate-900"
        >
          BAPAS Website Inovasi
        </Link>

        <nav className="flex items-center gap-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.title}
                to={item.path}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
