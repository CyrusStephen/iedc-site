"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const leftLinks = [
  { label: "Roadmap", href: "/roadmap" },
  { label: "Media", href: "/media" },
];

const rightLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const allLinks = [...leftLinks, ...rightLinks];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "opacity-0 -translate-y-6 pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          {/* LEFT LINKS */}
          <div className="hidden md:flex items-center gap-3">
            {leftLinks.map((link) => (
              <NavLink key={link.href} link={link} pathname={pathname} />
            ))}
          </div>

          {/* CENTER LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-90"
          >
            <Image
              src="/logos/iedc.jpeg"
              alt="IEDC SB College"
              width={36}
              height={36}
              priority
              className="rounded-full"
            />

            <span className="text-sm font-semibold tracking-wide text-white drop-shadow">
              IEDC SBC
            </span>
          </Link>

          {/* RIGHT LINKS */}
          <div className="hidden md:flex items-center gap-3">
            {rightLinks.map((link) => (
              <NavLink key={link.href} link={link} pathname={pathname} />
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden rounded-full border border-white/15 bg-black/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-white/80 backdrop-blur-md transition hover:bg-white/10"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed left-4 right-4 top-20 z-[60] md:hidden transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#080808]/90 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          {allLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
  key={link.href}
  href={link.href}
  onClick={() => setMenuOpen(false)}
  className={`group block rounded-2xl px-5 py-4 text-sm font-medium tracking-wide transition ${
    isActive
      ? "bg-white/[0.12] text-white"
      : "text-white/70 hover:bg-white/[0.08] hover:text-white"
  }`}
>
  <span className="relative inline-block">
    {link.label}

    <span
      className={`absolute left-0 -bottom-1 h-[1.5px] bg-[var(--accent)] transition-all duration-300 ${
        isActive ? "w-full" : "w-0 group-hover:w-full"
      }`}
    />
  </span>
</Link>
            );
          })}
        </div>
      </div>

      {/* PERSISTENT HEADER */}
      <div
        className={`fixed top-0 left-1/2 z-[999] -translate-x-1/2 transition-all duration-500 ${
          scrolled ? "opacity-100 translate-y-3" : "opacity-0 -translate-y-2"
        }`}
      >
        <p className="text-xs md:text-sm font-medium tracking-[0.35em] text-zinc-300/90 backdrop-blur-sm">
          IEDC • SAINT BERCHMANS COLLEGE
        </p>
      </div>
    </>
  );
}

function NavLink({ link, pathname }) {
  const isActive = pathname === link.href;

  return (
    <Link
      href={link.href}
      className={`rounded-full px-4 py-2 text-[15px] font-medium tracking-wide backdrop-blur-md transition-all duration-300 hover:-translate-y-[1px] hover:bg-white/15 hover:text-white ${
        isActive ? "bg-white/[0.16] text-white" : "bg-black/10 text-white/75"
      }`}
    >
      {link.label}
    </Link>
  );
}