import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Full Stack Developer & IT Analyst",
  description: "Portfolio profesional de Full Stack Developer e IT Analyst, con experiencia en software, automatización e integración de sistemas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
