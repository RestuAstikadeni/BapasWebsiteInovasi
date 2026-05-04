/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A1931",
          hover: "#1A3D63",
          dark: "#172554",
        },
        secondary: {
          DEFAULT: "#4A7FA7",
          light: "#B3CFE5",
        },
        background: {
          DEFAULT: "#F6FAFD",
          soft: "#f8fafc",
        },
        navy: {
          dark: "#0f2548",
          DEFAULT: "#1A3D63",
          deep: "#0f172a",
        },
        blueSoft: {
          DEFAULT: "#B3CFE5",
          light: "#F6FAFD",
          pale: "#eff6ff",
        },

        accent: {
          DEFAULT: "#fbbf24",
          hover: "#f59e0b",
        },

        slateCustom: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },

        success: {
          DEFAULT: "#34d399",
          dark: "#059669",
        },
      },
    },
  },
  plugins: [],
};
