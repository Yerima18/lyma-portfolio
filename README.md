# lafia.dev

My personal portfolio website built with Next.js and Tailwind CSS.

**Live:** [lyma-portfolio.vercel.app](https://lyma-portfolio.vercel.app/)

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Sora + Outfit fonts (via `next/font`)
- Formspree (contact form)
- Deployed on Vercel

## Features

- Responsive design with mobile hamburger menu
- Scroll-triggered fade-in animations
- Working contact form with loading/success/error states
- SEO optimized (OpenGraph, Twitter cards, JSON-LD, sitemap)
- Accessible (aria-labels, screen reader support, `prefers-reduced-motion`)
- Grain texture overlay with smooth scroll

## Sections

- Hero with social links
- About me
- Skills / tech stack
- Projects with live demos & source links
- Contact form (Formspree)
- Resume download

## Getting Started

```bash
git clone https://github.com/Yerima18/lyma-portfolio.git
cd lyma-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Setup

1. **Contact form** — Create a form at [formspree.io](https://formspree.io), then replace the ID in `components/Contact.jsx`:
   ```js
   const FORMSPREE_ID = "your_form_id";
   ```

2. **Site URL** — Update `SITE_URL` in `app/layout.jsx` and `app/sitemap.js` with your deployed domain.

## Deployment

Push to GitHub and import on [Vercel](https://vercel.com) — no env vars needed.

---

Built by [Lafia Adam Bagri](https://github.com/Yerima18)
