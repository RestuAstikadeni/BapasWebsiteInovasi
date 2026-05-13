// src/admin/pages/KelolaKlienDewasa.jsx

import React from "react";
import SectionTitle from "./components/ui/SectionTitle";

export default function KelolaKlienDewasa() {
  return (
    <div>
      <SectionTitle
        title="Kelola Klien Dewasa"
        subtitle="Kelola pelayanan klien dewasa"
      />

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-slate-600">
          Halaman pengelolaan pelayanan klien dewasa.
        </p>
      </div>
    </div>
  );
}
