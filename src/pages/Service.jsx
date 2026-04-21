import React from 'react';

export default function Service() {
  const services = [
    {
      id: 1,
      title: "Penelitian Kemasyarakatan (Litmas)",
      description: "Pembuatan laporan Litmas untuk keperluan penyidikan, penuntutan, persidangan, hingga program pembinaan dan pembimbingan klien.",
      icon: "📄",
      color: "bg-blue-50 border-blue-100 text-blue-600"
    },
    {
      id: 2,
      title: "Pembimbingan Klien",
      description: "Program bimbingan kepribadian dan kemandirian bagi klien pemasyarakatan (Pembebasan Bersyarat, Cuti Bersyarat, Asimilasi).",
      icon: "👥",
      color: "bg-amber-50 border-amber-100 text-amber-600"
    },
    {
      id: 3,
      title: "Pengawasan Klien",
      description: "Melakukan pengawasan secara berkala untuk memastikan klien melaksanakan kewajiban dan tidak mengulangi tindak pidana.",
      icon: "👀",
      color: "bg-emerald-50 border-emerald-100 text-emerald-600"
    },
    {
      id: 4,
      title: "Pendampingan Anak (ABH)",
      description: "Pendampingan khusus bagi Anak yang Berhadapan dengan Hukum di setiap tingkat pemeriksaan (kepolisian, kejaksaan, pengadilan).",
      icon: "🤝",
      color: "bg-rose-50 border-rose-100 text-rose-600"
    },
    {
      id: 5,
      title: "Sidang TPP",
      description: "Pelaksanaan Sidang Tim Pengamat Pemasyarakatan untuk memberikan rekomendasi terkait program pembinaan dan pembimbingan.",
      icon: "⚖️",
      color: "bg-purple-50 border-purple-100 text-purple-600"
    },
    {
      id: 6,
      title: "Layanan Pengaduan & Informasi",
      description: "Layanan terpadu untuk penyampaian informasi publik, konsultasi, serta penanganan pengaduan masyarakat secara transparan.",
      icon: "💬",
      color: "bg-cyan-50 border-cyan-100 text-cyan-600"
    }
  ];

  const features = [
    { icon: "⏱️", title: "Tepat Waktu", desc: "Penyelesaian layanan sesuai SOP" },
    { icon: "🛡️", title: "Transparan", desc: "Bebas dari pungli & gratifikasi" },
    { icon: "🏅", title: "Profesional", desc: "Dilayani oleh PK Bapas kompeten" }
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
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-sm font-medium tracking-wider uppercase text-blue-100">Zona Integritas WBK/WBBM</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Layanan Utama <br className="hidden md:block"/>
              <span className="text-amber-400">Bapas Kelas I Mataram</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed">
              Kami berkomitmen memberikan pelayanan Prima, Pasti, dan Tanpa Pungutan Liar kepada seluruh masyarakat dan Klien Pemasyarakatan di wilayah kerja Mataram.
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

      {/* Main Services Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Katalog Layanan Kami</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Berbagai jenis layanan hukum dan kemasyarakatan yang kami sediakan, ditangani langsung oleh Pembimbing Kemasyarakatan (PK) yang profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border transition-colors duration-300 ${service.color} group-hover:scale-110`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <a href="#profile" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors mt-auto">
                Baca Selengkapnya
                <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Maklumat Pelayanan / Guarantee Section */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="p-10 lg:p-16 lg:w-1/2 flex flex-col justify-center">
              <h3 className="text-amber-400 font-bold tracking-wider uppercase mb-2 text-sm">Maklumat Pelayanan</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                "Kami Sanggup Menyelenggarakan Pelayanan Sesuai Standar"
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Seluruh layanan pada Balai Pemasyarakatan Kelas I Mataram <strong>TIDAK DIPUNGUT BIAYA (GRATIS)</strong>. Laporkan jika Anda menemukan indikasi pungli!
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-6 rounded-lg transition-colors">
                  Lapor Pungli (WBS)
                </button>
                <button className="bg-transparent border border-blue-400 text-white hover:bg-blue-800 font-semibold py-3 px-6 rounded-lg transition-colors">
                  Lihat Standar Layanan
                </button>
              </div>
            </div>
            
            <div className="bg-slate-900/50 p-10 lg:p-16 lg:w-1/2 flex flex-col justify-center gap-8 backdrop-blur-sm">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-800 p-3 rounded-lg text-amber-400 shrink-0">
                    {feature.icon}
                  </div>
                  <div className="ml-5">
                    <h4 className="text-xl font-bold text-white mb-1">{feature.title}</h4>
                    <p className="text-blue-200">{feature.desc}</p>
                  </div>
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
            Butuh Bantuan atau Informasi Lebih Lanjut?
          </h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
            Tim Layanan Terpadu Bapas Kelas I Mataram siap membantu Anda. Silakan hubungi kami melalui saluran resmi atau datang langsung ke kantor kami.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Hubungi WhatsApp Admin
            </button>
            <button className="flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors border border-slate-700">
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