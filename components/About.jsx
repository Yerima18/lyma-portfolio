"use client";

import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="max-w-[900px] mx-auto px-5 sm:px-6 py-12 sm:py-16">
      <FadeIn>
        <p className="text-xs text-[#bbb] font-medium tracking-[0.1em] uppercase mb-5">
          About
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
        <FadeIn delay={0.1}>
          <h2 className="font-display text-[24px] sm:text-[28px] font-bold tracking-[-0.03em] leading-[1.3]">
            Building things<br/>for the web.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div>
            <p className="text-[15px] leading-[1.8] text-[#666] font-light mb-4">
              I&apos;m a Management Information Systems student based in Istanbul, Turkey. I enjoy turning complex problems into simple, intuitive interfaces using React and Next.js.
            </p>
            <p className="text-[15px] leading-[1.8] text-[#666] font-light">
              With experience in project management, client relations, and graphic design, I bring a well-rounded perspective to building products. I write clean code, design with purpose, and ship things people actually want to use.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
