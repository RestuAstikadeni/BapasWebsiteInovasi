import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Username & Password sederhana
    const adminUsername = "admin";
    const adminPassword = "12345";

    if (
      formData.username === adminUsername &&
      formData.password === adminPassword
    ) {
      localStorage.setItem("isAdminLogin", "true");

      alert("Login berhasil!");

      navigate("/admindashboard");
    } else {
      setError("Username atau password salah!");
    }
  };

  return (
    <section className="flex my-20 items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-navy-dark">Login Admin</h1>

          <p className="mt-1 text-xs text-slate-500">
            Masuk ke dashboard admin
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          {/* Username */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Username
            </label>

            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Masukkan username"
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-navy"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Masukkan password"
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-navy"
              required
            />
          </div>

          {/* Error */}
          {error && (
            <div className="rounded-xl bg-red-100 px-4 py-2 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            className="mt-2 rounded-xl bg-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Login
          </button>
        </form>
      </div> 
    </section>
  );
}
