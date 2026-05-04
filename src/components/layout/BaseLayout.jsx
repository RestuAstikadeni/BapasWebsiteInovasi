import React from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import Header from "../ui/TopBar";

export default function BaseLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navbar />

      <main className="mx-auto px-4 py-4 sm:px-6 sm:py-6 md:px-10 lg:px-20 xl:px-40 mb-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}
