"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Roadmap", href: "/roadmap" },
  { label: "Media", href: "/media" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
   <nav
  className="sticky top-0 z-50 w-full backdrop-blur-2xl"
  style={{
    background: "rgba(10, 10, 10, 0.45)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
  }}
>
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8 md:py-4">
        <Link
  href="/"
  className="z-10 flex items-center gap-3 rounded-full px-2 py-1 transition-colors duration-200"
  aria-label="Go to homepage"
>
  <Image
    src="/logos/iedc.jpeg"
    alt="IEDC SB College"
    width={36}
    height={36}
    priority
    className="rounded-full"
  />

  <span
    className="text-sm font-semibold tracking-wide"
    style={{ color: "var(--text)" }}
  >
    IEDC SB
  </span>
</Link>
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
  key={link.href}
  href={link.href}
  className="text-[15px] font-medium tracking-wide transition-all duration-300 hover:text-white/90 hover:-translate-y-[1px]"
  style={{
  color: pathname === link.href ? "opacity-100" : "opacity-90",
}}
>
  {link.label}
</Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="z-10 rounded-full px-4 py-2 text-[15px] font-medium transition-all duration-300 hover:-translate-y-[1px]"
style={{
  color: "var(--text)",
  border: "1px solid var(--border)",
  background: "rgba(255, 255, 255, 0.03)",
}}
onMouseEnter={(e) => {
  e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
}}
onMouseLeave={(e) => {
  e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
}}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}