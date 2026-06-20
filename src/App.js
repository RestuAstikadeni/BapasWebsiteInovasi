import React from "react";
import { Routes, Route } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout";
import Home from "./pages/Home";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Profile from "./pages/Profile";
import Service from "./pages/Service";
import Organization from "./pages/Organization";
import Album from "./pages/Album";
import AdminDasboard from "./pages/admin/Dashboard";
import ScrollToTop from "./components/ScrollToTop";
import AdminLogin from "./pages/AdminLogin";
import KlienAnak from "./pages/layanan/KlienAnak";
import KlienDewasa from "./pages/layanan/KlienDewasa";

import KelolaService from "./pages/admin/KelolaService";
import KelolaKlienAnak from "./pages/admin/KelolaKlienAnak";
import KelolaKlienDewasa from "./pages/admin/KelolaKlienDewasa";
import KelolaOrganization from "./pages/admin/KelolaOrganization";
import KelolaNews from "./pages/admin/KelolaNews";
import Settings from "./pages/admin/Settings";
import FormWajibLapor from "./pages/FormWajibLapor";

export default function App() {
  return (
    <BaseLayout>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/services" element={<Service />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/album" element={<Album />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admindashboard" element={<AdminDasboard />} />
        <Route path="/layanan/klien-anak" element={<KlienAnak />} />
        <Route path="/layanan/klien-dewasa" element={<KlienDewasa />} />
        <Route path="/admin/kelola-service" element={<KelolaService />} />
        <Route path="/admin/kelola-klien-anak" element={<KelolaKlienAnak />} />
        <Route
          path="/admin/kelola-klien-dewasa"
          element={<KelolaKlienDewasa />}
        />
        <Route
          path="/admin/kelola-organization"
          element={<KelolaOrganization />}
        />
        <Route path="/admin/kelola-news" element={<KelolaNews />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/wajib-lapor" element={<FormWajibLapor />} />
      </Routes>
    </BaseLayout>
  );
}
