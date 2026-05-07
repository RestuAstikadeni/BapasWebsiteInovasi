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
import Admin from "./pages/Admin";
import ScrollToTop from "./components/ScrollToTop";

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
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BaseLayout>
  );
}
