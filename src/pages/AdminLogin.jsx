import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

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

      // Toast sukses
      toast.success("Login berhasil!");

      setTimeout(() => {
        navigate("/admindashboard");
      }, 1200);
    } else {
      setError("Username atau password salah!");

      // Toast error
      toast.error("Username atau password salah!");
    }
  };

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="my-20 flex items-center justify-center px-4"
    >
      {/* Toast Container */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            borderRadius: "12px",
            padding: "16px",
            fontSize: "14px",
          },
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        whileHover={{
          y: -4,
          transition: { duration: 0.2 },
        }}
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-6 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-navy-dark"
          >
            Login Admin
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-1 text-xs text-slate-500"
          >
            Masuk ke dashboard admin
          </motion.p>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          {/* Username */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Username
            </label>

            <motion.input
              whileFocus={{
                scale: 1.01,
              }}
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Masukkan username"
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-navy"
              required
            />
          </motion.div>

          {/* Password */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>

            <motion.input
              whileFocus={{
                scale: 1.01,
              }}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Masukkan password"
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-navy"
              required
            />
          </motion.div>

          {/* Error */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl bg-red-100 px-4 py-2 text-sm text-red-600"
            >
              {error}
            </motion.div>
          )}

          {/* Button */}
          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            type="submit"
            className="mt-2 rounded-xl bg-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </motion.section>
  );
}
