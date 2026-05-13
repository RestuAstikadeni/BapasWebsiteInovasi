import React from "react";

export default function KlienDewasa() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-700">
            Pelayanan Klien Dewasa
          </span>

          <h1 className="mt-5 text-4xl font-bold text-slate-900">
            Pelayanan Klien Dewasa
          </h1>

          <p className="mt-5 leading-relaxed text-slate-600">
            Layanan klien dewasa meliputi pembuatan Litmas Dewasa dan
            pelaksanaan bimbingan bagi klien pemasyarakatan dewasa sebagai
            bagian dari proses pembinaan dan reintegrasi sosial.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* LITMAS */}
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="mb-4 text-4xl">🗂️</div>

            <h2 className="text-2xl font-bold text-slate-900">
              Pembuatan Litmas Dewasa
            </h2>

            <p className="mt-4 leading-relaxed text-slate-600">
              Pembuatan Penelitian Kemasyarakatan (Litmas) Dewasa digunakan
              sebagai bahan pertimbangan dalam proses peradilan dan pembinaan
              klien pemasyarakatan.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-100 p-4">
              <h3 className="font-semibold text-slate-800">
                Persyaratan Umum:
              </h3>

              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
                <li>Fotokopi identitas klien</li>
                <li>Dokumen pendukung perkara</li>
                <li>Surat permohonan dari instansi terkait</li>
              </ul>
            </div>
          </div>

          {/* BIMBINGAN */}
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="mb-4 text-4xl">👥</div>

            <h2 className="text-2xl font-bold text-slate-900">
              Bimbingan Klien Dewasa
            </h2>

            <p className="mt-4 leading-relaxed text-slate-600">
              Pelaksanaan bimbingan kepribadian dan kemandirian bagi klien
              dewasa yang menjalani program integrasi agar dapat kembali
              beradaptasi dengan lingkungan sosial secara positif.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-100 p-4">
              <h3 className="font-semibold text-slate-800">
                Bentuk Bimbingan:
              </h3>

              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
                <li>Bimbingan kepribadian</li>
                <li>Bimbingan kemandirian</li>
                <li>Konseling dan pendampingan</li>
              </ul>
            </div>
          </div>
        </div>

        {/* INFO */}
        <div className="mt-10 rounded-3xl bg-indigo-600 p-8 text-white shadow-lg">
          <h2 className="text-2xl font-bold">Seluruh Layanan Gratis</h2>

          <p className="mt-4 leading-relaxed text-indigo-100">
            Seluruh pelayanan di Balai Pemasyarakatan Kelas I Mataram diberikan
            secara profesional, transparan, dan tidak dipungut biaya.
          </p>
        </div>
      </div>
    </div>
  );
}
