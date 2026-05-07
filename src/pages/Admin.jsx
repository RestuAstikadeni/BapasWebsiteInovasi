import React, { useState, useEffect } from 'react';

// --- KUMPULAN ICON SVG TIPIS (Modern UI) ---
const IconDashboard = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>;
const IconProfile = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>;
const IconNews = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" /></svg>;
const IconService = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.832M11.42 15.17l-.46.46a2.548 2.548 0 11-3.598-3.598l.46-.46m9.624 5.378l-5.111-5.112m-4.513 4.513l-.46.46a2.548 2.548 0 11-3.598-3.598l.46-.46m9.624 5.378l-5.111-5.112m-4.513 4.513A2.548 2.548 0 011.5 10.5c0-1.406 1.142-2.548 2.548-2.548m12.42-3.483L14.46 2.46A2.548 2.548 0 1010.86 6.06l.46.46m3.148-2.051l-5.111 5.111M6.347 11.653A2.548 2.548 0 002.75 15.25m3.597-3.597l-2.05 2.05m-1.547-1.548L1.5 10.5m10.92-3.483l-2.05 2.05m1.548 1.547L10.5 12" /></svg>;
const IconMenu = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>;
const IconClose = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>;
const IconEdit = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.89 1.112l-3.15.8a.75.75 0 01-.933-.933l.8-3.15a4.5 4.5 0 011.112-1.89l13.432-13.432zM16.862 4.487L19.5 7.125" /></svg>;
const IconDelete = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>;

// --- KOMPONEN BANTUAN (MODAL) ---
const ConfirmModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 overflow-hidden transform transition-all">
        <h3 className="text-lg font-medium text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-500 mb-6">{message}</p>
        <div className="flex justify-end space-x-3">
          <button onClick={onCancel} className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">Batal</button>
          <button onClick={onConfirm} className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors">Hapus</button>
        </div>
      </div>
    </div>
  );
};

// --- KOMPONEN HALAMAN ---

const Dashboard = ({ newsCount, serviceCount }) => (
  <div className="space-y-6 animate-fadeIn">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h2 className="text-2xl font-light text-slate-800">Dashboard</h2>
        <p className="text-sm text-slate-500 mt-1">Ringkasan aktivitas website Bapas Kelas I Mataram hari ini.</p>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100 flex items-center space-x-4 transition-transform hover:-translate-y-1">
        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><IconNews /></div>
        <div>
          <p className="text-sm font-medium text-slate-500">Total Berita</p>
          <h3 className="text-2xl font-semibold text-slate-800">{newsCount}</h3>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100 flex items-center space-x-4 transition-transform hover:-translate-y-1">
        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><IconService /></div>
        <div>
          <p className="text-sm font-medium text-slate-500">Program Layanan</p>
          <h3 className="text-2xl font-semibold text-slate-800">{serviceCount}</h3>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100 flex items-center space-x-4 transition-transform hover:-translate-y-1">
        <div className="p-3 bg-purple-50 text-purple-600 rounded-xl"><IconProfile /></div>
        <div>
          <p className="text-sm font-medium text-slate-500">Klien Aktif</p>
          <h3 className="text-2xl font-semibold text-slate-800">312</h3>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100">
      <h3 className="text-lg font-medium text-slate-800 mb-4">Status Sistem Penyimpanan</h3>
      <div className="space-y-4 text-sm text-slate-600">
        <p>Aplikasi ini sekarang menggunakan <span className="font-semibold text-blue-600">Local Storage</span> browser. Semua data CRUD (Tambah, Edit, Hapus) sudah disimpan secara lokal.</p>
        <p className="text-xs text-emerald-700 bg-emerald-50 p-3 rounded-lg border border-emerald-200">
          ✓ Data tidak akan hilang saat halaman di-refresh. Untuk menampilkan data ini di halaman depan, integrasikan pembacaan <code className="bg-emerald-100 px-1 py-0.5 rounded">localStorage</code> di halaman Home.jsx, News.jsx, dan Service.jsx Anda.
        </p>
      </div>
    </div>
  </div>
);

