import React from "react";
import { Routes, Route } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout";
import Home from "./pages/Home";
import News from "./pages/News";
import Profile from "./pages/Profile";
import Service from "./pages/Service";

export default function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/services" element={<Service />} />
      </Routes>
    </BaseLayout>
  );
}
