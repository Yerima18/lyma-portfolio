"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { Icons } from "./Icons";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, connect to a service like Formspree, EmailJS, or your own API
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputClass =
    "w-full px-3.5 py-[11px] border border-[#E0DDD4] rounded-[10px] text-sm font-body text-[#1a1a1a] bg-white placeholder-[#ccc] focus:border-[#1a1a1a] transition-colors";

  return (
    <section id="contact" className="max-w-[900px] mx-auto px-6 pt-16 pb-24">
      <FadeIn>
        <p className="text-xs text-[#bbb] font-medium tracking-[0.1em] uppercase mb-5">
          Contact
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <FadeIn delay={0.1}>
          <div>
            <h2 className="font-display text-[28px] font-bold tracking-[-0.03em] leading-[1.3] mb-4">
              Let&apos;s work<br/>together.
            </h2>
            <p className="text-[15px] leading-[1.7] text-[#888] font-light mb-7">
              Have a project in mind or just want to say hi? Drop me a message and I&apos;ll get back to you.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:adambagrilafia@gmail.com"
                className="flex items-center gap-2.5 text-[#666] no-underline text-sm hover:text-[#1a1a1a] transition-colors"
              >
                {Icons.mail} adambagrilafia@gmail.com
              </a>
              <a
                href="https://github.com/Yerima18"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#666] no-underline text-sm hover:text-[#1a1a1a] transition-colors"
              >
                {Icons.github} github.com/Yerima18
              </a>
              <a
                href="https://www.linkedin.com/in/lafia-adam-bagri-1b0a73263/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#666] no-underline text-sm hover:text-[#1a1a1a] transition-colors"
              >
                {Icons.linkedin} LinkedIn
              </a>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            <input
              type="text"
              placeholder="Your name"
              required
              className={inputClass}
            />
            <input
              type="email"
              placeholder="your@email.com"
              required
              className={inputClass}
            />
            <textarea
              placeholder="Your message..."
              rows={4}
              required
              className={`${inputClass} resize-y`}
            />
            <button
              type="submit"
              className="w-fit px-6 py-[11px] bg-[#1a1a1a] text-white rounded-[10px] text-sm font-semibold cursor-pointer hover:opacity-90 hover:-translate-y-0.5 transition-all"
            >
              {sent ? "Message sent ✓" : "Send message"}
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
