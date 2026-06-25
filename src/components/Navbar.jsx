"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "VILLAS & SUITES", href: "/villas" },
    { name: "DINING", href: "/dining" },
    { name: "SPA & WELLNESS", href: "/spa" },
    { name: "FACILITIES", href: "/facilities" },
    { name: "GALLERY", href: "/gallery" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-brand-olive/95 backdrop-blur-xl shadow-2xl h-15 md:h-20"
          : "bg-transparent h-20 md:h-20"
      }`}
    >
      <div className="w-full h-full px-6 md:px-12 xl:px-16 flex items-center justify-between">
        {/* Sisi Kiri: Logo dengan responsif ukuran */}
        <Link href="/" className="flex items-center group flex-shrink-0">
          <div
            className={`relative transition-all duration-500 ease-in-out group-hover:scale-105 ${
              isScrolled
                ? "w-32 h-32 md:w-48 md:h-48"
                : "w-32 h-32 md:w-48 md:h-48"
            }`}
          >
            <Image
              src="/logo.png"
              alt="The Bali Dream Villa Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* Sisi Tengah: Teks Putih Bersih & Centered Vertikal */}
        <div className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-[11px] tracking-[0.25em] font-semibold h-full">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors duration-300 py-1 ${
                isScrolled
                  ? "text-white/90 hover:text-white"
                  : "text-stone-200 hover:text-brand-gold"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Sisi Kanan: Button CTA */}
        <div className="hidden lg:block flex-shrink-0">
          <Link
            href="/book"
            className={`font-bold tracking-[0.2em] text-[11px] py-3 px-6 transition-all duration-300 transform hover:-translate-y-0.5 rounded-none inline-block text-center shadow-md ${
              isScrolled
                ? "bg-brand-gold text-white hover:bg-brand-gold-hover"
                : "bg-brand-olive text-white hover:bg-brand-olive-hover"
            }`}
          >
            BOOK NOW
          </Link>
        </div>

        {/* Tombol Hamburger Mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 text-white focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            <div className="relative w-6 h-5 flex flex-col justify-between items-center">
              <span
                className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition duration-200 ease-in-out ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-[450px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        } bg-brand-olive/98 backdrop-blur-xl border-t border-white/10`}
      >
        <div className="px-8 py-6 space-y-4 text-left tracking-[0.15em] text-xs font-semibold">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2.5 text-white border-b border-white/10 hover:text-brand-dark transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="/book"
              className="block w-full bg-brand-dark text-brand-gold font-bold py-3.5 text-center text-xs tracking-[0.2em]"
              onClick={() => setIsOpen(false)}
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
