import React from "react";
import { Facebook, Instagram, Youtube } from "./Icons";

export default function TopBar() {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/bapasmataram",
      icon: Instagram,
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      icon: Youtube,
    },
  ];

  return (
    <div className="w-full bg-navy text-white">
      <div className="mx-auto flex h-8 items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
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
      </div>
    </div>
  );
}
