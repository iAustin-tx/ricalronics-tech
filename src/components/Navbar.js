"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Corporate top bar */}
      <div className="bg-[#071b33] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-6 py-2 text-xs sm:flex-row">
          <p>
            Corporate RC Number:{" "}
            <span className="font-semibold text-cyan-400">RC-9225473</span>
          </p>

          <a
            href="tel:+2349059630783"
            className="transition hover:text-cyan-400"
          >
            +234 905 963 0783
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex h-44 max-w-7xl items-center justify-between px-6">
          {/* Brand */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/ricalronics-main-logo-transparent.png"
              alt="Ricalronics Tech Ltd."
              width={400}
              height={250}
              priority
              className="h-[170px] w-[440px] max-w-full object-contain"
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
            <Link href="/" className="hover:text-cyan-600">
              Home
            </Link>

            <Link href="#about" className="hover:text-cyan-600">
              About
            </Link>

            <Link href="#services" className="hover:text-cyan-600">
              Services
            </Link>

            <Link href="#solutions" className="hover:text-cyan-600">
              Solutions
            </Link>

            <Link href="#projects" className="hover:text-cyan-600">
              Projects
            </Link>

            <Link href="#software" className="hover:text-cyan-600">
              Software
            </Link>

            <Link href="#contact" className="hover:text-cyan-600">
              Contact
            </Link>

            <Link
              href="#contact"
              className="rounded-lg bg-[#0b2545] px-5 py-3 font-semibold text-white transition hover:bg-cyan-600"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-2xl text-[#0b2545] lg:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-6 py-5 lg:hidden">
            <div className="flex flex-col gap-4 font-medium text-slate-700">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>

              <Link href="#about" onClick={() => setMenuOpen(false)}>
                About
              </Link>

              <Link href="#services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>

              <Link href="#solutions" onClick={() => setMenuOpen(false)}>
                Solutions
              </Link>

              <Link href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>

              <Link href="#software" onClick={() => setMenuOpen(false)}>
                Software
              </Link>

              <Link href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>

              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg bg-[#0b2545] px-5 py-3 text-center text-white"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
