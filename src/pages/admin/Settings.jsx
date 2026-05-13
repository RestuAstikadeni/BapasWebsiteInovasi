// src/admin/pages/Settings.jsx

import React from "react";
import SectionTitle from "./components/ui/SectionTitle";

export default function Settings() {
  return (
    <div>
      <SectionTitle
        title="Settings"
        subtitle="Pengaturan website dan sistem admin"
      />

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-slate-600">Halaman pengaturan website.</p>
      </div>
    </div>
  );
}
