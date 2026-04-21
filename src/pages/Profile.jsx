import React from 'react';

// SVG Components pengganti lucide-react agar tanpa dependensi eksternal
const FileText = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>);
const Users = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>);
const Eye = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>);
const HeartHandshake = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2"/><path d="m15 18-2-2"/></svg>);
const Gavel = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"/><path d="m16 16 6-6"/><path d="m8 8 6-6"/><path d="m9 7 8 8"/><path d="m21 11-8-8"/></svg>);
const MessageSquare = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>);
const ArrowRight = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>);
const Clock = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>);
const ShieldCheck = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>);
const Award = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>);

// Tambahan ikon untuk halaman Profil
const Target = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>);
const MapPin = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>);
const Building = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>);
const CheckCircle = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>);

export default function Profile() {
  const tupoksi = [
    { title: "Penelitian Kemasyarakatan (Litmas)", desc: "Melaksanakan litmas untuk penyidikan, penuntutan, persidangan, dan program pembinaan." },
    { title: "Pembimbingan", desc: "Memberikan bimbingan kepribadian dan kemandirian bagi klien pemasyarakatan." },
    { title: "Pengawasan", desc: "Melakukan pengawasan pelaksanaan syarat bimbingan bagi klien yang menjalani integrasi." },
    { title: "Pendampingan ABH", desc: "Mendampingi Anak yang Berhadapan dengan Hukum di setiap proses peradilan pidana." }
  ];

  const misiList = [
    "Meningkatkan kualitas penyelenggaraan Penelitian Kemasyarakatan (Litmas).",
    "Mewujudkan efektivitas pembimbingan dan pengawasan Klien Pemasyarakatan.",
    "Mengoptimalkan pendampingan terhadap Anak yang Berhadapan dengan Hukum (ABH).",
    "Meningkatkan kualitas Sumber Daya Manusia (SDM) Pembimbing Kemasyarakatan.",
    "Mewujudkan tata kelola pemerintahan yang bersih, transparan, dan akuntabel."
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header / Hero Section */}
      <header className="bg-blue-950 text-white relative overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="2" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center space-x-2 bg-blue-800/50 rounded-full px-4 py-1.5 mb-6 border border-blue-700 backdrop-blur-sm">
              <Building size={16} className="text-amber-400" />
              <span className="text-sm font-medium tracking-wider uppercase text-blue-100">Profil Institusi</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Mengenal Lebih Dekat <br className="hidden md:block"/>
              <span className="text-amber-400">Bapas Kelas I Mataram</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed">
              Unit Pelaksana Teknis Pemasyarakatan di bawah naungan Kantor Wilayah Kementerian Hukum dan HAM Nusa Tenggara Barat yang berdedikasi dalam penegakan hukum dan pelindungan hak asasi manusia.
            </p>
          </div>
        </div>
        
        {/* Bottom Curve */}
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1440 120" className="w-full h-auto text-slate-50 fill-current" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </header>

      {/* Tentang Kami Section */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h3 className="text-amber-500 font-bold tracking-wider uppercase mb-2 text-sm">Tentang Bapas Mataram</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Mitra Penegak Hukum & Pelindung Masyarakat</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Balai Pemasyarakatan (Bapas) Kelas I Mataram adalah instansi pemerintah yang memiliki peran vital dalam Sistem Peradilan Pidana, khususnya dalam Sistem Peradilan Pidana Anak (SPPA). Kami tidak memenjarakan, melainkan membimbing dan mendampingi.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Melalui peran Pembimbing Kemasyarakatan (PK), kami hadir mulai dari tahap pra-ajudikasi (penyidikan), ajudikasi (persidangan), hingga post-ajudikasi (pembimbingan setelah bebas) untuk memastikan keadilan restoratif dan reintegrasi sosial yang sehat bagi Klien Pemasyarakatan.
            </p>
            <div className="grid grid-cols-2 gap-6 border-t border-slate-200 pt-8">
              <div>
                <div className="text-3xl font-bold text-blue-700 mb-1">PASTI</div>
                <div className="text-sm text-slate-500">Nilai Organisasi Kemenkumham</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-700 mb-1">WBK</div>
                <div className="text-sm text-slate-500">Menuju Wilayah Bebas dari Korupsi</div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-square md:aspect-video lg:aspect-square bg-slate-200 rounded-3xl overflow-hidden relative shadow-2xl">
              {/* Image Placeholder - since we don't have external images */}
              <div className="absolute inset-0 bg-blue-900 flex flex-col items-center justify-center text-white p-8 text-center">
                <Building size={80} className="text-blue-300 mb-6 opacity-50" />
                <h4 className="text-2xl font-bold mb-2">Gedung Bapas Kelas I Mataram</h4>
                <p className="text-blue-200">[ Placeholder Foto Kantor / Kegiatan ]</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-400 rounded-3xl -z-10 opacity-50 blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section className="bg-slate-900 py-20 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visi & Misi</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Visi */}
            <div className="bg-slate-800/50 p-8 md:p-12 rounded-3xl border border-slate-700 backdrop-blur-sm h-full flex flex-col">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/30">
                <Target size={32} className="text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Visi</h3>
              <p className="text-xl leading-relaxed text-slate-300 font-light italic">
                "Menjadi penyelenggara Pemasyarakatan yang profesional, akuntabel, sinergi, transparan, dan inovatif (PASTI) dalam mewujudkan Klien Pemasyarakatan yang berintegritas, mandiri, dan diterima kembali oleh masyarakat."
              </p>
            </div>

            {/* Misi */}
            <div className="bg-slate-800/50 p-8 md:p-12 rounded-3xl border border-slate-700 backdrop-blur-sm h-full">
              <div className="w-16 h-16 bg-emerald-600/20 rounded-2xl flex items-center justify-center mb-8 border border-emerald-500/30">
                <FileText size={32} className="text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-amber-400">Misi</h3>
              <ul className="space-y-4">
                {misiList.map((misi, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle size={24} className="text-emerald-400 shrink-0 mr-4 mt-0.5" />
                    <span className="text-slate-300 text-lg leading-relaxed">{misi}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tupoksi & Wilayah Kerja */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Wilayah Kerja */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 h-full">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6">
                <MapPin size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Wilayah Kerja</h3>
              <p className="text-slate-600 mb-6">
                Sebagai Balai Pemasyarakatan Kelas I, area yurisdiksi kerja kami mencakup wilayah-wilayah berikut di Provinsi Nusa Tenggara Barat:
              </p>
              <ul className="space-y-3">
                {["Kota Mataram", "Kabupaten Lombok Barat", "Kabupaten Lombok Utara", "Kabupaten Lombok Tengah", "Kabupaten Lombok Timur"].map((wilayah, idx) => (
                  <li key={idx} className="flex items-center text-slate-800 font-medium bg-white p-3 rounded-lg shadow-sm border border-slate-100">
                    <div className="w-2 h-2 rounded-full bg-amber-500 mr-3"></div>
                    {wilayah}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tugas Pokok dan Fungsi */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Tugas Pokok & Fungsi</h2>
            <p className="text-slate-600 mb-8 text-lg">Empat pilar utama pelaksanaan tugas Bapas dalam sistem peradilan pidana.</p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {tupoksi.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow group">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {idx + 1}
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Footer Section */}
      <footer className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Kunjungi Layanan Kami
          </h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
            Untuk informasi layanan Penelitian Kemasyarakatan, Pembimbingan, dan Pengaduan, silakan akses portal layanan Bapas Kelas I Mataram.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              <Award size={20} className="mr-2" />
              Kembali ke Halaman Layanan
            </button>
            <button className="flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors border border-slate-700">
              <MapPin size={20} className="mr-2" />
              Lokasi Kantor
            </button>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-800 text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Balai Pemasyarakatan Kelas I Mataram - Kementerian Hukum dan HAM RI.
          </div>
        </div>
      </footer>
    </div>
  );
}