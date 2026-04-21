<<<<<<< HEAD
import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Service from './pages/Service';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="App min-h-screen bg-slate-50">
      <header className="flex flex-wrap gap-3 justify-center items-center p-4 bg-white/90 border-b border-slate-200 shadow-sm sticky top-0 z-20">
        <button
          type="button"
          onClick={() => setPage('home')}
          className={`px-4 py-2 rounded-full border text-sm font-semibold ${page === 'home' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'}`}
        >
          Home
        </button>
        <button
          type="button"
          onClick={() => setPage('profile')}
          className={`px-4 py-2 rounded-full border text-sm font-semibold ${page === 'profile' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'}`}
        >
          Profile
        </button>
        <button
          type="button"
          onClick={() => setPage('service')}
          className={`px-4 py-2 rounded-full border text-sm font-semibold ${page === 'service' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'}`}
        >
          Service
        </button>
      </header>

      <main className="p-4">
        {page === 'profile' ? <Profile /> : page === 'service' ? <Service /> : <Home />}
      </main>
    </div>
=======
import React from "react";
import { Routes, Route } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout";
import Home from "./pages/Home";
import News from "./pages/News";

export default function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BaseLayout>
>>>>>>> cc3efcc2c305c398ce2028bf28249e3a99f5e088
  );
}
