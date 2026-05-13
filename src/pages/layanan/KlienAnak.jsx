import React from "react";
import ServiceDetailLayout from "../../components/layout/ServiceDetailLayout";

export default function KlienAnak() {
  const sopPerlakuan = [
    {
      title: "Perlindungan",
      desc: "Kegiatan yang bersifat langsung maupun tidak langsung untuk melindungi Anak dari tindakan yang membahayakan fisik dan psikis.",
    },
    {
      title: "Keadilan",
      desc: "Setiap penyelesaian perkara Anak harus mencerminkan rasa keadilan bagi Anak.",
    },
    {
      title: "Non Diskriminasi",
      desc: "Tidak adanya perlakuan berbeda berdasarkan suku, agama, ras, gender, budaya, maupun kondisi fisik dan mental Anak.",
    },
    {
      title: "Kepentingan Terbaik Bagi Anak",
      desc: "Setiap pengambilan keputusan harus mempertimbangkan kelangsungan hidup dan tumbuh kembang Anak.",
    },
    {
      title: "Penghargaan terhadap Pendapat Anak",
      desc: "Anak berhak menyampaikan pendapatnya dalam setiap proses yang menyangkut dirinya.",
    },
  ];

  const penerimaanAnak = [
    "Petugas layanan informasi menerima Anak/Klien Anak dan berkas Anak/Klien Anak",
    "Petugas melakukan penelitian kelengkapan berkas dan mencocokkan identitas Anak/Klien",
    "Petugas melakukan pencatatan dalam buku piket penerimaan",
    "Petugas menyerahkan Anak/Klien Anak kepada petugas registrasi",
  ];

  const pendaftaranAnak = [
    "Petugas registrasi melakukan penelitian kelengkapan berkas",
    "Petugas registrasi memasukkan data dalam buku daftar",
    "Petugas registrasi menyerahkan klien ke SDP",
    "Petugas registrasi mengambil sidik jari dan foto klien",
    "Petugas registrasi menyerahkan klien kepada PK",
    "PK menerima klien beserta berkas",
    "PK melakukan identifikasi klien",
    "PK menjelaskan hak dan kewajiban klien",
    "PK membuat rencana program bimbingan",
    "PK mengisi dan menandatangani kartu bimbingan",
    "PK menentukan jadwal pembimbingan berikutnya",
    "PK membuat laporan penerimaan klien Anak",
  ];

  return (
    <ServiceDetailLayout
      title="Pelayanan Anak Terpadu"
      description="Pelayanan terpadu bagi Anak yang Berhadapan dengan Hukum (ABH) meliputi Litmas Anak, Konseling Anak, dan Bimbingan Anak."
      requirements={[
        "Fotokopi identitas Anak/Klien",
        "Surat permintaan Litmas atau pembimbingan",
        "Dokumen pendukung perkara",
        "Fotokopi Kartu Keluarga",
      ]}
      process={[
        "Pemohon menyerahkan berkas pelayanan",
        "Verifikasi dokumen oleh petugas",
        "Pelaksanaan Litmas/Konseling/Bimbingan",
        "Penyusunan laporan dan rekomendasi",
        "Monitoring dan evaluasi pembimbingan",
      ]}
      duration="1–3 Hari Kerja"
    >
      {/* SOP PERLAKUAN ANAK */}
      <section className="mt-16 rounded-[40px] bg-[#0F6B50] p-6 md:p-10 text-white shadow-2xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black uppercase tracking-wide">
            Standar Operasional Prosedur (SOP)
          </h2>

          <p className="mt-2 text-lg font-semibold text-orange-300">
            Perlakuan Anak di Balai Pemasyarakatan (Bapas)
          </p>
        </div>

        <div className="rounded-[35px] bg-[#F3EEDC] p-6 md:p-10 text-gray-800">
          <div className="space-y-8">
            {sopPerlakuan.map((item, index) => (
              <div
                key={index}
                className="border-b-2 border-dashed border-orange-400 pb-5 last:border-none"
              >
                <h3 className="text-lg font-extrabold uppercase text-[#0F6B50]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-700">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOP PENERIMAAN KLIEN ANAK */}
      <section className="mt-16 rounded-[40px] bg-[#ECECEC] p-6 md:p-10 shadow-2xl">
        <div className="mb-10 text-center">
          <h2 className="inline-block rounded-full border-4 border-gray-800 px-6 py-3 text-2xl font-black uppercase">
            SOP Penerimaan Klien Anak
          </h2>
        </div>

        <div className="space-y-5">
          {penerimaanAnak.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-2xl bg-gray-200 px-5 py-4 shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#145C4A] text-lg font-bold text-white">
                {index + 1}
              </div>

              <p className="text-sm font-medium leading-6 text-gray-700 md:text-base">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-white p-5 shadow-md">
          <h3 className="mb-3 text-lg font-bold">Dasar Hukum</h3>

          <ul className="list-decimal space-y-2 pl-5 text-sm text-gray-700">
            <li>Undang-Undang RI No. 11 Tahun 2012</li>
            <li>Undang-Undang RI No. 22 Tahun 2022</li>
            <li>Peraturan Pemerintah RI No. 31 Tahun 1999</li>
            <li>Peraturan Menteri Hukum dan HAM RI terkait Bapas</li>
          </ul>
        </div>
      </section>

      {/* SOP PENDAFTARAN KLIEN ANAK */}
      <section className="mt-16 rounded-[40px] bg-[#E8D0B4] p-6 md:p-10 shadow-2xl">
        <div className="mb-10 text-center">
          <h2 className="inline-block rounded-full bg-[#E56E3A] px-6 py-3 text-2xl font-black uppercase text-white shadow-lg">
            SOP Pendaftaran Klien Anak
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {pendaftaranAnak.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-full border-2 border-yellow-400 bg-[#004B5B] px-5 py-4 text-white shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-[#004B5B]">
                {index + 1}
              </div>

              <p className="text-sm leading-6">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PELAYANAN TERPADU ANAK */}
      <section className="mt-16 rounded-[40px] bg-gradient-to-br from-[#0B3B66] to-[#145C4A] p-6 md:p-10 text-white shadow-2xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black uppercase tracking-wide">
            Pelayanan Terpadu Anak
          </h2>

          <p className="mt-3 text-gray-200">
            Pelayanan terpadu bagi Anak yang Berhadapan dengan Hukum (ABH)
            meliputi Litmas Anak, Konseling Anak, dan Bimbingan Anak.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* LITMAS */}
          <div className="rounded-3xl bg-white/10 p-7 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500 text-3xl shadow-lg">
              📄
            </div>

            <h3 className="mb-4 text-2xl font-bold">Litmas Anak</h3>

            <p className="text-sm leading-7 text-gray-200">
              Pelayanan penyusunan Penelitian Kemasyarakatan (Litmas) Anak
              sebagai bahan pertimbangan dalam proses peradilan, diversi,
              pembinaan, dan rekomendasi hukum.
            </p>

            <div className="mt-6 rounded-2xl bg-white/10 p-4">
              <h4 className="mb-2 font-semibold">Cakupan Layanan:</h4>

              <ul className="space-y-2 text-sm text-gray-200">
                <li>• Wawancara dan observasi</li>
                <li>• Penelitian lingkungan sosial</li>
                <li>• Penyusunan rekomendasi</li>
                <li>• Pendampingan proses diversi</li>
              </ul>
            </div>
          </div>

          {/* KONSELING */}
          <div className="rounded-3xl bg-white/10 p-7 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500 text-3xl shadow-lg">
              💬
            </div>

            <h3 className="mb-4 text-2xl font-bold">Konseling Anak</h3>

            <p className="text-sm leading-7 text-gray-200">
              Layanan konseling psikososial untuk membantu Anak dalam proses
              pemulihan, pembinaan mental, dan penguatan kesiapan reintegrasi
              sosial.
            </p>

            <div className="mt-6 rounded-2xl bg-white/10 p-4">
              <h4 className="mb-2 font-semibold">Cakupan Layanan:</h4>

              <ul className="space-y-2 text-sm text-gray-200">
                <li>• Konseling individu</li>
                <li>• Pendampingan psikososial</li>
                <li>• Motivasi dan penguatan diri</li>
                <li>• Konsultasi keluarga</li>
              </ul>
            </div>
          </div>

          {/* BIMBINGAN */}
          <div className="rounded-3xl bg-white/10 p-7 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500 text-3xl shadow-lg">
              🧒
            </div>

            <h3 className="mb-4 text-2xl font-bold">Bimbingan Anak</h3>

            <p className="text-sm leading-7 text-gray-200">
              Program pembimbingan dan pengawasan terhadap Anak selama menjalani
              masa integrasi guna mendukung perubahan perilaku positif dan
              reintegrasi sosial.
            </p>

            <div className="mt-6 rounded-2xl bg-white/10 p-4">
              <h4 className="mb-2 font-semibold">Cakupan Layanan:</h4>

              <ul className="space-y-2 text-sm text-gray-200">
                <li>• Pembimbingan kepribadian</li>
                <li>• Monitoring perkembangan Anak</li>
                <li>• Pengawasan program integrasi</li>
                <li>• Evaluasi pembinaan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INFORMASI TAMBAHAN */}
      <section className="mt-16 rounded-[40px] bg-navy p-8 text-white shadow-2xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Informasi Pelayanan Anak</h2>

          <p className="mt-3 text-gray-300">
            Pelayanan dilakukan berdasarkan prinsip perlindungan dan kepentingan
            terbaik bagi Anak.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">
            <h3 className="mb-4 text-xl font-bold">Tujuan Pelayanan</h3>

            <p className="text-sm leading-7 text-gray-200">
              Memberikan pelayanan profesional melalui penelitian
              kemasyarakatan, konseling, dan pembimbingan guna mendukung proses
              pembinaan Anak secara adil, humanis, dan berorientasi pada
              reintegrasi sosial.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">
            <h3 className="mb-4 text-xl font-bold">Prinsip Pelayanan</h3>

            <ul className="space-y-3 text-sm text-gray-200">
              <li>• Perlindungan Anak</li>
              <li>• Keadilan dan Non Diskriminasi</li>
              <li>• Kepentingan Terbaik Bagi Anak</li>
              <li>• Penghargaan terhadap Pendapat Anak</li>
              <li>• Pembinaan dan Pembimbingan</li>
            </ul>
          </div>
        </div>
      </section>
    </ServiceDetailLayout>
  );
}
