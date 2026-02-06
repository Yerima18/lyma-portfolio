"use client";

import FadeIn from "./FadeIn";

const SKILLS = [
  { category: "Frontend", items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Prisma", "REST APIs", "PostgreSQL", "SQLite"] },
  { category: "Tools", items: ["Git", "Vercel", "VS Code", "Figma", "Postman"] },
  { category: "Concepts", items: ["Responsive Design", "Authentication", "MIS", "Agile"] },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-[900px] mx-auto px-6 py-16">
      <FadeIn>
        <p className="text-xs text-[#bbb] font-medium tracking-[0.1em] uppercase mb-5">
          Skills
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 className="font-display text-[28px] font-bold tracking-[-0.03em] mb-9">
          Tech I work with
        </h2>
      </FadeIn>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {SKILLS.map((group, i) => (
          <FadeIn key={group.category} delay={0.1 + i * 0.08}>
            <div>
              <p className="text-[11px] text-[#bbb] font-semibold tracking-[0.08em] uppercase mb-3">
                {group.category}
              </p>
              <div className="flex flex-col gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-[7px] bg-white border border-[#ECEAE4] rounded-lg text-[13px] text-[#555] cursor-default hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all duration-200"
                  >
                    {item}
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
