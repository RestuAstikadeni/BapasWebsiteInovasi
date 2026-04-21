import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
<<<<<<< HEAD
    <div className="home">
      <h1>Selamat Datang di BAPAS Website Inovasi</h1>
          <p>Temukan berbagai inovasi terbaru dan informasi menarik seputar BAPAS di sini.</p>
          <h1>COMING SOON awdawd</h1>
    </div>
=======
    <section className="flex min-h-[75vh] flex-col items-center justify-center rounded-2xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-slate-200">
      <span className="mb-4 rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
        Website Inovasi
      </span>

      <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Selamat Datang di BAPAS Website Inovasi
      </h1>

      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
        Temukan berbagai inovasi terbaru dan informasi menarik seputar BAPAS di
        sini.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/news"
          className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Lihat Berita
        </Link>

        <button
          type="button"
          className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Pelajari Lebih Lanjut
        </button>
      </div>

      <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 px-5 py-3 text-sm font-medium text-amber-700">
        COMING SOON
      </div>
    </section>
>>>>>>> cc3efcc2c305c398ce2028bf28249e3a99f5e088
  );
}
