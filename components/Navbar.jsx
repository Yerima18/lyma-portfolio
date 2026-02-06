"use client";

import { useState, useEffect } from "react";
import { Icons } from "./Icons";

const SECTIONS = ["about", "skills", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      for (const id of [...SECTIONS].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 200) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8]/85 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-[900px] mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="font-display font-bold text-base text-[#1a1a1a] tracking-tight no-underline"
        >
          LYMA
        </a>
        <div className="flex gap-7 items-center">
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
            className="flex items-center gap-1.5 px-3.5 py-[7px] bg-[#1a1a1a] text-white rounded-lg text-xs font-semibold no-underline hover:opacity-90 transition-opacity"
          >
            {Icons.download} Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
