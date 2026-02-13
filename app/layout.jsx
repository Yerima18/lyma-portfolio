import "./globals.css";
import { Sora, Outfit } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
  display: "swap",
});

const SITE_URL = "https://lafia-portfolio.vercel.app";

export const metadata = {
  title: "Lafia Adam Bagri — Frontend Developer",
  description:
    "Frontend developer building clean, functional web applications with modern tools. Portfolio showcasing projects built with Next.js, React, and more.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Lafia Adam Bagri — Frontend Developer",
    description:
      "Frontend developer building clean, functional web applications with modern tools.",
    url: SITE_URL,
    siteName: "Lafia Adam Bagri",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lafia Adam Bagri — Frontend Developer",
    description:
      "Frontend developer building clean, functional web applications with modern tools.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Lafia Adam Bagri",
              url: SITE_URL,
              jobTitle: "Frontend Developer",
              sameAs: [
                "https://github.com/Yerima18",
                "https://www.linkedin.com/in/lafia-adam-bagri-1b0a73263/",
              ],
            }),
          }}
        />
      </head>
      <body className={`grain font-body text-[#1a1a1a] antialiased`}>
        {children}
      </body>
    </html>
  );
}
