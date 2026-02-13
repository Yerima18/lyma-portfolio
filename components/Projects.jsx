"use client";

import FadeIn from "./FadeIn";
import { Icons } from "./Icons";

const PROJECTS = [
  {
    title: "SpendWise",
    desc: "Personal expense tracker with dashboard analytics, dark mode, and CSV export. Full authentication with NextAuth.js and PostgreSQL database.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "NextAuth", "Tailwind CSS", "Recharts"],
    live: "https://spendwise-five-tau.vercel.app/login",
    github: "https://github.com/Yerima18/spendwise",
  },
  {
    title: "Univers Muslim",
    desc: "WhatsApp-based ordering system for small businesses. Multi-product cart, auto country dial codes, and pre-filled WhatsApp messages for instant ordering.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp API"],
    live: "https://universmuslim-web.vercel.app",
    github: "https://github.com/Yerima18/universmuslim-web",
  },
  {
    title: "MIS Business Analytics Dashboard",
    desc: "A comprehensive dashboard for managing and analyzing business data with interactive charts and real-time updates.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Mock Data", "React"],
    live: "https://mis-business-analytics-dashboard.vercel.app/",
    github: "https://github.com/Yerima18/mis-business-analytics-dashboard",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-[900px] mx-auto px-5 sm:px-6 py-12 sm:py-16">
      <FadeIn>
        <p className="text-xs text-[#bbb] font-medium tracking-[0.1em] uppercase mb-5">
          Projects
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 className="font-display text-[24px] sm:text-[28px] font-bold tracking-[-0.03em] mb-7 sm:mb-9">
          Selected work
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {PROJECTS.map((p, i) => (
          <FadeIn key={p.title} delay={0.1 + i * 0.1}>
            <div className="bg-white border border-[#ECEAE4] rounded-[14px] p-5 sm:p-7 flex flex-col h-full hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="flex justify-between items-start mb-3.5">
                <h3 className="font-display text-lg font-bold tracking-[-0.02em]">
                  {p.title}
                </h3>
                <div className="flex gap-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} source code on GitHub`}
                      className="text-[#999] hover:text-[#1a1a1a] transition-colors"
                    >
                      {Icons.github}
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} live demo`}
                      className="text-[#999] hover:text-[#1a1a1a] transition-colors"
                    >
                      {Icons.external}
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm leading-[1.65] text-[#888] font-light mb-5 flex-1">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-[#F5F4F0] rounded-md text-[11px] font-medium text-[#888] tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
