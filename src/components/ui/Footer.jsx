import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "./Icons";

export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/InfoBapasMataram",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/bapasmataram",
      icon: Instagram,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@bapasmataram3480",
      icon: Youtube,
    },
  ];

  return (
    <footer className="bg-navy px-6 py-12 text-white md:px-16">
      <div className="grid gap-10 md:grid-cols-4">
        {/* Google Maps */}
        <div className="overflow-hidden rounded-xl border border-white/10">
          <iframe
            title="Lokasi Bapas Mataram"
            src="https://www.google.com/maps?q=Balai+Pemasyarakatan+Kelas+I+Mataram&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Tentang */}
        <div>
          <h3 className="mb-4 text-xl font-bold">
            BALAI PEMASYARAKATAN KELAS I MATARAM
          </h3>

          <p className="text-sm leading-7 text-blueSoft-light">
            Balai Pemasyarakatan Kelas I Mataram merupakan unit pelaksana teknis
            pemasyarakatan yang menjalankan fungsi pembimbingan, pendampingan,
            dan pengawasan klien pemasyarakatan.
          </p>

          {/* Sosial Media */}
          <div className="mt-6 flex items-center gap-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                  className="text-white/90 transition duration-300 hover:-translate-y-1 hover:text-blueSoft-light"
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Kontak Kami</h3>

          <ul className="space-y-3 text-sm leading-6 text-blueSoft-light">
            <li>
              <span className="font-semibold text-white">Alamat:</span>
              <br />
              Jl. Kokok Segara Raya, Lingkungan Kekalik Timur, Kekalik Jaya,
              Kec. Sekarbela, Kota Mataram, Nusa Tenggara Bar. 83116
            </li>

            <li>
              <span className="font-semibold text-white">Telepon:</span>
              <br />
              081946691939
            </li>

            <li>
              <span className="font-semibold text-white">Website:</span>
              <br />
              <a
                href="http://bapasmataram.kemenimipas.go.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                bapasmataram.kemenimipas.go.id
              </a>
            </li>
          </ul>
        </div>

        {/* Menu */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Menu</h3>

          <ul className="space-y-3 text-sm text-blueSoft-light">
            <li>
              <Link to="/" className="transition hover:text-white">
                Beranda
              </Link>
            </li>

            <li>
              <Link to="/profile" className="transition hover:text-white">
                Profil
              </Link>
            </li>

            <li>
              <Link to="/news" className="transition hover:text-white">
                Publikasi
              </Link>
            </li>

            <li>
              <Link to="/services" className="transition hover:text-white">
                Layanan
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
