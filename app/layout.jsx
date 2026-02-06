import "./globals.css";

export const metadata = {
  title: "Lafia Adam Bagri — Frontend Developer",
  description: "Frontend developer building clean, functional web applications with modern tools. Portfolio showcasing projects built with Next.js, React, and more.",
  openGraph: {
    title: "Lafia Adam Bagri — Frontend Developer",
    description: "Frontend developer building clean, functional web applications with modern tools.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Outfit:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain font-body text-[#1a1a1a] antialiased">
        {children}
      </body>
    </html>
  );
}
