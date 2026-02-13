"use client";

import { useState, useEffect } from "react";
import { Icons } from "./Icons";

const SECTIONS = ["about", "skills", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        for (const id of [...SECTIONS].reverse()) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top < 200) {
            setActive(id);
            break;
          }
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8]/85 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-[900px] mx-auto px-5 sm:px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-display font-bold text-base text-[#1a1a1a] tracking-tight no-underline"
        >
          LYMA
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-7 items-center">
          {SECTIONS.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className={`relative text-[13px] font-medium tracking-wide no-underline transition-colors duration-200 pb-1 ${
                active === s
                  ? "text-[#1a1a1a] after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#1a1a1a] after:rounded-sm"
                  : "text-[#999] hover:text-[#1a1a1a]"
              }`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
          <a
            href="/resume.pdf"
            aria-label="Download resume"
            className="flex items-center gap-1.5 px-3.5 py-[7px] bg-[#1a1a1a] text-white rounded-lg text-xs font-semibold no-underline hover:opacity-90 transition-opacity"
          >
            {Icons.download} Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-[1.5px] bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[300px] border-t border-black/5" : "max-h-0"
        }`}
      >
        <div className="max-w-[900px] mx-auto px-5 py-4 flex flex-col gap-3">
          {SECTIONS.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              onClick={closeMenu}
              className={`text-sm font-medium no-underline transition-colors py-1 ${
                active === s ? "text-[#1a1a1a]" : "text-[#999]"
              }`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
          <a
            href="/resume.pdf"
            aria-label="Download resume"
            onClick={closeMenu}
            className="flex items-center gap-1.5 w-fit px-3.5 py-[7px] bg-[#1a1a1a] text-white rounded-lg text-xs font-semibold no-underline hover:opacity-90 transition-opacity mt-1"
          >
            {Icons.download} Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
