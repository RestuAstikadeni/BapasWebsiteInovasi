import React from "react";

export default function News() {
  const newsList = [
    {
      id: 1,
      title: "Inovasi Baru BAPAS",
      description:
        "Informasi terbaru tentang pengembangan sistem dan layanan yang sedang berjalan.",
    },
    {
      id: 2,
      title: "Program Pengembangan",
      description:
        "Berbagai kegiatan dan pembaruan program inovasi untuk mendukung pelayanan.",
    },
    {
      id: 3,
      title: "Kolaborasi dan Aktivitas",
      description:
        "Update mengenai kolaborasi, agenda, dan aktivitas terbaru dari tim.",
    },
  ];

  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          News
        </h1>
        <p className="mt-2 text-slate-600">
          Halaman berita dan update terbaru akan tampil di sini.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {newsList.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 h-40 rounded-xl bg-slate-100"></div>

            <h2 className="text-xl font-semibold text-slate-900">
              {item.title}
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {item.description}
            </p>

            <button
              type="button"
              className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Baca Selengkapnya
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
