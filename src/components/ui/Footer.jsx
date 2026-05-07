import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary px-6 py-12 text-white md:px-16">
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="mb-4 text-xl font-bold">
            BALAI PEMASYARAKATAN KELAS I MATARAM
          </h3>

          <p className="text-sm leading-7 text-blueSoft-light">
            Balai Pemasyarakatan Kelas I Mataram merupakan unit pelaksana teknis
            pemasyarakatan yang menjalankan fungsi pembimbingan, pendampingan,
            dan pengawasan klien pemasyarakatan.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold">Kontak Kami</h3>

          <ul className="space-y-3 text-sm leading-6 text-blueSoft-light">
            <li>
              <span className="font-semibold text-white">Alamat:</span>
              <br />
              Jl. Hos Cokroaminoto No. 1, Mataram, Nusa Tenggara Barat
            </li>
            <li>
              <span className="font-semibold text-white">Telepon:</span>
              <br />
              (0370) 000000
            </li>
            <li>
              <span className="font-semibold text-white">Email:</span>
              <br />
              bapas.mataram@example.com
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold">Menu</h3>

          <ul className="space-y-3 text-sm text-blueSoft-light">
            <li>
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/profile" className="transition hover:text-white">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/services" className="transition hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/news" className="transition hover:text-white">
                News
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-blueSoft-light">
        <p className="font-semibold text-secondary-light">
          Balai Pemasyarakatan Kelas I Mataram
        </p>
        <p>Copyright © 2026. All rights reserved.</p>
      </div>
    </footer>
  );
}