const KelolaProfile = ({ profile, onSaveProfile }) => {
  const [formData, setFormData] = useState(profile);
  const [isSaved, setIsSaved] = useState(false);

  // Sync state if profile props change
  useEffect(() => { setFormData(profile); }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSaveProfile(formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <h2 className="text-2xl font-light text-slate-800">Kelola Profile</h2>
        <p className="text-sm text-slate-500 mt-1">Perbarui informasi profil Bapas Kelas I Mataram di website.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100 overflow-hidden">
        <form onSubmit={handleSave} className="p-6 md:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Nama Instansi</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors text-slate-700" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Email Kontak</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors text-slate-700" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Deskripsi Singkat (Tentang Kami)</label>
            <textarea rows="4" name="description" value={formData.description} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors text-slate-700 resize-none"></textarea>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Visi Institusi</label>
            <textarea rows="3" name="vision" value={formData.vision} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors text-slate-700 resize-none"></textarea>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Alamat</label>
            <textarea rows="2" name="address" value={formData.address} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors text-slate-700 resize-none"></textarea>
          </div>

          <div className="pt-4 flex items-center space-x-4 border-t border-slate-100">
            <button type="submit" className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium transition-colors">
              Simpan Perubahan
            </button>
            {isSaved && <span className="text-sm text-emerald-600 font-medium animate-pulse">✓ Berhasil disimpan</span>}
          </div>
        </form>
      </div>
    </div>
  );
};

const KelolaNews = ({ newsData, onAdd, onEdit, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [formData, setFormData] = useState({ title: '', date: '', status: 'Published', author: 'Humas' });

  const openModal = (item = null) => {
    if (item) {
      setEditingItem(item);
      setFormData(item);
    } else {
      setEditingItem(null);
      const today = new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
      setFormData({ title: '', date: today, status: 'Published', author: 'Humas' });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingItem) onEdit({ ...editingItem, ...formData });
    else onAdd(formData);
    closeModal();
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-light text-slate-800">Kelola News</h2>
          <p className="text-sm text-slate-500 mt-1">Tambah, edit, dan hapus artikel berita kegiatan Bapas.</p>
        </div>
        <button onClick={() => openModal()} className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors flex items-center space-x-2 text-sm shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
          <span>Tambah Berita</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50/50 text-slate-500 font-medium border-b border-slate-100">
              <tr>
                <th className="px-6 py-4">Judul Berita</th>
                <th className="px-6 py-4">Tanggal</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {newsData.length === 0 ? (
                <tr><td colSpan="4" className="px-6 py-8 text-center text-slate-400">Belum ada data berita.</td></tr>
              ) : (
                newsData.map((news) => (
                  <tr key={news.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-800">{news.title}</td>
                    <td className="px-6 py-4 text-slate-500">{news.date}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${news.status === 'Published' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                        {news.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <button onClick={() => openModal(news)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                          <IconEdit />
                        </button>
                        <button onClick={() => setDeleteId(news.id)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Hapus">
                          <IconDelete />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="font-semibold text-slate-800">{editingItem ? 'Edit Berita' : 'Tambah Berita Baru'}</h3>
              <button onClick={closeModal} className="text-slate-400 hover:text-slate-600"><IconClose /></button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Judul Berita</label>
                <input type="text" required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" placeholder="Masukkan judul berita" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Tanggal</label>
                  <input type="text" required value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                  <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white">
                    <option value="Published">Published</option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>
              </div>
              <div className="pt-4 flex justify-end space-x-3">
                <button type="button" onClick={closeModal} className="px-5 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">Batal</button>
                <button type="submit" className="px-5 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Konfirmasi Hapus */}
      <ConfirmModal 
        isOpen={deleteId !== null} 
        title="Hapus Berita" 
        message="Apakah Anda yakin ingin menghapus berita ini? Tindakan ini tidak dapat dibatalkan." 
        onConfirm={() => { onDelete(deleteId); setDeleteId(null); }} 
        onCancel={() => setDeleteId(null)} 
      />
    </div>
  );
};

const KelolaService = ({ serviceData, onAdd, onEdit, onDelete, onToggle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [formData, setFormData] = useState({ name: '', desc: '', active: true });

  const openModal = (item = null) => {
    if (item) {
      setEditingItem(item);
      setFormData(item);
    } else {
      setEditingItem(null);
      setFormData({ name: '', desc: '', active: true });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingItem) onEdit({ ...editingItem, ...formData });
    else onAdd(formData);
    closeModal();
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-light text-slate-800">Kelola Service (Layanan)</h2>
          <p className="text-sm text-slate-500 mt-1">Atur daftar program layanan Bapas untuk masyarakat dan klien.</p>
        </div>
        <button onClick={() => openModal()} className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium transition-colors flex items-center space-x-2 text-sm shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
          <span>Tambah Layanan</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {serviceData.length === 0 && (
          <div className="col-span-full py-10 text-center text-slate-400 bg-white border border-slate-100 rounded-2xl">
            Belum ada data layanan. Silakan tambah layanan baru.
          </div>
        )}
        {serviceData.map((service) => (
          <div key={service.id} className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100 flex flex-col h-full group transition-all duration-300 hover:shadow-md hover:border-blue-100">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${service.active ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-100 text-slate-400'}`}>
                <IconService />
              </div>
              <div className="flex space-x-1 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity bg-slate-50 p-1 rounded-lg border border-slate-100">
                <button onClick={() => openModal(service)} className="p-1.5 text-slate-500 hover:text-blue-600 rounded-md hover:bg-white transition-colors" title="Edit"><IconEdit /></button>
                <button onClick={() => setDeleteId(service.id)} className="p-1.5 text-slate-500 hover:text-red-600 rounded-md hover:bg-white transition-colors" title="Hapus"><IconDelete /></button>
              </div>
            </div>
            <h3 className={`text-lg font-medium mb-2 ${service.active ? 'text-slate-800' : 'text-slate-400'}`}>{service.name}</h3>
            <p className={`text-sm mb-6 flex-grow ${service.active ? 'text-slate-500' : 'text-slate-400'}`}>{service.desc}</p>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
              <span className={`text-xs font-medium ${service.active ? 'text-blue-600' : 'text-slate-400'}`}>
                {service.active ? 'Status: Aktif' : 'Status: Non-Aktif'}
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={service.active} onChange={() => onToggle(service.id)} />
                <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
              </label>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Form Layanan */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="font-semibold text-slate-800">{editingItem ? 'Edit Layanan' : 'Tambah Layanan Baru'}</h3>
              <button onClick={closeModal} className="text-slate-400 hover:text-slate-600"><IconClose /></button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nama Layanan</label>
                <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" placeholder="Misal: Bimbingan Kepribadian" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Deskripsi Layanan</label>
                <textarea rows="3" required value={formData.desc} onChange={e => setFormData({...formData, desc: e.target.value})} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none" placeholder="Jelaskan detail layanan..."></textarea>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <input type="checkbox" id="activeStatus" checked={formData.active} onChange={e => setFormData({...formData, active: e.target.checked})} className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                <label htmlFor="activeStatus" className="text-sm font-medium text-slate-700 cursor-pointer">Set sebagai Layanan Aktif</label>
              </div>
              <div className="pt-4 flex justify-end space-x-3">
                <button type="button" onClick={closeModal} className="px-5 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">Batal</button>
                <button type="submit" className="px-5 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Konfirmasi Hapus Layanan */}
      <ConfirmModal 
        isOpen={deleteId !== null} 
        title="Hapus Layanan" 
        message="Apakah Anda yakin ingin menghapus program layanan ini?" 
        onConfirm={() => { onDelete(deleteId); setDeleteId(null); }} 
        onCancel={() => setDeleteId(null)} 
      />
    </div>
  );
};

// --- DATA DEFAULT DEFAULT (Sebagai fallback jika local storage kosong) ---
const DEFAULT_PROFILE = {
  name: "Balai Pemasyarakatan Kelas I Mataram",
  email: "humas@bapasmataram.kemenkumham.go.id",
  description: "Balai Pemasyarakatan (Bapas) Kelas I Mataram adalah instansi pemerintah yang memiliki peran vital dalam Sistem Peradilan Pidana, khususnya dalam Sistem Peradilan Pidana Anak (SPPA). Kami tidak memenjarakan, melainkan membimbing dan mendampingi.",
  vision: '"Menjadi penyelenggara Pemasyarakatan yang profesional, akuntabel, sinergi, transparan, dan inovatif (PASTI) dalam mewujudkan Klien Pemasyarakatan yang berintegritas, mandiri, dan diterima kembali oleh masyarakat."',
  address: "Jl. Majapahit No. 44, Kekalik Jaya, Kec. Sekarbela, Kota Mataram, Nusa Tenggara Barat 83115"
};

const DEFAULT_NEWS = [
  { id: 1, title: 'Inovasi Baru BAPAS', date: '04 Mei 2026', status: 'Published', author: 'Humas' },
  { id: 2, title: 'Program Pengembangan', date: '28 Apr 2026', status: 'Published', author: 'Humas' },
  { id: 3, title: 'Kolaborasi dan Aktivitas', date: '15 Apr 2026', status: 'Draft', author: 'Humas' },
];

const DEFAULT_SERVICES = [
  { id: 1, name: 'Penelitian Kemasyarakatan (Litmas)', desc: 'Pembuatan laporan Litmas untuk keperluan penyidikan, penuntutan, persidangan, hingga program pembinaan.', active: true },
  { id: 2, name: 'Pembimbingan Klien', desc: 'Program bimbingan kepribadian dan kemandirian bagi klien pemasyarakatan.', active: true },
  { id: 3, name: 'Pengawasan Klien', desc: 'Melakukan pengawasan secara berkala untuk memastikan klien melaksanakan kewajiban.', active: true },
  { id: 4, name: 'Pendampingan Anak (ABH)', desc: 'Pendampingan khusus bagi Anak yang Berhadapan dengan Hukum di setiap tingkat pemeriksaan.', active: true },
  { id: 5, name: 'Sidang TPP', desc: 'Pelaksanaan Sidang Tim Pengamat Pemasyarakatan untuk memberikan rekomendasi.', active: true },
  { id: 6, name: 'Layanan Pengaduan & Informasi', desc: 'Layanan terpadu untuk penyampaian informasi publik dan penanganan pengaduan.', active: true },
];


// --- KOMPONEN UTAMA (APP) DENGAN PENGATURAN STATE & LOCAL STORAGE ---

export default function AdminApp() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // --- INITIAL DATA (Dari LocalStorage atau Default) ---
  const [profileData, setProfileData] = useState(() => {
    const saved = localStorage.getItem('bapas_profile');
    return saved ? JSON.parse(saved) : DEFAULT_PROFILE;
  });

  const [newsList, setNewsList] = useState(() => {
    const saved = localStorage.getItem('bapas_news');
    return saved ? JSON.parse(saved) : DEFAULT_NEWS;
  });

  const [serviceList, setServiceList] = useState(() => {
    const saved = localStorage.getItem('bapas_services');
    return saved ? JSON.parse(saved) : DEFAULT_SERVICES;
  });

  // --- CRUD HANDLERS (Simpan ke State dan LocalStorage) ---
  
  // Profile Handlers
  const handleSaveProfile = (data) => {
    setProfileData(data);
    localStorage.setItem('bapas_profile', JSON.stringify(data));
  };

  // News Handlers
  const handleAddNews = (item) => {
    const newData = [{ ...item, id: Date.now() }, ...newsList];
    setNewsList(newData);
    localStorage.setItem('bapas_news', JSON.stringify(newData));
  };
  const handleEditNews = (item) => {
    const newData = newsList.map(n => n.id === item.id ? item : n);
    setNewsList(newData);
    localStorage.setItem('bapas_news', JSON.stringify(newData));
  };
  const handleDeleteNews = (id) => {
    const newData = newsList.filter(n => n.id !== id);
    setNewsList(newData);
    localStorage.setItem('bapas_news', JSON.stringify(newData));
  };

  // Service Handlers
  const handleAddService = (item) => {
    const newData = [...serviceList, { ...item, id: Date.now() }];
    setServiceList(newData);
    localStorage.setItem('bapas_services', JSON.stringify(newData));
  };
  const handleEditService = (item) => {
    const newData = serviceList.map(s => s.id === item.id ? item : s);
    setServiceList(newData);
    localStorage.setItem('bapas_services', JSON.stringify(newData));
  };
  const handleDeleteService = (id) => {
    const newData = serviceList.filter(s => s.id !== id);
    setServiceList(newData);
    localStorage.setItem('bapas_services', JSON.stringify(newData));
  };
  const handleToggleService = (id) => {
    const newData = serviceList.map(s => s.id === id ? { ...s, active: !s.active } : s);
    setServiceList(newData);
    localStorage.setItem('bapas_services', JSON.stringify(newData));
  };

  // Lock scroll on mobile sidebar
  useEffect(() => {
    if (isSidebarOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isSidebarOpen]);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: IconDashboard },
    { id: 'profile', label: 'Kelola Profile', icon: IconProfile },
    { id: 'news', label: 'Kelola News', icon: IconNews },
    { id: 'service', label: 'Kelola Service', icon: IconService },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': 
        return <Dashboard newsCount={newsList.length} serviceCount={serviceList.length} />;
      case 'profile': 
        return <KelolaProfile profile={profileData} onSaveProfile={handleSaveProfile} />;
      case 'news': 
        return <KelolaNews newsData={newsList} onAdd={handleAddNews} onEdit={handleEditNews} onDelete={handleDeleteNews} />;
      case 'service': 
        return <KelolaService serviceData={serviceList} onAdd={handleAddService} onEdit={handleEditService} onDelete={handleDeleteService} onToggle={handleToggleService} />;
      default: 
        return <Dashboard newsCount={newsList.length} serviceCount={serviceList.length} />;
    }
  };

  const handleMenuClick = (id) => {
    setActiveTab(id);
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden transition-opacity" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-100 shadow-[4px_0_24px_rgba(0,0,0,0.02)] transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:flex lg:flex-col
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-20 flex items-center justify-between px-8 border-b border-slate-50">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">BM</div>
            <span className="text-xl font-semibold tracking-tight text-slate-800">Bapas Mataram</span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg"><IconClose /></button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Menu Utama</p>
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;
            return (
              <button key={item.id} onClick={() => handleMenuClick(item.id)} className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-200 group relative ${isActive ? 'bg-blue-50/80 text-blue-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
                {isActive && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-600 rounded-r-full"></span>}
                <div className={`${isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'} transition-colors`}><Icon /></div>
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-50">
          <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-xl border border-slate-100/50">
            <img src="https://ui-avatars.com/api/?name=Admin+Bapas&background=cbd5e1&color=334155" alt="Admin" className="w-10 h-10 rounded-lg" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">Administrator</p>
              <p className="text-xs text-slate-500 truncate">admin@bapasmataram.go.id</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top Navbar */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-30 sticky top-0">
          <div className="flex items-center">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 -ml-2 mr-2 text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><IconMenu /></button>
            <h1 className="text-lg font-medium text-slate-800 capitalize hidden sm:block">{menuItems.find(m => m.id === activeTab)?.label}</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-sm font-medium text-red-600 hover:text-red-700 px-3 py-1.5 hover:bg-red-50 rounded-lg transition-colors">Logout</button>
          </div>
        </header>

        {/* Main Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scroll-smooth">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </main>
        
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
      `}} />
    </div>
  );
}