import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  User,
  MapPin,
  Phone,
  Calendar,
  Camera,
  FileText,
  ShieldCheck,
  Loader2,
  Navigation,
} from "lucide-react";

import BannerForm from "../assets/images/banner-form.png";

export default function WajibLaporForm() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    whatsapp: "",
    tanggal: "",
    kasus: "",
    namaPk: "",
    nomorPk: "",
    alasan: "",
    foto: null,
    latitude: "",
    longitude: "",
    maps: "",
  });

  const kasusList = [
    "Dalam Jabatan",
    "Ekonomi",
    "ITE",
    "KDRT",
    "Kenakalan",
    "Korupsi",
    "Kesusilaan",
    "Mata Uang",
    "Memalsukan Materai/Surat",
    "Memeras/Mengancam",
    "Money Laundering/TPPU",
    "Merusak Barang",
    "Narkotika",
    "Pembakaran",
    "Pembunuhan",
    "Penadahan",
    "Penganiayaan",
    "Penggelapan",
    "Penipuan",
    "Penculikan",
    "Pencurian",
    "Penyuapan",
    "Penyeludupan",
    "Perjudian",
    "Perikanan",
    "Perlindungan Anak",
    "Perampokan",
    "Politik",
    "Pornografi",
    "Subversi",
    "Terhadap Kepala Negara",
    "Terhadap Ketertiban",
    "Teroris",
    "Trafficking",
    "Yang lain",
  ];

  const pkList = [
    "ANANDA SEPTIANA LESTARI,S.Tr.Pas",
    "BADRUS",
    "BAIQ EFY MUFIDAH, A.Ma.",
    "CAHYA SULISTYANINGSIH, S.P., M.Si.",
    "DESY WULANDARI S.H.",
    "DEWA MADE YUDIK ARDIANTIKA,S.H.",
    "DONO BUDIARSO, S.Pt.",
    "FATHUL ANWAR HIDAYATULLAH,S.Psi.",
    "FIRMAN AKBARA.Md.",
    "I PANDE KETUT ARYA YARSITA,S.H.",
    "I WAYAN SUDIARTHA",
    "IKA INDAYANI, SH.",
    "INDRA RUKMA HISON SAFI I, S.H.",
    "JERY AGUS PRATAMA,SH.",
    "M. ARVIN, S.H.",
    "NAOVAL YUSFI MUTTAQIN, S.Psi., M.Sc.",
    "NI MADE DWI SURYANINGSIH, S.H.",
    "NIKEN RACHMAWATI, S.Tr.Pas",
    "NOVA TIKA UDAYANI, S.H.",
    "NOVAN RIZKI RAMADAN, S.Tr.Pas",
    "NURLAILAH,S.S.T.",
    "REGINA IBRAHIM, S.Tr.Pas",
    "RIZKY MILENIA,S.Tr.Pas",
    "SAHABUDIN",
    "SITI NURAHLIN, S.H.",
    "SITI RUTMAWATI, S.Sos.",
    "SONI HIDAYAT",
    "SUDRAJAT TRIWANDOKO,S.Psi.",
    "TRI KUMALASARI,A.Md.Kom.,SH.",
    "UNWANUL KHALISH, S.H.",
    "URBAN MURDANIL, S.Tr.Pas",
    "ZAINUL ASHADI PUTRA, S.Psi.",
  ];

  const nomorPkMap = {
    "ANANDA SEPTIANA LESTARI,S.Tr.Pas": "+62 859-3455-1717",
    BADRUS: "+62 819-3673-3209",
    "BAIQ EFY MUFIDAH, A.Ma": "+62 857-7287-7348",
    "CAHYA SULISTYANINGSIH, S.P., M.Si.": "+62 859-7452-4808",
    "DESY WULANDARI S.H.": "+62 812-2527-3236",
    "DEWA MADE YUDIK ARDIANTIKA,S.H.": "+62 812-3996-0490",
    "DONO BUDIARSO, S.Pt.": "+62 877-6508-2255",
    "FATHUL ANWAR HIDAYATULLAH,S.Psi.": "+62 812-2801-6702",
    "FIRMAN AKBARA.Md.": "+62 819-0710-1643",
    "I PANDE KETUT ARYA YARSITA,S.H.": "+62 817-7057-5610",
    "I WAYAN SUDIARTHA": "+62 819-0704-9060",
    "IKA INDAYANI, SH.": "+62 817-5777-568",
    "INDRA RUKMA HISON SAFI I, S.H.": "+62 857-4312-3456",
    "JERY AGUS PRATAMA,SH.": "+62 877-6592-8111",
    "M. ARVIN, S.H.": "+62 856-5574-0897",
    "NAOVAL YUSFI MUTTAQIN, S.Psi., M.Sc.": "+62 819-3086-2658",
    "NI MADE DWI SURYANINGSIH, S.H.": "+62 823-4085-9591",
    "NIKEN RACHMAWATI, S.Tr.Pas": "+62 878-1095-3001",
    "NOVA TIKA UDAYANI, S.H.": "+62 819-3316-5744",
    "NOVAN RIZKI RAMADAN, S.Tr.Pas": "+62 821-6448-4262",
    "NURLAILAH,S.S.T.": "+62 819-1808-8688",
    "REGINA IBRAHIM, S.Tr.Pas": "+62 898-3980-408",
    "RIZKY MILENIA,S.Tr.Pas": "+62 822-6553-2559",
    SAHABUDIN: "+62 853-3358-8282",
    "SITI NURAHLIN, S.H.": "+62 877-2844-6842",
    "SITI RUTMAWATI, S.Sos.": "+62 878-5997-8181",
    "SONI HIDAYAT": "+62 882-9487-8728",
    "SUDRAJAT TRIWANDOKO,S.Psi.": "+62 851-5896-1162",
    "TRI KUMALASARI,A.Md.Kom.,SH.": "+62 852-4455-2520",
    "UNWANUL KHALISH, S.H.": "+62 819-0776-6668",
    "URBAN MURDANIL, S.Tr.Pas": "+62 812-9263-1958",
    "ZAINUL ASHADI PUTRA, S.Psi.": "+62 823-5956-0745",
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      // jika memilih nama PK
      if (name === "namaPk") {
        setFormData({
          ...formData,
          namaPk: value,
          nomorPk: nomorPkMap[value] || "",
        });
      } else {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    }
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Browser tidak mendukung GPS");
      return;
    }

    const loadingToast = toast.loading("Mengambil lokasi...");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        toast.dismiss(loadingToast);

        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        setFormData((prev) => ({
          ...prev,
          latitude: lat,
          longitude: lng,
          maps: `https://maps.google.com/?q=${lat},${lng}`,
        }));

        toast.success("Lokasi berhasil didapatkan");
      },
      () => {
        toast.dismiss(loadingToast);
        toast.error("Gagal mendapatkan lokasi");
      },  
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.latitude) {
      toast.error("Silakan ambil lokasi terlebih dahulu");
      return;
    }

    setLoading(true);

    const loadingToast = toast.loading("Mengirim wajib lapor...");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxngxLle_CBejptiQXS0yzow2qmX1-Qgx4QqlVnWuL8OCI5CL7MAOYl9O5hIoZmwnxs/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        },
      );

      toast.dismiss(loadingToast);

      toast.success("Wajib lapor berhasil dikirim", {
        duration: 4000,
      });

      setFormData({
        nama: "",
        alamat: "",
        whatsapp: "",
        tanggal: "",
        kasus: "",
        namaPk: "",
        nomorPk: "",
        alasan: "",
        foto: null,
        latitude: "",
        longitude: "",
        maps: "",
      });
    } catch (error) {
      console.error(error);

      toast.dismiss(loadingToast);

      toast.error("Terjadi kesalahan saat mengirim");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="min-h-screen ">
        <div className="mx-auto max-w-3xl">
          {/* Banner */}
          <div className="overflow-hidden rounded-2xl border bg-white shadow-lg">
            <div className="h-3 bg-navy" />

            {/* Header */}
            <div className="border-b p-6">
              <div className="mb-3 flex items-center gap-3">
                <ShieldCheck className="h-8 w-8 text-navy" />

                <div>
                  <h1 className="text-3xl font-bold text-gray-800">
                    WAJIB LAPOR KLIEN
                  </h1>
                </div>
              </div>

              <div className="rounded-xl bg-indigo-50 p-4 text-sm leading-7 text-gray-700">
                <p>
                  Yth. Bapak/Ibu/Saudara/i,
                  <br />
                  Formulir Wajib Lapor Online ini disediakan sebagai alternatif
                  layanan pelaporan bagi klien pemasyarakatan yang benar-benar
                  berhalangan hadir secara langsung ke kantor Balai
                  Pemasyarakatan Kelas I Mataram karena kondisi tertentu yang
                  dapat dipertanggungjawabkan. Melalui layanan ini, klien
                  diwajibkan mengisi seluruh data dan informasi secara lengkap,
                  benar, dan sesuai dengan kondisi sebenarnya, serta melampirkan
                  bukti pendukung yang valid sebagai bentuk tanggung jawab dan
                  keakuratan pelaporan.
                </p>

                <p className="mt-3 text-red-500">
                  * Menunjukkan pertanyaan wajib diisi
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 p-6">
              {/* Nama */}
              <div className="rounded-2xl border p-5">
                <label className="mb-2 flex items-center gap-2 font-semibold">
                  <User size={18} />
                  Nama <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="nama"
                  required
                  value={formData.nama}
                  onChange={handleChange}
                  className="w-full rounded-xl border p-3 outline-none focus:border-indigo-500"
                  placeholder="Masukkan nama"
                />
              </div>

              {/* Alamat */}
              <div className="rounded-2xl border p-5">
                <label className="mb-2 flex items-center gap-2 font-semibold">
                  <MapPin size={18} />
                  Alamat <span className="text-red-500">*</span>
                </label>

                <textarea
                  name="alamat"
                  required
                  value={formData.alamat}
                  onChange={handleChange}
                  className="min-h-[120px] w-full rounded-xl border p-3 outline-none focus:border-indigo-500"
                  placeholder="Masukkan alamat"
                />
              </div>

              {/* WA */}
              <div className="rounded-2xl border p-5">
                <label className="mb-2 flex items-center gap-2 font-semibold">
                  <Phone size={18} />
                  Nomor WhatsApp <span className="text-red-500">*</span>
                </label>

                <input
                  type="tel"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full rounded-xl border p-3 outline-none focus:border-indigo-500"
                  placeholder="08xxxxxxxxxx"
                />
              </div>

              {/* Tanggal */}
              <div className="rounded-2xl border p-5">
                <label className="mb-2 flex items-center gap-2 font-semibold">
                  <Calendar size={18} />
                  Tanggal Wajib Lapor <span className="text-red-500">*</span>
                </label>

                <input
                  type="date"
                  name="tanggal"
                  required
                  value={formData.tanggal}
                  onChange={handleChange}
                  className="w-full rounded-xl border p-3 outline-none focus:border-indigo-500"
                />
              </div>

              {/* Kasus */}
              <div className="rounded-2xl border p-5">
                <label className="mb-4 flex items-center gap-2 font-semibold">
                  <FileText size={18} />
                  Kasus <span className="text-red-500">*</span>
                </label>

                <div className="grid gap-3 md:grid-cols-2">
                  {kasusList.map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border p-3 hover:bg-gray-50"
                    >
                      <input
                        type="radio"
                        name="kasus"
                        value={item}
                        required={!formData.kasus}
                        checked={formData.kasus === item}
                        onChange={handleChange}
                      />

                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Nama PK */}
              <div className="rounded-2xl border p-5">
                <label className="mb-4 flex items-center gap-2 font-semibold">
                  <User size={18} />
                  Nama PK <span className="text-red-500">*</span>
                </label>

                <div className="grid gap-3 md:grid-cols-2">
                  {pkList.map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border p-3 hover:bg-gray-50"
                    >
                      <input
                        type="radio"
                        name="namaPk"
                        value={item}
                        required={!formData.namaPk}
                        checked={formData.namaPk === item}
                        onChange={handleChange}
                      />

                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Nomor PK */}
              <div className="rounded-2xl border p-5">
                <label className="mb-2 font-semibold">
                  Nomor PK <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="nomorPk"
                  required
                  value={formData.nomorPk}
                  onChange={handleChange}
                  className="w-full rounded-xl border p-3 outline-none focus:border-indigo-500"
                  placeholder="Masukkan nomor PK"
                />
              </div>

              {/* Alasan */}
              <div className="rounded-2xl border p-5">
                <label className="mb-2 font-semibold">
                  Alasan Tidak Dapat Hadir{" "}
                  <span className="text-red-500">*</span>
                </label>

                <textarea
                  name="alasan"
                  required
                  value={formData.alasan}
                  onChange={handleChange}
                  className="min-h-[120px] w-full rounded-xl border p-3 outline-none focus:border-indigo-500"
                  placeholder="Masukkan alasan"
                />
              </div>

              {/* Lokasi */}
              <div className="rounded-2xl border p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h2 className="font-semibold">
                      Lokasi GPS <span className="text-red-500">*</span>
                    </h2>

                    <p className="text-sm text-gray-500">
                      Ambil lokasi otomatis
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={getLocation}
                    className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-white"
                  >
                    <Navigation size={18} />
                    Ambil Lokasi
                  </button>
                </div>

                {formData.latitude && (
                  <div className="rounded-xl bg-green-50 p-4 text-sm">
                    <p>Latitude: {formData.latitude}</p>
                    <p>Longitude: {formData.longitude}</p>

                    <a
                      href={formData.maps}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block text-indigo-600 underline"
                    >
                      Buka di Google Maps
                    </a>
                  </div>
                )}
              </div>

              {/* Upload */}
              <div className="rounded-2xl border p-5">
                <label className="mb-2 flex items-center gap-2 font-semibold">
                  <Camera size={18} />
                  Foto Kegiatan Klien <span className="text-red-500">*</span>
                </label>

                <input
                  type="file"
                  name="foto"
                  accept="image/*"
                  capture="environment"
                  required
                  onChange={handleChange}
                  className="w-full rounded-xl border p-3"
                />

                <p className="mt-2 text-sm text-gray-500">
                  Foto akan langsung diambil dari kamera
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Mengirim...
                  </>
                ) : (
                  "Kirim Wajib Lapor"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
