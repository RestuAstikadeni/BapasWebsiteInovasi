// src/admin/pages/KelolaOrganization.jsx

import React from "react";
import SectionTitle from "./components/ui/SectionTitle";

export default function KelolaOrganization() {
  return (
    <div>
      <SectionTitle
        title="Kelola Organisasi"
        subtitle="Kelola pejabat dan struktur organisasi"
      />

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-slate-600">Halaman pengelolaan organisasi.</p>
      </div>
    </div>
  );
}
