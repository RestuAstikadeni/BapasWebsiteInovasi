// src/admin/pages/KelolaKlienAnak.jsx

import React from "react";
import SectionTitle from "./components/ui/SectionTitle";

export default function KelolaKlienAnak() {
  return (
    <div>
      <SectionTitle
        title="Kelola Klien Anak"
        subtitle="Kelola pelayanan klien anak"
      />

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-slate-600">
          Halaman pengelolaan pelayanan klien anak.
        </p>
      </div>
    </div>
  );
}
