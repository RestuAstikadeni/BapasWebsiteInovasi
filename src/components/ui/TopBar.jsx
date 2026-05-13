import React from "react";
import { Clock3 } from "lucide-react";
import { Facebook, Instagram, Youtube } from "./Icons";

export default function TopBar() {
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
    <div className="w-full border-b border-white/10 bg-navy text-white">
      <div className="mx-auto flex h-9 items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
        {/* SOCIAL */}
        <div className="flex items-center gap-3">
          {socialLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
                className="text-white/90 transition duration-300 hover:-translate-y-0.5 hover:text-blueSoft-light"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>

        {/* JAM OPERASIONAL */}
        <div className="flex items-center gap-2 text-[13px]  tracking-wide text-yellow-500 sm:text-sm">
          <Clock3 className="h-4 w-4" />

          <span className="whitespace-nowrap">Senin - Jumat 08:00 - 16:00</span>
        </div>
      </div>
    </div>
  );
}
