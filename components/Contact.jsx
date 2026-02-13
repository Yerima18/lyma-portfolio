"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { Icons } from "./Icons";

const FORMSPREE_ID = "xwpkgjbq"; // Replace with your Formspree form ID

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass =
    "w-full px-3.5 py-[11px] border border-[#E0DDD4] rounded-[10px] text-sm font-body text-[#1a1a1a] bg-white placeholder-[#ccc] focus:border-[#1a1a1a] transition-colors";

  return (
    <section id="contact" className="max-w-[900px] mx-auto px-5 sm:px-6 pt-12 sm:pt-16 pb-20 sm:pb-24">
      <FadeIn>
        <p className="text-xs text-[#bbb] font-medium tracking-[0.1em] uppercase mb-5">
          Contact
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <FadeIn delay={0.1}>
          <div>
            <h2 className="font-display text-[24px] sm:text-[28px] font-bold tracking-[-0.03em] leading-[1.3] mb-4">
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
            <div>
              <label htmlFor="contact-name" className="sr-only">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your name"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="sr-only">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="sr-only">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Your message..."
                rows={4}
                required
                className={`${inputClass} resize-y`}
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-fit px-6 py-[11px] bg-[#1a1a1a] text-white rounded-[10px] text-sm font-semibold cursor-pointer hover:opacity-90 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message sent \u2713"}
              {status === "error" && "Failed to send \u2717"}
              {status === "idle" && "Send message"}
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
