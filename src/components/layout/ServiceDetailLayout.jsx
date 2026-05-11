import React from "react";

export default function ServiceDetailLayout({
  title,
  description,
  requirements,
  process,
  duration,
  children,
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100 py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#0B3B66] via-[#145C4A] to-[#0B3B66] px-6 py-12 text-white shadow-2xl md:px-12 md:py-16">
          {/* DECORATION */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-yellow-400/20 blur-3xl" />

          <div className="relative z-10">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-md">
              Detail Layanan Bapas
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-200 md:text-lg">
              {description}
            </p>

            {/* INFO BOX */}
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <div className="text-3xl">📄</div>

                <h3 className="mt-3 text-lg font-bold">
                  Pelayanan Profesional
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Dilaksanakan oleh Pembimbing Kemasyarakatan yang kompeten dan
                  berpengalaman.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <div className="text-3xl">⚖️</div>

                <h3 className="mt-3 text-lg font-bold">Sesuai SOP</h3>

                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Seluruh pelayanan dilakukan sesuai prosedur dan ketentuan yang
                  berlaku.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <div className="text-3xl">🛡️</div>

                <h3 className="mt-3 text-lg font-bold">Gratis</h3>

                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Seluruh pelayanan di Balai Pemasyarakatan tidak dipungut
                  biaya.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GRID CONTENT */}
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* PERSYARATAN */}
          <div className="rounded-[35px] bg-white p-8 shadow-xl ring-1 ring-slate-100">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">
                ✔
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  Persyaratan
                </h2>

                <p className="text-sm text-slate-500">
                  Dokumen yang perlu disiapkan
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              {requirements.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4 transition hover:bg-slate-100"
                >
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">
                    ✓
                  </div>

                  <span className="text-sm leading-7 text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ALUR */}
          <div className="rounded-[35px] bg-white p-8 shadow-xl ring-1 ring-slate-100 lg:col-span-2">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                🔄
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  Alur Pelayanan
                </h2>

                <p className="text-sm text-slate-500">
                  Tahapan proses pelayanan
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {process.map((step, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-5 rounded-3xl border border-slate-100 bg-slate-50 p-5 transition hover:border-primary hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B3B66] to-[#145C4A] text-lg font-black text-white shadow-lg">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Tahap {index + 1}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ESTIMASI WAKTU */}
        <section className="mt-10 overflow-hidden rounded-[40px] bg-gradient-to-r from-[#001B3D] via-[#0B3B66] to-[#145C4A] p-8 text-white shadow-2xl md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                Estimasi Waktu Pelayanan
              </span>

              <h2 className="mt-5 text-3xl font-black md:text-4xl">
                Pelayanan Cepat & Tepat
              </h2>

              <p className="mt-4 max-w-xl leading-8 text-gray-200">
                Estimasi waktu pelayanan dapat berbeda sesuai kompleksitas
                perkara, kelengkapan dokumen, dan hasil penelitian
                kemasyarakatan.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="flex h-52 w-52 flex-col items-center justify-center rounded-full border-[10px] border-white/10 bg-white/10 text-center shadow-2xl backdrop-blur-md">
                <span className="text-sm uppercase tracking-widest text-gray-200">
                  Durasi
                </span>

                <h3 className="mt-3 text-4xl font-black">{duration}</h3>
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOM CONTENT */}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </div>
  );
}
