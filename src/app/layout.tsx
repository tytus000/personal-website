import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Krzysztof Plutecki — Software Developer & AI Solutions Architect",
  description:
    "Portfolio of Krzysztof Plutecki — software development, project management, and custom enterprise-grade AI solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen bg-background text-foreground font-mono grid-overlay scanlines">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
