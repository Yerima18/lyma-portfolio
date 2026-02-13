"use client";

import FadeIn from "./FadeIn";
import { Icons } from "./Icons";

export default function Hero() {
  return (
    <section className="max-w-[900px] mx-auto px-5 sm:px-6 pt-[120px] sm:pt-[140px] pb-14 sm:pb-20">
      <FadeIn>
        <p className="font-body text-sm text-[#999] font-normal tracking-[0.06em] uppercase mb-4">
          Frontend Developer
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h1 className="font-display text-[34px] sm:text-[42px] md:text-[52px] font-bold leading-[1.1] tracking-[-0.04em] text-[#1a1a1a] mb-5 max-w-[600px]">
          Hi, I&apos;m Lafia<br/>Adam Bagri
        </h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="text-[15px] sm:text-[17px] leading-[1.7] text-[#666] max-w-[520px] font-light">
          I build clean, functional web applications with modern tools.
          Focused on creating user experiences that feel intentional and polished.
        </p>
      </FadeIn>
      <FadeIn delay={0.3}>
        <div className="flex flex-wrap gap-3 mt-8 items-center">
          <a
            href="#projects"
            className="flex items-center gap-2 px-[22px] py-[11px] bg-[#1a1a1a] text-white rounded-[10px] text-sm font-semibold no-underline hover:opacity-90 transition-opacity"
          >
            View projects {Icons.arrow}
          </a>
          <a
            href="https://github.com/Yerima18"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-[18px] py-[11px] border border-[#E0DDD4] rounded-[10px] text-sm font-medium text-[#666] no-underline hover:border-[#ccc] transition-colors"
          >
            {Icons.github} GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lafia-adam-bagri-1b0a73263/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex items-center px-[11px] py-[11px] border border-[#E0DDD4] rounded-[10px] text-[#666] no-underline hover:border-[#ccc] transition-colors"
          >
            {Icons.linkedin}
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
