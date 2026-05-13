import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import Header from "../ui/TopBar";

export default function BaseLayout({ children }) {
  const location = useLocation();

  const hideFooterRoutes = ["/adminlogin", "/admindashboard"];

  const hideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen w-full bg-background">
      <Header className="sticky top-0 z-50" />
      <Navbar className="sticky top-0 z-50" />

      <main className=" w-full mx-auto px-4 py-4 sm:px-6 sm:py-6 md:px-10 lg:px-20 xl:px-40 mb-10">
        {children}
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
}
